//feature-1
import data from './data.json';
import { useState } from 'react'
import Products from './components/Products';

function App() {
  const products = data.products;
  const [size, setSize] = useState("")
  const [sort, setSort] = useState("")
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
              <Products products={products} />
          </div>
          <div className="sidebar">
                 Sidebar
          </div>
        </div>
      </main>
      <footer>
        All Rights is Reserved..
      </footer>
    </div>
  );
}

export default App;
