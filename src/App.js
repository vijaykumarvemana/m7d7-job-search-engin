import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar,Container,FormControl, InputGroup} from 'react-bootstrap';
import './App.css';
import Company from './components/Company';

function App() {
  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
     <Container>
      <Navbar.Brand > 
       Job-Search-Engine
      </Navbar.Brand>
    </Container>
  </Navbar>
  <InputGroup className="mb-3">
   
    <FormControl
      placeholder="search-job-here"
      aria-label="search-job-here"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <Company />
    </div>
  );
}
export default App;
