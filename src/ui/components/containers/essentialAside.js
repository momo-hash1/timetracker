import React from "react";
import Auth from "../widgets/auth";
import MessageBox from "../widgets/messageBox";

const EssentialAside = (props) => {
  return (
    <React.Fragment>
      {props.children}
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Auth />
        <MessageBox />
      </div>
    </React.Fragment>
  );
};
export default EssentialAside;
