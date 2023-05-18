import React, { useState, useEffect } from 'react';

const Clock = ({ timezone, country }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: timezone,
  });

  return (
    <div className="clock">
      <h2>{country}</h2>
      <h1>{formattedTime}</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className="app">
      <Clock timezone="America/New_York" country="New York" />
      <Clock timezone="Europe/London" country="London" />
      <Clock timezone="Europe/Paris" country="Paris" />
      <Clock timezone="Asia/Tokyo" country="Tokyo" />
      <Clock timezone="Australia/Sydney" country="Sydney" />
      <Clock timezone="America/Los_Angeles" country="Los Angeles" />
      <Clock timezone="Asia/Dubai" country="Dubai" />
      <Clock timezone="America/Chicago" country="Chicago" />
      <Clock timezone="America/Toronto" country="Toronto" />
      <Clock timezone="Asia/Kolkata" country="Mumbai" />
    </div>
  );
};




export default About;
