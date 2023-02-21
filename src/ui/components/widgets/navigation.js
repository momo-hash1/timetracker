const Navigation = (props) => {
  return (
    <nav className="navigation" onClick={() => props.doClick()}>
      {`<- ${props.title}`}
    </nav>
  );
};

export default Navigation;
