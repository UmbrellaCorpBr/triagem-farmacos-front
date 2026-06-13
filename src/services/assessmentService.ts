import { db } from '../database/sqlite';
import { AssessmentDrugDetail, AssessmentDrugInput, AssessmentWithDrugs, Drug } from '../database/entities';

export function getPatientAssessments(patient_id: number): AssessmentWithDrugs[] {
    try {
        const assessments = db.getAllSync<{ id: number; created_at: string }>(
            'SELECT id, created_at FROM assessments WHERE patient_id = ? ORDER BY created_at DESC',
            [patient_id]
        );
        return assessments.map(assessment => {
            const drugs = db.getAllSync<AssessmentDrugDetail>(
                `SELECT ad.id, ad.drug_id, d.name as drug_name, d.type as drug_type, d.risk_group,
                        ad.dosage, ad.use_frequency, ad.use_until
                 FROM assessment_drugs ad
                 INNER JOIN drugs d ON d.id = ad.drug_id
                 WHERE ad.assessment_id = ?`,
                [assessment.id]
            );
            return { ...assessment, drugs };
        });
    } catch (error) {
        console.log(error);
        return [];
    }
}

export function getAllDrugs(): Drug[] {
    try {
        return db.getAllSync('SELECT * FROM drugs') as Drug[];
    } catch (error) {
        console.log(error);
        return [];
    }
}

export function saveAssessmentWithDrugs(patient_id: number, drugs: AssessmentDrugInput[]): boolean {
    try {
        db.withTransactionSync(() => {
            const created_at = new Date().toISOString();
            db.runSync(
                'INSERT INTO assessments (patient_id, created_at) VALUES (?, ?)',
                [patient_id, created_at]
            );
            const result = db.getFirstSync<{ id: number }>('SELECT last_insert_rowid() as id');
            if (!result) throw new Error('Failed to insert assessment');
            const assessment_id = result.id;

            drugs.forEach(drug => {
                db.runSync(
                    'INSERT INTO assessment_drugs (assessment_id, drug_id, dosage, use_frequency, use_until) VALUES (?, ?, ?, ?, ?)',
                    [assessment_id, drug.drug_id, drug.dosage, drug.use_frequency, drug.use_until]
                );
            });
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}