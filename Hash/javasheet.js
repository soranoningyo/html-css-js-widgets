/*global console,window */ ///sora/.exec(hash)
var hash = window.location.hash.substring(1);

if (/sora/.exec(hash) === null) { // null make tostring stopping ,so i checked it first
	console.log('bad');
} else if (/sora/.exec(hash).toString() === 'sora') {
	console.log('good');
}
