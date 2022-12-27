import Logo from "../../assets/pngs/logo.png";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles["header-container"]}>
      <img src={Logo} alt="Todo app logotype" />
      <h1 className={styles["header-title"]}>todo</h1>
    </header>
  );
}

export default Header;
