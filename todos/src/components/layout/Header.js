import React from "react";
export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="todos" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>light bulb</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
