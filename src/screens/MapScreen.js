import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  Button,
} from "react-native";
import MapView from "react-native-maps";
import { fetchJobs } from "../store/actions/jobActions";
import { connect } from "react-redux";

const initialRegion = {
  latitude: 37,
  longitude: -122,
  latitudeDelta: 0.04,
  longitudeDelta: 0.09,
};

const MapScreen = (props) => {
  const [isloading, setIsLoading] = useState(false);
  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const onRegionChange = (region) => {
    setRegion(region);
  };

  const searchButtonHandler = () => {
    props.fetchJobs(region, () => {
      props.navigation.navigate("Deck");
    });
  };
  if (!isloading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MapView
        region={region}
        style={styles.map}
        onRegionChange={onRegionChange}
      />
      <View style={styles.button}>
        <Button title="Search a Job" onPress={searchButtonHandler} />
      </View>
    </View>
  );
};

export default connect(null, { fetchJobs })(MapScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  button: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 20,
    backgroundColor: "black",
  },
});
