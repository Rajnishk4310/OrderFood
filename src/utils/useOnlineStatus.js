import { useEffect, useState } from "react";

const useOnelineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  });
  return onlineStatus;
};
export default useOnelineStatus;
