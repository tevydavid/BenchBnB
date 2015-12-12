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
  }
}

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
