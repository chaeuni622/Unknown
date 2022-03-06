import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <i className="bi bi-brightness-low-fill"></i>
        <i className="bi bi-github" onClick={github}></i>
      </div>
      <div className="container">
        <img src="img/MoreAsh.jpeg" alt="MoreAsh" />
        <audio className="player" src="mp3/Nightmare.mp3" autoPlay controls loop></audio>
      </div>
      <div className="notice"><p>애쉬 아일랜드 (ASH ISLAND) - 악몽 [More ASH]</p></div>
      <div className="footer"><p>All Mixed & Mastered by The Quiett @ Quiett Heaven</p></div>
    </div>
  );
}

function github() {
  window.location.href = "https://github.com/CycleProject/Colv";
}

export default App;