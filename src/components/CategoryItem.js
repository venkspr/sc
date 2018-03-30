import React from 'react';

class CategoryItem extends React.PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.category.id);
  };
  render() {
    const { category, isActive } = this.props;
    return (
      <div
        className="category"
        style={{
          cursor: 'pointer',
          marginTop: 5,
          fontWeight: isActive ? 'bold' : 'normal',
        }}
        onClick={this.handleClick}>
        {category.ProductLine} {category.ProductSeries}
      </div>
    );
  }
}

export default CategoryItem;
