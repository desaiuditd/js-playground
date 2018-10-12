const express = require( 'express' );
const wpHooks = require( '@wordpress/hooks' );

const app = express();
app.hooks = wpHooks.createHooks();

console.log(app.prototype);

const app2 = express();

console.log( app2.prototype );