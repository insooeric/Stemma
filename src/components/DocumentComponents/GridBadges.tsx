import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const GridBadges: React.FC = () => {
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
      <h1>Gridding Badges</h1>
      <p>
        <span className="alert">!!IMPORTANT!!</span>
        <br />
        If you have multiple properties, make sure to add{" "}
        <span className="dark">&</span> between each property.
      </p>
      <br />
      <p>
        You can grid multiple badges using <span className="dark">row=</span>{" "}
        and <span className="dark">col=</span>
      </p>
      <ul>
        <li>
          badge=<span className="dark">Item1, Item2, Item3, ...</span>
        </li>
        <li>
          row=
          <span className="dark">Integer number</span>
        </li>
        <li>
          col=<span className="dark">Integer number</span>
        </li>
      </ul>
      <p>
        Note that <span className="dark">row=</span> and{" "}
        <span className="dark">col=</span> properties are optional.
      </p>
      <br />
      <h2>Row</h2>
      <p>Following is an example of 5 badges with 2 rows:</p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2"
      />
      <br />

      <h2>Column</h2>
      <p>Following is an example of 5 badges with 2 columns:</p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&col=2
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&col=2"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&col=2"
      />

      <h2>Rows and Columns</h2>
      <p>Following is an example of 5 badges with 2 rows and 3 columns</p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2&col=3
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2&col=3"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/badge?user=insooeric&badge=readme_development,react,dotnet,typescript,cs&row=2&col=3"
      />
      <br />
      <p>
        <span className="alert">
          NOTE that the size doesn't look exactly the same as in the examples.
        </span>
      </p>
      <div className="end-of-content" />
    </div>
  );
};

export default GridBadges;
