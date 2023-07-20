import HomeBanner from "@/pages/home/HomeBanner/HomeBanner";
import QuickButtons from "@/pages/home/quickButtons/QuickButtons";
import { Area, Spacer } from "@dohyun-ko/react-atoms";

const HomePage = () => {
  return (
    <Area>
      <HomeBanner />

      <Spacer height={"62px"} />

      <QuickButtons />
    </Area>
  );
};

export default HomePage;
