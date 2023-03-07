const DifficultySelector = (props) => {
  return (
    <div className="difficulty-points">
      {Array(4)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              className={`difficulty-marker-unmarked ${
                props.amount >= index + 1 && "highlighted"
              }`}
              onClick={() => props.setAmount(index + 1)}
              key={index}
            ></div>
          );
        })}
    </div>
  );
};

export default DifficultySelector;
