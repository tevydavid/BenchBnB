var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants');

var _filterParams = {};

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.all = function(){
  return _filterParams;
}

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'FILTER_PARAMS_RECEIVED':
      FilterParamsStore.updateParams(payload.filterParams)
  }
}


FilterParamsStore.updateParams = function(params){
  _filterParams = $.extend(_filterParams, params);
  FilterParamsStore.__emitChange();
}




module.exports = FilterParamsStore;
