#!/usr/bin/env bash

java -jar ./etc/selenium-server-standalone-3.141.59.jar -role hub &
java -jar ./etc/selenium-server-standalone-3.141.59.jar -role node -hub http://localhost:4444/wd/hub &
