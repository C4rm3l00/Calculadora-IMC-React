import React from 'react';
import CalculadoraImc from './components/CalculadoraImc';
import { SpeedInsights } from "@vercel/speed-insights/react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <CalculadoraImc />
      <SpeedInsights/>
    </div>
  );
}

export default App;
