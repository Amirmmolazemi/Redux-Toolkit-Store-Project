import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Products</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>Developed by Amirmohammad molazemi With 🤍</p>
      </footer>
    </>
  );
}

export default Layout;
