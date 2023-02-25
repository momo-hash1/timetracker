import React from "react";

const DisappearOnSecond = (props) => {
  const [isShow, setShow] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      props.onDisappear();
    }, props.sec * 1000);

    return () => clearTimeout(timer);
  }, [props.changeVal]);
  return <React.Fragment>{ props.children}</React.Fragment>;
};

export default DisappearOnSecond;
