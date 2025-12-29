import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function RootNavigator() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fcfcfd" }}>
        <Stack
          initialRouteName="(tabs)"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
    </>
  );
}
