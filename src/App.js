import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import Header from './components/static/header/Header';

import Home from './components/pages/home/Home';
function App() {
  return (
    <div className="app-container">
    <Router>
      <Header />
      <Routes>
        <Route exact path='' element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
