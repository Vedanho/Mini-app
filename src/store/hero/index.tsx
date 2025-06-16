import { toast } from "react-toastify";
import { create } from "zustand";
import { getHeroMaxStats, selectHero } from "../../api/hero";

export interface HeroStore {
  currentHero: string;
  currentLeveL: number;
  energy: number;
  bottle: number;
  crystal: number;
  tapCoin: number;
  maxEnergy: number;
  tapMultiple: number;
  maxStats: {
    maxTapCoin: number;
    maxBottle: number;
    maxCrystal: number;
  };
  setData: (data: HeroMessage) => void;
  checkHero: ({ heroId }: { heroId: string }) => Promise<void>;
  getMaxStats: () => Promise<void>;
}

type EventTypeId = number;
type Energy = number;
type MaxEnergy = number;
type TapCoin = number;
type Bottle = number;
type Crystal = number;
type TapMultiple = number;

type HeroMessage = [EventTypeId, Energy, MaxEnergy, TapCoin, Bottle, Crystal, TapMultiple];

export const useHeroStore = create<HeroStore>((set) => ({
  currentHero: "",
  currentLeveL: 1,
  energy: 0,
  bottle: 0,
  crystal: 0,
  tapCoin: 0,
  maxEnergy: 0,
  maxStats: {
    maxTapCoin: 0,
    maxBottle: 0,
    maxCrystal: 0,
  },
  tapMultiple: 1, //скок монеток закидывать за один тап
  setData: (data) => {
    const [_, energy, maxEnergy, tapCoin, bottle, crystal, tapMultiple] = data;
    set({
      energy,
      bottle,
      tapCoin,
      crystal,
      maxEnergy,
      tapMultiple,
    });
  },
  checkHero: async ({ heroId }) => {
    try {
      
      const response = await selectHero({ heroId });

      // if (response.data?.result) {
      
      set({ currentHero: heroId });
      // }

      if (response.error) {
        throw new Error();
      }
    } catch (error) {
      toast("Ошибка", {
        type: "error",
        hideProgressBar: true,
        position: "bottom-right",
      });
      console.log(error);
    }
  },
  getMaxStats: async () => {
    try {
      const response = await getHeroMaxStats();
      console.log("response_1", response); //
      if (response?.result) {
        const { current_level, max_tap_coin, max_bottle, max_crystal } = response?.result;
        const maxStats = {
          maxTapCoin: max_tap_coin,
          maxBottle: max_bottle,
          maxCrystal: max_crystal,
        };
        set({ maxStats, currentLeveL: current_level });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
