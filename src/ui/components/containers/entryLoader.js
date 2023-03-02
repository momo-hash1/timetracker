import React from "react";
import { useInView } from "react-intersection-observer";
import useEntities from "../../../logic/useEntities";
import Button from "../widgets/Button";

const EntryLoader = (props) => {
  const {
    entry,
    retriveEntry,
    loading,
    removeEntry,
    addEntry,
    updateEntry,
    setEntry,
  } = useEntities(props.table);
  const { ref, inView } = useInView();

  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    retriveEntry(offset);
  }, [offset]);

  React.useEffect(() => {
    if (!props.hasPagination) return;
    setOffset(offset + 1);
  }, [inView]);
  return (
    <React.Fragment>
      {loading ? (
        <Button isPending={true}></Button>
      ) : (
        <React.Fragment>
          {props.child(entry, { addEntry, removeEntry, updateEntry, setEntry })}
          {props.hasPagination && <div ref={ref}></div>}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EntryLoader;
