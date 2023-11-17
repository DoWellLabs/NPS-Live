/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NumberScale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NumberScale */ "./src/components/NumberScale.js");
/* harmony import */ var _components_ScaleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ScaleContext */ "./src/components/ScaleContext.js");
/* harmony import */ var _components_setting_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/setting/Sidebar */ "./src/components/setting/Sidebar.js");
/* harmony import */ var _components_templatestyle_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/templatestyle.scss */ "./src/components/templatestyle.scss");






const App = ({
  setAttributes
}) => {
  const [isCustomize, setIsCustomized] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scaleContent, setScaleContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isTitleActive, setIsTitleActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [setting, setSetting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    useScale: true,
    emojiScale: true,
    numberScale: true
  });
  const [scaleSettingAbout, setScaleSettingAbout] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [scaleSettingNotification, setScaleSettingNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scaleSettingCredit, setScaleSettingCredit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scaleSettingPrivacy, setScaleSettingPrivacy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scaleTemplate, setScaleTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [scalePluginSetting, setScalePluginSetting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const openScalePluginSetting = () => {
    setScalePluginSetting(true);
    setScaleTemplate(false);
  };
  const closeSCalePluginSetting = () => {
    setScalePluginSetting(false);
    setScaleTemplate(true);
  };
  const ScaleAboutHandler = () => {
    // console.log("ok");
    setScaleSettingAbout(true);
    setScaleSettingNotification(false);
    setScaleSettingCredit(false);
    setScaleSettingPrivacy(false);
  };
  const scaleNotificationHandler = () => {
    setScaleSettingAbout(false);
    setScaleSettingNotification(true);
    setScaleSettingCredit(false);
    setScaleSettingPrivacy(false);
  };
  const scaleCreditHandler = () => {
    setScaleSettingCredit(true);
    setScaleSettingAbout(false);
    setScaleSettingNotification(false);
    setScaleSettingPrivacy(false);
  };
  const scalePrivacyHandler = () => {
    setScaleSettingPrivacy(true);
    setScaleSettingAbout(false);
    setScaleSettingNotification(false);
    setScaleSettingCredit(false);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ScaleContext__WEBPACK_IMPORTED_MODULE_2__.ScaleProvider, null, scaleTemplate && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isTitleActive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "textcolor"
  }, "NPS Scale"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "textinputed",
    type: "text",
    placeholder: "Search Report Template"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "svg-container",
    onClick: openScalePluginSetting
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M31.1251 18.0001C31.1251 17.5976 31.1076 17.2126 31.0726 16.8101L34.3276 14.3426C35.0276 13.8176 35.2201 12.8376 34.7826 12.0676L31.5101 6.41512C31.3003 6.04444 30.9609 5.76437 30.5571 5.62871C30.1534 5.49304 29.7137 5.51135 29.3226 5.68012L25.5601 7.27262C24.9126 6.81762 24.2301 6.41512 23.5126 6.08262L23.0051 2.04012C22.9001 1.16512 22.1476 0.500122 21.2726 0.500122H14.7451C13.8526 0.500122 13.1001 1.16512 12.9951 2.04012L12.4876 6.08262C11.7701 6.41512 11.0876 6.81762 10.4401 7.27262L6.67765 5.68012C5.87265 5.33012 4.92765 5.64512 4.49015 6.41512L1.21765 12.0851C0.780146 12.8551 0.972646 13.8176 1.67265 14.3601L4.92765 16.8276C4.8551 17.6135 4.8551 18.4043 4.92765 19.1901L1.67265 21.6576C0.972646 22.1826 0.780146 23.1626 1.21765 23.9326L4.49015 29.5851C4.92765 30.3551 5.87265 30.6701 6.67765 30.3201L10.4401 28.7276C11.0876 29.1826 11.7701 29.5851 12.4876 29.9176L12.9951 33.9601C13.1001 34.8351 13.8526 35.5001 14.7276 35.5001H21.2551C22.1301 35.5001 22.8826 34.8351 22.9876 33.9601L23.4951 29.9176C24.2126 29.5851 24.8951 29.1826 25.5426 28.7276L29.3051 30.3201C30.1101 30.6701 31.0551 30.3551 31.4926 29.5851L34.7651 23.9326C35.2026 23.1626 35.0101 22.2001 34.3101 21.6576L31.0551 19.1901C31.1076 18.7876 31.1251 18.4026 31.1251 18.0001ZM18.0701 24.1251C14.6926 24.1251 11.9451 21.3776 11.9451 18.0001C11.9451 14.6226 14.6926 11.8751 18.0701 11.8751C21.4476 11.8751 24.1951 14.6226 24.1951 18.0001C24.1951 21.3776 21.4476 24.1251 18.0701 24.1251Z",
    fill: "#9A96B8"
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "browse"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "header"
  }, "Browse Scale"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "paragraph"
  }, "See All"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_container"
  }, !isCustomize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, setting.numberScale && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_NumberScale__WEBPACK_IMPORTED_MODULE_1__["default"], {
    row: true,
    emoji: false,
    btnbg: "yellow",
    btncolr: "red",
    customize: isCustomize,
    setCustomize: setIsCustomized,
    setScale: setScaleContent,
    setIsTitleActive: setIsTitleActive,
    setting: setting,
    setSetting: setSetting,
    key: 1,
    setAttributes: setAttributes
  }), setting.emojiScale && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_NumberScale__WEBPACK_IMPORTED_MODULE_1__["default"], {
    row: true,
    emoji: true,
    btnbg: "#42DCC9",
    customize: isCustomize,
    setCustomize: setIsCustomized,
    setIsTitleActive: setIsTitleActive,
    setScale: setScaleContent,
    setting: setting,
    setSetting: setSetting,
    key: 5,
    setAttributes: setAttributes
  })), isCustomize && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_setting_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setAttributes: setAttributes,
    ...scaleContent
  }))), scalePluginSetting && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scalecontainer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scaleplugin__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scaleplugin__header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scaleflex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: closeSCalePluginSetting
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    className: "rep__svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M25.3329 14.6666H10.4396L16.9462 8.15997C17.4662 7.63997 17.4662 6.78663 16.9462 6.26663C16.8229 6.14303 16.6764 6.04497 16.5151 5.97806C16.3538 5.91115 16.1809 5.87671 16.0062 5.87671C15.8316 5.87671 15.6587 5.91115 15.4974 5.97806C15.3361 6.04497 15.1896 6.14303 15.0662 6.26663L6.27957 15.0533C6.15597 15.1767 6.05791 15.3232 5.991 15.4845C5.92409 15.6458 5.88965 15.8187 5.88965 15.9933C5.88965 16.1679 5.92409 16.3408 5.991 16.5021C6.05791 16.6634 6.15597 16.8099 6.27957 16.9333L15.0662 25.72C15.1897 25.8434 15.3362 25.9413 15.4975 26.0081C15.6588 26.0749 15.8317 26.1093 16.0062 26.1093C16.1808 26.1093 16.3537 26.0749 16.515 26.0081C16.6763 25.9413 16.8228 25.8434 16.9462 25.72C17.0697 25.5965 17.1676 25.45 17.2344 25.2887C17.3012 25.1274 17.3356 24.9545 17.3356 24.78C17.3356 24.6054 17.3012 24.4325 17.2344 24.2712C17.1676 24.11 17.0697 23.9634 16.9462 23.84L10.4396 17.3333H25.3329C26.0662 17.3333 26.6662 16.7333 26.6662 16C26.6662 15.2666 26.0662 14.6666 25.3329 14.6666Z",
    fill: "#494949"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "scalecolor"
  }, "Plugin Settings ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "scaleplugininput",
    type: "text",
    placeholder: "search setting"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scalestyle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    className: "scaleaside"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: ScaleAboutHandler,
    className: scaleSettingAbout === true ? "scaleselectedabout" : "scaleabout"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    className: "scalesvg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.5 23.25H12C11.8011 23.25 11.6103 23.171 11.4697 23.0303C11.329 22.8897 11.25 22.6989 11.25 22.5V20.25C11.25 19.8522 11.092 19.4706 10.8107 19.1893C10.5294 18.908 10.1478 18.75 9.75 18.75C9.35218 18.75 8.97064 18.908 8.68934 19.1893C8.40804 19.4706 8.25 19.8522 8.25 20.25V22.5C8.25 22.6989 8.17098 22.8897 8.03033 23.0303C7.88968 23.171 7.69891 23.25 7.5 23.25H3C2.40326 23.25 1.83097 23.0129 1.40901 22.591C0.987053 22.169 0.75 21.5967 0.75 21V16.5C0.75 16.3011 0.829018 16.1103 0.96967 15.9697C1.11032 15.829 1.30109 15.75 1.5 15.75H3.75C4.14782 15.75 4.52936 15.592 4.81066 15.3107C5.09196 15.0294 5.25 14.6478 5.25 14.25C5.25 13.8522 5.09196 13.4706 4.81066 13.1893C4.52936 12.908 4.14782 12.75 3.75 12.75H1.5C1.30109 12.75 1.11032 12.671 0.96967 12.5303C0.829018 12.3897 0.75 12.1989 0.75 12V7.5C0.75 6.90326 0.987053 6.33097 1.40901 5.90901C1.83097 5.48705 2.40326 5.25 3 5.25H6.75V3.75C6.75 2.95435 7.06607 2.19129 7.62868 1.62868C8.19129 1.06607 8.95435 0.75 9.75 0.75C10.5456 0.75 11.3087 1.06607 11.8713 1.62868C12.4339 2.19129 12.75 2.95435 12.75 3.75V5.25H16.5C17.0967 5.25 17.669 5.48705 18.091 5.90901C18.5129 6.33097 18.75 6.90326 18.75 7.5V11.25H20.25C21.0456 11.25 21.8087 11.5661 22.3713 12.1287C22.9339 12.6913 23.25 13.4544 23.25 14.25C23.25 15.0456 22.9339 15.8087 22.3713 16.3713C21.8087 16.9339 21.0456 17.25 20.25 17.25H18.75V21C18.75 21.5967 18.5129 22.169 18.091 22.591C17.669 23.0129 17.0967 23.25 16.5 23.25ZM12.75 21.75H16.5C16.6989 21.75 16.8897 21.671 17.0303 21.5303C17.171 21.3897 17.25 21.1989 17.25 21V16.5C17.25 16.3011 17.329 16.1103 17.4697 15.9697C17.6103 15.829 17.8011 15.75 18 15.75H20.25C20.6478 15.75 21.0294 15.592 21.3107 15.3107C21.592 15.0294 21.75 14.6478 21.75 14.25C21.75 13.8522 21.592 13.4706 21.3107 13.1893C21.0294 12.908 20.6478 12.75 20.25 12.75H18C17.8011 12.75 17.6103 12.671 17.4697 12.5303C17.329 12.3897 17.25 12.1989 17.25 12V7.5C17.25 7.30109 17.171 7.11032 17.0303 6.96967C16.8897 6.82902 16.6989 6.75 16.5 6.75H12C11.8011 6.75 11.6103 6.67098 11.4697 6.53033C11.329 6.38968 11.25 6.19891 11.25 6V3.75C11.25 3.35218 11.092 2.97064 10.8107 2.68934C10.5294 2.40804 10.1478 2.25 9.75 2.25C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V6C8.25 6.19891 8.17098 6.38968 8.03033 6.53033C7.88968 6.67098 7.69891 6.75 7.5 6.75H3C2.80109 6.75 2.61032 6.82902 2.46967 6.96967C2.32902 7.11032 2.25 7.30109 2.25 7.5V11.25H3.75C4.54565 11.25 5.30871 11.5661 5.87132 12.1287C6.43393 12.6913 6.75 13.4544 6.75 14.25C6.75 15.0456 6.43393 15.8087 5.87132 16.3713C5.30871 16.9339 4.54565 17.25 3.75 17.25H2.25V21C2.25 21.1989 2.32902 21.3897 2.46967 21.5303C2.61032 21.671 2.80109 21.75 3 21.75H6.75V20.25C6.75 19.4544 7.06607 18.6913 7.62868 18.1287C8.19129 17.5661 8.95435 17.25 9.75 17.25C10.5456 17.25 11.3087 17.5661 11.8713 18.1287C12.4339 18.6913 12.75 19.4544 12.75 20.25V21.75Z",
    fill: scaleSettingAbout === true ? "#6E62E5" : "#5E6267"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: scaleSettingAbout === true ? "scalespanns" : "scalespann"
  }, "About Plugin", " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: scaleNotificationHandler,
    className: scaleSettingNotification === true ? "selectedaboutplugin" : "aboutplugin"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    className: "scalesvgg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.0609 15.1198C18.584 14.2983 17.875 11.9737 17.875 8.9375C17.875 7.11414 17.1507 5.36545 15.8613 4.07614C14.572 2.78683 12.8233 2.0625 11 2.0625C9.17662 2.0625 7.42793 2.78683 6.13862 4.07614C4.84931 5.36545 4.12498 7.11414 4.12498 8.9375C4.12498 11.9745 3.41514 14.2983 2.93818 15.1198C2.81638 15.3287 2.75181 15.566 2.75098 15.8078C2.75015 16.0496 2.81309 16.2873 2.93346 16.497C3.05382 16.7067 3.22735 16.8809 3.43654 17.0022C3.64573 17.1234 3.8832 17.1873 4.12498 17.1875H7.63209C7.79071 17.9637 8.21253 18.6612 8.82622 19.1622C9.43991 19.6631 10.2078 19.9367 11 19.9367C11.7922 19.9367 12.5601 19.6631 13.1737 19.1622C13.7874 18.6612 14.2093 17.9637 14.3679 17.1875H17.875C18.1167 17.1872 18.354 17.1231 18.5631 17.0018C18.7722 16.8805 18.9456 16.7063 19.0659 16.4966C19.1861 16.2869 19.249 16.0493 19.2481 15.8076C19.2472 15.5659 19.1827 15.3286 19.0609 15.1198ZM11 18.5625C10.5736 18.5624 10.1577 18.4301 9.80957 18.1838C9.46145 17.9376 9.19821 17.5895 9.05607 17.1875H12.9439C12.8018 17.5895 12.5385 17.9376 12.1904 18.1838C11.8423 18.4301 11.4264 18.5624 11 18.5625ZM4.12498 15.8125C4.7867 14.6747 5.49998 12.0381 5.49998 8.9375C5.49998 7.47881 6.07944 6.07986 7.11089 5.04841C8.14234 4.01696 9.54129 3.4375 11 3.4375C12.4587 3.4375 13.8576 4.01696 14.8891 5.04841C15.9205 6.07986 16.5 7.47881 16.5 8.9375C16.5 12.0355 17.2115 14.6721 17.875 15.8125H4.12498Z",
    fill: scaleSettingNotification === true ? "#6E62E5" : "#5E6267"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: scaleSettingNotification === true ? "scalespanns1" : "scalespann1"
  }, "Notifications", " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: scaleCreditHandler,
    className: scaleSettingCredit === true ? "scaleselectedaboutplugin" : "scaleaboutplugin"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "19",
    viewBox: "0 0 19 19",
    fill: "none",
    className: "scalesvgg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_721_106)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.0566 8.99936V5.69926C10.7045 5.92904 11.1699 6.54776 11.1699 7.27344H12.2832C12.2832 5.92937 11.3255 4.80485 10.0566 4.54623V3.5625H8.94336V4.54623C7.67452 4.80481 6.7168 5.92934 6.7168 7.27344C6.7168 8.61754 7.67452 9.74203 8.94336 10.0006V13.3007C8.29547 13.071 7.83008 12.4522 7.83008 11.7266H6.7168C6.7168 13.0706 7.67452 14.1952 8.94336 14.4538V15.4375H10.0566V14.4538C11.3255 14.1952 12.2832 13.0707 12.2832 11.7266C12.2832 10.3825 11.3255 9.25797 10.0566 8.99936ZM8.94336 8.84762C8.29547 8.61784 7.83008 7.99911 7.83008 7.27344C7.83008 6.54776 8.29547 5.92904 8.94336 5.69926V8.84762ZM10.0566 13.3007V10.1524C10.7045 10.3822 11.1699 11.0009 11.1699 11.7266C11.1699 12.4522 10.7045 13.071 10.0566 13.3007Z",
    fill: scaleSettingCredit === true ? "#6E62E5" : "#5E6267"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0ZM9.5 17.8867C4.86816 17.8867 1.11328 14.1318 1.11328 9.5C1.11328 4.86816 4.86816 1.11328 9.5 1.11328C14.1318 1.11328 17.8867 4.86816 17.8867 9.5C17.8867 14.1318 14.1318 17.8867 9.5 17.8867Z",
    fill: scaleSettingCredit === true ? "#6E62E5" : "#5E6267"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_721_106"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "19",
    height: "19",
    fill: "white"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: scaleSettingCredit === true ? "scalespanns2" : "scalespann2"
  }, "Credit System", " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: scalePrivacyHandler,
    className: scaleSettingPrivacy === true ? "scaleselectedaboutplugin" : "scaleaboutplugin"
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    className: "scalesvgg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11 20.7235C10.727 20.7233 10.4586 20.6532 10.2203 20.5199L7.13103 18.8038C5.5953 17.9499 4.31567 16.7011 3.42455 15.1866C2.53343 13.6721 2.06319 11.9471 2.0625 10.1899V5.42711C2.06224 5.03057 2.20912 4.64805 2.47471 4.3536C2.7403 4.05915 3.1057 3.87373 3.50016 3.83323C4.72913 3.70304 5.93867 3.42966 7.10417 3.01865C8.17281 2.64097 9.19797 2.15 10.1621 1.55413C10.4144 1.39987 10.7044 1.31828 11.0001 1.31836C11.2958 1.31844 11.5857 1.40018 11.8379 1.55458C12.8021 2.15013 13.8273 2.64094 14.8958 3.01865C16.0613 3.42967 17.2709 3.70306 18.4998 3.83326C18.8943 3.87376 19.2597 4.05918 19.5253 4.35362C19.7909 4.64806 19.9378 5.03058 19.9375 5.42711V10.1899C19.9368 11.9471 19.4666 13.6722 18.5755 15.1866C17.6843 16.7011 16.4047 17.9499 14.869 18.8038L11.7788 20.5204C11.5408 20.6534 11.2727 20.7234 11 20.7235ZM11 2.69187C10.9596 2.69169 10.9199 2.70269 10.8854 2.72366C9.83759 3.37071 8.72363 3.90442 7.5625 4.31481C6.29576 4.76183 4.98104 5.05896 3.64518 5.20015C3.58842 5.20507 3.53558 5.23113 3.49712 5.27316C3.45866 5.31519 3.43738 5.37013 3.4375 5.42711V10.1899C3.43804 11.7019 3.84265 13.1862 4.60944 14.4893C5.37624 15.7924 6.47736 16.8669 7.79883 17.6016L10.889 19.3181C10.9227 19.3371 10.9608 19.3471 10.9995 19.3472C11.0382 19.3473 11.0763 19.3374 11.1101 19.3186L14.2012 17.6016C15.5227 16.867 16.6238 15.7925 17.3906 14.4894C18.1574 13.1862 18.562 11.7019 18.5625 10.1899V5.42711C18.5626 5.37014 18.5413 5.31521 18.5029 5.27318C18.4644 5.23116 18.4116 5.2051 18.3548 5.20018C17.019 5.05898 15.7042 4.76183 14.4375 4.31481C13.2764 3.90442 12.1624 3.37114 11.1146 2.72408C11.0802 2.70278 11.0405 2.69162 11 2.69187Z",
    fill: scaleSettingPrivacy === true ? "#6E62E5" : "#5E6267"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.5418 13.0626C10.3734 13.0628 10.2109 13.001 10.0853 12.8889L8.02276 11.0556C7.8871 10.9343 7.80505 10.7642 7.79459 10.5826C7.78414 10.4009 7.84613 10.2225 7.96698 10.0865C8.08783 9.95051 8.25768 9.86796 8.43929 9.85696C8.62091 9.84597 8.79947 9.90744 8.93585 10.0279L10.4979 11.4163L13.478 8.23797C13.5395 8.17094 13.6136 8.11678 13.6962 8.07861C13.7788 8.04044 13.8681 8.01903 13.9589 8.01562C14.0498 8.01221 14.1405 8.02686 14.2257 8.05874C14.3108 8.09061 14.3888 8.13907 14.4552 8.2013C14.5215 8.26354 14.5748 8.33831 14.612 8.42129C14.6492 8.50428 14.6696 8.59382 14.672 8.68474C14.6744 8.77565 14.6587 8.86614 14.6258 8.95094C14.593 9.03575 14.5436 9.1132 14.4806 9.1788L11.0431 12.8455C10.9789 12.9141 10.9013 12.9688 10.815 13.0062C10.7288 13.0435 10.6357 13.0627 10.5418 13.0626Z",
    fill: scaleSettingPrivacy === true ? "#6E62E5" : "#5E6267"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: scaleSettingPrivacy === true ? "scalespanns3" : "scalespann3"
  }, "Privacy", " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "scalebtnn"
  }, "Download Reports")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: " scalesection"
  }, scaleSettingNotification && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Upgrade Nps Report"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scalecontent"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "scaleparagraph1"
  }, "Upgrade Plan for unlimited access of exciting features."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "scalepluginbtn"
  }, "view plans"))), scaleSettingCredit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Credit System"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scalecontent"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "scaleparagraph1"
  }, "Choose how you make purchase on Nps Report Plugin"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "scalepluginbtn"
  }, "Enable Purchase"))), scaleSettingPrivacy && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Privacy"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scalecontent"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scalepluginspan"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Review our privacy policy documentation"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "index.html"
  }, "Click here")))), scaleSettingAbout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "About Plugin"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scalecontent"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "scaleparagraph4"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/NumberScale.js":
