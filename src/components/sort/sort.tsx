import {connect} from "react-redux";
import * as React from 'react';

import {ActionCreator} from "../../reducer/app/app";
import {getSortType} from "../../reducer/app/selectors";
import {SortType} from "../../const";

interface Props {
  activeSortType: string;
  isActive: boolean;
  onSortTypeChange(sortType: string): void;
  onActiveChange(): void;
}

class Sort extends React.PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.handleSortItemClick = this.handleSortItemClick.bind(this);
  }

  handleSortItemClick(evt) {
    const {onSortTypeChange, onActiveChange: onMenuToggle} = this.props;

    onSortTypeChange(evt.target.dataset.sortType);
    onMenuToggle();
  }

  render() {
    const {activeSortType, isActive: isMenuOpen, onActiveChange: onMenuToggle} = this.props;

    const openListClassName: string = isMenuOpen ? `places__options--opened` : ``;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}
          onClick={onMenuToggle}
        >
          {activeSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${openListClassName}`}>
          {Object.values(SortType).map((sortType) =>
            <li tabIndex={0}
              key={sortType}
              className={`places__option ${sortType === activeSortType ? `places__option--active` : ``}`}
              data-sort-type={sortType}
              onClick={(evt) => this.handleSortItemClick(evt)}
            >{sortType}</li>
          )}
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  activeSortType: getSortType(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onSortTypeChange(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
