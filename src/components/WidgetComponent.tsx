import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const WidgetComponent: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [profileUrl, setProfileUrl] = useState("");
  const [statisticUrl, setStatisticUrl] = useState("");
  const [languageListJson, setLanguageListJson] = useState({});

  useEffect(() => {
    if (!user?.username) return;
    setProfileUrl(
      `https://stemma.onrender.com/api/UserInfo/profile?GitHubUserName=${user.username}`
    );
    setStatisticUrl(
      `https://stemma.onrender.com/api/UserInfo/statistic?GitHubUserName=${user.username}`
    );

    const fetchLanguageList = async () => {
      try {
        const response = await fetch(
          `https://stemma.onrender.com/api/UserInfo/sortedlanguages?GitHubUserName=${user.username}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch language data: ${response.status}`);
        }
        const data = await response.json();
        setLanguageListJson(data || []);
      } catch (error) {
        console.error("Error fetching badges:", error);
      }
    };

    fetchLanguageList().then(() => {
      console.log(languageListJson);
    });
  }, [user]);

  return (
    <div className="widget-component">
      <div className="title">Widgets</div>
      <div className="widget-list-container">
        <div className="item">
          <img src={profileUrl} />
        </div>
        <div className="item">
          <img src={statisticUrl} />
        </div>
      </div>
    </div>
  );
};

export default WidgetComponent;
