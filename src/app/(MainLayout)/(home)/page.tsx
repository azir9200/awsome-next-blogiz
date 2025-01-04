import Banner from "@/src/components/Banner/Banner";
import InfoPage from "@/src/components/sharedPages/infoPage";

const HomePage = async () => {
  return (
    <>
      <div>
        <Banner />
        <InfoPage />
      </div>
    </>
  );
};

export default HomePage;
