function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function name() {
        console.log("hello");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("hello");
    };
}