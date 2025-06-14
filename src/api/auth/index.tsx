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
  const response = await api.post("/profile", {
    method: "CustomerAPI.update_user_nickname",
    params: {
      nickname,
    },
  });
  return response?.data;
};
