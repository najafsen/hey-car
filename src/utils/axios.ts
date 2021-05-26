import axios from "axios";

export const apiBaseUrl = "https://polls.apiblueprint.org";

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});
