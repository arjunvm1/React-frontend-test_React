import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
    </div>
  );
}

export default App;
