//import Menu from './Components/Menu/Menu';
//import Rotas from './Rotas.js';
//import Footer from './Components/Footer/Footer.js'
import './App.js';

import { lazy, Suspense } from 'react';

const Menu = lazy(() => import ('../src/Components/Menu/Menu'));
const Rotas = lazy(() => import ('./Rotas'));
const Footer = lazy(() => import ('../src/Components/Footer/Footer'));


function App() {
  return (
    <div className="App">
      <header>
      <Suspense fallback={ <p>Carregando...</p>}>
        <Menu />
      </Suspense>
      </header>
      <main>
      <Suspense fallback={ <p>Carregando...</p>}>
        <Rotas />
      </Suspense>
      </main>
      <footer>
      <Suspense fallback={ <p>Carregando...</p>}>
       <Footer />
       </Suspense>
      </footer>
    </div>
  );
}

export default App;
