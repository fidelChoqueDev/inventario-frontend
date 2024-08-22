import "./Popup.css";

interface PopupProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Popup = ({ children, isOpen }: PopupProps) => {
  return (
    <div className={`popup ${isOpen ? "" : "close"}`}>
      <img src="/public/logoxs.svg" alt="Zaiko logo" />

      <div className="container">{children}</div>
    </div>
  );
};

export default Popup;
