import Modal from "../Modal";
import PointsBlock from "../PointsBlock";
import Button from "../ui/Button";
import "./index.scss";

const DiscountModal = ({
  isModalOpen,
  onClose,
  activeDiscount,
}: {
  isModalOpen: boolean;
  onClose: () => void;
  activeDiscount: {
    img: string;
    label: string;
    discount: number | string;
  } | null;
}) => {
  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose} className="discount-modal">
      <div className="discount-inner">
        <div className="discount-inner__img">
          <img src={activeDiscount?.img} alt="discount" />
        </div>
        <PointsBlock icon="coins" iconHeight={48} iconWidth={53} points={30000} />
        <p className="discount-inner__text">
          Скидка 99% наBY Наушники беспроводные TWS Echo,вкладыши, 30/250 мАч, BT5.3, черный.
        </p>
        <Button className="discount-inner__btn" variant="orange">
          Купить скидку
        </Button>
      </div>
    </Modal>
  );
};

export default DiscountModal;
