import Banner from "@/src/components/Banner/Banner";
import LatestService from "@/src/components/service/latest.serve";
import { getRecentPosts } from "@/src/components/service/RecentPost";
import InfoPage from "@/src/components/sharedPages/infoPage";

const HomePage = async () => {
  // const { data: services } = await getRecentPosts();

  return (
    <>
      <Banner />
      <InfoPage />
      {/* <LatestService services={services} /> */}
    </>
  );
};

export default HomePage;
