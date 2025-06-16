import AvatarIcon from "/common/avatar.png";
import "./index.scss";
import { useProfileStore } from "../../store/profile";

const Avatar = () => {
  const { profile } = useProfileStore();

  return (
    <div className="avatar">
      <div className="avatar__img-wrapper">
        <img src={AvatarIcon} alt="avatar" />
      </div>
      <span className="avatar__name">{profile?.username}</span>
    </div>
  );
};

export default Avatar;
