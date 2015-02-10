(function(e, t, n) {
    !function(e, t) {
        function n(e) {
            return O.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        function a(e) {
            if (!bn[e]) {
                var t = $.body, n = O("<" + e + ">").appendTo(t), a = n.css("display");
                n.remove(), ("none" === a || "" === a) && (hn || (hn = $.createElement("iframe"), hn.frameBorder = hn.width = hn.height = 0), t.appendChild(hn), wn && hn.createElement || (wn = (hn.contentWindow || hn.contentDocument).document, wn.write(("CSS1Compat" === $.compatMode ? "<!doctype html>" : "") + "<html><body>"), wn.close()), n = wn.createElement(e), wn.body.appendChild(n), a = O.css(n, "display"), t.removeChild(hn)), bn[e] = a
            }
            return bn[e]
        }
        function i(e, t) {
            var n = {};
            return O.each(xn.concat.apply([], xn.slice(0, t)), function() {
                n[this] = e
            }), n
        }
        function o() {
            mn = t
        }
        function r() {
            return setTimeout(o, 0), mn = O.now()
        }
        function s() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }
        function l() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {
            }
        }
        function c(e, n) {
            e.dataFilter && (n = e.dataFilter(n, e.dataType));
            var a, i, o, r, s, l, c, p, u = e.dataTypes, d = {}, v = u.length, f = u[0];
            for (a = 1; v > a; a++) {
                if (1 === a)
                    for (i in e.converters)
                        "string" == typeof i && (d[i.toLowerCase()] = e.converters[i]);
                if (r = f, f = u[a], "*" === f)
                    f = r;
                else if ("*" !== r && r !== f) {
                    if (s = r + " " + f, l = d[s] || d["* " + f], !l) {
                        p = t;
                        for (c in d)
                            if (o = c.split(" "), (o[0] === r || "*" === o[0]) && (p = d[o[1] + " " + f])) {
                                c = d[c], c === !0 ? l = p : p === !0 && (l = c);
                                break
                            }
                    }
                    !l && !p && O.error("No conversion from " + s.replace(" ", " to ")), l !== !0 && (n = l ? l(n) : p(c(n)))
                }
            }
            return n
        }
        function p(e, n, a) {
            var i, o, r, s, l = e.contents, c = e.dataTypes, p = e.responseFields;
            for (o in p)
                o in a && (n[p[o]] = a[o]);
            for (; "*" === c[0]; )
                c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i)
                for (o in l)
                    if (l[o] && l[o].test(i)) {
                        c.unshift(o);
                        break
                    }
            if (c[0] in a)
                r = c[0];
            else {
                for (o in a) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            return r ? (r !== c[0] && c.unshift(r), a[r]) : void 0
        }
        function u(e, t, n, a) {
            if (O.isArray(t))
                O.each(t, function(t, i) {
                    n || Vt.test(e) ? a(e, i) : u(e + "[" + ("object" == typeof i || O.isArray(i) ? t : "") + "]", i, n, a)
                });
            else if (n || null == t || "object" != typeof t)
                a(e, t);
            else
                for (var i in t)
                    u(e + "[" + i + "]", t[i], n, a)
        }
        function d(e, n) {
            var a, i, o = O.ajaxSettings.flatOptions || {};
            for (a in n)
                n[a] !== t && ((o[a] ? e : i || (i = {}))[a] = n[a]);
            i && O.extend(!0, e, i)
        }
        function v(e, n, a, i, o, r) {
            o = o || n.dataTypes[0], r = r || {}, r[o] = !0;
            for (var s, l = e[o], c = 0, p = l ? l.length : 0, u = e === sn; p > c && (u || !s); c++)
                s = l[c](n, a, i), "string" == typeof s && (!u || r[s] ? s = t : (n.dataTypes.unshift(s), s = v(e, n, a, i, s, r)));
            return (u || !s) && !r["*"] && (s = v(e, n, a, i, "*", r)), s
        }
        function f(e) {
            return function(t, n) {
                if ("string" != typeof t && (n = t, t = "*"), O.isFunction(n))
                    for (var a, i, o, r = t.toLowerCase().split(nn), s = 0, l = r.length; l > s; s++)
                        a = r[s], o = /^\+/.test(a), o && (a = a.substr(1) || "*"), i = e[a] = e[a] || [], i[o ? "unshift" : "push"](n)
            }
        }
        function _(e, t, n) {
            var a = "width" === t ? e.offsetWidth : e.offsetHeight, i = "width" === t ? Rt : Ft, o = 0, r = i.length;
            if (a > 0) {
                if ("border" !== n)
                    for (; r > o; o++)
                        n || (a -= parseFloat(O.css(e, "padding" + i[o])) || 0), "margin" === n ? a += parseFloat(O.css(e, n + i[o])) || 0 : a -= parseFloat(O.css(e, "border" + i[o] + "Width")) || 0;
                return a + "px"
            }
            if (a = Et(e, t, t), (0 > a || null == a) && (a = e.style[t] || 0), a = parseFloat(a) || 0, n)
                for (; r > o; o++)
                    a += parseFloat(O.css(e, "padding" + i[o])) || 0, "padding" !== n && (a += parseFloat(O.css(e, "border" + i[o] + "Width")) || 0), "margin" === n && (a += parseFloat(O.css(e, n + i[o])) || 0);
            return a + "px"
        }
        function h(e, t) {
            t.src ? O.ajax({url: t.src,async: !1,dataType: "script"}) : O.globalEval((t.text || t.textContent || t.innerHTML || "").replace(St, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
        }
        function w(e) {
            var t = $.createElement("div");
            return Wt.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
        }
        function g(e) {
            var t = (e.nodeName || "").toLowerCase();
            "input" === t ? m(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && O.grep(e.getElementsByTagName("input"), m)
        }
        function m(e) {
            ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
        }
        function b(e) {
            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
        }
        function y(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(O.expando))
        }
        function C(e, t) {
            if (1 === t.nodeType && O.hasData(e)) {
                var n, a, i, o = O._data(e), r = O._data(t, o), s = o.events;
                if (s) {
                    delete r.handle, r.events = {};
                    for (n in s)
                        for (a = 0, i = s[n].length; i > a; a++)
                            O.event.add(t, n + (s[n][a].namespace ? "." : "") + s[n][a].namespace, s[n][a], s[n][a].data)
                }
                r.data && (r.data = O.extend({}, r.data))
            }
        }
        function x(e) {
            return O.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function I(e) {
            var t = _t.split("|"), n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length; )
                    n.createElement(t.pop());
            return n
        }
        function T(e, t, n) {
            if (t = t || 0, O.isFunction(t))
                return O.grep(e, function(e, a) {
                    var i = !!t.call(e, a, e);
                    return i === n
                });
            if (t.nodeType)
                return O.grep(e, function(e) {
                    return e === t === n
                });
            if ("string" == typeof t) {
                var a = O.grep(e, function(e) {
                    return 1 === e.nodeType
                });
                if (ut.test(t))
                    return O.filter(t, a, !n);
                t = O.filter(t, a)
            }
            return O.grep(e, function(e) {
                return O.inArray(e, t) >= 0 === n
            })
        }
        function k(e) {
            return !e || !e.parentNode || 11 === e.parentNode.nodeType
        }
        function S() {
            return !0
        }
        function D() {
            return !1
        }
        function W(e, t, n) {
            var a = t + "defer", i = t + "queue", o = t + "mark", r = O._data(e, a);
            !(!r || "queue" !== n && O._data(e, i) || "mark" !== n && O._data(e, o) || !setTimeout(function() {
                !O._data(e, i) && !O._data(e, o) && (O.removeData(e, a, !0), r.fire())
            }, 0))
        }
        function E(e) {
            for (var t in e)
                if (("data" !== t || !O.isEmptyObject(e[t])) && "toJSON" !== t)
                    return !1;
            return !0
        }
        function N(e, n, a) {
            if (a === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(R, "-$1").toLowerCase();
                if (a = e.getAttribute(i), "string" == typeof a) {
                    try {
                        a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : O.isNumeric(a) ? parseFloat(a) : z.test(a) ? O.parseJSON(a) : a
                    } catch (o) {
                    }
                    O.data(e, n, a)
                } else
                    a = t
            }
            return a
        }
        function P(e) {
            var t, n, a = U[e] = {};
            for (e = e.split(/\s+/), t = 0, n = e.length; n > t; t++)
                a[e[t]] = !0;
            return a
        }
        var $ = e.document, A = e.navigator, L = e.location, O = function() {
            function n() {
                if (!s.isReady) {
                    try {
                        $.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(n, 1)
                    }
                    s.ready()
                }
            }
            var a, i, o, r, s = function(e, t) {
                return new s.fn.init(e, t, a)
            }, l = e.jQuery, c = e.$, p = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, u = /\S/, d = /^\s+/, v = /\s+$/, f = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, _ = /^[\],:{}\s]*$/, h = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, w = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, g = /(?:^|:|,)(?:\s*\[)+/g, m = /(webkit)[ \/]([\w.]+)/, b = /(opera)(?:.*version)?[ \/]([\w.]+)/, y = /(msie) ([\w.]+)/, C = /(mozilla)(?:.*? rv:([\w.]+))?/, x = /-([a-z]|[0-9])/gi, I = /^-ms-/, T = function(e, t) {
                return (t + "").toUpperCase()
            }, k = A.userAgent, S = Object.prototype.toString, D = Object.prototype.hasOwnProperty, W = Array.prototype.push, E = Array.prototype.slice, N = String.prototype.trim, P = Array.prototype.indexOf, L = {};
            return s.fn = s.prototype = {constructor: s,init: function(e, n, a) {
                var i, o, r, l;
                if (!e)
                    return this;
                if (e.nodeType)
                    return this.context = this[0] = e, this.length = 1, this;
                if ("body" === e && !n && $.body)
                    return this.context = $, this[0] = $.body, this.selector = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if (i = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? p.exec(e) : [null, e, null], i && (i[1] || !n)) {
                        if (i[1])
                            return n = n instanceof s ? n[0] : n, l = n ? n.ownerDocument || n : $, r = f.exec(e), r ? s.isPlainObject(n) ? (e = [$.createElement(r[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(r[1])] : (r = s.buildFragment([i[1]], [l]), e = (r.cacheable ? s.clone(r.fragment) : r.fragment).childNodes), s.merge(this, e);
                        if (o = $.getElementById(i[2]), o && o.parentNode) {
                            if (o.id !== i[2])
                                return a.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = $, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || a).find(e) : this.constructor(n).find(e)
                }
                return s.isFunction(e) ? a.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
            },selector: "",jquery: "1.7.1",length: 0,size: function() {
                return this.length
            },toArray: function() {
                return E.call(this, 0)
            },get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },pushStack: function(e, t, n) {
                var a = this.constructor();
                return s.isArray(e) ? W.apply(a, e) : s.merge(a, e), a.prevObject = this, a.context = this.context, "find" === t ? a.selector = this.selector + (this.selector ? " " : "") + n : t && (a.selector = this.selector + "." + t + "(" + n + ")"), a
            },each: function(e, t) {
                return s.each(this, e, t)
            },ready: function(e) {
                return s.bindReady(), o.add(e), this
            },eq: function(e) {
                return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
            },first: function() {
                return this.eq(0)
            },last: function() {
                return this.eq(-1)
            },slice: function() {
                return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
            },map: function(e) {
                return this.pushStack(s.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },end: function() {
                return this.prevObject || this.constructor(null)
            },push: W,sort: [].sort,splice: [].splice}, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function() {
                var e, n, a, i, o, r, l = arguments[0] || {}, c = 1, p = arguments.length, u = !1;
                for ("boolean" == typeof l && (u = l, l = arguments[1] || {}, c = 2), "object" != typeof l && !s.isFunction(l) && (l = {}), p === c && (l = this, --c); p > c; c++)
                    if (null != (e = arguments[c]))
                        for (n in e)
                            a = l[n], i = e[n], l !== i && (u && i && (s.isPlainObject(i) || (o = s.isArray(i))) ? (o ? (o = !1, r = a && s.isArray(a) ? a : []) : r = a && s.isPlainObject(a) ? a : {}, l[n] = s.extend(u, r, i)) : i !== t && (l[n] = i));
                return l
            }, s.extend({noConflict: function(t) {
                return e.$ === s && (e.$ = c), t && e.jQuery === s && (e.jQuery = l), s
            },isReady: !1,readyWait: 1,holdReady: function(e) {
                e ? s.readyWait++ : s.ready(!0)
            },ready: function(e) {
                if (e === !0 && !--s.readyWait || e !== !0 && !s.isReady) {
                    if (!$.body)
                        return setTimeout(s.ready, 1);
                    if (s.isReady = !0, e !== !0 && --s.readyWait > 0)
                        return;
                    o.fireWith($, [s]), s.fn.trigger && s($).trigger("ready").off("ready")
                }
            },bindReady: function() {
                if (!o) {
                    if (o = s.Callbacks("once memory"), "complete" === $.readyState)
                        return setTimeout(s.ready, 1);
                    if ($.addEventListener)
                        $.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", s.ready, !1);
                    else if ($.attachEvent) {
                        $.attachEvent("onreadystatechange", r), e.attachEvent("onload", s.ready);
                        var t = !1;
                        try {
                            t = null == e.frameElement
                        } catch (a) {
                        }
                        $.documentElement.doScroll && t && n()
                    }
                }
            },isFunction: function(e) {
                return "function" === s.type(e)
            },isArray: Array.isArray || function(e) {
                return "array" === s.type(e)
            },isWindow: function(e) {
                return e && "object" == typeof e && "setInterval" in e
            },isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },type: function(e) {
                return null == e ? String(e) : L[S.call(e)] || "object"
            },isPlainObject: function(e) {
                if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !D.call(e, "constructor") && !D.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                var a;
                for (a in e)
                    ;
                return a === t || D.call(e, a)
            },isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            },error: function(e) {
                throw new Error(e)
            },parseJSON: function(t) {
                return "string" == typeof t && t ? (t = s.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : _.test(t.replace(h, "@").replace(w, "]").replace(g, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
            },parseXML: function(n) {
                var a, i;
                try {
                    e.DOMParser ? (i = new DOMParser, a = i.parseFromString(n, "text/xml")) : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(n))
                } catch (o) {
                    a = t
                }
                return (!a || !a.documentElement || a.getElementsByTagName("parsererror").length) && s.error("Invalid XML: " + n), a
            },noop: function() {
            },globalEval: function(t) {
                t && u.test(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },camelCase: function(e) {
                return e.replace(I, "ms-").replace(x, T)
            },nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            },each: function(e, n, a) {
                var i, o = 0, r = e.length, l = r === t || s.isFunction(e);
                if (a)
                    if (l) {
                        for (i in e)
                            if (n.apply(e[i], a) === !1)
                                break
                    } else
                        for (; r > o && n.apply(e[o++], a) !== !1; )
                            ;
                else if (l) {
                    for (i in e)
                        if (n.call(e[i], i, e[i]) === !1)
                            break
                } else
                    for (; r > o && n.call(e[o], o, e[o++]) !== !1; )
                        ;
                return e
            },trim: N ? function(e) {
                return null == e ? "" : N.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(d, "").replace(v, "")
            },makeArray: function(e, t) {
                var n = t || [];
                if (null != e) {
                    var a = s.type(e);
                    null == e.length || "string" === a || "function" === a || "regexp" === a || s.isWindow(e) ? W.call(n, e) : s.merge(n, e)
                }
                return n
            },inArray: function(e, t, n) {
                var a;
                if (t) {
                    if (P)
                        return P.call(t, e, n);
                    for (a = t.length, n = n ? 0 > n ? Math.max(0, a + n) : n : 0; a > n; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },merge: function(e, n) {
                var a = e.length, i = 0;
                if ("number" == typeof n.length)
                    for (var o = n.length; o > i; i++)
                        e[a++] = n[i];
                else
                    for (; n[i] !== t; )
                        e[a++] = n[i++];
                return e.length = a, e
            },grep: function(e, t, n) {
                var a, i = [];
                n = !!n;
                for (var o = 0, r = e.length; r > o; o++)
                    a = !!t(e[o], o), n !== a && i.push(e[o]);
                return i
            },map: function(e, n, a) {
                var i, o, r = [], l = 0, c = e.length, p = e instanceof s || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || s.isArray(e));
                if (p)
                    for (; c > l; l++)
                        i = n(e[l], l, a), null != i && (r[r.length] = i);
                else
                    for (o in e)
                        i = n(e[o], o, a), null != i && (r[r.length] = i);
                return r.concat.apply([], r)
            },guid: 1,proxy: function(e, n) {
                if ("string" == typeof n) {
                    var a = e[n];
                    n = e, e = a
                }
                if (!s.isFunction(e))
                    return t;
                var i = E.call(arguments, 2), o = function() {
                    return e.apply(n, i.concat(E.call(arguments)))
                };
                return o.guid = e.guid = e.guid || o.guid || s.guid++, o
            },access: function(e, n, a, i, o, r) {
                var l = e.length;
                if ("object" == typeof n) {
                    for (var c in n)
                        s.access(e, c, n[c], i, o, a);
                    return e
                }
                if (a !== t) {
                    i = !r && i && s.isFunction(a);
                    for (var p = 0; l > p; p++)
                        o(e[p], n, i ? a.call(e[p], p, o(e[p], n)) : a, r);
                    return e
                }
                return l ? o(e[0], n) : t
            },now: function() {
                return (new Date).getTime()
            },uaMatch: function(e) {
                e = e.toLowerCase();
                var t = m.exec(e) || b.exec(e) || y.exec(e) || e.indexOf("compatible") < 0 && C.exec(e) || [];
                return {browser: t[1] || "",version: t[2] || "0"}
            },sub: function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, a) {
                    return a && a instanceof s && !(a instanceof e) && (a = e(a)), s.fn.init.call(this, n, a, t)
                }, e.fn.init.prototype = e.fn;
                var t = e($);
                return e
            },browser: {}}), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                L["[object " + t + "]"] = t.toLowerCase()
            }), i = s.uaMatch(k), i.browser && (s.browser[i.browser] = !0, s.browser.version = i.version), s.browser.webkit && (s.browser.safari = !0), u.test("Â ") && (d = /^[\s\xA0]+/, v = /[\s\xA0]+$/), a = s($), $.addEventListener ? r = function() {
                $.removeEventListener("DOMContentLoaded", r, !1), s.ready()
            } : $.attachEvent && (r = function() {
                "complete" === $.readyState && ($.detachEvent("onreadystatechange", r), s.ready())
            }), s
        }(), U = {};
        O.Callbacks = function(e) {
            e = e ? U[e] || P(e) : {};
            var n, a, i, o, r, s = [], l = [], c = function(t) {
                var n, a, i, o;
                for (n = 0, a = t.length; a > n; n++)
                    i = t[n], o = O.type(i), "array" === o ? c(i) : "function" === o && (!e.unique || !u.has(i)) && s.push(i)
            }, p = function(t, c) {
                for (c = c || [], n = !e.memory || [t, c], a = !0, r = i || 0, i = 0, o = s.length; s && o > r; r++)
                    if (s[r].apply(t, c) === !1 && e.stopOnFalse) {
                        n = !0;
                        break
                    }
                a = !1, s && (e.once ? n === !0 ? u.disable() : s = [] : l && l.length && (n = l.shift(), u.fireWith(n[0], n[1])))
            }, u = {add: function() {
                if (s) {
                    var e = s.length;
                    c(arguments), a ? o = s.length : n && n !== !0 && (i = e, p(n[0], n[1]))
                }
                return this
            },remove: function() {
                if (s)
                    for (var t = arguments, n = 0, i = t.length; i > n; n++)
                        for (var l = 0; l < s.length && (t[n] !== s[l] || (a && o >= l && (o--, r >= l && r--), s.splice(l--, 1), !e.unique)); l++)
                            ;
                return this
            },has: function(e) {
                if (s)
                    for (var t = 0, n = s.length; n > t; t++)
                        if (e === s[t])
                            return !0;
                return !1
            },empty: function() {
                return s = [], this
            },disable: function() {
                return s = l = n = t, this
            },disabled: function() {
                return !s
            },lock: function() {
                return l = t, (!n || n === !0) && u.disable(), this
            },locked: function() {
                return !l
            },fireWith: function(t, i) {
                return l && (a ? e.once || l.push([t, i]) : (!e.once || !n) && p(t, i)), this
            },fire: function() {
                return u.fireWith(this, arguments), this
            },fired: function() {
                return !!n
            }};
            return u
        };
        var M = [].slice;
        O.extend({Deferred: function(e) {
            var t, n = O.Callbacks("once memory"), a = O.Callbacks("once memory"), i = O.Callbacks("memory"), o = "pending", r = {resolve: n,reject: a,notify: i}, s = {done: n.add,fail: a.add,progress: i.add,state: function() {
                return o
            },isResolved: n.fired,isRejected: a.fired,then: function(e, t, n) {
                return l.done(e).fail(t).progress(n), this
            },always: function() {
                return l.done.apply(l, arguments).fail.apply(l, arguments), this
            },pipe: function(e, t, n) {
                return O.Deferred(function(a) {
                    O.each({done: [e, "resolve"],fail: [t, "reject"],progress: [n, "notify"]}, function(e, t) {
                        var n, i = t[0], o = t[1];
                        l[e](O.isFunction(i) ? function() {
                            n = i.apply(this, arguments), n && O.isFunction(n.promise) ? n.promise().then(a.resolve, a.reject, a.notify) : a[o + "With"](this === l ? a : this, [n])
                        } : a[o])
                    })
                }).promise()
            },promise: function(e) {
                if (null == e)
                    e = s;
                else
                    for (var t in s)
                        e[t] = s[t];
                return e
            }}, l = s.promise({});
            for (t in r)
                l[t] = r[t].fire, l[t + "With"] = r[t].fireWith;
            return l.done(function() {
                o = "resolved"
            }, a.disable, i.lock).fail(function() {
                o = "rejected"
            }, n.disable, i.lock), e && e.call(l, l), l
        },when: function(e) {
            function t(e) {
                return function(t) {
                    r[e] = arguments.length > 1 ? M.call(arguments, 0) : t, l.notifyWith(c, r)
                }
            }
            function n(e) {
                return function(t) {
                    a[e] = arguments.length > 1 ? M.call(arguments, 0) : t, --s || l.resolveWith(l, a)
                }
            }
            var a = M.call(arguments, 0), i = 0, o = a.length, r = Array(o), s = o, l = 1 >= o && e && O.isFunction(e.promise) ? e : O.Deferred(), c = l.promise();
            if (o > 1) {
                for (; o > i; i++)
                    a[i] && a[i].promise && O.isFunction(a[i].promise) ? a[i].promise().then(n(i), l.reject, t(i)) : --s;
                s || l.resolveWith(l, a)
            } else
                l !== e && l.resolveWith(l, o ? [e] : []);
            return c
        }}), O.support = function() {
            {
                var t, n, a, i, o, r, s, l, c, p, u, d, v = $.createElement("div");
                $.documentElement
            }
            if (v.setAttribute("className", "t"), v.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = v.getElementsByTagName("*"), a = v.getElementsByTagName("a")[0], !n || !n.length || !a)
                return {};
            i = $.createElement("select"), o = i.appendChild($.createElement("option")), r = v.getElementsByTagName("input")[0], t = {leadingWhitespace: 3 === v.firstChild.nodeType,tbody: !v.getElementsByTagName("tbody").length,htmlSerialize: !!v.getElementsByTagName("link").length,style: /top/.test(a.getAttribute("style")),hrefNormalized: "/a" === a.getAttribute("href"),opacity: /^0.55/.test(a.style.opacity),cssFloat: !!a.style.cssFloat,checkOn: "on" === r.value,optSelected: o.selected,getSetAttribute: "t" !== v.className,enctype: !!$.createElement("form").enctype,html5Clone: "<:nav></:nav>" !== $.createElement("nav").cloneNode(!0).outerHTML,submitBubbles: !0,changeBubbles: !0,focusinBubbles: !1,deleteExpando: !0,noCloneEvent: !0,inlineBlockNeedsLayout: !1,shrinkWrapBlocks: !1,reliableMarginRight: !0}, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete v.test
            } catch (f) {
                t.deleteExpando = !1
            }
            if (!v.addEventListener && v.attachEvent && v.fireEvent && (v.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), v.cloneNode(!0).fireEvent("onclick")), r = $.createElement("input"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "checked"), v.appendChild(r), l = $.createDocumentFragment(), l.appendChild(v.lastChild), t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = r.checked, l.removeChild(r), l.appendChild(v), v.innerHTML = "", e.getComputedStyle && (s = $.createElement("div"), s.style.width = "0", s.style.marginRight = "0", v.style.width = "2px", v.appendChild(s), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(s, null) || {marginRight: 0}).marginRight, 10) || 0)), v.attachEvent)
                for (u in {submit: 1,change: 1,focusin: 1})
                    p = "on" + u, d = p in v, d || (v.setAttribute(p, "return;"), d = "function" == typeof v[p]), t[u + "Bubbles"] = d;
            return l.removeChild(v), l = i = o = s = v = r = null, O(function() {
                var e, n, a, i, o, r, s, l, p, u, f = $.getElementsByTagName("body")[0];
                !f || (r = 1, s = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", p = "style='" + s + "border:5px solid #000;padding:0;'", u = "<div " + p + "><div></div></div><table " + p + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", e = $.createElement("div"), e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + r + "px", f.insertBefore(e, f.firstChild), v = $.createElement("div"), e.appendChild(v), v.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", c = v.getElementsByTagName("td"), d = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", t.reliableHiddenOffsets = d && 0 === c[0].offsetHeight, v.innerHTML = "", v.style.width = v.style.paddingLeft = "1px", O.boxModel = t.boxModel = 2 === v.offsetWidth, "undefined" != typeof v.style.zoom && (v.style.display = "inline", v.style.zoom = 1, t.inlineBlockNeedsLayout = 2 === v.offsetWidth, v.style.display = "", v.innerHTML = "<div style='width:4px;'></div>", t.shrinkWrapBlocks = 2 !== v.offsetWidth), v.style.cssText = s + l, v.innerHTML = u, n = v.firstChild, a = n.firstChild, i = n.nextSibling.firstChild.firstChild, o = {doesNotAddBorder: 5 !== a.offsetTop,doesAddBorderForTableAndCells: 5 === i.offsetTop}, a.style.position = "fixed", a.style.top = "20px", o.fixedPosition = 20 === a.offsetTop || 15 === a.offsetTop, a.style.position = a.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", o.subtractsBorderForOverflowNotVisible = -5 === a.offsetTop, o.doesNotIncludeMarginInBodyOffset = f.offsetTop !== r, f.removeChild(e), v = e = null, O.extend(t, o))
            }), t
        }();
        var z = /^(?:\{.*\}|\[.*\])$/, R = /([A-Z])/g;
        O.extend({cache: {},uuid: 0,expando: "jQuery" + (O.fn.jquery + Math.random()).replace(/\D/g, ""),noData: {embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet: !0},hasData: function(e) {
            return e = e.nodeType ? O.cache[e[O.expando]] : e[O.expando], !!e && !E(e)
        },data: function(e, n, a, i) {
            if (O.acceptData(e)) {
                var o, r, s, l = O.expando, c = "string" == typeof n, p = e.nodeType, u = p ? O.cache : e, d = p ? e[l] : e[l] && l, v = "events" === n;
                if (!(d && u[d] && (v || i || u[d].data) || !c || a !== t))
                    return;
                return d || (p ? e[l] = d = ++O.uuid : d = l), u[d] || (u[d] = {}, p || (u[d].toJSON = O.noop)), ("object" == typeof n || "function" == typeof n) && (i ? u[d] = O.extend(u[d], n) : u[d].data = O.extend(u[d].data, n)), o = r = u[d], i || (r.data || (r.data = {}), r = r.data), a !== t && (r[O.camelCase(n)] = a), v && !r[n] ? o.events : (c ? (s = r[n], null == s && (s = r[O.camelCase(n)])) : s = r, s)
            }
        },removeData: function(e, t, n) {
            if (O.acceptData(e)) {
                var a, i, o, r = O.expando, s = e.nodeType, l = s ? O.cache : e, c = s ? e[r] : r;
                if (!l[c])
                    return;
                if (t && (a = n ? l[c] : l[c].data)) {
                    O.isArray(t) || (t in a ? t = [t] : (t = O.camelCase(t), t = t in a ? [t] : t.split(" ")));
                    for (i = 0, o = t.length; o > i; i++)
                        delete a[t[i]];
                    if (!(n ? E : O.isEmptyObject)(a))
                        return
                }
                if (!n && (delete l[c].data, !E(l[c])))
                    return;
                O.support.deleteExpando || !l.setInterval ? delete l[c] : l[c] = null, s && (O.support.deleteExpando ? delete e[r] : e.removeAttribute ? e.removeAttribute(r) : e[r] = null)
            }
        },_data: function(e, t, n) {
            return O.data(e, t, n, !0)
        },acceptData: function(e) {
            if (e.nodeName) {
                var t = O.noData[e.nodeName.toLowerCase()];
                if (t)
                    return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }}), O.fn.extend({data: function(e, n) {
            var a, i, o, r = null;
            if ("undefined" == typeof e) {
                if (this.length && (r = O.data(this[0]), 1 === this[0].nodeType && !O._data(this[0], "parsedAttrs"))) {
                    i = this[0].attributes;
                    for (var s = 0, l = i.length; l > s; s++)
                        o = i[s].name, 0 === o.indexOf("data-") && (o = O.camelCase(o.substring(5)), N(this[0], o, r[o]));
                    O._data(this[0], "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                O.data(this, e)
            }) : (a = e.split("."), a[1] = a[1] ? "." + a[1] : "", n === t ? (r = this.triggerHandler("getData" + a[1] + "!", [a[0]]), r === t && this.length && (r = O.data(this[0], e), r = N(this[0], e, r)), r === t && a[1] ? this.data(a[0]) : r) : this.each(function() {
                var t = O(this), i = [a[0], n];
                t.triggerHandler("setData" + a[1] + "!", i), O.data(this, e, n), t.triggerHandler("changeData" + a[1] + "!", i)
            }))
        },removeData: function(e) {
            return this.each(function() {
                O.removeData(this, e)
            })
        }}), O.extend({_mark: function(e, t) {
            e && (t = (t || "fx") + "mark", O._data(e, t, (O._data(e, t) || 0) + 1))
        },_unmark: function(e, t, n) {
            if (e !== !0 && (n = t, t = e, e = !1), t) {
                n = n || "fx";
                var a = n + "mark", i = e ? 0 : (O._data(t, a) || 1) - 1;
                i ? O._data(t, a, i) : (O.removeData(t, a, !0), W(t, n, "mark"))
            }
        },queue: function(e, t, n) {
            var a;
            return e ? (t = (t || "fx") + "queue", a = O._data(e, t), n && (!a || O.isArray(n) ? a = O._data(e, t, O.makeArray(n)) : a.push(n)), a || []) : void 0
        },dequeue: function(e, t) {
            t = t || "fx";
            var n = O.queue(e, t), a = n.shift(), i = {};
            "inprogress" === a && (a = n.shift()), a && ("fx" === t && n.unshift("inprogress"), O._data(e, t + ".run", i), a.call(e, function() {
                O.dequeue(e, t)
            }, i)), n.length || (O.removeData(e, t + "queue " + t + ".run", !0), W(e, t, "queue"))
        }}), O.fn.extend({queue: function(e, n) {
            return "string" != typeof e && (n = e, e = "fx"), n === t ? O.queue(this[0], e) : this.each(function() {
                var t = O.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && O.dequeue(this, e)
            })
        },dequeue: function(e) {
            return this.each(function() {
                O.dequeue(this, e)
            })
        },delay: function(e, t) {
            return e = O.fx ? O.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var a = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(a)
                }
            })
        },clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },promise: function(e, n) {
            function a() {
                --l || o.resolveWith(r, [r])
            }
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            for (var i, o = O.Deferred(), r = this, s = r.length, l = 1, c = e + "defer", p = e + "queue", u = e + "mark"; s--; )
                (i = O.data(r[s], c, t, !0) || (O.data(r[s], p, t, !0) || O.data(r[s], u, t, !0)) && O.data(r[s], c, O.Callbacks("once memory"), !0)) && (l++, i.add(a));
            return a(), o.promise()
        }});
        var F, B, H, j = /[\n\t\r]/g, V = /\s+/, q = /\r/g, X = /^(?:button|input)$/i, G = /^(?:button|input|object|select|textarea)$/i, Y = /^a(?:rea)?$/i, Z = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, K = O.support.getSetAttribute;
        O.fn.extend({attr: function(e, t) {
            return O.access(this, e, t, !0, O.attr)
        },removeAttr: function(e) {
            return this.each(function() {
                O.removeAttr(this, e)
            })
        },prop: function(e, t) {
            return O.access(this, e, t, !0, O.prop)
        },removeProp: function(e) {
            return e = O.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        },addClass: function(e) {
            var t, n, a, i, o, r, s;
            if (O.isFunction(e))
                return this.each(function(t) {
                    O(this).addClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e)
                for (t = e.split(V), n = 0, a = this.length; a > n; n++)
                    if (i = this[n], 1 === i.nodeType)
                        if (i.className || 1 !== t.length) {
                            for (o = " " + i.className + " ", r = 0, s = t.length; s > r; r++)
                                ~o.indexOf(" " + t[r] + " ") || (o += t[r] + " ");
                            i.className = O.trim(o)
                        } else
                            i.className = e;
            return this
        },removeClass: function(e) {
            var n, a, i, o, r, s, l;
            if (O.isFunction(e))
                return this.each(function(t) {
                    O(this).removeClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(V), a = 0, i = this.length; i > a; a++)
                    if (o = this[a], 1 === o.nodeType && o.className)
                        if (e) {
                            for (r = (" " + o.className + " ").replace(j, " "), s = 0, l = n.length; l > s; s++)
                                r = r.replace(" " + n[s] + " ", " ");
                            o.className = O.trim(r)
                        } else
                            o.className = "";
            return this
        },toggleClass: function(e, t) {
            var n = typeof e, a = "boolean" == typeof t;
            return this.each(O.isFunction(e) ? function(n) {
                O(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var i, o = 0, r = O(this), s = t, l = e.split(V); i = l[o++]; )
                        s = a ? s : !r.hasClass(i), r[s ? "addClass" : "removeClass"](i);
                else
                    ("undefined" === n || "boolean" === n) && (this.className && O._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : O._data(this, "__className__") || "")
            })
        },hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, a = this.length; a > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(j, " ").indexOf(t) > -1)
                    return !0;
            return !1
        },val: function(e) {
            var n, a, i, o = this[0];
            return arguments.length ? (i = O.isFunction(e), this.each(function(a) {
                var o, r = O(this);
                1 === this.nodeType && (o = i ? e.call(this, a, r.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : O.isArray(o) && (o = O.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), n = O.valHooks[this.nodeName.toLowerCase()] || O.valHooks[this.type], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (n = O.valHooks[o.nodeName.toLowerCase()] || O.valHooks[o.type], n && "get" in n && (a = n.get(o, "value")) !== t ? a : (a = o.value, "string" == typeof a ? a.replace(q, "") : null == a ? "" : a)) : void 0
        }}), O.extend({valHooks: {option: {get: function(e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text
        }},select: {get: function(e) {
            var t, n, a, i, o = e.selectedIndex, r = [], s = e.options, l = "select-one" === e.type;
            if (0 > o)
                return null;
            for (n = l ? o : 0, a = l ? o + 1 : s.length; a > n; n++)
                if (i = s[n], !(!i.selected || (O.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && O.nodeName(i.parentNode, "optgroup"))) {
                    if (t = O(i).val(), l)
                        return t;
                    r.push(t)
                }
            return l && !r.length && s.length ? O(s[o]).val() : r
        },set: function(e, t) {
            var n = O.makeArray(t);
            return O(e).find("option").each(function() {
                this.selected = O.inArray(O(this).val(), n) >= 0
            }), n.length || (e.selectedIndex = -1), n
        }}},attrFn: {val: !0,css: !0,html: !0,text: !0,data: !0,width: !0,height: !0,offset: !0},attr: function(e, n, a, i) {
            var o, r, s, l = e.nodeType;
            return e && 3 !== l && 8 !== l && 2 !== l ? i && n in O.attrFn ? O(e)[n](a) : "undefined" == typeof e.getAttribute ? O.prop(e, n, a) : (s = 1 !== l || !O.isXMLDoc(e), s && (n = n.toLowerCase(), r = O.attrHooks[n] || (Z.test(n) ? B : F)), a !== t ? null === a ? void O.removeAttr(e, n) : r && "set" in r && s && (o = r.set(e, a, n)) !== t ? o : (e.setAttribute(n, "" + a), a) : r && "get" in r && s && null !== (o = r.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o)) : void 0
        },removeAttr: function(e, t) {
            var n, a, i, o, r = 0;
            if (t && 1 === e.nodeType)
                for (a = t.toLowerCase().split(V), o = a.length; o > r; r++)
                    i = a[r], i && (n = O.propFix[i] || i, O.attr(e, i, ""), e.removeAttribute(K ? i : n), Z.test(i) && n in e && (e[n] = !1))
        },attrHooks: {type: {set: function(e, t) {
            if (X.test(e.nodeName) && e.parentNode)
                O.error("type property can't be changed");
            else if (!O.support.radioValue && "radio" === t && O.nodeName(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
            }
        }},value: {get: function(e, t) {
            return F && O.nodeName(e, "button") ? F.get(e, t) : t in e ? e.value : null
        },set: function(e, t, n) {
            return F && O.nodeName(e, "button") ? F.set(e, t, n) : void (e.value = t)
        }}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(e, n, a) {
            var i, o, r, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !O.isXMLDoc(e), r && (n = O.propFix[n] || n, o = O.propHooks[n]), a !== t ? o && "set" in o && (i = o.set(e, a, n)) !== t ? i : e[n] = a : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0
        },propHooks: {tabIndex: {get: function(e) {
            var n = e.getAttributeNode("tabindex");
            return n && n.specified ? parseInt(n.value, 10) : G.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
        }}}}), O.attrHooks.tabindex = O.propHooks.tabIndex, B = {get: function(e, n) {
            var a, i = O.prop(e, n);
            return i === !0 || "boolean" != typeof i && (a = e.getAttributeNode(n)) && a.nodeValue !== !1 ? n.toLowerCase() : t
        },set: function(e, t, n) {
            var a;
            return t === !1 ? O.removeAttr(e, n) : (a = O.propFix[n] || n, a in e && (e[a] = !0), e.setAttribute(n, n.toLowerCase())), n
        }}, K || (H = {name: !0,id: !0}, F = O.valHooks.button = {get: function(e, n) {
            var a;
            return a = e.getAttributeNode(n), a && (H[n] ? "" !== a.nodeValue : a.specified) ? a.nodeValue : t
        },set: function(e, t, n) {
            var a = e.getAttributeNode(n);
            return a || (a = $.createAttribute(n), e.setAttributeNode(a)), a.nodeValue = t + ""
        }}, O.attrHooks.tabindex.set = F.set, O.each(["width", "height"], function(e, t) {
            O.attrHooks[t] = O.extend(O.attrHooks[t], {set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }})
        }), O.attrHooks.contenteditable = {get: F.get,set: function(e, t, n) {
            "" === t && (t = "false"), F.set(e, t, n)
        }}), O.support.hrefNormalized || O.each(["href", "src", "width", "height"], function(e, n) {
            O.attrHooks[n] = O.extend(O.attrHooks[n], {get: function(e) {
                var a = e.getAttribute(n, 2);
                return null === a ? t : a
            }})
        }), O.support.style || (O.attrHooks.style = {get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },set: function(e, t) {
            return e.style.cssText = "" + t
        }}), O.support.optSelected || (O.propHooks.selected = O.extend(O.propHooks.selected, {get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }})), O.support.enctype || (O.propFix.enctype = "encoding"), O.support.checkOn || O.each(["radio", "checkbox"], function() {
            O.valHooks[this] = {get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }}
        }), O.each(["radio", "checkbox"], function() {
            O.valHooks[this] = O.extend(O.valHooks[this], {set: function(e, t) {
                return O.isArray(t) ? e.checked = O.inArray(O(e).val(), t) >= 0 : void 0
            }})
        });
        var Q = /^(?:textarea|input|select)$/i, J = /^([^\.]*)?(?:\.(.+))?$/, et = /\bhover(\.\S+)?\b/, tt = /^key/, nt = /^(?:mouse|contextmenu)|click/, at = /^(?:focusinfocus|focusoutblur)$/, it = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, ot = function(e) {
            var t = it.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        }, rt = function(e, t) {
            var n = e.attributes || {};
            return !(t[1] && e.nodeName.toLowerCase() !== t[1] || t[2] && (n.id || {}).value !== t[2] || t[3] && !t[3].test((n["class"] || {}).value))
        }, st = function(e) {
            return O.event.special.hover ? e : e.replace(et, "mouseenter$1 mouseleave$1")
        };
        O.event = {add: function(e, n, a, i, o) {
            var r, s, l, c, p, u, d, v, f, _, h;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && a && (r = O._data(e))) {
                for (a.handler && (f = a, a = f.handler), a.guid || (a.guid = O.guid++), l = r.events, l || (r.events = l = {}), s = r.handle, s || (r.handle = s = function(e) {
                    return "undefined" == typeof O || e && O.event.triggered === e.type ? t : O.event.dispatch.apply(s.elem, arguments)
                }, s.elem = e), n = O.trim(st(n)).split(" "), c = 0; c < n.length; c++)
                    p = J.exec(n[c]) || [], u = p[1], d = (p[2] || "").split(".").sort(), h = O.event.special[u] || {}, u = (o ? h.delegateType : h.bindType) || u, h = O.event.special[u] || {}, v = O.extend({type: u,origType: p[1],data: i,handler: a,guid: a.guid,selector: o,quick: ot(o),namespace: d.join(".")}, f), _ = l[u], _ || (_ = l[u] = [], _.delegateCount = 0, h.setup && h.setup.call(e, i, d, s) !== !1 || (e.addEventListener ? e.addEventListener(u, s, !1) : e.attachEvent && e.attachEvent("on" + u, s))), h.add && (h.add.call(e, v), v.handler.guid || (v.handler.guid = a.guid)), o ? _.splice(_.delegateCount++, 0, v) : _.push(v), O.event.global[u] = !0;
                e = null
            }
        },global: {},remove: function(e, t, n, a, i) {
            var o, r, s, l, c, p, u, d, v, f, _, h, w = O.hasData(e) && O._data(e);
            if (w && (d = w.events)) {
                for (t = O.trim(st(t || "")).split(" "), o = 0; o < t.length; o++)
                    if (r = J.exec(t[o]) || [], s = l = r[1], c = r[2], s) {
                        for (v = O.event.special[s] || {}, s = (a ? v.delegateType : v.bindType) || s, _ = d[s] || [], p = _.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, u = 0; u < _.length; u++)
                            h = _[u], !(!i && l !== h.origType || n && n.guid !== h.guid || c && !c.test(h.namespace) || a && a !== h.selector && ("**" !== a || !h.selector) || (_.splice(u--, 1), h.selector && _.delegateCount--, !v.remove || !v.remove.call(e, h)));
                        0 === _.length && p !== _.length && ((!v.teardown || v.teardown.call(e, c) === !1) && O.removeEvent(e, s, w.handle), delete d[s])
                    } else
                        for (s in d)
                            O.event.remove(e, s + t[o], n, a, !0);
                O.isEmptyObject(d) && (f = w.handle, f && (f.elem = null), O.removeData(e, ["events", "handle"], !0))
            }
        },customEvent: {getData: !0,setData: !0,changeData: !0},trigger: function(n, a, i, o) {
            if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                var r, s, l, c, p, u, d, v, f, _, h = n.type || n, w = [];
                if (at.test(h + O.event.triggered))
                    return;
                if (h.indexOf("!") >= 0 && (h = h.slice(0, -1), s = !0), h.indexOf(".") >= 0 && (w = h.split("."), h = w.shift(), w.sort()), (!i || O.event.customEvent[h]) && !O.event.global[h])
                    return;
                if (n = "object" == typeof n ? n[O.expando] ? n : new O.Event(h, n) : new O.Event(h), n.type = h, n.isTrigger = !0, n.exclusive = s, n.namespace = w.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, u = h.indexOf(":") < 0 ? "on" + h : "", !i) {
                    r = O.cache;
                    for (l in r)
                        r[l].events && r[l].events[h] && O.event.trigger(n, a, r[l].handle.elem, !0);
                    return
                }
                if (n.result = t, n.target || (n.target = i), a = null != a ? O.makeArray(a) : [], a.unshift(n), d = O.event.special[h] || {}, d.trigger && d.trigger.apply(i, a) === !1)
                    return;
                if (f = [[i, d.bindType || h]], !o && !d.noBubble && !O.isWindow(i)) {
                    for (_ = d.delegateType || h, c = at.test(_ + h) ? i : i.parentNode, p = null; c; c = c.parentNode)
                        f.push([c, _]), p = c;
                    p && p === i.ownerDocument && f.push([p.defaultView || p.parentWindow || e, _])
                }
                for (l = 0; l < f.length && !n.isPropagationStopped(); l++)
                    c = f[l][0], n.type = f[l][1], v = (O._data(c, "events") || {})[n.type] && O._data(c, "handle"), v && v.apply(c, a), v = u && c[u], v && O.acceptData(c) && v.apply(c, a) === !1 && n.preventDefault();
                return n.type = h, !(o || n.isDefaultPrevented() || d._default && d._default.apply(i.ownerDocument, a) !== !1 || "click" === h && O.nodeName(i, "a") || !O.acceptData(i) || !u || !i[h] || ("focus" === h || "blur" === h) && 0 === n.target.offsetWidth || O.isWindow(i) || (p = i[u], p && (i[u] = null), O.event.triggered = h, i[h](), O.event.triggered = t, !p || !(i[u] = p))), n.result
            }
        },dispatch: function(n) {
            n = O.event.fix(n || e.event);
            var a, i, o, r, s, l, c, p, u, d, v = (O._data(this, "events") || {})[n.type] || [], f = v.delegateCount, _ = [].slice.call(arguments, 0), h = !n.exclusive && !n.namespace, w = [];
            if (_[0] = n, n.delegateTarget = this, f && !n.target.disabled && (!n.button || "click" !== n.type))
                for (r = O(this), r.context = this.ownerDocument || this, o = n.target; o != this; o = o.parentNode || this) {
                    for (l = {}, p = [], r[0] = o, a = 0; f > a; a++)
                        u = v[a], d = u.selector, l[d] === t && (l[d] = u.quick ? rt(o, u.quick) : r.is(d)), l[d] && p.push(u);
                    p.length && w.push({elem: o,matches: p})
                }
            for (v.length > f && w.push({elem: this,matches: v.slice(f)}), a = 0; a < w.length && !n.isPropagationStopped(); a++)
                for (c = w[a], n.currentTarget = c.elem, i = 0; i < c.matches.length && !n.isImmediatePropagationStopped(); i++)
                    u = c.matches[i], (h || !n.namespace && !u.namespace || n.namespace_re && n.namespace_re.test(u.namespace)) && (n.data = u.data, n.handleObj = u, s = ((O.event.special[u.origType] || {}).handle || u.handler).apply(c.elem, _), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
            return n.result
        },props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, n) {
            var a, i, o, r = n.button, s = n.fromElement;
            return null == e.pageX && null != n.clientX && (a = e.target.ownerDocument || $, i = a.documentElement, o = a.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && r !== t && (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
        }},fix: function(e) {
            if (e[O.expando])
                return e;
            var n, a, i = e, o = O.event.fixHooks[e.type] || {}, r = o.props ? this.props.concat(o.props) : this.props;
            for (e = O.Event(i), n = r.length; n; )
                a = r[--n], e[a] = i[a];
            return e.target || (e.target = i.srcElement || $), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), o.filter ? o.filter(e, i) : e
        },special: {ready: {setup: O.bindReady},load: {noBubble: !0},focus: {delegateType: "focusin"},blur: {delegateType: "focusout"},beforeunload: {setup: function(e, t, n) {
            O.isWindow(this) && (this.onbeforeunload = n)
        },teardown: function(e, t) {
            this.onbeforeunload === t && (this.onbeforeunload = null)
        }}},simulate: function(e, t, n, a) {
            var i = O.extend(new O.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
            a ? O.event.trigger(i, null, t) : O.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }}, O.event.handle = O.event.dispatch, O.removeEvent = $.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            e.detachEvent && e.detachEvent("on" + t, n)
        }, O.Event = function(e, t) {
            return this instanceof O.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? S : D) : this.type = e, t && O.extend(this, t), this.timeStamp = e && e.timeStamp || O.now(), this[O.expando] = !0, void 0) : new O.Event(e, t)
        }, O.Event.prototype = {preventDefault: function() {
            this.isDefaultPrevented = S;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },stopPropagation: function() {
            this.isPropagationStopped = S;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = S, this.stopPropagation()
        },isDefaultPrevented: D,isPropagationStopped: D,isImmediatePropagationStopped: D}, O.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(e, t) {
            O.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
                {
                    var n, a = this, i = e.relatedTarget, o = e.handleObj;
                    o.selector
                }
                return (!i || i !== a && !O.contains(a, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }}
        }), O.support.submitBubbles || (O.event.special.submit = {setup: function() {
            return O.nodeName(this, "form") ? !1 : void O.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, a = O.nodeName(n, "input") || O.nodeName(n, "button") ? n.form : t;
                a && !a._submit_attached && (O.event.add(a, "submit._submit", function(e) {
                    this.parentNode && !e.isTrigger && O.event.simulate("submit", this.parentNode, e, !0)
                }), a._submit_attached = !0)
            })
        },teardown: function() {
            return O.nodeName(this, "form") ? !1 : void O.event.remove(this, "._submit")
        }}), O.support.changeBubbles || (O.event.special.change = {setup: function() {
            return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (O.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), O.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1, O.event.simulate("change", this, e, !0))
            })), !1) : void O.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !t._change_attached && (O.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && O.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            })
        },handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },teardown: function() {
            return O.event.remove(this, "._change"), Q.test(this.nodeName)
        }}), O.support.focusinBubbles || O.each({focus: "focusin",blur: "focusout"}, function(e, t) {
            var n = 0, a = function(e) {
                O.event.simulate(t, e.target, O.event.fix(e), !0)
            };
            O.event.special[t] = {setup: function() {
                0 === n++ && $.addEventListener(e, a, !0)
            },teardown: function() {
                0 === --n && $.removeEventListener(e, a, !0)
            }}
        }), O.fn.extend({on: function(e, n, a, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof n && (a = n, n = t);
                for (s in e)
                    this.on(s, n, a, e[s], o);
                return this
            }
            if (null == a && null == i ? (i = n, a = n = t) : null == i && ("string" == typeof n ? (i = a, a = t) : (i = a, a = n, n = t)), i === !1)
                i = D;
            else if (!i)
                return this;
            return 1 === o && (r = i, i = function(e) {
                return O().off(e), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = O.guid++)), this.each(function() {
                O.event.add(this, e, i, a, n)
            })
        },one: function(e, t, n, a) {
            return this.on.call(this, e, t, n, a, 1)
        },off: function(e, n, a) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return O(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this
            }
            if ("object" == typeof e) {
                for (var o in e)
                    this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (a = n, n = t), a === !1 && (a = D), this.each(function() {
                O.event.remove(this, e, a, n)
            })
        },bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },unbind: function(e, t) {
            return this.off(e, null, t)
        },live: function(e, t, n) {
            return O(this.context).on(e, this.selector, t, n), this
        },die: function(e, t) {
            return O(this.context).off(e, this.selector || "**", t), this
        },delegate: function(e, t, n, a) {
            return this.on(t, e, n, a)
        },undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
        },trigger: function(e, t) {
            return this.each(function() {
                O.event.trigger(e, t, this)
            })
        },triggerHandler: function(e, t) {
            return this[0] ? O.event.trigger(e, t, this[0], !0) : void 0
        },toggle: function(e) {
            var t = arguments, n = e.guid || O.guid++, a = 0, i = function(n) {
                var i = (O._data(this, "lastToggle" + e.guid) || 0) % a;
                return O._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
            };
            for (i.guid = n; a < t.length; )
                t[a++].guid = n;
            return this.click(i)
        },hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }}), O.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            O.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, O.attrFn && (O.attrFn[t] = !0), tt.test(t) && (O.event.fixHooks[t] = O.event.keyHooks), nt.test(t) && (O.event.fixHooks[t] = O.event.mouseHooks)
        }), function() {
            function e(e, t, n, a, o, r) {
                for (var s = 0, l = a.length; l > s; s++) {
                    var c = a[s];
                    if (c) {
                        var p = !1;
                        for (c = c[e]; c; ) {
                            if (c[i] === n) {
                                p = a[c.sizset];
                                break
                            }
                            if (1 === c.nodeType)
                                if (r || (c[i] = n, c.sizset = s), "string" != typeof t) {
                                    if (c === t) {
                                        p = !0;
                                        break
                                    }
                                } else if (d.filter(t, [c]).length > 0) {
                                    p = c;
                                    break
                                }
                            c = c[e]
                        }
                        a[s] = p
                    }
                }
            }
            function n(e, t, n, a, o, r) {
                for (var s = 0, l = a.length; l > s; s++) {
                    var c = a[s];
                    if (c) {
                        var p = !1;
                        for (c = c[e]; c; ) {
                            if (c[i] === n) {
                                p = a[c.sizset];
                                break
                            }
                            if (1 === c.nodeType && !r && (c[i] = n, c.sizset = s), c.nodeName.toLowerCase() === t) {
                                p = c;
                                break
                            }
                            c = c[e]
                        }
                        a[s] = p
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, i = "sizcache" + (Math.random() + "").replace(".", ""), o = 0, r = Object.prototype.toString, s = !1, l = !0, c = /\\/g, p = /\r\n/g, u = /\W/;
            [0, 0].sort(function() {
                return l = !1, 0
            });
            var d = function(e, t, n, i) {
                n = n || [], t = t || $;
                var o = t;
                if (1 !== t.nodeType && 9 !== t.nodeType)
                    return [];
                if (!e || "string" != typeof e)
                    return n;
                var s, l, c, p, u, v, h, w, m = !0, b = d.isXML(t), y = [], x = e;
                do
                    if (a.exec(""), s = a.exec(x), s && (x = s[3], y.push(s[1]), s[2])) {
                        p = s[3];
                        break
                    }
                while (s);
                if (y.length > 1 && _.exec(e))
                    if (2 === y.length && f.relative[y[0]])
                        l = C(y[0] + y[1], t, i);
                    else
                        for (l = f.relative[y[0]] ? [t] : d(y.shift(), t); y.length; )
                            e = y.shift(), f.relative[e] && (e += y.shift()), l = C(e, l, i);
                else if (!i && y.length > 1 && 9 === t.nodeType && !b && f.match.ID.test(y[0]) && !f.match.ID.test(y[y.length - 1]) && (u = d.find(y.shift(), t, b), t = u.expr ? d.filter(u.expr, u.set)[0] : u.set[0]), t)
                    for (u = i ? {expr: y.pop(),set: g(i)} : d.find(y.pop(), 1 !== y.length || "~" !== y[0] && "+" !== y[0] || !t.parentNode ? t : t.parentNode, b), l = u.expr ? d.filter(u.expr, u.set) : u.set, y.length > 0 ? c = g(l) : m = !1; y.length; )
                        v = y.pop(), h = v, f.relative[v] ? h = y.pop() : v = "", null == h && (h = t), f.relative[v](c, h, b);
                else
                    c = y = [];
                if (c || (c = l), c || d.error(v || e), "[object Array]" === r.call(c))
                    if (m)
                        if (t && 1 === t.nodeType)
                            for (w = 0; null != c[w]; w++)
                                c[w] && (c[w] === !0 || 1 === c[w].nodeType && d.contains(t, c[w])) && n.push(l[w]);
                        else
                            for (w = 0; null != c[w]; w++)
                                c[w] && 1 === c[w].nodeType && n.push(l[w]);
                    else
                        n.push.apply(n, c);
                else
                    g(c, n);
                return p && (d(p, o, n, i), d.uniqueSort(n)), n
            };
            d.uniqueSort = function(e) {
                if (b && (s = l, e.sort(b), s))
                    for (var t = 1; t < e.length; t++)
                        e[t] === e[t - 1] && e.splice(t--, 1);
                return e
            }, d.matches = function(e, t) {
                return d(e, null, null, t)
            }, d.matchesSelector = function(e, t) {
                return d(t, null, null, [e]).length > 0
            }, d.find = function(e, t, n) {
                var a, i, o, r, s, l;
                if (!e)
                    return [];
                for (i = 0, o = f.order.length; o > i; i++)
                    if (s = f.order[i], (r = f.leftMatch[s].exec(e)) && (l = r[1], r.splice(1, 1), "\\" !== l.substr(l.length - 1) && (r[1] = (r[1] || "").replace(c, ""), a = f.find[s](r, t, n), null != a))) {
                        e = e.replace(f.match[s], "");
                        break
                    }
                return a || (a = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {set: a,expr: e}
            }, d.filter = function(e, n, a, i) {
                for (var o, r, s, l, c, p, u, v, _, h = e, w = [], g = n, m = n && n[0] && d.isXML(n[0]); e && n.length; ) {
                    for (s in f.filter)
                        if (null != (o = f.leftMatch[s].exec(e)) && o[2]) {
                            if (p = f.filter[s], u = o[1], r = !1, o.splice(1, 1), "\\" === u.substr(u.length - 1))
                                continue;
                            if (g === w && (w = []), f.preFilter[s])
                                if (o = f.preFilter[s](o, g, a, w, i, m)) {
                                    if (o === !0)
                                        continue
                                } else
                                    r = l = !0;
                            if (o)
                                for (v = 0; null != (c = g[v]); v++)
                                    c && (l = p(c, o, v, g), _ = i ^ l, a && null != l ? _ ? r = !0 : g[v] = !1 : _ && (w.push(c), r = !0));
                            if (l !== t) {
                                if (a || (g = w), e = e.replace(f.match[s], ""), !r)
                                    return [];
                                break
                            }
                        }
                    if (e === h) {
                        if (null != r)
                            break;
                        d.error(e)
                    }
                    h = e
                }
                return g
            }, d.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            var v = d.getText = function(e) {
                var t, n, a = e.nodeType, i = "";
                if (a) {
                    if (1 === a || 9 === a) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        if ("string" == typeof e.innerText)
                            return e.innerText.replace(p, "");
                        for (e = e.firstChild; e; e = e.nextSibling)
                            i += v(e)
                    } else if (3 === a || 4 === a)
                        return e.nodeValue
                } else
                    for (t = 0; n = e[t]; t++)
                        8 !== n.nodeType && (i += v(n));
                return i
            }, f = d.selectors = {order: ["ID", "NAME", "TAG"],match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch: {},attrMap: {"class": "className","for": "htmlFor"},attrHandle: {href: function(e) {
                return e.getAttribute("href")
            },type: function(e) {
                return e.getAttribute("type")
            }},relative: {"+": function(e, t) {
                var n = "string" == typeof t, a = n && !u.test(t), i = n && !a;
                a && (t = t.toLowerCase());
                for (var o, r = 0, s = e.length; s > r; r++)
                    if (o = e[r]) {
                        for (; (o = o.previousSibling) && 1 !== o.nodeType; )
                            ;
                        e[r] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                    }
                i && d.filter(t, e, !0)
            },">": function(e, t) {
                var n, a = "string" == typeof t, i = 0, o = e.length;
                if (a && !u.test(t)) {
                    for (t = t.toLowerCase(); o > i; i++)
                        if (n = e[i]) {
                            var r = n.parentNode;
                            e[i] = r.nodeName.toLowerCase() === t ? r : !1
                        }
                } else {
                    for (; o > i; i++)
                        n = e[i], n && (e[i] = a ? n.parentNode : n.parentNode === t);
                    a && d.filter(t, e, !0)
                }
            },"": function(t, a, i) {
                var r, s = o++, l = e;
                "string" == typeof a && !u.test(a) && (a = a.toLowerCase(), r = a, l = n), l("parentNode", a, s, t, r, i)
            },"~": function(t, a, i) {
                var r, s = o++, l = e;
                "string" == typeof a && !u.test(a) && (a = a.toLowerCase(), r = a, l = n), l("previousSibling", a, s, t, r, i)
            }},find: {ID: function(e, t, n) {
                if ("undefined" != typeof t.getElementById && !n) {
                    var a = t.getElementById(e[1]);
                    return a && a.parentNode ? [a] : []
                }
            },NAME: function(e, t) {
                if ("undefined" != typeof t.getElementsByName) {
                    for (var n = [], a = t.getElementsByName(e[1]), i = 0, o = a.length; o > i; i++)
                        a[i].getAttribute("name") === e[1] && n.push(a[i]);
                    return 0 === n.length ? null : n
                }
            },TAG: function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
            }},preFilter: {CLASS: function(e, t, n, a, i, o) {
                if (e = " " + e[1].replace(c, "") + " ", o)
                    return e;
                for (var r, s = 0; null != (r = t[s]); s++)
                    r && (i ^ (r.className && (" " + r.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || a.push(r) : n && (t[s] = !1));
                return !1
            },ID: function(e) {
                return e[1].replace(c, "")
            },TAG: function(e) {
                return e[1].replace(c, "").toLowerCase()
            },CHILD: function(e) {
                if ("nth" === e[1]) {
                    e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                    var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                    e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                } else
                    e[2] && d.error(e[0]);
                return e[0] = o++, e
            },ATTR: function(e, t, n, a, i, o) {
                var r = e[1] = e[1].replace(c, "");
                return !o && f.attrMap[r] && (e[1] = f.attrMap[r]), e[4] = (e[4] || e[5] || "").replace(c, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
            },PSEUDO: function(e, t, n, i, o) {
                if ("not" === e[1]) {
                    if (!((a.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                        var r = d.filter(e[3], t, n, !0 ^ o);
                        return n || i.push.apply(i, r), !1
                    }
                    e[3] = d(e[3], null, null, t)
                } else if (f.match.POS.test(e[0]) || f.match.CHILD.test(e[0]))
                    return !0;
                return e
            },POS: function(e) {
                return e.unshift(!0), e
            }},filters: {enabled: function(e) {
                return e.disabled === !1 && "hidden" !== e.type
            },disabled: function(e) {
                return e.disabled === !0
            },checked: function(e) {
                return e.checked === !0
            },selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            },parent: function(e) {
                return !!e.firstChild
            },empty: function(e) {
                return !e.firstChild
            },has: function(e, t, n) {
                return !!d(n[3], e).length
            },header: function(e) {
                return /h\d/i.test(e.nodeName)
            },text: function(e) {
                var t = e.getAttribute("type"), n = e.type;
                return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
            },radio: function(e) {
                return "input" === e.nodeName.toLowerCase() && "radio" === e.type
            },checkbox: function(e) {
                return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
            },file: function(e) {
                return "input" === e.nodeName.toLowerCase() && "file" === e.type
            },password: function(e) {
                return "input" === e.nodeName.toLowerCase() && "password" === e.type
            },submit: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && "submit" === e.type
            },image: function(e) {
                return "input" === e.nodeName.toLowerCase() && "image" === e.type
            },reset: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && "reset" === e.type
            },button: function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
            },input: function(e) {
                return /input|select|textarea|button/i.test(e.nodeName)
            },focus: function(e) {
                return e === e.ownerDocument.activeElement
            }},setFilters: {first: function(e, t) {
                return 0 === t
            },last: function(e, t, n, a) {
                return t === a.length - 1
            },even: function(e, t) {
                return t % 2 === 0
            },odd: function(e, t) {
                return t % 2 === 1
            },lt: function(e, t, n) {
                return t < n[3] - 0
            },gt: function(e, t, n) {
                return t > n[3] - 0
            },nth: function(e, t, n) {
                return n[3] - 0 === t
            },eq: function(e, t, n) {
                return n[3] - 0 === t
            }},filter: {PSEUDO: function(e, t, n, a) {
                var i = t[1], o = f.filters[i];
                if (o)
                    return o(e, n, t, a);
                if ("contains" === i)
                    return (e.textContent || e.innerText || v([e]) || "").indexOf(t[3]) >= 0;
                if ("not" === i) {
                    for (var r = t[3], s = 0, l = r.length; l > s; s++)
                        if (r[s] === e)
                            return !1;
                    return !0
                }
                d.error(i)
            },CHILD: function(e, t) {
                var n, a, o, r, s, l, c = t[1], p = e;
                switch (c) {
                    case "only":
                    case "first":
                        for (; p = p.previousSibling; )
                            if (1 === p.nodeType)
                                return !1;
                        if ("first" === c)
                            return !0;
                        p = e;
                    case "last":
                        for (; p = p.nextSibling; )
                            if (1 === p.nodeType)
                                return !1;
                        return !0;
                    case "nth":
                        if (n = t[2], a = t[3], 1 === n && 0 === a)
                            return !0;
                        if (o = t[0], r = e.parentNode, r && (r[i] !== o || !e.nodeIndex)) {
                            for (s = 0, p = r.firstChild; p; p = p.nextSibling)
                                1 === p.nodeType && (p.nodeIndex = ++s);
                            r[i] = o
                        }
                        return l = e.nodeIndex - a, 0 === n ? 0 === l : l % n === 0 && l / n >= 0
                }
            },ID: function(e, t) {
                return 1 === e.nodeType && e.getAttribute("id") === t
            },TAG: function(e, t) {
                return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
            },CLASS: function(e, t) {
                return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
            },ATTR: function(e, t) {
                var n = t[1], a = d.attr ? d.attr(e, n) : f.attrHandle[n] ? f.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n), i = a + "", o = t[2], r = t[4];
                return null == a ? "!=" === o : !o && d.attr ? null != a : "=" === o ? i === r : "*=" === o ? i.indexOf(r) >= 0 : "~=" === o ? (" " + i + " ").indexOf(r) >= 0 : r ? "!=" === o ? i !== r : "^=" === o ? 0 === i.indexOf(r) : "$=" === o ? i.substr(i.length - r.length) === r : "|=" === o ? i === r || i.substr(0, r.length + 1) === r + "-" : !1 : i && a !== !1
            },POS: function(e, t, n, a) {
                var i = t[2], o = f.setFilters[i];
                return o ? o(e, n, t, a) : void 0
            }}}, _ = f.match.POS, h = function(e, t) {
                return "\\" + (t - 0 + 1)
            };
            for (var w in f.match)
                f.match[w] = new RegExp(f.match[w].source + /(?![^\[]*\])(?![^\(]*\))/.source), f.leftMatch[w] = new RegExp(/(^(?:.|\r|\n)*?)/.source + f.match[w].source.replace(/\\(\d+)/g, h));
            var g = function(e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
            try {
                Array.prototype.slice.call($.documentElement.childNodes, 0)[0].nodeType
            } catch (m) {
                g = function(e, t) {
                    var n = 0, a = t || [];
                    if ("[object Array]" === r.call(e))
                        Array.prototype.push.apply(a, e);
                    else if ("number" == typeof e.length)
                        for (var i = e.length; i > n; n++)
                            a.push(e[n]);
                    else
                        for (; e[n]; n++)
                            a.push(e[n]);
                    return a
                }
            }
            var b, y;
            $.documentElement.compareDocumentPosition ? b = function(e, t) {
                return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : (b = function(e, t) {
                if (e === t)
                    return s = !0, 0;
                if (e.sourceIndex && t.sourceIndex)
                    return e.sourceIndex - t.sourceIndex;
                var n, a, i = [], o = [], r = e.parentNode, l = t.parentNode, c = r;
                if (r === l)
                    return y(e, t);
                if (!r)
                    return -1;
                if (!l)
                    return 1;
                for (; c; )
                    i.unshift(c), c = c.parentNode;
                for (c = l; c; )
                    o.unshift(c), c = c.parentNode;
                n = i.length, a = o.length;
                for (var p = 0; n > p && a > p; p++)
                    if (i[p] !== o[p])
                        return y(i[p], o[p]);
                return p === n ? y(e, o[p], -1) : y(i[p], t, 1)
            }, y = function(e, t, n) {
                if (e === t)
                    return n;
                for (var a = e.nextSibling; a; ) {
                    if (a === t)
                        return -1;
                    a = a.nextSibling
                }
                return 1
            }), function() {
                var e = $.createElement("div"), n = "script" + (new Date).getTime(), a = $.documentElement;
                e.innerHTML = "<a name='" + n + "'/>", a.insertBefore(e, a.firstChild), $.getElementById(n) && (f.find.ID = function(e, n, a) {
                    if ("undefined" != typeof n.getElementById && !a) {
                        var i = n.getElementById(e[1]);
                        return i ? i.id === e[1] || "undefined" != typeof i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                    }
                }, f.filter.ID = function(e, t) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return 1 === e.nodeType && n && n.nodeValue === t
                }), a.removeChild(e), a = e = null
            }(), function() {
                var e = $.createElement("div");
                e.appendChild($.createComment("")), e.getElementsByTagName("*").length > 0 && (f.find.TAG = function(e, t) {
                    var n = t.getElementsByTagName(e[1]);
                    if ("*" === e[1]) {
                        for (var a = [], i = 0; n[i]; i++)
                            1 === n[i].nodeType && a.push(n[i]);
                        n = a
                    }
                    return n
                }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (f.attrHandle.href = function(e) {
                    return e.getAttribute("href", 2)
                }), e = null
            }(), $.querySelectorAll && function() {
                var e = d, t = $.createElement("div"), n = "__sizzle__";
                if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                    d = function(t, a, i, o) {
                        if (a = a || $, !o && !d.isXML(a)) {
                            var r = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                            if (r && (1 === a.nodeType || 9 === a.nodeType)) {
                                if (r[1])
                                    return g(a.getElementsByTagName(t), i);
                                if (r[2] && f.find.CLASS && a.getElementsByClassName)
                                    return g(a.getElementsByClassName(r[2]), i)
                            }
                            if (9 === a.nodeType) {
                                if ("body" === t && a.body)
                                    return g([a.body], i);
                                if (r && r[3]) {
                                    var s = a.getElementById(r[3]);
                                    if (!s || !s.parentNode)
                                        return g([], i);
                                    if (s.id === r[3])
                                        return g([s], i)
                                }
                                try {
                                    return g(a.querySelectorAll(t), i)
                                } catch (l) {
                                }
                            } else if (1 === a.nodeType && "object" !== a.nodeName.toLowerCase()) {
                                var c = a, p = a.getAttribute("id"), u = p || n, v = a.parentNode, _ = /^\s*[+~]/.test(t);
                                p ? u = u.replace(/'/g, "\\$&") : a.setAttribute("id", u), _ && v && (a = a.parentNode);
                                try {
                                    if (!_ || v)
                                        return g(a.querySelectorAll("[id='" + u + "'] " + t), i)
                                } catch (h) {
                                }finally {
                                    p || c.removeAttribute("id")
                                }
                            }
                        }
                        return e(t, a, i, o)
                    };
                    for (var a in e)
                        d[a] = e[a];
                    t = null
                }
            }(), function() {
                var e = $.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                if (t) {
                    var n = !t.call($.createElement("div"), "div"), a = !1;
                    try {
                        t.call($.documentElement, "[test!='']:sizzle")
                    } catch (i) {
                        a = !0
                    }
                    d.matchesSelector = function(e, i) {
                        if (i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e))
                            try {
                                if (a || !f.match.PSEUDO.test(i) && !/!=/.test(i)) {
                                    var o = t.call(e, i);
                                    if (o || !n || e.document && 11 !== e.document.nodeType)
                                        return o
                                }
                            } catch (r) {
                            }
                        return d(i, null, null, [e]).length > 0
                    }
                }
            }(), function() {
                var e = $.createElement("div");
                if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                    if (e.lastChild.className = "e", 1 === e.getElementsByClassName("e").length)
                        return;
                    f.order.splice(1, 0, "CLASS"), f.find.CLASS = function(e, t, n) {
                        return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
                    }, e = null
                }
            }(), d.contains = $.documentElement.contains ? function(e, t) {
                return e !== t && (e.contains ? e.contains(t) : !0)
            } : $.documentElement.compareDocumentPosition ? function(e, t) {
                return !!(16 & e.compareDocumentPosition(t))
            } : function() {
                return !1
            }, d.isXML = function(e) {
                var t = (e ? e.ownerDocument || e : 0).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            };
            var C = function(e, t, n) {
                for (var a, i = [], o = "", r = t.nodeType ? [t] : t; a = f.match.PSEUDO.exec(e); )
                    o += a[0], e = e.replace(f.match.PSEUDO, "");
                e = f.relative[e] ? e + "*" : e;
                for (var s = 0, l = r.length; l > s; s++)
                    d(e, r[s], i, n);
                return d.filter(o, i)
            };
            d.attr = O.attr, d.selectors.attrMap = {}, O.find = d, O.expr = d.selectors, O.expr[":"] = O.expr.filters, O.unique = d.uniqueSort, O.text = d.getText, O.isXMLDoc = d.isXML, O.contains = d.contains
        }();
        var lt = /Until$/, ct = /^(?:parents|prevUntil|prevAll)/, pt = /,/, ut = /^.[^:#\[\.,]*$/, dt = Array.prototype.slice, vt = O.expr.match.POS, ft = {children: !0,contents: !0,next: !0,prev: !0};
        O.fn.extend({find: function(e) {
            var t, n, a = this;
            if ("string" != typeof e)
                return O(e).filter(function() {
                    for (t = 0, n = a.length; n > t; t++)
                        if (O.contains(a[t], this))
                            return !0
                });
            var i, o, r, s = this.pushStack("", "find", e);
            for (t = 0, n = this.length; n > t; t++)
                if (i = s.length, O.find(e, this[t], s), t > 0)
                    for (o = i; o < s.length; o++)
                        for (r = 0; i > r; r++)
                            if (s[r] === s[o]) {
                                s.splice(o--, 1);
                                break
                            }
            return s
        },has: function(e) {
            var t = O(e);
            return this.filter(function() {
                for (var e = 0, n = t.length; n > e; e++)
                    if (O.contains(this, t[e]))
                        return !0
            })
        },not: function(e) {
            return this.pushStack(T(this, e, !1), "not", e)
        },filter: function(e) {
            return this.pushStack(T(this, e, !0), "filter", e)
        },is: function(e) {
            return !!e && ("string" == typeof e ? vt.test(e) ? O(e, this.context).index(this[0]) >= 0 : O.filter(e, this).length > 0 : this.filter(e).length > 0)
        },closest: function(e, t) {
            var n, a, i = [], o = this[0];
            if (O.isArray(e)) {
                for (var r = 1; o && o.ownerDocument && o !== t; ) {
                    for (n = 0; n < e.length; n++)
                        O(o).is(e[n]) && i.push({selector: e[n],elem: o,level: r});
                    o = o.parentNode, r++
                }
                return i
            }
            var s = vt.test(e) || "string" != typeof e ? O(e, t || this.context) : 0;
            for (n = 0, a = this.length; a > n; n++)
                for (o = this[n]; o; ) {
                    if (s ? s.index(o) > -1 : O.find.matchesSelector(o, e)) {
                        i.push(o);
                        break
                    }
                    if (o = o.parentNode, !o || !o.ownerDocument || o === t || 11 === o.nodeType)
                        break
                }
            return i = i.length > 1 ? O.unique(i) : i, this.pushStack(i, "closest", e)
        },index: function(e) {
            return e ? "string" == typeof e ? O.inArray(this[0], O(e)) : O.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },add: function(e, t) {
            var n = "string" == typeof e ? O(e, t) : O.makeArray(e && e.nodeType ? [e] : e), a = O.merge(this.get(), n);
            return this.pushStack(k(n[0]) || k(a[0]) ? a : O.unique(a))
        },andSelf: function() {
            return this.add(this.prevObject)
        }}), O.each({parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },parents: function(e) {
            return O.dir(e, "parentNode")
        },parentsUntil: function(e, t, n) {
            return O.dir(e, "parentNode", n)
        },next: function(e) {
            return O.nth(e, 2, "nextSibling")
        },prev: function(e) {
            return O.nth(e, 2, "previousSibling")
        },nextAll: function(e) {
            return O.dir(e, "nextSibling")
        },prevAll: function(e) {
            return O.dir(e, "previousSibling")
        },nextUntil: function(e, t, n) {
            return O.dir(e, "nextSibling", n)
        },prevUntil: function(e, t, n) {
            return O.dir(e, "previousSibling", n)
        },siblings: function(e) {
            return O.sibling(e.parentNode.firstChild, e)
        },children: function(e) {
            return O.sibling(e.firstChild)
        },contents: function(e) {
            return O.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : O.makeArray(e.childNodes)
        }}, function(e, t) {
            O.fn[e] = function(n, a) {
                var i = O.map(this, t, n);
                return lt.test(e) || (a = n), a && "string" == typeof a && (i = O.filter(a, i)), i = this.length > 1 && !ft[e] ? O.unique(i) : i, (this.length > 1 || pt.test(a)) && ct.test(e) && (i = i.reverse()), this.pushStack(i, e, dt.call(arguments).join(","))
            }
        }), O.extend({filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? O.find.matchesSelector(t[0], e) ? [t[0]] : [] : O.find.matches(e, t)
        },dir: function(e, n, a) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (a === t || 1 !== o.nodeType || !O(o).is(a)); )
                1 === o.nodeType && i.push(o), o = o[n];
            return i
        },nth: function(e, t, n) {
            t = t || 1;
            for (var a = 0; e && (1 !== e.nodeType || ++a !== t); e = e[n])
                ;
            return e
        },sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }});
        var _t = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ht = / jQuery\d+="(?:\d+|null)"/g, wt = /^\s+/, gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, mt = /<([\w:]+)/, bt = /<tbody/i, yt = /<|&#?\w+;/, Ct = /<(?:script|style)/i, xt = /<(?:script|object|embed|option|style)/i, It = new RegExp("<(?:" + _t + ")", "i"), Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /\/(java|ecma)script/i, St = /^\s*<!(?:\[CDATA\[|\-\-)/, Dt = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],area: [1, "<map>", "</map>"],_default: [0, "", ""]}, Wt = I($);
        Dt.optgroup = Dt.option, Dt.tbody = Dt.tfoot = Dt.colgroup = Dt.caption = Dt.thead, Dt.th = Dt.td, O.support.htmlSerialize || (Dt._default = [1, "div<div>", "</div>"]), O.fn.extend({text: function(e) {
            return O.isFunction(e) ? this.each(function(t) {
                var n = O(this);
                n.text(e.call(this, t, n.text()))
            }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || $).createTextNode(e)) : O.text(this)
        },wrapAll: function(e) {
            if (O.isFunction(e))
                return this.each(function(t) {
                    O(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = O(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },wrapInner: function(e) {
            return this.each(O.isFunction(e) ? function(t) {
                O(this).wrapInner(e.call(this, t))
            } : function() {
                var t = O(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },wrap: function(e) {
            var t = O.isFunction(e);
            return this.each(function(n) {
                O(this).wrapAll(t ? e.call(this, n) : e)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                O.nodeName(this, "body") || O(this).replaceWith(this.childNodes)
            }).end()
        },append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = O.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, O.clean(arguments)), e
            }
        },remove: function(e, t) {
            for (var n, a = 0; null != (n = this[a]); a++)
                (!e || O.filter(e, [n]).length) && (!t && 1 === n.nodeType && (O.cleanData(n.getElementsByTagName("*")), O.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && O.cleanData(e.getElementsByTagName("*")); e.firstChild; )
                    e.removeChild(e.firstChild);
            return this
        },clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return O.clone(this, e, t)
            })
        },html: function(e) {
            if (e === t)
                return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(ht, "") : null;
            if ("string" != typeof e || Ct.test(e) || !O.support.leadingWhitespace && wt.test(e) || Dt[(mt.exec(e) || ["", ""])[1].toLowerCase()])
                O.isFunction(e) ? this.each(function(t) {
                    var n = O(this);
                    n.html(e.call(this, t, n.html()))
                }) : this.empty().append(e);
            else {
                e = e.replace(gt, "<$1></$2>");
                try {
                    for (var n = 0, a = this.length; a > n; n++)
                        1 === this[n].nodeType && (O.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (i) {
                    this.empty().append(e)
                }
            }
            return this
        },replaceWith: function(e) {
            return this[0] && this[0].parentNode ? O.isFunction(e) ? this.each(function(t) {
                var n = O(this), a = n.html();
                n.replaceWith(e.call(this, t, a))
            }) : ("string" != typeof e && (e = O(e).detach()), this.each(function() {
                var t = this.nextSibling, n = this.parentNode;
                O(this).remove(), t ? O(t).before(e) : O(n).append(e)
            })) : this.length ? this.pushStack(O(O.isFunction(e) ? e() : e), "replaceWith", e) : this
        },detach: function(e) {
            return this.remove(e, !0)
        },domManip: function(e, n, a) {
            var i, o, r, s, l = e[0], c = [];
            if (!O.support.checkClone && 3 === arguments.length && "string" == typeof l && Tt.test(l))
                return this.each(function() {
                    O(this).domManip(e, n, a, !0)
                });
            if (O.isFunction(l))
                return this.each(function(i) {
                    var o = O(this);
                    e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, a)
                });
            if (this[0]) {
                if (s = l && l.parentNode, i = O.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {fragment: s} : O.buildFragment(e, this, c), r = i.fragment, o = 1 === r.childNodes.length ? r = r.firstChild : r.firstChild, o) {
                    n = n && O.nodeName(o, "tr");
                    for (var p = 0, u = this.length, d = u - 1; u > p; p++)
                        a.call(n ? x(this[p], o) : this[p], i.cacheable || u > 1 && d > p ? O.clone(r, !0, !0) : r)
                }
                c.length && O.each(c, h)
            }
            return this
        }}), O.buildFragment = function(e, t, n) {
            var a, i, o, r, s = e[0];
            return t && t[0] && (r = t[0].ownerDocument || t[0]), r.createDocumentFragment || (r = $), 1 === e.length && "string" == typeof s && s.length < 512 && r === $ && "<" === s.charAt(0) && !xt.test(s) && (O.support.checkClone || !Tt.test(s)) && (O.support.html5Clone || !It.test(s)) && (i = !0, o = O.fragments[s], o && 1 !== o && (a = o)), a || (a = r.createDocumentFragment(), O.clean(e, r, a, n)), i && (O.fragments[s] = o ? a : 1), {fragment: a,cacheable: i}
        }, O.fragments = {}, O.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
            O.fn[e] = function(n) {
                var a = [], i = O(n), o = 1 === this.length && this[0].parentNode;
                if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === i.length)
                    return i[t](this[0]), this;
                for (var r = 0, s = i.length; s > r; r++) {
                    var l = (r > 0 ? this.clone(!0) : this).get();
                    O(i[r])[t](l), a = a.concat(l)
                }
                return this.pushStack(a, e, i.selector)
            }
        }), O.extend({clone: function(e, t, n) {
            var a, i, o, r = O.support.html5Clone || !It.test("<" + e.nodeName) ? e.cloneNode(!0) : w(e);
            if (!(O.support.noCloneEvent && O.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || O.isXMLDoc(e)))
                for (y(e, r), a = b(e), i = b(r), o = 0; a[o]; ++o)
                    i[o] && y(a[o], i[o]);
            if (t && (C(e, r), n))
                for (a = b(e), i = b(r), o = 0; a[o]; ++o)
                    C(a[o], i[o]);
            return a = i = null, r
        },clean: function(e, t, n, a) {
            var i;
            t = t || $, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || $);
            for (var o, r, s = [], l = 0; null != (r = e[l]); l++)
                if ("number" == typeof r && (r += ""), r) {
                    if ("string" == typeof r)
                        if (yt.test(r)) {
                            r = r.replace(gt, "<$1></$2>");
                            var c = (mt.exec(r) || ["", ""])[1].toLowerCase(), p = Dt[c] || Dt._default, u = p[0], d = t.createElement("div");
                            for (t === $ ? Wt.appendChild(d) : I(t).appendChild(d), d.innerHTML = p[1] + r + p[2]; u--; )
                                d = d.lastChild;
                            if (!O.support.tbody) {
                                var v = bt.test(r), f = "table" !== c || v ? "<table>" !== p[1] || v ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes;
                                for (o = f.length - 1; o >= 0; --o)
                                    O.nodeName(f[o], "tbody") && !f[o].childNodes.length && f[o].parentNode.removeChild(f[o])
                            }
                            !O.support.leadingWhitespace && wt.test(r) && d.insertBefore(t.createTextNode(wt.exec(r)[0]), d.firstChild), r = d.childNodes
                        } else
                            r = t.createTextNode(r);
                    var _;
                    if (!O.support.appendChecked)
                        if (r[0] && "number" == typeof (_ = r.length))
                            for (o = 0; _ > o; o++)
                                g(r[o]);
                        else
                            g(r);
                    r.nodeType ? s.push(r) : s = O.merge(s, r)
                }
            if (n)
                for (i = function(e) {
                    return !e.type || kt.test(e.type)
                }, l = 0; s[l]; l++)
                    if (!a || !O.nodeName(s[l], "script") || s[l].type && "text/javascript" !== s[l].type.toLowerCase()) {
                        if (1 === s[l].nodeType) {
                            var h = O.grep(s[l].getElementsByTagName("script"), i);
                            s.splice.apply(s, [l + 1, 0].concat(h))
                        }
                        n.appendChild(s[l])
                    } else
                        a.push(s[l].parentNode ? s[l].parentNode.removeChild(s[l]) : s[l]);
            return s
        },cleanData: function(e) {
            for (var t, n, a, i = O.cache, o = O.event.special, r = O.support.deleteExpando, s = 0; null != (a = e[s]); s++)
                if ((!a.nodeName || !O.noData[a.nodeName.toLowerCase()]) && (n = a[O.expando])) {
                    if (t = i[n], t && t.events) {
                        for (var l in t.events)
                            o[l] ? O.event.remove(a, l) : O.removeEvent(a, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    r ? delete a[O.expando] : a.removeAttribute && a.removeAttribute(O.expando), delete i[n]
                }
        }});
        var Et, Nt, Pt, $t = /alpha\([^)]*\)/i, At = /opacity=([^)]*)/, Lt = /([A-Z]|^ms)/g, Ot = /^-?\d+(?:px)?$/i, Ut = /^-?\d/, Mt = /^([\-+])=([\-+.\de]+)/, zt = {position: "absolute",visibility: "hidden",display: "block"}, Rt = ["Left", "Right"], Ft = ["Top", "Bottom"];
        O.fn.css = function(e, n) {
            return 2 === arguments.length && n === t ? this : O.access(this, e, n, !0, function(e, n, a) {
                return a !== t ? O.style(e, n, a) : O.css(e, n)
            })
        }, O.extend({cssHooks: {opacity: {get: function(e, t) {
            if (t) {
                var n = Et(e, "opacity", "opacity");
                return "" === n ? "1" : n
            }
            return e.style.opacity
        }}},cssNumber: {fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": O.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(e, n, a, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s = O.camelCase(n), l = e.style, c = O.cssHooks[s];
                if (n = O.cssProps[s] || s, a === t)
                    return c && "get" in c && (o = c.get(e, !1, i)) !== t ? o : l[n];
                if (r = typeof a, "string" === r && (o = Mt.exec(a)) && (a = +(o[1] + 1) * +o[2] + parseFloat(O.css(e, n)), r = "number"), null == a || "number" === r && isNaN(a))
                    return;
                if ("number" === r && !O.cssNumber[s] && (a += "px"), !(c && "set" in c && (a = c.set(e, a)) === t))
                    try {
                        l[n] = a
                    } catch (p) {
                    }
            }
        },css: function(e, n, a) {
            var i, o;
            return n = O.camelCase(n), o = O.cssHooks[n], n = O.cssProps[n] || n, "cssFloat" === n && (n = "float"), o && "get" in o && (i = o.get(e, !0, a)) !== t ? i : Et ? Et(e, n) : void 0
        },swap: function(e, t, n) {
            var a = {};
            for (var i in t)
                a[i] = e.style[i], e.style[i] = t[i];
            n.call(e);
            for (i in t)
                e.style[i] = a[i]
        }}), O.curCSS = O.css, O.each(["height", "width"], function(e, t) {
            O.cssHooks[t] = {get: function(e, n, a) {
                var i;
                return n ? 0 !== e.offsetWidth ? _(e, t, a) : (O.swap(e, zt, function() {
                    i = _(e, t, a)
                }), i) : void 0
            },set: function(e, t) {
                return Ot.test(t) ? (t = parseFloat(t), t >= 0 ? t + "px" : void 0) : t
            }}
        }), O.support.opacity || (O.cssHooks.opacity = {get: function(e, t) {
            return At.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },set: function(e, t) {
            var n = e.style, a = e.currentStyle, i = O.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = a && a.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === O.trim(o.replace($t, "")) && (n.removeAttribute("filter"), a && !a.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }}), O(function() {
            O.support.reliableMarginRight || (O.cssHooks.marginRight = {get: function(e, t) {
                var n;
                return O.swap(e, {display: "inline-block"}, function() {
                    n = t ? Et(e, "margin-right", "marginRight") : e.style.marginRight
                }), n
            }})
        }), $.defaultView && $.defaultView.getComputedStyle && (Nt = function(e, t) {
            var n, a, i;
            return t = t.replace(Lt, "-$1").toLowerCase(), (a = e.ownerDocument.defaultView) && (i = a.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), "" === n && !O.contains(e.ownerDocument.documentElement, e) && (n = O.style(e, t))), n
        }), $.documentElement.currentStyle && (Pt = function(e, t) {
            var n, a, i, o = e.currentStyle && e.currentStyle[t], r = e.style;
            return null === o && r && (i = r[t]) && (o = i), !Ot.test(o) && Ut.test(o) && (n = r.left, a = e.runtimeStyle && e.runtimeStyle.left, a && (e.runtimeStyle.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : o || 0, o = r.pixelLeft + "px", r.left = n, a && (e.runtimeStyle.left = a)), "" === o ? "auto" : o
        }), Et = Nt || Pt, O.expr && O.expr.filters && (O.expr.filters.hidden = function(e) {
            var t = e.offsetWidth, n = e.offsetHeight;
            return 0 === t && 0 === n || !O.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || O.css(e, "display"))
        }, O.expr.filters.visible = function(e) {
            return !O.expr.filters.hidden(e)
        });
        var Bt, Ht, jt = /%20/g, Vt = /\[\]$/, qt = /\r?\n/g, Xt = /#.*$/, Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Yt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Zt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Kt = /^(?:GET|HEAD)$/, Qt = /^\/\//, Jt = /\?/, en = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, tn = /^(?:select|textarea)/i, nn = /\s+/, an = /([?&])_=[^&]*/, on = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, rn = O.fn.load, sn = {}, ln = {}, cn = ["*/"] + ["*"];
        try {
            Bt = L.href
        } catch (pn) {
            Bt = $.createElement("a"), Bt.href = "", Bt = Bt.href
        }
        Ht = on.exec(Bt.toLowerCase()) || [], O.fn.extend({load: function(e, n, a) {
            if ("string" != typeof e && rn)
                return rn.apply(this, arguments);
            if (!this.length)
                return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var o = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var r = "GET";
            n && (O.isFunction(n) ? (a = n, n = t) : "object" == typeof n && (n = O.param(n, O.ajaxSettings.traditional), r = "POST"));
            var s = this;
            return O.ajax({url: e,type: r,dataType: "html",data: n,complete: function(e, t, n) {
                n = e.responseText, e.isResolved() && (e.done(function(e) {
                    n = e
                }), s.html(o ? O("<div>").append(n.replace(en, "")).find(o) : n)), a && s.each(a, [n, t, e])
            }}), this
        },serialize: function() {
            return O.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                return this.elements ? O.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || tn.test(this.nodeName) || Yt.test(this.type))
            }).map(function(e, t) {
                var n = O(this).val();
                return null == n ? null : O.isArray(n) ? O.map(n, function(e) {
                    return {name: t.name,value: e.replace(qt, "\r\n")}
                }) : {name: t.name,value: n.replace(qt, "\r\n")}
            }).get()
        }}), O.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
            O.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), O.each(["get", "post"], function(e, n) {
            O[n] = function(e, a, i, o) {
                return O.isFunction(a) && (o = o || i, i = a, a = t), O.ajax({type: n,url: e,data: a,success: i,dataType: o})
            }
        }), O.extend({getScript: function(e, n) {
            return O.get(e, t, n, "script")
        },getJSON: function(e, t, n) {
            return O.get(e, t, n, "json")
        },ajaxSetup: function(e, t) {
            return t ? d(e, O.ajaxSettings) : (t = e, e = O.ajaxSettings), d(e, t), e
        },ajaxSettings: {url: Bt,isLocal: Zt.test(Ht[1]),global: !0,type: "GET",contentType: "application/x-www-form-urlencoded",processData: !0,async: !0,accepts: {xml: "application/xml, text/xml",html: "text/html",text: "text/plain",json: "application/json, text/javascript","*": cn},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": e.String,"text html": !0,"text json": O.parseJSON,"text xml": O.parseXML},flatOptions: {context: !0,url: !0}},ajaxPrefilter: f(sn),ajaxTransport: f(ln),ajax: function(e, n) {
            function a(e, n, a, r) {
                if (2 !== x) {
                    x = 2, l && clearTimeout(l), s = t, o = r || "", I.readyState = e > 0 ? 4 : 0;
                    var u, v, f, y, C, T = n, k = a ? p(_, I, a) : t;
                    if (e >= 200 && 300 > e || 304 === e)
                        if (_.ifModified && ((y = I.getResponseHeader("Last-Modified")) && (O.lastModified[i] = y), (C = I.getResponseHeader("Etag")) && (O.etag[i] = C)), 304 === e)
                            T = "notmodified", u = !0;
                        else
                            try {
                                v = c(_, k), T = "success", u = !0
                            } catch (S) {
                                T = "parsererror", f = S
                            }
                    else
                        f = T, (!T || e) && (T = "error", 0 > e && (e = 0));
                    I.status = e, I.statusText = "" + (n || T), u ? g.resolveWith(h, [v, T, I]) : g.rejectWith(h, [I, T, f]), I.statusCode(b), b = t, d && w.trigger("ajax" + (u ? "Success" : "Error"), [I, _, u ? v : f]), m.fireWith(h, [I, T]), d && (w.trigger("ajaxComplete", [I, _]), --O.active || O.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, r, s, l, u, d, f, _ = O.ajaxSetup({}, n), h = _.context || _, w = h !== _ && (h.nodeType || h instanceof O) ? O(h) : O.event, g = O.Deferred(), m = O.Callbacks("once memory"), b = _.statusCode || {}, y = {}, C = {}, x = 0, I = {readyState: 0,setRequestHeader: function(e, t) {
                if (!x) {
                    var n = e.toLowerCase();
                    e = C[n] = C[n] || e, y[e] = t
                }
                return this
            },getAllResponseHeaders: function() {
                return 2 === x ? o : null
            },getResponseHeader: function(e) {
                var n;
                if (2 === x) {
                    if (!r)
                        for (r = {}; n = Gt.exec(o); )
                            r[n[1].toLowerCase()] = n[2];
                    n = r[e.toLowerCase()]
                }
                return n === t ? null : n
            },overrideMimeType: function(e) {
                return x || (_.mimeType = e), this
            },abort: function(e) {
                return e = e || "abort", s && s.abort(e), a(0, e), this
            }};
            if (g.promise(I), I.success = I.done, I.error = I.fail, I.complete = m.add, I.statusCode = function(e) {
                if (e) {
                    var t;
                    if (2 > x)
                        for (t in e)
                            b[t] = [b[t], e[t]];
                    else
                        t = e[I.status], I.then(t, t)
                }
                return this
            }, _.url = ((e || _.url) + "").replace(Xt, "").replace(Qt, Ht[1] + "//"), _.dataTypes = O.trim(_.dataType || "*").toLowerCase().split(nn), null == _.crossDomain && (u = on.exec(_.url.toLowerCase()), _.crossDomain = !(!u || u[1] == Ht[1] && u[2] == Ht[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Ht[3] || ("http:" === Ht[1] ? 80 : 443)))), _.data && _.processData && "string" != typeof _.data && (_.data = O.param(_.data, _.traditional)), v(sn, _, n, I), 2 === x)
                return !1;
            if (d = _.global, _.type = _.type.toUpperCase(), _.hasContent = !Kt.test(_.type), d && 0 === O.active++ && O.event.trigger("ajaxStart"), !_.hasContent && (_.data && (_.url += (Jt.test(_.url) ? "&" : "?") + _.data, delete _.data), i = _.url, _.cache === !1)) {
                var T = O.now(), k = _.url.replace(an, "$1_=" + T);
                _.url = k + (k === _.url ? (Jt.test(_.url) ? "&" : "?") + "_=" + T : "")
            }
            (_.data && _.hasContent && _.contentType !== !1 || n.contentType) && I.setRequestHeader("Content-Type", _.contentType), _.ifModified && (i = i || _.url, O.lastModified[i] && I.setRequestHeader("If-Modified-Since", O.lastModified[i]), O.etag[i] && I.setRequestHeader("If-None-Match", O.etag[i])), I.setRequestHeader("Accept", _.dataTypes[0] && _.accepts[_.dataTypes[0]] ? _.accepts[_.dataTypes[0]] + ("*" !== _.dataTypes[0] ? ", " + cn + "; q=0.01" : "") : _.accepts["*"]);
            for (f in _.headers)
                I.setRequestHeader(f, _.headers[f]);
            if (_.beforeSend && (_.beforeSend.call(h, I, _) === !1 || 2 === x))
                return I.abort(), !1;
            for (f in {success: 1,error: 1,complete: 1})
                I[f](_[f]);
            if (s = v(ln, _, n, I)) {
                I.readyState = 1, d && w.trigger("ajaxSend", [I, _]), _.async && _.timeout > 0 && (l = setTimeout(function() {
                    I.abort("timeout")
                }, _.timeout));
                try {
                    x = 1, s.send(y, a)
                } catch (S) {
                    if (!(2 > x))
                        throw S;
                    a(-1, S)
                }
            } else
                a(-1, "No Transport");
            return I
        },param: function(e, n) {
            var a = [], i = function(e, t) {
                t = O.isFunction(t) ? t() : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (n === t && (n = O.ajaxSettings.traditional), O.isArray(e) || e.jquery && !O.isPlainObject(e))
                O.each(e, function() {
                    i(this.name, this.value)
                });
            else
                for (var o in e)
                    u(o, e[o], n, i);
            return a.join("&").replace(jt, "+")
        }}), O.extend({active: 0,lastModified: {},etag: {}});
        var un = O.now(), dn = /(\=)\?(&|$)|\?\?/i;
        O.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            return O.expando + "_" + un++
        }}), O.ajaxPrefilter("json jsonp", function(t, n, a) {
            var i = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
            if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (dn.test(t.url) || i && dn.test(t.data))) {
                var o, r = t.jsonpCallback = O.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s = e[r], l = t.url, c = t.data, p = "$1" + r + "$2";
                return t.jsonp !== !1 && (l = l.replace(dn, p), t.url === l && (i && (c = c.replace(dn, p)), t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + r))), t.url = l, t.data = c, e[r] = function(e) {
                    o = [e]
                }, a.always(function() {
                    e[r] = s, o && O.isFunction(s) && e[r](o[0])
                }), t.converters["script json"] = function() {
                    return o || O.error(r + " was not called"), o[0]
                }, t.dataTypes[0] = "json", "script"
            }
        }), O.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /javascript|ecmascript/},converters: {"text script": function(e) {
            return O.globalEval(e), e
        }}}), O.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), O.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, a = $.head || $.getElementsByTagName("head")[0] || $.documentElement;
                return {send: function(i, o) {
                    n = $.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, a && n.parentNode && a.removeChild(n), n = t, i || o(200, "success"))
                    }, a.insertBefore(n, a.firstChild)
                },abort: function() {
                    n && n.onload(0, 1)
                }}
            }
        });
        var vn, fn = e.ActiveXObject ? function() {
            for (var e in vn)
                vn[e](0, 1)
        } : !1, _n = 0;
        O.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && l() || s()
        } : l, function(e) {
            O.extend(O.support, {ajax: !!e,cors: !!e && "withCredentials" in e})
        }(O.ajaxSettings.xhr()), O.support.ajax && O.ajaxTransport(function(n) {
            if (!n.crossDomain || O.support.cors) {
                var a;
                return {send: function(i, o) {
                    var r, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields)
                            l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)
                            l.setRequestHeader(s, i[s])
                    } catch (c) {
                    }
                    l.send(n.hasContent && n.data || null), a = function(e, i) {
                        var s, c, p, u, d;
                        try {
                            if (a && (i || 4 === l.readyState))
                                if (a = t, r && (l.onreadystatechange = O.noop, fn && delete vn[r]), i)
                                    4 !== l.readyState && l.abort();
                                else {
                                    s = l.status, p = l.getAllResponseHeaders(), u = {}, d = l.responseXML, d && d.documentElement && (u.xml = d), u.text = l.responseText;
                                    try {
                                        c = l.statusText
                                    } catch (v) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                }
                        } catch (f) {
                            i || o(-1, f)
                        }
                        u && o(s, c, u, p)
                    }, n.async && 4 !== l.readyState ? (r = ++_n, fn && (vn || (vn = {}, O(e).unload(fn)), vn[r] = a), l.onreadystatechange = a) : a()
                },abort: function() {
                    a && a(0, 1)
                }}
            }
        });
        var hn, wn, gn, mn, bn = {}, yn = /^(?:toggle|show|hide)$/, Cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, xn = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
        O.fn.extend({show: function(e, t, n) {
            var o, r;
            if (e || 0 === e)
                return this.animate(i("show", 3), e, t, n);
            for (var s = 0, l = this.length; l > s; s++)
                o = this[s], o.style && (r = o.style.display, !O._data(o, "olddisplay") && "none" === r && (r = o.style.display = ""), "" === r && "none" === O.css(o, "display") && O._data(o, "olddisplay", a(o.nodeName)));
            for (s = 0; l > s; s++)
                o = this[s], o.style && (r = o.style.display, ("" === r || "none" === r) && (o.style.display = O._data(o, "olddisplay") || ""));
            return this
        },hide: function(e, t, n) {
            if (e || 0 === e)
                return this.animate(i("hide", 3), e, t, n);
            for (var a, o, r = 0, s = this.length; s > r; r++)
                a = this[r], a.style && (o = O.css(a, "display"), "none" !== o && !O._data(a, "olddisplay") && O._data(a, "olddisplay", o));
            for (r = 0; s > r; r++)
                this[r].style && (this[r].style.display = "none");
            return this
        },_toggle: O.fn.toggle,toggle: function(e, t, n) {
            var a = "boolean" == typeof e;
            return O.isFunction(e) && O.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || a ? this.each(function() {
                var t = a ? e : O(this).is(":hidden");
                O(this)[t ? "show" : "hide"]()
            }) : this.animate(i("toggle", 3), e, t, n), this
        },fadeTo: function(e, t, n, a) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, n, a)
        },animate: function(e, t, n, i) {
            function o() {
                r.queue === !1 && O._mark(this);
                var t, n, i, o, s, l, c, p, u, d = O.extend({}, r), v = 1 === this.nodeType, f = v && O(this).is(":hidden");
                d.animatedProperties = {};
                for (i in e) {
                    if (t = O.camelCase(i), i !== t && (e[t] = e[i], delete e[i]), n = e[t], O.isArray(n) ? (d.animatedProperties[t] = n[1], n = e[t] = n[0]) : d.animatedProperties[t] = d.specialEasing && d.specialEasing[t] || d.easing || "swing", "hide" === n && f || "show" === n && !f)
                        return d.complete.call(this);
                    v && ("height" === t || "width" === t) && (d.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === O.css(this, "display") && "none" === O.css(this, "float") && (O.support.inlineBlockNeedsLayout && "inline" !== a(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != d.overflow && (this.style.overflow = "hidden");
                for (i in e)
                    o = new O.fx(this, d, i), n = e[i], yn.test(n) ? (u = O._data(this, "toggle" + i) || ("toggle" === n ? f ? "show" : "hide" : 0), u ? (O._data(this, "toggle" + i, "show" === u ? "hide" : "show"), o[u]()) : o[n]()) : (s = Cn.exec(n), l = o.cur(), s ? (c = parseFloat(s[2]), p = s[3] || (O.cssNumber[i] ? "" : "px"), "px" !== p && (O.style(this, i, (c || 1) + p), l = (c || 1) / o.cur() * l, O.style(this, i, l + p)), s[1] && (c = ("-=" === s[1] ? -1 : 1) * c + l), o.custom(l, c, p)) : o.custom(l, n, ""));
                return !0
            }
            var r = O.speed(t, n, i);
            return O.isEmptyObject(e) ? this.each(r.complete, [!1]) : (e = O.extend({}, e), r.queue === !1 ? this.each(o) : this.queue(r.queue, o))
        },stop: function(e, n, a) {
            return "string" != typeof e && (a = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                function t(e, t, n) {
                    var i = t[n];
                    O.removeData(e, n, !0), i.stop(a)
                }
                var n, i = !1, o = O.timers, r = O._data(this);
                if (a || O._unmark(!0, this), null == e)
                    for (n in r)
                        r[n] && r[n].stop && n.indexOf(".run") === n.length - 4 && t(this, r, n);
                else
                    r[n = e + ".run"] && r[n].stop && t(this, r, n);
                for (n = o.length; n--; )
                    o[n].elem === this && (null == e || o[n].queue === e) && (a ? o[n](!0) : o[n].saveState(), i = !0, o.splice(n, 1));
                (!a || !i) && O.dequeue(this, e)
            })
        }}), O.each({slideDown: i("show", 1),slideUp: i("hide", 1),slideToggle: i("toggle", 1),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
            O.fn[e] = function(e, n, a) {
                return this.animate(t, e, n, a)
            }
        }), O.extend({speed: function(e, t, n) {
            var a = e && "object" == typeof e ? O.extend({}, e) : {complete: n || !n && t || O.isFunction(e) && e,duration: e,easing: n && t || t && !O.isFunction(t) && t};
            return a.duration = O.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in O.fx.speeds ? O.fx.speeds[a.duration] : O.fx.speeds._default, (null == a.queue || a.queue === !0) && (a.queue = "fx"), a.old = a.complete, a.complete = function(e) {
                O.isFunction(a.old) && a.old.call(this), a.queue ? O.dequeue(this, a.queue) : e !== !1 && O._unmark(this)
            }, a
        },easing: {linear: function(e, t, n, a) {
            return n + a * e
        },swing: function(e, t, n, a) {
            return (-Math.cos(e * Math.PI) / 2 + .5) * a + n
        }},timers: [],fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }}), O.fx.prototype = {update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (O.fx.step[this.prop] || O.fx.step._default)(this)
        },cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))
                return this.elem[this.prop];
            var e, t = O.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },custom: function(e, n, a) {
            function i(e) {
                return o.step(e)
            }
            var o = this, s = O.fx;
            this.startTime = mn || r(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = a || this.unit || (O.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function() {
                o.options.hide && O._data(o.elem, "fxshow" + o.prop) === t && O._data(o.elem, "fxshow" + o.prop, o.start)
            }, i() && O.timers.push(i) && !gn && (gn = setInterval(s.tick, s.interval))
        },show: function() {
            var e = O._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || O.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), O(this.elem).show()
        },hide: function() {
            this.options.orig[this.prop] = O._data(this.elem, "fxshow" + this.prop) || O.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },step: function(e) {
            var t, n, a, i = mn || r(), o = !0, s = this.elem, l = this.options;
            if (e || i >= l.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), l.animatedProperties[this.prop] = !0;
                for (t in l.animatedProperties)
                    l.animatedProperties[t] !== !0 && (o = !1);
                if (o) {
                    if (null != l.overflow && !O.support.shrinkWrapBlocks && O.each(["", "X", "Y"], function(e, t) {
                        s.style["overflow" + t] = l.overflow[e]
                    }), l.hide && O(s).hide(), l.hide || l.show)
                        for (t in l.animatedProperties)
                            O.style(s, t, l.orig[t]), O.removeData(s, "fxshow" + t, !0), O.removeData(s, "toggle" + t, !0);
                    a = l.complete, a && (l.complete = !1, a.call(s))
                }
                return !1
            }
            return 1 / 0 == l.duration ? this.now = i : (n = i - this.startTime, this.state = n / l.duration, this.pos = O.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }}, O.extend(O.fx, {tick: function() {
            for (var e, t = O.timers, n = 0; n < t.length; n++)
                e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || O.fx.stop()
        },interval: 13,stop: function() {
            clearInterval(gn), gn = null
        },speeds: {slow: 600,fast: 200,_default: 400},step: {opacity: function(e) {
            O.style(e.elem, "opacity", e.now)
        },_default: function(e) {
            e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
        }}}), O.each(["width", "height"], function(e, t) {
            O.fx.step[t] = function(e) {
                O.style(e.elem, t, Math.max(0, e.now) + e.unit)
            }
        }), O.expr && O.expr.filters && (O.expr.filters.animated = function(e) {
            return O.grep(O.timers, function(t) {
                return e === t.elem
            }).length
        });
        var In = /^t(?:able|d|h)$/i, Tn = /^(?:body|html)$/i;
        O.fn.offset = "getBoundingClientRect" in $.documentElement ? function(e) {
            var t, a = this[0];
            if (e)
                return this.each(function(t) {
                    O.offset.setOffset(this, e, t)
                });
            if (!a || !a.ownerDocument)
                return null;
            if (a === a.ownerDocument.body)
                return O.offset.bodyOffset(a);
            try {
                t = a.getBoundingClientRect()
            } catch (i) {
            }
            var o = a.ownerDocument, r = o.documentElement;
            if (!t || !O.contains(r, a))
                return t ? {top: t.top,left: t.left} : {top: 0,left: 0};
            var s = o.body, l = n(o), c = r.clientTop || s.clientTop || 0, p = r.clientLeft || s.clientLeft || 0, u = l.pageYOffset || O.support.boxModel && r.scrollTop || s.scrollTop, d = l.pageXOffset || O.support.boxModel && r.scrollLeft || s.scrollLeft, v = t.top + u - c, f = t.left + d - p;
            return {top: v,left: f}
        } : function(e) {
            var t = this[0];
            if (e)
                return this.each(function(t) {
                    O.offset.setOffset(this, e, t)
                });
            if (!t || !t.ownerDocument)
                return null;
            if (t === t.ownerDocument.body)
                return O.offset.bodyOffset(t);
            for (var n, a = t.offsetParent, i = t, o = t.ownerDocument, r = o.documentElement, s = o.body, l = o.defaultView, c = l ? l.getComputedStyle(t, null) : t.currentStyle, p = t.offsetTop, u = t.offsetLeft; (t = t.parentNode) && t !== s && t !== r && (!O.support.fixedPosition || "fixed" !== c.position); )
                n = l ? l.getComputedStyle(t, null) : t.currentStyle, p -= t.scrollTop, u -= t.scrollLeft, t === a && (p += t.offsetTop, u += t.offsetLeft, O.support.doesNotAddBorder && (!O.support.doesAddBorderForTableAndCells || !In.test(t.nodeName)) && (p += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), i = a, a = t.offsetParent), O.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (p += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), c = n;
            return ("relative" === c.position || "static" === c.position) && (p += s.offsetTop, u += s.offsetLeft), O.support.fixedPosition && "fixed" === c.position && (p += Math.max(r.scrollTop, s.scrollTop), u += Math.max(r.scrollLeft, s.scrollLeft)), {top: p,left: u}
        }, O.offset = {bodyOffset: function(e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return O.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(O.css(e, "marginTop")) || 0, n += parseFloat(O.css(e, "marginLeft")) || 0), {top: t,left: n}
        },setOffset: function(e, t, n) {
            var a = O.css(e, "position");
            "static" === a && (e.style.position = "relative");
            var i, o, r = O(e), s = r.offset(), l = O.css(e, "top"), c = O.css(e, "left"), p = ("absolute" === a || "fixed" === a) && O.inArray("auto", [l, c]) > -1, u = {}, d = {};
            p ? (d = r.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), O.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (u.top = t.top - s.top + i), null != t.left && (u.left = t.left - s.left + o), "using" in t ? t.using.call(e, u) : r.css(u)
        }}, O.fn.extend({position: function() {
            if (!this[0])
                return null;
            var e = this[0], t = this.offsetParent(), n = this.offset(), a = Tn.test(t[0].nodeName) ? {top: 0,left: 0} : t.offset();
            return n.top -= parseFloat(O.css(e, "marginTop")) || 0, n.left -= parseFloat(O.css(e, "marginLeft")) || 0, a.top += parseFloat(O.css(t[0], "borderTopWidth")) || 0, a.left += parseFloat(O.css(t[0], "borderLeftWidth")) || 0, {top: n.top - a.top,left: n.left - a.left}
        },offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || $.body; e && !Tn.test(e.nodeName) && "static" === O.css(e, "position"); )
                    e = e.offsetParent;
                return e
            })
        }}), O.each(["Left", "Top"], function(e, a) {
            var i = "scroll" + a;
            O.fn[i] = function(a) {
                var o, r;
                return a === t ? (o = this[0]) ? (r = n(o), r ? "pageXOffset" in r ? r[e ? "pageYOffset" : "pageXOffset"] : O.support.boxModel && r.document.documentElement[i] || r.document.body[i] : o[i]) : null : this.each(function() {
                    r = n(this), r ? r.scrollTo(e ? O(r).scrollLeft() : a, e ? a : O(r).scrollTop()) : this[i] = a
                })
            }
        }), O.each(["Height", "Width"], function(e, n) {
            var a = n.toLowerCase();
            O.fn["inner" + n] = function() {
                var e = this[0];
                return e ? e.style ? parseFloat(O.css(e, a, "padding")) : this[a]() : null
            }, O.fn["outer" + n] = function(e) {
                var t = this[0];
                return t ? t.style ? parseFloat(O.css(t, a, e ? "margin" : "border")) : this[a]() : null
            }, O.fn[a] = function(e) {
                var i = this[0];
                if (!i)
                    return null == e ? null : this;
                if (O.isFunction(e))
                    return this.each(function(t) {
                        var n = O(this);
                        n[a](e.call(this, t, n[a]()))
                    });
                if (O.isWindow(i)) {
                    var o = i.document.documentElement["client" + n], r = i.document.body;
                    return "CSS1Compat" === i.document.compatMode && o || r && r["client" + n] || o
                }
                if (9 === i.nodeType)
                    return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
                if (e === t) {
                    var s = O.css(i, a), l = parseFloat(s);
                    return O.isNumeric(l) ? l : s
                }
                return this.css(a, "string" == typeof e ? e : e + "px")
            }
        }), e.avpw_jQuery = e.avpw$ = O, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return O
        })
    }(t), function(e) {
        e.miniColors = function() {
            var t = this, a = function(t) {
                var n = e('<div style="display: none;" class="miniColors-selector"></div>');
                return n.append('<div class="miniColors-colors" style="background-color: #FFF;"><div class="miniColors-colorPicker"><div class="miniColors-colorPicker-inner"></div></div></div>').append('<div class="miniColors-hues"><div class="miniColors-huePicker"></div></div>'), n.find(".miniColors-colors").css("backgroundColor", "#" + f({h: t.h,s: 100,b: 100})), l(n, t), n.bind("selectstart", function() {
                    return !1
                }), n.data("hsb", t), n
            }, i = function(t) {
                var a, i = !1;
                e(n).bind("mousedown.miniColors touchstart.miniColors", function(n) {
                    i = !0;
                    var o = e(n.target).parents().andSelf();
                    return o.hasClass("miniColors-colors") && (n.preventDefault(), a = "colors", r(t, n)), o.hasClass("miniColors-hues") && (n.preventDefault(), a = "hues", s(t, n)), o.hasClass("miniColors-selector") ? void n.preventDefault() : void (o.hasClass("miniColors") || t.trigger("clickOutsideBounds"))
                }), e(n).bind("mouseup.miniColors touchend.miniColors", function(e) {
                    e.preventDefault(), i = !1, a = void 0
                }).bind("mousemove.miniColors touchmove.miniColors", function(e) {
                    e.preventDefault(), i && ("colors" === a && r(t, e), "hues" === a && s(t, e))
                })
            }, o = function() {
                e(n).unbind(".miniColors")
            }, r = function(e, t) {
                var n = {x: t.pageX,y: t.pageY}, a = e.find(".miniColors-colors").offset();
                t.originalEvent.changedTouches && (n.x = t.originalEvent.changedTouches[0].pageX, n.y = t.originalEvent.changedTouches[0].pageY), n.x = n.x - a.left - 5, n.y = n.y - a.top - 5, n.x <= -5 && (n.x = -5), n.x >= 144 && (n.x = 144), n.y <= -5 && (n.y = -5), n.y >= 144 && (n.y = 144);
                var i = Math.round(.67 * (n.x + 5));
                0 > i && (i = 0), i > 100 && (i = 100);
                var o = 100 - Math.round(.67 * (n.y + 5));
                0 > o && (o = 0), o > 100 && (o = 100);
                var r = e.data("hsb");
                r.s = i, r.b = o, c(e, r, !0)
            }, s = function(e, t) {
                var n = {y: t.pageY}, a = e.find(".miniColors-colors").offset();
                t.originalEvent.changedTouches && (n.y = t.originalEvent.changedTouches[0].pageY), n.y = n.y - a.top - 1, n.y <= -1 && (n.y = -1), n.y >= 149 && (n.y = 149);
                var i = Math.round(2.4 * (150 - n.y - 1));
                0 > i && (i = 0), i > 360 && (i = 360);
                var o = e.data("hsb");
                o.h = i, c(e, o, !0)
            }, l = function(e, t) {
                var n = p(t), a = e.find(".miniColors-colorPicker");
                a.css("top", n.y + "px").css("left", n.x + "px").show();
                var i = u(t), o = e.find(".miniColors-huePicker");
                o.css("top", i.y + "px").show()
            }, c = function(e, t, n) {
                l(e, t), e.data("hsb", t);
                var a = f(t);
                n && e.trigger("updateInput", {hex: a}), e.find(".miniColors-colors").css("backgroundColor", "#" + f({h: t.h,s: 100,b: 100})), e.trigger("setColor", {hex: a})
            }, p = function(e) {
                var t = Math.ceil(e.s / .67);
                0 > t && (t = 0), t > 150 && (t = 150);
                var n = 150 - Math.ceil(e.b / .67);
                return 0 > n && (n = 0), n > 150 && (n = 150), {x: t - 5,y: n - 5}
            }, u = function(e) {
                var t = 150 - e.h / 2.4;
                return 0 > t && (h = 0), t > 150 && (h = 150), {y: t - 1}
            }, d = function(e) {
                var t = {}, n = Math.round(e.h), a = Math.round(255 * e.s / 100), i = Math.round(255 * e.b / 100);
                if (0 === a)
                    t.r = t.g = t.b = i;
                else {
                    var o = i, r = (255 - a) * i / 255, s = (o - r) * (n % 60) / 60;
                    360 === n && (n = 0), 60 > n ? (t.r = o, t.b = r, t.g = r + s) : 120 > n ? (t.g = o, t.b = r, t.r = o - s) : 180 > n ? (t.g = o, t.r = r, t.b = r + s) : 240 > n ? (t.b = o, t.r = r, t.g = o - s) : 300 > n ? (t.b = o, t.g = r, t.r = r + s) : 360 > n ? (t.r = o, t.g = r, t.b = o - s) : (t.r = 0, t.g = 0, t.b = 0)
                }
                return {r: Math.round(t.r),g: Math.round(t.g),b: Math.round(t.b)}
            }, v = function(e) {
                var t, n, a = [e.r.toString(16), e.g.toString(16), e.b.toString(16)], i = a.length;
                for (t = 0; i > t; t++)
                    n = a[t], 1 === n.length && (a[t] = "0" + n);
                return a.join("")
            }, f = function(e) {
                return v(d(e))
            };
            return t.setSelectorColor = c, t.buildSelector = a, t.bindSelectorEvents = i, t.unBindSelectorEvents = o, t.forceClose = function() {
                selector && selector.trigger("clickOutsideBounds")
            }, t
        }
    }(avpw_jQuery), !function(t, n, a) {
        function i(e, t) {
            var a, i = n.createElement(e || "div");
            for (a in t)
                i[a] = t[a];
            return i
        }
        function o(e) {
            for (var t = 1, n = arguments.length; n > t; t++)
                e.appendChild(arguments[t]);
            return e
        }
        function r(e, t, n, a) {
            var i = ["opacity", t, ~~(100 * e), n, a].join("-"), o = .01 + n / a * 100, r = Math.max(1 - (1 - e) / t * (100 - o), e), s = d.substring(0, d.indexOf("Animation")).toLowerCase(), l = s && "-" + s + "-" || "";
            return f[i] || (_.insertRule("@" + l + "keyframes " + i + "{0%{opacity:" + r + "}" + o + "%{opacity:" + e + "}" + (o + .01) + "%{opacity:1}" + (o + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + r + "}}", _.cssRules.length), f[i] = 1), i
        }
        function s(e, t) {
            var n, i, o = e.style;
            if (o[t] !== a)
                return t;
            for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < v.length; i++)
                if (n = v[i] + t, o[n] !== a)
                    return n
        }
        function l(e, t) {
            for (var n in t)
                e.style[s(e, n) || n] = t[n];
            return e
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    e[i] === a && (e[i] = n[i])
            }
            return e
        }
        function p(e) {
            for (var t = {x: e.offsetLeft,y: e.offsetTop}; e = e.offsetParent; )
                t.x += e.offsetLeft, t.y += e.offsetTop;
            return t
        }
        function u(e) {
            return this.spin ? void (this.opts = c(e || {}, u.defaults, h)) : new u(e)
        }
        var d, v = ["webkit", "Moz", "ms", "O"], f = {}, _ = function() {
            var e = i("style", {type: "text/css"});
            return o(n.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
        }(), h = {lines: 12,length: 7,width: 5,radius: 10,rotate: 0,corners: 1,color: "#000",speed: 1,trail: 100,opacity: .25,fps: 20,zIndex: 2e9,className: "spinner",top: "auto",left: "auto",position: "relative"};
        u.defaults = {}, c(u.prototype, {spin: function(e) {
            this.stop();
            {
                var t, n, a = this, o = a.opts, r = a.el = l(i(0, {className: o.className}), {width: 0,zIndex: o.zIndex});
                o.radius + o.length + o.width
            }
            if (e && (e.insertBefore(r, e.firstChild || null), n = p(e), t = p(r)), r.setAttribute("aria-role", "progressbar"), a.lines(r, a.opts), !d) {
                var s = 0, c = o.fps, u = c / o.speed, v = (1 - o.opacity) / (u * o.trail / 100), f = u / o.lines;
                !function _() {
                    s++;
                    for (var e = o.lines; e; e--) {
                        var t = Math.max(1 - (s + e * f) % u * v, o.opacity);
                        a.opacity(r, o.lines - e, t, o)
                    }
                    a.timeout = a.el && setTimeout(_, ~~(1e3 / c))
                }()
            }
            return a
        },stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = a), this
        },lines: function(e, t) {
            function n(e, n) {
                return l(i(), {position: "absolute",width: t.length + t.width + "px",height: t.width + "px",background: e,boxShadow: n,transformOrigin: "left",transform: "rotate(" + ~~(360 / t.lines * s + t.rotate) + "deg) translate(" + t.radius + "px,0)",borderRadius: (t.corners * t.width >> 1) + "px"})
            }
            for (var a, s = 0; s < t.lines; s++)
                a = l(i(), {position: "absolute",top: 1 + ~(t.width / 2) + "px",transform: t.hwaccel ? "translate3d(0,0,0)" : "",opacity: t.opacity,animation: d && r(t.opacity, t.trail, s, t.lines) + " " + 1 / t.speed + "s linear infinite"}), t.shadow && o(a, l(n("#000", "0 0 4px #000"), {top: "2px"})), o(e, o(a, n(t.color, "0 0 1px rgba(0,0,0,.1)")));
            return e
        },opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }}), function() {
            function e(e, t) {
                return i("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
            }
            var t = l(i("group"), {behavior: "url(#default#VML)"});
            !s(t, "transform") && t.adj ? (_.addRule(".spin-vml", "behavior:url(#default#VML)"), u.prototype.lines = function(t, n) {
                function a() {
                    return l(e("group", {coordsize: c + " " + c,coordorigin: -s + " " + -s}), {width: c,height: c})
                }
                function i(t, i, r) {
                    o(u, o(l(a(), {rotation: 360 / n.lines * t + "deg",left: ~~i}), o(l(e("roundrect", {arcsize: n.corners}), {width: s,height: n.width,left: n.radius,top: -n.width >> 1,filter: r}), e("fill", {color: n.color,opacity: n.opacity}), e("stroke", {opacity: 0}))))
                }
                var r, s = n.length + n.width, c = 2 * s, p = 2 * -(n.width + n.length) + "px", u = l(a(), {position: "absolute",top: p,left: p});
                if (n.shadow)
                    for (r = 1; r <= n.lines; r++)
                        i(r, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (r = 1; r <= n.lines; r++)
                    i(r);
                return o(t, u)
            }, u.prototype.opacity = function(e, t, n, a) {
                var i = e.firstChild;
                a = a.shadow && a.lines || 0, i && t + a < i.childNodes.length && (i = i.childNodes[t + a], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
            }) : d = s(t, "animation")
        }(), e.Spinner = u
    }(t, n), "undefined" == typeof e && (e = {}), function(t) {
        var n = t.desktop = {};
        n.saveBlock = function() {
            return ['<div class="avpw_mode_action avpw_mode_action_right">', '<a id="avpw_save_button" href="javascript:void(0)" class="avpw_button avpw_primary_button">' + e.getLocalizedString("Save") + "</a>", "</div>"].join("")
        }, n.closeButton = function(e) {
            return ["<div " + (e.id ? 'id="' + e.id + '" ' : "") + 'title="' + e.text + '">', "<div " + (e.id ? 'id="' + e.id + '_inner" ' : "") + 'class="avpw_close_button ' + (e.className || "") + '">', '<div class="avpw_close_inner">', "&times;", "</div>", "</div>", "</div>"].join("")
        }, n.cancelButton = function(t) {
            return ['<a href="javascript:void(0)" id="' + t.id + '" class="avpw_button avpw_back_button">', e.getLocalizedString(t.label), "</a>"].join("")
        }, n.inAppPurchaseFrame = function(e) {
            return ['<iframe width="100%" height="170" class="avpw_popup_frame" id="avpw_purchase_frame" name="avpw_purchase_frame" src="' + e.src + '" style="display: none;"></iframe>'].join("")
        }, n.contentPagerInner = function() {
            return ['<div class="avpw_content_packs avpw_tool_scroll">', '<a class="avpw_prev avpw_bookend">', '<span class="avpw_arrow_icon"></span>', "</a>", '<div class="avpw_clip">', '<div class="avpw_scroll_strip">', "</div>", '<div class="avpw_shadowbar avpw_shadowbar_n"></div>', "</div>", '<a class="avpw_next avpw_bookend">', '<span class="avpw_arrow_icon"></span>', "</a>", "</div>", '<div class="avpw_content_items avpw_tool_scroll">', '<div class="avpw_back_to_packs"></div>', '<a class="avpw_prev avpw_bookend">', '<span class="avpw_arrow_icon"></span>', "</a>", '<div class="avpw_clip">', '<div class="avpw_scroll_strip">', "</div>", '<div class="avpw_shadowbar avpw_shadowbar_n"></div>', "</div>", '<a class="avpw_next avpw_bookend">', '<span class="avpw_arrow_icon"></span>', "</a>", "</div>"].join("")
        }, n.controls = function(t) {
            return ['<div id="avpw_fullscreen_bg" style="display: none;"></div>', '<div style="display:none;" id="avpw_controls" class="avpw avpw_main_mode">', "", '<div id="avpw_tool_content_header">', '<span id="avpw_breadcrumb_header" class="avpw_label">', e.getLocalizedString("Photo Editor"), "</span>", '<span class="avpw_label" id="avpw_breadcrumb_sep" style="display: none;"> : </span>', '<span class="avpw_label" id="avpw_breadcrumb_toolname"></span>', n.closeButton({id: "avpw_control_cancel_pane",text: e.getLocalizedString("Cancel"),className: "avpw_main_close"}), "</div>", "", '<div id="avpw_tool_content_wrapper">', "", '<div id="avpw_tool_main_container" class="avpw_tool_pager">', "", '<a id="avpw_lftArrow" class="avpw_prev avpw_bookend">', '<span class="avpw_arrow_icon"></span>', "</a>", '<div id="avpw_control_main_scroll_panel" class="avpw_clip">', '<div id="avpw_control_main_scrolling_region" class="avpw_scroll_strip">', "</div>", '<div id="avpw_tools_pager">', "<ul>", "</ul>", "</div>", "</div>", "", "", '<a id="avpw_rghtArrow" class="avpw_next avpw_bookend">', '<span class="avpw_arrow_icon"></span>', "</a>", "", t.internalSaveBlock, "", "</div>", "", '<div id="avpw_tool_options_container" style="display:none;">', '<div id="avpw_tool_container">', '<div id="avpw_controlpanel_brightness" class="avpw_controlpanel avpw_tool_fixed avpw_tool_slider">', n.slider({id: "avpw_brightness_slider",divider: !0}), "</div>", "", '<div id="avpw_controlpanel_contrast" class="avpw_controlpanel avpw_tool_fixed avpw_tool_slider">', n.slider({id: "avpw_contrast_slider",divider: !0}), "</div>", "", '<div id="avpw_controlpanel_saturation" class="avpw_controlpanel avpw_tool_fixed avpw_tool_slider">', n.slider({id: "avpw_saturation_slider",divider: !0}), "</div>", "", '<div id="avpw_controlpanel_warmth" class="avpw_controlpanel avpw_tool_fixed avpw_tool_slider">', n.slider({id: "avpw_warmth_slider",divider: !0}), "</div>", "", '<div id="avpw_controlpanel_sharpness" class="avpw_controlpanel avpw_tool_fixed avpw_tool_slider">', n.slider({id: "avpw_sharpness_slider",divider: !0}), "</div>", "", '<div id="avpw_controlpanel_forcecrop" class="avpw_controlpanel avpw_tool_fixed">', '<div id="avpw_force_crop_sub_text">Crop your photo to:</div>', '<div id="avpw_force_crop_label"></div>', "</div>", "", '<div id="avpw_controlpanel_orientation" class="avpw_controlpanel">', '<div class="avpw_tool_cutout_centered_orientation">', '<div class="avpw_inset_button_group avpw_inset_group">', '<div id="avpw_rotate_left" class="avpw_inset_button avpw_inset_button_first">', '<div class="avpw_orientation_button_inner">', "</div>", "</div>", '<div id="avpw_rotate_right" class="avpw_inset_button avpw_inset_button_last">', '<div class="avpw_orientation_button_inner">', "</div>", "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_spacer"></div>', '<div class="avpw_inset_button_group avpw_inset_group">', '<div id="avpw_flip_h" class="avpw_inset_button avpw_inset_button_first">', '<div class="avpw_orientation_button_inner">', "</div>", "</div>", '<div id="avpw_flip_v" class="avpw_inset_button avpw_inset_button_last">', '<div class="avpw_orientation_button_inner">', "</div>", "</div>", "</div>", '<div class="avpw_inset_button_label avpw_inset_button_label_2 avpw_label avpw_inset_group">', e.getLocalizedString("Rotate"), "</div>", '<div class="avpw_inset_group avpw_inset_group_spacer"></div>', '<div class="avpw_inset_button_label avpw_inset_button_label_2 avpw_label avpw_inset_group">', e.getLocalizedString("Mirror"), "</div>", "</div>", "</div>", "", '<div id="avpw_controlpanel_crop" class="avpw_controlpanel avpw_tool_stretch">', '<div class="avpw_tool_scroll">', '<a id="avpw_crop_presets_lftArrow" class="avpw_prev avpw_bookend">', '<span class="avpw_arrow_icon"></span>', "</a>", '<div id="avpw_crop_presets_scroll_window" class="avpw_clip">', '<div id="avpw_crop_presets_scroll_region" class="avpw_scroll_strip">', "</div>", '<div class="avpw_shadowbar avpw_shadowbar_n"></div>', "</div>", '<a id="avpw_crop_presets_rghtArrow" class="avpw_next avpw_bookend">', '<span class="avpw_arrow_icon"></span>', "</a>", "</div>", "</div>", "", '<div id="avpw_controlpanel_resize" class="avpw_controlpanel">', '<div class="avpw_tool_cutout_centered_resize">', '<div class="avpw_resize_form_block avpw_resize_width">', '<input class="avpw_text_input avpw_number_input" id="avpw_resize_width" type="text" value="640" maxlength="5"/>', '<div class="avpw_label">', e.getLocalizedString("Width"), "</div>", "</div>", '<div class="avpw_resize_form_block avpw_resize_constrain">', '<div  class="avpw_inset_group avpw_inset_button_group avpw_checkmark_button">', '<div id="avpw_constrain_prop" class="avpw_inset_button avpw_inset_button_first avpw_inset_button_last" title="' + e.getLocalizedString("Maintain proportions") + '">', '<div class="avpw_lock_icon">', '<div class="avpw_lock_icon_top">', '<div class="avpw_lock_icon_top_inner"></div>', "</div>", '<div class="avpw_lock_icon_sep"></div>', '<div class="avpw_lock_icon_bottom"></div>', "</div>", "</div>", "</div>", "</div>", '<div class="avpw_resize_form_block avpw_resize_height">', '<input class="avpw_text_input avpw_number_input" id="avpw_resize_height" type="text" value="480" maxlength="5"/>', '<div class="avpw_label">', e.getLocalizedString("Height"), "</div>", "</div>", "</div>", "</div>", "", '<div id="avpw_controlpanel_redeye" class="avpw_controlpanel">', '<div class="avpw_tool_cutout_centered_spot_tool">', "</div>", "</div>", "", '<div id="avpw_controlpanel_whiten" class="avpw_controlpanel avpw_tool_stretch">', '<div class="avpw_tool_cutout_centered_spot_tool">', "</div>", "</div>", "", '<div id="avpw_controlpanel_blemish" class="avpw_controlpanel avpw_tool_stretch">', '<div class="avpw_tool_cutout_centered_spot_tool">', "</div>", "</div>", "", '<div id="avpw_controlpanel_effects" class="avpw_controlpanel avpw_tool_stretch">', '<div id="avpw_effects_effects">', '<div id="avpw_effects_scroller" class="avpw_content_wrapper">', n.contentPagerInner(), "</div>", "</div>", "</div>", "", '<div id="avpw_controlpanel_enhance" class="avpw_controlpanel">', '<div class="avpw_tool_cutout_centered_enhance">', '<div class="avpw_inset_button_group avpw_inset_group">', '<div class="avpw_inset_button avpw_inset_button_first">', '<div id="avpw_enhance_icon_one" class="avpw_enhance_button_inner">', e.getLocalizedString("Enhance"), "</div>", "</div>", '<div class="avpw_inset_button">', '<div id="avpw_enhance_icon_two" class="avpw_enhance_button_inner">', e.getLocalizedString("Night"), "</div>", "</div>", '<div class="avpw_inset_button avpw_inset_button_last">', '<div id="avpw_enhance_icon_four" class="avpw_enhance_button_inner">', e.getLocalizedString("Balance"), "</div>", "</div>", "</div>", '<div class="avpw_inset_group">', '<div class="avpw_inset_button_label avpw_label">', e.getLocalizedString("Hi-Def"), "</div>", '<div class="avpw_inset_button_label avpw_label">', e.getLocalizedString("Illuminate"), "</div>", '<div class="avpw_inset_button_label avpw_label">', e.getLocalizedString("Color Fix"), "</div>", "</div>", "</div>", "</div>", "", '<div id="avpw_controlpanel_drawing" class="avpw_controlpanel avpw_tool_stretch">', '<div class="avpw_tool_cutout_centered_drawing">', '<div class="avpw_outer-center">', '<div class="avpw_inner-center">', '<div class="avpw_inset_color_widget avpw_inset_group avpw_inset_button_group">', n.colorPickerIcon(), '<div id="avpw_drawing_colors" class="avpw_inset_color_choices avpw_inset_button avpw_inset_button_last avpw_inset_button_down">', "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', '<div class="avpw_inset_button_group avpw_inset_group">', '<div class="avpw_inset_button avpw_inset_button_first avpw_inset_button_last avpw_colorsplash_eraser">', '<div class="avpw_colorsplash_eraser_icon avpw_colorsplash_inner_icon">', "</div>", "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', n.brushSizesSet({id: "avpw_drawing_brushes",sizes: [8, 13, 18, 21, 25],hideLabel: !0}), '<div class="avpw_inset_group avpw_clear">', '<div class="avpw_inset_button_label avpw_inset_color_widget_label avpw_label">', e.getLocalizedString("Color Picker"), "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', '<div class="avpw_inset_group avpw_inset_button_label avpw_label">', e.getLocalizedString("Eraser"), "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', '<div class="avpw_inset_group avpw_inset_button_label avpw_inset_button_label_mini_5 avpw_label">', e.getLocalizedString("Brush Size"), "</div>", "</div>", "</div>", "</div>", "</div>", "", '<div id="avpw_controlpanel_overlay" class="avpw_controlpanel avpw_tool_stretch">', '<div id="avpw_overlay_scroller" class="avpw_content_wrapper">', n.contentPagerInner(), "</div>", "</div>", "", '<div id="avpw_controlpanel_frames" class="avpw_controlpanel avpw_tool_stretch">', '<div id="avpw_frames_scroller" class="avpw_content_wrapper">', n.contentPagerInner(), "</div>", "</div>", "", '<div id="avpw_controlpanel_text" class="avpw_controlpanel avpw_tool_stretch">', '<div class="avpw_tool_half_height">', '<div class="avpw_inset_color_widget avpw_inset_group avpw_inset_button_group">', n.colorPickerIcon(), '<div id="avpw_text_colors" class="avpw_inset_color_choices avpw_inset_button avpw_inset_button_last avpw_inset_button_down">', "</div>", "</div>", "</div>", '<div class="avpw_tool_half_height">', '<button id="avpw_add_text" class="avpw_button">', e.getLocalizedString("Add Text"), "</button>", '<input type="text" id="avpw_text_area" name="avpw_text_area" class="avpw_text_input" />', '<input type="hidden" id="avpw_text_font" value="sans-serif" />', '<input type="hidden" id="avpw_text_font_size" value="60" />', "</div>", "</div>", "", '<div id="avpw_controlpanel_textwithfont" class="avpw_controlpanel avpw_tool_stretch">', '<div class="avpw_tool_cutout_fixed">', '<div class="avpw_outer-center">', '<div class="avpw_inner-center">', '<div class="avpw_inset_color_widget avpw_inset_group avpw_inset_button_group">', n.colorPickerIcon(), '<div id="avpw_textwithfont_colors" class="avpw_inset_color_choices avpw_inset_button avpw_inset_button_last avpw_inset_button_down">', "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', '<div id="avpw_font_browser" class="avpw_inset_button_group avpw_inset_group">', '<div class="avpw_inset_button avpw_inset_button_first avpw_inset_button_last">', '<div class="avpw_dropdown_icon">', '<div class="avpw_dropdown_icon_inner">', "</div>", "</div>", '<div id="avpw_font_browser_preview" class="avpw_font_label avpw_label avpw_isa_dropdown_display">', "</div>", "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', '<div id="avpw_textwithfont_addtext" class="avpw_inset_button_group avpw_inset_group">', '<div class="avpw_inset_button_with_plus avpw_inset_button avpw_inset_button_first avpw_inset_button_last">', '<div class="avpw_plus_icon"></div>', e.getLocalizedString("Add Text"), "</div>", "</div>", "</div>", "</div>", "</div>", "</div>", "", '<div id="avpw_controlpanel_colorsplash" class="avpw_controlpanel">', '<div class="avpw_outer-center">', '<div class="avpw_inner-center avpw_tool_cutout_centered_colorsplash">', '<div class="avpw_inset_button_group avpw_inset_group">', '<div class="avpw_inset_button avpw_inset_button_first avpw_colorsplash_freebrush">', '<div class="avpw_colorsplash_freebrush_icon avpw_colorsplash_inner_icon">', e.getLocalizedString("Free Color"), "</div>", "</div>", '<div class="avpw_inset_button avpw_inset_button_last avpw_colorsplash_smartbrush avpw_inset_button_down">', '<div class="avpw_colorsplash_smartbrush_icon avpw_colorsplash_inner_icon">', e.getLocalizedString("Smart Color"), "</div>", "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', '<div class="avpw_inset_button_group avpw_inset_group">', '<div class="avpw_inset_button avpw_inset_button_first avpw_inset_button_last avpw_colorsplash_eraser">', '<div class="avpw_colorsplash_eraser_icon avpw_colorsplash_inner_icon">', e.getLocalizedString("Eraser"), "</div>", "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', n.brushSizesSet({id: "avpw_colorsplash_brushes",sizes: [8, 13, 18, 21, 25],hideLabel: !0}), '<div class="avpw_inset_group avpw_clear">', '<div class="avpw_inset_button_label avpw_label">', e.getLocalizedString("Free Color"), "</div>", '<div class="avpw_inset_button_label avpw_label">', e.getLocalizedString("Smart Color"), "</div>", "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', '<div class="avpw_inset_group avpw_inset_button_label avpw_label">', e.getLocalizedString("Eraser"), "</div>", '<div class="avpw_inset_group avpw_inset_group_mini_spacer"></div>', '<div class="avpw_inset_group avpw_inset_button_label avpw_inset_button_label_mini_5 avpw_label">', e.getLocalizedString("Brush Size"), "</div>", "</div>", "</div>", "</div>", "", '<div id="avpw_controlpanel_focus" class="avpw_controlpanel">', '<div class="avpw_tool_cutout_centered_tiltshift">', '<div class="avpw_inset_button_group avpw_inset_group">', '<div class="avpw_inset_button avpw_inset_button_first avpw_tiltshift_circle_button">', '<div class="avpw_tiltshift_circle_icon avpw_tiltshift_inner_icon">', "</div>", "</div>", '<div class="avpw_inset_button avpw_inset_button_last avpw_tiltshift_rectangle_button">', '<div class="avpw_tiltshift_rectangle_icon avpw_tiltshift_inner_icon">', "</div>", "</div>", "</div>", '<div class="avpw_inset_button_label avpw_inset_button_label_2 avpw_label avpw_inset_group">', e.getLocalizedString("Shape"), "</div>", "</div>", "</div>", "", "</div>", '<div class="avpw_mode_action avpw_mode_action_left">', n.cancelButton({id: "avpw_all_effects",label: "Cancel"}), n.cancelButton({id: "avpw_up_one_level",label: "Back"}), "</div>", '<div class="avpw_mode_action avpw_mode_action_right">', '<a href="javascript:void(0)" id="avpw_apply_container" class="avpw_button avpw_primary_button">', e.getLocalizedString("Apply"), "</a>", "</div>", "", "</div>", "</div>", "", '<div id="avpw_canvas_embed" class="avpw_canvas_background"></div>', "", '<div id="avpw_footer">', '<div id="avpw_history">', '<div id="avpw_history_undo" class="avpw_button avpw_history_button avpw_history_button_first avpw_history_disabled">', '<span class="avpw_history_icon">', "Undo", "</span>", "</div>", '<div id="avpw_history_redo" class="avpw_button avpw_history_button avpw_history_button_last avpw_history_disabled">', '<span class="avpw_history_icon">', "Redo", "</span>", "</div>", '<div id="avpw_history_undo_blocker" class="avpw_history_blocker avpw_history_blocker_first"></div>', '<div id="avpw_history_redo_blocker" class="avpw_history_blocker avpw_history_blocker_last"></div>', "</div>", '<p class="avpw_footer_text" id="avpw_size_indicator"></p>', '<p id="avpw_powered_branding" class="avpw_footer_text avpw_powered_text">', "</p>", "</div>", "", '<div id="avpw_messaging" style="display: none;">', '<div id="avpw_messaging_inner">', "</div>", '<div id="avpw_messages" style="display: none;">', n.aviaryAppPopups(), "</div>", "</div>", "", "</div>"].join("")
        }, n.eggIcon = function(e) {
            return ['<div class="avpw_icon avpw_tool_icon" id="avpw_main_' + e.optionName + '" data-header="' + e.capOptionName + '" data-toolname="' + e.optionName + '">', '<div class="avpw_icon_image avpw_tool_icon_image">', '<div class="avpw_tool_icon_inner"></div>', "</div>", '<div class="avpw_icon_waiter avpw_center_contents">', "</div>", '<span class="avpw_icon_label avpw_label">' + e.capOptionName + "</span>", "</div>"].join("")
        }, n.emptyEggIcon = function() {
            return ""
        }, n.genericScrollPanel = function(e) {
            return ['<div style="width: ' + e.panelWidth + 'px;" class="avpw_scroll_page ' + e.panelClass + '">\n', '<span class="avpw_scroll_page_inner">\n', e.panelHTML, "</span>\n", "</div>\n"].join("")
        }, n.aviaryScrollPanel = function(t) {
            return ['<div style="width: ' + t.panelWidth + 'px;" class="avpw_scroll_page ' + t.panelClass + '">\n', '<span class="avpw_scroll_page_inner">\n', '<div class="avpw_info">', '<a href="' + e.launchData.getWidgetURL + '" target="_blank" class="avpw_button avpw_info_right">' + e.getLocalizedString("Get this editor") + "</a>\n", '<a href="' + e.launchData.giveFeedbackURL + '" target="_blank" class="avpw_button avpw_info_left">' + e.getLocalizedString("Give feedback") + "</a>\n", '<div class="avpw_info_inner">', '<a id="avpw_logo_large" href="http://www.aviary.com/" target="_blank">', "Aviary", "</a>", '<p class="avpw_version_text">', "v" + e.build.version, "</p>", "</div>", "</div>", "</span>", "</div>"].join("")
        }, n.poweredByFooterLogo = function() {
            return ['<a class="avpw_cursor">', '<span id="avpw_logo">', "&nbsp;", "</span>", "</a>"].join("")
        }, n.aviaryAppPopups = function() {
            return ['<div id="avpw_aviary_beensaved" class="avpw_app_popup">\n', '<p class="avpw_message_text">' + e.getLocalizedString("Your work was saved!") + "</p>", '<div class="avpw_message_buttons">\n', '<a id="avpw_resume_aftersave" class="avpw_button" href="#Resume">' + e.getLocalizedString("Resume") + "</a>\n", '<a id="avpw_close_aftersave" class="avpw_button avpw_primary_button" href="#Close">' + e.getLocalizedString("Close") + "</a>", "</div>\n", "<br />", '<div class="avpw_center_contents avpw_white_labeled_content">\n', '<a class="avpw_button" href="' + e.launchData.getWidgetURL + '" target="_blank">' + e.getLocalizedString("Get this editor") + "</a>\n", "</div>\n", "</div>\n", '<div id="avpw_resize_invalid" class="avpw_app_popup">\n', '<p class="avpw_message_text">', e.getLocalizedString("Width and height must be greater than zero and less than the maximum ({max}px)").replace("{max}", '<span id="avpw_resize_invalid_max_size"></span>'), "</p>", '<div class="avpw_message_buttons">\n', '<a id="avpw_resize_invalid_confirm" class="avpw_button" href="#Confirm">' + e.getLocalizedString("OK") + "</a>\n", "</div>\n", "</div>\n", '<div id="avpw_purchase_pack" class="avpw_app_popup">\n', n.closeButton({id: "avpw_purchase_pack_close",text: e.getLocalizedString("Cancel")}), '<div id="avpw_purchase_pack_contents">\n', "</div>\n", "</div>\n", '<div id="avpw_resize_unlocked" class="avpw_app_popup">\n', '<p class="avpw_message_text">', e.getLocalizedString("Are you sure? This can distort your image") + ".", "</p>", '<div class="avpw_message_buttons">\n', '<a id="avpw_resize_unlocked_confirm" class="avpw_button" href="#Confirm">' + e.getLocalizedString("OK") + "</a>\n", '<a id="avpw_resize_unlocked_cancel" class="avpw_button" href="#Confirm">' + e.getLocalizedString("Cancel") + "</a>\n", "</div>\n", "</div>\n", '<div id="avpw_aviary_quitareyousure" class="avpw_app_popup">', '<p class="avpw_message_text">' + e.getLocalizedString("Wait! You didn't save your work. Are you certain that you want to close this editor?") + "</p>", '<div class="avpw_message_buttons avpw_center_contents">\n', '<a id="avpw_resume_editing" class="avpw_button" href="#Resume">' + e.getLocalizedString("Resume") + "</a>\n", '<a id="avpw_close_nosave" class="avpw_button" href="#Close">' + e.getLocalizedString("Close") + "</a>\n", '<a id="avpw_close_save" class="avpw_button avpw_primary_button" href="#Save">' + e.getLocalizedString("Save") + "</a>", "</div>", "</div>", '<div id="avpw_aviary_aviaryfeedback" class="avpw_app_popup">', '<div class="avpw_popup_split_box">', '<h2 class="avpw_mode_warning">', e.getLocalizedString("Help / Support"), "</h2>", "<p>", e.getLocalizedString("Have a suggestion to improve this photo editor? Let us know."), "</p>", '<a href="' + e.launchData.giveFeedbackURL + '" target="_blank" class="avpw_button avpw_primary_button">' + e.getLocalizedString("Send Feedback") + "</a>", "</div>", '<div class="avpw_vertical_separator"></div>', '<div class="avpw_popup_split_box">', '<h2 class="avpw_mode_warning">', e.getLocalizedString("About this editor"), "</h2>", "<p>", e.getLocalizedString("Aviary is the world's leading photo editing platform. Developers: learn how to add it to your app in minutes."), "</p>", '<a href="' + e.launchData.getWidgetURL + '" target="_blank" class="avpw_button avpw_primary_button">' + e.getLocalizedString("Visit Aviary.com") + "</a>", "</div>", '<div class="avpw_horizontal_separator"></div>', '<div class="avpw_clear">', '<div class="avpw_message_buttons avpw_center_contents">', '<div id="avpw_close_feedbackok" class="avpw_button">', e.getLocalizedString("Close"), "</div>", "</div>", "</div>", "</div>", '<div id="avpw_aviary_unsupported" class="avpw_app_popup">', '<p class="avpw_message_text">', e.getLocalizedString("Please install {Adobe Flash Player} (version {min} or higher), or use a supported browser: {Chrome}, {Firefox}, {Safari}, {Opera}, or {Internet Explorer} (version 9 or higher).").replace("{Adobe Flash Player}", '<a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a>').replace("{min}", e.build.MINIMUM_FLASH_PLAYER_VERSION).replace("{Chrome}", '<a href="http://www.google.com/chrome/" target="_blank">Chrome</a>').replace("{Firefox}", '<a href="http://www.mozilla.org/firefox/" target="_blank">Firefox</a>').replace("{Safari}", '<a href="http://www.apple.com/safari/" target="_blank">Safari</a>').replace("{Opera}", '<a href="http://www.opera.com/" target="_blank">Opera</a>').replace("{Internet Explorer}", '<a href="http://www.beautyoftheweb.com/" target="_blank">Internet Explorer</a>'), "</p>", '<div class="avpw_message_buttons avpw_center_contents">\n', '<a id="avpw_close_unsupported" class="avpw_button" href="#Close">' + e.getLocalizedString("Close") + "</a>\n", "</div>", "</div>", '<div id="avpw_aviary_crop_invalid_dimensions" class="avpw_app_popup">', '<p class="avpw_message_text">', e.getLocalizedString("Your photo is smaller than the required size. Please choose a new one to proceed."), "</p>", '<div class="avpw_message_buttons avpw_center_contents">\n', '<a id="avpw_close_forcecrop_close" class="avpw_button" href="#Close">' + e.getLocalizedString("Close") + "</a>\n", "</div>", "</div>"].join("")
        }, n.scrollPanelPip = function(e) {
            return '<li class="avpw_page avpw_is_navpip" pagenum="' + e.i + '" id="avpw_navpip_' + e.i + '">&bull;</li>\n'
        }, n.slider = function(e) {
            return ['<div class="avpw_slider_container avpw_isa_slider_container">', '<div class="avpw_slider_bookend avpw_slider_bookend_left avpw_slider_label">', "-", "</div>", '<div class="avpw_slider_outer_bg_outline_circle"></div>', '<div class="avpw_slider_positioned" id="' + e.id + '">', '<div class="avpw_slider_outer_bg_circle"></div>', '<div class="avpw_slider_inner_bg_outline_circle"></div>', '<div class="avpw_slider_positioned_inner">', '<div class="avpw_slider_inner_bg_circle"></div>', '<div class="avpw_slider_bounds" >', '<div class="avpw_slider_goo"></div>', e.divider ? '<div class="avpw_slider_divider"></div>' : "", '<a class="avpw_slider_handle"></a>', "</div>", "</div>", "</div>", '<div class="avpw_slider_bookend avpw_slider_bookend_right avpw_slider_label">', "+", "</div>", "</div>"].join("")
        }, n.zoomModeOverlay = function() {
            return ['<div id="avpw_zoom_mode_overlay">', '<div id="avpw_zoom_mode_text">', '<h2 class="avpw_mode_warning">', e.getLocalizedString("Zoom Mode"), "</h2>", e.getLocalizedString("Click to release"), "</div>", "</div>"].join("")
        }, n.zoomControls = function() {
            return ['<div id="avpw_zoom_container">', '<div id="avpw_zoom_button">', '<div id="avpw_zoom_icon"></div>', "</div>", '<div class="avpw_zoom_slider_container avpw_isa_slider_container">', '<div class="avpw_slider_bookend avpw_slider_bookend_left">-</div>', '<div id="avpw_zoom_inner"></div>', '<div id="avpw_zoom_slider">', '<a id="avpw_zoom_handle"></a>', "</div>", '<div class="avpw_slider_bookend avpw_slider_bookend_right">+</div>', "</div>", "</div>"].join("")
        }, n.presetIndicator = function() {
            return ['<div class="avpw_preset_indicator_outer">', '<div class="avpw_preset_indicator">', "</div>", "</div>"].join("")
        }, n.cropCustomControl = function() {
            return ['<div class="avpw_crop_custom_control avpw_isa_preset_crop" data-crop="Custom">', '<div class="avpw_crop_custom_control_left">', '<div class="avpw_crop_preset_visual"></div>', '<div class="avpw_preset_label avpw_label">', e.getLocalizedString("Custom"), "</div>", "</div>", '<div class="avpw_crop_custom_control_right">', '<input id="avpw_crop_custom_width" class="avpw_text_input avpw_number_input" type="text" placeholder="' + e.getLocalizedString("Width").toLowerCase() + '" maxlength="5"  />', '<input id="avpw_crop_custom_height" class="avpw_text_input avpw_number_input" type="text" placeholder="' + e.getLocalizedString("Height").toLowerCase() + '" maxlength="5" />', '<div class="avpw_crop_lock_group"><input id="avpw_crop_custom_lock_dims" type="checkbox" /> <span>' + e.getLocalizedString("Lock Dimensions") + "</span> </div>", "</div>", "</div>"].join("")
        }, n.cropPreset = function(e) {
            var t, a = 20, i = -3, o = (e.label.split(":"), 30), r = 30, s = 30, l = e.width, c = e.height;
            l === c ? s = r = o : l > c ? (r = o, t = o / l, s = c * t) : (s = o, t = o / c, r = l * t);
            var p = "width:" + r + "px;height:" + s + "px;margin-left:" + (-r / 2 + i) + "px;margin-top:" + -(s - a) / 2 + "px";
            return ['<div class="avpw_preset_crop_icon avpw_preset_icon avpw_icon avpw_with_indicator avpw_isa_preset_crop" data-crop="' + e.label + '">', e.strict || e.labeled ? "" : n.cropPresetFlippedIndicator(), '<div class="avpw_crop_preset_visual" style="' + p + '"></div>', '<div class="avpw_preset_label avpw_label">', e.label, "</div>", n.presetIndicator(), "</div>"].join("")
        }, n.cropPresetFlippedIndicator = function() {
            return ['<div class="avpw_crop_preset_flipped_indicator_shadow">', '<div class="avpw_crop_preset_flipped_indicator_left"></div>', '<div class="avpw_crop_preset_flipped_indicator_right"></div>', "</div>", '<div class="avpw_crop_preset_flipped_indicator">', '<div class="avpw_crop_preset_flipped_indicator_left"></div>', '<div class="avpw_crop_preset_flipped_indicator_right"></div>', "</div>"].join("")
        }, n.brushIcon = function(e) {
            var t = "avpw_inset_button avpw_inset_button_mini avpw_isa_preset_brush";
            return e.isFirst ? t += " avpw_inset_button_first" : e.isLast && (t += " avpw_inset_button_last"), ['<div class="' + t + '" data-size="' + e.size + '">', '<div class="avpw_icon_image avpw_brush_size avpw_brush_size_' + e.size + '">', "</div>", "</div>"].join("")
        }, n.brushIconLarge = function(e) {
            return ['<div class="avpw_preset_icon avpw_icon avpw_with_indicator avpw_isa_preset_brush" data-size="' + e.size + '">', '<div class="avpw_icon_image avpw_brush_size avpw_brush_size_' + e.size + '">', "</div>", n.presetIndicator(), "</div>"].join("")
        }, n.brushColorIcon = function(e) {
            return ['<div class="avpw_brush_color_icon avpw_icon avpw_isa_preset_color" data-color="' + e.color + '">', '<div class="avpw_preset_color_image" style="background: ' + e.color + ';">', "</div>", e.extra ? e.extra : "", "</div>"].join("")
        }, n.brushSizesSet = function(t) {
            t || (t = {}), t.sizes || (t.sizes = e.brushWidths);
            var n = "";
            return t.id && "" != t.id && (n = 'id="' + t.id + '"'), ["<div " + n + ' class="avpw_inset_button_group avpw_inset_group">', '<div class="avpw_inset_button avpw_inset_button_mini avpw_isa_preset_brush avpw_inset_button_first" data-size="' + t.sizes[0] + '">', '<div class="avpw_icon_image avpw_brush_size avpw_brush_size_1"></div>', "</div>", '<div class="avpw_inset_button avpw_inset_button_mini avpw_isa_preset_brush avpw_collapsible" data-size="' + t.sizes[1] + '">', '<div class="avpw_icon_image avpw_brush_size avpw_brush_size_2"></div>', "</div>", '<div class="avpw_inset_button avpw_inset_button_mini avpw_isa_preset_brush" data-size="' + t.sizes[2] + '">', '<div class="avpw_icon_image avpw_brush_size avpw_brush_size_3"></div>', "</div>", '<div class="avpw_inset_button avpw_inset_button_mini avpw_isa_preset_brush avpw_collapsible" data-size="' + t.sizes[3] + '">', '<div class="avpw_icon_image avpw_brush_size avpw_brush_size_4"></div>', "</div>", '<div class="avpw_inset_button avpw_inset_button_mini avpw_isa_preset_brush avpw_inset_button_last" data-size="' + t.sizes[4] + '">', '<div class="avpw_icon_image avpw_brush_size avpw_brush_size_5"></div>', "</div>", "</div>", t.hideLabel ? "" : '<div class="avpw_inset_group avpw_inset_button_label avpw_inset_button_label_mini_5 avpw_label">' + e.getLocalizedString("Brush Size") + "</div>"].join("")
        }, n.colorPickerIcon = function() {
            return ['<div class="avpw_inset_color_picker avpw_inset_button avpw_inset_button_first avpw_isa_color_picker" data-color="">', '<div class="avpw_preset_icon avpw_icon">', '<div class="avpw_preset_color_image avpw_custom_color_image avpw_isa_color_feedback">', "</div>", '<div class="avpw_dropdown_icon">', '<div class="avpw_dropdown_icon_inner">', "</div>", "</div>", "</div>", "</div>"].join("")
        }, n.colorPickerContainer = function() {
            return ['<div class="avpw_dropdown_popup avpw_color_picker_dropdown_popup">', '<div class="avpw_dropdown_tail"></div>', '<div class="avpw_color_picker_background"></div>', '<div class="avpw_color_picker_preview avpw_isa_color_feedback">', "</div>", '<a class="avpw_button avpw_color_picker_confirm">', e.getLocalizedString("Set Color"), "</a>", "</div>"].join("")
        }, n.brushPreviewOverlay = function() {
            return ['<div id="avpw_brush_preview_container" class="avpw_brush_preview avpw_selection_overlay_selected">', '<canvas height="100" width="100" class="avpw_brush_preview_display"></canvas>', "</div>"].join("")
        }, n.cropLayer = function() {
            return ['<div class="avpw_crop_layer">', '<div class="avpw_crop_outside avpw_crop_outside_n"></div>', '<div class="avpw_crop_outside avpw_crop_outside_s"></div>', '<div class="avpw_crop_outside avpw_crop_outside_e"></div>', '<div class="avpw_crop_outside avpw_crop_outside_w"></div>', n.alignmentGrid({numLines: 3,lineWidth: 2}), '<div class="avpw_crop_handle avpw_crop_handle_tl"></div>', '<div class="avpw_crop_handle avpw_crop_handle_tr"></div>', '<div class="avpw_crop_handle avpw_crop_handle_bl"></div>', '<div class="avpw_crop_handle avpw_crop_handle_br"></div>', n.cropLayerToolTip(), "</div>"].join("")
        }, n.cropLayerToolTip = function() {
            return ['<div id="avpw_crop_tooltip">', 'w: <span id="avpw_crop_tooltip_w">800</span><br/>', 'h: <span id="avpw_crop_tooltip_h">600</span>', "</div>"].join("")
        }, n.frameThicknessIcon = function(e) {
            var t = e.thickness + "px", n = 24 - 2 * e.thickness, a = n + "px";
            return ['<div class="avpw_preset_icon avpw_icon avpw_isa_preset_thickness" data-thickness="' + e.thickness + '">', '<div class="avpw_preset_thickness_image" ', 'style="border-width: ' + t + ";", "width: " + a + ";", "height: " + a + ';"', ">", "</div>", "</div>"].join("")
        }, n.fontGroupPopup = function() {
            return ['<div id="avpw_font_popup" class="avpw_dropdown_popup" style="display: none;">', '<div class="avpw_dropdown_tail"></div>', '<div class="avpw_dropdown_popup_inner">', '<ul class="avpw_dropdown_popup_list">', "</ul>", "</div>", "</div>"].join("")
        }, n.fontGroupPopupItem = function(e) {
            var t = "";
            return e.label && e.label.toLowerCase && (t = "avpw_font_" + e.label.toLowerCase().replace(/\ /g, ""), e.custom && (t += " avpw_font_custom_image")), ['<li class="avpw_preset_font avpw_dropdown_popup_list_item avpw_isa_dropdown_item" data-value="' + e.label + '">', '<div class="avpw_font_image ' + t + '">', e.label, "</div>", "</li>"].join("")
        }, n.fontSizePopup = function() {
            return ['<div id="avpw_font_size_popup" class="avpw_dropdown_popup" style="display: none;">', '<div class="avpw_dropdown_tail"></div>', '<div class="avpw_dropdown_popup_inner">', '<ul class="avpw_dropdown_popup_list">', "</ul>", "</div>", "</div>"].join("")
        }, n.fontSizePopupItem = function(e) {
            return ['<li class="avpw_preset_font_size avpw_dropdown_popup_list_item avpw_isa_dropdown_item" data-value="' + e.value + '">', e.label, "</li>"].join("")
        }, n.selectionOverlay = function(t) {
            return ['<div id="' + (t.id ? t.id : "") + '" style="z-index:' + t.zIndex + ';" class="avpw_selection_overlay">', t.body ? t.body : "", '<div class="avpw_selection_overlay_size_handle"></div>', n.closeButton({className: "avpw_selection_overlay_close_button",text: e.getLocalizedString("Remove")}), "</div>"].join("")
        }, n.imageOverlayBody = function(e) {
            return ['<img class="avpw_selection_overlay_image" src="' + (e.src || "") + '"></img>'].join("")
        }, n.textEntryOverlayBody = function() {
            return ['<canvas class="avpw_textwithfont_writer"></canvas>', '<textarea class="avpw_textwithfont_entry" cols="20" rows="1" wrap="soft" spellcheck="false">', "</textarea>"].join("")
        }, n.textEntryOverlayProxy = function() {
            return ['<pre class="avpw_textwithfont_overlay_proxy">', '<span class="avpw_proxy_get_height"> </span>', "</pre>"].join("")
        }, n.textEntryOutlineStyle = function(e) {
            var t = .707, n = .383, a = .924, i = e.size ? e.size / 2 : 1;
            return ["-" + i + "px 0 " + e.color + ",", "-" + a * i + "px -" + n * i + "px " + e.color + ",", "-" + t * i + "px -" + t * i + "px " + e.color + ",", "-" + n * i + "px -" + a * i + "px " + e.color + ",", "0 -" + i + "px " + e.color + ",", n * i + "px " + a * i + "px " + e.color + ",", t * i + "px -" + t * i + "px " + e.color + ",", a * i + "px " + n * i + "px " + e.color + ",", i + "px 0 " + e.color + ",", a * i + "px " + n * i + "px " + e.color + ",", t * i + "px " + t * i + "px " + e.color + ",", n * i + "px " + a * i + "px " + e.color + ",", "0 " + i + "px " + e.color + ",", "-" + n * i + "px " + a * i + "px " + e.color + ",", "-" + t * i + "px " + t * i + "px " + e.color + ",", "-" + a * i + "px " + n * i + "px " + e.color].join("")
        }, n.blankPreset = function() {
            return ['<div class="avpw_preset_icon avpw_icon avpw_preset_icon_disabled">', "</div>"].join("")
        }, n.blankCropPreset = function() {
            return ['<div class="avpw_preset_crop_icon avpw_preset_icon avpw_icon avpw_preset_icon_disabled">', "</div>"].join("")
        }, n.stickerThumbnail = function(e) {
            return ['<div class="avpw_icon avpw_overlay_icon avpw_isa_control_selector_overlay" thumburl="' + e.thumburl + '" fullimageurl="' + e.url + '">', '<div class="avpw_icon_image avpw_overlay_image avpw_header_inline_center">', '<img draggable="false" src="' + e.thumburl + '" fullimageurl="' + e.url + '"></img>', "</div>", '<div class="avpw_icon_waiter avpw_center_contents avpw_isa_overlay_waiter">', "</div>", "</div>"].join("")
        }, n.stickerRollInner = function(e) {
            return ['<img draggable="false" height="60" width="60" class="avpw_stickerpack_image" ', 'src="' + e.thumburl + '"></img>', '<span class="avpw_icon_label avpw_label">' + e.label + "</span>"].join("")
        }, n.stickerRoll = function(e) {
            return ['<div class="avpw_pack_icon avpw_icon avpw_isa_control_selector_filterpack avpw_pack_icon avpw_filterpack_icon avpw_isa_control_selector_stickerpack"  data-pack-index="' + e.packIndex + '">', '<div class="avpw_tile_container">', '<div class="avpw_pack_tile"></div>', '<div class="avpw_pack_tile"></div>', '<div class="avpw_pack_tile"></div>', '<img draggable="false" height="60" width="60" class="avpw_filterpack_image" src="' + e.thumburl + '" />', "</div>", '<span class="avpw_icon_label avpw_label">' + e.label + "</span>", "</div>"].join("")
        }, n.stickerRollDisabled = function(e) {
            return ['<div class="avpw_icon avpw_pack_icon avpw_pack_icon_selected avpw_stickerpack_icon avpw_isa_control_selector_stickerinfo">', n.stickerRollInner(e), '<div class="avpw_icon_waiter avpw_center_contents"></div>', "</div>"].join("")
        }, n.filterThumbnail = function(e) {
            var t = e.thumburl ? '<img draggable="false" height="63" width="63" class="avpw_filter_icon_image" src="' + e.thumburl + '"></img>' : '<canvas draggable="false" height="63" width="63" class="avpw_filter_icon_image avpw_isa_previewcanvas"></canvas>';
            return ['<div class="avpw_icon avpw_filter_icon avpw_isa_control_selector_filter" data-frame="' + e.frame + '" data-filtername="' + e.id + '">', n.presetIndicator(), t, '<span class="avpw_icon_label avpw_label">' + e.label + "</span>", '<div class="avpw_icon_waiter avpw_center_contents"></div>', "</div>"].join("")
        }, n.filterCanisterInner = function(e) {
            return ['<img draggable="false" class="avpw_filterpack_image" ', 'src="' + e.thumburl + '"></img>', '<span class="avpw_icon_label avpw_label">' + e.label + "</span>"].join("")
        }, n.filterCanister = function(e) {
            return ['<div class="avpw_pack_icon avpw_icon avpw_isa_control_selector_filterpack avpw_pack_icon avpw_filterpack_icon"  data-pack-index="' + e.packIndex + '">', '<div class="avpw_tile_container">', '<div class="avpw_pack_tile"></div>', '<div class="avpw_pack_tile"></div>', '<div class="avpw_pack_tile"></div>', '<img draggable="false" height="60" width="60" class="avpw_filterpack_image" src="' + e.thumburl + '" />', "</div>", '<span class="avpw_icon_label avpw_label">' + e.label + "</span>", "</div>"].join("")
        }, n.filterCanisterDisabled = function(e) {
            return ['<div class="avpw_icon avpw_pack_icon avpw_pack_icon_selected avpw_filterpack_icon avpw_isa_control_selector_filterinfo">', n.filterCanisterInner(e), '<img draggable="false" height="75" width="54" class="avpw_filterpack_tag_image" src="' + e.tagurl + '"></img>', '<div class="avpw_icon_waiter avpw_center_contents"></div>', "</div>"].join("")
        }, n.frameThumbnail = function(t) {
            return ['<div class="avpw_filter_icon avpw_icon avpw_isa_control_selector_frame" data-framename="' + (t.frameName ? t.frameName : 0) + '">', n.presetIndicator(), '<div class="avpw_filter_icon_image">', '<canvas height="63" width="63" style="background-image: url(' + e.build.feather_baseURL + 'images/border_thumb.jpg);"></canvas>', '<img draggable="false" width=63 height=63 src="' + t.assetImage + '"></img>', "</div>", '<span class="avpw_icon_label avpw_label">' + t.label + "</span>", "</div>"].join("")
        }, n.straightenSlider = function() {
            return ['<div class="avpw_straighten_ui avpw_straighten_ui_animate" id="avpw_straighten_container">', '<div class="avpw_straighten_ui_grid avpw_straighten_ui_grid_animate" id="avpw_straighten_grid"></div>', '<a id="avpw_straighten_handle">', "</a>", "</div>"].join("")
        }, n.alignmentGridBox = function(e) {
            return ['<div class="avpw_ui_grid_box ' + e.classes + '" style="' + e.styles + '">', '<div class="avpw_ui_grid_box_inner avpw_ui_grid_box_inner_n" style="' + e.northStyles + '"></div>', '<div class="avpw_ui_grid_box_inner avpw_ui_grid_box_inner_w" style="' + e.westStyles + '"></div>', "</div>"].join("")
        }, n.alignmentGrid = function(e) {
            var t, a, i, o, r, s, l, c, p = e.numLines || 3, u = e.lineWidth || 1, d = 100 / p, v = '<div style="border-right-width: ' + u + "px; border-bottom-width: " + u + "px; margin: -" + u / 2 + "px 0 0 -" + u / 2 + 'px;" class="avpw_ui_grid">';
            for (t = 0; p > t; t++)
                for (a = 0; p > a; a++)
                    o = 100 * t / p, i = 100 * a / p, r = ["left: " + i + "%;", "top: " + o + "%;", "width: " + d + "%;", "height: " + d + "%;"].join(""), l = ["left: " + u + "px;", "height: " + u + "px;"].join(""), c = ["width: " + u + "px;"].join(""), s = "", t === p / 2 && (s += "avpw_ui_middle_grid ", l = ["left: 0;", "height: " + u + "px;"].join("")), a === p / 2 && (s += "avpw_ui_center_grid "), v += n.alignmentGridBox({classes: s,styles: r,northStyles: l,westStyles: c});
            return v += "</div>"
        }, n.canvasControls = function() {
            return ['<div class="avpw_canvas_controls" id="avpw_canvas_controls_layer">', "</div>"].join("")
        }, n.flashCanvasBox = function(e) {
            return ['<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">', '<tr><td width="100%" height="100%" valign="middle" align="center">', '<div id="' + e.id + '"></div>', "</td></tr>", "</table>"].join("")
        }, n.advancedToolsSplitter = function() {
            return ['<div class="avpw_advanced_splitter">', '<div class="avpw_advanced_splitter_inner">', '<div class="avpw_advanced_splitter_control">', '<div class="avpw_advanced_splitter_bottom_shadow"></div>', '<div class="avpw_advanced_splitter_bottom"></div>', '<div class="avpw_advanced_splitter_middle">', '<a class="avpw_advanced_splitter_up_arrow"></a>', '<a class="avpw_advanced_splitter_down_arrow"></a>', "</div>", "</div>", "</div>", "</div>"].join("")
        }
    }(e.template = e.template || {}), e.Pager = function(n) {
        var a, i = this, o = 0, r = 0, s = parseInt((n.itemCount - 1) / n.itemsPerPage, 10) + 1, l = 0, c = function() {
            var e, t, a, i = "";
            for (n.firstPageTemplate && (i += n.firstPageTemplate.apply(this, [n.firstPageContents])), t = e = 0; s > t; t++) {
                var o = "";
                for (a = 0; a < n.itemsPerPage && e < n.itemCount; a++)
                    o += n.itemBuilder.apply(this, [e]), e++;
                i += n.pageTemplate ? n.pageTemplate({panelHTML: o,panelWidth: n.pageWidth,panelClass: a === n.itemsPerPage ? "avpw_scroll_page_complete" : "avpw_scroll_page_incomplete"}) : o
            }
            n.lastPageTemplate && (i += n.lastPageTemplate.apply(this, [n.lastPageContents]));
            var r, c, p, u, d, v = 0, f = 0, _ = 0;
            if ((n.firstPageTemplate || n.lastPageTemplate) && (n.firstPageTemplate && (n.firstPageWidth ? v += n.firstPageWidth * (n.itemsPerPage / n.pageWidth) : s++), n.lastPageTemplate && (n.lastPageWidth ? v += n.lastPageWidth * (n.itemsPerPage / n.pageWidth) : s++), f = n.itemCount % n.itemsPerPage, v && (l = n.pageWidth / n.itemsPerPage - n.firstPageWidth % (n.pageWidth / n.itemsPerPage) | 0, _ = l * (n.itemsPerPage / n.pageWidth), f > 0 ? f + v + _ > n.itemsPerPage && s++ : s++)), !n.pageTemplate && n.fillRemainingSpace && (p = (n.itemCount + v + _) % n.itemsPerPage))
                if (r = n.itemsPerPage - p, 1 === s && n.centerContents) {
                    for (c = r / 2 | 0, u = "", d = 0; c > d; d++)
                        u += n.fillRemainingSpace.apply(this);
                    for (i = u + i, d = 0; c > d; d++)
                        i += n.fillRemainingSpace.apply(this)
                } else
                    for (d = 0; r > d; d++)
                        i += n.fillRemainingSpace.apply(this);
            return i
        }, p = function() {
            a.removeClass("avpw_page_selected"), a.filter('[pagenum="' + o + '"]').addClass("avpw_page_selected")
        }, u = function() {
            0 === o ? avpw$(n.leftArrow).removeClass("avpw_prev_enabled").addClass("avpw_prev_disabled") : avpw$(n.leftArrow).removeClass("avpw_prev_disabled").addClass("avpw_prev_enabled"), o == s - 1 ? avpw$(n.rightArrow).removeClass("avpw_next_enabled").addClass("avpw_next_disabled") : avpw$(n.rightArrow).removeClass("avpw_next_disabled").addClass("avpw_next_enabled")
        }, d = function(e) {
            e = e || 0;
            var t = e * n.pageWidth;
            return 0 !== e && (t -= l), t
        }, v = function() {
            var t, i = n.pageContainer;
            if (0 > o)
                return void (o = 0);
            if (o > s - 1)
                return void (o = s - 1);
            t = d(o);
            var r = e.support.getVendorProperty("transform");
            if (r) {
                var l;
                l = o > 0 ? "translateX(-" + t + "px)" : "translateX(0)", i[0].style[r] = l
            } else
                i[0].style.left = o > 0 ? "-" + t + "px" : "0";
            u(), n.onPageChange && n.onPageChange.apply(this, [o]), a && p()
        }, f = function() {
            return r = o, o += -1, v.call(this), !1
        }, _ = function() {
            return r = o, o += 1, v.call(this), !1
        }, h = function() {
            var e = n.longPressDuration || 200, a = !1, i = null, s = this, l = function(n) {
                i = t.setInterval(function() {
                    a && n ? (r = o, o += n, v.call(s)) : (t.clearInterval(i), i = null)
                }, e)
            }, c = function() {
                t.clearInterval(i), i = null, f.call(this), a = !0, l.call(this, -1)
            }, p = function() {
                t.clearInterval(i), i = null, _.call(this), a = !0, l.call(this, 1)
            }, u = function() {
                a = !1
            };
            return {bindEvents: function() {
                avpw$(n.leftArrow).bind("mousedown", c).bind("mouseup", u), avpw$(n.rightArrow).bind("mousedown", p).bind("mouseup", u)
            },unbindEvents: function() {
                avpw$(n.leftArrow).unbind("mousedown", c).unbind("mouseup", u), avpw$(n.rightArrow).unbind("mousedown", p).unbind("mouseup", u)
            }}
        }(), w = function(t, n, a) {
            var i, o, r, s, l = 30, c = 60;
            t.length && (t = t[0]), t.ontouchstart = function(t) {
                var n = e.util.getTouch(t);
                n && (i = n.pageX, r = n.pageY)
            }, t.ontouchmove = function(t) {
                var n = e.util.getTouch(t);
                return n && (o = n.pageX, s = n.pageY), !1
            }, t.ontouchend = function() {
                var e = o - i, t = s - r;
                Math.abs(e) > l && Math.abs(t) < c && (e > l ? n() : a()), o = i = void 0
            }
        }, g = function(e) {
            e.length && (e = e[0]), e.ontouchstart = e.ontouchmove = e.ontouchend = null
        }, m = function(e) {
            if (n.itemsPerPage && !n.pageTemplate) {
                var t = e.currentTarget, a = n.pageContainer.offset().left, i = avpw$(t).offset().left - a;
                i >= d(o + 1) ? (o++, v()) : i < d(o) && (o--, v())
            }
        }, b = function() {
            1 !== s && (n.bindLongPress ? h.bindEvents() : (avpw$(n.leftArrow).bind("click", function() {
                return f.call(this)
            }), avpw$(n.rightArrow).bind("click", function() {
                return _.call(this)
            })), w(n.pageContainer, f, _), a && a.bind("click", function(e) {
                var t = e.currentTarget, n = avpw$(t).attr("pagenum");
                return r = o, o = parseInt(n), v(), !1
            }), n.pageContainer.delegate(".avpw_icon", "click", m))
        }, y = function() {
            1 !== s && (n.bindLongPress ? h.unbindEvents() : (avpw$(n.leftArrow).unbind("click"), avpw$(n.rightArrow).unbind("click")), g(n.pageContainer), a && a.unbind("click"), n.pageContainer.undelegate(".avpw_icon", "click"))
        }, C = function() {
            n.pageContainer.html(c()), n.onPageBuilt && n.onPageBuilt.call(this), 1 === s ? (avpw$(n.leftArrow).hide(), avpw$(n.rightArrow).hide(), n.centerContents && (n.pageContainer.css("width", "auto"), n.pageContainer.addClass("avpw_scroll_strip_centered"))) : (avpw$(n.leftArrow).show(), avpw$(n.rightArrow).show(), n.pageContainer.removeClass("avpw_scroll_strip_centered")), b()
        };
        return i.shutdown = function() {
            y(), n.pageContainer.html(""), n.pageContainer.attr("style", ""), a && n.pipContainer.html("")
        }, i.changePage = v, i.pageLeft = f, i.pageRight = _, i.setCurrentPage = function(e) {
            r = o, o = e
        }, i.getCurrentPage = function() {
            return o
        }, i.getLastPage = function() {
            return s - 1
        }, i.getPageCount = function() {
            return s
        }, i.setPageCount = function(e) {
            s = e
        }, C(), i
    };
    var a = e.Events, i = function(t, n) {
        var a = function() {
            var e = avpw$(this);
            e.unbind("mouseup mouseout touchend")
        }, i = function(e) {
            var t = avpw$(this);
            return t.bind("mouseup touchend", o), t.bind("mouseout", a), e.stopPropagation(), !1
        }, o = function(t) {
            var a = avpw$(this);
            return a.unbind("mouseup mouseout touchend", o), t.stopPropagation(), n ? (e.util.nextFrame(n), !1) : !0
        };
        t.bind("mousedown touchstart", i), t.click(function(e) {
            e.preventDefault()
        })
    };
    e.colorChoices = ["#000000", "#ffffff", "rgb(255, 0, 0)", "rgb(255, 132, 0)", "rgb(255,240,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(198,0,255)"], e.brushWidths = [5, 15, 30, 45, 70], e.buildBlankPreset = function() {
        return e.template[e.launchData.layout].blankPreset()
    }, e.buildBlankCropPreset = function() {
        return e.template[e.launchData.layout].blankCropPreset()
    }, e.toolDefaults = {redeye: {presets: e.brushWidths,files: [e.build.feather_baseURL + "redeye.swf"]},greeneye: {initialvalue: 10,presets: [3, 7, 12, 20],presetsScaled: [2, 5, 9, 15]},whiten: {initialvalue: 10,presets: e.brushWidths,files: [e.build.feather_baseURL + "redeye.swf"]},blemish: {initialvalue: 5,presets: e.brushWidths,files: [e.build.feather_baseURL + "blemish.swf"]},bulge: {radius: 100,maxradius: 200,power: 50},pinch: {radius: 100,maxradius: 200,power: 50},drawing: {initialColor: e.colorChoices[7],presetsWidth: e.brushWidths,presetsColor: e.colorChoices,files: [e.build.feather_baseURL + "drawing.swf"]},text: {presetsColor: e.colorChoices,files: [e.build.feather_baseURL + "text.swf"]},textwithfont: {presetsColor: e.colorChoices,presetsFont: [{label: "Abril Fatface",value: "Abril Fatface"}, {label: "Acme",value: "Acme"}, {label: "Anton",value: "Anton"}, {label: "Arial Black",value: "Arial Black",system: !0}, {label: "Bangers",value: "Bangers"}, {label: "Bevan",value: "Bevan"}, {label: "Black Ops One",value: "Black Ops One"}, {label: "Butterfly Kids",value: "Butterfly Kids"}, {label: "Cabin Sketch",value: "Cabin Sketch"}, {label: "Cardo",value: "Cardo"}, {label: "Chelsea Market",value: "Chelsea Market"}, {label: "Chewy",value: "Chewy"}, {label: "Covered By Your Grace",value: "Covered By Your Grace"}, {label: "Dawning of a New Day",value: "Dawning of a New Day"}, {label: "Delius Unicase",value: "Delius Unicase"}, {label: "Didact Gothic",value: "Didact Gothic"}, {label: "Doppio One",value: "Doppio One"}, {label: "Droid Serif",value: "Droid Serif"}, {label: "EB Garamond",value: "EB Garamond"}, {label: "Economica",value: "Economica",familyStyle: "bolditalic",style: "italic"}, {label: "Francois One",value: "Francois One"}, {label: "Fredoka One",value: "Fredoka One"}, {label: "Georgia",value: "Georgia",system: !0}, {label: "Give You Glory",value: "Give You Glory"}, {label: "Impact",value: "Impact",system: !0}, {label: "IM Fell English",value: "IM Fell English"}, {label: "Italiana",value: "Italiana"}, {label: "Kranky",value: "Kranky"}, {label: "La Belle Aurore",value: "La Belle Aurore"}, {label: "Ledger",value: "Ledger"}, {label: "Lobster Two",value: "Lobster Two"}, {label: "Luckiest Guy",value: "Luckiest Guy"}, {label: "Mr Dafoe",value: "Mr Dafoe"}, {label: "Mystery Quest",value: "Mystery Quest"}, {label: "Oswald",value: "Oswald",familyStyle: "bold"}, {label: "Overlock",value: "Overlock"}, {label: "Patua One",value: "Patua One"}, {label: "Playball",value: "Playball"}, {label: "Princess Sofia",value: "Princess Sofia"}, {label: "PT Mono",value: "PT Mono"}, {label: "PT Sans Narrow",value: "PT Sans Narrow",familyStyle: "bold"}, {label: "PT Serif Caption",value: "PT Serif Caption"}, {label: "Quicksand",value: "Quicksand"}, {label: "Rochester",value: "Rochester"}, {label: "Rokkitt",value: "Rokkitt"}, {label: "Sansita One",value: "Sansita One"}, {label: "Schoolbell",value: "Schoolbell"}, {label: "Shadows Into Light Two",value: "Shadows Into Light Two"}, {label: "Shojumaru",value: "Shojumaru"}, {label: "Special Elite",value: "Special Elite"}, {label: "Stint Ultra Expanded",value: "Stint Ultra Expanded"}, {label: "Tahoma",value: "Tahoma",system: !0}, {label: "Times New Roman",value: "Times New Roman",system: !0}, {label: "Trebuchet MS",value: "Trebuchet MS",system: !0}, {label: "Ultra",value: "Ultra"}, {label: "Varela Round",value: "Varela Round"}, {label: "Verdana",value: "Verdana",system: !0}, {label: "Voltaire",value: "Voltaire"}, {label: "Zeyada",value: "Zeyada"}]},sharpness: {presets: [-100, -33, 33, 100],files: [e.build.feather_baseURL + "blur.swf", e.build.feather_baseURL + "sharpen.swf"]},saturation: {presets: [-100, -33, 33, 100],presetsFlash: [{value: 0}, {value: .66}, {value: 1.33}, {value: 2}],files: [e.build.feather_baseURL + "saturation.swf"]},warmth: {presets: [-100, -33, 33, 100]},brightness: {presets: [-100, -33, 33, 100],presetsFlash: [{brightnessvalue: .33,contrastvalue: 1}, {brightnessvalue: .77,contrastvalue: 1}, {brightnessvalue: 1.22,contrastvalue: 1}, {brightnessvalue: 1.66,contrastvalue: 1}],files: [e.build.feather_baseURL + "brightness.swf"]},contrast: {presets: [-100, -33, 33, 100],presetsFlash: [{contrastvalue: .33,brightnessvalue: 1}, {contrastvalue: .77,brightnessvalue: 1}, {contrastvalue: 1.22,brightnessvalue: 1}, {contrastvalue: 1.66,brightnessvalue: 1}],files: [e.build.feather_baseURL + "contrast.swf"]},colors: {min: -133,max: 67,initialValue: -33,files: [e.build.feather_baseURL + "colors.swf"]},orientation: {presetsFlash: [{vertical: !1,horizontal: !1}, {vertical: !1,horizontal: !0}, {vertical: !0,horizontal: !1}, {vertical: !0,horizontal: !0}],files: [e.build.feather_baseURL + "flip.swf", e.build.feather_baseURL + "rotate90.swf"]},crop: {files: [e.build.feather_baseURL + "crop.swf", e.build.feather_baseURL + "resize.swf"]},resize: {files: [e.build.feather_baseURL + "resize.swf"]},overlay: {files: [e.build.feather_baseURL + "overlay.swf"]},effects: {files: [e.build.feather_baseURL + "effects.swf"],optionalFrame: ["singe", "sancarmen", "purple", "thresh", "aqua", "andy", "edgewood", "joecool"]},enhance: {presets: ["localcontrastenhance", "nightenhance", "labcorrect"],files: [e.build.feather_baseURL + "effects.swf"]},frames: {presetsThickness: [1, 2, 3, 4, 5, 6]},colorsplash: {presets: e.brushWidths}}, e.buildColorPicker = function(t, n, a, i) {
        var o, r = 74, s = avpw$(n).data("color"), l = null, c = null, p = function(e) {
            var t = {h: 0,s: 0,b: 0}, n = Math.min(e.r, e.g, e.b), a = Math.max(e.r, e.g, e.b), i = a - n;
            return t.b = a, t.s = 0 !== a ? 255 * i / a : 0, t.h = 0 !== t.s ? e.r === a ? (e.g - e.b) / i : e.g === a ? 2 + (e.b - e.r) / i : 4 + (e.r - e.g) / i : -1, t.h *= 60, t.h < 0 && (t.h += 360), t.s *= 100 / 255, t.b *= 100 / 255, t
        }, u = function(e) {
            return e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16), {r: e >> 16,g: (65280 & e) >> 8,b: 255 & e}
        }, d = function(e) {
            var t = p(u(e));
            return 0 === t.s && (t.h = 360), t
        }, v = function() {
            return avpw$(n).data("color")
        }, f = function(e) {
            avpw$(n).data("color", e)
        }, _ = function(e) {
            e = e || v();
            var t = avpw$(n).find(".avpw_isa_color_feedback");
            e ? t.css("background-color", e).addClass("avpw_custom_color_image_with_preview") : t.removeClass("avpw_custom_color_image_with_preview")
        }, h = function(e) {
            e = e || v(), c.find(".avpw_isa_color_feedback").css("background-color", e)
        }, w = function() {
            var e = avpw$(n).offset(), t = avpw$("#avpw_controls").offset();
            e.left += avpw$(n).width() / 2, e.left -= c.width() / 2, e.left -= t.left, e.top -= t.top, c.css({left: e.left + "px",top: e.top + r + "px"})
        }, g = function() {
            c && (e.miniColors.unBindSelectorEvents(), c.undelegate(".avpw_color_picker_confirm", "mousedown touchstart"), l.unbind(), c.hide().remove(), c = l = null, e.featherUseFlash && e.FlashAPI.showCanvas())
        };
        return e.miniColors ? (s = s || t || "#ffffff", o = d(s), l = e.miniColors.buildSelector(o), c = avpw$(".avpw_color_picker_dropdown_popup"), c && c.length ? (c.unbind(), c.detach()) : c = avpw$(e.template[e.launchData.layout].colorPickerContainer()), e.miniColors.bindSelectorEvents(l), avpw$("#avpw_controls").append(c.append(l)), c.delegate(".avpw_color_picker_confirm", "mousedown touchstart", function(e) {
            e.stopPropagation(), e.preventDefault(), a && a.apply(this, [s]), f(s), _(s), g()
        }), l.bind("clickOutsideBounds", function() {
            _(""), g(), i && i.call(this)
        }).bind("setColor", function(e, t) {
            s = "#" + t.hex, h(s), a && a.apply(this, [s, !0])
        }).show(), h(s), w(), e.featherUseFlash && e.FlashAPI.hideCanvas(), {hideColorPicker: g}) : void 0
    }, e.ControlsWidget.prototype.populateCropPresets = function(t) {
        var n, a, i, o, r, s, l, c, p, u, d = e.launchData.cropPresetsStrict, v = this.imageSizeTracker.isUsingHiResDimensions(e.launchData);
        e.featherUseFlash || v ? (u = this.paintWidget.getScaledSize(), c = u.hiresWidth || u.width, p = u.hiresHeight || u.height) : (c = this.paintWidget.width, p = this.paintWidget.height), n = c / p > 1;
        for (var f = [], _ = 0; _ < t.length; _++) {
            var h, w, g, m = t[_] instanceof Array;
            if (w = m ? t[_][1] : t[_], g = m ? t[_][0] : t[_], "custom" === g.toLowerCase())
                m = !0, h = {label: g,width: .85 * c,height: .75 * p,constrain: !1,resize: !1};
            else if ("original" === g.toLowerCase())
                m = !0, h = {label: g,width: c,height: p,constrain: !0,resize: !1};
            else if (a = w.toLowerCase().indexOf("x"), -1 != a) {
                if (i = w.substr(0, a), o = w.substr(a + 1), r = parseInt(i, 10), s = parseInt(o, 10), r > c || s > p)
                    continue;
                if (!d && (s > c || r > p))
                    continue;
                m || d || !(n && 1 > r / s || !n && r / s > 1) || (g = s + (w.charAt(a) || "x") + r, l = r, r = s, s = l), h = {label: g,width: r,height: s,constrain: !0,resize: !0}
            } else {
                if (a = w.indexOf(":"), -1 == a && "" !== avpw$.trim(w))
                    continue;
                i = w.substr(0, a), o = w.substr(a + 1), r = parseInt(i, 10), s = parseInt(o, 10), m || d || !(n && 1 > r / s || !n && r / s > 1) || (g = s + ":" + r, l = r, r = s, s = l), h = {label: g,width: r,height: s,constrain: !0,resize: !1}
            }
            h && (h.strict = d, h.labeled = m, f.push(h))
        }
        return f
    }, e.Dropdown = function(e) {
        var i, o, r = 74, s = "avpw_dropdown_open", l = "avpw_dropdown_popup_list_item_selected", c = e.updateElement, p = e.popupElement, u = e.defaultValue, d = e.preventClose || !1, v = e.disableReposition || !1, f = e.disableClick || !1, _ = e.onShow, h = e.onHide, w = function(e, t) {
            e = e || u, o && o.length && o.html(e), p && p.length && (p.find(".avpw_isa_dropdown_item").removeClass(l), t = t || p.find('[data-value="' + e + '"]'), t && t.length && t.addClass(l))
        }, g = function(t) {
            var n = t.currentTarget, a = avpw$(n);
            value = a.data("value"), w(value, n), d && (t.stopPropagation(), t.preventDefault()), e.onItemClicked && !f && e.onItemClicked.apply(this, [value])
        }, m = function() {
            e.popupParent && e.popupParent.length && e.popupParent.append(p)
        }, b = function() {
            if (!v) {
                var e = c.offset(), t = avpw$("#avpw_controls").offset();
                e.left += c.width() / 2, e.left -= p.width() / 2, e.left -= t.left, e.top -= t.top, p.css({left: e.left + "px",top: e.top + r + "px"})
            }
        }, y = function(e, t) {
            if (p) {
                var a, o, r = n.createDocumentFragment();
                for (a = 0; a < e.length; a++)
                    o = avpw$(t(e[a])), r.appendChild(o[0]);
                i && i.length ? i.html(r) : p.html(r)
            }
        }, C = function() {
            c.bind("click", S)
        }, x = function() {
            c.unbind("click", S)
        }, I = function() {
            p && p.length && p.remove()
        }, T = function() {
            p && p.length && (W(), p.slideDown(50), c.addClass(s), _ && _.call(this))
        }, k = function() {
            p && p.length && (c.removeClass(s), p.slideUp(50), E(), h && h.call(this))
        }, S = function(e) {
            e.preventDefault(), e.stopPropagation(), p && p.is(":visible") ? k() : T()
        }, D = function() {
            i = p.find(".avpw_dropdown_popup_list"), o = c.find(".avpw_isa_dropdown_display"), m(), C(), e.items && e.itemTemplate && y(e.items, e.itemTemplate), w()
        }, W = function() {
            p && p.delegate(".avpw_isa_dropdown_item", "click", g), avpw$(t).bind("click", k), a.on("layout:resize", b)
        }, E = function() {
            p && p.undelegate(".avpw_isa_dropdown_item", "click"), avpw$(t).unbind("click", k), a.off("layout:resize", b)
        }, N = this;
        return N.position = b, N.getPopupElement = function() {
            return p
        }, N.show = T, N.hide = k, N.update = w, N.shutdown = function() {
            E(), x(), I(), i = void 0, o = void 0, u = void 0, c = void 0, p = void 0
        }, D(), N
    }, e.ContentBrowser = function(n) {
        n || (n = {});
        var i, o, r = n.container || null, s = n.packsInOrder || [], l = n.packsById || {}, c = n.buildPackUI, p = n.buildItem, u = (n.itemWidth, n.arrowWidth || 62, {}), d = r.find(".avpw_content_packs"), v = r.find(".avpw_content_items");
        r.delegate(".avpw_pack_icon", "click", function(e) {
            if (e.stopPropagation(), e.preventDefault(), !avpw$(this).hasClass("avpw_selected_pack")) {
                var t = avpw$(this).data("packIndex");
                u.openPackItemsByIndex(t)
            }
        }), avpw$("#avpw_tool_options_container").delegate("#avpw_up_one_level", "click", function(e) {
            e.stopPropagation(), e.preventDefault(), b()
        });
        var f, _, h;
        u.build = function() {
            h = avpw$("#avpw_breadcrumb_toolname").html();
            var t = d.find(".avpw_scroll_strip"), a = e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "getDims"), o = n.packWidth || 90, r = a.INNER_BROWSER_WIDTH / o | 0, p = o * r;
            t.css({width: s.length * o + "px",paddingRight: p + "px"}), i = new e.Pager({leftArrow: d.find(".avpw_prev"),rightArrow: d.find(".avpw_next"),itemCount: s.length,itemsPerPage: r,pageWidth: p,pageContainer: t,itemBuilder: function(e) {
                return c(l[s[e].identifier], e)
            }}), b(!1, null, !0)
        };
        var w, g = function() {
            f && f.removeClass("avpw_selected_pack")
        }, m = 300, b = function(e, a, r) {
            t.clearTimeout(w), r || avpw$("#avpw_controls").addClass("avpw_content_transition"), w = t.setTimeout(function() {
                r || avpw$("#avpw_controls").removeClass("avpw_content_transition"), e ? (o.changePage(), avpw$("#avpw_tool_options_container").find("#avpw_all_effects").hide(), avpw$("#avpw_tool_options_container").find("#avpw_up_one_level").show(), avpw$("#avpw_controls").addClass("avpw_content_items_mode")) : (n && n.onBackButtonClicked && n.onBackButtonClicked.call(this), avpw$("#avpw_breadcrumb_toolname").html(h), i.changePage(), avpw$("#avpw_controls").removeClass("avpw_content_items_mode"), avpw$("#avpw_tool_options_container").find("#avpw_all_effects").show(), avpw$("#avpw_tool_options_container").find("#avpw_up_one_level").hide(), g()), a && a.call(this)
            }, r ? 0 : m)
        }, y = function(a) {
            if (_ = a) {
                var i = _.title || _.displayName;
                avpw$("#avpw_breadcrumb_toolname").html(i)
            }
            var r = 81, s = n.itemsPerPage, l = r * s, c = a.items.length, u = v.find(".avpw_scroll_strip");
            u.css({width: c * r + "px",paddingRight: l + "px"}), u.removeClass("avpw_page_mode_built"), o = new e.Pager({leftArrow: v.find(".avpw_prev"),rightArrow: v.find(".avpw_next"),itemCount: c,itemsPerPage: s,pageWidth: l,pageContainer: u,itemBuilder: function(t) {
                var n = a.items[t];
                return p(n, t, e.util.getSafeAssetBaseURL(a.assetsBaseURL))
            },onPageBuilt: function() {
                n.onItemsOpen && n.onItemsOpen.call(this), t.setTimeout(function() {
                    u.addClass("avpw_page_mode_built")
                }, m)
            }})
        };
        return u.openPackItemsByIndex = function(e) {
            g(), f = d.find(".avpw_scroll_strip").children().eq(e);
            var t = l[s[e].identifier];
            y(t), f.addClass("avpw_selected_pack"), f.css({left: 0}), b(!0)
        }, u.getCurrentPackId = function() {
            return "undefined" != typeof _ ? _.identifier : null
        }, u.destroy = function() {
            o && o.shutdown(), i && i.shutdown(), avpw$("#avpw_tool_options_container").find("#avpw_all_effects").show(), avpw$("#avpw_tool_options_container").find("#avpw_up_one_level").hide(), _ = null, r.undelegate(".avpw_pack_icon", "click"), r.undelegate(".avpw_selected_pack", "click"), a.off("layout:resize", u.build), avpw$("#avpw_tool_options_container").undelegate("#avpw_up_one_level", "click")
        }, a.on("layout:resize", u.build), u
    }, e.PacksAndItems = function(n) {
        var a = n.browser, i = n.packBrowser, o = n.pager, r = n.packPager, s = n.buildPacksHTML, l = n.buildPackItemsHTML, c = n.currentPack, p = e.support.getVendorProperty("transition"), u = this, d = function(e, n) {
            var a = "avpw_back_button_hidden", i = 100, o = avpw$("#avpw_all_effects"), r = avpw$("#avpw_up_one_level"), s = function(s) {
                e ? (r.text(e), n && r.bind("click", n), o.hide(), s ? r.show() : (r.addClass(a), r.show(), t.setTimeout(function() {
                    r.removeClass(a)
                }, i))) : (r.unbind("click"), r.hide(), s ? o.show() : (o.addClass(a), o.show(), t.setTimeout(function() {
                    o.removeClass(a)
                }, i)))
            };
            o.is(":visible") ? (o.addClass(a), t.setTimeout(function() {
                s(), o.removeClass("hidden")
            }, i)) : r.is(":visible") ? (r.addClass(a), t.setTimeout(function() {
                s(), r.removeClass(a)
            }, i)) : s(!0)
        }, v = function(e) {
            c !== e && (c = e || c)
        }, f = function(n) {
            if (i.find(".avpw_pack_icon_selected").removeClass("avpw_pack_icon_selected"), avpw$(n).addClass("avpw_pack_icon_selected"), p) {
                var o = e.support.getVendorProperty("transform"), s = e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "getDims"), c = s.INNER_BROWSER_WIDTH + "px";
                a[0].style[o] = "translateX(" + c + ")", a.addClass("avpw_transition_to_pack_contents"), a.show(), t.setTimeout(function() {
                    var o = e.support.getVendorProperty("transform");
                    n.style[o] = "translateX(" + c + ")", avpw$(n).removeClass("avpw_pack_icon_selected"), t.setTimeout(function() {
                        i.hide(), r && (r.shutdown(), r = null), l && l(), t.setTimeout(function() {
                            a.removeClass("avpw_transition_to_pack_contents")
                        }, 200)
                    }, 600)
                }, 100)
            } else
                i.hide(), r && (r.shutdown(), r = null), l && l(), a.show()
        }, _ = function() {
            if (p) {
                var n = e.support.getVendorProperty("transform"), r = e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "getDims"), l = r.INNER_BROWSER_WIDTH + "px";
                a[0].style[n] = "translateX(" + l + ")", t.setTimeout(function() {
                    o && (o.shutdown(), o = null), d(), s && s(), i.show()
                }, 400)
            } else
                o && (o.shutdown(), o = null), d(), s && s(), i.show()
        }, h = function() {
            return u.onBackButtonClicked(), _(), !1
        };
        return u.onPackClicked = function(t) {
            var n = t.currentTarget, a = avpw$(n).data("pack");
            return v(a), d(e.getLocalizedString("Back"), h), f(n), !1
        }, u.onPackInfoClicked = function(t) {
            var n = t.currentTarget;
            _packOfInterest = n;
            var a = avpw$(n).data("pack");
            return e.controlsWidgetInstance.assetManager.showAssetPurchaseView(a, u.onPurchaseButtonClicked), !1
        }, u.onBackButtonClicked = function() {
        }, u.onPurchaseButtonClicked = function() {
        }, u.getCurrentPack = function() {
            return c
        }, u.setCurrentPack = function(e) {
            v(e)
        }, u.getPackOfInterest = function() {
            return _packOfInterest
        }, u.updateCancelButton = d, u
    }, function(a) {
        a.fn.slider = function(i) {
            i = e.util.extend({max: 100,min: 0,value: 50}, i);
            var o, r = 0, s = r, l = 0, c = null, p = null, u = !1, d = null, v = this, f = null, _ = 0, h = null, w = function(e) {
                var t = l !== r ? (e - r) / (l - r) : 0;
                return t
            }, g = function(e) {
                var t = r + e * (l - r);
                return parseFloat(t.toFixed(5))
            }, m = function(e) {
                var t;
                e ? (o = o || v.outerWidth() || 1, t = e - v.offset().left, t /= o, t = t > 1 ? 1 : t, t = 0 > t ? 0 : t, s = g(t)) : t = w(s), p.length && p.css(u ? t > .5 ? {left: "50%",width: 100 * (t - .5) + "%"} : {left: 100 * t + "%",width: 100 * (.5 - t) + "%"} : {left: "0",width: 100 * t + "%"}), c.css("left", 100 * t + "%")
            }, b = function(e, t) {
                switch (e) {
                    case "value":
                        if (arguments.length < 1)
                            return s;
                        s = t, m();
                        break;
                    case "destroy":
                        E()
                }
            }, y = function(e) {
                v.trigger("slidestart", [e]), _ && (h = null, f = t.setInterval(function() {
                    h && (v.trigger("slide", [h]), h = null)
                }, _))
            }, C = function(e) {
                v.trigger("slidechange", [e]), _ && t.clearInterval(f)
            }, x = function() {
                return a(n).bind("mousemove", I).bind("mouseup blur", T), y({value: s}), !1
            }, I = function(t) {
                var n = e.util.getTouch(t);
                m(n ? n.pageX : t.pageX);
                var a = {value: s};
                _ ? h = a : v.trigger("slide", [a])
            }, T = function() {
                return a(n).unbind("mousemove", I).unbind("mouseup blur", T), C({value: s}), !1
            }, k = function() {
                return c.parent().bind("touchmove", I).bind("touchend", S), y({value: s}), !1
            }, S = function() {
                return c.parent().unbind("touchmove", I).unbind("touchend", S), C({value: s}), !1
            }, D = function(t) {
                var n = e.util.getTouch(t);
                m(n ? n.pageX : t.pageX);
                var a = {value: s};
                v.trigger("slidechange", [a])
            }, W = function() {
                s = i.value, r = i.min, l = i.max, p = v.find(".avpw_slider_goo").eq(0), u = !!v.find(".avpw_slider_divider").length, c = v.find("a").eq(0), d = v.parents(".avpw_isa_slider_container"), i.delay && (_ = i.delay), d.length && (d.bind("mousedown", x), _ ? d.bind("mousedown", D) : d.bind("click", D), a.support.touch && (d.bind("touchstart", k), _ && d.bind("touchstart", D))), a.support.touch && c.bind("touchstart", k), c.bind("mousedown", x)
            }, E = function() {
                c.unbind("mousedown mouseup blur touchstart"), d.length && (d.unbind("mousedown", D).unbind("mousedown", x).unbind("touchstart", D).unbind("touchstart", k).unbind("click", D), d = null), p = null, c = null, t.clearInterval(f), f = null, _ = 0, h = null
            };
            return W(), v.slider = b, v
        }
    }(avpw_jQuery), function(e) {
        e.fn.pressed = function(t) {
            var n = function() {
                var n = e(this);
                return n.addClass(t), n.bind("mouseup mouseout touchend", a), !0
            }, a = function() {
                var n = e(this);
                return n.removeClass(t), n.unbind("mouseup mouseout touchend", a), !0
            };
            return this.bind("mousedown touchstart", n), this
        }
    }(avpw_jQuery, t), function() {
        var e, n;
        !function() {
            for (var a = 0, i = ["webkit", "moz"], o = 0; o < i.length && !e; ++o)
                e = t[i[o] + "RequestAnimationFrame"], n = t[i[o] + "CancelAnimationFrame"] || t[i[o] + "CancelRequestAnimationFrame"];
            e || (e = function(e) {
                var n = (new Date).getTime(), i = Math.max(0, 16 - (n - a)), o = t.setTimeout(function() {
                    e(n + i)
                }, i);
                return a = n + i, o
            }), n || (n = function(e) {
                clearTimeout(e)
            })
        }(e, n)
    }(avpw_jQuery, t), e.ControlsWidget.prototype.layout.aviary = function() {
        var i, o, r, s, l, c, p, u, d, v, f = "fullscreen", _ = !1, h = {TITLE_HEIGHT: 30,HEADER_HEIGHT: 108,FOOTER_HEIGHT: 35,MINIMUM_WIDGET_HEIGHT: 396,MODE_ACTION_WIDTH: 119,BOOKEND_WIDTH: 48,INNER_BOOKEND_WIDTH: 40,CANVAS_MARGIN: 0,CANVAS_PADDING: 10,MINIMUM_WIDGET_WIDTH: 712,TOOL_ICON_WIDTH: 70,PRESET_ICON_WIDTH: 54,PRESET_CROP_ICON_WIDTH: 82,GENERIC_LEAD_IN_WIDTH: 10,BORDER_ICON_WIDTH: 85,STICKER_ICON_WIDTH: 80,STICKER_ROLL_WIDTH: 80,FILTER_IMAGE_WIDTH: 81,FILTER_CANISTER_WIDTH: 63,FILTER_LEAD_IN_WIDTH: 93,TEXT_ADD_TEXT_BUTTON_WIDTH: 121,CANVAS_HEIGHT: void 0,CANVAS_WIDTH: void 0,TOOLS_BROWSER_WIDTH: void 0,INNER_BROWSER_WIDTH: void 0,TOOL_CONTAINER_WIDTH: void 0}, w = {}, g = function() {
            var e = avpw$("#avpw_controls"), t = e.width(), n = e.height();
            (!t || t < h.MINIMUM_WIDGET_WIDTH) && (t = h.MINIMUM_WIDGET_WIDTH), (!n || n < h.MINIMUM_WIDGET_HEIGHT) && (n = h.MINIMUM_WIDGET_HEIGHT), h.CANVAS_HEIGHT = n - (h.TITLE_HEIGHT + h.HEADER_HEIGHT + h.FOOTER_HEIGHT), h.CANVAS_WIDTH = t - 2 * h.CANVAS_MARGIN, h.TOOL_CONTAINER_WIDTH = t - 2 * h.MODE_ACTION_WIDTH, h.TOOLS_BROWSER_WIDTH = t - (2 * h.BOOKEND_WIDTH + h.MODE_ACTION_WIDTH), h.INNER_BROWSER_WIDTH = h.TOOL_CONTAINER_WIDTH - (2 * h.INNER_BOOKEND_WIDTH + 2 + h.GENERIC_LEAD_IN_WIDTH)
        }, m = function() {
            var t = w.getEmbedElement(), n = e.support.getVendorProperty("transform");
            n && (o = avpw$(e.template[e.launchData.layout].zoomControls()), t.append(o), o.delegate("#avpw_zoom_button", "mousedown", function() {
                return o.hasClass("avpw_zoom_open") ? w.disableZoomMode() : w.enableZoomMode(), !1
            }), r = avpw$(e.template[e.launchData.layout].zoomModeOverlay()), avpw$("#avpw_tool_content_wrapper").append(r).bind("click", w.disableZoomMode), r.bind("click", w.disableZoomMode), w.showZoomButton()), t.append(e.template[e.launchData.layout].canvasControls())
        }, b = function(t) {
            var n;
            t ? (n = e.util.getUserFriendlyToolName(t), n = e.getLocalizedString(n), avpw$("#avpw_breadcrumb_header").hide(), avpw$("#avpw_breadcrumb_toolname").html(n), e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [!1, !1]), _ = !0) : (avpw$("#avpw_breadcrumb_header").show(), avpw$("#avpw_breadcrumb_toolname").html(""), _ = !1, e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [e.paintWidgetInstance.actions.canUndo(), e.paintWidgetInstance.actions.canRedo()]))
        }, y = function(e) {
            e && w.getCanvasControlsElement().css({top: e.y0 + h.CANVAS_PADDING + "px",left: e.x0 + h.CANVAS_PADDING + "px",width: e.w + "px",height: e.h + "px"})
        };
        return w.getDims = function() {
            return h
        }, w.onClose = function(t) {
            var n = e.launchData.closeDelay;
            "fullscreen" === f && (t || 0 === n ? avpw$("#avpw_fullscreen_bg").hide() : avpw$("#avpw_fullscreen_bg").fadeOut(n)), e.launchData.noCloseButton || (t || 0 === n ? avpw$("#avpw_control_cancel_pane").hide() : avpw$("#avpw_control_cancel_pane").fadeOut(n))
        }, w.onShutdown = function() {
            a.off("layout:resize", g), a.off("layout:resize", w.scaleCanvas), a.off("tool:open", b), a.off("tool:close", b), i && (i.shutdown(), i = null), o && (o.undelegate().detach().remove(), o = null), r && (r.unbind().detach().remove(), r = null), avpw$("#avpw_tool_content_wrapper").unbind("click", w.disableZoomMode);
            var e = w.getEmbedElement();
            avpw$(e).children().remove(), avpw$(e).hide(), c = p = void 0, u = d = void 0, v = void 0
        }, w.getToolsPerPage = function() {
            return h.TOOLS_BROWSER_WIDTH / h.TOOL_ICON_WIDTH | 0
        }, w.getPresetsPerPage = function() {
            return h.INNER_BROWSER_WIDTH / h.PRESET_ICON_WIDTH | 0
        }, w.getCropPresetsPerPage = function() {
            return h.INNER_BROWSER_WIDTH / h.PRESET_CROP_ICON_WIDTH | 0
        }, w.getBordersPerPage = function() {
            return h.INNER_BROWSER_WIDTH / h.BORDER_ICON_WIDTH | 0
        }, w.getStickersPerPage = function() {
            return h.INNER_BROWSER_WIDTH / h.STICKER_ICON_WIDTH | 0
        }, w.getStickerPacksPerPage = function() {
            return h.INNER_BROWSER_WIDTH / h.STICKER_ROLL_WIDTH | 0
        }, w.getFiltersPerPage = function() {
            return h.INNER_BROWSER_WIDTH / h.FILTER_IMAGE_WIDTH | 0
        }, w.getFilterPacksPerPage = function() {
            return h.INNER_BROWSER_WIDTH / h.FILTER_CANISTER_WIDTH | 0
        }, w.getEmbedElement = function() {
            return avpw$("#avpw_canvas_embed")
        }, w.getCanvasControlsElement = function() {
            return v = v || avpw$("#avpw_canvas_controls_layer")
        }, w.getMaxDims = function() {
            return {width: h.CANVAS_WIDTH - 2 * h.CANVAS_PADDING,height: h.CANVAS_HEIGHT - 2 * h.CANVAS_PADDING}
        }, w.getScaledImageDims = function(t) {
            var n, a, i, o = w.getMaxDims();
            return t && (n = e.util.getScaledDims(t.width, t.height, o.width, o.height), a = n.width, i = n.height, avpw$(t).css({width: a + "px",height: i + "px",marginLeft: "-" + (a / 2 | 0) + "px",marginTop: "-" + (i / 2 | 0) + "px"})), n || o
        }, w.getScaledImageDims_Flash = function(t) {
            var n = h.CANVAS_HEIGHT < h.CANVAS_WIDTH ? h.CANVAS_HEIGHT : h.CANVAS_WIDTH;
            n -= 2 * h.CANVAS_PADDING;
            var a = e.util.getScaledDims(t.width, t.height, n);
            return a
        }, w.placeControls = function(t) {
            var n = e.launchData.closeDelay;
            f = t ? "embed" : "fullscreen";
            var a = avpw$("#avpw_holder");
            a.addClass("avpw_is_" + f), "embed" === f ? (a.detach(), t = e.util.getImageElem(t), a.appendTo(t)) : 0 === n ? avpw$("#avpw_fullscreen_bg").show() : avpw$("#avpw_fullscreen_bg").fadeIn(n), g(), e.launchData.noCloseButton || (0 === n ? avpw$("#avpw_control_cancel_pane").show() : avpw$("#avpw_control_cancel_pane").fadeIn(n)), avpw$("#avpw_up_one_level").hide(), m()
        }, w.showCanvasControlsElement = function() {
            w.getCanvasControlsElement().addClass("avpw_canvas_controls_ready")
        }, w.hideCanvasControlsElement = function() {
            w.getCanvasControlsElement().removeClass("avpw_canvas_controls_ready")
        }, w.placeControls_Flash = w.placeControls, w.launchStage2_Flash = function() {
        }, w.disableControls = function() {
            e.featherUseFlash && e.FlashAPI.hideCanvas();
            var t = avpw$("#avpw_messaging");
            t.show(), e.util.nextFrame(function() {
                t.addClass("avpw_messaging_confirmation"), avpw$("#avpw_tool_content_wrapper").addClass("avpw_disabled_outer_container")
            })
        }, w.enableControls = function(n) {
            e.featherUseFlash && e.FlashAPI.showCanvas();
            var a = avpw$("#avpw_messaging");
            a.removeClass("avpw_messaging_confirmation"), avpw$("#avpw_tool_content_wrapper").removeClass("avpw_disabled_outer_container"), n ? a.hide() : t.setTimeout(function() {
                a.hide()
            }, 400)
        }, w.scaleCanvas = function(t, n) {
            var a = w.getMaxDims();
            t = t || a.width, n = n || a.height, e.featherUseFlash || e.controlsWidgetInstance.canvasUI && e.controlsWidgetInstance.canvasUI.viewport.fitLayout(t, n), w.setZoom()
        }, w.updateImageScaledIndicator = function() {
            var t;
            e.paintWidgetInstance ? e.controlsWidgetInstance.imageSizeTracker.isDisplayingImageSize(e.launchData) && (t = e.paintWidgetInstance.getScaledSize(), avpw$("#avpw_size_indicator").html((t.hiresWidth || t.width) + " x " + (t.hiresHeight || t.height))) : avpw$("#avpw_size_indicator").html("")
        }, w.setZoom = function() {
            var t, a = e.support.getVendorProperty("transform");
            a && (t = e.controlsWidgetInstance.canvasUI ? 1 / e.controlsWidgetInstance.canvasUI.viewport.getRatio() : 1, i && (i.shutdown(), i = null), i = new e.controlsWidgetInstance.Slider({element: n.getElementById("avpw_zoom_slider"),min: t,max: 1.5,defaultValue: t,onslide: function(t, n) {
                e.controlsWidgetInstance.canvasUI.viewport.zoomByRatio(n.value)
            },onchange: function(t, n) {
                e.controlsWidgetInstance.canvasUI.viewport.zoomByRatio(n.value)
            }}), i.reset(), i.addListeners())
        }, w.enableZoomMode = function() {
            var t = e.controlsWidgetInstance;
            if (o) {
                o.addClass("avpw_zoom_open"), t.canvasUI && t.canvasUI.enablePan();
                var n = t.toolManager.notify(t.toolManager.getActiveTool(), "onEnableZoomMode");
                n || r.addClass("avpw_zoom_open")
            }
        }, w.disableZoomMode = function() {
            var t = e.controlsWidgetInstance;
            o && (o.removeClass("avpw_zoom_open"), t.toolManager.notify(t.toolManager.getActiveTool(), "onDisableZoomMode"), r.removeClass("avpw_zoom_open"))
        }, w.showZoomButton = function() {
            o && (l && (t.clearTimeout(l), l = null), o.show(), s = t.setTimeout(function() {
                o.addClass("avpw_zoom_visible")
            }, 100))
        }, w.hideZoomButton = function() {
            o && (s && (t.clearTimeout(s), s = null), o.removeClass("avpw_zoom_visible"), l = t.setTimeout(function() {
                o.hide()
            }, 200))
        }, w.updateUndoRedo = function(e, t) {
            _ || (c = c || avpw$("#avpw_history_undo"), p = p || avpw$("#avpw_history_redo"), u = u || avpw$("#avpw_history_undo_blocker"), d = d || avpw$("#avpw_history_redo_blocker"), e ? (c.removeClass("avpw_history_disabled"), u.hide()) : (c.addClass("avpw_history_disabled"), u.show()), t ? (p.removeClass("avpw_history_disabled"), d.hide()) : (p.addClass("avpw_history_disabled"), d.show()))
        }, w.showView = function(e, t) {
            var n;
            return function(a) {
                var i = 200, o = t.getElementById("avpw_tool_main_container"), r = t.getElementById("avpw_tool_options_container"), s = avpw$("#avpw_controls");
                switch (n && (e.clearTimeout(n), n = void 0), a) {
                    case "editpanel":
                        s.removeClass("avpw_main_mode"), n = e.setTimeout(function() {
                            o.style.display = "none", r.style.display = "block", s.addClass("avpw_editpanel_mode")
                        }, i);
                        break;
                    case "main":
                        s.removeClass("avpw_editpanel_mode"), n = e.setTimeout(function() {
                            r.style.display = "none", o.style.display = "block", s.addClass("avpw_main_mode")
                        }, i)
                }
            }
        }(t, n), w.bindEvents = function() {
            a.on("layout:resize", g), a.on("layout:resize", w.scaleCanvas), a.on("canvas:resize", y), a.on("tool:open", b), a.on("tool:close", b)
        }, w.bindEvents(), w
    }(), e.ControlsWidget.prototype.bindControls = function() {
        var n = this;
        avpw$(t).bind("resize", this.windowResized), avpw$("#avpw_controls").bind("mousedown", function(e) {
            var t = e.target.tagName.toLowerCase();
            "input" != t && "textarea" != t && "object" != t && e.preventDefault()
        }), e.launchData.debug && avpw$("#avpw_logo").click(function() {
            return !1
        }.AV_bindInst(this)), avpw$(".avpw_button").pressed("avpw_button_down"), avpw$(".avpw_tool_icon").pressed("avpw_tool_icon_down"), avpw$(".avpw_checkmark_button .avpw_inset_button").pressed("avpw_inset_button_down"), i(avpw$("#avpw_save_button", "#avpw_tool_main_container"), this.onSaveButtonClicked.AV_bindInst(this)), avpw$("#avpw_control_cancel_pane_inner").click(this.cancel.AV_bindInst(this)), avpw$("#avpw_control_main_scrolling_region").delegate(".avpw_tool_icon", "click", function() {
            return a.trigger("tool:open", avpw$(this).data("toolname"), this), !1
        }), avpw$("#avpw_resume_editing").click(function() {
            return n.messager.hide("avpw_aviary_quitareyousure"), !1
        }), avpw$("#avpw_close_feedbackok").click(function() {
            return a.trigger("modal:hide", "avpw_aviary_aviaryfeedback"), !1
        }), avpw$("#avpw_resume_aftersave").click(function() {
            return n.messager.hide("avpw_aviary_beensaved"), !1
        }), avpw$("#avpw_close_aftersave").click(function() {
            return n.cancel.AV_bindInst(n)(), n.messager.hide("avpw_aviary_beensaved"), !1
        });
        var o = function() {
            return n.toolsPager.changePage(!0), a.trigger("tool:close"), !1
        };
        i(avpw$("#avpw_all_effects", "#avpw_tool_options_container"), function() {
            return n.paintWidget.actions.isACheckpoint() || n.paintWidget.actions.undoToCheckpoint(), n.paintWidget.actions.truncate(), a.trigger("tool:cancel"), o()
        });
        var r = function() {
            n.paintWidget.actions.setCheckpoint(!0), n.paintWidget.actions.truncate(), o()
        };
        a.on("tool:commitDone", r), i(avpw$("#avpw_apply_container"), function() {
            return e.util.nextFrame(function() {
                a.trigger("tool:commit")
            }), !1
        }), avpw$("#avpw_close_save").click(function() {
            return n.messager.hide("avpw_aviary_quitareyousure", n.onSaveButtonClicked.AV_bindInst(n)), !1
        }), avpw$("#avpw_close_nosave").click(function() {
            return e.paintWidgetCloser(), !1
        }), avpw$("#avpw_close_unsupported").click(function() {
            return e.paintWidgetCloser(), !1
        }), avpw$("#avpw_close_forcecrop_close").click(function() {
            return e.paintWidgetCloser(), !1
        }), avpw$("#avpw_history_undo").click(function() {
            a.trigger("tool:undo")
        }), avpw$("#avpw_history_redo").click(function() {
            a.trigger("tool:redo")
        }), avpw$(".avpw_prev").bind("mousedown", function() {
            avpw$(this).addClass("avpw_prev_down")
        }).bind("mouseup mouseout", function() {
            avpw$(this).removeClass("avpw_prev_down")
        }), avpw$(".avpw_next").bind("mousedown", function() {
            avpw$(this).addClass("avpw_next_down")
        }).bind("mouseup mouseout", function() {
            avpw$(this).removeClass("avpw_next_down")
        })
    }, e.ControlsWidget.prototype.unbindControls = function() {
        avpw$(t).unbind("resize", this.windowResized), avpw$("#avpw_controls").unbind("mousedown"), e.launchData.debug && avpw$("#avpw_logo").unbind(), avpw$(".avpw_button").unbind("mousedown"), avpw$(".avpw_tool_icon").unbind("mousedown"), avpw$(".avpw_checkmark_button .avpw_inset_button").unbind("mousedown"), avpw$("#avpw_save_button").unbind("click"), avpw$("#avpw_control_cancel_pane_inner").unbind("click"), avpw$("#avpw_control_main_scrolling_region").undelegate(".avpw_tool_icon", "click"), avpw$("#avpw_resume_editing").unbind(), avpw$("#avpw_tool_options_container").undelegate("#avpw_all_effects", "click"), a.off("tool:commitDone"), avpw$("#avpw_changes_resume").unbind("click"), avpw$("#avpw_changes_discard").unbind("click"), avpw$("#avpw_close_nosave").unbind(), avpw$("#avpw_close_save").unbind(), avpw$("#avpw_close_unsupported").unbind(), avpw$("#avpw_close_forcecrop_close").unbind(), avpw$("#avpw_resume_aftersave").unbind("click"), avpw$("#avpw_close_aftersave").unbind("click"), avpw$("#avpw_history_undo").unbind("click"), avpw$("#avpw_history_redo").unbind("click"), avpw$(".avpw_prev").unbind("mousedown").unbind("mouseup"), avpw$(".avpw_next").unbind("mousedown").unbind("mouseup"), this.brushPreview && this.brushPreview.destroy()
    }, e.ControlsWidget.prototype.brushPreview = function(t) {
        var n, a, i, o, r = 100, s = 1e3, l = 400, c = {}, p = function() {
            n = avpw$(e.template[e.launchData.layout].brushPreviewOverlay()), a = n.find(".avpw_brush_preview_display"), avpw$("#avpw_controls").append(n)
        };
        return c.show = function(c, u) {
            e.featherUseFlash || (n && n.length || p(), u ? e.controlsWidgetInstance._drawUICircle(a, c, u, u) : e.controlsWidgetInstance._drawUICircle(a, c, "#fff"), n.removeClass("avpw_brush_preview_visible"), n.removeClass("avpw_brush_preview_fadeout"), n.show(), t.clearTimeout(i), t.clearTimeout(o), e.util.nextFrame(function() {
                n.addClass("avpw_brush_preview_visible"), i = t.setTimeout(function() {
                    n.removeClass("avpw_brush_preview_visible"), n.addClass("avpw_brush_preview_fadeout")
                }, r + s), o = t.setTimeout(function() {
                    n.hide()
                }, r + s + l)
            }))
        }, c.destroy = function() {
            t.clearTimeout(i), t.clearTimeout(o), n && n.length && n.remove(), n = null, a = null, i = o = null
        }, c
    }(t), e.ControlsWidget.prototype.tool.brightness = function() {
        var t, a, i, o, r = e.toolDefaults.brightness.presets, s = !1, l = {}, c = function(n, a) {
            o = a.value;
            var i = o / 100;
            e.featherUseFlash && (i = .6 * i / 100 + 1), t.paintWidget.module.brightness.applyPreview(i, !0)
        };
        return l.init = function(o) {
            i = 0;
            var s = {element: n.getElementById("avpw_brightness_slider"),min: 100 * r[0],max: 100 * r[3],defaultValue: i,onchange: c};
            e.featherUseFlash || e.util.extend(s, {onslide: c,delay: 100}), t = o, a = new t.Slider(s)
        }, l.cancel = function() {
            s = !0
        }, l.panelWillOpen = function() {
            o = i
        }, l.panelDidOpen = function() {
            a.addListeners()
        }, l.panelWillClose = function() {
            a.removeListeners()
        }, l.panelDidClose = function() {
            s && (l.resetUI(), s = !1)
        }, l.onUndo = function(e) {
            e || l.resetUI(), t.paintWidget.module.brightness.resetBacking()
        }, l.onRedo = function(e) {
            !e && a && a.setValue(o)
        }, l.resetUI = function() {
            a.reset()
        }, l.commit = function() {
            t.paintWidget.module.brightness.commit()
        }, l.shutdown = function() {
            a && (a.shutdown(), a = void 0), o = i = void 0, t = null
        }, l
    }(), e.ControlsWidget.prototype.tool.colorsplash = function() {
        var t, i, o, r, s, l, c, p, u, d, v = (e.toolDefaults.colorsplash.presets, {}), f = null, _ = 18, h = 3, w = _, g = _ * h, m = "free", b = 0, y = 7, C = g + 2 * y, x = function() {
            p = n.createElement("div"), p.className = "avpw_colorsplash_brush", u = n.createElement("canvas"), C = g + 2 * y, u.width = 150, u.height = 150, p.appendChild(u), t.layoutNotify(e.launchData.openType, "getCanvasControlsElement").append(p), avpw$(u).css({marginTop: -(C / 2) + "px",marginLeft: -(C / 2) + "px"})
        }, I = function() {
            var e = t.paintWidget.canvas, n = avpw$(e).clone(), a = e.getContext("2d").getImageData(0, 0, e.width, e.height);
            n[0].getContext("2d").putImageData(a, 0, 0), n.css({"z-index": 1,position: "absolute"}), avpw$(e).after(n), avpw$(n).fadeOut(800, function() {
                avpw$(this).remove()
            })
        }, T = function() {
            avpw$(p).fadeOut(function() {
                avpw$(this).remove()
            })
        }, k = function(e) {
            if (u) {
                u.width = u.width;
                var t = u.getContext("2d"), n = Math.round(g / 2);
                t.shadowColor = "white", t.shadowOffsetX = 0, t.shadowOffsetY = 0, t.shadowBlur = 1, t.lineWidth = 5, t.strokeStyle = "rgba(" + e[0] + "," + e[1] + "," + e[2] + ",1)", t.beginPath(), t.arc(n + y, n + y, n - 2, Math.PI, 0, !1), t.stroke(), t.lineWidth = 2, t.strokeStyle = "white", t.beginPath(), t.arc(n + y, n + y, n + 2, 0, 2 * Math.PI, !1), t.stroke(), t.lineWidth = 2, t.strokeStyle = "white", t.beginPath(), t.arc(n + y, n + y, n - 5, 0, 2 * Math.PI, !1), t.stroke();
                var a = i ? .35 : .7;
                t.shadowBlur = 0, t.lineWidth = 2, t.strokeStyle = "rgba(0,0,0," + a + ")", t.beginPath(), t.arc(n + y, n + y, n - 4, 0, 2 * Math.PI, !1), t.stroke(), t.lineWidth = 2, t.strokeStyle = "rgba(0,0,0," + a + ")", t.beginPath(), t.arc(n + y, n + y, n + 1, 0, 2 * Math.PI, !1), t.stroke()
            }
        }, S = function() {
            avpw$(this).addClass("avpw_inset_button_down").siblings().removeClass("avpw_inset_button_down");
            var e = avpw$(this).data("size");
            g = e * h, w = e, b = _ > w ? 5 : 0, avpw$(u).css({marginTop: -((g + 2 * y) / 2) + "px",marginLeft: -((g + 2 * y) / 2) + "px"}), C = g + 2 * y, t.brushPreview.show(1.3 * w), k([0, 0, 0, 0])
        }, D = function() {
            avpw$(".avpw_colorsplash_freebrush,.avpw_colorsplash_smartbrush,.avpw_colorsplash_eraser").not(this).removeClass("avpw_inset_button_down"), avpw$(this).addClass("avpw_inset_button_down");
            var e;
            avpw$(this).hasClass("avpw_colorsplash_freebrush") ? (m = "free", a.trigger("usage:interact", "colorsplash", "FreeBrushClicked")) : avpw$(this).hasClass("avpw_colorsplash_smartbrush") ? (m = "smart", a.trigger("usage:interact", "colorsplash", "SmartBrushClicked")) : avpw$(this).hasClass("avpw_colorsplash_eraser") && (m = "erase", a.trigger("usage:interact", "colorsplash", "EraserBrushClicked")), e = t.paintWidget.module.colorsplash.getBrushSettingsForMode(m), s = e.IS_FREE_HAND, l = e.SIGMA_COLOR, c = e.REVERSE
        };
        v.init = function(e) {
            t = e;
            var n = avpw$("#avpw_controlpanel_colorsplash");
            n.delegate(".avpw_isa_preset_brush", "mousedown", S), n.delegate(".avpw_colorsplash_freebrush,.avpw_colorsplash_smartbrush,.avpw_colorsplash_eraser", "mousedown", D)
        }, v.cancel = function() {
            t.paintWidget.module.colorsplash.reset()
        }, v.panelWillOpen = function() {
            t.canvasUI && (t.canvasUI.subscribe(v), t.canvasUI.setMouseCursor("none"), avpw$(".avpw_canvas_background").css("cursor", "none")), i = !1
        }, v.panelDidOpen = function() {
            avpw$(".avpw_colorsplash_smartbrush,.avpw_colorsplash_eraser").removeClass("avpw_inset_button_down"), avpw$(".avpw_colorsplash_freebrush").addClass("avpw_inset_button_down");
            var n;
            m = "free", n = t.paintWidget.module.colorsplash.getBrushSettingsForMode(m), s = n.IS_FREE_HAND, l = n.SIGMA_COLOR, c = n.REVERSE, avpw$("#avpw_zoom_container").css("cursor", "default"), t.layoutNotify(e.launchData.openType, "showCanvasControlsElement"), x(), I(), t.paintWidget.module.colorsplash.initImage(), avpw$(p).hide().fadeIn(), avpw$("#avpw_controlpanel_colorsplash").find(".avpw_isa_preset_brush").eq(2).trigger("mousedown")
        }, v.panelWillClose = function() {
            t.canvasUI && t.canvasUI.unsubscribe(v), T(), avpw$(".avpw_canvas_background").css("cursor", "default"), t.layoutNotify(e.launchData.openType, "hideCanvasControlsElement")
        }, v.mouseDownEvent = function(n, a, s) {
            if (s) {
                i = !0;
                var p = e.controlsWidgetInstance.canvasUI.viewport.getRatio(), u = n.canvasControlsX * p + .5 | 0, v = n.canvasControlsY * p + .5 | 0, f = w * p;
                if (o = u, r = v, !(0 > u || u > t.paintWidget.width - 1 || 0 > v || v > t.paintWidget.height - 1 || 0 > o || o > t.paintWidget.width - 1 || 0 > r || r > t.paintWidget.height - 1)) {
                    d = [], t.paintWidget.module.colorsplash.applySplash(u, v, o, r, c, f, l, 1), d.push([u, v]);
                    var _ = u, h = v, g = u, m = v, b = 1.5 * f;
                    return _ -= b, h -= b, g += b, m += b, t.paintWidget.module.colorsplash.preview(_, h, g, m), !1
                }
            }
        }, v.mouseMoveEvent = function(n) {
            var a = e.controlsWidgetInstance.canvasUI.viewport.getRatio(), u = n.canvasControlsX * a + .5 | 0, v = n.canvasControlsY * a + .5 | 0, _ = w * a;
            if (p && (avpw$(p).css({top: n.canvasControlsY + "px",left: n.canvasControlsX + "px"}), i)) {
                if (s && (o = u, r = v), null != f) {
                    var h = Math.sqrt(Math.pow(f.x - u, 2) + Math.pow(f.y - v, 2));
                    if (.6 * w > h)
                        return;
                    for (var g, m, b = E([[f.x, f.y], [u, v]]), y = u, C = v, x = u, I = v, T = 1.5 * _, S = 0; S < b.length; S++)
                        g = b[S][0] + .5 | 0, m = b[S][1] + .5 | 0, y > g && (y = g), g > x && (x = g), C > m && (C = m), m > I && (I = m), t.paintWidget.module.colorsplash.applySplash(g, m, o, r, c, _, l, 1), d.push([g, m]);
                    y -= T, C -= T, x += T, I += T, t.paintWidget.module.colorsplash.preview(y, C, x, I)
                }
                f = {x: u,y: v}
            }
            k(t.paintWidget.module.colorsplash.getColorAtPosition(u, v))
        }, v.mouseUpEvent = function(n) {
            var a = e.controlsWidgetInstance.canvasUI.viewport.getRatio(), o = n.canvasControlsX * a, r = n.canvasControlsY * a;
            k(t.paintWidget.module.colorsplash.getColorAtPosition(o, r));
            var s = w * a;
            if (i) {
                var l = {radius: s,brushmode: m,pointlist: d};
                t.paintWidget.module.colorsplash.recordStroke(l), i = !1
            }
            return k(t.paintWidget.module.colorsplash.getColorAtPosition(o, r)), f = null, !1
        }, v.mouseOutEvent = function() {
            return !1
        };
        var W = function(e, t, n, a, i, o, r) {
            var s = Math.floor(.2 * g), l = (a - t) * (a - t) + (i - n) * (i - n);
            if (s * s > l)
                return null;
            var c, p, u, d, v, f;
            void 0 !== o ? (c = (o + t) / 2, p = (o + a) / 2, u = (r + n) / 2, d = (r + i) / 2, v = (c + p) / 2, f = (u + d) / 2) : (v = (t + a) / 2, f = (n + i) / 2), W(e, t, n, v, f, c, u), e.push([0 | v, 0 | f]), W(e, v, f, a, i, p, d)
        }, E = function(e) {
            var t, n = 0, a = [];
            for (n = 0; n < e.length - 1; ++n) {
                var i = e[n], o = e[n + 1], r = [(i[0] + o[0]) / 2 | 0, (i[1] + o[1]) / 2 | 0];
                0 === n ? W(a, i[0], i[1], r[0], r[1]) : W(a, t[0], t[1], r[0], r[1], i[0], i[1]), t = r, a.push(r), n === e.length - 2 && (W(a, r[0], r[1], o[0], o[1]), a.push(o))
            }
            return a
        };
        return v.onEnableZoomMode = function() {
            return t.canvasUI && (t.canvasUI.unsubscribe(v), avpw$(p).fadeOut(), avpw$(".avpw_canvas_background").css("cursor", "default")), !1
        }, v.onDisableZoomMode = function() {
            t.canvasUI && (t.canvasUI.subscribe(v), avpw$(p).fadeIn(), avpw$(".avpw_canvas_background").css("cursor", "none"))
        }, v.commit = function() {
            t.paintWidget.module.colorsplash.commit()
        }, v.shutdown = function() {
            avpw$("#avpw_controlpanel_colorsplash").undelegate(), T(), t = null
        }, v.onUndoComplete = function(e) {
            return e && e.global ? (t.paintWidget.module.colorsplash.resetImageData(), !1) : void 0
        }, v.onRedoComplete = function(e) {
            return e && e.global ? (t.paintWidget.module.colorsplash.resetImageData(), !1) : void 0
        }, v
    }(), e.ControlsWidget.prototype.tool.contrast = function() {
        var t, a, i, o, r = e.toolDefaults.contrast.presets, s = !1, l = {}, c = function(n, a) {
            o = a.value;
            var i = o / 100;
            e.featherUseFlash && (i = .6 * i / 100 + 1), t.paintWidget.module.contrast.applyPreview(i, !0)
        };
        return l.init = function(o) {
            i = 0;
            var s = {element: n.getElementById("avpw_contrast_slider"),min: 100 * r[0],max: 100 * r[3],defaultValue: i,onchange: c};
            e.featherUseFlash || e.util.extend(s, {onslide: c,delay: 100}), t = o, a = new t.Slider(s)
        }, l.cancel = function() {
            s = !0
        }, l.panelWillOpen = function() {
            o = i
        }, l.panelDidOpen = function() {
            a.addListeners()
        }, l.panelWillClose = function() {
            a.removeListeners()
        }, l.panelDidClose = function() {
            s && (l.resetUI(), s = !1)
        }, l.onUndo = function(e) {
            e || l.resetUI(), t.paintWidget.module.contrast.resetBacking()
        }, l.onRedo = function(e) {
            !e && a && a.setValue(o)
        }, l.resetUI = function() {
            a.reset()
        }, l.commit = function() {
            t.paintWidget.module.contrast.commit()
        }, l.shutdown = function() {
            a && (a.shutdown(), a = void 0), t = null
        }, l
    }(), e.ControlsWidget.prototype.tool.crop = function() {
        var t, n, i, o, r, s, l, c = null, p = !1, u = {}, d = !1, v = function(t) {
            var a = n[t];
            return a ? "Custom" === a.label ? (d = !0, "") : (a.label = e.getLocalizedString(a.label), e.template[e.launchData.layout].cropPreset(a)) : ""
        }, f = function(e) {
            return e.hasClass("avpw_preset_icon_active")
        }, _ = function(e) {
            e.siblings().removeClass("avpw_preset_icon_active"), e.siblings().removeClass("avpw_crop_preset_flipped"), e.addClass("avpw_preset_icon_active")
        }, h = function() {
            t.paintWidget.module.crop.crop(l.crop()), c && (t.paintWidget.setMode("resize"), t.paintWidget.module.resize.resize(c.width, c.height, !0), t.paintWidget.setMode("crop"))
        }, w = function(e) {
            avpw$("#avpw_crop_presets_scroll_region").toggleClass("avpw_crop_all_flipped"), e.parent().children().not(".avpw_preset_icon_disabled").each(function(e, t) {
                if (!avpw$(t).hasClass(".avpw_crop_custom_control")) {
                    var a = n[e];
                    if (a) {
                        var i, o, r, s, l, c = a.label, p = a.labeled, u = avpw$(t).find(".avpw_label"), d = u.html(), v = a.resize ? "x" : ":";
                        p || (d === c ? (i = c.toLowerCase().indexOf(v), -1 != i && (o = c.substr(0, i), r = c.substr(i + 1), s = parseInt(o, 10), l = parseInt(r, 10), d = l + (c.charAt(i) || v) + s)) : d = c, u.html(d), a.flipped = !a.flipped)
                    }
                }
            })
        }, g = !1, m = function() {
            var a, i, o, r = avpw$(this), p = e.util.findItemByKeyValueFromArray("label", r.data("crop"), n);
            return r.hasClass("avpw_crop_custom_control") ? void y.enableMode(!0) : (y.enableMode(!1), e.util.nextFrame(function() {
                c = null, p && (p.labeled || p.strict || !f(r) || w(r), p.flipped ? (r.addClass("avpw_crop_preset_flipped"), i = p.height, o = p.width) : (r.removeClass("avpw_crop_preset_flipped"), i = p.width, o = p.height), p.resize ? (c = {width: i,height: o}, a = t.paintWidget.a2c(i, o, !0), y.enableTooltip(!0), l.setInitialSelectionTo(a.width, a.height), y.enableTooltip(!1)) : i && o && (y.enableTooltip(!0), l.setInitialSelectionByRatio(i / o)), l.forceAspect(p.constrain), g = p.constrain, s = p.label), _(r)
            }), !1)
        }, b = function() {
            r && r.shutdown(), n = t.populateCropPresets(i);
            var a = t.layoutNotify(e.launchData.openType, "getDims"), o = a.PRESET_CROP_ICON_WIDTH, s = t.layoutNotify(e.launchData.openType, "getCropPresetsPerPage"), l = o * s, c = n.length + 1, p = avpw$("#avpw_crop_presets_scroll_region");
            p.css({width: (c + s) * o + "px"}), r = new e.Pager({leftArrow: avpw$("#avpw_crop_presets_lftArrow"),rightArrow: avpw$("#avpw_crop_presets_rghtArrow"),itemCount: c,itemsPerPage: s,pageWidth: l,itemBuilder: v,pageContainer: p}), r.changePage(), d && y.init(p)
        }, y = function() {
            var n, i, o, r, s, c, p, u, d, v, f = {}, h = !1, w = !1, m = !1, b = function(t) {
                return e.util.keyDownHandlerNumber.apply(this, [t, function(t) {
                    e.util.nextFrame(function() {
                        if ("" === t.currentTarget.value)
                            return "width" === t.data.currentProp ? n = o.width : i = o.height, C(!0), void S(n, i);
                        d = !0;
                        var e = parseInt(t.currentTarget.value);
                        "width" === t.data.currentProp ? e > o.width || 1 > e ? d = !1 : n = e : e > o.height || 1 > e ? d = !1 : i = e, d ? (h && a.on("tool:crop:change", S), C(!0), h && a.off("tool:crop:change", S), avpw$(t.currentTarget).removeClass("avpw_invalid_input")) : avpw$(t.currentTarget).addClass("avpw_invalid_input")
                    })
                }])
            }, y = !1, C = function(e, r) {
                e && (y = !0);
                var s, c = n || o.width, p = i || o.height;
                s = r ? {width: c,height: p} : t.paintWidget.a2c(c, p, !0), l.setInitialSelectionTo(s.width, s.height), l.forceAspect(h), g = h, y = !1, e || a.trigger("tool:crop:change", n, i, e), v && (v = {width: c,height: p})
            };
            f.resetInputs = function() {
            }, f.triggerValidation = function(e) {
                (!d || e) && (s.trigger("keydown"), c.trigger("keydown"))
            };
            var x = function(t) {
                r = avpw$(e.template[e.launchData.layout].cropCustomControl({})), t.prepend(r), s = t.find("#avpw_crop_custom_width"), c = t.find("#avpw_crop_custom_height"), p = t.find("#avpw_crop_custom_lock_dims"), u = t.find(".avpw_crop_lock_group").find("span"), h = !1, s.bind("keydown", {currentProp: "width"}, b).bind("focus", function() {
                    return f.enableMode(!0), !1
                }).bind("blur", function() {
                    f.resetInputs(), f.triggerValidation()
                }), c.bind("keydown", {currentProp: "height"}, b).bind("focus", function() {
                    return f.enableMode(!0), !1
                }).bind("blur", function() {
                    f.resetInputs(), f.triggerValidation()
                }), p.change(function() {
                    I(avpw$(this).is(":checked"))
                }), u.bind("click", function() {
                    p.click()
                })
            }, I = function(e) {
                h = e, h ? (a.off("tool:crop:change", k), a.off("tool:crop:change", S), n || i ? s.hasClass("avpw_invalid_input") || c.hasClass("avpw_invalid_input") || (v = {width: n,height: i}) : v = {width: o.hiresWidth || o.width,height: o.hiresHeight || o.height}, C(!0, !1)) : (a.on("tool:crop:change", k), a.on("tool:crop:change", S), C(!0, !1), v = null)
            };
            f.getFixedSize = function() {
                if (!w)
                    return null;
                if (v)
                    return v;
                var e = n, a = i;
                if (m) {
                    var o = t.paintWidget.a2c(e, a, !0);
                    e = o.hiresWidth, a = o.hiresHeight
                }
                return {width: e,height: a}
            };
            var y, T, k = function(e, a) {
                if (!y) {
                    if (m) {
                        var o = t.paintWidget.c2a(e, a, !0);
                        e = o.hiresWidth, a = o.hiresHeight
                    }
                    s.val(e), n = e, c.val(a), i = a, d || f.triggerValidation()
                }
            }, S = function(a, o) {
                if (m)
                    if (w)
                        e.util.nextFrame(function() {
                            l.setToolTipValues(n, i)
                        });
                    else {
                        var r = t.paintWidget.c2a(a, o, !1);
                        l.setToolTipValues(Math.floor(r.hiresWidth), Math.floor(r.hiresHeight))
                    }
                else
                    l.setToolTipValues(a, o)
            };
            return f.init = function(e) {
                T = !1, x(e), a.on("tool:crop:change", S), v = null, n = i = void 0
            }, f.enableMode = function(e) {
                e !== w && (w = e, o = t.paintWidget.getScaledSize(), o.hiresWidth && o.hiresHeight ? (m = !0, o.width = o.hiresWidth, o.height = o.hiresHeight) : m = !1, w ? (_(r), C(!0), h || a.on("tool:crop:change", k), f.triggerValidation(!0)) : (a.off("tool:crop:change", k), a.off("tool:crop:change", S), a.on("tool:crop:change", S), s && c && (s.blur(), c.blur()), v = null))
            }, f.enableTooltip = function(e) {
                a.off("tool:crop:change", S), e && a.on("tool:crop:change", S)
            }, f.focusIn = function() {
                s.focus()
            }, f.unbindEvents = function() {
                s && c && (s.unbind(), c.unbind())
            }, f.shutdown = function() {
                f.enableMode(!1), a.off("tool:crop:change", k), a.off("tool:crop:change", S)
            }, f
        }(), C = function() {
            b(), l.setInitialSelection()
        };
        u.resetUI = function() {
            t.layoutNotify(e.launchData.openType, "scaleCanvas"), e.util.nextFrame(function() {
                var e;
                e = avpw$("#avpw_crop_presets_scroll_region").find(o ? '.avpw_isa_preset_crop[data-crop="' + o + '"]' : '.avpw_isa_preset_crop[data-crop="Custom"]'), e.length ? e.trigger("click") : avpw$("#avpw_crop_presets_scroll_region").find(".avpw_isa_preset_crop").eq(0).trigger("click")
            })
        }, u.init = function(n) {
            t = n, i = e.launchData.cropPresets, "string" == typeof presetsFromConfig && (i = i.split(",")), o = e.launchData.cropPresetDefault, l = new e.CropController(n, n.paintWidget)
        }, u.shutdown = function() {
            I(), avpw$("#avpw_controls").removeClass("avpw_crop_mode"), y.enableMode(!1), r && (r.shutdown(), r = null), c = null, t = null, l = null
        }, u.onRedoComplete = function() {
            u.resetUI()
        }, u.onUndoComplete = function() {
            u.resetUI()
        }, u.panelWillOpen = function() {
            d = !1, c = null, p = !1, t.canvasUI && t.canvasUI.subscribe(u), t.layoutNotify(e.launchData.openType, "hideZoomButton"), a.on("layout:resize", C), s = void 0, t.canvasUI && t.canvasUI.viewport.setPadding(25)
        }, u.panelDidOpen = function() {
            b(), r && (r.setCurrentPage(0), r.changePage()), l.activate(a), u.resetUI(), avpw$("#avpw_controls").addClass("avpw_crop_mode"), x()
        };
        var x = function() {
            avpw$("#avpw_crop_presets_scroll_region").delegate(".avpw_isa_preset_crop,.avpw_crop_custom_control", "click", m), avpw$("#avpw_controls").delegate("#avpw_crop_flip_button", "click", function() {
                w(avpw$("#avpw_crop_presets_scroll_region").find("#avpw_preset_crop_icon").first()), l.flipIt(), l.forceAspect(g)
            })
        }, I = function() {
            y.unbindEvents(), avpw$("#avpw_crop_presets_scroll_region").undelegate(".avpw_isa_preset_crop,.avpw_crop_custom_control", "click"), avpw$("#avpw_controls").undelegate("#avpw_crop_flip_button", "click")
        };
        return u.panelWillClose = function() {
            I(), t.canvasUI && t.canvasUI.viewport.setPadding(0), a.trigger("layout:resize"), avpw$("#avpw_controls").removeClass("avpw_crop_mode"), y.enableMode(!1), y.shutdown(), t.canvasUI && t.canvasUI.unsubscribe(u), l && l.deactivate(), avpw$("#avpw_crop_presets_scroll_region").undelegate(".avpw_isa_preset_crop", "click"), r && (r.shutdown(), r = null), t.layoutNotify(e.launchData.openType, "showZoomButton"), a.off("layout:resize", C)
        }, u.mouseDownEvent = function(e) {
            var t = l.updateUIDown(e.canvasX, e.canvasY);
            return t && (p = !0), !1
        }, u.mouseMoveEvent = function(e) {
            return p ? (l.updateUIMove(e.canvasX, e.canvasY), !1) : void 0
        }, u.mouseUpEvent = function(e) {
            return p ? (t.canvasUI.setMouseCursor(), l.apply(e.canvasX, e.canvasY), p = !1, !1) : void 0
        }, u.commit = function() {
            return l.isValidCrop() ? (c = y.getFixedSize() || c || null, y.enableMode(!1), h(), s) : (y.triggerValidation(!0), y.enableMode(!0), a.trigger("tool:crop:change"), !1)
        }, u.onEnableZoomMode = function() {
            return t.canvasUI && t.canvasUI.unsubscribe(u), !1
        }, u.onDisableZoomMode = function() {
            t.canvasUI && t.canvasUI.subscribe(u)
        }, u
    }(), e.ControlsWidget.prototype.tool.drawing = function() {
        var t, n, a, i = (e.toolDefaults.drawing.presetsWidth, e.toolDefaults.drawing.presetsColor), o = {}, r = function() {
            var e = 1;
            t.canvasUI && (e = t.canvasUI.viewport.getRatio());
            var n = t.paintWidget.module.drawing.erase(), a = t.paintWidget.module.drawing.width();
            a /= e, a = a / 2 + .5 | 0, t.brushPreview && t.brushPreview.show(a, n ? null : t.paintWidget.module.drawing.color())
        }, s = function() {
            avpw$(".avpw_inset_color_widget .avpw_preset_icon_active").removeClass("avpw_preset_icon_active")
        }, l = function() {
            avpw$(".avpw_colorsplash_eraser").removeClass("avpw_inset_button_down")
        }, c = function(e) {
            s(), l(), e.addClass("avpw_inset_button_down")
        }, p = function(e) {
            e.preventDefault();
            var n = avpw$(this), a = 1;
            t.canvasUI && (a = t.canvasUI.viewport.getRatio());
            var i = n.data("size") * a | 0;
            t.paintWidget.module.drawing.setWidth(i), avpw$("#avpw_drawing_brushes .avpw_inset_button_down").removeClass("avpw_inset_button_down"), n.addClass("avpw_inset_button_down"), r()
        }, u = function(e) {
            l(), t.paintWidget.module.drawing.setErase(!1), t.paintWidget.module.drawing.setColor(e)
        }, d = function(e) {
            e.preventDefault();
            var t = avpw$(this);
            u(t.data("color")), s(), t.addClass("avpw_preset_icon_active"), r()
        }, v = function(n) {
            n.preventDefault(), n.stopPropagation();
            var i = n.currentTarget;
            s(), avpw$(".avpw_color_picker_dropdown_popup").length && a.hideColorPicker(), a = e.buildColorPicker(t.paintWidget.module.drawing.color(), i, function(e, n) {
                u(e), n || (r(), t.canvasUI && t.canvasUI.subscribe(o))
            }, function() {
                t.canvasUI && t.canvasUI.subscribe(o)
            }), t.canvasUI && t.canvasUI.unsubscribe(o)
        }, f = function(e) {
            e.preventDefault(), t.paintWidget.module.drawing.setErase(!0), c(avpw$(this)), r()
        }, _ = function() {
            avpw$(".avpw_isa_preset_brush", "#avpw_drawing_brushes").on("mousedown touchstart", p), avpw$(".avpw_isa_preset_color", "#avpw_drawing_colors").on("mousedown touchstart", d), avpw$(".avpw_colorsplash_eraser", "#avpw_controlpanel_drawing").on("mousedown touchstart", f), avpw$(".avpw_isa_color_picker", "#avpw_controlpanel_drawing").on("mousedown touchstart", v)
        }, h = function() {
            avpw$(".avpw_isa_preset_brush", "#avpw_drawing_brushes").off("mousedown touchstart", p), avpw$(".avpw_isa_preset_color", "#avpw_drawing_colors").off("mousedown touchstart", d), avpw$(".avpw_colorsplash_eraser", "#avpw_controlpanel_drawing").off("mousedown touchstart", f), avpw$(".avpw_isa_color_picker", "#avpw_controlpanel_drawing").off("mousedown touchstart", v)
        }, w = function() {
            var t, n, a = i.length, o = "";
            for (t = 0; a > t; t++)
                n = {color: i[t]}, o += e.template[e.launchData.layout].brushColorIcon(n);
            avpw$("#avpw_drawing_colors").html(o)
        };
        return o.init = function(e) {
            t = e
        }, o.panelWillOpen = function() {
            e.featherUseFlash || (t.paintWidget.setMode("flatten"), t.paintWidget.module.flatten.flatten()), n = !1, w(), _(), t.canvasUI && (t.canvasUI.subscribe(o), t.canvasUI.setMouseCursor("none")), avpw$.miniColors && (e.miniColors = new avpw$.miniColors)
        }, o.panelDidOpen = function() {
            e.util.nextFrame(function() {
                avpw$("#avpw_drawing_brushes").find(".avpw_isa_preset_brush").eq(2).trigger("mousedown"), avpw$("#avpw_drawing_brushes").find(".avpw_isa_preset_brush").eq(2).trigger("touchdown"), avpw$("#avpw_drawing_colors").find(".avpw_isa_preset_color").eq(0).trigger("mousedown"), avpw$("#avpw_drawing_colors").find(".avpw_isa_preset_color").eq(0).trigger("touchdown")
            }), t.paintWidget.setCurrentLayerByName("drawing")
        }, o.panelWillClose = function() {
            h(), t.canvasUI && (t.canvasUI.unsubscribe(o), t.canvasUI.setMouseCursor()), t.paintWidget.uiLayerShow(!1), a && a.hideColorPicker(), a = null, e.miniColors = null
        }, o.shutdown = function() {
            t = null
        }, o.commit = function() {
        }, o.mouseDownEvent = function(i, o, r) {
            return !n && r ? (n = !0, a && a.hideColorPicker(), t.paintWidget.module.drawing.updateUIDown(i.canvasX, i.canvasY), t.layoutNotify(e.launchData.openType, "hideZoomButton"), !1) : void 0
        }, o.mouseMoveEvent = function(e) {
            return n ? (t.paintWidget.module.drawing.updateUIDraw(e.canvasX, e.canvasY), !1) : void t.paintWidget.module.drawing.updateUIMove(e.canvasX, e.canvasY)
        }, o.mouseUpEvent = function(a) {
            n && (n = !1, t.paintWidget.module.drawing.apply(a.canvasX, a.canvasY), t.layoutNotify(e.launchData.openType, "showZoomButton"))
        }, o.mouseOutEvent = function() {
            t.paintWidget.uiLayerShow(!1)
        }, o.onEnableZoomMode = function() {
            return t.canvasUI && (t.canvasUI.unsubscribe(o), t.canvasUI.setMouseCursor()), t.paintWidget.uiLayerShow(!1), !1
        }, o.onDisableZoomMode = function() {
            t.canvasUI && (t.canvasUI.subscribe(o), t.canvasUI.setMouseCursor("none"))
        }, o
    }(), e.ControlsWidget.prototype.tool.effects = function() {
        "use strict";
        var t, a, i, o, r, s, l, c, p = "avpw_isa_control_selector_filter", u = "avpw_preset_icon_active", d = 1, v = {}, f = function(e) {
            e = e, avpw$("." + p).removeClass(u), e && e.length && e.addClass(u)
        }, _ = function() {
            var n, i;
            s && (n = s.data("filtername"), i = s.children(".avpw_icon_waiter"), a.waitThrobber.spin(i[0]), e.util.nextFrame(function() {
                e.onRunFilter ? e.onRunFilter.apply(this, [n, d, !1]) : a.paintWidget.module.effects.applyPreview(n, {seed: t,intensity: d,border: !1}, !0), a.waitThrobber.stop()
            }))
        }, h = function() {
            if (e.featherGLEnabled) {
                var t = e.require("../../../src/js/core/copy");
                i.find(".avpw_isa_previewcanvas").each(function(e, n) {
                    var i = t.copy(l.data), o = avpw$(n).parent().data("filtername");
                    a.paintWidget.module.effects.makeThumb(o, n, i)
                })
            } else
                i.find(".avpw_isa_previewcanvas").each(function(e, t) {
                    var n = avpw$(t).parent().data("filtername");
                    a.paintWidget.module.effects.makeThumb(n, t, c)
                })
        }, w = function(e) {
            var n = avpw$(e.currentTarget), a = n.data("filtername");
            return "original" === a || n.hasClass("avpw_preset_icon_active") ? (v.cancel(), f()) : (t = Math.floor(4294967295 * Math.random()), s = n, _(), f(n)), !1
        }, g = function(t) {
            var n = t.displayName, a = t.identifier, i = e.featherUseFlash ? e.build.feather_baseURL + "images/filters/original.jpg" : "";
            return e.template[e.launchData.layout].filterThumbnail({label: e.getLocalizedString(n),id: a,thumburl: i})
        }, m = function(t, n) {
            var a = t.identifier, i = t.displayName, o = t.purchased || !t.needsPurchase, r = e.template[e.launchData.layout][o ? "filterCanister" : "filterCanisterDisabled"];
            return r({label: e.getLocalizedString(i),id: a,packIndex: n,thumburl: e.util.getSafeAssetBaseURL(t.assetsBaseURL) + t.iconImage})
        }, b = function() {
        }, y = function() {
            var t = a.layoutNotify(e.launchData.openType, "getDims"), n = t.FILTER_IMAGE_WIDTH, s = r, l = a.paintWidget.filterManager.getPacksById();
            o = e.ContentBrowser({container: i,packsInOrder: s,packsById: l,buildPackUI: m,buildItem: g,itemWidth: n,onItemsOpen: h,itemsPerPage: a.layoutNotify(e.launchData.openType, "getFiltersPerPage")}), o.build(), i.fadeIn(200)
        };
        return v.resetUI = function() {
        }, v.init = function(e) {
            a = e, i = avpw$("#avpw_effects_scroller"), i.delegate("." + p, "click", w)
        }, v.panelWillOpen = function() {
            b(), i.hide(), s = null
        }, v.panelDidOpen = function() {
            c = n.createElement("canvas"), c.width = 63, c.height = 63, a.paintWidget.makeThumbFlat(c);
            var t = c.getContext("2d");
            e.featherGLEnabled && (l = t.getImageData(0, 0, c.width, c.height)), a.assetManager.getAssets("EFFECT", function(e) {
                r = e, y()
            })
        }, v.panelWillClose = function() {
            o.destroy(), l = null, c = null
        }, v.panelDidClose = function() {
        }, v.cancel = function() {
            v.resetUI(), a.paintWidget.actions.isACheckpoint && !a.paintWidget.actions.isACheckpoint() && a.paintWidget.actions.undoToCheckpoint()
        }, v.commit = function() {
            return a.paintWidget.module.effects.commit && a.paintWidget.module.effects.commit(), s && s.length ? s.data("filtername") : void 0
        }, v.onUndo = function(e) {
            e || v.resetUI()
        }, v.onRedo = function(e) {
            e || s && s.length && f(s)
        }, v.shutdown = function() {
            b(), i && i.length && i.undelegate("." + p, "click"), a = null, i = null
        }, v
    }(), e.ControlsWidget.prototype.tool.enhance = function() {
        var t, n, a = e.toolDefaults.enhance.presets, i = {}, o = function(e) {
            e.siblings().removeClass("avpw_inset_button_down"), e.addClass("avpw_inset_button_down")
        }, r = function() {
            var e, r;
            return r = avpw$(this), r.hasClass("avpw_inset_button_down") ? (r.removeClass("avpw_inset_button_down"), i.cancel()) : (o(r), e = a[r.index()], t.showWaitThrobber(!0, function() {
                t.paintWidget.module.enhance.applyPreview(e, !0), t.showWaitThrobber(!1)
            }), n = r), !1
        }, s = function() {
            avpw$("#avpw_controlpanel_enhance").find(".avpw_inset_button").bind("mousedown touchstart", r)
        }, l = function() {
            avpw$("#avpw_controlpanel_enhance").find(".avpw_inset_button").unbind("mousedown touchstart").removeClass("avpw_inset_button_down")
        };
        return i.resetUI = function() {
            avpw$("#avpw_controlpanel_enhance").find(".avpw_inset_button").removeClass("avpw_inset_button_down")
        }, i.init = function(e) {
            t = e
        }, i.panelWillOpen = function() {
            n = null
        }, i.panelDidOpen = function() {
            s()
        }, i.panelWillClose = function() {
            l()
        }, i.cancel = function() {
            i.resetUI(), t.paintWidget.actions.isACheckpoint() || t.paintWidget.actions.undoToCheckpoint()
        }, i.commit = function() {
            return t.paintWidget.module.enhance.commit && t.paintWidget.module.enhance.commit(), n && n.length ? a[n.index()] : void 0
        }, i.onUndo = function(e) {
            e || i.resetUI()
        }, i.onRedo = function(e) {
            !e && n && n.length && o(n)
        }, i.shutdown = function() {
            t = null
        }, i
    }(), e.ControlsWidget.prototype.tool.forcecrop = function() {
        var t, n, i, o, r, s, l, c = null, p = !1, u = {}, d = function() {
            t.paintWidget.module.crop.crop(l.crop()), c && (t.paintWidget.setMode("resize"), t.paintWidget.module.resize.resize(c.width, c.height, !0), t.paintWidget.setMode("crop"))
        }, v = !1, f = function(e) {
            c = null, e && (w = e.width, h = e.height, e.resize ? (c = {width: w,height: h}, m(w, h), a.off("tool:crop:change", m), canvasDims = t.paintWidget.a2c(w, h, !0), l.setInitialSelectionTo(canvasDims.width, canvasDims.height)) : (a.on("tool:crop:change", m), w && h && l.setInitialSelectionByRatio(w / h)), l.forceAspect(e.constrain), v = e.constrain, s = e.label)
        }, _ = function() {
            b()
        };
        u.resetUI = function() {
            t.layoutNotify(e.launchData.openType, "scaleCanvas")
        }, u.init = function(n) {
            t = n, i = e.launchData.cropPresets, "string" == typeof presetsFromConfig && (i = i.split(",")), o = e.launchData.cropPresetDefault, l = new e.CropController(n, n.paintWidget)
        }, u.shutdown = function() {
            r && (r.shutdown(), r = null), avpw$("#avpw_controls").removeClass("avpw_crop_mode avpw_force_crop_mode"), c = null, t = null, l = null
        }, u.onRedoComplete = function() {
            u.resetUI()
        }, u.onUndoComplete = function() {
            u.resetUI()
        }, u.panelWillOpen = function() {
            c = null, p = !1, t.paintWidget.module.crop.activate(t.paintWidget), t.canvasUI && t.canvasUI.subscribe(u), l.activate(a), t.layoutNotify(e.launchData.openType, "hideZoomButton"), a.on("layout:resize", _), avpw$("#avpw_controls").addClass("avpw_crop_mode avpw_force_crop_mode"), s = void 0
        };
        var g;
        u.panelDidOpen = function() {
            if (u.resetUI(), n = t.populateCropPresets(e.launchData.forceCropPreset), g = n[0], !g)
                return void t.messager.show("avpw_aviary_crop_invalid_dimensions", !0);
            var i = e.launchData.forceCropMessage || e.getLocalizedString("Please crop your photo to");
            avpw$("#avpw_force_crop_sub_text").html(i), avpw$("#avpw_force_crop_label").html(n[0].label), a.on("tool:crop:change", m), b()
        };
        var m = function(e, t) {
            l.setToolTipValues(e, t)
        }, b = function() {
            f(g)
        };
        return u.panelWillClose = function() {
            a.off("tool:crop:change", m), avpw$("#avpw_controls").removeClass("avpw_crop_mode avpw_force_crop_mode"), t.canvasUI && t.canvasUI.unsubscribe(u), l && l.deactivate(), t.layoutNotify(e.launchData.openType, "showZoomButton"), a.off("layout:resize", _)
        }, u.mouseDownEvent = function(e) {
            var t = l.updateUIDown(e.canvasX, e.canvasY);
            return t && (p = !0), !1
        }, u.mouseMoveEvent = function(e) {
            return p ? (l.updateUIMove(e.canvasX, e.canvasY), !1) : void 0
        }, u.mouseUpEvent = function(e) {
            return p ? (t.canvasUI.setMouseCursor(), l.apply(e.canvasX, e.canvasY), p = !1, !1) : void 0
        }, u.commit = function() {
            return d(), s
        }, u.onEnableZoomMode = function() {
            return t.canvasUI && t.canvasUI.unsubscribe(u), !1
        }, u.onDisableZoomMode = function() {
            t.canvasUI && t.canvasUI.subscribe(u)
        }, u
    }(), e.ControlsWidget.prototype.tool.frames = function() {
        var t, n, i, o, r, s = "avpw_isa_control_selector_frame", l = "avpw_preset_icon_active", c = null, p = {}, u = function() {
            r && (frameName = r.data("framename"), t.paintWidget.module.frames.applyPreview(frameName, !0))
        }, d = function(e) {
            avpw$("." + s).removeClass(l), e && 0 !== e.length && e.addClass(l)
        }, v = function(e) {
            e.preventDefault();
            {
                var t = e.currentTarget;
                avpw$(t).attr("data-framename")
            }
            r && t === r[0] ? (r = null, p.cancel()) : (r = avpw$(t), d(r), u())
        }, f = function(t, n) {
            var a = t.identifier, i = t.displayName, o = t.purchased || !t.needsPurchase, r = e.template[e.launchData.layout][o ? "filterCanister" : "filterCanisterDisabled"];
            return r({label: e.getLocalizedString(i),id: a,packIndex: n,thumburl: e.util.getSafeAssetBaseURL(t.assetsBaseURL) + t.iconImage})
        }, _ = function(t, n, a) {
            a = e.util.getSafeAssetBaseURL(a);
            var i = t.displayName, o = t.identifier;
            return e.template[e.launchData.layout].frameThumbnail({label: i,frameName: o,assetImage: a + t.images.iconImage})
        }, h = function() {
            e.util.nextFrame(function() {
                w(), p.resetUI()
            })
        }, w = function() {
        }, g = function() {
            c && (c.shutdown(), c = null), n && n.length && n.hide()
        }, m = function() {
            var a = t.layoutNotify(e.launchData.openType, "getDims"), r = a.BORDER_ICON_WIDTH, a = t.layoutNotify(e.launchData.openType, "getDims"), r = a.FILTER_IMAGE_WIDTH, s = o, l = t.paintWidget.imageBorderManager.getPacksById();
            i = e.ContentBrowser({container: n,packsInOrder: s,packsById: l,buildPackUI: f,buildItem: _,itemWidth: r,itemsPerPage: t.layoutNotify(e.launchData.openType, "getFiltersPerPage"),backMessageText: e.getLocalizedString("More Frames")}), i.build(), n.fadeIn(200)
        };
        return p.init = function(e) {
            t = e, n = avpw$("#avpw_frames_scroller"), n.delegate("." + s, "mouseup", v)
        }, p.panelWillOpen = function() {
            r = null, a.on("layout:resize", h), e.featherGLEnabled && t.paintWidget.module.frames.createFrameOverlay(), n.hide(), t.layoutNotify(e.launchData.openType, "hideZoomButton")
        }, p.panelDidOpen = function() {
            t.assetManager.getAssets("IMAGEBORDER", function(e) {
                o = e, n.show(), m(), c && c.changePage(!0)
            })
        }, p.panelDidClose = function() {
            t.layoutNotify(e.launchData.openType, "showZoomButton"), e.featherGLEnabled && t.paintWidget.module.frames.removeFrameOverlay()
        }, p.resetUI = function() {
            d()
        }, p.cancel = function() {
            p.resetUI(), t.paintWidget.actions.isACheckpoint && !t.paintWidget.actions.isACheckpoint() && t.paintWidget.actions.undoToCheckpoint()
        }, p.commit = function() {
            return e.featherGLEnabled && t.paintWidget.module.frames.commitFrameOverlay(), r && r.length ? r.data("framename") : void 0
        }, p.onUndo = function(e) {
            e || p.resetUI()
        }, p.onRedo = function(e) {
            e || r && r.length && d(r)
        }, p.shutdown = function() {
            g(), n && n.length && n.undelegate(), t = null, n = null
        }, p
    }(), e.ControlsWidget.prototype.tool.orientation = function() {
        var n, i, o, r, s, l, c, p = 10, u = 200, d = 45, v = null, f = null, _ = null, h = null, w = !1, g = !1, m = 0, b = !1, y = !1, C = 0, x = {}, I = function() {
            return n && (w || g) && !(w && g)
        }, T = function() {
            var a = o.layoutNotify(e.launchData.openType, "getMaxDims"), i = a.height < a.width ? a.height : a.width;
            i -= p, i = i < e.launchData.maxSize ? i : e.launchData.maxSize, o.canvasUI && (o.canvasUI.viewport.resize(i, i), n ? t.setTimeout(o.canvasUI.resetOffset, u) : o.canvasUI.resetOffset())
        }, k = function() {
            o.layoutNotify(e.launchData.openType, "scaleCanvas")
        }, S = function() {
            T(), N(), c && (l.setValue(c), A(null, {value: c}))
        }, D = function(e, t, n) {
            o.canvasUI && o.canvasUI.viewport.rotate(e, t, n)
        }, W = function() {
            D(0, 0, 0)
        }, E = function(t) {
            avpw$("#avpw_straighten_grid").html(avpw$(e.template[e.launchData.layout].alignmentGrid({numLines: t})))
        }, N = function() {
            if (o.canvasUI && i) {
                var e = o.canvasUI.viewport.getRatio(), t = o.paintWidget.width / e, n = o.paintWidget.height / e;
                if (o.canvasUI.viewport.rotateBoundsBy90(m)) {
                    var a = t;
                    t = n, n = a
                }
                l && (l.shutdown(), l = void 0), l = new o.Slider({element: s,min: -.5,max: .5,defaultValue: 0,onstart: P,onchange: $,onslide: A}), l.addListeners(), avpw$("#avpw_straighten_handle").css({left: "50%"}), o.paintWidget.setMode("straighten"), o.paintWidget.module.straighten.reset(), _ = null, h = null, v = t, f = n, E(8), s.addClass("avpw_straighten_ui_ready")
            }
        }, P = function() {
            (m % 360 || w || g) && z(), o.canvasUI && o.canvasUI.addCanvasClass("avpw_ready_for_straighten"), avpw$("#avpw_straighten_grid").addClass("avpw_straighten_ui_grid_ready"), o.paintWidget.setMode("straighten"), o.paintWidget.module.straighten.set(_)
        }, $ = function() {
            o.canvasUI && o.canvasUI.removeCanvasClass("avpw_ready_for_straighten"), avpw$("#avpw_straighten_grid").removeClass("avpw_straighten_ui_grid_ready"), o.layoutNotify(e.launchData.openType, "updateUndoRedo", [!0, !1])
        }, A = function(t, a) {
            var r, s, l, p, u = a.value;
            c = u, i && (r = e.math.sign(u), h = (1 - Math.cos(u * Math.PI)) * d * r, _ = h * Math.PI / 180, n ? (l = g ? 180 : 0, p = w ? 180 : 0, D(l, p, h)) : D(h), s = o.paintWidget.module.straighten.set(_), o.canvasUI && v && f && o.canvasUI.viewport.resizeFake(v * s, f * s))
        }, L = function(a, o) {
            if (n && !e.featherUseFlash) {
                a && a.call(this), s.removeClass("avpw_straighten_ui_animate"), s.removeClass("avpw_straighten_ui_ready"), t.setTimeout(function() {
                    s.addClass("avpw_straighten_ui_animate"), S()
                }, u);
                var r = g ? 180 : 0, l = w ? 180 : 0;
                D(r, l, m)
            } else
                i && !e.featherUseFlash ? (s.removeClass("avpw_straighten_ui_ready"), W(), o && o.call(this), S()) : o && o.call(this)
        }, O = function() {
            y = b = !1, C = 0
        }, U = function() {
            g = w = !1, m = 0, _ = null, h = null, O()
        }, M = function() {
            o.canvasUI && n && !e.featherUseFlash ? (o.canvasUI.removeCanvasClass("avpw_ready_for_orient"), s.removeClass("avpw_straighten_ui_animate"), s.removeClass("avpw_straighten_ui_ready"), t.setTimeout(function() {
                o.canvasUI.addCanvasClass("avpw_ready_for_orient"), s.addClass("avpw_straighten_ui_animate"), S()
            }, u)) : (s.removeClass("avpw_straighten_ui_ready"), S())
        }, z = function() {
            o.canvasUI && o.canvasUI.removeCanvasClass("avpw_ready_for_orient");
            var e = m % 360;
            0 !== e && n && (o.paintWidget.setMode("rotate90"), o.paintWidget.module.rotate90.rotate90(e, r)), (w || g) && (o.paintWidget.setMode("flip"), o.paintWidget.module.flip.flip(w, g, r)), O(), b = w ? !b : b, y = g ? !y : y, C += -(m % 360), g = w = !1, m = 0, W(), T(), o.canvasUI && o.canvasUI.addCanvasClass("avpw_ready_for_orient")
        }, R = function(a) {
            var o = 0, r = 0, s = 0;
            n && !e.featherUseFlash ? ((C || y || b) && (o = y ? 180 : 0, r = b ? 180 : 0, s = C), D(o, r, s), t.setTimeout(function() {
                W(), a && a.call(this)
            }, u)) : i && !e.featherUseFlash ? (W(), a && a.call(this)) : a && a.call(this)
        }, F = function(e) {
            var t = avpw$(e.currentTarget);
            e.stopPropagation(), e.preventDefault(), R(function() {
                t.unbind("click").trigger("click")
            })
        }, B = function() {
            avpw$("#avpw_flip_h").bind("click", function() {
                c = null, e.featherUseFlash ? (o.paintWidget.setMode("flip"), o.paintWidget.module.flip.flip(!0, !1)) : L(function() {
                    w = !w
                }, function() {
                    o.paintWidget.setMode("flip"), o.paintWidget.module.flip.flip(!0, !1, !0)
                }), o.layoutNotify(e.launchData.openType, "updateUndoRedo", [!0, !1])
            }), avpw$("#avpw_flip_v").bind("click", function() {
                c = null, e.featherUseFlash ? (o.paintWidget.setMode("flip"), o.paintWidget.module.flip.flip(!1, !0)) : L(function() {
                    g = !g
                }, function() {
                    o.paintWidget.setMode("flip"), o.paintWidget.module.flip.flip(!1, !0, !0)
                }), o.layoutNotify(e.launchData.openType, "updateUndoRedo", [!0, !1])
            }), avpw$("#avpw_rotate_left").bind("click", function() {
                c = null;
                var t = I() ? 90 : -90;
                L(function() {
                    m += t
                }, function() {
                    o.paintWidget.setMode("rotate90"), o.paintWidget.module.rotate90.rotate90(t, r)
                }), o.layoutNotify(e.launchData.openType, "updateUndoRedo", [!0, !1])
            }), avpw$("#avpw_rotate_right").bind("click", function() {
                c = null;
                var t = I() ? -90 : 90;
                L(function() {
                    m += t
                }, function() {
                    o.paintWidget.setMode("rotate90"), o.paintWidget.module.rotate90.rotate90(t, r)
                }), o.layoutNotify(e.launchData.openType, "updateUndoRedo", [!0, !1])
            }), avpw$("#avpw_controlpanel_orientation").find(".avpw_inset_button").pressed("avpw_inset_button_down"), avpw$("#avpw_all_effects").bind("click", F)
        }, H = function() {
            avpw$("#avpw_controlpanel_orientation").find(".avpw_inset_button").unbind(), avpw$("#avpw_all_effects").unbind("click", F)
        }, j = function() {
            i && !e.featherUseFlash && (z(), _ && 0 !== _ && (o.paintWidget.setMode("straighten"), o.paintWidget.module.straighten.commit(_, h, r)))
        };
        return x.init = function(t) {
            o = t, n = !e.featherUseFlash && e.support.getVendorProperty("transformStyle"), i = e.support.getVendorProperty("transform"), s = avpw$(e.template[e.launchData.layout].straightenSlider()), r = !0
        }, x.panelWillOpen = function() {
            U(), B(), o.canvasUI && o.canvasUI.disablePan(), a.on("layout:resize", S);
            var t = o.layoutNotify(e.launchData.openType, "getCanvasControlsElement");
            t.append(s), o.layoutNotify(e.launchData.openType, "hideZoomButton"), o.layoutNotify(e.launchData.openType, "showCanvasControlsElement")
        }, x.panelDidOpen = function() {
            o.canvasUI && n && (o.canvasUI.addCanvasClass("avpw_ready_for_orient"), s.addClass("avpw_straighten_ui_animate")), S()
        }, x.panelWillClose = function() {
            H(), o.canvasUI && o.canvasUI.enablePan(), l && (l.shutdown(), l = void 0), k(), a.off("layout:resize", S), o.canvasUI && n ? (o.canvasUI.removeCanvasClass("avpw_ready_for_orient"), s.removeClass("avpw_straighten_ui_animate"), s.removeClass("avpw_straighten_ui_ready")) : i && s.removeClass("avpw_straighten_ui_ready"), s.detach(), o.layoutNotify(e.launchData.openType, "showZoomButton"), o.layoutNotify(e.launchData.openType, "hideCanvasControlsElement"), W(), c = null
        }, x.commit = function() {
            j()
        }, x.shutdown = function() {
            H(), o = null, l = void 0, s = null
        }, x.onUndo = function() {
            var e = !!(m % 360) || w || g || _ && 0 !== _;
            e && (j(), U()), M()
        }, x.onRedo = function() {
            M()
        }, x
    }(), e.ControlsWidget.prototype.tool.overlay = function() {
        var n, i, o, r, s, l, c, p, u, d, v, f = 140, _ = 400, h = 10, w = .375, g = 5, m = {OFF_STATE: 0,DRAG_STATE: 1}, b = null, C = null, I = {}, T = function(e) {
            return n.paintWidget.overlayRegistry.getAsset(e).identifier
        }, k = function(t, n) {
            var a = e.paintWidgetInstance.overlayRegistry.getElement(t, function() {
                i = !1, n && n.call(this)
            });
            return a ? !0 : (i = !0, !1)
        }, S = function(t, a, i) {
            var o, r, s, l, c, p, d = Math.floor(4294967295 * Math.random()).toString(16), v = "text_overlay-" + d, _ = avpw$(e.template[e.launchData.layout].selectionOverlay({id: v,body: e.template[e.launchData.layout].imageOverlayBody({src: t})}));
            s = 1, n.canvasUI && (s = n.canvasUI.viewport.getRatio()), l = f + 2 * h, o = a / s - l / 2, r = i / s - l / 2, c = {left: (o + .5 | 0) + "px",top: (r + .5 | 0) + "px",width: f + "px",height: f + "px"}, _.css(c), p = {id: v,url: t,initialCoordsX: 0,initialCoordsY: 0,element: _}, u.newOverlay(p)
        }, D = function(t) {
            var a, i, o, r, s, l, c;
            t.url && (a = t.id, i = t.url, c = e.controlsWidgetInstance.canvasUI ? e.controlsWidgetInstance.canvasUI.viewport.getRatio() : 1, l = t.rotation || 0, o = (t.centerX + .5 | 0) * c + .5 | 0, r = (t.centerY + .5 | 0) * c + .5 | 0, s = (t.width + .5) * c / (_ + 1), n.paintWidget.module.overlay.addOverlay(a, i, o + .5 | 0, r + .5 | 0, s, s, l))
        }, W = function(t, i, o, r) {
            if (e.featherUseFlash)
                return void n.paintWidget.module.overlay.addOverlay("", t);
            var s = k(t, function() {
                S(t, o, r, w, w), s || n.onEggWaitThrobber.stop()
            });
            if (!s && i) {
                var l = avpw$(i).children(".avpw_isa_overlay_waiter");
                n.onEggWaitThrobber.spin(l[0])
            }
            a.trigger("usage:tool", "overlay", "stickerclicked", T(t))
        }, E = function() {
            d = null, b = null, i = !1, v && v.length && v.detach().remove()
        }, N = function(t) {
            if (v && v.length) {
                var n = e.util.getTouch(t);
                n ? (x = n.pageX, y = n.pageY) : (x = t.originalEvent.pageX, y = t.originalEvent.pageY), v.css({left: x + "px",top: y + "px"})
            }
        }, P = function(n) {
            var a, i, o, r;
            E(), r = avpw$(n.currentTarget), d = r.attr("fullimageurl"), e.featherUseFlash || (o = e.util.getTouch(n), o ? (a = o.pageX, i = o.pageY) : (a = n.originalEvent.pageX, i = n.originalEvent.pageY), b = {x: a,y: i}, avpw$(t).bind("mousemove", $).bind("touchmove", $).bind("mouseup", A).bind("touchend", A), v = r.clone())
        }, $ = function(n) {
            var a, i, o = 0, r = 0;
            b && (o = b.x, r = b.y);
            var s = e.util.getTouch(n);
            s ? (a = s.pageX, i = s.pageY, avpw$(e.paintWidgetInstance.canvas).trigger("touchstart")) : (a = n.originalEvent.pageX, i = n.originalEvent.pageY), (o - a > g || a - o > g || r - i > g || i - r > g) && (avpw$(t).unbind("mousemove", $).unbind("touchmove", $).bind("mousemove", N).bind("touchmove", N), N(n), v.addClass("avpw_overlay_icon_dropped"), avpw$("body").append(v), k(d))
        }, A = function(a) {
            avpw$(t).unbind("mousemove", $).unbind("touchmove", $).unbind("mousemove", N).unbind("touchmove", N).unbind("mouseup", A).unbind("touchend", A);
            var o = n.canvasUI.getCoordinatesFromEventWithinCanvasBounds(a);
            if (o)
                if (i)
                    var r = t.setInterval(function() {
                        i || (o && W(d, a.currentTarget, o.canvasX, o.canvasY), t.clearInterval(r), r = null, E())
                    }, 100);
                else
                    W(d, a.currentTarget, o.canvasX, o.canvasY), E();
            else
                v && v.length && (v.addClass("avpw_overlay_icon_return_ready"), e.util.nextFrame(function() {
                    v.addClass("avpw_overlay_icon_returned"), b && v.css({top: b.y + "px",left: b.x + "px"}), t.setTimeout(function() {
                        E()
                    }, 400)
                }))
        }, L = function(e) {
            var a, o, r, s = e.currentTarget, l = avpw$(s).attr("fullimageurl");
            if (l && l === d)
                if (n && n.canvasUI && (a = n.canvasUI.getViewportCenter(), a && (o = a.canvasX, r = a.canvasY)), i)
                    var c = t.setInterval(function() {
                        i || (W(l, s, o, r), t.clearInterval(c), c = null)
                    }, 100);
                else
                    W(l, s, o, r);
            b = null, d = null, avpw$(t).unbind("mousemove", $).unbind("touchmove", $).unbind("mousemove", N).unbind("touchmove", N)
        }, O = function(t, a, i) {
            i = e.util.getSafeAssetBaseURL(i);
            var o = i + t.images.preview, r = i + t.images.iconImage, l = i + t.images.sticker;
            return t.packIdentifier = s.getCurrentPackId(), n.paintWidget.overlayRegistry.add(o, l, t), e.template[e.launchData.layout].stickerThumbnail({url: o,thumburl: r})
        }, U = function(t, n) {
            var a, i = t.identifier, o = t.displayName || "Original", r = t.purchased || !t.needsPurchase, s = p[i], l = e.template[e.launchData.layout][r ? "stickerRoll" : "stickerRollDisabled"];
            return s && s.iconImage && (a = e.util.getSafeAssetBaseURL(t.assetsBaseURL) + t.iconImage), l({label: e.getLocalizedString(o),id: i,packIndex: n,thumburl: a})
        }, M = function() {
            C = null, d = null, v = null
        }, z = function() {
            var t = n.layoutNotify(e.launchData.openType, "getDims"), a = t.STICKER_ROLL_WIDTH;
            s = e.ContentBrowser({container: o,packsInOrder: c,packsById: p,buildPackUI: U,buildItem: O,itemWidth: a,itemsPerPage: n.layoutNotify(e.launchData.openType, "getStickerPacksPerPage"),backMessageText: e.getLocalizedString("More Stickers")}), s.build(), o.fadeIn(200)
        };
        I.init = function(t) {
            n = t, p = {}, e.OverlayController && (u = new e.OverlayController(t, t.paintWidget, {modes: m,handlePosition: e.OverlayController.HANDLE_POSITION.BOTTOM_RIGHT,aspectRatio: 1}))
        };
        var R = {};
        return I.panelWillOpen = function() {
            o = avpw$("#avpw_overlay_scroller"), o.hide(), n.canvasUI && n.canvasUI.subscribe(I), M(), n.assetManager.getAssets("STICKER", function(t) {
                c = t;
                for (var n = function() {
                    a === c.length && z()
                }, a = 0, i = 0; i < c.length; i++) {
                    var o = c[i].identifier, r = e.controlsWidgetInstance.assetManager.getContentURLByVersionKey(c[i].versionKey);
                    R[r] ? (a++, n()) : !p[o] && r && !function(t, i) {
                        e.controlsWidgetInstance.serverMessaging.sendMessage({id: "avpw_get_assetssticker",action: i,method: "GET",dataType: "json",announcer: e.build.asyncFeatherTargetAnnounce,origin: e.build.asyncImgrecvBase,callback: function(e) {
                            p[t] = e, R[i] = !0, a++, n()
                        }})
                    }(o, r)
                }
            }), o.delegate(".avpw_isa_control_selector_overlay", "mousedown touchstart", P).delegate(".avpw_isa_control_selector_overlay", "mouseup", L), u && u.activate()
        }, I.panelWillClose = function() {
            n.canvasUI && n.canvasUI.unsubscribe(I), s.destroy(), E(), o.undelegate(".avpw_isa_control_selector_overlay", "mousedown touchstart", P).undelegate(".avpw_isa_control_selector_overlay", "mouseup", L), u && u.deactivate()
        }, I.shutdown = function() {
            M(), E(), n = null, r = null, o = null, p = null, l = null
        }, I.mouseDownEvent = function(e, t) {
            return u.updateUIDown(e, t, null, null, function(e) {
                e && e.url && a.trigger("usage:tool", "overlay", "stickerdeleted", T(e.url))
            })
        }, I.mouseMoveEvent = function(e) {
            return u.updateUIMove(e), !1
        }, I.mouseUpEvent = function(e, t) {
            u.apply(e, t)
        }, I.onEnableZoomMode = function() {
            return n.canvasUI && n.canvasUI.unsubscribe(I), !1
        }, I.onDisableZoomMode = function() {
            n.canvasUI && n.canvasUI.subscribe(I)
        }, I.commit = function() {
            var e = [];
            return u && u.commit(function(t) {
                D(t), t && t.url && e.push(T(t.url))
            }), e.join(",")
        }, I
    }(), e.ControlsWidget.prototype.tool.resize = function() {
        var t, n, a, i, o, r, s, l, c, p = !1, u = !1, d = "avpw_inset_button_active", v = {}, f = function(e) {
            if (e === !0 || e === !1)
                r = e;
            else {
                if (r && !u)
                    return t.messager.show("avpw_resize_unlocked", !0), !1;
                r = !r
            }
            r ? (i.addClass(d), b()) : i.removeClass(d)
        }, _ = function() {
            var i, o, r;
            e.featherUseFlash || p ? (r = t.paintWidget.getScaledSize(), i = r.width, o = r.height) : (i = t.paintWidget.width, o = t.paintWidget.height), n.val(i), a.val(o), s = i, l = o
        }, h = function() {
            var e = n.val(), i = a.val(), o = t.paintWidget.width, r = t.paintWidget.height;
            return e !== o || i !== r
        }, w = function() {
            var e = parseInt(n.val()), t = parseInt(a.val());
            !isNaN(e) && e > 0 && c >= e && !isNaN(t) && t > 0 && c >= t && (s = e, l = t)
        }, g = function() {
            var e = parseInt(n.val()), i = parseInt(a.val());
            return e === s && i === l ? (m(e, i), !0) : (t.messager.show("avpw_resize_invalid", !0), !1)
        }, m = function(e, n) {
            isNaN(e) || isNaN(n) || t.paintWidget.module.resize.resize(e, n, !0)
        }, b = function() {
            var i, s, l;
            e.util.nextFrame(function() {
                r && ("width" === o ? (s = parseInt(n.val()), (!s || isNaN(s)) && (s = t.paintWidget.width), i = s / t.paintWidget.width, l = t.paintWidget.height * i | 0, 1 > l && (l = 1), a.val(l)) : (l = parseInt(a.val()), (!l || isNaN(l)) && (l = t.paintWidget.height), i = l / t.paintWidget.height, s = t.paintWidget.width * i | 0, 1 > s && (s = 1), n.val(s))), w()
            })
        }, y = function() {
            avpw$(this).addClass("avpw_text_input_focused").select()
        }, C = function() {
            avpw$(this).removeClass("avpw_text_input_focused")
        }, x = function(t) {
            return e.util.keyDownHandlerNumber.apply(this, [t, function(e) {
                o = e.data.currentProp, b()
            }])
        };
        return v.init = function(o) {
            t = o, p = t.imageSizeTracker.isUsingHiResDimensions(e.launchData), c = e.launchData.hiresMaxSize || e.launchData.maxSize, n = n || avpw$("#avpw_resize_width"), n.bind("keydown", {currentProp: "width"}, x).bind("focus", y).bind("blur", C), a = a || avpw$("#avpw_resize_height"), a.bind("keydown", {currentProp: "height"}, x).bind("focus", y).bind("blur", C), i = i || avpw$("#avpw_constrain_prop"), i.click(f), avpw$("#avpw_constrain_prop_label").click(function() {
                i.trigger("click")
            }), avpw$("#avpw_resize_invalid_confirm").click(function() {
                return t.messager.hide("avpw_resize_invalid"), n.val(s), a.val(l), !1
            }), avpw$("#avpw_resize_unlocked_confirm").click(function() {
                return u = !0, t.messager.hide("avpw_resize_unlocked"), f(), !1
            }), avpw$("#avpw_resize_unlocked_cancel").click(function() {
                return u = !0, t.messager.hide("avpw_resize_unlocked"), !1
            }), avpw$("#avpw_resize_invalid_max_size").html(c)
        }, v.panelWillOpen = function() {
            _(), f(!0), u = !1, t.layoutNotify(e.launchData.openType, "hideZoomButton")
        }, v.panelDidOpen = function() {
            n.trigger("focus"), t.layoutNotify(e.launchData.openType, "scaleCanvas")
        }, v.panelWillClose = function() {
            t.layoutNotify(e.launchData.openType, "showZoomButton")
        }, v.onRedoComplete = function() {
            _()
        }, v.onUndoComplete = function() {
            _()
        }, v.commit = function() {
            var e = !0;
            return h() && (e = g()), e && (e = s + "," + l), e
        }, v.shutdown = function() {
            n && n.unbind(), a && a.unbind(), i && i.unbind(), avpw$("avpw_constrain_prop_label").unbind("click"), avpw$("#avpw_resize_invalid_confirm").unbind("click"), avpw$("#avpw_resize_unlocked_confirm").unbind("click"), avpw$("#avpw_resize_unlocked_cancel").unbind("click"), t = null
        }, v
    }(), e.ControlsWidget.prototype.tool.saturation = function() {
        var t, a, i, o, r = e.toolDefaults.saturation.presets, s = !1, l = {}, c = function(e, n) {
            o = n.value, t.paintWidget.module.saturation.applyPreview(o / 100, !0)
        };
        return l.init = function(o) {
            i = 0;
            var s = {element: n.getElementById("avpw_saturation_slider"),min: 100 * r[0],max: 100 * r[3],defaultValue: i,onchange: c};
            e.featherUseFlash || e.util.extend(s, {onslide: c,delay: 0}), t = o, a = new t.Slider(s)
        }, l.cancel = function() {
            s = !1
        }, l.panelWillOpen = function() {
            o = i
        }, l.panelDidOpen = function() {
            a.addListeners()
        }, l.panelWillClose = function() {
            a.removeListeners()
        }, l.panelDidClose = function() {
            s && (l.resetUI(), s = !1)
        }, l.onUndo = function(e) {
            e || l.resetUI(), t.paintWidget.module.saturation.resetBacking()
        }, l.onRedo = function(e) {
            !e && a && a.setValue(o)
        }, l.resetUI = function() {
            a.reset()
        }, l.commit = function() {
            t.paintWidget.module.saturation.commit()
        }, l.shutdown = function() {
            a && (a.shutdown(), a = void 0), t = null
        }, l
    }(), e.ControlsWidget.prototype.tool.sharpness = function() {
        var t, a, i, o, r = e.toolDefaults.sharpness.presets, s = !1, l = "blur", c = {}, p = function(e, n) {
            o = n.value, t.paintWidget.module.sharpen.reset(), l = "sharpen", t.paintWidget.setMode("sharpen"), t.paintWidget.module.sharpen.applyPreview(o, !0)
        };
        return c.init = function(e) {
            i = 0, t = e, a = new t.Slider({element: n.getElementById("avpw_sharpness_slider"),min: r[0],max: r[3],defaultValue: i,onchange: p})
        }, c.cancel = function() {
            s = !1
        }, c.panelWillOpen = function() {
            o = i
        }, c.panelDidOpen = function() {
            a.addListeners()
        }, c.panelWillClose = function() {
            a.removeListeners()
        }, c.panelDidClose = function() {
            s && (c.resetUI(), s = !1)
        }, c.onUndo = function(e) {
            e || c.resetUI(), t.paintWidget.module.sharpen.resetBacking()
        }, c.onRedo = function(e) {
            !e && a && a.setValue(o)
        }, c.resetUI = function() {
            a.reset()
        }, c.shutdown = function() {
            a && (a.shutdown(), a = void 0), o = i = void 0, t = null
        }, c
    }(), e.ControlsWidget.SpotTool = function(t) {
        var n, i, o = (e.toolDefaults[t].presets, {}), r = function() {
            var e = 1;
            n.canvasUI && (e = n.canvasUI.viewport.getRatio());
            var a = n.paintWidget.module[t].radius();
            a /= e, a = a + .5 | 0, n.brushPreview && n.brushPreview.show(a)
        }, s = function(e) {
            e.siblings().removeClass("avpw_preset_icon_active"), e.addClass("avpw_preset_icon_active")
        }, l = function(e) {
            e.preventDefault();
            var a = avpw$(this), i = 1;
            n.canvasUI && (i = n.canvasUI.viewport.getRatio());
            var o = a.data("size") * i / 2 | 0;
            n.paintWidget.module[t].setRadius(o), s(a), r()
        }, c = function() {
            avpw$("#avpw_controlpanel_" + t).on("mousedown touchstart", ".avpw_isa_preset_brush", l), n.canvasUI && n.canvasUI.subscribe(o)
        }, p = function() {
            avpw$("#avpw_controlpanel_" + t).off(".avpw_isa_preset_brush", "mousedown touchstart"), n.canvasUI && n.canvasUI.unsubscribe(o)
        }, u = function() {
            avpw$("#avpw_controlpanel_" + t + " .avpw_tool_cutout_centered_spot_tool").html(e.template[e.launchData.layout].brushSizesSet({sizes: [8, 13, 18, 21, 25]}))
        };
        o.init = function(e) {
            n = e
        }, o.commit = function() {
            n.paintWidget.module[t].commit()
        }, o.panelWillOpen = function() {
            e.featherUseFlash || (n.paintWidget.setMode("flatten"), n.paintWidget.module.flatten.flatten()), u(), a.trigger("canvas:showBrushCursor"), c(), n.canvasUI && n.canvasUI.setMouseCursor("none")
        }, o.panelDidOpen = function() {
            avpw$("#avpw_controlpanel_" + t).find(".avpw_isa_preset_brush").eq(2).trigger("mousedown"), d()
        }, o.panelWillClose = function() {
            p(), n.paintWidget.uiLayerShow(!1), v(), a.trigger("canvas:hideBrushCursor")
        };
        var d = function() {
            avpw$(".avpw_canvas_background").css("cursor", "none"), avpw$("#avpw_zoom_container").css("cursor", "default")
        }, v = function() {
            avpw$(".avpw_canvas_background").css("cursor", "default"), avpw$("#avpw_zoom_container").css("cursor", "default")
        };
        return o.shutdown = function() {
            n = null
        }, o.mouseDownEvent = function(a, o, r) {
            if (!i && r) {
                i = !0;
                var s = e.controlsWidgetInstance.canvasUI.viewport.getRatio(), l = n.paintWidget.module[t].radius() * s, c = a.canvasX, p = a.canvasY;
                return n.paintWidget.module[t].updateUIDown(c, p, l), !1
            }
        }, o.mouseMoveEvent = function(a) {
            {
                var o = e.controlsWidgetInstance.canvasUI.viewport.getRatio(), r = n.paintWidget.module[t].radius() * o;
                a.canvasX, a.canvasY
            }
            return n.paintWidget.module[t].updateUIMove(a.canvasX, a.canvasY, i, r), !1
        }, o.mouseUpEvent = function() {
            if (i) {
                i = !1;
                var a = e.controlsWidgetInstance.canvasUI.viewport.getRatio(), o = n.paintWidget.module[t].radius() * a;
                n.paintWidget.module[t].updateUIUp(), n.paintWidget.module[t].commitStroke(o)
            }
        }, o.mouseOutEvent = function() {
            n.paintWidget.uiLayerShow(!1)
        }, o.onEnableZoomMode = function() {
            return n.canvasUI && (n.canvasUI.unsubscribe(o), n.canvasUI.setMouseCursor()), v(), a.trigger("canvas:hideBrushCursor"), n.paintWidget.uiLayerShow(!1), !1
        }, o.onDisableZoomMode = function() {
            n.canvasUI && (n.canvasUI.subscribe(o), n.canvasUI.setMouseCursor("none")), a.trigger("canvas:showBrushCursor"), d()
        }, o.onUndoComplete = function(e) {
            return e && e.global ? (n.paintWidget.module[t].resetImageData(), !1) : void 0
        }, o.onRedoComplete = function(e) {
            return e && e.global ? (n.paintWidget.module[t].resetImageData(), !1) : void 0
        }, o
    }, e.ControlsWidget.prototype.tool.blemish = new e.ControlsWidget.SpotTool("blemish"), e.ControlsWidget.prototype.tool.whiten = new e.ControlsWidget.SpotTool("whiten"), e.ControlsWidget.prototype.tool.redeye = new e.ControlsWidget.SpotTool("redeye"), e.ControlsWidget.prototype.tool.text = function() {
        var t, n, i, o, r = e.toolDefaults.text.presetsColor, s = !1, l = !1, c = {}, p = function() {
            avpw$(".avpw_inset_color_widget .avpw_preset_icon_active").removeClass("avpw_preset_icon_active")
        }, u = function(e) {
            p(), e.addClass("avpw_preset_icon_active")
        }, d = function(t) {
            var a, o;
            a = t && e.util.color_is_light(t) ? "#000" : "#fff", o = e.util.color_is_light(t) ? "#969696" : "#fff", n = t, i = a
        }, v = function(e) {
            e.preventDefault();
            var t = avpw$(this);
            d(t.data("color")), u(t), s = !1
        }, f = function(a) {
            a.preventDefault(), a.stopPropagation();
            var i = a.currentTarget;
            e.buildColorPicker(n, i, function(e) {
                d(e), t.canvasUI && t.canvasUI.subscribe(c), u(avpw$(i))
            }, function() {
                t.canvasUI && t.canvasUI.subscribe(c)
            }), t.canvasUI && t.canvasUI.unsubscribe(c)
        }, _ = function() {
            if (!s) {
                var e, a, o, r, l = avpw$("#avpw_text_font_size").val(), c = n, p = i, u = avpw$("#avpw_text_font").val(), d = avpw$("#avpw_text_area").val(), v = 60;
                t.canvasUI && (e = t.canvasUI.getViewportCenter(), e && (a = e.canvasX, o = e.canvasY)), "" == l && (l = avpw$("#avpw_text_font_size").attr("value")), "" == l && (l = "60"), "" == u && (u = avpw$("#avpw_text_font").attr("value")), "" == u && (u = "sans-serif"), "sans-serif" == u && (u = '"Arial", sans-serif'), r = parseFloat(l) / v, t.paintWidget.module.text.newText(d, u, v, c, p, a, o, r, r, 0), s = !0, avpw$("#avpw_text_area").trigger("blur")
            }
            return !1
        }, h = function(e) {
            e[0].value = "", o = !1, e.addClass("avpw_text_input_focused")
        }, w = function(t) {
            t[0].value = e.getLocalizedString("Enter text here"), o = !0, t.removeClass("avpw_text_input_focused")
        }, g = function() {
            o && h(avpw$(this)), s = !1
        }, m = function(e) {
            return 13 == e.which ? (avpw$("#avpw_add_text").trigger("click"), !1) : void 0
        }, b = function() {
            avpw$("#avpw_controlpanel_text").delegate(".avpw_isa_preset_color", "click", v).delegate(".avpw_isa_color_picker", "click", f), avpw$("#avpw_text_area").bind("focus", g).bind("keydown", m), avpw$("#avpw_add_text").click(_)
        }, y = function() {
            avpw$("#avpw_controlpanel_text").undelegate(".avpw_isa_preset_color", "click").undelegate(".avpw_isa_color_picker", "click"), avpw$("#avpw_text_area").unbind(), avpw$("#avpw_add_text").unbind("click")
        }, C = function() {
            var n, a, i = r.length, o = "";
            for (n = 0; i > n; n++)
                a = {color: r[n]}, o += e.template[e.launchData.layout].brushColorIcon(a);
            avpw$("#avpw_text_colors").html(o);
            var s = t.layoutNotify(e.launchData.openType, "getDims");
            avpw$("#avpw_text_area").css("width", s.INNER_BROWSER_WIDTH - s.TEXT_ADD_TEXT_BUTTON_WIDTH - 80 + "px")
        };
        return c.init = function(e) {
            t = e, C()
        }, c.panelWillOpen = function() {
            l = !1, s = !1, w(avpw$("#avpw_text_area")), b(), t.canvasUI && t.canvasUI.subscribe(c), avpw$.miniColors && (e.miniColors = new avpw$.miniColors), a.on("layout:resize", C)
        }, c.panelDidOpen = function() {
            _addListeners()
        }, c.panelWillClose = function() {
            _removeListeners(), t.paintWidget.module.effects.deactivate()
        }, c.panelDidOpen = function() {
            avpw$("#avpw_text_colors").find(".avpw_isa_preset_color").eq(0).trigger("click")
        }, c.panelWillClose = function() {
            y(), t.canvasUI && t.canvasUI.unsubscribe(c), avpw$("#avpw_text_area").trigger("blur"), e.miniColors = null, a.off("layout:resize", C)
        }, c.shutdown = function() {
            t = null
        }, c.mouseDownEvent = function(e) {
            if (!l) {
                var n = t.paintWidget.module.text.updateUIDown(e.canvasX, e.canvasY);
                return n !== !1 && (l = !0, "rotate" === n ? t.canvasUI.setMouseCursor("pointer") : "translate" === n && t.canvasUI.setMouseCursor("move")), !1
            }
        }, c.mouseMoveEvent = function(e) {
            return l ? (t.paintWidget.module.text.updateUIMove(e.canvasX, e.canvasY), !1) : void 0
        }, c.mouseUpEvent = function(e) {
            l && (s = !1, t.canvasUI.setMouseCursor(), t.paintWidget.module.text.apply(e.canvasX, e.canvasY), l = !1)
        }, c.onEnableZoomMode = function() {
            return t.canvasUI && t.canvasUI.unsubscribe(c), !1
        }, c.onDisableZoomMode = function() {
            t.canvasUI && t.canvasUI.subscribe(c)
        }, c
    }(), e.ControlsWidget.prototype.tool.textwithfont = function() {
        var t, n, i, o, r, s, l, c = e.getLocalizedString("Enter text here"), p = {label: "Arial Black",value: "'Arial Black','Arial-BoldMT','ArialMT','Arial','sans-serif'"}, u = 24, d = "avpw_textwithfont_overlay_helptext", v = "avpw_selection_overlay_disable_user_select", f = "avpw_inset_button_active", _ = 60, h = 10, w = 1 / 12, g = e.toolDefaults.textwithfont.presetsColor, m = e.toolDefaults.textwithfont.presetsFont, b = null, y = {OFF_STATE: 0,DRAG_STATE: 1,EDIT_STATE: 2}, C = 18, x = 4 * (C + 2 * u), I = !1, T = !1, k = p, S = u, D = g[0], W = 1, E = !1, N = {}, P = function(e) {
            e = e || p, k = e, V(e), a.trigger("usage:interact", "textwithfont", "fontchanged", e.label);
            var t = n.currentOverlay();
            t && (Y(t, e), Z(e), it(t), n.saveDimensions(), $())
        }, $ = function(t) {
            t = t || n.currentOverlay();
            var a, i, o, r, s, l, c;
            if (t && (a = t.element.find(".avpw_textwithfont_writer"), r = ot(), s = t.textSize, l = s / 2 + .5 | 0, i = a[0], a.css({"margin-top": "-" + l + "px"}), i.height = r.height + s, i.width = r.width, i && t.text)) {
                c = t.textFont.style;
                var p = (c ? c + " " : "") + t.textSize + "px " + t.textFont.value, u = i.getContext("2d");
                o = e.controlsWidgetInstance.canvasUI ? e.controlsWidgetInstance.canvasUI.viewport.getRatio() : 1, u.font = p, u.textAlign = "center", u.textBaseline = "bottom", u.fillStyle = t.textColor, u.globalAlpha = 1;
                var d, v = i.width / 2 + .5 | 0, f = s, _ = t.text.split("\n"), h = _.length * s, g = (i.height - h) / 2 + .5 | 0;
                for (f += g, d = 0; d < _.length; d++)
                    t.textOutline && (outlineColor = e.util.color_is_light(t.textColor) ? "#000000" : "#ffffff", u.strokeStyle = outlineColor, u.lineWidth = s * w, u.strokeText(_[d], v, f)), u.fillText(_[d], v, f), f += s
            }
        }, A = function(t, a) {
            var i = b[t];
            e.util.addFontToPage && e.WebFont && (n.hideCurrentOverlay(), avpw$("#avpw_font_browser_preview").hide(), e.util.addFontToPage(i, function(t) {
                return a ? void avpw$("#avpw_font_browser_preview").show() : (t = avpw$.extend(t, {value: t.value + ("," + p.value)}), P(t), avpw$("#avpw_font_browser_preview").show(), void e.util.nextFrame(n.showCurrentOverlay))
            }))
        }, L = function() {
            st();
            var a, o, r, s, l = Math.floor(4294967295 * Math.random()).toString(16), c = "text_overlay-" + l, p = avpw$(e.template[e.launchData.layout].selectionOverlay({id: c,body: e.template[e.launchData.layout].textEntryOverlayBody()}));
            a = 1, t.canvasUI && (a = t.canvasUI.viewport.getRatio()), o = _ + 2 * h, r = {left: (t.paintWidget.width / a - o) / 2 + "px",top: i + "px",width: _ + "px"}, p.css(r), s = {id: c,helpTextShown: !1,initialCoordsX: 0,initialCoordsY: 0,element: p}, Y(s, k), Z(k), K(s, S || u), Q(S || u), J(s, D || g[0]), tt(s, W || 1), n.newOverlay(s), st(), wt(!0)
        }, O = function() {
            r = avpw$(e.template[e.launchData.layout].textEntryOverlayProxy()), t.layoutNotify(e.launchData.openType, "getCanvasControlsElement").append(r)
        }, U = function() {
            r && r.length && r.remove()
        }, M = function(n) {
            var a, i, o, r, s, l, p, u, d, v;
            d = n.text, d && d !== c && (v = e.controlsWidgetInstance.canvasUI ? e.controlsWidgetInstance.canvasUI.viewport.getRatio() : 1, o = n.textSize * v + .5 | 0, r = n.rotation || 0, s = n.textColor, n.textOutline && (l = e.util.color_is_light(n.textColor) ? "#000000" : "#ffffff"), p = n.textOpacity, u = n.textFont, a = n.centerX * v + .5 | 0, i = n.centerY * v + .5 | 0, Q(n.textSize), Z(n.textFont), e.featherGLEnabled ? ($(n), t.paintWidget.module.textwithfont.drawOverlayInGl(n, n.centerX * v, n.centerY * v, v, r)) : t.paintWidget.module.textwithfont.newText(d, u, o, o, s, l, p, a, i, r))
        }, z = function() {
            avpw$(".avpw_inset_color_widget .avpw_preset_icon_active").removeClass("avpw_preset_icon_active")
        }, R = function(e) {
            z(), e.addClass("avpw_preset_icon_active")
        }, F = function(t) {
            var a, i;
            a = t && e.util.color_is_light(t) ? "#000" : "#fff", i = e.util.color_is_light(t) ? "#969696" : "#fff", D = t, J(n.currentOverlay(), t)
        }, B = function(e) {
            e.preventDefault();
            var t = avpw$(this), n = t.data("color");
            F(n), R(t), a.trigger("usage:interact", "textwithfont", "colorchanged", n)
        }, H = function(n) {
            n.preventDefault(), n.stopPropagation();
            var a = n.currentTarget;
            l = e.buildColorPicker(D, a, function(e) {
                F(e), t.canvasUI && t.canvasUI.subscribe(N), R(avpw$(a))
            }, function() {
                t.canvasUI && t.canvasUI.subscribe(N)
            }), t.canvasUI && t.canvasUI.unsubscribe(N)
        }, j = function(e) {
            var t = avpw$("#avpw_textwithfont_outline_toggle");
            e ? t.addClass(f) : t.removeClass(f), et(), E = e
        }, V = function(e) {
            e = e || p, avpw$("#avpw_font_browser_preview").css({"font-family": e.value,"font-style": e.style || "normal"}), o && o.update(e.label)
        }, q = function(e) {
            var t = avpw$("#avpw_textwithfont_colors").find(".avpw_isa_preset_color").filter('[data-color="' + e + '"]').eq(0);
            F(e), t && t.length ? R(t) : (t = avpw$("#avpw_controlpanel_textwithfont").find(".avpw_isa_color_picker"), R(t))
        }, X = function(e) {
            e.preventDefault();
            var t = n.currentOverlay();
            t && t.element && t.element.find(".avpw_textwithfont_entry").trigger("blur"), L(), a.trigger("usage:interact", "textwithfont", "textadded")
        }, G = function(e) {
            e && e.element && e.element.find(".avpw_textwithfont_entry").css({"font-family": e.textFont.value,"font-size": e.textSize + "px","font-style": e.textFont.style || "normal"})
        }, Y = function(e, t) {
            e = e || n.currentOverlay(), e && (e.textFont = t, $(), G(e))
        }, Z = function(e) {
            e = e || p, r && r.length && r.css({"font-family": e.value,"font-style": e.style || "normal"})
        }, K = function(e, t) {
            e = e || n.currentOverlay(), e && (e.textSize = t, G(e), $(), et(e))
        }, Q = function(e) {
            var t;
            r && r.length && (t = e || 0, r.css({"font-size": e,padding: "0 " + t + "px"}))
        }, J = function(e, t) {
            e = e || n.currentOverlay(), e && (e.textColor = t, $(e), e.mode === y.EDIT_STATE && (et(e, t), e.element.find(".avpw_textwithfont_entry").css("color", t)))
        }, et = function(t, a) {
            if (t = t || n.currentOverlay()) {
                a = a || t.textColor;
                var i = "";
                E ? (t.textOutline = !0, i = e.template[e.launchData.layout].textEntryOutlineStyle(a && e.util.color_is_light(a) ? {size: w * t.textSize,color: "#000"} : {size: w * t.textSize,color: "#fff"})) : t.textOutline = !1, $(), t.mode === y.EDIT_STATE && (t.element.find(".avpw_textwithfont_entry")[0].style.textShadow = i)
            }
        }, tt = function(e, t) {
            e = e || n.currentOverlay(), e && (e.textOpacity = t)
        }, nt = function(e) {
            var t, a = n.currentOverlay();
            a && s && (t = s * e | 0, K(a, t), Q(t))
        }, at = function(e) {
            r && r.length && (e = e.replace(/>/g, "&gt;").replace(/</g, "&lt;"), r.find(".avpw_proxy_get_height").html(" " + e + " "))
        }, it = function(e) {
            var t, n, a, i, o, s;
            e && e.element && r && r.length && (dims = ot(), i = dims.width || 0, o = dims.height || 0, t = e.topLeftX, n = e.width, s = (n - i) / 2 + .5 | 0, a = t + s, e.element.css({width: i + "px",left: a + "px",height: o + "px"}))
        }, ot = function() {
            var e, t, n = {};
            return r && r.length && (e = r.outerWidth(), t = r.find(".avpw_proxy_get_height").height(), n.height = t, n.width = e), n
        }, rt = function() {
            var e, t = n.currentOverlay();
            t && (e = t.element.find(".avpw_textwithfont_entry"), e && e.length && (e.val(""), at(""), it(t), t.helpTextShown = !1, t.element.removeClass(d)))
        }, st = function() {
            var e, t = n.currentOverlay();
            t && (e = t.element.find(".avpw_textwithfont_entry"), e && e.length && (e.val() || (e.val(c), at(c), it(t), t.text = c, t.helpTextShown = !0, t.element.addClass(d), $())))
        }, lt = function() {
            var e = n.currentOverlay();
            J(e, D || g[0]), tt(e, W || 1)
        }, ct = function() {
            var e = n.currentOverlay();
            e && e.element.find(".avpw_textwithfont_entry").css({color: "transparent","text-shadow": ""})
        }, pt = function(e) {
            var t = n.currentOverlay();
            t && t.mode === y.EDIT_STATE ? t.helpTextShown && rt() : e.target && avpw$(e.target).trigger("blur")
        }, ut = function() {
            var e, t = n.currentOverlay();
            if (t) {
                if (t.helpTextShown && rt(), e = t.element.find(".avpw_textwithfont_entry").eq(0).val(), t.text = e, at(e), I || T)
                    return;
                it(t), n.saveDimensions()
            }
        }, dt = function() {
            var e = n.currentOverlay();
            e && it(e)
        }, vt = function() {
            avpw$("#avpw_controlpanel_textwithfont").delegate(".avpw_isa_preset_color", "click", B).delegate(".avpw_isa_color_picker", "click", H), avpw$("#avpw_textwithfont_addtext").bind("click", X), t.layoutNotify(e.launchData.openType, "getCanvasControlsElement").delegate(".avpw_selection_overlay", "keydown", pt).delegate(".avpw_selection_overlay", "keyup", ut), avpw$("#avpw_controlpanel_textwithfont").find(".avpw_inset_button").pressed("avpw_inset_button_down")
        }, ft = function() {
            avpw$("#avpw_controlpanel_textwithfont").undelegate(".avpw_isa_preset_color", "click").undelegate(".avpw_isa_color_picker", "click"), avpw$("#avpw_textwithfont_addtext").unbind("click", X), t.layoutNotify(e.launchData.openType, "getCanvasControlsElement").undelegate(".avpw_selection_overlay", "keydown").undelegate(".avpw_selection_overlay", "keyup"), avpw$("#avpw_controlpanel_textwithfont").find(".avpw_inset_button").unbind()
        }, _t = function() {
            var e, t, n;
            if (b = {}, m)
                for (t = m.length, e = 0; t > e; e++)
                    n = m[e], b[m[e].label] = n
        }, ht = function() {
            var t, n, a = g.length, i = "";
            for (t = 0; a > t; t++)
                n = {color: g[t]}, i += e.template[e.launchData.layout].brushColorIcon(n);
            avpw$("#avpw_textwithfont_colors").html(i)
        }, wt = function(e) {
            var t = 2 * S + C;
            e ? i += t : i -= t, (i > x || 0 > i) && (i = C)
        };
        N.init = function(a) {
            t = a, e.launchData.textColorPresets && (g = e.launchData.textColorPresets), ht(), _t(), o = new e.Dropdown({defaultValue: p.label,updateElement: avpw$("#avpw_font_browser"),popupElement: avpw$(e.template[e.launchData.layout].fontGroupPopup()),popupParent: avpw$("#avpw_controls"),items: m,itemTemplate: e.template[e.launchData.layout].fontGroupPopupItem,onItemClicked: A}), t.layoutNotify(e.launchData.openType, "subscribeToResize", ["buildTextWithFontPresets", function() {
                ht(), o && o.position()
            }]), n = new e.OverlayController(a, a.paintWidget, {modes: y,onModeChange: function(e, t) {
                e.text || st(), ct(), t === y.DRAG_STATE ? ($(), e.element.find(".avpw_textwithfont_entry").trigger("blur")) : t === y.EDIT_STATE && (e.element.find(".avpw_textwithfont_entry").removeClass(v), lt())
            },handlePosition: e.OverlayController.HANDLE_POSITION.BOTTOM_RIGHT})
        };
        var gt = function() {
            if (e.customFontPresets) {
                var t = [], n = e.toolDefaults.textwithfont.presetsFont = e.customFontPresets[0];
                if (n) {
                    for (var a = 0, i = n.length; i > a; a++)
                        n[a] && t.push(n[a]);
                    m = t, _t(), o.shutdown();
                    for (var r, a = 0, i = n.length; i > a; a++)
                        r = n[a], r && r.custom && A(r.label, !0);
                    o = new e.Dropdown({defaultValue: p.label,updateElement: avpw$("#avpw_font_browser"),popupElement: avpw$(e.template[e.launchData.layout].fontGroupPopup()),popupParent: avpw$("#avpw_controls"),items: m,itemTemplate: e.template[e.launchData.layout].fontGroupPopupItem,onItemClicked: A})
                }
            }
        };
        N.panelWillOpen = function() {
            e.launchData.enableCustomFonts && gt(), st(), I = !1, T = !1, k = p, S = u, D = g[0], V(k), j(E), t.canvasUI && t.canvasUI.subscribe(N), vt(), avpw$.miniColors && (e.miniColors = new avpw$.miniColors), O(), t.layoutNotify(e.launchData.openType, "hideZoomButton"), t.layoutNotify(e.launchData.openType, "showCanvasControlsElement"), t.layoutNotify(e.launchData.openType, "scaleCanvas"), n.activate(), i = C
        }, N.panelDidOpen = function() {
            L(), q(D), o && (o.position(), o.update()), a.on("layout:resize", mt)
        };
        var mt = function() {
            o && o.position()
        };
        return N.panelWillClose = function() {
            U(), ft(), t.canvasUI && t.canvasUI.unsubscribe(N), l && (l.hideColorPicker(), l = null), e.miniColors = null, o && o.hide(), t.layoutNotify(e.launchData.openType, "showZoomButton"), t.layoutNotify(e.launchData.openType, "hideCanvasControlsElement"), n.deactivate(), a.off("layout:resize", mt)
        }, N.shutdown = function() {
            t && t.layoutNotify(e.launchData.openType, "unsubscribeToResize", ["buildTextWithFontPresets"]), o && (o.shutdown(), o = void 0), t = null, b = null
        }, N.mouseDownEvent = function(e, t) {
            return n.updateUIDown(e, t, function(e, t) {
                t && e.element.find(".avpw_textwithfont_entry").removeClass(v), st()
            }, function(e) {
                s = e.textSize
            }, function(e) {
                a.trigger("usage:interact", "textwithfont", "textremoved", e.text), n.isLastOverlayAdded(e) && wt()
            })
        }, N.mouseMoveEvent = function(e, t) {
            return n.updateUIMove(e, t, function(e) {
                e.mode !== y.EDIT_STATE && e.element.find(".avpw_textwithfont_entry").addClass(v), e.wasMoved && e.element.find(".avpw_textwithfont_entry").trigger("blur")
            }, function(e, t) {
                t = t || 1, nt(t), $()
            }), !1
        }, N.mouseUpEvent = function(e, t) {
            n.apply(e, t, function(e, t, i) {
                t ? (q(e.textColor), Q(e.textSize), j(e.textOutline), V(e.textFont), Z(e.textFont), e.text ? at(e.text) : st(), dt(), i || e.wasMoved || !n.isLastOverlayAdded(e) || (e.wasMoved = !0, wt())) : e && e.element.find(".avpw_textwithfont_entry").trigger("blur"), i && a.trigger("usage:interact", "textwithfont", "sizechanged", e ? e.textSize : "")
            })
        }, N.onEnableZoomMode = function() {
            return t.canvasUI && t.canvasUI.unsubscribe(N), !1
        }, N.onDisableZoomMode = function() {
            t.canvasUI && t.canvasUI.subscribe(N)
        }, N.commit = function() {
            n.commit(M)
        }, N
    }(), e.ControlsWidget.prototype.tool.focus = function() {
        var n, i, o, r, s = 150, l = 10, c = {OFF_STATE: 0,DRAG_STATE: 1}, p = {}, u = "circle", d = 30, v = -1, f = -1, _ = function() {
            o.element.stop().animate({opacity: 1}, 100)
        }, h = function() {
            o.element.stop().animate({opacity: 0}, 300)
        }, w = function() {
            avpw$(".avpw_tiltshift_circle_button").addClass("avpw_inset_button_down").siblings().removeClass("avpw_inset_button_down"), r.removeClass("avpw_tiltshift_rectangle").addClass("avpw_tiltshift_circle"), u = "circle", i.setHandlePosition(e.OverlayController.HANDLE_POSITION.BOTTOM_CENTER), m(-.785398163), C(), a.trigger("usage:interact", "focus", "CircleClicked")
        }, g = function() {
            avpw$(".avpw_tiltshift_rectangle_button").addClass("avpw_inset_button_down").siblings().removeClass("avpw_inset_button_down"), r.removeClass("avpw_tiltshift_circle").addClass("avpw_tiltshift_rectangle"), u = "rectangle", i.setHandlePosition(e.OverlayController.HANDLE_POSITION.BOTTOM_CENTER), m(0), C(), a.trigger("usage:interact", "focus", "RectangleClicked")
        }, m = function(t) {
            var a = e.controlsWidgetInstance.canvasUI.viewport.getRatio();
            o.element.css({width: s,height: s,top: n.paintWidget.height / 2 / a - s / 2,left: n.paintWidget.width / 2 / a - s / 2}), i.setRotation(o, t), i.saveDimensions(o)
        }, b = function(t, a) {
            var c, p, u, d, v, f, _ = Math.floor(4294967295 * Math.random()).toString(16), h = "avpw_tiltshift_overlay-" + _;
            f = "minimum" === e.launchData.theme && "Microsoft Internet Explorer" == navigator.appName ? '<div class="avpw_tiltshift_shape"><img class="avpw_ie_img_event_bubble"/></div>' : '<div class="avpw_tiltshift_shape"></div>', r = avpw$(e.template[e.launchData.layout].selectionOverlay({id: h,body: f})).addClass("avpw_tiltshift_overlay"), u = 1, n.canvasUI && (u = n.canvasUI.viewport.getRatio()), d = s + 2 * l, c = t / u - d / 2, p = a / u - d / 2, v = {left: c + "px",top: p + "px",width: s + "px",height: s + "px"}, r.css(v), o = {id: h,initialCoordsX: 0,initialCoordsY: 0,element: r}, i.newOverlay(o)
        }, y = function() {
        };
        p.init = function(t) {
            n = t, avpw$.support.touch && (_ = h = function() {
            }), d = .1 * n.paintWidget.width < n.paintWidget.height ? n.paintWidget.width : n.paintWidget.height, e.OverlayController && (i = new e.OverlayController(t, t.paintWidget, {modes: c,aspectRatio: 1,handlePosition: e.OverlayController.HANDLE_POSITION.BOTTOM_CENTER,forceDragMode: !0,minimumOverlaySize: 40,maximumOverlaySize: d}))
        }, p.panelDidOpen = function() {
            w(), a.trigger("usage:interact", "focus", "Opened"), a.on("canvas:resize", C)
        }, p.panelWillOpen = function() {
            if (n.canvasUI && n.canvasUI.subscribe(p), avpw$("#avpw_controlpanel_focus").delegate(".avpw_tiltshift_circle_button", "mousedown", w).delegate(".avpw_tiltshift_rectangle_button", "mousedown", g), i) {
                i.activate();
                var e = Math.min(n.paintWidget.width, n.paintWidget.height);
                s > e && (s = .9 * e, 40 > s && (s = 40)), b(n.paintWidget.width / 2, n.paintWidget.height / 2, 100, 100)
            }
        }, p.panelWillClose = function() {
            n.canvasUI && n.canvasUI.unsubscribe(p), avpw$("#avpw_controlpanel_focus").undelegate(), i && i.deactivate(), a.trigger("usage:interact", "focus", "Closed"), a.off("canvas:resize", C)
        }, p.shutdown = function() {
            y(), n = null, a.off("canvas:resize", C)
        };
        var C = function() {
            var t = e.controlsWidgetInstance.canvasUI.viewport.getRatio(), a = (o.element.position(), o.element[0]), i = a ? parseInt(a.style.width, 10) : 0, r = a ? avpw$(a).height() : 0, s = a ? parseInt(a.style.left, 10) : 0, l = a ? parseInt(a.style.top, 10) : 0, c = (s + i / 2) * t, p = (l + r / 2) * t, d = i / 2 * t - 3;
            if ("circle" == u)
                n.paintWidget.module.focus.applyRadialBlur(c, p, d);
            else if ("rectangle" == u) {
                var v = o.rotation || 0, d = r * t;
                n.paintWidget.module.focus.applyLinearBlur(c, p, d / 2, -v)
            }
        }, x = function() {
            e.msie || (t.clearTimeout(f), f = t.setTimeout(C, 5))
        };
        return p.mouseDownEvent = function(e, t) {
            return _(), i.updateUIDown(e, t, function() {
            }, null, function() {
            }, function() {
                h()
            })
        }, p.mouseMoveEvent = function(e) {
            return o && (_(), t.clearTimeout(v), v = t.setTimeout(h, 900), i.updateUIMove(e, null, null, x, x)), !1
        }, p.mouseUpEvent = function(t, n) {
            e.msie && C(), i.apply(t, n)
        }, p.onEnableZoomMode = function() {
            return n.canvasUI && (n.canvasUI.unsubscribe(p), h()), !1
        }, p.onDisableZoomMode = function() {
            n.canvasUI && (n.canvasUI.subscribe(p), _())
        }, p.cancel = function() {
            n.paintWidget.module.focus.reset(), a.trigger("usage:interact", "focus", "Canceled")
        }, p.commit = function() {
            n.paintWidget.module.focus.commit(), a.trigger("usage:interact", "focus", "Applied", u)
        }, p.onUndoComplete = function(e) {
            return e && e.global ? (n.paintWidget.module.focus.resetImageData(), !1) : void 0
        }, p.onRedoComplete = function(e) {
            return e && e.global ? (n.paintWidget.module.focus.resetImageData(), !1) : void 0
        }, p
    }(), e.ControlsWidget.prototype.tool.warmth = function() {
        var t, a, i, o, r = e.toolDefaults.warmth.presets, s = !1, l = {}, c = function(e, n) {
            o = n.value, t.paintWidget.module.warmth.applyPreview(o, !0)
        };
        return l.init = function(e) {
            i = 0, t = e, a = new t.Slider({element: n.getElementById("avpw_warmth_slider"),min: r[0],max: r[3],defaultValue: i,delay: 0,onchange: c,onslide: c})
        }, l.cancel = function() {
            s = !1
        }, l.panelWillOpen = function() {
            o = i
        }, l.panelDidOpen = function() {
            a.addListeners()
        }, l.panelWillClose = function() {
            a.removeListeners()
        }, l.panelDidClose = function() {
            s && (l.resetUI(), s = !1)
        }, l.onUndo = function(e) {
            e || l.resetUI(), t.paintWidget.module.warmth.resetBacking()
        }, l.onRedo = function(e) {
            !e && a && a.setValue(o)
        }, l.resetUI = function() {
            a.reset()
        }, l.commit = function() {
            t.paintWidget.module.warmth.commit()
        }, l.shutdown = function() {
            a && (a.shutdown(), a = void 0), t = null
        }, l
    }();
    if (typeof e == "undefined") {
        e = {}
    }
    (function(e) {
        e["en"] = {"About this editor": "About this editor","Add Text": "Add Text",Apply: "Apply","Are you sure? This can distort your image": "Are you sure? This can distort your image","Aviary is the world's leading photo editing platform. Developers: learn how to add it to your app in minutes.": "Aviary is the world's leading photo editing platform. Developers: learn how to add it to your app in minutes.",Balance: "Balance",Blemish: "Blemish",Brightness: "Brightness","Brush Size": "Brush Size",Cancel: "Cancel","Click to release": "Click to release",Close: "Close","Color Fix": "Color Fix","Color Picker": "Color Picker",Contrast: "Contrast",Crop: "Crop",Draw: "Draw",Effects: "Effects",Enhance: "Enhance","Enter text here": "Enter text here",Eraser: "Eraser",Eraser: "Eraser",Focus: "Focus",Frame: "Frame",Frames: "Frames","Free Color": "Free Color","Get this editor": "Get this editor","Have a suggestion to improve this photo editor? Let us know.": "Have a suggestion to improve this photo editor? Let us know.",Height: "Height","Help / Support": "Help / Support","Hi-Def": "Hi-Def",Illuminate: "Illuminate","Maintain proportions": "Maintain proportions",Mirror: "Mirror",Night: "Night",OK: "OK",Orientation: "Orientation",Original: "Original","Photo Editor": "Photo Editor","Please install {Adobe Flash Player} (version {min} or higher), or use a supported browser: {Chrome}, {Firefox}, {Safari}, {Opera}, or {Internet Explorer} (version 9 or higher).": "Please install {Adobe Flash Player} (version {min} or higher), or use a supported browser: {Chrome}, {Firefox}, {Safari}, {Opera}, or {Internet Explorer} (version 9 or higher).","Powered by": "Powered by",Redeye: "Redeye",Remove: "Remove",Resume: "Resume",Rotate: "Rotate",Saturation: "Saturation",Save: "Save","Send Feedback": "Send Feedback",Shape: "Shape",Sharpness: "Sharpness","Smart Color": "Smart Color",Splash: "Splash",Stickers: "Stickers",Text: "Text","Wait! You didn't save your work. Are you certain that you want to close this editor?": "Wait! You didn't save your work. Are you certain that you want to close this editor?",Warmth: "Warmth",Whiten: "Whiten",Width: "Width","Width and height must be greater than zero and less than the maximum ({max}px)": "Width and height must be greater than zero and less than the maximum ({max}px)","Your work was saved!": "Your work was saved!","Zoom Mode": "Zoom Mode","Your photo is smaller than the required size. Please choose a new one to proceed.": "Your photo is smaller than the required size. Please choose a new one to proceed.",Night: "Night","Visit Aviary.com": "Visit Aviary.com",Original: "Original"}
    })(e.lang = e.lang || {})
})(window["AV"] || (window["AV"] = {}), window, document);
