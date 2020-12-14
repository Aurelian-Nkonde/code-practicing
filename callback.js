const message = function() {
    console.log("This message is shown after 3 seconds");
}

setTimeout(message, 3000);




// promise syntax look like this
new Promise(function (resolve, reject) { ... } );
const myPromise = new Promise();
