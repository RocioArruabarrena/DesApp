import * as SQLite from "expo-sqlite"

let db

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
    console.error("Error al agregar pelicula:", error)
    throw error
  }
}


export const getAllMovies = async () => {
  try {
    const movies = await db.getAllAsync("SELECT * FROM movies ORDER BY id DESC")
    return movies
  } catch (error) {
    console.error("Error al obtener peliculas:", error)
    return []
  }
}

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
    console.error("Error al actualizar pelicula:", error)
    throw error
  }
}

export const deleteMovie = async (id) => {
  try {
    await db.runAsync("DELETE FROM movies WHERE id = ?", [id])
  } catch (error) {
    console.error("Error al eliminar pelicula:", error)
    throw error
  }
}
