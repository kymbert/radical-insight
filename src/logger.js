const path = require("path");
const winston = require("winston");
const { format } = require("logform");

const alignedWithTime = format.combine(
  format.timestamp(),
  format.align(),
  format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

const alignedWithColors = format.combine(
  format.colorize(),
  format.align(),
  format.printf(info => `${info.level}: ${info.message}`)
);

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, "logs/combined.log"),
      format: alignedWithTime,
      handleExceptions: false
    }),
    new winston.transports.File({
      filename: path.join(__dirname, "logs/error.log"),
      format: alignedWithTime,
      handleExceptions: true,
      level: "error"
    }),
  ]
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console({ format: alignedWithColors }));
}

module.exports = { logger: logger };
