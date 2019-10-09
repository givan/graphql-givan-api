const Request = require('request');
const UserAPiResponse = require('./UserApiResponse');

class UserApiClient {
  static createInstance() {
    return new UserApiClient(Request, 'https://randomuser.me/api');
  }

  constructor(request, uri) {
    this._request = request;
    this._apiUri = uri;
  }

  get(cb) {
    return new Promise((resolve, reject) => {
      this._request(this._apiUri, {json: true}, (err, res, body) => {
        if (err) {
          return reject(err);
        }

        const response = new UserAPiResponse(body);
        resolve(response); 
    });
    });
  }
}

module.exports = UserApiClient;