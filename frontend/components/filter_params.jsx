var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    FilterActions = require('../actions/filter_actions');

var FilterParams = React.createClass({
  componentDidMount: function(){
    FilterActions.receiveNewFilterParams({minSeats: 0, maxSeats: 12})
  },
  
  updateMin: function(e){
    FilterActions.receiveNewFilterParams({minSeats: e.target.value})
  },

  updateMax: function(e){
    FilterActions.receiveNewFilterParams({maxSeats: e.target.value})
  },

  render: function(){
    return (
      <div>
        Min Seats: <input type='number' min='0' onChange={this.updateMin}/>
      Max Seats: <input type='number' max='12' onChange={this.updateMax}/>
      </div>
    )
  }

});

module.exports = FilterParams;
