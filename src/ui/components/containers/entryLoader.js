import React from "react";
import useEntities from "../../../logic/useEntities";
import Button from "../widgets/Button";

const EntryLoader = (props) => {
  const { entry, retriveEntry, loading, removeEntry, addEntry, updateEntry } = useEntities(
    props.table
  );
  React.useEffect(() => {
    retriveEntry(0);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Button isPending={true}></Button>
      ) : (
        props.child(entry, addEntry, removeEntry, updateEntry)
      )}
    </React.Fragment>
  );
};

export default EntryLoader;
