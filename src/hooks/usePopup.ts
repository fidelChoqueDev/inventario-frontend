import { useCallback, useEffect, useState } from "react";

type returnsPopup = [
  boolean,
  () => void,
  () => void,
  React.Dispatch<React.SetStateAction<boolean>>,
];

/**
 * Hook to manage popups
 * @param autoCloseEnabled - optional - boolean to enable/disable auto close (default: false)
 * @param timeToClose - optional - time in ms to close the popup (default: 3000)
 * @param actionToAutoClosePopup - optional - function to call when the popup is auto closed
 *
 * @returns [isOpen, openPopup, closePopup, setAutoCloseEnabled] - an array to contain the following values:
 * isOpen: boolean - true if the popup is open, false otherwise
 * openPopup: function - function to open the popup
 * closePopup: function - function to close the popup
 * setAutoCloseEnabled: function - function to enable/disable auto close popup
 */

export default function usePopup(
  initialAutoCloseEnabled: boolean = false,
  timeToClose: number = 3000,
  actionToAutoClosePopup?: () => void,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [autoCloseEnabled, setAutoCloseEnabled] = useState(
    initialAutoCloseEnabled,
  );

  const closePopup = () => {
    setIsOpen(false);
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const autoClosePopup = useCallback(() => {
    if (isOpen && autoCloseEnabled) {
      const idTimer = setTimeout(() => {
        actionToAutoClosePopup && actionToAutoClosePopup();
        setIsOpen(false);
      }, timeToClose);
      return () => clearTimeout(idTimer);
    }
  }, [autoCloseEnabled, timeToClose, actionToAutoClosePopup, isOpen]);

  useEffect(() => {
    if (isOpen && autoCloseEnabled) {
      const timerCleanUp = autoClosePopup();
      return () => timerCleanUp && timerCleanUp();
    }
  }, [isOpen, autoClosePopup, autoCloseEnabled]);
  const returnValues: returnsPopup = [
    isOpen,
    openPopup,
    closePopup,
    setAutoCloseEnabled,
  ];
  return returnValues;
}
