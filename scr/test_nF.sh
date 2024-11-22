#!/usr/bin/env bash
# test_nF.sh
#set -x

curl -w "\n" http://localhost:3000
curl -w "\n" http://localhost:3000/two

#wget -S -qO- http://localhost:3000/two
echo -e "\nend of test_nF.sh"
