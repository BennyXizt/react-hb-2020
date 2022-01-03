import React from "react";
import Container from "./Container/Container";
import "./App.css";

function App() {
  const headers = [['Поздравлялки', 'In Memory Of'], ['Видеосообщение','Голосовушки']]
  return (
    <main>
      <div className="header"></div>
      <div className="body">
        <Container hText={headers[0]} type={0} />
        <Container hText={headers[1]} type={1} />
      </div>
    </main>
  );
}

export default App;
