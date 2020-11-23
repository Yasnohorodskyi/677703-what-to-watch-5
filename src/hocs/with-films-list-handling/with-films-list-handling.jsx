import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types.js";


import {DEFAULT_RENDERED_FILMS_COUNT, SHOW_MORE_FILMS_COUNT} from "../../const.js";

const withFilmsListHandling = (Component) => {
  class WithFilmsListHandling extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        renderedFilmsCount: DEFAULT_RENDERED_FILMS_COUNT,
      };

      this._handleMoreButtonClick = this._handleMoreButtonClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.films !== this.props.films) {
        this.setState({
          renderedFilmsCount: DEFAULT_RENDERED_FILMS_COUNT,
        });
      }
    }

    _handleMoreButtonClick() {
      this.setState((prevState, props) => {
        const length = props.films.length;
        const oldCount = prevState.renderedFilmsCount;
        const newCount = ((oldCount + SHOW_MORE_FILMS_COUNT) > (length - 1))
          ? length : (oldCount + SHOW_MORE_FILMS_COUNT);

        return ({
          renderedFilmsCount: newCount,
        });
      });
    }

    _getMoreButtonVisibility() {
      if (this.state.renderedFilmsCount < this.props.films.length) {
        return true;
      }

      return false;
    }

    render() {
      return (
        <Component
          {...this.props}
          renderedFilmsCount={this.state.renderedFilmsCount}
          onMoreButtonClick={this._handleMoreButtonClick}
          isMoreButtonVisible={this._getMoreButtonVisibility()}
        />
      );
    }
  }

  WithFilmsListHandling.propTypes = {
    films: PropTypes.arrayOf(filmType).isRequired,
  };

  return WithFilmsListHandling;
};


export default withFilmsListHandling;