/*!***************************************!*\
  !*** ./src/components/NumberScale.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NumberScale; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScaleContext */ "./src/components/ScaleContext.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");




function NumberScale({
  row,
  emoji,
  btnbg,
  btncolr,
  customize,
  setCustomize,
  setScale,
  setting,
  setSetting,
  setIsTitleActive,
  setAttributes
}) {
  const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ScaleContext__WEBPACK_IMPORTED_MODULE_1__.ScaleContext);
  // Event handlers for hover

  var blockId = wp.data.select("core/block-editor").getSelectedBlockClientId();
  // console.log(blockId)
  // const blockList = wp.data.select('core/block-editor').getBlockOrder();
  // console.log(blockList)

  function generateRandomUsername(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let username = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      username += characters.charAt(randomIndex);
    }
    return username;
  }

  // Usage: Generate a random username with a specified length (e.g., 8 characters)
  const randomUsername = generateRandomUsername(8);

  // create a scale using scale api 
  const createScale = async () => {
    try {
      // Define the data you want to send in the POST request
      const postData = {
        username: randomUsername,
        orientation: state.scaleOrientation,
        scalecolor: state.color.sclColor,
        roundcolor: state.color.btnColor,
        fontcolor: state.color.fntColor,
        no_of_scales: 10000000,
        // fomat: "numbers",
        // time: "60",
        name: "npsScale",
        left: state.scale.lblLeft,
        right: state.scale.lblRight,
        center: state.scale.lblCenter,
        user: "yes",
        position: [{
          "page": 25,
          "block": blockId
        }]
      };

      // Make the POST request using Axios
      const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("https://100035.pythonanywhere.com/api/plugins/?scale_type=nps&type=settings&api_key=abd9d8e4-6131-4bef-ab45-92875b879c02", postData);
      console.log(response);
      const scaleidData = response.data.scale_id;
      // console.log(databoy);
      console.log(scaleidData);
      // Handle the successful response here
      // const data = JSON.parse(response.data.success);
    } catch (error) {
      // Handle any errors here
      console.error("Error:", error);
    }
  };

  // var block = wp.data.select("core/block-editor").getSelectedBlock();
  // console.log(block)
  // var blockId;
  // if (block) {
  //   blockId = block.clientId;
  // }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: "SET_BLOCK_ID",
      payload: {
        ...state,
        scale: {
          ...state.scale,
          blockData: blockId
        }
      }
    });
    setAttributes({
      state: {
        ...state,
        scale: {
          ...state.scale,
          blockData: blockId
        }
      }
    });
  }, []);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleCustomize = () => {
    !customize && setCustomize(true);
    setScale({
      row,
      emoji,
      btnbg,
      btncolr
    });
    setIsTitleActive(false);
  };
  const buttonStyle = {
    background: btnbg ? btnbg : "rgb(142, 216, 142)",
    color: btncolr ? btncolr : "white",
    transform: row ? "" : `rotate(270deg)`

    // Add other styles here as needed
  };

  const buttonStylecond = !emoji ? buttonStyle : {
    transform: row ? "" : `rotate(270deg)`
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `frame `,
    style: {
      background: `${row ? "#E8D6F1" : "#F2D5DD"}`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `frame__scale ${isHovered ? "hovered" : ""}`,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: `${row ? "" : "rotate(90deg)"}`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "scale_typo"
  }, "How would you rate it?"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale__buttons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 22 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_596)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.966 21.932C17.0224 21.932 21.932 17.0224 21.932 10.966C21.932 4.90966 17.0224 0 10.966 0C4.90966 0 0 4.90966 0 10.966C0 17.0224 4.90966 21.932 10.966 21.932Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.15479 10.5431C4.99785 10.5503 4.84316 10.5036 4.71649 10.4106C4.58982 10.3177 4.49882 10.1842 4.45864 10.0323C4.41845 9.88041 4.43152 9.71934 4.49566 9.57592C4.5598 9.4325 4.67114 9.31538 4.81113 9.24407L6.35758 8.36775L4.77677 7.47769C4.69756 7.43256 4.62803 7.37227 4.57212 7.30027C4.51622 7.22826 4.47505 7.14595 4.45096 7.05804C4.4023 6.88048 4.42617 6.69087 4.51731 6.53092C4.60845 6.37096 4.7594 6.25376 4.93696 6.20511C5.11451 6.15645 5.30412 6.18032 5.46408 6.27146L8.09647 7.76292C8.20558 7.82181 8.29673 7.90912 8.36026 8.0156C8.42379 8.12208 8.45733 8.24376 8.45733 8.36775C8.45733 8.49174 8.42379 8.61342 8.36026 8.7199C8.29673 8.82638 8.20558 8.91369 8.09647 8.97258L5.49844 10.4503C5.39403 10.5109 5.2755 10.5429 5.15479 10.5431Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.815 10.5327C16.6942 10.5336 16.5753 10.5015 16.4714 10.4399L13.9008 8.93468C13.7967 8.87426 13.7102 8.78754 13.6501 8.6832C13.59 8.57886 13.5584 8.46056 13.5584 8.34015C13.5584 8.21974 13.59 8.10145 13.6501 7.99711C13.7102 7.89277 13.7967 7.80605 13.9008 7.74563L16.4542 6.26791C16.6102 6.1931 16.7886 6.17986 16.954 6.23083C17.1193 6.28181 17.2593 6.39325 17.3461 6.54292C17.4328 6.69259 17.46 6.86947 17.422 7.03826C17.3841 7.20705 17.2839 7.35534 17.1415 7.45352L15.6122 8.34015L17.1621 9.24053C17.2911 9.31706 17.3916 9.4337 17.4481 9.57265C17.5046 9.71159 17.5141 9.86522 17.4752 10.0101C17.4363 10.1549 17.351 10.2831 17.2324 10.375C17.1138 10.4668 16.9685 10.5174 16.8185 10.5189L16.815 10.5327Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.03802 15.8593C6.98551 15.8597 6.93328 15.8516 6.88338 15.8353C6.81302 15.8155 6.74727 15.7819 6.68995 15.7366C6.63262 15.6913 6.58484 15.635 6.54937 15.5711C6.5139 15.5072 6.49145 15.4369 6.4833 15.3643C6.47516 15.2916 6.48149 15.2181 6.50192 15.1479C6.79348 14.19 7.38496 13.3511 8.18926 12.7547C8.99355 12.1582 9.96813 11.8359 10.9694 11.8351C11.9711 11.8243 12.949 12.1401 13.7551 12.7347C14.5612 13.3294 15.1516 14.1705 15.4369 15.1308C15.475 15.2738 15.4552 15.4261 15.3819 15.5547C15.3086 15.6833 15.1877 15.7779 15.0452 15.8181C14.9743 15.8378 14.9003 15.8434 14.8272 15.8344C14.7542 15.8253 14.6837 15.8019 14.6198 15.7655C14.5559 15.7291 14.4999 15.6803 14.4549 15.6221C14.4099 15.5639 14.377 15.4973 14.3579 15.4263C14.1373 14.7078 13.6915 14.0793 13.0863 13.6338C12.481 13.1882 11.7485 12.9491 10.9969 12.952C8.35078 12.952 7.61193 15.3576 7.58443 15.4572C7.54987 15.5748 7.47771 15.6778 7.37902 15.7504C7.28032 15.823 7.16054 15.8613 7.03802 15.8593Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_596"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white"
  })))) : 0), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_604)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.2417 10.9657C22.2424 13.1354 21.5996 15.2565 20.3947 17.0609C19.1898 18.8653 17.4768 20.2718 15.4725 21.1026C13.4681 21.9333 11.2624 22.1511 9.13433 21.7282C7.00624 21.3053 5.05135 20.2609 3.5169 18.7269C1.98245 17.1929 0.937365 15.2384 0.513827 13.1104C0.0902894 10.9824 0.307321 8.77666 1.13747 6.77206C1.96762 4.76745 3.3736 3.05405 5.1776 1.84856C6.98159 0.643068 9.10256 -0.000366104 11.2723 -0.000366211C14.1809 -0.000366354 16.9706 1.15487 19.0276 3.2113C21.0847 5.26773 22.2408 8.05697 22.2417 10.9657Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.3621 15.2818C19.3621 15.6883 19.2006 16.0781 18.9132 16.3656C18.6257 16.653 18.2359 16.8145 17.8294 16.8145C17.4229 16.8145 17.033 16.653 16.7456 16.3656C16.4582 16.0781 16.2967 15.6883 16.2967 15.2818C16.2967 14.433 17.8328 11.5463 17.8328 11.5463C17.8328 11.5463 19.3621 14.433 19.3621 15.2818Z",
    fill: "#2FA7BF"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.2657 10.5049C16.0072 10.5144 15.7493 10.4716 15.5078 10.3788C15.2662 10.2861 15.0459 10.1455 14.8602 9.96535C14.4454 9.48978 14.2203 8.87809 14.2278 8.24708C14.2415 8.10647 14.3078 7.97622 14.4134 7.88242C14.519 7.78862 14.6562 7.73818 14.7974 7.74123C14.9387 7.74427 15.0735 7.80056 15.175 7.89882C15.2765 7.99709 15.3371 8.13007 15.3447 8.27113C15.342 8.59998 15.4537 8.91953 15.6609 9.17494C15.8326 9.31506 16.0475 9.39159 16.2692 9.39159C16.4908 9.39159 16.7057 9.31506 16.8774 9.17494C17.0909 8.91717 17.2118 8.59536 17.2211 8.26082C17.2211 8.11317 17.2797 7.97157 17.3841 7.86716C17.4885 7.76276 17.6301 7.7041 17.7778 7.7041C17.9255 7.7041 18.0671 7.76276 18.1715 7.86716C18.2759 7.97157 18.3345 8.11317 18.3345 8.26082C18.3393 8.89381 18.1091 9.50606 17.6885 9.9791C17.4989 10.1581 17.2752 10.2969 17.0308 10.3872C16.7863 10.4776 16.5261 10.5176 16.2657 10.5049Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.26882 10.5048C6.01024 10.5145 5.75236 10.4717 5.51078 10.379C5.2692 10.2863 5.04892 10.1455 4.86328 9.96525C4.44503 9.49172 4.21941 8.87865 4.23095 8.24697C4.23253 8.17386 4.24849 8.10178 4.27793 8.03484C4.30737 7.9679 4.3497 7.90741 4.40252 7.85683C4.45533 7.80625 4.51759 7.76657 4.58574 7.74005C4.65389 7.71354 4.72659 7.7007 4.7997 7.70228C4.87281 7.70386 4.94489 7.71982 5.01183 7.74926C5.07877 7.7787 5.13926 7.82103 5.18984 7.87384C5.24042 7.92666 5.2801 7.98891 5.30662 8.05706C5.33314 8.12521 5.34597 8.19792 5.34439 8.27103C5.34496 8.59931 5.45636 8.91779 5.66056 9.17484C5.74211 9.24987 5.83813 9.30746 5.94272 9.3441C6.04731 9.38074 6.15827 9.39564 6.26882 9.38791C6.3804 9.395 6.49225 9.37915 6.59747 9.34132C6.70268 9.30349 6.79901 9.24449 6.88053 9.16797C7.08705 8.90511 7.20065 8.58124 7.20356 8.24697C7.2146 8.10643 7.27822 7.97522 7.38173 7.87951C7.48524 7.78381 7.62103 7.73066 7.762 7.73066C7.90298 7.73066 8.03877 7.78381 8.14228 7.87951C8.24579 7.97522 8.30941 8.10643 8.32044 8.24697C8.32136 8.87989 8.09028 9.49119 7.67094 9.96525C7.48546 10.1448 7.26571 10.2851 7.02481 10.3778C6.78391 10.4705 6.52679 10.5137 6.26882 10.5048Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.34447 15.4641C7.28814 15.4605 7.23261 15.4489 7.17952 15.4297C7.10916 15.41 7.04342 15.3764 6.98609 15.3311C6.92876 15.2858 6.88098 15.2295 6.84551 15.1656C6.81005 15.1017 6.78759 15.0314 6.77945 14.9588C6.7713 14.8861 6.77763 14.8126 6.79806 14.7424C7.08913 13.7842 7.6805 12.945 8.4849 12.3485C9.2893 11.752 10.2641 11.4298 11.2656 11.4296C12.2668 11.4185 13.2444 11.7338 14.0504 12.3278C14.8565 12.9219 15.4472 13.7622 15.7331 14.7218C15.7727 14.8645 15.7541 15.017 15.6813 15.1459C15.6084 15.2748 15.4874 15.3695 15.3448 15.4091C15.2021 15.4488 15.0496 15.4301 14.9207 15.3573C14.7918 15.2845 14.6971 15.1634 14.6574 15.0208C14.4379 14.3028 13.9933 13.6744 13.3894 13.2282C12.7855 12.7821 12.0542 12.5419 11.3034 12.543C8.65724 12.543 7.91838 14.9486 7.89088 15.0483C7.85886 15.1684 7.78779 15.2745 7.68886 15.3497C7.58994 15.425 7.46878 15.4653 7.34447 15.4641Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_604"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.306458 -0.000244141)"
  })))) : 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_613)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.5482 10.9657C22.5489 13.1354 21.9061 15.2565 20.7012 17.0609C19.4962 18.8653 17.7833 20.2718 15.7789 21.1026C13.7746 21.9333 11.5689 22.1511 9.44079 21.7282C7.3127 21.3053 5.3578 20.2609 3.82335 18.7269C2.2889 17.1929 1.24382 15.2384 0.820285 13.1104C0.396747 10.9824 0.613778 8.77666 1.44393 6.77206C2.27408 4.76745 3.68006 3.05405 5.48405 1.84856C7.28805 0.643068 9.40902 -0.000366104 11.5787 -0.000366211C14.4874 -0.000366354 17.277 1.15487 19.3341 3.2113C21.3912 5.26773 22.5473 8.05697 22.5482 10.9657Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.58903 11.4156C6.37786 11.4147 6.1756 11.3304 6.02627 11.1811C5.87695 11.0318 5.79266 10.8295 5.79176 10.6183V8.70416C5.7913 8.59917 5.81159 8.49512 5.85146 8.398C5.89132 8.30087 5.94998 8.21257 6.02405 8.13817C6.09813 8.06378 6.18618 8.00474 6.28313 7.96446C6.38009 7.92418 6.48404 7.90344 6.58903 7.90344C6.7993 7.90435 7.00069 7.98827 7.14937 8.13695C7.29805 8.28563 7.38197 8.48702 7.38288 8.69728V10.6183C7.38198 10.8289 7.29817 11.0306 7.14958 11.1799C7.001 11.3291 6.79961 11.4138 6.58903 11.4156Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.5722 11.4156C16.361 11.4147 16.1587 11.3304 16.0094 11.1811C15.8601 11.0318 15.7758 10.8295 15.7749 10.6183V8.70416C15.7749 8.49239 15.8588 8.28924 16.0082 8.13918C16.1576 7.98911 16.3604 7.90435 16.5722 7.90344C16.783 7.90344 16.9853 7.98697 17.1347 8.13574C17.2842 8.28452 17.3686 8.48643 17.3695 8.69728V10.6183C17.3686 10.8295 17.2843 11.0318 17.1349 11.1811C16.9856 11.3304 16.7834 11.4147 16.5722 11.4156Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.1594 6.38795C5.84433 6.38571 5.53228 6.32633 5.23841 6.21269C5.19982 6.19689 5.16473 6.17365 5.13512 6.1443C5.10552 6.11494 5.08199 6.08003 5.06587 6.04158C5.04976 6.00313 5.04137 5.96188 5.0412 5.92018C5.04103 5.87849 5.04907 5.83717 5.06486 5.79859C5.08066 5.76 5.1039 5.7249 5.13326 5.6953C5.16262 5.6657 5.19752 5.64216 5.23597 5.62605C5.31363 5.5935 5.40104 5.59314 5.47897 5.62504C5.85092 5.76853 6.26073 5.78065 6.64052 5.65941C6.77057 5.60026 6.88691 5.51473 6.98216 5.40825C7.0774 5.30176 7.14948 5.17664 7.19381 5.04083C7.22525 4.96199 7.28672 4.89887 7.36471 4.86536C7.44269 4.83184 7.53079 4.83068 7.60963 4.86213C7.68847 4.89357 7.75158 4.95505 7.7851 5.03303C7.81861 5.11101 7.81977 5.19911 7.78833 5.27795C7.71123 5.49231 7.59135 5.68876 7.43598 5.85535C7.28061 6.02195 7.09299 6.15522 6.88452 6.24706C6.65475 6.34232 6.40813 6.39024 6.1594 6.38795Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.8505 6.38801C16.6007 6.39029 16.3529 6.34238 16.122 6.24711C15.914 6.15506 15.727 6.02169 15.5722 5.85509C15.4174 5.68849 15.2981 5.49215 15.2216 5.27801C15.1894 5.20047 15.1891 5.11339 15.2206 5.03559C15.2521 4.95778 15.3129 4.89549 15.39 4.86219C15.4685 4.83261 15.5554 4.83471 15.6324 4.86806C15.7093 4.90141 15.7703 4.96339 15.8024 5.04089C15.8475 5.17734 15.9206 5.30286 16.0171 5.40939C16.1135 5.51591 16.2312 5.60109 16.3625 5.65946C16.7399 5.78161 17.1478 5.76947 17.5172 5.6251C17.5565 5.60418 17.5998 5.59171 17.6442 5.58849C17.6886 5.58527 17.7332 5.59136 17.7752 5.60639C17.8171 5.62142 17.8554 5.64504 17.8877 5.67575C17.9199 5.70645 17.9454 5.74356 17.9625 5.78469C17.9796 5.82583 17.9879 5.87007 17.9868 5.9146C17.9858 5.95913 17.9755 6.00295 17.9565 6.04325C17.9376 6.08355 17.9104 6.11945 17.8768 6.14864C17.8431 6.17783 17.8038 6.19967 17.7612 6.21275C17.4706 6.32517 17.1621 6.38453 16.8505 6.38801Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.5 16.8659C15.5384 16.9077 15.5898 16.9354 15.6458 16.9446C15.7019 16.9539 15.7594 16.944 15.8092 16.9168C15.8591 16.8895 15.8983 16.8463 15.9208 16.7941C15.9432 16.7419 15.9475 16.6837 15.933 16.6288C15.5893 15.4844 14.445 12.608 11.6029 12.608C8.76091 12.608 7.58561 15.5016 7.23164 16.6528C7.21897 16.7077 7.22463 16.7653 7.24776 16.8167C7.2709 16.868 7.31023 16.9104 7.35973 16.9373C7.40924 16.9642 7.46619 16.9741 7.52188 16.9656C7.57757 16.957 7.62893 16.9305 7.66808 16.89C8.75207 15.9271 10.1369 15.3707 11.5857 15.316C13.0293 15.3701 14.4107 15.9171 15.5 16.8659Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_613"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.612915 -0.000244141)"
  })))) : 2), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_623)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.8548 10.9657C22.8554 13.1354 22.2127 15.2565 21.0077 17.0609C19.8028 18.8653 18.0899 20.2718 16.0855 21.1026C14.0812 21.9333 11.8755 22.1511 9.74737 21.7282C7.61928 21.3053 5.66438 20.2609 4.12993 18.7269C2.59548 17.1929 1.5504 15.2384 1.12686 13.1104C0.703326 10.9824 0.920358 8.77666 1.75051 6.77206C2.58066 4.76745 3.98664 3.05405 5.79063 1.84856C7.59463 0.643068 9.7156 -0.000366104 11.8853 -0.000366211C14.794 -0.000366354 17.5836 1.15487 19.6407 3.2113C21.6977 5.26773 22.8538 8.05697 22.8548 10.9657Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.89548 11.041C6.68463 11.041 6.48236 10.9575 6.33293 10.8087C6.18351 10.66 6.09911 10.4581 6.09821 10.2472V7.49796C6.09821 7.28651 6.1822 7.08372 6.33172 6.9342C6.48124 6.78468 6.68403 6.70068 6.89548 6.70068C7.10634 6.70159 7.30825 6.78599 7.45703 6.93541C7.6058 7.08483 7.68933 7.28711 7.68933 7.49796V10.2472C7.68842 10.4575 7.6045 10.6589 7.45582 10.8075C7.30714 10.9562 7.10575 11.0401 6.89548 11.041Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.8786 11.041C16.6681 11.0401 16.4663 10.9563 16.3171 10.8077C16.1679 10.6592 16.0832 10.4578 16.0814 10.2472V7.49796C16.0823 7.28679 16.1666 7.08452 16.3159 6.9352C16.4652 6.78588 16.6675 6.70159 16.8786 6.70068C17.0901 6.70068 17.2929 6.78468 17.4424 6.9342C17.5919 7.08372 17.6759 7.28651 17.6759 7.49796V10.2472C17.675 10.4581 17.5906 10.66 17.4412 10.8087C17.2918 10.9575 17.0895 11.041 16.8786 11.041Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.95739 15.8589C7.90488 15.8594 7.85265 15.8512 7.80275 15.8349C7.73239 15.8151 7.66665 15.7816 7.60932 15.7362C7.55199 15.6909 7.50421 15.6347 7.46874 15.5708C7.43328 15.5068 7.41082 15.4365 7.40268 15.3639C7.39453 15.2913 7.40086 15.2178 7.42129 15.1476C7.71285 14.1897 8.30434 13.3507 9.10863 12.7543C9.91293 12.1579 10.8875 11.8355 11.8888 11.8347C12.8905 11.8239 13.8684 12.1397 14.6745 12.7344C15.4806 13.329 16.071 14.1702 16.3563 15.1304C16.3944 15.2735 16.3746 15.4257 16.3013 15.5543C16.228 15.6829 16.107 15.7775 15.9645 15.8177C15.8937 15.8375 15.8196 15.843 15.7466 15.834C15.6736 15.825 15.6031 15.8016 15.5392 15.7651C15.4753 15.7287 15.4192 15.68 15.3743 15.6218C15.3293 15.5635 15.2963 15.497 15.2772 15.4259C15.0567 14.7074 14.6109 14.079 14.0056 13.6334C13.4004 13.1878 12.6679 12.9488 11.9163 12.9516C9.27016 12.9516 8.5313 15.3572 8.50381 15.4569C8.46924 15.5744 8.39708 15.6774 8.29839 15.75C8.1997 15.8227 8.07991 15.8609 7.95739 15.8589Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_623"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.919312 -0.000244141)"
  })))) : 3), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_631)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.1612 10.9657C22.1619 13.1354 21.5191 15.2565 20.3142 17.0609C19.1093 18.8653 17.3963 20.2718 15.392 21.1026C13.3876 21.9333 11.1819 22.1511 9.05383 21.7282C6.92573 21.3053 4.97084 20.2609 3.43639 18.7269C1.90194 17.1929 0.856859 15.2384 0.433322 13.1104C0.00978398 10.9824 0.226815 8.77666 1.05697 6.77206C1.88712 4.76745 3.2931 3.05405 5.09709 1.84856C6.90108 0.643068 9.02205 -0.000366104 11.1918 -0.000366211C14.1004 -0.000366354 16.89 1.15487 18.9471 3.2113C21.0042 5.26773 22.1603 8.05697 22.1612 10.9657Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.37724 8.8964C8.37633 9.10726 8.29193 9.30917 8.14251 9.45794C7.99309 9.60672 7.79082 9.69025 7.57996 9.69024H4.83073C4.61987 9.69025 4.4176 9.60672 4.26818 9.45794C4.11876 9.30917 4.03436 9.10726 4.03345 8.8964C4.03345 8.68495 4.11745 8.48216 4.26696 8.33264C4.41648 8.18312 4.61927 8.09912 4.83073 8.09912H7.57996C7.79142 8.09912 7.99421 8.18312 8.14373 8.33264C8.29324 8.48216 8.37724 8.68495 8.37724 8.8964Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18.3639 8.8964C18.3629 9.10726 18.2785 9.30917 18.1291 9.45794C17.9797 9.60672 17.7774 9.69025 17.5666 9.69024H14.8173C14.6071 9.68934 14.4057 9.60541 14.257 9.45673C14.1083 9.30805 14.0244 9.10666 14.0235 8.8964C14.0235 8.68554 14.107 8.48327 14.2558 8.33385C14.4046 8.18443 14.6065 8.10003 14.8173 8.09912H17.5666C17.778 8.09912 17.9808 8.18312 18.1303 8.33264C18.2799 8.48216 18.3639 8.68495 18.3639 8.8964Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.4738 14.5776H4.91323C4.78654 14.5776 4.66504 14.5272 4.57546 14.4376C4.48587 14.3481 4.43555 14.2266 4.43555 14.0999C4.43555 13.9732 4.48587 13.8517 4.57546 13.7621C4.66504 13.6725 4.78654 13.6222 4.91323 13.6222H17.4738C17.6005 13.6222 17.722 13.6725 17.8116 13.7621C17.9012 13.8517 17.9515 13.9732 17.9515 14.0999C17.9515 14.2266 17.9012 14.3481 17.8116 14.4376C17.722 14.5272 17.6005 14.5776 17.4738 14.5776Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_631"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.225769 -0.000244141)"
  })))) : 4), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_674)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.4676 10.9657C22.4682 13.1354 21.8255 15.2565 20.6205 17.0609C19.4156 18.8653 17.7026 20.2718 15.6983 21.1026C13.694 21.9333 11.4883 22.1511 9.36016 21.7282C7.23207 21.3053 5.27718 20.2609 3.74273 18.7269C2.20828 17.1929 1.16319 15.2384 0.739657 13.1104C0.316119 10.9824 0.533151 8.77666 1.3633 6.77206C2.19345 4.76745 3.59943 3.05405 5.40343 1.84856C7.20742 0.643068 9.32839 -0.000366104 11.4981 -0.000366211C14.4068 -0.000366354 17.1964 1.15487 19.2535 3.2113C21.3105 5.26773 22.4666 8.05697 22.4676 10.9657Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.5084 11.0275C6.29695 11.0275 6.09416 10.9435 5.94464 10.794C5.79512 10.6445 5.71112 10.4417 5.71112 10.2302V8.3195C5.71112 8.10804 5.79512 7.90525 5.94464 7.75573C6.09416 7.60622 6.29695 7.52222 6.5084 7.52222C6.71926 7.52313 6.92116 7.60753 7.06994 7.75695C7.21872 7.90637 7.30224 8.10864 7.30224 8.3195V10.2302C7.30224 10.4411 7.21872 10.6433 7.06994 10.7928C6.92116 10.9422 6.71926 11.0266 6.5084 11.0275Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.4916 11.0275C16.2804 11.0266 16.0781 10.9423 15.9288 10.793C15.7795 10.6437 15.6952 10.4414 15.6943 10.2302V8.3195C15.6952 8.10832 15.7795 7.90606 15.9288 7.75673C16.0781 7.60741 16.2804 7.52312 16.4916 7.52222C16.703 7.52222 16.9058 7.60622 17.0553 7.75573C17.2048 7.90525 17.2888 8.10804 17.2888 8.3195V10.2302C17.2888 10.4417 17.2048 10.6445 17.0553 10.794C16.9058 10.9435 16.703 11.0275 16.4916 11.0275Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.4811 15.1543C8.04455 15.1543 7.10293 13.1886 7.06169 13.0924C7.00108 12.9556 6.99726 12.8004 7.05108 12.6609C7.10489 12.5214 7.21193 12.409 7.34864 12.3483C7.48536 12.2877 7.64055 12.2839 7.78008 12.3377C7.91961 12.3915 8.03205 12.4986 8.09266 12.6353C8.11671 12.6868 8.8212 14.0374 11.4983 14.0374C14.1753 14.0374 14.9348 12.6628 14.9348 12.6112C14.9661 12.5451 15.0102 12.4857 15.0645 12.4367C15.1189 12.3877 15.1824 12.35 15.2514 12.3257C15.3205 12.3014 15.3937 12.291 15.4667 12.2952C15.5398 12.2994 15.6113 12.318 15.6771 12.3501C15.8097 12.4153 15.9114 12.53 15.9603 12.6695C16.0091 12.809 16.0012 12.9621 15.9383 13.0958C15.8936 13.1817 14.9108 15.1543 11.4811 15.1543Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M4.27119 13.8009C5.15184 13.8009 5.86575 13.087 5.86575 12.2064C5.86575 11.3257 5.15184 10.6118 4.27119 10.6118C3.39054 10.6118 2.67664 11.3257 2.67664 12.2064C2.67664 13.087 3.39054 13.8009 4.27119 13.8009Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M19.6292 13.8009C20.5098 13.8009 21.2237 13.087 21.2237 12.2064C21.2237 11.3257 20.5098 10.6118 19.6292 10.6118C18.7485 10.6118 18.0346 11.3257 18.0346 12.2064C18.0346 13.087 18.7485 13.8009 19.6292 13.8009Z",
    fill: "#FF758A"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_674"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.532227 -0.000244141)"
  })))) : 5), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_661)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.6867 11.3091C22.6177 13.4766 21.9076 15.5749 20.6462 17.3389C19.3848 19.1028 17.6287 20.4532 15.5999 21.2192C13.5712 21.9852 11.3609 22.1326 9.24839 21.6426C7.13592 21.1526 5.21615 20.0473 3.73179 18.4663C2.24742 16.8854 1.26511 14.8999 0.909038 12.7608C0.552964 10.6216 0.839117 8.42497 1.73132 6.44845C2.62352 4.47193 4.08171 2.80432 5.92155 1.65643C7.76138 0.508545 9.90025 -0.0680775 12.0678 -0.000537715C13.5079 0.0438852 14.9252 0.371768 16.2385 0.964359C17.5518 1.55695 18.7355 2.40262 19.7217 3.45302C20.7079 4.50341 21.4774 5.73792 21.9862 7.08594C22.495 8.43396 22.733 9.86905 22.6867 11.3091Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.78229 12.9417C6.73392 12.9416 6.68627 12.9534 6.64351 12.976C6.60076 12.9986 6.56421 13.0314 6.53706 13.0714C6.50992 13.1114 6.49302 13.1575 6.48784 13.2056C6.48267 13.2537 6.48937 13.3023 6.50737 13.3472C6.90638 14.398 7.619 15.3007 8.54853 15.9326C9.47806 16.5646 10.5795 16.8954 11.7034 16.88C15.1125 16.88 16.5146 14.3335 16.9442 13.3197C16.962 13.2746 16.9686 13.2259 16.9634 13.1776C16.9582 13.1294 16.9413 13.0832 16.9143 13.0429C16.8872 13.0027 16.8508 12.9696 16.8081 12.9466C16.7654 12.9236 16.7177 12.9113 16.6692 12.9108L6.78229 12.9417Z",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.7035 17.3715C8.02293 17.3715 6.52804 14.6876 6.05379 13.5329C6.00463 13.4138 5.98559 13.2844 5.99837 13.1562C6.01115 13.028 6.05535 12.9049 6.12706 12.7979C6.19876 12.6908 6.29576 12.6031 6.40946 12.5425C6.52316 12.4819 6.65006 12.4502 6.7789 12.4504L16.6659 12.4229C16.7956 12.4216 16.9236 12.4523 17.0387 12.5122C17.1538 12.5722 17.2523 12.6595 17.3257 12.7665C17.397 12.8739 17.4406 12.9973 17.4526 13.1256C17.4646 13.2539 17.4446 13.3832 17.3944 13.502C16.9098 14.6704 15.3806 17.3715 11.7035 17.3715ZM7.08132 13.4298C7.47143 14.3261 8.11909 15.0862 8.94207 15.6136C9.76504 16.1411 10.7262 16.412 11.7035 16.3921C12.6885 16.4066 13.6559 16.1308 14.4852 15.5991C15.3145 15.0674 15.9689 14.3034 16.3669 13.4023L7.08132 13.4298Z",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.12258 14.7356H9.09509C8.09481 14.6364 7.12051 14.3582 6.2187 13.9142C6.16678 13.8878 6.12748 13.8418 6.10944 13.7864C6.0914 13.731 6.09608 13.6706 6.12247 13.6187C6.14961 13.5665 6.19622 13.5272 6.2522 13.5092C6.30817 13.4911 6.36898 13.4959 6.42145 13.5225C7.27751 13.9417 8.20155 14.2047 9.15007 14.2991C9.2035 14.3084 9.25163 14.337 9.28524 14.3795C9.31884 14.4221 9.33554 14.4756 9.33213 14.5297C9.32872 14.5838 9.30544 14.6347 9.26677 14.6727C9.22809 14.7107 9.17674 14.7331 9.12258 14.7356Z",
    fill: "#F2F2F2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7001 14.6837C14.6417 14.6883 14.584 14.6695 14.5395 14.6315C14.4951 14.5934 14.4675 14.5393 14.463 14.481C14.4584 14.4226 14.4772 14.3649 14.5152 14.3204C14.5532 14.2759 14.6074 14.2484 14.6657 14.2438C15.4185 14.1236 16.1552 13.9184 16.8617 13.6321C16.914 13.6166 16.9703 13.6211 17.0195 13.6447C17.0687 13.6684 17.1074 13.7095 17.128 13.7601C17.1486 13.8107 17.1496 13.8671 17.1308 13.9184C17.1121 13.9697 17.075 14.0122 17.0266 14.0377C16.2905 14.3379 15.5227 14.5535 14.7379 14.6803L14.7001 14.6837Z",
    fill: "#F2F2F2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M5.64133 12.2063C5.64133 12.5216 5.54781 12.8299 5.37259 13.0921C5.19738 13.3544 4.94835 13.5587 4.65698 13.6794C4.36561 13.8001 4.045 13.8317 3.73569 13.7702C3.42637 13.7086 3.14225 13.5568 2.91925 13.3338C2.69624 13.1108 2.54438 12.8266 2.48285 12.5173C2.42132 12.208 2.4529 11.8874 2.57359 11.596C2.69428 11.3047 2.89866 11.0556 3.16088 10.8804C3.4231 10.7052 3.73139 10.6117 4.04677 10.6117C4.46939 10.6126 4.87445 10.7809 5.17329 11.0797C5.47213 11.3786 5.64042 11.7836 5.64133 12.2063Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M19.4047 13.8008C20.2854 13.8008 20.9993 13.0869 20.9993 12.2063C20.9993 11.3256 20.2854 10.6117 19.4047 10.6117C18.5241 10.6117 17.8102 11.3256 17.8102 12.2063C17.8102 13.0869 18.5241 13.8008 19.4047 13.8008Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.91287 11.0824C5.75718 11.088 5.60422 11.0405 5.47907 10.9477C5.35392 10.8549 5.264 10.7223 5.22406 10.5718C5.18411 10.4212 5.19652 10.2615 5.25923 10.1189C5.32194 9.97626 5.43124 9.85918 5.56922 9.78683L7.11566 8.90708L5.53485 8.02045C5.37444 7.92931 5.25681 7.77817 5.20783 7.6003C5.15885 7.42242 5.18253 7.23237 5.27367 7.07196C5.36482 6.91155 5.51595 6.79392 5.69383 6.74493C5.8717 6.69595 6.06175 6.71964 6.22216 6.81078L8.85456 8.30568C8.96282 8.36485 9.05316 8.45207 9.1161 8.55819C9.17904 8.66431 9.21225 8.78542 9.21225 8.9088C9.21225 9.03218 9.17904 9.15328 9.1161 9.2594C9.05316 9.36552 8.96282 9.45274 8.85456 9.51191L6.25653 10.9965C6.15145 11.0547 6.03296 11.0843 5.91287 11.0824Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.573 11.0757C17.4523 11.0754 17.3338 11.0434 17.2294 10.9829L14.6588 9.48798C14.5555 9.42734 14.4698 9.34073 14.4102 9.23674C14.3507 9.13275 14.3193 9.015 14.3193 8.89517C14.3193 8.77534 14.3507 8.65759 14.4102 8.55361C14.4698 8.44962 14.5555 8.36301 14.6588 8.30237L17.2122 6.82122C17.3693 6.73905 17.552 6.72075 17.7223 6.77014C17.8925 6.81953 18.0371 6.93279 18.1258 7.08627C18.2145 7.23975 18.2405 7.42157 18.1983 7.59375C18.1562 7.76593 18.0491 7.91516 17.8995 8.01026L16.3702 8.89689L17.9201 9.79727C18.0491 9.8738 18.1496 9.99044 18.2061 10.1294C18.2626 10.2683 18.2721 10.422 18.2332 10.5668C18.1942 10.7117 18.109 10.8398 17.9904 10.9317C17.8718 11.0236 17.7265 11.0741 17.5765 11.0757H17.573Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_661"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.758057 -0.000244141)"
  })))) : 6), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 22 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_639)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.9932 11.3091C21.9241 13.4766 21.214 15.5749 19.9526 17.3389C18.6912 19.1028 16.9352 20.4532 14.9064 21.2192C12.8777 21.9852 10.6673 22.1326 8.55485 21.6426C6.44237 21.1526 4.52261 20.0473 3.03824 18.4663C1.55388 16.8854 0.571568 14.8999 0.215495 12.7608C-0.140578 10.6216 0.145575 8.42497 1.03778 6.44845C1.92998 4.47193 3.38817 2.80432 5.22801 1.65643C7.06784 0.508545 9.20671 -0.0680775 11.3742 -0.000537715C12.8144 0.0438852 14.2316 0.371768 15.545 0.964359C16.8583 1.55695 18.0419 2.40262 19.0282 3.45302C20.0144 4.50341 20.7839 5.73792 21.2927 7.08594C21.8014 8.43396 22.0395 9.86905 21.9932 11.3091Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0099 14.571C6.90664 14.571 5.74165 12.9317 5.62137 12.7461C5.55422 12.6217 5.53663 12.4764 5.57215 12.3395C5.60766 12.2026 5.69365 12.0842 5.81284 12.0081C5.93204 11.932 6.07562 11.9037 6.21476 11.9291C6.3539 11.9544 6.4783 12.0315 6.56299 12.1447C6.56299 12.1447 7.52178 13.4541 11.0099 13.4541C14.498 13.4541 15.498 12.1379 15.5049 12.1241C15.5874 12.0018 15.7146 11.9167 15.8592 11.8872C16.0038 11.8576 16.1542 11.8859 16.2781 11.966C16.3394 12.0063 16.3921 12.0583 16.4333 12.119C16.4744 12.1797 16.5031 12.248 16.5178 12.3198C16.5325 12.3917 16.5329 12.4657 16.5189 12.5377C16.5049 12.6097 16.4768 12.6782 16.4362 12.7393C16.3125 12.9283 15.1097 14.571 11.0099 14.571Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7935 6.29522C15.0444 6.19763 15.3214 6.19019 15.5771 6.27418C15.8329 6.35818 16.0515 6.52839 16.1956 6.75572C16.3459 6.53294 16.5694 6.36975 16.8274 6.29444C17.0853 6.21912 17.3615 6.23642 17.6081 6.34333C18.2954 6.64231 18.426 7.3743 18.127 8.04443C17.9105 8.53929 16.9723 9.46028 16.4637 9.93453C16.3777 10.0183 16.2624 10.0652 16.1424 10.0652C16.0223 10.0652 15.907 10.0183 15.8211 9.93453C15.3296 9.4431 14.4189 8.49118 14.2196 7.99288C13.9447 7.28495 14.0994 6.57358 14.7935 6.29522Z",
    fill: "#D1212D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.49076 6.29512C4.74316 6.1925 5.02372 6.18243 5.28282 6.2667C5.54192 6.35097 5.76288 6.52416 5.90662 6.75562C6.0575 6.53257 6.28159 6.36927 6.54014 6.29396C6.79869 6.21866 7.07542 6.23609 7.32248 6.34324C8.00979 6.64222 8.14037 7.3742 7.84139 8.04433C7.62489 8.53919 6.68328 9.46018 6.17811 9.93443C6.09113 10.0176 5.97542 10.064 5.85507 10.064C5.73472 10.064 5.61901 10.0176 5.53203 9.93443C5.04061 9.443 4.13336 8.49108 3.93404 7.99278C3.6385 7.28485 3.79658 6.57348 4.49076 6.29512Z",
    fill: "#D1212D"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_639"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.0645142 -0.000244141)"
  })))) : 7), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 22 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_639)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.9932 11.3091C21.9241 13.4766 21.214 15.5749 19.9526 17.3389C18.6912 19.1028 16.9352 20.4532 14.9064 21.2192C12.8777 21.9852 10.6673 22.1326 8.55485 21.6426C6.44237 21.1526 4.52261 20.0473 3.03824 18.4663C1.55388 16.8854 0.571568 14.8999 0.215495 12.7608C-0.140578 10.6216 0.145575 8.42497 1.03778 6.44845C1.92998 4.47193 3.38817 2.80432 5.22801 1.65643C7.06784 0.508545 9.20671 -0.0680775 11.3742 -0.000537715C12.8144 0.0438852 14.2316 0.371768 15.545 0.964359C16.8583 1.55695 18.0419 2.40262 19.0282 3.45302C20.0144 4.50341 20.7839 5.73792 21.2927 7.08594C21.8014 8.43396 22.0395 9.86905 21.9932 11.3091Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0099 14.571C6.90664 14.571 5.74165 12.9317 5.62137 12.7461C5.55422 12.6217 5.53663 12.4764 5.57215 12.3395C5.60766 12.2026 5.69365 12.0842 5.81284 12.0081C5.93204 11.932 6.07562 11.9037 6.21476 11.9291C6.3539 11.9544 6.4783 12.0315 6.56299 12.1447C6.56299 12.1447 7.52178 13.4541 11.0099 13.4541C14.498 13.4541 15.498 12.1379 15.5049 12.1241C15.5874 12.0018 15.7146 11.9167 15.8592 11.8872C16.0038 11.8576 16.1542 11.8859 16.2781 11.966C16.3394 12.0063 16.3921 12.0583 16.4333 12.119C16.4744 12.1797 16.5031 12.248 16.5178 12.3198C16.5325 12.3917 16.5329 12.4657 16.5189 12.5377C16.5049 12.6097 16.4768 12.6782 16.4362 12.7393C16.3125 12.9283 15.1097 14.571 11.0099 14.571Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7935 6.29522C15.0444 6.19763 15.3214 6.19019 15.5771 6.27418C15.8329 6.35818 16.0515 6.52839 16.1956 6.75572C16.3459 6.53294 16.5694 6.36975 16.8274 6.29444C17.0853 6.21912 17.3615 6.23642 17.6081 6.34333C18.2954 6.64231 18.426 7.3743 18.127 8.04443C17.9105 8.53929 16.9723 9.46028 16.4637 9.93453C16.3777 10.0183 16.2624 10.0652 16.1424 10.0652C16.0223 10.0652 15.907 10.0183 15.8211 9.93453C15.3296 9.4431 14.4189 8.49118 14.2196 7.99288C13.9447 7.28495 14.0994 6.57358 14.7935 6.29522Z",
    fill: "#D1212D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.49076 6.29512C4.74316 6.1925 5.02372 6.18243 5.28282 6.2667C5.54192 6.35097 5.76288 6.52416 5.90662 6.75562C6.0575 6.53257 6.28159 6.36927 6.54014 6.29396C6.79869 6.21866 7.07542 6.23609 7.32248 6.34324C8.00979 6.64222 8.14037 7.3742 7.84139 8.04433C7.62489 8.53919 6.68328 9.46018 6.17811 9.93443C6.09113 10.0176 5.97542 10.064 5.85507 10.064C5.73472 10.064 5.61901 10.0176 5.53203 9.93443C5.04061 9.443 4.13336 8.49108 3.93404 7.99278C3.6385 7.28485 3.79658 6.57348 4.49076 6.29512Z",
    fill: "#D1212D"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_639"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.0645142 -0.000244141)"
  })))) : 8), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 22 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_639)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.9932 11.3091C21.9241 13.4766 21.214 15.5749 19.9526 17.3389C18.6912 19.1028 16.9352 20.4532 14.9064 21.2192C12.8777 21.9852 10.6673 22.1326 8.55485 21.6426C6.44237 21.1526 4.52261 20.0473 3.03824 18.4663C1.55388 16.8854 0.571568 14.8999 0.215495 12.7608C-0.140578 10.6216 0.145575 8.42497 1.03778 6.44845C1.92998 4.47193 3.38817 2.80432 5.22801 1.65643C7.06784 0.508545 9.20671 -0.0680775 11.3742 -0.000537715C12.8144 0.0438852 14.2316 0.371768 15.545 0.964359C16.8583 1.55695 18.0419 2.40262 19.0282 3.45302C20.0144 4.50341 20.7839 5.73792 21.2927 7.08594C21.8014 8.43396 22.0395 9.86905 21.9932 11.3091Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0099 14.571C6.90664 14.571 5.74165 12.9317 5.62137 12.7461C5.55422 12.6217 5.53663 12.4764 5.57215 12.3395C5.60766 12.2026 5.69365 12.0842 5.81284 12.0081C5.93204 11.932 6.07562 11.9037 6.21476 11.9291C6.3539 11.9544 6.4783 12.0315 6.56299 12.1447C6.56299 12.1447 7.52178 13.4541 11.0099 13.4541C14.498 13.4541 15.498 12.1379 15.5049 12.1241C15.5874 12.0018 15.7146 11.9167 15.8592 11.8872C16.0038 11.8576 16.1542 11.8859 16.2781 11.966C16.3394 12.0063 16.3921 12.0583 16.4333 12.119C16.4744 12.1797 16.5031 12.248 16.5178 12.3198C16.5325 12.3917 16.5329 12.4657 16.5189 12.5377C16.5049 12.6097 16.4768 12.6782 16.4362 12.7393C16.3125 12.9283 15.1097 14.571 11.0099 14.571Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7935 6.29522C15.0444 6.19763 15.3214 6.19019 15.5771 6.27418C15.8329 6.35818 16.0515 6.52839 16.1956 6.75572C16.3459 6.53294 16.5694 6.36975 16.8274 6.29444C17.0853 6.21912 17.3615 6.23642 17.6081 6.34333C18.2954 6.64231 18.426 7.3743 18.127 8.04443C17.9105 8.53929 16.9723 9.46028 16.4637 9.93453C16.3777 10.0183 16.2624 10.0652 16.1424 10.0652C16.0223 10.0652 15.907 10.0183 15.8211 9.93453C15.3296 9.4431 14.4189 8.49118 14.2196 7.99288C13.9447 7.28495 14.0994 6.57358 14.7935 6.29522Z",
    fill: "#D1212D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.49076 6.29512C4.74316 6.1925 5.02372 6.18243 5.28282 6.2667C5.54192 6.35097 5.76288 6.52416 5.90662 6.75562C6.0575 6.53257 6.28159 6.36927 6.54014 6.29396C6.79869 6.21866 7.07542 6.23609 7.32248 6.34324C8.00979 6.64222 8.14037 7.3742 7.84139 8.04433C7.62489 8.53919 6.68328 9.46018 6.17811 9.93443C6.09113 10.0176 5.97542 10.064 5.85507 10.064C5.73472 10.064 5.61901 10.0176 5.53203 9.93443C5.04061 9.443 4.13336 8.49108 3.93404 7.99278C3.6385 7.28485 3.79658 6.57348 4.49076 6.29512Z",
    fill: "#D1212D"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_639"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.0645142 -0.000244141)"
  })))) : 9), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_661)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.6867 11.3091C22.6177 13.4766 21.9076 15.5749 20.6462 17.3389C19.3848 19.1028 17.6287 20.4532 15.5999 21.2192C13.5712 21.9852 11.3609 22.1326 9.24839 21.6426C7.13592 21.1526 5.21615 20.0473 3.73179 18.4663C2.24742 16.8854 1.26511 14.8999 0.909038 12.7608C0.552964 10.6216 0.839117 8.42497 1.73132 6.44845C2.62352 4.47193 4.08171 2.80432 5.92155 1.65643C7.76138 0.508545 9.90025 -0.0680775 12.0678 -0.000537715C13.5079 0.0438852 14.9252 0.371768 16.2385 0.964359C17.5518 1.55695 18.7355 2.40262 19.7217 3.45302C20.7079 4.50341 21.4774 5.73792 21.9862 7.08594C22.495 8.43396 22.733 9.86905 22.6867 11.3091Z",
    fill: "#FFFF00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.78229 12.9417C6.73392 12.9416 6.68627 12.9534 6.64351 12.976C6.60076 12.9986 6.56421 13.0314 6.53706 13.0714C6.50992 13.1114 6.49302 13.1575 6.48784 13.2056C6.48267 13.2537 6.48937 13.3023 6.50737 13.3472C6.90638 14.398 7.619 15.3007 8.54853 15.9326C9.47806 16.5646 10.5795 16.8954 11.7034 16.88C15.1125 16.88 16.5146 14.3335 16.9442 13.3197C16.962 13.2746 16.9686 13.2259 16.9634 13.1776C16.9582 13.1294 16.9413 13.0832 16.9143 13.0429C16.8872 13.0027 16.8508 12.9696 16.8081 12.9466C16.7654 12.9236 16.7177 12.9113 16.6692 12.9108L6.78229 12.9417Z",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.7035 17.3715C8.02293 17.3715 6.52804 14.6876 6.05379 13.5329C6.00463 13.4138 5.98559 13.2844 5.99837 13.1562C6.01115 13.028 6.05535 12.9049 6.12706 12.7979C6.19876 12.6908 6.29576 12.6031 6.40946 12.5425C6.52316 12.4819 6.65006 12.4502 6.7789 12.4504L16.6659 12.4229C16.7956 12.4216 16.9236 12.4523 17.0387 12.5122C17.1538 12.5722 17.2523 12.6595 17.3257 12.7665C17.397 12.8739 17.4406 12.9973 17.4526 13.1256C17.4646 13.2539 17.4446 13.3832 17.3944 13.502C16.9098 14.6704 15.3806 17.3715 11.7035 17.3715ZM7.08132 13.4298C7.47143 14.3261 8.11909 15.0862 8.94207 15.6136C9.76504 16.1411 10.7262 16.412 11.7035 16.3921C12.6885 16.4066 13.6559 16.1308 14.4852 15.5991C15.3145 15.0674 15.9689 14.3034 16.3669 13.4023L7.08132 13.4298Z",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.12258 14.7356H9.09509C8.09481 14.6364 7.12051 14.3582 6.2187 13.9142C6.16678 13.8878 6.12748 13.8418 6.10944 13.7864C6.0914 13.731 6.09608 13.6706 6.12247 13.6187C6.14961 13.5665 6.19622 13.5272 6.2522 13.5092C6.30817 13.4911 6.36898 13.4959 6.42145 13.5225C7.27751 13.9417 8.20155 14.2047 9.15007 14.2991C9.2035 14.3084 9.25163 14.337 9.28524 14.3795C9.31884 14.4221 9.33554 14.4756 9.33213 14.5297C9.32872 14.5838 9.30544 14.6347 9.26677 14.6727C9.22809 14.7107 9.17674 14.7331 9.12258 14.7356Z",
    fill: "#F2F2F2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7001 14.6837C14.6417 14.6883 14.584 14.6695 14.5395 14.6315C14.4951 14.5934 14.4675 14.5393 14.463 14.481C14.4584 14.4226 14.4772 14.3649 14.5152 14.3204C14.5532 14.2759 14.6074 14.2484 14.6657 14.2438C15.4185 14.1236 16.1552 13.9184 16.8617 13.6321C16.914 13.6166 16.9703 13.6211 17.0195 13.6447C17.0687 13.6684 17.1074 13.7095 17.128 13.7601C17.1486 13.8107 17.1496 13.8671 17.1308 13.9184C17.1121 13.9697 17.075 14.0122 17.0266 14.0377C16.2905 14.3379 15.5227 14.5535 14.7379 14.6803L14.7001 14.6837Z",
    fill: "#F2F2F2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M5.64133 12.2063C5.64133 12.5216 5.54781 12.8299 5.37259 13.0921C5.19738 13.3544 4.94835 13.5587 4.65698 13.6794C4.36561 13.8001 4.045 13.8317 3.73569 13.7702C3.42637 13.7086 3.14225 13.5568 2.91925 13.3338C2.69624 13.1108 2.54438 12.8266 2.48285 12.5173C2.42132 12.208 2.4529 11.8874 2.57359 11.596C2.69428 11.3047 2.89866 11.0556 3.16088 10.8804C3.4231 10.7052 3.73139 10.6117 4.04677 10.6117C4.46939 10.6126 4.87445 10.7809 5.17329 11.0797C5.47213 11.3786 5.64042 11.7836 5.64133 12.2063Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M19.4047 13.8008C20.2854 13.8008 20.9993 13.0869 20.9993 12.2063C20.9993 11.3256 20.2854 10.6117 19.4047 10.6117C18.5241 10.6117 17.8102 11.3256 17.8102 12.2063C17.8102 13.0869 18.5241 13.8008 19.4047 13.8008Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.91287 11.0824C5.75718 11.088 5.60422 11.0405 5.47907 10.9477C5.35392 10.8549 5.264 10.7223 5.22406 10.5718C5.18411 10.4212 5.19652 10.2615 5.25923 10.1189C5.32194 9.97626 5.43124 9.85918 5.56922 9.78683L7.11566 8.90708L5.53485 8.02045C5.37444 7.92931 5.25681 7.77817 5.20783 7.6003C5.15885 7.42242 5.18253 7.23237 5.27367 7.07196C5.36482 6.91155 5.51595 6.79392 5.69383 6.74493C5.8717 6.69595 6.06175 6.71964 6.22216 6.81078L8.85456 8.30568C8.96282 8.36485 9.05316 8.45207 9.1161 8.55819C9.17904 8.66431 9.21225 8.78542 9.21225 8.9088C9.21225 9.03218 9.17904 9.15328 9.1161 9.2594C9.05316 9.36552 8.96282 9.45274 8.85456 9.51191L6.25653 10.9965C6.15145 11.0547 6.03296 11.0843 5.91287 11.0824Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.573 11.0757C17.4523 11.0754 17.3338 11.0434 17.2294 10.9829L14.6588 9.48798C14.5555 9.42734 14.4698 9.34073 14.4102 9.23674C14.3507 9.13275 14.3193 9.015 14.3193 8.89517C14.3193 8.77534 14.3507 8.65759 14.4102 8.55361C14.4698 8.44962 14.5555 8.36301 14.6588 8.30237L17.2122 6.82122C17.3693 6.73905 17.552 6.72075 17.7223 6.77014C17.8925 6.81953 18.0371 6.93279 18.1258 7.08627C18.2145 7.23975 18.2405 7.42157 18.1983 7.59375C18.1562 7.76593 18.0491 7.91516 17.8995 8.01026L16.3702 8.89689L17.9201 9.79727C18.0491 9.8738 18.1496 9.99044 18.2061 10.1294C18.2626 10.2683 18.2721 10.422 18.2332 10.5668C18.1942 10.7117 18.109 10.8398 17.9904 10.9317C17.8718 11.0236 17.7265 11.0741 17.5765 11.0757H17.573Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_661"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.758057 -0.000244141)"
  })))) : 10)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_rate"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rate__typo"
  }, "unlikely"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rate__typo"
  }, "likely"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rate__typo"
  }, "most likely")), !customize && setting.useScale && isHovered && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "diplay_hover",
    style: {
      transform: row ? "" : `rotate(270deg)`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "scale__customize",
    onClick: handleCustomize
  }, "Customize"))), !customize && setting.useScale && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_use",
    onMouseEnter: handleMouseLeave
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Scale Template"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => {
      createScale();
      setIsTitleActive(false);
      setSetting(setting => ({
        ...setting,
        emojiScale: emoji,
        numberScale: !emoji,
        useScale: false
      }));
      setAttributes({
        state: {
          ...state,
          row: row,
          emoji: emoji,
          btnbg: btnbg,
          btncolr: btncolr,
          scale: {
            ...state.scale,
            blockData: blockId
          }
        }
      });
      // setAttributes({
      //   state: {
      //     row: row,
      //     emoji: emoji,
      //     btnbg: btnbg,
      //     btncolr: btncolr,
      //     color: {
      //       btnColor: "",
      //       btnBgcolor: "",
      //       fntColor: "",
      //       sclColor: "",
      //       confgrFontColor: "",
      //     },
      //     scale: {
      //       format: "",
      //       width: "",
      //       height: "",
      //       lblLeft: "unlikely",
      //       lblCenter: "likely",
      //       lblRight: "most likely",
      //       sclRangefromA: "",
      //       sclRangetoB: "",
      //       title: "Help us improve!",
      //       question: "How would you rate it?",
      //     },
      //   },
      // });
    }
  }, "use"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10 4.0625C10.5178 4.0625 10.9375 3.64277 10.9375 3.125C10.9375 2.60723 10.5178 2.1875 10 2.1875C9.48223 2.1875 9.0625 2.60723 9.0625 3.125C9.0625 3.64277 9.48223 4.0625 10 4.0625Z",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10 17.8125C10.5178 17.8125 10.9375 17.3928 10.9375 16.875C10.9375 16.3572 10.5178 15.9375 10 15.9375C9.48223 15.9375 9.0625 16.3572 9.0625 16.875C9.0625 17.3928 9.48223 17.8125 10 17.8125Z",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))));
}

