import React from 'react';
import NewFlavorForm from './NewFlavorForm';
import FlavorList from './FlavorList';
import FlavorDetail from './FlavorDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import * as c from '../actions/ActionTypes';

class FlavorControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,  
      // commented per lesson 12:
      // masterFlavorList: [{name: "Durian", brand: "Bubbeh's Bubbles", price: "2", description: "A delicacy in Singapore",
      //                   quantity: 124}, {name: "PB&J", brand: "Double Bubble", price: "1", description: "Tastes like your favorite sandwhich",
      //                   quantity: 124}], 
      selectedFlavor: null
    };
  }

  handleChangingSelectedFlavor = (id) => {
    // const selectedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    // this.setState({selectedFlavor: selectedFlavor});
    const selectedFlavor = this.props.masterFlavorList[id];
    this.setState({selectedFlavor: selectedFlavor})
  }

  handleAddingNewFlavorToList = (newFlavor) => {
    // ____________old code, pre lesson 12___________
    // const newMasterFlavorList = this.state.masterFlavorList.concat(newFlavor);
    // this.setState({masterFlavorList: newMasterFlavorList,
    //               formVisibleOnPage: false });
    // -------------------------------------------------------
    const { dispatch } = this.props;
    //const { name, brand, price, description, quantity, id } = newFlavor;
    const action = a.addFlavor(newFlavor);
    // {
    //   type: c.ADD_FLAVOR,
    //   name: name,
    //   brand: brand,
    //   price: price,
    //   description: description,
    //   quantity: quantity,
    //   id: id
    // }
    dispatch(action);
    //this.setState({formVisibleOnPage: false});
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleSell = (id) => {
    //---------------------before adding c.BUY in flavor-list-reducer-----------
    // const newMasterFlavorList = this.props.masterFlavorList;
    // newMasterFlavorList.map((flavor) => {
    //   if(flavor.id === id && flavor.quantity > 0) {
    //     flavor.quantity -= 1;
    //   } else if (flavor.id === id && flavor.quantity === 0) {
    //     flavor.quantity = "no more left";
    //   }
    //   return flavor;
    // });
    //-----------------------------------------------------------------
    const { dispatch } = this.props;

    const action = {
      type: c.BUY,
      id: id
    }
    dispatch(action);
    //this.setState({masterFlavorList: masterFlavorList});
  }

    // // const selectedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    // // this.setState({selectedFlavor: selectedFlavor});
    // const selectedFlavor = this.props.masterFlavorList[id];
    // this.setState({selectedFlavor: selectedFlavor})

  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        //formVisibleOnPage: false,
        selectedFlavor: null
      });
    } else {
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedFlavor != null){
      currentlyVisibleState = <FlavorDetail flavor = {this.state.selectedFlavor} />
      buttonText = "return to flavor list";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewFlavorForm onNewFlavorCreation={this.handleAddingNewFlavorToList} />;
      buttonText = "return to flavor list";
    } else {
      currentlyVisibleState = <FlavorList flavorList = {this.props.masterFlavorList} onFlavorSelection= {this.handleChangingSelectedFlavor} onSellFlavor={this.handleSell} />
      buttonText= "Add flavor";
    }

    return (
      <React.Fragment>
        <div className="mainDiv">
          {currentlyVisibleState}
          <div className= "mainButton">
            <button className="btn" onClick={this.handleClick}>{buttonText}</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

FlavorControl.propTypes = {
  masterFlavorList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterFlavorList: state.masterFlavorList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

FlavorControl = connect(mapStateToProps)(FlavorControl);
export default FlavorControl;