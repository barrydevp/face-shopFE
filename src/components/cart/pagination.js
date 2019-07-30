import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5  </a></li>
          <li className="page-item disabled"><a className="page-link" href="#">Next</a></li>
          <form className="form-inline my-2 my-lg-0 pl-3" action="#" method="GET"><input className="form-control mr-sm-2" name="page" type="search" placeholder="Go to page" /><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button></form>
        </ul>
      </nav>
    )
  }
}

export default Pagination;