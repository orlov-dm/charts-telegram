/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/normalize.css/normalize.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/normalize.css/normalize.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/main.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./src/styles/main.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n  width: 100%;\n\n  font-family: -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;\n  font-size: 13px;\n  font-weight: normal;\n}\n\n#root {\n  height: 100%;\n  padding: 5em;\n}\n\n/* canvas {\n  border: 1px solid black;\n} */", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--5-1!../postcss-loader/src??ref--5-2!./normalize.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/normalize.css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Chart.js":
/*!**********************!*\
  !*** ./src/Chart.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_WIDTH = 460;
var DEFAULT_HEIGHT = 418;
var GRID_LINES = 6;
var BOTTOM_SPACING = 80;
var AREA_CENTER = 1;
var AREA_BOTTOM = 2;
var AREA_BOTTOM_PREVIEW = 3;
var AREA_LEFT = 4;
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var Chart =
/*#__PURE__*/
function () {
  function Chart(_ref, parentElement) {
    var id = _ref.id,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? DEFAULT_WIDTH : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? DEFAULT_HEIGHT : _ref$height,
        data = _ref.data;

    _classCallCheck(this, Chart);

    var columns = data.columns,
        colors = data.colors,
        names = data.names,
        types = data.types;
    var properColumns = {};
    columns.forEach(function (columnData) {
      var _columnData = _toArray(columnData),
          name = _columnData[0],
          data = _columnData.slice(1);

      properColumns[name] = data;
    });
    var props = {
      id: id,
      width: width,
      height: height,
      parentElement: parentElement,
      columns: properColumns,
      colors: colors,
      names: names,
      types: types,
      xRange: [50, 100]
    };
    this.props = props;
    this.points = {};
    this.mouse = {
      x: 0,
      y: 0,
      down: false,
      downLeft: false,
      downRight: false
    };
  }

  _createClass(Chart, [{
    key: "init",
    value: function init() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          parentElement = _this$props.parentElement,
          width = _this$props.width,
          height = _this$props.height;

      if (!id || !parentElement) {
        return false;
      }

      var element = document.createElement('canvas');
      element.setAttribute('id', id);
      var scale = window.devicePixelRatio;

      if (width) {
        element.style.width = width + 'px';
        element.width = width * scale;
      }

      if (height) {
        element.style.height = height + 'px';
        element.height = height * scale;
      }

      if (element.getContext) {
        var ctx = element.getContext('2d');
        this.ctx = ctx;
        this.element = element;
        parentElement.appendChild(element); //ctx.translate(0.5, 0.5);

        ctx.scale(scale, scale);
        this.render();
        document.addEventListener('mousemove', function (e) {
          return _this.mouseMove(e);
        }, false);
        document.addEventListener('mousedown', function (e) {
          return _this.mouseDown(e);
        }, false);
        document.addEventListener('mouseup', function (e) {
          return _this.mouseUp(e);
        }, false); //element.addEventListener('mouseout', (e) => this.mouseUp(e), false); 
      } else {// canvas-unsupported code here
        }
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.xRange);
      this.ctx.save();
      this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
      this.points = {}; //this.renderGrid();

      this.renderBottomLabels();
      this.renderLines();
      this.renderSideLabels();
      this.renderPreview();
      this.ctx.restore();
    }
  }, {
    key: "renderGrid",
    value: function renderGrid() {
      var ctx = this.ctx;
      var sizeWidth = ctx.canvas.clientWidth;
      var sizeHeight = ctx.canvas.clientHeight;
      var startY = sizeHeight - BOTTOM_SPACING;
      var distance = startY / GRID_LINES;
      ctx.beginPath();

      for (var i = 0; i < GRID_LINES; ++i) {
        var pos = Math.floor(i * distance);
        ctx.moveTo(0, startY - pos);
        ctx.lineTo(sizeWidth, startY - pos);
      }

      ctx.strokeStyle = 'lightgray';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }, {
    key: "renderBottomLabels",
    value: function renderBottomLabels() {
      var _this$getPoints = this.getPoints(),
          xPoints = _this$getPoints.x;

      var ctx = this.ctx;

      var _this$getAreaPos = this.getAreaPos(AREA_BOTTOM),
          _this$getAreaPos2 = _slicedToArray(_this$getAreaPos, 2),
          _this$getAreaPos2$ = _slicedToArray(_this$getAreaPos2[0], 2),
          x1 = _this$getAreaPos2$[0],
          y1 = _this$getAreaPos2$[1],
          _this$getAreaPos2$2 = _slicedToArray(_this$getAreaPos2[1], 2),
          x2 = _this$getAreaPos2$2[0],
          y2 = _this$getAreaPos2$2[1];

      var width = x2 - x1;
      var X_DISTANCE = 100;
      var count = width / X_DISTANCE;
      count = count - count % 4;
      var points = xPoints.length;
      var pointsInterval = Math.floor(points / count);
      var pointsDistance = width / count;
      var startX = pointsDistance / 2;
      var startY = y1 + 20;
      var options = {
        month: 'short',
        day: 'numeric'
      };

      for (var i = pointsInterval, j = 0; i < xPoints.length - 1; i += pointsInterval, ++j) {
        var time = xPoints[i];
        ctx.fillText(dateConverter(time), Math.floor(startX + pointsDistance * j), startY);
      }
    }
  }, {
    key: "renderSideLabels",
    value: function renderSideLabels() {
      var ctx = this.ctx;

      var _this$getAreaPos3 = this.getAreaPos(AREA_LEFT),
          _this$getAreaPos4 = _slicedToArray(_this$getAreaPos3, 2),
          _this$getAreaPos4$ = _slicedToArray(_this$getAreaPos4[0], 2),
          x1 = _this$getAreaPos4$[0],
          y1 = _this$getAreaPos4$[1],
          _this$getAreaPos4$2 = _slicedToArray(_this$getAreaPos4[1], 2),
          x2 = _this$getAreaPos4$2[0],
          y2 = _this$getAreaPos4$2[1];

      var maxY = this.getMaxY();
      ctx.strokeStyle = 'rgba(111, 111, 111, 0.1)';
      ctx.lineWidth = 1;
      var height = y2 - y1;
      var width = x2 - x1;
      var pointsDistance = height / maxY;
      var linesDistance = height / GRID_LINES;
      ctx.beginPath();

      for (var i = 0; i < GRID_LINES; ++i) {
        var pos = y2 - i * linesDistance;
        ctx.moveTo(0, pos);
        ctx.lineTo(width, pos);
        ctx.fillText(Math.floor(i * linesDistance / pointsDistance), 0, Math.floor(pos - 10));
      }

      ctx.stroke();
    }
  }, {
    key: "renderLines",
    value: function renderLines() {
      var isPreview = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var ctx = this.ctx;
      var colors = this.props.colors;

      var _this$getPoints2 = this.getPoints(isPreview),
          xPoints = _this$getPoints2.x,
          yPoints = _objectWithoutProperties(_this$getPoints2, ["x"]);

      var _this$getAreaPos5 = this.getAreaPos(isPreview ? AREA_BOTTOM_PREVIEW : AREA_CENTER),
          _this$getAreaPos6 = _slicedToArray(_this$getAreaPos5, 2),
          _this$getAreaPos6$ = _slicedToArray(_this$getAreaPos6[0], 2),
          x1 = _this$getAreaPos6$[0],
          y1 = _this$getAreaPos6$[1],
          _this$getAreaPos6$2 = _slicedToArray(_this$getAreaPos6[1], 2),
          x2 = _this$getAreaPos6$2[0],
          y2 = _this$getAreaPos6$2[1];

      var width = x2 - x1;
      var height = y2 - y1;
      var pointsDistance = width / (xPoints.length - 1);
      var startY = y2;
      var maxY = this.getMaxY(isPreview);
      var pointsYDistance = height / maxY;
      ctx.lineWidth = 2.5;
      Object.keys(yPoints).forEach(function (yName) {
        var line = yPoints[yName];
        ctx.beginPath();
        ctx.strokeStyle = colors[yName];
        line.forEach(function (y, i) {
          if (!i) {
            ctx.strokeStyle = colors[y];
            ctx.moveTo(Math.floor(i * pointsDistance), Math.floor(startY - y * pointsYDistance));
            return;
          }

          ctx.lineTo(Math.floor(i * pointsDistance), Math.floor(startY - y * pointsYDistance));
        });
        ctx.stroke();
      });
    }
  }, {
    key: "renderPreview",
    value: function renderPreview() {
      this.renderLines(true);
      this.renderPreviewSelection();
    }
  }, {
    key: "renderPreviewSelection",
    value: function renderPreviewSelection() {
      var ctx = this.ctx;

      var _this$getAreaPos7 = this.getAreaPos(AREA_BOTTOM_PREVIEW),
          _this$getAreaPos8 = _slicedToArray(_this$getAreaPos7, 2),
          _this$getAreaPos8$ = _slicedToArray(_this$getAreaPos8[0], 2),
          x1 = _this$getAreaPos8$[0],
          y1 = _this$getAreaPos8$[1],
          _this$getAreaPos8$2 = _slicedToArray(_this$getAreaPos8[1], 2),
          x2 = _this$getAreaPos8$2[0],
          y2 = _this$getAreaPos8$2[1];

      var xRange = this.props.xRange;

      var _xRange = _slicedToArray(xRange, 2),
          xBegin = _xRange[0],
          xEnd = _xRange[1];

      var rel = (x2 - x1) / 100;
      var x1Res = x1 + xBegin * rel;
      var x2Res = xEnd * rel + x1;
      var y1Res = y1;
      var y2Res = y2;
      ctx.fillStyle = 'rgb(234,234,245, 0.95)';
      ctx.fillRect(x1Res, y1Res - 10, 5, y2Res - y1Res + 10);
      ctx.fillRect(x2Res - 5, y1Res - 10, 5, y2Res - y1Res + 10);
      ctx.fillRect(x1Res, y1Res - 10, x2Res - x1Res, 2);
      ctx.fillRect(x1Res, y2Res - 2, x2Res - x1Res, 2);
      ctx.fillStyle = 'rgba(255,255,255,0.5)'; //ctx.fillRect(x1Res+5, y1Res-8, x2Res-x1Res-10, y2Res-y1Res+6);

      this.selectionPos = [[x1Res, y1Res], [x2Res, y2Res]];
      ctx.fillStyle = 'rgba(246,249,251,0.5)';
      ctx.fillRect(x1, y1 - 10, x1Res, y2 - y1 + 10);
      ctx.fillRect(x2Res, y1 - 10, x2, y2 - y1 + 10);
    }
  }, {
    key: "getMaxY",
    value: function getMaxY() {
      var isPreview = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var _this$getPoints3 = this.getPoints(isPreview),
          x = _this$getPoints3.x,
          yPoints = _objectWithoutProperties(_this$getPoints3, ["x"]);

      var max = 0;
      Object.values(yPoints).forEach(function (values) {
        var newMax = Math.max.apply(Math, _toConsumableArray(values));

        if (max < newMax) {
          max = newMax;
        }
      });
      return max;
    }
  }, {
    key: "getPoints",
    value: function getPoints() {
      var isPreview = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.points[isPreview]) {
        return this.points[isPreview];
      }

      var _this$props2 = this.props,
          xRange = _this$props2.xRange,
          columns = _this$props2.columns;

      var xPoints = columns.x,
          yPoints = _objectWithoutProperties(columns, ["x"]);

      if (!isPreview && !xRange != [0, 100]) {
        var _xRange2 = _slicedToArray(xRange, 2),
            xBegin = _xRange2[0],
            xEnd = _xRange2[1];

        var xPointsMultiplier = xPoints.length / 100;
        var start = Math.floor(xBegin * xPointsMultiplier);
        var end = Math.floor(xEnd * xPointsMultiplier);
        xPoints = xPoints.slice(start, end);
        var yPointsKeys = Object.keys(yPoints);

        for (var i = 0; i < yPointsKeys.length; ++i) {
          yPoints[yPointsKeys[i]] = yPoints[yPointsKeys[i]].slice(start, end);
        }
      }

      var points = _objectSpread({
        x: xPoints
      }, yPoints);

      this.points[isPreview] = points;
      return points;
    }
  }, {
    key: "getAreaPos",
    value: function getAreaPos(area) {
      var ctx = this.ctx;
      var sizeWidth = ctx.canvas.clientWidth;
      var sizeHeight = ctx.canvas.clientHeight;

      switch (area) {
        case AREA_CENTER:
          return [[0, 0], [sizeWidth, sizeHeight - BOTTOM_SPACING]];

        case AREA_BOTTOM:
          return [[0, sizeHeight - BOTTOM_SPACING], [sizeWidth, sizeHeight]];

        case AREA_BOTTOM_PREVIEW:
          return [[0, sizeHeight - BOTTOM_SPACING / 2], [sizeWidth, sizeHeight]];

        case AREA_LEFT:
          return [[0, 0], [sizeWidth, sizeHeight - BOTTOM_SPACING]];
      }
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event) {
      if (this.mouse.down) {
        return;
      }

      var x = event.pageX - this.element.offsetLeft;
      var y = event.pageY - this.element.offsetTop;

      var _this$selectionPos = _slicedToArray(this.selectionPos, 2),
          _this$selectionPos$ = _slicedToArray(_this$selectionPos[0], 2),
          x1 = _this$selectionPos$[0],
          y1 = _this$selectionPos$[1],
          _this$selectionPos$2 = _slicedToArray(_this$selectionPos[1], 2),
          x2 = _this$selectionPos$2[0],
          y2 = _this$selectionPos$2[1];

      if (x < x1 || x > x2 || y < y1 || y > y2) {
        return;
      }

      if (Math.abs(x - x1) <= 5) {
        this.mouse.down = 'left';
      } else if (Math.abs(x - x2) <= 5) {
        this.mouse.down = 'right';
      } else {
        this.mouse.down = 'center';
      }

      this.mouse.x = x;
      this.mouse.y = y;
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(event) {
      this.mouse.down = false;
      console.log('mouse up');
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event) {
      if (!this.mouse.down) {
        return;
      }

      var x = event.pageX - this.element.offsetLeft;
      var y = event.pageY - this.element.offsetTop;
      var toLeft = this.mouse.x > x;
      var movePoints = this.mouse.x - x;

      var _this$getAreaPos9 = this.getAreaPos(AREA_BOTTOM_PREVIEW),
          _this$getAreaPos10 = _slicedToArray(_this$getAreaPos9, 2),
          _this$getAreaPos10$ = _slicedToArray(_this$getAreaPos10[0], 2),
          x1 = _this$getAreaPos10$[0],
          y1 = _this$getAreaPos10$[1],
          _this$getAreaPos10$2 = _slicedToArray(_this$getAreaPos10[1], 2),
          x2 = _this$getAreaPos10$2[0],
          y2 = _this$getAreaPos10$2[1];

      var rel = (x2 - x1) / 100;
      var newXRangeDiff = toLeft ? Math.floor(movePoints / rel) : Math.ceil(movePoints / rel);

      if (!newXRangeDiff) {
        return;
      }

      this.mouse.x = x;
      this.mouse.y = y;

      var _this$props$xRange = _slicedToArray(this.props.xRange, 2),
          xBegin = _this$props$xRange[0],
          xEnd = _this$props$xRange[1];

      var xRangeDistance = this.mouse.down === 'center' ? xEnd - xBegin : 0;
      var newXRangeLeft = xBegin;
      var newXRangeRight = xEnd;

      if (this.mouse.down === 'center') {
        if (toLeft && xBegin === 0) {
          return;
        }

        if (!toLeft && xEnd === 100) {
          return;
        }

        var newXRange = toLeft ? xBegin - newXRangeDiff : xEnd - newXRangeDiff;

        if (toLeft && newXRange < xBegin) {
          console.log('Move to left ' + newXRange + ' ' + xBegin);
          newXRangeLeft = newXRange;
          newXRangeRight = xRangeDistance ? newXRange + xRangeDistance : xEnd;
        } else if (!toLeft && newXRange > xEnd) {
          console.log('Move to right ' + newXRange + ' ' + xEnd);
          newXRangeLeft = xRangeDistance ? newXRange - xRangeDistance : xBegin;
          newXRangeRight = newXRange;
        } else {
          return;
        }

        if (newXRangeLeft < 0) {
          newXRangeLeft = 0;
          newXRangeRight = newXRangeLeft + xRangeDistance;
        }

        if (newXRangeRight > 100) {
          newXRangeRight = 100;
          newXRangeLeft = newXRangeRight - xRangeDistance;
        }
      } else {
        newXRangeLeft = this.mouse.down === 'left' ? xBegin - newXRangeDiff : xBegin;
        newXRangeRight = this.mouse.down === 'right' ? xEnd - newXRangeDiff : xEnd;

        if (newXRangeRight - newXRangeLeft < 20) {
          return;
          console.log('norm to 20');

          if (toLeft) {
            newXRangeRight = newXRangeLeft + 20;
          } else {
            newXRangeLeft = newXRangeRight - 20;
          }
        }
      }

      if (newXRangeLeft < 0) {
        return;
        console.log('norm to 0');
        newXRangeLeft = 0;
      }

      if (newXRangeRight > 100) {
        return;
        console.log('norm to 100');
        newXRangeRight = 100;
      }

      if (newXRangeLeft !== xBegin || newXRangeRight !== xEnd) {
        console.log(newXRangeLeft, newXRangeRight);
        this.props.xRange = [newXRangeLeft, newXRangeRight];
        window.requestAnimationFrame(this.render.bind(this));
      }
    }
  }]);

  return Chart;
}();


