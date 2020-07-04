//@ts-check
const https = require("https")
const http = require("http")

/**
 * Returns a random element from the array
 * @param {Array<T>} arr
 * @returns {T}
 * @template T 
 */
function randomElement(arr) {
    return arr[randomInt(0, arr.length - 1)]
}

/**
 * Returns a float inclusive of the bounds
 * @param {Number} min 
 * @param {Number} max
 * @returns {Number} 
 */
function randomFloat(min, max) {
    return min + ((max - min) * Math.random())
}

/**
 * Returns a random int inclusive of bounds
 * @param {Number} min 
 * @param {Number} max
 * @returns {Number} 
 */
function randomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

/**
 * 
 * @param {String} str
 * @returns {String} 
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Resolves first promise to complete
 * Rejects if all fail
 * @param {Array<Promise<T>>} promises
 * @returns {Promise<T>}
 * @template T 
 */
function promiseAny(promises) {
    return new Promise((res, rej) => {
        // Flip promise all so reject is valid and resolves first
        // (Cant use generic reverse as promise.all type is Promise<T[]> which is invalid in this case)
        Promise.all(promises.map(promiseReverse)).then(rej, res)
    });
}

/**
 * Source: https://github.com/m0ppers/promise-any (Saves npm dep)
 * @param {Promise<T>} promise
 * @returns {Promise<T>}
 * @template T 
 * @private
 */
function promiseReverse(promise) {
    return new Promise((resolve, reject) => Promise.resolve(promise).then(reject, resolve));
}


/**
 * Break array into chunks of x size
 * @param {Array<T>} array 
 * @param {Number} size
 * @returns {Array<Array<T>>} 
 * @template T
 */
function arrayChunk(array, size) {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
    }
    return chunked_arr;
}

/**
 * 
 * @param {String} url 
 * @param {String} path 
 * @param {import("http").OutgoingHttpHeaders} headers 
 * @param {Function} callback 
 * @param {Boolean} encode 
 */
function httpsGetCB(url, path, headers, callback, encode = true) {
    try {
        return https.get({
            host: url,
            path: (encode ? encodeURI(path) : path),
            headers
        }, function (response) {
            // Continuously update stream with data
            var body = '';
            response.on('data', function (d) {
                body += d;
            });
            response.on('end', function () {
                let parsed;
                try {
                    parsed = JSON.parse(body);
                } catch (e) {
                    parsed = body;
                }

                callback(parsed);
            });
        });
    } catch (e) {
        console.log(e)
    }
}

/**
 * A Promise based https get
 * @param {String} url 
 * @param {String} path 
 * @param {import("http").OutgoingHttpHeaders} headers 
 * @param {Boolean} encode
 * @returns {Promise<Object>} 
 */
function httpsGet(url, path, headers, encode = true) {
    return new Promise((resolve, reject) => {
        httpsGetCB(url, path, headers, (body) => {
            return resolve(body)
        }, encode)
    })
}

/**
 * 
 * @param {String} url 
 * @param {String} path 
 * @param {import("http").OutgoingHttpHeaders} headers 
 * @param {Function} callback 
 * @param {Boolean} encode 
 */
function httpGetCB(url, path, headers, callback, encode = true) {
    try {
        return http.get({
            host: url,
            path: (encode ? encodeURI(path) : path),
            headers
        }, function (response) {
            // Continuously update stream with data
            let body = '';
            response.on('data', function (d) {
                body += d;
            });
            response.on('end', function () {
                let parsed;
                try {
                    parsed = JSON.parse(body);
                } catch (e) {
                    parsed = body;
                }

                callback(parsed);
            });
        });
    } catch (e) {
        console.log(e)
    }
}

/**
 * A Promise based http get
 * @param {String} url 
 * @param {String} path 
 * @param {import("http").OutgoingHttpHeaders} headers 
 * @param {Boolean} encode
 * @returns {Promise<Object>} 
 */
function httpGet(url, path, headers, encode = true) {
    return new Promise((resolve, reject) => {
        httpGetCB(url, path, headers, (body) => {
            return resolve(body)
        }, encode)
    })
}

module.exports = {
    randomElement,
    randomInt,
    randomFloat,
    capitalize,
    promiseAny,
    arrayChunk,
    httpsGet,
    httpsGetCB,
    httpGet,
    httpGetCB
}