import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/theme";

export default function Card({ title, image, description }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: "100%",
    height: 220,
    backgroundColor: "#DDE3EC",
  },
  body: {
    padding: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.muted,
  },
});
