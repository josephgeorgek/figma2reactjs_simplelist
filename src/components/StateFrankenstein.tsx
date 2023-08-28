import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateFrankenstein.module.css";

type StateFrankensteinType = {
  rectangle?: string;
  icoMessage?: string;
  icoNavHome?: string;
  logo?: string;
  new1?: string;
  line7?: string;
  showOCBCLogo?: boolean;

  /** Style props */
  stateFrankensteinPosition?: CSSProperties["position"];
  stateFrankensteinTop?: CSSProperties["top"];
  stateFrankensteinLeft?: CSSProperties["left"];
  icoMessageIconHeight?: CSSProperties["height"];
  icoMessageIconTop?: CSSProperties["top"];
};

const StateFrankenstein: FunctionComponent<StateFrankensteinType> = ({
  rectangle,
  icoMessage,
  icoNavHome,
  logo,
  new1,
  line7,
  showOCBCLogo,
  stateFrankensteinPosition,
  stateFrankensteinTop,
  stateFrankensteinLeft,
  icoMessageIconHeight,
  icoMessageIconTop,
}) => {
  const stateFrankensteinStyle: CSSProperties = useMemo(() => {
    return {
      position: stateFrankensteinPosition,
      top: stateFrankensteinTop,
      left: stateFrankensteinLeft,
    };
  }, [stateFrankensteinPosition, stateFrankensteinTop, stateFrankensteinLeft]);

  const icoMessageIconStyle: CSSProperties = useMemo(() => {
    return {
      height: icoMessageIconHeight,
      top: icoMessageIconTop,
    };
  }, [icoMessageIconHeight, icoMessageIconTop]);

  return (
    <div className={styles.statefrankenstein} style={stateFrankensteinStyle}>
      <div className={styles.navBar}>
        <div className={styles.rectangleParent}>
          <img className={styles.rectangleIcon} alt="" src={rectangle} />
          <div className={styles.rectangle} />
          <div className={styles.group}>
            <div className={styles.english}>English</div>
            <img className={styles.lineIcon} alt="" src="/line.svg" />
            <div className={styles.div}>中文</div>
          </div>
          <div className={styles.logoutParent}>
            <div className={styles.logout}>Logout</div>
            <img className={styles.icoLogoutIcon} alt="" src="/icologout.svg" />
          </div>
          <div className={styles.mailboxParent}>
            <div className={styles.mailbox}>Mailbox</div>
            <img
              className={styles.icoMessageIcon}
              alt=""
              src={icoMessage}
              style={icoMessageIconStyle}
            />
          </div>
          <b className={styles.b}>88</b>
          <div className={styles.navBg} />
          <div className={styles.icoNavHomeParent}>
            <img className={styles.icoNavHomeIcon} alt="" src={icoNavHome} />
            <div className={styles.administration}>Administration</div>
            <div className={styles.tools}>Tools</div>
            <div className={styles.tradeFinance}>{`Trade Finance `}</div>
            <div className={styles.financialManagement}>
              Financial Management
            </div>
            <div className={styles.transactions}>Transactions</div>
            <div className={styles.accounts}>Accounts</div>
          </div>
          <div className={styles.ocbcLogoParent}>
            {showOCBCLogo && (
              <div className={styles.ocbcLogo}>
                <img className={styles.logoIcon} alt="" src={logo} />
                <img className={styles.newIcon} alt="" src={new1} />
              </div>
            )}
            <img className={styles.frameChild} alt="" src={line7} />
            <div className={styles.goodMorningPatricParent}>
              <div className={styles.goodMorningPatricContainer}>
                <span>{`Good morning, `}</span>
                <b>PATRICK TAN</b>
              </div>
              <div className={styles.esolutionAlphaPte}>
                ESOLUTION ALPHA PTE LTD
              </div>
              <div className={styles.lastLogin17}>
                Last Login: 17 Oct 2021 10:21 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateFrankenstein;
