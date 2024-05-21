import { useState } from 'react';
import './style.css';
import Checklist from './Checklist';
import Profile from './Profile';
import Authentication from './authentication';

function App() {
  const [whichPage, setWhichPage] = useState(0);

  return (
    <div>
      <Checklist />
    </div>
  )
}

export default App
