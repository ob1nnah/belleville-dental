import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    let count = parseInt(localStorage.getItem("visitorCount") || "0", 10);

    if (!hasVisited) {
      count += 1;
      localStorage.setItem("visitorCount", count);
      sessionStorage.setItem("hasVisited", "true");
    }

    setVisitorCount(count);
  }, []);

  return (
    <span title="Visitor Count" style={{ fontSize: "0.9rem", color: "#ff6b6b", fontFamily: "cursive", fontWeight: "bolder" }}>
      👁️ {visitorCount}
    </span>
  );
};

export default VisitorCounter;