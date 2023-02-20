import List from "./List";
import Input from "./Input";

const Modal = (props) => {
  return (
    <div className="modal" style="display: none">
      <div className="modal-content">
        <div>
          <div className="modal-header">
            <h1>{props.headerTitle}</h1>
          </div>
          <div className="tasks-list">
            {props.body}
            <List array={[2012, 12012, 1203, 434]} header={<Input />} />
          </div>
        </div>
      </div>
      <div className="modal-background"></div>
    </div>
  );
};

export default Modal;
