import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fcfcfd" }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      {/* <StatusBar barStyle={"dark-content"} /> */}
    </SafeAreaView>
  );
}
