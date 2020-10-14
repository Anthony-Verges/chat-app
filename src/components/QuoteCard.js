import React from 'react';
import PropTypes from 'prop-types';


class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online : this.props.isConnect,
    };
  }
  render() {
    return (
      <div className="Contact">
      <img className="avatar" src={this.props.image} alt="Avatar" />
      <div>
        <h4 className="name">{this.props.name}</h4>
        <div className="status">
          <span className={this.state.online ? "status-online" : "status-offline" }
                onClick = {event => {
                  const newStatus = !this.state.online;
                  this.setState({ online: newStatus})
                }}
          >
          </span>
          <p className="status-text" 
             onClick = {event => {
               const newStatusText = !this.state.online;
               this.setState({ online: newStatusText})
             }}
          >{this.state.online ? "onLine" : "offLine"}
          </p>
        </div>
      </div>
    </div>
    );
  }
}


  QuoteCard.propTypes = {
    name : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    isConnect : PropTypes.bool.isRequired,

  };
export default QuoteCard;