;

function dateConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var month = MONTHS[a.getMonth()];
  var date = a.getDate();
  return month + ' ' + date;
}

/***/ }),

/***/ "./src/chart_data.json":
/*!*****************************!*\
  !*** ./src/chart_data.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = [{"columns":[["x",1542412800000,1542499200000,1542585600000,1542672000000,1542758400000,1542844800000,1542931200000,1543017600000,1543104000000,1543190400000,1543276800000,1543363200000,1543449600000,1543536000000,1543622400000,1543708800000,1543795200000,1543881600000,1543968000000,1544054400000,1544140800000,1544227200000,1544313600000,1544400000000,1544486400000,1544572800000,1544659200000,1544745600000,1544832000000,1544918400000,1545004800000,1545091200000,1545177600000,1545264000000,1545350400000,1545436800000,1545523200000,1545609600000,1545696000000,1545782400000,1545868800000,1545955200000,1546041600000,1546128000000,1546214400000,1546300800000,1546387200000,1546473600000,1546560000000,1546646400000,1546732800000,1546819200000,1546905600000,1546992000000,1547078400000,1547164800000,1547251200000,1547337600000,1547424000000,1547510400000,1547596800000,1547683200000,1547769600000,1547856000000,1547942400000,1548028800000,1548115200000,1548201600000,1548288000000,1548374400000,1548460800000,1548547200000,1548633600000,1548720000000,1548806400000,1548892800000,1548979200000,1549065600000,1549152000000,1549238400000,1549324800000,1549411200000,1549497600000,1549584000000,1549670400000,1549756800000,1549843200000,1549929600000,1550016000000,1550102400000,1550188800000,1550275200000,1550361600000,1550448000000,1550534400000,1550620800000,1550707200000,1550793600000,1550880000000,1550966400000,1551052800000,1551139200000,1551225600000,1551312000000,1551398400000,1551484800000,1551571200000,1551657600000,1551744000000,1551830400000,1551916800000,1552003200000],["y0",37,20,32,39,32,35,19,65,36,62,113,69,120,60,51,49,71,122,149,69,57,21,33,55,92,62,47,50,56,116,63,60,55,65,76,33,45,64,54,81,180,123,106,37,60,70,46,68,46,51,33,57,75,70,95,70,50,68,63,66,53,38,52,109,121,53,36,71,96,55,58,29,31,55,52,44,126,191,73,87,255,278,219,170,129,125,126,84,65,53,154,57,71,64,75,72,39,47,52,73,89,156,86,105,88,45,33,56,142,124,114,64],["y1",22,12,30,40,33,23,18,41,45,69,57,61,70,47,31,34,40,55,27,57,48,32,40,49,54,49,34,51,51,51,66,51,94,60,64,28,44,96,49,73,30,88,63,42,56,67,52,67,35,61,40,55,63,61,105,59,51,76,63,57,47,56,51,98,103,62,54,104,48,41,41,37,30,28,26,37,65,86,70,81,54,74,70,50,74,79,85,62,36,46,68,43,66,50,28,66,39,23,63,74,83,66,40,60,29,36,27,54,89,50,73,52]],"types":{"y0":"line","y1":"line","x":"x"},"names":{"y0":"#0","y1":"#1"},"colors":{"y0":"#3DC23F","y1":"#F34C44"}},{"columns":[["x",1542412800000,1542499200000,1542585600000,1542672000000,1542758400000,1542844800000,1542931200000,1543017600000,1543104000000,1543190400000,1543276800000,1543363200000,1543449600000,1543536000000,1543622400000,1543708800000,1543795200000,1543881600000,1543968000000,1544054400000,1544140800000,1544227200000,1544313600000,1544400000000,1544486400000,1544572800000,1544659200000,1544745600000,1544832000000,1544918400000,1545004800000,1545091200000,1545177600000,1545264000000,1545350400000,1545436800000,1545523200000,1545609600000,1545696000000,1545782400000,1545868800000,1545955200000,1546041600000,1546128000000,1546214400000,1546300800000,1546387200000,1546473600000,1546560000000,1546646400000,1546732800000,1546819200000,1546905600000,1546992000000,1547078400000,1547164800000,1547251200000,1547337600000,1547424000000,1547510400000,1547596800000,1547683200000,1547769600000,1547856000000,1547942400000,1548028800000,1548115200000,1548201600000,1548288000000,1548374400000,1548460800000,1548547200000,1548633600000,1548720000000,1548806400000,1548892800000,1548979200000,1549065600000,1549152000000,1549238400000,1549324800000,1549411200000,1549497600000,1549584000000,1549670400000,1549756800000,1549843200000,1549929600000,1550016000000,1550102400000,1550188800000,1550275200000,1550361600000,1550448000000,1550534400000,1550620800000,1550707200000,1550793600000,1550880000000,1550966400000,1551052800000,1551139200000,1551225600000,1551312000000,1551398400000,1551484800000,1551571200000,1551657600000,1551744000000,1551830400000,1551916800000,1552003200000],["y0",6706,7579,7798,8307,7866,7736,7816,7630,7536,7105,7178,7619,7917,7483,5772,5700,5435,4837,4716,4890,4753,4820,4538,12162,39444,25765,18012,14421,13249,11310,10377,9399,8917,8259,7902,9442,47596,36160,23866,18500,15488,13722,12270,13413,10574,7092,7159,7880,8821,8306,7780,7963,7837,7611,7334,7413,7015,6742,6557,6593,6680,6725,6345,5988,6365,9911,28833,19694,14873,11911,10498,9708,8893,8365,7960,7694,45529,42858,31508,23289,19147,15874,14551,13124,11778,10809,10522,9918,9436,8617,8765,8194,8035,7865,7573,7422,7047,7147,6861,6669,6363,12073,32381,21390,15311,12819,11655,10696,9678,9143,8296,7852],["y1",3522,4088,4146,4477,4202,4157,4177,4203,4223,3948,3946,3898,3979,4052,3279,3229,3302,3040,3054,2982,3077,2965,2973,5148,22485,13077,9055,7446,6824,5995,5787,5367,4997,4689,4630,4785,22365,15244,10626,8666,7681,6929,6219,6367,5402,4932,4844,5146,5265,4887,4714,4722,4718,4693,4746,4819,4455,4419,4323,4407,4277,11589,6100,5076,4769,8929,14002,9756,7520,6343,5633,5415,5052,4850,4624,4480,14102,24005,14263,10845,9028,7755,7197,7001,6737,6254,6150,5922,5603,5048,5423,5003,5035,4747,4814,4661,4462,4516,4221,4111,4053,12515,15781,10499,8175,6831,6287,5990,5590,5148,4760,4809]],"types":{"y0":"line","y1":"line","x":"x"},"names":{"y0":"#0","y1":"#1"},"colors":{"y0":"#3DC23F","y1":"#F34C44"}},{"columns":[["x",1542412800000,1542499200000,1542585600000,1542672000000,1542758400000,1542844800000,1542931200000,1543017600000,1543104000000,1543190400000,1543276800000,1543363200000,1543449600000,1543536000000,1543622400000,1543708800000,1543795200000,1543881600000,1543968000000,1544054400000,1544140800000,1544227200000,1544313600000,1544400000000,1544486400000,1544572800000,1544659200000,1544745600000,1544832000000,1544918400000,1545004800000,1545091200000,1545177600000,1545264000000,1545350400000,1545436800000,1545523200000,1545609600000,1545696000000,1545782400000,1545868800000,1545955200000,1546041600000,1546128000000,1546214400000,1546300800000,1546387200000,1546473600000,1546560000000,1546646400000,1546732800000,1546819200000,1546905600000,1546992000000,1547078400000,1547164800000,1547251200000,1547337600000,1547424000000,1547510400000,1547596800000,1547683200000,1547769600000,1547856000000,1547942400000,1548028800000,1548115200000,1548201600000,1548288000000,1548374400000,1548460800000,1548547200000,1548633600000,1548720000000,1548806400000,1548892800000,1548979200000,1549065600000,1549152000000,1549238400000,1549324800000,1549411200000,1549497600000,1549584000000,1549670400000,1549756800000,1549843200000,1549929600000,1550016000000,1550102400000,1550188800000,1550275200000,1550361600000,1550448000000,1550534400000,1550620800000,1550707200000,1550793600000,1550880000000,1550966400000,1551052800000,1551139200000,1551225600000,1551312000000,1551398400000,1551484800000,1551571200000,1551657600000,1551744000000,1551830400000,1551916800000,1552003200000],["y0",4747,4849,5045,5184,5746,5400,5424,5576,6436,5337,4840,5379,4678,4736,5074,4897,4349,5089,4543,5033,5047,4871,4812,4723,4545,4723,4721,4384,4277,4682,4805,4001,4610,5241,5113,4059,4529,4673,5291,5154,5123,5535,5540,5161,5666,5584,6999,6854,5083,5361,5863,5792,5586,6106,5481,5532,5853,5809,6244,6156,5596,5426,5422,5413,4795,5113,5279,5530,4939,4983,4984,5527,5765,5001,5818,6061,5956,5288,5837,5703,5440,5238,5957,6432,6389,6064,7065,5981,5779,6567,6320,5634,6023,5702,6066,5797,6163,6182,4906,5637,7073,6679,5831,6015,6266,6128,6156,6218,6050,6140,5877,7147],["y1",4605,5036,4956,5168,5008,5069,5223,5360,5695,5209,4796,5028,4931,5123,4987,4964,4982,5037,5050,5144,5049,4971,4911,4792,4562,4597,4759,4761,4646,4543,4597,4428,4213,4270,3961,4784,4699,4711,4855,4717,4563,4923,5041,4895,4877,5001,5410,5033,5045,5184,4976,5207,5354,5205,4887,4831,5083,5148,5369,5176,5022,4880,4969,5135,4836,4764,4782,4783,4646,4755,4744,4932,5059,4851,4614,4718,5018,5034,5223,5007,4839,4763,4761,5048,5330,5106,5956,5135,5006,4919,5511,5114,5122,5314,5089,5022,4918,4986,4626,4675,4951,4921,5173,5145,5209,4967,5030,5120,5030,4946,4795,5224]],"types":{"y0":"line","y1":"line","x":"x"},"names":{"y0":"#0","y1":"#1"},"colors":{"y0":"#3DC23F","y1":"#F34C44"}},{"columns":[["x",1542412800000,1542499200000,1542585600000,1542672000000,1542758400000,1542844800000,1542931200000,1543017600000,1543104000000,1543190400000,1543276800000,1543363200000,1543449600000,1543536000000,1543622400000,1543708800000,1543795200000,1543881600000,1543968000000,1544054400000,1544140800000,1544227200000,1544313600000,1544400000000,1544486400000,1544572800000,1544659200000,1544745600000,1544832000000,1544918400000,1545004800000,1545091200000,1545177600000,1545264000000,1545350400000,1545436800000,1545523200000,1545609600000,1545696000000,1545782400000,1545868800000,1545955200000,1546041600000,1546128000000,1546214400000,1546300800000,1546387200000,1546473600000,1546560000000,1546646400000,1546732800000,1546819200000,1546905600000,1546992000000,1547078400000,1547164800000,1547251200000,1547337600000,1547424000000,1547510400000,1547596800000,1547683200000,1547769600000,1547856000000,1547942400000,1548028800000,1548115200000,1548201600000,1548288000000,1548374400000,1548460800000,1548547200000,1548633600000,1548720000000,1548806400000,1548892800000,1548979200000,1549065600000,1549152000000,1549238400000,1549324800000,1549411200000,1549497600000,1549584000000,1549670400000,1549756800000,1549843200000,1549929600000,1550016000000,1550102400000,1550188800000,1550275200000,1550361600000,1550448000000,1550534400000,1550620800000,1550707200000,1550793600000,1550880000000,1550966400000,1551052800000,1551139200000,1551225600000,1551312000000,1551398400000,1551484800000,1551571200000,1551657600000,1551744000000,1551830400000,1551916800000,1552003200000],["y0",41,31,62,65,66,79,52,26,42,68,71,86,65,54,33,70,52,68,75,92,69,28,33,84,65,56,42,44,26,34,45,49,83,83,66,31,43,55,57,55,54,45,51,64,27,19,38,38,44,49,42,50,60,73,86,65,51,54,48,61,82,83,53,52,48,64,96,103,68,73,58,42,81,80,76,106,93,65,69,104,75,79,92,73,49,63,76,79,83,70,55,47,42,111,93,74,99,107,52,65,80,82,74,154,106,39,40,77,85,66,52,25],["y1",19,10,36,41,28,39,24,16,14,40,39,37,47,28,16,32,25,29,36,45,38,11,25,37,35,22,25,30,16,20,32,34,37,26,31,10,19,32,34,23,25,22,21,18,11,18,18,23,11,18,22,19,27,27,30,25,27,23,28,30,23,31,27,16,30,21,36,33,25,34,16,24,37,33,26,24,31,21,37,32,35,31,30,27,15,17,38,40,32,34,30,17,21,28,36,30,24,25,20,24,22,42,34,47,40,29,29,31,39,30,29,18]],"types":{"y0":"line","y1":"line","x":"x"},"names":{"y0":"#0","y1":"#1"},"colors":{"y0":"#3DC23F","y1":"#F34C44"}},{"columns":[["x",1520035200000,1520121600000,1520208000000,1520294400000,1520380800000,1520467200000,1520553600000,1520640000000,1520726400000,1520812800000,1520899200000,1520985600000,1521072000000,1521158400000,1521244800000,1521331200000,1521417600000,1521504000000,1521590400000,1521676800000,1521763200000,1521849600000,1521936000000,1522022400000,1522108800000,1522195200000,1522281600000,1522368000000,1522454400000,1522540800000,1522627200000,1522713600000,1522800000000,1522886400000,1522972800000,1523059200000,1523145600000,1523232000000,1523318400000,1523404800000,1523491200000,1523577600000,1523664000000,1523750400000,1523836800000,1523923200000,1524009600000,1524096000000,1524182400000,1524268800000,1524355200000,1524441600000,1524528000000,1524614400000,1524700800000,1524787200000,1524873600000,1524960000000,1525046400000,1525132800000,1525219200000,1525305600000,1525392000000,1525478400000,1525564800000,1525651200000,1525737600000,1525824000000,1525910400000,1525996800000,1526083200000,1526169600000,1526256000000,1526342400000,1526428800000,1526515200000,1526601600000,1526688000000,1526774400000,1526860800000,1526947200000,1527033600000,1527120000000,1527206400000,1527292800000,1527379200000,1527465600000,1527552000000,1527638400000,1527724800000,1527811200000,1527897600000,1527984000000,1528070400000,1528156800000,1528243200000,1528329600000,1528416000000,1528502400000,1528588800000,1528675200000,1528761600000,1528848000000,1528934400000,1529020800000,1529107200000,1529193600000,1529280000000,1529366400000,1529452800000,1529539200000,1529625600000,1529712000000,1529798400000,1529884800000,1529971200000,1530057600000,1530144000000,1530230400000,1530316800000,1530403200000,1530489600000,1530576000000,1530662400000,1530748800000,1530835200000,1530921600000,1531008000000,1531094400000,1531180800000,1531267200000,1531353600000,1531440000000,1531526400000,1531612800000,1531699200000,1531785600000,1531872000000,1531958400000,1532044800000,1532131200000,1532217600000,1532304000000,1532390400000,1532476800000,1532563200000,1532649600000,1532736000000,1532822400000,1532908800000,1532995200000,1533081600000,1533168000000,1533254400000,1533340800000,1533427200000,1533513600000,1533600000000,1533686400000,1533772800000,1533859200000,1533945600000,1534032000000,1534118400000,1534204800000,1534291200000,1534377600000,1534464000000,1534550400000,1534636800000,1534723200000,1534809600000,1534896000000,1534982400000,1535068800000,1535155200000,1535241600000,1535328000000,1535414400000,1535500800000,1535587200000,1535673600000,1535760000000,1535846400000,1535932800000,1536019200000,1536105600000,1536192000000,1536278400000,1536364800000,1536451200000,1536537600000,1536624000000,1536710400000,1536796800000,1536883200000,1536969600000,1537056000000,1537142400000,1537228800000,1537315200000,1537401600000,1537488000000,1537574400000,1537660800000,1537747200000,1537833600000,1537920000000,1538006400000,1538092800000,1538179200000,1538265600000,1538352000000,1538438400000,1538524800000,1538611200000,1538697600000,1538784000000,1538870400000,1538956800000,1539043200000,1539129600000,1539216000000,1539302400000,1539388800000,1539475200000,1539561600000,1539648000000,1539734400000,1539820800000,1539907200000,1539993600000,1540080000000,1540166400000,1540252800000,1540339200000,1540425600000,1540512000000,1540598400000,1540684800000,1540771200000,1540857600000,1540944000000,1541030400000,1541116800000,1541203200000,1541289600000,1541376000000,1541462400000,1541548800000,1541635200000,1541721600000,1541808000000,1541894400000,1541980800000,1542067200000,1542153600000,1542240000000,1542326400000,1542412800000,1542499200000,1542585600000,1542672000000,1542758400000,1542844800000,1542931200000,1543017600000,1543104000000,1543190400000,1543276800000,1543363200000,1543449600000,1543536000000,1543622400000,1543708800000,1543795200000,1543881600000,1543968000000,1544054400000,1544140800000,1544227200000,1544313600000,1544400000000,1544486400000,1544572800000,1544659200000,1544745600000,1544832000000,1544918400000,1545004800000,1545091200000,1545177600000,1545264000000,1545350400000,1545436800000,1545523200000,1545609600000,1545696000000,1545782400000,1545868800000,1545955200000,1546041600000,1546128000000,1546214400000,1546300800000,1546387200000,1546473600000,1546560000000,1546646400000,1546732800000,1546819200000,1546905600000,1546992000000,1547078400000,1547164800000,1547251200000,1547337600000,1547424000000,1547510400000,1547596800000,1547683200000,1547769600000,1547856000000,1547942400000,1548028800000,1548115200000,1548201600000,1548288000000,1548374400000,1548460800000,1548547200000,1548633600000,1548720000000,1548806400000,1548892800000,1548979200000,1549065600000,1549152000000,1549238400000,1549324800000,1549411200000,1549497600000,1549584000000,1549670400000,1549756800000,1549843200000,1549929600000,1550016000000,1550102400000,1550188800000,1550275200000,1550361600000,1550448000000,1550534400000,1550620800000,1550707200000,1550793600000,1550880000000,1550966400000,1551052800000,1551139200000,1551225600000,1551312000000,1551398400000,1551484800000,1551571200000,1551657600000,1551744000000,1551830400000,1551916800000,1552003200000,1552089600000],["y0",2298660,2253410,2515820,2506600,2460240,2408400,2317430,2240100,2295900,2609800,2594200,2626400,2615000,2617800,2394500,2391100,2608300,2676000,2637700,2766600,3186500,3067700,2570700,2935000,2949200,2913500,2763600,3216300,2343500,2361000,2580000,2591800,2595200,2569500,2587700,2372500,2351200,2465600,2625100,2651300,2686700,2783300,2417400,2383800,2736300,2751100,2678900,2622300,2586000,2365700,2407700,2541300,2600400,2581500,2576200,2550100,2334500,2139400,2015400,2019900,2210100,2191800,2240700,2107400,2026900,2258000,2255200,2123200,2267800,2236100,2065700,2093300,2315300,2333200,2349800,2318300,2275000,2110300,2077100,2335200,2357400,2350000,2293800,2303600,2118700,2100300,2219700,2361100,2349500,2347800,2318400,2141600,2178600,2432500,2448700,2440300,2450100,2424100,2229900,2152400,2402600,2401000,2418100,2408600,2408400,2212600,2189000,2450800,2444500,2451900,2451000,2442600,2287900,2221100,2451900,2460200,2460900,2319900,2270300,2183800,2195300,2485000,2460900,2500600,2495300,2479100,2290600,2235800,2459900,2484500,2491000,2525600,2477300,2223700,2146700,2528200,2567800,2556300,2540700,2503000,2301200,2251600,2538600,2596500,2553900,2534200,2527300,2337400,2332900,2688500,2585700,2559600,2651600,2586800,2445700,2472300,2633000,2664600,2649400,2648900,2644600,2406400,2426200,2694000,2740600,2711800,2700900,2645800,2422800,2438500,2697500,2712500,2690300,2684400,2517300,2435300,2444300,2781800,2807800,2804500,2771300,2798800,2633300,2597100,2946300,2889800,2949600,2951400,2928800,2701400,2709900,3012900,3019100,2977200,3012400,2989800,2752100,2749100,3033300,3050400,3023800,3066400,3047800,2792200,2799300,3096100,3132500,3082400,3071200,3021400,2818300,2737500,3037800,3123700,3138900,3181800,3118500,2834500,2826900,3171000,3175900,3184300,3195800,3129100,2834100,2876800,3019000,3214000,3227900,3189600,3187800,2886800,2880500,3218200,3253700,3260400,3243300,3204000,2962700,2968600,3282100,3618900,3017000,3037300,3044500,2758900,2784600,3032900,3132400,3075800,3108200,3076200,2851800,2837800,3107500,3146800,3145100,3145300,3158400,2872100,2823800,3190400,3209300,3170800,3195300,3183000,2910300,2937400,3297100,3293600,3278400,3234200,3224000,3013900,2955300,3303900,3323300,3352600,3348400,3340600,3110600,3066400,3409200,3462100,3394200,3383100,3433700,3184000,3092700,3417400,4505200,3094500,3106100,3083200,3005600,2866700,2984100,2954200,3086800,3070500,3040900,2903500,3592500,3316200,2930500,2961900,3009600,3027200,2871600,2831600,2881700,3054200,3116600,3120800,3157300,2950700,2982700,3192800,3223300,3219500,3235900,3214100,3004400,2963500,3280400,3262400,3256000,3258400,3264900,3107500,3057400,3326600,3332400,3357000,3365100,3359500,3127400,3130200,3367100,3422700,3436400,3431100,3600000,3146100,3170900,3467300,3483400,3473600,3454700,3390200,3213600,3188800,3498200,3498600,3493500,3478900,3446400,3239200,3229100,3559600,3563600,3549800,3577300,3524400,3282500,3271300,3599200,3575200,3554400,3540300,3450600,2812000],["y1",1130400,1065370,1211030,1215590,1206540,1206720,1085450,1047320,1071720,1253170,1261050,1264660,1260240,1264840,1130440,1121660,1294120,1290780,1284540,1302860,1296810,1165450,1128830,1302070,1304470,1307090,1268000,1302160,1159330,1163530,1327140,1320680,1319200,1306810,1287990,1121240,1145070,1132400,1310310,1329340,1340060,1333530,1167040,1153260,1356930,1366500,1375970,1378570,1357460,1192240,1188650,1386450,1400570,1395730,1404160,1378120,1195410,1082000,1189660,1197540,1367850,1389070,1386300,1282240,1209450,1409070,1409450,1271120,1424860,1399990,1240640,1248530,1451770,1460240,1466100,1460990,1446730,1268830,1263270,1473530,1476230,1480760,1460520,1454730,1263910,1227240,1303900,1474760,1473400,1477380,1466790,1285620,1280100,1491820,1499660,1496260,1485990,1473140,1301290,1273440,1487420,1494560,1500790,1508660,1489400,1301960,1297680,1501170,1503000,1488980,1501170,1479060,1367980,1296050,1493920,1487830,1479120,1338410,1318550,1266620,1285640,1487970,1489080,1489580,1475400,1471140,1316010,1271940,1476160,1480670,1491030,1480940,1477640,1305750,1296770,1483400,1494440,1495740,1485900,1484400,1319160,1284010,1488140,1502910,1503450,1485410,1498200,1323200,1303150,1506840,1523440,1521490,1516770,1504300,1327520,1307630,1518100,1521370,1521280,1521660,1517700,1349880,1333010,1543800,1553730,1546490,1541710,1532690,1367020,1354040,1560080,1564990,1565050,1561110,1406570,1340850,1368550,1600180,1630760,1621360,1636580,1652580,1489550,1465750,1731080,1730190,1732260,1730210,1724800,1519480,1520490,1758280,1774530,1770690,1781100,1762270,1551690,1541620,1787290,1795490,1802940,1799130,1778850,1560040,1564580,1822410,1819680,1812390,1814100,1798060,1587880,1589320,1833920,1843420,1851460,1845550,1822980,1596860,1595900,1866000,1860480,1862600,1863950,1827540,1585280,1588970,1683930,1879500,1883300,1879040,1846160,1639090,1632580,1895780,1897620,1906000,1906730,1895290,1670120,1670190,1914360,1932890,1933160,1921800,1898720,1673530,1685190,1937730,1951850,1949900,1949020,1923160,1718450,1704040,1964800,1975140,2002510,1985340,1959000,1736810,1727670,2006070,2013910,2012460,1999630,1977020,1754720,1778560,2060360,2057730,2055990,2036720,2027870,1824680,1794140,2067460,2078290,2094100,2080950,2062080,1836850,1828130,2102920,2112450,2098790,2116900,2080290,1863760,1841050,2105790,2106420,2151300,2098890,2085380,1955580,1819790,1916140,1913670,2080350,2058160,2034960,1911480,1823940,2087990,1774260,1833950,1906680,1902490,1760460,1748060,1775740,1974730,2013790,2026250,2022210,1835820,1835930,2096230,2098020,2095770,2114060,2099370,1902800,1854380,2132520,2143600,2146120,2143820,2157910,1929390,1905550,2183760,2185970,2198030,2198160,2182120,1950150,1931800,2215380,2216240,2226480,2220480,2208790,1972190,1957520,2253470,2247170,2245720,2285890,2220730,1986340,1967720,2264340,2270140,2267210,2268950,2246450,2048760,1994100,2288680,2296010,2313730,2311290,2293790,2034250,2025380,2326190,2323990,2320790,2271600,2244270,1663290],["y2",820900,766050,894390,894540,887590,814490,786610,744660,770920,930330,930190,942060,933690,922280,810770,809760,952010,959070,957020,955890,948250,825710,804970,958480,959090,970200,907010,950150,825240,820890,971020,973560,967940,960360,931820,795020,753860,808740,970000,981020,979810,975840,829690,819300,992290,998040,1006540,1013790,995130,848190,851890,1024210,1032210,1032290,1027510,1010090,850110,741740,844400,850410,1006690,1018470,1011630,916990,861050,1039650,1032640,904200,1045560,1022330,888970,896300,1073460,1074860,1074820,1074880,1057340,909410,906710,1078860,1092760,1083360,1078680,1067310,903090,858360,947540,1089590,1095060,1093130,1070660,915380,916530,1108410,1109460,1097230,1094520,1074630,915520,915750,1101730,1104580,1107930,1116850,1106360,928500,928210,1110530,1103230,1099970,1106180,1096060,982050,932620,1100880,1099970,1080040,959480,951360,902160,916070,1094120,1092530,1089290,1081760,1073320,937320,900010,1084910,1082620,1080960,1074050,1077810,925090,913970,1082900,1089240,1088890,1088720,1084170,938750,904060,1091540,1093660,1104520,1085860,1091880,939720,919790,1098590,1110310,1105580,1105220,1096580,940670,923480,1102360,1102760,1102280,1108680,1109210,955490,944730,1125380,1127440,1123070,1123910,1121160,966340,946940,1141980,1146790,1147420,1132920,990870,946370,964610,1171550,1187000,1186370,1199100,1213000,1062280,1035740,1274070,1276740,1280670,1282770,1257200,1085370,1080510,1293120,1308880,1302170,1317570,1298110,1111780,1106410,1317620,1318010,1332680,1328530,1305330,1113540,1119830,1340410,1348770,1346910,1352950,1324040,1139450,1136680,1355970,1364950,1377510,1375770,1338490,1140310,1151830,1374520,1374330,1378990,1372390,1347390,1135560,1121640,1217410,1390340,1392710,1383070,1372400,1170430,1169550,1404540,1412720,1414110,1417200,1388240,1194260,1188850,1416140,1425890,1426380,1410520,1388600,1197940,1197680,1432620,1448350,1436320,1438890,1412650,1222040,1215220,1454190,1456740,1490670,1470910,1438940,1243620,1241210,1483460,1489950,1488440,1482490,1465050,1261450,1281800,1552680,1527050,1526500,1511360,1497560,1302860,1292930,1547830,1550610,1546490,1547790,1525750,1324580,1321580,1576620,1575060,1570240,1574670,1543830,1341780,1341710,1577840,1565630,1580460,1569570,1543390,1431880,1301600,1401500,1401040,1530910,1526670,1498750,1383070,1284000,1401510,1189880,1309810,1380230,1383630,1254140,1216830,1243860,1442240,1481680,1480680,1490700,1315410,1300930,1530520,1532340,1539150,1541510,1532770,1344910,1325530,1563330,1568490,1580110,1575130,1564880,1369810,1359060,1608230,1605640,1605970,1601640,1590810,1381740,1375190,1625850,1621800,1629910,1628510,1609760,1397880,1392180,1647700,1646770,1644200,1667150,1610910,1408450,1395010,1652870,1658870,1660310,1659060,1629490,1435450,1407720,1675610,1682450,1682070,1693010,1669030,1448500,1439490,1710110,1702690,1707000,1662770,1512800,1101660],["y3",409540,377260,456380,460230,452020,389350,397230,369000,382180,473570,477470,477550,478030,466150,397480,406380,494570,494680,482810,487700,475090,400520,397940,484160,487740,493260,434500,475410,398650,404690,491980,493410,485250,484740,465490,377460,353960,396390,493300,497560,495110,485260,394770,402910,500540,506260,509680,514010,494350,405360,412560,513030,521320,515730,518170,499850,394960,328510,406450,408080,501980,507800,496990,442530,414260,525770,513440,442660,526810,500190,426220,436110,546820,543480,545420,540530,527770,431050,443100,549550,551600,548120,542290,528810,435370,407250,463200,553640,554110,555820,536470,440460,447740,563330,561850,556430,550910,539440,441200,442310,563100,563760,559230,570870,555280,447750,455570,564630,562510,556050,555560,556470,484080,451320,561060,553630,540660,473500,472500,438550,447590,548670,549580,539920,541510,540380,450260,432260,535950,545160,543810,536990,539680,446570,444470,543450,549070,547840,541430,540200,450080,431800,549290,545890,556300,536500,543890,450890,440180,550850,554740,553460,553440,546420,446710,436640,553270,547750,551920,547610,545500,449220,447510,560050,561560,561560,556630,559340,461630,456300,569070,574800,575220,566180,472200,450530,462960,590290,597250,592970,604870,613050,512200,495980,649860,645070,636950,647120,630390,518820,525990,661700,659770,660650,669560,644510,529610,539520,673850,668530,673770,669480,654540,536090,548400,690100,684900,687040,685940,666360,560140,553050,696740,694490,703000,697980,674460,548230,557370,697150,700110,701170,695810,669780,543500,540170,597430,711500,699770,698520,682170,568380,572950,715580,716050,720770,720660,695220,572970,578170,722280,724280,727910,719820,699840,580870,586270,729850,733680,726590,731270,709330,593070,600500,743590,743690,767660,747140,730510,607540,610480,762440,772960,763480,758490,741090,614450,645760,831130,792100,780410,778620,761000,643620,650320,802640,805900,803960,800580,783660,648310,668150,825940,818650,816630,821000,782790,657850,671660,817660,816020,821380,816280,800240,712510,648060,711170,709110,802240,792710,772260,691490,636050,649450,566120,651310,701910,702270,627880,605290,621710,744830,762830,765640,764140,648720,642430,786580,778790,780060,789170,772600,652160,648950,795360,802250,808010,801890,793490,669240,665310,814370,810880,814580,813950,802070,670450,674250,823010,820620,821400,820760,804300,681870,681460,831580,835600,835390,840770,810700,675170,680870,832000,836790,845630,844560,821810,690310,683810,851150,848090,846480,858340,831290,696470,695540,866980,868190,861720,834530,706650,439140]],"types":{"y0":"line","y1":"line","y2":"line","y3":"line","x":"x"},"names":{"y0":"#0","y1":"#1","y2":"#2","y3":"#3"},"colors":{"y0":"#cb513a","y1":"#73c03a","y2":"#65b9ac","y3":"#4682b4"}}];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart */ "./src/Chart.js");
