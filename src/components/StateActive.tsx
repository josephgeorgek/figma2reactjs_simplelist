import { FunctionComponent, useMemo, type CSSProperties } from "react";
import HeaderDropdownActive from "./HeaderDropdownActive";
import styles from "./StateActive.module.css";

type StateActiveType = {
  label?: string;
  chevDownMed?: string;

  /** Style props */
  stateActivePosition?: CSSProperties["position"];
  headerDropdownActiveBorder?: CSSProperties["border"];
  headerDropdownActiveBackgroundColor?: CSSProperties["backgroundColor"];
  headerDropdownActiveBoxShadow?: CSSProperties["boxShadow"];
  labelColor?: CSSProperties["color"];
};

const StateActive: FunctionComponent<StateActiveType> = ({
  label,
  chevDownMed,
  stateActivePosition,
  headerDropdownActiveBorder,
  headerDropdownActiveBackgroundColor,
  headerDropdownActiveBoxShadow,
  labelColor,
}) => {
  const stateActiveStyle: CSSProperties = useMemo(() => {
    return {
      position: stateActivePosition,
    };
  }, [stateActivePosition]);

  const headerDropdownActiveStyle: CSSProperties = useMemo(() => {
    return {
      border: headerDropdownActiveBorder,
      backgroundColor: headerDropdownActiveBackgroundColor,
      boxShadow: headerDropdownActiveBoxShadow,
    };
  }, [
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
    <div className={styles.stateactive} style={stateActiveStyle}>
      <HeaderDropdownActive
        label="Label"
        chevDownMed="/chev-downmed1.svg"
        headerDropdownActivePosition="unset"
        headerDropdownActiveBorder="1px solid var(--neutrals-grey-700-100)"
        headerDropdownActiveBackgroundColor="unset"
        headerDropdownActiveBoxShadow="unset"
        labelColor="#5a707b"
      />
    </div>
  );
};

export default StateActive;
