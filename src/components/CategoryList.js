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
              isActive={category.id === this.props.activeCategoryId}
              onClick={this.props.onCategoryClick}
            />
          );
        })}
      </div>
    );
  }
}

export default CategoryList;
