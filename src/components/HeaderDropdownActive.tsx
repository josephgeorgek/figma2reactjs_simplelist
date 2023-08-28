import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HeaderDropdownActive.module.css";

type HeaderDropdownActiveType = {
  label?: string;
  chevDownMed?: string;

  /** Style props */
  headerDropdownActivePosition?: CSSProperties["position"];
  headerDropdownActiveBorder?: CSSProperties["border"];
  headerDropdownActiveBackgroundColor?: CSSProperties["backgroundColor"];
  headerDropdownActiveBoxShadow?: CSSProperties["boxShadow"];
  labelColor?: CSSProperties["color"];
};

const HeaderDropdownActive: FunctionComponent<HeaderDropdownActiveType> = ({
  label = "Label",
  chevDownMed,
  headerDropdownActivePosition,
  headerDropdownActiveBorder,
  headerDropdownActiveBackgroundColor,
  headerDropdownActiveBoxShadow,
  labelColor,
}) => {
  const headerDropdownActiveStyle: CSSProperties = useMemo(() => {
    return {
      position: headerDropdownActivePosition,
      border: headerDropdownActiveBorder,
      backgroundColor: headerDropdownActiveBackgroundColor,
      boxShadow: headerDropdownActiveBoxShadow,
    };
  }, [
    headerDropdownActivePosition,
    headerDropdownActiveBorder,
    headerDropdownActiveBackgroundColor,
    headerDropdownActiveBoxShadow,
  ]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  return (
    <div
      className={styles.headerDropdownactive}
      style={headerDropdownActiveStyle}
    >
      <div className={styles.labelWrapper}>
        <div className={styles.label} style={labelStyle}>
          {label}
        </div>
      </div>
      <img className={styles.chevDownmedIcon} alt="" src={chevDownMed} />
    </div>
  );
};

export default HeaderDropdownActive;
