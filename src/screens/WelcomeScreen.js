import React, { useState, useEffect } from "react";
import _ from "lodash";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slides from "../components/Slides";

const DATA = [
  { text: "Welcome to our App ya medhawel", color: "#03A9F4" },
  { text: "Find a job fi el mantesh2a", color: "#009688" },
  { text: "Hoppaaaaa", color: "#03A9F4" },
];

const WelcomeScreen = ({ navigation }) => {
  const gotoAuthHandler = () => {
    navigation.navigate("auth");
  };

  return <Slides data={DATA} gotoAuthHandler={gotoAuthHandler} />;
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
