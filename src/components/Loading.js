import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/theme";

export default function Loading({ message = "Cargando..." }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: colors.muted,
  },
});
