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
      selectedFlavor: null
    };
  }

  handleChangingSelectedFlavor = (id) => {
    const selectedFlavor = this.props.masterFlavorList[id];
    this.setState({selectedFlavor: selectedFlavor})
  }

  handleAddingNewFlavorToList = (newFlavor) => {
    const { dispatch } = this.props;
    const action = a.addFlavor(newFlavor);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleSell = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: c.BUY,
      id: id
    }
    dispatch(action);
  }

  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        selectedFlavor: null
      });
    } else {
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