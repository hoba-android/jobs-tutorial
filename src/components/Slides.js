import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";

const SCREEN_WIDTh = Dimensions.get("window").width;

const Slides = ({ data, gotoAuthHandler }) => {
  const renderLastPageButton = (index) => {
    if (index === data.length - 1) {
      return <Button title="GO Auth" onPress={gotoAuthHandler} />;
    }
  };

  const renderSlide = (data) => {
    return data.map((slide, index) => {
      return (
        <View
          style={[styles.slidestyle, { backgroundColor: slide.color }]}
          key={slide.text}
        >
          <Text style={styles.txtStyle}>{slide.text}</Text>
          {renderLastPageButton(index)}
        </View>
      );
    });
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal pagingEnabled>
      {renderSlide(data)}
    </ScrollView>
  );
};

export default Slides;

const styles = StyleSheet.create({
  slidestyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTh,
  },
  txtStyle: {
    fontSize: 30,
    color: "white",
    padding: 20,
    textAlign: "center",
  },
});
