import * as SQLite from "expo-sqlite"

let db

// Inicializar la base de datos
export const initDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync("movies.db")

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        director TEXT NOT NULL,
        year INTEGER NOT NULL,
        rating REAL NOT NULL
      );
    `)

    console.log("Base de datos inicializada correctamente")
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error)
  }
}

// CREATE - Agregar una nueva película
export const addMovie = async (title, director, year, rating) => {
  try {
    const result = await db.runAsync("INSERT INTO movies (title, director, year, rating) VALUES (?, ?, ?, ?)", [
      title,
      director,
      year,
      rating,
    ])
    return result.lastInsertRowId
  } catch (error) {
    console.error("Error al agregar película:", error)
    throw error
  }
}

// READ - Obtener todas las películas
export const getAllMovies = async () => {
  try {
    const movies = await db.getAllAsync("SELECT * FROM movies ORDER BY id DESC")
    return movies
  } catch (error) {
    console.error("Error al obtener películas:", error)
    return []
  }
}

// UPDATE - Actualizar una película existente
export const updateMovie = async (id, title, director, year, rating) => {
  try {
    await db.runAsync("UPDATE movies SET title = ?, director = ?, year = ?, rating = ? WHERE id = ?", [
      title,
      director,
      year,
      rating,
      id,
    ])
  } catch (error) {
    console.error("Error al actualizar película:", error)
    throw error
  }
}

// DELETE - Eliminar una película
export const deleteMovie = async (id) => {
  try {
    await db.runAsync("DELETE FROM movies WHERE id = ?", [id])
  } catch (error) {
    console.error("Error al eliminar película:", error)
    throw error
  }
}
