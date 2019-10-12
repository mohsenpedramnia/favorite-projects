import React from "react";
import { FaCloudMeatball } from "react-icons/fa";
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
            <li>
              <FaCloudMeatball />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
