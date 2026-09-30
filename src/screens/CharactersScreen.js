import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { colors } from "../constants/theme";
import useCharacters from "../hooks/useCharacters";

export default function CharactersScreen() {
  const { characters, loading, error, refetch } = useCharacters();

  if (loading) {
    return <Loading message="Cargando personajes..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    padding: 16,
  },
});
