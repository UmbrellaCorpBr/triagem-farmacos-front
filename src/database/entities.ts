export type Patient = {
    id: number;
    name: number;
    age: number;
    gender: string;
};

export type Drug = {
    id: number;
    patient_id: number;
    created_at: string;
}

export type Assessment = {
    id: number;
    patient_id: number;
    created_at: Text;
}

export type AssessmentDrug = {
    id: number;
    assessment_id: number;
    drug_id: number;
    dosage: string;
    use_frequency: string;
    use_until: string;
}