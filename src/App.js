import './css/style.css';
import Header from './header'
import MainContent from './mainContent'
import Nav from './nav'
import Footer from './footer'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <MainContent />
      <Nav />
      <Footer />
      <h1>Hello!!!</h1>
    </div>
  );
}

export default App;
