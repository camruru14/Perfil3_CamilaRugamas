import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/theme";
import PrimaryButton from "./PrimaryButton";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Algo salió mal</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry ? <PrimaryButton title="Reintentar" onPress={onRetry} /> : null}
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
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.error,
    marginBottom: 8,
  },
  message: {
    fontSize: 15,
    color: colors.muted,
    textAlign: "center",
    marginBottom: 20,
  },
});
