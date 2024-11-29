#!/usr/bin/env bash
# test_nA.sh
#set -x

curl -w "\n" http://localhost:3000
curl -w "\n" http://localhost:3000/two?nama="bobo"
curl -w "\n" http://localhost:3000/addi?numa="20"
curl -w "\n" http://localhost:3000/list
curl -w "\n" http://localhost:3000/product?id="paul"

#wget -S -qO- http://localhost:3000/two
echo -e "\nend of test_nA.sh"
