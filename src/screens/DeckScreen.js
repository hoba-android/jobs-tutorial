import React, { useEffect, useState, use } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { connect } from "react-redux";
import Swipe from "../components/Swipe";
import { likeJob } from "../store/actions/jobActions";
import MapView from "react-native-maps";
import { Card, Button } from "react-native-elements";

const DeckScreen = (props) => {
  const renderCard = (job) => {
    const initialRegion = {
      latitude: job.coordinates.latitude,
      longitude: job.coordinates.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };

    return (
      <Card title={job.name}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            cacheEnabled={Platform.OS === "android"}
            style={{ flex: 1 }}
            initialRegion={initialRegion}
          ></MapView>
        </View>
        <View>
          <Text>{job.alias}</Text>
          <Text>{job.location.country}</Text>
        </View>
      </Card>
    );
  };

  const renderNoMoreCards = () => {
    return (
      <Card title="no more jobs">
        <Text style={{ color: "black" }}>Jobs</Text>
        <Text>No more jobs</Text>
        <Button
          title="Back to map"
          onPress={() => {
            props.navigation.navigate("Map");
          }}
        />
      </Card>
    );
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Swipe
        data={props.jobs}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        onSwipeRight={(job) => props.likeJob(job)}
      />
    </View>
  );
};

const mapStateToProps = ({ jobs }) => {
  return {
    jobs: jobs.results,
  };
};

export default connect(mapStateToProps, { likeJob })(DeckScreen);

const styles = StyleSheet.create({});
