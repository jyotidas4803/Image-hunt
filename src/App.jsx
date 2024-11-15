import { useState } from 'react';
import Card from './Card.jsx';
import './index.css';
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Card />
      <button className="btn btn-primary mt-4 w-80 rounded">Select</button>

    </div>
  );
}

export default App;
