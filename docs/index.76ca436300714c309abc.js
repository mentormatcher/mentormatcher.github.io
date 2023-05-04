/*! For license information please see index.76ca436300714c309abc.js.LICENSE.txt */
(()=>{var e={812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(81),i=n.n(r),s=n(645),a=n.n(s),o=n(667),u=n.n(o),l=new URL(n(903),n.b),c=a()(i()),d=u()(l);c.push([e.id,"@font-face {\n  font-family: Montserrat;\n  src: url("+d+");\n}\n\n:root {\n  --baby-blue: #67cefe;\n  --red: #bc441b;\n  --light-gray: #5a5b61;\n  --gray: #47484d;\n  --dark-blue: #00243d;\n  --blue: #004d96;\n  --white: #f8f8f8;\n  --yellow: #f7ba05;\n  --light-blue: #0078cc;\n}\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n  overflow-y: auto;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  /* line-height: 1.5; */\n  font-family: Montserrat;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* .steps-tracker-svg {\n  width: 300px;\n} */\n\n/* .svg-container {\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n} */\n\n/* .logo {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 25vh;\n  min-height: 250px;\n  margin-top: 2rem;\n} */\n\n.button-primary,\n.button-secondary {\n  text-decoration: none;\n  padding: 0.25em 0.5em;\n  margin: 0.5em;\n  color: white;\n  font-size: 1.25em;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n}\n\n.button-primary {\n  background-color: #0062a5;\n}\n\n.button-secondary {\n  background-color: #f0cb0f;\n  font-size: 1em;\n}\n",""]);const h=c},771:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(81),i=n.n(r),s=n(645),a=n.n(s)()(i());a.push([e.id,"html,\nbody {\n  animation: no_scroll 20s;\n}\n\n/*\n ID SELECTORS\n*/\n#myForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 2rem;\n  margin: 2em;\n}\n\n/*\n CLASS SELECTORS\n*/\n.file-inputs {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  /* padding: 2em; */\n}\n\n.file-input {\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin: 20px;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 5px;\n\n  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),\n    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);\n}\n\n\n.steps-tracker-svg {\n  width: 300px;\n}\n\n.svg-container {\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n}\n\n.logo {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* animation: spin 1s 2, shift_up 2s 1 3s forwards; */\n  animation: shift_up 1s 1 2s forwards;\n}\n\n.logo img {\n  width: 10vw;\n  animation: grow 1s 1 2s forwards;\n}\n\n.loader {\n  border-radius: 100%;\n  -webkit-box-shadow: inset -2px 0 0 0px #0062a5;\n  box-shadow: inset -2px 0 0 0px #0062a5;\n  height: 12vw;\n  width: 12vw;\n  animation: spin 0.5s 3 linear;\n}\n\n.loader-container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  animation: disappear 0.5s 1 1.25s forwards;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(720deg);\n  }\n}\n\n@keyframes shift_up {\n  0% {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  100% {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    height: 25vh;\n    min-height: 250px;\n    margin-top: 2rem;\n  }\n}\n\n@keyframes grow {\n  0% {\n    width: 10vw;\n  }\n\n  100% {\n    width: 20vw;\n  }\n}\n\n@keyframes no_scroll {\n  from {\n    overflow-y: hidden;\n  }\n\n  to {\n    overflow-y: visible;\n  }\n}\n\n@-webkit-keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes disappear {\n  to {\n    opacity: 0;\n    z-index: -1;\n  }\n}",""]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(a[u]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&a[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},460:function(e,t){var n,r;n=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=!t.document&&!!t.postMessage,r=t.IS_PAPA_WORKER||!1,i={},s=0,a={parse:function(n,r){var o=(r=r||{}).dynamicTyping||!1;if(w(o)&&(r.dynamicTypingFunction=o,o={}),r.dynamicTyping=o,r.transform=!!w(r.transform)&&r.transform,r.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var n,r,o=(n=t.URL||t.webkitURL||null,r=e.toString(),a.BLOB_URL||(a.BLOB_URL=n.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=g,u.id=s++,i[u.id]=u}();return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=w(r.step),r.chunk=w(r.chunk),r.complete=w(r.complete),r.error=w(r.error),delete r.worker,void u.postMessage({input:n,config:r,workerId:u.id})}var f=null;return a.NODE_STREAM_INPUT,"string"==typeof n?(n=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(n),f=r.download?new l(r):new d(r)):!0===n.readable&&w(n.read)&&w(n.on)?f=new h(r):(t.File&&n instanceof File||n instanceof Object)&&(f=new c(r)),f.stream(n)},unparse:function(e,t){var n=!1,r=!0,i=",",s="\r\n",o='"',u=o+o,l=!1,c=null,d=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(d=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var h=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,l);if("object"==typeof e[0])return f(c||Object.keys(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],l);throw new Error("Unable to serialize unrecognized input");function f(e,t,n){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&r){for(var l=0;l<e.length;l++)0<l&&(a+=i),a+=m(e[l],l);0<t.length&&(a+=s)}for(var c=0;c<t.length;c++){var d=o?e.length:t[c].length,h=!1,f=o?0===Object.keys(t[c]).length:0===t[c].length;if(n&&!o&&(h="greedy"===n?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===n&&o){for(var p=[],g=0;g<d;g++){var y=u?e[g]:g;p.push(t[c][y])}h=""===p.join("").trim()}if(!h){for(var v=0;v<d;v++){0<v&&!f&&(a+=i);var _=o&&u?e[v]:v;a+=m(t[c][_],v)}c<t.length-1&&(!n||0<d&&!f)&&(a+=s)}}return a}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var r=!1;d&&"string"==typeof e&&d.test(e)&&(e="'"+e,r=!0);var s=e.toString().replace(h,u);return(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(i)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!n&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=f,a.NetworkStreamer=l,a.FileStreamer=c,a.StringStreamer=d,a.ReadableStreamStreamer=h,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var n=e.config||{},r=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)r.push({file:this.files[i],inputElem:this,instanceConfig:o.extend({},n)})})),i(),this;function i(){if(0!==r.length){var t,n,i,u=r[0];if(w(e.before)){var l=e.before(u.file,u.inputElem);if("object"==typeof l){if("abort"===l.action)return"AbortError",t=u.file,n=u.inputElem,i=l.reason,void(w(e.error)&&e.error({name:"AbortError"},t,n,i));if("skip"===l.action)return void s();"object"==typeof l.config&&(u.instanceConfig=o.extend(u.instanceConfig,l.config))}else if("skip"===l)return void s()}var c=u.instanceConfig.complete;u.instanceConfig.complete=function(e){w(c)&&c(e,u.file,u.inputElem),s()},a.parse(u.file,u.instanceConfig)}else w(e.complete)&&e.complete()}function s(){r.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=_(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:o,workerId:a.WORKER_ID,finished:l});else if(w(this._config.chunk)&&!n){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!l||!w(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var n=t.statusText||e;this._sendError(new Error(n))}}function c(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,n=this._config.chunkSize;return n?(e=t.substring(0,n),t=t.substring(n)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){u.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(e){var t,n,r,i=Math.pow(2,53),s=-i,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,l=this,c=0,d=0,h=!1,f=!1,g=[],y={data:[],errors:[],meta:{}};if(w(e.step)){var v=e.step;e.step=function(t){if(y=t,k())x();else{if(x(),0===y.data.length)return;c+=t.data.length,e.preview&&c>e.preview?n.abort():(y.data=y.data[0],v(y,l))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function x(){return y&&r&&(S("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(y.data=y.data.filter((function(e){return!b(e)}))),k()&&function(){if(y)if(Array.isArray(y.data[0])){for(var t=0;k()&&t<y.data.length;t++)y.data[t].forEach(n);y.data.splice(0,1)}else y.data.forEach(n);function n(t,n){w(e.transformHeader)&&(t=e.transformHeader(t,n)),g.push(t)}}(),function(){if(!y||!e.header&&!e.dynamicTyping&&!e.transform)return y;function t(t,n){var r,i=e.header?{}:[];for(r=0;r<t.length;r++){var s=r,a=t[r];e.header&&(s=r>=g.length?"__parsed_extra":g[r]),e.transform&&(a=e.transform(a,s)),a=E(s,a),"__parsed_extra"===s?(i[s]=i[s]||[],i[s].push(a)):i[s]=a}return e.header&&(r>g.length?S("FieldMismatch","TooManyFields","Too many fields: expected "+g.length+" fields but parsed "+r,d+n):r<g.length&&S("FieldMismatch","TooFewFields","Too few fields: expected "+g.length+" fields but parsed "+r,d+n)),i}var n=1;return!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(t),n=y.data.length):y.data=t(y.data,0),e.header&&y.meta&&(y.meta.fields=g),d+=n,y}()}function k(){return e.header&&0===g.length}function E(t,n){return r=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<i)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var r}function S(e,t,n,r){var i={type:e,code:t,message:n};void 0!==r&&(i.row=r),y.errors.push(i)}this.parse=function(i,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var n=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(n,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(i,u)),r=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(i),y.meta.delimiter=e.delimiter);else{var l=function(t,n,r,i,s){var o,u,l,c;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var d=0;d<s.length;d++){var h=s[d],f=0,p=0,g=0;l=void 0;for(var y=new m({comments:i,delimiter:h,newline:n,preview:10}).parse(t),v=0;v<y.data.length;v++)if(r&&b(y.data[v]))g++;else{var _=y.data[v].length;p+=_,void 0!==l?0<_&&(f+=Math.abs(_-l),l=_):l=_}0<y.data.length&&(p/=y.data.length-g),(void 0===u||f<=u)&&(void 0===c||c<p)&&1.99<p&&(u=f,o=h,c=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(r=!0,e.delimiter=a.DefaultDelimiter),y.meta.delimiter=e.delimiter}var c=_(e);return e.preview&&e.header&&c.preview++,t=i,n=new m(c),y=n.parse(t,s,o),x(),h?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,n.abort(),t=w(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){l.streamer._halted?(h=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,n.abort(),y.meta.aborted=!0,w(e.complete)&&e.complete(y),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,n=(e=e||{}).delimiter,r=e.newline,i=e.comments,s=e.step,o=e.preview,u=e.fastMode,l=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var c=0,d=!1;this.parse=function(a,h,f){if("string"!=typeof a)throw new Error("Input must be a string");var m=a.length,g=n.length,y=r.length,v=i.length,_=w(s),b=[],x=[],k=[],E=c=0;if(!a)return Z();if(e.header&&!h){var S=a.split(r)[0].split(n),C=[],R={},O=!1;for(var I in S){var A=S[I];w(e.transformHeader)&&(A=e.transformHeader(A,I));var T=A,D=R[A]||0;for(0<D&&(O=!0,T=A+"_"+D),R[A]=D+1;C.includes(T);)T=T+"_"+D;C.push(T)}if(O){var L=a.split(r);L[0]=C.join(n),a=L.join(r)}}if(u||!1!==u&&-1===a.indexOf(t)){for(var j=a.split(r),M=0;M<j.length;M++){if(k=j[M],c+=k.length,M!==j.length-1)c+=r.length;else if(f)return Z();if(!i||k.substring(0,v)!==i){if(_){if(b=[],B(k.split(n)),$(),d)return Z()}else B(k.split(n));if(o&&o<=M)return b=b.slice(0,o),Z(!0)}}return Z()}for(var F=a.indexOf(n,c),U=a.indexOf(r,c),z=new RegExp(p(l)+p(t),"g"),P=a.indexOf(t,c);;)if(a[c]!==t)if(i&&0===k.length&&a.substring(c,c+v)===i){if(-1===U)return Z();c=U+y,U=a.indexOf(r,c),F=a.indexOf(n,c)}else if(-1!==F&&(F<U||-1===U))k.push(a.substring(c,F)),c=F+g,F=a.indexOf(n,c);else{if(-1===U)break;if(k.push(a.substring(c,U)),W(U+y),_&&($(),d))return Z();if(o&&b.length>=o)return Z(!0)}else for(P=c,c++;;){if(-1===(P=a.indexOf(t,P+1)))return f||x.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:c}),K();if(P===m-1)return K(a.substring(c,P).replace(z,t));if(t!==l||a[P+1]!==l){if(t===l||0===P||a[P-1]!==l){-1!==F&&F<P+1&&(F=a.indexOf(n,P+1)),-1!==U&&U<P+1&&(U=a.indexOf(r,P+1));var q=H(-1===U?F:Math.min(F,U));if(a.substr(P+1+q,g)===n){k.push(a.substring(c,P).replace(z,t)),a[c=P+1+q+g]!==t&&(P=a.indexOf(t,c)),F=a.indexOf(n,c),U=a.indexOf(r,c);break}var N=H(U);if(a.substring(P+1+N,P+1+N+y)===r){if(k.push(a.substring(c,P).replace(z,t)),W(P+1+N+y),F=a.indexOf(n,c),P=a.indexOf(t,c),_&&($(),d))return Z();if(o&&b.length>=o)return Z(!0);break}x.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:c}),P++}}else P++}return K();function B(e){b.push(e),E=c}function H(e){var t=0;if(-1!==e){var n=a.substring(P+1,e);n&&""===n.trim()&&(t=n.length)}return t}function K(e){return f||(void 0===e&&(e=a.substring(c)),k.push(e),c=m,B(k),_&&$()),Z()}function W(e){c=e,B(k),k=[],U=a.indexOf(r,c)}function Z(e){return{data:b,errors:x,meta:{delimiter:n,linebreak:r,aborted:d,truncated:!!e,cursor:E+(h||0)}}}function $(){s(Z()),b=[],x=[]}},this.abort=function(){d=!0},this.getCharIndex=function(){return c}}function g(e){var t=e.data,n=i[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){r=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(w(n.userStep)){for(var a=0;a<t.results.data.length&&(n.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!r);a++);delete t.results}else w(n.userChunk)&&(n.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&y(t.workerId,t.results)}function y(e,t){var n=i[e];w(n.userComplete)&&n.userComplete(t),n.terminate(),delete i[e]}function v(){throw new Error("Not implemented.")}function _(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=_(e[n]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var n=e.data;if(void 0===a.WORKER_ID&&n&&(a.WORKER_ID=n.workerId),"string"==typeof n.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(n.input,n.config),finished:!0});else if(t.File&&n.input instanceof File||n.input instanceof Object){var r=a.parse(n.input,n.config);r&&t.postMessage({workerId:a.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(d.prototype=Object.create(d.prototype)).constructor=d,(h.prototype=Object.create(u.prototype)).constructor=h,a},void 0===(r=n.apply(t,[]))||(e.exports=r)},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],o=0;o<e.length;o++){var u=e[o],l=r.base?u[0]+r.base:u[0],c=s[l]||0,d="".concat(l," ").concat(c);s[l]=c+1;var h=n(d),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var p=i(f,r);r.byIndex=o,t.splice(o,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var o=n(s[a]);t[o].references--}for(var u=r(e,i),l=0;l<s.length;l++){var c=n(s[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=u}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},903:(e,t,n)=>{"use strict";e.exports=n.p+"ceb11275ab638627a643.ttf"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),i=n.n(r),s=n(569),a=n.n(s),o=n(565),u=n.n(o),l=n(216),c=n.n(l),d=n(589),h=n.n(d),f=n(812),p={};p.styleTagTransform=h(),p.setAttributes=u(),p.insert=a().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=c(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;var m=n(771),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var y=n(460);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=document.getElementById("myForm"),b=document.getElementById("menteeFile"),w=document.getElementById("mentorFile");function x(e,t,n){var r=[],i=[];(0,y.parse)(e,{complete:function(e){var s,a=e.data[0];r.push.apply(r,function(e){if(Array.isArray(e))return v(e)}(s=a.map((function(e){return{id:crypto.randomUUID(),text:e}})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(s)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());for(var o=1;o<e.data.length;o++){var u=void 0;"Mentees"===t?u={id:crypto.randomUUID(),email:"",name:"",responses:[],matches:[]}:"Mentors"===t&&(u={id:crypto.randomUUID(),email:"",name:"",responses:[],max_mentees:1});for(var l=0;l<a.length;l++){var c={id:r[l].id,question:r[l].text,answer:e.data[o][l],multiplier:1};u.responses.push(c)}i.push(u)}localStorage.setItem(n,JSON.stringify(r)),localStorage.setItem(t,JSON.stringify(i))}})}_.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),x(b.files[0],"Mentees","MenteeSurvey"),x(w.files[0],"Mentors","MentorSurvey"),window.location.href="./question-selection.html"}))})()})();