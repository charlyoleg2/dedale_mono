#!/usr/bin/env bash
# test_nZ.sh
#set -x

curl -w "\n" http://localhost:3010/api
curl -w "\n" http://localhost:3010/api/what?name="bobo"
curl -w "\n" http://localhost:3010/api/addi?num="20"

#wget -S -qO- http://localhost:3010/two
echo -e "\nend of test_nZ.sh"
