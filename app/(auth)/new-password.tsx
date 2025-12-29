import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function NewPasswordRoute() {
  const router = useRouter();

  function handleChangePassword() {
    router.push("/(auth)/success-password");
  }
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fcfcfd",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          marginHorizontal: "auto",
          gap: 32,
        }}
      >
        {/* Text headers */}
        <View style={{ gap: 8, marginTop: 52, width: "100%" }}>
          <Text
            variant="headlineSmall"
            style={{ color: "#1F2A37", fontWeight: 700 }}
          >
            Create New Password
          </Text>
          <Text style={{ color: "#9DA4AE", fontWeight: 400 }}>
            Please enter a new password to change
          </Text>
        </View>

        <View style={{ width: "100%", gap: 16 }}>
          <TextInput
            mode="outlined"
            label="New Password"
            activeOutlineColor="#6941C6"
            textContentType="password"
            secureTextEntry={true}
            textColor="#1F2A37"
            style={{ backgroundColor: "white" }}
            left={<TextInput.Icon icon="lock" />}
          />
          <TextInput
            mode="outlined"
            label="Confirm Password"
            activeOutlineColor="#6941C6"
            textContentType="password"
            secureTextEntry={true}
            textColor="#1F2A37"
            style={{ backgroundColor: "white" }}
            left={<TextInput.Icon icon="lock" />}
          />

          {/* Checkbox */}

          <Button
            mode="contained"
            textColor="#FFFFFF"
            rippleColor="rgba(0, 0, 0, 0.2)"
            style={styles.nextButton}
            onPress={handleChangePassword}
          >
            Change Password
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: "#FE456A",
    borderRadius: 8,
    paddingVertical: 6,
    position: "relative",
    top: 33,
  },
});
