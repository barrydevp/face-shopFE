import React from 'react';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-sm-4 mt-4">
        <div className="thumb-wrapper"><a href="/cart/view/"><img class="img-responsive img-fluid" src="https://s1.thcdn.com/productimg/1600/1600/11194387-9454620645841071.jpg" alt="" style={{width: "280px", height: "280px"}} /></a>
          <div className="thumb-content">
            <h5 className="card-title text-truncate">{this.props.cart.name}</h5>
            <p className="card-text text-truncate">{this.props.cart.description}</p>
            <p className="item-price"><strike class="mr-2">${this.props.cart.price}</strike><span className="font-weight-bold">${this.props.cart.salePrice}</span></p>
            <div className="star-rating">
              <ul className="list-inline">
                <li className="list-inline-item"><i class="fas fa-star"></i></li>
                <li className="list-inline-item"><i class="fas fa-star"></i></li>
                <li className="list-inline-item"><i class="fas fa-star"></i></li>
                <li className="list-inline-item"><i class="fas fa-star"></i></li>
                <li className="list-inline-item"><i class="far fa-star"></i></li>
              </ul>
            </div>
              <button className="btn-add btn btn-primary" onclick="addToCart.bind(this)()">Add to Cart</button>
            </div>
        </div>
      </div>
    )
  }
}

class CartList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row pb-4">
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
          <CardItem cart={{
            name: 'name here!',
            description: 'description here!',
            price: 79.99,
            salePrice: 69.99
          }} />
        </div>
      </div>
    )
  }
}

export default CartList;