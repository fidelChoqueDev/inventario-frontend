import { useState } from "react";

export default function usePopup(autoClose: boolean, time: number) {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const autoclosePopup = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, time);
  };

  if (autoClose) autoclosePopup();

  return [isOpen, openPopup, closePopup];
}
