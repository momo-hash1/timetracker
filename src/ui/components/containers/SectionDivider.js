import PropsTypes from "prop-types";
import EssentialAside from "./essentialAside";

const SectionDivider = (props) => {
  return (
    <div className="section-divider">
      <main className="timeline-section main-section">{props.main}</main>
      <aside className="functional-section main-section">
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <EssentialAside>{props.aside}</EssentialAside>
        </div>
      </aside>
    </div>
  );
};

SectionDivider.propsTypes = {
  main: PropsTypes.object,
  aside: PropsTypes.object,
};

export default SectionDivider;
