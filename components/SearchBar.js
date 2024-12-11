import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SearchBar({ OnSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            OnSearch(query);
            setQuery(""); // Clear the input after search
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                placeholderTextColor="#888"
                value={query}
                onChangeText={setQuery}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
}

// Styles for the SearchBar component
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    button: {
        backgroundColor: "#007BFF",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});
