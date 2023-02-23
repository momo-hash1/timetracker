import React from "react";
import SectionDivider from "../components/containers/SectionDivider";
import { isAuth } from "../../logic/auth";

const Index = () => {
  return (
    <SectionDivider
      main={
        <React.Fragment>{!isAuth() && <p>Please sign in</p>}</React.Fragment>
      }
    />
  );
};

export default Index;
