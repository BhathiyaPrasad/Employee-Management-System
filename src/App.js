import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

   const navigate = useNavigate (); 

  return (
    <div className="App">
      <header className="App-header">
       <h1>Employee Management System</h1>
       <button className="employers-button" onClick={() => navigate('/employer')}>Employers</button>
      </header>
    </div>
  );
}

export default App;
