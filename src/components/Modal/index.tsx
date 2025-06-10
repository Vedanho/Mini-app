import ReactModal from "react-modal";
import CloseIcon from "/common/cross.svg";

import "./index.scss";
import clsx from "clsx";

interface IModalProps {
  isHideCloseButton?: boolean;
  isModalOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal = ({ children, isModalOpen, onClose, className, isHideCloseButton, ...props }: IModalProps) => {
  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        closeTimeoutMS={200}
        ariaHideApp={false}
        onRequestClose={onClose}
        className={clsx("modal", className)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: "100000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        {...props}
      >
        {!isHideCloseButton && (
          <button className="modal-close__btn" onClick={onClose}>
            <img src={CloseIcon} alt="close" />
          </button>
        )}
        {children}
      </ReactModal>
    </>
  );
};

export default Modal;
