require ('./util/api_util')
require ('./stores/bench')

var ReactDOM = require('react-dom'),
    React = require('react'),
    Search = require('./components/search'),
    ReactRouter = require('react-router'),
    root = document.getElementById('content'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    BenchForm = require('./components/bench_form');

window.ReactRouter = require('react-router')

  var App = React.createClass({
    render: function(){
      return (
          <div>
            <header><h1>Bench BnB</h1></header>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Search}/>
        <Route path="benches/new" component={BenchForm}/>
      </Route>
  );

  // ReactDOM.render(<Router>{routes}</Router>, root);

document.addEventListener('DOMContentLoaded', function (){
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('content')
  );
});