/***/ }),

/***/ "./src/components/ScaleContext.js":
/*!****************************************!*\
  !*** ./src/components/ScaleContext.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScaleContext: function() { return /* binding */ ScaleContext; },
/* harmony export */   ScaleProvider: function() { return /* binding */ ScaleProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



// Initial state for the counter
const initialState = {
  scaleOrientation: "horizontal",
  color: {
    btnColor: "#FFFF00",
    btnBgcolor: "",
    fntColor: "#ff0000",
    sclColor: "#FFFFFF",
    confgrFontColor: ""
  },
  scale: {
    format: "",
    width: "",
    height: "",
    lblLeft: "unlikely",
    lblCenter: "likely",
    lblRight: "most likely",
    sclRangefromA: "",
    sclRangetoB: "",
    title: "Help us improve!",
    question: "How would you rate it?",
    blockData: "434"
  }
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SCALE_ORIENTATION":
      return {
        ...state,
        scaleOrientaion: action.payload
      };
    case "SET_BTN_COLOR":
      return {
        ...state,
        color: {
          ...state.color,
          btnColor: action.payload
        }
      };
    case "SET_CONFGR_FONT_COLOR":
      return {
        ...state,
        color: {
          ...state.color,
          confgrFontColor: action.payload
        }
      };
    case "SET_BTN_BG_COLOR":
      return {
        ...state,
        color: {
          ...state.color,
          btnBgcolor: action.payload
        }
      };
    case "SET_FONT_COLOR":
      return {
        ...state,
        color: {
          ...state.color,
          fntColor: action.payload
        }
      };
    case "SET_SCALE_COLOR":
      return {
        ...state,
        color: {
          ...state.color,
          sclColor: action.payload
        }
      };
    case "SET_SCALE_FORMAT":
      return {
        ...state,
        scale: {
          ...state.scale,
          format: action.payload
        }
      };
    case "SET_SCALE_DIMENSIONS":
      return {
        ...state,
        scale: {
          ...state.scale,
          width: action.payload.width,
          height: action.payload.height
        }
      };
    case "SET_LABELS":
      return {
        ...state,
        scale: {
          ...state.scale,
          lblLeft: action.payload.lblLeft,
          lblCenter: action.payload.lblCenter,
          lblRight: action.payload.lblRight
        }
      };
    case "SET_CONFIGURE_TITLE_QUESTION":
      return {
        ...state,
        scale: {
          ...state.scale,
          title: action.payload.title,
          question: action.payload.question
        }
      };
    case "SET_BLOCK_ID":
      return {
        ...state,
        scale: {
          ...state.scale,
          blockData: action.payload.scale.blockData
        }
      };
    case "SET_SCALE_RANGE":
      return {
        ...state,
        scale: {
          ...state.scale,
          sclRangefromA: action.payload.sclRangefromA,
          sclRangetoB: action.payload.sclRangetoB
        }
      };
    default:
      return {
        ...action.payload
      };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

// Create the context
const ScaleContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

// Provider component
const ScaleProvider = ({
  children
}) => {
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ScaleContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};


/***/ }),

