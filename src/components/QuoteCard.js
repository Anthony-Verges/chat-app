import React from 'react';
import PropTypes from 'prop-types';

const QuoteCard = ({ image, name, isConnect }) => (
    <div className="Contact">
      <img className="avatar" src={image} alt="Avatar" />
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          <span className={isConnect ? "status-online" : "status-offline" }></span>
          <p className="status-text">{isConnect ? "onLine" : "offLine"}</p>
        </div>
      </div>
    </div>
  )

export default QuoteCard;