/* harmony import */ var _chart_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart_data.json */ "./src/chart_data.json");
var _chart_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./chart_data.json */ "./src/chart_data.json", 1);





function parseData() {}

function main() {
  console.log(_chart_data_json__WEBPACK_IMPORTED_MODULE_3__);
  var chart0 = new _Chart__WEBPACK_IMPORTED_MODULE_2__["default"]({
    id: 'test_chart0',
    data: _chart_data_json__WEBPACK_IMPORTED_MODULE_3__[0]
  }, document.getElementById('root'));
  chart0.init();
  var chart1 = new _Chart__WEBPACK_IMPORTED_MODULE_2__["default"]({
    id: 'test_chart1',
    data: _chart_data_json__WEBPACK_IMPORTED_MODULE_3__[1]
  }, document.getElementById('root'));
  chart1.init();
  var chart2 = new _Chart__WEBPACK_IMPORTED_MODULE_2__["default"]({
    id: 'test_chart2',
    data: _chart_data_json__WEBPACK_IMPORTED_MODULE_3__[2]
  }, document.getElementById('root'));
  chart2.init();
  var chart3 = new _Chart__WEBPACK_IMPORTED_MODULE_2__["default"]({
    id: 'test_chart3',
    data: _chart_data_json__WEBPACK_IMPORTED_MODULE_3__[3]
  }, document.getElementById('root'));
  chart3.init();
  var chart4 = new _Chart__WEBPACK_IMPORTED_MODULE_2__["default"]({
    id: 'test_chart4',
    data: _chart_data_json__WEBPACK_IMPORTED_MODULE_3__[4]
  }, document.getElementById('root'));
  chart4.init();
}

