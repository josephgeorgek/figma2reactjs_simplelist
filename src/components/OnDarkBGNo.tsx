import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./OnDarkBGNo.module.css";

type OnDarkBGNoType = {
  /** Style props */
  onDarkBGNoPosition?: CSSProperties["position"];
  onDarkBGNoBackgroundColor?: CSSProperties["backgroundColor"];
  onDarkBGNoFlexShrink?: CSSProperties["flexShrink"];
  onDarkBGNoTop?: CSSProperties["top"];
  onDarkBGNoLeft?: CSSProperties["left"];
};

const OnDarkBGNo: FunctionComponent<OnDarkBGNoType> = ({
  onDarkBGNoPosition,
  onDarkBGNoBackgroundColor,
  onDarkBGNoFlexShrink,
  onDarkBGNoTop,
  onDarkBGNoLeft,
}) => {
  const onDarkBGNoStyle: CSSProperties = useMemo(() => {
    return {
      position: onDarkBGNoPosition,
      backgroundColor: onDarkBGNoBackgroundColor,
      flexShrink: onDarkBGNoFlexShrink,
      top: onDarkBGNoTop,
      left: onDarkBGNoLeft,
    };
  }, [
    onDarkBGNoPosition,
    onDarkBGNoBackgroundColor,
    onDarkBGNoFlexShrink,
    onDarkBGNoTop,
    onDarkBGNoLeft,
  ]);

  return <div className={styles.onDarkBgno} style={onDarkBGNoStyle} />;
};

export default OnDarkBGNo;
