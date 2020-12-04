import React from "react";
import PropTypes from "prop-types";

function Flavor(props) {

  return (

    <React.Fragment>
      <div onClick = {() => props.whenFlavorClicked(props.id)}>
        <h3> {props.name} </h3>
        <p> * {props.description} * </p>
        <p> Price: ${props.price} per pint </p>
        <p> Amount left: {props.quantity} pints </p>
       </div>
      <div>
       <button onClick = {() => props.whenSellClicked(props.id)}> Sell a pint </button>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Flavor.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.string,
  brand: PropTypes.string,
  id: PropTypes.string,
  whenFlavorClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
};

export default Flavor;