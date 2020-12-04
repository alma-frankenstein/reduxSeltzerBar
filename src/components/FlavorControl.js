import React from 'react';
import NewFlavorForm from './NewFlavorForm';
import FlavorList from './FlavorList';
import FlavorDetail from './FlavorDetail';

class FlavorControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,  
      masterFlavorList: [{name: "Durian", brand: "Bubbeh's Bubbles", price: "2", description: "A delicacy in Singapore",
                        quantity: 124}, {name: "PB&J", brand: "Double Bubble", price: "1", description: "Tastes like your favorite sandwhich",
                        quantity: 124}], 
      selectedFlavor: null
    };
  }

  handleChangingSelectedFlavor = (id) => {
    const selectedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    this.setState({selectedFlavor: selectedFlavor});
  }

  handleAddingNewFlavorToList = (newFlavor) => {
    const newMasterFlavorList = this.state.masterFlavorList.concat(newFlavor);
    this.setState({masterFlavorList: newMasterFlavorList,
                  formVisibleOnPage: false });
  }

  handleSell = (id) => {
    const newMasterFlavorList = this.state.masterFlavorList;
    newMasterFlavorList.map((flavor) => {
      if(flavor.id === id && flavor.quantity > 0) {
        flavor.quantity -= 1;
      } else if (flavor.id === id && flavor.quantity === 0) {
        flavor.quantity = "no more left";
      }
      return flavor;
    });
    this.setState({masterFlavorList: newMasterFlavorList});

  }

  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedFlavor: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedFlavor != null){
      currentlyVisibleState = <FlavorDetail flavor = {this.state.selectedFlavor} />
      buttonText = "return to flavor list";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewFlavorForm onNewFlavorCreation={this.handleAddingNewFlavorToList} />;
      buttonText = "return to flavor list";
    } else {
      currentlyVisibleState = <FlavorList flavorList = {this.state.masterFlavorList} onFlavorSelection= {this.handleChangingSelectedFlavor} onSellFlavor={this.handleSell} />
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

export default FlavorControl;