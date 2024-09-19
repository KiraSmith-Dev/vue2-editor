/*!
 * vue2-editor v2.10.3 
 * (c) 2024 David Royer
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('quill')) :
  typeof define === 'function' && define.amd ? define(['exports', 'quill'], factory) :
  (global = global || self, factory(global.Vue2Editor = {}, global.Quill));
}(this, function (exports, Quill) { 'use strict';

  Quill = Quill && Quill.hasOwnProperty('default') ? Quill['default'] : Quill;

  var defaultToolbar = [[{
    header: [false, 1, 2, 3, 4, 5, 6]
  }], ["bold", "italic", "underline", "strike"],
  // toggled buttons
  [{
    align: ""
  }, {
    align: "center"
  }, {
    align: "right"
  }, {
    align: "justify"
  }], ["blockquote", "code-block"], [{
    list: "ordered"
  }, {
    list: "bullet"
  }, {
    list: "check"
  }], [{
    indent: "-1"
  }, {
    indent: "+1"
  }],
  // outdent/indent
  [{
    color: []
  }, {
    background: []
  }],
  // dropdown with defaults from theme
  ["link", "image", "video"], ["clean"] // remove formatting button
  ];

  var oldApi = {
    props: {
      customModules: Array
    },
    methods: {
      registerCustomModules: function registerCustomModules(Quill) {
        if (this.customModules !== undefined) {
          this.customModules.forEach(function (customModule) {
            Quill.register("modules/" + customModule.alias, customModule.module);
          });
        }
      }
    }
  };

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  /**
   * Performs a deep merge of `source` into `target`.
   * Mutates `target` only but not its objects and arrays.
   *
   */

  function mergeDeep(target, source) {
    var isObject = function isObject(obj) {
      return obj && _typeof(obj) === "object";
    };
    if (!isObject(target) || !isObject(source)) {
      return source;
    }
    Object.keys(source).forEach(function (key) {
      var targetValue = target[key];
      var sourceValue = source[key];
      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = targetValue.concat(sourceValue);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
      } else {
        target[key] = sourceValue;
      }
    });
    return target;
  }

  var BlockEmbed = Quill.import("blots/block/embed");
  var HorizontalRule = /*#__PURE__*/function (_BlockEmbed) {
    function HorizontalRule() {
      _classCallCheck(this, HorizontalRule);
      return _callSuper(this, HorizontalRule, arguments);
    }
    _inherits(HorizontalRule, _BlockEmbed);
    return _createClass(HorizontalRule);
  }(BlockEmbed);
  HorizontalRule.blotName = "hr";
  HorizontalRule.tagName = "hr";
  Quill.register("formats/horizontal", HorizontalRule);
  var MarkdownShortcuts = /*#__PURE__*/function () {
    function MarkdownShortcuts(quill, options) {
      var _this = this;
      _classCallCheck(this, MarkdownShortcuts);
      this.quill = quill;
      this.options = options;
      this.ignoreTags = ["PRE"];
      this.matches = [{
        name: "header",
        pattern: /^(#){1,6}\s/g,
        action: function action(text, selection, pattern) {
          var match = pattern.exec(text);
          if (!match) return;
          var size = match[0].length;
          // Need to defer this action https://github.com/quilljs/quill/issues/1134
          setTimeout(function () {
            _this.quill.formatLine(selection.index, 0, "header", size - 1);
            _this.quill.deleteText(selection.index - size, size);
          }, 0);
        }
      }, {
        name: "blockquote",
        pattern: /^(>)\s/g,
        action: function action(_text, selection) {
          // Need to defer this action https://github.com/quilljs/quill/issues/1134
          setTimeout(function () {
            _this.quill.formatLine(selection.index, 1, "blockquote", true);
            _this.quill.deleteText(selection.index - 2, 2);
          }, 0);
        }
      }, {
        name: "code-block",
        pattern: /^`{3}(?:\s|\n)/g,
        action: function action(_text, selection) {
          // Need to defer this action https://github.com/quilljs/quill/issues/1134
          setTimeout(function () {
            _this.quill.formatLine(selection.index, 1, "code-block", true);
            _this.quill.deleteText(selection.index - 4, 4);
          }, 0);
        }
      }, {
        name: "bolditalic",
        pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);
            _this.quill.insertText(startIndex, matchedText, {
              bold: true,
              italic: true
            });
            _this.quill.format("bold", false);
          }, 0);
        }
      }, {
        name: "bold",
        pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);
            _this.quill.insertText(startIndex, matchedText, {
              bold: true
            });
            _this.quill.format("bold", false);
          }, 0);
        }
      }, {
        name: "italic",
        pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);
            _this.quill.insertText(startIndex, matchedText, {
              italic: true
            });
            _this.quill.format("italic", false);
          }, 0);
        }
      }, {
        name: "strikethrough",
        pattern: /(?:~~)(.+?)(?:~~)/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);
            _this.quill.insertText(startIndex, matchedText, {
              strike: true
            });
            _this.quill.format("strike", false);
          }, 0);
        }
      }, {
        name: "code",
        pattern: /(?:`)(.+?)(?:`)/g,
        action: function action(text, _selection, pattern, lineStart) {
          var match = pattern.exec(text);
          var annotatedText = match[0];
          var matchedText = match[1];
          var startIndex = lineStart + match.index;
          if (text.match(/^([*_ \n]+)$/g)) return;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, annotatedText.length);
            _this.quill.insertText(startIndex, matchedText, {
              code: true
            });
            _this.quill.format("code", false);
            _this.quill.insertText(_this.quill.getSelection(), " ");
          }, 0);
        }
      }, {
        name: "hr",
        pattern: /^([-*]\s?){3}/g,
        action: function action(text, selection) {
          var startIndex = selection.index - text.length;
          setTimeout(function () {
            _this.quill.deleteText(startIndex, text.length);
            _this.quill.insertEmbed(startIndex + 1, "hr", true, Quill.sources.USER);
            _this.quill.insertText(startIndex + 2, "\n", Quill.sources.SILENT);
            _this.quill.setSelection(startIndex + 2, Quill.sources.SILENT);
          }, 0);
        }
      }, {
        name: "asterisk-ul",
        pattern: /^(\*|\+)\s$/g,
        // eslint-disable-next-line no-unused-vars
        action: function action(_text, selection, _pattern) {
          setTimeout(function () {
            _this.quill.formatLine(selection.index, 1, "list", "unordered");
            _this.quill.deleteText(selection.index - 2, 2);
          }, 0);
        }
      }, {
        name: "image",
        pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
        action: function action(text, selection, pattern) {
          var startIndex = text.search(pattern);
          var matchedText = text.match(pattern)[0];
          // const hrefText = text.match(/(?:!\[(.*?)\])/g)[0]
          var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
          var start = selection.index - matchedText.length - 1;
          if (startIndex !== -1) {
            setTimeout(function () {
              _this.quill.deleteText(start, matchedText.length);
              _this.quill.insertEmbed(start, "image", hrefLink.slice(1, hrefLink.length - 1));
            }, 0);
          }
        }
      }, {
        name: "link",
        pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
        action: function action(text, selection, pattern) {
          var startIndex = text.search(pattern);
          var matchedText = text.match(pattern)[0];
          var hrefText = text.match(/(?:\[(.*?)\])/g)[0];
          var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
          var start = selection.index - matchedText.length - 1;
          if (startIndex !== -1) {
            setTimeout(function () {
              _this.quill.deleteText(start, matchedText.length);
              _this.quill.insertText(start, hrefText.slice(1, hrefText.length - 1), "link", hrefLink.slice(1, hrefLink.length - 1));
            }, 0);
          }
        }
      }];

      // Handler that looks for insert deltas that match specific characters
      // eslint-disable-next-line no-unused-vars
      this.quill.on("text-change", function (delta, _oldContents, _source) {
        for (var i = 0; i < delta.ops.length; i++) {
          if (delta.ops[i].hasOwnProperty("insert")) {
            if (delta.ops[i].insert === " ") {
              _this.onSpace();
            } else if (delta.ops[i].insert === "\n") {
              _this.onEnter();
            }
          }
        }
      });
    }
    return _createClass(MarkdownShortcuts, [{
      key: "isValid",
      value: function isValid(text, tagName) {
        return typeof text !== "undefined" && text && this.ignoreTags.indexOf(tagName) === -1;
      }
    }, {
      key: "onSpace",
      value: function onSpace() {
        var selection = this.quill.getSelection();
        if (!selection) return;
        var _this$quill$getLine = this.quill.getLine(selection.index),
          _this$quill$getLine2 = _slicedToArray(_this$quill$getLine, 2),
          line = _this$quill$getLine2[0],
          offset = _this$quill$getLine2[1];
        var text = line.domNode.textContent;
        var lineStart = selection.index - offset;
        if (this.isValid(text, line.domNode.tagName)) {
          var _iterator = _createForOfIteratorHelper(this.matches),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var match = _step.value;
              var matchedText = text.match(match.pattern);
              if (matchedText) {
                // We need to replace only matched text not the whole line
                console.log("matched:", match.name, text);
                match.action(text, selection, match.pattern, lineStart);
                return;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }, {
      key: "onEnter",
      value: function onEnter() {
        var selection = this.quill.getSelection();
        if (!selection) return;
        var _this$quill$getLine3 = this.quill.getLine(selection.index),
          _this$quill$getLine4 = _slicedToArray(_this$quill$getLine3, 2),
          line = _this$quill$getLine4[0],
          offset = _this$quill$getLine4[1];
        var text = line.domNode.textContent + " ";
        var lineStart = selection.index - offset;
        selection.length = selection.index++;
        if (this.isValid(text, line.domNode.tagName)) {
          var _iterator2 = _createForOfIteratorHelper(this.matches),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var match = _step2.value;
              var matchedText = text.match(match.pattern);
              if (matchedText) {
                console.log("matched", match.name, text);
                match.action(text, selection, match.pattern, lineStart);
                return;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }]);
  }(); // module.exports = MarkdownShortcuts;

  //
  var script = {
    name: "VueEditor",
    mixins: [oldApi],
    props: {
      id: {
        type: String,
        default: "quill-container"
      },
      placeholder: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean
      },
      editorToolbar: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      editorOptions: {
        type: Object,
        required: false,
        default: function _default() {
          return {};
        }
      },
      useCustomImageHandler: {
        type: Boolean,
        default: false
      },
      useMarkdownShortcuts: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        quill: null
      };
    },
    watch: {
      value: function value(val) {
        if (val != this.quill.root.innerHTML && !this.quill.hasFocus()) {
          this.quill.root.innerHTML = val;
        }
      },
      disabled: function disabled(status) {
        this.quill.enable(!status);
      }
    },
    mounted: function mounted() {
      this.registerCustomModules(Quill);
      this.registerPrototypes();
      this.initializeEditor();
    },
    beforeDestroy: function beforeDestroy() {
      this.quill = null;
      delete this.quill;
    },
    methods: {
      initializeEditor: function initializeEditor() {
        this.setupQuillEditor();
        this.checkForCustomImageHandler();
        this.handleInitialContent();
        this.registerEditorEventListeners();
        this.$emit("ready", this.quill);
      },
      setupQuillEditor: function setupQuillEditor() {
        var editorConfig = {
          debug: false,
          modules: this.setModules(),
          theme: "snow",
          placeholder: this.placeholder ? this.placeholder : "",
          readOnly: this.disabled ? this.disabled : false
        };
        this.prepareEditorConfig(editorConfig);
        this.quill = new Quill(this.$refs.quillContainer, editorConfig);
      },
      setModules: function setModules() {
        var modules = {
          toolbar: this.editorToolbar.length ? this.editorToolbar : defaultToolbar
        };
        if (this.useMarkdownShortcuts) {
          Quill.register("modules/markdownShortcuts", MarkdownShortcuts, true);
          modules["markdownShortcuts"] = {};
        }
        return modules;
      },
      prepareEditorConfig: function prepareEditorConfig(editorConfig) {
        if (Object.keys(this.editorOptions).length > 0 && this.editorOptions.constructor === Object) {
          if (this.editorOptions.modules && typeof this.editorOptions.modules.toolbar !== "undefined") {
            // We don't want to merge default toolbar with provided toolbar.
            delete editorConfig.modules.toolbar;
          }
          mergeDeep(editorConfig, this.editorOptions);
        }
      },
      registerPrototypes: function registerPrototypes() {
        Quill.prototype.getHTML = function () {
          return this.container.querySelector(".ql-editor").innerHTML;
        };
        Quill.prototype.getWordCount = function () {
          return this.container.querySelector(".ql-editor").innerText.length;
        };
      },
      registerEditorEventListeners: function registerEditorEventListeners() {
        this.quill.on("text-change", this.handleTextChange);
        this.quill.on("selection-change", this.handleSelectionChange);
        this.listenForEditorEvent("text-change");
        this.listenForEditorEvent("selection-change");
        this.listenForEditorEvent("editor-change");
      },
      listenForEditorEvent: function listenForEditorEvent(type) {
        var _this = this;
        this.quill.on(type, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this.$emit.apply(_this, [type].concat(args));
        });
      },
      handleInitialContent: function handleInitialContent() {
        if (this.value) this.quill.root.innerHTML = this.value; // Set initial editor content
      },
      handleSelectionChange: function handleSelectionChange(range, oldRange) {
        if (!range && oldRange) this.$emit("blur", this.quill);else if (range && !oldRange) this.$emit("focus", this.quill);
      },
      handleTextChange: function handleTextChange(delta, oldContents) {
        var editorContent = this.quill.getHTML() === "<p><br></p>" ? "" : this.quill.getHTML();
        this.$emit("input", editorContent);
        if (this.useCustomImageHandler) this.handleImageRemoved(delta, oldContents);
      },
      handleImageRemoved: function handleImageRemoved(delta, oldContents) {
        var _this2 = this;
        var currrentContents = this.quill.getContents();
        var deletedContents = currrentContents.diff(oldContents);
        var operations = deletedContents.ops;
        operations.map(function (operation) {
          if (operation.insert && operation.insert.hasOwnProperty("image")) {
            var image = operation.insert.image;
            _this2.$emit("image-removed", image);
          }
        });
      },
      checkForCustomImageHandler: function checkForCustomImageHandler() {
        this.useCustomImageHandler === true ? this.setupCustomImageHandler() : "";
      },
      setupCustomImageHandler: function setupCustomImageHandler() {
        var toolbar = this.quill.getModule("toolbar");
        toolbar.addHandler("image", this.customImageHandler);
      },
      customImageHandler: function customImageHandler() {
        this.$refs.fileInput.click();
      },
      emitImageInfo: function emitImageInfo($event) {
        var resetUploader = function resetUploader() {
          var uploader = document.getElementById("file-upload");
          uploader.value = "";
        };
        var file = $event.target.files[0];
        var Editor = this.quill;
        var range = Editor.getSelection();
        var cursorLocation = range.index;
        this.$emit("image-added", file, Editor, cursorLocation, resetUploader);
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.

    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId

    if (scopeId) {
      options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context ||
        // cached call
        this.$vnode && this.$vnode.ssrContext ||
        // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles

        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference

        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called

      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }
    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return script;
  }
  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__ = script;
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quillWrapper"},[_vm._t("toolbar"),_vm._v(" "),_c('div',{ref:"quillContainer",attrs:{"id":_vm.id}}),_vm._v(" "),(_vm.useCustomImageHandler)?_c('input',{ref:"fileInput",staticStyle:{"display":"none"},attrs:{"id":"file-upload","type":"file","accept":"image/*"},on:{"change":function($event){return _vm.emitImageInfo($event)}}}):_vm._e()],2)};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      undefined,
      undefined,
      undefined
    );

  var version = "2.10.3";

  // Declare install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("VueEditor", __vue_component__);
  }
  var VPlugin = {
    install: install,
    version: version,
    Quill: Quill,
    VueEditor: __vue_component__
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(VPlugin);
  }

  /*************************************************/

  exports.Quill = Quill;
  exports.VueEditor = __vue_component__;
  exports.default = VPlugin;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
