import { api } from "../instance";

export const getHeroMaxStats = async () => {
  const request = {
    method: "ApiHero.get_max_capacity_coins_current_hero",
    params: {},
  };

  const response = await api.post("/coins", request);
  
  return response?.data;
};

export const selectHero = async ({ heroId }: { heroId: string }) => {
  const request = {
    method: "ApiHero.select_hero",
    params: {
      hero_id: heroId,
    },
  };

  const response = await api.post("/coins", request);

  return response?.data;
};

export const buyHero = async ({ heroId, heroLevel }: { heroId: string; heroLevel: number }) => {
  const request = {
    method: "ApiHero.buy_hero",
    params: {
      hero_id: heroId,
      level: heroLevel,
    },
  };

  const response = await api.post("/coins", request);

  return response?.data;
};

export const getHeroLevels = async ({ heroId }: { heroId: string }) => {
  const request = {
    method: "ApiHero.levels_hero",
    params: {
      hero_id: heroId,
    },
  };

  const response = await api.post("/coins", request);

  return response?.data;
};
