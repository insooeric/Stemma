import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const SingleBadge: React.FC = () => {
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
      <h1>Single Badge</h1>
      <p>
        <span className="alert">!!IMPORTANT!!</span>
        <br />
        If you have multiple properties, make sure to add{" "}
        <span className="dark">&</span> between each property.
      </p>
      <br />
      <h2>Default Badge</h2>
      <p>
        To print single default badge, add the name of default badge into{" "}
        <span className="dark">badge=</span> property.
      </p>
      <p>
        For example, with default badge named{" "}
        <span className="dark">typescript</span>:
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?badge=typescript
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?badge=typescript"
            )
          }
        />
      </div>
      <img
        className="image"
        style={{
          width: "60px",
        }}
        alt="Single Badge Example"
        src="https://stemma.onrender.com/api/badge?badge=typescript"
      />
      <br />
      <h2>Custome Badge</h2>
      <p>
        To print single custome badge, first add your GitHub Username in{" "}
        <span className="dark">user=</span> property.
      </p>

      <p>
        Then, add the name of your badge into{" "}
        <span className="dark">badge=</span> property.
      </p>
      <p>
        For example, with custome badge named{" "}
        <span className="dark">welcome</span> where GitHub Username is{" "}
        <span className="dark">insooeric</span>:
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?user=insooeric&badge=welcome
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?user=insooeric&badge=welcome"
            )
          }
        />
      </div>
      <img
        className="image"
        style={{
          height: "60px",
        }}
        alt="Single Badge Example"
        src="https://stemma.onrender.com/api/badge?user=insooeric&badge=welcome"
      />

      <div className="end-of-content" />
    </div>
  );
};

export default SingleBadge;
