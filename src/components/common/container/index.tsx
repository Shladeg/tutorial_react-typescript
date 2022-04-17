import { FC, PropsWithChildren } from "react";
import { classnames } from "utils";

import styles from "./container.module.scss";

interface ContainerProps {
  className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => <div className={classnames(styles.root, className)}>{children}</div>;

export default Container;
