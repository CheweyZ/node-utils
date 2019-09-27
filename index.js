const https = require("https")
const http = require("http")

/**
 * 
 * @param {Array<T>} arr
 * @returns {T}
 * @template T 
 */
function randomElement(arr) {
    return arr[randomInt(0, arr.length)]
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max
 * @returns {Number} 
 */
function randomFloat(min, max) {
    return min + ((max - min) * Math.random())
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max
 * @returns {Number} 
 */
function randomInt(min, max) {
    return Math.floor(randomFloat(min, max))
}

/**
 * 
 * @param {String} str
 * @returns {String} 
 */
function capitalize(str) {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * Resolves first promise to complete
 * Rejects if all fail
 * @param {Promise<T>} promises
 * @returns {Promise<T>}
 * @template T 
 */
function promiseAny(promises) {
    return promiseReverse(Promise.all([...promises].map(promiseReverse)));
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
    const chunked_arr = new Array(Math.ceil(array.length / size));
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