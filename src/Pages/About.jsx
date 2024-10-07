// ICONS
import { FaMobileAlt } from "react-icons/fa";

// RRD
import { Link } from "react-router-dom";

const About = () => {
  // STYLES
  const mobileStyles = {
    background: "flex flex-col md:hidden relative bg-white pt-28",
    titleContainer: "text-center ",
    title: "text-center text-5xl text-accent font-bold tracking-wider mb-8",
    subtitle: "text-black font-bold text-lg my-4 pt-8 text-center mx-6",
    cTAContainer:
      "flex flex-col justify-center bg-accent w-full px-6 py-6 mt-12",
    cTATitle: "text-white text-lg text-center",
    cTATag: "text-white text-center mt-4 text-md font-light",
    buttonContainer: "flex justify-center my-4",
    button:
      "bg-attention text-black font-bold text-center text-base px-8 py-3 my-3 rounded-md hover:outline outline-4 outline-offset-4 outline-attention hover:text-accent",
  };

  return (
    <section id="about">
      {/* ------- MOBILE ------- */}
      <div className={mobileStyles.background}>
        <h1 className={mobileStyles.title}>About Us</h1>
        <p className="mx-6 text-base md:text-md md:mx-12">
          Welcome to <strong className="text-accent">Town 2 Town Movers</strong>
          , York’s most reliable and friendly man with a van service! <br />
          <br />
          Whether you’re moving house, picking up some new furniture, or just
          need a hand transporting those bulky items, we’re here to make your
          life easier. <br />
          <br />
          Based right in the heart of York, we’ve been proudly serving our local
          community for <strong className="text-accent">20 years</strong>,
          helping people get from A to B with ease and a smile. <br />
          <br />
          We offer <strong className="text-accent">
            flexible, affordable
          </strong>{" "}
          services to suit your needs – no job is too big or small. From full
          house moves to single-item pick-ups, we’ve got you covered. <br />
          <br />
          Our team knows York like the back of our hand, so you can trust us to
          get your items where they need to go, quickly and safely.
          <br />
          <br />
          <strong>What makes us stand out? </strong>
          <br />
          It’s simple: <strong className="text-accent">personal</strong>,{" "}
          <strong className="text-accent">friendly service</strong> with a local
          touch. We treat your belongings like our own and always aim to go the
          extra mile. <br />
          <br />
          So, if you’re looking for a{" "}
          <strong className="text-accent">
            stress-free moving experience
          </strong>{" "}
          with someone you can trust, give us a call today. We’re here to help!
        </p>

        {/* CALL TO ACTION */}
        <div id="cTAContainer" className={mobileStyles.cTAContainer}>
          <h3 className={mobileStyles.cTATitle}>
            Call us for a quick quote on:
          </h3>
          <div className="flex text-white justify-center items-center my-4">
            <FaMobileAlt size={25} className="mr-2" />
            <p className="font-bold text-white text-lg">07359 741819</p>
          </div>
          <h3 className={mobileStyles.cTATag}>
            Or email us through our contact page
          </h3>
          <Link to="../contact" className={mobileStyles.buttonContainer}>
            <button className={mobileStyles.button}>Get in touch</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
