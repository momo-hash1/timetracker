import PropsTypes from "prop-types";

const SectionDivider = (props) => {
  return (
    <div className="section-divider">
      <main className="timeline-section main-section">{props.main}</main>
      <aside className="functional-section main-section">
        <div>{props.aside}</div>
      </aside>
    </div>
  );
};

SectionDivider.propsTypes = {
  main: PropsTypes.object,
  aside: PropsTypes.object,
};

export default SectionDivider;
