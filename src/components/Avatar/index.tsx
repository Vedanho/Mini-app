import AvatarIcon from "/common/avatar.png";
import "./index.scss";

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="avatar__img-wrapper">
        <img src={AvatarIcon} alt="avatar" />
      </div>
      <span className="avatar__name">User_1</span>
    </div>
  );
};

export default Avatar;
