import React from "react";
import SectionDivider from "../components/containers/SectionDivider";
import { useAuth } from "../../logic/auth";

const Index = () => {
  const { isAuth } = useAuth();
  return (
    <SectionDivider
      main={
        <React.Fragment>{!isAuth() && <p>Please sign in</p>}</React.Fragment>
      }
    />
  );
};

export default Index;
