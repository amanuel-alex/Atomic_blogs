import styles from "./AppNav.module.css"; // Importing CSS styles
import Menu from "./Menu";
import Logo from "./Logo";
import RightMenu from "./RightMenu";
function AppNav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <Menu />
      <RightMenu />
    </div>
  );
}

export default AppNav;
