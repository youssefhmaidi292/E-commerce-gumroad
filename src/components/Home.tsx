import Categories from "./home/Categories";
import Discount from "./home/Discount";
import HappyHours from "./home/HappyHours";
import HeroSlider from "./home/HeroSlider";
import RecentNews from "./home/RecentNews";


const Home = () => {
  return (
    <>
      <HeroSlider />
      <Categories />
      <Discount />
      <HappyHours />
      <RecentNews />
    </>
  );
};

export default Home;
