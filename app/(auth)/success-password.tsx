import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function SuccessPassword() {
  const router = useRouter();

  function nextSlide() {
    // if (currentSlide == onBoardingScreenContent.length - 1)
    router.push("/(auth)/login");

    // setCurrentSlide((prev) => prev + 1);
    // console.log(currentSlide);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcfcfd",
        gap: 24,
        // width: "95%",
      }}
    >
      <Image source={require("@/assets/images/password-change.png")} />

      {/* Text Group */}
      <View style={{ marginTop: 30, gap: 12, alignItems: "center" }}>
        <Text
          variant="headlineLarge"
          style={{ textAlign: "center", color: "#1F2A37", width: 320 }}
        >
          Success!{" "}
        </Text>

        <Text
          variant="bodyMedium"
          style={{ textAlign: "center", color: "#9DA4AE", width: 310 }}
        >
          You password has been changed. Please log in again with a new
          password.
        </Text>
      </View>

      {/* Progress Indicator */}
      <View
        style={{ flexDirection: "row", gap: 8, position: "relative", top: 5 }}
      ></View>

      {/* Next Button */}
      <Button
        onPress={nextSlide}
        mode="contained"
        textColor="#FFFFFF"
        style={styles.nextButton}
      >
        Continue
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  progressIndicator: {
    width: 14,
    height: 14,
    backgroundColor: "#d2d6db",
    borderRadius: 50,
  },
  progressIndicatorActive: {
    width: 40,
    backgroundColor: "#FE456A",
  },
  nextButton: {
    backgroundColor: "#FE456A",
    borderRadius: 8,
    paddingVertical: 6,

    width: "90%",
    // marginTop: 43,
    position: "relative",
    top: 23,
  },
});
