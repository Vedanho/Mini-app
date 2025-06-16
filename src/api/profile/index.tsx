import type { Profile } from "../../types";
import { api } from "../instance";

export const auth = async ({ initTgData, timezone }: { initTgData: string; timezone: number }) => {
  const response = await api.post("/profile", {
    method: "CustomerAPI.login",
    params: {
      init_data_telegram: initTgData,
      timezone,
    },
  });

  return response?.data;
};

export const updateUserNickname = async ({ nickname }: { nickname: string }) => {
  const request = {
    method: "CustomerAPI.update_user_nickname",
    params: {
      nickname,
    },
  };

  const response = await api.post("/profile", request);
  return response?.data;
};

export const getProfile = async () => {
  const request = {
    method: "CustomerAPI.get_profile",
    params: {},
  };

  const response = await api.post("/profile", request);

  return response?.data;
};

export const updateProfile = async ({ data }: { data: Profile }) => {
  const request = {
    method: "CustomerAPI.update_profile",
    params: data,
  };

  const response = await api.post("/profile", request);

  return response?.data;
};
