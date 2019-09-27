## Functions

<dl>
<dt><a href="#randomElement">randomElement(arr)</a> ⇒ <code>T</code></dt>
<dd></dd>
<dt><a href="#randomFloat">randomFloat(min, max)</a> ⇒ <code>Number</code></dt>
<dd></dd>
<dt><a href="#randomInt">randomInt(min, max)</a> ⇒ <code>Number</code></dt>
<dd></dd>
<dt><a href="#capitalize">capitalize(str)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#promiseAny">promiseAny(promises)</a> ⇒ <code>Promise.&lt;T&gt;</code></dt>
<dd><p>Resolves first promise to complete
Rejects if all fail</p>
</dd>
<dt><a href="#arrayChunk">arrayChunk(array, size)</a> ⇒ <code>Array.&lt;Array.&lt;T&gt;&gt;</code></dt>
<dd><p>Break array into chunks of x size</p>
</dd>
<dt><a href="#httpsGetCB">httpsGetCB(url, path, headers, callback, encode)</a></dt>
<dd></dd>
<dt><a href="#httpsGet">httpsGet(url, path, headers, encode)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>A Promise based https get</p>
</dd>
<dt><a href="#httpGetCB">httpGetCB(url, path, headers, callback, encode)</a></dt>
<dd></dd>
<dt><a href="#httpGet">httpGet(url, path, headers, encode)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>A Promise based http get</p>
</dd>
</dl>

<a name="randomElement"></a>

## randomElement(arr) ⇒ <code>T</code>
**Kind**: global function

| Param | Type |
| --- | --- |
| arr | <code>Array.&lt;T&gt;</code> |

<a name="randomFloat"></a>

## randomFloat(min, max) ⇒ <code>Number</code>
**Kind**: global function

| Param | Type |
| --- | --- |
| min | <code>Number</code> |
| max | <code>Number</code> |

<a name="randomInt"></a>

## randomInt(min, max) ⇒ <code>Number</code>
**Kind**: global function

| Param | Type |
| --- | --- |
| min | <code>Number</code> |
| max | <code>Number</code> |

<a name="capitalize"></a>

## capitalize(str) ⇒ <code>String</code>
**Kind**: global function

| Param | Type |
| --- | --- |
| str | <code>String</code> |

<a name="promiseAny"></a>

## promiseAny(promises) ⇒ <code>Promise.&lt;T&gt;</code>
Rejects if all failise to complete

**Kind**: global function

| Param | Type |
| --- | --- |
| promises | <code>Promise.&lt;T&gt;</code> |

<a name="arrayChunk"></a>

## arrayChunk(array, size) ⇒ <code>Array.&lt;Array.&lt;T&gt;&gt;</code>
Break array into chunks of x size

**Kind**: global function

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;T&gt;</code> |
| size | <code>Number</code> |

<a name="httpsGetCB"></a>

## httpsGetCB(url, path, headers, callback, encode)
**Kind**: global function

| Param | Type | Default |
| --- | --- | --- |
| url | <code>String</code> |  |
| path | <code>String</code> |  |
| headers | <code>http.OutgoingHttpHeaders</code> |  |
| callback | <code>function</code> |  |
| encode | <code>Boolean</code> | <code>true</code> |

<a name="httpsGet"></a>

## httpsGet(url, path, headers, encode) ⇒ <code>Promise.&lt;Object&gt;</code>
A Promise based https get

**Kind**: global function

| Param | Type | Default |
| --- | --- | --- |
| url | <code>String</code> |  |
| path | <code>String</code> |  |
| headers | <code>http.OutgoingHttpHeaders</code> |  |
| encode | <code>Boolean</code> | <code>true</code> |

<a name="httpGetCB"></a>

## httpGetCB(url, path, headers, callback, encode)
**Kind**: global function

| Param | Type | Default |
| --- | --- | --- |
| url | <code>String</code> |  |
| path | <code>String</code> |  |
| headers | <code>http.OutgoingHttpHeaders</code> |  |
| callback | <code>function</code> |  |
| encode | <code>Boolean</code> | <code>true</code> |

<a name="httpGet"></a>

## httpGet(url, path, headers, encode) ⇒ <code>Promise.&lt;Object&gt;</code>
A Promise based http get

**Kind**: global function

| Param | Type | Default |
| --- | --- | --- |
| url | <code>String</code> |  |
| path | <code>String</code> |  |
| headers | <code>http.OutgoingHttpHeaders</code> |  |
| encode | <code>Boolean</code> | <code>true</code> |