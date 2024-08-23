import "./Popup.css";

interface PopupProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Popup = ({ children, isOpen }: PopupProps) => {
  return (
    <div className={`popup ${isOpen ? "" : "close"}`}>
      <img src="/public/logoxs.svg" alt="Zaiko logo" />
      <div className="modal__container">
        <img
          className="modal__icon"
          src="/public/check.svg"
          alt="Icono de check"
        />
        <h2 className="modal__title">{children}</h2>
      </div>
    </div>
  );
};

export default Popup;
