import { Navbar, TableRow, TableHead } from './components';
import { useFetch } from './hook/useFetch';

function App() {
  const { rates, isLoading } = useFetch();

  const loading = (
    <tr>
      <td colSpan='4'>
        <div className='flex items-center justify-center mt-24'>
          <div className='w-32 h-32 border-b-4 border-gray-900 rounded-full animate-spin' />
        </div>
      </td>
    </tr>
  );

  return (
    <>
      <Navbar />
      <table className='mx-auto mt-24 text-2xl text-center uppercase text-primary'>
        <TableHead />
        <tbody>
          {!isLoading
            ? Object.keys(rates).map((rate) => {
                return (
                  <TableRow key={rate} currency={rate} rate={rates[rate]} />
                );
              })
            : loading}
        </tbody>
      </table>
      <footer className='fixed bottom-0 min-w-full p-4 font-semibold text-center text-primary'>
        <p>Base currency is EUR</p>
      </footer>
    </>
  );
}

export default App;
