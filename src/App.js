//feature-1
import data from './data.json';
import { useState } from 'react'
import Products from './components/Products';
import Filter from './components/Filter';

function App() {
  const [products, setProducts] = useState([])
  const [size, setSize] = useState("")
  const [sort, setSort] = useState("")
 
  const sortProducts=(event)=>{
      setSort(event.target.value)
      setProducts(products.slice().sort((a,b)=>(
        sort === "lowest"?((a.price < b.price) ? 1: -1):
        sort === "highest"?((a.price > b.price) ? 1: -1):
        ((a._id > b._id)?1: -1)
      )))
  
  }
  const filterProducts=(event)=>{
    if(event.target.value === ""){
      setSize(event.target.value);
      setProducts(data.products)
    }else{
      setSize(event.target.value)
      setProducts(data.products.filter((product) => product.availableSizes.indexOf(event.target.value) >= 0))
    }
  }

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter count={products.length} 
                 size={size} sort={sort}
                 filterProducts={filterProducts}
                 sortProducts={sortProducts} />
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
