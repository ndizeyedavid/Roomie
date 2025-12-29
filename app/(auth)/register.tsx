import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";

export default function RegisterRoute() {
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
        <View style={{ gap: 8, marginTop: 32 }}>
          <Text
            variant="headlineSmall"
            style={{ color: "#1F2A37", fontWeight: 700 }}
          >
            Register Account
          </Text>
          <Text style={{ color: "#9DA4AE", fontWeight: 400 }}>
            Sign in with your email and password or social media to continue
          </Text>
        </View>

        <View style={{ width: "100%", gap: 16 }}>
          <TextInput
            mode="outlined"
            label="Username"
            activeOutlineColor="#6941C6"
            textColor="#1F2A37"
            style={{ backgroundColor: "white" }}
            left={<TextInput.Icon icon="account" />}
          />

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
          <View>
            <Checkbox.Item
              label="Agree with terms and privacy"
              labelStyle={{ color: "#1F2A37" }}
              color="#6941c6"
              status={checked ? "checked" : "unchecked"}
              position="leading"
              mode="android"
              style={{ width: "87%" }}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>

          <Button
            mode="contained"
            textColor="#FFFFFF"
            rippleColor="rgba(0, 0, 0, 0.2)"
            style={styles.nextButton}
          >
            Sign Up
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
          Already have an account?{" "}
          <Link
            href="/(auth)/login"
            style={{ color: "#FE456A", fontWeight: 700 }}
          >
            Sign in
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
