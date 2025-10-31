"use client"

import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { addMovie, updateMovie } from "../database/db"

export default function AddEditScreen({ navigation, route }) {
  const movie = route.params?.movie
  const isEditing = !!movie

  const [title, setTitle] = useState(movie?.title || "")
  const [director, setDirector] = useState(movie?.director || "")
  const [year, setYear] = useState(movie?.year?.toString() || "")
  const [rating, setRating] = useState(movie?.rating?.toString() || "")

  const validateForm = () => {
    if (!title.trim()) {
      Alert.alert("Error", "El título es obligatorio")
      return false
    }
    if (!director.trim()) {
      Alert.alert("Error", "El director es obligatorio")
      return false
    }
    if (!year.trim() || isNaN(year) || Number.parseInt(year) < 1800 || Number.parseInt(year) > 2100) {
      Alert.alert("Error", "Ingresa un año válido (1800-2100)")
      return false
    }
    if (!rating.trim() || isNaN(rating) || Number.parseFloat(rating) < 0 || Number.parseFloat(rating) > 10) {
      Alert.alert("Error", "Ingresa una calificación válida (0-10)")
      return false
    }
    return true
  }

  const handleSave = async () => {
    if (!validateForm()) return

    try {
      if (isEditing) {
        await updateMovie(movie.id, title.trim(), director.trim(), Number.parseInt(year), Number.parseFloat(rating))
        Alert.alert("Éxito", "Película actualizada correctamente")
      } else {
        await addMovie(title.trim(), director.trim(), Number.parseInt(year), Number.parseFloat(rating))
        Alert.alert("Éxito", "Película agregada correctamente")
      }
      navigation.goBack()
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar la película")
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.form}>
          <Text style={styles.label}>Título *</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Ej: El Padrino"
            placeholderTextColor="#9ca3af"
          />

          <Text style={styles.label}>Director *</Text>
          <TextInput
            style={styles.input}
            value={director}
            onChangeText={setDirector}
            placeholder="Ej: Francis Ford Coppola"
            placeholderTextColor="#9ca3af"
          />

          <Text style={styles.label}>Año *</Text>
          <TextInput
            style={styles.input}
            value={year}
            onChangeText={setYear}
            placeholder="Ej: 1972"
            keyboardType="numeric"
            placeholderTextColor="#9ca3af"
          />

          <Text style={styles.label}>Calificación (0-10) *</Text>
          <TextInput
            style={styles.input}
            value={rating}
            onChangeText={setRating}
            placeholder="Ej: 9.2"
            keyboardType="decimal-pad"
            placeholderTextColor="#9ca3af"
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>{isEditing ? "Actualizar" : "Guardar"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  scrollContent: {
    flexGrow: 1,
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#111827",
  },
  button: {
    backgroundColor: "#6366f1",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#d1d5db",
  },
  cancelButtonText: {
    color: "#6b7280",
    fontSize: 18,
    fontWeight: "600",
  },
})
