import React from "react";
import Flavor from "./Flavor";
import PropTypes from "prop-types";

function FlavorList(props) {
  return (
    <React.Fragment>
      <hr/>
      <h3>Select a flavor, or add a new flavor!</h3>
      <h3>Click on the name of a flavor to see its details</h3>
      <hr/>

      {props.flavorList.map((flavor) =>
        <Flavor 
        whenFlavorClicked = { props.onFlavorSelection }
        whenSellClicked = { props.onSellFlavor }
        name={flavor.name}
        description={flavor.description}
        quantity = {flavor.quantity}
        price = {flavor.price}
        brand = {flavor.brand}
        id = {flavor.id}
        key = {flavor.id} />
        )}

    </React.Fragment>
  );
}

FlavorList.propTypes= {
  flavorList: PropTypes.array,
  onFlavorSelection: PropTypes.func,
  onSellFlavor: PropTypes.func
};

export default FlavorList;