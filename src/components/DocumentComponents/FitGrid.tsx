import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const FitGrid: React.FC = () => {
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
      <h1>Fit</h1>
      <p>
        <span className="alert">!!IMPORTANT!!</span>
        <br />
        If you have multiple properties, make sure to add{" "}
        <span className="dark">&</span> between each property.
      </p>
      <br />
      <p>
        You can fit images by specifying
        <span className="dark">fit=</span> property.
      </p>
      <p>
        By default, this property will be <span className="dark">none</span>.
      </p>
      <ul>
        <li>
          fit=
          <span className="dark">none</span> or{" "}
          <span className="dark">row</span>
        </li>
      </ul>
      <br />
      <h2>Example</h2>
      <p>
        Following is an example of 24 badges with
        <br />
        Template row (including indentation) of 5,5,6,0,3,4,1 <br />
        <span className="dark">row=5,5,6,0,3,4,1</span>
        <br />
        Template column (including indentations) of 3,1,0,0,6,5,0,5,4 <br />
        <span className="dark">col=3,1,0,0,6,5,0,5,4</span>
        <br />
        Size of indentation cell: 20 x 10 pixels <br />
        <span className="dark">emptyWidth=20</span>
        <br />
        <span className="dark">emptyHeight=10</span>
        <br />
        Fitting images in row
        <br />
        <span className="dark">fit=row</span>
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/Badge?user=insooeric&badge=welcome,react,typescript,dotnet,redis,to,vite,javascript,cs,github,s,temma,vercel,html,oauth0,api,redux,sass,gcp,render,docker,visualstudio,vscode,vercel&row=5,5,6,0,3,4,1&col=3,1,0,0,6,5,0,5,4&emptyWidth=20&emptyHeight=10
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/Badge?user=insooeric&badge=welcome,react,typescript,dotnet,redis,to,vite,javascript,cs,github,s,temma,vercel,html,oauth0,api,redux,sass,gcp,render,docker,visualstudio,vscode,vercel&row=5,5,6,0,3,4,1&col=3,1,0,0,6,5,0,5,4&emptyWidth=20&emptyHeight=10"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/Badge?user=insooeric&badge=welcome,react,typescript,dotnet,redis,to,vite,javascript,cs,github,s,temma,vercel,html,oauth0,api,redux,sass,gcp,render,docker,visualstudio,vscode,vercel&row=5,5,6,0,3,4,1&col=3,1,0,0,6,5,0,5,4&emptyWidth=20&emptyHeight=10&fit=row&align=left"
      />
      <div className="end-of-content" />
    </div>
  );
};

export default FitGrid;
