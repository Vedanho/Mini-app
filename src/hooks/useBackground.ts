import { useEffect, useState } from "react";

const useBackground = () => {
  const [background, setBackground] = useState<null | string>(null);

  useEffect(() => {
    const body = document.querySelector("body");

    if (background) {
      body?.classList.add("background-image")
      body!.id = background
    }
  }, [background])


  return { background, setBackground };
};

export default useBackground;
