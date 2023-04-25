# SSL Certificates

The two SSL certificates in the `/config` folder are used when running the `https` node server on `localhost`.
They do not point to any external FQDN, and are merely there for testing purposes.
Normally, one will run the web app locally without SSL using the `http` flag:

```
npmt run start http
```

The certificates are loaded In `src/server/server.ts`:

```
const options = {
    key: fs.readFileSync('./config/key.local.pem'),
    cert: fs.readFileSync('./config/cert.local.pem')
};
this.server = https.createServer(options, app);
```
