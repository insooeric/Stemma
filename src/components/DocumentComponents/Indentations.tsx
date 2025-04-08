import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const Indentations: React.FC = () => {
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
      <h1>Indentations</h1>
      <p>
        <span className="alert">!!IMPORTANT!!</span>
        <br />
        If you have multiple properties, make sure to add{" "}
        <span className="dark">&</span> between each property.
      </p>
      <br />
      <p>
        You can specify indentations for rows and columns by adding{" "}
        <span className="dark">0</span> in between the list of integers.
      </p>
      <ul>
        <li>
          badge=<span className="dark">Item1, Item2, Item3, ...</span>
        </li>
        <li>
          row=
          <span className="dark">Single integer number</span> or{" "}
          <span className="dark">
            list of integer numbers (with 0s for indentations)
          </span>
        </li>
        <li>
          col=
          <span className="dark">Single integer number</span> or{" "}
          <span className="dark">
            list of integer numbers (with 0s for indentations)
          </span>
        </li>
      </ul>
      <br />

      <h2>Indentations in Rows</h2>
      <p>
        Following is an example of 16 badges with
        <br />
        Template row (with indentation) of 2,0,8,6 <br />
        <span className="dark">row=2,0,8,6</span>
        <br />
        Template column of 3,2,2,1,3,2,2,1 <br />
        <span className="dark">col=3,2,2,1,3,2,2,1</span>
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,3,2,2,1
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,3,2,2,1"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,3,2,2,1"
      />
      <br />
      <h2>Indentations in Columns</h2>
      <p>
        Following is an example of 16 badges with
        <br />
        Template row of 2,8,6 <br />
        <span className="dark">row=2,8,6</span>
        <br />
        Template column (with two indentations) of 3,2,2,1,0,0,3,2,2,1 <br />
        <span className="dark">col=3,2,2,1,0,3,2,2,1</span>
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,8,6&col=3,2,2,1,0,0,3,2,2,1
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,8,6&col=3,2,2,1,0,0,3,2,2,1"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,8,6&col=3,2,2,1,0,0,3,2,2,1"
      />
      <br />
      <h2>Indentations In Both Rows And Columns</h2>
      <p>
        Following is an example of 16 badges with
        <br />
        Template row (with indentation) of 2,0,8,6 <br />
        <span className="dark">row=2,0,8,6</span>
        <br />
        Template column (with two indentations) of 3,2,2,1,0,0,3,2,2,1 <br />
        <span className="dark">col=3,2,2,1,0,0,3,2,2,1</span>
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,0,0,3,2,2,1
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,0,0,3,2,2,1"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,0,0,3,2,2,1"
      />
      <div className="end-of-content" />
    </div>
  );
};

export default Indentations;
