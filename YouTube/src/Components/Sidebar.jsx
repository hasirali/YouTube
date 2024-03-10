import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-2xl w-56 px-5 text-lg">
      <section className="pt-5">
        <h2>🏠Home</h2>
        <ul>
          <li>⚡Shorts</li>
          <li>⏯️Subscription</li>
          <li>🔴Live</li>
        </ul>
      </section>

      <section className="pt-5">
        <h2 className="font-bold">You</h2>
        <ul>
          <li>🤵Your Channel</li>
          <li>🕛History</li>
          <li>▶️Your Videos</li>
          <li>👁️‍🗨️Watch Later</li>
        </ul>
      </section>

      <section className="pt-5">
        <h2 className="font-bold">Explore</h2>
        <ul>
          <li>🎵Music</li>
          <li>🏏Sports</li>
          <li>🎮Gaming</li>
          <li>🍿Movies</li>
        </ul>
      </section>

      <section className="pt-5">
        <h2 className="font-bold">Subscription</h2>
        <ul>
          <li>🎈Aalo Waaliya</li>
          <li>🎈Aalo Waaliya</li>
          <li>🎈Aalo Waaliya</li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
