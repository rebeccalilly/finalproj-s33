import { useState } from 'react';
import './style.css';
import Checklist from './checklist';
import Profile from './Profile';
import Authentication from './authentication';
import Checklistcard from './Checklistcard';

function App() {
  const [whichPage, setWhichPage] = useState(0);

  return (
    <div>
      <Checklist />
    </div>
  )
}

export default App
