import React from "react";
import useEntities from "../../../logic/useEntities";
import Button from "../widgets/Button";

const EntryLoader = (props) => {
  const { entry, retriveEntry, loading } = useEntities(
    props.table,
    props.setNeedUpdate
  );
  React.useEffect(() => {
    retriveEntry(0);
    props.setNeedUpdate(false);
  }, [props.needUpdate]);

  return (
    <React.Fragment>
      {loading ? (
        <Button isPending={true}></Button>
      ) : (
        props.child(entry, retriveEntry)
      )}
    </React.Fragment>
  );
};

export default EntryLoader;
