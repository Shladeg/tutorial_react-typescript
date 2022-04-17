import { FC } from "react";

import Container from "components/common/container";

import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import { classnames } from "utils";

const Header: FC = () => {
  return (
    <nav className={styles.root}>
      <Container className={styles.navWrap}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            classnames(styles.link, {
              [styles.active]: isActive,
            })
          }
        >
          React + Typescript
        </NavLink>

        <div className={styles.linkWrap}>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              classnames(styles.link, {
                [styles.active]: isActive,
              })
            }
          >
            Todo list
          </NavLink>

          <NavLink
            to="/info"
            className={({ isActive }) =>
              classnames(styles.link, {
                [styles.active]: isActive,
              })
            }
          >
            Info
          </NavLink>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
