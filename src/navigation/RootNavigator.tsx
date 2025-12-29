import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";

export function RootNavigator() {
  return (
    <>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: "#fcfcfd" }}> */}
      <PaperProvider>
        <Stack
          initialRouteName="(tabs)"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </PaperProvider>
      {/* </SafeAreaView> */}
      <StatusBar barStyle={"dark-content"} />
    </>
  );
}
