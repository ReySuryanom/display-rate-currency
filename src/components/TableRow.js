function TableRow({ rate, currency }) {
  const base = parseFloat(rate.toFixed(4));
  const formula = (base * 2.5) / 100;
  const weSell = (base + formula).toFixed(4);
  const weBuy = (base - formula).toFixed(4);

  const formatting = (number) => {
    const prefix = number === 1 ? number : number.toString().split('.')[0];
    const temp = prefix.length;

    return temp === 1 ? '00' + number : temp === 2 ? '0' + number : number;
  };

  return (
    <tr className='border-b'>
      <td className='p-3'>{currency}</td>
      <td className='p-3'>{formatting(weBuy)}</td>
      <td className='p-3'>{formatting(base)}</td>
      <td className='p-3'>{formatting(weSell)}</td>
    </tr>
  );
}

export default TableRow;
