import { BrowserRouter , Route, Routes,} from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import NavBar from './components/NavBar';
import TopHead from './components/TopHead';


function App() {
  return (
    <div className="App">
      <TopHead/>
      <NavBar/>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
