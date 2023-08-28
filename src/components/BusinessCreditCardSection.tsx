import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateActive from "./StateActive";
import styles from "./BusinessCreditCardSection.module.css";

type BusinessCreditCardSectionType = {
  /** Style props */
  propTop?: CSSProperties["top"];
};

const BusinessCreditCardSection: FunctionComponent<
  BusinessCreditCardSectionType
> = ({ propTop }) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.transferMoneyWrapper}>
              <b className={styles.transferMoney}>Business Credit Card</b>
            </div>
          </div>
          <div className={styles.iconsutilitychevronDown} />
        </div>
      </div>
      <div className={styles.secondaryParent}>
        <StateActive
          label="Patrick Tan"
          chevDownMed="/chev-downmed2.svg"
          stateActivePosition="unset"
          headerDropdownActiveBorder="unset"
          headerDropdownActiveBackgroundColor="rgba(255, 255, 255, 0.5)"
          headerDropdownActiveBoxShadow="0px 2px 6px rgba(0, 0, 0, 0.05)"
          labelColor="#39474e"
        />
        <div className={styles.frameDiv}>
          <div className={styles.loadTemplateWrapper}>
            <div className={styles.loadTemplate}>Load template</div>
          </div>
          <img className={styles.frameChild} alt="" src="/frame-1241.svg" />
        </div>
      </div>
    </div>
  );
};

export default BusinessCreditCardSection;
