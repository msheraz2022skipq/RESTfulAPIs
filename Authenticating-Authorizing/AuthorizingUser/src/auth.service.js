const axios = require('axios');
const config = require("../config");

// function to get the access token
function getGithubAccessToken(code, done) {
  const body={
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    code
  };
   const opts = { headers: {accept: 'application/json'} }
  axios.post('http://github.com/login/oauth/access_token',body,opts).then(response=>response.data.access_token)
  .then(token=>{
    done(null,token)
  }).catch((err)=>{
    done(err)
  })
}


// Function to get the user profile for the token provided
function getAccessTokenOfUser(token, done) {
  // Github APIs are authenticated and we have to share the token in headers
  // The token is same as what we recieved in the previous step
  
}

module.exports = {
  getGithubAccessToken,
  getAccessTokenOfUser
}



