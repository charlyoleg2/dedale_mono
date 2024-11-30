#!/usr/bin/env bash
# test_nA.sh
#set -x

curl -w "\n" http://localhost:3000/api
curl -w "\n" http://localhost:3000/api/two?nama="bobo"
curl -w "\n" http://localhost:3000/api/addi?numa="20"
curl -w "\n" http://localhost:3000/api/search
curl -w "\n" http://localhost:3000/api/product?id="paul"

#wget -S -qO- http://localhost:3000/two
echo -e "\nend of test_nA.sh"
