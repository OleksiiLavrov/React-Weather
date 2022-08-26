import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';

function App() {

  return (
    <div className="container">
      <Header />
      {/* <Popup /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div >
  );
}

export default App;
