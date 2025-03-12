import { useState } from "react";
import styles from "./RightMenu.module.css"; // Importing CSS styles

function RightMenu() {
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    // You can add logic to switch themes globally if needed
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // Add logic to handle search query
  };

  return (
    <div className={styles.rightMenu}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
      <button
        onClick={toggleTheme}
        className={`${styles.themeToggle} ${
          theme === "light" ? styles.lighttheme : styles.darktheme
        }`}
      >
        {theme === "light" ? "🌙" : "🌞"}
      </button>
    </div>
  );
}

export default RightMenu;
