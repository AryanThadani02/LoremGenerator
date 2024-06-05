import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import loremData from "../loremData.json";
import "./LoremGenerator.css";

function LoremGenerator() {
  const [paragraphs, setParagraphs] = useState(1);
  const [loremText, setLoremText] = useState([]);

  const generateLoremIpsum = () => {
    if (paragraphs > 10) {
      toast.error("Number of paragraphs cannot be more than 10");
      return;
    }
    setLoremText(loremData.slice(0, paragraphs));
  };

  return (
    <div className="generator-container">
      <label htmlFor="paragraphs">Number of Paragraphs:</label>
      <input
        type="number"
        id="paragraphs"
        min="1"
        max="10"
        value={paragraphs}
        onChange={(e) => setParagraphs(e.target.value)}
      />
      <button onClick={generateLoremIpsum}>Generate</button>
      <div className="lorem-text">
        {loremText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoremGenerator;
