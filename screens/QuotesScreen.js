import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ActivityIndicator } from "react-native";

export default function QuotesScreen() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();

      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      setQuote("Failed to load quote");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.quote}>"{quote}"</Text>
          <Text style={styles.author}>- {author}</Text>
        </>
      )}

      <Button title="New Quote" onPress={fetchQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  quote: { fontSize: 18, marginBottom: 10, textAlign: "center" },
  author: { textAlign: "center", marginBottom: 20 },
});