import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function ResetPassword() {
  const router = useRouter();
  const [sentResetCode, setSentResetCode] = useState(false);

  function sendResetCode() {
    if (!sentResetCode) {
      setSentResetCode(true);
    } else {
      router.push("/(auth)/new-password");
    }
  }
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fcfcfd",
      }}
    >
      <Button
        onPress={() => router.back()}
        mode="text"
        textColor="#4D5761"
        style={styles.skipButton}
      >
        <MaterialDesignIcons name="arrow-left" size={25} />
      </Button>
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
        <View style={{ gap: 8, marginTop: 72 }}>
          <Text
            variant="headlineSmall"
            style={{ color: "#1F2A37", fontWeight: 700 }}
          >
            Forgot Password
          </Text>
          <Text style={{ color: "#9DA4AE", fontWeight: 400 }}>
            Enter contact detailsshould we use to reset your password
          </Text>
        </View>

        <View style={{ width: "100%", gap: 16 }}>
          <TextInput
            mode="outlined"
            label="Email"
            activeOutlineColor="#6941C6"
            keyboardType="email-address"
            textColor="#1F2A37"
            disabled={sentResetCode}
            style={{ backgroundColor: "white" }}
            left={<TextInput.Icon icon="email" />}
          />

          {sentResetCode && (
            <View style={{ marginTop: 40 }}>
              <View style={{ flexDirection: "row", gap: 25 }}>
                {[1, 2, 3, 4].map((val) => (
                  <TextInput
                    key={val}
                    mode="outlined"
                    keyboardType="number-pad"
                    textAlign="center"
                    textColor="#1F2A37"
                    maxLength={1}
                    activeOutlineColor="#6941C6"
                    style={{ backgroundColor: "white", textAlign: "center" }}
                  />
                ))}
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 28,
                }}
              >
                <Text
                  style={{
                    color: "#1F2A37",
                    fontWeight: 500,
                    position: "relative",
                    top: 10,
                  }}
                >
                  Didn't Receive code?
                </Text>
                <Button mode="text" textColor="#FE456A">
                  Resend Code
                </Button>
              </View>
            </View>
          )}

          <Button
            mode="contained"
            textColor="#FFFFFF"
            rippleColor="rgba(0, 0, 0, 0.2)"
            style={styles.nextButton}
            onPress={sendResetCode}
          >
            {sentResetCode != true ? "Send Reset Code" : "Verfy"}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  skipButton: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  nextButton: {
    backgroundColor: "#FE456A",
    borderRadius: 8,
    paddingVertical: 6,
    position: "relative",
    top: 23,
  },
});
