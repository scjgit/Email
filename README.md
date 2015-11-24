# Email Module

###How to run the application

1. Open terminal/git bash
2. Checkout the git repository : https://github.com/scjgit/Email.git
3. execute ```npm install```
4. execute ```bower install```
5. execute ```gulp web``` or ``` node myServer.js``
6. Access : http://localhost:3000/

Note: 
1. Update the email info in the config file for sending mails.

Configuring Gmail account
1. You can configure OAuth2 with NodeMailer to use it with Gmail
	nodemailer supports XOAUTH2 authentication protocol. To use this you need to obtain a Client ID and a Client Secret from Google API Console (Open "API Access" and create "Client ID for web applications") and then request a refresh token for an user.
(more info)[http://adilapapaya.com/docs/nodemailer/#xoauth2]
	
2. or you can follow these steps https://www.google.com/settings/security/lesssecureapps (not recommended) or you can change to another email priveder (Hotmail, Yahoo,etc). But the problem can't be solved as it is.
