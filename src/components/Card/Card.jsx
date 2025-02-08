import styles from "./card.module.css";
import arrowImg from "./../../img/icons/arrow.svg";

const Card = ({ title, img }) => {
  return (
    <div className="container">
      <div className={styles.card}>
        <a href="#!" className={styles.card__link}></a>
        <img className={styles.card__img} src={img} alt="Category..." />
        <div className={styles.card__body}>
          <div className={styles.card__icon}>
            <div className={styles.card__title}>{title}</div>
            <div className={styles.card__muted}>Explore Now!</div>
          </div>
          <div className={styles.card__icon}>
            <img src={arrowImg} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
