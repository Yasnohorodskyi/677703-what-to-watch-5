import React, {PureComponent} from "react";

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

  return WithFormHandling;
};


export default withFormHandling;
