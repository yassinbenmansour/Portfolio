import './App.css';
import Props from './components/Props';
import Stateh from './components/Stateh';
import Compo1 from './components/Compo1';

function App() {
  return (
    <div className="App container m-5">
      
      <h1 className='text-primary '>Salam</h1>
      <Props Fn="Yassine" Ls="benmansour" Gp="Deb 109" Nm="2" />

      <Stateh />

      <br />
      <Compo1 />

    </div>
  );
}

export default App;
