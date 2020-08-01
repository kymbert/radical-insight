#!/usr/bin/env bash

npx eslint . \
  --ext .js \
  --config .eslintrc.js \
  --ignore-pattern client \
  --ignore-pattern node_modules
  # --format codeframe \
  # --no-color \
  # --output-file reports/eslint/server.txt
npx eslint client \
  --ext .js \
  --config client/.eslintrc.js \
  --ignore-pattern build \
  --ignore-pattern node_modules
  # --format codeframe \
  # --no-color \
  # --output-file reports/eslint/client.txt
