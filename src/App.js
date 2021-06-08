import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Gas',
      amount: 73.23,
      date: new Date(2020, 2, 14),
    },
    {
      id: 'e2',
      title: 'Groceries',
      amount: 267.32,
      date: new Date(2020, 2, 10),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 302.12,
      date: new Date(2020, 2, 17),
    },
    {
      id: 'e4',
      title: 'Electricity',
      amount: 201.67,
      date: new Date(2020, 2, 28),
    }
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
