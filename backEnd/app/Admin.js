import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import KeyView from '../components/KeyView'; 

export default function AdminPage() {
    return (
        <KeyView>
            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Admin Page</Text>

                {/* Add Item Section */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Add Item</Text>
                    <TextInput
                        placeholder="Enter item name"
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                    />
                    <TextInput
                        placeholder="Enter item description"
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                    />
                    <TextInput
                        placeholder="Enter item price"
                        keyboardType="numeric"
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                    />
                    <Button
                        title="Add Item"
                        onPress={() => {}}
                        color="#daa520" // Set button color to goldenrod
                    />
                </View>

                {/* Update Item Section */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Update Item</Text>
                    <TextInput
                        placeholder="Enter item ID to update"
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                    />
                    <TextInput
                        placeholder="Enter updated item name"
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                    />
                    <TextInput
                        placeholder="Enter updated item description"
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                    />
                    <TextInput
                        placeholder="Enter updated item price"
                        keyboardType="numeric"
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                    />
                    <Button
                        title="Update Item"
                        onPress={() => {}}
                        color="#daa520" // Set button color to goldenrod
                    />
                </View>

                {/* Delete Item Section */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Delete Item</Text>
                    <TextInput
                        placeholder="Enter item ID to delete"
                        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                    />
                    <Button
                        title="Delete Item"
                        onPress={() => {}}
                        color="#daa520" // Set button color to goldenrod
                    />
                </View>
            </View>
        </KeyView>
    );
}
