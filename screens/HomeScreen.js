import { useState, useEffect, useCallback } from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { initDatabase, getAllMovies, deleteMovie } from "/database/db"
import MovieCard from "/components/MovieCard"

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initDatabase()
  }, [])

  const loadMovies = async () => {
    setLoading(true)
    const data = await getAllMovies()
    setMovies(data)
    setLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      loadMovies()
    }, []),
  )

  const handleDelete = (id, title) => {
    Alert.alert("Confirmar eliminacion", `¿Estás seguro que queres eliminar "${title}"?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          await deleteMovie(id)
          loadMovies()
        },
      },
    ])
  }

  const handleEdit = (movie) => {
    navigation.navigate("AddEdit", { movie })
  }

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {movies.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay peliculas guardadas</Text>
          <Text style={styles.emptySubtext}>Presiona el boton + para agregar una</Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item.id, item.title)}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("AddEdit")}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6b7280",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: "#9ca3af",
    textAlign: "center",
  },
  listContent: {
    padding: 16,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6366f1",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabText: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
  },
})
