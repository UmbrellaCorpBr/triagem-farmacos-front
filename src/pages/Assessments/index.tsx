import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
    TextInput,
    Modal,
    FlatList,
    Pressable,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { createStyles } from './styles';
import { useTheme } from '../../global/themes';
import { getPatients } from '../../services/patientService';
import { getAllDrugs, saveAssessmentWithDrugs } from '../../services/assessmentService';
import { RootStackParamList } from '../../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Drug, Patient } from '../../database/entities';

function formatDateDisplay(date: Date): string {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

function formatDateISO(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function getTomorrow(): Date {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    d.setHours(0, 0, 0, 0);
    return d;
}

type DrugFormItem = {
    drug: Drug | null;
    dosage: string;
    use_frequency: string;
    use_until: Date | null;
    continuous_use: boolean;
};

export default function AssessmentRegisterScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'CreateAssessments'>>();
    const route = useRoute<RouteProp<RootStackParamList, 'CreateAssessments'>>();
    const theme = useTheme();
    const styles = createStyles(theme);

    const [patients, setPatients] = useState<Patient[]>([]);
    const [drugs, setDrugs] = useState<Drug[]>([]);
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [drugItems, setDrugItems] = useState<DrugFormItem[]>([]);

    const [patientModalVisible, setPatientModalVisible] = useState(false);
    const [drugModalVisible, setDrugModalVisible] = useState(false);
    const [editingDrugIndex, setEditingDrugIndex] = useState<number | null>(null);
    const [datePickerIndex, setDatePickerIndex] = useState<number | null>(null);

    useEffect(() => {
        const allPatients = getPatients() as Patient[];
        setPatients(allPatients);
        setDrugs(getAllDrugs());

        const patientId = route.params?.patientId;
        if (patientId) {
            const preSelected = allPatients.find(p => p.id === patientId) ?? null;
            setSelectedPatient(preSelected);
        }
    }, []);

    function handleAddDrug() {
        setDrugItems(prev => [...prev, { drug: null, dosage: '', use_frequency: '', use_until: null, continuous_use: false }]);
    }

    function handleToggleContinuousUse(index: number) {
        setDrugItems(prev =>
            prev.map((item, i) => i === index
                ? { ...item, continuous_use: !item.continuous_use, use_until: null }
                : item
            )
        );
    }

    function handleRemoveDrug(index: number) {
        setDrugItems(prev => prev.filter((_, i) => i !== index));
    }

    function handleSelectDrug(drug: Drug) {
        if (editingDrugIndex === null) return;
        const alreadyAdded = drugItems.some(
            (item, i) => i !== editingDrugIndex && item.drug?.id === drug.id
        );
        if (alreadyAdded) {
            Alert.alert('Medicamento repetido', `${drug.name} já foi adicionado à lista.`);
            return;
        }
        setDrugItems(prev =>
            prev.map((item, i) => i === editingDrugIndex ? { ...item, drug } : item)
        );
        setDrugModalVisible(false);
        setEditingDrugIndex(null);
    }

    function handleUpdateDrugField(index: number, field: keyof Omit<DrugFormItem, 'drug' | 'use_until'>, value: string) {
        setDrugItems(prev =>
            prev.map((item, i) => i === index ? { ...item, [field]: value } : item)
        );
    }

    function handleDateChange(event: DateTimePickerEvent, selectedDate?: Date) {
        if (Platform.OS === 'android') {
            setDatePickerIndex(null);
            if (event.type === 'set' && selectedDate !== undefined && datePickerIndex !== null) {
                setDrugItems(prev =>
                    prev.map((item, i) => i === datePickerIndex ? { ...item, use_until: selectedDate } : item)
                );
            }
        } else if (selectedDate !== undefined && datePickerIndex !== null) {
            setDrugItems(prev =>
                prev.map((item, i) => i === datePickerIndex ? { ...item, use_until: selectedDate } : item)
            );
        }
    }

    function createAssessment() {
        const success = saveAssessmentWithDrugs(selectedPatient!.id, drugItems.map(item => ({
            drug_id: item.drug!.id,
            dosage: item.dosage,
            use_frequency: item.use_frequency,
            use_until: item.continuous_use ? null : formatDateISO(item.use_until!),
        })));

        if (success) {
            Alert.alert('Sucesso', 'Avaliação cadastrada com sucesso.', [
                { text: 'OK', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'InitialPage' }] }) }
            ]);
        } else {
            Alert.alert('Erro', 'Não foi possível salvar a avaliação.');
        }
    }

    function handleSave() {
        if (!selectedPatient) {
            Alert.alert('Campo obrigatório', 'Selecione um paciente.');
            return;
        }

        if (drugItems.length === 0) {
            Alert.alert('Medicamentos', 'Adicione ao menos um medicamento.');
            return;
        }

        for (let i = 0; i < drugItems.length; i++) {
            const item = drugItems[i];
            if (!item.drug) {
                Alert.alert('Medicamento incompleto', `Selecione o medicamento do item ${i + 1}.`);
                return;
            }
            if (!item.dosage.trim() || !item.use_frequency.trim()) {
                Alert.alert('Campos obrigatórios', `Preencha todos os campos do medicamento ${i + 1}.`);
                return;
            }
            if (!item.continuous_use && !item.use_until) {
                Alert.alert('Data obrigatória', `Selecione a data de uso do medicamento ${i + 1} ou marque como uso contínuo.`);
                return;
            }
        }

        const hasContinuous = drugItems.some(item => item.continuous_use);
        if (hasContinuous) {
            const names = drugItems
                .filter(item => item.continuous_use)
                .map(item => `• ${item.drug!.name}`)
                .join('\n');
            Alert.alert(
                'Confirmar uso contínuo',
                `Os seguintes medicamentos serão registrados como uso por tempo indeterminado:\n\n${names}\n\nDeseja confirmar?`,
                [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Confirmar', onPress: createAssessment },
                ]
            );
            return;
        }

        createAssessment();
    }

    const tomorrow = getTomorrow();

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Text style={styles.backButtonText}>← Voltar</Text>
                        </TouchableOpacity>
                        <Text style={styles.title}>Cadastro de Avaliações</Text>
                        <Text style={styles.subtitle}>Preencha os dados da avaliação</Text>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>Paciente</Text>
                        <TouchableOpacity
                            style={styles.selector}
                            onPress={() => setPatientModalVisible(true)}
                        >
                            <Text style={selectedPatient ? styles.selectorTextSelected : styles.selectorText}>
                                {selectedPatient ? selectedPatient.name : 'Selecionar paciente'}
                            </Text>
                        </TouchableOpacity>

                        <Text style={[styles.label, { marginTop: 24 }]}>Medicamentos</Text>

                        {drugItems.map((item, index) => (
                            <View key={index} style={styles.drugCard}>
                                <View style={styles.drugCardHeader}>
                                    <TouchableOpacity
                                        style={styles.drugSelector}
                                        onPress={() => {
                                            setEditingDrugIndex(index);
                                            setDrugModalVisible(true);
                                        }}
                                    >
                                        <Text style={item.drug ? styles.selectorTextSelected : styles.selectorText}>
                                            {item.drug ? item.drug.name : 'Selecionar medicamento'}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.removeButton}
                                        onPress={() => handleRemoveDrug(index)}
                                    >
                                        <Text style={styles.removeButtonText}>✕</Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.fieldLabel}>Dosagem</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Ex: 500mg"
                                    value={item.dosage}
                                    onChangeText={v => handleUpdateDrugField(index, 'dosage', v)}
                                />

                                <Text style={styles.fieldLabel}>Frequência de uso</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Ex: 2x ao dia"
                                    value={item.use_frequency}
                                    onChangeText={v => handleUpdateDrugField(index, 'use_frequency', v)}
                                />

                                <TouchableOpacity
                                    style={styles.toggleRow}
                                    onPress={() => handleToggleContinuousUse(index)}
                                    activeOpacity={0.7}
                                >
                                    <View style={[styles.checkbox, item.continuous_use && styles.checkboxActive]}>
                                        {item.continuous_use && <Text style={styles.checkmark}>✓</Text>}
                                    </View>
                                    <Text style={styles.toggleLabel}>Uso contínuo</Text>
                                </TouchableOpacity>

                                {!item.continuous_use && (
                                    <>
                                        <Text style={styles.fieldLabel}>Usar até</Text>
                                        <TouchableOpacity
                                            style={styles.selector}
                                            onPress={() => setDatePickerIndex(index)}
                                        >
                                            <Text style={item.use_until ? styles.selectorTextSelected : styles.selectorText}>
                                                {item.use_until ? formatDateDisplay(item.use_until) : 'Selecionar data'}
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                )}

                                {Platform.OS === 'android' && datePickerIndex === index && (
                                    <DateTimePicker
                                        value={item.use_until ?? tomorrow}
                                        mode="date"
                                        display="calendar"
                                        minimumDate={tomorrow}
                                        onChange={handleDateChange}
                                    />
                                )}
                            </View>
                        ))}

                        <TouchableOpacity style={styles.addDrugButton} onPress={handleAddDrug}>
                            <Text style={styles.addDrugButtonText}>+ Adicionar Medicamento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={handleSave}>
                            <Text style={styles.buttonText}>Cadastrar Avaliação</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Modais de seleção */}
            <Modal visible={patientModalVisible} animationType="slide" transparent>
                <Pressable style={styles.modalOverlay} onPress={() => setPatientModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Selecionar Paciente</Text>
                        <FlatList
                            data={patients}
                            keyExtractor={p => String(p.id)}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalItem}
                                    onPress={() => {
                                        setSelectedPatient(item);
                                        setPatientModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.modalItemText}>{item.name}</Text>
                                    <Text style={styles.modalItemSub}>
                                        {item.age} anos · {item.gender === 'M' ? 'Masculino' : 'Feminino'}
                                    </Text>
                                </TouchableOpacity>
                            )}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                        />
                    </View>
                </Pressable>
            </Modal>

            <Modal visible={drugModalVisible} animationType="slide" transparent>
                <Pressable style={styles.modalOverlay} onPress={() => setDrugModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Selecionar Medicamento</Text>
                        <FlatList
                            data={drugs}
                            keyExtractor={d => String(d.id)}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalItem}
                                    onPress={() => handleSelectDrug(item)}
                                >
                                    <Text style={styles.modalItemText}>{item.name}</Text>
                                    <Text style={styles.modalItemSub}>{item.type} · {item.risk_group}</Text>
                                </TouchableOpacity>
                            )}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                        />
                    </View>
                </Pressable>
            </Modal>

            {/* Date picker para iOS (modal com spinner + botão confirmar) */}
            {Platform.OS === 'ios' && datePickerIndex !== null && (
                <Modal transparent animationType="slide">
                    <Pressable style={styles.modalOverlay} onPress={() => setDatePickerIndex(null)}>
                        <View style={styles.datePickerModal}>
                            <View style={styles.datePickerHeader}>
                                <Text style={styles.datePickerTitle}>Selecionar data</Text>
                                <TouchableOpacity onPress={() => setDatePickerIndex(null)}>
                                    <Text style={styles.datePickerConfirm}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>
                            <DateTimePicker
                                value={drugItems[datePickerIndex]?.use_until ?? tomorrow}
                                mode="date"
                                display="spinner"
                                minimumDate={tomorrow}
                                onChange={handleDateChange}
                            />
                        </View>
                    </Pressable>
                </Modal>
            )}
        </>
    );
}
