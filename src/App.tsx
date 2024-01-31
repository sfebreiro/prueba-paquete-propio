import './App.css';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'sfl-product-card';

const product = {
  'id': '1',
  'title': 'Coffe Cup',
}

function App() {
  return (
    <div className="App App-header">
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >

        {
          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </div>
  );
}

export default App;
