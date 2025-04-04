import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const GridGap: React.FC = () => {
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
      <h1>Grid Gap</h1>
      <p>
        <span className="alert">!!IMPORTANT!!</span>
        <br />
        If you have multiple properties, make sure to add{" "}
        <span className="dark">&</span> between each property.
      </p>
      <br />
      <p>
        You can specify gap between each cell of the grid using{" "}
        <span className="dark">gap=</span> property.
      </p>
      <ul>
        <li>
          gap=
          <span className="dark">Single integer number between 0 to 10</span>
        </li>
      </ul>
      <p>
        The value of gap is between 0 to 10.
        <br />
        Unspecifying this property will set default gap to 5 pixels.
      </p>
      <br />
      <h2>Gap Example</h2>
      <p>
        Following is an example of 5 badges with <br />
        row of 2 <span className="dark">row=2</span>
        <br />
        column of 3 <span className="dark">col=3</span>
        <br />
        Gap of 0 pixels (no gaps) <span className="dark">gap=0</span>
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2&col=3&gap=0
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2&col=3&gap=0"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2&col=3&gap=0"
      />
      <div className="end-of-content" />
    </div>
  );
};

export default GridGap;
