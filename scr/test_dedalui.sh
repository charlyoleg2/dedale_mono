#!/usr/bin/env bash
# test_dedalui.sh
#set -x

curl -w "\n" http://localhost:4173/api/search
curl -w "\n" http://localhost:4173/api/product?id="paul"

#wget -S -qO- http://localhost:3000/two
echo -e "\nend of test_dedalui.sh"
