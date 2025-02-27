import home_banner from "@/img/home_banner.jpeg";
import logo_full_sd_icon from "@/img/logo_full_sd_icon.svg";

const HomePage: React.FC = () => {
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
          <span className="underline" data-options="option1 option2">
            https://stemma.onrender.com/api/badge?
          </span>
        </p>
        <br />
        <p>
          <span className="underline" data-options="option1 option2">
            user=insooeric
          </span>
          <span className="underline" data-options="option1 option2">
            &badge=welcome,to,s,temma
          </span>
          <span className="underline" data-options="option1 option2">
            &row=2
          </span>
        </p>
      </div>

      <br />
      <div className="img-container">
        <img src="https://stemma.onrender.com/api/badge?user=insooeric&badge=welcome,to,s,temma&row=2" />
      </div>
    </div>
  );
};

export default HomePage;
