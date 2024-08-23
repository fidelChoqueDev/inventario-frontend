import "./Modal.css";

interface ModalProps {
  message: string;
}

const Modal = ({ message }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <img
          className="modal__icon"
          src="/public/check.svg"
          alt="Icono de check"
        />
        <h2 className="modal__title">{message}</h2>
      </div>
    </div>
  );
};

export default Modal;
