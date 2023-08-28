import { FunctionComponent } from "react";
import BusinessCreditCardSection from "./BusinessCreditCardSection";
import CardFormContainer from "./CardFormContainer";
import styles from "./BusinessCreditCardContainer1.module.css";
const BusinessCreditCardContainer1: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <BusinessCreditCardSection propTop="0px" />
      <CardFormContainer
        dueDateIcon="/frame.svg"
        paymentDueIcon="/frame.svg"
        dueDateText="Due on"
        showFrameDiv
      />
    </div>
  );
};

export default BusinessCreditCardContainer1;
