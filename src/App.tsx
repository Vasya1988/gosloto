import { Link, Routes, Route } from 'react-router-dom'
import './App.sass';
import { ButtonResult } from './components/ui/buttons/ButtonResult/ButtonResult';
import FieldCard from './components/FieldCard/FieldCard';
import { useState } from 'react';

function App() {

  const [fields, setFields] = useState(
    {
      firstField: 19, 
      secondField: 2
    }
  )

  return (
    <div className={'LotoFrame'} >
      <Routes>
        <Route path='/' element={
          <>
            <FieldCard fields={fields} />
            <Link style={{ textDecoration: 'none' }} to={'/result'}>
              <ButtonResult />
            </Link>
          </>
        }
        />
        <Route path='/result' element={(<h1>hhh</h1>)} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
