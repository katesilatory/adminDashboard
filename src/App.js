import './App.css';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
// import { Table } from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      {/* <Table /> */}
    </div>
  )
}

export default App;
