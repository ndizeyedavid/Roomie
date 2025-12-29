import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function welcome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const onBoardingScreenContent = [
    {
      imageSource: require("@/assets/images/onboarding-1.png"),
      title: "Find the",
      boldPart: "perfect roommate match",
      description: "connect with trusted roommates who fit your lifestyle",
    },
    {
      imageSource: require("@/assets/images/onboarding-2.png"),
      title: "Find the perfect match in just",
      boldPart: "one click",
      description: "save time and connect with verified roommates near you",
    },
    {
      imageSource: require("@/assets/images/onboarding-3.png"),
      title: "Discover with us",
      boldPart: "the perfect home",
      description:
        "browse safe, verified spaces and choose what feels like home",
    },
  ];

  function nextSlide() {
    if (currentSlide == onBoardingScreenContent.length - 1)
      return router.push("/(auth)/register");

    setCurrentSlide((prev) => prev + 1);
    console.log(currentSlide);
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
      <Button
        onPress={() => router.push("/(auth)/register")}
        mode="outlined"
        textColor="#4D5761"
        style={styles.skipButton}
      >
        Skip
      </Button>
      <Image source={onBoardingScreenContent[currentSlide].imageSource} />

      {/* Text Group */}
      <View style={{ marginTop: 30, gap: 12, alignItems: "center" }}>
        <Text
          variant="headlineLarge"
          style={{ textAlign: "center", color: "#1F2A37", width: 320 }}
        >
          {onBoardingScreenContent[currentSlide].title}{" "}
          <Text style={{ color: "#1F2A37", fontWeight: 600 }}>
            {onBoardingScreenContent[currentSlide].boldPart}
          </Text>
        </Text>

        <Text
          variant="bodyMedium"
          style={{ textAlign: "center", color: "#9DA4AE", width: 310 }}
        >
          {onBoardingScreenContent[currentSlide].description}
        </Text>
      </View>

      {/* Progress Indicator */}
      <View
        style={{ flexDirection: "row", gap: 8, position: "relative", top: 5 }}
      >
        {/* <View
          style={[styles.progressIndicator, styles.progressIndicatorActive]}
        /> */}
        {[1, 2, 3].map((val) =>
          currentSlide == val - 1 ? (
            <View
              key={val}
              style={[styles.progressIndicator, styles.progressIndicatorActive]}
            />
          ) : (
            <View key={val} style={[styles.progressIndicator]} />
          )
        )}
      </View>

      {/* Next Button */}
      <Button
        onPress={nextSlide}
        mode="contained"
        textColor="#FFFFFF"
        style={styles.nextButton}
      >
        {currentSlide == 2 ? "Get Started" : "Next"}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  skipButton: {
    position: "absolute",
    top: 5,
    right: 10,
  },
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
