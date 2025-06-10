import Modal from "../Modal";
import PointsBlock from "../PointsBlock";
import Button from "../ui/Button";
import "./index.scss";

const ProductModal = ({
  isModalOpen,
  onClose,
  activeProduct,
}: {
  isModalOpen: boolean;
  onClose: () => void;
  activeProduct: {
    label: string;
    img: string;
    money: number;
    brilliant: number;
    potion: number;
  } | null;
}) => {
  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose} className="product-modal">
      <div className="product-inner">
        <div className="product-inner__img">
          <img src={activeProduct?.img} alt="product" />
        </div>
        <div className="points-grid">
          <PointsBlock icon="coins" iconHeight={48} iconWidth={53} points={3857} />
          <PointsBlock icon="brilliant" iconHeight={37} iconWidth={41} points={34} />
          <PointsBlock icon="potion" iconHeight={42} iconWidth={29} points={132} />
        </div>
        <p className="product-inner__text">Скидка 99% наBY Наушники беспроводные TWS Echo,вкладыши, 30/250 мАч, BT5.3, черный.</p>
        <Button className="product-inner__btn" variant="orange">Купить предмет</Button>
      </div>
    </Modal>
  );
};

export default ProductModal;
