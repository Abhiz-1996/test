import React, { useState, useEffect } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date("June 17, 2026 18:00:00");
      const now = new Date();
      const diff = target - now;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);

      setTime(`${d} Days ${h} Hours ${m} Min`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!open) {
    return (
      <div className="overlay">
        <div className="invite-box">
          <h2>You're Invited</h2>
          <button onClick={() => setOpen(true)}>Open Invitation</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="hero">
        <h1>Ananthu & Anagha</h1>
        <p>June 17, 2026 • 6:00 PM</p>
      </section>

      <section className="section">
        <h2>Countdown</h2>
        <p>{time}</p>
      </section>

      <section className="section">
        <h2>Venue</h2>
        <p>Grand Convention Hall, Kerala</p>
      </section>

      <section className="section">
        <h2>RSVP</h2>
        <a href="https://wa.me/" target="_blank">RSVP via WhatsApp</a>
      </section>
    </div>
  );
}
