import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addReview} from "../../store/api-action.js";
import {getActiveItemId} from "../../store/selectors/selectors.js";

const RATING_MIN = 1;
const RATING_MAX = 5;
const TEXT_MIN_LENGTH = 50;
const TEXT_MAX_LENGTH = 400;

const withFormHandling = (Component) => {
  class WithFormHandling extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        rating: 0,
        isSubmitActive: false,
        isPostRequestSuccessed: false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleReviewChange = this.handleReviewChange.bind(this);
      this._onSubmitCb = this._onSubmitCb.bind(this);
    }

    componentDidUpdate() {
      this._setSubmitActivity();
    }

    handleSubmit(evt) {
      evt.preventDefault();

      const {
        postCommentAction,
        activeItemId
      } = this.props;

      postCommentAction(activeItemId, this.state.rating, this.state.reviewText, this._onSubmitCb);
    }

    _setSubmitActivity() {
      const rating = this.state.rating;
      const text = this.state.reviewText;
      if (rating >= RATING_MIN && rating <= RATING_MAX &&
        text.length >= TEXT_MIN_LENGTH && text.length <= TEXT_MAX_LENGTH) {
        this.setState({isSubmitActive: true});
      } else {
        this.setState({isSubmitActive: false});
      }
    }

    _onSubmitCb(isPosted) {
      this.setState({
        isPostRequestSuccessed: isPosted,
      });
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
          isSubmitActive={this.state.isSubmitActive}
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
    postCommentAction(filmId, rating, comment, cb) {
      dispatch(addReview(filmId, rating, comment, cb));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithFormHandling);
};

export default withFormHandling;
