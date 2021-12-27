This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the app

Make sure you have VLC installed. It needs to be a recent enough version, such that it can be interacted with using the cli.

Make sure port 3000 is available

Run the following commands in two different terminal windows:

```bash
yarn dev
yarn run vlc
```

Identify your IP address in your OS's network settings.

On your mobile device, go to `http://[your_ip_address_here]:3000`.

## TODOs

- Add a play/pause button from the playlist
- Add a drag and drop experience to reorder playlist items

## Project structure

The app relies on VLC running with an HTTP interface.

The web app controls VLC through its HTTP interface. The API calls that interact with VLC are in [`pages/api/vlc`](./pages/api/vlc).

The web client does not interact with the HTTP interface directly because the mobile browsers I have tried did not work with basic auth, and the VLC interface requires a password to connect. Since the password cannot be provided by mobile clients, the web app's server acts as a proxy and provides the password (hardcoded as "asdf" 🎉)