/***/ "./src/components/setting/Configuration.js":
/*!*************************************************!*\
  !*** ./src/components/setting/Configuration.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Configuration; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScaleContext */ "./src/components/ScaleContext.js");



function Configuration({
  setAttributes
}) {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ScaleContext__WEBPACK_IMPORTED_MODULE_1__.ScaleContext);
  const handleFontColorChange = e => {
    const newColor = e.target.value;
    dispatch({
      type: 'SET_CONFGR_FONT_COLOR',
      payload: newColor
    });
    setAttributes({
      state: {
        ...state,
        color: {
          ...state.color,
          confgrFontColor: action.payload
        }
      }
    });
  };
  const handleLabelChange = (position, value) => {
    dispatch({
      type: 'SET_CONFIGURE_TITLE_QUESTION',
      payload: {
        title: position === 'title' ? value : state.scale.title,
        question: position === 'question' ? value : state.scale.question
      }
    });
    setAttributes({
      state: {
        ...state,
        scale: {
          ...state.scale,
          title: position === 'title' ? value : state.scale.title,
          question: position === 'question' ? value : state.scale.question
        }
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "configure_element"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "configure_element--one"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "configure--title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "label--title"
  }, "Scale Title"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "configure_label--title",
    name: "label--title"

    //value={state.scale.lblLeft}
    //onChange={(e) => handleLabelChange('left', e.target.value)}
    ,

    value: state.scale.title,
    onChange: e => handleLabelChange('title', e.target.value)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "configure--question"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "label_question"
  }, "Question"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "scale_question",
    name: "scale_question"
    // value={state.scale.lblCenter}
    // onChange={(e) => handleLabelChange('center', e.target.value)}
    ,
    value: state.scale.question,
    onChange: e => handleLabelChange('question', e.target.value)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "configure_element--two"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "configuration_font--color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "font_label--color"
  }, "Font Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "color",
    id: "font--color",
    name: "font--color"

    //value={state.scale.lblLeft}
    ///onChange={(e) => handleLabelChange('left', e.target.value)}
    ,

    onChange: handleFontColorChange
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "configuration_font--style"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "configure_font--select",
    className: "font_select_label"
  }, "Font Style"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "configure_font--select",
    name: "configure_font--select",
    className: "configure_font--select"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Times New Roman"
  }, "Times New Roman"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "San Serif"
  }, "San Serif")))));
}

