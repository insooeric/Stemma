import React from "react";
import copy_icon from "@/img/copy_icon.svg";

const AdvancedTemplate: React.FC = () => {
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
      <h1>Advanced Template</h1>
      <p>
        You can specify empty rows and columns by adding{" "}
        <span className="dark">0</span> in between the list of integers for
        template row and column.
      </p>
      <br />
      <div className="end-of-content" />
    </div>
  );
};

export default AdvancedTemplate;
