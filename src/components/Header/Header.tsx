import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div>
        <NavLink to="/favourite" className={classes.item}>
          Любимые
        </NavLink>
      </div>
      <div>
        <NavLink to="/" className={classes.item}>
          Поиск фильма
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
