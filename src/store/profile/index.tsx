import { create } from "zustand";
import { auth, updateUserNickname } from "../../api/profile";
import { toast } from "react-toastify";
import type { Profile } from "../../types";

export interface ProfileStore {
  isAuth: boolean;
  auth: ({ initTgData }: { initTgData: string }) => void;
  updateUserNickname: ({ nickname }: { nickname: string }) => void;
  profile: Profile;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: {
    first_name: "",
    last_name: "",
    surname: "",
    username: "",
    mail: "",
    phone: "",
    birth_date: "",
    loyalty_enabled: null,
    subscriptions: null,
  },
  isAuth: false,
  auth: async ({ initTgData }) => {

    //нужно понимание по какому ключу смотрим авторизован ли юзер или нет
    try {
      const timezone = -new Date().getTimezoneOffset() / 60;
      const response = await auth({ initTgData, timezone });

      if (response.result?.success) {
        const { profile } = response?.result;
        set({ isAuth: true, profile });
      }

      if (response?.error) {
        throw new Error();
      }
    } catch (error) {
      toast("Ошибка", {
        type: "error",
        hideProgressBar: true,
        position: "bottom-right",
      });
      throw error;
    }
  },
  updateUserNickname: async ({ nickname }: { nickname: string }) => {
    try {
      const response = await updateUserNickname({ nickname });

      if (response.error) {
        throw new Error();
      }
    } catch (error) {
      toast("Ошибка", {
        type: "error",
        hideProgressBar: true,
        position: "bottom-right",
      });
      // throw error;
    }
  },
}));
