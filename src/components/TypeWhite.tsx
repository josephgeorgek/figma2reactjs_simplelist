import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Footer from "./Footer";
import styles from "./TypeWhite.module.css";

type TypeWhiteType = {
  background?: string;

  /** Style props */
  typeWhitePosition?: CSSProperties["position"];
  typeWhiteWidth?: CSSProperties["width"];
  typeWhiteHeight?: CSSProperties["height"];
  typeWhiteFlexShrink?: CSSProperties["flexShrink"];
  typeWhiteTop?: CSSProperties["top"];
  typeWhiteRight?: CSSProperties["right"];
  typeWhiteBottom?: CSSProperties["bottom"];
  typeWhiteLeft?: CSSProperties["left"];
};

const TypeWhite: FunctionComponent<TypeWhiteType> = ({
  background,
  typeWhitePosition,
  typeWhiteWidth,
  typeWhiteHeight,
  typeWhiteFlexShrink,
  typeWhiteTop,
  typeWhiteRight,
  typeWhiteBottom,
  typeWhiteLeft,
}) => {
  const typeWhiteStyle: CSSProperties = useMemo(() => {
    return {
      position: typeWhitePosition,
      width: typeWhiteWidth,
      height: typeWhiteHeight,
      flexShrink: typeWhiteFlexShrink,
      top: typeWhiteTop,
      right: typeWhiteRight,
      bottom: typeWhiteBottom,
      left: typeWhiteLeft,
    };
  }, [
    typeWhitePosition,
    typeWhiteWidth,
    typeWhiteHeight,
    typeWhiteFlexShrink,
    typeWhiteTop,
    typeWhiteRight,
    typeWhiteBottom,
    typeWhiteLeft,
  ]);

  return (
    <div className={styles.typewhite} style={typeWhiteStyle}>
      <div className={styles.homeExploration}>
        <img className={styles.backgroundIcon} alt="" src={background} />
        <div className={styles.dividerscontentDividersthinWrapper}>
          <div className={styles.dividerscontentDividersthin}>
            <div className={styles.fill} />
          </div>
        </div>
        <Footer
          footerPosition="absolute"
          footerBottom="-2177px"
          footerLeft="0px"
        />
      </div>
    </div>
  );
};

export default TypeWhite;
