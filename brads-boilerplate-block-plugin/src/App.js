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
    emojiScale: true,
    numberScale: true,
  });
  return (
    <ScaleProvider>
      {isTitleActive && (
        <>
          <div className="title">
            <h1 className="textcolor">NPS Scale</h1>
            <div className="setting">
              <input
                className="textinputed"
                type="text"
                placeholder="Search Report Template"
              />
              <div className="svg-container">
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

          <div className="browse">
            <h2 className="header">Browse Scale</h2>
            <p className="paragraph">See All</p>
          </div>
        </>
      )}
      <div className="scale_container">
        {!isCustomize && (
          <>
            {setting.numberScale && (
              <NumberScale
                row={true}
                emoji={false}
                btnbg={"yellow"}
                btncolr={"red"}
                customize={isCustomize}
                setCustomize={setIsCustomized}
                setScale={setScaleContent}
                setIsTitleActive={setIsTitleActive}
                setting={setting}
                setSetting={setSetting}
                key={1}
                setAttributes={setAttributes}
              />
            )}
            {console.log(setting.numberScale)}
            {/* <NumberScale row={true} btnbg={'orange'} btncolr={'white'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={2}/> */}
            {/* <NumberScale row={false} btnbg={'green'} btncolr={'white'} customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={3}/>   */}

            {/* <NumberScale row={false} btnbg={'blue'} btncolr={'white'}  customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={4}/> */}

            {setting.emojiScale && (
              <NumberScale
                row={true}
                emoji={true}
                btnbg={"#42DCC9"}
                customize={isCustomize}
                setCustomize={setIsCustomized}
                setIsTitleActive={setIsTitleActive}
                setScale={setScaleContent}
                setting={setting}
                setSetting={setSetting}
                key={5}
                setAttributes={setAttributes}
              />
            )}
            {/* <NumberScale emoji={true}  customize={isCustomize} setCustomize={setIsCustomized} setScale={setScaleContent} key={6}/>  */}
          </>
        )}

        {isCustomize && (
          <Sidebar setAttributes={setAttributes} {...scaleContent} />
        )}
      </div>
    </ScaleProvider>
  );
};

export default App;
