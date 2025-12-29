import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { Button, Text, TextInput } from "react-native-paper";

export default function map() {
  const mapRef = React.useRef<MapView>(null);
  const [isLocating, setIsLocating] = React.useState(false);
  const [currentCoords, setCurrentCoords] = React.useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [currentAddress, setCurrentAddress] = React.useState<string>(
    "Tap 'Get my location' to fetch your address"
  );

  const region = {
    latitude: -1.9441,
    longitude: 30.0619,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  async function setSelectedLocation(input: {
    latitude: number;
    longitude: number;
  }) {
    try {
      setIsLocating(true);

      setCurrentCoords({
        latitude: input.latitude,
        longitude: input.longitude,
      });

      const nextRegion: Region = {
        latitude: input.latitude,
        longitude: input.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      mapRef.current?.animateToRegion(nextRegion, 600);

      const places = await Location.reverseGeocodeAsync({
        latitude: input.latitude,
        longitude: input.longitude,
      });

      const place = places[0];
      if (!place) {
        setCurrentAddress(
          `${input.latitude.toFixed(5)}, ${input.longitude.toFixed(5)}`
        );
      } else {
        const parts = [
          place.name,
          place.street,
          place.city,
          place.region,
          place.postalCode,
          place.country,
        ].filter(Boolean);
        setCurrentAddress(parts.join(", "));
      }
    } catch (e) {
      setCurrentAddress(
        `${input.latitude.toFixed(5)}, ${input.longitude.toFixed(5)}`
      );
    } finally {
      setIsLocating(false);
    }
  }

  async function handleGetMyLocation() {
    try {
      setIsLocating(true);

      const permission = await Location.requestForegroundPermissionsAsync();
      if (permission.status !== "granted") {
        Alert.alert(
          "Location permission needed",
          "Please allow location access to use your current location."
        );
        return;
      }

      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      await setSelectedLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (e) {
      Alert.alert(
        "Couldn't get location",
        "Please try again or enable location services."
      );
    } finally {
      setIsLocating(false);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fcfcfd",
      }}
    >
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        showsCompass={true}
        showsUserLocation={true}
        onPress={(event) => {
          const { latitude, longitude } = event.nativeEvent.coordinate;
          void setSelectedLocation({ latitude, longitude });
        }}
      >
        {currentCoords && (
          <Marker
            coordinate={currentCoords}
            title="You"
            description={currentAddress}
            draggable
            onDragEnd={(event) => {
              const { latitude, longitude } = event.nativeEvent.coordinate;
              void setSelectedLocation({ latitude, longitude });
            }}
          />
        )}
      </MapView>
      {/* Overlay content */}
      <OverlayContent
        onGetMyLocation={handleGetMyLocation}
        isLocating={isLocating}
        locationDetails={currentAddress}
      />
    </View>
  );
}

function OverlayContent({
  onGetMyLocation,
  isLocating,
  locationDetails,
}: {
  onGetMyLocation: () => void;
  isLocating: boolean;
  locationDetails: string;
}) {
  const router = useRouter();

  return (
    <View
      style={{
        width: "95%",
        marginHorizontal: "auto",
        position: "absolute",
        left: 10,
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
      <View style={{ marginTop: 50 }}>
        <TextInput
          mode="outlined"
          placeholder="Seatch Location"
          activeOutlineColor="#fc4469"
          outlineColor="#fc4469"
          textColor="#1F2A37"
          style={{ backgroundColor: "white" }}
          left={<TextInput.Icon icon="magnify" color="#fc4469" />}
        />

        <View
          style={{
            position: "absolute",
            bottom: -600,
            width: "100%",
            gap: 10,
          }}
        >
          <Button
            mode="outlined"
            textColor="#FE456A"
            style={styles.getLocationButton}
            loading={isLocating}
            // disabled={isLocating}
            onPress={onGetMyLocation}
            icon="navigation"
          >
            {isLocating ? "Tracking..." : "Get my location"}
          </Button>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#D2D6DB",
              backgroundColor: "white",
              boxShadow: "0 4px 4px rgba(31, 42, 55, 0.05)",
              //   padding: 14,
              paddingVertical: 16,
              paddingHorizontal: 16,
              borderRadius: 16,
            }}
          >
            <Text
              variant="titleLarge"
              style={{ color: "#1F2A37", fontWeight: 700 }}
            >
              Location Details
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginTop: 10,
                // marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F4EBFF",
                }}
              >
                <MaterialDesignIcons
                  name="map-marker-outline"
                  size={25}
                  style={{
                    color: "#f84469",
                  }}
                />
              </View>
              <Text
                variant="labelLarge"
                style={{ width: "85%", color: "#9da4ae" }}
              >
                {isLocating ? "Fetching your location..." : locationDetails}
              </Text>
            </View>
          </View>
          <Button
            mode="contained"
            textColor="white"
            style={styles.confirmButton}
          >
            Confirm Location
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skipButton: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  map: {
    width: "100%",
    height: "100%",
    // display: "none",
  },
  confirmButton: {
    backgroundColor: "#FE456A",
    borderRadius: 8,
    paddingVertical: 6,
  },
  getLocationButton: {
    borderColor: "#FE456A",
    borderRadius: 8,
    paddingVertical: 2,
    marginTop: 12,
    width: 170,
    position: "relative",
    left: 180,
    backgroundColor: "white",
  },
});
