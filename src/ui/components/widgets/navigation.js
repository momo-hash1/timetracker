import { useNavigate } from "react-router-dom";

const Navigation = (props) => {
  const navigate = useNavigate();
  return (
    <nav className="navigation" onClick={() => navigate(props.to)}>
      {`<- ${props.title}`}
    </nav>
  );
};

export default Navigation;
