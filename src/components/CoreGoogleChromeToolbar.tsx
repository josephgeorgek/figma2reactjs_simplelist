import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CoreTrafficLightsCatalin from "./CoreTrafficLightsCatalin";
import styles from "./CoreGoogleChromeToolbar.module.css";

type CoreGoogleChromeToolbarType = {
  tabCloseIcon?: string;
  favorite?: string;
  user1?: string;
  showTitle?: boolean;
  showFaviconReplaceMe?: boolean;
  showUrl?: boolean;

  /** Style props */
  coreGoogleChromeToolbarPosition?: CSSProperties["position"];
  coreGoogleChromeToolbarWidth?: CSSProperties["width"];
  coreGoogleChromeToolbarTop?: CSSProperties["top"];
  coreGoogleChromeToolbarLeft?: CSSProperties["left"];
  faviconReplaceMeTop?: CSSProperties["top"];
  faviconReplaceMeLeft?: CSSProperties["left"];
};

const CoreGoogleChromeToolbar: FunctionComponent<
  CoreGoogleChromeToolbarType
> = ({
  tabCloseIcon,
  favorite,
  user1,
  showTitle,
  showFaviconReplaceMe,
  showUrl,
  coreGoogleChromeToolbarPosition,
  coreGoogleChromeToolbarWidth,
  coreGoogleChromeToolbarTop,
  coreGoogleChromeToolbarLeft,
  faviconReplaceMeTop,
  faviconReplaceMeLeft,
}) => {
  const coreGoogleChromeToolbarStyle: CSSProperties = useMemo(() => {
    return {
      position: coreGoogleChromeToolbarPosition,
      width: coreGoogleChromeToolbarWidth,
      top: coreGoogleChromeToolbarTop,
      left: coreGoogleChromeToolbarLeft,
    };
  }, [
    coreGoogleChromeToolbarPosition,
    coreGoogleChromeToolbarWidth,
    coreGoogleChromeToolbarTop,
    coreGoogleChromeToolbarLeft,
  ]);

  const faviconReplaceMeStyle: CSSProperties = useMemo(() => {
    return {
      top: faviconReplaceMeTop,
      left: faviconReplaceMeLeft,
    };
  }, [faviconReplaceMeTop, faviconReplaceMeLeft]);

  return (
    <div
      className={styles.coreGoogleChromeToolbar}
      style={coreGoogleChromeToolbarStyle}
    >
      <div className={styles.tabsBar}>
        <div className={styles.background} />
        <img className={styles.newTabIcon} alt="" src="/newtabicon.svg" />
        <CoreTrafficLightsCatalin
          coreTrafficLightsCatalinPosition="absolute"
          coreTrafficLightsCatalinTop="16px"
          coreTrafficLightsCatalinLeft="13px"
        />
        <div className={styles.tab}>
          <img className={styles.tabIcon} alt="" src="/tab.svg" />
          <div className={styles.tabTitle}>
            {showTitle && (
              <div className={styles.title}>OCBC Bank Singapore</div>
            )}
          </div>
          <img className={styles.tabCloseIcon} alt="" src={tabCloseIcon} />
          {showFaviconReplaceMe && (
            <img
              className={styles.faviconReplaceMe}
              alt=""
              src="/favicon-replace-me.svg"
              style={faviconReplaceMeStyle}
            />
          )}
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.background1}>
          <div className={styles.background2} />
          <div className={styles.separator} />
        </div>
        <img className={styles.actionsIcon} alt="" src="/actions.svg" />
        <div className={styles.addressBar}>
          <div className={styles.addressBarBackground} />
          <img className={styles.secureIcon} alt="" src="/secureicon.svg" />
          {showUrl && (
            <div className={styles.url}>
              <span className={styles.urlTxt}>
                <span>https://</span>
                <span className={styles.wwwocbccom}>www.ocbc.com</span>
              </span>
            </div>
          )}
        </div>
        <img className={styles.favoriteIcon} alt="" src={favorite} />
        <img className={styles.userIcon} alt="" src={user1} />
        <img className={styles.menuIcon} alt="" src="/menuicon.svg" />
      </div>
      <div className={styles.cleanshot20200225At1502} />
    </div>
  );
};

export default CoreGoogleChromeToolbar;
