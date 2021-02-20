import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { facebookLogin } from "../store/actions/authActions";

const AuthScreen = (props) => {
  useEffect(() => {
    props.facebookLogin();

    if (props.token) {
      props.navigation.navigate("Map");
    }
  }, [props.token]);
  return <View></View>;
};

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token,
  };
};

export default connect(mapStateToProps, { facebookLogin })(AuthScreen);

const styles = StyleSheet.create({});
