import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const IndentSize: React.FC = () => {
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
      <h1>Size Of Indentations</h1>{" "}
      <p>
        <span className="alert">!!IMPORTANT!!</span>
        <br />
        If you have multiple properties, make sure to add{" "}
        <span className="dark">&</span> between each property.
      </p>
      <br />
      <p>
        Additionally, you may specify the size of indentations by adding{" "}
        <span className="dark">emptyWidth=</span> and{" "}
        <span className="dark">emptyHeight=</span> properties.
      </p>
      <p>By default, both emptyWidth and emptyHeight will be 40 pixels.</p>
      <p>
        Note that the indentation is actually a group of defined cells with no
        image content.
      </p>
      <ul>
        <li>
          emptyWidth=
          <span className="dark">Single integer number</span>
        </li>
        <li>
          emptyHeight=
          <span className="dark">Single integer number</span>
        </li>
      </ul>
      <br />
      <h2>Example</h2>
      <p>
        Following is an example of 16 badges with
        <br />
        Template row (with indentation) of 2,0,8,6 <br />
        <span className="dark">row=2,0,8,6</span>
        <br />
        Template column (with two indentations) of 3,2,2,1,0,0,3,2,2,1 <br />
        <span className="dark">col=3,2,2,1,0,0,3,2,2,1</span>
        <br />
        Size of indentation cell: 10 x 5 pixels <br />
        <span className="dark">emptyWidth=10</span>
        <br />
        <span className="dark">emptyHeight=5</span>
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,0,0,3,2,2,1&emptyWidth=10&emptyHeight=5
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,0,0,3,2,2,1&emptyWidth=10&emptyHeight=5"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,0,8,6&col=3,2,2,1,0,0,3,2,2,1&emptyWidth=10&emptyHeight=5"
      />
      <div className="end-of-content" />
    </div>
  );
};

export default IndentSize;
