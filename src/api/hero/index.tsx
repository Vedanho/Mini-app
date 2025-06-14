import { api } from "../instance";

export const getHeroMaxStats = async () => {
  const request = {
    method: "ApiHero.get_max_capacity_coins_current_hero",
    params: {},
  };

  const response = await api.post("/coins", request);
  console.log(response);

  return response?.data?.result;
};

