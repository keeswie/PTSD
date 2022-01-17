import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Kamernet</div>
      <nav>
        <ul>
          <li>
            <Link to='/products'>All Properties</Link>
          </li>
          <li>
            <Link to='/products/newProperty'>New Property</Link>
          </li>
          <li>
            <Link to='/products/detail'>detail</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
