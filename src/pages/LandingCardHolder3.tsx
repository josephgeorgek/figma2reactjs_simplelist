import { FunctionComponent } from "react";
import TypeWhite from "../components/TypeWhite";
import CardFormContainer from "../components/CardFormContainer";
import OnDarkBGNo from "../components/OnDarkBGNo";
import BusinessCreditCardSection from "../components/BusinessCreditCardSection";
import UnbilledTransactionsContainer from "../components/UnbilledTransactionsContainer";
import StateFrankenstein from "../components/StateFrankenstein";
import CoreGoogleChromeToolbar from "../components/CoreGoogleChromeToolbar";
import styles from "./LandingCardHolder3.module.css";
const LandingCardHolder3: FunctionComponent = () => {
  return (
    <div className={styles.landingCardHolder}>
      <TypeWhite
        background="/background3.svg"
        typeWhitePosition="absolute"
        typeWhiteWidth="100%"
        typeWhiteHeight="113.78%"
        typeWhiteFlexShrink="unset"
        typeWhiteTop="8.78%"
        typeWhiteRight="0%"
        typeWhiteBottom="-22.56%"
        typeWhiteLeft="0%"
      />
      <div className={styles.header}>
        <CardFormContainer
          dueDateIcon="/frame1.svg"
          paymentDueIcon="/frame1.svg"
          dueDateText="Payment due date"
          showFrameDiv={false}
          dueOnTop="346px"
        />
        <OnDarkBGNo
          onDarkBGNoPosition="absolute"
          onDarkBGNoBackgroundColor="#d7dadc"
          onDarkBGNoFlexShrink="unset"
          onDarkBGNoTop="345px"
          onDarkBGNoLeft="0px"
        />
        <BusinessCreditCardSection propTop="214px" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.transactionHistoryParent}>
                <b className={styles.transactionHistory}>Transaction history</b>
                <div className={styles.estatements}>eStatements</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <UnbilledTransactionsContainer />
              <div className={styles.frameParent1}>
                <div className={styles.transactionDateWrapper}>
                  <div className={styles.transactionDate}>Transaction Date</div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <div className={styles.description}>Description</div>
                </div>
                <div className={styles.transactionAmountSgdWrapper}>
                  <div className={styles.transactionDate}>
                    Transaction Amount (SGD)
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>18 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>18 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>18 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>18 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>17 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>17 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>16 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>16 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>15 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>14 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>14 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>14 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>14 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>14 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>14 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>13 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>13 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>12 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>12 Aug 2022</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop}>12 Aug 2022</div>
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      CREDIT CARD BILL PAYMENT
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      THINKIFIC.COM VAN
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>CASH REBATE</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>CASH REBATE</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      ALIBABA.COM Sin
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      CREDIT CARD BILL PAYMENT
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      THINKIFIC.COM VAN
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>CASH REBATE</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>CASH REBATE</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      ALIBABA.COM Sin
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      CREDIT CARD BILL PAYMENT
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      THINKIFIC.COM VAN
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>CASH REBATE</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>CASH REBATE</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      ALIBABA.COM Sin
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      CREDIT CARD BILL PAYMENT
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      THINKIFIC.COM VAN
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>CASH REBATE</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>CASH REBATE</div>
                  </div>
                  <div className={styles.frameChild} />
                  <div className={styles.bubbleTeaShop5341Wrapper}>
                    <div className={styles.bubbleTeaShop20}>
                      ALIBABA.COM Sin
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.amountParent}>
                    <b className={styles.amount}>10,000.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountGroup}>
                    <b className={styles.amount}>- 500.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountContainer}>
                    <b className={styles.amount}>50.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountContainer}>
                    <b className={styles.amount}>50.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountGroup}>
                    <b className={styles.amount}>- 300.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountParent}>
                    <b className={styles.amount}>10,000.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountGroup}>
                    <b className={styles.amount}>- 500.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountContainer}>
                    <b className={styles.amount}>50.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountContainer}>
                    <b className={styles.amount}>50.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountGroup}>
                    <b className={styles.amount}>- 300.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountParent}>
                    <b className={styles.amount}>10,000.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountGroup}>
                    <b className={styles.amount}>- 500.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountContainer}>
                    <b className={styles.amount}>50.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountContainer}>
                    <b className={styles.amount}>50.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountGroup}>
                    <b className={styles.amount}>- 300.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountParent}>
                    <b className={styles.amount}>10,000.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountGroup}>
                    <b className={styles.amount}>- 500.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountContainer}>
                    <b className={styles.amount}>50.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountContainer}>
                    <b className={styles.amount}>50.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                  <div className={styles.frameChild35} />
                  <div className={styles.amountGroup}>
                    <b className={styles.amount}>- 300.00</b>
                    <b className={styles.amount1}>SGD</b>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle1@2x.png"
            />
          </div>
          <div className={styles.footer}>
            <div className={styles.ocbcAllRights}>
              © OCBC. All Rights Reserved.
            </div>
            <div
              className={styles.ocbcAllRights}
            >{`Conditions of Access | Security & Privacy`}</div>
          </div>
        </div>
        <img className={styles.mouse2Icon} alt="" src="/mouse-2@2x.png" />
      </div>
      <StateFrankenstein
        rectangle="/rectangle2.svg"
        icoMessage="/icomessage1.svg"
        icoNavHome="/iconavhome4.svg"
        logo="/logo2.svg"
        new1="/new4.svg"
        line7="/line-71.svg"
        showOCBCLogo={false}
        stateFrankensteinPosition="absolute"
        stateFrankensteinTop="78px"
        stateFrankensteinLeft="0px"
        icoMessageIconHeight="49.39%"
        icoMessageIconTop="-0.45%"
      />
      <CoreGoogleChromeToolbar
        tabCloseIcon="/tabcloseicon3.svg"
        favorite="/favorite1.svg"
        user1="/user1@2x.png"
        showTitle={false}
        showFaviconReplaceMe={false}
        showUrl={false}
        coreGoogleChromeToolbarPosition="absolute"
        coreGoogleChromeToolbarWidth="1440px"
        coreGoogleChromeToolbarTop="0px"
        coreGoogleChromeToolbarLeft="0px"
        faviconReplaceMeTop="17px"
        faviconReplaceMeLeft="89px"
      />
    </div>
  );
};

export default LandingCardHolder3;
