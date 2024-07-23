# Trivial Conspiracies
## A Film by Sam Dellert

This is a React website that presents Sam Dellert's film, Trivial Conspiracies, in several parts.

To run the application:
```npm run start```

Then navigate to:
```localhost:3000```

This application is deployed on Google Cloud Platform.

Before deploying, make sure the GCP CLI is set to Trivial Conspiracies.

Useful commands:
- Get current project: `gcloud config get-value project`
- Get list of projects: `gcloud projects list`
- Change project to Trivial Conspiracies: `gcloud config set project trivial-conspiracies`

Run `npm run build` before deploying. Otherwise, changes will not be reflected.

Then run `gcloud app deploy`
