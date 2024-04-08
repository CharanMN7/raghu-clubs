import Carousel from "./carousel/Carousel";
import NavBar from "../../reusableComponents/NavBar/NavBar";
import FilterCardsDisplay from "./filterCardsDisplay/filterCardsDisplay";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <FilterCardsDisplay />
    </>
  );
};

export default Home;
