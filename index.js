module.exports = {
  validate: function(version, extended) {
    if (typeof version !== "string")
      return false;

    if (extended === undefined)
      extended = false;

    var _v = version.split('.');

    if (_v.length !== 3)
      return false;

    if (extended) {
      var res = _v[2].split('-');

      if (res.length ===2) {
        if (res[1] === '') {
          return false;
        } else if (!res[1].match(/^[a-zA-Z0-9]+$/)) {
          return false;
        } else {
          // Add the final number to the results array
          _v[2] = res[0];
        }
      } else if(res.length !== 1) {
        return false;
      }
    }

    for (var i = 0; i < _v.length; i++) {
      var n = parseInt(_v[i]);
      if (isNaN(n) || String(n).length !== _v[i].length) {
        return false;
      }
    }

    return true;
  }
};
