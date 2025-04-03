import React from "react";

const Restriction: React.FC = () => {
  return (
    <div className="inner-content">
      <h1>Restriction</h1>
      <p>
        This application can be used in other personal project to display
        badges; However, since it's built specifically for displaying badges,
        following restrictions are applied:
      </p>
      <ol>
        <li>The output is always formatted in .svg.</li>
        <li>
          The the height of svg will always be 40 pixels and the width will be
          determined based on the dimension of original image.
        </li>
        <li>
          For any image you store, it will automatically resize to the height of
          100 pixels and the width will be determined based on the dimension for
          storage efficiency.
        </li>
      </ol>
      <br />
      <h2>Naming custome badges</h2>
      <p>Followings are rules for naming badges:</p>
      <ol>
        <li>
          The name of custome badges cannot be as same as the name of default
          badges. <br />
          For example, name <span className="dark">javascript</span> is
          prohibited since one of the default badges uses that name.
        </li>
        <li>
          Names are <span className="alert">CASE SENSITIVE</span>. So, make sure
          you're using the right one.
        </li>
        <li>
          Names cannot have <span className="dark">SPACE</span> or{" "}
          <span className="dark">DOT</span>
        </li>
      </ol>

      <div className="end-of-content" />
    </div>
  );
};

export default Restriction;
