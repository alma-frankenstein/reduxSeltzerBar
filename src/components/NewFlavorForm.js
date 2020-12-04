import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewFlavorForm(props){

    function handleNewFlavorFormSubmission(event) {
      event.preventDefault();
      props.onNewFlavorCreation({name: event.target.name.value, description: event.target.description.value, quantity: "124", 
        brand: event.target.brand.value, price: event.target.price.value, id: v4()});
    }

  return(
    <React.Fragment>
      <form onSubmit={handleNewFlavorFormSubmission}>
        <div>
        <input 
          type='text'  
          name='name'
          placeholder='Flavor name' />
          </div>
          <div>
        <input 
          type='text'
          name='description'
          placeholder='description' />
          </div>
          <div>
          <input 
          type='text'
          name='brand'
          placeholder='brand' />
          </div>
          <div>
          <input 
          type='text'
          name='price'
          placeholder='price' />
          </div>
        <div><button type='submit'> Add Flavor </button></div>
      </form>
    </React.Fragment>
  );
}

NewFlavorForm.propTypes = {
  onNewFlavorCreation: PropTypes.func
};

export default NewFlavorForm;