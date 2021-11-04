import React, { ReactChild } from "react";

import cx from "classnames";
import css from "./Header.module.scss";

interface IHeader {
  children?: ReactChild | string;
}

export const Header: React.FC<IHeader> = ({ children }) => (
  <div className={cx(css.header)}>{children}</div>
);
