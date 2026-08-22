import { useEffect, useState } from "react";

function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = time
  .toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
  .toUpperCase();

return (
  <div className="clock-widget">
    <span className="clock-time">
      {formattedTime}
    </span>

    <span className="clock-date">
      {formattedDate}
    </span>
  </div>
);
}

export default ClockWidget;