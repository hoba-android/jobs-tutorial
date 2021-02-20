import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { clearLikedJobs } from "../store/actions/jobActions";
import { connect } from "react-redux";

const SettingsScreen = (props) => {
  return (
    <View>
      <Button
        title="Reset Liked Jobs"
        large
        icon={{ name: "delete-forever" }}
        backgroundColor="#F44336"
        onPress={props.clearLikedJobs}
      />
    </View>
  );
};

export default connect(null, { clearLikedJobs })(SettingsScreen);

const styles = StyleSheet.create({});