/***/ }),

/***/ "./src/components/setting/Scale.js":
/*!*****************************************!*\
  !*** ./src/components/setting/Scale.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scale; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScaleContext */ "./src/components/ScaleContext.js");



function Scale({
  row,
  emoji,
  btnbg,
  btncolr
}) {
  const {
    state
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ScaleContext__WEBPACK_IMPORTED_MODULE_1__.ScaleContext);
  //  console.log(btnbg, btncolr);
  const buttonStyle = {
    background: state.color.btnColor ? state.color.btnColor : btnbg ? btnbg : "rgb(142, 216, 142)",
    color: state.color.fntColor ? state.color.fntColor : btncolr ? btncolr : "white"
    //transform:`${state.scaleOrientaion? state.scaleOrientaion==='vertical'? 'rotate(-90deg)':'' : row ? '':'rotate(-90deg)'}`

    // Add other styles here as needed
  };
  // console.log(state.color.btnColor);
  // console.log(btnbg);
  emoji = state.scale.format == "emoji" ? true : state.scale.format == "number" ? false : emoji;
  let emojiColor = state.color.btnColor ? state.color.btnColor : btnbg ? btnbg : "rgb(142, 216, 142)";
  const buttonStylecond = !emoji ? buttonStyle : {};
  const scaleDir = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale__buttons",
    style: {
      flexDirection: `${state.scaleOrientaion === "vertical" ? "column" : "row"}`,
      gap: state.scaleOrientaion === "vertical" ? "12px" : ""
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 22 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_596)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.966 21.932C17.0224 21.932 21.932 17.0224 21.932 10.966C21.932 4.90966 17.0224 0 10.966 0C4.90966 0 0 4.90966 0 10.966C0 17.0224 4.90966 21.932 10.966 21.932Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.15479 10.5431C4.99785 10.5503 4.84316 10.5036 4.71649 10.4106C4.58982 10.3177 4.49882 10.1842 4.45864 10.0323C4.41845 9.88041 4.43152 9.71934 4.49566 9.57592C4.5598 9.4325 4.67114 9.31538 4.81113 9.24407L6.35758 8.36775L4.77677 7.47769C4.69756 7.43256 4.62803 7.37227 4.57212 7.30027C4.51622 7.22826 4.47505 7.14595 4.45096 7.05804C4.4023 6.88048 4.42617 6.69087 4.51731 6.53092C4.60845 6.37096 4.7594 6.25376 4.93696 6.20511C5.11451 6.15645 5.30412 6.18032 5.46408 6.27146L8.09647 7.76292C8.20558 7.82181 8.29673 7.90912 8.36026 8.0156C8.42379 8.12208 8.45733 8.24376 8.45733 8.36775C8.45733 8.49174 8.42379 8.61342 8.36026 8.7199C8.29673 8.82638 8.20558 8.91369 8.09647 8.97258L5.49844 10.4503C5.39403 10.5109 5.2755 10.5429 5.15479 10.5431Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.815 10.5327C16.6942 10.5336 16.5753 10.5015 16.4714 10.4399L13.9008 8.93468C13.7967 8.87426 13.7102 8.78754 13.6501 8.6832C13.59 8.57886 13.5584 8.46056 13.5584 8.34015C13.5584 8.21974 13.59 8.10145 13.6501 7.99711C13.7102 7.89277 13.7967 7.80605 13.9008 7.74563L16.4542 6.26791C16.6102 6.1931 16.7886 6.17986 16.954 6.23083C17.1193 6.28181 17.2593 6.39325 17.3461 6.54292C17.4328 6.69259 17.46 6.86947 17.422 7.03826C17.3841 7.20705 17.2839 7.35534 17.1415 7.45352L15.6122 8.34015L17.1621 9.24053C17.2911 9.31706 17.3916 9.4337 17.4481 9.57265C17.5046 9.71159 17.5141 9.86522 17.4752 10.0101C17.4363 10.1549 17.351 10.2831 17.2324 10.375C17.1138 10.4668 16.9685 10.5174 16.8185 10.5189L16.815 10.5327Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.03802 15.8593C6.98551 15.8597 6.93328 15.8516 6.88338 15.8353C6.81302 15.8155 6.74727 15.7819 6.68995 15.7366C6.63262 15.6913 6.58484 15.635 6.54937 15.5711C6.5139 15.5072 6.49145 15.4369 6.4833 15.3643C6.47516 15.2916 6.48149 15.2181 6.50192 15.1479C6.79348 14.19 7.38496 13.3511 8.18926 12.7547C8.99355 12.1582 9.96813 11.8359 10.9694 11.8351C11.9711 11.8243 12.949 12.1401 13.7551 12.7347C14.5612 13.3294 15.1516 14.1705 15.4369 15.1308C15.475 15.2738 15.4552 15.4261 15.3819 15.5547C15.3086 15.6833 15.1877 15.7779 15.0452 15.8181C14.9743 15.8378 14.9003 15.8434 14.8272 15.8344C14.7542 15.8253 14.6837 15.8019 14.6198 15.7655C14.5559 15.7291 14.4999 15.6803 14.4549 15.6221C14.4099 15.5639 14.377 15.4973 14.3579 15.4263C14.1373 14.7078 13.6915 14.0793 13.0863 13.6338C12.481 13.1882 11.7485 12.9491 10.9969 12.952C8.35078 12.952 7.61193 15.3576 7.58443 15.4572C7.54987 15.5748 7.47771 15.6778 7.37902 15.7504C7.28032 15.823 7.16054 15.8613 7.03802 15.8593Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_596"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white"
  })))) : 0), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_604)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.2417 10.9657C22.2424 13.1354 21.5996 15.2565 20.3947 17.0609C19.1898 18.8653 17.4768 20.2718 15.4725 21.1026C13.4681 21.9333 11.2624 22.1511 9.13433 21.7282C7.00624 21.3053 5.05135 20.2609 3.5169 18.7269C1.98245 17.1929 0.937365 15.2384 0.513827 13.1104C0.0902894 10.9824 0.307321 8.77666 1.13747 6.77206C1.96762 4.76745 3.3736 3.05405 5.1776 1.84856C6.98159 0.643068 9.10256 -0.000366104 11.2723 -0.000366211C14.1809 -0.000366354 16.9706 1.15487 19.0276 3.2113C21.0847 5.26773 22.2408 8.05697 22.2417 10.9657Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.3621 15.2818C19.3621 15.6883 19.2006 16.0781 18.9132 16.3656C18.6257 16.653 18.2359 16.8145 17.8294 16.8145C17.4229 16.8145 17.033 16.653 16.7456 16.3656C16.4582 16.0781 16.2967 15.6883 16.2967 15.2818C16.2967 14.433 17.8328 11.5463 17.8328 11.5463C17.8328 11.5463 19.3621 14.433 19.3621 15.2818Z",
    fill: "#2FA7BF"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.2657 10.5049C16.0072 10.5144 15.7493 10.4716 15.5078 10.3788C15.2662 10.2861 15.0459 10.1455 14.8602 9.96535C14.4454 9.48978 14.2203 8.87809 14.2278 8.24708C14.2415 8.10647 14.3078 7.97622 14.4134 7.88242C14.519 7.78862 14.6562 7.73818 14.7974 7.74123C14.9387 7.74427 15.0735 7.80056 15.175 7.89882C15.2765 7.99709 15.3371 8.13007 15.3447 8.27113C15.342 8.59998 15.4537 8.91953 15.6609 9.17494C15.8326 9.31506 16.0475 9.39159 16.2692 9.39159C16.4908 9.39159 16.7057 9.31506 16.8774 9.17494C17.0909 8.91717 17.2118 8.59536 17.2211 8.26082C17.2211 8.11317 17.2797 7.97157 17.3841 7.86716C17.4885 7.76276 17.6301 7.7041 17.7778 7.7041C17.9255 7.7041 18.0671 7.76276 18.1715 7.86716C18.2759 7.97157 18.3345 8.11317 18.3345 8.26082C18.3393 8.89381 18.1091 9.50606 17.6885 9.9791C17.4989 10.1581 17.2752 10.2969 17.0308 10.3872C16.7863 10.4776 16.5261 10.5176 16.2657 10.5049Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.26882 10.5048C6.01024 10.5145 5.75236 10.4717 5.51078 10.379C5.2692 10.2863 5.04892 10.1455 4.86328 9.96525C4.44503 9.49172 4.21941 8.87865 4.23095 8.24697C4.23253 8.17386 4.24849 8.10178 4.27793 8.03484C4.30737 7.9679 4.3497 7.90741 4.40252 7.85683C4.45533 7.80625 4.51759 7.76657 4.58574 7.74005C4.65389 7.71354 4.72659 7.7007 4.7997 7.70228C4.87281 7.70386 4.94489 7.71982 5.01183 7.74926C5.07877 7.7787 5.13926 7.82103 5.18984 7.87384C5.24042 7.92666 5.2801 7.98891 5.30662 8.05706C5.33314 8.12521 5.34597 8.19792 5.34439 8.27103C5.34496 8.59931 5.45636 8.91779 5.66056 9.17484C5.74211 9.24987 5.83813 9.30746 5.94272 9.3441C6.04731 9.38074 6.15827 9.39564 6.26882 9.38791C6.3804 9.395 6.49225 9.37915 6.59747 9.34132C6.70268 9.30349 6.79901 9.24449 6.88053 9.16797C7.08705 8.90511 7.20065 8.58124 7.20356 8.24697C7.2146 8.10643 7.27822 7.97522 7.38173 7.87951C7.48524 7.78381 7.62103 7.73066 7.762 7.73066C7.90298 7.73066 8.03877 7.78381 8.14228 7.87951C8.24579 7.97522 8.30941 8.10643 8.32044 8.24697C8.32136 8.87989 8.09028 9.49119 7.67094 9.96525C7.48546 10.1448 7.26571 10.2851 7.02481 10.3778C6.78391 10.4705 6.52679 10.5137 6.26882 10.5048Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.34447 15.4641C7.28814 15.4605 7.23261 15.4489 7.17952 15.4297C7.10916 15.41 7.04342 15.3764 6.98609 15.3311C6.92876 15.2858 6.88098 15.2295 6.84551 15.1656C6.81005 15.1017 6.78759 15.0314 6.77945 14.9588C6.7713 14.8861 6.77763 14.8126 6.79806 14.7424C7.08913 13.7842 7.6805 12.945 8.4849 12.3485C9.2893 11.752 10.2641 11.4298 11.2656 11.4296C12.2668 11.4185 13.2444 11.7338 14.0504 12.3278C14.8565 12.9219 15.4472 13.7622 15.7331 14.7218C15.7727 14.8645 15.7541 15.017 15.6813 15.1459C15.6084 15.2748 15.4874 15.3695 15.3448 15.4091C15.2021 15.4488 15.0496 15.4301 14.9207 15.3573C14.7918 15.2845 14.6971 15.1634 14.6574 15.0208C14.4379 14.3028 13.9933 13.6744 13.3894 13.2282C12.7855 12.7821 12.0542 12.5419 11.3034 12.543C8.65724 12.543 7.91838 14.9486 7.89088 15.0483C7.85886 15.1684 7.78779 15.2745 7.68886 15.3497C7.58994 15.425 7.46878 15.4653 7.34447 15.4641Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_604"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.306458 -0.000244141)"
  })))) : 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_613)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.5482 10.9657C22.5489 13.1354 21.9061 15.2565 20.7012 17.0609C19.4962 18.8653 17.7833 20.2718 15.7789 21.1026C13.7746 21.9333 11.5689 22.1511 9.44079 21.7282C7.3127 21.3053 5.3578 20.2609 3.82335 18.7269C2.2889 17.1929 1.24382 15.2384 0.820285 13.1104C0.396747 10.9824 0.613778 8.77666 1.44393 6.77206C2.27408 4.76745 3.68006 3.05405 5.48405 1.84856C7.28805 0.643068 9.40902 -0.000366104 11.5787 -0.000366211C14.4874 -0.000366354 17.277 1.15487 19.3341 3.2113C21.3912 5.26773 22.5473 8.05697 22.5482 10.9657Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.58903 11.4156C6.37786 11.4147 6.1756 11.3304 6.02627 11.1811C5.87695 11.0318 5.79266 10.8295 5.79176 10.6183V8.70416C5.7913 8.59917 5.81159 8.49512 5.85146 8.398C5.89132 8.30087 5.94998 8.21257 6.02405 8.13817C6.09813 8.06378 6.18618 8.00474 6.28313 7.96446C6.38009 7.92418 6.48404 7.90344 6.58903 7.90344C6.7993 7.90435 7.00069 7.98827 7.14937 8.13695C7.29805 8.28563 7.38197 8.48702 7.38288 8.69728V10.6183C7.38198 10.8289 7.29817 11.0306 7.14958 11.1799C7.001 11.3291 6.79961 11.4138 6.58903 11.4156Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.5722 11.4156C16.361 11.4147 16.1587 11.3304 16.0094 11.1811C15.8601 11.0318 15.7758 10.8295 15.7749 10.6183V8.70416C15.7749 8.49239 15.8588 8.28924 16.0082 8.13918C16.1576 7.98911 16.3604 7.90435 16.5722 7.90344C16.783 7.90344 16.9853 7.98697 17.1347 8.13574C17.2842 8.28452 17.3686 8.48643 17.3695 8.69728V10.6183C17.3686 10.8295 17.2843 11.0318 17.1349 11.1811C16.9856 11.3304 16.7834 11.4147 16.5722 11.4156Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.1594 6.38795C5.84433 6.38571 5.53228 6.32633 5.23841 6.21269C5.19982 6.19689 5.16473 6.17365 5.13512 6.1443C5.10552 6.11494 5.08199 6.08003 5.06587 6.04158C5.04976 6.00313 5.04137 5.96188 5.0412 5.92018C5.04103 5.87849 5.04907 5.83717 5.06486 5.79859C5.08066 5.76 5.1039 5.7249 5.13326 5.6953C5.16262 5.6657 5.19752 5.64216 5.23597 5.62605C5.31363 5.5935 5.40104 5.59314 5.47897 5.62504C5.85092 5.76853 6.26073 5.78065 6.64052 5.65941C6.77057 5.60026 6.88691 5.51473 6.98216 5.40825C7.0774 5.30176 7.14948 5.17664 7.19381 5.04083C7.22525 4.96199 7.28672 4.89887 7.36471 4.86536C7.44269 4.83184 7.53079 4.83068 7.60963 4.86213C7.68847 4.89357 7.75158 4.95505 7.7851 5.03303C7.81861 5.11101 7.81977 5.19911 7.78833 5.27795C7.71123 5.49231 7.59135 5.68876 7.43598 5.85535C7.28061 6.02195 7.09299 6.15522 6.88452 6.24706C6.65475 6.34232 6.40813 6.39024 6.1594 6.38795Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.8505 6.38801C16.6007 6.39029 16.3529 6.34238 16.122 6.24711C15.914 6.15506 15.727 6.02169 15.5722 5.85509C15.4174 5.68849 15.2981 5.49215 15.2216 5.27801C15.1894 5.20047 15.1891 5.11339 15.2206 5.03559C15.2521 4.95778 15.3129 4.89549 15.39 4.86219C15.4685 4.83261 15.5554 4.83471 15.6324 4.86806C15.7093 4.90141 15.7703 4.96339 15.8024 5.04089C15.8475 5.17734 15.9206 5.30286 16.0171 5.40939C16.1135 5.51591 16.2312 5.60109 16.3625 5.65946C16.7399 5.78161 17.1478 5.76947 17.5172 5.6251C17.5565 5.60418 17.5998 5.59171 17.6442 5.58849C17.6886 5.58527 17.7332 5.59136 17.7752 5.60639C17.8171 5.62142 17.8554 5.64504 17.8877 5.67575C17.9199 5.70645 17.9454 5.74356 17.9625 5.78469C17.9796 5.82583 17.9879 5.87007 17.9868 5.9146C17.9858 5.95913 17.9755 6.00295 17.9565 6.04325C17.9376 6.08355 17.9104 6.11945 17.8768 6.14864C17.8431 6.17783 17.8038 6.19967 17.7612 6.21275C17.4706 6.32517 17.1621 6.38453 16.8505 6.38801Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.5 16.8659C15.5384 16.9077 15.5898 16.9354 15.6458 16.9446C15.7019 16.9539 15.7594 16.944 15.8092 16.9168C15.8591 16.8895 15.8983 16.8463 15.9208 16.7941C15.9432 16.7419 15.9475 16.6837 15.933 16.6288C15.5893 15.4844 14.445 12.608 11.6029 12.608C8.76091 12.608 7.58561 15.5016 7.23164 16.6528C7.21897 16.7077 7.22463 16.7653 7.24776 16.8167C7.2709 16.868 7.31023 16.9104 7.35973 16.9373C7.40924 16.9642 7.46619 16.9741 7.52188 16.9656C7.57757 16.957 7.62893 16.9305 7.66808 16.89C8.75207 15.9271 10.1369 15.3707 11.5857 15.316C13.0293 15.3701 14.4107 15.9171 15.5 16.8659Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_613"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.612915 -0.000244141)"
  })))) : 2), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_623)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.8548 10.9657C22.8554 13.1354 22.2127 15.2565 21.0077 17.0609C19.8028 18.8653 18.0899 20.2718 16.0855 21.1026C14.0812 21.9333 11.8755 22.1511 9.74737 21.7282C7.61928 21.3053 5.66438 20.2609 4.12993 18.7269C2.59548 17.1929 1.5504 15.2384 1.12686 13.1104C0.703326 10.9824 0.920358 8.77666 1.75051 6.77206C2.58066 4.76745 3.98664 3.05405 5.79063 1.84856C7.59463 0.643068 9.7156 -0.000366104 11.8853 -0.000366211C14.794 -0.000366354 17.5836 1.15487 19.6407 3.2113C21.6977 5.26773 22.8538 8.05697 22.8548 10.9657Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.89548 11.041C6.68463 11.041 6.48236 10.9575 6.33293 10.8087C6.18351 10.66 6.09911 10.4581 6.09821 10.2472V7.49796C6.09821 7.28651 6.1822 7.08372 6.33172 6.9342C6.48124 6.78468 6.68403 6.70068 6.89548 6.70068C7.10634 6.70159 7.30825 6.78599 7.45703 6.93541C7.6058 7.08483 7.68933 7.28711 7.68933 7.49796V10.2472C7.68842 10.4575 7.6045 10.6589 7.45582 10.8075C7.30714 10.9562 7.10575 11.0401 6.89548 11.041Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.8786 11.041C16.6681 11.0401 16.4663 10.9563 16.3171 10.8077C16.1679 10.6592 16.0832 10.4578 16.0814 10.2472V7.49796C16.0823 7.28679 16.1666 7.08452 16.3159 6.9352C16.4652 6.78588 16.6675 6.70159 16.8786 6.70068C17.0901 6.70068 17.2929 6.78468 17.4424 6.9342C17.5919 7.08372 17.6759 7.28651 17.6759 7.49796V10.2472C17.675 10.4581 17.5906 10.66 17.4412 10.8087C17.2918 10.9575 17.0895 11.041 16.8786 11.041Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7.95739 15.8589C7.90488 15.8594 7.85265 15.8512 7.80275 15.8349C7.73239 15.8151 7.66665 15.7816 7.60932 15.7362C7.55199 15.6909 7.50421 15.6347 7.46874 15.5708C7.43328 15.5068 7.41082 15.4365 7.40268 15.3639C7.39453 15.2913 7.40086 15.2178 7.42129 15.1476C7.71285 14.1897 8.30434 13.3507 9.10863 12.7543C9.91293 12.1579 10.8875 11.8355 11.8888 11.8347C12.8905 11.8239 13.8684 12.1397 14.6745 12.7344C15.4806 13.329 16.071 14.1702 16.3563 15.1304C16.3944 15.2735 16.3746 15.4257 16.3013 15.5543C16.228 15.6829 16.107 15.7775 15.9645 15.8177C15.8937 15.8375 15.8196 15.843 15.7466 15.834C15.6736 15.825 15.6031 15.8016 15.5392 15.7651C15.4753 15.7287 15.4192 15.68 15.3743 15.6218C15.3293 15.5635 15.2963 15.497 15.2772 15.4259C15.0567 14.7074 14.6109 14.079 14.0056 13.6334C13.4004 13.1878 12.6679 12.9488 11.9163 12.9516C9.27016 12.9516 8.5313 15.3572 8.50381 15.4569C8.46924 15.5744 8.39708 15.6774 8.29839 15.75C8.1997 15.8227 8.07991 15.8609 7.95739 15.8589Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_623"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.919312 -0.000244141)"
  })))) : 3), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_631)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.1612 10.9657C22.1619 13.1354 21.5191 15.2565 20.3142 17.0609C19.1093 18.8653 17.3963 20.2718 15.392 21.1026C13.3876 21.9333 11.1819 22.1511 9.05383 21.7282C6.92573 21.3053 4.97084 20.2609 3.43639 18.7269C1.90194 17.1929 0.856859 15.2384 0.433322 13.1104C0.00978398 10.9824 0.226815 8.77666 1.05697 6.77206C1.88712 4.76745 3.2931 3.05405 5.09709 1.84856C6.90108 0.643068 9.02205 -0.000366104 11.1918 -0.000366211C14.1004 -0.000366354 16.89 1.15487 18.9471 3.2113C21.0042 5.26773 22.1603 8.05697 22.1612 10.9657Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.37724 8.8964C8.37633 9.10726 8.29193 9.30917 8.14251 9.45794C7.99309 9.60672 7.79082 9.69025 7.57996 9.69024H4.83073C4.61987 9.69025 4.4176 9.60672 4.26818 9.45794C4.11876 9.30917 4.03436 9.10726 4.03345 8.8964C4.03345 8.68495 4.11745 8.48216 4.26696 8.33264C4.41648 8.18312 4.61927 8.09912 4.83073 8.09912H7.57996C7.79142 8.09912 7.99421 8.18312 8.14373 8.33264C8.29324 8.48216 8.37724 8.68495 8.37724 8.8964Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18.3639 8.8964C18.3629 9.10726 18.2785 9.30917 18.1291 9.45794C17.9797 9.60672 17.7774 9.69025 17.5666 9.69024H14.8173C14.6071 9.68934 14.4057 9.60541 14.257 9.45673C14.1083 9.30805 14.0244 9.10666 14.0235 8.8964C14.0235 8.68554 14.107 8.48327 14.2558 8.33385C14.4046 8.18443 14.6065 8.10003 14.8173 8.09912H17.5666C17.778 8.09912 17.9808 8.18312 18.1303 8.33264C18.2799 8.48216 18.3639 8.68495 18.3639 8.8964Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.4738 14.5776H4.91323C4.78654 14.5776 4.66504 14.5272 4.57546 14.4376C4.48587 14.3481 4.43555 14.2266 4.43555 14.0999C4.43555 13.9732 4.48587 13.8517 4.57546 13.7621C4.66504 13.6725 4.78654 13.6222 4.91323 13.6222H17.4738C17.6005 13.6222 17.722 13.6725 17.8116 13.7621C17.9012 13.8517 17.9515 13.9732 17.9515 14.0999C17.9515 14.2266 17.9012 14.3481 17.8116 14.4376C17.722 14.5272 17.6005 14.5776 17.4738 14.5776Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_631"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.225769 -0.000244141)"
  })))) : 4), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_674)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.4676 10.9657C22.4682 13.1354 21.8255 15.2565 20.6205 17.0609C19.4156 18.8653 17.7026 20.2718 15.6983 21.1026C13.694 21.9333 11.4883 22.1511 9.36016 21.7282C7.23207 21.3053 5.27718 20.2609 3.74273 18.7269C2.20828 17.1929 1.16319 15.2384 0.739657 13.1104C0.316119 10.9824 0.533151 8.77666 1.3633 6.77206C2.19345 4.76745 3.59943 3.05405 5.40343 1.84856C7.20742 0.643068 9.32839 -0.000366104 11.4981 -0.000366211C14.4068 -0.000366354 17.1964 1.15487 19.2535 3.2113C21.3105 5.26773 22.4666 8.05697 22.4676 10.9657Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.5084 11.0275C6.29695 11.0275 6.09416 10.9435 5.94464 10.794C5.79512 10.6445 5.71112 10.4417 5.71112 10.2302V8.3195C5.71112 8.10804 5.79512 7.90525 5.94464 7.75573C6.09416 7.60622 6.29695 7.52222 6.5084 7.52222C6.71926 7.52313 6.92116 7.60753 7.06994 7.75695C7.21872 7.90637 7.30224 8.10864 7.30224 8.3195V10.2302C7.30224 10.4411 7.21872 10.6433 7.06994 10.7928C6.92116 10.9422 6.71926 11.0266 6.5084 11.0275Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.4916 11.0275C16.2804 11.0266 16.0781 10.9423 15.9288 10.793C15.7795 10.6437 15.6952 10.4414 15.6943 10.2302V8.3195C15.6952 8.10832 15.7795 7.90606 15.9288 7.75673C16.0781 7.60741 16.2804 7.52312 16.4916 7.52222C16.703 7.52222 16.9058 7.60622 17.0553 7.75573C17.2048 7.90525 17.2888 8.10804 17.2888 8.3195V10.2302C17.2888 10.4417 17.2048 10.6445 17.0553 10.794C16.9058 10.9435 16.703 11.0275 16.4916 11.0275Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.4811 15.1543C8.04455 15.1543 7.10293 13.1886 7.06169 13.0924C7.00108 12.9556 6.99726 12.8004 7.05108 12.6609C7.10489 12.5214 7.21193 12.409 7.34864 12.3483C7.48536 12.2877 7.64055 12.2839 7.78008 12.3377C7.91961 12.3915 8.03205 12.4986 8.09266 12.6353C8.11671 12.6868 8.8212 14.0374 11.4983 14.0374C14.1753 14.0374 14.9348 12.6628 14.9348 12.6112C14.9661 12.5451 15.0102 12.4857 15.0645 12.4367C15.1189 12.3877 15.1824 12.35 15.2514 12.3257C15.3205 12.3014 15.3937 12.291 15.4667 12.2952C15.5398 12.2994 15.6113 12.318 15.6771 12.3501C15.8097 12.4153 15.9114 12.53 15.9603 12.6695C16.0091 12.809 16.0012 12.9621 15.9383 13.0958C15.8936 13.1817 14.9108 15.1543 11.4811 15.1543Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M4.27119 13.8009C5.15184 13.8009 5.86575 13.087 5.86575 12.2064C5.86575 11.3257 5.15184 10.6118 4.27119 10.6118C3.39054 10.6118 2.67664 11.3257 2.67664 12.2064C2.67664 13.087 3.39054 13.8009 4.27119 13.8009Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M19.6292 13.8009C20.5098 13.8009 21.2237 13.087 21.2237 12.2064C21.2237 11.3257 20.5098 10.6118 19.6292 10.6118C18.7485 10.6118 18.0346 11.3257 18.0346 12.2064C18.0346 13.087 18.7485 13.8009 19.6292 13.8009Z",
    fill: "#FF758A"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_674"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.532227 -0.000244141)"
  })))) : 5), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_661)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.6867 11.3091C22.6177 13.4766 21.9076 15.5749 20.6462 17.3389C19.3848 19.1028 17.6287 20.4532 15.5999 21.2192C13.5712 21.9852 11.3609 22.1326 9.24839 21.6426C7.13592 21.1526 5.21615 20.0473 3.73179 18.4663C2.24742 16.8854 1.26511 14.8999 0.909038 12.7608C0.552964 10.6216 0.839117 8.42497 1.73132 6.44845C2.62352 4.47193 4.08171 2.80432 5.92155 1.65643C7.76138 0.508545 9.90025 -0.0680775 12.0678 -0.000537715C13.5079 0.0438852 14.9252 0.371768 16.2385 0.964359C17.5518 1.55695 18.7355 2.40262 19.7217 3.45302C20.7079 4.50341 21.4774 5.73792 21.9862 7.08594C22.495 8.43396 22.733 9.86905 22.6867 11.3091Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.78229 12.9417C6.73392 12.9416 6.68627 12.9534 6.64351 12.976C6.60076 12.9986 6.56421 13.0314 6.53706 13.0714C6.50992 13.1114 6.49302 13.1575 6.48784 13.2056C6.48267 13.2537 6.48937 13.3023 6.50737 13.3472C6.90638 14.398 7.619 15.3007 8.54853 15.9326C9.47806 16.5646 10.5795 16.8954 11.7034 16.88C15.1125 16.88 16.5146 14.3335 16.9442 13.3197C16.962 13.2746 16.9686 13.2259 16.9634 13.1776C16.9582 13.1294 16.9413 13.0832 16.9143 13.0429C16.8872 13.0027 16.8508 12.9696 16.8081 12.9466C16.7654 12.9236 16.7177 12.9113 16.6692 12.9108L6.78229 12.9417Z",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.7035 17.3715C8.02293 17.3715 6.52804 14.6876 6.05379 13.5329C6.00463 13.4138 5.98559 13.2844 5.99837 13.1562C6.01115 13.028 6.05535 12.9049 6.12706 12.7979C6.19876 12.6908 6.29576 12.6031 6.40946 12.5425C6.52316 12.4819 6.65006 12.4502 6.7789 12.4504L16.6659 12.4229C16.7956 12.4216 16.9236 12.4523 17.0387 12.5122C17.1538 12.5722 17.2523 12.6595 17.3257 12.7665C17.397 12.8739 17.4406 12.9973 17.4526 13.1256C17.4646 13.2539 17.4446 13.3832 17.3944 13.502C16.9098 14.6704 15.3806 17.3715 11.7035 17.3715ZM7.08132 13.4298C7.47143 14.3261 8.11909 15.0862 8.94207 15.6136C9.76504 16.1411 10.7262 16.412 11.7035 16.3921C12.6885 16.4066 13.6559 16.1308 14.4852 15.5991C15.3145 15.0674 15.9689 14.3034 16.3669 13.4023L7.08132 13.4298Z",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.12258 14.7356H9.09509C8.09481 14.6364 7.12051 14.3582 6.2187 13.9142C6.16678 13.8878 6.12748 13.8418 6.10944 13.7864C6.0914 13.731 6.09608 13.6706 6.12247 13.6187C6.14961 13.5665 6.19622 13.5272 6.2522 13.5092C6.30817 13.4911 6.36898 13.4959 6.42145 13.5225C7.27751 13.9417 8.20155 14.2047 9.15007 14.2991C9.2035 14.3084 9.25163 14.337 9.28524 14.3795C9.31884 14.4221 9.33554 14.4756 9.33213 14.5297C9.32872 14.5838 9.30544 14.6347 9.26677 14.6727C9.22809 14.7107 9.17674 14.7331 9.12258 14.7356Z",
    fill: "#F2F2F2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7001 14.6837C14.6417 14.6883 14.584 14.6695 14.5395 14.6315C14.4951 14.5934 14.4675 14.5393 14.463 14.481C14.4584 14.4226 14.4772 14.3649 14.5152 14.3204C14.5532 14.2759 14.6074 14.2484 14.6657 14.2438C15.4185 14.1236 16.1552 13.9184 16.8617 13.6321C16.914 13.6166 16.9703 13.6211 17.0195 13.6447C17.0687 13.6684 17.1074 13.7095 17.128 13.7601C17.1486 13.8107 17.1496 13.8671 17.1308 13.9184C17.1121 13.9697 17.075 14.0122 17.0266 14.0377C16.2905 14.3379 15.5227 14.5535 14.7379 14.6803L14.7001 14.6837Z",
    fill: "#F2F2F2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M5.64133 12.2063C5.64133 12.5216 5.54781 12.8299 5.37259 13.0921C5.19738 13.3544 4.94835 13.5587 4.65698 13.6794C4.36561 13.8001 4.045 13.8317 3.73569 13.7702C3.42637 13.7086 3.14225 13.5568 2.91925 13.3338C2.69624 13.1108 2.54438 12.8266 2.48285 12.5173C2.42132 12.208 2.4529 11.8874 2.57359 11.596C2.69428 11.3047 2.89866 11.0556 3.16088 10.8804C3.4231 10.7052 3.73139 10.6117 4.04677 10.6117C4.46939 10.6126 4.87445 10.7809 5.17329 11.0797C5.47213 11.3786 5.64042 11.7836 5.64133 12.2063Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M19.4047 13.8008C20.2854 13.8008 20.9993 13.0869 20.9993 12.2063C20.9993 11.3256 20.2854 10.6117 19.4047 10.6117C18.5241 10.6117 17.8102 11.3256 17.8102 12.2063C17.8102 13.0869 18.5241 13.8008 19.4047 13.8008Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.91287 11.0824C5.75718 11.088 5.60422 11.0405 5.47907 10.9477C5.35392 10.8549 5.264 10.7223 5.22406 10.5718C5.18411 10.4212 5.19652 10.2615 5.25923 10.1189C5.32194 9.97626 5.43124 9.85918 5.56922 9.78683L7.11566 8.90708L5.53485 8.02045C5.37444 7.92931 5.25681 7.77817 5.20783 7.6003C5.15885 7.42242 5.18253 7.23237 5.27367 7.07196C5.36482 6.91155 5.51595 6.79392 5.69383 6.74493C5.8717 6.69595 6.06175 6.71964 6.22216 6.81078L8.85456 8.30568C8.96282 8.36485 9.05316 8.45207 9.1161 8.55819C9.17904 8.66431 9.21225 8.78542 9.21225 8.9088C9.21225 9.03218 9.17904 9.15328 9.1161 9.2594C9.05316 9.36552 8.96282 9.45274 8.85456 9.51191L6.25653 10.9965C6.15145 11.0547 6.03296 11.0843 5.91287 11.0824Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.573 11.0757C17.4523 11.0754 17.3338 11.0434 17.2294 10.9829L14.6588 9.48798C14.5555 9.42734 14.4698 9.34073 14.4102 9.23674C14.3507 9.13275 14.3193 9.015 14.3193 8.89517C14.3193 8.77534 14.3507 8.65759 14.4102 8.55361C14.4698 8.44962 14.5555 8.36301 14.6588 8.30237L17.2122 6.82122C17.3693 6.73905 17.552 6.72075 17.7223 6.77014C17.8925 6.81953 18.0371 6.93279 18.1258 7.08627C18.2145 7.23975 18.2405 7.42157 18.1983 7.59375C18.1562 7.76593 18.0491 7.91516 17.8995 8.01026L16.3702 8.89689L17.9201 9.79727C18.0491 9.8738 18.1496 9.99044 18.2061 10.1294C18.2626 10.2683 18.2721 10.422 18.2332 10.5668C18.1942 10.7117 18.109 10.8398 17.9904 10.9317C17.8718 11.0236 17.7265 11.0741 17.5765 11.0757H17.573Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_661"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.758057 -0.000244141)"
  })))) : 6), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 22 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_639)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.9932 11.3091C21.9241 13.4766 21.214 15.5749 19.9526 17.3389C18.6912 19.1028 16.9352 20.4532 14.9064 21.2192C12.8777 21.9852 10.6673 22.1326 8.55485 21.6426C6.44237 21.1526 4.52261 20.0473 3.03824 18.4663C1.55388 16.8854 0.571568 14.8999 0.215495 12.7608C-0.140578 10.6216 0.145575 8.42497 1.03778 6.44845C1.92998 4.47193 3.38817 2.80432 5.22801 1.65643C7.06784 0.508545 9.20671 -0.0680775 11.3742 -0.000537715C12.8144 0.0438852 14.2316 0.371768 15.545 0.964359C16.8583 1.55695 18.0419 2.40262 19.0282 3.45302C20.0144 4.50341 20.7839 5.73792 21.2927 7.08594C21.8014 8.43396 22.0395 9.86905 21.9932 11.3091Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0099 14.571C6.90664 14.571 5.74165 12.9317 5.62137 12.7461C5.55422 12.6217 5.53663 12.4764 5.57215 12.3395C5.60766 12.2026 5.69365 12.0842 5.81284 12.0081C5.93204 11.932 6.07562 11.9037 6.21476 11.9291C6.3539 11.9544 6.4783 12.0315 6.56299 12.1447C6.56299 12.1447 7.52178 13.4541 11.0099 13.4541C14.498 13.4541 15.498 12.1379 15.5049 12.1241C15.5874 12.0018 15.7146 11.9167 15.8592 11.8872C16.0038 11.8576 16.1542 11.8859 16.2781 11.966C16.3394 12.0063 16.3921 12.0583 16.4333 12.119C16.4744 12.1797 16.5031 12.248 16.5178 12.3198C16.5325 12.3917 16.5329 12.4657 16.5189 12.5377C16.5049 12.6097 16.4768 12.6782 16.4362 12.7393C16.3125 12.9283 15.1097 14.571 11.0099 14.571Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7935 6.29522C15.0444 6.19763 15.3214 6.19019 15.5771 6.27418C15.8329 6.35818 16.0515 6.52839 16.1956 6.75572C16.3459 6.53294 16.5694 6.36975 16.8274 6.29444C17.0853 6.21912 17.3615 6.23642 17.6081 6.34333C18.2954 6.64231 18.426 7.3743 18.127 8.04443C17.9105 8.53929 16.9723 9.46028 16.4637 9.93453C16.3777 10.0183 16.2624 10.0652 16.1424 10.0652C16.0223 10.0652 15.907 10.0183 15.8211 9.93453C15.3296 9.4431 14.4189 8.49118 14.2196 7.99288C13.9447 7.28495 14.0994 6.57358 14.7935 6.29522Z",
    fill: "#D1212D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.49076 6.29512C4.74316 6.1925 5.02372 6.18243 5.28282 6.2667C5.54192 6.35097 5.76288 6.52416 5.90662 6.75562C6.0575 6.53257 6.28159 6.36927 6.54014 6.29396C6.79869 6.21866 7.07542 6.23609 7.32248 6.34324C8.00979 6.64222 8.14037 7.3742 7.84139 8.04433C7.62489 8.53919 6.68328 9.46018 6.17811 9.93443C6.09113 10.0176 5.97542 10.064 5.85507 10.064C5.73472 10.064 5.61901 10.0176 5.53203 9.93443C5.04061 9.443 4.13336 8.49108 3.93404 7.99278C3.6385 7.28485 3.79658 6.57348 4.49076 6.29512Z",
    fill: "#D1212D"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_639"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.0645142 -0.000244141)"
  })))) : 7), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 22 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_639)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.9932 11.3091C21.9241 13.4766 21.214 15.5749 19.9526 17.3389C18.6912 19.1028 16.9352 20.4532 14.9064 21.2192C12.8777 21.9852 10.6673 22.1326 8.55485 21.6426C6.44237 21.1526 4.52261 20.0473 3.03824 18.4663C1.55388 16.8854 0.571568 14.8999 0.215495 12.7608C-0.140578 10.6216 0.145575 8.42497 1.03778 6.44845C1.92998 4.47193 3.38817 2.80432 5.22801 1.65643C7.06784 0.508545 9.20671 -0.0680775 11.3742 -0.000537715C12.8144 0.0438852 14.2316 0.371768 15.545 0.964359C16.8583 1.55695 18.0419 2.40262 19.0282 3.45302C20.0144 4.50341 20.7839 5.73792 21.2927 7.08594C21.8014 8.43396 22.0395 9.86905 21.9932 11.3091Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0099 14.571C6.90664 14.571 5.74165 12.9317 5.62137 12.7461C5.55422 12.6217 5.53663 12.4764 5.57215 12.3395C5.60766 12.2026 5.69365 12.0842 5.81284 12.0081C5.93204 11.932 6.07562 11.9037 6.21476 11.9291C6.3539 11.9544 6.4783 12.0315 6.56299 12.1447C6.56299 12.1447 7.52178 13.4541 11.0099 13.4541C14.498 13.4541 15.498 12.1379 15.5049 12.1241C15.5874 12.0018 15.7146 11.9167 15.8592 11.8872C16.0038 11.8576 16.1542 11.8859 16.2781 11.966C16.3394 12.0063 16.3921 12.0583 16.4333 12.119C16.4744 12.1797 16.5031 12.248 16.5178 12.3198C16.5325 12.3917 16.5329 12.4657 16.5189 12.5377C16.5049 12.6097 16.4768 12.6782 16.4362 12.7393C16.3125 12.9283 15.1097 14.571 11.0099 14.571Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7935 6.29522C15.0444 6.19763 15.3214 6.19019 15.5771 6.27418C15.8329 6.35818 16.0515 6.52839 16.1956 6.75572C16.3459 6.53294 16.5694 6.36975 16.8274 6.29444C17.0853 6.21912 17.3615 6.23642 17.6081 6.34333C18.2954 6.64231 18.426 7.3743 18.127 8.04443C17.9105 8.53929 16.9723 9.46028 16.4637 9.93453C16.3777 10.0183 16.2624 10.0652 16.1424 10.0652C16.0223 10.0652 15.907 10.0183 15.8211 9.93453C15.3296 9.4431 14.4189 8.49118 14.2196 7.99288C13.9447 7.28495 14.0994 6.57358 14.7935 6.29522Z",
    fill: "#D1212D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.49076 6.29512C4.74316 6.1925 5.02372 6.18243 5.28282 6.2667C5.54192 6.35097 5.76288 6.52416 5.90662 6.75562C6.0575 6.53257 6.28159 6.36927 6.54014 6.29396C6.79869 6.21866 7.07542 6.23609 7.32248 6.34324C8.00979 6.64222 8.14037 7.3742 7.84139 8.04433C7.62489 8.53919 6.68328 9.46018 6.17811 9.93443C6.09113 10.0176 5.97542 10.064 5.85507 10.064C5.73472 10.064 5.61901 10.0176 5.53203 9.93443C5.04061 9.443 4.13336 8.49108 3.93404 7.99278C3.6385 7.28485 3.79658 6.57348 4.49076 6.29512Z",
    fill: "#D1212D"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_639"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.0645142 -0.000244141)"
  })))) : 8), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 22 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_639)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.9932 11.3091C21.9241 13.4766 21.214 15.5749 19.9526 17.3389C18.6912 19.1028 16.9352 20.4532 14.9064 21.2192C12.8777 21.9852 10.6673 22.1326 8.55485 21.6426C6.44237 21.1526 4.52261 20.0473 3.03824 18.4663C1.55388 16.8854 0.571568 14.8999 0.215495 12.7608C-0.140578 10.6216 0.145575 8.42497 1.03778 6.44845C1.92998 4.47193 3.38817 2.80432 5.22801 1.65643C7.06784 0.508545 9.20671 -0.0680775 11.3742 -0.000537715C12.8144 0.0438852 14.2316 0.371768 15.545 0.964359C16.8583 1.55695 18.0419 2.40262 19.0282 3.45302C20.0144 4.50341 20.7839 5.73792 21.2927 7.08594C21.8014 8.43396 22.0395 9.86905 21.9932 11.3091Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.0099 14.571C6.90664 14.571 5.74165 12.9317 5.62137 12.7461C5.55422 12.6217 5.53663 12.4764 5.57215 12.3395C5.60766 12.2026 5.69365 12.0842 5.81284 12.0081C5.93204 11.932 6.07562 11.9037 6.21476 11.9291C6.3539 11.9544 6.4783 12.0315 6.56299 12.1447C6.56299 12.1447 7.52178 13.4541 11.0099 13.4541C14.498 13.4541 15.498 12.1379 15.5049 12.1241C15.5874 12.0018 15.7146 11.9167 15.8592 11.8872C16.0038 11.8576 16.1542 11.8859 16.2781 11.966C16.3394 12.0063 16.3921 12.0583 16.4333 12.119C16.4744 12.1797 16.5031 12.248 16.5178 12.3198C16.5325 12.3917 16.5329 12.4657 16.5189 12.5377C16.5049 12.6097 16.4768 12.6782 16.4362 12.7393C16.3125 12.9283 15.1097 14.571 11.0099 14.571Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7935 6.29522C15.0444 6.19763 15.3214 6.19019 15.5771 6.27418C15.8329 6.35818 16.0515 6.52839 16.1956 6.75572C16.3459 6.53294 16.5694 6.36975 16.8274 6.29444C17.0853 6.21912 17.3615 6.23642 17.6081 6.34333C18.2954 6.64231 18.426 7.3743 18.127 8.04443C17.9105 8.53929 16.9723 9.46028 16.4637 9.93453C16.3777 10.0183 16.2624 10.0652 16.1424 10.0652C16.0223 10.0652 15.907 10.0183 15.8211 9.93453C15.3296 9.4431 14.4189 8.49118 14.2196 7.99288C13.9447 7.28495 14.0994 6.57358 14.7935 6.29522Z",
    fill: "#D1212D"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.49076 6.29512C4.74316 6.1925 5.02372 6.18243 5.28282 6.2667C5.54192 6.35097 5.76288 6.52416 5.90662 6.75562C6.0575 6.53257 6.28159 6.36927 6.54014 6.29396C6.79869 6.21866 7.07542 6.23609 7.32248 6.34324C8.00979 6.64222 8.14037 7.3742 7.84139 8.04433C7.62489 8.53919 6.68328 9.46018 6.17811 9.93443C6.09113 10.0176 5.97542 10.064 5.85507 10.064C5.73472 10.064 5.61901 10.0176 5.53203 9.93443C5.04061 9.443 4.13336 8.49108 3.93404 7.99278C3.6385 7.28485 3.79658 6.57348 4.49076 6.29512Z",
    fill: "#D1212D"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_639"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.0645142 -0.000244141)"
  })))) : 9), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${emoji ? "emoji" : "btn"}`,
    style: buttonStylecond
  }, emoji ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 23 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_386_661)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.6867 11.3091C22.6177 13.4766 21.9076 15.5749 20.6462 17.3389C19.3848 19.1028 17.6287 20.4532 15.5999 21.2192C13.5712 21.9852 11.3609 22.1326 9.24839 21.6426C7.13592 21.1526 5.21615 20.0473 3.73179 18.4663C2.24742 16.8854 1.26511 14.8999 0.909038 12.7608C0.552964 10.6216 0.839117 8.42497 1.73132 6.44845C2.62352 4.47193 4.08171 2.80432 5.92155 1.65643C7.76138 0.508545 9.90025 -0.0680775 12.0678 -0.000537715C13.5079 0.0438852 14.9252 0.371768 16.2385 0.964359C17.5518 1.55695 18.7355 2.40262 19.7217 3.45302C20.7079 4.50341 21.4774 5.73792 21.9862 7.08594C22.495 8.43396 22.733 9.86905 22.6867 11.3091Z",
    fill: `${emojiColor}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.78229 12.9417C6.73392 12.9416 6.68627 12.9534 6.64351 12.976C6.60076 12.9986 6.56421 13.0314 6.53706 13.0714C6.50992 13.1114 6.49302 13.1575 6.48784 13.2056C6.48267 13.2537 6.48937 13.3023 6.50737 13.3472C6.90638 14.398 7.619 15.3007 8.54853 15.9326C9.47806 16.5646 10.5795 16.8954 11.7034 16.88C15.1125 16.88 16.5146 14.3335 16.9442 13.3197C16.962 13.2746 16.9686 13.2259 16.9634 13.1776C16.9582 13.1294 16.9413 13.0832 16.9143 13.0429C16.8872 13.0027 16.8508 12.9696 16.8081 12.9466C16.7654 12.9236 16.7177 12.9113 16.6692 12.9108L6.78229 12.9417Z",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.7035 17.3715C8.02293 17.3715 6.52804 14.6876 6.05379 13.5329C6.00463 13.4138 5.98559 13.2844 5.99837 13.1562C6.01115 13.028 6.05535 12.9049 6.12706 12.7979C6.19876 12.6908 6.29576 12.6031 6.40946 12.5425C6.52316 12.4819 6.65006 12.4502 6.7789 12.4504L16.6659 12.4229C16.7956 12.4216 16.9236 12.4523 17.0387 12.5122C17.1538 12.5722 17.2523 12.6595 17.3257 12.7665C17.397 12.8739 17.4406 12.9973 17.4526 13.1256C17.4646 13.2539 17.4446 13.3832 17.3944 13.502C16.9098 14.6704 15.3806 17.3715 11.7035 17.3715ZM7.08132 13.4298C7.47143 14.3261 8.11909 15.0862 8.94207 15.6136C9.76504 16.1411 10.7262 16.412 11.7035 16.3921C12.6885 16.4066 13.6559 16.1308 14.4852 15.5991C15.3145 15.0674 15.9689 14.3034 16.3669 13.4023L7.08132 13.4298Z",
    fill: "white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.12258 14.7356H9.09509C8.09481 14.6364 7.12051 14.3582 6.2187 13.9142C6.16678 13.8878 6.12748 13.8418 6.10944 13.7864C6.0914 13.731 6.09608 13.6706 6.12247 13.6187C6.14961 13.5665 6.19622 13.5272 6.2522 13.5092C6.30817 13.4911 6.36898 13.4959 6.42145 13.5225C7.27751 13.9417 8.20155 14.2047 9.15007 14.2991C9.2035 14.3084 9.25163 14.337 9.28524 14.3795C9.31884 14.4221 9.33554 14.4756 9.33213 14.5297C9.32872 14.5838 9.30544 14.6347 9.26677 14.6727C9.22809 14.7107 9.17674 14.7331 9.12258 14.7356Z",
    fill: "#F2F2F2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.7001 14.6837C14.6417 14.6883 14.584 14.6695 14.5395 14.6315C14.4951 14.5934 14.4675 14.5393 14.463 14.481C14.4584 14.4226 14.4772 14.3649 14.5152 14.3204C14.5532 14.2759 14.6074 14.2484 14.6657 14.2438C15.4185 14.1236 16.1552 13.9184 16.8617 13.6321C16.914 13.6166 16.9703 13.6211 17.0195 13.6447C17.0687 13.6684 17.1074 13.7095 17.128 13.7601C17.1486 13.8107 17.1496 13.8671 17.1308 13.9184C17.1121 13.9697 17.075 14.0122 17.0266 14.0377C16.2905 14.3379 15.5227 14.5535 14.7379 14.6803L14.7001 14.6837Z",
    fill: "#F2F2F2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M5.64133 12.2063C5.64133 12.5216 5.54781 12.8299 5.37259 13.0921C5.19738 13.3544 4.94835 13.5587 4.65698 13.6794C4.36561 13.8001 4.045 13.8317 3.73569 13.7702C3.42637 13.7086 3.14225 13.5568 2.91925 13.3338C2.69624 13.1108 2.54438 12.8266 2.48285 12.5173C2.42132 12.208 2.4529 11.8874 2.57359 11.596C2.69428 11.3047 2.89866 11.0556 3.16088 10.8804C3.4231 10.7052 3.73139 10.6117 4.04677 10.6117C4.46939 10.6126 4.87445 10.7809 5.17329 11.0797C5.47213 11.3786 5.64042 11.7836 5.64133 12.2063Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    opacity: "0.6",
    d: "M19.4047 13.8008C20.2854 13.8008 20.9993 13.0869 20.9993 12.2063C20.9993 11.3256 20.2854 10.6117 19.4047 10.6117C18.5241 10.6117 17.8102 11.3256 17.8102 12.2063C17.8102 13.0869 18.5241 13.8008 19.4047 13.8008Z",
    fill: "#FF758A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.91287 11.0824C5.75718 11.088 5.60422 11.0405 5.47907 10.9477C5.35392 10.8549 5.264 10.7223 5.22406 10.5718C5.18411 10.4212 5.19652 10.2615 5.25923 10.1189C5.32194 9.97626 5.43124 9.85918 5.56922 9.78683L7.11566 8.90708L5.53485 8.02045C5.37444 7.92931 5.25681 7.77817 5.20783 7.6003C5.15885 7.42242 5.18253 7.23237 5.27367 7.07196C5.36482 6.91155 5.51595 6.79392 5.69383 6.74493C5.8717 6.69595 6.06175 6.71964 6.22216 6.81078L8.85456 8.30568C8.96282 8.36485 9.05316 8.45207 9.1161 8.55819C9.17904 8.66431 9.21225 8.78542 9.21225 8.9088C9.21225 9.03218 9.17904 9.15328 9.1161 9.2594C9.05316 9.36552 8.96282 9.45274 8.85456 9.51191L6.25653 10.9965C6.15145 11.0547 6.03296 11.0843 5.91287 11.0824Z",
    fill: "#403408"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17.573 11.0757C17.4523 11.0754 17.3338 11.0434 17.2294 10.9829L14.6588 9.48798C14.5555 9.42734 14.4698 9.34073 14.4102 9.23674C14.3507 9.13275 14.3193 9.015 14.3193 8.89517C14.3193 8.77534 14.3507 8.65759 14.4102 8.55361C14.4698 8.44962 14.5555 8.36301 14.6588 8.30237L17.2122 6.82122C17.3693 6.73905 17.552 6.72075 17.7223 6.77014C17.8925 6.81953 18.0371 6.93279 18.1258 7.08627C18.2145 7.23975 18.2405 7.42157 18.1983 7.59375C18.1562 7.76593 18.0491 7.91516 17.8995 8.01026L16.3702 8.89689L17.9201 9.79727C18.0491 9.8738 18.1496 9.99044 18.2061 10.1294C18.2626 10.2683 18.2721 10.422 18.2332 10.5668C18.1942 10.7117 18.109 10.8398 17.9904 10.9317C17.8718 11.0236 17.7265 11.0741 17.5765 11.0757H17.573Z",
    fill: "#403408"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_386_661"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "21.9355",
    height: "21.9355",
    fill: "white",
    transform: "translate(0.758057 -0.000244141)"
  })))) : 10)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_rate",
    style: {
      flexDirection: `${state.scaleOrientaion === "vertical" ? "column" : "row"}`,
      width: state.scaleOrientaion === "vertical" ? "80%" : "93%",
      alignItems: state.scaleOrientaion === "vertical" ? "flex-start" : ""
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rate__typo",
    style: {
      color: `${state.color.confgrFontColor}`
    }
  }, state.scale.lblLeft), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rate__typo",
    style: {
      color: `${state.color.confgrFontColor}`
    }
  }, state.scale.lblCenter), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "rate__typo",
    style: {
      color: `${state.color.confgrFontColor}`
    }
  }, state.scale.lblRight)));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `frame`,
    id: "frame",
    style: {
      background: `${row ? "#E8D6F1" : "#F2D5DD"}`
      // width:state.scaleOrientaion==='vertical'?'auto':aut
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "frame__scale",
    style: {
      height: `${state.scaleOrientaion === "vertical" ? "auto" : "180px"}`,
      padding: `${state.scaleOrientaion === "vertical" ? "15px" : "10px"}`,
      width: `${state.scaleOrientaion === "vertical" ? "300px" : "400px"}`,
      background: `${state.color.sclColor ? state.color.sclColor : ""}`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "scale_title",
    style: {
      color: `${state.color.confgrFontColor}`
    }
  }, state.scale.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "scale_typo",
    style: {
      color: `${state.color.confgrFontColor}`
    }
  }, state.scale.question), state.scaleOrientaion === "vertical" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      width: "90%"
      // position:'relative',
      //left:'-100px'
    }
  }, scaleDir)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, scaleDir)));
}

