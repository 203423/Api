import logo from './logo.svg';
import './App.css';
import CruddApp from './componentes/CrudApp';
import CrudForm from './componentes/Crudform';
import CrudApi from './componentes/CrudApi';

function App() {
  return (
    <div>
      <CrudApi/>
      <CruddApp/>
      <table></table>
    </div>
  );
}

export default App;
