#!/usr/bin/env bash
# test_dedalui.sh
#set -x

curl -w "\n" http://localhost:4173/api/searchAll
curl -w "\n" http://localhost:4173/api/search?letters="rry"
curl -w "\n" http://localhost:4173/api/perso?id="paul"
#curl -w "\n" http://localhost:4173/api/addi?numa="15"

#wget -S -qO- http://localhost:4173/api/searchAll
echo -e "\nend of test_dedalui.sh"
