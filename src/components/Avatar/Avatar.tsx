import style from './Avatar.module.css';
import avatar from './../../assets/icons/avatar.png'



export const Avatar = () => {
  return (
    <div className = {style.avatar}>
      <img className={style.icons} src={avatar} alt="avatar" />
    </div>
  );
};


