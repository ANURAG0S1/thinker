import './App.css';
import Postform from './components/Postform';
import './css/dashboard.css';
import { useEffect, useState } from 'react';
import Routerx from './views/Router';

function App() {
  return (
    <div className='App' style={{ padding: '20px 120px' }}>
      <Routerx />
    </div>
  );
}

export default App;
