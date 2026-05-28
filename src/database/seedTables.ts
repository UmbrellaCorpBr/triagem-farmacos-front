import { db } from './sqlite'

export function seedTables() {
    seedUsers();
    seedDrugs();
}

function seedUsers() {
    db.runSync(
        `
        INSERT OR IGNORE INTO users (email, password, created_at)
        VALUES (?, ?, ?);
        `,
        ['guilherme@email.com', '123456', new Date().toISOString()],
        
    )
}

function seedDrugs() {
    let query = 'INSERT OR IGNORE INTO drugs (name, type, risk_group) VALUES'

    const drugs = [
        ["Fluoxetina", "ISRS", "Serotoninérgico"],
        ["Sertralina", "ISRS", "Serotoninérgico"],
        ["Escitalopram", "ISRS", "Serotoninérgico"],
        ["Paroxetina", "ISRS", "Serotoninérgico"],
        ["Duloxetina", "IRSN", "Serotoninérgico + Adrenérgico"],
        ["Venlafaxina", "IRSN", "Serotoninérgico + Adrenérgico"],
        ["Amitriptilina", "Tricíclico", "Serotoninérgico + Sedativo"],
        ["Imipramina", "Tricíclico", "Serotoninérgico + Sedativo"],
        ["Clomipramina", "Tricíclico", "Serotoninérgico + Sedativo"],
        ["Diazepam", "Benzodiazepínico", "Sedativo / Dependência"],
        ["Clonazepam", "Benzodiazepínico", "Sedativo / Dependência"],
        ["Alprazolam", "Benzodiazepínico", "Sedativo / Dependência"],
        ["Lorazepam", "Benzodiazepínico", "Sedativo / Dependência"],
        ["Bromazepam", "Benzodiazepínico", "Sedativo / Dependência"],
        ["Midazolam", "Benzodiazepínico", "Sedativo / Dependência"],
        ["Risperidona", "Antipsicótico", "Sedativo"],
        ["Haloperidol", "Antipsicótico", "Sedativo"],
        ["Quetiapina", "Antipsicótico", "Sedativo"],
        ["Olanzapina", "Antipsicótico", "Sedativo"],
        ["Clozapina", "Antipsicótico", "Sedativo"]
    ]

    query += drugs.map(() => "(?, ?, ?)").join(", ")

    const drugsParams = drugs.flat()

    db.runSync(query, drugsParams);
}