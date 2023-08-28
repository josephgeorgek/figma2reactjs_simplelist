import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CoreTrafficLightsCatalin.module.css";

type CoreTrafficLightsCatalinType = {
  /** Style props */
  coreTrafficLightsCatalinPosition?: CSSProperties["position"];
  coreTrafficLightsCatalinTop?: CSSProperties["top"];
  coreTrafficLightsCatalinLeft?: CSSProperties["left"];
};

const CoreTrafficLightsCatalin: FunctionComponent<
  CoreTrafficLightsCatalinType
> = ({
  coreTrafficLightsCatalinPosition,
  coreTrafficLightsCatalinTop,
  coreTrafficLightsCatalinLeft,
}) => {
  const coreTrafficLightsCatalinStyle: CSSProperties = useMemo(() => {
    return {
      position: coreTrafficLightsCatalinPosition,
      top: coreTrafficLightsCatalinTop,
      left: coreTrafficLightsCatalinLeft,
    };
  }, [
    coreTrafficLightsCatalinPosition,
    coreTrafficLightsCatalinTop,
    coreTrafficLightsCatalinLeft,
  ]);

  return (
    <img
      className={styles.coreTrafficLightsCatalin}
      alt=""
      src="/core--traffic-lights-catalina.svg"
      style={coreTrafficLightsCatalinStyle}
    />
  );
};

export default CoreTrafficLightsCatalin;
