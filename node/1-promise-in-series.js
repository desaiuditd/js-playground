// Promise returning functions to execute
function doFirstThing() { return Promise.resolve( 1 ); }  
function doSecondThing( res ) { return Promise.resolve( res + 1 ); }  
function doThirdThing( res ) { return Promise.resolve( res + 2 ); }  
function lastThing( res ) { console.log( 'result:', res ); }

var fnlist = [ doFirstThing, doSecondThing, doThirdThing, lastThing ];

// Execute a list of Promise return functions in series
function pseries( list ) {  
  var p = Promise.resolve();
  return list.reduce( ( pacc, fn ) => {
    return pacc = pacc.then(fn);
  }, p );
}

pseries( fnlist );
