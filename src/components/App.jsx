import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  let [currentTime, updateTime] = React.useState(time);

  function update() {
    let newTime = new Date().toLocaleTimeString();
    updateTime((currentTime = newTime));
  }

  setInterval(update, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
