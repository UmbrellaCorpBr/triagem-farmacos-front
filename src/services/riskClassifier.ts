import { Drug } from '../database/entities';

export type RiskLevel = 'green' | 'yellow' | 'red';

export type RiskResult = {
    level: RiskLevel;
    label: string;
    reason: string;
};

const SEROTONERGIC = 'Serotoninérgico';
const SEDATIVE = 'Sedativo';
const ADRENERGIC = 'Adrenérgico';
const DEPENDENCE = 'Dependência';

function hasSystem(riskGroup: string, system: string): boolean {
    return riskGroup.includes(system);
}

export function classifyAssessmentRisk(drugs: Drug[]): RiskResult {
    if (drugs.length === 0) {
        return { level: 'green', label: 'Verde', reason: 'Nenhum medicamento na avaliação.' };
    }

    const serotonergicCount = drugs.filter(d => hasSystem(d.risk_group, SEROTONERGIC)).length;
    const sedativeCount = drugs.filter(d => hasSystem(d.risk_group, SEDATIVE)).length;
    const hasDependence = drugs.some(d => hasSystem(d.risk_group, DEPENDENCE));
    const hasAdrenergicSerotonergic = drugs.some(
        d => hasSystem(d.risk_group, SEROTONERGIC) && hasSystem(d.risk_group, ADRENERGIC)
    );

    // VERMELHO: risco elevado de evento adverso grave

    // Três ou mais medicamentos serotoninérgicos aumentam drasticamente o risco de síndrome serotoninérgica
    if (serotonergicCount >= 3) {
        return { level: 'red', label: 'Vermelho', reason: 'Alto risco de síndrome serotoninérgica (3 ou mais medicamentos serotoninérgicos).' };
    }

    // Medicamento serotoninérgico + adrenérgico combinado com outro serotoninérgico potencializa
    // tanto a síndrome serotoninérgica quanto crises hipertensivas
    if (hasAdrenergicSerotonergic && serotonergicCount >= 2) {
        return { level: 'red', label: 'Vermelho', reason: 'Combinação de medicamento serotoninérgico + adrenérgico com outro serotoninérgico — alto risco de síndrome serotoninérgica.' };
    }

    // Dois ou mais sedativos associados a um serotoninérgico causam depressão acentuada do SNC
    if (sedativeCount >= 2 && serotonergicCount >= 1) {
        return { level: 'red', label: 'Vermelho', reason: 'Múltiplos sedativos combinados com serotoninérgico — risco elevado de depressão do SNC.' };
    }

    // AMARELO: risco moderado, requer monitoramento

    // Dois serotoninérgicos já configuram risco de síndrome serotoninérgica leve a moderada
    if (serotonergicCount >= 2) {
        return { level: 'yellow', label: 'Amarelo', reason: 'Dois ou mais medicamentos serotoninérgicos — risco de síndrome serotoninérgica.' };
    }

    // Qualquer medicamento com potencial de dependência exige atenção independente dos demais
    if (hasDependence) {
        return { level: 'yellow', label: 'Amarelo', reason: 'Medicamento com potencial de dependência presente na avaliação.' };
    }

    // Sedativo associado a serotoninérgico pode causar depressão do SNC mesmo em doses terapêuticas
    if (sedativeCount >= 1 && serotonergicCount >= 1) {
        return { level: 'yellow', label: 'Amarelo', reason: 'Combinação de sedativo com serotoninérgico — monitorar depressão do SNC.' };
    }

    return { level: 'green', label: 'Verde', reason: 'Nenhuma interação de risco identificada.' };
}
