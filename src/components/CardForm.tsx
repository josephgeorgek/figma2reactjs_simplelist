import { FunctionComponent, useMemo, type CSSProperties } from "react";
import BCCWebFront from "./BCCWebFront";
import styles from "./CardForm.module.css";

type CardFormType = {
  iconImageUrl?: string;
  paymentDueDateIcon?: string;
  paymentDueDateText?: string;
  frameDiv?: boolean;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
};

const CardForm: FunctionComponent<CardFormType> = ({
  iconImageUrl,
  paymentDueDateIcon,
  paymentDueDateText,
  frameDiv,
  frameDivTop,
}) => {
  const cardDetailsStyle: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  return (
    <div className={styles.cardDetails} style={cardDetailsStyle}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.cardNoParent}>
            <div className={styles.cardNo}>Card no.</div>
            <div className={styles.overviewParent}>
              <b className={styles.overview}>5588 6088 1234 8888</b>
              <div className={styles.overviewWrapper}>
                <div className={styles.overview1}>Copy</div>
              </div>
            </div>
          </div>
          <div className={styles.expiryDateParent}>
            <div className={styles.cardNo}>Expiry date</div>
            <div className={styles.overviewGroup}>
              <b className={styles.overview}>08/25</b>
              <div />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <img className={styles.frameIcon} alt="" src={iconImageUrl} />
              <div className={styles.dueOn}>CVV</div>
            </div>
            <div className={styles.overviewContainer}>
              <b className={styles.overview4}>•••</b>
              <div className={styles.overviewFrame}>
                <div className={styles.overview1}>Show</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.cardNoParent}>
            <div className={styles.cardNo}>Amount due</div>
            <div className={styles.frameParent2}>
              <div className={styles.overviewParent1}>
                <b className={styles.overview6}>
                  <span className={styles.span}>8,000</span>
                  <span className={styles.span1}>.00</span>
                </b>
                <div className={styles.overviewWrapper1}>
                  <b className={styles.overview7}>SGD</b>
                </div>
              </div>
              {!frameDiv && (
                <div className={styles.overviewWrapper2}>
                  <div className={styles.overview1}>Pay Bill</div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.expiryDateParent}>
            <div className={styles.cardNo}>Min. payment</div>
            <div className={styles.overviewGroup}>
              <b className={styles.overview6}>
                <span className={styles.span}>1,000</span>
                <span className={styles.span1}>.00</span>
              </b>
              <div className={styles.overviewWrapper1}>
                <b className={styles.overview7}>SGD</b>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameIcon}
                alt=""
                src={paymentDueDateIcon}
              />
              <div className={styles.dueOn}>{paymentDueDateText}</div>
            </div>
            <div className={styles.overviewContainer}>
              <div className={styles.overviewParent3}>
                <b className={styles.overview}>25 Aug 2022</b>
                <div />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.cardNoParent}>
            <div className={styles.cardNo}>Credit limit</div>
            <div className={styles.overviewGroup}>
              <b className={styles.overview6}>
                <span className={styles.span}>50,000</span>
                <span className={styles.span1}>.00</span>
              </b>
              <div className={styles.overviewWrapper1}>
                <b className={styles.overview7}>SGD</b>
              </div>
            </div>
          </div>
          <div className={styles.cardNoParent}>
            <div className={styles.cardNo}>Current card spend</div>
            <div className={styles.overviewGroup}>
              <b className={styles.overview6}>
                <span className={styles.span}>10,000</span>
                <span className={styles.span1}>.00</span>
              </b>
              <div className={styles.overviewWrapper1}>
                <b className={styles.overview7}>SGD</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BCCWebFront
        bCCWebFrontPosition="absolute"
        bCCWebFrontTop="93px"
        bCCWebFrontLeft="1013px"
      />
    </div>
  );
};

export default CardForm;
