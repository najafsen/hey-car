import { axiosInstance } from "../../utils/axios";

export const baseUrl = "/questions";

export const getQuestionsList = async () => {
  try {
    const { data } = await axiosInstance.get(baseUrl);
    return data;
  } catch (e) {
    console.warn("Do some error handling!");
  }
};
