#!/usr/bin/env bash
# test_nA.sh
#set -x

curl -w "\n" http://localhost:3000/api
curl -w "\n" http://localhost:3000/api/two?nama="bobo"
curl -w "\n" http://localhost:3000/api/addi?numa="20"
curl -w "\n" http://localhost:3000/api/searchAll
curl -w "\n" http://localhost:3000/api/search?letters="aul"
curl -w "\n" http://localhost:3000/api/perso?id="paul"

#echo "analyze cors"
#echo "1:" && curl -v --request OPTIONS http://localhost:3000/api/searchAll
#echo "2:" && curl -v --request OPTIONS http://localhost:3000/api/searchAll -H 'Origin: http://localhost:4173'
#echo "3:" && curl -v --request OPTIONS http://localhost:3000/api/searchAll -H 'Origin: http://localhost:4173' -H 'Access-Control-Request-Method: GET'
#echo "4:" && curl -v http://localhost:3000/api/searchAll -H 'Origin: http://localhost:4173' -H 'Access-Control-Request-Method: GET'

#wget -S -qO- http://localhost:3000/two
echo -e "\nend of test_nA.sh"
