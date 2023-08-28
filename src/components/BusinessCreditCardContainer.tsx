import { FunctionComponent } from "react";
import BusinessCreditCardSection from "./BusinessCreditCardSection";
import CardForm from "./CardForm";
import styles from "./BusinessCreditCardContainer.module.css";
const BusinessCreditCardContainer: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <BusinessCreditCardSection propTop="0px" />
      <CardForm
        iconImageUrl="/frame1.svg"
        paymentDueDateIcon="/frame1.svg"
        paymentDueDateText="Due on"
        frameDiv
        frameDivTop="132px"
      />
    </div>
  );
};

export default BusinessCreditCardContainer;
