import './App.css';
import ShoppingCar from './ShoppingCar/shoppingCar.js';
import ShoopingCarAmount from './ShoppingCarAmount/shoppingCarAmount.js';
import { CarProvider } from './Contexts/shoppingCarContext.js';

export default function App() {
  return (
    <div className="App">
      <CarProvider>        
          <ShoppingCar />
          <ShoopingCarAmount />        
      </CarProvider>
    </div>
  );
}
