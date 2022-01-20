import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Rethink</div>
      <nav>
        <ul>
          <li>
            <Link to='/products'>All Products</Link>
          </li>
          <li>
            <Link to='/locations'>All locations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
