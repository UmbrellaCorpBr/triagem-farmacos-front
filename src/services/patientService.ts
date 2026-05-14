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

export function savePatient(patient: { nome: string | number | boolean | Uint8Array<ArrayBufferLike> | null; idade: string | number | boolean | Uint8Array<ArrayBufferLike> | null; sexo: string | number | boolean | Uint8Array<ArrayBufferLike> | null; }) {

  try {

    db.runSync(
      `
        INSERT INTO patients
        (nome, idade, sexo)
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