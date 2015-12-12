var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util');

var Map = React.createClass({
  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    BenchStore.addListener(this.addMarkers);
    this.map.addListener('idle', function(){
          ApiUtil.fetchBenches(this.getRequestParams());
    }.bind(this));
  },

  getRequestParams: function(){
    var bounds = this.map.getBounds();
    return {
      northEast: {
        lat: bounds.getNorthEast().lat(),
        lng: bounds.getNorthEast().lng()
      },
      southWest: {
        lat: bounds.getSouthWest().lat(),
        lng: bounds.getSouthWest().lng()
      }
    };
  },

  addMarkers: function(){
    BenchStore.all().forEach(function (bench){
      new google.maps.Marker({
        position: bench,
        map: this.map,
        title: bench.description
      });
    }.bind(this));
  },

  render: function(){
    return(
      <div className='map' ref='map'></div>
    );
  }

});

module.exports = Map;
