import './App.css';
import Router from './Router';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
