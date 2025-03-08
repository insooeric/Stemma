import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import copy_icon from "@/img/copy_icon.svg";

const WidgetComponent: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [profileUrl, setProfileUrl] = useState("");
  const [statisticUrl, setStatisticUrl] = useState("");
  // const [languageListJson, setLanguageListJson] = useState({});

  const [userFullName, setUserFullName] = useState("");
  const [languages, setLanguages] = useState<{
    [key: string]: boolean;
  }>({});

  const [statisticLabel, setStatisticLabel] = useState("Select up to 4 items.");

  const [is4Selected, setIs4Selected] = useState(false);

  const isNullOrEmpty = (str: string) => {
    if (!str || str.trim() === "") {
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (!user?.username) return;

    setProfileUrl(
      `https://stemma.onrender.com/api/UserInfo/profile?GitHubUserName=${
        user.username
      }${!isNullOrEmpty(userFullName) ? `&FullName=${userFullName}` : ``}`

      // &FullName=${
      //   isNullOrEmpty(userFullName) ? "" : userFullName
      // }`
    );
  }, [user, userFullName]);

  useEffect(() => {
    if (!user?.username) return;

    const selectedLanguage: string[] = [];
    const languageKeys = Object.keys(languages);
    if (languageKeys.length > 0) {
      languageKeys.forEach((langKey) => {
        if (languages[langKey]) {
          selectedLanguage.push(langKey);
        }
      });
    }

    if (selectedLanguage.length > 4) {
      setStatisticUrl(
        `https://stemma.onrender.com/api/UserInfo/statistic?GitHubUserName=${user.username}`
      );
      return;
    }

    // if (selectedLanguage.length >= 4) {
    //   setIs4Selected(true);
    // }

    // console.log(`---------SELECTED LANGUAGES---------`);
    // selectedLanguage.forEach((lang) => {
    //   console.log(lang);
    // });

    // const languagesStr = selectedLanguage
    //   .map((lang) => encodeURIComponent(lang))
    //   .join(",");
    // console.log("Languages string:", languagesStr);

    let languagesStr: string = "";
    selectedLanguage.forEach((lang) => {
      let tmpStr: string = lang;
      tmpStr = encodeURIComponent(tmpStr);
      languagesStr += `${tmpStr},`;
    });

    if (selectedLanguage.length > 0) {
      languagesStr = languagesStr.slice(0, -1);
    }

    // console.log(languagesStr);

    setStatisticUrl(
      `https://stemma.onrender.com/api/UserInfo/statistic?GitHubUserName=${
        user.username
      }${selectedLanguage.length > 0 ? `&Items=${languagesStr}` : ""}`
    );
  }, [user, languages]);

  useEffect(() => {
    if (!user?.username) return;

    const profileUrl = `https://stemma.onrender.com/api/UserInfo/profile?GitHubUserName=${user.username}`;
    const statisticUrl = `https://stemma.onrender.com/api/UserInfo/statistic?GitHubUserName=${user.username}`;
    //const statisticUrl = `https://localhost:32769/api/UserInfo/statistic?GitHubUserName=${user.username}`;
    setProfileUrl(profileUrl);
    setStatisticUrl(statisticUrl);

    const fetchDataInOrder = async () => {
      try {
        const statResponse = await fetch(statisticUrl, {
          method: "GET",
          headers: { "Content-Type": "image/svg+xml" },
        });
        if (!statResponse.ok) {
          throw new Error(`Statistic fetch failed: ${statResponse.status}`);
        }
        const langResponse = await fetch(
          `https://stemma.onrender.com/api/UserInfo/sortedlanguages?GitHubUserName=${user.username}`,
          // `https://localhost:32769/api/UserInfo/sortedlanguages?GitHubUserName=${user.username}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!langResponse.ok) {
          throw new Error(
            `Sorted languages fetch failed: ${langResponse.status}`
          );
        }
        const data = await langResponse.json();
        if (Array.isArray(data) && data.length > 0) {
          data.forEach((lang) => {
            setLanguages((prev) => ({ ...prev, [lang.key]: false }));
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataInOrder();
  }, [user]);

  // useEffect(() => {
  //   console.log(languages);
  // }, [languages]);

  useEffect(() => {
    // console.log(languages);
    let selectedNum = 0;
    const languageKeys = Object.keys(languages);
    if (languageKeys.length > 0) {
      languageKeys.forEach((langKey) => {
        if (languages[langKey]) {
          selectedNum++;
        }
      });
    }
    if (selectedNum >= 4) {
      setIs4Selected(true);
      setStatisticLabel("Maximum items selected");
    } else {
      setIs4Selected(false);
      setStatisticLabel("Select up to 4 items.");
    }

    // if (is4Selected) {
    //   console.log("maximum selected");
    // }
  }, [is4Selected, languages]);

  const handleCopyClick = (widgetUrl: string) => {
    //const imgTagString = `<img alt="${badgeName}" src="${badgeURL}">`;
    navigator.clipboard
      .writeText(widgetUrl)
      .then(() => {
        console.log("Text copied to clipboard:", widgetUrl);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="widget-component">
      <div className="title">Widgets</div>
      <div className="widget-list-container">
        <div className="item">
          <div className="option-container">
            <input
              type="text"
              placeholder="Your full name goes here"
              value={userFullName}
              onChange={(e) => setUserFullName(e.target.value)}
            />
          </div>
          <div className="img-container">
            <img src={profileUrl} />
            <div
              className="copy-icon"
              onClick={() => handleCopyClick(profileUrl)}
            >
              <img src={copy_icon} />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="option-container">
            <p className="statistic-label">{statisticLabel}</p>

            <div className="all-languages-container">
              {Object.keys(languages).length > 0 ? (
                Object.keys(languages).map((langKey) => (
                  <div
                    key={langKey}
                    className="language-item"
                    onClick={() => {
                      // console.log(is4Selected);
                      if (!languages[langKey]) {
                        // if selected language is false, we're gonna select it upon condition
                        if (!is4Selected) {
                          setLanguages((prev) => ({
                            ...prev,
                            [langKey]: true,
                          }));
                        }
                      } else {
                        // if selected language is true, deselect it
                        setLanguages((prev) => ({
                          ...prev,
                          [langKey]: false,
                        }));
                      }

                      // if (!is4Selected) {
                      //   setLanguages((prev) => ({
                      //     ...prev,
                      //     [langKey]: !prev[langKey],
                      //   }));
                      // }
                    }}
                    style={{
                      backgroundColor: languages[langKey]
                        ? "#444"
                        : "transparent",
                      cursor: "pointer",
                    }}
                  >
                    {langKey}
                  </div>
                ))
              ) : (
                <div>No language data available.</div>
              )}
            </div>
          </div>

          <div className="img-container">
            <img src={statisticUrl} />
            <div
              className="copy-icon"
              onClick={() => handleCopyClick(statisticUrl)}
            >
              <img src={copy_icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetComponent;
