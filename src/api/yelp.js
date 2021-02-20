import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer egLAP2hB55Ju0WqqKm9VqVbkmJkl0jZd8Pj_5wb82F-xWjUnaxUmrZtNCMgsfPoMDGP_rWgxNUNQDDzm67Fv4kcapVgxR1Xsw5mHo76I1PWxi20rlhg4PQIccbYAXnYx",
  },
});
