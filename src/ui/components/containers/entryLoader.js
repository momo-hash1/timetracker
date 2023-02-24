import React from "react";
import useEntities from "../../../logic/getEntities";
import Button from "../widgets/Button";

const EntryLoader = (props) => {
  const { entry, retriveEntry, loading } = useEntities("timediaries");
  React.useEffect(() => {
    retriveEntry(0);
  }, []);

  return (
    <React.Fragment>
      {loading ? <Button isPending={true}></Button> : props.child(entry)}
    </React.Fragment>
  );
};

export default EntryLoader;
