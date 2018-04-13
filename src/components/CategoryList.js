import React from 'react';
import CategoryItemA from './CategoryItemA';

class CategoryList extends React.PureComponent {
  render() {
    return (
      <div id="leftSidebar" className="col-lg-2">
        <div>
          <div
            style={{
              borderBottomStyle: 'solid',
              borderColor: '#FFA724',
              borderWidth: '5px'
            }}
          >
            <h5>Categories</h5>
          </div>
          {/* {this.props.categories.map((category) => {
          return (
            <CategoryItem
              key={category.id}
              category={category}
              isActive={category.id === this.props.activeCategoryId}
              onClick={this.props.onCategoryClick}
            />
          );
        })} */}

          <div
            className="list-group justify-content-between"
            style={{ backGroundColor: '#768196' }}
          >
            {this.props.categories.map((category) => {
              return (
                <CategoryItemA
                  key={category.id}
                  category={category}
                  isActive={category.id === this.props.activeCategoryId}
                  onClick={this.props.onCategoryClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
