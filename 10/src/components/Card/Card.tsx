import React, { ReactNode } from "react";
import cx from "classnames";
import css from "./Card.module.scss";

interface ICard {
  className?: string;
  children?: ReactNode | string;
}

export const Card: React.FC<ICard> = ({ className, children }) => (
  <div className={cx(css.card, className)}>{children}</div>
);
