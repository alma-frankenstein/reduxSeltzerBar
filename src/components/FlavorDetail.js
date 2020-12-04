import React from "react";
import PropTypes from "prop-types";

function FlavorDetail(props) {
  const { flavor } = props;

  return (
    <React.Fragment>
      <h3>Details About:</h3>
      <h1>{flavor.name} flavored seltzer</h1>
      <h2>{flavor.description}</h2>
      <p>Brand: {flavor.brand}</p>
      <p>${flavor.price} per pint</p>
      <hr />
    </React.Fragment>
  );
}

FlavorDetail.propTypes= {
  flavor: PropTypes.object,
};

export default FlavorDetail;