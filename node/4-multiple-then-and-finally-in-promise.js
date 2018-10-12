const promiseFinally = require( 'promise.prototype.finally' );

// Add `finally()` to `Promise.prototype`
// This is because Node 8.11 does not support finally.
promiseFinally.shim();

function getPromise() {
    const promise = new Promise( function ( resolve, reject ) {
        resolve(1);
    } );
    
    promise
        .then( data => console.log( 'inside getPromise then', data ) )
        .finally( () => { console.log( 'inside getPromise finally' ) } );
        
    return promise;
}

getPromise()
    .then( data => console.log( 'external then', data ) )
    .finally( () => { console.log( 'external finally' ) } );