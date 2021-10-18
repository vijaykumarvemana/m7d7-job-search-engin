import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Company from './components/Company';
import Search from './components/Search';

function App() {
  return (
  <Router>
    <Route path="/" exact component={Search}/>
    <Route path="/:companyName" exact component={Company}/>
  </Router>
    
  );
}
export default App;
