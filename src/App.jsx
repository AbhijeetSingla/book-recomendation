import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Booklist from './components/Booklist/Booklist';
import { useState } from 'react';

function App() {

  const [category, setCategory] = useState("javascript");

  function changeCategory(event) {
    setCategory(event.target.innerText.toLowerCase());
  }

  return (
    <>
    <Header />
      <div className='section-base container-center'>
        <p>Here are some suggestions for books that I prefer, select a genre to see.</p>
        <button onClick={changeCategory} className="primary-link">JavaScript</button>
        <button onClick={changeCategory} className="primary-link">Fiction</button>
        <button onClick={changeCategory} className="primary-link">Business</button>
        <hr className='custom-hr' />
        <div className='blog-list grid'>
          <Booklist category={category} key={category} />
        </div>
      </div>
    <Footer />
    </>
  );
}

export default App;
