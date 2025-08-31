/** React Related */
import * as React from "react";

/** Styles & Assets */
import styles from "./ButtonUnstyled.module.css";

/** Additional Components */

/** Additional Imports - Hook, Constants + More */

/** Defining Component Props */
interface ComponentProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

/** Main Component */
function ButtonUnstyled({ children, ...delegated }: ComponentProps) {
  return (
    <button {...delegated} className={styles.unstyled}>
      {children}
    </button>
  );
}

export default ButtonUnstyled;
