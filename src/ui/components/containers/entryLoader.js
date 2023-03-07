import React from "react";
import { useInView } from "react-intersection-observer";
import useEntities from "../../../logic/useEntities";
import Button from "../widgets/Button";

const EntryLoader = (props) => {
  const {
    getEntry,
    retriveEntry,
    loading,
    removeEntry,
    addEntry,
    updateEntry,
    searchTask,
  } = useEntities(props.table);
  const { ref, inView } = useInView();
  const [decideEntry, setDecideEntry] = React.useState();

  const [offset, setOffset] = React.useState(0);

  const methods = {
    add: addEntry,
    remove: removeEntry,
    update: updateEntry,
    search: searchTask,
  };

  React.useEffect(() => {
    retriveEntry(offset);
  }, [offset]);

  React.useEffect(() => {
    searchTask(props.searchParam);
  }, [props.searchParam]);


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
          {getEntry().length === 0
            ? props.placeHolder(methods)
            : props.child(getEntry(), methods)}
          {props.hasPagination && <div ref={ref}></div>}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EntryLoader;
