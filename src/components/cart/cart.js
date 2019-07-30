import React from 'react';
import CartTrending from './carttrending';
import CartList from './cartlist';
import Pagination from './pagination';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CartTrending />
        <div className="container">
          <CartList />
          <Pagination />
        </div>
      </div>
    )
  }
}

export default Cart;