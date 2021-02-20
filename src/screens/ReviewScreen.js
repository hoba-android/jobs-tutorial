import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";
import * as Linking from "expo-linking";

import { connect } from "react-redux";

const ReviewScreen = (props) => {
  const renderLikedJobs = () => {
    return props.likedJobs.map((job) => {
      return (
        <Card key={job.id}>
          <View style={{ height: 200 }}>
            <View style={styles.detailsWrapper}>
              <Text>{job.alias}</Text>
              <Text>{job.location.address1}</Text>
            </View>
            <Button
              title="Apply"
              color="#03A9F4"
              onPress={() => {
                Linking.openURL(job.url);
              }}
            />
          </View>
        </Card>
      );
    });
  };

  return <ScrollView>{renderLikedJobs()}</ScrollView>;
};

ReviewScreen.navigationOptions = (navigationData) => {
  return {
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    style: {},
    headerTintColor: "#fff",
    headerTitleStyle: {},
    headerTitle: "Review!",
    headerRight: () => (
      <Button
        onPress={() => navigationData.navigation.navigate("settings")}
        title="Settings"
        color="rgba(0,0,0,0)"
      />
    ),
  };
};

const styles = StyleSheet.create({
  detailsWrapper: {
    marginBottom: 10,
  },
});

const mapStateToProps = ({ likedJobs }) => {
  return {
    likedJobs,
  };
};

export default connect(mapStateToProps)(ReviewScreen);
