import React from 'react';
//import './carttrending.css';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="thumb-wrapper">
          <div className="img-box">
            <a href="#">
              <img className="img-responsive img-fluid" src="https://s1.thcdn.com/productimg/1600/1600/11353518-8994620648026637.jpg" alt="" style={{width: "160px", height: "160px"}} />
            </a>
          </div>
          <div className="thumb-content">
            <h4 className="text-truncate">{this.props.cart.name}</h4>
            <p className="item-price">
              <strike>${this.props.cart.price}</strike>
              <span className="font-weight-bold">${this.props.cart.salePrice}</span>
            </p>
            <div className="star-rating">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i className="fas fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-star"></i>
                </li>
                <li className="list-inline-item">
                  <i className="far fa-star"></i>
                </li>
              </ul>
            </div>
            <button className="btn btn-primary" onclick="">Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

class CarouselContainerItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.active ? "item carousel-item active" : "item carousel-item"} data-interval="3000">
        <div className="row">
          <CarouselItem cart={{
            name: 'item1',
            price: 49.99,
            salePrice: 39.99
          }}/>
          <CarouselItem cart={{
            name: 'item2',
            price: 59.99,
            salePrice: 49.99
          }}/>
          <CarouselItem cart={{
            name: 'item3',
            price: 69.99,
            salePrice: 59.99
          }}/>
          <CarouselItem cart={{
            name: 'item4',
            price: 79.99,
            salePrice: 69.99
          }}/>
        </div>
      </div>
    )
  }
}

class CarouselInner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel-inner">
        <CarouselContainerItem active={true}/>
        <CarouselContainerItem />
        <CarouselContainerItem />
      </div>
    )
  }
}

class CarouselControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel-controls">
        <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    )
  }
}

class CarouselIndicate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ol className="carousel-indicators">
        <li className="active" data-target="#myCarousel" data-slide-to="0"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
    )
  }
}

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel slide" id="myCarousel" data-ride="carousel" data-interval="0">
        <CarouselIndicate />
        <CarouselInner />
        {/* <CarouselControl /> */}
        <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    )
  }
}

class CartTrending extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container toptrending">
        <div className="row">
          <div className="col-md-12">
            <h2>Trending <b>Products</b></h2>
            <CarouselSlide />
          </div>
        </div>
      </div>
    )
  }
}

export default CartTrending;