main();

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzNhMDEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzPzdjYjMiXSwibmFtZXMiOlsiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiR1JJRF9MSU5FUyIsIkJPVFRPTV9TUEFDSU5HIiwiQVJFQV9DRU5URVIiLCJBUkVBX0JPVFRPTSIsIkFSRUFfQk9UVE9NX1BSRVZJRVciLCJBUkVBX0xFRlQiLCJNT05USFMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIkNoYXJ0IiwicGFyZW50RWxlbWVudCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwiY29sdW1ucyIsImNvbG9ycyIsIm5hbWVzIiwidHlwZXMiLCJwcm9wZXJDb2x1bW5zIiwiZm9yRWFjaCIsImNvbHVtbkRhdGEiLCJuYW1lIiwicHJvcHMiLCJ4UmFuZ2UiLCJwb2ludHMiLCJtb3VzZSIsIngiLCJ5IiwiZG93biIsImRvd25MZWZ0IiwiZG93blJpZ2h0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInNjYWxlIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInN0eWxlIiwiZ2V0Q29udGV4dCIsImN0eCIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJtb3VzZU1vdmUiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwiY29uc29sZSIsImxvZyIsInNhdmUiLCJjbGVhclJlY3QiLCJjYW52YXMiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJlbmRlckJvdHRvbUxhYmVscyIsInJlbmRlckxpbmVzIiwicmVuZGVyU2lkZUxhYmVscyIsInJlbmRlclByZXZpZXciLCJyZXN0b3JlIiwic2l6ZVdpZHRoIiwic2l6ZUhlaWdodCIsInN0YXJ0WSIsImRpc3RhbmNlIiwiYmVnaW5QYXRoIiwiaSIsInBvcyIsIk1hdGgiLCJmbG9vciIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZ2V0UG9pbnRzIiwieFBvaW50cyIsImdldEFyZWFQb3MiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlhfRElTVEFOQ0UiLCJjb3VudCIsImxlbmd0aCIsInBvaW50c0ludGVydmFsIiwicG9pbnRzRGlzdGFuY2UiLCJzdGFydFgiLCJvcHRpb25zIiwibW9udGgiLCJkYXkiLCJqIiwidGltZSIsImZpbGxUZXh0IiwiZGF0ZUNvbnZlcnRlciIsIm1heFkiLCJnZXRNYXhZIiwibGluZXNEaXN0YW5jZSIsImlzUHJldmlldyIsInlQb2ludHMiLCJwb2ludHNZRGlzdGFuY2UiLCJPYmplY3QiLCJrZXlzIiwieU5hbWUiLCJsaW5lIiwicmVuZGVyUHJldmlld1NlbGVjdGlvbiIsInhCZWdpbiIsInhFbmQiLCJyZWwiLCJ4MVJlcyIsIngyUmVzIiwieTFSZXMiLCJ5MlJlcyIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic2VsZWN0aW9uUG9zIiwibWF4IiwidmFsdWVzIiwibmV3TWF4IiwieFBvaW50c011bHRpcGxpZXIiLCJzdGFydCIsImVuZCIsInNsaWNlIiwieVBvaW50c0tleXMiLCJhcmVhIiwiZXZlbnQiLCJwYWdlWCIsIm9mZnNldExlZnQiLCJwYWdlWSIsIm9mZnNldFRvcCIsImFicyIsInRvTGVmdCIsIm1vdmVQb2ludHMiLCJuZXdYUmFuZ2VEaWZmIiwiY2VpbCIsInhSYW5nZURpc3RhbmNlIiwibmV3WFJhbmdlTGVmdCIsIm5ld1hSYW5nZVJpZ2h0IiwibmV3WFJhbmdlIiwiYmluZCIsIlVOSVhfdGltZXN0YW1wIiwiYSIsIkRhdGUiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwicGFyc2VEYXRhIiwibWFpbiIsImNoYXJ0cyIsImNoYXJ0MCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdCIsImNoYXJ0MSIsImNoYXJ0MiIsImNoYXJ0MyIsImNoYXJ0NCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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QUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0osY0FBYyxtQkFBTyxDQUFDLGtOQUF3SDs7QUFFOUksNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbiNyb290IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDVlbTtcXG59XFxuXFxuLyogY2FudmFzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn0gKi9cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuL25vcm1hbGl6ZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0yIS4vbm9ybWFsaXplLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxuY29uc3QgREVGQVVMVF9XSURUSCA9IDQ2MDtcbmNvbnN0IERFRkFVTFRfSEVJR0hUID0gNDE4O1xuXG5jb25zdCBHUklEX0xJTkVTID0gNjtcbmNvbnN0IEJPVFRPTV9TUEFDSU5HID0gODA7XG5cbmNvbnN0IEFSRUFfQ0VOVEVSID0gMTtcbmNvbnN0IEFSRUFfQk9UVE9NID0gMjtcbmNvbnN0IEFSRUFfQk9UVE9NX1BSRVZJRVcgPSAzO1xuY29uc3QgQVJFQV9MRUZUID0gNDtcblxuY29uc3QgTU9OVEhTID0gWydKYW4nLCdGZWInLCdNYXInLCdBcHInLCdNYXknLCdKdW4nLCdKdWwnLCdBdWcnLCdTZXAnLCdPY3QnLCdOb3YnLCdEZWMnXTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgIGlkLFxuICAgICAgd2lkdGggPSBERUZBVUxUX1dJRFRILFxuICAgICAgaGVpZ2h0ID0gREVGQVVMVF9IRUlHSFQsXG4gICAgICBkYXRhLFxuICAgIH0sIHBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHsgY29sdW1ucywgY29sb3JzLCBuYW1lcywgdHlwZXMgfSA9IGRhdGE7XG4gICAgICBjb25zdCBwcm9wZXJDb2x1bW5zID0ge307XG4gICAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCAuLi5kYXRhXSA9IGNvbHVtbkRhdGE7XG4gICAgICAgIHByb3BlckNvbHVtbnNbbmFtZV0gPSBkYXRhO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgcGFyZW50RWxlbWVudCxcbiAgICAgICAgY29sdW1uczogcHJvcGVyQ29sdW1ucyxcbiAgICAgICAgY29sb3JzLFxuICAgICAgICBuYW1lcyxcbiAgICAgICAgdHlwZXMsXG4gICAgICAgIHhSYW5nZTogWzUwLCAxMDBdLFxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMucG9pbnRzID0ge307XG4gICAgICB0aGlzLm1vdXNlID0ge3g6IDAsIHk6IDAsIGRvd246IGZhbHNlLCBkb3duTGVmdDogZmFsc2UsIGRvd25SaWdodDogZmFsc2V9O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICBjb25zdCB7IGlkLCBwYXJlbnRFbGVtZW50LCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzOyBcbiAgICAgIGlmICghaWQgfHwgIXBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcblxuICAgICAgY29uc3Qgc2NhbGUgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICBlbGVtZW50LndpZHRoID0gd2lkdGggKiBzY2FsZTtcbiAgICAgIH1cbiAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICBlbGVtZW50LmhlaWdodCA9IGhlaWdodCAqIHNjYWxlO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuZ2V0Q29udGV4dCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgLy9jdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgICAgY3R4LnNjYWxlKHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHRoaXMubW91c2VNb3ZlKGUpLCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLm1vdXNlRG93bihlKSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHRoaXMubW91c2VVcChlKSwgZmFsc2UpO1xuICAgICAgICAvL2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4gdGhpcy5tb3VzZVVwKGUpLCBmYWxzZSk7IFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2FudmFzLXVuc3VwcG9ydGVkIGNvZGUgaGVyZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMueFJhbmdlKTtcbiAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMuY2xpZW50V2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5jbGllbnRIZWlnaHQpO1xuICAgICAgdGhpcy5wb2ludHMgPSB7fTtcbiAgICAgIC8vdGhpcy5yZW5kZXJHcmlkKCk7XG4gICAgICB0aGlzLnJlbmRlckJvdHRvbUxhYmVscygpO1xuICAgICAgdGhpcy5yZW5kZXJMaW5lcygpO1xuICAgICAgdGhpcy5yZW5kZXJTaWRlTGFiZWxzKCk7XG5cbiAgICAgIHRoaXMucmVuZGVyUHJldmlldygpO1xuICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIHJlbmRlckdyaWQoKSB7XG4gICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgY29uc3Qgc2l6ZVdpZHRoID0gY3R4LmNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IHNpemVIZWlnaHQgPSBjdHguY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHN0YXJ0WSA9IHNpemVIZWlnaHQgLSBCT1RUT01fU1BBQ0lORztcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gc3RhcnRZIC8gR1JJRF9MSU5FUztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR1JJRF9MSU5FUzsgKytpKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IE1hdGguZmxvb3IoaSAqIGRpc3RhbmNlKTtcbiAgICAgICAgY3R4Lm1vdmVUbygwLCBzdGFydFkgLSBwb3MpOyBcbiAgICAgICAgY3R4LmxpbmVUbyhzaXplV2lkdGgsIHN0YXJ0WSAtIHBvcyk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5JztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIHJlbmRlckJvdHRvbUxhYmVscygpIHtcbiAgICAgIGNvbnN0IHt4OnhQb2ludHN9ID0gdGhpcy5nZXRQb2ludHMoKTtcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICBjb25zdCBbW3gxLHkxXSwgW3gyLHkyXV0gPSB0aGlzLmdldEFyZWFQb3MoQVJFQV9CT1RUT00pO1xuXG4gICAgICBjb25zdCB3aWR0aCA9IHgyLXgxO1xuXG4gICAgICBjb25zdCBYX0RJU1RBTkNFID0gMTAwO1xuICAgICAgbGV0IGNvdW50ID0gd2lkdGggLyBYX0RJU1RBTkNFO1xuICAgICAgY291bnQgPSBjb3VudCAtIGNvdW50JTQ7XG4gICAgICBjb25zdCBwb2ludHMgPSB4UG9pbnRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHBvaW50c0ludGVydmFsID0gTWF0aC5mbG9vcihwb2ludHMgLyBjb3VudCk7XG4gICAgICBjb25zdCBwb2ludHNEaXN0YW5jZSA9IHdpZHRoIC8gY291bnQ7XG4gICAgICBjb25zdCBzdGFydFggPSBwb2ludHNEaXN0YW5jZSAvIDI7XG4gICAgICBjb25zdCBzdGFydFkgPSB5MSArIDIwO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH07XG4gICAgICBmb3IgKGxldCBpID0gcG9pbnRzSW50ZXJ2YWwsIGogPSAwOyBpIDwgeFBvaW50cy5sZW5ndGggLSAxOyBpICs9IHBvaW50c0ludGVydmFsLCArK2opIHtcbiAgICAgICAgY29uc3QgdGltZSA9IHhQb2ludHNbaV07XG4gICAgICAgIGN0eC5maWxsVGV4dChkYXRlQ29udmVydGVyKHRpbWUpLCBNYXRoLmZsb29yKHN0YXJ0WCtwb2ludHNEaXN0YW5jZSpqKSwgc3RhcnRZKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJTaWRlTGFiZWxzKCkge1xuICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgIGNvbnN0IFtbeDEseTFdLCBbeDIseTJdXSA9IHRoaXMuZ2V0QXJlYVBvcyhBUkVBX0xFRlQpO1xuICAgICAgY29uc3QgbWF4WSA9IHRoaXMuZ2V0TWF4WSgpO1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgxMTEsIDExMSwgMTExLCAwLjEpJztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuXG4gICAgICBjb25zdCBoZWlnaHQgPSB5Mi15MTtcbiAgICAgIGNvbnN0IHdpZHRoID0geDIteDE7XG4gICAgICBjb25zdCBwb2ludHNEaXN0YW5jZSA9IGhlaWdodCAvIG1heFk7XG4gICAgICBjb25zdCBsaW5lc0Rpc3RhbmNlID0gaGVpZ2h0IC8gR1JJRF9MSU5FUztcbiAgICBcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR1JJRF9MSU5FUzsgKytpKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHkyIC0gaSAqIGxpbmVzRGlzdGFuY2U7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgcG9zKTsgXG4gICAgICAgIGN0eC5saW5lVG8od2lkdGgsIHBvcyk7XG4gICAgICAgIGN0eC5maWxsVGV4dChNYXRoLmZsb29yKGkqbGluZXNEaXN0YW5jZS9wb2ludHNEaXN0YW5jZSksIDAsIE1hdGguZmxvb3IocG9zIC0gMTApKTtcbiAgICAgIH1cbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICByZW5kZXJMaW5lcyhpc1ByZXZpZXcgPSBmYWxzZSkge1xuICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICBjb25zdCB7IGNvbG9ycyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge3g6eFBvaW50cywgLi4ueVBvaW50c30gPSB0aGlzLmdldFBvaW50cyhpc1ByZXZpZXcpO1xuICAgICAgY29uc3QgW1t4MSx5MV0sIFt4Mix5Ml1dID0gdGhpcy5nZXRBcmVhUG9zKGlzUHJldmlldyA/IEFSRUFfQk9UVE9NX1BSRVZJRVcgOiBBUkVBX0NFTlRFUik7XG5cblxuICAgICAgY29uc3Qgd2lkdGggPSB4Mi14MTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHkyLXkxO1xuICAgICAgY29uc3QgcG9pbnRzRGlzdGFuY2UgPSB3aWR0aCAvICh4UG9pbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3Qgc3RhcnRZID0geTI7XG4gICAgICBjb25zdCBtYXhZID0gdGhpcy5nZXRNYXhZKGlzUHJldmlldyk7XG4gICAgICBjb25zdCBwb2ludHNZRGlzdGFuY2UgPSBoZWlnaHQgLyBtYXhZO1xuXG4gICAgICBjdHgubGluZVdpZHRoID0gMi41O1xuICAgICAgT2JqZWN0LmtleXMoeVBvaW50cykuZm9yRWFjaCh5TmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSB5UG9pbnRzW3lOYW1lXTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbeU5hbWVdO1xuICAgICAgICBsaW5lLmZvckVhY2goKHksIGkpID0+IHtcbiAgICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1t5XTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oTWF0aC5mbG9vcihpKnBvaW50c0Rpc3RhbmNlKSwgTWF0aC5mbG9vcihzdGFydFkteSpwb2ludHNZRGlzdGFuY2UpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3R4LmxpbmVUbyhNYXRoLmZsb29yKGkqcG9pbnRzRGlzdGFuY2UpLCBNYXRoLmZsb29yKHN0YXJ0WS15KnBvaW50c1lEaXN0YW5jZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJldmlldygpIHtcbiAgICAgIHRoaXMucmVuZGVyTGluZXModHJ1ZSk7XG4gICAgICB0aGlzLnJlbmRlclByZXZpZXdTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICByZW5kZXJQcmV2aWV3U2VsZWN0aW9uKCkge1xuICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICBjb25zdCBbW3gxLHkxXSxbeDIseTJdXSA9IHRoaXMuZ2V0QXJlYVBvcyhBUkVBX0JPVFRPTV9QUkVWSUVXKTtcbiAgICAgIGNvbnN0IHsgeFJhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgW3hCZWdpbiwgeEVuZF0gPSB4UmFuZ2U7XG5cbiAgICAgIGNvbnN0IHJlbCA9ICh4Mi14MSkvMTAwO1xuXG4gICAgICBjb25zdCB4MVJlcyA9IHgxICsgeEJlZ2luKnJlbDtcbiAgICAgIGNvbnN0IHgyUmVzID0geEVuZCpyZWwgKyB4MTtcbiAgICAgIGNvbnN0IHkxUmVzID0geTE7XG4gICAgICBjb25zdCB5MlJlcyA9IHkyO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjM0LDIzNCwyNDUsIDAuOTUpJztcbiAgICAgIGN0eC5maWxsUmVjdCh4MVJlcywgeTFSZXMtMTAsIDUsIHkyUmVzLXkxUmVzKzEwKTtcbiAgICAgIGN0eC5maWxsUmVjdCh4MlJlcyAtIDUsIHkxUmVzLTEwLCA1LCB5MlJlcy15MVJlcysxMCk7XG4gICAgICBjdHguZmlsbFJlY3QoeDFSZXMsIHkxUmVzLTEwLCB4MlJlcy14MVJlcywgMik7XG4gICAgICBjdHguZmlsbFJlY3QoeDFSZXMsIHkyUmVzLTIsIHgyUmVzLXgxUmVzLCAyKTtcblxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuICAgICAgLy9jdHguZmlsbFJlY3QoeDFSZXMrNSwgeTFSZXMtOCwgeDJSZXMteDFSZXMtMTAsIHkyUmVzLXkxUmVzKzYpO1xuICAgICAgdGhpcy5zZWxlY3Rpb25Qb3MgPSBbW3gxUmVzLCB5MVJlc10sW3gyUmVzLCB5MlJlc11dO1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjQ2LDI0OSwyNTEsMC41KSc7XG4gICAgICBjdHguZmlsbFJlY3QoeDEseTEtMTAseDFSZXMseTIteTErMTApO1xuICAgICAgY3R4LmZpbGxSZWN0KHgyUmVzLHkxLTEwLHgyLHkyLXkxKzEwKTtcbiAgICB9XG5cbiAgICBnZXRNYXhZKGlzUHJldmlldyA9IGZhbHNlKSB7XG4gICAgICBjb25zdCB7eCwgLi4ueVBvaW50c30gPSB0aGlzLmdldFBvaW50cyhpc1ByZXZpZXcpO1xuICAgICAgbGV0IG1heCA9IDA7XG4gICAgICBPYmplY3QudmFsdWVzKHlQb2ludHMpLmZvckVhY2godmFsdWVzID0+IHtcbiAgICAgICAgY29uc3QgbmV3TWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgICAgICAgaWYgKG1heCA8IG5ld01heCkge1xuICAgICAgICAgIG1heCA9IG5ld01heDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWF4O1xuICAgIH1cblxuICAgIGdldFBvaW50cyhpc1ByZXZpZXcgPSBmYWxzZSkge1xuICAgICAgaWYgKHRoaXMucG9pbnRzW2lzUHJldmlld10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2lzUHJldmlld107XG4gICAgICB9XG4gICAgICBjb25zdCB7IHhSYW5nZSwgY29sdW1ucyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGxldCB7IHg6IHhQb2ludHMsIC4uLnlQb2ludHMgfSA9IGNvbHVtbnM7XG5cbiAgICAgIGlmICghaXNQcmV2aWV3ICYmICF4UmFuZ2UgIT0gWzAsIDEwMF0pIHtcbiAgICAgICAgY29uc3QgW3hCZWdpbiwgeEVuZF0gPSB4UmFuZ2U7XG4gICAgICAgIGNvbnN0IHhQb2ludHNNdWx0aXBsaWVyID0geFBvaW50cy5sZW5ndGggLyAxMDBcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLmZsb29yKHhCZWdpbip4UG9pbnRzTXVsdGlwbGllcik7XG4gICAgICAgIGNvbnN0IGVuZCA9IE1hdGguZmxvb3IoeEVuZCp4UG9pbnRzTXVsdGlwbGllcik7XG4gICAgICAgIHhQb2ludHMgPSB4UG9pbnRzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXG4gICAgICAgIGNvbnN0IHlQb2ludHNLZXlzID0gT2JqZWN0LmtleXMoeVBvaW50cyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeVBvaW50c0tleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICB5UG9pbnRzW3lQb2ludHNLZXlzW2ldXSA9IHlQb2ludHNbeVBvaW50c0tleXNbaV1dLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvaW50cyA9IHsgeDogeFBvaW50cywgLi4ueVBvaW50cyB9O1xuICAgICAgdGhpcy5wb2ludHNbaXNQcmV2aWV3XSA9IHBvaW50cztcbiAgICAgIHJldHVybiBwb2ludHNcbiAgICB9XG5cbiAgICBnZXRBcmVhUG9zKGFyZWEpIHtcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgY29uc3Qgc2l6ZVdpZHRoID0gY3R4LmNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IHNpemVIZWlnaHQgPSBjdHguY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICAgIHN3aXRjaChhcmVhKSB7XG4gICAgICAgIGNhc2UgQVJFQV9DRU5URVI6XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFswLCAwXSxcbiAgICAgICAgICAgIFtzaXplV2lkdGgsIHNpemVIZWlnaHQgLSBCT1RUT01fU1BBQ0lOR11cbiAgICAgICAgICBdO1xuICAgICAgICBjYXNlIEFSRUFfQk9UVE9NOlxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbMCwgc2l6ZUhlaWdodCAtIEJPVFRPTV9TUEFDSU5HXSxcbiAgICAgICAgICAgIFtzaXplV2lkdGgsIHNpemVIZWlnaHRdXG4gICAgICAgICAgXTtcbiAgICAgICAgY2FzZSBBUkVBX0JPVFRPTV9QUkVWSUVXOlxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbMCwgc2l6ZUhlaWdodCAtIEJPVFRPTV9TUEFDSU5HLzJdLFxuICAgICAgICAgICAgW3NpemVXaWR0aCwgc2l6ZUhlaWdodF1cbiAgICAgICAgICBdO1xuICAgICAgICBjYXNlIEFSRUFfTEVGVDpcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgWzAsIDBdLFxuICAgICAgICAgICAgW3NpemVXaWR0aCwgc2l6ZUhlaWdodCAtIEJPVFRPTV9TUEFDSU5HXVxuICAgICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VEb3duKCBldmVudCApe1xuICAgICAgaWYgKHRoaXMubW91c2UuZG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB4ID0gZXZlbnQucGFnZVggLSB0aGlzLmVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgIGNvbnN0IHkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICBcbiAgICAgIGNvbnN0IFtbeDEseTFdLFt4Mix5Ml1dID0gdGhpcy5zZWxlY3Rpb25Qb3M7XG4gICAgICBpZiAoeCA8IHgxIHx8IHggPiB4MiB8fCB5IDwgeTEgfHwgeSA+IHkyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChNYXRoLmFicyh4IC0geDEpIDw9IDUpIHtcbiAgICAgICAgdGhpcy5tb3VzZS5kb3duID0gJ2xlZnQnO1xuICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyh4IC0geDIpIDw9IDUpIHtcbiAgICAgICAgdGhpcy5tb3VzZS5kb3duID0gJ3JpZ2h0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW91c2UuZG93biA9ICdjZW50ZXInO1xuICAgICAgfVxuICAgICAgdGhpcy5tb3VzZS54ID0geDtcbiAgICAgIHRoaXMubW91c2UueSA9IHk7XG4gICAgfVxuXG4gICAgbW91c2VVcCggZXZlbnQgKXtcbiAgICAgIHRoaXMubW91c2UuZG93biA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coJ21vdXNlIHVwJyk7XG4gICAgfVxuXG4gICAgbW91c2VNb3ZlICggZXZlbnQgKXtcbiAgICAgIGlmICghdGhpcy5tb3VzZS5kb3duKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHggPSBldmVudC5wYWdlWCAtIHRoaXMuZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgY29uc3QgeSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIGNvbnN0IHRvTGVmdCA9IHRoaXMubW91c2UueCA+IHg7ICAgXG4gICAgICBjb25zdCBtb3ZlUG9pbnRzID0gdGhpcy5tb3VzZS54IC0geDsgXG4gICAgICBjb25zdCBbW3gxLHkxXSxbeDIseTJdXSA9IHRoaXMuZ2V0QXJlYVBvcyhBUkVBX0JPVFRPTV9QUkVWSUVXKTtcbiAgICAgIGNvbnN0IHJlbCA9ICh4Mi14MSkvMTAwO1xuICAgICAgY29uc3QgbmV3WFJhbmdlRGlmZiA9IHRvTGVmdCA/IE1hdGguZmxvb3IobW92ZVBvaW50cy9yZWwpIDogTWF0aC5jZWlsKG1vdmVQb2ludHMvcmVsKTtcbiAgICAgIGlmICghbmV3WFJhbmdlRGlmZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm1vdXNlLnggPSB4O1xuICAgICAgdGhpcy5tb3VzZS55ID0geTtcbiAgICAgIGNvbnN0IFt4QmVnaW4sIHhFbmRdID0gdGhpcy5wcm9wcy54UmFuZ2U7XG4gICAgICBjb25zdCB4UmFuZ2VEaXN0YW5jZSA9IHRoaXMubW91c2UuZG93biA9PT0gJ2NlbnRlcicgPyB4RW5kIC0geEJlZ2luIDogMDtcbiAgICBcblxuICAgICAgbGV0IG5ld1hSYW5nZUxlZnQgPSB4QmVnaW47XG4gICAgICBsZXQgbmV3WFJhbmdlUmlnaHQgPSB4RW5kO1xuICAgICAgaWYgKHRoaXMubW91c2UuZG93biA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgaWYgKHRvTGVmdCAmJiB4QmVnaW4gPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0b0xlZnQgJiYgeEVuZCA9PT0gMTAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1hSYW5nZSA9IHRvTGVmdCA/IHhCZWdpbiAtIG5ld1hSYW5nZURpZmYgOiB4RW5kIC0gbmV3WFJhbmdlRGlmZjtcbiAgICAgICAgaWYgKHRvTGVmdCAmJiBuZXdYUmFuZ2UgPCB4QmVnaW4pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTW92ZSB0byBsZWZ0ICcgKyBuZXdYUmFuZ2UgKyAnICcgKyB4QmVnaW4pO1xuICAgICAgICAgIG5ld1hSYW5nZUxlZnQgPSBuZXdYUmFuZ2U7XG4gICAgICAgICAgbmV3WFJhbmdlUmlnaHQgPSB4UmFuZ2VEaXN0YW5jZSA/IG5ld1hSYW5nZSArIHhSYW5nZURpc3RhbmNlIDogeEVuZDtcbiAgICAgICAgfSBlbHNlIGlmICghdG9MZWZ0ICYmIG5ld1hSYW5nZSA+IHhFbmQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTW92ZSB0byByaWdodCAnICsgbmV3WFJhbmdlICsgJyAnICsgeEVuZCk7XG4gICAgICAgICAgbmV3WFJhbmdlTGVmdCA9IHhSYW5nZURpc3RhbmNlID8gbmV3WFJhbmdlIC0geFJhbmdlRGlzdGFuY2UgOiB4QmVnaW47XG4gICAgICAgICAgbmV3WFJhbmdlUmlnaHQgPSBuZXdYUmFuZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdYUmFuZ2VMZWZ0IDwgMCkge1xuICAgICAgICAgIG5ld1hSYW5nZUxlZnQgPSAwO1xuICAgICAgICAgIG5ld1hSYW5nZVJpZ2h0ID0gbmV3WFJhbmdlTGVmdCArIHhSYW5nZURpc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdYUmFuZ2VSaWdodCA+IDEwMCkge1xuICAgICAgICAgIG5ld1hSYW5nZVJpZ2h0ID0gMTAwO1xuICAgICAgICAgIG5ld1hSYW5nZUxlZnQgPSBuZXdYUmFuZ2VSaWdodCAtIHhSYW5nZURpc3RhbmNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdYUmFuZ2VMZWZ0ID0gdGhpcy5tb3VzZS5kb3duID09PSAnbGVmdCcgPyAoeEJlZ2luIC0gbmV3WFJhbmdlRGlmZikgOiB4QmVnaW47XG4gICAgICAgIG5ld1hSYW5nZVJpZ2h0ID0gdGhpcy5tb3VzZS5kb3duID09PSAncmlnaHQnID8gKHhFbmQgLSBuZXdYUmFuZ2VEaWZmKSA6IHhFbmQ7XG5cbiAgICAgICAgaWYgKG5ld1hSYW5nZVJpZ2h0IC0gbmV3WFJhbmdlTGVmdCA8IDIwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdub3JtIHRvIDIwJyk7XG4gICAgICAgICAgaWYgKHRvTGVmdCkge1xuICAgICAgICAgICAgbmV3WFJhbmdlUmlnaHQgPSBuZXdYUmFuZ2VMZWZ0ICsgMjA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1hSYW5nZUxlZnQgPSBuZXdYUmFuZ2VSaWdodCAtIDIwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3WFJhbmdlTGVmdCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygnbm9ybSB0byAwJyk7XG5cbiAgICAgICAgbmV3WFJhbmdlTGVmdCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAobmV3WFJhbmdlUmlnaHQgPiAxMDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZygnbm9ybSB0byAxMDAnKTtcblxuICAgICAgICBuZXdYUmFuZ2VSaWdodCA9IDEwMDtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdYUmFuZ2VMZWZ0ICE9PSB4QmVnaW4gfHwgbmV3WFJhbmdlUmlnaHQgIT09IHhFbmQpIHsgXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1hSYW5nZUxlZnQsIG5ld1hSYW5nZVJpZ2h0KTtcbiAgICAgICAgdGhpcy5wcm9wcy54UmFuZ2UgPSBbbmV3WFJhbmdlTGVmdCwgbmV3WFJhbmdlUmlnaHRdO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGRhdGVDb252ZXJ0ZXIoVU5JWF90aW1lc3RhbXApe1xuICB2YXIgYSA9IG5ldyBEYXRlKFVOSVhfdGltZXN0YW1wICogMTAwMCk7XG4gIHZhciBtb250aCA9IE1PTlRIU1thLmdldE1vbnRoKCldO1xuICB2YXIgZGF0ZSA9IGEuZ2V0RGF0ZSgpO1xuICByZXR1cm4gbW9udGggKyAnICcgKyBkYXRlO1xufSIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcbmltcG9ydCBjaGFydHMgZnJvbSAnLi9jaGFydF9kYXRhLmpzb24nO1xuXG5cbmZ1bmN0aW9uIHBhcnNlRGF0YSgpIHtcblxufVxuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zb2xlLmxvZyhjaGFydHMpO1xuICBjb25zdCBjaGFydDAgPSBuZXcgQ2hhcnQoe1xuICAgIGlkOiAndGVzdF9jaGFydDAnLFxuICAgIGRhdGE6IGNoYXJ0c1swXSxcbiAgfSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4gIGNoYXJ0MC5pbml0KCk7XG5cbiAgY29uc3QgY2hhcnQxID0gbmV3IENoYXJ0KHtcbiAgICBpZDogJ3Rlc3RfY2hhcnQxJyxcbiAgICBkYXRhOiBjaGFydHNbMV0sXG4gIH0sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuICBjaGFydDEuaW5pdCgpO1xuXG4gIGNvbnN0IGNoYXJ0MiA9IG5ldyBDaGFydCh7XG4gICAgaWQ6ICd0ZXN0X2NoYXJ0MicsXG4gICAgZGF0YTogY2hhcnRzWzJdLFxuICB9LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiAgY2hhcnQyLmluaXQoKTtcblxuICBjb25zdCBjaGFydDMgPSBuZXcgQ2hhcnQoe1xuICAgIGlkOiAndGVzdF9jaGFydDMnLFxuICAgIGRhdGE6IGNoYXJ0c1szXSxcbiAgfSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4gIGNoYXJ0My5pbml0KCk7XG5cbiAgY29uc3QgY2hhcnQ0ID0gbmV3IENoYXJ0KHtcbiAgICBpZDogJ3Rlc3RfY2hhcnQ0JyxcbiAgICBkYXRhOiBjaGFydHNbNF0sXG4gIH0sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuICBjaGFydDQuaW5pdCgpO1xufVxuXG5tYWluKCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuL21haW4uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuL21haW4uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==