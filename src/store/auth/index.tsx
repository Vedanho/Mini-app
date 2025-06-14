import { create } from "zustand";
import { auth, updateUserNickname } from "../../api/auth";
import { toast } from "react-toastify";

export interface AuthStore {
  isAuth: boolean;
  auth: ({ initTgData, timezone }: { initTgData: string; timezone: number }) => void;
  updateUserNickname: ({ nickname }: { nickname: string }) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  auth: async ({ initTgData, timezone }) => {
    try {
      const response = await auth({ initTgData, timezone });
      console.log(response);
      if (response.data?.result?.success) {
        set({ isAuth: true });
      }

      if (response?.error) {
        throw new Error();
      }
    } catch (error) {
      console.log(2)
      toast("Ошибка", {
        type: "error",
        hideProgressBar: true,
        position: "bottom-right",
      });
      console.log(error);
    }
  },
  updateUserNickname: async ({ nickname }: { nickname: string }) => {
    try {
      await updateUserNickname({ nickname });
    } catch (error) {
      console.log(error);
    }
  },
}));
