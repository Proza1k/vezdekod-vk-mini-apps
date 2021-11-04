import React, { ReactNode } from 'react'
import cx from 'classnames'
import css from './Button.module.scss'

interface IButton {
  onClick?: () => void
  className?: string
  children?: ReactNode | string;
}

export const Button: React.FC<IButton> = ({ className, onClick, children }) => (
    <button onClick={onClick} className={cx(css.button, className)}>{children}</button>
)