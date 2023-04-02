/*! For license information please see 71a45e04.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2708],{52708:function(e,t,r){r.r(t);r(44577);var i,n,o,a,s,c,l=r(37500),u=r(57626),d=r(14516),f=r(47181),h=(r(34552),r(93546),r(86248),r(41682)),p=r(35460),v=r(26765),m=r(11654);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(){g=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),s=new j(n||[]);return i(a,"_invoke",{value:P(e,r,s)}),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var d={};function f(){}function h(){}function p(){}var v={};c(v,o,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(D([])));w&&w!==t&&r.call(w,o)&&(v=w);var b=p.prototype=f.prototype=Object.create(v);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,o,a,s){var c=u(e[i],e,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==y(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function P(e,t,r){var i="suspendedStart";return function(n,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===n)throw o;return S()}for(r.method=n,r.arg=o;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===i)throw i="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i="executing";var c=u(e,t,r);if("normal"===c.type){if(i=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i="completed",r.method="throw",r.arg=c.arg)}}}function _(e,t){var r=t.method,i=e.iterator[r];if(void 0===i)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(i,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function D(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,n=function t(){for(;++i<e.length;)if(r.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,i(b,"constructor",{value:p,configurable:!0}),i(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},k(E.prototype),c(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,i,n,o){void 0===o&&(o=Promise);var a=new E(l(t,r,i,n),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(b),c(b,s,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var i in t)r.push(i);return r.reverse(),function e(){for(;r.length;){var i=r.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},e.values=D,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(r,i){return a.type="throw",a.arg=e,t.next=r,i&&(t.method="next",t.arg=void 0),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var i=r.completion;if("throw"===i.type){var n=i.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:D(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function w(e,t,r,i,n,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(i,n)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function k(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,z(i.key),i)}}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=x(e);if(t){var n=x(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}(this,r)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function O(){O=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!S(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=z(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function j(e){var t,r=z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function D(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function S(e){return e.decorators&&e.decorators.length}function L(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function z(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==y(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var C=(0,d.Z)((function(e){var t=""!==e.host.disk_life_time?30:10,r=1e3*e.host.disk_used/60/t,i=4*e.host.startup_time/60;return 10*Math.ceil((r+i)/10)}));!function(e,t,r,i){var n=O();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(L(o.descriptor)||L(n.descriptor)){if(S(o)||S(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(S(o)){if(S(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}D(o,n)}else t.push(o)}return t}(a.d.map(j)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,u.Mo)("dialog-hassio-datadisk")],(function(e,t){var r,d,y=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,t);var r,i,n,o=P(a);function a(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return t=o.call.apply(o,[this].concat(i)),e(_(t)),t}return r=a,i&&k(r.prototype,i),n&&k(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}(t);return{F:y,d:[{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"dialogParams",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"selectedDevice",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"devices",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"moving",value:function(){return!1}},{kind:"method",key:"showDialog",value:function(e){var t=this;this.dialogParams=e,(0,p.ou)(this.hass).then((function(e){t.devices=e.devices}))}},{kind:"method",key:"closeDialog",value:function(){this.dialogParams=void 0,this.selectedDevice=void 0,this.devices=void 0,this.moving=!1,(0,f.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e;return this.dialogParams?(0,l.dy)(i||(i=b([' <ha-dialog open scrimClickAction escapeKeyAction .heading="','" @closed="','" ?hideActions="','"> '," </ha-dialog> "])),this.moving?this.dialogParams.supervisor.localize("dialog.datadisk_move.moving"):this.dialogParams.supervisor.localize("dialog.datadisk_move.title"),this.closeDialog,this.moving,this.moving?(0,l.dy)(n||(n=b([' <ha-circular-progress alt="Moving" size="large" active> </ha-circular-progress> <p class="progress-text"> '," </p>"])),this.dialogParams.supervisor.localize("dialog.datadisk_move.moving_desc")):(0,l.dy)(o||(o=b([" ",' <mwc-button slot="secondaryAction" @click="','" dialogInitialFocus> ',' </mwc-button> <mwc-button .disabled="','" slot="primaryAction" @click="','"> '," </mwc-button>"])),null!==(e=this.devices)&&void 0!==e&&e.length?(0,l.dy)(a||(a=b([" ",' <br><br> <ha-select .label="','" @selected="','" dialogInitialFocus> '," </ha-select> "])),this.dialogParams.supervisor.localize("dialog.datadisk_move.description",{current_path:this.dialogParams.supervisor.os.data_disk,time:C(this.dialogParams.supervisor)}),this.dialogParams.supervisor.localize("dialog.datadisk_move.select_device"),this._select_device,this.devices.map((function(e){return(0,l.dy)(s||(s=b(['<mwc-list-item .value="','">',"</mwc-list-item>"])),e,e)}))):void 0===this.devices?this.dialogParams.supervisor.localize("dialog.datadisk_move.loading_devices"):this.dialogParams.supervisor.localize("dialog.datadisk_move.no_devices"),this.closeDialog,this.dialogParams.supervisor.localize("dialog.datadisk_move.cancel"),!this.selectedDevice,this._moveDatadisk,this.dialogParams.supervisor.localize("dialog.datadisk_move.move"))):l.Ld}},{kind:"method",key:"_select_device",value:function(e){this.selectedDevice=e.target.value}},{kind:"method",key:"_moveDatadisk",value:(r=g().mark((function e(){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.moving=!0,e.prev=1,e.next=4,(0,p.Sx)(this.hass,this.selectedDevice);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),this.hass.connection.connected&&!(0,h.yz)(e.t0)&&((0,v.Ys)(this,{title:this.dialogParams.supervisor.localize("system.host.failed_to_move"),text:(0,h.js)(e.t0)}),this.closeDialog());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})),d=function(){var e=this,t=arguments;return new Promise((function(i,n){var o=r.apply(e,t);function a(e){w(o,i,n,a,s,"next",e)}function s(e){w(o,i,n,a,s,"throw",e)}a(void 0)}))},function(){return d.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,m.yu,(0,l.iv)(c||(c=b(["ha-select{width:100%}ha-circular-progress{display:block;margin:32px;text-align:center}.progress-text{text-align:center}"])))]}}]}}),l.oi)}}]);