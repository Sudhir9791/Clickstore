import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import RouterRoutes from './routes/RouterRoutes';


const App = () => {
  return (
    <>
      <CommonProvider>
        <CartProvider>
          <RouterRoutes />
        </CartProvider>
      </CommonProvider>
    </>
  );
};

export default App;
