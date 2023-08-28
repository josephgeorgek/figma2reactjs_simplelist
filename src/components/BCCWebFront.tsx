import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BCCWebFront.module.css";

type BCCWebFrontType = {
  /** Style props */
  bCCWebFrontPosition?: CSSProperties["position"];
  bCCWebFrontTop?: CSSProperties["top"];
  bCCWebFrontLeft?: CSSProperties["left"];
};

const BCCWebFront: FunctionComponent<BCCWebFrontType> = ({
  bCCWebFrontPosition,
  bCCWebFrontTop,
  bCCWebFrontLeft,
}) => {
  const bCCWebFrontStyle: CSSProperties = useMemo(() => {
    return {
      position: bCCWebFrontPosition,
      top: bCCWebFrontTop,
      left: bCCWebFrontLeft,
    };
  }, [bCCWebFrontPosition, bCCWebFrontTop, bCCWebFrontLeft]);

  return (
    <div className={styles.bccWebFront} style={bCCWebFrontStyle}>
      <div className={styles.bccWithNewOcbcLogo}>
        <img
          className={styles.bdcWithNewLogo1}
          alt=""
          src="/bdc-with-new-logo-1@2x.png"
        />
        <div className={styles.patrickTan}>Patrick Tan</div>
      </div>
    </div>
  );
};

export default BCCWebFront;
