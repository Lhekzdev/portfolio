import { useEffect, useState } from "react";



// Word-by-word paragraph animation
export default function WordPreview() {
  const sentence = `I design and build responsive, user-friendly web applications that solve
real-world problems and deliver seamless digital experiences. Skilled in API integration,
state management, and frontend architecture, with strong collaboration
experience across backend teams.`;

  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sentence.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + sentence[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, sentence]);

  return (
    <p className="mb-5 pl-5 break-words leading-relaxed">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
}

// Handwriting animation for name


