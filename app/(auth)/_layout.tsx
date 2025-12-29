import { Stack } from "expo-router";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fcfcfd" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
