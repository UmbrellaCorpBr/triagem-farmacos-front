import { db } from '../database/sqlite';

export function getPatients() {
  try {
    return db.getAllSync(
      'SELECT * FROM patients'
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