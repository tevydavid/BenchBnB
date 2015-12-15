var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/bench'),
    FilterActions = require('../actions/filter_actions'),
    ApiUtil = require('../util/api_util');

var Map = React.createClass({
  markers: [],

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    var benchStoreListener = BenchStore.addListener(this.addMarkers);
    this.map.addListener('idle', function(){
          FilterActions.receiveNewFilterParams(this.getRequestParams());
    }.bind(this));
    this.map.addListener('click', function(e){
      var latLng = {lat: e.latLng.lat(), lng: e.latLng.lng()}
      this.props.clickMapHandler(latLng);
    }.bind(this));
  },
  componentWillUnmount: function(){
    benchStoreListener.remove();
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
    BenchStore.all().forEach(function (bench, idx){
      new google.maps.Marker({
        position: bench,
        map: this.map,
        label: (idx + 1).toString(),
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
