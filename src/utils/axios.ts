import axios from "axios";

export const baseApiUrl = "https://polls.apiblueprint.org";

export const axiosInstance = axios.create({
  baseURL: baseApiUrl,
});
