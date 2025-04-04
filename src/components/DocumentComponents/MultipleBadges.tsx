import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const MultipleBadges: React.FC = () => {
  const handleCopyClick = (badgeURL: string) => {
    //const imgTagString = `<img alt="${badgeName}" src="${badgeURL}">`;
    navigator.clipboard
      .writeText(badgeURL)
      .then(() => {
        console.log("Text copied to clipboard:", badgeURL);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="inner-content">
      <h1>Multiple badges</h1>
      <p>
        <span className="alert">!!IMPORTANT!!</span>
        <br />
        If you have multiple properties, make sure to add{" "}
        <span className="dark">&</span> between each property.
      </p>
      <br />
      <h2>Default Badges</h2>
      <p>
        You can display multiple badges by listing the name of badges by order
        using <span className="dark">,</span> in{" "}
        <span className="dark">&badge=</span> property.
      </p>
      <p>For example:</p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?badge=typescript,javascript,vercel,cs,dotnet,render,github
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?badge=typescript,javascript,vercel,cs,dotnet,render,github"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Multiple Badge Example"
        src="https://stemma.onrender.com/api/badge?badge=typescript,javascript,vercel,cs,dotnet,render,github"
      />
      <br />
      <h2>Custome badges</h2>
      <p>
        By adding <span className="dark">user=[YourGitHubUserName]</span>{" "}
        property with same rule, you can display multiple badges.
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Badge Gridding Example"
        src="https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development"
      />
      <br />
      <h2>Custome and Default badges</h2>
      <p>
        You can display both your badges and default badges in the same time
        just like you print multiple custome badges.
      </p>
      <p>
        However, make sure to add{" "}
        <span className="dark">user=[YourGitHubUserName]</span> property since
        for custome badges, it will look for the image that's associated with
        your username.
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Badge Gridding Example"
        src="https://stemma.onrender.com/api/badge?user=insooeric&badge=cat,readme_i,readme_do,readme_full_stack,readme_development,javascript,cs"
      />

      <div className="end-of-content" />
    </div>
  );
};

export default MultipleBadges;
