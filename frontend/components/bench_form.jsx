var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../util/api_util');


var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return({
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng,
      description: "",
      numPeople: 2})
  },

  handleSubmit: function(e){
    e.preventDefault();
    ApiUtil.createBench(this.state);
    this.props.history.push("");
  },

  render: function(){

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Latitude:
          <input type='text' valueLink={this.linkState('lat')}/>
        </label>
        <br/>
        <label>Longitude:
          <input type='text' valueLink={this.linkState('lng')}/>
        </label>
        <br/>
        <label>Seating Capacity:
          <input type='number' min='1' max='8'valueLink={this.linkState('numPeople')}/>
        </label>
        <br/>
        <label>Description:
          <textarea valueLink={this.linkState('description')}></textarea>
        </label>
        <br/>
        <input type='submit' value='Submit'/>
      </form>
    );
  }

});


module.exports = BenchForm;
