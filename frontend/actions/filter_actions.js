var AppDispatcher = require('../dispatcher/dispatcher');



FilterActions = {
  receiveNewFilterParams: function(filterParams){
    AppDispatcher.dispatch({
      actionType: 'FILTER_PARAMS_RECEIVED',
      filterParams: filterParams
    });
  }
}

module.exports = FilterActions;
