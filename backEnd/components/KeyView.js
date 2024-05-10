import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

export default function KeyView({ children }) {
  return (
    <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
