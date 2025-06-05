import type { ActiveItem } from "../HeroClothes";
import Modal from "../Modal";
import Button from "../ui/Button";
import MoneyIcon from "/common/coins.png"
import "./index.scss";

interface Props {
  activeItem: ActiveItem | null;
  onClose: () => void;
}

const HeroItemModal = ({ activeItem, onClose }: Props) => {
  return (
    <Modal isModalOpen={!!activeItem?.img} onClose={onClose} className="item-modal">
      <div className="item-modal__inner">
        <div className="item-modal__img-wrapper">
          <img src={activeItem?.img} alt="img" />
        </div>
        <div className="price-block">
          <img width={53} height={48} src={MoneyIcon} alt="icon" className="price-block__icon" />
          <div className="price-block__count">{activeItem?.money}</div>
        </div>
        <div className="price-block__description">{activeItem?.description}</div>
        <Button className="item-modal__btn" variant="orange">Купить предмет</Button>
      </div>
    </Modal>
  );
};

export default HeroItemModal;
