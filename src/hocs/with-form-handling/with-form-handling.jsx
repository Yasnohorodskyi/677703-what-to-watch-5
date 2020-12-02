import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addReview} from "../../store/api-action.js";
import {PostStatus} from "../../const.js";
import {redirectToRoute} from "../../store/action.js";

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
        isFormDisabled: false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleReviewChange = this.handleReviewChange.bind(this);
      this.onSubmitCb = this.onSubmitCb.bind(this);
    }

    componentDidUpdate() {
      this.setSubmitActivity();
    }

    handleSubmit(evt) {
      evt.preventDefault();

      const {
        postCommentAction,
        filmId
      } = this.props;
      this.setState({isFormDisabled: true});
      postCommentAction(filmId, this.state.rating, this.state.reviewText, this.onSubmitCb);
    }

    setSubmitActivity() {
      const rating = this.state.rating;
      const text = this.state.reviewText;
      if (rating >= RATING_MIN && rating <= RATING_MAX &&
        text.length >= TEXT_MIN_LENGTH && text.length <= TEXT_MAX_LENGTH) {
        this.setState({isSubmitActive: true});
      } else {
        this.setState({isSubmitActive: false});
      }
    }

    onSubmitCb(postStatus) {
      if (postStatus === PostStatus.SUCCESS) {
        this.props.redirectAction(this.props.filmId);
      } else {
        this.setState({
          isFormDisabled: false,
        });
      }

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
          isFormDisabled={this.state.isFormDisabled}
        />
      );
    }
  }

  WithFormHandling.propTypes = {
    postCommentAction: PropTypes.func.isRequired,
    redirectAction: PropTypes.func.isRequired,
    filmId: PropTypes.number.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    postCommentAction(filmId, rating, comment, cb) {
      dispatch(addReview(filmId, rating, comment, cb));
    },
    redirectAction(id) {
      dispatch(redirectToRoute(`/films/${id}`));
    }
  });

  return connect(null, mapDispatchToProps)(WithFormHandling);
};

export default withFormHandling;
