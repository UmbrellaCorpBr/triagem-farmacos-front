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