/***/ }),

/***/ "./src/components/setting/Sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/setting/Sidebar.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _sidebar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.scss */ "./src/components/setting/sidebar.scss");
/* harmony import */ var _Scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scale */ "./src/components/setting/Scale.js");
/* harmony import */ var _ScaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ScaleContext */ "./src/components/ScaleContext.js");
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Configuration */ "./src/components/setting/Configuration.js");







function Sidebar({
  row,
  emoji,
  btnbg,
  btncolr,
  setAttributes
}) {
  //console.log(scaleContent);
  const [setting, setSetting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ScaleContext__WEBPACK_IMPORTED_MODULE_3__.ScaleContext);
  const [sideBar, setSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  var blockId = wp.data.select("core/block-editor").getSelectedBlockClientId();
  console.log(blockId);
  function generateRandomUsername(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let username = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      username += characters.charAt(randomIndex);
    }
    return username;
  }

  // Usage: Generate a random username with a specified length (e.g., 8 characters)
  const randomUsername = generateRandomUsername(8);
  const createScale = async () => {
    try {
      // Define the data you want to send in the POST request
      const postData = {
        username: randomUsername,
        orientation: state.scaleOrientation,
        scalecolor: state.color.sclColor,
        roundcolor: state.color.btnColor,
        fontcolor: state.color.fntColor,
        no_of_scales: 10000000,
        // fomat: "numbers",
        // time: "60",
        name: "npsScale",
        left: state.scale.lblLeft,
        right: state.scale.lblRight,
        center: state.scale.lblCenter,
        user: "yes",
        position: [{
          page: 25,
          block: blockId
        }]
      };

      // Make the POST request using Axios
      const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post("https://100035.pythonanywhere.com/api/plugins/?scale_type=nps&type=settings&api_key=1b834e07-c68b-4bf6-96dd-ab7cdc62f07f", postData);
      console.log(response);
      const scaleidData = response.data.scale_id;
      // console.log(databoy);
      console.log(scaleidData);
      // Handle the successful response here
      // const data = JSON.parse(response.data.success);
    } catch (error) {
      // Handle any errors here
      console.error("Error:", error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: "DEFAULT",
      payload: {
        ...state,
        row: row,
        emoji: emoji,
        btnbg: btnbg,
        btncolr: btncolr
      }
    });
  }, []);
  const handleScaleColorChange = e => {
    const newColor = e.target.value;
    dispatch({
      type: "SET_SCALE_COLOR",
      payload: newColor
    });
    setAttributes({
      state: {
        ...state,
        color: {
          ...state.color,
          sclColor: newColor
        }
      }
    });
  };
  const handleButtonColorChange = e => {
    const newColor = e.target.value;
    dispatch({
      type: "SET_BTN_COLOR",
      payload: newColor
    });
    setAttributes({
      state: {
        ...state,
        color: {
          ...state.color,
          btnColor: newColor
        }
      }
    });
  };

  // const handleButtonBgColorChange = (e) => {
  //   const newColor = e.target.value;
  //   dispatch({
  //     type: 'SET_BTN_BG_COLOR',
  //     payload: newColor,
  //   });
  // };

  const handleFontColorChange = e => {
    const newColor = e.target.value;
    dispatch({
      type: "SET_FONT_COLOR",
      payload: newColor
    });
    setAttributes({
      state: {
        ...state,
        color: {
          ...state.color,
          confgrFontColor: newColor
        }
      }
    });
  };
  const handleLabelChange = (position, value) => {
    dispatch({
      type: "SET_LABELS",
      payload: {
        lblLeft: position === "left" ? value : state.scale.lblLeft,
        lblCenter: position === "center" ? value : state.scale.lblCenter,
        lblRight: position === "right" ? value : state.scale.lblRight
      }
    });
    setAttributes({
      state: {
        ...state,
        scale: {
          ...state.scale,
          lblLeft: position === "left" ? value : state.scale.lblLeft,
          lblCenter: position === "center" ? value : state.scale.lblCenter,
          lblRight: position === "right" ? value : state.scale.lblRight
        }
      }
    });
  };
  const handleScaleFormatChange = format => {
    dispatch({
      type: "SET_SCALE_FORMAT",
      payload: format
    });
    setAttributes({
      state: {
        ...state,
        scale: {
          ...state.scale,
          format: format
        }
      }
    });
  };
  const handleScaleDimensionsChange = (property, value) => {
    dispatch({
      type: "SET_SCALE_DIMENSIONS",
      payload: {
        width: property === "width" ? value : state.scale.width,
        height: property === "height" ? value : state.scale.height
      }
    });
    setAttributes({
      state: {
        ...state
      }
    });
  };
  const hideSetting = () => {
    createScale();
    setSideBar(false);
    setAttributes({
      state: {
        ...state,
        scale: {
          ...state.scale,
          blockData: blockId
        }
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, sideBar && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting_configure"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "setting_button",
    onClick: () => setSetting(true),
    style: {
      borderBottom: `${setting ? "3px solid #6E62E5" : ""}`
    }
  }, "Setting"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "configure_button",
    onClick: () => setSetting(false),
    style: {
      borderBottom: `${!setting ? "3px solid #6E62E5" : ""}`
    }
  }, "Configurations")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar_setting"
  }, setting ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar_element--one"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "scale_orient",
    className: "orient_label"
  }, "Scale Orientation"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "scale_orient",
    name: "orientation",
    className: "orient_select",
    value: state.scaleOrientaion === "horizontal" ? "Horizontal" : "Vertical",
    onChange: e => {
      const orientation = e.target.value;
      dispatch({
        type: "SET_SCALE_ORIENTATION",
        payload: orientation
      });
      setAttributes({
        state: {
          ...state,
          scaleOrientation: orientation
        }
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "options"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "vertical"
  }, "Vertical"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "horizontal"
  }, "Horizontal"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar_element_two"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "scale_color--input"
  }, "Scale Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "color",
    id: "scale_color--input",
    name: "scale_color--input",
    onChange: handleScaleColorChange,
    value: state.color.sclColor || "#FFFFFF"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "button_color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "button_color--input"
  }, "Button Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "color",
    id: "button_color--input",
    name: "button_color--input",
    onChange: handleButtonColorChange,
    value: state.color.btnColor ? state.color.btnColor : `${btnbg === "yellow" ? "#FFFF00" : btnbg}`
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar_element_three"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "font_color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "font_color--input"
  }, "Font Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "color",
    id: "font_color--input",
    name: "font_color--input",
    onChange: handleFontColorChange,
    value: state.color.fntColor || "#ff0000"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "font_style"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "font_style--select"
  }, "Font Style"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "font_style--select",
    name: "font_style--select"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "Times New Roman"
  }, "Times New Roman"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "San Serif"
  }, "San Serif")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar_element_four"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Scale Format"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "Scale_format"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    id: "emoji",
    name: "options",
    value: "emoji",
    checked: state.scale.format ? state.scale.format === "emoji" ? true : false : emoji,
    onChange: () => handleScaleFormatChange("emoji")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "emoji"
  }, "Emoji")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    id: "number",
    name: "options",
    value: "number",
    checked: state.scale.format ? state.scale.format === "number" ? true : false : !state.emoji,
    onChange: () => handleScaleFormatChange("number")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "number"
  }, "Number")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar_element_five"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_width"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "scale_width--input"
  }, "Scale Width"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "scale_width--input",
    name: "scale_width--input",
    value: state.scale.width,
    onChange: e => handleScaleDimensionsChange("width", e.target.value)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_height"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "scale_height--input"
  }, "Scale height"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "scale_height--input",
    name: "scale_height--input",
    value: state.scale.height,
    onChange: e => handleScaleDimensionsChange("height", e.target.value)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar_element_six"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Scale Label"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "label_position"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_label--left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "scale_label--left"
  }, "Left"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "scale_label--left",
    name: "left",
    value: state.scale.lblLeft,
    onChange: e => handleLabelChange("left", e.target.value)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_label--center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "scale_label--center"
  }, "Center"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "scale_label--center",
    name: "center",
    value: state.scale.lblCenter,
    onChange: e => handleLabelChange("center", e.target.value)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_label--right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "scale_label--right"
  }, "Right"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "scale_label--right",
    name: "right",
    value: state.scale.lblRight,
    onChange: e => handleLabelChange("right", e.target.value)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar_element_eight"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "time"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Time"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", {
    className: "toggle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "24",
    viewBox: "0 0 36 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "0.509277",
    y: "2.9436",
    width: "25.903",
    height: "12.9515",
    rx: "6.47574",
    fill: "#86B3AB"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter0_d_240_256)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "24.0574",
    cy: "9.41925",
    r: "9.41925",
    fill: "#29E2C1"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter0_d_240_256",
    x: "12.2834",
    y: "0",
    width: "23.5483",
    height: "23.5481",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dy: "2.35481"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    stdDeviation: "1.17741"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_240_256"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_240_256",
    result: "shape"
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "time--input"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scale_instance"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "show total score for all instance"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "toggle_b"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "37",
    height: "28",
    viewBox: "0 0 37 28",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "10.3965",
    y: "3.8103",
    width: "25.903",
    height: "12.9515",
    rx: "6.47574",
    fill: "#B9B9B9"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    filter: "url(#filter0_d_240_260)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "13.9285",
    cy: "10.2857",
    r: "9.41925",
    fill: "#DBDBDB"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "filter0_d_240_260",
    x: "0.813462",
    y: "0.866455",
    width: "26.2303",
    height: "26.2303",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dy: "3.69582"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    stdDeviation: "1.84791"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.454167 0 0 0 0 0.454167 0 0 0 0 0.454167 0 0 0 0.46 0"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_240_260"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_240_260",
    result: "shape"
  })))))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Configuration__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: hideSetting,
    className: "use_scale"
  }, "Use Scale"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Scale__WEBPACK_IMPORTED_MODULE_2__["default"], {
    row: row,
    emoji: emoji,
    btnbg: btnbg,
    btncolr: btncolr
  }))

  // </div>
  ;
}

