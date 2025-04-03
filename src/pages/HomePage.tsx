import home_banner from "@/img/home_banner.jpeg";
import logo_full_sd_icon from "@/img/logo_full_sd_icon.svg";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  return (
    <div className="home-page">
      <div className="banner">
        <img className="banner-img" src={home_banner} alt="Home Banner" />
        <div className="title">
          <img className="logo" src={logo_full_sd_icon} />
        </div>
      </div>
      <div className="slogan">Let others know your geekness!</div>
      <br />
      <div className="link-container">
        <p>
          <span className="underline" data-options="base url">
            https://stemma.onrender.com/api/badge?
          </span>
        </p>
        <br />
        <p>
          <span className="underline" data-options="user">
            user=insooeric
          </span>
          <span className="underline" data-options="badges">
            &badge=welcome,to,s,temma
          </span>
        </p>
      </div>

      <br />
      <br />
      <div className="img-container">
        <img src="https://stemma.onrender.com/api/badge?user=insooeric&badge=welcome,to,s,temma" />
      </div>

      <div className="get-started-btn">
        <button
          className="btn"
          onClick={async () => {
            await delay(500).then(() => {
              navigate("/document");
            });
          }}
        >
          <span className="hover-animation" />
          <span className="default-horizontal" />
          <span className="default-vertical" />
          <p data-text="Click Me!" data-title="Get Started"></p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
