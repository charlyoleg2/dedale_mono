#!/usr/bin/env node
// js_request_nA.js

const url = 'http://localhost:3000/api/searchAll';
console.log(`fetch url: ${url}`);
const res = await fetch(url, { method: "GET", headers: { "Origin": "http://localhost:4173" }, mode: "cors" });
console.log('res:');
console.log(res);
if (res.ok) {
	const resp = await res.json();
	console.log('resp:');
	console.log(resp);

} else {
	console.log('dbg239: response is not ok');
	console.log(res);
}
