import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json);
    } catch (err) {
      console.error("Failed to fetch menu:", err);
    }
  };
  return resInfo;
};

export default useRestrauntMenu;
