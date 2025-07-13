import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Meu primeiro desafio em React</h1>
      <p>React funcionando! 🚀</p>
      <p>Você clicou {count} vezes.</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default App;
