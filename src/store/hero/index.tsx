import { create } from "zustand";

export interface HeroStore {
  energy: number;
  bottle: number;
  crystal: number;
  tapCoin: number;
  maxEnergy: number;
  tapMultiple: number;
  setData: (data: HeroMessage) => void;
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
  energy: 0,
  bottle: 0,
  crystal: 0,
  tapCoin: 0,
  maxEnergy: 0,
  tapMultiple: 1, //скок монеток закидывать за один тап
  setData: (data) => {
    const [energy, maxEnergy, tapCoin, bottle, crystal, tapMultiple] = data;
    set({
      energy,
      bottle,
      tapCoin,
      crystal,
      maxEnergy,
      tapMultiple,
    });
  },
}));
