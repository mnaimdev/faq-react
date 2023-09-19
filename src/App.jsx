import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FAQS from './components/FAQS';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  return (
    <>
    <Header />
      <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}>

                </Route>

                <Route path="/" element={<FAQS />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
