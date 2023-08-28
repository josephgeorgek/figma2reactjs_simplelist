import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  /** Style props */
  footerPosition?: CSSProperties["position"];
  footerBottom?: CSSProperties["bottom"];
  footerLeft?: CSSProperties["left"];
};

const Footer: FunctionComponent<FooterType> = ({
  footerPosition,
  footerBottom,
  footerLeft,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      position: footerPosition,
      bottom: footerBottom,
      left: footerLeft,
    };
  }, [footerPosition, footerBottom, footerLeft]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.ocbcAllRights}>© OCBC. All Rights Reserved.</div>
      <div
        className={styles.ocbcAllRights}
      >{`Conditions of Access | Security & Privacy`}</div>
    </div>
  );
};

export default Footer;
