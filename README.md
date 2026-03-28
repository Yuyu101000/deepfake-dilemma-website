# Deepfake Dilemma Website

Presentation app for the Deepfake Dilemma final project, with a lightweight Node backend so it can be deployed to a public URL.

## Run locally

From this folder:

```bash
npm start
```

Then open `http://localhost:8000`.

## Backend endpoints

- `GET /api/health` returns a simple deployment health response
- `GET /api/meta` returns basic project metadata

## Project files

- `index.html` contains the app shell
- `styles.css` contains the visual system and responsive layout
- `app.js` contains the content model and rendering logic
- `server.js` serves the app and basic backend endpoints
- `package.json` defines the start command for local run and deployment
- `assets/` contains the video and defendant images
- `docs/` contains the project source documents in both text and Word formats

## Share it with a link

This app is now ready to deploy on hosts that support Node apps, such as Render, Railway, or Fly.io.
After you upload this folder to GitHub, you can connect the repo to one of those services and use:

- build command: none
- start command: `npm start`

### Fastest path: Render

1. Create a new GitHub repository and upload this project.
2. Go to Render and choose `New +` -> `Blueprint`.
3. Connect your GitHub repo.
4. Render will detect [render.yaml](/Users/yuvalshilon/Desktop/Deepfake%20Dillema%20App%20/render.yaml) automatically.
5. Click deploy.
6. After deployment finishes, Render will give you a public URL you can share.

### What is already set up

- [server.js](/Users/yuvalshilon/Desktop/Deepfake%20Dillema%20App%20/server.js) serves the full website
- `/api/health` is ready for deployment health checks
- [render.yaml](/Users/yuvalshilon/Desktop/Deepfake%20Dillema%20App%20/render.yaml) is ready for Render
- [package.json](/Users/yuvalshilon/Desktop/Deepfake%20Dillema%20App%20/package.json) already uses `npm start`
