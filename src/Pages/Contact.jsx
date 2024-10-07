// REACT
import { useRef, useState } from "react";

// EMAIL JS
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // CLEAR FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // EMAIL JS
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm("service_hp57nnb", "template_03kyed8", formRef.current, {
        publicKey: "CLllgrNb6UYby4AOj",
      })
      .then(
        () => {
          toast.success(
            `Thanks for your email ${name}! We'll be in touch soon!`,
          );
          console.log("Success!");
        },
        (error) => {
          toast.error(`Oh no! There's been an error!`);
          console.log("Error!", error.message);
        },
      );
  };

  // STYLES
  const mobileStyles = {
    background: "flex flex-col md:hidden relative bg-white pt-28",
    titleContainer: "",
    title: "text-center text-5xl text-accent font-bold tracking-wider mb-8",
    tagline: "text-black my-4 text-center mx-6 text-base",
    form: "p-4 w-full mt-4 flex flex-col justify-center ",
    input: "py-4 pl-4 border rounded-md mx-auto mb-4 w-5/6 ",
    message: "py-3 pl-3 border h-32 rounded-md mx-auto mb-4 h-28 w-5/6",
    button:
      "bg-accent text-white font-bold text-center text-base px-8 w-5/6 py-3 my-3 rounded-md hover:outline outline-4 outline-offset-4 outline-accent self-center",
  };

  return (
    <div id="contact">
      {/* MOBILE */}
      <section className={mobileStyles.background}>
        {/* TITLE */}
        <div className={mobileStyles.titleContainer}>
          <h2 className={mobileStyles.title}>Contact</h2>
          <p className={mobileStyles.tagline}>
            Please fill in the form below and we will be in touch soon!
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={sendEmail} className={mobileStyles.form} ref={formRef}>
          <input
            type="text"
            name="user_name"
            aria-label="name input"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className={mobileStyles.input}
            required
          />
          <input
            type="email"
            name="user_email"
            aria-label="email input"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={mobileStyles.input}
            required
          />
          <textarea
            type="text"
            aria-label="message input"
            name="message"
            value={message}
            placeholder="Please detail your requirements"
            onChange={(e) => setMessage(e.target.value)}
            className={mobileStyles.message}
            required
          />
          <button className={mobileStyles.button}>Send Email</button>
          <Toaster />
        </form>
      </section>
    </div>
  );
};

export default Contact;
