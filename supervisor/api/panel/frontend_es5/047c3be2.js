"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2772],{27269:function(e,t,r){r.d(t,{p:function(){return n}});var n=function(e){return e.substr(e.indexOf(".")+1)}},91741:function(e,t,r){r.d(t,{C:function(){return i}});var n=r(27269),i=function(e){return t=e.entity_id,void 0===(r=e.attributes).friendly_name?(0,n.p)(t).replace(/_/g," "):r.friendly_name||"";var t,r}},83447:function(e,t,r){r.d(t,{l:function(){return n}});var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_",r="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",n="aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz".concat(t).concat(t).concat(t).concat(t).concat(t).concat(t),i=new RegExp(r.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(i,(function(e){return n.charAt(r.indexOf(e))})).replace(/&/g,"".concat(t,"and").concat(t)).replace(/[^\w-]+/g,"").replace(/-/g,t).replace(new RegExp("(".concat(t,")\\1+"),"g"),"$1").replace(new RegExp("^".concat(t,"+")),"").replace(new RegExp("".concat(t,"+$")),"")}},42610:function(e,t,r){var n=r(37500),i=r(57626),o=r(51346),a=r(70483),s=r(58831),c=r(22311),l=r(56007);var u=r(83447);var f,d=new Set(["alarm_control_panel","alert","automation","binary_sensor","calendar","camera","climate","cover","device_tracker","fan","group","humidifier","input_boolean","light","lock","media_player","person","plant","remote","schedule","script","siren","sun","switch","timer","update","vacuum"]),p=function(e,t){if((void 0!==t?t:null==e?void 0:e.state)===l.nZ)return"var(--state-unavailable-color)";var r,n=m(e,t);return n?(r=n,Array.isArray(r)?r.reverse().reduce((function(e,t){return"var(".concat(t).concat(e?", ".concat(e):"",")")}),void 0):"var(".concat(r,")")):void 0},h=function(e,t){var r=void 0!==t?t:e.state,n=(0,s.M)(e.entity_id),i=function(e,t){var r=(0,s.M)(e.entity_id),n=void 0!==t?t:null==e?void 0:e.state;if(["button","input_button","scene"].includes(r))return n!==l.nZ;if((0,l.rk)(n))return!1;if(n===l.PX&&"alert"!==r)return!1;switch(r){case"alarm_control_panel":return"disarmed"!==n;case"alert":return"idle"!==n;case"cover":return"closed"!==n;case"device_tracker":case"person":return"not_home"!==n;case"lock":return"locked"!==n;case"media_player":return"standby"!==n;case"vacuum":return!["idle","docked","paused"].includes(n);case"plant":return"problem"===n;case"group":return["on","home","open","locked","problem"].includes(n);case"timer":return"active"===n;case"camera":return"streaming"===n}return!0}(e,t),o=[],a=(0,u.l)(r,"_"),c=i?"active":"inactive",f=e.attributes.device_class;return f&&o.push("--state-".concat(n,"-").concat(f,"-").concat(a,"-color")),o.push("--state-".concat(n,"-").concat(a,"-color"),"--state-".concat(n,"-").concat(c,"-color"),"--state-".concat(c,"-color")),o},m=function(e,t){var r=void 0!==t?t:null==e?void 0:e.state,n=(0,s.M)(e.entity_id),i=e.attributes.device_class;if("sensor"===n&&"battery"===i){var o=function(e){var t=Number(e);if(!isNaN(t))return t>=70?"--state-sensor-battery-high-color":t>=30?"--state-sensor-battery-medium-color":"--state-sensor-battery-low-color"}(r);if(o)return[o]}if(d.has(n))return h(e,t)};var y,v,b=(0,n.iv)(f||(y=['ha-state-icon[data-domain="alarm_control_panel"][data-state="pending"],ha-state-icon[data-domain="alarm_control_panel"][data-state="arming"],ha-state-icon[data-domain="alarm_control_panel"][data-state="triggered"],ha-state-icon[data-domain="lock"][data-state="jammed"]{animation:pulse 1s infinite}@keyframes pulse{0%{opacity:1}50%{opacity:0}100%{opacity:1}}/* Color the icon if unavailable */ha-state-icon[data-state="unavailable"]{color:var(--state-unavailable-color)}'],v||(v=y.slice(0)),f=Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(v)}}))));r(22814);var g,w=function(e,t,r){return"".concat(e,"&width=").concat(t,"&height=").concat(r)};!function(e){e[e.TARGET_TEMPERATURE=1]="TARGET_TEMPERATURE",e[e.TARGET_TEMPERATURE_RANGE=2]="TARGET_TEMPERATURE_RANGE",e[e.TARGET_HUMIDITY=4]="TARGET_HUMIDITY",e[e.FAN_MODE=8]="FAN_MODE",e[e.PRESET_MODE=16]="PRESET_MODE",e[e.SWING_MODE=32]="SWING_MODE",e[e.AUX_HEAT=64]="AUX_HEAT"}(g||(g={}));var k,E,_={cooling:"cool",drying:"dry",fan:"fan_only",heating:"heat",idle:"off",off:"off"},O=r(49706),P=r(49487);r(52039);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,N(n.key),n)}}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x(e);if(t){var i=x(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}(this,r)}}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function R(){R=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!M(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=N(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:U(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=U(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function z(e){var t,r=N(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function I(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function M(e){return e.decorators&&e.decorators.length}function F(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function U(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function N(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===T(t)?t:String(t)}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var H,B,L;!function(e,t,r,n){var i=R();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(F(o.descriptor)||F(i.descriptor)){if(M(o)||M(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(M(o)){if(M(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}I(o,i)}else t.push(o)}return t}(a.d.map(z)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,i.Mo)("ha-state-icon")],(function(e,t){var r=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,t);var r,n,i,o=S(a);function a(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=o.call.apply(o,[this].concat(n)),e(D(t)),t}return r=a,n&&A(r.prototype,n),i&&A(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r}(t);return{F:r,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,t,r;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?(0,n.dy)(k||(k=j(['<ha-icon .icon="','"></ha-icon>'])),this.icon||(null===(t=this.state)||void 0===t?void 0:t.attributes.icon)):(0,n.dy)(E||(E=j(['<ha-svg-icon .path="','"></ha-svg-icon>'])),(r=this.state)?(0,P.K)((0,s.M)(r.entity_id),r):O.Rb)}}]}}),n.oi);function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function V(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function X(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,re(n.key),n)}}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Z(e,t)}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=oe(e);if(t){var i=oe(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Y(e)}(this,r)}}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(){K=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!Q(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ne(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=re(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:te(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=te(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function q(e){var t,r=re(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function J(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Q(e){return e.decorators&&e.decorators.length}function ee(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function te(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function re(e){var t=function(e,t){if("object"!==$(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===$(t)?t:String(t)}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ie(){return ie="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=oe(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},ie.apply(this,arguments)}function oe(e){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},oe(e)}var ae=function(e,t,r,n){var i=K();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(ee(o.descriptor)||ee(i.descriptor)){if(Q(o)||Q(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(Q(o)){if(Q(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}J(o,i)}else t.push(o)}return t}(a.d.map(q)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}(null,(function(e,t){var r=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(a,t);var r,n,i,o=W(a);function a(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=o.call.apply(o,[this].concat(n)),e(Y(t)),t}return r=a,n&&X(r.prototype,n),i&&X(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r}(t);return{F:r,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"overrideIcon",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"overrideImage",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"stateColor",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"color",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,reflect:!0,attribute:"icon"})],key:"_showIcon",value:function(){return!0}},{kind:"field",decorators:[(0,i.SB)()],key:"_iconStyle",value:function(){return{}}},{kind:"get",key:"_stateColor",value:function(){var e=this.stateObj?(0,c.N)(this.stateObj):void 0;return this.stateColor||"light"===e&&!1!==this.stateColor}},{kind:"method",key:"render",value:function(){var e=this.stateObj;if(!e&&!this.overrideIcon&&!this.overrideImage)return(0,n.dy)(H||(H=V(['<div class="missing"> <ha-svg-icon .path="','"></ha-svg-icon> </div>'])),"M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z");if(!this._showIcon)return n.Ld;var t=e?(0,c.N)(e):void 0;return(0,n.dy)(B||(B=V(['<ha-state-icon style="','" data-domain="','" data-state="','" .icon="','" .state="','"></ha-state-icon>'])),(0,a.V)(this._iconStyle),(0,o.o)(t),(0,o.o)(null==e?void 0:e.state),this.overrideIcon,e)}},{kind:"method",key:"willUpdate",value:function(e){if(ie(oe(r.prototype),"willUpdate",this).call(this,e),e.has("stateObj")||e.has("overrideImage")||e.has("overrideIcon")||e.has("stateColor")||e.has("color")){var t=this.stateObj,n={},i={backgroundImage:""};if(this._showIcon=!0,t&&void 0===this.overrideImage)if(!t.attributes.entity_picture_local&&!t.attributes.entity_picture||this.overrideIcon){if(this.color)n.color=this.color;else if(this._stateColor){var o=p(t);if(o&&(n.color=o),t.attributes.rgb_color&&(n.color="rgb(".concat(t.attributes.rgb_color.join(","),")")),t.attributes.brightness){var a=t.attributes.brightness;if("number"!=typeof a){var c="Type error: state-badge expected number, but type of ".concat(t.entity_id,".attributes.brightness is ").concat($(a)," (").concat(a,")");console.warn(c)}n.filter="brightness(".concat((a+245)/5,"%)")}if(t.attributes.hvac_action){var l=t.attributes.hvac_action;l in _?n.color=p(t,_[l]):delete n.color}}}else{var u=t.attributes.entity_picture_local||t.attributes.entity_picture;this.hass&&(u=this.hass.hassUrl(u)),"camera"===(0,s.M)(t.entity_id)&&(u=w(u,80,80)),i.backgroundImage="url(".concat(u,")"),this._showIcon=!1}else if(this.overrideImage){var f=this.overrideImage;this.hass&&(f=this.hass.hassUrl(f)),i.backgroundImage="url(".concat(f,")"),this._showIcon=!1}this._iconStyle=n,Object.assign(this.style,i)}}},{kind:"get",static:!0,key:"styles",value:function(){return[b,(0,n.iv)(L||(L=V([":host{position:relative;display:inline-block;width:40px;color:var(--paper-item-icon-color, #44739e);border-radius:50%;height:40px;text-align:center;background-size:cover;line-height:40px;vertical-align:middle;box-sizing:border-box;--state-inactive-color:initial}:host(:focus){outline:none}:host(:not([icon]):focus){border:2px solid var(--divider-color)}:host([icon]:focus){background:var(--divider-color)}ha-state-icon{transition:color 0.3s ease-in-out,filter 0.3s ease-in-out}.missing{color:#fce588}"])))]}}]}}),n.oi);customElements.define("state-badge",ae)}}]);