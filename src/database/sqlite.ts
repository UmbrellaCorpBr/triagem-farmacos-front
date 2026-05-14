import * as SQLite from 'expo-sqlite'

export const db = SQLite.openDatabaseSync('triagem_farmacos.db')