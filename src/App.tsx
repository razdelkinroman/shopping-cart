import React, { useState } from 'react';
import { CartContainer } from './containers/CartContainer';
import { MainContainer } from './containers/MainContainer';

function App() {
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <div>
      <MainContainer setOpenCart={setOpenCart} />
      <CartContainer state={openCart} setOpenCart={setOpenCart} />
    </div>
  );
}

export default App;
