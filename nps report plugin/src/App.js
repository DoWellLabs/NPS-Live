import { useState, React } from "react";
import NumberScale from "./components/NumberScale";
import { ScaleProvider } from "./components/ScaleContext";
import Sidebar from "./components/setting/Sidebar";
import "./components/templatestyle.scss";

const App = ({ setAttributes }) => {
  const [isCustomize, setIsCustomized] = useState(false);
  const [scaleContent, setScaleContent] = useState(null);
  const [isTitleActive, setIsTitleActive] = useState(true);
  const [setting, setSetting] = useState({
    useScale: true,
    bar: true,
    pie: true,
  });
  const [about, setAbout] = useState(true);
  const [notification, setNotification] = useState(false);
  const [credit, setCredit] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [reportTemplate, setReportTemplate] = useState(true);
  const [pluginSetting, setPluginSetting] = useState(false);
  const openPluginSetting = () => {
    setPluginSetting(true);
    setReportTemplate(false);
  };
  const closePluginSetting = () => {
    setPluginSetting(false);
    setReportTemplate(true);
  };
  const aboutHandler = () => {
    // console.log("ok");
    setAbout(true);
    setNotification(false);
    setCredit(false);
    setPrivacy(false);
  };
  const notificationHandler = () => {
    setAbout(false);
    setNotification(true);
    setCredit(false);
    setPrivacy(false);
  };
  const creditHandler = () => {
    setCredit(true);
    setAbout(false);
    setNotification(false);
    setPrivacy(false);
  };
  const privacyHandler = () => {
    setPrivacy(true);
    setAbout(false);
    setNotification(false);
    setCredit(false);
  };
  return (
    <ScaleProvider>
      {reportTemplate && (
        <>
          {isTitleActive && (
            <>
              <div className="report__title">
                <h1 className="report__textcolor">NPS Reports</h1>
                <div className="report__setting">
                  <input
                    className="report__textinputed"
                    type="text"
                    placeholder="Search Report Template"
                  />
                  <div
                    onClick={openPluginSetting}
                    className="report__svg-container"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M31.1251 18.0001C31.1251 17.5976 31.1076 17.2126 31.0726 16.8101L34.3276 14.3426C35.0276 13.8176 35.2201 12.8376 34.7826 12.0676L31.5101 6.41512C31.3003 6.04444 30.9609 5.76437 30.5571 5.62871C30.1534 5.49304 29.7137 5.51135 29.3226 5.68012L25.5601 7.27262C24.9126 6.81762 24.2301 6.41512 23.5126 6.08262L23.0051 2.04012C22.9001 1.16512 22.1476 0.500122 21.2726 0.500122H14.7451C13.8526 0.500122 13.1001 1.16512 12.9951 2.04012L12.4876 6.08262C11.7701 6.41512 11.0876 6.81762 10.4401 7.27262L6.67765 5.68012C5.87265 5.33012 4.92765 5.64512 4.49015 6.41512L1.21765 12.0851C0.780146 12.8551 0.972646 13.8176 1.67265 14.3601L4.92765 16.8276C4.8551 17.6135 4.8551 18.4043 4.92765 19.1901L1.67265 21.6576C0.972646 22.1826 0.780146 23.1626 1.21765 23.9326L4.49015 29.5851C4.92765 30.3551 5.87265 30.6701 6.67765 30.3201L10.4401 28.7276C11.0876 29.1826 11.7701 29.5851 12.4876 29.9176L12.9951 33.9601C13.1001 34.8351 13.8526 35.5001 14.7276 35.5001H21.2551C22.1301 35.5001 22.8826 34.8351 22.9876 33.9601L23.4951 29.9176C24.2126 29.5851 24.8951 29.1826 25.5426 28.7276L29.3051 30.3201C30.1101 30.6701 31.0551 30.3551 31.4926 29.5851L34.7651 23.9326C35.2026 23.1626 35.0101 22.2001 34.3101 21.6576L31.0551 19.1901C31.1076 18.7876 31.1251 18.4026 31.1251 18.0001ZM18.0701 24.1251C14.6926 24.1251 11.9451 21.3776 11.9451 18.0001C11.9451 14.6226 14.6926 11.8751 18.0701 11.8751C21.4476 11.8751 24.1951 14.6226 24.1951 18.0001C24.1951 21.3776 21.4476 24.1251 18.0701 24.1251Z"
                        fill="#9A96B8"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="report__browse">
                <h2 className="report__header">Browse Report</h2>
                <p className="report__paragraph">See All</p>
              </div>
            </>
          )}
          <div className="scalereport_container">
            {!isCustomize && (
              <>
                {setting.bar && (
                  <NumberScale
                    bar={true}
                    pie={false}
                    btnbg={"yellow"}
                    btncolr={"red"}
                    customize={isCustomize}
                    setCustomize={setIsCustomized}
                    setScale={setScaleContent}
                    setting={setting}
                    setSetting={setSetting}
                    setAttributes={setAttributes}
                    setIsTitleActive={setIsTitleActive}
                    key={1}
                  />
                )}
                {/* {console.log(setting.numberScale )} */}
                {/* <NumberScale row={true} btnbg={'orange'} btncolr={'white'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={2}/> */}
                {/* <NumberScale row={false} btnbg={'green'} btncolr={'white'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={3}/>   */}

                {/* <NumberScale row={false} btnbg={'blue'} btncolr={'white'}  customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={4}/> */}

                {setting.pie && (
                  <NumberScale
                    pie={true}
                    bar={false}
                    btnbg={"#42DCC9"}
                    customize={isCustomize}
                    setCustomize={setIsCustomized}
                    setScale={setScaleContent}
                    setting={setting}
                    setSetting={setSetting}
                    setAttributes={setAttributes}
                    setIsTitleActive={setIsTitleActive}
                    key={5}
                  />
                )}
                {/* <NumberScale emoji={true}  customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={6}/>  */}
              </>
            )}

            {isCustomize && (
              <Sidebar setAttributes={setAttributes} {...scaleContent} />
            )}
          </div>
        </>
      )}

      {pluginSetting && (
        <>
          <div className="container">
            <div className="plugin__container">
              <div className="plugin__header">
                <div className="flex">
                  <div onClick={closePluginSetting}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="rep__svg"
                    >
                      <path
                        d="M25.3329 14.6666H10.4396L16.9462 8.15997C17.4662 7.63997 17.4662 6.78663 16.9462 6.26663C16.8229 6.14303 16.6764 6.04497 16.5151 5.97806C16.3538 5.91115 16.1809 5.87671 16.0062 5.87671C15.8316 5.87671 15.6587 5.91115 15.4974 5.97806C15.3361 6.04497 15.1896 6.14303 15.0662 6.26663L6.27957 15.0533C6.15597 15.1767 6.05791 15.3232 5.991 15.4845C5.92409 15.6458 5.88965 15.8187 5.88965 15.9933C5.88965 16.1679 5.92409 16.3408 5.991 16.5021C6.05791 16.6634 6.15597 16.8099 6.27957 16.9333L15.0662 25.72C15.1897 25.8434 15.3362 25.9413 15.4975 26.0081C15.6588 26.0749 15.8317 26.1093 16.0062 26.1093C16.1808 26.1093 16.3537 26.0749 16.515 26.0081C16.6763 25.9413 16.8228 25.8434 16.9462 25.72C17.0697 25.5965 17.1676 25.45 17.2344 25.2887C17.3012 25.1274 17.3356 24.9545 17.3356 24.78C17.3356 24.6054 17.3012 24.4325 17.2344 24.2712C17.1676 24.11 17.0697 23.9634 16.9462 23.84L10.4396 17.3333H25.3329C26.0662 17.3333 26.6662 16.7333 26.6662 16C26.6662 15.2666 26.0662 14.6666 25.3329 14.6666Z"
                        fill="#494949"
                      />
                    </svg>
                  </div>
                  <h2 className="color">Plugin Settings </h2>
                </div>

                <input
                  className="plugininput"
                  type="text"
                  placeholder="search setting"
                />
              </div>
            </div>

            <div className="style">
              <aside className="aside">
                <div
                  onClick={aboutHandler}
                  className={about === true ? "selectedabout" : "about"}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="svg"
                  >
                    <path
                      d="M16.5 23.25H12C11.8011 23.25 11.6103 23.171 11.4697 23.0303C11.329 22.8897 11.25 22.6989 11.25 22.5V20.25C11.25 19.8522 11.092 19.4706 10.8107 19.1893C10.5294 18.908 10.1478 18.75 9.75 18.75C9.35218 18.75 8.97064 18.908 8.68934 19.1893C8.40804 19.4706 8.25 19.8522 8.25 20.25V22.5C8.25 22.6989 8.17098 22.8897 8.03033 23.0303C7.88968 23.171 7.69891 23.25 7.5 23.25H3C2.40326 23.25 1.83097 23.0129 1.40901 22.591C0.987053 22.169 0.75 21.5967 0.75 21V16.5C0.75 16.3011 0.829018 16.1103 0.96967 15.9697C1.11032 15.829 1.30109 15.75 1.5 15.75H3.75C4.14782 15.75 4.52936 15.592 4.81066 15.3107C5.09196 15.0294 5.25 14.6478 5.25 14.25C5.25 13.8522 5.09196 13.4706 4.81066 13.1893C4.52936 12.908 4.14782 12.75 3.75 12.75H1.5C1.30109 12.75 1.11032 12.671 0.96967 12.5303C0.829018 12.3897 0.75 12.1989 0.75 12V7.5C0.75 6.90326 0.987053 6.33097 1.40901 5.90901C1.83097 5.48705 2.40326 5.25 3 5.25H6.75V3.75C6.75 2.95435 7.06607 2.19129 7.62868 1.62868C8.19129 1.06607 8.95435 0.75 9.75 0.75C10.5456 0.75 11.3087 1.06607 11.8713 1.62868C12.4339 2.19129 12.75 2.95435 12.75 3.75V5.25H16.5C17.0967 5.25 17.669 5.48705 18.091 5.90901C18.5129 6.33097 18.75 6.90326 18.75 7.5V11.25H20.25C21.0456 11.25 21.8087 11.5661 22.3713 12.1287C22.9339 12.6913 23.25 13.4544 23.25 14.25C23.25 15.0456 22.9339 15.8087 22.3713 16.3713C21.8087 16.9339 21.0456 17.25 20.25 17.25H18.75V21C18.75 21.5967 18.5129 22.169 18.091 22.591C17.669 23.0129 17.0967 23.25 16.5 23.25ZM12.75 21.75H16.5C16.6989 21.75 16.8897 21.671 17.0303 21.5303C17.171 21.3897 17.25 21.1989 17.25 21V16.5C17.25 16.3011 17.329 16.1103 17.4697 15.9697C17.6103 15.829 17.8011 15.75 18 15.75H20.25C20.6478 15.75 21.0294 15.592 21.3107 15.3107C21.592 15.0294 21.75 14.6478 21.75 14.25C21.75 13.8522 21.592 13.4706 21.3107 13.1893C21.0294 12.908 20.6478 12.75 20.25 12.75H18C17.8011 12.75 17.6103 12.671 17.4697 12.5303C17.329 12.3897 17.25 12.1989 17.25 12V7.5C17.25 7.30109 17.171 7.11032 17.0303 6.96967C16.8897 6.82902 16.6989 6.75 16.5 6.75H12C11.8011 6.75 11.6103 6.67098 11.4697 6.53033C11.329 6.38968 11.25 6.19891 11.25 6V3.75C11.25 3.35218 11.092 2.97064 10.8107 2.68934C10.5294 2.40804 10.1478 2.25 9.75 2.25C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V6C8.25 6.19891 8.17098 6.38968 8.03033 6.53033C7.88968 6.67098 7.69891 6.75 7.5 6.75H3C2.80109 6.75 2.61032 6.82902 2.46967 6.96967C2.32902 7.11032 2.25 7.30109 2.25 7.5V11.25H3.75C4.54565 11.25 5.30871 11.5661 5.87132 12.1287C6.43393 12.6913 6.75 13.4544 6.75 14.25C6.75 15.0456 6.43393 15.8087 5.87132 16.3713C5.30871 16.9339 4.54565 17.25 3.75 17.25H2.25V21C2.25 21.1989 2.32902 21.3897 2.46967 21.5303C2.61032 21.671 2.80109 21.75 3 21.75H6.75V20.25C6.75 19.4544 7.06607 18.6913 7.62868 18.1287C8.19129 17.5661 8.95435 17.25 9.75 17.25C10.5456 17.25 11.3087 17.5661 11.8713 18.1287C12.4339 18.6913 12.75 19.4544 12.75 20.25V21.75Z"
                      fill={about === true ? "#6E62E5" : "#5E6267"}
                    />
                  </svg>
                  <span className={about === true ? "spanns" : "spann"}>
                    About Plugin{" "}
                  </span>
                </div>

                <div
                  onClick={notificationHandler}
                  className={
                    notification === true
                      ? "selectedaboutplugin"
                      : "aboutplugin"
                  }
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="svgg"
                  >
                    <path
                      d="M19.0609 15.1198C18.584 14.2983 17.875 11.9737 17.875 8.9375C17.875 7.11414 17.1507 5.36545 15.8613 4.07614C14.572 2.78683 12.8233 2.0625 11 2.0625C9.17662 2.0625 7.42793 2.78683 6.13862 4.07614C4.84931 5.36545 4.12498 7.11414 4.12498 8.9375C4.12498 11.9745 3.41514 14.2983 2.93818 15.1198C2.81638 15.3287 2.75181 15.566 2.75098 15.8078C2.75015 16.0496 2.81309 16.2873 2.93346 16.497C3.05382 16.7067 3.22735 16.8809 3.43654 17.0022C3.64573 17.1234 3.8832 17.1873 4.12498 17.1875H7.63209C7.79071 17.9637 8.21253 18.6612 8.82622 19.1622C9.43991 19.6631 10.2078 19.9367 11 19.9367C11.7922 19.9367 12.5601 19.6631 13.1737 19.1622C13.7874 18.6612 14.2093 17.9637 14.3679 17.1875H17.875C18.1167 17.1872 18.354 17.1231 18.5631 17.0018C18.7722 16.8805 18.9456 16.7063 19.0659 16.4966C19.1861 16.2869 19.249 16.0493 19.2481 15.8076C19.2472 15.5659 19.1827 15.3286 19.0609 15.1198ZM11 18.5625C10.5736 18.5624 10.1577 18.4301 9.80957 18.1838C9.46145 17.9376 9.19821 17.5895 9.05607 17.1875H12.9439C12.8018 17.5895 12.5385 17.9376 12.1904 18.1838C11.8423 18.4301 11.4264 18.5624 11 18.5625ZM4.12498 15.8125C4.7867 14.6747 5.49998 12.0381 5.49998 8.9375C5.49998 7.47881 6.07944 6.07986 7.11089 5.04841C8.14234 4.01696 9.54129 3.4375 11 3.4375C12.4587 3.4375 13.8576 4.01696 14.8891 5.04841C15.9205 6.07986 16.5 7.47881 16.5 8.9375C16.5 12.0355 17.2115 14.6721 17.875 15.8125H4.12498Z"
                      fill={notification === true ? "#6E62E5" : "#5E6267"}
                    />
                  </svg>
                  <span
                    className={notification === true ? "spanns1" : "spann1"}
                  >
                    Notifications{" "}
                  </span>
                </div>
                <div
                  onClick={creditHandler}
                  className={
                    credit === true ? "selectedaboutplugin" : "aboutplugin"
                  }
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    className="svgg"
                  >
                    <g clip-path="url(#clip0_721_106)">
                      <path
                        d="M10.0566 8.99936V5.69926C10.7045 5.92904 11.1699 6.54776 11.1699 7.27344H12.2832C12.2832 5.92937 11.3255 4.80485 10.0566 4.54623V3.5625H8.94336V4.54623C7.67452 4.80481 6.7168 5.92934 6.7168 7.27344C6.7168 8.61754 7.67452 9.74203 8.94336 10.0006V13.3007C8.29547 13.071 7.83008 12.4522 7.83008 11.7266H6.7168C6.7168 13.0706 7.67452 14.1952 8.94336 14.4538V15.4375H10.0566V14.4538C11.3255 14.1952 12.2832 13.0707 12.2832 11.7266C12.2832 10.3825 11.3255 9.25797 10.0566 8.99936ZM8.94336 8.84762C8.29547 8.61784 7.83008 7.99911 7.83008 7.27344C7.83008 6.54776 8.29547 5.92904 8.94336 5.69926V8.84762ZM10.0566 13.3007V10.1524C10.7045 10.3822 11.1699 11.0009 11.1699 11.7266C11.1699 12.4522 10.7045 13.071 10.0566 13.3007Z"
                        fill={credit === true ? "#6E62E5" : "#5E6267"}
                      />
                      <path
                        d="M9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0ZM9.5 17.8867C4.86816 17.8867 1.11328 14.1318 1.11328 9.5C1.11328 4.86816 4.86816 1.11328 9.5 1.11328C14.1318 1.11328 17.8867 4.86816 17.8867 9.5C17.8867 14.1318 14.1318 17.8867 9.5 17.8867Z"
                        fill={credit === true ? "#6E62E5" : "#5E6267"}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_721_106">
                        <rect width="19" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className={credit === true ? "spanns2" : "spann2"}>
                    Credit System{" "}
                  </span>
                </div>
                <div
                  onClick={privacyHandler}
                  className={
                    privacy === true ? "selectedaboutplugin" : "aboutplugin"
                  }
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="svgg"
                  >
                    <path
                      d="M11 20.7235C10.727 20.7233 10.4586 20.6532 10.2203 20.5199L7.13103 18.8038C5.5953 17.9499 4.31567 16.7011 3.42455 15.1866C2.53343 13.6721 2.06319 11.9471 2.0625 10.1899V5.42711C2.06224 5.03057 2.20912 4.64805 2.47471 4.3536C2.7403 4.05915 3.1057 3.87373 3.50016 3.83323C4.72913 3.70304 5.93867 3.42966 7.10417 3.01865C8.17281 2.64097 9.19797 2.15 10.1621 1.55413C10.4144 1.39987 10.7044 1.31828 11.0001 1.31836C11.2958 1.31844 11.5857 1.40018 11.8379 1.55458C12.8021 2.15013 13.8273 2.64094 14.8958 3.01865C16.0613 3.42967 17.2709 3.70306 18.4998 3.83326C18.8943 3.87376 19.2597 4.05918 19.5253 4.35362C19.7909 4.64806 19.9378 5.03058 19.9375 5.42711V10.1899C19.9368 11.9471 19.4666 13.6722 18.5755 15.1866C17.6843 16.7011 16.4047 17.9499 14.869 18.8038L11.7788 20.5204C11.5408 20.6534 11.2727 20.7234 11 20.7235ZM11 2.69187C10.9596 2.69169 10.9199 2.70269 10.8854 2.72366C9.83759 3.37071 8.72363 3.90442 7.5625 4.31481C6.29576 4.76183 4.98104 5.05896 3.64518 5.20015C3.58842 5.20507 3.53558 5.23113 3.49712 5.27316C3.45866 5.31519 3.43738 5.37013 3.4375 5.42711V10.1899C3.43804 11.7019 3.84265 13.1862 4.60944 14.4893C5.37624 15.7924 6.47736 16.8669 7.79883 17.6016L10.889 19.3181C10.9227 19.3371 10.9608 19.3471 10.9995 19.3472C11.0382 19.3473 11.0763 19.3374 11.1101 19.3186L14.2012 17.6016C15.5227 16.867 16.6238 15.7925 17.3906 14.4894C18.1574 13.1862 18.562 11.7019 18.5625 10.1899V5.42711C18.5626 5.37014 18.5413 5.31521 18.5029 5.27318C18.4644 5.23116 18.4116 5.2051 18.3548 5.20018C17.019 5.05898 15.7042 4.76183 14.4375 4.31481C13.2764 3.90442 12.1624 3.37114 11.1146 2.72408C11.0802 2.70278 11.0405 2.69162 11 2.69187Z"
                      fill={privacy === true ? "#6E62E5" : "#5E6267"}
                    />
                    <path
                      d="M10.5418 13.0626C10.3734 13.0628 10.2109 13.001 10.0853 12.8889L8.02276 11.0556C7.8871 10.9343 7.80505 10.7642 7.79459 10.5826C7.78414 10.4009 7.84613 10.2225 7.96698 10.0865C8.08783 9.95051 8.25768 9.86796 8.43929 9.85696C8.62091 9.84597 8.79947 9.90744 8.93585 10.0279L10.4979 11.4163L13.478 8.23797C13.5395 8.17094 13.6136 8.11678 13.6962 8.07861C13.7788 8.04044 13.8681 8.01903 13.9589 8.01562C14.0498 8.01221 14.1405 8.02686 14.2257 8.05874C14.3108 8.09061 14.3888 8.13907 14.4552 8.2013C14.5215 8.26354 14.5748 8.33831 14.612 8.42129C14.6492 8.50428 14.6696 8.59382 14.672 8.68474C14.6744 8.77565 14.6587 8.86614 14.6258 8.95094C14.593 9.03575 14.5436 9.1132 14.4806 9.1788L11.0431 12.8455C10.9789 12.9141 10.9013 12.9688 10.815 13.0062C10.7288 13.0435 10.6357 13.0627 10.5418 13.0626Z"
                      fill={privacy === true ? "#6E62E5" : "#5E6267"}
                    />
                  </svg>
                  <span className={privacy === true ? "spanns3" : "spann3"}>
                    Privacy{" "}
                  </span>
                </div>
                <button className="btnn">Download Reports</button>
              </aside>
              <section className=" section">
                {notification && (
                  <>
                    <h1>Upgrade Nps Report</h1>
                    <div className="content">
                      <p className="paragraph1">
                        Upgrade Plan for unlimited access of exciting features.
                      </p>
                      {/* <h3>hello</h3> */}
                      <button className="pluginbtn">view plans</button>
                    </div>
                  </>
                )}

                {credit && (
                  <>
                    <h1>Credit System</h1>
                    <div className="content">
                      <p className="paragraph1">
                        Choose how you make purchase on Nps Report Plugin
                      </p>
                      {/* <h3>hello</h3> */}
                      <button className="pluginbtn">Enable Purchase</button>
                    </div>
                  </>
                )}
                {privacy && (
                  <>
                    <h1>Privacy</h1>
                    <div className="content">
                      <div className="pluginspan">
                        <span>Review our privacy policy documentation</span>
                        <a href="index.html">Click here</a>
                      </div>
                    </div>
                  </>
                )}
                {about && (
                  <>
                    <h1>About Plugin</h1>
                    <div className="content">
                      <p className="paragraph4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </>
                )}
              </section>
            </div>
          </div>
        </>
      )}
    </ScaleProvider>
  );
};

export default App;
