import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Create from './components/Create/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/create' element={<Create />}/>
        </Routes>
        </div>
    </Router>

  );
}

export default App;
