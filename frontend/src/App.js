import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import './App.css';

function App() {
  return (
    <Router>
      <header className='App-header'>
        <main>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
        </main>
      </header>
    </Router>
  );
}

export default App;
