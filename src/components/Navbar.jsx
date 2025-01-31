import reactLogo from '../assets/images/react-logo.png';

function Navbar() {
  return (
      <header>
          <nav>
              <img src={reactLogo} alt="React logo" />
              <span>ReactFacts</span>
          </nav>
      </header>
  )
}

export default Navbar