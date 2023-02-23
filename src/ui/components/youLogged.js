import Button from "./widgets/Button";

const YouLogged = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>You logged</p>
      <Button>Log out</Button>
    </div>
  );
};

export default YouLogged;
