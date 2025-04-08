import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const TemplateRowCol: React.FC = () => {
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
      <h1>Gridding with Template</h1>
      <p>
        <span className="alert">!!IMPORTANT!!</span>
        <br />
        If you have multiple properties, make sure to add{" "}
        <span className="dark">&</span> between each property.
      </p>
      <br />
      <p>
        You can also place items in grid by specifying the templates for either{" "}
        <span className="dark">row=</span> or <span className="dark">col=</span>
        , or both properties.
      </p>
      <p>
        In template row, list if integers represents the number of images in
        each row.
      </p>
      <p>
        Same thing with template column. List if integers represents the number
        of images in each column.
      </p>
      <ul>
        <li>
          badge=<span className="dark">Item1, Item2, Item3, ...</span>
        </li>
        <li>
          row=
          <span className="dark">Single integer number</span> or{" "}
          <span className="dark">list of integer numbers</span>
        </li>
        <li>
          col=
          <span className="dark">Single integer number</span> or{" "}
          <span className="dark">list of integer numbers</span>
        </li>
      </ul>
      <p>
        For template variables of both row and column, the sum of the list of
        integers should equal to the number of images.
      </p>
      <br />
      <h2>Template Row</h2>
      <p>
        Following is an example of 8 badges with
        <br />
        Template row of 2,2,4 <span className="dark">row=2,2,4</span>
        <br />
        Unspecified (or <span className="dark">col=3</span>) columns
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/Badge?user=insooeric&badge=welcome,cat,to,cs,s,temma,react,typescript&row=2,2,4
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/Badge?user=insooeric&badge=welcome,cat,to,cs,s,temma,react,typescript&row=2,2,4"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/Badge?user=insooeric&badge=welcome,cat,to,cs,s,temma,react,typescript&row=2,2,4"
      />
      <br />

      <h2>Template Col</h2>
      <p>
        Following is an example of 8 badges with
        <br />
        Unspecified (or 3, <span className="dark">row=3</span>) rows
        <br />
        Template column of 3,2,3 <span className="dark">col=3,2,3</span>
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/Badge?user=insooeric&badge=readme_i,dotnet,react,readme_do,cs,typescript,readme_full_stack,javascript&col=3,2,3
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/Badge?user=insooeric&badge=readme_i,dotnet,react,readme_do,cs,typescript,readme_full_stack,javascript&col=3,2,3"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/Badge?user=insooeric&badge=readme_i,dotnet,react,readme_do,cs,typescript,readme_full_stack,javascript&col=3,2,3"
      />
      <br />
      <h2>Template Row and Column</h2>
      <p>
        Following is an example of 24 badges with
        <br />
        Template row of 5,5,6,3,4,1{" "}
        <span className="dark">row=5,5,6,3,4,1</span>
        <br />
        Template column of 3,1,6,5,5,4{" "}
        <span className="dark">col=3,1,6,5,5,4</span>
      </p>
      <div className="code-block">
        <div className="scroll-container">
          https://stemma.onrender.com/api/Badge?user=insooeric&badge=welcome,react,typescript,dotnet,redis,to,vite,javascript,cs,github,s,temma,vercel,html,oauth0,api,redux,sass,gcp,render,docker,visualstudio,vscode,vercel&row=5,5,6,3,4,1&col=3,1,6,5,5,4
        </div>
        <img
          alt="Copy"
          src={copy_icon}
          onClick={() =>
            handleCopyClick(
              "https://stemma.onrender.com/api/Badge?user=insooeric&badge=welcome,react,typescript,dotnet,redis,to,vite,javascript,cs,github,s,temma,vercel,html,oauth0,api,redux,sass,gcp,render,docker,visualstudio,vscode,vercel&row=5,5,6,3,4,1&col=3,1,6,5,5,4"
            )
          }
        />
      </div>
      <img
        className="image"
        alt="Grid Example"
        src="https://stemma.onrender.com/api/Badge?user=insooeric&badge=front_end,back_end,react,typescript,javascript,html,dotnet,cs,redis,gcp,sass,vite,redux,github,api,oauth0&row=2,8,6&col=3,2,2,1,3,2,2,1"
      />
      <br />
      <p>
        This kind of works, but doesn't look good.
        <br />
        Proceed to <b>Advanced Template</b> that contains additional properties.
      </p>
      <div className="end-of-content" />
    </div>
  );
};

export default TemplateRowCol;
