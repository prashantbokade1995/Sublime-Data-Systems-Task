import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval timer on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format the time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h2>Current Time:</h2>
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Contact;
