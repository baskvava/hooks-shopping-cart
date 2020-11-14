import './App.css';
import ShoppingCar from './ShoppingCar/shoppingCar.js';
import ShoopingCarAmount from './ShoppingCarAmount/shoppingCarAmount.js';
import { CarProvider, AmountProvider } from './Contexts/shoppingCarContext.js';

export default function App() {
  return (
    <div className="App">
      <CarProvider>
        <AmountProvider>
          <ShoppingCar />
          <ShoopingCarAmount />
        </AmountProvider>
      </CarProvider>
    </div>
  );
}
