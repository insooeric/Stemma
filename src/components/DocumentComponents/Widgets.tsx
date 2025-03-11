import widget_default_pic from "@/img/documentation/widgets/widget_default_pic.png";
import profile_instruction1_pic from "@/img/documentation/widgets/profile_instruction1_pic.png";
import statistic_instruction1_pic from "@/img/documentation/widgets/statistic_instruction1_pic.png";
import copy_icon from "@/img/copy_icon.svg";

const Widgets: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Widgets</h1>
      <p>
        You can also add images for profile and statistics!
        <br />
        Login with GitHub account, and once you scroll down,
        <br />
        You will see this screen:
      </p>
      <img
        className="image"
        alt="Default widget screen"
        src={widget_default_pic}
      />
      <br />
      <h2>Profile</h2>
      <ol>
        <li>Type your full name in the text area.</li>
        <li>Your full name will be displayed in the image.</li>
        <li>
          Click <img className="icon" src={copy_icon} alt="copy_icon" /> icon to
          copy url of profile picture.
        </li>
      </ol>
      <img
        className="image"
        alt="Profile instruction"
        src={profile_instruction1_pic}
      />
      <br />
      <h2>Statistic</h2>
      <ol>
        <li>Select up to 4 items from the listed ones.</li>
        <li>
          Pie chart will automatically change accordingly.
          <br />
          <span className="alert">
            NOTE that if you select nothing, it will automatically select 4 most
            used skills.
          </span>
        </li>
        <li>
          Click <img className="icon" src={copy_icon} alt="copy_icon" /> icon to
          copy url of statistic picture.
        </li>
      </ol>
      <img
        className="image"
        alt="Statistic instruction"
        src={statistic_instruction1_pic}
      />
      <div className="end-of-content" />
    </div>
  );
};

export default Widgets;
