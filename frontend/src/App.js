import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import './App.css';

function App() {
  return (
    <Router>
      <header className='App-header'>
        <main>
          <Route path='/' component={LoginScreen} />
        </main>
      </header>
    </Router>
  );
}

export default App;
