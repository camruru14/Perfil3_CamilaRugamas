import { StyleSheet, Text, View } from "react-native";
import InfoRow from "../components/InfoRow";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../constants/theme";
import useStudent from "../hooks/useStudent";

export default function StudentScreen({ navigation }) {
  const { fields } = useStudent();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.school}>Instituto Técnico Ricaldone</Text>
        <Text style={styles.subtitle}>Desarrollo de Software · Módulo 5</Text>
      </View>

      <View style={styles.card}>
        {fields.map((field) => (
          <InfoRow key={field.label} label={field.label} value={field.value} />
        ))}
      </View>

      <PrimaryButton
        title="Ver personajes"
        onPress={() => navigation.navigate("Characters")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  school: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.primary,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: colors.muted,
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginBottom: 28,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
});
