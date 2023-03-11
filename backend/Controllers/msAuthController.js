import msal from "@azure/msal-node"
import request from "request";
const REDIRECT_URI = "http://localhost:5000/auth/microsoft/redirect";
const clientID = process.env.MICROSOFT_GRAPH_CLIENT_ID;
const tenantID = "https://login.microsoftonline.com/" + process.env.MICROSOFT_GRAPH_TENANT_ID;
const clientSecret = process.env.MICROSOFT_GRAPH_CLIENT_SECRET;
const config = {
  auth: {
    clientId: clientID,
    authority: tenantID,
    clientSecret: clientSecret
},

    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Warning,
        }
    }
};

// Create msal application object
const pca = new msal.ConfidentialClientApplication(config);

const microsoftLogin = (req,res) => {
  const authCodeUrlParameters = {
      scopes: ["user.read"],
      redirectUri: REDIRECT_URI,
  };

  // get url to sign user in and consent to scopes needed for application
  pca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
    // console.log({response});
      res.redirect(response);
  }).catch((error) => console.log(JSON.stringify(error)));
};

const microsoftLoginRedirect = (req,res) => {
  const tokenRequest = {
      code: req.query.code,
      scopes: ["user.read"],
      redirectUri: REDIRECT_URI,
  };

  pca.acquireTokenByCode(tokenRequest).then( async (response) => {
      // console.log("\nResponse: \n:", response);
      request.get({
        url:"https://graph.microsoft.com/v1.0/me",
        headers: {
          "Authorization": "Bearer " + response.accessToken
        }
    },function(err, resp, body) {
      // console.log("here");
      if(err){
        console.log(err);
        res.render('authSuccessView.ejs',{userInfo : "ERROR OCCURED"});
        return;
      }
      const userInfo = JSON.parse(body);
      // console.log({userInfo});
      const userInfoString = `${userInfo["displayName"]}/${userInfo["mail"]}/${userInfo["surname"]}/${userInfo["id"]}`;
      // console.log({userInfoString});
    //   res.render('authSuccessView.ejs',{userInfo : userInfoString});
    res.status(200).json({user:userInfoString.split("/")});
    });
  }).catch((error) => {
      console.log(error);
      res.status(500).send(error);
  });
}

export {microsoftLogin, microsoftLoginRedirect}