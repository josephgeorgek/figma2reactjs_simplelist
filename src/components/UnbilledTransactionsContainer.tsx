import { FunctionComponent } from "react";
import styles from "./UnbilledTransactionsContainer.module.css";
const UnbilledTransactionsContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.sortFilterParent}>
        <div className={styles.sortFilter}>
          <div className={styles.unbilledTransactions}>
            Unbilled transactions
          </div>
          <img
            className={styles.chevDownIcon}
            alt=""
            src="/chev-downmed2.svg"
          />
        </div>
        <div className={styles.totalDebitAmountParent}>
          <div className={styles.totalDebitAmount}>Total Debit Amount</div>
          <b className={styles.totalDebitAmount1}>14,552,250,000.00</b>
        </div>
      </div>
    </div>
  );
};

export default UnbilledTransactionsContainer;
