import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function LocationOnboarding() {
  const router = useRouter();

  function nextSlide() {
    // if (currentSlide == onBoardingScreenContent.length - 1)
    router.push("/(auth)/map");

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
      <Image source={require("@/assets/images/location-onboarding.png")} />

      {/* Text Group */}
      <View style={{ marginTop: 30, gap: 12, alignItems: "center" }}>
        <Text
          variant="headlineLarge"
          style={{
            textAlign: "center",
            color: "#1F2A37",
            fontWeight: 500,
            width: 310,
          }}
        >
          Hi Sonia, Nice to meet you!{" "}
        </Text>

        <Text
          variant="bodyMedium"
          style={{ textAlign: "center", color: "#9DA4AE", width: 290 }}
        >
          Choose your location to find property around you
        </Text>
      </View>

      {/* Buttons */}
      <Button
        onPress={nextSlide}
        mode="contained"
        textColor="#FFFFFF"
        style={styles.nextButton}
      >
        Use current location
      </Button>
      <Button
        onPress={nextSlide}
        mode="outlined"
        textColor="#FE456A"
        style={styles.outlineButton}
      >
        Select it manually
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
  outlineButton: {
    borderColor: "#FE456A",
    borderRadius: 8,
    paddingVertical: 6,

    width: "90%",
    // marginTop: 43,
    position: "relative",
    top: 10,
  },
});
