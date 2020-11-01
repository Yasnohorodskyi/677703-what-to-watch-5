import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tab from "../tab/tab.jsx";


class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.labels[0],
    };
  }

  render() {
    const {
      labels,
      children,
    } = this.props;

    const getActiveClass = (label) => this.state.activeTab === label ? `movie-nav__item--active` : ``;
    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {labels.map((label, index) => {
              return (
                <Tab
                  key={`tab-${index}`}
                  label={label}
                  className={`movie-nav__item ${getActiveClass}`}
                  onTabClick={(currentLabel) => {
                    this.setState({activeTab: currentLabel});
                  }}
                  activeTab={this.state.activeTab}
                />
              );
            })}
          </ul>
        </nav>

        {this.state.activeTab === labels[0] && children[0]}
        {this.state.activeTab === labels[1] && children[1]}
        {this.state.activeTab === labels[2] && children[2]}
      </React.Fragment>
    );
  }
}

Tabs.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Tabs;

