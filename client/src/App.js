import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Items from './pages/Items';
import 'antd/dist/antd.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/items' element={<Items/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
