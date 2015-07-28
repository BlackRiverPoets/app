#!/bin/bash
set -e

chromedriver &
WEBDRIVER_PID=$!
gagarin
kill $WEBDRIVER_PID
