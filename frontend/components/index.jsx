var React = require('react');
var BenchStore = require('../stores/bench');


var Index = React.createClass({
  getInitialState: function(){
    return({benches: BenchStore.all()});
  },
  componentDidMount: function(){
    this.benchStoreListener = BenchStore.addListener(this.updateBenches);

  },
  componentWillUnmount: function() {
    this.benchStoreListener.remove();
  },

  updateBenches: function(){
    this.setState({benches: BenchStore.all()});
  },
  render: function (){
    var benches = this.state.benches.map(function(bench, idx){
      return (
        <ul className='bench-list-item' key={idx}>{idx + 1}
          <li>{bench.description}</li>
          <li>Seats: {bench.seating}</li>
          <li>{bench.lat}</li>
          <li>{bench.lng}</li>
        </ul>
      );
    });

    return <div className='benches'>{benches}</div>
  }


});

module.exports = Index;
