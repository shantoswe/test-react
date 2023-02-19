import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Layout/>
    </div>
  );
}

export default App;
