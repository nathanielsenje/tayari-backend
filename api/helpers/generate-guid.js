module.exports = {
  friendlyName: 'Generate GUID',
  description: 'Generate a new GUID/UUID v4.',
  sync: true, // This helper is synchronous

  fn: function (inputs, exits) {
    const { v4: guid } = require('uuid');
    return exits.success(guid());
  }
};
