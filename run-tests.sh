#!/bin/bash
chromedriver &
WEBDRIVER_PID=$!
gagarin
kill $WEBDRIVER_PID
