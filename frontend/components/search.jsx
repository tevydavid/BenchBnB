var React = require('react'),
    Map = require('./map'),
    Index = require('./index'),
    ApiUtil = require('../util/api_util'),
    FilterParams = require('./filter_params'),
    FilterParamsStore = require('../stores/filter_params');


var Search = React.createClass({

  getInitialState: function(){
    return (
      {filterParams: FilterParamsStore.all()}
    )
  },
  getNewParams: function(){
    this.setState({filterParams: FilterParamsStore.all()})
    ApiUtil.fetchBenches(this.state.filterParams);
  },

  componentDidMount: function(){
    this.paramListener = FilterParamsStore.addListener(this.getNewParams);
  },

  componentWillUnmount: function(){
    this.paramListener.remove();
  },

  clickMapHandler: function(coords){
    this.props.history.pushState(null, '/benches/new', coords);
  },

  render: function(){
    return (
      <div>
        <Map clickMapHandler={this.clickMapHandler}/>
        <FilterParams/>
        <Index/>
      </div>
    );
  }



});

module.exports = Search;
