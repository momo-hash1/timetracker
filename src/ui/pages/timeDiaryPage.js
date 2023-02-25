import SectionDivider from "../components/containers/SectionDivider";
import TimeDiaryList from "../components/timeDiaryList";
import Modal from "../components/widgets/modal";
import React from "react";
import Button from "../components/widgets/Button";

const timeDiaryPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modal, setModal] = React.useState({});
  return (
    <React.Fragment>
      <SectionDivider
        main={<TimeDiaryList callModal={setModal} showModal={setShowModal} />}
      />

      <Modal
        header={<p className="warning-text">{modal.title}</p>}
        hideModal={() => setShowModal(false)}
        showModal={showModal}
      >
        <p>{modal.text}</p>

        <Button
          onClick={() => {
            setShowModal(false)
            modal.action();
          }}
        >
          Yes
        </Button>
      </Modal>
    </React.Fragment>
  );
};

export default timeDiaryPage;
