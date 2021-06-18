import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Routes } from '../routes';
import App from '../index';

import fs from 'fs';
import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

// Link Static Build
app.use(express.static('./build'));

// Route for Main Index
app.get('/*', (req, res) => {
  let promise;
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};
  if (currentRoute.loadData) {
    promise = currentRoute.loadData();
  } else {
    promise = Promise.resolve(null);
  }
  promise.then(data => {
    const context = { data };
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error:', err);
        return res.status(500).send('Unable to render build');
      }
      if (context.status === 404) {
        res.status(404);
      }
      if (context.url) {
        return res.redirect(301, context.url);
      }
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
