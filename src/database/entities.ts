export type Patient = {
    id: number;
    name: string;
    age: number;
    gender: string;
};

export type Drug = {
    id: number;
    name: string;
    type: string;
    risk_group: string;
}

export type Assessment = {
    id: number;
    patient_id: number;
    created_at: string;
}

export type AssessmentDrug = {
    id: number;
    assessment_id: number;
    drug_id: number;
    dosage: string;
    use_frequency: string;
    use_until: string | null;
}

export type AssessmentDrugInput = {
    drug_id: number;
    dosage: string;
    use_frequency: string;
    use_until: string | null;
};

export type AssessmentDrugDetail = {
    id: number;
    drug_id: number;
    drug_name: string;
    drug_type: string;
    risk_group: string;
    dosage: string;
    use_frequency: string;
    use_until: string | null;
};

export type AssessmentWithDrugs = {
    id: number;
    created_at: string;
    drugs: AssessmentDrugDetail[];
};