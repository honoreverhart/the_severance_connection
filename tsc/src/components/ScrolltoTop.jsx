import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrolltoTop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <FaAngleUp className="top-btn" onClick={scrollTop} />
      )}
    </div>
  );
}
