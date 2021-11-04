import React, { ReactNode } from "react";
import cx from "classnames";
import css from "./Container.module.scss";

interface IContainer {
  className?: string;
  children?: ReactNode;
}

export const Container: React.FC<IContainer> = ({ children }) => (
  <div className={cx(css.container)}>{children}</div>
);
