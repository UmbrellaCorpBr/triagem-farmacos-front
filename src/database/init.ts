import { db } from './sqlite'

export function initDatabase() {
    const querys = [
        `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
        `,
        `
        CREATE TABLE IF NOT EXISTS patients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER NOT NULL,
            gender TEXT NOT NULL CHECK(gender IN ('M', 'F'))
        );
        `,
        `
        CREATE TABLE IF NOT EXISTS drugs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            type TEXT NOT NULL,
            risk_group TEXT NOT NULL
        );
        `,
        `
        CREATE TABLE IF NOT EXISTS assessments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INT NOT NULL,
            created_at TEXT NOT NULL,
            FOREIGN KEY (patient_id) REFERENCES patients (id)
        )
        `,
        `
        CREATE TABLE IF NOT EXISTS assessment_drugs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            assessment_id INT NOT NULL,
            drug_id INT NOT NULL,
            dosage TEXT NOT NULL,
            use_frequency TEXT NOT NULL,
            use_until TEXT NOT NULL,
            FOREIGN KEY (assessment_id) REFERENCES assessments (id),
            FOREIGN KEY (drug_id) REFERENCES drugs (id)
        );
        `
    ]

    querys.forEach(query => {db.runSync(query)})
}