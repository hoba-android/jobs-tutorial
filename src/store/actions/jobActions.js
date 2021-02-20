import yelp from "../../api/yelp";

import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOB } from "./types";

import { DATA } from "../../api/dummyData";

export const fetchJobs = (region, callback) => {
  // return async (dispatch) => {
  //   dispatch({ type: FETCH_JOBS, payload: DATA });
  //   callback();
  // };

  const { latitude, longitude } = region;

  return async (dispatch) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 10,
          /// temp cairo becuase location hangs
          // location: "cairo",
          latitude,
          longitude,
        },
      });

      dispatch({ type: FETCH_JOBS, payload: response.data.businesses });
      callback();
    } catch (e) {
      console.log("errorrrr");
    }
  };
};

export const likeJob = (job) => {
  return { type: LIKE_JOB, payload: job };
};

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOB };
};
