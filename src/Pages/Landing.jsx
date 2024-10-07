// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { HiMiniStar } from "react-icons/hi2";

// COMPONENTS
import ReviewCard from "../Components/ReviewCard";

const Landing = () => {
  const styles = {
    background: "bg-white pt-20 h-full w-full px-6",
    title: "text-accent text-6xl text-center my-12",
    subtitle: "text-black text-3xl text-center mb-4",
    tagline: "text-black text-center text-xl",
    button:
      "bg-accent text-white text-center text-xl px-8 py-3 rounded-md hover:outline outline-4 outline-offset-4 outline-accent",
  };

  return (
    <div id="landing" className={styles.background}>
      {/* PAGE TITLE */}
      <div className="container">
        <h1 className={styles.title}>
          TOWN to TOWN <h1 className="text-attention">MOVERS</h1>
        </h1>
        <h2 className={styles.subtitle}>Man with a van service</h2>
        <div className="container flex justify-between px-8 mb-8">
          <HiMiniStar size={40} className="text-attention" />
          <HiMiniStar size={40} className="text-attention" />
          <HiMiniStar size={40} className="text-attention" />
          <HiMiniStar size={40} className="text-attention" />
          <HiMiniStar size={40} className="text-attention" />
        </div>

        {/* REVIEW CARD */}
        <div className="py-4">
          <ReviewCard />
        </div>

        {/* CALL TO ACTION */}
        <div className="flex justify-center mt-8">
          <Link to="/">
            <button className={styles.button}>Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
