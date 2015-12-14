var ApiActions = require('../actions/api_actions')


ApiUtil = {
  fetchBenches: function(mapBoarders){
    $.ajax({
      url: 'api/benches',
      type: 'GET',
      data: {bounds: mapBoarders},
      success: function(benches){
        ApiActions.receiveAll(benches);
      }
    })
  },

  createBench: function(bench){
    $.ajax({
      url: 'api/benches',
      type: 'POST',
      data: {bench: bench},
      success: function(bench){
        ApiActions.receiveBench(bench);
      }
    })
  }
}

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
