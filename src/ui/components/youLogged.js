import { useAuth } from "../../logic/auth";
import Button from "./widgets/Button";

const YouLogged = (props) => {
  const { logOut } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <p>You logged</p>
      <Button
        onClick={() => {
          logOut();
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export default YouLogged;
