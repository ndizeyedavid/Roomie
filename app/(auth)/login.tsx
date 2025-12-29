import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";

export default function LoginRoute() {
  const [checked, setChecked] = useState(false);

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
        <View style={{ gap: 8, marginTop: 72 }}>
          <Text
            variant="headlineSmall"
            style={{ color: "#1F2A37", fontWeight: 700 }}
          >
            Welcome Back !
          </Text>
          <Text style={{ color: "#9DA4AE", fontWeight: 400 }}>
            Sign in with your email and password or social media to continue
          </Text>
        </View>

        <View style={{ width: "100%", gap: 16 }}>
          <TextInput
            mode="outlined"
            label="Email"
            activeOutlineColor="#6941C6"
            keyboardType="email-address"
            textColor="#1F2A37"
            style={{ backgroundColor: "white" }}
            left={<TextInput.Icon icon="email" />}
          />

          <TextInput
            mode="outlined"
            label="Password"
            activeOutlineColor="#6941C6"
            textContentType="password"
            secureTextEntry={true}
            textColor="#1F2A37"
            style={{ backgroundColor: "white" }}
            left={<TextInput.Icon icon="lock" />}
          />

          {/* Checkbox */}
          <View>
            <Checkbox.Item
              label="Remember me!"
              labelStyle={{ color: "#1F2A37" }}
              color="#6941c6"
              status={checked ? "checked" : "unchecked"}
              position="leading"
              mode="android"
              style={{ width: "54%" }}
              onPress={() => {
                setChecked(!checked);
              }}
            />

            <Link
              href="/(auth)/reset-password"
              style={{
                textAlign: "right",
                position: "relative",
                top: -35,
                fontWeight: 600,
                color: "#FE456A",
              }}
            >
              Forgot Password?
            </Link>
          </View>

          <Button
            mode="contained"
            textColor="#FFFFFF"
            rippleColor="rgba(0, 0, 0, 0.2)"
            style={styles.nextButton}
          >
            Sign in
          </Button>
        </View>

        <View style={{ alignItems: "center", gap: 24 }}>
          <Text variant="bodyLarge" style={{ color: "#1F2A37" }}>
            Or
          </Text>

          <View style={styles.brandsAuth}>
            <View style={styles.singleBrandAuth}>
              <Image source={require("@/assets/images/brands/facebook.png")} />
            </View>
            <View style={styles.singleBrandAuth}>
              <Image source={require("@/assets/images/brands/google.png")} />
            </View>
          </View>
        </View>

        <Text variant="bodyMedium" style={{ color: "#1F2A37" }}>
          Don't have an account?{" "}
          <Link
            href="/(auth)/register"
            style={{ color: "#FE456A", fontWeight: 700 }}
          >
            Sign up
          </Link>
        </Text>
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
    // top: 23,
  },
  brandsAuth: {
    flexDirection: "row",
    gap: 16,
  },
  singleBrandAuth: {
    width: 50,
    height: 50,
    backgroundColor: "#E5E7EB",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
