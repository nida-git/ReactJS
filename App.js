import React from "react";
import ReactDOM from "react-dom/client";

const header = <div className="header">My App</div>;
// const input = <input type="text" onClick={handleClick} />;

const card = (
  <div>
    <h2>Title</h2>
    <p>Description</p>
  </div>
);

const button = <button tabIndex="1">Click</button>;

const container = (
  <div
    style={{
      color: "white",
      backgroundColor: "black",
    }}
  >
    <h1 className="heading"> I am heading from JSX</h1>
    <p>I am para</p>
  </div>
);

const profileCard = (
  <div className="profile-card">
    <img
      src="https://via.placeholder.com/150"
      alt="Profile"
      className="profile-image"
    />
    <h2 className="profile-name">John Doe</h2>
    <p className="profile-title">Software Developer</p>
    <div className="profile-stats">
      <div className="stat">
        <span className="stat-number">1.2K</span>
        <span className="stat-label">Followers</span>
      </div>
      <div className="stat">
        <span className="stat-number">340</span>
        <span className="stat-label">Following</span>
      </div>
      <div className="stat">
        <span className="stat-number">89</span>
        <span className="stat-label">Posts</span>
      </div>
    </div>
    <button className="profile-button">Follow</button>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(profileCard);
