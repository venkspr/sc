import React from 'react';
import { Link } from 'react-router-dom';

class CategoryItemA extends React.PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.category.id);
  };
  render() {
    const { category, isActive } = this.props;
    return (
      <React.Fragment>
        <Link
          to="/"
          className={
            isActive
              ? 'list-group-item  active'
              : 'list-group-item justify-content-between'
          }
          onClick={this.handleClick}
          // style={
          //   !isActive
          //     ? { backgroundColor: '#273C75', color: '#FFFFFF' }
          //     : { backgroundColor: '#FFFFFF', border: 'none', color: '#000000' }
          // }
        >
          {' '}
          {category.ProductLine} {category.ProductSeries}{' '}
          <span className="badge badge-pill badge-secondary badge-right">
            {category.products.length}
          </span>
        </Link>
      </React.Fragment>

      //
      // <div
      //   className="category"
      //   style={{
      //     cursor: 'pointer',
      //     marginTop: 5,
      //     fontWeight: isActive ? 'bold' : 'normal'
      //   }}
      //   onClick={this.handleClick}
      // >
      //   {category.ProductLine} {category.ProductSeries}
      // </div>
    );
  }
}

export default CategoryItemA;
