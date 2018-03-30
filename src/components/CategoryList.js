import React from 'react';

import CategoryItem from './CategoryItem';

class CategoryList extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.categories.map((category) => {
          return (
            <CategoryItem
              key={category.id}
              category={category}
              onClick={this.props.onCategoryClick}
            />
          );
        })}
      </div>
    );
  }
}

export default CategoryList;
