import { useState } from "react";
import "./App.css";
import Header from "./views/partials/Header";

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default Contact;
