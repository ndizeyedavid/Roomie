import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function welcome() {
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
      <Button mode="outlined" textColor="#4D5761" style={styles.skipButton}>
        Skip
      </Button>
      <Image source={require("@/assets/images/onboarding-1.png")} />

      {/* Text Group */}
      <View style={{ marginTop: 30, gap: 12, alignItems: "center" }}>
        <Text
          variant="headlineLarge"
          style={{ textAlign: "center", color: "#1F2A37", width: 260 }}
        >
          Find the{" "}
          <Text style={{ color: "#1F2A37", fontWeight: 600 }}>
            perfect roommate match
          </Text>
        </Text>

        <Text
          variant="bodyMedium"
          style={{ textAlign: "center", color: "#9DA4AE", width: 310 }}
        >
          connect with trusted roommates who fit your lifestyle
        </Text>
      </View>

      {/* Progress Indicator */}
      <View
        style={{ flexDirection: "row", gap: 8, position: "relative", top: 5 }}
      >
        <View
          style={[styles.progressIndicator, styles.progressIndicatorActive]}
        />
        {[2, 3].map((val) => (
          <View key={val} style={[styles.progressIndicator]} />
        ))}
      </View>

      {/* Next Button */}
      <Button mode="contained" textColor="#FFFFFF" style={styles.nextButton}>
        Next
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
