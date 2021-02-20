import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Facebook from "expo-facebook";

import { FACBOOK_LOGIN_SUCCESS, FACBOOK_LOGIN_FAIL } from "./types";

export const facebookLogin = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      dispatch({ type: FACBOOK_LOGIN_SUCCESS, payload: token });
    } else {
      console.log("token in valid");
      doFacebookLogin(dispatch);
    }
  };
};

const doFacebookLogin = async (dispatch) => {
  await Facebook.initializeAsync({
    appId: "216352800174206",
  });

  let { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ["public_profile"],
  });

  if (type === "cancel") {
    return dispatch({ type: FACBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem("fb_token", token);

  dispatch({ type: FACBOOK_LOGIN_SUCCESS, payload: token });
};
