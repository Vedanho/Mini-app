import { useEffect, useState } from "react"
import type { TelegramWebapp, WebAppUser } from "../types";

export const useTelegram = () => {
  const [webApp, setWebApp] = useState<null | TelegramWebapp>(null);
  const [user, setUser] = useState<null | WebAppUser>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!window.Telegram || !window.Telegram?.WebApp) {
      console.log("Telegram WebApp is not available");
      setIsLoading(true);
      return;
    }
    const app = window.Telegram.WebApp;

    app.ready();
    app.expand();

    if (app.initDataUnsafe?.user) {
      setUser(app.initDataUnsafe?.user)
    }

    setWebApp(app);
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return { webApp, isLoading, user }
}