/***/ }),

/***/ "./src/components/setting/sidebar.scss":
/*!*********************************************!*\
  !*** ./src/components/setting/sidebar.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/templatestyle.scss":
/*!*******************************************!*\
  !*** ./src/components/templatestyle.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ __webpack_exports__["default"] = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ __webpack_exports__["default"] = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if(!requestHeaders.getContentType(/^\s*multipart\/form-data/)){
        requestHeaders.setContentType('multipart/form-data'); // mobile/desktop app frameworks
      } else if(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(contentType = requestHeaders.getContentType())){
        // fix semicolon duplication issue for ReactNative FormData implementation
        requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, '$1'))
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))
        && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ __webpack_exports__["default"] = (axios);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CancelToken);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ __webpack_exports__["default"] = (CanceledError);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isCancel; }
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ __webpack_exports__["default"] = (Axios);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ __webpack_exports__["default"] = (AxiosError);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ __webpack_exports__["default"] = (AxiosHeaders);


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (InterceptorManager);


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildFullPath; }
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ dispatchRequest; }
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergeConfig; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ settle; }
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transformData; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ __webpack_exports__["default"] = (defaults);


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: function() { return /* binding */ VERSION; }
/* harmony export */ });
const VERSION = "1.5.1";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ __webpack_exports__["default"] = (AxiosURLSearchParams);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ __webpack_exports__["default"] = (HttpStatusCode);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ bind; }
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ buildURL; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ combineURLs; }
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ __webpack_exports__["default"] = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path)) {
          cookie.push('path=' + path);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (formDataToJSON);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isAbsoluteURL; }
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isAxiosError; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ __webpack_exports__["default"] = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// eslint-disable-next-line strict
/* harmony default export */ __webpack_exports__["default"] = (null);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ __webpack_exports__["default"] = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ parseProtocol; }
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (speedometer);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ spread; }
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ __webpack_exports__["default"] = (toFormData);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toURLEncodedForm; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ __webpack_exports__["default"] = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ __webpack_exports__["default"] = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ __webpack_exports__["default"] = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "nps scale",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    state: {
      scaleOrientation: "horizontal",
      row: true,
      emoji: true,
      btnbg: "",
      btncolr: "",
      color: {
        btnColor: "#FFFF00",
        btnBgcolor: "",
        fntColor: "#ff0000",
        sclColor: "#FFFFFF",
        confgrFontColor: "",
        card: '1234'
      },
      scale: {
        format: "",
        width: "",
        height: "",
        lblLeft: "unlikely",
        lblCenter: "likely",
        lblRight: "most likely",
        sclRangefromA: "",
        sclRangetoB: "",
        title: "Help us improve!",
        question: "How would you rate it?",
        blockData: "434"
      }
    }
  },
  edit: EditComponent,
  save: function () {
    return null;
  }
});
function EditComponent({
  setAttributes
}) {
  // const { clientId } = useSelect((select) => {
  //   const { getClientId } = select('core/block-editor');
  //   return {
  //     clientId: getClientId,
  //   };
  // });
  // console.log(clientId)

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setAttributes: setAttributes
  });
}
}();
/******/ })()
;
//# sourceMappingURL=index.js.map