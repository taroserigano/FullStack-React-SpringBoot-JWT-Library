export const oktaConfig = {
    clientId: '0oa7mzk48v0l4S6Vj5d7',
    issuer: 'https://dev-29252623.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}