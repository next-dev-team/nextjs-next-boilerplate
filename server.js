const { createServer } = require('http');
const next = require('next');
const {
  queryParserMiddleware,
  launchEditorMiddleware,
} = require('react-dev-inspector/plugins/webpack');

const dev = process.env.NODE_ENV !== 'production';
const PORT = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    /**
     * middlewares, from top to bottom
     */
    const middlewares = [
      /**
       * react-dev-inspector configuration two middlewares for nextjs
       */
      queryParserMiddleware,
      launchEditorMiddleware,

      /** Next.js default app handle */
      (req, res) => handle(req, res),
    ];

    const middlewarePipeline = middlewares.reduceRight(
      (next, middleware) => () => {
        middleware(req, res, next);
      },
      () => {},
    );

    middlewarePipeline();
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.debug(`> Ready on http://localhost:${PORT}`);
  });
});
