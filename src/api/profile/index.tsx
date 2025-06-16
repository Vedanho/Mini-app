import type { Profile } from "../../types";
import { api } from "../instance";

export const auth = async ({  timezone }: { initTgData: string; timezone: number }) => {
  const response = await api.post("/profile", {
    method: "CustomerAPI.login",
    params: {
      init_data_telegram: "query_id=AAEoploeAAAAACimWh5YIMug&user=%7B%22id%22%3A509257256%2C%22first_name%22%3A%22A%22%2C%22last_name%22%3A%22M%22%2C%22username%22%3A%22vedanho%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2Fc5mupQ_JcbJBJQBR5yLqOcvZVJBgALR-MFXNO-_IuAI.svg%22%7D&auth_date=1749917589&signature=NoPRz7VikSKL2w3KwpMP626-OgH1RXp-OuxbMGK2x3fhk_qSiRpMvMP75yst3fJFUJgMg5fc0HijwUgnpY3NAg&hash=565906458eec6d316f761882177ecb914e2c2c0d9e6243b3dc613edb7876b11f",
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
