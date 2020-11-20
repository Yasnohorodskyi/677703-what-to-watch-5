import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addReview} from "../../store/api-action.js";
import {getActiveItemId} from "../../store/selectors/selectors.js";

const withFormHandling = (Component) => {
  class WithFormHandling extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        rating: 3,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleReviewChange = this.handleReviewChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();

      const {
        postCommentAction,
        activeItemId
      } = this.props;

      postCommentAction(activeItemId, this.state.rating, this.state.reviewText);
    }

    handleRatingChange(evt) {
      this.setState({rating: +evt.target.value});
    }

    handleReviewChange(evt) {
      const value = evt.target.value;

      this.setState({reviewText: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          handleSubmit={this.handleSubmit}
          handleTextChange={this.handleReviewChange}
          handleRatingChange={this.handleRatingChange}
          rating={this.state.rating}
        />
      );
    }
  }

  WithFormHandling.propTypes = {
    postCommentAction: PropTypes.func.isRequired,
    activeItemId: PropTypes.number.isRequired,
  };

  const mapStateToProps = (state) => ({
    activeItemId: getActiveItemId(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    postCommentAction(filmId, rating, comment) {
      dispatch(addReview(filmId, rating, comment));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFormHandling);
};

export default withFormHandling;
