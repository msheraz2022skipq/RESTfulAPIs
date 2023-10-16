const express = require('express')
const config = require("./config");
const app = express();
const authRouter = require("./authentication");
const dateFormat = require('date-format');
const morgan = require('morgan');

const userRouter = require('./Users')
const verifyAuth = require('./authentication/authMiddleware')


morgan.token('time', () => dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date())); // Both morgan and log4js are configured to same date format, so that log reading is meaningful and not confusing due to different date formats
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use('/users', verifyAuth, userRouter)

const server = app.listen(config.PORT, () => {
  console.log('Listening on port', config.PORT);
});

module.exports = server;