import { db } from '../database/sqlite';

export function getPatients() {
  try {
    return db.getAllSync(
      `WITH last_assessments AS (
          SELECT patient_id, risk_level
          FROM assessments
          WHERE id IN (
              SELECT MAX(id) FROM assessments GROUP BY patient_id
          )
      )
      SELECT p.*, la.risk_level AS last_risk_level
      FROM patients p
      LEFT JOIN last_assessments la ON la.patient_id = p.id`
    );
  } catch (error) {
    console.log(error);
    return [];
  }
}

export function savePatient(patient: { nome: string; idade: number; sexo: string}) {

  try {

    db.runSync(
      `
        INSERT INTO patients
        (name, age, gender)
        VALUES (?, ?, ?)
      `,
      [
        patient.nome,
        patient.idade,
        patient.sexo
      ]
    );

    return true;

  } catch (error) {

    console.log(error);
    return false;
  }
}