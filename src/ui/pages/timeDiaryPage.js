import Navigation from "../components/widgets/navigation";
import SectionDivider from "../components/containers/SectionDivider";
import TimeDiaryList from "../components/timeDiaryList";

const timeDiaryPage = () => {
  return (
    <SectionDivider
      main={<TimeDiaryList/>}
    />
  );
};

export default timeDiaryPage;
