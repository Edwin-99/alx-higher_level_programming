#!/usr/bin/node
const size = parseInt(process.argv[2]);

if (size >= 0) {
    for (let x = 0; x < size; x++) {
	console.log('X'.repeat(size));
    }
} else {
    console.log('Missing size');
}
