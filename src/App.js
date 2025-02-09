import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExxpences from './components/IncomeExxpences';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExxpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
