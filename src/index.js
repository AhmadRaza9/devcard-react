import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="devImages/jonas.jpeg"
      alt="Jonas Schmedtmann"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🎉" color="#ffa500" />
      <Skill skill="JavaScript" emoji="🎈" color="#ff4500" />
      <Skill skill="Web Desing" emoji="🎁" color="#7979ff" />
      <Skill skill="Svelte" emoji="🎊" color="#ff0000" />
      <Skill skill="HTML & CSS" emoji="✨" color="#c20fc2" />
      <Skill skill="Git & Github" emoji="🎆" color="#f71e1e" />
      <Skill skill="PHP" emoji="👑" color="#00deff" />
      <Skill skill="WordPress Developer" emoji="🎭" color="#2de697" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill} </span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
