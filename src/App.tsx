import { Link, Routes, Route } from 'react-router-dom'
import './App.sass';
import { ButtonResult } from './components/ui/buttons/ButtonResult/ButtonResult';
import FieldCard from './components/FieldCard/FieldCard';
import { useState } from 'react';
import { Result } from './components/Result/Result';

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
        <Route path='/result' element={<Result />} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
