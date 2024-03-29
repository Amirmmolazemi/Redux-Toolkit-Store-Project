import { useDispatch } from "react-redux";

import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from "../helpers/helper";
import { decrease, increase, removeItem } from "../feature/cart/cartSlice.js";

import styles from "./styles/BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const dispatch = useDispatch();

  const { image, title, quantity, price } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <p>{price.toFixed(2)} $</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
