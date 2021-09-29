import logo from '../assets/logo-Rey.webp';

function Navbar() {
  return (
    <nav className='relative h-20 min-w-full border-b-4 border-primary-light bg-primary'>
      <img
        className='absolute transform -translate-x-1/2 w-28 left-1/2 top-3'
        src={logo}
        alt="Rey's logo"
      />
    </nav>
  );
}

export default Navbar;
