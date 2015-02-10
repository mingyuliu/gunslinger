!function(e, t, o) {
    "undefined" == typeof e && (e = {}), e.toBitmapURL = function(e) {
        var t = function(t) {
            var o = "";
            if ("string" == typeof t)
                o = t;
            else
                for (var r = t, a = 0; a < r.length; a++)
                    o += String.fromCharCode(r[a]);
            return e.btoa(o)
        }, o = function(e) {
            var o = [], r = e.width, a = e.height;
            o.push(66), o.push(77);
            var i = r * a * 3 + 54;
            o.push(i % 256), i = Math.floor(i / 256), o.push(i % 256), i = Math.floor(i / 256), o.push(i % 256), i = Math.floor(i / 256), o.push(i % 256), o.push(0), o.push(0), o.push(0), o.push(0), o.push(54), o.push(0), o.push(0), o.push(0);
            var n = [];
            n.push(40), n.push(0), n.push(0), n.push(0);
            var l = r;
            n.push(l % 256), l = Math.floor(l / 256), n.push(l % 256), l = Math.floor(l / 256), n.push(l % 256), l = Math.floor(l / 256), n.push(l % 256);
            var s = a;
            n.push(s % 256), s = Math.floor(s / 256), n.push(s % 256), s = Math.floor(s / 256), n.push(s % 256), s = Math.floor(s / 256), n.push(s % 256), n.push(1), n.push(0), n.push(24), n.push(0), n.push(0), n.push(0), n.push(0), n.push(0);
            var u = r * a * 3;
            n.push(u % 256), u = Math.floor(u / 256), n.push(u % 256), u = Math.floor(u / 256), n.push(u % 256), u = Math.floor(u / 256), n.push(u % 256);
            for (var f = 0; 16 > f; f++)
                n.push(0);
            var c = (4 - 3 * r % 4) % 4, d = e.data, h = "", m = a;
            do {
                for (var g = r * (m - 1) * 4, p = "", v = 0; r > v; v++) {
                    var _ = 4 * v;
                    p += String.fromCharCode(d[g + _ + 2]), p += String.fromCharCode(d[g + _ + 1]), p += String.fromCharCode(d[g + _])
                }
                for (var x = 0; c > x; x++)
                    p += String.fromCharCode(0);
                h += p
            } while (--m);
            var y = t(o.concat(n)) + t(h);
            return y
        };
        return function(e) {
            var t = e.width, r = e.height;
            return o(e.getContext("2d").getImageData(0, 0, t, r))
        }
    }(t), "undefined" == typeof e && (e = {}), function(e, t) {
        function o(e) {
            return function() {
                return this[e]
            }
        }
        function r(e, t) {
            var o = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : [];
            return function() {
                return o.push.apply(o, arguments), t.apply(e, o)
            }
        }
        function a(e) {
            this.F = e, this.U = Q
        }
        function i(e, o, r) {
            e = e.F.getElementsByTagName(o)[0], e || (e = t.documentElement), e && e.lastChild && e.insertBefore(r, e.lastChild)
        }
        function n(e) {
            function o() {
                t.body ? e() : setTimeout(o, 0)
            }
            o()
        }
        function l(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }
        function s(e, t) {
            return e.createElement("link", {rel: "stylesheet",href: t})
        }
        function u(e, t) {
            return e.createElement("script", {src: t})
        }
        function f(e, t) {
            for (var o = e.className.split(/\s+/), r = 0, a = o.length; a > r; r++)
                if (o[r] == t)
                    return;
            o.push(t), e.className = o.join(" ").replace(/^\s+/, "")
        }
        function c(e, t) {
            for (var o = e.className.split(/\s+/), r = [], a = 0, i = o.length; i > a; a++)
                o[a] != t && r.push(o[a]);
            e.className = r.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")
        }
        function d(e, t) {
            for (var o = e.className.split(/\s+/), r = 0, a = o.length; a > r; r++)
                if (o[r] == t)
                    return K;
            return et
        }
        function h(e, t, o) {
            if (e.U === Q) {
                var r = e.F.createElement("p");
                r.innerHTML = '<a style="top:1px;">w</a>', e.U = /top/.test(r.getElementsByTagName("a")[0].getAttribute("style"))
            }
            e.U ? t.setAttribute("style", o) : t.style.cssText = o
        }
        function m(e, t, o, r, a, i, n, l) {
            this.za = e, this.Fa = t, this.na = o, this.ma = r, this.Ca = a, this.Ba = i, this.la = n, this.Ga = l
        }
        function g(e, t) {
            this.a = e, this.j = t
        }
        function p(e) {
            var t = x(e.a, /(iPod|iPad|iPhone|Android)/, 1);
            return "" != t ? t : (e = x(e.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1), "" != e ? ("Mac_PowerPC" == e && (e = "Macintosh"), e) : "Unknown")
        }
        function v(e) {
            var t = x(e.a, /(OS X|Windows NT|Android|CrOS) ([^;)]+)/, 2);
            return t || (t = x(e.a, /(iPhone )?OS ([\d_]+)/, 2)) ? t : (e = x(e.a, /Linux ([i\d]+)/, 1)) ? e : "Unknown"
        }
        function _(e) {
            return e = x(e, /(\d+)/, 1), "" != e ? parseInt(e, 10) : -1
        }
        function x(e, t, o) {
            return (e = e.match(t)) && e[o] ? e[o] : ""
        }
        function y(e) {
            return e.documentMode ? e.documentMode : void 0
        }
        function M(e, t, o) {
            this.c = e, this.g = t, this.V = o, this.k = "wf", this.h = new N("-")
        }
        function C(e) {
            f(e.g, e.h.e(e.k, "loading")), b(e, "loading")
        }
        function w(e) {
            c(e.g, e.h.e(e.k, "loading")), d(e.g, e.h.e(e.k, "active")) || f(e.g, e.h.e(e.k, "inactive")), b(e, "inactive")
        }
        function b(e, t, o, r) {
            e.V[t] && e.V[t](o, r)
        }
        function D() {
            this.ea = {}
        }
        function S(e, t) {
            var o, r = [];
            for (o in t)
                if (t.hasOwnProperty(o)) {
                    var a = e.ea[o];
                    a && r.push(a(t[o]))
                }
            return r
        }
        function P(e, t, o, r, a) {
            this.c = e, this.A = t, this.n = o, this.u = r, this.D = a, this.L = 0, this.ia = this.da = et
        }
        function T(e) {
            0 == --e.L && e.da && (e.ia ? (e = e.A, c(e.g, e.h.e(e.k, "loading")), c(e.g, e.h.e(e.k, "inactive")), f(e.g, e.h.e(e.k, "active")), b(e, "active")) : w(e.A))
        }
        function E(e, t, o, r, a, i, n, l, s) {
            this.I = e, this.Z = t, this.c = o, this.n = r, this.u = a, this.D = i, this.ya = new U, this.v = new k, this.M = n, this.B = l, this.qa = s || "BESbswy", this.P = A(this, "arial,'URW Gothic L',sans-serif"), this.Q = A(this, "Georgia,'Century Schoolbook L',serif"), this.ba = this.P, this.ca = this.Q, this.R = R(this, "arial,'URW Gothic L',sans-serif"), this.S = R(this, "Georgia,'Century Schoolbook L',serif")
        }
        function F(e) {
            e.u(function(e, t) {
                return function() {
                    t.call(e)
                }
            }(e, e.K), 25)
        }
        function L(e, t) {
            l(e.R), l(e.S), t(e.M, e.B)
        }
        function A(e, t) {
            var o = R(e, t, K), r = e.n.p(o);
            return l(o), r
        }
        function R(e, t, o) {
            return t = e.c.createElement("span", {style: I(e, t, e.B, o)}, e.qa), i(e.c, "body", t), t
        }
        function I(e, t, o, r) {
            return o = e.v.expand(o), "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:" + (r ? "" : e.ya.quote(e.M) + ",") + t + ";" + o
        }
        function O(e, t, o, r, a) {
            this.c = e, this.W = t, this.g = o, this.u = r, this.a = a, this.N = this.O = 0
        }
        function B(e, t, o) {
            o = S(e.W, o), e.N = e.O = o.length;
            for (var a = new P(e.c, t, {p: function(e) {
                return e.offsetWidth
            }}, e.u, function() {
                return (new Date).getTime()
            }), i = 0, n = o.length; n > i; i++) {
                var l = o[i];
                l.z(e.a, r(e, e.wa, l, t, a))
            }
        }
        function N(e) {
            this.xa = e || "-"
        }
        function U() {
            this.ga = "'"
        }
        function k() {
            this.H = ot, this.o = rt
        }
        function j(e, t, o) {
            this.$ = e, this.Da = t, this.o = o
        }
        function G(e, t, o) {
            this.m = e, this.c = t, this.d = o, this.f = [], this.s = {}, this.v = new k
        }
        function X(e, t) {
            this.c = e, this.d = t
        }
        function W(e, t) {
            this.c = e, this.d = t
        }
        function V(e, t, o, r, a) {
            this.m = e, this.a = t, this.c = o, this.j = r, this.d = a, this.f = [], this.s = {}
        }
        function z(e, t, o) {
            this.m = e, this.c = t, this.d = o, this.f = [], this.s = {}
        }
        function Y(e, t, o, r, a, i, n, s, u) {
            for (Y.Ea.call(this, e, t, o, r, a, i, n, s, u), e = ["Times New Roman", "Arial", "Times", "Sans", "Serif"], t = e.length, o = {}, r = R(this, e[0], K), o[this.n.p(r)] = K, a = 1; t > a; a++)
                i = e[a], h(this.c, r, I(this, i, this.B, K)), o[this.n.p(r)] = K, "4" != this.B[1] && (h(this.c, r, I(this, i, this.B[0] + "4", K)), o[this.n.p(r)] = K);
            l(r), this.t = o, this.ka = et
        }
        function H(t) {
            this.J = t ? t : ("https:" == e.location.protocol ? "https:" : "http:") + lt, this.f = [], this.T = []
        }
        function q(e) {
            this.f = e, this.fa = [], this.ja = {}, this.G = {}, this.v = new k
        }
        function Z(e, t, o) {
            this.a = e, this.c = t, this.d = o
        }
        var $, Q = void 0, K = !0, J = null, et = !1;
        a.prototype.createElement = function(e, t, o) {
            if (e = this.F.createElement(e), t)
                for (var r in t)
                    t.hasOwnProperty(r) && ("style" == r ? h(this, e, t[r]) : e.setAttribute(r, t[r]));
            return o && e.appendChild(this.F.createTextNode(o)), e
        }, $ = m.prototype, $.getName = o("za"), $.va = o("Fa"), $.X = o("na"), $.sa = o("ma"), $.ta = o("Ca"), $.ua = o("Ba"), $.ra = o("la"), $.w = o("Ga");
        var tt = new m("Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", Q, et);
        g.prototype.parse = function() {
            var e;
            if (-1 != this.a.indexOf("MSIE"))
                if (e = x(this.a, /(MSIE [\d\w\.]+)/, 1), "" != e) {
                    var t = e.split(" ");
                    e = t[0], t = t[1], e = new m(e, t, e, t, p(this), v(this), y(this.j), 6 <= _(t))
                } else
                    e = new m("MSIE", "Unknown", "MSIE", "Unknown", p(this), v(this), y(this.j), et);
            else if (-1 != this.a.indexOf("Opera"))
                e: {
                    var t = e = "Unknown", o = x(this.a, /(Presto\/[\d\w\.]+)/, 1);
                    if ("" != o ? (t = o.split("/"), e = t[0], t = t[1]) : (-1 != this.a.indexOf("Gecko") && (e = "Gecko"), o = x(this.a, /rv:([^\)]+)/, 1), "" != o && (t = o)), -1 != this.a.indexOf("Opera Mini/"))
                        o = x(this.a, /Opera Mini\/([\d\.]+)/, 1), "" == o && (o = "Unknown"), e = new m("OperaMini", o, e, t, p(this), v(this), y(this.j), et);
                    else {
                        if (-1 != this.a.indexOf("Version/") && (o = x(this.a, /Version\/([\d\.]+)/, 1), "" != o)) {
                            e = new m("Opera", o, e, t, p(this), v(this), y(this.j), 10 <= _(o));
                            break e
                        }
                        o = x(this.a, /Opera[\/ ]([\d\.]+)/, 1), e = "" != o ? new m("Opera", o, e, t, p(this), v(this), y(this.j), 10 <= _(o)) : new m("Opera", "Unknown", e, t, p(this), v(this), y(this.j), et)
                    }
                }
            else if (-1 != this.a.indexOf("AppleWebKit")) {
                e = p(this), t = v(this), o = x(this.a, /AppleWebKit\/([\d\.\+]+)/, 1), "" == o && (o = "Unknown");
                var r = "Unknown";
                -1 != this.a.indexOf("Chrome") || -1 != this.a.indexOf("CrMo") || -1 != this.a.indexOf("CriOS") ? r = "Chrome" : -1 != this.a.indexOf("Safari") ? r = "Safari" : -1 != this.a.indexOf("AdobeAIR") && (r = "AdobeAIR");
                var a = "Unknown";
                -1 != this.a.indexOf("Version/") ? a = x(this.a, /Version\/([\d\.\w]+)/, 1) : "Chrome" == r ? a = x(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : "AdobeAIR" == r && (a = x(this.a, /AdobeAIR\/([\d\.]+)/, 1));
                var i = et;
                "AdobeAIR" == r ? (i = x(a, /\d+\.(\d+)/, 1), i = 2 < _(a) || 2 == _(a) && 5 <= parseInt(i, 10)) : (i = x(o, /\d+\.(\d+)/, 1), i = 526 <= _(o) || 525 <= _(o) && 13 <= parseInt(i, 10)), e = new m(r, a, "AppleWebKit", o, e, t, y(this.j), i)
            } else
                -1 != this.a.indexOf("Gecko") ? (t = e = "Unknown", r = et, -1 != this.a.indexOf("Firefox") ? (e = "Firefox", o = x(this.a, /Firefox\/([\d\w\.]+)/, 1), "" != o && (r = x(o, /\d+\.(\d+)/, 1), t = o, r = "" != o && 3 <= _(o) && 5 <= parseInt(r, 10))) : -1 != this.a.indexOf("Mozilla") && (e = "Mozilla"), o = x(this.a, /rv:([^\)]+)/, 1), "" == o ? o = "Unknown" : r || (r = _(o), a = parseInt(x(o, /\d+\.(\d+)/, 1), 10), i = parseInt(x(o, /\d+\.\d+\.(\d+)/, 1), 10), r = r > 1 || 1 == r && a > 9 || 1 == r && 9 == a && i >= 2 || o.match(/1\.9\.1b[123]/) != J || o.match(/1\.9\.1\.[\d\.]+/) != J), e = new m(e, t, "Gecko", o, p(this), v(this), y(this.j), r)) : e = tt;
            return e
        }, P.prototype.watch = function(e, t, o, a, i) {
            for (var n = e.length, l = 0; n > l; l++) {
                var s = e[l];
                t[s] || (t[s] = ["n4"]), this.L += t[s].length
            }
            for (i && (this.da = i), l = 0; n > l; l++)
                for (var s = e[l], i = t[s], u = o[s], c = 0, d = i.length; d > c; c++) {
                    var h = i[c], m = this.A, g = s, p = h;
                    f(m.g, m.h.e(m.k, g, p, "loading")), b(m, "fontloading", g, p), m = r(this, this.oa), g = r(this, this.pa), new a(m, g, this.c, this.n, this.u, this.D, s, h, u).start()
                }
        }, P.prototype.oa = function(e, t) {
            var o = this.A;
            c(o.g, o.h.e(o.k, e, t, "loading")), c(o.g, o.h.e(o.k, e, t, "inactive")), f(o.g, o.h.e(o.k, e, t, "active")), b(o, "fontactive", e, t), this.ia = K, T(this)
        }, P.prototype.pa = function(e, t) {
            var o = this.A;
            c(o.g, o.h.e(o.k, e, t, "loading")), d(o.g, o.h.e(o.k, e, t, "active")) || f(o.g, o.h.e(o.k, e, t, "inactive")), b(o, "fontinactive", e, t), T(this)
        }, E.prototype.start = function() {
            this.ha = this.D(), this.K()
        }, E.prototype.K = function() {
            var e = this.n.p(this.R), t = this.n.p(this.S);
            this.P == e && this.Q == t || this.ba != e || this.ca != t ? 5e3 <= this.D() - this.ha ? L(this, this.Z) : (this.ba = e, this.ca = t, F(this)) : L(this, this.I)
        }, O.prototype.q = function(e, t) {
            this.W.ea[e] = t
        }, O.prototype.load = function(e) {
            var t = new M(this.c, this.g, e);
            this.a.w() ? B(this, t, e) : w(t)
        }, O.prototype.wa = function(e, t, o, a) {
            var i = e.Y ? e.Y() : E;
            a ? e.load(r(this, this.Aa, t, o, i)) : (e = 0 == --this.O, this.N--, e && (0 == this.N ? w(t) : C(t)), o.watch([], {}, {}, i, e))
        }, O.prototype.Aa = function(e, t, o, a, i, n) {
            var l = 0 == --this.O;
            l && C(e), this.u(r(this, function(e, t, o, r, a, i) {
                e.watch(t, o || {}, r || {}, a, i)
            }, t, a, i, n, o, l))
        }, N.prototype.e = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e.push(arguments[t].replace(/[\W_]+/g, "").toLowerCase());
            return e.join(this.xa)
        }, U.prototype.quote = function(e) {
            for (var t = [], e = e.split(/,\s*/), o = 0; o < e.length; o++) {
                var r = e[o].replace(/['"]/g, "");
                t.push(-1 == r.indexOf(" ") ? r : this.ga + r + this.ga)
            }
            return t.join(",")
        };
        var ot = ["font-style", "font-weight"], rt = {"font-style": [["n", "normal"], ["i", "italic"], ["o", "oblique"]],"font-weight": [["1", "100"], ["2", "200"], ["3", "300"], ["4", "400"], ["5", "500"], ["6", "600"], ["7", "700"], ["8", "800"], ["9", "900"], ["4", "normal"], ["7", "bold"]]};
        j.prototype.compact = function(e, t) {
            for (var o = 0; o < this.o.length; o++)
                if (t == this.o[o][1]) {
                    e[this.$] = this.o[o][0];
                    break
                }
        }, j.prototype.expand = function(e, t) {
            for (var o = 0; o < this.o.length; o++)
                if (t == this.o[o][0]) {
                    e[this.$] = this.Da + ":" + this.o[o][1];
                    break
                }
        }, k.prototype.compact = function(e) {
            for (var t = ["n", "4"], e = e.split(";"), o = 0, r = e.length; r > o; o++) {
                var a = e[o].replace(/\s+/g, "").split(":");
                if (2 == a.length) {
                    var i = a[1];
                    e: {
                        for (var a = a[0], n = 0; n < this.H.length; n++)
                            if (a == this.H[n]) {
                                a = new j(n, a, this.o[a]);
                                break e
                            }
                        a = J
                    }
                    a && a.compact(t, i)
                }
            }
            return t.join("")
        }, k.prototype.expand = function(e) {
            if (2 != e.length)
                return J;
            for (var t = [J, J], o = 0, r = this.H.length; r > o; o++) {
                var a = this.H[o];
                new j(o, a, this.o[a]).expand(t, e.substr(o, 1))
            }
            return t[0] && t[1] ? t.join(";") + ";" : J
        };
        var at = e.AV.WebFont = function() {
            var e = new g(navigator.userAgent, t).parse();
            return new O(new a(t), new D, t.documentElement, function(e, t) {
                setTimeout(e, t)
            }, e)
        }();
        at.load = at.load, at.addModule = at.q, m.prototype.getName = m.prototype.getName, m.prototype.getVersion = m.prototype.va, m.prototype.getEngine = m.prototype.X, m.prototype.getEngineVersion = m.prototype.sa, m.prototype.getPlatform = m.prototype.ta, m.prototype.getPlatformVersion = m.prototype.ua, m.prototype.getDocumentMode = m.prototype.ra, m.prototype.isSupportingWebFont = m.prototype.w, G.prototype.C = function(e) {
            return ("https:" == this.m.location.protocol ? "https:" : "http:") + (this.d.api || "//f.fontdeck.com/s/css/js/") + this.m.document.location.hostname + "/" + e + ".js"
        }, G.prototype.z = function(e, t) {
            var o = this.d.id, r = this;
            o ? (this.m.__webfontfontdeckmodule__ || (this.m.__webfontfontdeckmodule__ = {}), this.m.__webfontfontdeckmodule__[o] = function(e, o) {
                for (var a = 0, i = o.fonts.length; i > a; ++a) {
                    var n = o.fonts[a];
                    r.f.push(n.name), r.s[n.name] = [r.v.compact("font-weight:" + n.weight + ";font-style:" + n.style)]
                }
                t(e)
            }, i(this.c, "head", u(this.c, this.C(o)))) : t(K)
        }, G.prototype.load = function(e) {
            e(this.f, this.s)
        }, at.q("fontdeck", function(o) {
            return new G(e, new a(t), o)
        });
        var it = {regular: "n4",bold: "n7",italic: "i4",bolditalic: "i7",r: "n4",b: "n7",i: "i4",bi: "i7"};
        X.prototype.z = function(e, t) {
            return t(e.w())
        }, X.prototype.load = function(e) {
            var o, r;
            i(this.c, "head", s(this.c, ("https:" == t.location.protocol ? "https:" : "http:") + "//webfonts.fontslive.com/css/" + this.d.key + ".css"));
            var a, n, l = this.d.families;
            a = [], n = {};
            for (var u = 0, f = l.length; f > u; u++) {
                if (r = r = o = Q, r = l[u].split(":"), o = r[0], r[1]) {
                    r = r[1].split(",");
                    for (var c = [], d = 0, h = r.length; h > d; d++) {
                        var m = r[d];
                        if (m) {
                            var g = it[m];
                            c.push(g ? g : m)
                        }
                    }
                    r = c
                } else
                    r = ["n4"];
                a.push(o), n[o] = r
            }
            e(a, n)
        }, at.q("ascender", function(e) {
            return new X(new a(t), e)
        }), W.prototype.load = function(e) {
            for (var t = this.d.urls || [], o = this.d.families || [], r = 0, a = t.length; a > r; r++)
                i(this.c, "head", s(this.c, t[r]));
            e(o)
        }, W.prototype.z = function(e, t) {
            return t(e.w())
        }, at.q("custom", function(e) {
            return new W(new a(t), e)
        }), V.prototype.z = function(e, t) {
            var o = this, r = o.d.projectId;
            if (r) {
                var a = u(o.c, o.C(r));
                a.id = "__MonotypeAPIScript__" + r, a.onreadystatechange = function(e) {
                    ("loaded" === a.readyState || "complete" === a.readyState) && (a.onreadystatechange = J, a.onload(e))
                }, a.onload = function() {
                    if (o.m["__mti_fntLst" + r]) {
                        var a = o.m["__mti_fntLst" + r]();
                        if (a && a.length) {
                            var i;
                            for (i = 0; i < a.length; i++)
                                o.f.push(a[i].fontfamily)
                        }
                    }
                    t(e.w())
                }, i(this.c, "head", a)
            } else
                t(K)
        }, V.prototype.C = function(e) {
            var t = this.protocol(), o = (this.d.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
            return t + "//" + o + "/" + e + ".js"
        }, V.prototype.load = function(e) {
            e(this.f, this.s)
        }, V.prototype.protocol = function() {
            var e = ["http:", "https:"], t = e[0];
            if (this.j && this.j.location && this.j.location.protocol)
                for (var o = 0, o = 0; o < e.length; o++)
                    if (this.j.location.protocol === e[o])
                        return this.j.location.protocol;
            return t
        }, at.q("monotype", function(o) {
            var r = new g(navigator.userAgent, t).parse();
            return new V(e, r, new a(t), t, o)
        }), z.prototype.C = function(t) {
            var o = "https:" == e.location.protocol ? "https:" : "http:";
            return (this.d.api || o + "//use.typekit.com") + "/" + t + ".js"
        }, z.prototype.z = function(e, t) {
            var o = this.d.id, r = this.d, a = this;
            o ? (this.m.__webfonttypekitmodule__ || (this.m.__webfonttypekitmodule__ = {}), this.m.__webfonttypekitmodule__[o] = function(o) {
                o(e, r, function(e, o, r) {
                    a.f = o, a.s = r, t(e)
                })
            }, i(this.c, "head", u(this.c, this.C(o)))) : t(K)
        }, z.prototype.load = function(e) {
            e(this.f, this.s)
        }, at.q("typekit", function(o) {
            return new z(e, new a(t), o)
        }), function(e, t) {
            function o() {
            }
            o.prototype = e.prototype, t.prototype = new o, t.Ea = e, t.Ha = e.prototype
        }(E, Y);
        var nt = {Arimo: K,Cousine: K,Tinos: K};
        Y.prototype.K = function() {
            var e = this.n.p(this.R), t = this.n.p(this.S);
            !this.ka && e == t && this.t[e] && (this.t = {}, this.ka = this.t[e] = K), this.P == e && this.Q == t || this.t[e] || this.t[t] ? 5e3 <= this.D() - this.ha ? this.t[e] && this.t[t] && nt[this.M] ? L(this, this.I) : L(this, this.Z) : F(this) : L(this, this.I)
        };
        var lt = "//fonts.googleapis.com/css";
        H.prototype.e = function() {
            if (0 == this.f.length)
                throw Error("No fonts to load !");
            if (-1 != this.J.indexOf("kit="))
                return this.J;
            for (var e = this.f.length, t = [], o = 0; e > o; o++)
                t.push(this.f[o].replace(/ /g, "+"));
            return e = this.J + "?family=" + t.join("%7C"), 0 < this.T.length && (e += "&subset=" + this.T.join(",")), e
        };
        var st = {ultralight: "n2",light: "n3",regular: "n4",bold: "n7",italic: "i4",bolditalic: "i7",ul: "n2",l: "n3",r: "n4",b: "n7",i: "i4",bi: "i7"}, ut = {latin: "BESbswy",cyrillic: "&#1081;&#1103;&#1046;",greek: "&#945;&#946;&#931;",khmer: "&#x1780;&#x1781;&#x1782;",Hanuman: "&#x1780;&#x1781;&#x1782;"};
        q.prototype.parse = function() {
            for (var e = this.f.length, t = 0; e > t; t++) {
                var o = this.f[t].split(":"), r = o[0].replace(/\+/g, " "), a = ["n4"];
                if (2 <= o.length) {
                    var i, n = o[1];
                    if (i = [], n)
                        for (var n = n.split(","), l = n.length, s = 0; l > s; s++) {
                            var u;
                            if (u = n[s], u.match(/^[\w ]+$/)) {
                                var f = st[u];
                                f ? u = f : (f = u.match(/^(\d*)(\w*)$/), u = f[1], f = f[2], u = (u = this.v.expand([f ? f : "n", u ? u.substr(0, 1) : "4"].join(""))) ? this.v.compact(u) : J)
                            } else
                                u = "";
                            u && i.push(u)
                        }
                    0 < i.length && (a = i), 3 == o.length && (o = o[2], i = [], o = o ? o.split(",") : i, 0 < o.length && (o = ut[o[0]]) && (this.G[r] = o))
                }
                this.G[r] || (o = ut[r]) && (this.G[r] = o), this.fa.push(r), this.ja[r] = a
            }
        }, Z.prototype.z = function(e, t) {
            t(e.w())
        }, Z.prototype.Y = function() {
            return "AppleWebKit" == this.a.X() ? Y : E
        }, Z.prototype.load = function(e) {
            "MSIE" == this.a.getName() && this.d.blocking != K ? n(r(this, this.aa, e)) : this.aa(e)
        }, Z.prototype.aa = function(e) {
            for (var t = this.c, o = new H(this.d.api), r = this.d.families, a = r.length, n = 0; a > n; n++) {
                var l = r[n].split(":");
                3 == l.length && o.T.push(l.pop());
                var u = "";
                2 == l.length && "" != l[1] && (u = ":"), o.f.push(l.join(u))
            }
            r = new q(r), r.parse(), i(t, "head", s(t, o.e())), e(r.fa, r.ja, r.G)
        }, at.q("google", function(e) {
            var o = new g(navigator.userAgent, t).parse();
            return new Z(o, new a(t), e)
        }), e.WebFontConfig && at.load(e.WebFontConfig)
    }(this, o), function() {
        var e = function(t, o) {
            var r = e.resolve(t, o || "/"), a = e.modules[r];
            if (!a)
                throw new Error("Failed to resolve module " + t + ", tried " + r);
            var i = e.cache[r], n = i ? i.exports : a();
            return n
        };
        e.paths = [], e.modules = {}, e.cache = {}, e.extensions = [".js", ".coffee", ".json"], e._core = {assert: !0,events: !0,fs: !0,path: !0,vm: !0}, e.resolve = function() {
            return function(t, o) {
                function r(t) {
                    if (t = l.normalize(t), e.modules[t])
                        return t;
                    for (var o = 0; o < e.extensions.length; o++) {
                        var r = e.extensions[o];
                        if (e.modules[t + r])
                            return t + r
                    }
                }
                function a(t) {
                    t = t.replace(/\/+$/, "");
                    var o = l.normalize(t + "/package.json");
                    if (e.modules[o]) {
                        var a = e.modules[o](), i = a.browserify;
                        if ("object" == typeof i && i.main) {
                            var n = r(l.resolve(t, i.main));
                            if (n)
                                return n
                        } else if ("string" == typeof i) {
                            var n = r(l.resolve(t, i));
                            if (n)
                                return n
                        } else if (a.main) {
                            var n = r(l.resolve(t, a.main));
                            if (n)
                                return n
                        }
                    }
                    return r(t + "/index")
                }
                function i(e, t) {
                    for (var o = n(t), i = 0; i < o.length; i++) {
                        var l = o[i], s = r(l + "/" + e);
                        if (s)
                            return s;
                        var u = a(l + "/" + e);
                        if (u)
                            return u
                    }
                    var s = r(e);
                    return s ? s : void 0
                }
                function n(e) {
                    var t;
                    t = "/" === e ? [""] : l.normalize(e).split("/");
                    for (var o = [], r = t.length - 1; r >= 0; r--)
                        if ("node_modules" !== t[r]) {
                            var a = t.slice(0, r + 1).join("/") + "/node_modules";
                            o.push(a)
                        }
                    return o
                }
                if (o || (o = "/"), e._core[t])
                    return t;
                var l = e.modules.path();
                o = l.resolve("/", o);
                var s = o || "/";
                if (t.match(/^(?:\.\.?\/|\/)/)) {
                    var u = r(l.resolve(s, t)) || a(l.resolve(s, t));
                    if (u)
                        return u
                }
                var f = i(t, s);
                if (f)
                    return f;
                throw new Error("Cannot find module '" + t + "'")
            }
        }(), e.alias = function(t, o) {
            var r = e.modules.path(), a = null;
            try {
                a = e.resolve(t + "/package.json", "/")
            } catch (i) {
                a = e.resolve(t, "/")
            }
            for (var n = r.dirname(a), l = (Object.keys || function(e) {
                var t = [];
                for (var o in e)
                    t.push(o);
                return t
            })(e.modules), s = 0; s < l.length; s++) {
                var u = l[s];
                if (u.slice(0, n.length + 1) === n + "/") {
                    var f = u.slice(n.length);
                    e.modules[o + f] = e.modules[n + f]
                } else
                    u === n && (e.modules[o] = e.modules[n])
            }
        }, function() {
            var o = {}, r = "undefined" != typeof t ? t : {}, a = !1;
            e.define = function(t, i) {
                !a && e.modules.__browserify_process && (o = e.modules.__browserify_process(), a = !0);
                var n = e._core[t] ? "" : e.modules.path().dirname(t), l = function(t) {
                    var o = e(t, n), r = e.cache[e.resolve(t, n)];
                    return r && null === r.parent && (r.parent = s), o
                };
                l.resolve = function(t) {
                    return e.resolve(t, n)
                }, l.modules = e.modules, l.define = e.define, l.cache = e.cache;
                var s = {id: t,filename: t,exports: {},loaded: !1,parent: null};
                e.modules[t] = function() {
                    return e.cache[t] = s, i.call(s.exports, l, s, s.exports, n, t, o, r), s.loaded = !0, s.exports
                }
            }
        }(), e.define("path", function(e, t, o, r, a, i) {
            function n(e, t) {
                for (var o = [], r = 0; r < e.length; r++)
                    t(e[r], r, e) && o.push(e[r]);
                return o
            }
            function l(e, t) {
                for (var o = 0, r = e.length; r >= 0; r--) {
                    var a = e[r];
                    "." == a ? e.splice(r, 1) : ".." === a ? (e.splice(r, 1), o++) : o && (e.splice(r, 1), o--)
                }
                if (t)
                    for (; o--; o)
                        e.unshift("..");
                return e
            }
            var s = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;
            o.resolve = function() {
                for (var e = "", t = !1, o = arguments.length; o >= -1 && !t; o--) {
                    var r = o >= 0 ? arguments[o] : i.cwd();
                    "string" == typeof r && r && (e = r + "/" + e, t = "/" === r.charAt(0))
                }
                return e = l(n(e.split("/"), function(e) {
                    return !!e
                }), !t).join("/"), (t ? "/" : "") + e || "."
            }, o.normalize = function(e) {
                var t = "/" === e.charAt(0), o = "/" === e.slice(-1);
                return e = l(n(e.split("/"), function(e) {
                    return !!e
                }), !t).join("/"), e || t || (e = "."), e && o && (e += "/"), (t ? "/" : "") + e
            }, o.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return o.normalize(n(e, function(e) {
                    return e && "string" == typeof e
                }).join("/"))
            }, o.dirname = function(e) {
                var t = s.exec(e)[1] || "", o = !1;
                return t ? 1 === t.length || o && t.length <= 3 && ":" === t.charAt(1) ? t : t.substring(0, t.length - 1) : "."
            }, o.basename = function(e, t) {
                var o = s.exec(e)[2] || "";
                return t && o.substr(-1 * t.length) === t && (o = o.substr(0, o.length - t.length)), o
            }, o.extname = function(e) {
                return s.exec(e)[3] || ""
            }
        }), e.define("__browserify_process", function(e, o, r, a, i, n) {
            var n = o.exports = {};
            n.nextTick = function() {
                var e = "undefined" != typeof t && t.setImmediate, o = "undefined" != typeof t && t.postMessage && t.addEventListener;
                if (e)
                    return function(e) {
                        return t.setImmediate(e)
                    };
                if (o) {
                    var r = [];
                    return t.addEventListener("message", function(e) {
                        if (e.source === t && "browserify-tick" === e.data && (e.stopPropagation(), r.length > 0)) {
                            var o = r.shift();
                            o()
                        }
                    }, !0), function(e) {
                        r.push(e), t.postMessage("browserify-tick", "*")
                    }
                }
                return function(e) {
                    setTimeout(e, 0)
                }
            }(), n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.binding = function(t) {
                if ("evals" === t)
                    return e("vm");
                throw new Error("No such module. (Possibly not yet loaded)")
            }, function() {
                var t, o = "/";
                n.cwd = function() {
                    return o
                }, n.chdir = function(r) {
                    t || (t = e("path")), o = t.resolve(r, o)
                }
            }()
        }), e.define("/src/js/webgl/moaGL_bundle.js", function(e, t) {
            "use strict";
            function o() {
                this.glBuffers = {}, this.glBuffers = {}, this.glPrograms = {}, this.glRenderingObjects = {}, this.glImageData = {}, this.renderingMode = i.DEFAULT, this.freeTextures = [], this.currentVertices = [], this.currentTexCoords = [], this.currentIndeces = [], this.currentBlendMode = n.NONE, this.freeTextures = [], this.stateOK = !0;
                var e, t = this;
                this.setup = function(o) {
                    e = o, t.glImageData.pixelFormat = e.RGBA, t.createFramebuffer(), v(), e.clearColor(0, 0, 0, 1), t.glPrograms.bitmapIdentityProgram = rt(t.glPrograms.bitmapIdentityProgram, _, g.MoaVertexShader, g.MoaBitmapIdentityFragmentShader, !1, e)
                }, this.getGL = function() {
                    return e
                }, this.willAcceptImageOfSize = function(e, o) {
                    var r = t.maxImageDim();
                    return r >= e && e > 0 && r >= o && o > 0
                }, this.maxImageDim = function() {
                    return e.getParameter(e.MAX_TEXTURE_SIZE)
                }, this.deleteAllShaders = function() {
                }, this.destroyGL = function() {
                    e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.deleteBuffer(t.glBuffers.vertexBufferFlipped), e.deleteBuffer(t.glBuffers.currentIndexBuffer), e.bindFramebuffer(e.FRAMEBUFFER, null), e.deleteFramebuffer(t.glRenderingObjects.offscreenFramebuffer), e.activeTexture(e.TEXTURE, null), e.bindTexture(e.TEXTURE_2D, null), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(t.glRenderingObjects.processedTexture1), e.deleteTexture(t.glRenderingObjects.processedTexture2), e.deleteTexture(t.glImageData.texID), this.glBuffers = {}, this.glBuffers = {}, this.glPrograms = {}, this.glRenderingObjects = {}, this.glImageData = {}, this.renderingMode = i.DEFAULT, this.freeTextures = [], this.currentVertices = [], this.currentTexCoords = [], this.currentIndeces = [], this.currentBlendMode = n.NONE, this.freeTextures = [], e = null
                }, this.getBlendModeIndex = s, this.getAspectModeIndex = c, this.getNoiseTypeIndex = u;
                var o = function(t, o, r, a) {
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, o), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, a)
                }, m = function(r, a) {
                    t.createFramebuffer(), "undefined" == typeof t.glRenderingObjects.processedTexture1 || null == t.glRenderingObjects.processedTexture1 ? (t.glRenderingObjects.processedTexture1 = e.createTexture(), e.bindTexture(e.TEXTURE_2D, t.glRenderingObjects.processedTexture1), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE)) : e.bindTexture(e.TEXTURE_2D, t.glRenderingObjects.processedTexture1), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r, a, 0, e.RGBA, e.UNSIGNED_BYTE, null), "undefined" == typeof t.glRenderingObjects.processedTexture2 || null == t.glRenderingObjects.processedTexture2 ? (t.glRenderingObjects.processedTexture2 = e.createTexture(), e.bindTexture(e.TEXTURE_2D, t.glRenderingObjects.processedTexture2), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE)) : e.bindTexture(e.TEXTURE_2D, t.glRenderingObjects.processedTexture2), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r, a, 0, e.RGBA, e.UNSIGNED_BYTE, null)
                };
                this.setImage = function(r) {
                    e.activeTexture(e.TEXTURE0), "undefined" == typeof t.glImageData.texID || null == t.glImageData.texID ? (t.glImageData.texID = e.createTexture(), e.bindTexture(e.TEXTURE_2D, t.glImageData.texID), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE)) : e.bindTexture(e.TEXTURE_2D, t.glImageData.texID), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r), (t.glImageData.width != r.width || t.glImageData.height != r.height) && (t.glImageData.width = r.width, t.glImageData.height = r.height, m(r.width, r.height))
                }, this.deleteProcessingObjects = function() {
                    t.glRenderingObjects.offscreenFramebuffer && (e.deleteFramebuffer(t.glRenderingObjects.offscreenFramebuffer), t.glRenderingObjects.offscreenFramebuffer = null), t.glRenderingObjects.processedTexture1 && (e.deleteTexture(t.glRenderingObjects.processedTexture1), t.glRenderingObjects.processedTexture1 = null), t.glRenderingObjects.processedTexture2 && (e.deleteTexture(t.glRenderingObjects.processedTexture2), t.glRenderingObjects.processedTexture2 = null), t.glRenderingObjects.readTexture = null, t.glRenderingObjects.writeTexture = null
                };
                var p = function(t, o) {
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, o)
                };
                this.setBilinearSampling = function(o) {
                    t.glRenderingObjects.processedTexture1 && (e.bindTexture(e.TEXTURE_2D, t.glRenderingObjects.processedTexture1), p(o ? e.LINEAR : e.NEAREST, o ? e.LINEAR : e.NEAREST)), t.glRenderingObjects.processedTexture2 && (e.bindTexture(e.TEXTURE_2D, t.glRenderingObjects.processedTexture2), p(o ? e.LINEAR : e.NEAREST, o ? e.LINEAR : e.NEAREST)), t.glImageData.texID && (e.bindTexture(e.TEXTURE_2D, t.glImageData.texID), p(o ? e.LINEAR : e.NEAREST, o ? e.LINEAR : e.NEAREST))
                }, this.createFramebuffer = function() {
                    ("undefined" == typeof t.glRenderingObjects.offscreenFramebuffer || null == t.glRenderingObjects.offscreenFramebuffer) && (t.glRenderingObjects.offscreenFramebuffer = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, t.glRenderingObjects.offscreenFramebuffer))
                };
                var v = function() {
                    t.glBuffers.positionBuffer = e.createBuffer(), t.glBuffers.texCoordBuffer = e.createBuffer(), ot();
                    var o = [0, 1, 2, 2, 3, 0];
                    t.currentIndeces = o, t.glBuffers.currentIndexBuffer = e.createBuffer(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.glBuffers.currentIndexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(o), e.STATIC_DRAW)
                }, ot = function() {
                    var o = [1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0], r = [1, 0, 1, 1, 0, 1, 0, 0];
                    t.currentVertices = o, t.currentTexCoords = r, e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.positionBuffer), e.bufferData(e.ARRAY_BUFFER, new Float32Array(o), e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.texCoordBuffer), e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW)
                }, at = function() {
                    t.freeTextures[0] = !0;
                    for (var e = 1; a > e; e++)
                        t.freeTextures[e] = !1
                }, it = function() {
                    for (var e = 0; a > e; e++)
                        if (!t.freeTextures[e])
                            return t.freeTextures[e] = !0, e;
                    return -1
                }, nt = function(t) {
                    var o = [e.TEXTURE0, e.TEXTURE1, e.TEXTURE2, e.TEXTURE3, e.TEXTURE4, e.TEXTURE5, e.TEXTURE6, e.TEXTURE7];
                    return o[t]
                }, lt = function(e) {
                    t.freeTextures[e] = !1
                }, st = function(o) {
                    e.enableVertexAttribArray(o.positionSlot), e.enableVertexAttribArray(o.texCoordSlot), e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.positionBuffer), e.vertexAttribPointer(o.positionSlot, 3, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.texCoordBuffer), e.vertexAttribPointer(o.texCoordSlot, 2, e.FLOAT, !1, 0, 0)
                };
                this.createEffect = function() {
                    at(), e.bindFramebuffer(e.FRAMEBUFFER, t.glRenderingObjects.offscreenFramebuffer), e.activeTexture(e.TEXTURE0), t.renderingMode != i.READ_LAST_WRITE_NONE && t.renderingMode != i.READ_LAST_WRITE_TARGET && (t.glRenderingObjects.readTexture = t.glImageData.texID, t.glRenderingObjects.writeTexture = t.glRenderingObjects.processedTexture1), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE)
                }, this.finalizeEffect = function() {
                    if (t.renderingMode == i.DEFAULT || t.renderingMode == i.READ_LAST_WRITE_TARGET) {
                        e.bindFramebuffer(e.FRAMEBUFFER, null), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t.glRenderingObjects.readTexture), e.useProgram(t.glPrograms.bitmapIdentityProgram), e.clear(e.COLOR_BUFFER_BIT), e.viewport(0, 0, t.glImageData.width, t.glImageData.height);
                        var o = [1, 1, 1, 0, 0, 0, 0, 1];
                        e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.texCoordBuffer), e.bufferData(e.ARRAY_BUFFER, new Float32Array(o), e.STATIC_DRAW), st(t.glPrograms.bitmapIdentityProgram), e.uniform1i(t.glPrograms.bitmapIdentityProgram.samplerSlot, 0), e.drawElements(e.TRIANGLES, t.currentIndeces.length, e.UNSIGNED_SHORT, 0), ot()
                    } else if (t.renderingMode == i.OVERWRITE_ORIGINAL) {
                        var r = t.glRenderingObjects.readTexture;
                        if (r != t.glImageData.texID) {
                            var a = t.glImageData.texID, n = t.glRenderingObjects.writeTexture;
                            t.glImageData.texID = r, t.glRenderingObjects.processedTexture2 = n, t.glRenderingObjects.processedTexture1 = a
                        }
                    }
                }, this.startRender = function(o, r) {
                    t.currentBlendMode = r, r != n.NONE && r != n.NONE_DONT_CLEAR ? (t.glRenderingObjects.readTexture == t.glImageData.texID && (this.renderIdentity(), t.currentBlendMode = r, e.useProgram(o)), e.enable(e.BLEND), r == n.NORMAL ? e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE) : r == n.OVERLAY ? e.blendFuncSeparate(e.DST_COLOR, e.SRC_ALPHA, e.ZERO, e.ONE) : r == n.PREMULTIPLIED_ALPHA ? e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE) : r == n.DRAW_OVER ? e.blendFunc(e.SRC_ALPHA, e.SRC_ALPHA) : r == n.DRAW_BEHIND && e.blendFunc(e.ONE_MINUS_DST_ALPHA, e.DST_ALPHA), e.blendEquation(e.FUNC_ADD)) : (e.disable(e.BLEND), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.glRenderingObjects.writeTexture, 0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t.glRenderingObjects.readTexture), r != n.NONE_DONT_CLEAR && e.clear(e.COLOR_BUFFER_BIT)), e.viewport(0, 0, t.glImageData.width, t.glImageData.height), st(o), e.uniform1i(o.samplerSlot, 0)
                }, this.finishRender = function(o) {
                    e.drawElements(e.TRIANGLES, t.currentIndeces.length, e.UNSIGNED_SHORT, 0), e.finish(), o && ut()
                }, this.showTexture = function(o) {
                    if (e.isTexture(o)) {
                        var r = ct(o), a = t.glRenderingObjects.writeTexture, i = dt(o);
                        t.finalizeEffect(), ct(r), ft(a), dt(i)
                    }
                };
                var ut = function() {
                    t.glRenderingObjects.writeTexture = t.glRenderingObjects.writeTexture == t.glRenderingObjects.processedTexture2 ? t.glRenderingObjects.processedTexture1 : t.glRenderingObjects.processedTexture2, t.glRenderingObjects.readTexture = t.glRenderingObjects.writeTexture == t.glRenderingObjects.processedTexture2 ? t.glRenderingObjects.processedTexture1 : t.glRenderingObjects.processedTexture2
                };
                this.commit = this.commitContentsOfFramebuffer = function(e, o) {
                    var r = t.glImageData.texID;
                    t.glImageData.texID = t.glRenderingObjects.readTexture, t.glRenderingObjects.readTexture == t.glRenderingObjects.processedTexture2 ? (t.glRenderingObjects.processedTexture2 = r, t.glRenderingObjects.readTexture = r) : (t.glRenderingObjects.processedTexture1 = r, t.glRenderingObjects.readTexture = r), "undefined" != typeof e && "undefined" != typeof o && (t.glImageData.width = e, t.glImageData.height = o, m(e, o))
                }, this.clearCurrentFrameBuffer = function() {
                    e.bindFramebuffer(e.FRAMEBUFFER, t.glRenderingObjects.offscreenFramebuffer), e.clear(e.COLORATTACHMENT0)
                }, this.getImageDataFromFramebuffer = function() {
                    var o = new Uint8Array(new Array(t.glImageData.width * t.glImageData.height * 4));
                    return e.readPixels(0, 0, t.glImageData.width, t.glImageData.height, e.RGBA, e.UNSIGNED_BYTE, o), o
                };
                var ft = function(o) {
                    if (e.isTexture(o)) {
                        var r = t.glRenderingObjects.writeTexture;
                        return t.glRenderingObjects.writeTexture === t.glRenderingObjects.processedTexture1 ? (t.glRenderingObjects.writeTexture = o, t.glRenderingObjects.processedTexture1 = o) : (t.glRenderingObjects.writeTexture = o, t.glRenderingObjects.processedTexture2 = o), r
                    }
                    return null
                }, ct = function(o) {
                    if (e.isTexture(o)) {
                        var r = t.glRenderingObjects.readTexture;
                        return t.glRenderingObjects.readTexture === t.glRenderingObjects.processedTexture1 ? (t.glRenderingObjects.readTexture = o, t.glRenderingObjects.processedTexture1 = o) : (t.glRenderingObjects.readTexture = o, t.glRenderingObjects.processedTexture2 = o), r
                    }
                    return null
                }, dt = function(o) {
                    if (e.isTexture(o)) {
                        var r = t.glImageData.texID;
                        return t.glImageData.texID = o, r === t.glRenderingObjects.readTexture && (t.glRenderingObjects.readTexture = o), r
                    }
                    return null
                };
                this.displayOriginal = function() {
                    t.createEffect(), this.renderIdentity(), this.renderIdentity(), t.finalizeEffect()
                };
                var ht = function(t, r, a, i) {
                    var n, l, s;
                    for (e.activeTexture(nt(i)), n = e.createTexture(), e.bindTexture(e.TEXTURE_2D, n), l = [], s = 0; 256 > s; s++) {
                        var u = r * (t[s] - a), f = 256 * u * 256 * 256 - Math.floor(256 * u * 256 * 256), c = 256 * u * 256 - Math.floor(256 * u * 256) - f / 256, d = 256 * u - Math.floor(256 * u) - c / 256, h = u - d / 256;
                        l[4 * s] = 255 * f | 0, l[4 * s + 1] = 255 * c | 0, l[4 * s + 2] = 255 * d | 0, l[4 * s + 3] = 255 * h | 0
                    }
                    return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 256, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(l)), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), n
                };
                t.renderAutoEnhance = function(o, r, a, i, l, s, u, f) {
                    var c, d, h, m, p, v, _, x = Number.MAX_VALUE, y = 0;
                    for (t.glPrograms.autoEnhanceProgram = rt(t.glPrograms.autoEnhanceProgram, R, g.MoaVertexShader, g.MoaAutoEnhanceFragmentShader, !1, e), c = t.glPrograms.autoEnhanceProgram, d = 0; 256 > d; d++)
                        h = f[d], x > h && (x = h), h > y && (y = h);
                    l /= 255, s /= 255, u /= 255, e.useProgram(c), t.startRender(c, n.NONE), m = 1 / (y - x), p = x, v = it(), _ = ht(f, m, p, v), e.uniform1i(c.mapFactorSamplerSlot, v), e.uniform1f(c.gainSlot, o), e.uniform1f(c.rMinSlot, l), e.uniform1f(c.gMinSlot, s), e.uniform1f(c.bMinSlot, u), e.uniform1f(c.rScaleSlot, r), e.uniform1f(c.gScaleSlot, a), e.uniform1f(c.bScaleSlot, i), e.uniform1f(c.floatMultSlot, m), e.uniform1f(c.floatTransSlot, p), t.finishRender(!0), e.activeTexture(nt(v)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(_), lt(v)
                };
                var mt = function(t, r, a) {
                    var i;
                    return e.activeTexture(nt(t)), i = e.createTexture(), e.bindTexture(e.TEXTURE_2D, i), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r, a, 0, e.RGBA, e.UNSIGNED_BYTE, null), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), i
                };
                this.getAvgGrayImage = function(e, o, r, a) {
                    t.glRenderingObjects.readTexture = e, t.glRenderingObjects.writeTexture = o, t.renderIdentity(), t.glRenderingObjects.readTexture = o, t.glRenderingObjects.writeTexture = r, t.glRenderingObjects.processedTexture1 = o, t.glRenderingObjects.processedTexture2 = r, t.addBoxBlur(2 * a + 1, "horizontal", this), t.addBoxBlur(2 * a + 1, "vertical", this);
                    var i = [.213, .715, .072, 0, .213, .715, .072, 0, .213, .715, .072, 0];
                    t.renderColorMatrixTransform(i)
                }, this.renderClarity = function(o, r, a, i) {
                    var l, s, u, f, c, d, h, m, p;
                    t.glPrograms.twitterClarityProgram = rt(t.glPrograms.twitterClarityProgram, k, g.MoaVertexShader, g.MoaTwitterClarityFragmentShader, !1, e), p = t.glPrograms.twitterClarityProgram, c = t.glRenderingObjects.readTexture, d = t.glRenderingObjects.writeTexture, h = t.glRenderingObjects.processedTexture1, m = t.glRenderingObjects.processedTexture2, t.renderColorMap(o), l = it(), u = mt(u, t.glImageData.width, t.glImageData.height), s = it(), f = mt(f, t.glImageData.width, t.glImageData.height), this.getAvgGrayImage(d, f, u, r), this.getAvgGrayImage(c, d, f, r), t.glRenderingObjects.readTexture = c, t.glRenderingObjects.writeTexture = d, t.glRenderingObjects.processedTexture1 = h, t.glRenderingObjects.processedTexture2 = m, e.useProgram(p), t.startRender(p, n.NONE), e.activeTexture(nt(s)), e.bindTexture(e.TEXTURE_2D, f), e.activeTexture(nt(l)), e.bindTexture(e.TEXTURE_2D, u), e.uniform1i(p.avgImgSamplerSlot, s), e.uniform1i(p.effectedAvgImgSamplerSlot, l), e.uniform1f(p.gainSlot, a), e.uniform1f(p.sharpenAmountSlot, i), t.finishRender(!0), e.deleteTexture(f), e.deleteTexture(u), lt(s), lt(l)
                }, t.renderConvertLABToRGB = function(o, r) {
                    var a;
                    t.glPrograms.labToRgbProgram = rt(t.glPrograms.labToRgbProgram, O, g.MoaVertexShader, g.MoaLABToRGBFragmentShader, !1, e), a = t.glPrograms.labToRgbProgram, e.useProgram(a), t.startRender(a, n.NONE), e.uniform1f(a.scaleASlot, o), e.uniform1f(a.scaleBSlot, r), t.finishRender(!0)
                }, t.renderConvertRGBToLAB = function() {
                    var o;
                    t.glPrograms.rgbToLabProgram = rt(t.glPrograms.rgbToLabProgram, I, g.MoaVertexShader, g.MoaRGBToLABFragmentShader, !1, e), o = t.glPrograms.rgbToLabProgram, e.useProgram(o), t.startRender(o, n.NONE), t.finishRender(!0)
                };
                var gt = function(t, r, a, i) {
                    var n, l, s, u, f, c, d, h, m, g, p, v, _, x, y;
                    for (r = 1.5, a = 2 * r, e.activeTexture(nt(i)), n = e.createTexture(), e.bindTexture(e.TEXTURE_2D, n), l = Math.ceil(2 * (r + a)), c = r * r, d = Math.pow(r + a, 2), h = t.a / 255, y = [], s = 0; l > s; s++)
                        for (m = 4 * l * s, u = 0; l > u; u++)
                            f = m + 4 * u, y[f] = t.r, y[f + 1] = t.g, y[f + 2] = t.b, p = s + .5, v = u + .5, _ = l / 2, x = (p - _) * (p - _) + (v - _) * (v - _), g = x > d ? 0 : x > c ? 1 - (1 - h + h * (Math.sqrt(x) - r) / a) : h, y[f + 3] = 255 * g;
                    return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, l, l, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(y)), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), n
                };
                this.renderBasicDots = function(o, r, a, i, n) {
                    var l, s, u, f = [];
                    t.glPrograms.basicDotsProgram = rt(t.glPrograms.basicDotsProgram, T, g.MoaBasicDotsVertexShader, g.MoaDotMatrixFragmentShader, !1, e), l = t.glPrograms.basicDotsProgram, Mt(f, o), e.useProgram(l), e.enable(e.BLEND), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE), e.blendEquation(e.FUNC_ADD), e.enableVertexAttribArray(l.positionSlot), e.enableVertexAttribArray(l.pointSizeSlot);
                    var c = e.createBuffer(), d = e.createBuffer();
                    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.bindBuffer(e.ARRAY_BUFFER, c), e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW), e.vertexAttribPointer(l.positionSlot, 2, e.FLOAT, !1, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, d), e.bufferData(e.ARRAY_BUFFER, new Float32Array(a), e.STATIC_DRAW), e.vertexAttribPointer(l.pointSizeSlot, 1, e.FLOAT, !1, 0, 0), s = it(), u = gt(o, i, n, s), e.uniform1i(l.dotSamplerSlot, s), e.drawArrays(e.POINTS, 0, a.length), e.disable(e.BLEND), e.deleteTexture(u), e.deleteBuffer(c), e.deleteBuffer(d), lt(s), e.bindFramebuffer(e.FRAMEBUFFER, t.glRenderingObjects.offscreenFramebuffer), e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.vertexBufferFlipped), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.glBuffers.currentIndexBuffer)
                }, this.renderIdentity = function() {
                    t.glPrograms.bitmapIdentityProgram = rt(t.glPrograms.bitmapIdentityProgram, _, g.MoaVertexShader, g.MoaBitmapIdentityFragmentShader, !1, e), e.useProgram(t.glPrograms.bitmapIdentityProgram), t.startRender(t.glPrograms.bitmapIdentityProgram, n.NONE), t.finishRender(!0)
                }, this.renderColorBlendColor = function(o, r, a) {
                    var i;
                    t.glPrograms.colorBlendColorProgram = rt(t.glPrograms.colorBlendColorProgram, G, g.MoaVertexShader, g.MoaBitmapColorBlendColorFragmentShader, !1, e), i = t.glPrograms.colorBlendColorProgram, e.useProgram(i), t.startRender(i, n.NONE), e.uniform3fv(i.blendColorSlot, new Float32Array(o)), e.uniform1f(i.blendAmountSlot, a), e.uniform1f(i.blendColorAlphaSlot, r), t.finishRender(!0)
                }, this.renderBlendWithOriginal = function(o, r) {
                    t.glPrograms.bitmapBlendProgram = rt(t.glPrograms.bitmapBlendProgram, w, g.MoaVertexShader, g.MoaBitmapBlendFragmentShader, !1, e);
                    var a = t.glPrograms.bitmapBlendProgram;
                    e.useProgram(a), t.startRender(a, n.NONE);
                    var i = it();
                    t.glRenderingObjects.readTexture != t.glImageData.texID ? (e.activeTexture(nt(i)), e.bindTexture(e.TEXTURE_2D, t.glImageData.texID)) : i = 0, e.uniform1i(a.srcSamplerSlot, i), e.uniform1f(a.srcAmountSlot, r), e.uniform1f(a.dstAmountSlot, o), t.finishRender(!0), 0 != i && (e.activeTexture(nt(i)), e.bindTexture(e.TEXTURE_2D, null)), lt(i)
                }, this.renderBlendWithOriginalOverlayReverse = function(o) {
                    t.glPrograms.bitmapBlendOverlayReverseProgram = rt(t.glPrograms.bitmapBlendOverlayReverseProgram, b, g.MoaVertexShader, g.MoaBitmapBlendOverlayReverseFragmentShader, !1, e);
                    var r = t.glPrograms.bitmapBlendOverlayReverseProgram;
                    e.useProgram(r), t.startRender(r, n.NONE);
                    var a = it();
                    t.glRenderingObjects.readTexture != t.glImageData.texID ? (e.activeTexture(nt(a)), e.bindTexture(e.TEXTURE_2D, t.glImageData.texID)) : a = 0, e.uniform1i(r.srcSamplerSlot, a), e.uniform1f(r.factorSlot, o), t.finishRender(!0), 0 != a && (e.activeTexture(nt(a)), e.bindTexture(e.TEXTURE_2D, null)), lt(a)
                }, this.renderVignette = function(o) {
                    var r, a = [];
                    Mt(a, o.color), "overlay" == o.blendMode ? (t.glPrograms.borderVignetteOverlayProgram = rt(t.glPrograms.borderVignetteOverlayProgram, D, g.MoaVertexShader, g.MoaBordersVignetteOverlayFragmentShader, !1, e), r = t.glPrograms.borderVignetteOverlayProgram) : "multiply" == o.blendMode ? (t.glPrograms.borderVignetteMultiplyProgram = rt(t.glPrograms.borderVignetteMultiplyProgram, D, g.MoaVertexShader, g.MoaBordersVignetteMultiplyFragmentShader, !1, e), r = t.glPrograms.borderVignetteMultiplyProgram) : (t.glPrograms.borderVignetteProgram = rt(t.glPrograms.borderVignetteProgram, D, g.MoaVertexShader, g.MoaBordersVignetteFragmentShader, !1, e), r = t.glPrograms.borderVignetteProgram), e.useProgram(r), "overlay" == o.blendMode || "multiply" == o.blendMode ? t.startRender(r, n.NONE) : ("normal" != o.blendMode, t.startRender(r, n.NORMAL)), e.uniform1f(r.widthSlot, t.glImageData.width), e.uniform1f(r.heightSlot, t.glImageData.height), e.uniform1f(r.vignetteScaleSlot, o.vignetteScale), e.uniform1f(r.dx_2Slot, o.dx / 2), e.uniform1f(r.dy_2Slot, o.dy / 2), e.uniform4fv(r.vignetteColorSlot, a), e.uniform1i(r.shouldStrecthSlot, o.stretch ? 1 : 0), e.uniform1i(r.shapeModeSlot, d(o.shapeMode)), t.finishRender("overlay" == o.blendMode || "multiply" == o.blendMode ? !0 : !1)
                }, this.renderThetaBorder = function(o, r, a, i, l, s, u, f, c, d) {
                    var m, p = [];
                    t.glPrograms.borderThetaProgram = rt(t.glPrograms.borderThetaProgram, S, g.MoaVertexShader, g.MoaBordersThetaFragmentShader, !1, e), m = t.glPrograms.borderThetaProgram, Mt(p, o), e.useProgram(m), t.startRender(m, n.NORMAL), e.uniform1f(m.dwSlot, a), e.uniform1f(m.rFactorSlot, i), e.uniform1f(m.widthSlot, t.glImageData.width), e.uniform1f(m.heightSlot, t.glImageData.height), e.uniform1i(m.borderStyleSlot, h(r)), e.uniform4fv(m.borderColorSlot, p), e.uniform1f(m.offsetLSlot, l), e.uniform1f(m.offsetRSlot, s), e.uniform1f(m.offsetTSlot, u), e.uniform1f(m.offsetBSlot, f), e.uniform1f(m.offsetXSlot, c), e.uniform1f(m.offsetYSlot, d), t.finishRender(!1)
                };
                var pt = function(t, r, a, i, n, l, s, u, f, c) {
                    var d, h, m, g, p, v, _, x, y;
                    for (e.activeTexture(nt(c)), g = e.createTexture(), e.bindTexture(e.TEXTURE_2D, g), m = [], d = 0; r > d; d++)
                        p = u * (a[d] - f), v = 256 * p * 256 * 256 - Math.floor(256 * p * 256 * 256), _ = 256 * p * 256 - Math.floor(256 * p * 256) - v / 256, x = 256 * p - Math.floor(256 * p) - _ / 256, y = p - x / 256, m[4 * d] = 255 * v, m[4 * d + 1] = 255 * _, m[4 * d + 2] = 255 * x, m[4 * d + 3] = 255 * y;
                    for (h = 4 * s, d = 0; r > d; d++)
                        p = u * (i[d] - f), v = 256 * p * 256 * 256 - Math.floor(256 * p * 256 * 256), _ = 256 * p * 256 - Math.floor(256 * p * 256) - v / 256, x = 256 * p - Math.floor(256 * p) - _ / 256, y = p - x / 256, m[h + 4 * d] = 255 * v, m[h + 4 * d + 1] = 255 * _, m[h + 4 * d + 2] = 255 * x, m[h + 4 * d + 3] = 255 * y;
                    for (h = 8 * s, d = 0; t > d; d++)
                        p = u * (n[d] - f), v = 256 * p * 256 * 256 - Math.floor(256 * p * 256 * 256), _ = 256 * p * 256 - Math.floor(256 * p * 256) - v / 256, x = 256 * p - Math.floor(256 * p) - _ / 256, y = p - x / 256, m[h + 4 * d] = 255 * v, m[h + 4 * d + 1] = 255 * _, m[h + 4 * d + 2] = 255 * x, m[h + 4 * d + 3] = 255 * y;
                    for (h = 12 * s, d = 0; t > d; d++)
                        p = u * (l[d] - f), v = 256 * p * 256 * 256 - Math.floor(256 * p * 256 * 256), _ = 256 * p * 256 - Math.floor(256 * p * 256) - v / 256, x = 256 * p - Math.floor(256 * p) - _ / 256, y = p - x / 256, m[h + 4 * d] = 255 * v, m[h + 4 * d + 1] = 255 * _, m[h + 4 * d + 2] = 255 * x, m[h + 4 * d + 3] = 255 * y;
                    return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, s, 4, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(m)), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), g
                };
                this.renderHardRandBorder = function(o, r, a, i, l, s, u, f, c, d, h) {
                    var m, p, v, _ = [];
                    t.glPrograms.hardRandProgram = rt(t.glPrograms.hardRandProgram, A, g.MoaVertexShader, g.MoaBordersHardRandFragmentShader, !1, e), v = t.glPrograms.hardRandProgram, 0 == l && (l = 1), Mt(_, o), e.useProgram(v), t.startRender(v, n.NORMAL), p = Math.max(t.glImageData.width, t.glImageData.height);
                    var x, y, M, C, w, b, D, S, P, T, E = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], F = [0, 0, 0, 0];
                    for (m = 0; m < t.glImageData.width; m++)
                        P = d[m], T = h[m], P > F[2] && (F[2] = P), T > F[3] && (F[3] = T), P < E[2] && (E[2] = P), T < E[3] && (E[3] = T);
                    for (m = 0; m < t.glImageData.height; m++)
                        D = f[m], S = c[m], D > F[0] && (F[0] = D), S > F[1] && (F[1] = S), D < E[0] && (E[0] = D), S < E[1] && (E[1] = S);
                    y = Math.max(Math.max(F[0], F[1]), Math.max(F[2], F[3])), x = Math.min(Math.min(E[0], E[1]), Math.min(E[2], E[3])), M = 1 / (y - x), C = x, w = it(), b = pt(t.glImageData.width, t.glImageData.height, f, c, d, h, p, M, C, w), e.uniform1i(v.linesSamplerSlot, w), e.uniform1f(v.heightSlot, t.glImageData.height), e.uniform1f(v.widthSlot, t.glImageData.width), e.uniform1f(v.widthTexCoordMultSlot, 1 / p), e.uniform1f(v.heightTexCoordMultSlot, 1 / p), e.uniform1f(v.h2Slot, u), e.uniform1f(v.w2Slot, s), e.uniform1f(v.offsetSlot, i), e.uniform1f(v.dwSlot, r), e.uniform4fv(v.colorSlot, _), e.uniform1f(v.scaleSlot, a), e.uniform1f(v.floatMultSlot, M), e.uniform1f(v.floatTransSlot, C), e.uniform1f(v.randomSeedSlot, l), t.finishRender(!1), e.deleteTexture(b), lt(w)
                };
                var vt = function(t, r, a, i) {
                    var n, l, s, u;
                    s = 4, u = 256;
                    var f = [];
                    for (e.activeTexture(nt(i)), n = e.createTexture(), e.bindTexture(e.TEXTURE_2D, n), l = 0; u > l; l++)
                        f[l * s] = Ft(t[l]), f[l * s + 1] = Ft(r[l]), f[l * s + 2] = Ft(a[l]), f[l * s + 3] = 0;
                    return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 256, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(f)), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), n
                };
                this.renderColorMap = function(o) {
                    var r, a;
                    t.glPrograms.colorMapProgram = rt(t.glPrograms.colorMapProgram, M, g.MoaVertexShader, g.MoaColorMapFragmentShader, !1, e);
                    var i = t.glPrograms.colorMapProgram;
                    e.useProgram(i), this.startRender(i, n.NONE), r = it(), a = vt(o.r, o.g, o.b, r), e.uniform1i(i.colorMapSamplerSlot, r), this.finishRender(!0), e.activeTexture(nt(r)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(a), lt(r)
                }, this.renderIntensityMap = function(o, r, a) {
                    var i, l, s;
                    if ("multiply" == r)
                        t.glPrograms.intensityMapMultiplyProgram = rt(t.glPrograms.intensityMapMultiplyProgram, j, g.MoaVertexShader, g.MoaIntensityMapMultiplyFragmentShader, !1, e), s = t.glPrograms.intensityMapMultiplyProgram;
                    else if ("overlay" == r)
                        t.glPrograms.intensityMapOverlayProgram = rt(t.glPrograms.intensityMapOverlayProgram, j, g.MoaVertexShader, g.MoaIntensityMapOverlayFragmentShader, !1, e), s = t.glPrograms.intensityMapOverlayProgram;
                    else {
                        if ("normal" != r)
                            return;
                        t.glPrograms.intensityMapProgram = rt(t.glPrograms.intensityMapProgram, j, g.MoaVertexShader, g.MoaIntensityMapFragmentShader, !1, e), s = t.glPrograms.intensityMapProgram
                    }
                    e.useProgram(s), this.startRender(s, n.NONE), i = it(), l = vt(o.r, o.g, o.b, i), e.uniform1i(s.colorMapSamplerSlot, i), e.uniform1f(s.intensitySlot, a), this.finishRender(!0), e.activeTexture(nt(i)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(l), lt(i)
                }, this.adjustBrightnessContrastSaturationWarmth = function(o, r, a, i, l, s, u, f, c, d, h) {
                    t.glRenderingObjects.readTexture == t.glImageData.texID;
                    t.glPrograms.brightnessContrastSaturationWarmthProgram = rt(t.glPrograms.brightnessContrastSaturationWarmthProgram, x, g.MoaVertexShader, g.MoaBrightnessContrastSaturationWarmthShader, !1, e);
                    var m = t.glPrograms.brightnessContrastSaturationWarmthProgram, p = it();
                    if (-1 != p) {
                        var v = vt(l, s, s, p);
                        e.useProgram(m), t.startRender(m, n.NONE);
                        var _ = [1, 0, 0, 0, 1, 0, 0, 0, 1], y = [], M = [];
                        _[0] = c[0], _[1] = c[1], _[2] = c[2], _[3] = c[3], _[4] = c[4], _[5] = c[5], _[6] = c[6], _[7] = c[7], _[8] = c[8], y[0] = u[0], y[1] = u[1], y[2] = u[2], y[3] = u[3], y[4] = u[4], y[5] = u[5], y[6] = u[6], y[7] = u[7], y[8] = u[8], M[0] = f[0], M[1] = f[1], M[2] = f[2], e.uniform1f(m.brightnessSlot, o), e.uniform1f(m.contrastSlot, r), e.uniform1f(m.saturationSlot, a), e.uniform1f(m.warmthSlot, i), e.uniform1i(m.cMapSlot, p), e.uniformMatrix3fv(m.contrastSatAdjustSlot, e.FALSE, _), e.uniformMatrix3fv(m.saturationMatrixSlot, e.FALSE, y), e.uniform3fv(m.warmthDeltaSlot, M), t.finishRender(!0), e.deleteTexture(v), lt(p)
                    }
                };
                var _t = function(e, t, o) {
                    t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[1], t[4] = e[5], t[5] = e[9], t[6] = e[2], t[7] = e[6], t[8] = e[10], o[0] = e[3] / 255, o[1] = e[7] / 255, o[2] = e[11] / 255
                };
                this.renderColorMatrixTransform = function(o) {
                    t.glPrograms.colorTransformProgram = rt(t.glPrograms.colorTransformProgram, y, g.MoaVertexShader, g.MoaColorTransformFragmentShader, !1, e);
                    var r = t.glPrograms.colorTransformProgram, a = [], i = [];
                    _t(o, a, i), e.useProgram(r), t.startRender(r, n.NONE), e.uniform3fv(r.colorTransSlot, new Float32Array(i)), e.uniformMatrix3fv(r.colorMatSlot, !1, new Float32Array(a)), t.finishRender(!0)
                }, this.renderColorMatrixTransformAndOverlayWithOriginal = function(o, r) {
                    t.glPrograms.colorTransformAndOverlayWithOriginalProgram = rt(t.glPrograms.colorTransformAndOverlayWithOriginalProgram, U, g.MoaVertexShader, g.MoaColorTransformAndOverlayWithOriginalFragmentShader, !1, e);
                    var a = t.glPrograms.colorTransformAndOverlayWithOriginalProgram, i = [], l = [];
                    _t(o, i, l), e.useProgram(a), t.startRender(a, n.NONE), e.uniform3fv(a.colorTransSlot, new Float32Array(l)), e.uniformMatrix3fv(a.colorMatSlot, !1, new Float32Array(i)), e.uniform1f(t.glPrograms.colorTransformAndOverlayWithOriginalProgram.overlayAmountSlot, r), t.finishRender(!0)
                };
                var xt = function(e, t) {
                    for (var o = !1, r = !1, a = 0, i = e; !o; )
                        if (i = e + a, a *= -1, 0 >= a && a--, !(3 > i)) {
                            o = !0, r = !1;
                            var n = i, l = [3, 5, 7];
                            t[0] = 0, t[1] = 0, t[2] = 0;
                            for (var s = 0, u = 0; n > 1; )
                                if (n % l[s] == 0 ? (t[s]++, u++, n = n / l[s] | 0) : s++, s >= 3) {
                                    o = !1;
                                    break
                                }
                        }
                };
                this.addBoxBlur = function(o, r) {
                    var a = [];
                    if (!(2 > o)) {
                        xt(o, a);
                        var i = 1 / ("horizontal" == r ? t.glImageData.width : t.glImageData.height);
                        "horizontal" == r ? (t.glPrograms.horizontalBoxBlur3Program = rt(t.glPrograms.horizontalBoxBlur3Program, q, g.MoaConvolutionHorizontalBoxBlur3VertexShader, g.MoaConvolutionBoxBlur3FragmentShader, !1, e), t.glPrograms.horizontalBoxBlur5Program = rt(t.glPrograms.horizontalBoxBlur5Program, q, g.MoaConvolutionHorizontalBoxBlur5VertexShader, g.MoaConvolutionBoxBlur5FragmentShader, !1, e), t.glPrograms.horizontalBoxBlur7Program = rt(t.glPrograms.horizontalBoxBlur7Program, q, g.MoaConvolutionHorizontalBoxBlur7VertexShader, g.MoaConvolutionBoxBlur7FragmentShader, !1, e)) : (t.glPrograms.verticalBoxBlur3Program = rt(t.glPrograms.verticalBoxBlur3Program, q, g.MoaConvolutionVerticalBoxBlur3VertexShader, g.MoaConvolutionBoxBlur3FragmentShader, !1, e), t.glPrograms.verticalBoxBlur5Program = rt(t.glPrograms.verticalBoxBlur5Program, q, g.MoaConvolutionVerticalBoxBlur5VertexShader, g.MoaConvolutionBoxBlur5FragmentShader, !1, e), t.glPrograms.verticalBoxBlur7Program = rt(t.glPrograms.verticalBoxBlur7Program, q, g.MoaConvolutionVerticalBoxBlur7VertexShader, g.MoaConvolutionBoxBlur7FragmentShader, !1, e));
                        var l, s = a[0] + a[1] + a[2], u = i, f = u;
                        for (l = 0; s > l; l++) {
                            var c;
                            l < a[0] ? (c = "horizontal" == r ? t.glPrograms.horizontalBoxBlur3Program : t.glPrograms.verticalBoxBlur3Program, f *= 3) : l < a[0] + a[1] ? (c = "horizontal" == r ? t.glPrograms.horizontalBoxBlur5Program : t.glPrograms.verticalBoxBlur5Program, f *= 5) : (c = "horizontal" == r ? t.glPrograms.horizontalBoxBlur7Program : t.glPrograms.verticalBoxBlur7Program, f *= 7), e.useProgram(c), e.uniform1f(c.texelStrideSlot, u), t.startRender(c, n.NONE), e.activeTexture(e.TEXTURE0), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), t.finishRender(!0), u = f
                        }
                        e.activeTexture(e.TEXTURE0), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR)
                    }
                }, this.addConvolution = function(o, r, a) {
                    var i;
                    r > 1 && t.addBoxBlur(r, a, this);
                    var l = 1 / ("horizonal" == a ? t.glImageData.width : t.glImageData.height), s = l * (r ? r : 1);
                    "horizontal" == a ? (t.glPrograms.gaussianBlurHorizontalProgram = rt(t.glPrograms.gaussianBlurHorizontalProgram, Z, g.MoaConvolutionHorizontalGaussian9VertexShader, g.MoaConvolutionGaussian9FragmentShader, !1, e), i = t.glPrograms.gaussianBlurHorizontalProgram) : (t.glPrograms.gaussianBlurVerticalProgram = rt(t.glPrograms.gaussianBlurVerticalProgram, Z, g.MoaConvolutionVerticalGaussian9VertexShader, g.MoaConvolutionGaussian9FragmentShader, !1, e), i = t.glPrograms.gaussianBlurVerticalProgram);
                    e.useProgram(i), t.startRender(i, n.NONE), e.uniform1f(i.texelStrideSlot, s), e.uniform1f(i.weight0Slot, o[4]), e.uniform1f(i.weight1Slot, o[3]), e.uniform1f(i.weight2Slot, o[2]), e.uniform1f(i.weight3Slot, o[1]), e.uniform1f(i.weight4Slot, o[0]), e.activeTexture(e.TEXTURE0), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), t.finishRender(!0), e.activeTexture(e.TEXTURE0), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR)
                }, this.renderWhiten = function() {
                    t.glPrograms.whitenProgram = rt(t.glPrograms.whitenProgram, B, g.MoaVertexShader, g.MoaWhitenFragmentShader, !1, e);
                    var o = t.glPrograms.whitenProgram;
                    e.useProgram(o), t.startRender(o, n.NONE), t.finishRender(!0)
                }, this.renderMaskDraw = function() {
                    var o = t.claimFreeTexture(), r = mt(o, t.glImageData.width, t.glImageData.height), a = t.glRenderingObjects.readTexture, i = t.glRenderingObjects.writeTexture;
                    t.glRenderingObjects.writeTexture = r, t.renderIdentity(), t.glRenderingObjects.readTexture = a, t.glRenderingObjects.writeTexture = i;
                    var l, s = r, u = o;
                    t.glPrograms.noiseProgram = rt(t.glPrograms.noiseProgram, L, g.MoaVertexShader, g.MoaNoiseFragmentShader, !1, e), l = t.glPrograms.noiseProgram, e.useProgram(l), t.startRender(l, n.NONE), e.uniform1f(l.randomSeedSlot, 0), e.uniform1f(l.intensitySlot, 1), t.finishRender(!0), t.glPrograms.bitmapBlendBitmapProgram = rt(t.glPrograms.bitmapBlendBitmapProgram, J, g.MoaVertexShader, g.MoaBitmapBlendBitmapFragmentShader, !1, e);
                    var l = t.glPrograms.bitmapBlendBitmapProgram;
                    e.useProgram(l), t.startRender(l, n.NONE), e.uniform1i(l.bitmapBlendSampler, u), e.uniform1f(l.alphaUniform, .5), e.uniform1i(l.blendModeUniform, 0), t.finishRender(!0), e.activeTexture(t.getTextureForIndex(u)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(s), lt(u)
                }, this.renderRedeye = function() {
                    t.glPrograms.redeyeProgram = rt(t.glPrograms.redeyeProgram, N, g.MoaVertexShader, g.MoaRedeyeFragmentShader, !1, e);
                    var o = t.glPrograms.redeyeProgram;
                    e.useProgram(o), t.startRender(o, n.NONE), t.finishRender(!0)
                };
                var yt = function(t, r, a) {
                    var i, n, l, s, u, f, c, d, h, m, g, p, v, _, x;
                    for (3.3 > r && (r = 3.3), Math.ceil(10 * r) % 2 == 0 && (r = (Math.ceil(10 * r) + 1) / 10), e.activeTexture(nt(a)), u = e.createTexture(), e.bindTexture(e.TEXTURE_2D, u), l = Math.ceil(2 * r * 5), f = Math.PI / (2 * r * r), c = t.a / 255, _ = [], i = 0; l > i; i++)
                        for (v = 4 * l * i, n = 0; l > n; n++)
                            s = v + 4 * n, _[s] = t.r, _[s + 1] = t.g, _[s + 2] = t.b, h = i + .5, m = n + .5, g = l / 2, p = (h - g) * (h - g) + (m - g) * (m - g), p > r * r * 5 ? d = 0 : (x = p * f, d = 2.25 > x ? c * Math.max(Math.cos(x), Math.cos(Math.sqrt(x) / 1.8) / 2) : c * Math.cos(Math.sqrt(x) / 1.8) / 2, 0 > d ? d = 0 : d > 1 && (d = 1)), _[s + 3] = 255 * d;
                    return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, l, l, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(_)), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), u
                };
                this.renderDotMatrix = function(o, r, a) {
                    var i, n, l, s, u = [];
                    t.glPrograms.dotMatrixProgram = rt(t.glPrograms.dotMatrixProgram, P, g.MoaDotMatrixVertexShader, g.MoaDotMatrixFragmentShader, !1, e), i = t.glPrograms.dotMatrixProgram, Mt(u, o), e.useProgram(i), e.enable(e.BLEND), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE), e.blendEquation(e.FUNC_ADD), e.enableVertexAttribArray(i.positionSlot);
                    var f = e.createBuffer();
                    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.bindBuffer(e.ARRAY_BUFFER, f), e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW), e.vertexAttribPointer(i.positionSlot, 2, e.FLOAT, !1, 0, 0), n = a * t.glImageData.width / 2, e.uniform1f(i.pointSizeSlot, 2 * n * 5), l = it(), s = yt(o, n, l), e.uniform1i(i.dotSamplerSlot, l), e.drawArrays(e.POINTS, 0, r.length / 2), e.disable(e.BLEND), e.deleteTexture(s), e.deleteBuffer(f), lt(l), e.bindFramebuffer(e.FRAMEBUFFER, t.glRenderingObjects.offscreenFramebuffer), e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.vertexBufferFlipped), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.glBuffers.currentIndexBuffer)
                };
                var Mt = function(e, t) {
                    e[0] = t.r / 255, e[1] = t.g / 255, e[2] = t.b / 255, e[3] = t.a / 255
                };
                this.renderFlare = function(o, r, a, i, u, f, c, d) {
                    var h, m, p, v, _, x, y = [], M = [];
                    Mt(M, i), y[0] = (1 + u) / 2, y[1] = (1 + f) / 2, h = Math.log(1 / (255 * i.a)), m = 0, p = 1 / a / .5 / c, v = 1 / a / .5 / d, "sinc" == r && (p = 2 / a, v = p), _ = M[3], "blob" != r || "overlay" != o && "normal" != o ? "angleGaussian" == r && "normal" == o ? (t.glPrograms.flareAngleGaussianProgram = rt(t.glPrograms.flareAngleGaussianProgram, C, g.MoaVertexShader, g.MoaFlareAngleGaussianFragmentShader, !1, e), x = t.glPrograms.flareAngleGaussianProgram) : "gaussianThing" == r && "normal" == o ? (t.glPrograms.flareGaussianThingProgram = rt(t.glPrograms.flareGaussianThingProgram, C, g.MoaVertexShader, g.MoaFlareGaussianThingFragmentShader, !1, e), x = t.glPrograms.flareGaussianThingProgram) : "gaussianThing2" == r && "normal" == o ? (t.glPrograms.flareGaussianThing2Program = rt(t.glPrograms.flareGaussianThing2Program, C, g.MoaVertexShader, g.MoaFlareGaussianThing2FragmentShader, !1, e), x = t.glPrograms.flareGaussianThing2Program) : "blob2" != r || "normal" != o && "overlay" != o ? "cornerFlares" != r || "normal" != o && "overlay" != o ? "gaussianThing3" == r && "normal" == o ? (t.glPrograms.flareGaussianThing3OverlayProgram = rt(t.glPrograms.flareGaussianThing3OverlayProgram, C, g.MoaVertexShader, g.MoaFlareGaussianThing3OverlayFragmentShader, !1, e), x = t.glPrograms.flareGaussianThing3OverlayProgram) : (t.glPrograms.flareFallbackProgram = rt(t.glPrograms.flareFallbackProgram, C, g.MoaVertexShader, g.MoaFlareFragmentShader, !1, e), x = t.glPrograms.flareFallbackProgram) : "overlay" == o ? (t.glPrograms.flareCornerflaresOverlayProgram = rt(t.glPrograms.flareCornerflaresOverlayProgram, C, g.MoaVertexShader, g.MoaFlareCornerflaresOverlayFragmentShader, !1, e), x = t.glPrograms.flareCornerflaresOverlayProgram) : (t.glPrograms.flareCornerflaresProgram = rt(t.glPrograms.flareCornerflaresProgram, C, g.MoaVertexShader, g.MoaFlareCornerflaresFragmentShader, !1, e), x = t.glPrograms.flareCornerflaresProgram) : "overlay" == o ? (t.glPrograms.flareBlob2OverlayProgram = rt(t.glPrograms.flareBlob2OverlayProgram, C, g.MoaVertexShader, g.MoaFlareBlob2OverlayFragmentShader, !1, e), x = t.glPrograms.flareBlob2OverlayProgram) : (t.glPrograms.flareBlob2Program = rt(t.glPrograms.flareBlob2Program, C, g.MoaVertexShader, g.MoaFlareBlob2FragmentShader, !1, e), x = t.glPrograms.flareBlob2Program) : "overlay" == o ? (t.glPrograms.flareBlobOverlayProgram = rt(t.glPrograms.flareBlobOverlayProgram, C, g.MoaVertexShader, g.MoaFlareBlobOverlayFragmentShader, !1, e), x = t.glPrograms.flareBlobOverlayProgram) : (t.glPrograms.flareBlobProgram = rt(t.glPrograms.flareBlobProgram, C, g.MoaVertexShader, g.MoaFlareBlobFragmentShader, !1, e), x = t.glPrograms.flareBlobProgram), e.useProgram(x), "normal" != o || x == t.glPrograms.flareFallbackProgram ? t.startRender(x, n.NONE) : t.startRender(x, n.NORMAL), x == t.glPrograms.flareFallbackProgram && (e.uniform1i(x.flareTypeSlot, l(r)), e.uniform1i(x.blendModeSlot, s(o))), e.uniform1f(x.scaleDiffxSlot, p), e.uniform1f(x.scaleDiffySlot, v), e.uniform2fv(x.onePlusDxTimesCenterCoordSlot, new Float32Array(y)), e.uniform4fv(x.flareColorSlot, new Float32Array(M)), e.uniform1f(x.minEXPSlot, h), e.uniform1f(x.maxEXPSlot, m), e.uniform1f(x.aFSlot, _), t.finishRender("normal" != o || x == t.glPrograms.flareFallbackProgram ? !0 : !1)
                };
                var Ct = function(t, r) {
                    var a;
                    return e.activeTexture(nt(t)), a = e.createTexture(), e.bindTexture(e.TEXTURE_2D, a), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, r.length / 4, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(r)), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), a
                };
                this.renderGradient = function(o, r, a, i, l, s, u) {
                    var c, h, m;
                    if ("overlay" == a) {
                        if ("linearVignette" == o.shapeMode)
                            return;
                        t.glPrograms.gradientOverlayProgram = rt(t.glPrograms.gradientOverlayProgram, X, g.MoaVertexShader, g.MoaGradientOverlayFragmentShader, !1, e), m = t.glPrograms.gradientOverlayProgram
                    } else {
                        if ("normal" != a)
                            return;
                        "linearVignette" == o.shapeMode ? (t.glPrograms.gradientLinearVignetteProgram = rt(t.glPrograms.gradientLinearVignetteProgram, X, g.MoaVertexShader, g.MoaGradientLinearVignetteFragmentShader, !1, e), m = t.glPrograms.gradientLinearVignetteProgram) : (t.glPrograms.gradientProgram = rt(t.glPrograms.gradientProgram, X, g.MoaVertexShader, g.MoaGradientFragmentShader, !1, e), m = t.glPrograms.gradientProgram)
                    }
                    c = it(), h = Ct(c, r), e.useProgram(m), "overlay" == a ? t.startRender(m, n.NONE) : t.startRender(m, n.NORMAL), e.uniform1f(m.widthSlot, t.glImageData.width), e.uniform1f(m.heightSlot, t.glImageData.height), e.uniform1f(m.scaleSlot, o.scale), e.uniform1f(m.xCenterSlot, o.xCenter), e.uniform1f(m.yCenterSlot, o.yCenter), e.uniform1f(m.dx_2Slot, o.dx / 2), e.uniform1f(m.dy_2Slot, o.dy / 2), e.uniform1f(m.denomISlot, u), e.uniform1f(m.alphaBlendSlot, i), e.uniform1f(m.angleCosSlot, s), e.uniform1f(m.angleSinSlot, l), e.uniform1i(m.shapeModeSlot, f(o.shapeMode)), e.uniform1i(m.vignetteShapeSlot, d(o.vignetteShape)), e.uniform1i(m.gradientMapSlot, c), t.finishRender("overlay" == a ? !0 : !1), e.activeTexture(nt(c)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(h), lt(c)
                }, this.renderGradientFlare = function(o) {
                    var r = t.claimFreeTexture(), a = mt(r, t.glImageData.width, t.glImageData.height), i = t.glRenderingObjects.readTexture, l = t.glRenderingObjects.writeTexture;
                    t.glRenderingObjects.writeTexture = a, t.renderIdentity(), t.glRenderingObjects.readTexture = i, t.glRenderingObjects.writeTexture = l, o.compositeTextureID = a, o.compositeTextureIndex = r;
                    var s = t.claimFreeTexture();
                    gradTexID = Ct(s, o.gradMap);
                    var u = t.claimFreeTexture();
                    gradTexIDMask = Ct(u, o.gradMapMask), t.renderIdentity(), t.glPrograms.shapeMaskProgram = rt(t.glPrograms.shapeMaskProgram, $, g.MoaVertexShader, g.MoaShapeMaskFragmentShader, !1, e);
                    var f = t.glPrograms.shapeMaskProgram;
                    e.useProgram(f), t.startRender(f, n.NONE), e.uniform1i(f.aspectModeUniform, o.aspectMode), e.uniform1f(f.widthUniform, t.glImageData.width), e.uniform1f(f.heightUniform, t.glImageData.height), e.uniform1i(f.noiseTypeUniform, o.noiseTypeMask), e.uniform1i(f.invertUniform, o.invertMask), e.uniform1i(f.maskOnlyUniform, 1), e.uniform1i(f.gradientMapUniform, u), e.uniformMatrix4fv(f.transformUniform, !1, o.transformMask), e.uniformMatrix4fv(f.paramsUniform, !1, o.paramsMask), t.finishRender(!0), t.renderIdentity(), t.glPrograms.shapeMaskProgram = rt(t.glPrograms.shapeMaskProgram, $, g.MoaVertexShader, g.MoaShapeMaskFragmentShader, !1, e);
                    var f = t.glPrograms.shapeMaskProgram;
                    e.useProgram(f), t.startRender(f, n.NONE), e.uniform1i(f.aspectModeUniform, o.aspectMode), e.uniform1f(f.widthUniform, t.glImageData.width), e.uniform1f(f.heightUniform, t.glImageData.height), e.uniform1i(f.noiseTypeUniform, o.noiseType), e.uniform1i(f.invertUniform, o.invert), e.uniform1i(f.maskOnlyUniform, 0), e.uniform1i(f.gradientMapUniform, s), e.uniformMatrix4fv(f.transformUniform, !1, o.transformGradient), e.uniformMatrix4fv(f.paramsUniform, !1, o.params), t.finishRender(!0), t.glPrograms.bitmapBlendBitmapProgram = rt(t.glPrograms.bitmapBlendBitmapProgram, J, g.MoaVertexShader, g.MoaBitmapBlendBitmapFragmentShader, !1, e);
                    var f = t.glPrograms.bitmapBlendBitmapProgram;
                    e.useProgram(f), t.startRender(f, n.NONE), e.uniform1i(f.bitmapBelowSampler, o.compositeTextureIndex), e.uniform1f(f.alphaUniform, o.alpha), e.uniform1i(f.blendModeUniform, o.blendMode), t.finishRender(!0), e.activeTexture(t.getTextureForIndex(o.compositeTextureIndex)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(o.compositeTextureID), lt(o.compositeTextureIndex), e.activeTexture(t.getTextureForIndex(s)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(gradTexID), lt(s), e.activeTexture(t.getTextureForIndex(u)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(gradTexIDMask), lt(u)
                }, this.renderGradientMap = function(o) {
                    t.glPrograms.gradientMapProgram = rt(t.glPrograms.gradientMapProgram, K, g.MoaVertexShader, g.MoaGradientMapFragmentShader, !1, e);
                    var r = t.glPrograms.gradientMapProgram, a = t.claimFreeTexture();
                    texID = Ct(a, o.gradMap), e.useProgram(r), t.startRender(r, n.NONE), e.uniform1i(r.gradientMap, a), t.finishRender(!0), e.activeTexture(t.getTextureForIndex(a)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(texID), lt(a)
                };
                var wt = function() {
                    var e = {};
                    e.r = [], e.g = [], e.b = [];
                    for (var t = 0; 256 > t; t++)
                        e.r[t] = 0, e.g[t] = 0, e.b[t] = 0;
                    return e
                };
                this.histogramBuild = function() {
                    var o = t.glImageData.width, r = t.glImageData.height, a = new Uint8Array(4 * o * r), i = wt();
                    t.finalizeEffect(), e.bindFramebuffer(e.FRAMEBUFFER, null), e.readPixels(0, 0, o, r, e.RGBA, e.UNSIGNED_BYTE, a);
                    var n, l = o * r;
                    for (n = 0; l > n; n++)
                        i.r[a[4 * n]]++, i.g[a[4 * n + 1]]++, i.b[a[4 * n + 2]]++;
                    return i
                }, this.addLine = function(o, r, a, i, n, l, s, u, f, c, d, h, m, p, v, _, x) {
                    var y, M = [], C = [], w = [];
                    t.glPrograms.lineProgram = rt(t.glPrograms.lineProgram, F, g.MoaLineVertexShader, g.MoaLineFragmentShader, !1, e), y = t.glPrograms.lineProgram, Mt(w, o), e.useProgram(y);
                    var b = e.createBuffer(), D = e.createBuffer();
                    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
                    var S = p / (t.glImageData.width - 1) * 2 - 1, P = v / (t.glImageData.height - 1) * 2 - 1, T = _ / (t.glImageData.width - 1) * 2 - 1, E = x / (t.glImageData.height - 1) * 2 - 1;
                    M[0] = S, M[1] = P, C[0] = p, C[1] = v, M[2] = T, M[3] = P, C[2] = _, C[3] = v, M[4] = S, M[5] = E, C[4] = p, C[5] = x, M[6] = T, M[7] = E, C[6] = _, C[7] = x, e.enableVertexAttribArray(y.positionSlot), e.bindBuffer(e.ARRAY_BUFFER, b), e.bufferData(e.ARRAY_BUFFER, new Float32Array(M), e.STATIC_DRAW), e.vertexAttribPointer(y.positionSlot, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(y.imagePosSlot), e.bindBuffer(e.ARRAY_BUFFER, D), e.bufferData(e.ARRAY_BUFFER, new Float32Array(C), e.STATIC_DRAW), e.vertexAttribPointer(y.imagePosSlot, 2, e.FLOAT, !1, 0, 0), e.enable(e.BLEND), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE), e.blendEquation(e.FUNC_ADD), e.uniform1f(y.nHatxSlot, r), e.uniform1f(y.nHatySlot, a), e.uniform1f(y.x1Slot, i), e.uniform1f(y.y1Slot, l), e.uniform1f(y.x2Slot, n), e.uniform1f(y.y2Slot, s), e.uniform1f(y.rSlot, u), e.uniform1f(y.r2Slot, f), e.uniform1f(y.dAASlot, c), e.uniform1f(y.bASlot, d), e.uniform1f(y.r2AASlot, h), e.uniform4fv(y.colorSlot, w), e.uniform1f(y.vLength2Slot, m), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), e.disable(e.BLEND), e.deleteBuffer(b), e.deleteBuffer(D), e.bindFramebuffer(e.FRAMEBUFFER, t.glRenderingObjects.offscreenFramebuffer), e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.vertexBufferFlipped), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.glBuffers.currentIndexBuffer)
                }, this.createMask = function(r, a) {
                    if (!t.willAcceptImageOfSize(r, a))
                        return null;
                    var i = it();
                    e.activeTexture(nt(i));
                    var n = e.createTexture();
                    return e.bindTexture(e.TEXTURE_2D, n), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r, a, 0, e.RGBA, e.UNSIGNED_BYTE, null), lt(i), n
                }, this.destroyMask = function(t) {
                    e.isTexture(t) && (e.deleteTexture(t), t = null)
                }, this.maskFillRadial = function(o, r, a, i, l, s) {
                    t.glPrograms.maskRadialProgram = rt(t.glPrograms.maskRadialProgram, V, g.MoaVertexShader, g.MoaMaskRadialFragmentShader, !1, e);
                    var u, f, c, d = t.glPrograms.maskRadialProgram;
                    u = t.glRenderingObjects.writeTexture, f = t.glImageData.width, c = t.glImageData.height, t.glRenderingObjects.writeTexture = o, t.glImageData.width = r, t.glImageData.height = a, e.useProgram(d), t.startRender(d, n.NONE);
                    var h = [i, l];
                    e.uniform2fv(d.centerPointSlot, new Float32Array(h)), e.uniform1f(d.sigmaR2Slot, s * s), e.uniform1f(d.widthSlot, r), e.uniform1f(d.heightSlot, a), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.clearColor(0, 0, 0, 1), t.finishRender(!0), t.glRenderingObjects.writeTexture = u, t.glImageData.width = f, t.glImageData.height = c
                }, this.maskFillLinear = function(o, r, a, i, l, s, u) {
                    t.glPrograms.maskLinearProgram = rt(t.glPrograms.maskLinearProgram, W, g.MoaVertexShader, g.MoaMaskLinearFragmentShader, !1, e);
                    var f, c, d, h = t.glPrograms.maskLinearProgram;
                    f = t.glRenderingObjects.writeTexture, c = t.glImageData.width, d = t.glImageData.height, t.glRenderingObjects.writeTexture = o, t.glImageData.width = r, t.glImageData.height = a, e.useProgram(h), t.startRender(h, n.NONE);
                    var m = [i, l], p = -Math.sin(u), v = Math.cos(u);
                    e.uniform2fv(h.centerPointSlot, new Float32Array(m)), e.uniform1f(h.sigmaR2Slot, s * s), e.uniform1f(h.widthSlot, r), e.uniform1f(h.heightSlot, a), e.uniform1f(h.normXSlot, p), e.uniform1f(h.normYSlot, v), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.clearColor(0, 0, 0, 1), t.finishRender(!0), t.glRenderingObjects.writeTexture = f, t.glImageData.width = c, t.glImageData.height = d
                }, this.maskAddPoints = function(o, a, i, l, s, u, f, c, d, h) {
                    var m, p, v, _ = l.length;
                    m = t.glRenderingObjects.writeTexture, p = t.glImageData.width, v = t.glImageData.height, t.glRenderingObjects.writeTexture = o, t.glImageData.width = a, t.glImageData.height = i;
                    var x;
                    if ("normal" == c)
                        t.glPrograms.maskDotsProgram = rt(t.glPrograms.maskDotsProgram, Y, g.MoaMaskDotsVertexShader, g.MoaMaskDotFragmentShader, !1, e), x = t.glPrograms.maskDotsProgram;
                    else {
                        if ("splash" != c)
                            throw "Error, invalid GL Mask Type";
                        t.glPrograms.colorSplashAutoProgram = rt(t.glPrograms.colorSplashAutoProgram, H, g.MoaMaskDotsVertexShader, g.MoaColorSplashAutoFragmentShader, !1, e), x = t.glPrograms.colorSplashAutoProgram
                    }
                    e.useProgram(x), t.startRender(x, n.NONE_DONT_CLEAR), e.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(h ? e.ZERO : e.ONE, e.ONE_MINUS_SRC_ALPHA), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
                    for (var y = 0; _ / 2 > y; y++)
                        l[2 * y] = 2 * l[2 * y] - 1, l[2 * y + 1] = 2 * l[2 * y + 1] - 1;
                    var M = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, M), e.bufferData(e.ARRAY_BUFFER, new Float32Array(l), e.STATIC_DRAW), e.vertexAttribPointer(x.positionSlot, 2, e.FLOAT, e.FALSE, 0, 0), e.enableVertexAttribArray(x.positionSlot);
                    var C = s, w = .5 * C, b = Math.pow(C + w * (1 - Math.sqrt(5 / 255)), 2), D = Math.sqrt(b);
                    if (e.uniform1f(x.pointSizeSlot, Math.ceil(2 * D)), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t.glImageData.texID), e.uniform1f(x.radiusSlot, C), e.uniform1f(x.widthSlot, a), e.uniform1f(x.heightSlot, i), e.uniform1f(x.alphaSlot, f), e.uniform1f(x.dEdgeSlot, w), "splash" == c) {
                        var S = r.rgb2labwithcbrtmapping(d.r, d.g, d.b);
                        e.uniform1f(x.lSlot, S[0]), e.uniform1f(x.aSlot, S[1]), e.uniform1f(x.bSlot, S[2]), e.uniform1f(x.sigmaCSlot, u)
                    }
                    e.drawArrays(e.POINTS, 0, _ / 2), e.finish(), ut(), t.glRenderingObjects.writeTexture = m, t.glImageData.width = p, t.glImageData.height = v, e.deleteBuffer(M), e.disable(e.BLEND), e.bindFramebuffer(e.FRAMEBUFFER, t.glRenderingObjects.offscreenFramebuffer), e.bindBuffer(e.ARRAY_BUFFER, t.glBuffers.vertexBufferFlipped), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.glBuffers.currentIndexBuffer)
                }, this.renderNoise = function(o, r) {
                    var a;
                    t.glPrograms.noiseProgram = rt(t.glPrograms.noiseProgram, L, g.MoaVertexShader, g.MoaNoiseFragmentShader, !1, e), a = t.glPrograms.noiseProgram, 0 == r && (r = 1), e.useProgram(a), t.startRender(a, n.NONE), e.uniform1f(a.randomSeedSlot, r), e.uniform1f(a.intensitySlot, o), t.finishRender(!0)
                }, this.renderOrientation = function(r, a, i, l, s, u) {
                    t.glPrograms.imageTransformProgram = rt(t.glPrograms.imageTransformProgram, tt, g.MoaImageTransformVertexShader, g.MoaImageTransformFragmentShader, !1, e);
                    var f = t.glPrograms.imageTransformProgram, c = (it(), t.glImageData.width), d = t.glImageData.height, h = Math.PI / 180 * i, m = it(), p = e.createTexture();
                    e.activeTexture(nt(m)), e.bindTexture(e.TEXTURE_2D, p), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, s, u, 0, e.RGBA, e.UNSIGNED_BYTE, null), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE);
                    var v = ft(p);
                    p.name = "new texture", e.useProgram(f), t.startRender(f, n.NONE);
                    var _ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    e.viewport(0, 0, s, u), _ = Pt(_, .5, .5), _ = Tt(_, 1 / c, 1 / d), _ = Et(_, -h), r && (_ = Tt(_, -1, 1)), a && (_ = Tt(_, 1, -1)), _ = Et(_, -l), _ = Tt(_, s, u), _ = Pt(_, -.5, -.5), e.uniformMatrix4fv(f.transform, e.FALSE, _), t.finishRender(!0), lt(m), e.deleteTexture(v), t.glImageData.width = s, t.glImageData.height = u
                }, this.renderResize = function(r, a) {
                    t.glPrograms.bitmapIdentityProgram = rt(t.glPrograms.bitmapIdentityProgram, _, g.MoaVertexShader, g.MoaBitmapIdentityFragmentShader, !1, e), e.useProgram(t.glPrograms.bitmapIdentityProgram);
                    var i = it(), l = e.createTexture();
                    e.activeTexture(nt(i)), e.bindTexture(e.TEXTURE_2D, l), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r, a, 0, e.RGBA, e.UNSIGNED_BYTE, null), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE);
                    var s = ft(l);
                    l.name = "new texture", t.startRender(t.glPrograms.bitmapIdentityProgram, n.NONE), e.viewport(0, 0, r, a), t.finishRender(!0), lt(i), e.deleteTexture(s), t.glImageData.width = r, t.glImageData.height = a
                }, this.renderCrop = function(r, a, i, l) {
                    t.glPrograms.imageTransformProgram = rt(t.glPrograms.imageTransformProgram, tt, g.MoaImageTransformVertexShader, g.MoaImageTransformFragmentShader, !1, e);
                    var s = t.glImageData.width, u = t.glImageData.height, f = r / s, c = a / u, d = t.glPrograms.imageTransformProgram, h = (it(), it()), m = e.createTexture();
                    e.activeTexture(nt(h)), e.bindTexture(e.TEXTURE_2D, m), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, i, l, 0, e.RGBA, e.UNSIGNED_BYTE, null), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE);
                    var p = ft(m);
                    m.name = "new texture", e.useProgram(d), t.startRender(d, n.NONE), e.viewport(0, 0, i, l);
                    var v = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    v = Pt(v, f, c), v = Tt(v, i / s, l / u), e.uniformMatrix4fv(d.transform, e.FALSE, v), t.finishRender(!0), lt(h), e.deleteTexture(p), t.glImageData.width = i, t.glImageData.height = l
                }, this.renderRingFlare = function(o, r, a, i, l, s, u, f) {
                    var c, d = [];
                    t.glPrograms.ringFlareProgram = rt(t.glPrograms.ringFlareProgram, E, g.MoaVertexShader, g.MoaRingFlareFragmentShader, !1, e), c = t.glPrograms.ringFlareProgram, Mt(d, o), e.useProgram(c), t.startRender(c, n.NORMAL), e.uniform1f(c.dr22Slot, i), e.uniform1f(c.dr12Slot, l), e.uniform1f(c.daaSlot, s), e.uniform1f(c.avgDSlot, u), e.uniform1f(c.bASlot, f), e.uniform1f(c.widthSlot, t.glImageData.width), e.uniform1f(c.heightSlot, t.glImageData.height), e.uniform1f(c.xCenterSlot, r), e.uniform1f(c.yCenterSlot, a), e.uniform4fv(c.colorSlot, d), t.finishRender(!1)
                }, this.redrawBitmapWithGLMask = function(o, r, a) {
                    var i, l;
                    t.glPrograms.redrawWithMaskProgram = rt(t.glPrograms.redrawWithMaskProgram, z, g.MoaVertexShader, g.MoaBitmapRedrawWithMaskFragmentShader, !1, e);
                    var s = t.glPrograms.redrawWithMaskProgram;
                    e.useProgram(s), t.startRender(s, n.NONE), i = it(), e.activeTexture(nt(i)), e.bindTexture(e.TEXTURE_2D, r), l = it(), e.activeTexture(nt(l)), e.bindTexture(e.TEXTURE_2D, o), a ? (e.uniform1i(s.samplerSlot, l), e.uniform1i(s.sourceSamplerSlot, 0)) : e.uniform1i(s.sourceSamplerSlot, l), e.uniform1i(s.maskSamplerSlot, i), t.finishRender(!0), e.activeTexture(nt(i)), e.bindTexture(e.TEXTURE_2D, null), lt(i), e.activeTexture(nt(l)), e.bindTexture(e.TEXTURE_2D, null), lt(l)
                }, this.drawExistingProcessedTextureWithMaskTexture = function(e, o, r) {
                    var a = 0;
                    e == t.glRenderingObjects.processedTexture1 ? a = t.glRenderingObjects.processedTexture2 : e == t.glRenderingObjects.processedTexture2 && (a = t.glRenderingObjects.processedTexture1), t.glRenderingObjects.readTexture = t.glImageData.texID, t.glRenderingObjects.writeTexture = a, t.redrawBitmapWithGLMask(e, o, r), t.finalizeEffect()
                };
                var bt = function(t, r) {
                    var a;
                    return e.activeTexture(nt(t)), a = e.createTexture(), e.bindTexture(e.TEXTURE_2D, a), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r), o(e.LINEAR, e.LINEAR, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE), a
                };
                this.drawOverlay = function(o, r, a, i, l, s) {
                    t.glPrograms.drawOverlayProgram = rt(t.glPrograms.drawOverlayProgram, et, g.MoaOverlayVertexShader, g.MoaOverlayFragmentShader, !1, e);
                    {
                        var u = t.glPrograms.drawOverlayProgram, f = it();
                        bt(f, o)
                    }
                    e.useProgram(u), t.startRender(u, n.NORMAL), e.uniform1i(u.overlaySamplerSlot, f);
                    var c = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], d = (o.width, o.height, t.glImageData.width), h = t.glImageData.height;
                    c = Pt(c, .5, .5), c = Tt(c, 1 / o.width / i, 1 / o.height / l), c = Et(c, -s), c = Tt(c, d, h), c = Pt(c, -r / d, -a / h), e.uniformMatrix4fv(u.transform, e.FALSE, c), t.finishRender(!1)
                };
                var Dt = function(e, t) {
                    var o = [];
                    return o[0] = e[0] * t[0] + e[1] * t[4] + e[2] * t[8] + e[3] * t[12], o[1] = e[0] * t[1] + e[1] * t[5] + e[2] * t[9] + e[3] * t[13], o[2] = e[0] * t[2] + e[1] * t[6] + e[2] * t[10] + e[3] * t[14], o[3] = e[0] * t[3] + e[1] * t[7] + e[2] * t[11] + e[3] * t[15], o[4] = e[4] * t[0] + e[5] * t[4] + e[6] * t[8] + e[7] * t[12], o[5] = e[4] * t[1] + e[5] * t[5] + e[6] * t[9] + e[7] * t[13], o[6] = e[4] * t[2] + e[5] * t[6] + e[6] * t[10] + e[7] * t[14], o[7] = e[4] * t[3] + e[5] * t[7] + e[6] * t[11] + e[7] * t[15], o[8] = e[8] * t[0] + e[9] * t[4] + e[10] * t[8] + e[11] * t[12], o[9] = e[8] * t[1] + e[9] * t[5] + e[10] * t[9] + e[11] * t[13], o[10] = e[8] * t[2] + e[9] * t[6] + e[10] * t[10] + e[11] * t[14], o[11] = e[8] * t[3] + e[9] * t[7] + e[10] * t[11] + e[11] * t[15], o[12] = e[12] * t[0] + e[13] * t[4] + e[14] * t[8] + e[15] * t[12], o[13] = e[12] * t[1] + e[13] * t[5] + e[14] * t[9] + e[15] * t[13], o[14] = e[12] * t[2] + e[13] * t[6] + e[14] * t[10] + e[15] * t[14], o[15] = e[12] * t[3] + e[13] * t[7] + e[14] * t[11] + e[15] * t[15], o
                }, St = function(e) {
                    var t = [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]];
                    return t
                }, Pt = function(e, t, o, r) {
                    var a = St(e);
                    "number" != typeof r && (r = 0);
                    var i = [1, 0, 0, t, 0, 1, 0, o, 0, 0, 1, r, 0, 0, 0, 1];
                    return a = Dt(a, i)
                }, Tt = function(e, t, o) {
                    var r = St(e), a = [t, 0, 0, 0, 0, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    return r = Dt(r, a)
                }, Et = function(e, t) {
                    var o = St(e), r = Math.cos(t), a = Math.sin(t), i = [r, -a, 0, 0, a, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    return o = Dt(o, i)
                };
                this.setRectangle = function(e, t, o, r, a) {
                    var i = t, n = t + r, l = o, s = o + a;
                    e.bufferData(e.ARRAY_BUFFER, new Float32Array([i, l, n, l, i, s, i, s, n, l, n, s]), e.STATIC_DRAW)
                }, this.renderDisplayTransparency = function() {
                    t.glPrograms.displayTransparencyProgram = rt(t.glPrograms.displayTransparencyProgram, Q, g.MoaVertexShader, g.MoaDisplayTransparencyFragmentShader, !1, e);
                    var o = t.glPrograms.displayTransparencyProgram;
                    e.useProgram(o), t.startRender(o, n.NONE), t.finishRender(!0)
                }, this.startCompositeLayer = function(e) {
                    var o = t.claimFreeTexture(), r = mt(o, t.glImageData.width, t.glImageData.height), a = t.glRenderingObjects.readTexture, i = t.glRenderingObjects.writeTexture;
                    t.glRenderingObjects.writeTexture = r, t.renderIdentity(), t.glRenderingObjects.readTexture = a, t.glRenderingObjects.writeTexture = i, e.compositeTextureID = r, e.compositeTextureIndex = o
                }, this.endCompositeLayer = function(e) {
                    t.renderBitmapBlendBitmap(e)
                }, this.renderBitmapBlendBitmap = function(o) {
                    t.glPrograms.bitmapBlendBitmapProgram = rt(t.glPrograms.bitmapBlendBitmapProgram, J, g.MoaVertexShader, g.MoaBitmapBlendBitmapFragmentShader, !1, e);
                    var r = t.glPrograms.bitmapBlendBitmapProgram;
                    e.useProgram(r), t.startRender(r, n.NONE), e.uniform1i(r.bitmapBelowSampler, o.compositeTextureIndex), e.uniform1f(r.alphaUniform, o.alpha), e.uniform1i(r.blendModeUniform, o.blendMode), t.finishRender(!0), e.activeTexture(t.getTextureForIndex(o.compositeTextureIndex)), e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(o.compositeTextureID), lt(o.compositeTextureIndex)
                };
                var Ft = function(e) {
                    return 0 > e ? 0 : e > 255 ? 255 : e
                }
            }
            var r = e("../filters/colorConversion.js"), a = 16, i = {OVERWRITE_ORIGINAL: 0,DEFAULT: 1,READ_SOURCE_WRITE_NONE: 2,READ_LAST_WRITE_NONE: 3,READ_LAST_WRITE_TARGET: 4}, n = {NONE: 0,NORMAL: 1,OVERLAY: 2,PREMULTIPLIED_ALPHA: 3,DRAW_OVER: 4,DRAW_BEHIND: 5,NONE_DONT_CLEAR: 6}, l = function(e) {
                return "sinc" == e ? 0 : "gaussianThing" == e ? 1 : "gaussianThing2" == e ? 2 : "gaussianThing3" == e ? 3 : "gaussianThing4" == e ? 4 : "angleGaussian" == e ? 5 : "stardom" == e ? 6 : "lobes" == e ? 7 : "lensFlare" == e ? 8 : "stripe" == e ? 9 : "stripe2" == e ? 10 : "dimondFlare" == e ? 11 : "crossFlare" == e ? 12 : "cornerFlares" == e ? 13 : "fingerFlare" == e ? 14 : "blobFlare" == e ? 15 : "blah" == e ? 16 : "blob" == e ? 17 : "blob2" == e ? 18 : -1
            }, s = function(e) {
                return "normal" == e ? 0 : "overlay" == e ? 1 : "color" == e ? 2 : "screen" == e ? 3 : "darken" == e ? 4 : "multiply" == e ? 5 : "soft" == e ? 6 : "lighten" == e ? 7 : "difference" == e ? 8 : "negation" == e ? 9 : "exclusion" == e ? 10 : "hard" == e ? 11 : "red" == e ? 12 : "green" == e ? 13 : "blue" == e ? 14 : "interpolation" == e ? 15 : "colordodge" == e ? 16 : "invcolordodge" == e ? 17 : "softdodge" == e ? 18 : "colorburn" == e ? 19 : "invcolorburn" == e ? 20 : "softburn" == e ? 21 : "add" == e ? 22 : "subtract" == e ? 23 : "stamp" == e ? 24 : "reflect" == e ? 25 : "glow" == e ? 26 : "freeze" == e ? 27 : "heat" == e ? 28 : -1
            }, u = function(e) {
                return "Perlin" == e ? 0 : "Worley Addition" == e ? 1 : "Cell Paintbrush" == e ? 2 : "Marble" == e ? 3 : "Perlin Abs" == e ? 4 : "Sin(x+y)" == e ? 6 : "Sin(x+2pi*sin(y))" == e ? 7 : "Linear" == e ? 8 : "Radial" == e ? 9 : "Sinc" == e ? 10 : "Gaussian Thing" == e ? 11 : "Mandelbrot" == e ? 12 : "Julia Set" == e ? 13 : "Identity" == e ? 14 : -1
            }, f = function(e) {
                return "linear" == e ? 0 : "radial" == e ? 1 : "linearVignette" == e ? 2 : -1
            }, c = function(e) {
                return "stretch" == e ? 0 : "average" == e ? 1 : "min" == e ? 2 : "max" == e ? 3 : -1
            }, d = function(e) {
                return "normal" == e ? 0 : "sharp" == e ? 1 : "mediumSharp" == e ? 2 : "ultraSharp" == e ? 3 : -1
            }, h = function(e) {
                return "none" == e ? 0 : "halftone" == e ? 1 : "lines" == e ? 2 : "smooth" == e ? 3 : "shadow" == e ? 4 : "fade" == e ? 5 : "rough" == e ? 6 : "bulge" == e ? 7 : "torn" == e ? 8 : "torn2" == e ? 9 : "rect" == e ? 10 : "round" == e ? 11 : "flickr" == e ? 12 : "hardrand" == e ? 13 : "instant" == e ? 14 : "vignette" == e ? 15 : "viewfinder" == e ? 16 : void 0
            }, m = {};
            m.MoaGL = o, t.exports = m;
            var g = {MoaConvolutionHorizontalBoxBlur3VertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "", "", "uniform highp float u_texelStride;", "", "void main(void) {", "v_texCoord = a_texCoord;", "v_texCoordMinus1 = a_texCoord;", "v_texCoordPlus1 = a_texCoord;", "v_texCoordMinus1.x = a_texCoord.x - u_texelStride;", "v_texCoordPlus1.x = a_texCoord.x + u_texelStride;", "", "gl_Position = a_position;", "}"].join("\n"),MoaConvolutionVerticalBoxBlur3VertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "", "", "uniform highp float u_texelStride;", "", "void main(void) {", "v_texCoord = a_texCoord;", "v_texCoordMinus1 = a_texCoord;", "v_texCoordPlus1 = a_texCoord;", "v_texCoordMinus1.y = a_texCoord.y - u_texelStride;", "v_texCoordPlus1.y = a_texCoord.y + u_texelStride;", "", "gl_Position = a_position;", "}"].join("\n"),MoaConvolutionBoxBlur3FragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "", "void main(void) {", "highp vec4 resultColor = texture2D(u_sampler, v_texCoord);", "resultColor += texture2D(u_sampler, v_texCoordPlus1);", "resultColor += texture2D(u_sampler, v_texCoordMinus1);", "gl_FragColor = resultColor / 3.0;", "}"].join("\n"),MoaConvolutionHorizontalBoxBlur5VertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "", "", "uniform highp float u_texelStride;", "", "void main(void) {", "v_texCoord = a_texCoord;", "v_texCoordMinus1 = a_texCoord;", "v_texCoordPlus1 = a_texCoord;", "v_texCoordMinus2 = a_texCoord;", "v_texCoordPlus2 = a_texCoord;", "v_texCoordMinus1.x = a_texCoord.x - u_texelStride;", "v_texCoordPlus1.x = a_texCoord.x + u_texelStride;", "v_texCoordMinus2.x = a_texCoord.x - u_texelStride * 2.0;", "v_texCoordPlus2.x = a_texCoord.x + u_texelStride * 2.0;", "", "gl_Position = a_position;", "}"].join("\n"),MoaConvolutionVerticalBoxBlur5VertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "", "uniform highp float u_texelStride;", "", "void main(void) {", "v_texCoord = a_texCoord;", "v_texCoordMinus1 = a_texCoord;", "v_texCoordPlus1 = a_texCoord;", "v_texCoordMinus2 = a_texCoord;", "v_texCoordPlus2 = a_texCoord;", "v_texCoordMinus1.y = a_texCoord.y - u_texelStride;", "v_texCoordPlus1.y = a_texCoord.y + u_texelStride;", "v_texCoordMinus2.y = a_texCoord.y - u_texelStride * 2.0;", "v_texCoordPlus2.y = a_texCoord.y + u_texelStride * 2.0;", "", "gl_Position = a_position;", "}"].join("\n"),MoaConvolutionBoxBlur5FragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "", "void main(void) {", "highp vec4 resultColor = texture2D(u_sampler, v_texCoord);", "resultColor += texture2D(u_sampler, v_texCoordPlus1);", "resultColor += texture2D(u_sampler, v_texCoordMinus1);", "resultColor += texture2D(u_sampler, v_texCoordPlus2);", "resultColor += texture2D(u_sampler, v_texCoordMinus2);", "gl_FragColor = resultColor / 5.0;", "}"].join("\n"),MoaConvolutionHorizontalBoxBlur7VertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "varying highp vec2 v_texCoordMinus3;", "varying highp vec2 v_texCoordPlus3;", "", "uniform highp float u_texelStride;", "", "void main(void) {", "v_texCoord = a_texCoord;", "v_texCoordMinus1 = a_texCoord;", "v_texCoordPlus1 = a_texCoord;", "v_texCoordMinus2 = a_texCoord;", "v_texCoordPlus2 = a_texCoord;", "v_texCoordMinus3 = a_texCoord;", "v_texCoordPlus3 = a_texCoord;", "v_texCoordMinus1.x = a_texCoord.x - u_texelStride;", "v_texCoordPlus1.x = a_texCoord.x + u_texelStride;", "v_texCoordMinus2.x = a_texCoord.x - u_texelStride * 2.0;", "v_texCoordPlus2.x = a_texCoord.x + u_texelStride * 2.0;", "v_texCoordMinus3.x = a_texCoord.x - u_texelStride * 3.0;", "v_texCoordPlus3.x = a_texCoord.x + u_texelStride * 3.0;", "", "gl_Position = a_position;", "}"].join("\n"),MoaConvolutionVerticalBoxBlur7VertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "varying highp vec2 v_texCoordMinus3;", "varying highp vec2 v_texCoordPlus3;", "", "uniform highp float u_texelStride;", "", "void main(void) {", "v_texCoord = a_texCoord;", "v_texCoordMinus1 = a_texCoord;", "v_texCoordPlus1 = a_texCoord;", "v_texCoordMinus2 = a_texCoord;", "v_texCoordPlus2 = a_texCoord;", "v_texCoordMinus3 = a_texCoord;", "v_texCoordPlus3 = a_texCoord;", "v_texCoordMinus1.y = a_texCoord.y - u_texelStride;", "v_texCoordPlus1.y = a_texCoord.y + u_texelStride;", "v_texCoordMinus2.y = a_texCoord.y - u_texelStride * 2.0;", "v_texCoordPlus2.y = a_texCoord.y + u_texelStride * 2.0;", "v_texCoordMinus3.y = a_texCoord.y - u_texelStride * 3.0;", "v_texCoordPlus3.y = a_texCoord.y + u_texelStride * 3.0;", "", "gl_Position = a_position;", "}"].join("\n"),MoaConvolutionBoxBlur7FragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "varying highp vec2 v_texCoordMinus3;", "varying highp vec2 v_texCoordPlus3;", "", "void main(void) {", "highp vec4 resultColor = texture2D(u_sampler, v_texCoord);", "resultColor += texture2D(u_sampler, v_texCoordPlus1);", "resultColor += texture2D(u_sampler, v_texCoordMinus1);", "resultColor += texture2D(u_sampler, v_texCoordPlus2);", "resultColor += texture2D(u_sampler, v_texCoordMinus2);", "resultColor += texture2D(u_sampler, v_texCoordPlus3);", "resultColor += texture2D(u_sampler, v_texCoordMinus3);", "gl_FragColor = resultColor / 7.0;", "}"].join("\n"),MoaConvolutionHorizontalGaussian9VertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "", "varying highp vec2 v_texCoord;", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "varying highp vec2 v_texCoordMinus3;", "varying highp vec2 v_texCoordPlus3;", "varying highp vec2 v_texCoordMinus4;", "varying highp vec2 v_texCoordPlus4;", "", "uniform highp float u_texelStride;", "", "void main(void) {", "v_texCoord = a_texCoord;", "v_texCoordMinus1 = a_texCoord;", "v_texCoordPlus1 = a_texCoord;", "v_texCoordMinus2 = a_texCoord;", "v_texCoordPlus2 = a_texCoord;", "v_texCoordMinus3 = a_texCoord;", "v_texCoordPlus3 = a_texCoord;", "v_texCoordMinus4 = a_texCoord;", "v_texCoordPlus4 = a_texCoord;", "", "v_texCoordMinus1.x = a_texCoord.x - u_texelStride;", "v_texCoordPlus1.x = a_texCoord.x + u_texelStride;", "v_texCoordMinus2.x = a_texCoord.x - u_texelStride * 2.0;", "v_texCoordPlus2.x = a_texCoord.x + u_texelStride * 2.0;", "v_texCoordMinus3.x = a_texCoord.x - u_texelStride * 3.0;", "v_texCoordPlus3.x = a_texCoord.x + u_texelStride * 3.0;", "v_texCoordMinus4.x = a_texCoord.x - u_texelStride * 4.0;", "v_texCoordPlus4.x = a_texCoord.x + u_texelStride * 4.0;", "", "gl_Position = a_position;", "}"].join("\n"),MoaConvolutionVerticalGaussian9VertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "varying highp vec2 v_texCoordMinus3;", "varying highp vec2 v_texCoordPlus3;", "varying highp vec2 v_texCoordMinus4;", "varying highp vec2 v_texCoordPlus4;", "", "uniform highp float u_texelStride;", "", "void main(void) {", "v_texCoord = a_texCoord;", "v_texCoordMinus1 = a_texCoord;", "v_texCoordPlus1 = a_texCoord;", "v_texCoordMinus2 = a_texCoord;", "v_texCoordPlus2 = a_texCoord;", "v_texCoordMinus3 = a_texCoord;", "v_texCoordPlus3 = a_texCoord;", "v_texCoordMinus4 = a_texCoord;", "v_texCoordPlus4 = a_texCoord;", "", "v_texCoordMinus1.y = a_texCoord.y - u_texelStride;", "v_texCoordPlus1.y = a_texCoord.y + u_texelStride;", "v_texCoordMinus2.y = a_texCoord.y - u_texelStride * 2.0;", "v_texCoordPlus2.y = a_texCoord.y + u_texelStride * 2.0;", "v_texCoordMinus3.y = a_texCoord.y - u_texelStride * 3.0;", "v_texCoordPlus3.y = a_texCoord.y + u_texelStride * 3.0;", "v_texCoordMinus4.y = a_texCoord.y - u_texelStride * 4.0;", "v_texCoordPlus4.y = a_texCoord.y + u_texelStride * 4.0;", "", "gl_Position = a_position;", "}"].join("\n"),MoaConvolutionGaussian9FragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "varying highp vec2 v_texCoordMinus1;", "varying highp vec2 v_texCoordPlus1;", "varying highp vec2 v_texCoordMinus2;", "varying highp vec2 v_texCoordPlus2;", "varying highp vec2 v_texCoordMinus3;", "varying highp vec2 v_texCoordPlus3;", "varying highp vec2 v_texCoordMinus4;", "varying highp vec2 v_texCoordPlus4;", "", "uniform highp float u_weight0;", "uniform highp float u_weight1;", "uniform highp float u_weight2;", "uniform highp float u_weight3;", "uniform highp float u_weight4;", "", "void main(void) {", "highp vec4 resultColor = texture2D(u_sampler, v_texCoord) * u_weight0;", "resultColor += texture2D(u_sampler, v_texCoordPlus1) * u_weight1;", "resultColor += texture2D(u_sampler, v_texCoordMinus1) * u_weight1;", "resultColor += texture2D(u_sampler, v_texCoordPlus2) * u_weight2;", "resultColor += texture2D(u_sampler, v_texCoordMinus2) * u_weight2;", "resultColor += texture2D(u_sampler, v_texCoordPlus3) * u_weight3;", "resultColor += texture2D(u_sampler, v_texCoordMinus3) * u_weight3;", "resultColor += texture2D(u_sampler, v_texCoordPlus4) * u_weight4;", "resultColor += texture2D(u_sampler, v_texCoordMinus4) * u_weight4;", "", "gl_FragColor = resultColor / (u_weight0 + 2.0 * (u_weight1 + u_weight2 + u_weight3 + u_weight4));", "", "}"].join("\n"),MoaBitmapIdentityFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "gl_FragColor = texture2D(u_sampler, v_texCoord);", "}"].join("\n"),MoaBitmapBlendFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_srcSampler;", "uniform float u_dstAmount;", "uniform float u_srcAmount;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "vec4 color = texture2D(u_srcSampler, v_texCoord);", "vec4 originalColor = texture2D(u_sampler, v_texCoord);", "gl_FragColor = color * u_srcAmount + originalColor * u_dstAmount;", "gl_FragColor.a = 1.0;", "}"].join("\n"),MoaBitmapBlendOverlayFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_srcSampler;", "uniform float u_factor;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "lowp vec4 src = texture2D(u_srcSampler, v_texCoord);", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "", "lowp vec4 color = vec4(0,0,0,0);", "", "float factorI = 1.0 - u_factor;", "", "vec4 mult = 2.0 * dst * src;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - src);", "color = factorI * dst + u_factor * mix(mult, screen, step(0.5, dst));", "", "color.a = 1.0;", "gl_FragColor = color;", "", "}"].join("\n"),MoaBitmapBlendOverlayReverseFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_srcSampler;", "uniform float u_factor;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_srcSampler, v_texCoord);", "lowp vec4 src = texture2D(u_sampler, v_texCoord);", "", "lowp vec4 color = vec4(0,0,0,0);", "", "float factorI = 1.0 - u_factor;", "", "vec4 mult = 2.0 * dst * src;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - src);", "color = factorI * dst + u_factor * mix(mult, screen, step(0.5, dst));", "", "color.a = 1.0;", "gl_FragColor = color;", "", "}"].join("\n"),MoaBitmapDrawWithMaskFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_maskSampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "vec4 maskAmount = texture2D(u_maskSampler, v_texCoord);", "vec4 originalColor = texture2D(u_sampler, v_texCoord);", "originalColor.a = 1.0 - maskAmount.a;", "gl_FragColor = originalColor;", "}"].join("\n"),MoaBitmapRedrawWithMaskFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_maskSampler;", "uniform lowp sampler2D u_sourceSampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "vec4 maskAmount = texture2D(u_maskSampler, v_texCoord);", "vec4 originalColor = texture2D(u_sampler, v_texCoord);", "vec4 sourceColor = texture2D(u_sourceSampler, v_texCoord);", "gl_FragColor = mix(originalColor, sourceColor, maskAmount.a);", "}"].join("\n"),MoaBitmapColorBlendColorFragmentShader: ["precision highp float;", "", "uniform highp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform highp vec3 u_blendColor;", "uniform highp float u_blendAmount;", "uniform highp float u_blendColorAlpha;", "", "void main(void) {", "highp vec4 color = texture2D(u_sampler, v_texCoord);", "", "// RBG -> HSL", "float r = color.r;", "float g = color.g;", "float b = color.b;", "float h = u_blendColor.x;", "float s = u_blendColor.y;", "float l = u_blendColor.z;", "", "// Blend", "s *= u_blendColorAlpha; //Hack hack hack", "l  = (0.212671*r + 0.71516*g + 0.072169*b);", "", "// End Blend", "", "// HSL -> RGB", "float hPrime;", "float C;", "float X;", "float m;", "float hPrimeMod2;", "", "hPrime = h * 6.0;", "C = l > 0.5 ? 2.0 * s * (1.0 - l) : 2.0 * s * l;", "hPrimeMod2 = hPrime;", "", "hPrimeMod2 = mod(hPrimeMod2, 2.0);", "", "X = C * (1.0 - abs(hPrimeMod2 - 1.0));", "", "m = l - 0.5*C;", "", "if(hPrime < 1.0){", "r = C; g = X; b = 0.0;", "}else if(hPrime < 2.0){", "r = X; g = C; b = 0.0;", "}else if(hPrime < 3.0){", "r = 0.0; g = C; b = X;", "}else if(hPrime < 4.0){", "r = 0.0; g = X; b = C;", "}else if(hPrime < 5.0){", "r = X; g = 0.0; b = C;", "}else if(hPrime < 6.0){", "r = C; g = 0.0; b = X;", "}", "// End HSL -> RGB", "", "vec4 blendedColor = vec4(r+m,g+m,b+m,1.0);", "color = mix(color, blendedColor, u_blendAmount);", "color.a = 1.0; //Just to make sure", "", "gl_FragColor = color;", "}"].join("\n"),MoaBitmapBlendDarkestFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_sourceSampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "vec4 dstColor = texture2D(u_sampler, v_texCoord);", "vec4 srcColor = texture2D(u_sourceSampler, v_texCoord);", "", "if(dot(vec3(0.2, 0.7, 0.1), dstColor.rgb) > dot(vec3(0.2, 0.7, 0.1), srcColor.rgb)){", "gl_FragColor = srcColor;", "}else{", "//                                                                 gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);", "gl_FragColor = dstColor;", "}", "}"].join("\n"),MoaBitmapBlendBitmapColorModeFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_blendSampler;", "uniform float u_alpha;", "", "varying highp vec2 v_texCoord;", "", "void main(void) {", "// a (base color) and b (blend color)", "vec4 bRGBA = texture2D(u_blendSampler, v_texCoord); //Blend Color", "vec4 aRGBA = texture2D(u_sampler, v_texCoord); //Base Color", "", "vec3 a = aRGBA.rgb;", "vec3 b = bRGBA.rgb;", "", "float alpha = u_alpha * bRGBA.a;", "vec3 blendColor = a;", "", "", "float h;", "float s;", "float l;", "", "// RBG -> HSL", "float maxChan = max(b.r, max(b.g, b.b));", "float minChan = min(b.r, min(b.g, b.b));", "", "float chroma = maxChan - minChan;", "l = (maxChan + minChan)/2.0;", "", "if(chroma == 0.0){", "h = 0.0;", "s = 0.0;", "} else{", "s = l > 0.5 ? chroma / (2.0 - maxChan - minChan) : chroma / (maxChan + minChan);", "", "if(b.r == maxChan){", "h = (b.g - b.b) / chroma + (b.g < b.b ? 6.0 : 0.0);", "}else if(b.g == maxChan){", "h = (b.b - b.r) / chroma + 2.0;", "}else if(b.b == maxChan){", "h = (b.r - b.g) / chroma + 4.0;", "}", "", "h *= 60.0;", "", "if(h < 0.0){h += 360.0;}", "if(h >= 360.0){h -= 360.0;}", "}", "", "", "// Blend", "l  = (0.212671*a.r + 0.71516*a.g + 0.072169*a.b);", "s *= alpha;", "", "float hPrime = h / 60.0;", "float C = l > 0.5 ? 2.0 * s * (1.0 - l) : 2.0 * s * l;", "float X = C * (1.0 - abs(mod(hPrime, 2.0) - 1.0));", "", "if(hPrime < 1.0){", "blendColor.r = C; blendColor.g = X; blendColor.b = 0.0;", "}else if(hPrime < 2.0){", "blendColor.r = X; blendColor.g = C; blendColor.b = 0.0;", "}else if(hPrime < 3.0){", "blendColor.r = 0.0; blendColor.g = C; blendColor.b = X;", "}else if(hPrime < 4.0){", "blendColor.r = 0.0; blendColor.g = X; blendColor.b = C;", "}else if(hPrime < 5.0){", "blendColor.r = X; blendColor.g = 0.0; blendColor.b = C;", "}else if(hPrime < 6.0){", "blendColor.r = C; blendColor.g = 0.0; blendColor.b = X;", "}", "", "float m = l - 0.5 * C;", "", "blendColor.r = blendColor.r + m;", "blendColor.g = blendColor.g + m;", "blendColor.b = blendColor.b + m;", "", "", "", "gl_FragColor = vec4(mix(a, blendColor, alpha),1.0);", "", "}"].join("\n"),MoaBitmapBlendBitmapFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_blendSampler;", "uniform float u_alpha;", "uniform int u_blendMode;", "", "varying highp vec2 v_texCoord;", "", "void main(void) {", "", "//                                                            gl_FragColor = mix(texture2D(u_sampler, v_texCoord), texture2D(u_blendSampler, v_texCoord), v_texCoord.x);", "//                                                            gl_FragColor = mix(vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), v_texCoord.x);", "//                                                            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);", "", "", "// a (base color) and b (blend color)", "vec4 bRGBA = texture2D(u_blendSampler, v_texCoord); //Blend Color", "vec4 aRGBA = texture2D(u_sampler, v_texCoord); //Base Color", "", "vec3 a = aRGBA.rgb;", "vec3 b = bRGBA.rgb;", "", "float alpha = u_alpha * bRGBA.a;", "vec3 blendColor = a;", "", "if(u_blendMode == 0){", "blendColor = b;", "}else if(u_blendMode == 6){", "blendColor = 2.0*a*b + a*a - 2.0*a*a*b;", "// blendColor = ((1.0-a)*a*b + a*(1.0-(1.0-a)*(1.0-b))).rgb;", "}else if(u_blendMode == 5){", "blendColor = b*a;", "}else if(u_blendMode == 3){", "blendColor = a + b - a*b;", "// blendColor = 1.0 - (1.0-a) * (1.0-b);", "}else if(u_blendMode == 4){", "blendColor = min(a,b);", "}else if(u_blendMode == 7){", "blendColor = max(a,b);", "}else if(u_blendMode == 8){", "blendColor = abs(a-b);", "}else if(u_blendMode == 9){", "blendColor = 1.0 - abs(1.0-a-b);", "}else if(u_blendMode == 10){", "blendColor = a + b - 2.0*a*b;", "}else if(u_blendMode == 1){", "", "blendColor = (2.0*a*b)*(1.0-step(0.5,a)) + (1.0-2.0*(1.0-a)*(1.0-b))*step(0.5,a);", "// blendColor = (2.0*a*b)*(1.0-floor(1.99999*a)) + (1.0-2.0*(1.0-a)*(1.0-b))*floor(1.99999*a);", "", "// if (a.r <= 0.5) {blendColor.r = 2.0 * a.r * b.r; }else{blendColor.r = (1.0 - 2.0*(1.0 - a.r) * (1.0 - b.r)); }", "// if (a.g <= 0.5) {blendColor.g = 2.0 * a.g * b.g; }else{blendColor.g = (1.0 - 2.0*(1.0 - a.g) * (1.0 - b.g)); }", "// if (a.b <= 0.5) {blendColor.b = 2.0 * a.b * b.b; }else{blendColor.b = (1.0 - 2.0*(1.0 - a.b) * (1.0 - b.b)); }", "}else if(u_blendMode == 11){", "blendColor = (2.0*a*b)*(1.0-step(0.5,b)) + (1.0-2.0*(1.0-a)*(1.0-b))*step(0.5,b);", "}else if(u_blendMode == 12){", "blendColor.r = b.r;", "}else if(u_blendMode == 13){", "blendColor.g = b.g;", "}else if(u_blendMode == 14){", "blendColor.b = b.b;", "}else if(u_blendMode == 15){", "blendColor = 0.5 - 0.25*cos(3.141592654*a) - 0.25*cos(3.141592654*b);", "}else if(u_blendMode == 16){", "blendColor = a / (1.0001 - b);", "}else if(u_blendMode == 17){", "blendColor = b / (1.0001 - a);", "}else if(u_blendMode == 18){", "blendColor = 0.5*a/(1.00001-b) * (1.0-step(1.0,a+b)) + (1.0-0.5*(1.0-b)/(0.00001+a)) * step(1.0,a+b);", "}else if(u_blendMode == 19){", "blendColor = 1.0 - (1.0 - a) / (0.0001 + b);", "}else if(u_blendMode == 20){", "blendColor = 1.0 - (1.0 - b) / (0.0001 + a);", "}else if(u_blendMode == 21){", "// blendColor = 0.5*(b/(1.0001-a)) * (1.0-step(1.0,a+b)) + (1.0-0.5*(1.0-a)/(0.00001+b)) * step(1.0,a+b);", "blendColor = 0.5*(b/(1.0001-a)) * (1.0-step(1.0001,a+b)) + (1.0-0.5*(1.0-a)/(0.00001+b)) * step(1.0001,a+b);", "", "}else if(u_blendMode == 22){", "blendColor = a+b;", "}else if(u_blendMode == 23){", "blendColor = a+b-1.0;", "}else if(u_blendMode == 24){", "blendColor = a+2.0*b-1.0;", "}", "// else if(u_blendMode == 25){", "//     blendColor = a*a/(1.0001-b);", "// }else if(u_blendMode == 26){", "//     blendColor = b*b/(1.0001-a);", "// }else if(u_blendMode == 27){", "//     blendColor = step(0.0001,b)*(1.0 - (1.0-a)*(1.0-a) / (0.0001+b));", "// }else if(u_blendMode == 28){", "//     blendColor = step(0.0001,a)*(1.0 - (1.0-b)*(1.0-b) / (0.0001+a));", "// }", "", "blendColor = clamp(blendColor, 0.0, 1.0);", "", "gl_FragColor = vec4(mix(a, blendColor, alpha),1.0);", "", "}"].join("\n"),MoaBitmapLaplaceDiffFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_sourceSampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "vec4 dstColor = texture2D(u_sampler, v_texCoord);", "vec4 srcColor = texture2D(u_sourceSampler, v_texCoord);", "", "gl_FragColor = vec4(0.5+0.5*(dstColor.rgb-srcColor.rgb),1.0);", "}"].join("\n"),MoaBitmapLaplaceAddFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_sourceSampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "vec4 dstColor = texture2D(u_sampler, v_texCoord);", "vec4 srcColor = texture2D(u_sourceSampler, v_texCoord);", "", "gl_FragColor = vec4(dstColor.rgb-2.0*srcColor.rgb + 1.0,1.0);", "}"].join("\n"),MoaDotMatrixVertexShader: ["attribute highp vec2 a_position;", "uniform float u_pointSize;", "", "void main()", "{", "gl_Position = vec4(a_position.x, a_position.y, 0.0, 1.0);", "gl_PointSize = u_pointSize;", "}"].join("\n"),MoaDotMatrixFragmentShader: ["precision highp float;", "", "uniform sampler2D u_dotSampler;", "", "void main()", "{", "gl_FragColor = texture2D(u_dotSampler, gl_PointCoord);", "}"].join("\n"),MoaBasicDotsVertexShader: ["attribute highp vec2 a_position;", "attribute highp float a_pointSize;", "", "void main()", "{", "gl_Position = vec4(a_position.x, a_position.y, 0.0, 1.0);", "gl_PointSize = a_pointSize;", "}"].join("\n"),MoaLineVertexShader: ["attribute highp vec2 a_position;", "attribute highp vec2 a_imagePos;", "varying highp vec2 v_imagePos;", "", "void main()", "{", "gl_Position = vec4(a_position.x, a_position.y, 0.0, 1.0);", "v_imagePos = a_imagePos;", "}"].join("\n"),MoaLineFragmentShader: ["precision highp float;", "", "uniform float u_nHatx;", "uniform float u_nHaty;", "uniform float u_x1;", "uniform float u_y1;", "uniform float u_x2;", "uniform float u_y2;", "uniform float u_r;", "uniform float u_r2;", "uniform float u_dAA;", "uniform float u_bA;", "uniform float u_r2AA;", "uniform vec4 u_color;", "uniform float u_vLength2;", "", "varying highp vec2 v_imagePos;", "", "void main()", "{", "float x = v_imagePos.x;", "float y = v_imagePos.y;", "float dMax;", "float dMin;", "float factor;", "", "//vector math stuff", "float proj = abs(u_nHatx * (x - u_x1) + u_nHaty * (y - u_y1));", "float d1   = (x - u_x1) * (x - u_x1) + (y - u_y1) * (y - u_y1);", "float d2   = (x - u_x2) * (x - u_x2) + (y - u_y2) * (y - u_y2);", "if (d1 < d2) {", "dMax = d2;", "dMin = d1;", "} else {", "dMax = d1;", "dMin = d2;", "}", "", "if (proj > u_r + u_dAA) {	//Is not colinear", "factor = 1.0;", "} else if (dMin + u_vLength2 < dMax) { //is colinear but not in between points", "if (d1 < u_r2 || d2 < u_r2) { //is within circle of one point", "factor = 1.0 - u_bA;", "} else if (d1 < u_r2AA || d2 < u_r2AA) { //is within anti-aliasing", "factor = 1.0 - u_bA + u_bA * (sqrt(dMin) - u_r) / u_dAA;", "} else { //outside", "factor = 1.0;", "}", "} else { //Is colinear and in between points", "if (proj > u_r) {	//within anti-aliasing", "factor = 1.0 - u_bA + u_bA * (proj - u_r) / u_dAA;", "} else { //in line", "factor = 1.0 - u_bA;", "}", "}", "", "vec4 color = u_color;", "if (factor < 0.995) {", "color.a = (1.0 - factor);", "}else{", "color.a = 0.0;", "}", "gl_FragColor = color;", "", "}"].join("\n"),MoaBordersVignetteFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_vignetteScale;", "uniform lowp vec4 u_vignetteColor;", "uniform int u_shouldStretch;", "uniform int u_shapeMode;", "uniform float u_dx_2;", "uniform float u_dy_2;", "", "const float cutoff = 1.15;", "const float c4 = 5.0 / 3.0;", "const float c6 = 34.0 / 45.0;", "const float c8 = 13.0 / 63.0;", "const float c10 = 514.0 / 14175.0;", "", "void main(void) {", "lowp vec4 color = u_vignetteColor;", "", "float xDist = u_width * (v_texCoord.x - 0.5 - u_dx_2);", "float yDist = u_height * (v_texCoord.y - 0.5 - u_dy_2);", "", "float denomI = cutoff / (u_vignetteScale * u_vignetteScale);", "", "float theta = 0.0;", "", "if(u_shouldStretch == 0){", "theta = (xDist * xDist + yDist * yDist) * denomI;", "}else{", "theta = (xDist * xDist / u_width / u_width + yDist * yDist / u_height / u_height) * denomI;", "}", "", "if(u_shapeMode == 1){theta *= theta;}", "else if(u_shapeMode == 3){theta *= theta; theta *= theta;}", "else if(u_shapeMode == 2){theta = pow(theta,1.5);}", "", "if(theta < 0.04){", "color.a = 0.0;", "}else if(theta <= cutoff){", "float t2 = theta * theta;", "float t4 = t2 * t2;", "float t6 = t4 * t2;", "float t8 = t6 * t2;", "float factor = 1.0 - 2.0 * t2 + c4 * t4 - c6 * t6 + c8 * t8 - c10 * t8 * t2;", "", "color.a *= 1.0 - factor;", "}", "", "gl_FragColor = color;", "}"].join("\n"),MoaBordersVignetteMultiplyFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_vignetteScale;", "uniform lowp vec4 u_vignetteColor;", "uniform int u_shouldStretch;", "uniform int u_shapeMode;", "uniform float u_dx_2;", "uniform float u_dy_2;", "", "", "const float cutoff = 1.15;", "const float c4 = 5.0 / 3.0;", "const float c6 = 34.0 / 45.0;", "const float c8 = 13.0 / 63.0;", "const float c10 = 514.0 / 14175.0;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 color = vec4(0,0,0,0);", "", "float xDist = u_width * (v_texCoord.x - 0.5 - u_dx_2);", "float yDist = u_height * (v_texCoord.y - 0.5 - u_dy_2);", "", "float denomI = cutoff / (u_vignetteScale * u_vignetteScale);", "", "float theta = 0.0;", "", "if(u_shouldStretch == 0){", "theta = (xDist * xDist + yDist * yDist) * denomI;", "}else{", "theta = (xDist * xDist / u_width / u_width + yDist * yDist / u_height / u_height) * denomI;", "}", "", "if(u_shapeMode == 1){theta *= theta;}", "else if(u_shapeMode == 3){theta *= theta; theta *= theta;}", "else if(u_shapeMode == 2){theta = pow(theta,1.5);}", "", "float factor = u_vignetteColor.a;", "float factorI = 0.0;", "", "if(theta < 0.04){", "factor = 0.0;", "}else if(theta <= cutoff){", "float t2 = theta * theta;", "float t4 = t2 * t2;", "float t6 = t4 * t2;", "float t8 = t6 * t2;", "float tFactor = 1.0 - 2.0 * t2 + c4 * t4 - c6 * t6 + c8 * t8 - c10 * t8 * t2;", "", "factor = u_vignetteColor.a * (1.0 - tFactor);", "}", "", "factor = clamp(factor,0.0,1.0);", "factorI = 1.0 - factor;", "", "dst.rgb = factorI * dst.rgb + factor * (u_vignetteColor.rgb * dst.rgb);", "dst.a = 1.0;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaBordersVignetteOverlayFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_vignetteScale;", "uniform lowp vec4 u_vignetteColor;", "uniform int u_shouldStretch;", "uniform int u_shapeMode;", "uniform float u_dx_2;", "uniform float u_dy_2;", "", "const float cutoff = 1.15;", "const float c4 = 5.0 / 3.0;", "const float c6 = 34.0 / 45.0;", "const float c8 = 13.0 / 63.0;", "const float c10 = 514.0 / 14175.0;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 color = vec4(0,0,0,0);", "", "float xDist = u_width * (v_texCoord.x - 0.5 - u_dx_2);", "float yDist = u_height * (v_texCoord.y - 0.5 - u_dy_2);", "", "float denomI = cutoff / (u_vignetteScale * u_vignetteScale);", "", "float theta = 0.0;", "", "if(u_shouldStretch == 0){", "theta = (xDist * xDist + yDist * yDist) * denomI;", "}else{", "theta = (xDist * xDist / u_width / u_width + yDist * yDist / u_height / u_height) * denomI;", "}", "", "if(u_shapeMode == 1){theta *= theta;}", "else if(u_shapeMode == 3){theta *= theta; theta *= theta;}", "else if(u_shapeMode == 2){theta = pow(theta,1.5);}", "", "float factor = u_vignetteColor.a;", "float factorI = 0.0;", "", "if(theta < 0.04){", "factor = 0.0;", "}else if(theta <= cutoff){", "float t2 = theta * theta;", "float t4 = t2 * t2;", "float t6 = t4 * t2;", "float t8 = t6 * t2;", "float tFactor = 1.0 - 2.0 * t2 + c4 * t4 - c6 * t6 + c8 * t8 - c10 * t8 * t2;", "", "factor = u_vignetteColor.a * (1.0 - tFactor);", "}", "", "factor = clamp(factor,0.0,1.0);", "factorI = 1.0 - factor;", "", "vec4 mult = 2.0 * dst * u_vignetteColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - u_vignetteColor);", "color = factorI * dst + factor * mix(mult, screen, step(0.5, dst));", "", "color.a = 1.0;", "", "gl_FragColor = color;", "}", "", "", ""].join("\n"),MoaBordersThetaFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_dw;", "uniform float u_rFactor;", "uniform float u_width;", "uniform float u_height;", "uniform int u_borderStyle;", "uniform lowp vec4 u_borderColor;", "uniform float u_linesScale;", "", "uniform float u_dotScale;", "uniform float u_offsetL;", "uniform float u_offsetR;", "uniform float u_offsetT;", "uniform float u_offsetB;", "", "uniform float u_offsetX;", "uniform float u_offsetY;", "", "float rand(vec2 n)", "{", "return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);", "}", "", "void main(void) {", "lowp vec4 color = u_borderColor;", "", "float xComp = (v_texCoord.x < 0.5) ? v_texCoord.x * u_width - u_offsetL : u_width - 1.0 - v_texCoord.x * u_width - u_offsetR;", "float yComp = (v_texCoord.y < 0.5) ? v_texCoord.y * u_height - u_offsetT : u_height - 1.0 - v_texCoord.y * u_height - u_offsetB;", "", "float theta = 0.0;", "float factor = 0.0;", "float dots = 0.0;", "float xCompS = 0.0;", "float yCompS = 0.0;", "", "if (yComp < 1.414213562373 * u_dw * u_rFactor && xComp < 1.414213562373 * u_dw * u_rFactor) {", "theta = 1.414213562373*u_dw*u_rFactor - sqrt((yComp - 1.414213562373 * u_dw * u_rFactor) * (yComp - 1.414213562373 * u_dw * u_rFactor) + (xComp - 1.414213562373 * u_dw * u_rFactor) * (xComp - 1.414213562373 * u_dw * u_rFactor));", "} else {", "if (yComp < xComp) { theta = yComp; } else { theta = xComp; }", "}", "", "if (yComp < 0.0 || xComp < 0.0) {", "// In this area set to pure border color", "} else if (theta < u_dw) {", "// If within effect scale distance", "if (u_borderStyle == 5) {", "theta = theta < 0.0 ? 0.0 : theta;", "factor = pow(theta / u_dw, 2.0);", "} else if (u_borderStyle == 6) {", "factor = 1.0 - (0.4 * rand(v_texCoord) + 0.6) * 2.0 * pow((1.0 - theta / u_dw), 4.0);", "} else if (u_borderStyle == 16) {", "factor = 1.0 - (0.4 * rand(v_texCoord) + 0.6) * 2.0 * pow((1.0 - theta / u_dw), 4.0);", "} else if (u_borderStyle == 3) {", "factor = 1.0 - 2.0 * pow((1.0 - theta / u_dw), 4.0);", "}", "factor = clamp(factor, 0.0, 1.0);", "color.a = (1.0 - factor);", "}else{", "color.a = 0.0;", "}", "", "gl_FragColor = color;", "}"].join("\n"),MoaBorderSideVertexShader: ["attribute highp vec2 a_position;", "attribute float a_alpha;", "varying highp vec2 v_position;", "varying float v_alpha;", "", "void main()", "{", "v_alpha = a_alpha;", "gl_Position = vec4(a_position.x, a_position.y, 0.0, 1.0);", "}", "", ""].join("\n"),MoaBorderSideFragmentShader: ["precision highp float;", "", "uniform vec4 u_borderColor;", "", "varying float v_alpha;", "", "void main()", "{", "vec4 color = u_borderColor;", "float alpha = v_alpha;", "alpha = clamp(alpha, 0.0, 0.9999);", "color.a = color.a * alpha;", "gl_FragColor = color;", "}"].join("\n"),MoaBordersHardRandFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform sampler2D u_linesSampler;", "uniform float u_height;", "uniform float u_width;", "uniform float u_widthTexCoordMult;", "uniform float u_heightTexCoordMult;", "uniform float u_h2;", "uniform float u_w2;", "uniform float u_offset;", "uniform float u_dw;", "uniform vec4 u_color;", "uniform float u_scale;", "uniform float u_floatMult;", "uniform float u_floatTrans;", "uniform float u_randomSeed;", "", "", "float rand(in vec2 n)", "{", "//                                                   n *= u_randomSeed;", "return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);", "}", "", "highp float unpackFloatFromVec4i(const vec4 value)", "{", "const vec4 bitSh = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);", "float rawVal = dot(value, bitSh);", "return ((rawVal / u_floatMult) + u_floatTrans);", "}", "", "void main(void) {", "float x = v_texCoord.x * u_width;", "float y = v_texCoord.y * u_height;", "", "// Y tex coords for given lines", "float lineL = 0.125;", "float lineR = 0.375;", "float lineT = 0.625;", "float lineB = 0.875;", "", "float xComp;", "float yComp;", "float theta;", "float factor;", "", "if (y < u_h2) {", "vec2 samplingCoord = vec2(x * u_widthTexCoordMult, lineT);", "vec4 sampledValue = texture2D(u_linesSampler, samplingCoord);", "yComp = y - u_offset - unpackFloatFromVec4i(sampledValue);", "}", "", "else {", "vec2 samplingCoord = vec2(x * u_widthTexCoordMult, lineB);", "yComp = u_height - 1.0 - y - u_offset - unpackFloatFromVec4i(texture2D(u_linesSampler, samplingCoord));", "}", "if (x < u_w2) {", "vec2 samplingCoord = vec2(y * u_heightTexCoordMult, lineL);", "xComp = x - u_offset - unpackFloatFromVec4i(texture2D(u_linesSampler, samplingCoord));", "}else {", "vec2 samplingCoord = vec2(y * u_heightTexCoordMult, lineR);", "xComp = u_width - 1.0 - x - u_offset - unpackFloatFromVec4i(texture2D(u_linesSampler, samplingCoord));", "}", "", "// Set theta to distance to edge with case for rounded edges", "if (yComp < 1.414213562373 * u_dw && xComp < 1.414213562373 * u_dw) {", "theta = 1.414213562373*u_dw - sqrt((yComp - 1.414213562373 * u_dw) * (yComp - 1.414213562373 * u_dw) + (xComp - 1.414213562373 * u_dw) * (xComp - 1.414213562373 * u_dw));", "} else {", "if (yComp < xComp) { theta = yComp; } else { theta = xComp; }", "}", "", "vec4 finalColor = u_color;", "if (yComp < 0.0 || xComp < 0.0) {", "", "}", "else if (theta < u_dw) {", "// If within effect scale distance", "factor = 1.0-(0.4*rand(vec2(x,y))+0.6) * 2.0 * pow(1.0 - theta / u_dw, 4.0*u_scale);", "factor = clamp(factor, 0.0, 1.0);", "finalColor.a *= 1.0 - factor;", "}else{", "finalColor.a = 0.0;", "}", "gl_FragColor = finalColor;", "}"].join("\n"),MoaAutoEnhanceFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform lowp sampler2D u_mapFactorSampler;", "uniform float u_gain;", "uniform float u_rScale;", "uniform float u_gScale;", "uniform float u_bScale;", "uniform float u_rMin;", "uniform float u_gMin;", "uniform float u_bMin;", "uniform float u_floatMult;", "uniform float u_floatTrans;", "", "highp float unpackFloatFromVec4i(const vec4 value)", "{", "const vec4 bitSh = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);", "float rawVal = dot(value, bitSh);", "return ((rawVal / u_floatMult) + u_floatTrans);", "}", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "", "float r = color.r;", "float g = color.g;", "float b = color.b;", "", "float lum = 0.213*r+0.715*g+0.072*b;", "", "float factor = unpackFloatFromVec4i(texture2D(u_mapFactorSampler, vec2(lum, 0)));", "", "float gNew = factor*g;", "", "r = (r+(r*factor-r)*u_gain + (gNew - g)*(1.0-u_gain)-u_rMin)*u_rScale;", "b = (b+(b*factor-b)*u_gain + (gNew - g)*(1.0-u_gain)-u_bMin)*u_bScale;", "g = (gNew-u_gMin)*u_gScale;", "", "color.r = r;", "color.g = g;", "color.b = b;", "", "gl_FragColor = color;", "}"].join("\n"),MoaVibranceFragmentShader: ["precision highp float;", "", "uniform highp sampler2D u_sampler;", "uniform highp float u_vFactor;", "uniform highp float u_rSuppressFactor;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "highp vec4 color = texture2D(u_sampler, v_texCoord);", "", "// RGB to LAB", "float R = color.r * 255.0;", "float G = color.g * 255.0;", "float B = color.b * 255.0;", "", "float l1;", "float a1;", "float b1;", "float r;", "float g;", "float b;", "float x;", "float y;", "float z;", "", "if(R/255.0 <= 0.04045){r = 100.0 *R/255.0/12.92;} else{ r = 100.0*pow((R/255.0+0.055)/1.055,2.40);}", "if(G/255.0 <= 0.04045){g = 100.0 *G/255.0/12.92;} else{ g = 100.0*pow((G/255.0+0.055)/1.055,2.40);}", "if(B/255.0 <= 0.04045){b = 100.0 *B/255.0/12.92;} else{ b = 100.0*pow((B/255.0+0.055)/1.055,2.40);}", "", "x = 0.00433891*r  + 0.00376234915*g + 0.0018990604648*b;", "y = 0.002126*r    + 0.007152*g      + 0.000722*b;", "z = 0.000177255*r + 0.00109475308*g + 0.0087295537*b;", "", "if(x > 0.008856){x = pow(x,1.0/3.0);}else{x = 7.787*x+16.0/116.0;}", "if(y > 0.008856){y = pow(y,1.0/3.0);}else{y = 7.787*y+16.0/116.0;}", "if(z > 0.008856){z = pow(z,1.0/3.0);}else{z = 7.787*z+16.0/116.0;}", "", "l1 = 116.0*y-16.0;", "a1 = 500.0*(x-y);", "b1 = 200.0*(y-z);", "", "color.r = l1 * 2.55; color.g = (a1+127.0); color.b = (b1+127.0);", "", "// Adjust LAB", "color.rgb = (color.rgb - 127.0) / 128.0;", "", "float mag = sqrt(color.g * color.g + color.b * color.b);", "", "// Don't divide by zero!", "if(mag == 0.0){", "mag = 1.0;", "}", "", "// Plot the current Lab vector's magnitude to a new magnitude.", "float magPrime = sqrt(u_vFactor * u_vFactor + (u_vFactor + 1.0) * (u_vFactor + 1.0) - (mag - u_vFactor - 1.0) * (mag - u_vFactor - 1.0)) - u_vFactor;", "", "float hue = atan(color.b, color.g);", "", "float hueCenter = 0.39269908169;//22.5 degrees in rad", "", "float redFactor = 0.25 * u_rSuppressFactor * exp(-(hue - hueCenter) * (hue - hueCenter) / 1.35 / 1.35);", "", "redFactor = redFactor < 0.0 ? 0.0 : (redFactor > 0.75 ? 0.75 : redFactor);", "", "", "float aPrime = color.g * magPrime / mag;", "float bPrime = color.b * magPrime / mag;", "", "", "// Change the a and b factors, but we don't want to change L", "color.g = aPrime * (1.0 - redFactor) + color.g * redFactor;", "color.b = bPrime * (1.0 - redFactor) + color.b * redFactor;", "", "color.rgb = color.rgb * 128.0 + 127.0;", "", "// LAB to RGB", "float lab0 = color.r;", "float lab1 = color.g;", "float lab2 = color.b;", "", "float Y = ( lab0/2.55 + 16.0) / 116.0;", "float X = (lab1-127.0) / 500.0 + Y;", "float Z = Y - (lab2-127.0) / 200.0;", "", "float Y3 = Y*Y*Y;", "float X3 = X*X*X;", "float Z3 = Z*Z*Z;", "", "if ( Y3 > 0.008856 ){ Y = Y3;}else{Y = ( Y - 16.0 / 116.0 ) / 7.787;}", "", "if ( X3 > 0.008856 ){ X = X3;}else{X = ( X - 16.0 / 116.0 ) / 7.787;}", "", "if ( Z3 > 0.008856 ){ Z = Z3;}else{Z = ( Z - 16.0 / 116.0 ) / 7.787;}", "", "X = .95047  * X;", "Y = 1.00000 * Y;", "Z = 1.08883 * Z;", "", "R = X *  3.2406 + Y * -1.5372 + Z * -0.4986;", "G = X * -0.9689 + Y *  1.8758 + Z *  0.0415;", "B = X *  0.0557 + Y * -0.2040 + Z *  1.0570;", "", "if ( R > 0.0031308 ) {R = 1.055 * ( pow(R , ( 0.41666666666667 )) ) - 0.055;}else{ R = 12.92 * R;}", "if ( G > 0.0031308 ) {G = 1.055 * ( pow(G , ( 0.41666666666667 )) ) - 0.055;}else{ G = 12.92 * G;}", "if ( B > 0.0031308 ) {B = 1.055 * ( pow(B , ( 0.41666666666667 )) ) - 0.055;}else{ B = 12.92 * B;}", "", "color.r = R; color.g = G; color.b = B;", "", "color.a = 1.0;", "", "gl_FragColor = color;", "}"].join("\n"),MoaVaryingContrastFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_contrastMap1Sampler;", "uniform lowp sampler2D u_contrastMap2Sampler;", "varying highp vec2 v_texCoord;", "", "", "uniform vec2 u_centerPoint;", "uniform float u_sigmaX;", "uniform float u_sigmaY;", "uniform float u_width;", "uniform float u_height;", "uniform mat3 u_contrastSatAdjustMat1;", "uniform mat3 u_contrastSatAdjustMat2;", "", "", "void main(void) {", "", "highp vec4 color = texture2D(u_sampler, v_texCoord);", "highp vec4 color1;", "highp vec4 color2;", "", "vec3 map;", "vec3 result;", "", "// Calculate the color for the first contrast", "map.r = texture2D(u_contrastMap1Sampler, vec2(0, color.r)).r;", "map.g = texture2D(u_contrastMap1Sampler, vec2(0, color.g)).g;", "map.b = texture2D(u_contrastMap1Sampler, vec2(0, color.b)).b;", "", "// Saturation Adjustment", "result = dot(vec3(0.4),map) + 0.2 * map - dot(vec3(0.4),vec3(color)) + 0.8 * vec3(color);", "", "color1 = vec4(u_contrastSatAdjustMat1 * result, color.a);", "", "//Calculate the color for the second contrast", "map.r = texture2D(u_contrastMap2Sampler, vec2(0, color.r)).r;", "map.g = texture2D(u_contrastMap2Sampler, vec2(0, color.g)).g;", "map.b = texture2D(u_contrastMap2Sampler, vec2(0, color.b)).b;", "", "// Saturation Adjustment", "result = dot(vec3(0.4),map) + 0.2 * map - dot(vec3(0.4),vec3(color)) + 0.8 * vec3(color);", "", "color2 = vec4(u_contrastSatAdjustMat2 * result, color.a);", "", "// Blend the two images together, with the first contrast being inside the circle", "float xComp = u_width * v_texCoord.x - u_centerPoint.x;", "float yComp = u_height * v_texCoord.y - u_centerPoint.y;", "", "float dr2 = xComp * xComp / u_sigmaX / u_sigmaX + yComp * yComp / u_sigmaY / u_sigmaY;", "", "float alpha = 1.0 - 1.5 * exp(-0.75 * dr2);", "", "alpha = alpha < 0.0 ? 0.0 : alpha;", "", "gl_FragColor = (1.0 - alpha) * color1 + alpha * color2;", "}"].join("\n"),MoaLABToRGBFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleA;", "uniform float u_scaleB;", "", "void main(void) {", "highp vec4 color = texture2D(u_sampler, v_texCoord);", "", "float lab0 = color.r * 255.0;", "float lab1 = color.g * u_scaleA * 255.0;", "float lab2 = color.b * u_scaleB * 255.0;", "", "float Y = ( lab0/2.55 + 16.0) / 116.0;", "float X = (lab1-127.0) / 500.0 + Y;", "float Z = Y - (lab2-127.0) / 200.0;", "", "float Y3 = Y*Y*Y;", "float X3 = X*X*X;", "float Z3 = Z*Z*Z;", "", "if ( Y3 > 0.008856 ){ Y = Y3;}else{Y = ( Y - 16.0 / 116.0 ) / 7.787;}", "", "if ( X3 > 0.008856 ){ X = X3;}else{X = ( X - 16.0 / 116.0 ) / 7.787;}", "", "if ( Z3 > 0.008856 ){ Z = Z3;}else{Z = ( Z - 16.0 / 116.0 ) / 7.787;}", "", "X = .95047  * X;", "Y = 1.00000 * Y;", "Z = 1.08883 * Z;", "", "float R = X *  3.2406 + Y * -1.5372 + Z * -0.4986;", "float G = X * -0.9689 + Y *  1.8758 + Z *  0.0415;", "float B = X *  0.0557 + Y * -0.2040 + Z *  1.0570;", "", "if ( R > 0.0031308 ) {R = 1.055 * ( pow(R , ( 0.41666666666667 )) ) - 0.055;}else{ R = 12.92 * R;}", "if ( G > 0.0031308 ) {G = 1.055 * ( pow(G , ( 0.41666666666667 )) ) - 0.055;}else{ G = 12.92 * G;}", "if ( B > 0.0031308 ) {B = 1.055 * ( pow(B , ( 0.41666666666667 )) ) - 0.055;}else{ B = 12.92 * B;}", "", "", "color.r = R; color.g = G; color.b = B;", "gl_FragColor = color;", "}"].join("\n"),MoaRGBToLABFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "", "void main(void) {", "highp vec4 color = texture2D(u_sampler, v_texCoord);", "", "float R = color.r * 255.0;", "float G = color.g * 255.0;", "float B = color.b * 255.0;", "", "float l1;", "float a1;", "float b1;", "float r;", "float g;", "float b;", "float x;", "float y;", "float z;", "", "if(R/255.0 <= 0.04045){r = 100.0 *R/255.0/12.92;} else{ r = 100.0*pow((R/255.0+0.055)/1.055,2.40);}", "if(G/255.0 <= 0.04045){g = 100.0 *G/255.0/12.92;} else{ g = 100.0*pow((G/255.0+0.055)/1.055,2.40);}", "if(B/255.0 <= 0.04045){b = 100.0 *B/255.0/12.92;} else{ b = 100.0*pow((B/255.0+0.055)/1.055,2.40);}", "", "x = 0.00433891*r  + 0.00376234915*g + 0.0018990604648*b;", "y = 0.002126*r    + 0.007152*g      + 0.000722*b;", "z = 0.000177255*r + 0.00109475308*g + 0.0087295537*b;", "", "if(x > 0.008856){x = pow(x,1.0/3.0);}else{x = 7.787*x+16.0/116.0;}", "if(y > 0.008856){y = pow(y,1.0/3.0);}else{y = 7.787*y+16.0/116.0;}", "if(z > 0.008856){z = pow(z,1.0/3.0);}else{z = 7.787*z+16.0/116.0;}", "", "l1 = 116.0*y-16.0;", "a1 = 500.0*(x-y);", "b1 = 200.0*(y-z);", "", "color.r = l1 * 2.55 / 255.0; color.g = (a1+127.0) / 255.0; color.b = (b1+127.0) / 255.0;", "gl_FragColor = color;", "}"].join("\n"),MoaVertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "", "varying highp vec2 v_texCoord;", "", "void main(void) {", "v_texCoord = a_texCoord;", "gl_Position = a_position;", "}"].join("\n"),MoaGradientFlareFragmentShader: ["", "precision highp float;", "", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_aspectMode;", "", "uniform int u_invert;", "uniform int u_wrapMode;", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "uniform float u_alphaBlend;", "", "uniform int u_shape;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main(){", "", "vec2 texCoordsTmp = v_texCoord;", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "vec2 coords = (transformed.xy);", "", "float noise = 0.0;", "", "if(u_shape == MOA_SHAPE_MODE_LINE){", "noise = 0.5 + 0.5*coords.x;", "}else if(u_shape == MOA_SHAPE_MODE_CIRCLE){", "noise = length(coords);", "}else if(u_shape == MOA_SHAPE_MODE_GAUSSIAN){", "noise = exp(u_params[0][0] * ((coords.y - u_params[0][2])*(coords.y - u_params[0][2]) + (coords.x - u_params[0][3])*(coords.x - u_params[0][3])) + u_params[0][1] * (coords.y - u_params[1][0])*(coords.y - u_params[1][0]) * (coords.x - u_params[1][1])*(coords.x - u_params[1][1]));", "}else if(u_shape == MOA_SHAPE_MODE_SQUARE){", "noise = max(abs(coords.x), abs(coords.y));", "}else if(u_shape == MOA_SHAPE_MODE_SQUARE_ROUND){", "if(u_params[0][0] == 0.0){", "noise = max(abs(coords.x), abs(coords.y));", "}else{", "noise = pow(pow(abs(coords.x), u_params[0][0]) + pow(abs(coords.y),u_params[0][0]), 1.0 / u_params[0][0]);", "}", "}else if(u_shape == MOA_SHAPE_MODE_STARDOM){", "float numLobes = floor(u_params[0][0]);", "float theta = coords.x * coords.x + coords.y * coords.y;", "float a = atan(coords.y, coords.x);", "noise = theta * theta * (sin(numLobes * a / 2.0));", "}else if(u_shape == MOA_SHAPE_MODE_LOBES){", "float numLobes = floor(u_params[0][0]);", "float theta = coords.x * coords.x + coords.y * coords.y;", "float a = atan(coords.y, coords.x);", "noise = 1.0 - exp(-theta) * 0.5 * (1.0 + sin(a * numLobes));", "}else if(u_shape == MOA_SHAPE_MODE_RING_LOBES){", "float numLobes = floor(u_params[0][0]);", "float numLobes2 = u_params[0][1];", "float numLobes3 = u_params[0][2];", "float theta = coords.x * coords.x + coords.y * coords.y;", "float a = atan(coords.y, coords.x);", "noise = 1.0 - (1.0 - sin(numLobes2 * theta + M_PI_2) * sin(numLobes3 * theta + M_PI_2) * sin(numLobes * a / 2.0 + M_PI_2));", "}else if(u_shape == MOA_SHAPE_MODE_HEART){", "//                                                            float theta = coords.x * coords.x + coords.y * coords.y;", "float r = length(coords);//sqrt(theta);", "float sa = -coords.y / r;//Math.sin(a);", "float ca = coords.x / r;//Math.cos(a);", "//                                                            float caAbs = abs(ca);", "float rH = (2.0 - 2.0 * sa + u_params[0][0] * sa * sqrt(abs(ca)) / (sa + u_params[0][1]));", "noise = r - rH;", "}else if(u_shape == MOA_SHAPE_MODE_STAR){", "float b = 0.0;", "float numLobes = max(1.0, floor(u_params[0][0]));", "float r = length(coords);", "float aInterval = M_PI / numLobes;", "float a = 1.5 * M_PI - atan(coords.y, coords.x);", "float maxVal = 1.0;", "float minVal = u_params[0][2];", "float fractVal = fract(a / aInterval);", "fractVal = mod(floor(a / aInterval), 2.0) == 0.0 ? fractVal : 1.0 - fractVal;", "float beta = aInterval / 2.0;", "float gamma = M_PI - fractVal - beta;", "b =  maxVal * sin(beta) / sin(gamma);", "", "float rS = minVal + (maxVal - minVal) * ((1.0 - u_params[0][1]) * b + u_params[0][1] * (1.0 - fractVal));", "noise = r - rS;", "}else if(u_shape == MOA_SHAPE_MODE_CRESCENT){", "float r0 = 1.0;", "float r1 = u_params[0][1];", "float dx = u_params[0][0] * (r0 + r1);", "float r = length(coords);", "float rdx = distance(coords, vec2(dx, 0.0));", "float fA = 1.0 - r / r0;", "float fB = rdx / r1 - 1.0;", "float branch = step(r1, rdx) * step(r, r0);", "noise = branch * (1.0 - min(fA, fB)) + (1.0 - branch);", "}else if(u_shape == MOA_SHAPE_MODE_SQUIGGLY){", "noise = 0.5 + 0.5 * sin(coords.x + 2.0 * u_params[0][0] * sin(coords.y));", "}else if(u_shape == MOA_SHAPE_MODE_ZIGZAG){", "float a = 2.0 * (coords.x - floor(u_params[0][0] + coords.x));", "a = a < 0.0 ? (-a / u_params[0][0]): a / (1.0 - u_params[0][0]);", "noise = coords.y - a;", "}else if(u_shape == MOA_SHAPE_MODE_SPIRAL){", "float period = floor(u_params[0][1] + 0.5);", "float rad = coords.x * coords.x + coords.y * coords.y;", "float angle = atan(coords.y,coords.x);", "noise = pow(rad, u_params[0][0]) + angle * period / 2.0 / M_PI;", "}else{", "noise = 0.0;", "}", "", "", "", "if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_REPEAT) {", "noise = fract(noise);", "} else if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_MIRRORED_REPEAT) {", "", "if(mod(floor(noise), 2.0) != 0.0) {", "noise = fract(noise);", "noise = 1.0 - noise;", "} else {", "noise = fract(noise);", "}", "", "}", "", "noise = clamp(noise,0.0,1.0);", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "vec4 dst = texture2D(u_gradientMap, vec2(0,noise));", "", "dst.a *= u_alphaBlend;", "", "gl_FragColor = dst;", "", "}"].join("\n"),MoaGradientFlareStardomFragmentShader: ["", "precision highp float;", "", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_aspectMode;", "", "uniform int u_invert;", "uniform int u_wrapMode;", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "uniform float u_alphaBlend;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main(){", "", "vec2 texCoordsTmp = v_texCoord;", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "vec2 coords = (transformed.xy);", "", "float numLobes = floor(u_params[0][0]);", "", "float theta = coords.x * coords.x + coords.y * coords.y;", "", "float a = atan(coords.y, coords.x);", "", "float noise = theta * theta * (sin(numLobes * a / 2.0));", "", "if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_REPEAT) {", "noise = fract(noise);", "} else if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_MIRRORED_REPEAT) {", "", "if(mod(floor(noise), 2.0) != 0.0) {", "noise = fract(noise);", "noise = 1.0 - noise;", "} else {", "noise = fract(noise);", "}", "", "}", "", "noise = clamp(noise,0.0,1.0);", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "vec4 dst = texture2D(u_gradientMap, vec2(0,noise));", "", "dst.a *= u_alphaBlend;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaGradientFlareLobesFragmentShader: ["", "precision highp float;", "", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_aspectMode;", "", "uniform int u_invert;", "uniform int u_wrapMode;", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "uniform float u_alphaBlend;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main(){", "", "vec2 texCoordsTmp = v_texCoord;", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "vec2 coords = (transformed.xy);", "", "float numLobes = floor(u_params[0][0]);", "", "float theta = coords.x * coords.x + coords.y * coords.y;", "", "float a = atan(coords.y, coords.x);", "", "float noise = 1.0 - exp(-theta) * 0.5 * (1.0 + sin(a * numLobes));", "", "noise = clamp(noise,0.0,1.0);", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "vec4 dst = texture2D(u_gradientMap, vec2(0,noise));", "", "dst.a *= u_alphaBlend;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaGradientFlareRingLobesFragmentShader: ["", "precision highp float;", "", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_aspectMode;", "", "uniform int u_invert;", "uniform int u_wrapMode;", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "uniform float u_alphaBlend;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main(){", "", "vec2 texCoordsTmp = v_texCoord;", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "vec2 coords = (transformed.xy);", "", "float numLobes = floor(u_params[0][0]);", "float numLobes2 = u_params[0][1];", "float numLobes3 = u_params[0][2];", "", "float theta = coords.x * coords.x + coords.y * coords.y;", "", "float a = atan(coords.y, coords.x);", "", "float noise = 1.0 - (1.0 - sin(numLobes2 * theta + M_PI / 2.0) * sin(numLobes3 * theta + M_PI / 2.0) * sin(numLobes * a / 2.0 + M_PI / 2.0));", "", "", "if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_REPEAT) {", "noise = fract(noise);", "} else if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_MIRRORED_REPEAT) {", "", "if(mod(floor(noise), 2.0) != 0.0) {", "noise = fract(noise);", "noise = 1.0 - noise;", "} else {", "noise = fract(noise);", "}", "", "}", "", "noise = clamp(noise,0.0,1.0);", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "vec4 dst = texture2D(u_gradientMap, vec2(0,noise));", "", "dst.a *= u_alphaBlend;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaGradientFlareStarFragmentShader: ["", "precision highp float;", "", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_aspectMode;", "", "uniform int u_invert;", "uniform int u_wrapMode;", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "uniform float u_alphaBlend;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main(){", "", "vec2 texCoordsTmp = v_texCoord;", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "vec2 coords = (transformed.xy);", "", "float b = 0.0;", "float numLobes = max(1.0, floor(u_params[0][0]));", "float r = length(coords);", "float aInterval = M_PI / numLobes;", "float a = 1.5 * M_PI - atan(coords.y, coords.x);", "float maxVal = 1.0;", "float minVal = u_params[0][2];", "float fractVal = fract(a / aInterval);", "fractVal = mod(floor(a / aInterval), 2.0) == 0.0 ? fractVal : 1.0 - fractVal;", "float beta = aInterval / 2.0;", "float gamma = M_PI - fractVal - beta;", "b =  maxVal * sin(beta) / sin(gamma);", "", "float rS = minVal + (maxVal - minVal) * ((1.0 - u_params[0][1]) * b + u_params[0][1] * (1.0 - fractVal));", "", "float noise = r - rS;", "", "if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_REPEAT) {", "noise = fract(noise);", "} else if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_MIRRORED_REPEAT) {", "", "if(mod(floor(noise), 2.0) != 0.0) {", "noise = fract(noise);", "noise = 1.0 - noise;", "} else {", "noise = fract(noise);", "}", "", "}", "", "noise = clamp(noise,0.0,1.0);", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "vec4 dst = texture2D(u_gradientMap, vec2(0,noise));", "", "dst.a *= u_alphaBlend;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaGradientFlareSquigglyFragmentShader: ["", "precision highp float;", "", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_aspectMode;", "", "uniform int u_invert;", "uniform int u_wrapMode;", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "uniform float u_alphaBlend;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main(){", "", "vec2 texCoordsTmp = v_texCoord;", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "vec2 coords = (transformed.xy);", "", "float noise = 0.5 + 0.5 * sin(coords.x + 2.0 * u_params[0][0] * sin(coords.y));", "", "noise = clamp(noise,0.0,1.0);", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "vec4 dst = texture2D(u_gradientMap, vec2(0,noise));", "", "dst.a *= u_alphaBlend;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaGradientFlareZigZagFragmentShader: ["", "precision highp float;", "", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_aspectMode;", "", "uniform int u_invert;", "uniform int u_wrapMode;", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "uniform float u_alphaBlend;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main(){", "", "vec2 texCoordsTmp = v_texCoord;", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "vec2 coords = (transformed.xy);", "", "float a = 2.0 * (coords.x - floor(u_params[0][0] + coords.x));", "", "a = a < 0.0 ? (-a / u_params[0][0]): (a) / (1.0 - u_params[0][0]);", "", "float noise = coords.y - a;", "", "if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_REPEAT) {", "noise = fract(noise);", "} else if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_MIRRORED_REPEAT) {", "", "if(mod(floor(noise), 2.0) != 0.0) {", "noise = fract(noise);", "noise = 1.0 - noise;", "} else {", "noise = fract(noise);", "}", "", "}", "", "noise = clamp(noise,0.0,1.0);", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "vec4 dst = texture2D(u_gradientMap, vec2(0,noise));", "", "dst.a *= u_alphaBlend;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaGradientFlareSpiralFragmentShader: ["", "precision highp float;", "", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_aspectMode;", "", "uniform int u_invert;", "uniform int u_wrapMode;", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "uniform float u_alphaBlend;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main(){", "", "vec2 texCoordsTmp = v_texCoord;", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "vec2 coords = (transformed.xy);", "", "float period = floor(u_params[0][1] + 0.5);", "float rad = coords.x * coords.x + coords.y * coords.y;", "float angle = atan(coords.y,coords.x);", "float noise = pow(rad, u_params[0][0]) + angle * period / 2.0 / M_PI;", "", "if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_REPEAT) {", "noise = fract(noise);", "} else if(u_wrapMode == MOA_GRADIENT_WRAP_MODE_MIRRORED_REPEAT) {", "", "if(mod(floor(noise), 2.0) != 0.0) {", "noise = fract(noise);", "noise = 1.0 - noise;", "} else {", "noise = fract(noise);", "}", "", "}", "", "noise = clamp(noise,0.0,1.0);", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "vec4 dst = texture2D(u_gradientMap, vec2(0,noise));", "", "dst.a *= u_alphaBlend;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaBlurModesPixelateFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "numPixels = floor(numPixels);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 newCoords = (floor(v_texCoord / pixelDims) + 0.5) * pixelDims;", "", "newCoords = (floor(newCoords * dims) / dims);", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "", "}"].join("\n"),MoaBlurModesTrianglesFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "numPixels = floor(numPixels);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "numPixels.x = 2.0 * numPixels.x;", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "if(mod(pixelNum.x, 2.0) == mod(pixelNum.y, 2.0)){", "if(coordsDiff.y <= coordsDiff.x){", "newCoords.x = pixelNum.x * pixelDims.x;", "}else{", "newCoords.x = (pixelNum.x + 1.0) * pixelDims.x;", "}", "}else{", "if(coordsDiff.y <= -coordsDiff.x){", "newCoords.x = (pixelNum.x + 1.0) * pixelDims.x;", "}else{", "newCoords.x = pixelNum.x * pixelDims.x;", "}", "", "}", "", "newCoords = (floor(newCoords * dims) / dims);", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "", "}"].join("\n"),MoaBlurModesCirclesFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = u_minDimPixels * vec2(u_width, u_height) / u_minDim;", "", "numPixels = floor(numPixels);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "", "vec2 newCoords2 = newCoords;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "newCoords2.x = coordsDiff.x > 0.0 ? pixelNum.x * pixelDims.x : (pixelNum.x + 1.0) * pixelDims.x;", "newCoords2.y = coordsDiff.y > 0.0 ? pixelNum.y * pixelDims.y : (pixelNum.y + 1.0) * pixelDims.y;", "", "float radius = length(coordsDiff);", "", "float alpha = clamp(10.0 * radius - 4.75, 0.0, 1.0);", "", "gl_FragColor = mix(texture2D(u_sampler, newCoords), texture2D(u_sampler, newCoords2), alpha);", "", "}"].join("\n"),MoaBlurModesDiamondsFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "numPixels = floor(numPixels);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "numPixels.x = 1.5 * numPixels.x;", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "if(mod(pixelNum.x, 2.0) == mod(pixelNum.y, 2.0)){", "if(coordsDiff.y <= coordsDiff.x){", "newCoords.x = pixelNum.x * pixelDims.x;", "newCoords.y = (pixelNum.y + 1.0) * pixelDims.y;", "}else{", "newCoords.x = (pixelNum.x + 1.0) * pixelDims.x;", "newCoords.y = pixelNum.y * pixelDims.y;", "}", "}else{", "if(coordsDiff.y <= -coordsDiff.x){", "newCoords = (pixelNum + 1.0) * pixelDims;", "}else{", "newCoords = pixelNum * pixelDims;", "}", "}", "", "", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "}"].join("\n"),MoaBlurModesHoundstoothFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "numPixels = floor(numPixels);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "float diagDist = abs(coordsDiff.y - coordsDiff.x);", "", "if(coordsDiff.x < 0.0 && coordsDiff.y < 0.0){", "newCoords = (pixelNum + 0.75) * pixelDims;", "}else if(coordsDiff.x >= 0.0 && coordsDiff.y >= 0.0){", "newCoords = (pixelNum + 0.25) * pixelDims;", "}else if(coordsDiff.x < 0.0 && coordsDiff.y >= 0.0){", "if(diagDist < 0.25){", "newCoords = (pixelNum + 0.75) * pixelDims;", "}else if(diagDist < 0.5){", "newCoords = (pixelNum + 0.25) * pixelDims;", "}else if(diagDist < 0.75){", "newCoords.y = (pixelNum.y - 0.25) * pixelDims.y;", "newCoords.x = (pixelNum.x + 0.75) * pixelDims.x;", "}else{", "newCoords.y = (pixelNum.y + 0.25) * pixelDims.y;", "newCoords.x = (pixelNum.x + 1.25) * pixelDims.x;", "}", "}else{", "if(diagDist < 0.25){", "newCoords = (pixelNum + 0.75) * pixelDims;", "}else if(diagDist < 0.5){", "newCoords = (pixelNum + 0.25) * pixelDims;", "}else if(diagDist < 0.75){", "newCoords.y = (pixelNum.y + 0.75) * pixelDims.y;", "newCoords.x = (pixelNum.x - 0.25) * pixelDims.x;", "}else{", "newCoords.y = (pixelNum.y + 1.25) * pixelDims.y;", "newCoords.x = (pixelNum.x + 0.25) * pixelDims.x;", "}", "}", "", "", "", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "}"].join("\n"),MoaBlurModesChevronsFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "numPixels = floor(numPixels);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "if(coordsDiff.x + coordsDiff.y < -0.5 || coordsDiff.x - coordsDiff.y > 0.5){", "newCoords.y = (pixelNum.y + 1.25) * pixelDims.y;", "}else if(coordsDiff.y < coordsDiff.x || coordsDiff.y < -coordsDiff.x){", "newCoords.y = (pixelNum.y + 0.75) * pixelDims.y;", "}else{", "newCoords.y = (pixelNum.y + 0.25) * pixelDims.y;", "}", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "}"].join("\n"),MoaBlurModesSinesFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims)", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "if(coordsDiff.y >= 0.25 * cos(2.0 * M_PI * coordsDiff.x) + 0.25){", "newCoords.x = newCoords.x - 0.5 * step(0.0, coordsDiff.x) * pixelDims.x + 0.5 * step(coordsDiff.x,0.0) * pixelDims.x;", "newCoords.y = newCoords.y - 0.5 * pixelDims.y;", "}else if(coordsDiff.y <= -0.25 * cos(2.0 * M_PI * coordsDiff.x) - 0.25){", "newCoords.x = newCoords.x - 0.5 * step(0.0, coordsDiff.x) * pixelDims.x + 0.5 * step(coordsDiff.x,0.0) * pixelDims.x;", "newCoords.y = newCoords.y + 0.5 * pixelDims.y;", "}", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "}"].join("\n"),MoaBlurModesScalesFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "numPixels = floor(numPixels);", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (floor(v_texCoord / pixelDims) + 0.5) * pixelDims;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "vec2 tempDiff1 = coordsDiff + 0.5;", "vec2 tempDiff2 = vec2(coordsDiff.x - 0.5, coordsDiff.y + 0.5);", "", "if(length(coordsDiff) >= 0.5 && coordsDiff.y > 0.0){", "newCoords.x = (step(0.0, coordsDiff.x) * pixelNum.x + step(coordsDiff.x, 0.0) * (pixelNum.x + 1.0)) * pixelDims.x;", "newCoords.y = pixelNum.y * pixelDims.y;", "}else if(length(tempDiff1) <= 0.5 || length(tempDiff2) <= 0.5){", "newCoords.x = (step(0.0, coordsDiff.x) * pixelNum.x + step(coordsDiff.x, 0.0) * (pixelNum.x + 1.0)) * pixelDims.x;", "newCoords.y = (pixelNum.y + 1.0) * pixelDims.y;", "}", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "}"].join("\n"),MoaBlurModesBricksFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "numPixels = floor(numPixels);", "", "numPixels.y = 1.25 * numPixels.y;", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "newCoords.y = newCoords.y + 0.25 * pixelDims.y;", "", "if(coordsDiff.y > 0.0){", "if(coordsDiff.x > 0.0){", "newCoords.x = pixelNum.x * pixelDims.x;", "}else{", "newCoords.x = (pixelNum.x + 1.0) * pixelDims.x;", "}", "newCoords.y = (pixelNum.y + 0.25) * pixelDims.y;", "}", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "}"].join("\n"),MoaBlurModesHeartsFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = u_minDimPixels * vec2(u_width, u_height) / u_minDim;", "", "numPixels = floor(numPixels);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "vec2 newCoords2 = newCoords;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "if(coordsDiff.x > 0.0){", "newCoords2.x = pixelNum.x * pixelDims.x;", "}else{", "newCoords2.x = (pixelNum.x + 1.0) * pixelDims.x;", "}", "", "if(coordsDiff.y > 0.2){", "newCoords2.y = pixelNum.y * pixelDims.y;", "}else{", "newCoords2.y = (pixelNum.y + 1.0) * pixelDims.y;", "}", "", "float metric = step(coordsDiff.y, 0.2) * (0.29 * sin(1.25 * M_PI * (coordsDiff.y + 0.2)) + 0.29 - abs(coordsDiff.x)) + step(0.2, coordsDiff.y) * ((0.33 - length(vec2(abs(coordsDiff.x) - 0.23, coordsDiff.y - 0.18))));", "", "float alpha = clamp(12.5 * metric, 0.0, 1.0);", "", "gl_FragColor = mix(texture2D(u_sampler, newCoords2), texture2D(u_sampler, newCoords), alpha);", "", "}"].join("\n"),MoaBlurModesHexagonsFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_minDim;", "uniform float u_minDimPixels;", "", "void main(){", "vec2 dims = vec2(u_width, u_height);", "", "float pixelSize = u_minDim / u_minDimPixels;", "", "vec2 numPixels = vec2(u_width / pixelSize, u_height / pixelSize);", "", "numPixels = floor(numPixels);", "", "//There seems to be a rounding error causing the above to give the wrong number of pixels on low res images.", "if(u_width < u_height){", "numPixels.x = u_minDimPixels;", "}else{", "numPixels.y = u_minDimPixels;", "}", "", "numPixels.x = 0.5 * numPixels.x;", "", "vec2 pixelDims = 1.0 / numPixels;", "", "vec2 pixelNum = floor(v_texCoord / pixelDims);", "", "vec2 newCoords = (pixelNum + 0.5) * pixelDims;", "", "vec2 coordsDiff = (newCoords - v_texCoord) / pixelDims;", "", "if(coordsDiff.y > 0.0){", "if(coordsDiff.y > -3.0 * coordsDiff.x + 1.0){", "newCoords = pixelNum * pixelDims;", "}else if(coordsDiff.y > 3.0 * coordsDiff.x + 1.0){", "newCoords.x = (pixelNum.x + 1.0) * pixelDims.x;", "newCoords.y = pixelNum.y * pixelDims.y;", "}", "}else{", "if(coordsDiff.y < 3.0 * coordsDiff.x - 1.0){", "newCoords.x = pixelNum.x * pixelDims.x;", "newCoords.y = (pixelNum.y + 1.0) * pixelDims.y;", "}else if(coordsDiff.y < -3.0 * coordsDiff.x - 1.0){", "newCoords = (pixelNum + 1.0) * pixelDims;", "}", "}", "", "gl_FragColor = texture2D(u_sampler, newCoords);", "", "}"].join("\n"),MoaOverlayVertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "uniform mat4 u_transform;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "v_texCoord = (vec4(a_texCoord.x, a_texCoord.y, 0.0, 1.0) * u_transform).xy;", "gl_Position = a_position;", "}"].join("\n"),MoaOverlayFragmentShader: ["precision mediump float;", "uniform lowp sampler2D u_overlaySampler;", "uniform lowp sampler2D u_sampler;", "uniform float u_factor;", "varying highp vec2 v_texCoord;", "void main(void) {", "gl_FragColor = texture2D(u_overlaySampler, v_texCoord);", "}"].join("\n"),MoaNoiseFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_randomSeed;", "uniform float u_intensity;", "", "float rand(in vec2 n)", "{", "//                                                n *= u_randomSeed;", "return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);", "}", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "", "float v = u_intensity * (2.0 * rand(v_texCoord) - 1.0);", "", "color.rgb += v;", "", "gl_FragColor = color;", "", "}"].join("\n"),MoaGradientMapFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform int u_invertMap;", "uniform int u_gradVar;", "uniform int u_blendMode;", "uniform float u_alphaBlend;", "uniform lowp sampler2D u_gradientMap;", "", "void main(void) {", "", "float factor = 0.0;", "float alphaBlend = u_alphaBlend;", "lowp vec4 gradientColor;", "lowp vec4 srcColor = texture2D(u_sampler, v_texCoord);", "float iSrc = 0.0;", "", "if(u_gradVar == MOA_GRADIENT_MAP_INPUT_TYPE_INTENSITY){", "iSrc = 0.2 * srcColor.r + 0.7 * srcColor.g + 0.1 * srcColor.b;", "} else if(u_gradVar == MOA_GRADIENT_MAP_INPUT_TYPE_CHROMA){", "iSrc = max(srcColor.r, max(srcColor.g, srcColor.b)) - min(srcColor.r, min(srcColor.g, srcColor.b));", "} else if(u_gradVar == MOA_GRADIENT_MAP_INPUT_TYPE_RED_CHANNEL){", "iSrc = srcColor.r;", "} else if(u_gradVar == MOA_GRADIENT_MAP_INPUT_TYPE_GREEN_CHANNEL){", "iSrc = srcColor.g;", "} else if(u_gradVar == MOA_GRADIENT_MAP_INPUT_TYPE_BLUE_CHANNEL){", "iSrc = srcColor.b;", "} else if(u_gradVar == MOA_GRADIENT_MAP_INPUT_TYPE_MAX_CHANNEL){", "iSrc = max(srcColor.r, max(srcColor.g, srcColor.b));", "} else if(u_gradVar == MOA_GRADIENT_MAP_INPUT_TYPE_MIN_CHANNEL){", "iSrc = min(srcColor.r, min(srcColor.g, srcColor.b));", "}", "", "if(u_invertMap == 1){", "iSrc = 1.0 - iSrc;", "}", "", "gradientColor = texture2D(u_gradientMap, vec2(0.0,iSrc));", "", "float alpha = gradientColor.a * alphaBlend;", "", "if(u_blendMode == 0){", "gl_FragColor = (1.0 - alpha) * srcColor + alpha * gradientColor;", "} else if(u_blendMode == 6){", "gl_FragColor = srcColor * gradientColor;", "gl_FragColor = (1.0 - alpha) * srcColor + alpha * (gl_FragColor + srcColor * (1.0 - (1.0 - srcColor) * (1.0 - gradientColor) - gl_FragColor));", "} else if(u_blendMode == 5){", "gl_FragColor = (1.0 - alpha) * srcColor + alpha * srcColor * gradientColor;", "} else if(u_blendMode == 3){", "gl_FragColor = (1.0 - alpha) * srcColor + alpha * (srcColor + gradientColor - srcColor * gradientColor);", "} else if(u_blendMode == 1){", "float factorI = 1.0 - alpha;", "", "vec4 mult = 2.0 * srcColor * gradientColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - srcColor) * (1.0 - gradientColor);", "gl_FragColor = factorI * srcColor + alpha * mix(mult, screen, step(0.5, srcColor));", "} else if(u_blendMode == 4){", "if(srcColor.r > gradientColor.r){", "gl_FragColor.r = (1.0 - alpha) * srcColor.r + alpha * gradientColor.r;", "}else{", "gl_FragColor.r = srcColor.r;", "}", "", "if(srcColor.g > gradientColor.g){", "gl_FragColor.g = (1.0 - alpha) * srcColor.g + alpha * gradientColor.g;", "}else{", "gl_FragColor.g = srcColor.g;", "}", "", "if(srcColor.b > gradientColor.b){", "gl_FragColor.b = (1.0 - alpha) * srcColor.b + alpha * gradientColor.b;", "}else{", "gl_FragColor.b = srcColor.b;", "}", "}", "", "gl_FragColor.a = 1.0;", "}"].join("\n"),MoaColorMapFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "uniform lowp sampler2D u_colorMapSampler;", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "", "lowp vec2 redVec = vec2(0,color.r);", "lowp vec2 greenVec = vec2(0,color.g);", "lowp vec2 blueVec = vec2(0,color.b);", "", "lowp vec4 rColor = texture2D(u_colorMapSampler, redVec);", "lowp vec4 gColor = texture2D(u_colorMapSampler, greenVec);", "lowp vec4 bColor = texture2D(u_colorMapSampler, blueVec);", "", "color.r = rColor.r;", "color.g = gColor.g;", "color.b = bColor.b;", "", "gl_FragColor = color;", "}"].join("\n"),MoaIntensityMapOverlayFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "uniform lowp sampler2D u_colorMapSampler;", "uniform float u_intensity;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 src;", "", "float intensity = 0.212671*dst.r + 0.71516*dst.g + 0.072169*dst.b;", "", "lowp vec2 intensityVec = vec2(0,intensity);", "", "src = texture2D(u_colorMapSampler, intensityVec);", "", "float factor = u_intensity;", "float factorI = 1.0 - factor;", "", "vec4 mult = 2.0 * dst * src;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - src);", "dst = factorI * dst + factor * mix(mult, screen, step(0.5, dst));", "", "dst.a = 1.0;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaIntensityMapMultiplyFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "uniform lowp sampler2D u_colorMapSampler;", "uniform float u_intensity;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 src;", "", "float intensity = 0.212671*dst.r + 0.71516*dst.g + 0.072169*dst.b;", "", "lowp vec2 intensityVec = vec2(0,intensity);", "", "src = texture2D(u_colorMapSampler, intensityVec);", "", "// Could use a blend mode here, but we've already gone to the trouble of sampling the source", "float factor = u_intensity;", "float factorI = 1.0 - factor;", "", "dst.rgb = factorI * dst.rgb + factor * (src.rgb * dst.rgb);", "", "dst.a = 1.0;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaIntensityMapFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "uniform lowp sampler2D u_colorMapSampler;", "uniform float u_intensity;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 src;", "", "float intensity = 0.212671*dst.r + 0.71516*dst.g + 0.072169*dst.b;", "", "lowp vec2 intensityVec = vec2(0,intensity);", "", "src = texture2D(u_colorMapSampler, intensityVec);", "dst = mix(dst, src, u_intensity);", "", "dst.a = 1.0;", "gl_FragColor = dst;", "}"].join("\n"),MoaBrightnessContrastSaturationWarmthShader: ["precision mediump float;", "uniform sampler2D u_sampler;", "uniform lowp sampler2D u_cMap;", "", "varying vec2 v_texCoord;", "", "uniform float u_brightness;", "uniform float u_contrast;", "uniform float u_contrastExp;", "uniform float u_contrastLessThanZero;", "uniform mat3  u_contrastSatAdjust;", "uniform mat3  u_saturationMatrix;", "", "uniform vec3  u_warmthDelta;", "", "uniform float u_warmth;", "uniform float u_saturation;", "", "", "const float PI = 3.14159265358;", "", "void main() {", "vec4 img = texture2D(u_sampler, v_texCoord);", "", "vec3 result = img.rgb;", "float v;", "", "// **** BRIGHTNESS **** //", "if(u_brightness != 0.0){", "result.r = texture2D(u_cMap,vec2(0,result.r)).r;", "result.g = texture2D(u_cMap,vec2(0,result.g)).r;", "result.b = texture2D(u_cMap,vec2(0,result.b)).r;", "}", "// **** END **** //", "", "// **** CONTRAST **** //", "if(u_contrast != 0.0){", "vec3 map;", "map.r = texture2D(u_cMap, vec2(0,result.r)).g;", "map.g = texture2D(u_cMap, vec2(0,result.g)).g;", "map.b = texture2D(u_cMap, vec2(0,result.b)).g;", "", "//result = map + 0.4*(dot(vec3(1.0),map) - 2.0*map-(dot(vec3(1.0),result) - 2.0*result));", "result = dot(vec3(0.4),map) + 0.2 * map - dot(vec3(0.4),result) + 0.8 * result;", "", "result = step(0.0, u_contrast) * result + step(u_contrast, 0.0) * u_contrastSatAdjust * result;", "}", "// **** END **** //", "", "// **** WARMTH **** //", "if(u_warmth != 0.0){", "result = result + u_warmthDelta*sin(PI*result);", "}", "// **** END **** //", "", "", "// **** SATURATION **** //", "if(u_saturation != 0.0){", "result = u_saturationMatrix * result;", "}", "// **** END **** //", "", "gl_FragColor = vec4(result.rgb,img.a);", "}"].join("\n"),MoaColorTransformFragmentShader: ["precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "uniform mat3 u_colorMat;", "uniform vec3 u_colorTrans;", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "", "color.rgb = u_colorMat * color.rgb + u_colorTrans;", "", "gl_FragColor = color;", "}"].join("\n"),MoaColorTransformAndOverlayWithOriginalFragmentShader: ["", "precision mediump float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "uniform mat3 u_colorMat;", "uniform vec3 u_colorTrans;", "uniform float u_overlayAmount;", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "lowp vec4 originalColor = color;", "", "color.rgb = u_colorMat * color.rgb + u_colorTrans;", "", "float factor = clamp(u_overlayAmount, 0.0, 1.0);", "float factorI = 1.0-factor;", "", "vec4 mult = 2.0 * color * originalColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - color) * (1.0 - originalColor);", "color = factorI * originalColor + factor * mix(mult, screen, step(0.5, originalColor));", "color.a = 1.0;", "", "gl_FragColor = color;", "}"].join("\n"),MoaMaskRadialFragmentShader: ["precision highp float;", "", "varying highp vec2 v_texCoord;", "", "uniform vec2 u_centerPoint;", "uniform float u_sigmaR2;", "uniform float u_width;", "uniform float u_height;", "", "void main(void) {", "float xComp = u_width * v_texCoord.x - u_centerPoint.x;", "float yComp = u_height * v_texCoord.y - u_centerPoint.y;", "", "float dr2 = xComp * xComp + yComp * yComp;", "//                                                          float dr2 = 1.21 * xComp * xComp + yComp * yComp; // Selfie shader", "", "//                                                          dr2 -= u_sigmaR2/2.0; //Selfie shader", "", "//                                                          if(dr2 < 0.0){", "//                                                              dr2 = 0.0;", "//                                                          }", "", "//                                                          float factor = sqrt(4.0 * dr2/u_sigmaR2);", "", "float factor = 1.0 - exp(-1.0 * dr2 / (2.0 * u_sigmaR2));", "//                                                          float factor = (1.0 - exp(-10.0 * dr2 / (2.0 * u_sigmaR2)));", "", "//                                                          factor = factor > 1.0 ? 1.0 : (factor < 0.0 ? 0.0 : factor);", "", "gl_FragColor = vec4(factor, factor, factor, factor);", "}"].join("\n"),MoaMaskElipticalFragmentShader: ["precision highp float;", "", "varying highp vec2 v_texCoord;", "", "uniform vec2 u_centerPoint;", "uniform float u_sigmaX;", "uniform float u_sigmaY;", "uniform float u_width;", "uniform float u_height;", "", "void main(void) {", "float xComp = u_width * v_texCoord.x - u_centerPoint.x;", "float yComp = u_height * v_texCoord.y - u_centerPoint.y;", "", "float dr2 = xComp * xComp + yComp * yComp;", "", "float factor = 1.0 - exp(-1.0 * dr2 / (2.0 * u_sigmaX));", "", "gl_FragColor = vec4(factor, factor, factor, factor);", "}"].join("\n"),MoaMaskLinearFragmentShader: ["", "precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform vec2 u_centerPoint;", "uniform float u_sigmaR2;", "uniform float u_normX;", "uniform float u_normY;", "uniform float u_width;", "uniform float u_height;", "", "void main(void) {", "float proj = abs(u_normX * (u_centerPoint.x - u_width * v_texCoord.x) + u_normY * (u_height * v_texCoord.y - u_centerPoint.y));", "", "float factor = 1.0 - exp(-1.0 * proj * proj / (2.0 * u_sigmaR2));", "", "gl_FragColor = vec4(factor, factor, factor, factor); // change", "", "}"].join("\n"),MoaMaskDotsVertexShader: ["attribute highp vec2 a_position;", "uniform highp float u_pointSize;", "", "varying highp vec2 v_texCoord;", "varying highp float v_pointSize;", "", "void main()", "{", "v_texCoord = vec2((a_position.x + 1.0) / 2.0, (a_position.y + 1.0) / 2.0);", "gl_Position = vec4(a_position.x, a_position.y, 0.0, 1.0);", "gl_PointSize = u_pointSize;", "v_pointSize = u_pointSize;", "}"].join("\n"),MoaMaskDotFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform mediump float u_radius;", "uniform float u_width;", "uniform float u_height;", "uniform float u_pointSize;", "uniform float u_alpha;", "uniform float u_dEdge;", "uniform int   u_erase;", "", "void main(void) {", "float xComp = gl_PointCoord.x * 2.0 - 1.0;", "float yComp = gl_PointCoord.y * 2.0 - 1.0;", "", "float dr2 = xComp * xComp + yComp * yComp;", "//TODO: make this separate shaders", "float factor = exp(-dr2/2.0*9.0);//3.0 * (1.0 - sqrt(dr2));", "factor = clamp(factor, 0.0, 1.0);", "", "factor *= u_alpha;", "", "gl_FragColor = vec4(factor,factor,factor,factor);", "}"].join("\n"),MoaMaskDotColorFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "varying highp float v_pointSize;", "", "uniform mediump float u_radius;", "uniform float u_width;", "uniform float u_height;", "uniform float u_pointSize;", "uniform float u_alpha;", "uniform float u_dEdge;", "uniform vec4 u_color;", "", "void main(void) {", "float xComp = gl_PointCoord.x * 2.0 - 1.0;", "float yComp = gl_PointCoord.y * 2.0 - 1.0;", "", "float dr2 = xComp * xComp + yComp * yComp;", "float factor = (1.0 + u_radius / u_dEdge) * (1.0 - sqrt(dr2)); // Antialias based on absolute point size", "factor = clamp(factor, 0.0, 1.0);", "factor = factor * factor;", "gl_FragColor = (factor * u_alpha) * u_color;", "}"].join("\n"),MoaColorSplashAutoFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform mediump float u_radius;", "uniform float u_width;", "uniform float u_height;", "uniform float u_pointSize;", "uniform float u_alpha;", "uniform float u_dEdge;", "uniform float u_l;", "uniform float u_a;", "uniform float u_b;", "uniform float u_sigmaC;", "", "varying highp float v_pointSize;", "", "void main(void) {", "float xComp = gl_PointCoord.x * 2.0 - 1.0;", "float yComp = gl_PointCoord.y * 2.0 - 1.0;", "", "float dr2 = xComp * xComp + yComp * yComp;", "float factorR = exp(-dr2/2.0*4.0);//3.0 * (1.0 - sqrt(dr2));", "factorR = clamp(factorR, 0.0, 1.0);", "", "// Convert to LAB", "vec2 translation = vec2(xComp / 2.0 * v_pointSize / u_width, -1.0 * yComp / 2.0 * v_pointSize / u_height);", "vec4 color = texture2D(u_sampler, v_texCoord + translation);", "", "float R = color.r * 255.0;", "float G = color.g * 255.0;", "float B = color.b * 255.0;", "", "float l1;", "float a1;", "float b1;", "float r;", "float g;", "float b;", "float x;", "float y;", "float z;", "", "if(R/255.0 <= 0.04045){r = 100.0 *R/255.0/12.92;} else{ r = 100.0*pow((R/255.0+0.055)/1.055,2.40);}", "if(G/255.0 <= 0.04045){g = 100.0 *G/255.0/12.92;} else{ g = 100.0*pow((G/255.0+0.055)/1.055,2.40);}", "if(B/255.0 <= 0.04045){b = 100.0 *B/255.0/12.92;} else{ b = 100.0*pow((B/255.0+0.055)/1.055,2.40);}", "", "x = 0.00433891*r  + 0.00376234915*g + 0.0018990604648*b;", "y = 0.002126*r    + 0.007152*g      + 0.000722*b;", "z = 0.000177255*r + 0.00109475308*g + 0.0087295537*b;", "", "if(x > 0.008856){x = pow(x,1.0/3.0);}else{x = 7.787*x+16.0/116.0;}", "if(y > 0.008856){y = pow(y,1.0/3.0);}else{y = 7.787*y+16.0/116.0;}", "if(z > 0.008856){z = pow(z,1.0/3.0);}else{z = 7.787*z+16.0/116.0;}", "", "l1 = 116.0*y-16.0;", "a1 = 500.0*(x-y);", "b1 = 200.0*(y-z);", "", "l1 *= 2.55; a1 += 127.0; b1 += 127.0;", "", "// Use those values to determine color factor", "float dColor = (u_a - a1) * (u_a - a1) + (u_b - b1) * (u_b - b1);", "float factorC = exp(-1.0 * dColor/(2.0 * u_sigmaC * u_sigmaC));", "", "// Get overall color", "float factor = u_alpha * factorR * factorC;", "gl_FragColor = vec4(factor,factor,factor,factor);", "", "}"].join("\n"),MoaCloneSpotFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform vec2 u_center;", "uniform vec2 u_offset;", "uniform float u_aspectI;", "uniform float u_radius;", "", "void main(void) {", "vec4 img = texture2D(u_sampler, v_texCoord);", "", "float r = length(vec2(v_texCoord.x, u_aspectI * v_texCoord.y) - u_center);", "", "vec4 result = img;", "", "if(r < u_radius){", "float alpha = clamp(3.0 * (1.0 - (r / u_radius)), 0.0, 1.0);", "", "result = texture2D(u_sampler, v_texCoord + u_offset);", "result = mix(img, result, alpha);", "}", "", "gl_FragColor = vec4(result.rgb, img.a);", "}"].join("\n"),MoaGradientFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_scale;", "uniform float u_xCenter;", "uniform float u_yCenter;", "uniform float u_dx_2;", "uniform float u_dy_2;", "uniform float u_denomI;", "uniform float u_alphaBlend;", "uniform int u_shapeMode;", "uniform int u_vignetteShape;", "uniform float u_angleCos;", "uniform float u_angleSin;", "uniform lowp sampler2D u_gradientMap;", "", "const float cutoff = 1.15;", "const float c4 = 5.0 / 3.0;", "const float c6 = 34.0 / 45.0;", "const float c8 = 13.0 / 63.0;", "const float c10 = 514.0 / 14175.0;", "", "void main(void) {", "float xComp = (v_texCoord.x - u_xCenter) / u_scale;", "float yComp = (v_texCoord.y - u_yCenter) / u_scale;", "", "float factor = 0.0;", "float alphaBlend = u_alphaBlend;", "", "if(u_shapeMode == 0){", "factor = u_angleCos * xComp - u_angleSin * yComp;", "}else if(u_shapeMode == 1){", "factor = sqrt(xComp*xComp + yComp*yComp);", "}", "", "factor = clamp(factor, 0.0, 1.0);", "", "vec4 gradientColor = texture2D(u_gradientMap, vec2(0.0, factor));", "gradientColor.a = gradientColor.a * alphaBlend;", "gl_FragColor = gradientColor;", "}"].join("\n"),MoaGradientLinearVignetteFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_scale;", "uniform float u_xCenter;", "uniform float u_yCenter;", "uniform float u_dx_2;", "uniform float u_dy_2;", "uniform float u_denomI;", "uniform float u_alphaBlend;", "uniform int u_shapeMode;", "uniform int u_vignetteShape;", "uniform float u_angleCos;", "uniform float u_angleSin;", "uniform lowp sampler2D u_gradientMap;", "", "const float cutoff = 1.15;", "const float c4 = 5.0 / 3.0;", "const float c6 = 34.0 / 45.0;", "const float c8 = 13.0 / 63.0;", "const float c10 = 514.0 / 14175.0;", "", "void main(void) {", "float xComp = (v_texCoord.x - u_xCenter) / u_scale;", "float yComp = (v_texCoord.y - u_yCenter) / u_scale;", "", "float factor = 0.0;", "float alphaBlend = u_alphaBlend;", "", "factor = u_angleCos * xComp - u_angleSin * yComp;", "", "float xDist = u_width * (v_texCoord.x - 0.5 - u_dx_2);", "float yDist = u_height * (v_texCoord.y - 0.5 - u_dy_2);", "", "float theta = u_denomI * (xDist * xDist /  (u_width * u_width) + yDist * yDist /  (u_height * u_height));", "", "if(u_vignetteShape == 1){theta *= theta;}", "else if(u_vignetteShape == 3){theta *= theta; theta *= theta;}", "else if(u_vignetteShape == 2){theta = pow(theta,1.5);}", "", "alphaBlend = u_alphaBlend;", "", "if (theta < 0.04) {", "alphaBlend = 0.0;", "} else if (theta <= cutoff){", "float t2;", "float t4;", "float t6;", "float t8;", "t2 = theta * theta;", "t4 = t2 * t2;", "t6 = t4 * t2;", "t8 = t6 * t2;", "alphaBlend = u_alphaBlend * (1.0 - (1.0 - 2.0 * t2 + c4 * t4 - c6 * t6 + c8 * t8 - c10 * t8 * t2));", "}", "", "factor = clamp(factor, 0.0, 1.0);", "", "vec4 gradientColor = texture2D(u_gradientMap, vec2(0.0, factor));", "gradientColor.a = gradientColor.a * alphaBlend;", "gl_FragColor = gradientColor;", "}"].join("\n"),MoaGradientOverlayFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_scale;", "uniform float u_xCenter;", "uniform float u_yCenter;", "uniform float u_dx_2;", "uniform float u_dy_2;", "uniform float u_denomI;", "uniform float u_alphaBlend;", "uniform int u_shapeMode;", "uniform int u_vignetteShape;", "uniform float u_angleCos;", "uniform float u_angleSin;", "uniform lowp sampler2D u_gradientMap;", "", "const float cutoff = 1.15;", "const float c4 = 5.0 / 3.0;", "const float c6 = 34.0 / 45.0;", "const float c8 = 13.0 / 63.0;", "const float c10 = 514.0 / 14175.0;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "", "float xComp = (v_texCoord.x - u_xCenter) / u_scale;", "float yComp = (v_texCoord.y - u_yCenter) / u_scale;", "", "float factor = 0.0;", "float alphaBlend = u_alphaBlend;", "", "if(u_shapeMode == 0){", "factor = u_angleCos * xComp - u_angleSin * yComp;", "}else if(u_shapeMode == 1){", "factor = sqrt(xComp*xComp + yComp*yComp);", "}", "", "factor = clamp(factor, 0.0, 1.0);", "", "vec4 gradientColor = texture2D(u_gradientMap, vec2(0.0, factor));", "alphaBlend = gradientColor.a * alphaBlend;", "", "factor = clamp(alphaBlend,0.0,1.0);", "float factorI = 1.0 - factor;", "", "vec4 mult = 2.0 * dst * gradientColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - gradientColor);", "dst = factorI * dst + factor * mix(mult, screen, step(0.5, dst));", "dst.a = 1.0;", "", "gl_FragColor = dst;", "}"].join("\n"),MoaDrawingVertexShader: ["attribute highp vec2 a_position;", "varying highp vec2 v_position;", "", "void main()", "{", "gl_Position = vec4(a_position.x, a_position.y, 0.0, 1.0);", "}", "", ""].join("\n"),MoaDrawingFragmentShader: ["precision highp float;", "", "uniform vec4 u_color;", "", "void main()", "{", "vec4 color = u_color;", "gl_FragColor = color;", "}"].join("\n"),MoaMultiColorDrawingVertexShader: ["attribute highp vec4 a_color;", "attribute highp vec2 a_position;", "", "varying vec4 v_color;", "", "void main()", "{", "v_color = a_color;", "gl_Position = vec4(a_position.x, a_position.y, 0.0, 1.0);", "}", "", ""].join("\n"),MoaMultiColorDrawingFragmentShader: ["precision highp float;", "", "varying vec4 v_color;", "", "void main()", "{", "gl_FragColor = v_color;", "}"].join("\n"),MoaAirbrushFragmentShader: ["precision highp float;", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_samplerLF;", "uniform lowp sampler2D u_samplerLLF;", "", "varying highp vec2 v_texCoord;", "", "void main() {", "vec4 img = texture2D(u_sampler, v_texCoord);", "vec4 imgLF = texture2D(u_samplerLF, v_texCoord);", "vec4 imgLLF = texture2D(u_samplerLLF, v_texCoord);", "", "// MF = imgLF - imgLLF", "// HF = img - imgLF", "// img = imgLLF + MF + HF", "// img = imgLLF + img - imgLF + imgLF - imgLLF", "", "// want result = imgLLF + HF = imgLLF + img - imgLF", "", "float alpha = 1.0;", "", "vec4 blendColor = imgLLF + img - imgLF;// + 0.4*(imgLF - imgLLF);", "", "vec4 result = mix(img, blendColor, alpha);", "", "gl_FragColor = vec4(result.rgb,img.a);", "}"].join("\n"),MoaMascaraFragmentShader: ["precision highp float;", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_samplerLF;", "uniform lowp sampler2D u_samplerLLF;", "", "varying highp vec2 v_texCoord;", "", "void main() {", "vec4 img = texture2D(u_sampler, v_texCoord);", "vec4 imgLF = texture2D(u_samplerLF, v_texCoord);", "vec4 imgLLF = texture2D(u_samplerLLF, v_texCoord);", "", "// MF = imgLF - imgLLF", "// HF = img - imgLF", "// img = imgLLF + MF + HF", "// img = imgLLF + img - imgLF + imgLF - imgLLF", "", "// want result = imgLLF + HF = imgLLF + img - imgLF", "", "vec4 blendColor = imgLF;", "", "float diff = 0.2*imgLF.r + 0.7*imgLF.g + 0.1*imgLF.b - (0.2*img.r + 0.7*img.g + 0.1*img.b);", "", "if(diff > 0.0) {", "blendColor = img;// * (1.0 - abs(diff));", "}", "", "gl_FragColor = vec4(blendColor.rgb,img.a);", "}"].join("\n"),MoaBlemishFragmentShader: ["precision highp float;", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_samplerLF;", "uniform lowp sampler2D u_samplerOffset;", "uniform lowp sampler2D u_samplerOffsetLF;", "", "uniform vec2 u_center;", "uniform vec2 u_offset;", "uniform vec4 u_avgColor;", "uniform float u_aspectI;", "uniform float u_radius;", "", "varying highp vec2 v_texCoord;", "void main() {", "vec4 img = texture2D(u_sampler, v_texCoord);", "vec4 imgLF = texture2D(u_samplerLF, v_texCoord);", "vec4 imgOffset = texture2D(u_samplerOffset, v_texCoord);", "vec4 imgOffsetLF = texture2D(u_samplerOffsetLF, v_texCoord);", "", "//      float r = length(vec2(v_texCoord.x, u_aspectI * v_texCoord.y) - u_center);", "float r = length(v_texCoord - u_center);", "", "float r2 = r*r;", "float raidus2 = 0.5*0.5;", "", "float alpha = 1.15651764275 * exp(-2.0 * r2/raidus2) - 0.13533528323;", "alpha = alpha < 0.0 ? 0.0 : alpha > 1.0 ? 1.0 : alpha;", "", "float alphaLF = 1.01865736036 * exp(-4.0 * r2/raidus2) - 0.01831563888;", "alphaLF = alphaLF < 0.0 ? 0.0 : alphaLF > 1.0 ? 1.0 : alphaLF;", "", "vec4 blendColor = mix(imgLF, u_avgColor, alphaLF);", "", "blendColor = blendColor + (imgOffset-imgOffsetLF);", "", "//        vec4 result = mix(img, vec4(1,0,0,1), alpha);", "vec4 result = mix(img, blendColor, alpha);", "", "gl_FragColor = vec4(result.rgb,img.a);", "}"].join("\n"),MoaWhitenFragmentShader: ["precision highp float;", "", "uniform highp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "highp vec4 color = texture2D(u_sampler, v_texCoord);", "", "// RGB to LAB", "float R = color.r * 255.0;", "float G = color.g * 255.0;", "float B = color.b * 255.0;", "", "float l1;", "float a1;", "float b1;", "float r;", "float g;", "float b;", "float x;", "float y;", "float z;", "", "if(R/255.0 <= 0.04045){r = 100.0 *R/255.0/12.92;} else{ r = 100.0*pow((R/255.0+0.055)/1.055,2.40);}", "if(G/255.0 <= 0.04045){g = 100.0 *G/255.0/12.92;} else{ g = 100.0*pow((G/255.0+0.055)/1.055,2.40);}", "if(B/255.0 <= 0.04045){b = 100.0 *B/255.0/12.92;} else{ b = 100.0*pow((B/255.0+0.055)/1.055,2.40);}", "", "x = 0.00433891*r  + 0.00376234915*g + 0.0018990604648*b;", "y = 0.002126*r    + 0.007152*g      + 0.000722*b;", "z = 0.000177255*r + 0.00109475308*g + 0.0087295537*b;", "", "if(x > 0.008856){x = pow(x,1.0/3.0);}else{x = 7.787*x+16.0/116.0;}", "if(y > 0.008856){y = pow(y,1.0/3.0);}else{y = 7.787*y+16.0/116.0;}", "if(z > 0.008856){z = pow(z,1.0/3.0);}else{z = 7.787*z+16.0/116.0;}", "", "l1 = 116.0*y-16.0;", "a1 = 500.0*(x-y);", "b1 = 200.0*(y-z);", "", "color.r = l1 * 2.55; color.g = (a1+127.0); color.b = (b1+127.0);", "", "// Adjust LAB", "float dColor = (color.g - 132.0)*(color.g - 132.0);", "", "if(color.b < 127.0){", "dColor += (color.b - 127.0)*(color.b - 127.0);", "}", "", "float factor = 0.65*exp(-dColor/98.0);", "", "color.r = 255.0*pow(color.r/255.0,1.0/(0.5*factor+1.0));", "color.b = (1.0-factor)*(color.b-127.0)+127.0;", "", "// LAB to RGB", "float lab0 = color.r;", "float lab1 = color.g;", "float lab2 = color.b;", "", "float Y = ( lab0/2.55 + 16.0) / 116.0;", "float X = (lab1-127.0) / 500.0 + Y;", "float Z = Y - (lab2-127.0) / 200.0;", "", "float Y3 = Y*Y*Y;", "float X3 = X*X*X;", "float Z3 = Z*Z*Z;", "", "if ( Y3 > 0.008856 ){ Y = Y3;}else{Y = ( Y - 16.0 / 116.0 ) / 7.787;}", "", "if ( X3 > 0.008856 ){ X = X3;}else{X = ( X - 16.0 / 116.0 ) / 7.787;}", "", "if ( Z3 > 0.008856 ){ Z = Z3;}else{Z = ( Z - 16.0 / 116.0 ) / 7.787;}", "", "X = .95047  * X;", "Y = 1.00000 * Y;", "Z = 1.08883 * Z;", "", "R = X *  3.2406 + Y * -1.5372 + Z * -0.4986;", "G = X * -0.9689 + Y *  1.8758 + Z *  0.0415;", "B = X *  0.0557 + Y * -0.2040 + Z *  1.0570;", "", "if ( R > 0.0031308 ) {R = 1.055 * ( pow(R , ( 0.41666666666667 )) ) - 0.055;}else{ R = 12.92 * R;}", "if ( G > 0.0031308 ) {G = 1.055 * ( pow(G , ( 0.41666666666667 )) ) - 0.055;}else{ G = 12.92 * G;}", "if ( B > 0.0031308 ) {B = 1.055 * ( pow(B , ( 0.41666666666667 )) ) - 0.055;}else{ B = 12.92 * B;}", "", "color.r = R; color.g = G; color.b = B;", "color.a = 1.0;", "", "gl_FragColor = color;", "}"].join("\n"),MoaRedeyeFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "lowp vec4 c = texture2D(u_sampler, v_texCoord);", "", "//                                                 float average = (color.g + color.b) * 0.5;", "//", "//                                                 float newRed = 0.0;", "//", "//                                                 if(average > 0.0){", "//                                                     float redIntensity = color.r / average;", "//                                                     if(redIntensity > 2.0){", "//                                                         newRed = average;", "//                                                     }else{", "//                                                         newRed = color.r;", "//                                                     }", "//                                                 }else{", "//                                                     newRed = 0.0;", "//                                                 }", "//", "//                                                 color.r = newRed;", "", "float chroma = max(max(c.r,c.g),c.b)-min(min(c.r,c.g),c.b);", "", "// var dstI = 0.2*r+0.7*g+0.1*b;", "float srcI = 0.2*c.r+0.7*c.g+0.1*c.b;", "", "//Highly saturated red, or very bright skewed red", "// var cFactor = 2*Math.pow(chroma/255,1.7);", "float cFactor = exp(-(chroma-175.0/255.0)*(chroma-175.0/255.0)/(2.0*75.0*75.0/255.0/255.0));", "if(chroma > 175.0/255.0){", "cFactor = 1.0;", "}", "", "float gFactor = c.b - c.g;", "if(gFactor < 0.0){", "gFactor = exp(-gFactor*gFactor/(2.0*20.0*20.0/255.0/255.0));", "}else{", "gFactor = 1.0;", "}", "", "float redFactor = c.r - srcI;", "if(redFactor < 0.0){", "redFactor = 0.0;", "}else{", "redFactor = 1.0 - exp(-redFactor*redFactor/(2.0*0.1*0.1));", "}", "", "float alpha = cFactor*redFactor*gFactor;", "clamp(alpha,0.0,1.0);", "", "", "c.r = alpha*(c.g+c.b)/2.0+(1.0-alpha)*c.r;", "", "gl_FragColor = c;", "}"].join("\n"),MoaEyeColorFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "lowp vec4 c = texture2D(u_sampler, v_texCoord);", "", "float chroma = max(max(c.r,c.g),c.b)-min(min(c.r,c.g),c.b);", "float srcI = 0.2*c.r+0.7*c.g+0.1*c.b;", "", "//eye brightness between 40-100", "//float bFactor = exp(-(srcI-75.0/255.0)*(srcI-75.0/255.0)/(2.0*27.0*27.0/255.0/255.0));", "//exclude very bright", "float tooBright = 137.0/255.0;", "float tooDark = 10.0/255.0;", "float bFactor = 1.0-exp(-(srcI-tooBright)*(srcI-tooBright)/(2.0*27.0*27.0/255.0/255.0));", "bFactor *= 1.0-exp(-(srcI-tooDark)*(srcI-tooDark)/(2.0*17.0*17.0/255.0/255.0));", "if(srcI > tooBright || srcI < tooDark){", "bFactor = 0.0;", "}", "", "", "float chromaGoal = 38.0/255.0;", "float cFactor = 1.0-exp(-(chroma-chromaGoal)*(chroma-chromaGoal)/(2.0*15.0*15.0/255.0/255.0));", "", "if(chroma > chromaGoal){", "cFactor = 0.0;", "}", "", "//float cFactor = 1.0-4.0*chroma;", "", "float alpha = bFactor*cFactor;", "alpha = 0.75*clamp(alpha,0.0,1.0);", "", "float alphaI = 1.0-alpha;", "", "//vec4 eyeColor = vec4(1.0,0.0,0.0,1.0);", "//vec4 eyeColor = vec4(0.0,114.0/255.0,152.0/255.0,1.0);", "vec4 eyeColor = vec4(136.0/255.0,0.0/255.0,152.0/255.0,1.0);", "", "vec4 b = eyeColor;", "vec4 a = c;", "", "vec4 blendColor = 2.0*a*b + a*a - 2.0*a*a*b;", "gl_FragColor = mix(c, blendColor, alpha);", "}"].join("\n"),MoaEyeBrightFragmentShader: ["", "// precision highp float;", "//", "// uniform lowp sampler2D u_sampler;", "// varying highp vec2 v_texCoord;", "// #define PI 3.14159265359", "//", "// void main(void) {", "//     lowp vec4 c = texture2D(u_sampler, v_texCoord);", "//", "//     float chroma = max(max(c.r,c.g),c.b)-min(min(c.r,c.g),c.b);", "//     float srcI = 0.2*c.r+0.7*c.g+0.1*c.b;", "//", "//     //eye brightness between 40-100", "//     float bFactor = exp(-(srcI-75.0/255.0)*(srcI-75.0/255.0)/(2.0*27.0*27.0/255.0/255.0));", "//     float cFactor = 1.0-3.0*chroma;", "//", "//     float alpha = 3.0*cFactor*cFactor;", "//     alpha = clamp(alpha,0.0,1.0);", "//", "//     float alphaI = 1.0-alpha;", "//", "//     //Brighten", "//     vec4 blendColor = vec4(c.rgb + 50.0/255.0*sin(c.rgb*PI)*sin(c.rgb*PI/2.0),c.a);", "//", "//     gl_FragColor = mix(c, blendColor, alpha);", "// }", "", "precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform lowp sampler2D u_map;", "uniform lowp sampler2D u_colorMapSampler;", "", "varying highp vec2 v_texCoord;", "#define PI 3.14159265359", "", "void main(void) {", "vec4 img = texture2D(u_sampler, v_texCoord);", "", "vec4 result = img;", "", "vec4 c = img;", "", "float alpha = 1.0;", "", "float max = max(max(c.r,c.g),c.b);", "float min = min(min(c.r,c.g),c.b);", "float chroma = max-min;", "float srcI = 0.2*c.r+0.7*c.g+0.1*c.b;", "", "//eye brightness between 40-100", "float bFactor = exp(-(srcI-75.0/255.0)*(srcI-75.0/255.0)/(2.0*27.0*27.0/255.0/255.0));", "float cFactor = 1.0-3.0*chroma;", "", "float redFactor = (c.r - srcI);", "if(redFactor < 0.0){", "redFactor = 0.0;", "}else{", "redFactor = (1.0 - exp(-redFactor*redFactor/(2.0*0.1*0.1)));", "}", "", "alpha *= cFactor;", "alpha = clamp(alpha,0.0,1.0);", "", "// alpha *= 10.0;//0.5;", "float alphaI = 1.0-alpha;", "", "float hue;", "float s;", "float l;", "", "l = (max + min)/2.0;", "", "if(chroma == 0.0){", "hue = 0.0;", "}else{", "if(max == c.r){", "hue = mod((c.g - c.b)/chroma, 6.0);", "}else if(max == c.g){", "hue = (c.b - c.r)/chroma + 2.0;", "}else{", "hue = (c.r - c.g)/chroma + 4.0;", "}", "", "hue *= 60.0;", "if(hue < 0.0){hue += 360.0;}", "if(hue >= 360.0){hue -= 360.0;}", "}", "", "if(chroma == 0.0){", "s = 0.0;", "}else{", "s = chroma/(1.0 - abs(2.0 * l - 1.0));", "}", "", "", "// Dodge Mapping", "l = texture2D(u_colorMapSampler, vec2(0,l)).r * (1.0-redFactor) + l *redFactor;", "s = texture2D(u_colorMapSampler, vec2(0,s)).r * (1.0-redFactor) + s *redFactor;", "", "// l = dodge[Math.floor(l*255)]/255 * (1 - redFactor) + l * redFactor;", "// s = dodge[Math.floor(s*255)]/255 * (1-redFactor) + s * redFactor;", "", "//        l = 1.2*l * (1.0 - redFactor) + l * redFactor;", "//        s = 1.2*s * (1.0 - redFactor) + s * redFactor;", "", "", "float hPrime = hue/60.0;", "float C;", "", "if(l > 0.5) {", "C = 2.0 * s * (1.0-l);", "} else {", "C = 2.0 * s * l;", "}", "", "float X = C * (1.0 - abs(mod(hPrime,2.0) - 1.0));", "", "vec4 blendColor;", "if(hPrime < 1.0){", "blendColor.r = C; blendColor.g = X; blendColor.b = 0.0;", "}else if(hPrime < 2.0){", "blendColor.r = X; blendColor.g = C; blendColor.b = 0.0;", "}else if(hPrime < 3.0){", "blendColor.r = 0.0; blendColor.g = C; blendColor.b = X;", "}else if(hPrime < 4.0){", "blendColor.r = 0.0; blendColor.g = X; blendColor.b = C;", "}else if(hPrime < 5.0){", "blendColor.r = X; blendColor.g = 0.0; blendColor.b = C;", "}else if(hPrime < 6.0){", "blendColor.r = C; blendColor.g = 0.0; blendColor.b = X;", "}", "", "float m = l - 0.5*C;", "", "blendColor.r = blendColor.r + m;", "blendColor.g = blendColor.g + m;", "blendColor.b = blendColor.b + m;", "", "", "// vec4 blendColor = vec4(c.rgb + 50.0/255.0*sin(c.rgb*PI)*sin(c.rgb*PI/2.0),c.a);", "", "// result = 2.0*img;", "result = mix(img, blendColor, alpha);", "", "gl_FragColor = vec4(result.rgb,img.a);", "}"].join("\n"),MoaEyeGlareFragmentShader: ["precision highp float;", "uniform lowp sampler2D u_sampler;", "", "uniform float u_angle;", "uniform float u_aspectI;", "uniform vec2 u_center;", "uniform float u_radius;", "", "", "varying highp vec2 v_texCoord;", "", "void main() {", "vec4 img = texture2D(u_sampler, v_texCoord);", "", "vec2 coordnorm = v_texCoord / u_center;", "", "// float angle = (180.0-15.0) * PI/180.0;", "float ca = cos(u_angle);", "float sa = sin(u_angle);", "", "float d2 = 0.7*u_radius;", "", "vec2 center2 = vec2(d2*ca,d2*sa);", "", "float rr1 = 0.3*u_radius;", "float rr2 = 0.95*u_radius;", "", "float r_2 = 0.6*u_radius;", "", "float r = length(vec2(v_texCoord.x,u_aspectI*v_texCoord.y)-u_center);", "float dr2 = length(vec2(v_texCoord.x,u_aspectI*v_texCoord.y)-center2-u_center);", "", "float alphaSpots = 3.0*(1.0-dr2/r_2);", "alphaSpots = clamp(alphaSpots,0.0,1.0);", "", "float alphaOuter = 3.0*(1.0-pow(r/rr2,2.0*0.75));", "alphaOuter = clamp(alphaOuter,0.0,1.0);", "", "float alphaInner = 3.0*(pow(r/rr1,2.0*0.75)-1.0);", "alphaInner = clamp(alphaInner,0.0,1.0);", "", "vec4 result = img;", "vec4 c = img;", "", "float alpha = 3.0*(1.0-(r/u_radius));", "alpha = clamp(alpha,0.0,1.0);", "", "alpha *= alphaSpots * alphaOuter * alphaInner;", "", "//alpha = 1.0;", "", "float powExp = 0.3;", "", "vec4 blendColor = pow(img,vec4(powExp));//vec4(1.0,0.0,0.0,1.0);//", "", "result = mix(img, blendColor, alpha);", "", "gl_FragColor = vec4(result.rgb,img.a);", "}"].join("\n"),MoaEyeShadowFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp vec4 u_eyeShadowColor;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "", "float intensity = 0.2 * color.r + 0.7 * color.g + 0.1 * color.b;", "", "//                                                   float redFactor = 3.0 * (3.0 * color.r - 1.5 * color.g - 1.5 * color.b);", "", "//                                                   redFactor = clamp(redFactor, 0.0, 0.5);", "", "vec4 newColor = u_eyeShadowColor + 0.85 * (intensity - 0.588);", "", "gl_FragColor = mix(color, newColor, 0.3);", "}"].join("\n"),MoaFlareFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform int u_blendMode;", "uniform int u_flareType;", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "uniform float u_alphaBlend;", "", "void setFactorAndExpvForType(out float factor)", "{", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "if(u_flareType == 14){", "xF -= 1.0;", "yF -= 1.0;", "}", "", "if(u_flareType == 0){", "theta = 80.0 * (xF * xF + yF * yF);", "if (theta == 0.0) { factor = 1.0; } else {", "factor = 1.0 - u_aF * 0.4 * (sin(theta) / sqrt(theta));", "}", "}else if(u_flareType == 1){", "expV   = (-(xF * xF + yF * yF) * 2.0 - 16.0 * (yF + 0.5) * (yF + 0.5) * (xF + 0.5) * (xF + 0.5));", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}else if(u_flareType == 2){", "expV   = (-(xF * xF + yF * yF) * 2.0 - 16.0 * (yF + 1.0) * (yF + 1.0) * (xF - 0.5) * (xF - 0.5));", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}else if(u_flareType == 3){", "theta  = xF * xF + yF * yF;", "expV   = -theta * 2.0 - 1.0 * (yF + 1.7) * (yF + 1.7) * (xF - 0.6) * (xF - 0.6);", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}else if(u_flareType == 4){", "// theta  = xF * xF + yF * yF;", "expV   = -0.5 * (yF - 1.7) * (yF - 1.7) * (xF + 0.6) * (xF + 0.6) - 0.5 * (yF + 1.7) * (yF + 1.7) * (xF - 0.6) * (xF - 0.6);", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}else if(u_flareType == 5){", "expV   = -(xF * xF + yF * yF) * 2.0 - 5.0 * (xF + 0.2) * (yF + 0.2) * xF * xF;", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - 0.5 * u_aF) : (1.0 - 0.5 * u_aF * exp(expV));", "}else if(u_flareType ==  6){", "theta = xF * xF + yF * yF;", "a = atan(yF, xF);", "factor = 1.0 - u_aF * 0.2 * (1.0 - theta * theta * (sin(10.0 * a)));", "}else if(u_flareType == 7){", "theta = xF * xF + yF * yF;", "a = atan(yF, xF);", "factor = 1.0 - u_aF * 0.5 * exp(-theta * 2.0) * (0.5 + 0.5 * sin(4.0 * a + 1.0));", "}else if(u_flareType == 8){", "// Unimplemented", "}else if(u_flareType == 9){", "expV = (-(xF * xF) - yF * yF / 64.0);", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}else if(u_flareType == 10){", "expV = (-(yF * yF) - xF * xF / 64.0);", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}else if(u_flareType == 11){", "theta  = xF * xF + yF * yF;", "factor = 1.0 - u_aF *exp(-(theta * theta) *2.0 + (-8.0) *(yF + 0.5) *(yF - 0.5) *(xF + 0.5) *(xF - 0.5));", "}else if(u_flareType == 12){", "theta = xF * xF + yF * yF;", "expV  = -(theta / 180.0) * 2.0 - 16.0 * (yF + 0.5) * (yF + 0.5) * (xF + 0.5) * (xF + 0.5);", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}else if(u_flareType == 13){", "theta = xF * xF + yF * yF;", "factor = 1.0 - u_aF *exp(-(theta / 180.0) *2.0) * (exp((-8.0) * (yF + 1.0) * (yF - 1.0) * (xF + 1.0) * (xF - 1.0)));", "}else if(u_flareType == 14){", "theta = (xF + 1.0) * xF + yF * yF;", "factor = u_aF * exp(yF / xF + (-theta) * exp(exp(yF) * xF));", "factor = 1.0 - u_alphaBlend * (1.0-factor);", "}else if(u_flareType == 15){", "theta = xF * xF + yF * yF;", "factor = 1.0 - u_aF *exp(-pow(theta, 2.0) + -0.9 *(yF - 1.7) *(yF + 0.5) *(xF - 1.5) *(xF + 0.5));", "}else if(u_flareType == 16){", "theta = xF * xF + yF * yF;", "a = atan(yF, xF);", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * 0.2 * (1.0 - sin(theta) * sin(10.0 * theta) * (sin(10.0 * a))));", "}else if(u_flareType == 17){", "expV = (-((yF * yF + xF * xF) * (yF * yF + xF * xF) * (yF * yF + xF * xF) * (yF * yF + xF * xF))) * 100.0;", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}else if(u_flareType == 18){", "float xF2plusyF2 = yF * yF + xF * xF;", "", "expV = (-1.0 * (xF2plusyF2) * (xF2plusyF2))*10.0;", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "}", "}", "", "void blend(inout vec4 dst, float factor)", "{", "vec4 color = vec4(0,0,0,0);", "float factorI = 1.0 - factor;", "", "if(u_blendMode == 0){", "color = u_flareColor * factor + dst * factorI;", "}else if(u_blendMode==1){", "vec4 mult = 2.0 * dst * u_flareColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - u_flareColor);", "color = factorI * dst + factor * mix(mult, screen, step(0.5, dst));", "}else if (u_blendMode==3){", "color = factorI * dst + factor * (1.0 - (1.0 - dst) * (1.0 - u_flareColor));", "}else if (u_blendMode==4){", "color = factorI * dst + factor * mix(dst, u_flareColor, step(u_flareColor, dst));", "}else if (u_blendMode==5){", "color = factorI * dst + factor * dst * u_flareColor;", "}", "", "color.a = 1.0;", "dst = color;", "}", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "", "float factor = 0.0;", "", "setFactorAndExpvForType(factor);", "", "factor = 1.0-factor;", "factor = clamp(factor,0.0,1.0);", "", "blend(color, factor);", "", "color.a = 1.0;", "gl_FragColor = color;", "}"].join("\n"),MoaFlareBlobFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 color = u_flareColor;", "", "float factor = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "float xF2plusyF2 = yF * yF + xF * xF;", "", "expV = (-((xF2plusyF2) * (xF2plusyF2) * (xF2plusyF2) * (xF2plusyF2))) * 100.0;", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "", "factor = 1.0-factor;", "", "color.a = factor;", "gl_FragColor = color;", "}"].join("\n"),MoaFlareBlobOverlayFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 color = vec4(0,0,0,0);", "", "float factor = 0.0;", "float factorI = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "float xF2plusyF2 = yF * yF + xF * xF;", "", "expV = (-((xF2plusyF2) * (xF2plusyF2) * (xF2plusyF2) * (xF2plusyF2))) * 100.0;", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "", "factorI = clamp(factor, 0.0, 1.0);", "factor = 1.0-factorI;", "", "vec4 mult = 2.0 * dst * u_flareColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - u_flareColor);", "color = factorI * dst + factor * mix(mult, screen, step(0.5, dst));", "", "color.a = 1.0;", "gl_FragColor = color;", "}"].join("\n"),MoaFlareAngleGaussianFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 color = u_flareColor;", "", "float factor = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "expV   = -(xF * xF + yF * yF) * 2.0 - 5.0 * (xF + 0.2) * (yF + 0.2) * xF * xF;", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - 0.5 * u_aF) : (1.0 - 0.5 * u_aF * exp(expV));", "factor = 1.0-factor;", "", "", "color.a = factor;", "gl_FragColor = color;", "}"].join("\n"),MoaFlareGaussianThingFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 color = u_flareColor;", "", "float factor = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "expV = (-(xF * xF + yF * yF) * 2.0 - 16.0 * (yF + 0.5) * (yF + 0.5) * (xF + 0.5) * (xF + 0.5));", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "", "", "factor = 1.0-factor;", "", "color.a = factor;", "gl_FragColor = color;", "}"].join("\n"),MoaFlareGaussianThing2FragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 color = u_flareColor;", "", "float factor = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "expV = (-(xF * xF + yF * yF) * 2.0 - 16.0 * (yF + 1.0) * (yF + 1.0) * (xF - 0.5) * (xF - 0.5));", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "", "factor = 1.0-factor;", "color.a = factor;", "", "gl_FragColor = color;", "}"].join("\n"),MoaFlareBlob2FragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 color = u_flareColor;", "", "float factor = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "float xF2plusyF2 = yF * yF + xF * xF;", "", "expV = (-1.0 * (xF2plusyF2) * (xF2plusyF2))*10.0;", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "", "factor = 1.0-factor;", "color.a = factor;", "", "gl_FragColor = color;", "}"].join("\n"),MoaFlareBlob2OverlayFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 color = vec4(0,0,0,0);", "", "float factor = 0.0;", "float factorI = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "float xF2plusyF2 = yF * yF + xF * xF;", "", "expV = (-1.0 * (xF2plusyF2) * (xF2plusyF2))*10.0;", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "", "factorI = clamp(factor, 0.0, 1.0);", "factor = 1.0-factorI;", "", "vec4 mult = 2.0 * dst * u_flareColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - u_flareColor);", "color = factorI * dst + factor * mix(mult, screen, step(0.5, dst));", "", "color.a = 1.0;", "gl_FragColor = color;", "}"].join("\n"),MoaFlareCornerflaresFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 color = u_flareColor;", "", "float factor = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "theta = xF * xF + yF * yF;", "factor = 1.0 - u_aF *exp(-(theta / 180.0) *2.0) * (exp((-8.0) * (yF + 1.0) * (yF - 1.0) * (xF + 1.0) * (xF - 1.0)));", "", "factor = 1.0-factor;", "color.a = factor;", "", "gl_FragColor = color;", "}"].join("\n"),MoaFlareCornerflaresOverlayFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 color = vec4(0,0,0,0);", "", "float factor = 0.0;", "float factorI = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "float xF2plusyF2 = yF * yF + xF * xF;", "", "theta = xF * xF + yF * yF;", "factor = 1.0 - u_aF *exp(-(theta / 180.0) *2.0) * (exp((-8.0) * (yF + 1.0) * (yF - 1.0) * (xF + 1.0) * (xF - 1.0)));", "", "factorI = clamp(factor, 0.0, 1.0);", "factor = 1.0-factorI;", "", "vec4 mult = 2.0 * dst * u_flareColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - u_flareColor);", "color = factorI * dst + factor * mix(mult, screen, step(0.5, dst));", "", "color.a = 1.0;", "gl_FragColor = color;", "}"].join("\n"),MoaFlareGaussianThing3OverlayFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "uniform highp float u_flareAmount;", "varying highp vec2 v_texCoord;", "", "uniform float u_scaleDiffx;", "uniform float u_scaleDiffy;", "uniform vec2 u_onePlusDxTimesCenterCoord;", "uniform lowp vec4 u_flareColor;", "uniform float u_minEXP;", "uniform float u_maxEXP;", "uniform float u_aF;", "", "void main(void) {", "lowp vec4 dst = texture2D(u_sampler, v_texCoord);", "lowp vec4 color = vec4(0,0,0,0);", "", "float factor = 0.0;", "float factorI = 0.0;", "", "float theta;", "float a;", "float expV = 0.0;", "", "float xF = u_scaleDiffx * (v_texCoord.x - u_onePlusDxTimesCenterCoord.x);", "float yF = u_scaleDiffy * (v_texCoord.y - u_onePlusDxTimesCenterCoord.y);", "", "float xF2plusyF2 = yF * yF + xF * xF;", "", "theta  = xF * xF + yF * yF;", "expV   = -theta * 2.0 - 1.0 * (yF + 1.7) * (yF + 1.7) * (xF - 0.6) * (xF - 0.6);", "factor = expV < u_minEXP ? 1.0 : expV > u_maxEXP ? (1.0 - u_aF) : (1.0 - u_aF * exp(expV));", "", "factorI = clamp(factor, 0.0, 1.0);", "factor = 1.0-factorI;", "", "vec4 mult = 2.0 * dst * u_flareColor;", "vec4 screen = 1.0 - 2.0 * (1.0 - dst) * (1.0 - u_flareColor);", "color = factorI * dst + factor * mix(mult, screen, step(0.5, dst));", "", "color.a = 1.0;", "gl_FragColor = color;", "}"].join("\n"),MoaRingFlareFragmentShader: ["precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_dr22;", "uniform float u_dr12;", "uniform float u_daa;", "uniform float u_avgD;", "uniform float u_bA;", "uniform float u_height;", "uniform float u_width;", "uniform float u_yCenter;", "uniform float u_xCenter;", "uniform vec4 u_color;", "", "void main(void) {", "lowp vec4 color = u_color;", "", "float y = u_height * v_texCoord.y ;", "float x = u_width * v_texCoord.x ;", "float yF = (y - u_yCenter) / u_avgD;", "float xF = (x - u_xCenter) / u_avgD;", "float theta = (xF * xF + yF * yF);", "float factor;", "if(theta > u_dr22+u_daa){", "factor = 0.0;", "}else if(theta > u_dr22){", "factor = (u_dr22+u_daa-theta)/u_daa;", "}else if(theta > u_dr12){", "factor = 1.0;", "}else if(theta > u_dr12-u_daa){", "factor = 1.0-(u_dr12-theta)/u_daa;", "}else{", "factor = 0.0;", "}", "", "factor = factor * factor * u_bA;", "", "color.a = factor;", "", "gl_FragColor = color;", "}"].join("\n"),MoaImageTransformVertexShader: ["attribute vec4 a_position;", "attribute vec2 a_texCoord;", "uniform mat4 u_transform;", "varying highp vec2 v_texCoord;", "", "void main(void) {", "v_texCoord = (vec4(a_texCoord.x, a_texCoord.y, 0.0, 1.0) * u_transform).xy;", "gl_Position = a_position;", "}"].join("\n"),MoaImageTransformFragmentShader: ["precision mediump float;", "uniform lowp sampler2D u_sampler;", "uniform float u_factor;", "varying highp vec2 v_texCoord;", "void main(void) {", "gl_FragColor = texture2D(u_sampler, v_texCoord);", "", "}"].join("\n"),MoaTwitterGrittyDotsFragmentShader: ["", "precision highp float;", "", "varying highp vec2 v_texCoord;", "", "uniform float u_width;", "uniform float u_height;", "uniform float u_alpha;", "", "int modi(int x,int y){", "return x - y * (x / y);", "}", "", "void main(void) {", "", "// get coords", "int xCoord = int(v_texCoord.x * u_width);", "int yCoord = int(v_texCoord.y * u_height);", "", "lowp vec4 color = vec4(0,0,0,0);", "", "if(modi(yCoord,2) == 0 && modi((xCoord + modi(yCoord,4)),4) == 0){", "color = vec4(1.0,1.0,1.0,u_alpha);", "}", "", "", "gl_FragColor = color;", "}"].join("\n"),MoaTwitterPhotoshopSatBWShader: ["", "precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_transitionWidth;", "uniform float u_regionWidth;", "uniform float u_weights[6];", "uniform int u_saturationMode;", "uniform float u_alpha;", "", "int modi(int x,int y){", "return x - y * (x / y);", "}", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "", "// Can't index uniform arrays with non constant integral expressions....ugh", "float weights[6];", "weights[0] = u_weights[0];", "weights[1] = u_weights[1];", "weights[2] = u_weights[2];", "weights[3] = u_weights[3];", "weights[4] = u_weights[4];", "weights[5] = u_weights[5];", "", "", "// Get Color Components", "", "float components[6];", "", "components[0] = color.r;", "components[2] = color.g;", "components[4] = color.b;", "components[1] = (color.r + color.g) / 2.0;", "components[3] = (color.g + color.b) / 2.0;", "components[5] = (color.r + color.b) / 2.0;", "", "// Get H,S,V colors", "float r;", "float g;", "float b;", "float delta;", "float hue;", "float maxColor;", "float minColor;", "", "r = color.r;", "g = color.g;", "b = color.b;", "", "maxColor = max(max(r,g), b);", "minColor = min(min(r,g), b);", "", "delta = maxColor - minColor;", "", "if(maxColor == 0.0 || delta == 0.0){", "hue = 0.0;", "}else{", "if( r == maxColor ){", "hue = ( g - b ) / delta;		// between yellow & magenta", "}else if( g == maxColor ){", "hue = 2.0 + ( b - r ) / delta;	// between cyan & yellow", "}else{", "hue = 4.0 + ( r - g ) / delta;	// between magenta & cyan", "}", "", "hue *= 60.0;				// degrees", "if( hue < 0.0 ){", "hue += 360.0;", "}", "}", "", "// End hue", "", "float v;", "int hex;", "float start;", "float end;", "float w1;", "float w2;", "float w3;", "float weight;", "", "hex = modi(int(((hue + 30.0) / 60.0)), 6);", "v = 0.0;", "", "", "w1 = 0.0; w3 = 0.0;", "if(hex == 0){", "start = 330.0;", "end = 30.0;", "", "if(hue > end && hue < start + u_transitionWidth){", "w1 = 0.5*(start + u_transitionWidth - hue) / u_transitionWidth;", "}else if(hue < start && hue > end - u_transitionWidth){", "w3 = 0.5*(hue - (end - u_transitionWidth)) / u_transitionWidth;", "}", "", "}else{", "start = float(hex) * u_regionWidth - u_regionWidth/2.0;", "end   = start + u_regionWidth;", "", "if(hue < start + u_transitionWidth){", "w1 = 0.5*(start + u_transitionWidth - hue) / u_transitionWidth;", "}else if(hue > end - u_transitionWidth){", "w3 = 0.5*(hue - (end - u_transitionWidth)) / u_transitionWidth;", "}", "}", "", "w2 = 1.0 - w1 - w3;", "", "int hex5Mod = modi(hex+5,6);", "int hexMod = modi(hex,6);", "int hex1Mod = modi(hex+1,6);", "", "", "weight = 	weights[hex5Mod]*w1 +", "weights[hexMod]*w2 +", "weights[hex1Mod]*w3;", "", "v = 		weights[hex5Mod]*w1*components[hex5Mod] +", "weights[hexMod]*w2*components[hexMod] +", "weights[hex1Mod]*w3*components[hex1Mod];", "", "v += (1.0-weight) * min(min(r,g),b);", "", "if(u_saturationMode==0){", "weight = -1.0;", "}else{", "//Lower weight low brightness pixels", "weight *= pow(v,0.3);", "}", "", "r = (0.0-weight)*v + (weight+1.0)*r;", "g = (0.0-weight)*v + (weight+1.0)*g;", "b = (0.0-weight)*v + (weight+1.0)*b;", "", "color.r = mix(color.r, r, u_alpha);", "color.g = mix(color.g, g, u_alpha);", "color.b = mix(color.b, b, u_alpha);", "", "gl_FragColor = color;", "}", ""].join("\n"),MoaTwitterPhotoshopSatBWOverlayShader: ["", "precision highp float;", "", "uniform lowp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform float u_transitionWidth;", "uniform float u_regionWidth;", "uniform float u_weights[6];", "uniform int u_saturationMode;", "uniform float u_alpha;", "", "int modi(int x,int y){", "return x - y * (x / y);", "}", "", "void main(void) {", "lowp vec4 color = texture2D(u_sampler, v_texCoord);", "", "// Can't index uniform arrays with non constant integral expressions....ugh", "float weights[6];", "weights[0] = u_weights[0];", "weights[1] = u_weights[1];", "weights[2] = u_weights[2];", "weights[3] = u_weights[3];", "weights[4] = u_weights[4];", "weights[5] = u_weights[5];", "", "", "// Get Color Components", "", "float components[6];", "", "components[0] = color.r;", "components[2] = color.g;", "components[4] = color.b;", "components[1] = (color.r + color.g) / 2.0;", "components[3] = (color.g + color.b) / 2.0;", "components[5] = (color.r + color.b) / 2.0;", "", "// Get H,S,V colors", "float r;", "float g;", "float b;", "float delta;", "float hue;", "float maxColor;", "float minColor;", "", "r = color.r;", "g = color.g;", "b = color.b;", "", "maxColor = max(max(r,g), b);", "minColor = min(min(r,g), b);", "", "delta = maxColor - minColor;", "", "if(maxColor == 0.0 || delta == 0.0){", "hue = 0.0;", "}else{", "if( r == maxColor ){", "hue = ( g - b ) / delta;		// between yellow & magenta", "}else if( g == maxColor ){", "hue = 2.0 + ( b - r ) / delta;	// between cyan & yellow", "}else{", "hue = 4.0 + ( r - g ) / delta;	// between magenta & cyan", "}", "", "hue *= 60.0;				// degrees", "if( hue < 0.0 ){", "hue += 360.0;", "}", "}", "", "// End hue", "", "float v;", "int hex;", "float start;", "float end;", "float w1;", "float w2;", "float w3;", "float weight;", "", "hex = modi(int(((hue + 30.0) / 60.0)), 6);", "v = 0.0;", "", "", "w1 = 0.0; w3 = 0.0;", "if(hex == 0){", "start = 330.0;", "end = 30.0;", "", "if(hue > end && hue < start + u_transitionWidth){", "w1 = 0.5*(start + u_transitionWidth - hue) / u_transitionWidth;", "}else if(hue < start && hue > end - u_transitionWidth){", "w3 = 0.5*(hue - (end - u_transitionWidth)) / u_transitionWidth;", "}", "", "}else{", "start = float(hex) * u_regionWidth - u_regionWidth/2.0;", "end   = start + u_regionWidth;", "", "if(hue < start + u_transitionWidth){", "w1 = 0.5*(start + u_transitionWidth - hue) / u_transitionWidth;", "}else if(hue > end - u_transitionWidth){", "w3 = 0.5*(hue - (end - u_transitionWidth)) / u_transitionWidth;", "}", "}", "", "w2 = 1.0 - w1 - w3;", "", "int hex5Mod = modi(hex+5,6);", "int hexMod = modi(hex,6);", "int hex1Mod = modi(hex+1,6);", "", "", "weight = 	weights[hex5Mod]*w1 +", "weights[hexMod]*w2 +", "weights[hex1Mod]*w3;", "", "v = 		weights[hex5Mod]*w1*components[hex5Mod] +", "weights[hexMod]*w2*components[hexMod] +", "weights[hex1Mod]*w3*components[hex1Mod];", "", "v += (1.0-weight) * min(min(r,g),b);", "", "if(u_saturationMode==0){", "weight = -1.0;", "}else{", "//Lower weight low brightness pixels", "weight *= pow(v,0.3);", "}", "", "r = (0.0-weight)*v + (weight+1.0)*r;", "g = (0.0-weight)*v + (weight+1.0)*g;", "b = (0.0-weight)*v + (weight+1.0)*b;", "", "float factor = clamp(u_alpha, 0.0, 1.0);", "float factorI = 1.0-factor;", "", "if (color.r <= 0.5) {", "color.r = factorI * color.r + factor * 2.0 * color.r * r;", "} else {", "color.r = factorI * color.r + factor * (1.0 - (1.0 - color.r) * (1.0 - r) / 0.5);", "}", "if (color.g <= 0.5) {", "color.g = factorI * color.g + factor * 2.0 * color.g * g;", "} else {", "color.g = factorI * color.g + factor * (1.0 - (1.0 - color.g) * (1.0 - g) / 0.5);", "}", "if (color.b <= 0.5) {", "color.b = factorI * color.b + factor * 2.0 * color.b * b;", "} else {", "color.b = factorI * color.b + factor * (1.0 - (1.0 - color.b) * (1.0 - b) / 0.5);", "}", "", "", "gl_FragColor = color;", "}", ""].join("\n"),MoaTwitterClarityFragmentShader: ["precision highp float;", "", "uniform highp sampler2D u_sampler;", "varying highp vec2 v_texCoord;", "", "uniform highp sampler2D u_avgImgSampler;", "uniform highp sampler2D u_effectedAvgImgSampler;", "uniform float u_gain;", "uniform float u_sharpenAmount;", "", "const float lowestColorVal = 1.0/255.0;", "", "void main(void) {", "highp vec4 color = texture2D(u_sampler, v_texCoord);", "", "// Might want to encode these into floats;", "float avgGray = texture2D(u_avgImgSampler, v_texCoord).r;", "float avgHistGray = texture2D(u_effectedAvgImgSampler, v_texCoord).r;", "", "// Get factor and diff", "float factor = avgHistGray / clamp(avgGray, lowestColorVal, 1.0);", "float diff = avgHistGray - avgGray;", "", "// Do wonderful things to the color.", "float sharpenedVal = u_sharpenAmount * ((0.2 * color.r + 0.7 * color.g + 0.1 * color.b) - avgGray);", "", "color.rgb += sharpenedVal;", "", "//#if !TEST_GRAY", "color = color * (factor * u_gain) + (1.0 - u_gain) * (color + diff);", "//                                                         color.r = (color.r*factor)*u_gain + (1.0-u_gain)*(color.r+diff);", "//                                                         color.g = (color.g*factor)*u_gain + (1.0-u_gain)*(color.g+diff);", "//                                                         color.b = (color.b*factor)*u_gain + (1.0-u_gain)*(color.b+diff);", "//#else", "//                                                         color.r = avgGray;", "//                                                         color.g = avgGray;", "//                                                         color.b = avgGray;", "//#endif", "//                                                         color.a = 1.0;", "", "", "gl_FragColor = color;", "}"].join("\n"),MoaShapeMaskFragmentShader: ["", "precision highp float;", "", "vec3 mod289(vec3 x) {", "return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec2 mod289(vec2 x) {", "return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec3 permute(vec3 x) {", "return mod289(((x*34.0)+1.0)*x);", "}", "", "float snoise(vec2 v)", "{", "const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0", "0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)", "-0.577350269189626,  // -1.0 + 2.0 * C.x", "0.024390243902439); // 1.0 / 41.0", "", "// First corner", "vec2 i  = floor(v + dot(v, C.yy) );", "vec2 x0 = v -   i + dot(i, C.xx);", "", "// Other corners", "vec2 i1;", "//i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0", "//i1.y = 1.0 - i1.x;", "i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);", "// x0 = x0 - 0.0 + 0.0 * C.xx ;", "// x1 = x0 - i1 + 1.0 * C.xx ;", "// x2 = x0 - 1.0 + 2.0 * C.xx ;", "vec4 x12 = x0.xyxy + C.xxzz;", "x12.xy -= i1;", "", "// Permutations", "i = mod289(i); // Avoid truncation effects in permutation", "vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))", "+ i.x + vec3(0.0, i1.x, 1.0 ));", "", "vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);", "m = m*m ;", "m = m*m ;", "", "// Gradients: 41 points uniformly over a line, mapped onto a diamond.", "// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)", "", "vec3 x = 2.0 * fract(p * C.www) - 1.0;", "vec3 h = abs(x) - 0.5;", "vec3 ox = floor(x + 0.5);", "vec3 a0 = x - ox;", "", "// Normalise gradients implicitly by scaling m", "// Approximation of: m *= inversesqrt( a0*a0 + h*h );", "m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );", "", "// Compute final noise value at P", "vec3 g;", "g.x  = a0.x  * x0.x  + h.x  * x0.y;", "g.yz = a0.yz * x12.xz + h.yz * x12.yw;", "return 130.0 * dot(m, g);", "}", "", "// Cellular noise, returning F1 and F2 in a vec2.", "// Standard 3x3 search window for good F1 and F2 values", "vec2 cellular(vec2 P) {", "#define K 0.142857142857 // 1/7", "#define Ko 0.428571428571 // 3/7", "#define jitter 1.0 // Less gives more regular pattern", "vec2 Pi = mod(floor(P), 289.0);", "vec2 Pf = fract(P);", "vec3 oi = vec3(-1.0, 0.0, 1.0);", "vec3 of = vec3(-0.5, 0.5, 1.5);", "vec3 px = permute(Pi.x + oi);", "vec3 p = permute(px.x + Pi.y + oi); // p11, p12, p13", "vec3 ox = fract(p*K) - Ko;", "vec3 oy = mod(floor(p*K),7.0)*K - Ko;", "vec3 dx = Pf.x + 0.5 + jitter*ox;", "vec3 dy = Pf.y - of + jitter*oy;", "vec3 d1 = dx * dx + dy * dy; // d11, d12 and d13, squared", "p = permute(px.y + Pi.y + oi); // p21, p22, p23", "ox = fract(p*K) - Ko;", "oy = mod(floor(p*K),7.0)*K - Ko;", "dx = Pf.x - 0.5 + jitter*ox;", "dy = Pf.y - of + jitter*oy;", "vec3 d2 = dx * dx + dy * dy; // d21, d22 and d23, squared", "p = permute(px.z + Pi.y + oi); // p31, p32, p33", "ox = fract(p*K) - Ko;", "oy = mod(floor(p*K),7.0)*K - Ko;", "dx = Pf.x - 1.5 + jitter*ox;", "dy = Pf.y - of + jitter*oy;", "vec3 d3 = dx * dx + dy * dy; // d31, d32 and d33, squared", "// Sort out the two smallest distances (F1, F2)", "vec3 d1a = min(d1, d2);", "d2 = max(d1, d2); // Swap to keep candidates for F2", "d2 = min(d2, d3); // neither F1 nor F2 are now in d3", "d1 = min(d1a, d2); // F1 is now in d1", "d2 = max(d1a, d2); // Swap to keep candidates for F2", "d1.xy = (d1.x < d1.y) ? d1.xy : d1.yx; // Swap if smaller", "d1.xz = (d1.x < d1.z) ? d1.xz : d1.zx; // F1 is in d1.x", "d1.yz = min(d1.yz, d2.yz); // F2 is now not in d2.yz", "d1.y = min(d1.y, d1.z); // nor in  d1.z", "d1.y = min(d1.y, d2.x); // F2 is in d1.y, we're done.", "return sqrt(d1.xy);", "}", "", "float noiseMultiscale(vec2 v_texCoord, float octaves, float seed){", "", "float scale = 1.0;", "float scaleinv = 1.0;", "float sumNoise = 0.0;", "float noise;", "", "for(int i = 0; i < 6; i++){", "noise = snoise((2.0*(v_texCoord+seed+5.0)-1.0)*scale);", "sumNoise += noise*scaleinv;", "scale *= 2.0;", "scaleinv *= 0.5;", "seed += 137.0;", "}", "", "return sumNoise*0.5;", "}", "", "float noiseMultiscaleAbs(vec2 v_texCoord, float octaves, float seed){", "", "float scale = 1.0;", "float scaleinv = 1.0;", "float sumNoise = 0.0;", "float noise;", "", "for(int i = 0; i < 6; i++){", "noise = snoise((2.0*(v_texCoord+seed+5.0)-1.0)*scale);", "sumNoise += abs(noise*scaleinv);", "scale *= 2.0;", "scaleinv *= 0.5;", "seed += 137.0;", "}", "", "return sumNoise*0.5;", "}", "// our texture", "uniform sampler2D u_gradientMap;", "uniform sampler2D u_sampler;", "uniform int u_compositeMode;", "uniform int u_noiseType;", "uniform int u_aspectMode;", "", "uniform int u_invert; //TODO change to bool", "uniform int u_maskOnly; //TODO change to bool", "", "uniform mat4 u_params;", "uniform mat4 u_transform;", "", "uniform float u_width;", "uniform float u_height;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "float cellPaintNoise(vec2 coords){", "vec2 F = cellular(coords);", "float noise = noiseMultiscale(F, 5.0, 123.0);", "noise = noise*0.5+0.5; //convert to [0,1]", "", "return noise;", "}", "", "float perlinNoise(vec2 coords){", "float noise = noiseMultiscale(coords, 5.0, 123.0);", "noise = noise*0.5+0.5; //convert to [0,1]", "", "return noise;", "}", "", "float perlinNoiseAbs(vec2 coords){", "float noise = noiseMultiscaleAbs(coords, 5.0, 123.0);", "// noise = noise*0.5+0.5; //convert to [0,1]", "", "return noise;", "}", "", "float marbleNoise(vec2 coords){", "", "float xyValue = coords.x + coords.y + noiseMultiscale(coords, 5.0, 123.0);", "float noise = abs(sin(xyValue * 3.14159));", "", "return noise;", "}", "", "void main() {", "", "vec2 texCoordsTmp = v_texCoord;", "", "if(u_aspectMode == 0){", "//Nothing, alread in stretch mode implicitly", "}else if(u_aspectMode == 1){", "float avgD = (u_width+u_height)/2.0;", "", "texCoordsTmp -= 0.5;", "texCoordsTmp.x *= u_width / avgD;", "texCoordsTmp.y *= u_height / avgD;", "texCoordsTmp += 0.5;", "", "}else if(u_aspectMode == 3){", "float maxD = max(u_width,u_height);", "", "texCoordsTmp -= 0.5;", "texCoordsTmp.x *= u_width / maxD;", "texCoordsTmp.y *= u_height / maxD;", "texCoordsTmp += 0.5;", "", "}else if(u_aspectMode == 2){", "float minD = min(u_width,u_height);", "", "texCoordsTmp -= 0.5;", "texCoordsTmp.x *= u_width / minD;", "texCoordsTmp.y *= u_height / minD;", "texCoordsTmp += 0.5;", "}", "", "vec4 transformed = (vec4(texCoordsTmp,0.0,1.0) * u_transform);", "", "//TODO: figure out 3d projection", "//vec2 transformedSpace = transformed.xy;// / (transformed.z/1.0+1.0);", "vec2 coords = (transformed.xy-0.5);", "", "float noise = 0.0;", "", "if(u_noiseType == 0){", "noise = perlinNoise(coords);", "}else if(u_noiseType == 1){", "vec2 F = cellular(coords);", "noise = u_params[0].z * dot(u_params[0].xy,F) / (u_params[0].x+u_params[0].y);", "}else if(u_noiseType == 2){", "noise = cellPaintNoise(coords);", "}else if(u_noiseType == 3){", "noise = marbleNoise(coords);", "}else if(u_noiseType == 4){", "noise = perlinNoiseAbs(coords);", "}else if(u_noiseType == 5){", "noise = 0.0;", "}else if(u_noiseType == 6){", "noise = 0.5+0.5*sin(coords.x+coords.y);", "}else if(u_noiseType == 7){", "noise = 0.5+0.5*sin(coords.x+2.0*(u_params[0].x)*sin(coords.y));", "}else if(u_noiseType == 8){", "noise = 0.5 + 0.5*coords.x;", "}else if(u_noiseType == 9){", "// noise = pow(abs(cos(sqrt(pow(coords.x,2.0)+pow(coords.y,2.0)))),4.0);", "", "float metric = u_params[0].x;", "noise = pow(pow(abs(coords.x),metric)+pow(abs(coords.y),metric),1.0/metric);", "}else if(u_noiseType == 10){", "// noise = pow(abs(cos(sqrt(pow(coords.x,2.0)+pow(coords.y,2.0)))),4.0);", "", "float metric = u_params[0].x;", "float x = pow(abs(pow(coords.x,metric))+abs(pow(coords.y,metric)),1.0/metric);", "", "if(x == 0.0){", "noise = 1.0;", "}else{", "noise = (cos(x)/x);", "}", "}else if(u_noiseType == 11){", "float xF = coords.x;", "float yF = coords.y;", "float expV   = (u_params[0].x*((yF-u_params[0].z)*(yF-u_params[0].z)+(xF-u_params[0].w)*(xF-u_params[0].w))+u_params[0].y*(yF-u_params[1].x)*(yF-u_params[1].x)*(xF-u_params[1].y)*(xF-u_params[1].y));", "// float expV   = (-(xF*xF+yF*yF)*2.0-16.0*(yF+1.0)*(yF+1.0)*(xF-0.5)*(xF-0.5));", "noise = exp(expV);", "}", "//else if(u_noiseType == 12){", "//   float x = 0.0;", "//   float y = 0.0;", "", "//   const float max_iteration = 200.0;", "//   float iterationF = 0.0;", "", "//   for(float iteration = 0.0; iteration < max_iteration; iteration+=1.0){", "//     if(x*x + y*y >= 2.0*2.0 || iteration > u_params[0].x){", "//       break;", "//     }else{", "//       iterationF = iteration;", "//     }", "", "//     float xtemp = x*x - y*y + coords.x;", "//     y = 2.0*x*y + coords.y;", "", "//     x = xtemp;", "//   }", "", "//   noise = (coords.x+coords.y)*iterationF / max_iteration;", "", "// }else if(u_noiseType == 13){", "//   float x = coords.x;", "//   float y = coords.y;", "", "//   float x2 = x*x;", "//   float y2 = y*y;", "", "//   const float max_iteration = 200.0;", "//   float iterationF = 0.0;", "", "//   for(float iteration = 0.0; iteration < max_iteration; iteration+=1.0){", "//     if(x2 + y2 >= 2.0*2.0 || iteration > u_params[0].x){break;}else{iterationF = iteration;}", "", "//     y = 2.0*x*y + u_params[0].y;", "//     x = x2 - y2 + u_params[0].z;", "", "//     x2 = x*x;", "//     y2 = y*y;", "//   }", "", "//   noise = iterationF / u_params[0].x;", "// }", "else if(u_noiseType == 14){", "noise = 1.0;", "}", "", "noise = clamp(noise,0.0,1.0);", "", "vec4 dst = vec4(1.0);", "if(u_maskOnly == 1){", "noise = texture2D(u_gradientMap, vec2(0,noise)).a;", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "dst.a = floor(noise*255.0)/255.0; //[0,1]  8 most significant bits", "dst.b = fract(noise*255.0); //[0,1) remainder", "}else{", "float alphaMask = texture2D(u_sampler, v_texCoord).a;", "", "if(u_invert == 1){", "noise = 1.0 - noise;", "}", "", "dst = texture2D(u_gradientMap, vec2(0,noise));", "dst.a *= alphaMask; //Assumes previous was mask only", "}", "", "", "gl_FragColor = dst;//blendColor*src.a + dst*(1.0-src.a);", "", "}", "", ""].join("\n"),MoaDisplayTransparencyFragmentShader: ["", "precision mediump float;", "", "uniform sampler2D u_sampler;", "uniform vec2 u_textureSize;", "", "varying vec2 v_texCoord;", "", "void main() {", "", "vec4 src = texture2D(u_sampler, v_texCoord);", "", "vec4 bg = vec4(0.0,0.0,0.0,1.0);", "", "if(mod(floor(v_texCoord.x * 100.0) + floor(v_texCoord.y * 100.0), 2.0) > 0.5){", "bg = vec4(1.0);", "}", "", "//Get rid of alpha in blue channel", "", "// float alpha = fract(src.b*64.0)/255.0 + src.a;", "", "float alpha = mod(floor(src.b*255.0+0.5),4.0)/4.0/255.0 + src.a;", "", "src.b = floor(floor(src.b*255.0*4.0+0.5))/4.0/255.0;", "", "vec4 displayColor = alpha*src+(1.0-alpha)*bg;", "", "gl_FragColor = vec4(displayColor.rgb,1.0);", "}", "", ""].join("\n"),MoaOldGradientMapFragmentShader: ["", "precision highp float;", "", "uniform highp sampler2D u_sampler;", "uniform highp sampler2D u_gradientMap;", "", "varying vec2 v_texCoord;", "", "void main() {", "", "vec4 src = texture2D(u_sampler, v_texCoord);", "", "float sample = mod(floor(src.b*255.0+0.5),4.0)/4.0/255.0 + src.a;", "", "vec4 dst = texture2D(u_gradientMap,vec2(0.0,sample));", "", "gl_FragColor = vec4(dst.rgb,dst.a);", "}", ""].join("\n")}, p = function(e, t, o) {
                var r = v(e, o.VERTEX_SHADER, o), a = v(t, o.FRAGMENT_SHADER, o), i = o.createProgram();
                return o.attachShader(i, r), o.attachShader(i, a), o.linkProgram(i), !o.getProgramParameter(i, o.LINK_STATUS), o.deleteShader(r), o.deleteShader(a), i
            }, v = function(e, t, o) {
                var r = o.createShader(t);
                return o.shaderSource(r, e), o.compileShader(r), !o.getShaderParameter(r, o.COMPILE_STATUS), r
            }, _ = function(e, t) {
                t.useProgram(e, t), ot(e, t)
            }, x = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.brightnessSlot = t.getUniformLocation(e, "u_brightness"), e.contrastSlot = t.getUniformLocation(e, "u_contrast"), e.saturationSlot = t.getUniformLocation(e, "u_saturation"), e.warmthSlot = t.getUniformLocation(e, "u_warmth"), e.warmthDeltaSlot = t.getUniformLocation(e, "u_warmthDelta"), e.contrastExpSlot = t.getUniformLocation(e, "u_contrastExp"), e.contrastLessThanZeroSlot = t.getUniformLocation(e, "u_contrastLessThanZero"), e.contrastSatAdjustSlot = t.getUniformLocation(e, "u_contrastSatAdjust"), e.cMapSlot = t.getUniformLocation(e, "u_cMap"), e.saturationMatrixSlot = t.getUniformLocation(e, "u_saturationMatrix")
            }, y = function(e, t) {
                t.useProgram(e, t), e.colorMatSlot = t.getUniformLocation(e, "u_colorMat"), e.colorTransSlot = t.getUniformLocation(e, "u_colorTrans"), ot(e, t)
            }, M = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.colorMapSamplerSlot = t.getUniformLocation(e, "u_colorMapSampler"), e.colorMapAmountSlot = t.getUniformLocation(e, "u_colorMapAmount")
            }, C = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.scaleDiffxSlot = t.getUniformLocation(e, "u_scaleDiffx"), e.scaleDiffySlot = t.getUniformLocation(e, "u_scaleDiffy"), e.onePlusDxTimesCenterCoordSlot = t.getUniformLocation(e, "u_onePlusDxTimesCenterCoord"), e.flareColorSlot = t.getUniformLocation(e, "u_flareColor"), e.minEXPSlot = t.getUniformLocation(e, "u_minEXP"), e.maxEXPSlot = t.getUniformLocation(e, "u_maxEXP"), e.aFSlot = t.getUniformLocation(e, "u_aF"), e.flareAmountSlot = t.getUniformLocation(e, "u_flareAmount"), e.flareTypeSlot = t.getUniformLocation(e, "u_flareType"), e.blendModeSlot = t.getUniformLocation(e, "u_blendMode")
            }, w = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.srcSamplerSlot = t.getUniformLocation(e, "u_srcSampler"), e.srcAmountSlot = t.getUniformLocation(e, "u_srcAmount"), e.dstAmountSlot = t.getUniformLocation(e, "u_dstAmount")
            }, b = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.srcSamplerSlot = t.getUniformLocation(e, "u_srcSampler"), e.factorSlot = t.getUniformLocation(e, "u_factor")
            }, D = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.widthSlot = t.getUniformLocation(e, "u_width"), e.heightSlot = t.getUniformLocation(e, "u_height"), e.vignetteScaleSlot = t.getUniformLocation(e, "u_vignetteScale"), e.vignetteColorSlot = t.getUniformLocation(e, "u_vignetteColor"), e.blendModeSlot = t.getUniformLocation(e, "u_blend"), e.dx_2Slot = t.getUniformLocation(e, "u_dx_2"), e.dy_2Slot = t.getUniformLocation(e, "u_dy_2"), e.shouldStrecthSlot = t.getUniformLocation(e, "u_shouldStretch"), e.shapeModeSlot = t.getUniformLocation(e, "u_shapeMode")
            }, S = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.dwSlot = t.getUniformLocation(e, "u_dw"), e.rFactorSlot = t.getUniformLocation(e, "u_rFactor"), e.widthSlot = t.getUniformLocation(e, "u_width"), e.heightSlot = t.getUniformLocation(e, "u_height"), e.borderStyleSlot = t.getUniformLocation(e, "u_borderStyle"), e.borderColorSlot = t.getUniformLocation(e, "u_borderColor"), e.linesScaleSlot = t.getUniformLocation(e, "u_linesScale"), e.dotScaleSlot = t.getUniformLocation(e, "u_dotScale"), e.offsetLSlot = t.getUniformLocation(e, "u_offsetL"), e.offsetRSlot = t.getUniformLocation(e, "u_offsetR"), e.offsetTSlot = t.getUniformLocation(e, "u_offsetT"), e.offsetBSlot = t.getUniformLocation(e, "u_offsetB"), e.offsetXSlot = t.getUniformLocation(e, "u_offsetX"), e.offsetYSlot = t.getUniformLocation(e, "u_offsetY")
            }, P = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.positionSlot = t.getAttribLocation(e, "a_position"), e.pointSizeSlot = t.getUniformLocation(e, "u_pointSize"), e.dotSamplerSlot = t.getUniformLocation(e, "u_dotSampler")
            }, T = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.positionSlot = t.getAttribLocation(e, "a_position"), e.pointSizeSlot = t.getAttribLocation(e, "a_pointSize"), e.dotSamplerSlot = t.getUniformLocation(e, "u_dotSampler")
            }, E = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.dr22Slot = t.getUniformLocation(e, "u_dr22"), e.dr12Slot = t.getUniformLocation(e, "u_dr12"), e.daaSlot = t.getUniformLocation(e, "u_daa"), e.avgDSlot = t.getUniformLocation(e, "u_avgD"), e.bASlot = t.getUniformLocation(e, "u_bA"), e.heightSlot = t.getUniformLocation(e, "u_height"), e.widthSlot = t.getUniformLocation(e, "u_width"), e.yCenterSlot = t.getUniformLocation(e, "u_yCenter"), e.xCenterSlot = t.getUniformLocation(e, "u_xCenter"), e.colorSlot = t.getUniformLocation(e, "u_color")
            }, F = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.positionSlot = t.getAttribLocation(e, "a_position"), e.imagePosSlot = t.getAttribLocation(e, "a_imagePos"), e.nHatxSlot = t.getUniformLocation(e, "u_nHatx"), e.nHatySlot = t.getUniformLocation(e, "u_nHaty"), e.x1Slot = t.getUniformLocation(e, "u_x1"), e.y1Slot = t.getUniformLocation(e, "u_y1"), e.x2Slot = t.getUniformLocation(e, "u_x2"), e.y2Slot = t.getUniformLocation(e, "u_y2"), e.rSlot = t.getUniformLocation(e, "u_r"), e.r2Slot = t.getUniformLocation(e, "u_r2"), e.dAASlot = t.getUniformLocation(e, "u_dAA"), e.bASlot = t.getUniformLocation(e, "u_bA"), e.r2AASlot = t.getUniformLocation(e, "u_r2AA"), e.colorSlot = t.getUniformLocation(e, "u_color"), e.vLength2Slot = t.getUniformLocation(e, "u_vLength2")
            }, L = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.randomSeedSlot = t.getUniformLocation(e, "u_randomSeed"), e.intensitySlot = t.getUniformLocation(e, "u_intensity")
            }, A = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.linesSamplerSlot = t.getUniformLocation(e, "u_linesSampler"), e.heightSlot = t.getUniformLocation(e, "u_height"), e.widthSlot = t.getUniformLocation(e, "u_width"), e.widthTexCoordMultSlot = t.getUniformLocation(e, "u_widthTexCoordMult"), e.heightTexCoordMultSlot = t.getUniformLocation(e, "u_heightTexCoordMult"), e.h2Slot = t.getUniformLocation(e, "u_h2"), e.w2Slot = t.getUniformLocation(e, "u_w2"), e.offsetSlot = t.getUniformLocation(e, "u_offset"), e.dwSlot = t.getUniformLocation(e, "u_dw"), e.colorSlot = t.getUniformLocation(e, "u_color"), e.scaleSlot = t.getUniformLocation(e, "u_scale"), e.floatMultSlot = t.getUniformLocation(e, "u_floatMult"), e.floatTransSlot = t.getUniformLocation(e, "u_floatTrans"), e.randomSeedSlot = t.getUniformLocation(e, "u_randomSeed")
            }, R = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.mapFactorSamplerSlot = t.getUniformLocation(e, "u_mapFactorSampler"), e.gainSlot = t.getUniformLocation(e, "u_gain"), e.rScaleSlot = t.getUniformLocation(e, "u_rScale"), e.gScaleSlot = t.getUniformLocation(e, "u_gScale"), e.bScaleSlot = t.getUniformLocation(e, "u_bScale"), e.rMinSlot = t.getUniformLocation(e, "u_rMin"), e.gMinSlot = t.getUniformLocation(e, "u_gMin"), e.bMinSlot = t.getUniformLocation(e, "u_bMin"), e.floatMultSlot = t.getUniformLocation(e, "u_floatMult"), e.floatTransSlot = t.getUniformLocation(e, "u_floatTrans")
            }, I = function(e, t) {
                t.useProgram(e, t), ot(e, t)
            }, O = function(e, t) {
                t.useProgram(e, t), e.scaleASlot = t.getUniformLocation(e, "u_scaleA"), e.scaleBSlot = t.getUniformLocation(e, "u_scaleB"), ot(e, t)
            }, B = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.maskSamplerSlot = t.getUniformLocation(e, "u_maskSampler")
            }, N = function(e, t) {
                t.useProgram(e, t), ot(e, t)
            }, U = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.colorMatSlot = t.getUniformLocation(e, "u_colorMat"), e.colorTransSlot = t.getUniformLocation(e, "u_colorTrans"), e.colorTransformAmountSlot = t.getUniformLocation(e, "u_colorTransformAmount"), e.overlayAmountSlot = t.getUniformLocation(e, "u_overlayAmount")
            }, k = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.avgImgSamplerSlot = t.getUniformLocation(e, "u_avgImgSampler"), e.effectedAvgImgSamplerSlot = t.getUniformLocation(e, "u_effectedAvgImgSampler"), e.gainSlot = t.getUniformLocation(e, "u_gain"), e.sharpenAmountSlot = t.getUniformLocation(e, "u_sharpenAmount")
            }, j = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.colorMapSamplerSlot = t.getUniformLocation(e, "u_colorMapSampler"), e.colorMapAmountSlot = t.getUniformLocation(e, "u_colorMapAmount"), e.intensitySlot = t.getUniformLocation(e, "u_intensity")
            }, G = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.blendColorSlot = t.getUniformLocation(e, "u_blendColor"), e.blendAmountSlot = t.getUniformLocation(e, "u_blendAmount"), e.blendColorAlphaSlot = t.getUniformLocation(e, "u_blendColorAlpha")
            }, X = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.widthSlot = t.getUniformLocation(e, "u_width"), e.heightSlot = t.getUniformLocation(e, "u_height"), e.scaleSlot = t.getUniformLocation(e, "u_scale"), e.xCenterSlot = t.getUniformLocation(e, "u_xCenter"), e.yCenterSlot = t.getUniformLocation(e, "u_yCenter"), e.dx_2Slot = t.getUniformLocation(e, "u_dx_2"), e.dy_2Slot = t.getUniformLocation(e, "u_dy_2"), e.denomISlot = t.getUniformLocation(e, "u_denomI"), e.alphaBlendSlot = t.getUniformLocation(e, "u_alphaBlend"), e.vignetteShapeSlot = t.getUniformLocation(e, "u_vignetteShape"), e.shapeModeSlot = t.getUniformLocation(e, "u_shapeMode"), e.angleCosSlot = t.getUniformLocation(e, "u_angleCos"), e.angleSinSlot = t.getUniformLocation(e, "u_angleSin"), e.gradientMapSlot = t.getUniformLocation(e, "u_gradientMap")
            }, W = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.centerPointSlot = t.getUniformLocation(e, "u_centerPoint"), e.sigmaR2Slot = t.getUniformLocation(e, "u_sigmaR2"), e.widthSlot = t.getUniformLocation(e, "u_width"), e.heightSlot = t.getUniformLocation(e, "u_height"), e.normXSlot = t.getUniformLocation(e, "u_normX"), e.normYSlot = t.getUniformLocation(e, "u_normY")
            }, V = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.centerPointSlot = t.getUniformLocation(e, "u_centerPoint"), e.sigmaR2Slot = t.getUniformLocation(e, "u_sigmaR2"), e.widthSlot = t.getUniformLocation(e, "u_width"), e.heightSlot = t.getUniformLocation(e, "u_height")
            }, z = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.maskSamplerSlot = t.getUniformLocation(e, "u_maskSampler"), e.sourceSamplerSlot = t.getUniformLocation(e, "u_sourceSampler")
            }, Y = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.positionSlot = t.getAttribLocation(e, "a_position"), e.pointSizeSlot = t.getUniformLocation(e, "u_pointSize"), e.radiusSlot = t.getUniformLocation(e, "u_radius"), e.widthSlot = t.getUniformLocation(e, "u_width"), e.heightSlot = t.getUniformLocation(e, "u_height"), e.alphaSlot = t.getUniformLocation(e, "u_alpha"), e.dEdgeSlot = t.getUniformLocation(e, "u_dEdge")
            }, H = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.positionSlot = t.getAttribLocation(e, "a_position"), e.pointSizeSlot = t.getUniformLocation(e, "u_pointSize"), e.radiusSlot = t.getUniformLocation(e, "u_radius"), e.widthSlot = t.getUniformLocation(e, "u_width"), e.heightSlot = t.getUniformLocation(e, "u_height"), e.alphaSlot = t.getUniformLocation(e, "u_alpha"), e.dEdgeSlot = t.getUniformLocation(e, "u_dEdge"), e.lSlot = t.getUniformLocation(e, "u_l"), e.aSlot = t.getUniformLocation(e, "u_a"), e.bSlot = t.getUniformLocation(e, "u_b"), e.sigmaCSlot = t.getUniformLocation(e, "u_sigmaC")
            }, q = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.texelStrideSlot = t.getUniformLocation(e, "u_texelStride")
            }, Z = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.texelStrideSlot = t.getUniformLocation(e, "u_texelStride"), e.weight0Slot = t.getUniformLocation(e, "u_weight0"), e.weight1Slot = t.getUniformLocation(e, "u_weight1"), e.weight2Slot = t.getUniformLocation(e, "u_weight2"), e.weight3Slot = t.getUniformLocation(e, "u_weight3"), e.weight4Slot = t.getUniformLocation(e, "u_weight4")
            }, $ = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.resolutionLocation = t.getUniformLocation(e, "u_resolution"), e.textureSizeLocation = t.getUniformLocation(e, "u_textureSize"), e.blendModeUniform = t.getUniformLocation(e, "u_blendMode"), e.noiseTypeUniform = t.getUniformLocation(e, "u_noiseType"), e.transformUniform = t.getUniformLocation(e, "u_transform"), e.paramsUniform = t.getUniformLocation(e, "u_params"), e.invertUniform = t.getUniformLocation(e, "u_invert"), e.maskOnlyUniform = t.getUniformLocation(e, "u_maskOnly"), e.gradientMapUniform = t.getUniformLocation(e, "u_gradientMap"), e.aspectModeUniform = t.getUniformLocation(e, "u_aspectMode"), e.widthUniform = t.getUniformLocation(e, "u_width"), e.heightUniform = t.getUniformLocation(e, "u_height")
            }, Q = function(e, t) {
                t.useProgram(e), ot(e, t)
            }, K = function(e, t) {
                t.useProgram(e), ot(e, t), e.gradientMap = t.getUniformLocation(e, "u_gradientMap")
            }, J = function(e, t) {
                t.useProgram(e), ot(e, t), e.bitmapBlendSampler = t.getUniformLocation(e, "u_blendSampler"), e.alphaUniform = t.getUniformLocation(e, "u_alpha"), e.blendModeUniform = t.getUniformLocation(e, "u_blendMode")
            }, et = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.overlaySamplerSlot = t.getUniformLocation(e, "u_overlaySampler"), e.transform = t.getUniformLocation(e, "u_transform")
            }, tt = function(e, t) {
                t.useProgram(e, t), ot(e, t), e.transform = t.getUniformLocation(e, "u_transform")
            }, ot = function(e, t) {
                e.positionSlot = t.getAttribLocation(e, "a_position"), e.texCoordSlot = t.getAttribLocation(e, "a_texCoord"), e.samplerSlot = t.getUniformLocation(e, "u_sampler"), e.blendModeSlot = t.getUniformLocation(e, "u_blendMode")
            }, rt = function(e, t, o, r, a, i) {
                return "undefined" == typeof e && (e = p(o, r, i), e ? (t(e, i), a && i.drawArrays(GL_TRIANGLES, 0, 0)) : glData.state = MoaGLState.FAILED), e
            }
        }), e.define("/src/js/filters/colorConversion.js", function(e, t) {
            "use strict";
            var o = {};
            o.rgb2lab = function(e, t, o, r) {
                "object" != typeof r && (r = [0, .030352698354883748, .060705396709767497, .09105809506465125, .12141079341953499, .15176349177441875, .1821161901293025, .21246888848418624, .24282158683906999, .27317428519395376, .3035269835488375, .3346535763899161, .3676507324047436, .40247170184963066, .43914420374102936, .4776953480693729, .5181516702338386, .5605391624202722, .6048833022857054, .6512090792594475, .6995410187265387, .7499032043226175, .8023192985384995, .8568125618069307, .9134058702220788, .9721217320237849, 1.0329823029626937, 1.0960094006488246, 1.1612245179743885, 1.2286488356915872, 1.2983032342173013, 1.3702083047289686, 1.4443843596092545, 1.520851442291271, 1.599629336550963, 1.6807375752887384, 1.7641954488384077, 1.8500220128379696, 1.9382360956935722, 2.02885630566524, 2.1219010376003555, 2.2173884793387386, 2.315336617811041, 2.4157632448504756, 2.518685962736163, 2.6241221894849898, 2.7320891639074896, 2.8426039504420793, 2.95568344378088, 3.0713443732993633, 3.1896033073011534, 3.3104766570885054, 3.433980680868217, 3.5601314875020345, 3.688945040110004, 3.82043715953465, 3.9546235276732835, 4.091519690685319, 4.231141062080967, 4.3735029256973466, 4.518620438567554, 4.666508633688009, 4.8171824226889415, 4.970656598412723, 5.126945837404324, 5.286064702318025, 5.448027644244237, 5.612849004960009, 5.780543019106723, 5.95112381629812, 6.124605423161761, 6.301001765316768, 6.480326669290577, 6.662593864377289, 6.8478169844400165, 7.036009569659588, 7.227185068231748, 7.421356838014963, 7.618538148130785, 7.818742180518632, 8.021982031446832, 8.22827071298148, 8.437621154414881, 8.650046203654977, 8.865558628577293, 9.084171118340768, 9.305896284668744, 9.53074666309647, 9.758734714186247, 9.989872824711389, 10.224173308810132, 10.461648409110419, 10.702310297826761, 10.946171077829932, 11.193242783690561, 11.443537382697373, 11.697066775851084, 11.953842798834561, 12.213877222960187, 12.47718175609505, 12.743768043564744, 13.013647669036429, 13.286832155381797, 13.563332965520566, 13.843161503245183, 14.126329114027165, 14.412847085805778, 14.702726649759498, 14.995978981060857, 15.292615199615017, 15.59264637078274, 15.89608350608804, 16.2029375639111, 16.513219450166762, 16.826940018969076, 17.14411007328226, 17.464740365558505, 17.78884159836291, 18.116424424986022, 18.4474994500441, 18.782077230067788, 19.120168274079138, 19.46178304415758, 19.806931955994887, 20.155625379439705, 20.507873639031693, 20.863687014525574, 21.223075741405523, 21.586050011389926, 21.95261997292692, 22.32279573168085, 22.696587351009835, 23.074004852434914, 23.45505821610052, 23.839757381227102, 24.228112246555487, 24.620132670783548, 25.015828472995345, 25.415209433082676, 25.818285292159583, 26.225065752969623, 26.635560480286248, 27.04977910130658, 27.467731206038465, 27.88942634768104, 28.31487404299921, 28.74408377269175, 29.17706498175359, 29.613827079832113, 30.05437944157765, 30.49873140698863, 30.946892281750856, 31.398871337571755, 31.854677812509184, 32.31432091129508, 32.777809805654215, 33.245153634617935, 33.71636150483304, 34.191442490866095, 34.67040563550296, 35.15325995004394, 35.640014414594354, 36.13067797835095, 36.62525955988395, 37.12376804741491, 37.62621229909065, 38.13260114325301, 38.6429433787049, 39.157247774972326, 39.67552307256268, 40.19777798321958, 40.72402119017367, 41.25426134839037, 41.788507084813745, 42.32676699860717, 42.86904966139066, 43.415363617474895, 43.96571738409188, 44.52011945162278, 45.078578283822345, 45.64110231804047, 46.20769996544071, 46.7783796112159, 47.353149614800955, 47.93201831008268, 48.514994005607036, 49.10208498478356, 49.693299506087044, 50.28864580325687, 50.888132085493375, 51.49176653765214, 52.09955732043543, 52.711512570581306, 53.32764040105052, 53.947948901210715, 54.57244613701866, 55.201140151200015, 55.83403896342679, 56.471150570492924, 57.11248294648731, 57.75804404296506, 58.40784178911641, 59.06188409193369, 59.720178836376334, 60.38273388553378, 61.04955708078648, 61.72065624196511, 62.39603916750761, 63.07571363461469, 63.75968739940326, 64.44796819705822, 65.14056374198242, 65.83748172794485, 66.5387298282272, 67.24431569576875, 67.95424696330939, 68.66853124353135, 69.38717612919899, 70.11018919329732, 70.83757798916868, 71.56935005064807, 72.30551289219693, 73.04607400903537, 73.79104087727309, 74.54042095403875, 75.29422167760778, 76.05245046752924, 76.8151147247507, 77.58222183174236, 78.35377915261935, 79.12979403326302, 79.9102738014409, 80.69522576692516, 81.48465722161012, 82.27857543962836, 83.07698767746547, 83.879901174074, 84.6873231509858, 85.49926081242339, 86.31572134541024, 87.13671191987972, 87.96223968878317, 88.79231178819663, 89.62693533742664, 90.46611743911495, 91.30986517934193, 92.15818562772947, 93.01108583754237, 93.8685728457888, 94.73065367331999, 95.59733532492861, 96.46862478944651, 97.34452903984125, 98.22505503331172, 99.11020971138298, 100]);
                var a, i, n, l, s, u;
                return e = r[e], t = r[t], o = r[o], l = .00433891 * e + .00376234915 * t + .0018990604648 * o, s = .002126 * e + .007152 * t + 722e-6 * o, u = 177255e-9 * e + .00109475308 * t + .0087295537 * o, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, a = 116 * s - 16, i = 500 * (l - s), n = 200 * (s - u), [2.55 * a, i + 127, n + 127]
            }, o.rgb2labwithcbrtmapping = function(e, t, o, r, a) {
                "object" != typeof r && (r = [0, .030352698354883748, .060705396709767497, .09105809506465125, .12141079341953499, .15176349177441875, .1821161901293025, .21246888848418624, .24282158683906999, .27317428519395376, .3035269835488375, .3346535763899161, .3676507324047436, .40247170184963066, .43914420374102936, .4776953480693729, .5181516702338386, .5605391624202722, .6048833022857054, .6512090792594475, .6995410187265387, .7499032043226175, .8023192985384995, .8568125618069307, .9134058702220788, .9721217320237849, 1.0329823029626937, 1.0960094006488246, 1.1612245179743885, 1.2286488356915872, 1.2983032342173013, 1.3702083047289686, 1.4443843596092545, 1.520851442291271, 1.599629336550963, 1.6807375752887384, 1.7641954488384077, 1.8500220128379696, 1.9382360956935722, 2.02885630566524, 2.1219010376003555, 2.2173884793387386, 2.315336617811041, 2.4157632448504756, 2.518685962736163, 2.6241221894849898, 2.7320891639074896, 2.8426039504420793, 2.95568344378088, 3.0713443732993633, 3.1896033073011534, 3.3104766570885054, 3.433980680868217, 3.5601314875020345, 3.688945040110004, 3.82043715953465, 3.9546235276732835, 4.091519690685319, 4.231141062080967, 4.3735029256973466, 4.518620438567554, 4.666508633688009, 4.8171824226889415, 4.970656598412723, 5.126945837404324, 5.286064702318025, 5.448027644244237, 5.612849004960009, 5.780543019106723, 5.95112381629812, 6.124605423161761, 6.301001765316768, 6.480326669290577, 6.662593864377289, 6.8478169844400165, 7.036009569659588, 7.227185068231748, 7.421356838014963, 7.618538148130785, 7.818742180518632, 8.021982031446832, 8.22827071298148, 8.437621154414881, 8.650046203654977, 8.865558628577293, 9.084171118340768, 9.305896284668744, 9.53074666309647, 9.758734714186247, 9.989872824711389, 10.224173308810132, 10.461648409110419, 10.702310297826761, 10.946171077829932, 11.193242783690561, 11.443537382697373, 11.697066775851084, 11.953842798834561, 12.213877222960187, 12.47718175609505, 12.743768043564744, 13.013647669036429, 13.286832155381797, 13.563332965520566, 13.843161503245183, 14.126329114027165, 14.412847085805778, 14.702726649759498, 14.995978981060857, 15.292615199615017, 15.59264637078274, 15.89608350608804, 16.2029375639111, 16.513219450166762, 16.826940018969076, 17.14411007328226, 17.464740365558505, 17.78884159836291, 18.116424424986022, 18.4474994500441, 18.782077230067788, 19.120168274079138, 19.46178304415758, 19.806931955994887, 20.155625379439705, 20.507873639031693, 20.863687014525574, 21.223075741405523, 21.586050011389926, 21.95261997292692, 22.32279573168085, 22.696587351009835, 23.074004852434914, 23.45505821610052, 23.839757381227102, 24.228112246555487, 24.620132670783548, 25.015828472995345, 25.415209433082676, 25.818285292159583, 26.225065752969623, 26.635560480286248, 27.04977910130658, 27.467731206038465, 27.88942634768104, 28.31487404299921, 28.74408377269175, 29.17706498175359, 29.613827079832113, 30.05437944157765, 30.49873140698863, 30.946892281750856, 31.398871337571755, 31.854677812509184, 32.31432091129508, 32.777809805654215, 33.245153634617935, 33.71636150483304, 34.191442490866095, 34.67040563550296, 35.15325995004394, 35.640014414594354, 36.13067797835095, 36.62525955988395, 37.12376804741491, 37.62621229909065, 38.13260114325301, 38.6429433787049, 39.157247774972326, 39.67552307256268, 40.19777798321958, 40.72402119017367, 41.25426134839037, 41.788507084813745, 42.32676699860717, 42.86904966139066, 43.415363617474895, 43.96571738409188, 44.52011945162278, 45.078578283822345, 45.64110231804047, 46.20769996544071, 46.7783796112159, 47.353149614800955, 47.93201831008268, 48.514994005607036, 49.10208498478356, 49.693299506087044, 50.28864580325687, 50.888132085493375, 51.49176653765214, 52.09955732043543, 52.711512570581306, 53.32764040105052, 53.947948901210715, 54.57244613701866, 55.201140151200015, 55.83403896342679, 56.471150570492924, 57.11248294648731, 57.75804404296506, 58.40784178911641, 59.06188409193369, 59.720178836376334, 60.38273388553378, 61.04955708078648, 61.72065624196511, 62.39603916750761, 63.07571363461469, 63.75968739940326, 64.44796819705822, 65.14056374198242, 65.83748172794485, 66.5387298282272, 67.24431569576875, 67.95424696330939, 68.66853124353135, 69.38717612919899, 70.11018919329732, 70.83757798916868, 71.56935005064807, 72.30551289219693, 73.04607400903537, 73.79104087727309, 74.54042095403875, 75.29422167760778, 76.05245046752924, 76.8151147247507, 77.58222183174236, 78.35377915261935, 79.12979403326302, 79.9102738014409, 80.69522576692516, 81.48465722161012, 82.27857543962836, 83.07698767746547, 83.879901174074, 84.6873231509858, 85.49926081242339, 86.31572134541024, 87.13671191987972, 87.96223968878317, 88.79231178819663, 89.62693533742664, 90.46611743911495, 91.30986517934193, 92.15818562772947, 93.01108583754237, 93.8685728457888, 94.73065367331999, 95.59733532492861, 96.46862478944651, 97.34452903984125, 98.22505503331172, 99.11020971138298, 100]), "object" != typeof a && (a = [0, .09924488254695861, .12504071661525748, .14313588920856027, .1575414309575025, .16970636198605316, .18033991980928551, .18984863055466036, .19848976509391722, .20643767470661487, .21381661776730748, .2207186428753261, .22721406110407222, .2333579349114362, .2391942859295316, .24475892765281868, .2500814332305149, .25518653946003345, .2600951718542145, .26482520821552014, .26939205754235684, .27380910584090884, .27808806426285243, .2822392443945425, .28627177841712054, .2901937969941595, .2940125743549161, .2977346476408758, .3013659158571899, .30491172251223664, .3083769250994826, .311765953881872, .315082861915005, .31833136784577337, .32151489271552486, .3246365917579799, .3276993819951494, .33070596628701154, .3336588543735265, .336560381353843, .3394127239721063, .34221791501818183, .3449778561018543, .34769432901832303, .350369005889286, .3530034582361798, .3555991651191077, .35815752045576577, .360679839618571, .3631673653946448, .36562127338186107, .3680426768844678, .37043263136354043, .37279213849048415, .3751221498457724, .3774235702999315, .3796972611093207, .38194404275540383, .38416469755287136, .3863599720490726, .38853057923469275, .3906772005834086, .39280048793632477, .3949010652453065, .39697953018783444, .3990364556647021, .40107239119071786, .4030878641875543, .40508338118698156, .40705942895191655, .4090164755220073, .41095497118983254, .41287534941322973, .41477802766875577, .41666340825083015, .41853187902070177, .4203838141090141, .4222195745754141, .42403950902835275, .4258439542079576, .42763323553461496, .4294076676256808, .4311675547825421, .43291319145006824, .43464486265033075, .43636284439232104, .43806740405925904, .439758800774965, .44143728575065216, .4431031026133969, .44475648771744863, .4463976704394558, .44802687345860653, .4496443130226092, .45125019920037296, .4528447361221874, .45442812220814444, .4560005503854936, .45756220829557587, .4591132784909362, .46065393862317483, .46218436162206117, .4637047158663982, .4652151653470947, .46671586982287233, .46820698496900803, .4696886625194857, .4711610504029096, .47262429287250746, .4740785306305335, .4755239009473612, .4769605377755387, .47838857185906314, .4798081308381152, .48121933934948075, .48262231912287346, .4840171890733601, .4854040653900775, .4867830616214213, .4881542887568748, .4895178553056373, .4908738673722041, .4922224287290381, .4935636408864699, .4948976031599528, .496224412734793, .49754416472847035, .4988569522506557, .5001628664610298, .501461996624999, .5027544301674005, .5040402527242843, .5053195481928565, .5065923987796591, .5078588850470654, .5091190859581595, .5103730789200669, .5116209398258046, .5128627430947063, .514098561711485, .5153284672639881, .516552529979695, .5177708187610112, .5189834012194042, .520190343708429, .5213917113556842, .5225875680937435, .5237779766901, .524962998776162, .5261426948753368, .5273171244302366, .5284863458290399, .5296504164310403, .530809392591412, .5319633296852224, .5331122821307175, .5342563034119088, .5353954461004848, .5365297618770742, .5376593015518806, .5387841150847137, .5399042516044376, .5410197594278565, .5421306860780567, .5432370783022257, .5443389820889641, .5454364426851102, .5465295046120907, .5476182116818177, .5487026070121426, .5497827330418863, .5508586315454556, .5519303436470633, .5529979098345615, .5540613699729042, .555120763317248, .5561761285257049, .5572275036717572, .5582749262563468, .5593184332196459, .5603580609525242, .5613938453077163, .5624258216107048, .5634540246703222, .564478488789085, .5654992477732644, .5665163349427048, .5675297831403955, .5685396247418045, .5695458916639811, .5705486153744331, .5715478268997879, .5725435568342411, .5735358353478003, .5745246921943311, .5755101567194079, .5764922578679786, .577471024191847, .5784464838569776, .5794186646506286, .5803875939883189, .5813532989206311, .582315806139859, .5832751419864992, .5842313324555962, .5851844032029409, .5861343795511286, .5870812864954806, .5880251487098322, .5889659905521902, .5899038360702656, .5908387090068827, .5917706328052692, .5926996306142294, .5936257252932051, .5945489394172259, .5954692952817516, .5963868149074115, .5973015200446405, .5982134321782173, .599122572531705, .6000289620717986, .60093262151258, .6018335713196846, .6027318317143798, .6036274226775593, .6045203639536548, .6054106750544663, .606298375262915, .6071834836367179, .6080660190119893, .6089460000067677, .6098234450244732, .6106983722572941, .6115707996895061, .6124407451007265, .613308226069102, .6141732599744346, .6150358640012467, .6158960551417848, .6167538501989651, .6176092657892629, .6184623183455441, .6193130241198446, .620161399186094, .6210074594427897, .6218512206156173, .6226926982600246, .623531907763744, .6243688643492697, .6252035830762873, .6260360788440587, .626866366393762, .6276944603107898, .6285203750270028, .6293441248229434, .6301657238300099, .6309851860325884, .6318025252701481, .6326177552392989, .63343088949581, .6342419414565944, .6350509244016576, .6358578514760097, .6366627356915467, .6374655899288959, .6382664269392303, .6390652593460512, .6398620996469384, .6406569602152721, .6414498533019224, .6422407910369122, .6430297854310497, .6438168483775332, .6446019916535295, .6453852269217243, .6461665657318468, .646946019522169, .6477235996209785, .6484993172480279, .6492731835159596, .6500452094317067, .6508154058978702, .651583783714075, .6523503535783013, .6531151260881964, .653878111742364, .6546393209416315, .6553987639902987, .6561564510973654, .6569123923777382, .6576665978534199, .6584190774546778, .6591698410211952, .6599188983032032, .660666258962595, .6614119325740231, .6621559286259783, .6628982565218523, .6636389255809841, .6643779450396892, .6651153240522729, .665851071692029, .6665851969522216, .667317708747053, .6680486159126159, .6687779272078317, .6695056513153739, .6702317968425779, .6709563723223373, .6716793862139855, .6724008469041655, .673120762707686, .6738391418683641, .6745559925598569, .675271322886479, .6759851408840097, .6766974545204868, .6774082716969896, .67811760024841, .6788254479442125, .6795318224891835, .6802367315241687, .6809401826268009, .6816421833122166, .6823427410337628, .6830418631836931, .6837395570938545, .6844358300363635, .6851306892242741, .6858241418122343, .6865161948971349, .6872068555187488, .687896130660361, .6885840272493903, .689270552158001, .6899557122037085, .6906395141499742, .6913219647067927, .6920030705312724, .6926828382282061, .6933612743506347, .6940383854004035, .6947141778287103, .6953886580366461, .6960618323757292, .6967337071484312, .6974042886086962, .6980735829624533, .6987415963681218, .6994083349371105, .7000738047343085, .7007380117785719, .7014009620432023, .7020626614564196, .7027231159018287, .7033823312188793, .7040403132033212, .7046970676076518, .7053526001415594, .7060069164723595, .7066600222254262, .7073119229846179, .7079626242926972, .7086121316517457, .7092604505235738, .7099075863301242, .7105535444538713, .7111983302382154, .7118419489878712, .7124844059692523, .71312570641085, .7137658555036082, .7144048584012926, .7150427202208567, .7156794460428013, .7163150409115315, .7169495098357082, .7175828577885948, .7182150897084011, .718846210498622, .7194762250283715, .720105138132714, .7207329546129908, .721359679237142, .721985316740026, .7226098718237337, .7232333491578999, .7238557533800104, .7244770890957053, .7250973608790793, .7257165732729777, .7263347307892896, .7269518379092367, .7275678990836596, .7281829187333003, .728796901249081, .7294098509923802, .7300217722953055, .7306326694609626, .7312425467637221, .7318514084494824, .7324592587359297, .7330661018127955, .7336719418421106, .7342767829584559, .7348806292692114, .735483484854801, .7360853537689355, .7366862400388527, .737286147665554, .7378850806240391, .7384830428635379, .7390800383077395, .7396760708550189, .7402711443786605, .7408652627270808, .741458429724046, .7420506491688895, .7426419248367259, .7432322604786622, .7438216598220084, .7444101265704832, .7449976644044198, .7455842769809682, .7461699679342954, .7467547408757834, .7473385993942256, .7479215470560205, .748503587405363, .7490847239644346, .7496649602335902, .7502442996915447, .7508227457955557, .7514003019816053, .7519769716645798, .7525527582384471, .7531276650764331, .753701695531195, .7542748529349934, .754847140599863, .7554185618177804, .7559891198608314, .7565588179813753, .7571276594122083, .757695647366725, .7582627850390781, .7588290756043364, .7593945222186415, .7599591280193618, .7605228961252469, .7610858296365782, .7616479316353195, .7622092051852651, .7627696533321872, .7633292791039805, .7638880855108077, .7644460755452401, .7650032521824002, .7655596183801003, .7661151770789814, .7666699312026493, .7672238836578102, .7677770373344053, .7683293951057427, .7688809598286291, .7694317343435, .7699817214745477, .7705309240298498, .7710793448014944, .7716269865657057, .7721738520829675, .772719944098145, .7732652653406075, .7738098185243465, .7743536063480964, .7748966314954512, .775438896634981, .7759804044203481, .7765211574904205, .7770611584693855, .7776004099668616, .7781389145780099, .778676674883643, .7792136934503352, .7797499728305293, .7802855155626435, .7808203241711775, .7813544011668172, .7818877490465378, .7824203702937074, .782952267378188, .783483442756437, .7840138988716062, .7845436381536416, .7850726630193806, .7856009758726495, .7861285791043594, .7866554750926015, .7871816662027413, .7877071547875124, .7882319431871087, .7887560337292759, .7892794287294033, .7898021304906129, .7903241413038489, .7908454634479661, .7913660991898175, .7918860507843407, .7924053204746444, .7929239104920931, .7934418230563915, .7939590603756689, .7944756246465603, .7949915180542906, .7955067427727543, .7960213009645972, .7965351947812954, .7970484263632353, .7975609978397913, .7980729113294042, .7985841689396577, .7990947727673552, .799604724898595, .8001140274088461, .8006226823630215, .8011306918155525, .8016380578104618, .8021447823814357, .8026508675518954, .8031563153350691, .8036611277340616, .8041653067419244, .8046688543417252, .8051717725066162, .8056740631999023, .8061757283751086, .8066767699760472, .8071771899368835, .8076769901822017, .8081761726270704, .8086747391771066, .8091726917285403, .8096700321682774, .8101667623739631, .810662884214044, .81115839954783, .8116533102255556, .8121476180884412, .8126413249687521, .8131344326898597, .8136269430663002, .8141188579038331, .8146101789994995, .8151009081416802, .8155910471101533, .8160805976761496, .8165695616024108, .8170579406432438, .8175457365445769, .8180329510440145, .8185195858708919, .8190056427463286, .8194911233832824, .8199760294866028, .8204603627530825, .8209441248715112, .8214273175227265, .8219099423796651, .8223920011074144, .8228734953632629, .8233544267967502, .8238347970497164, .8243146077563521, .8247938605432471, .8252725570294385, .8257506988264595, .8262282875383863, .8267053247618866, .8271818120862655, .8276577510935128, .8281331433583488, .82860799044827, .8290822939235957, .8295560553375114, .8300292762361152, .830501958158461, .830974102636603, .8314457111956398, .831916785353757, .8323873266222709, .8328573365056704, .8333268165016603, .8337957681012022, .8342641927885572, .8347320920413266, .8351994673304931, .8356663201204616, .8361326518690991, .8365984640277758, .8370637580414035, .8375285353484762, .8379927973811084, .8384565455650747, .8389197813198476, .8393825060586361, .8398447211884238, .8403064281100062, .8407676282180282, .8412283229010212, .8416885135414399, .8421482015156988, .8426073881942083, .843066074941411, .8435242631158167, .8439819540700386, .8444391491508282, .8448958496991095, .8453520570500146, .8458077725329176, .8462629974714685, .8467177331836275, .8471719809816981, .8476257421723606, .8480790180567055, .8485318099302657, .8489841190830497, .8494359467995736, .8498872943588931, .8503381630346358, .8507885540950325, .8512384688029485, .8516879084159152, .8521368741861606, .85258536736064, .8530333891810667, .8534809408839426, .8539280237005873, .8543746388571686, .854820787574732, .8552664710692298, .8557116905515508, .8561564472275487, .856600742298071, .8570445769589876, .8574879524012193, .8579308698107657, .8583733303687329, .8588153352513616, .8592568856300545, .859697982671404, .8601386275372181, .8605788213845489, .8610185653657182, .8614578606283446, .8618967083153697, .8623351095650842, .8627730655111538, .8632105772826455, .8636476460040526, .8640842727953206, .8645204587718719, .8649562050446316, .8653915127200517, .8658263829001364, .8662608166824664, .866694815160223, .8671283794222129, .8675615105528918, .8679942096323882, .8684264777365276, .8688583159368556, .8692897253006614, .8697207068910011, .8701512617667205, .8705813909824783, .8710110955887687, .871440376631944, .8718692351542368, .8722976721937826, .872725688784642, .8731532859568221, .8735804647362989, .8740072261450385, .8744335712010189, .8748595009182516, .8752850163068022, .8757101183728118, .876134808118518, .8765590865422758, .8769829546385779, .8774064133980755, .8778294638075984, .8782521068501757, .8786743435050556, .879096174747725, .87951760154993, .8799386248796953, .8803592457013438, .8807794649755161, .8811992836591893, .8816187027056972, .8820377230647484, .8824563456824455, .8828745715013043, .8832924014602719, .8837098364947455, .884126877536591, .8845435255141612, .8849597813523133, .8853756459724286, .8857911202924285, .8862062052267938, .8866209016865818, .8870352105794438, .8874491328096428, .8878626692780711, .888275820882267, .8886885885164322, .8891009730714491, .8895129754348972, .8899245964910704, .8903358371209934, .8907466982024383, .8911571806099414, .8915672852148191, .8919770128851846, .8923863644859639, .8927953408789115, .8932039429226274, .8936121714725718, .8940200273810814, .8944275114973853, .8948346246676199, .895241367734845, .8956477415390587, .8960537469172131, .896459384703229, .8968646557280114, .8972695608194643, .8976741008025054, .8980782764990811, .8984820887281812, .8988855383058536, .8992886260452183, .8996913527564827, .9000937192469548, .9004957263210588, .9008973747803478, .9012986654235191, .9016995990464275, .9021001764420992, .9025003984007458, .9029002657097783, .9032997791538201, .9036989395147207, .9040977475715697, .9044962041007096, .9048943098757493, .9052920656675773, .9056894722443748, .906086530371629, .9064832408121458, .9068796043260627, .9072756216708617, .9076712936013822, .9080666208698333, .9084616042258066, .9088562444162888, .909250542185674, .909644498275776, .9100381134258407, .9104313883725582, .9108243238500753, .9112169205900067, .911609179321448, .9120011007709872, .912392685662716, .9127839347182426, .9131748486567027, .9135654281947713, .9139556740466742, .9143455869241996, .9147351675367098, .9151244165911517, .9155133347920691, .9159019228416131, .9162901814395539, .9166781112832916, .9170657130678669, .9174529874859728, .9178399352279649, .9182265569818724, .9186128534334087, .9189988252659826, .9193844731607087, .9197697977964173, .9201547998496661, .9205394799947498, .9209238389037109, .9213078772463497, .9216915956902347, .9220749949007134, .9224580755409214, .9228408382717931, .9232232837520717, .9236054126383193, .9239872255849265, .9243687232441223, .9247499062659842, .9251307752984477, .925511330987316, .9258915739762699, .9262715049068767, .9266511244186009, .9270304331488122, .9274094317327963, .9277881208037635, .9281665009928579, .9285445729291671, .9289223372397313, .9292997945495522, .9296769454816025, .9300537906568345, .9304303306941893, .9308065662106061, .9311824978210302, .931558126138423, .9319334517737698, .9323084753360892, .9326831974324412, .9330576186679365, .9334317396457447, .9338055609671028, .934179083231324, .934552307035806, .9349252329760395, .935297861645616, .935670193636237, .936042229537722, .936413969938016, .9367854154231987, .937156566577492, .9375274239832683, .9378979882210586, .9382682598695602, .938638239505645, .9390079277043673, .9393773250389714, .9397464320808999, .9401152493998012, .9404837775635372, .9408520171381909, .9412199686880747, .9415876327757369, .9419550099619702, .9423221008058192, .9426889058645871, .943055425693844, .9434216608474337, .9437876118774816, .9441532793344015, .9445186637669033, .944883765722, .9452485857450149, .9456131243795891, .945977382167688, .9463413596496092, .9467050573639889, .9470684758478091, .9474316156364045, .9477944772634701, .9481570612610669, .9485193681596299, .948881398487974, .9492431527733017, .9496046315412092, .9499658353156932, .950326764619158, .9506874199724215, .9510478018947224, .9514079109037265, .9517677475155331, .9521273122446822, .9524866056041599, .9528456281054056, .9532043802583186, .9535628625712634, .9539210755510774, .9542790197030759, .9546366955310597, .9549941035373201, .9553512442226458, .955708118086329, .9560647256261716, .956421067338491, .9567771437181263, .9571329552584446, .9574885024513466, .9578437857872732, .9581988057552107, .9585535628426971, .9589080575358283, .9592622903192632, .9596162616762304, .9599699720885332, .9603234220365561, .9606766119992698, .9610295424542377, .9613822138776207, .9617346267441839, .9620867815273011, .9624386786989614, .962790318729774, .9631417020889744, .9634928292444291, .963843700662642, .9641943168087592, .9645446781465745, .9648947851385351, .9652446382457469, .9655942379279795, .9659435846436719, .9662926788499377, .9666415210025703, .9669901115560479, .9673384509635392, .9676865396769084, .9680343781467202, .9683819668222451, .9687293061514642, .969076396581075, .9694232385564956, .9697698325218702, .970116178920074, .9704622781927181, .970808130780155, .9711537371214826, .9714990976545498, .9718442128159609, .9721890830410812, .972533708764041, .9728780904177409, .9732222284338563, .9735661232428426, .9739097752739395, .9742531849551758, .9745963527133741, .9749392789741559, .9752819641619453, .9756244086999749, .9759666130102891, .9763085775137494, .9766503026300392, .9769917887776673, .9773330363739738, .9776740458351333, .9780148175761602, .9783553520109127, .9786956495520978, .9790357106112746, .97937553559886, .9797151249241322, .9800544789952351, .9803935982191831, .9807324830018651, .9810711337480483, .9814095508613835, .9817477347444082, .9820856857985518, .9824234044241392, .9827608910203951, .9830981459854481, .9834351697163352, .9837719626090052, .9841085250583236, .9844448574580762, .984780960200973, .985116833678653, .9854524782816871, .9857878943995831, .9861230824207893, .9864580427326981, .9867927757216505, .9871272817729397, .9874615612708154, .987795614598487, .9881294421381279, .9884630442708796, .9887964213768549, .989129573835142, .9894625020238087, .9897952063199055, .9901276870994697, .9904599447375294, .9907919796081064, .9911237920842207, .9914553825378941, .9917867513401535, .9921178988610346, .992448825469586, .9927795315338723, .9931100174209779, .9934402834970106, .9937703301271053, .9941001576754271, .9944297665051756, .9947591569785874, .9950883294569406, .9954172843005578, .9957460218688093, .9960745425201175, .996402846611959, .9967309345008691, .997058806542445, .9973864630913489, .9977139045013114, .9980411311251348, .9983681433146974, .998694941420955, .9990215257939463, .9993478967827943, .999674054735711, 1]);
                var i, n, l, s, u, f, c = a.length;
                return e = r[e], t = r[t], o = r[o], s = .00433891 * e + .00376234915 * t + .0018990604648 * o, u = .002126 * e + .007152 * t + 722e-6 * o, f = 177255e-9 * e + .00109475308 * t + .0087295537 * o, s = s > .008856 ? s >= 1 ? a[c - 1] : a[s * c | 0] : 7.787 * s + 16 / 116, u = u > .008856 ? u >= 1 ? a[c - 1] : a[u * c | 0] : 7.787 * u + 16 / 116, f = f > .008856 ? f >= 1 ? a[c - 1] : a[f * c | 0] : 7.787 * f + 16 / 116, i = 116 * u - 16, n = 500 * (s - u), l = 200 * (u - f), [2.55 * i, n + 127, l + 127]
            }, o.lab2rgb = function(e) {
                var t = (e[0] / 2.55 + 16) / 116, o = (e[1] - 127) / 500 + t, r = t - (e[2] - 127) / 200, a = t * t * t, i = o * o * o, n = r * r * r;
                t = a > .008856 ? a : (t - 16 / 116) / 7.787, o = i > .008856 ? i : (o - 16 / 116) / 7.787, r = n > .008856 ? n : (r - 16 / 116) / 7.787, o = .95047 * o, t = 1 * t, r = 1.08883 * r;
                var l = 3.2406 * o + -1.5372 * t + r * -.4986, s = o * -.9689 + 1.8758 * t + .0415 * r, u = .0557 * o + t * -.204 + 1.057 * r;
                return l = l > .0031308 ? 1.055 * Math.pow(l, .41666666666667) - .055 : 12.92 * l, s = s > .0031308 ? 1.055 * Math.pow(s, .41666666666667) - .055 : 12.92 * s, u = u > .0031308 ? 1.055 * Math.pow(u, .41666666666667) - .055 : 12.92 * u, l = 255 * l + .5 | 0, s = 255 * s + .5 | 0, u = 255 * u + .5 | 0, [l, s, u]
            }, o.lab2rgbwithmapping = function(e, t) {
                "object" != typeof t && (t = [0, .01262952101661779, .02525904203323558, .03788856304985337, .049711876377871826, .05991457469741709, .06898447286600867, .0772092360066284, .08477358579410943, .091804259875822, .09839255413111209, .10460674144643575, .11049941567981197, .116112082049842, .12147815731101994, .12662500399558943, .13157535287823224, .1363483240840589, .1409601768441825, .14542487095720244, .14975449458714327, .15395959525747982, .1580494394769152, .16203221890462635, .16591521589126665, .16970493774704687, .17340722665014255, .1770273503750349, .18057007776923878, .18403974199157158, .18744029384710506, .19077534704588353, .1940482168277028, .19726195310091915, .20041936901604623, .20352306571797985, .2065754538818233, .20957877252746188, .21253510552056065, .21544639609752403, .21831445969536206, .2211409953214818, .2239275956609244, .22667575608780954, .22938688272237368, .2320622996539648, .2347032554328511, .2373109289190679, .2398864345642407, .24243082719196402, .24494510633355537, .24743022016856214, .2498870691130589, .25231650909335385, .25471935453807176, .25709638111758565, .2594483282563151, .2617759014404253, .26407977434087276, .2663605907694862, .26861896648381073, .27085549085472227, .2730707284093175, .2752652202602596, .2774394854315987, .27959402209005907, .2817293086898797, .28384580503848866, .2859439532895821, .2880241788695442, .29008689134257926, .2921324852194264, .2941613407140744, .296173824452494, .29817029013704466, .30015107916988515, .30211652123843086, .3040669348656343, .3060026279276311, .30792389814107823, .3098310335223196, .3117243128203384, .3136040059252957, .3154703742543138, .3173236711160275, .3191641420553126, .32099202517948666, .3228075514671829, .32461094506100485, .32640242354498716, .328182198207814, .3299504742926743, .331707451234572, .33345332288585067, .3351882777306368, .33691249908885884, .33862616531045336, .3403294499603252, .3420225219945948, .3437055459286266, .34537868199729943, .34704208630795363, .3486959109864158, .3503403043164812, .3519754108732058, .35360137165034033, .3552183241822174, .3568264026603817, .35842573804523775, .3600164581729729, .3615986878579945, .36317254899111157, .36473816063367165, .3662956391078557, .36784509808331944, .3693866486603606, .37092039944977906, .37244645664958986, .3739649241187381, .37547590344795784, .37697949402790815, .3784757931147127, .3799648958930234, .3814468955367197, .3829218832673514, .3843899484104266, .38585117844964034, .3873056590791346, .38875347425387746, .39019470623824154, .3916294356528607, .39305774151983813, .3944797013063766, .3958953909668962, .3973048849837052, .398708256406281, .4001055768892218, .40149691672892146, .40288234489901914, .4042619290846755, .40563573571572004, .40700382999871526, .4083662759479818, .409723136415623, .4110744731205898, .41242034667682187, .4137608166205015, .41509594143645334, .41642577858372254, .41775038452036234, .41906981472746097, .420384123732435, .4216933651316181, .4229975916121692, .42429685497332564, .4255912061470252, .4268806952179194, .4281653714427998, .42944528326945836, .43072047835500143, .4319910035836372, .43325690508395387, .43451822824570774, .43577501773613614, .43702731751581336, .43827517085406376, .4395186203439474, .44075770791683294, .4419924748565711, .44322296181328236, .4444492088167707, .445671255289577, .4468891400596831, .4481029013728773, .44931257690479337, .45051820377263313, .4517198185465818, .45291745726092675, .4541111554248895, .4553009480331786, .45648686957627277, .4576689540504429, .45884723496752006, .46002174536441914, .46119251781242304, .4623595844262362, .46352297687281546, .46468272637998137, .46583886374482125, .46699141934188554, .46814042313118737, .469285904666008, .47042789310051664, .47156641719720765, .4727015053341615, .4738331855121353, .47496148536148547, .47608643214893004, .4772080527841532, .47832637382625737, .479441421490067, .4805532216522879, .4816617998575264, .482767181324172, .48386939095014764, .48496845331853117, .4860643927030504, .4871572330734569, .48824699810078104, .48933371116247054, .4904173953474175, .4914980734608752, .4925757680292682, .49365050130489957, .49472229527055495, .49579117164401115, .49685715188244534, .49792025718675353, .4989805085057765, .5000379265404378, .5010925317477942, .5021443443450035, .5031933843132081, .5042396714013406, .5052832251298499, .5063240647943513, .5073622094692027, .5083976780110088, .5094304890620533, .5104606610536634, .5114882122095067, .512513160548822, .5135355238895871, .514555319851623, .5155725658596376, .5165872791462103, .5175994767547175, .518609175542202, .5196163921821871, .5206211431674361, .5216234448126594, .522623313257169, .5236207644674844, .5246158142398872, .5256084782029289, .5265987718198912, .5275867103912004, .5285723090567965, .5295555827984594, .5305365464420905, .5315152146599541, .5324916019728768, .533465722752407, .5344375912229347, .5354072214637743, .5363746274112078, .5373398228604933, .5383028214678364, .5392636367523269, .5402222820978414, .5411787707549106, .5421331158425572, .5430853303500971, .5440354271389132, .5449834189441957, .545929318376653, .5468731379241937, .5478148899535785, .5487545867120445, .5496922403289016, .550627862817102, .5515614660747821, .5524930618867796, .5534226619261247, .5543502777555052, .5552759208287091, .5561996024920415, .5571213339857184, .5580411264452384, .5589589909027302, .5598749382882796, .5607889794312336, .5617011250614838, .5626113858107291, .5635197722137174, .5644262947094677, .5653309636424726, .5662337892638817, .5671347817326651, .5680339511167598, .5689313073941972, .5698268604542126, .5707206200983378, .5716125960414764, .5725027979129619, .5733912352575995, .5742779175366926, .5751628541290517, .5760460543319896, .5769275273622997, .5778072823572206, .5786853283753848, .5795616743977544, .5804363293285412, .5813093019961135, .5821806011538895, .5830502354812169, .5839182135842398, .5847845439967515, .5856492351810363, .5865122955286974, .5873737333614738, .5882335569320437, .5890917744248176, .5899483939567188, .5908034235779529, .5916568712727662, .5925087449601928, .5933590524947909, .5942078016673694, .5950550002057023, .5959006557752352, .5967447759797787, .5975873683621958, .5984284404050756, .5992679995314003, .6001060531052015, .6009426084322078, .601777672760483, .6026112532810554, .6034433571285388, .6042739913817439, .6051031630642828, .6059308791451635, .6067571465393772, .6075819721084775, .6084053626611514, .6092273249537822, .6100478656910059, .6108669915262589, .6116847090623188, .6125010248518375, .6133159453978685, .614129477154385, .6149416265267927, .6157523998724356, .6165618035010941, .6173698436754775, .6181765266117102, .6189818584798096, .6197858454041609, .6205884934639824, .621389808693787, .6221897970838367, .6229884645805916, .6237858170871525, .6245818604636987, .6253766005279194, .6261700430554399, .6269621937802424, .627753058395081, .628542642551892, .6293309518621987, .6301179918975115, .6309037681897214, .6316882862314913, .6324715514766395, .6332535693405202, .6340343452003991, .6348138843958234, .6355921922289883, .6363692739650979, .6371451348327226, .6379197800241517, .6386932146957418, .6394654439682601, .6402364729272251, .6410063066232419, .6417749500723333, .6425424082562685, .6433086861228857, .6440737885864122, .6448377205277801, .645600486794939, .6463620922031635, .6471225415353585, .6478818395423597, .6486399909432315, .6493970004255614, .6501528726457492, .650907612229295, .6516612237710832, .6524137118356617, .6531650809575201, .6539153356413631, .6546644803623813, .6554125195665185, .6561594576707364, .6569052990632761, .6576500481039163, .6583937091242286, .6591362864278302, .6598777842906337, .6606182069610937, .6613575586604503, .6620958435829714, .6628330658961898, .6635692297411403, .664304339232592, .665038398459279, .6657714114841288, .6665033823444867, .6672343150523395, .6679642135945361, .6686930819330041, .6694209240049673, .6701477437231571, .6708735449760244, .6715983316279475, .6723221075194388, .6730448764673485, .6737666422650662, .6744874086827211, .6752071794673781, .6759259583432347, .6766437490118126, .6773605551521499, .6780763804209894, .6787912284529659, .6795051028607908, .6802180072354358, .6809299451463133, .6816409201414555, .6823509357476922, .6830599954708256, .6837681027958041, .684475261186894, .6851814740878487, .6858867449220779, .6865910770928132, .6872944739832727, .6879969389568239, .6886984753571457, .6893990865083861, .6900987757153224, .6907975462635155, .6914954014194653, .692192344430764, .6928883785262472, .6935835069161438, .6942777327922245, .694971059327949, .6956634896786107, .6963550269814812, .6970456743559527, .6977354349036788, .6984243117087141, .6991123078376528, .699799426339765, .7004856702471326, .7011710425747831, .7018555463208224, .7025391844665666, .7032219599766716, .7039038757992623, .7045849348660602, .7052651400925095, .7059444943779024, .7066230006055029, .7073006616426692, .707977480340976, .7086534595363333, .7093286020491069, .7100029106842357, .7106763882313484, .7113490374648795, .7120208611441837, .7126918620136494, .7133620428028108, .7140314062264597, .7146999549847549, .7153676917633327, .7160346192334134, .7167007400519098, .7173660568615324, .7180305722908951, .7186942889546185, .719357209453434, .720019336374285, .7206806722904288, .7213412197615364, .7220009813337923, .7226599595399918, .7233181568996399, .7239755759190464, .724632219091423, .7252880888969768, .7259431878030049, .7265975182639874, .727251082721679, .7279038836052013, .7285559233311324, .7292072043035966, .7298577289143543, .7305074995428886, .7311565185564938, .7318047883103603, .7324523111476625, .7330990893996414, .7337451253856901, .7343904214134368, .7350349797788271, .7356788027662066, .7363218926484012, .7369642516867986, .7376058821314261, .7382467862210323, .7388869661831627, .7395264242342394, .7401651625796365, .7408031834137572, .741440488920109, .7420770812713791, .7427129626295076, .7433481351457623, .7439826009608107, .744616362204793, .7452494209973932, .7458817794479106, .7465134396553299, .7471444037083915, .7477746736856601, .7484042516555937, .7490331396766116, .749661339797162, .7502888540557885, .7509156844811968, .75154183309232, .7521673018983844, .7527920928989733, .7534162080840919, .7540396494342302, .7546624189204263, .7552845185043287, .7559059501382585, .7565267157652705, .7571468173192143, .7577662567247944, .7583850358976305, .7590031567443164, .7596206211624794, .7602374310408384, .7608535882592614, .7614690946888241, .7620839521918652, .7626981626220444, .7633117278243974, .7639246496353923, .7645369298829836, .7651485703866682, .7657595729575378, .766369939398335, .7669796715035041, .7675887710592457, .7681972398435691, .768805079626343, .7694122921693485, .7700188792263292, .7706248425430432, .7712301838573123, .7718349048990725, .7724390073904231, .773042493045677, .7736453635714078, .7742476206664997, .7748492660221942, .7754503013221389, .7760507282424334, .776650548451678, .7772497636110178, .7778483753741909, .7784463853875732, .7790437952902235, .7796406067139292, .7802368212832507, .7808324406155657, .781427466321113, .7820219000030365, .7826157432574284, .7832089976733718, .7838016648329837, .7843937463114573, .7849852436771035, .7855761584913932, .7861664923089979, .7867562466778316, .7873454231390905, .787934023227294, .7885220484703245, .7891095003894674, .78969638049945, .7902826903084814, .790868431318291, .7914536050241666, .7920382129149933, .7926222564732914, .7932057371752538, .7937886564907835, .7943710158835304, .7949528168109292, .7955340607242347, .7961147490685586, .7966948832829057, .7972744648002096, .7978534950473676, .7984319754452766, .7990099074088677, .7995872923471412, .8001641316632006, .8007404267542867, .8013161790118125, .8018913898213956, .8024660605628923, .8030401926104308, .8036137873324438, .8041868460917015, .8047593702453443, .8053313611449138, .8059028201363865, .806473748560204, .8070441477513057, .8076140190391593, .808183363747792, .8087521831958219, .8093204786964877, .8098882515576799, .8104555030819705, .8110222345666428, .811588447303722, .8121541425800035, .8127193216770835, .8132839858713867, .8138481364341967, .8144117746316832, .8149749017249316, .8155375189699711, .816099627617802, .8166612289144245, .8172223241008661, .8177829144132087, .8183430010826165, .8189025853353624, .819461668392856, .8200202514716689, .8205783357835622, .821135922535513, .8216930129297397, .8222496081637287, .8228057094302597, .8233613179174317, .8239164348086886, .8244710612828438, .8250251985141056, .8255788476721027, .8261320099219078, .8266846864240632, .8272368783346047, .827788586805086, .8283398129826024, .8288905580098155, .829440823024976, .8299906091619481, .8305399175502322, .8310887493149887, .8316371055770607, .8321849874529976, .8327323960550771, .8332793324913279, .833825797865553, .8343717932773512, .8349173198221393, .835462378591175, .8360069706715774, .83655109714635, .8370947590944016, .8376379575905678, .8381806937056326, .8387229685063494, .8392647830554617, .8398061384117246, .8403470356299247, .8408874757609016, .8414274598515679, .8419669889449293, .8425060640801054, .8430446862923493, .8435828566130675, .84412057606984, .84465784568644, .8451946664828526, .8457310394752956, .8462669656762376, .8468024460944176, .8473374817348641, .8478720735989141, .8484062226842315, .8489399299848259, .8494731964910713, .8500060231897245, .8505384110639432, .8510703610933044, .8516018742538222, .8521329515179663, .852663593854679, .8531938022293939, .8537235776040522, .8542529209371217, .854781833183613, .8553103152950976, .8558383682197243, .8563659929022369, .8568931902839906, .8574199613029695, .8579463068938025, .8584722279877803, .8589977255128725, .8595228003937431, .8600474535517671, .860571685905047, .8610954983684285, .8616188918535168, .8621418672686924, .8626644255191268, .8631865675067983, .8637082941305079, .8642296062858937, .864750504865448, .8652709907585314, .8657910648513881, .8663107280271617, .8668299811659093, .8673488251446174, .867867260837216, .8683852891145937, .8689029108446124, .8694201268921217, .8699369381189732, .8704533453840357, .8709693495432085, .8714849514494362, .8720001519527227, .8725149519001453, .8730293521358685, .873543353501158, .8740569568343945, .8745701629710876, .8750829727438886, .8755953869826052, .8761074065142143, .8766190321628751, .8771302647499432, .8776411050939833, .8781515540107819, .8786616123133618, .8791712808119936, .8796805603142088, .8801894516248137, .8806979555459011, .8812060728768631, .8817138044144045, .882221150952554, .8827281132826775, .883234692193491, .8837408884710714, .8842467028988698, .8847521362577235, .8852571893258682, .8857618628789493, .8862661576900348, .8867700745296263, .8872736141656715, .8877767773635756, .8882795648862128, .8887819774939383, .8892840159445996, .8897856809935476, .8902869733936489, .8907878938952963, .8912884432464204, .8917886221925007, .8922884314765765, .8927878718392589, .8932869440187404, .8937856487508071, .8942839867688488, .8947819588038698, .8952795655845005, .8957768078370067, .8962736862853018, .8967702016509559, .8972663546532074, .8977621460089725, .8982575764328569, .8987526466371646, .899247357331909, .8997417092248232, .90023570302137, .9007293394247513, .9012226191359196, .9017155428535865, .9022081112742335, .9027003250921215, .9031921849993009, .9036836916856209, .90417484583874, .9046656481441341, .9051560992851082, .9056461999428044, .9061359507962115, .9066253525221751, .9071144057954066, .9076031112884924, .9080914696719034, .9085794816140041, .9090671477810619, .9095544688372559, .9100414454446862, .9105280782633834, .9110143679513163, .911500315164402, .9119859205565143, .9124711847794927, .9129561084831508, .9134406923152851, .9139249369216844, .9144088429461374, .9148924110304419, .915375641814413, .9158585359358921, .9163410940307543, .9168233167329184, .9173052046743536, .9177867584850888, .9182679787932209, .9187488662249219, .9192294214044485, .9197096449541494, .9201895374944735, .9206690996439783, .9211483320193369, .9216272352353475, .9221058099049397, .9225840566391834, .9230619760472966, .9235395687366524, .9240168353127874, .9244937763794097, .9249703925384051, .9254466843898465, .9259226525320003, .9263982975613347, .9268736200725265, .9273486206584685, .9278232999102779, .9282976584173026, .9287716967671293, .9292454155455901, .9297188153367703, .9301918967230154, .9306646602849383, .9311371066014265, .9316092362496491, .9320810498050639, .9325525478414245, .9330237309307874, .9334945996435183, .9339651545483003, .9344353962121393, .9349053252003717, .9353749420766716, .9358442474030564, .9363132417398943, .9367819256459111, .9372502996781967, .9377183643922115, .9381861203417932, .9386535680791633, .9391207081549341, .9395875411181145, .9400540675161166, .9405202878947628, .9409862027982911, .9414518127693627, .9419171183490671, .9423821200769295, .9428468184909163, .9433112141274416, .9437753075213736, .9442390992060405, .9447025897132368, .9451657795732294, .9456286693147632, .946091259465068, .946553550549864, .9470155430933681, .9474772376182993, .947938634645885, .9483997346958671, .9488605382865075, .9493210459345939, .9497812581554465, .9502411754629217, .9507007983694208, .9511601273858931, .9516191630218428, .9520779057853349, .9525363561829999, .9529945147200402, .9534523819002355, .9539099582259479, .9543672441981287, .9548242403163215, .9552809470786706, .9557373649819242, .9561934945214409, .9566493361911946, .9571048904837803, .957560157890419, .9580151389009636, .9584698340039032, .9589242436863693, .9593783684341407, .9598322087316485, .9602857650619817, .9607390379068922, .9611920277467992, .9616447350607958, .9620971603266527, .9625493040208236, .9630011666184514, .9634527485933709, .9639040504181161, .9643550725639237, .9648058155007385, .9652562796972185, .9657064656207391, .9661563737373994, .9666060045120247, .9670553584081741, .9675044358881427, .9679532374129683, .9684017634424352, .9688500144350788, .969297990848191, .9697456931378244, .9701931217587966, .9706402771646961, .9710871598078853, .9715337701395063, .9719801086094847, .9724261756665348, .9728719717581634, .9733174973306754, .9737627528291767, .9742077386975799, .9746524553786086, .9750969033138012, .9755410829435159, .9759849947069349, .9764286390420681, .976872016385759, .9773151271736872, .9777579718403738, .9782005508191854, .9786428645423387, .9790849134409042, .9795266979448097, .9799682184828468, .9804094754826725, .9808504693708154, .9812912005726785, .9817316695125434, .9821718766135753, .9826118222978263, .9830515069862399, .9834909310986545, .9839300950538076, .9843689992693404, .9848076441618009, .9852460301466487, .9856841576382579, .9861220270499221, .9865596387938579, .9869969932812083, .9874340909220475, .9878709321253837, .9883075172991641, .9887438468502779, .9891799211845601, .9896157407067957, .9900513058207229, .9904866169290382, .9909216744333976, .9913564787344237, .9917910302317056, .9922253293238062, .9926593764082635, .9930931718815946, .9935267161393003, .9939600095758677, .9943930525847745, .9948258455584919, .9952583888884886, .9956906829652349, .9961227281782049, .9965545249158808, .9969860735657569, .9974173745143414, .9978484281471626, .9982792348487693, .9987097950027365, .9991401089916675, .9995701771971982, 1]);
                var o = t.length, r = (e[0] / 2.55 + 16) / 116, a = (e[1] - 127) / 500 + r, i = r - (e[2] - 127) / 200, n = r * r * r, l = a * a * a, s = i * i * i;
                r = n > .008856 ? n : (r - 16 / 116) / 7.787, a = l > .008856 ? l : (a - 16 / 116) / 7.787, i = s > .008856 ? s : (i - 16 / 116) / 7.787, a = .95047 * a, r = 1 * r, i = 1.08883 * i;
                var u = 3.2406 * a + -1.5372 * r + i * -.4986, f = a * -.9689 + 1.8758 * r + .0415 * i, c = .0557 * a + r * -.204 + 1.057 * i;
                return u = 0 >= u ? 0 : u >= 1 ? 1 : t[u * o | 0], f = 0 >= f ? 0 : f >= 1 ? 1 : t[f * o | 0], c = 0 >= c ? 0 : c >= 1 ? 1 : t[c * o | 0], u = 255 * u + .5 | 0, f = 255 * f + .5 | 0, c = 255 * c + .5 | 0, [u, f, c]
            }, t.exports = o
        }), e.define("/src/js/filters/enhance.js", function(e, t) {
            "use strict";
            var o = {}, r = (e("./colorConversion"), e("./histogramMapping")), a = e("../core/copy"), i = function(e) {
                var t, o, r = [], a = [], i = [], n = [];
                for (e.moaGL && (e = e.moaGL.getImageDataFromFramebuffer()), t = 0; 256 > t; t++)
                    a[t] = 0, i[t] = 0, n[t] = 0;
                for (t = 0, o = e.length; o > t; t += 4)
                    a[e[t]]++, i[e[t + 1]]++, n[e[t + 2]]++;
                return r[0] = a, r[1] = i, r[2] = n, r
            }, n = function(e) {
                for (var t = 0, o = 0; 256 > o; o++)
                    t += e[o];
                var r = new Array(256);
                r[0] = e[0] / t;
                for (var a = 1; 256 > a; a++)
                    r[a] = e[a] / t + r[a - 1];
                return r
            }, l = function(e, t) {
                if (0 >= t)
                    return 0;
                if (t >= 1)
                    return 255;
                for (var o = 0; t > e[o]; )
                    o++;
                if (0 === o)
                    return t / e[o];
                var r = o - 1 + (t - e[o - 1]) / (e[o] - e[o - 1]);
                return r
            };
            o.nightenhance = function(e, t, o) {
                s(e, e, t, o)
            }, o.localcontrastenhance = function(e, t, o) {
                f(e, t, o)
            }, o.labcorrect = function(e, t, o) {
                var r = 0, a = 0, s = [], u = [], f = [], c = [];
                for (a = 0; 256 > a; a++)
                    s[a] = 0, u[a] = 0, f[a] = 0;
                var c = [0, .030352698354883748, .060705396709767497, .09105809506465125, .12141079341953499, .15176349177441875, .1821161901293025, .21246888848418624, .24282158683906999, .27317428519395376, .3035269835488375, .3346535763899161, .3676507324047436, .40247170184963066, .43914420374102936, .4776953480693729, .5181516702338386, .5605391624202722, .6048833022857054, .6512090792594475, .6995410187265387, .7499032043226175, .8023192985384995, .8568125618069307, .9134058702220788, .9721217320237849, 1.0329823029626937, 1.0960094006488246, 1.1612245179743885, 1.2286488356915872, 1.2983032342173013, 1.3702083047289686, 1.4443843596092545, 1.520851442291271, 1.599629336550963, 1.6807375752887384, 1.7641954488384077, 1.8500220128379696, 1.9382360956935722, 2.02885630566524, 2.1219010376003555, 2.2173884793387386, 2.315336617811041, 2.4157632448504756, 2.518685962736163, 2.6241221894849898, 2.7320891639074896, 2.8426039504420793, 2.95568344378088, 3.0713443732993633, 3.1896033073011534, 3.3104766570885054, 3.433980680868217, 3.5601314875020345, 3.688945040110004, 3.82043715953465, 3.9546235276732835, 4.091519690685319, 4.231141062080967, 4.3735029256973466, 4.518620438567554, 4.666508633688009, 4.8171824226889415, 4.970656598412723, 5.126945837404324, 5.286064702318025, 5.448027644244237, 5.612849004960009, 5.780543019106723, 5.95112381629812, 6.124605423161761, 6.301001765316768, 6.480326669290577, 6.662593864377289, 6.8478169844400165, 7.036009569659588, 7.227185068231748, 7.421356838014963, 7.618538148130785, 7.818742180518632, 8.021982031446832, 8.22827071298148, 8.437621154414881, 8.650046203654977, 8.865558628577293, 9.084171118340768, 9.305896284668744, 9.53074666309647, 9.758734714186247, 9.989872824711389, 10.224173308810132, 10.461648409110419, 10.702310297826761, 10.946171077829932, 11.193242783690561, 11.443537382697373, 11.697066775851084, 11.953842798834561, 12.213877222960187, 12.47718175609505, 12.743768043564744, 13.013647669036429, 13.286832155381797, 13.563332965520566, 13.843161503245183, 14.126329114027165, 14.412847085805778, 14.702726649759498, 14.995978981060857, 15.292615199615017, 15.59264637078274, 15.89608350608804, 16.2029375639111, 16.513219450166762, 16.826940018969076, 17.14411007328226, 17.464740365558505, 17.78884159836291, 18.116424424986022, 18.4474994500441, 18.782077230067788, 19.120168274079138, 19.46178304415758, 19.806931955994887, 20.155625379439705, 20.507873639031693, 20.863687014525574, 21.223075741405523, 21.586050011389926, 21.95261997292692, 22.32279573168085, 22.696587351009835, 23.074004852434914, 23.45505821610052, 23.839757381227102, 24.228112246555487, 24.620132670783548, 25.015828472995345, 25.415209433082676, 25.818285292159583, 26.225065752969623, 26.635560480286248, 27.04977910130658, 27.467731206038465, 27.88942634768104, 28.31487404299921, 28.74408377269175, 29.17706498175359, 29.613827079832113, 30.05437944157765, 30.49873140698863, 30.946892281750856, 31.398871337571755, 31.854677812509184, 32.31432091129508, 32.777809805654215, 33.245153634617935, 33.71636150483304, 34.191442490866095, 34.67040563550296, 35.15325995004394, 35.640014414594354, 36.13067797835095, 36.62525955988395, 37.12376804741491, 37.62621229909065, 38.13260114325301, 38.6429433787049, 39.157247774972326, 39.67552307256268, 40.19777798321958, 40.72402119017367, 41.25426134839037, 41.788507084813745, 42.32676699860717, 42.86904966139066, 43.415363617474895, 43.96571738409188, 44.52011945162278, 45.078578283822345, 45.64110231804047, 46.20769996544071, 46.7783796112159, 47.353149614800955, 47.93201831008268, 48.514994005607036, 49.10208498478356, 49.693299506087044, 50.28864580325687, 50.888132085493375, 51.49176653765214, 52.09955732043543, 52.711512570581306, 53.32764040105052, 53.947948901210715, 54.57244613701866, 55.201140151200015, 55.83403896342679, 56.471150570492924, 57.11248294648731, 57.75804404296506, 58.40784178911641, 59.06188409193369, 59.720178836376334, 60.38273388553378, 61.04955708078648, 61.72065624196511, 62.39603916750761, 63.07571363461469, 63.75968739940326, 64.44796819705822, 65.14056374198242, 65.83748172794485, 66.5387298282272, 67.24431569576875, 67.95424696330939, 68.66853124353135, 69.38717612919899, 70.11018919329732, 70.83757798916868, 71.56935005064807, 72.30551289219693, 73.04607400903537, 73.79104087727309, 74.54042095403875, 75.29422167760778, 76.05245046752924, 76.8151147247507, 77.58222183174236, 78.35377915261935, 79.12979403326302, 79.9102738014409, 80.69522576692516, 81.48465722161012, 82.27857543962836, 83.07698767746547, 83.879901174074, 84.6873231509858, 85.49926081242339, 86.31572134541024, 87.13671191987972, 87.96223968878317, 88.79231178819663, 89.62693533742664, 90.46611743911495, 91.30986517934193, 92.15818562772947, 93.01108583754237, 93.8685728457888, 94.73065367331999, 95.59733532492861, 96.46862478944651, 97.34452903984125, 98.22505503331172, 99.11020971138298, 100], d = [0, .09924488254695861, .12504071661525748, .14313588920856027, .1575414309575025, .16970636198605316, .18033991980928551, .18984863055466036, .19848976509391722, .20643767470661487, .21381661776730748, .2207186428753261, .22721406110407222, .2333579349114362, .2391942859295316, .24475892765281868, .2500814332305149, .25518653946003345, .2600951718542145, .26482520821552014, .26939205754235684, .27380910584090884, .27808806426285243, .2822392443945425, .28627177841712054, .2901937969941595, .2940125743549161, .2977346476408758, .3013659158571899, .30491172251223664, .3083769250994826, .311765953881872, .315082861915005, .31833136784577337, .32151489271552486, .3246365917579799, .3276993819951494, .33070596628701154, .3336588543735265, .336560381353843, .3394127239721063, .34221791501818183, .3449778561018543, .34769432901832303, .350369005889286, .3530034582361798, .3555991651191077, .35815752045576577, .360679839618571, .3631673653946448, .36562127338186107, .3680426768844678, .37043263136354043, .37279213849048415, .3751221498457724, .3774235702999315, .3796972611093207, .38194404275540383, .38416469755287136, .3863599720490726, .38853057923469275, .3906772005834086, .39280048793632477, .3949010652453065, .39697953018783444, .3990364556647021, .40107239119071786, .4030878641875543, .40508338118698156, .40705942895191655, .4090164755220073, .41095497118983254, .41287534941322973, .41477802766875577, .41666340825083015, .41853187902070177, .4203838141090141, .4222195745754141, .42403950902835275, .4258439542079576, .42763323553461496, .4294076676256808, .4311675547825421, .43291319145006824, .43464486265033075, .43636284439232104, .43806740405925904, .439758800774965, .44143728575065216, .4431031026133969, .44475648771744863, .4463976704394558, .44802687345860653, .4496443130226092, .45125019920037296, .4528447361221874, .45442812220814444, .4560005503854936, .45756220829557587, .4591132784909362, .46065393862317483, .46218436162206117, .4637047158663982, .4652151653470947, .46671586982287233, .46820698496900803, .4696886625194857, .4711610504029096, .47262429287250746, .4740785306305335, .4755239009473612, .4769605377755387, .47838857185906314, .4798081308381152, .48121933934948075, .48262231912287346, .4840171890733601, .4854040653900775, .4867830616214213, .4881542887568748, .4895178553056373, .4908738673722041, .4922224287290381, .4935636408864699, .4948976031599528, .496224412734793, .49754416472847035, .4988569522506557, .5001628664610298, .501461996624999, .5027544301674005, .5040402527242843, .5053195481928565, .5065923987796591, .5078588850470654, .5091190859581595, .5103730789200669, .5116209398258046, .5128627430947063, .514098561711485, .5153284672639881, .516552529979695, .5177708187610112, .5189834012194042, .520190343708429, .5213917113556842, .5225875680937435, .5237779766901, .524962998776162, .5261426948753368, .5273171244302366, .5284863458290399, .5296504164310403, .530809392591412, .5319633296852224, .5331122821307175, .5342563034119088, .5353954461004848, .5365297618770742, .5376593015518806, .5387841150847137, .5399042516044376, .5410197594278565, .5421306860780567, .5432370783022257, .5443389820889641, .5454364426851102, .5465295046120907, .5476182116818177, .5487026070121426, .5497827330418863, .5508586315454556, .5519303436470633, .5529979098345615, .5540613699729042, .555120763317248, .5561761285257049, .5572275036717572, .5582749262563468, .5593184332196459, .5603580609525242, .5613938453077163, .5624258216107048, .5634540246703222, .564478488789085, .5654992477732644, .5665163349427048, .5675297831403955, .5685396247418045, .5695458916639811, .5705486153744331, .5715478268997879, .5725435568342411, .5735358353478003, .5745246921943311, .5755101567194079, .5764922578679786, .577471024191847, .5784464838569776, .5794186646506286, .5803875939883189, .5813532989206311, .582315806139859, .5832751419864992, .5842313324555962, .5851844032029409, .5861343795511286, .5870812864954806, .5880251487098322, .5889659905521902, .5899038360702656, .5908387090068827, .5917706328052692, .5926996306142294, .5936257252932051, .5945489394172259, .5954692952817516, .5963868149074115, .5973015200446405, .5982134321782173, .599122572531705, .6000289620717986, .60093262151258, .6018335713196846, .6027318317143798, .6036274226775593, .6045203639536548, .6054106750544663, .606298375262915, .6071834836367179, .6080660190119893, .6089460000067677, .6098234450244732, .6106983722572941, .6115707996895061, .6124407451007265, .613308226069102, .6141732599744346, .6150358640012467, .6158960551417848, .6167538501989651, .6176092657892629, .6184623183455441, .6193130241198446, .620161399186094, .6210074594427897, .6218512206156173, .6226926982600246, .623531907763744, .6243688643492697, .6252035830762873, .6260360788440587, .626866366393762, .6276944603107898, .6285203750270028, .6293441248229434, .6301657238300099, .6309851860325884, .6318025252701481, .6326177552392989, .63343088949581, .6342419414565944, .6350509244016576, .6358578514760097, .6366627356915467, .6374655899288959, .6382664269392303, .6390652593460512, .6398620996469384, .6406569602152721, .6414498533019224, .6422407910369122, .6430297854310497, .6438168483775332, .6446019916535295, .6453852269217243, .6461665657318468, .646946019522169, .6477235996209785, .6484993172480279, .6492731835159596, .6500452094317067, .6508154058978702, .651583783714075, .6523503535783013, .6531151260881964, .653878111742364, .6546393209416315, .6553987639902987, .6561564510973654, .6569123923777382, .6576665978534199, .6584190774546778, .6591698410211952, .6599188983032032, .660666258962595, .6614119325740231, .6621559286259783, .6628982565218523, .6636389255809841, .6643779450396892, .6651153240522729, .665851071692029, .6665851969522216, .667317708747053, .6680486159126159, .6687779272078317, .6695056513153739, .6702317968425779, .6709563723223373, .6716793862139855, .6724008469041655, .673120762707686, .6738391418683641, .6745559925598569, .675271322886479, .6759851408840097, .6766974545204868, .6774082716969896, .67811760024841, .6788254479442125, .6795318224891835, .6802367315241687, .6809401826268009, .6816421833122166, .6823427410337628, .6830418631836931, .6837395570938545, .6844358300363635, .6851306892242741, .6858241418122343, .6865161948971349, .6872068555187488, .687896130660361, .6885840272493903, .689270552158001, .6899557122037085, .6906395141499742, .6913219647067927, .6920030705312724, .6926828382282061, .6933612743506347, .6940383854004035, .6947141778287103, .6953886580366461, .6960618323757292, .6967337071484312, .6974042886086962, .6980735829624533, .6987415963681218, .6994083349371105, .7000738047343085, .7007380117785719, .7014009620432023, .7020626614564196, .7027231159018287, .7033823312188793, .7040403132033212, .7046970676076518, .7053526001415594, .7060069164723595, .7066600222254262, .7073119229846179, .7079626242926972, .7086121316517457, .7092604505235738, .7099075863301242, .7105535444538713, .7111983302382154, .7118419489878712, .7124844059692523, .71312570641085, .7137658555036082, .7144048584012926, .7150427202208567, .7156794460428013, .7163150409115315, .7169495098357082, .7175828577885948, .7182150897084011, .718846210498622, .7194762250283715, .720105138132714, .7207329546129908, .721359679237142, .721985316740026, .7226098718237337, .7232333491578999, .7238557533800104, .7244770890957053, .7250973608790793, .7257165732729777, .7263347307892896, .7269518379092367, .7275678990836596, .7281829187333003, .728796901249081, .7294098509923802, .7300217722953055, .7306326694609626, .7312425467637221, .7318514084494824, .7324592587359297, .7330661018127955, .7336719418421106, .7342767829584559, .7348806292692114, .735483484854801, .7360853537689355, .7366862400388527, .737286147665554, .7378850806240391, .7384830428635379, .7390800383077395, .7396760708550189, .7402711443786605, .7408652627270808, .741458429724046, .7420506491688895, .7426419248367259, .7432322604786622, .7438216598220084, .7444101265704832, .7449976644044198, .7455842769809682, .7461699679342954, .7467547408757834, .7473385993942256, .7479215470560205, .748503587405363, .7490847239644346, .7496649602335902, .7502442996915447, .7508227457955557, .7514003019816053, .7519769716645798, .7525527582384471, .7531276650764331, .753701695531195, .7542748529349934, .754847140599863, .7554185618177804, .7559891198608314, .7565588179813753, .7571276594122083, .757695647366725, .7582627850390781, .7588290756043364, .7593945222186415, .7599591280193618, .7605228961252469, .7610858296365782, .7616479316353195, .7622092051852651, .7627696533321872, .7633292791039805, .7638880855108077, .7644460755452401, .7650032521824002, .7655596183801003, .7661151770789814, .7666699312026493, .7672238836578102, .7677770373344053, .7683293951057427, .7688809598286291, .7694317343435, .7699817214745477, .7705309240298498, .7710793448014944, .7716269865657057, .7721738520829675, .772719944098145, .7732652653406075, .7738098185243465, .7743536063480964, .7748966314954512, .775438896634981, .7759804044203481, .7765211574904205, .7770611584693855, .7776004099668616, .7781389145780099, .778676674883643, .7792136934503352, .7797499728305293, .7802855155626435, .7808203241711775, .7813544011668172, .7818877490465378, .7824203702937074, .782952267378188, .783483442756437, .7840138988716062, .7845436381536416, .7850726630193806, .7856009758726495, .7861285791043594, .7866554750926015, .7871816662027413, .7877071547875124, .7882319431871087, .7887560337292759, .7892794287294033, .7898021304906129, .7903241413038489, .7908454634479661, .7913660991898175, .7918860507843407, .7924053204746444, .7929239104920931, .7934418230563915, .7939590603756689, .7944756246465603, .7949915180542906, .7955067427727543, .7960213009645972, .7965351947812954, .7970484263632353, .7975609978397913, .7980729113294042, .7985841689396577, .7990947727673552, .799604724898595, .8001140274088461, .8006226823630215, .8011306918155525, .8016380578104618, .8021447823814357, .8026508675518954, .8031563153350691, .8036611277340616, .8041653067419244, .8046688543417252, .8051717725066162, .8056740631999023, .8061757283751086, .8066767699760472, .8071771899368835, .8076769901822017, .8081761726270704, .8086747391771066, .8091726917285403, .8096700321682774, .8101667623739631, .810662884214044, .81115839954783, .8116533102255556, .8121476180884412, .8126413249687521, .8131344326898597, .8136269430663002, .8141188579038331, .8146101789994995, .8151009081416802, .8155910471101533, .8160805976761496, .8165695616024108, .8170579406432438, .8175457365445769, .8180329510440145, .8185195858708919, .8190056427463286, .8194911233832824, .8199760294866028, .8204603627530825, .8209441248715112, .8214273175227265, .8219099423796651, .8223920011074144, .8228734953632629, .8233544267967502, .8238347970497164, .8243146077563521, .8247938605432471, .8252725570294385, .8257506988264595, .8262282875383863, .8267053247618866, .8271818120862655, .8276577510935128, .8281331433583488, .82860799044827, .8290822939235957, .8295560553375114, .8300292762361152, .830501958158461, .830974102636603, .8314457111956398, .831916785353757, .8323873266222709, .8328573365056704, .8333268165016603, .8337957681012022, .8342641927885572, .8347320920413266, .8351994673304931, .8356663201204616, .8361326518690991, .8365984640277758, .8370637580414035, .8375285353484762, .8379927973811084, .8384565455650747, .8389197813198476, .8393825060586361, .8398447211884238, .8403064281100062, .8407676282180282, .8412283229010212, .8416885135414399, .8421482015156988, .8426073881942083, .843066074941411, .8435242631158167, .8439819540700386, .8444391491508282, .8448958496991095, .8453520570500146, .8458077725329176, .8462629974714685, .8467177331836275, .8471719809816981, .8476257421723606, .8480790180567055, .8485318099302657, .8489841190830497, .8494359467995736, .8498872943588931, .8503381630346358, .8507885540950325, .8512384688029485, .8516879084159152, .8521368741861606, .85258536736064, .8530333891810667, .8534809408839426, .8539280237005873, .8543746388571686, .854820787574732, .8552664710692298, .8557116905515508, .8561564472275487, .856600742298071, .8570445769589876, .8574879524012193, .8579308698107657, .8583733303687329, .8588153352513616, .8592568856300545, .859697982671404, .8601386275372181, .8605788213845489, .8610185653657182, .8614578606283446, .8618967083153697, .8623351095650842, .8627730655111538, .8632105772826455, .8636476460040526, .8640842727953206, .8645204587718719, .8649562050446316, .8653915127200517, .8658263829001364, .8662608166824664, .866694815160223, .8671283794222129, .8675615105528918, .8679942096323882, .8684264777365276, .8688583159368556, .8692897253006614, .8697207068910011, .8701512617667205, .8705813909824783, .8710110955887687, .871440376631944, .8718692351542368, .8722976721937826, .872725688784642, .8731532859568221, .8735804647362989, .8740072261450385, .8744335712010189, .8748595009182516, .8752850163068022, .8757101183728118, .876134808118518, .8765590865422758, .8769829546385779, .8774064133980755, .8778294638075984, .8782521068501757, .8786743435050556, .879096174747725, .87951760154993, .8799386248796953, .8803592457013438, .8807794649755161, .8811992836591893, .8816187027056972, .8820377230647484, .8824563456824455, .8828745715013043, .8832924014602719, .8837098364947455, .884126877536591, .8845435255141612, .8849597813523133, .8853756459724286, .8857911202924285, .8862062052267938, .8866209016865818, .8870352105794438, .8874491328096428, .8878626692780711, .888275820882267, .8886885885164322, .8891009730714491, .8895129754348972, .8899245964910704, .8903358371209934, .8907466982024383, .8911571806099414, .8915672852148191, .8919770128851846, .8923863644859639, .8927953408789115, .8932039429226274, .8936121714725718, .8940200273810814, .8944275114973853, .8948346246676199, .895241367734845, .8956477415390587, .8960537469172131, .896459384703229, .8968646557280114, .8972695608194643, .8976741008025054, .8980782764990811, .8984820887281812, .8988855383058536, .8992886260452183, .8996913527564827, .9000937192469548, .9004957263210588, .9008973747803478, .9012986654235191, .9016995990464275, .9021001764420992, .9025003984007458, .9029002657097783, .9032997791538201, .9036989395147207, .9040977475715697, .9044962041007096, .9048943098757493, .9052920656675773, .9056894722443748, .906086530371629, .9064832408121458, .9068796043260627, .9072756216708617, .9076712936013822, .9080666208698333, .9084616042258066, .9088562444162888, .909250542185674, .909644498275776, .9100381134258407, .9104313883725582, .9108243238500753, .9112169205900067, .911609179321448, .9120011007709872, .912392685662716, .9127839347182426, .9131748486567027, .9135654281947713, .9139556740466742, .9143455869241996, .9147351675367098, .9151244165911517, .9155133347920691, .9159019228416131, .9162901814395539, .9166781112832916, .9170657130678669, .9174529874859728, .9178399352279649, .9182265569818724, .9186128534334087, .9189988252659826, .9193844731607087, .9197697977964173, .9201547998496661, .9205394799947498, .9209238389037109, .9213078772463497, .9216915956902347, .9220749949007134, .9224580755409214, .9228408382717931, .9232232837520717, .9236054126383193, .9239872255849265, .9243687232441223, .9247499062659842, .9251307752984477, .925511330987316, .9258915739762699, .9262715049068767, .9266511244186009, .9270304331488122, .9274094317327963, .9277881208037635, .9281665009928579, .9285445729291671, .9289223372397313, .9292997945495522, .9296769454816025, .9300537906568345, .9304303306941893, .9308065662106061, .9311824978210302, .931558126138423, .9319334517737698, .9323084753360892, .9326831974324412, .9330576186679365, .9334317396457447, .9338055609671028, .934179083231324, .934552307035806, .9349252329760395, .935297861645616, .935670193636237, .936042229537722, .936413969938016, .9367854154231987, .937156566577492, .9375274239832683, .9378979882210586, .9382682598695602, .938638239505645, .9390079277043673, .9393773250389714, .9397464320808999, .9401152493998012, .9404837775635372, .9408520171381909, .9412199686880747, .9415876327757369, .9419550099619702, .9423221008058192, .9426889058645871, .943055425693844, .9434216608474337, .9437876118774816, .9441532793344015, .9445186637669033, .944883765722, .9452485857450149, .9456131243795891, .945977382167688, .9463413596496092, .9467050573639889, .9470684758478091, .9474316156364045, .9477944772634701, .9481570612610669, .9485193681596299, .948881398487974, .9492431527733017, .9496046315412092, .9499658353156932, .950326764619158, .9506874199724215, .9510478018947224, .9514079109037265, .9517677475155331, .9521273122446822, .9524866056041599, .9528456281054056, .9532043802583186, .9535628625712634, .9539210755510774, .9542790197030759, .9546366955310597, .9549941035373201, .9553512442226458, .955708118086329, .9560647256261716, .956421067338491, .9567771437181263, .9571329552584446, .9574885024513466, .9578437857872732, .9581988057552107, .9585535628426971, .9589080575358283, .9592622903192632, .9596162616762304, .9599699720885332, .9603234220365561, .9606766119992698, .9610295424542377, .9613822138776207, .9617346267441839, .9620867815273011, .9624386786989614, .962790318729774, .9631417020889744, .9634928292444291, .963843700662642, .9641943168087592, .9645446781465745, .9648947851385351, .9652446382457469, .9655942379279795, .9659435846436719, .9662926788499377, .9666415210025703, .9669901115560479, .9673384509635392, .9676865396769084, .9680343781467202, .9683819668222451, .9687293061514642, .969076396581075, .9694232385564956, .9697698325218702, .970116178920074, .9704622781927181, .970808130780155, .9711537371214826, .9714990976545498, .9718442128159609, .9721890830410812, .972533708764041, .9728780904177409, .9732222284338563, .9735661232428426, .9739097752739395, .9742531849551758, .9745963527133741, .9749392789741559, .9752819641619453, .9756244086999749, .9759666130102891, .9763085775137494, .9766503026300392, .9769917887776673, .9773330363739738, .9776740458351333, .9780148175761602, .9783553520109127, .9786956495520978, .9790357106112746, .97937553559886, .9797151249241322, .9800544789952351, .9803935982191831, .9807324830018651, .9810711337480483, .9814095508613835, .9817477347444082, .9820856857985518, .9824234044241392, .9827608910203951, .9830981459854481, .9834351697163352, .9837719626090052, .9841085250583236, .9844448574580762, .984780960200973, .985116833678653, .9854524782816871, .9857878943995831, .9861230824207893, .9864580427326981, .9867927757216505, .9871272817729397, .9874615612708154, .987795614598487, .9881294421381279, .9884630442708796, .9887964213768549, .989129573835142, .9894625020238087, .9897952063199055, .9901276870994697, .9904599447375294, .9907919796081064, .9911237920842207, .9914553825378941, .9917867513401535, .9921178988610346, .992448825469586, .9927795315338723, .9931100174209779, .9934402834970106, .9937703301271053, .9941001576754271, .9944297665051756, .9947591569785874, .9950883294569406, .9954172843005578, .9957460218688093, .9960745425201175, .996402846611959, .9967309345008691, .997058806542445, .9973864630913489, .9977139045013114, .9980411311251348, .9983681433146974, .998694941420955, .9990215257939463, .9993478967827943, .999674054735711, 1], h = [0, .01262952101661779, .02525904203323558, .03788856304985337, .049711876377871826, .05991457469741709, .06898447286600867, .0772092360066284, .08477358579410943, .091804259875822, .09839255413111209, .10460674144643575, .11049941567981197, .116112082049842, .12147815731101994, .12662500399558943, .13157535287823224, .1363483240840589, .1409601768441825, .14542487095720244, .14975449458714327, .15395959525747982, .1580494394769152, .16203221890462635, .16591521589126665, .16970493774704687, .17340722665014255, .1770273503750349, .18057007776923878, .18403974199157158, .18744029384710506, .19077534704588353, .1940482168277028, .19726195310091915, .20041936901604623, .20352306571797985, .2065754538818233, .20957877252746188, .21253510552056065, .21544639609752403, .21831445969536206, .2211409953214818, .2239275956609244, .22667575608780954, .22938688272237368, .2320622996539648, .2347032554328511, .2373109289190679, .2398864345642407, .24243082719196402, .24494510633355537, .24743022016856214, .2498870691130589, .25231650909335385, .25471935453807176, .25709638111758565, .2594483282563151, .2617759014404253, .26407977434087276, .2663605907694862, .26861896648381073, .27085549085472227, .2730707284093175, .2752652202602596, .2774394854315987, .27959402209005907, .2817293086898797, .28384580503848866, .2859439532895821, .2880241788695442, .29008689134257926, .2921324852194264, .2941613407140744, .296173824452494, .29817029013704466, .30015107916988515, .30211652123843086, .3040669348656343, .3060026279276311, .30792389814107823, .3098310335223196, .3117243128203384, .3136040059252957, .3154703742543138, .3173236711160275, .3191641420553126, .32099202517948666, .3228075514671829, .32461094506100485, .32640242354498716, .328182198207814, .3299504742926743, .331707451234572, .33345332288585067, .3351882777306368, .33691249908885884, .33862616531045336, .3403294499603252, .3420225219945948, .3437055459286266, .34537868199729943, .34704208630795363, .3486959109864158, .3503403043164812, .3519754108732058, .35360137165034033, .3552183241822174, .3568264026603817, .35842573804523775, .3600164581729729, .3615986878579945, .36317254899111157, .36473816063367165, .3662956391078557, .36784509808331944, .3693866486603606, .37092039944977906, .37244645664958986, .3739649241187381, .37547590344795784, .37697949402790815, .3784757931147127, .3799648958930234, .3814468955367197, .3829218832673514, .3843899484104266, .38585117844964034, .3873056590791346, .38875347425387746, .39019470623824154, .3916294356528607, .39305774151983813, .3944797013063766, .3958953909668962, .3973048849837052, .398708256406281, .4001055768892218, .40149691672892146, .40288234489901914, .4042619290846755, .40563573571572004, .40700382999871526, .4083662759479818, .409723136415623, .4110744731205898, .41242034667682187, .4137608166205015, .41509594143645334, .41642577858372254, .41775038452036234, .41906981472746097, .420384123732435, .4216933651316181, .4229975916121692, .42429685497332564, .4255912061470252, .4268806952179194, .4281653714427998, .42944528326945836, .43072047835500143, .4319910035836372, .43325690508395387, .43451822824570774, .43577501773613614, .43702731751581336, .43827517085406376, .4395186203439474, .44075770791683294, .4419924748565711, .44322296181328236, .4444492088167707, .445671255289577, .4468891400596831, .4481029013728773, .44931257690479337, .45051820377263313, .4517198185465818, .45291745726092675, .4541111554248895, .4553009480331786, .45648686957627277, .4576689540504429, .45884723496752006, .46002174536441914, .46119251781242304, .4623595844262362, .46352297687281546, .46468272637998137, .46583886374482125, .46699141934188554, .46814042313118737, .469285904666008, .47042789310051664, .47156641719720765, .4727015053341615, .4738331855121353, .47496148536148547, .47608643214893004, .4772080527841532, .47832637382625737, .479441421490067, .4805532216522879, .4816617998575264, .482767181324172, .48386939095014764, .48496845331853117, .4860643927030504, .4871572330734569, .48824699810078104, .48933371116247054, .4904173953474175, .4914980734608752, .4925757680292682, .49365050130489957, .49472229527055495, .49579117164401115, .49685715188244534, .49792025718675353, .4989805085057765, .5000379265404378, .5010925317477942, .5021443443450035, .5031933843132081, .5042396714013406, .5052832251298499, .5063240647943513, .5073622094692027, .5083976780110088, .5094304890620533, .5104606610536634, .5114882122095067, .512513160548822, .5135355238895871, .514555319851623, .5155725658596376, .5165872791462103, .5175994767547175, .518609175542202, .5196163921821871, .5206211431674361, .5216234448126594, .522623313257169, .5236207644674844, .5246158142398872, .5256084782029289, .5265987718198912, .5275867103912004, .5285723090567965, .5295555827984594, .5305365464420905, .5315152146599541, .5324916019728768, .533465722752407, .5344375912229347, .5354072214637743, .5363746274112078, .5373398228604933, .5383028214678364, .5392636367523269, .5402222820978414, .5411787707549106, .5421331158425572, .5430853303500971, .5440354271389132, .5449834189441957, .545929318376653, .5468731379241937, .5478148899535785, .5487545867120445, .5496922403289016, .550627862817102, .5515614660747821, .5524930618867796, .5534226619261247, .5543502777555052, .5552759208287091, .5561996024920415, .5571213339857184, .5580411264452384, .5589589909027302, .5598749382882796, .5607889794312336, .5617011250614838, .5626113858107291, .5635197722137174, .5644262947094677, .5653309636424726, .5662337892638817, .5671347817326651, .5680339511167598, .5689313073941972, .5698268604542126, .5707206200983378, .5716125960414764, .5725027979129619, .5733912352575995, .5742779175366926, .5751628541290517, .5760460543319896, .5769275273622997, .5778072823572206, .5786853283753848, .5795616743977544, .5804363293285412, .5813093019961135, .5821806011538895, .5830502354812169, .5839182135842398, .5847845439967515, .5856492351810363, .5865122955286974, .5873737333614738, .5882335569320437, .5890917744248176, .5899483939567188, .5908034235779529, .5916568712727662, .5925087449601928, .5933590524947909, .5942078016673694, .5950550002057023, .5959006557752352, .5967447759797787, .5975873683621958, .5984284404050756, .5992679995314003, .6001060531052015, .6009426084322078, .601777672760483, .6026112532810554, .6034433571285388, .6042739913817439, .6051031630642828, .6059308791451635, .6067571465393772, .6075819721084775, .6084053626611514, .6092273249537822, .6100478656910059, .6108669915262589, .6116847090623188, .6125010248518375, .6133159453978685, .614129477154385, .6149416265267927, .6157523998724356, .6165618035010941, .6173698436754775, .6181765266117102, .6189818584798096, .6197858454041609, .6205884934639824, .621389808693787, .6221897970838367, .6229884645805916, .6237858170871525, .6245818604636987, .6253766005279194, .6261700430554399, .6269621937802424, .627753058395081, .628542642551892, .6293309518621987, .6301179918975115, .6309037681897214, .6316882862314913, .6324715514766395, .6332535693405202, .6340343452003991, .6348138843958234, .6355921922289883, .6363692739650979, .6371451348327226, .6379197800241517, .6386932146957418, .6394654439682601, .6402364729272251, .6410063066232419, .6417749500723333, .6425424082562685, .6433086861228857, .6440737885864122, .6448377205277801, .645600486794939, .6463620922031635, .6471225415353585, .6478818395423597, .6486399909432315, .6493970004255614, .6501528726457492, .650907612229295, .6516612237710832, .6524137118356617, .6531650809575201, .6539153356413631, .6546644803623813, .6554125195665185, .6561594576707364, .6569052990632761, .6576500481039163, .6583937091242286, .6591362864278302, .6598777842906337, .6606182069610937, .6613575586604503, .6620958435829714, .6628330658961898, .6635692297411403, .664304339232592, .665038398459279, .6657714114841288, .6665033823444867, .6672343150523395, .6679642135945361, .6686930819330041, .6694209240049673, .6701477437231571, .6708735449760244, .6715983316279475, .6723221075194388, .6730448764673485, .6737666422650662, .6744874086827211, .6752071794673781, .6759259583432347, .6766437490118126, .6773605551521499, .6780763804209894, .6787912284529659, .6795051028607908, .6802180072354358, .6809299451463133, .6816409201414555, .6823509357476922, .6830599954708256, .6837681027958041, .684475261186894, .6851814740878487, .6858867449220779, .6865910770928132, .6872944739832727, .6879969389568239, .6886984753571457, .6893990865083861, .6900987757153224, .6907975462635155, .6914954014194653, .692192344430764, .6928883785262472, .6935835069161438, .6942777327922245, .694971059327949, .6956634896786107, .6963550269814812, .6970456743559527, .6977354349036788, .6984243117087141, .6991123078376528, .699799426339765, .7004856702471326, .7011710425747831, .7018555463208224, .7025391844665666, .7032219599766716, .7039038757992623, .7045849348660602, .7052651400925095, .7059444943779024, .7066230006055029, .7073006616426692, .707977480340976, .7086534595363333, .7093286020491069, .7100029106842357, .7106763882313484, .7113490374648795, .7120208611441837, .7126918620136494, .7133620428028108, .7140314062264597, .7146999549847549, .7153676917633327, .7160346192334134, .7167007400519098, .7173660568615324, .7180305722908951, .7186942889546185, .719357209453434, .720019336374285, .7206806722904288, .7213412197615364, .7220009813337923, .7226599595399918, .7233181568996399, .7239755759190464, .724632219091423, .7252880888969768, .7259431878030049, .7265975182639874, .727251082721679, .7279038836052013, .7285559233311324, .7292072043035966, .7298577289143543, .7305074995428886, .7311565185564938, .7318047883103603, .7324523111476625, .7330990893996414, .7337451253856901, .7343904214134368, .7350349797788271, .7356788027662066, .7363218926484012, .7369642516867986, .7376058821314261, .7382467862210323, .7388869661831627, .7395264242342394, .7401651625796365, .7408031834137572, .741440488920109, .7420770812713791, .7427129626295076, .7433481351457623, .7439826009608107, .744616362204793, .7452494209973932, .7458817794479106, .7465134396553299, .7471444037083915, .7477746736856601, .7484042516555937, .7490331396766116, .749661339797162, .7502888540557885, .7509156844811968, .75154183309232, .7521673018983844, .7527920928989733, .7534162080840919, .7540396494342302, .7546624189204263, .7552845185043287, .7559059501382585, .7565267157652705, .7571468173192143, .7577662567247944, .7583850358976305, .7590031567443164, .7596206211624794, .7602374310408384, .7608535882592614, .7614690946888241, .7620839521918652, .7626981626220444, .7633117278243974, .7639246496353923, .7645369298829836, .7651485703866682, .7657595729575378, .766369939398335, .7669796715035041, .7675887710592457, .7681972398435691, .768805079626343, .7694122921693485, .7700188792263292, .7706248425430432, .7712301838573123, .7718349048990725, .7724390073904231, .773042493045677, .7736453635714078, .7742476206664997, .7748492660221942, .7754503013221389, .7760507282424334, .776650548451678, .7772497636110178, .7778483753741909, .7784463853875732, .7790437952902235, .7796406067139292, .7802368212832507, .7808324406155657, .781427466321113, .7820219000030365, .7826157432574284, .7832089976733718, .7838016648329837, .7843937463114573, .7849852436771035, .7855761584913932, .7861664923089979, .7867562466778316, .7873454231390905, .787934023227294, .7885220484703245, .7891095003894674, .78969638049945, .7902826903084814, .790868431318291, .7914536050241666, .7920382129149933, .7926222564732914, .7932057371752538, .7937886564907835, .7943710158835304, .7949528168109292, .7955340607242347, .7961147490685586, .7966948832829057, .7972744648002096, .7978534950473676, .7984319754452766, .7990099074088677, .7995872923471412, .8001641316632006, .8007404267542867, .8013161790118125, .8018913898213956, .8024660605628923, .8030401926104308, .8036137873324438, .8041868460917015, .8047593702453443, .8053313611449138, .8059028201363865, .806473748560204, .8070441477513057, .8076140190391593, .808183363747792, .8087521831958219, .8093204786964877, .8098882515576799, .8104555030819705, .8110222345666428, .811588447303722, .8121541425800035, .8127193216770835, .8132839858713867, .8138481364341967, .8144117746316832, .8149749017249316, .8155375189699711, .816099627617802, .8166612289144245, .8172223241008661, .8177829144132087, .8183430010826165, .8189025853353624, .819461668392856, .8200202514716689, .8205783357835622, .821135922535513, .8216930129297397, .8222496081637287, .8228057094302597, .8233613179174317, .8239164348086886, .8244710612828438, .8250251985141056, .8255788476721027, .8261320099219078, .8266846864240632, .8272368783346047, .827788586805086, .8283398129826024, .8288905580098155, .829440823024976, .8299906091619481, .8305399175502322, .8310887493149887, .8316371055770607, .8321849874529976, .8327323960550771, .8332793324913279, .833825797865553, .8343717932773512, .8349173198221393, .835462378591175, .8360069706715774, .83655109714635, .8370947590944016, .8376379575905678, .8381806937056326, .8387229685063494, .8392647830554617, .8398061384117246, .8403470356299247, .8408874757609016, .8414274598515679, .8419669889449293, .8425060640801054, .8430446862923493, .8435828566130675, .84412057606984, .84465784568644, .8451946664828526, .8457310394752956, .8462669656762376, .8468024460944176, .8473374817348641, .8478720735989141, .8484062226842315, .8489399299848259, .8494731964910713, .8500060231897245, .8505384110639432, .8510703610933044, .8516018742538222, .8521329515179663, .852663593854679, .8531938022293939, .8537235776040522, .8542529209371217, .854781833183613, .8553103152950976, .8558383682197243, .8563659929022369, .8568931902839906, .8574199613029695, .8579463068938025, .8584722279877803, .8589977255128725, .8595228003937431, .8600474535517671, .860571685905047, .8610954983684285, .8616188918535168, .8621418672686924, .8626644255191268, .8631865675067983, .8637082941305079, .8642296062858937, .864750504865448, .8652709907585314, .8657910648513881, .8663107280271617, .8668299811659093, .8673488251446174, .867867260837216, .8683852891145937, .8689029108446124, .8694201268921217, .8699369381189732, .8704533453840357, .8709693495432085, .8714849514494362, .8720001519527227, .8725149519001453, .8730293521358685, .873543353501158, .8740569568343945, .8745701629710876, .8750829727438886, .8755953869826052, .8761074065142143, .8766190321628751, .8771302647499432, .8776411050939833, .8781515540107819, .8786616123133618, .8791712808119936, .8796805603142088, .8801894516248137, .8806979555459011, .8812060728768631, .8817138044144045, .882221150952554, .8827281132826775, .883234692193491, .8837408884710714, .8842467028988698, .8847521362577235, .8852571893258682, .8857618628789493, .8862661576900348, .8867700745296263, .8872736141656715, .8877767773635756, .8882795648862128, .8887819774939383, .8892840159445996, .8897856809935476, .8902869733936489, .8907878938952963, .8912884432464204, .8917886221925007, .8922884314765765, .8927878718392589, .8932869440187404, .8937856487508071, .8942839867688488, .8947819588038698, .8952795655845005, .8957768078370067, .8962736862853018, .8967702016509559, .8972663546532074, .8977621460089725, .8982575764328569, .8987526466371646, .899247357331909, .8997417092248232, .90023570302137, .9007293394247513, .9012226191359196, .9017155428535865, .9022081112742335, .9027003250921215, .9031921849993009, .9036836916856209, .90417484583874, .9046656481441341, .9051560992851082, .9056461999428044, .9061359507962115, .9066253525221751, .9071144057954066, .9076031112884924, .9080914696719034, .9085794816140041, .9090671477810619, .9095544688372559, .9100414454446862, .9105280782633834, .9110143679513163, .911500315164402, .9119859205565143, .9124711847794927, .9129561084831508, .9134406923152851, .9139249369216844, .9144088429461374, .9148924110304419, .915375641814413, .9158585359358921, .9163410940307543, .9168233167329184, .9173052046743536, .9177867584850888, .9182679787932209, .9187488662249219, .9192294214044485, .9197096449541494, .9201895374944735, .9206690996439783, .9211483320193369, .9216272352353475, .9221058099049397, .9225840566391834, .9230619760472966, .9235395687366524, .9240168353127874, .9244937763794097, .9249703925384051, .9254466843898465, .9259226525320003, .9263982975613347, .9268736200725265, .9273486206584685, .9278232999102779, .9282976584173026, .9287716967671293, .9292454155455901, .9297188153367703, .9301918967230154, .9306646602849383, .9311371066014265, .9316092362496491, .9320810498050639, .9325525478414245, .9330237309307874, .9334945996435183, .9339651545483003, .9344353962121393, .9349053252003717, .9353749420766716, .9358442474030564, .9363132417398943, .9367819256459111, .9372502996781967, .9377183643922115, .9381861203417932, .9386535680791633, .9391207081549341, .9395875411181145, .9400540675161166, .9405202878947628, .9409862027982911, .9414518127693627, .9419171183490671, .9423821200769295, .9428468184909163, .9433112141274416, .9437753075213736, .9442390992060405, .9447025897132368, .9451657795732294, .9456286693147632, .946091259465068, .946553550549864, .9470155430933681, .9474772376182993, .947938634645885, .9483997346958671, .9488605382865075, .9493210459345939, .9497812581554465, .9502411754629217, .9507007983694208, .9511601273858931, .9516191630218428, .9520779057853349, .9525363561829999, .9529945147200402, .9534523819002355, .9539099582259479, .9543672441981287, .9548242403163215, .9552809470786706, .9557373649819242, .9561934945214409, .9566493361911946, .9571048904837803, .957560157890419, .9580151389009636, .9584698340039032, .9589242436863693, .9593783684341407, .9598322087316485, .9602857650619817, .9607390379068922, .9611920277467992, .9616447350607958, .9620971603266527, .9625493040208236, .9630011666184514, .9634527485933709, .9639040504181161, .9643550725639237, .9648058155007385, .9652562796972185, .9657064656207391, .9661563737373994, .9666060045120247, .9670553584081741, .9675044358881427, .9679532374129683, .9684017634424352, .9688500144350788, .969297990848191, .9697456931378244, .9701931217587966, .9706402771646961, .9710871598078853, .9715337701395063, .9719801086094847, .9724261756665348, .9728719717581634, .9733174973306754, .9737627528291767, .9742077386975799, .9746524553786086, .9750969033138012, .9755410829435159, .9759849947069349, .9764286390420681, .976872016385759, .9773151271736872, .9777579718403738, .9782005508191854, .9786428645423387, .9790849134409042, .9795266979448097, .9799682184828468, .9804094754826725, .9808504693708154, .9812912005726785, .9817316695125434, .9821718766135753, .9826118222978263, .9830515069862399, .9834909310986545, .9839300950538076, .9843689992693404, .9848076441618009, .9852460301466487, .9856841576382579, .9861220270499221, .9865596387938579, .9869969932812083, .9874340909220475, .9878709321253837, .9883075172991641, .9887438468502779, .9891799211845601, .9896157407067957, .9900513058207229, .9904866169290382, .9909216744333976, .9913564787344237, .9917910302317056, .9922253293238062, .9926593764082635, .9930931718815946, .9935267161393003, .9939600095758677, .9943930525847745, .9948258455584919, .9952583888884886, .9956906829652349, .9961227281782049, .9965545249158808, .9969860735657569, .9974173745143414, .9978484281471626, .9982792348487693, .9987097950027365, .9991401089916675, .9995701771971982, 1], m = [];
                if (e.moaGL)
                    e.moaGL.renderConvertRGBToLAB(), m = i(e);
                else {
                    var g, p, v = [];
                    for (g = 0; o > g; g += 2)
                        for (p = 0; t > p; p += 2) {
                            r = 4 * p + 4 * g * t;
                            var _, x, y, M, C, w, b, D, S, P = d.length;
                            b = c[e[r]], D = c[e[r + 1]], S = c[e[r + 2]], M = .00433891 * b + .00376234915 * D + .0018990604648 * S, C = .002126 * b + .007152 * D + 722e-6 * S, w = 177255e-9 * b + .00109475308 * D + .0087295537 * S, M = M > .008856 ? M >= 1 ? d[P - 1] : d[M * P | 0] : 7.787 * M + 16 / 116, C = C > .008856 ? C >= 1 ? d[P - 1] : d[C * P | 0] : 7.787 * C + 16 / 116, w = w > .008856 ? w >= 1 ? d[P - 1] : d[w * P | 0] : 7.787 * w + 16 / 116, _ = 116 * C - 16, x = 500 * (M - C), y = 200 * (C - w), v[0] = 2.55 * _, v[1] = x + 127, v[2] = y + 127, s[v[0] + .5 | 0]++, u[v[1] + .5 | 0]++, f[v[2] + .5 | 0]++
                        }
                    m[0] = s, m[1] = u, m[2] = f
                }
                var T, E = n(m[1]), F = n(m[2]), L = .1, A = .9, R = l(E, L), I = l(F, L), O = l(E, A), B = l(F, A), N = (R + O) / 2 - 127, U = (I + B) / 2 - 127, k = 0, j = 1, G = .5;
                T = 0 > N ? -Math.pow(-G * N, j) : Math.pow(G * N, j), k = 0 > U ? -Math.pow(-G * U, j) : Math.pow(G * U, j);
                var X = 127 / (127 + T), W = 127 / (127 + k);
                if (e.moaGL)
                    return void e.moaGL.renderConvertLABToRGB(X, W);
                for (g = 0; o > g; g++)
                    for (p = 0; t > p; p++) {
                        r = 4 * p + 4 * g * t;
                        var _, x, y, M, C, w, b, D, S, P = d.length;
                        b = c[e[r]], D = c[e[r + 1]], S = c[e[r + 2]], M = .00433891 * b + .00376234915 * D + .0018990604648 * S, C = .002126 * b + .007152 * D + 722e-6 * S, w = 177255e-9 * b + .00109475308 * D + .0087295537 * S, M = M > .008856 ? M >= 1 ? d[P - 1] : d[M * P | 0] : 7.787 * M + 16 / 116, C = C > .008856 ? C >= 1 ? d[P - 1] : d[C * P | 0] : 7.787 * C + 16 / 116, w = w > .008856 ? w >= 1 ? d[P - 1] : d[w * P | 0] : 7.787 * w + 16 / 116, _ = 116 * C - 16, x = 500 * (M - C), y = 200 * (C - w), v[0] = 2.55 * _, v[1] = x + 127, v[2] = y + 127, v[1] *= X, v[2] *= W;
                        var V = h.length, z = (v[0] / 2.55 + 16) / 116, Y = (v[1] - 127) / 500 + z, H = z - (v[2] - 127) / 200, q = z * z * z, Z = Y * Y * Y, $ = H * H * H;
                        z = q > .008856 ? q : (z - 16 / 116) / 7.787, Y = Z > .008856 ? Z : (Y - 16 / 116) / 7.787, H = $ > .008856 ? $ : (H - 16 / 116) / 7.787, Y = .95047 * Y, z = 1 * z, H = 1.08883 * H;
                        var Q = 3.2406 * Y + -1.5372 * z + H * -.4986, K = Y * -.9689 + 1.8758 * z + .0415 * H, J = .0557 * Y + z * -.204 + 1.057 * H;
                        Q = 0 >= Q ? 0 : Q >= 1 ? 1 : h[Q * V | 0], K = 0 >= K ? 0 : K >= 1 ? 1 : h[K * V | 0], J = 0 >= J ? 0 : J >= 1 ? 1 : h[J * V | 0], Q = 255 * Q + .5 | 0, K = 255 * K + .5 | 0, J = 255 * J + .5 | 0;
                        var et, tt, ot;
                        et = Q + .5 | 0, tt = K + .5 | 0, ot = J + .5 | 0, et > 255 ? et = 255 : 0 > et && (et = 0), tt > 255 ? tt = 255 : 0 > tt && (tt = 0), ot > 255 ? ot = 255 : 0 > ot && (ot = 0), e[r] = et, e[r + 1] = tt, e[r + 2] = ot
                    }
            };
            var s = function(e, t, o, r) {
                var a = .8, s = o * r, f = 0, c = 1, d = 4, h = i(t), m = n(h[0]), g = n(h[1]), p = n(h[2]), v = l(m, f), _ = l(m, c), x = l(g, f), y = l(g, c), M = l(p, f), C = l(p, c);
                v = Math.pow(v, .7), x = Math.pow(x, .7), M = Math.pow(M, .7), _ = 255 - Math.pow(255 - _, .7), y = 255 - Math.pow(255 - y, .7), C = 255 - Math.pow(255 - C, .7);
                var w, b = 255 / (_ - v), D = 255 / (y - x), S = 255 / (C - M), P = 0, T = [];
                for (w = 0; 256 > w; w++)
                    P += .213 * h[0][w] + .715 * h[1][w] + .072 * h[2][w], T[w] = P / s, T[w] = 0 === w ? 1 : 255 * (T[w] / w), T[w] = T[w] > 1 ? Math.pow(T[w], .65) : 1 / Math.pow(1 / T[w], .65);
                if (T = u(T, d), t.moaGL)
                    return void t.moaGL.renderAutoEnhance(a, b, D, S, v, x, M, T);
                var E, F, L, A, R;
                for (w = o * r; w--; )
                    L = t[4 * w], A = t[4 * w + 1], R = t[4 * w + 2], E = T[.213 * L + .715 * A + .072 * R | 0], F = E * A + .5 | 0, L = (L + (L * E - L) * a + (F - A) * (1 - a) - v) * b + .5 | 0, R = (R + (R * E - R) * a + (F - A) * (1 - a) - M) * S + .5 | 0, A = (F - x) * D + .5 | 0, L > 255 ? L = 255 : 0 > L && (L = 0), A > 255 ? A = 255 : 0 > A && (A = 0), R > 255 ? R = 255 : 0 > R && (R = 0), e[4 * w] = L, e[4 * w + 1] = A, e[4 * w + 2] = R, e[4 * w + 3] = t[4 * w + 3]
            }, u = function(e, t) {
                for (var o = [], r = e.length, a = 0; r > a; a++) {
                    for (var i = 0, n = 0, l = 0; r > l; l++) {
                        var s = Math.exp(-(l - a) * (l - a) / (2 * t * t));
                        i += s * e[l], n += s
                    }
                    i /= n, o[a] = i
                }
                return o
            }, f = function(e, t, o) {
                var r, a = 15, n = 0, l = .33, s = i(e), f = [], d = t * o, h = 0;
                for (r = 0; 256 > r; r++)
                    h += .213 * s[0][r] + .715 * s[1][r] + .072 * s[2][r], f[r] = h / d, f[r] = 0 === r ? 0 : f[r] / (r / 255), f[r] = f[r] > 1 ? Math.pow(f[r], l) : 1 / Math.pow(1 / f[r], n);
                for (f = u(f, a), r = 0; 256 > r; r++)
                    f[r] *= r / 255, f[r] = 255 * f[r] + .5 | 0;
                c(e, t, o, {r: f,g: f,b: f}, {blurAmount: 120,sharpenVal: .3,gain: .6})
            }, c = function(e, t, o, i, n) {
                var l = n.blurAmount;
                l *= (t + o) / 1600;
                var s = n.gain, u = n.sharpenVal, f = Math.round(l / 5 / 2);
                if (e.moaGL)
                    return void e.moaGL.renderClarity(i, f, s, u);
                var c = [];
                d(e, t, o, c);
                var h = a.copy(e), m = [];
                r.mapHist(h, i), d(h, t, o, m);
                var g, p, v, _, x, y, M, C, w, b, D, S, P, T, E, F;
                for (b = 0; o > b; b++)
                    for (w = 0; t > w; w++)
                        g = 4 * (t * b + w), D = e[g], S = e[g + 1], P = e[g + 2], x = w - f, y = b - f, M = w + f, C = b + f, x = 0 > x ? 0 : x > t - 1 ? t - 1 : x, y = 0 > y ? 0 : y > o - 1 ? o - 1 : y, M = 0 > M ? 0 : M > t - 1 ? t - 1 : M, C = 0 > C ? 0 : C > o - 1 ? o - 1 : C, F = (C - y) * (M - x), v = (c[M + t * C] + c[x + t * y] - c[x + t * C] - c[M + t * y]) / F, _ = (m[M + t * C] + m[x + t * y] - m[x + t * C] - m[M + t * y]) / F, E = _ - v, T = 0 === v ? _ : _ / v, p = .2 * D + .7 * S + .1 * P, D += u * (p - v), S += u * (p - v), P += u * (p - v), D = s * D * T + (1 - s) * (D + E), S = s * S * T + (1 - s) * (S + E), P = s * P * T + (1 - s) * (P + E), e[g] = D > 255 ? 255 : 0 > D ? 0 : D + .5 | 0, e[g + 1] = S > 255 ? 255 : 0 > S ? 0 : S + .5 | 0, e[g + 2] = P > 255 ? 255 : 0 > P ? 0 : P + .5 | 0
            }, d = function(e, t, o, r) {
                var a, i, n, l, s, u;
                for (i = 0; o > i; i++)
                    for (a = 0; t > a; a++)
                        n = t * i + a, l = e[4 * n], s = e[4 * n + 1], u = e[4 * n + 2], r[n] = .2 * l + .7 * s + .1 * u, a > 0 && (r[n] += r[t * i + a - 1]), i > 0 && (r[n] += r[t * (i - 1) + a]), i > 0 && a > 0 && (r[n] -= r[t * (i - 1) + a - 1])
            };
            t.exports = o
        }), e.define("/src/js/filters/histogramMapping.js", function(e, t) {
            "use strict";
            var o = {};
            o.fadeMapping = function(e, t) {
                for (var o = 0; 256 > o; o++)
                    e.r[o] = o * (1 - t) + e.r[o] * t + .5 | 0, e.g[o] = o * (1 - t) + e.g[o] * t + .5 | 0, e.b[o] = o * (1 - t) + e.b[o] * t + .5 | 0, e.r[o] = e.r[o] < 0 ? 0 : e.r[o] > 255 ? 255 : e.r[o], e.g[o] = e.g[o] < 0 ? 0 : e.g[o] > 255 ? 255 : e.g[o], e.b[o] = e.b[o] < 0 ? 0 : e.b[o] > 255 ? 255 : e.b[o]
            }, o.mapHist = function(e, t) {
                if (e.moaGL)
                    return void e.moaGL.renderColorMap(t);
                for (var o = e.length, r = 0; o > r; )
                    e[r] = t.r[e[r]], e[r + 1] = t.g[e[r + 1]], e[r + 2] = t.b[e[r + 2]], r += 4
            }, t.exports = o
        }), e.define("/src/js/core/copy.js", function(e, t) {
            function r(e) {
                try {
                    var t = o.createElement("canvas"), r = t.getContext("2d"), a = r.getImageData(0, 0, 1, Math.ceil(e / 4));
                    return a.data
                } catch (i) {
                    return new Array(e)
                }
            }
            var a = {};
            a.copy = function(e) {
                var t;
                if (e.moaGL)
                    return void e.moaGL.renderIdentity();
                t = "undefined" != typeof Uint8ClampedArray ? new Uint8ClampedArray(e.length) : r(e.length);
                for (var o = e.length, a = 0; o > a; a += 4)
                    t[a] = e[a], t[a + 1] = e[a + 1], t[a + 2] = e[a + 2], t[a + 3] = e[a + 3];
                return t
            }, a.copyTo = function(e, t) {
                for (var o = t.length, r = 0; o > r; r += 4)
                    e[r] = t[r], e[r + 1] = t[r + 1], e[r + 2] = t[r + 2], e[r + 3] = t[r + 3];
                return e
            }, a.makeData = function(e) {
                var t;
                return t = "undefined" != typeof Uint8ClampedArray ? new Uint8ClampedArray(e) : r(e)
            }, t.exports = a
        }), e.define("/src/js/legacy/whiten2.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/colorConversion"), a = e("./mask");
            o.whiten2 = function(e, t, o, i, n) {
                for (var l = new Array, s = 0; 256 > s; s++)
                    l[s] = .04045 >= s / 255 ? 100 * s / 255 / 12.92 : 100 * Math.pow((s / 255 + .055) / 1.055, 2.4);
                var u = new Array(t * o);
                for (s = 0; t * o > s; s++)
                    u[s] = 0;
                var f = .7 * n;
                for (s = 0; s < i.length; s++)
                    a.maskspottool(t, o, u, i[s][0], i[s][1], n, f);
                for (var c, d, h, m, g, p = 0; o > p; p++)
                    for (var v = 0; t > v; v++)
                        c = 4 * (v + t * p), u[v + t * p] && (g = r.rgb2lab(e[c], e[c + 1], e[c + 2], l), h = Math.pow(g[1] - 127, 2) + Math.min(Math.pow(g[2] - 154, 2), Math.pow(g[2] - 170, 2)), d = Math.exp(-h / 100) * u[v + t * p], m = r.lab2rgb([255 * Math.pow(g[0] / 255, 1 - .4 * d), g[1], (1 - d) * (g[2] - 127) + 127]), e[c] = m[0], e[c + 1] = m[1], e[c + 2] = m[2])
            }, t.exports = o
        }), e.define("/src/js/legacy/mask.js", function(e, t) {
            "use strict";
            var o = {};
            o.maskspottool = function(e, t, o, r, a, i, n, l) {
                "undefined" == typeof l && (l = 1);
                for (var s, u, f, c = i, d = c * c, h = n * n, m = Math.max(0, Math.min(e - 1, Math.round(r - c))), g = Math.max(0, Math.min(t - 1, Math.round(a - c))), p = Math.max(0, Math.min(e - 1, Math.round(r + c))), v = Math.max(0, Math.min(t - 1, Math.round(a + c))), _ = g; v >= _; _++)
                    for (var x = m; p >= x; x++)
                        s = x + e * _, f = (x - r) * (x - r) + (_ - a) * (_ - a), d > f && (u = 0 > n ? l : l * Math.exp(-f / (2 * h)), u > o[s] && (o[s] = u))
            }, t.exports = o
        }), e.define("/src/js/legacy/redeye2.js", function(e, t) {
            "use strict";
            var o = {}, r = (e("../filters/colorConversion"), e("./mask"));
            o.redeye2 = function(e, t, o, a, i) {
                for (var n = new Array(t * o), l = 0; t * o > l; l++)
                    n[l] = 0;
                var s = .7 * i;
                for (l = 0; l < a.length; l++)
                    r.maskspottool(t, o, n, a[l][0], a[l][1], i, s);
                for (var u, f, c, d, h, m = 0; o - 1 >= m; m++)
                    for (var g = 0; t - 1 >= g; g++)
                        u = g + t * m, n[u] && (i = e[4 * u], f = e[4 * u + 1], c = e[4 * u + 2], d = i > f + c ? 1 : 0, 0 > d && (d = 0), d *= n[u], d > .1 && (i = e[4 * u], f = e[4 * u + 1], c = e[4 * u + 2], d *= 3, d > 1 && (d = 1), h = (1 - d) * i + d * (f + c) / 2 + .5 | 0, e[4 * u] = h))
            }, t.exports = o
        }), e.define("/src/js/legacy/selectiveblur.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/sharpness"), a = e("./mask");
            o.selectiveblur = function(e, t, o, i, n) {
                for (var l = new Array(t * o), s = 0; t * o > s; s++)
                    l[s] = 0;
                var u = .5 * n;
                for (s = 0; s < i.length; s++)
                    a.maskspottool(t, o, l, i[s][0], i[s][1], n, u, .65);
                r.sharpenX(e, t, o, -100, l), r.sharpenY(e, t, o, -100, l)
            }, t.exports = o
        }), e.define("/src/js/filters/sharpness.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../core/copy"), a = e("./blendWithBitmap");
            o.bitmapBlend = function(e, t, o, i, n, l, s, u, f) {
                var c, d, h, m, g, p, v, _, x, y, M, C, w, b, D, S, P, T, E, F, L, A, R, I, O, B, N, U, k, j, G = "NN" === f, X = "clarity" === u, W = "clarityv2" === u, V = "overlay" === u, z = "laplaceAdd" === u, Y = "normal" === u, H = n / t, q = l / o, Z = !(X || W || V || z || Y);
                if (Z)
                    var $ = r.makeData(i.length);
                for (m = 0; o > m; m++)
                    for (g = 0; t > g; g++) {
                        var Q = 4 * (g + t * m);
                        if (G) {
                            var K = g * H + .5 | 0, J = m * q + .5 | 0;
                            K > n - 1 ? K = n - 1 : 0 > K && (K = 0), J > l - 1 ? J = l - 1 : 0 > J && (J = 0), D = 4 * (K + n * J), U = i[D], k = i[D + 1], j = i[D + 2], c = e[Q], d = e[Q + 1], h = e[Q + 2]
                        } else {
                            var K = g * H, J = m * q;
                            p = Math.floor(K), v = Math.floor(J), _ = p + 1, x = v + 1, y = K - p, M = J - v, _ > n - 1 && (_ = n - 1), p > n - 1 && (p = n - 1), 0 > _ && (_ = 0), 0 > p && (p = 0), x > l - 1 && (x = l - 1), v > l - 1 && (v = l - 1), 0 > x && (x = 0), 0 > v && (v = 0), C = 4 * (_ + n * x), w = 4 * (p + n * x), b = 4 * (_ + n * v), D = 4 * (p + n * v), S = i[C], P = i[C + 1], T = i[C + 2], E = i[w], F = i[w + 1], L = i[w + 2], A = i[b], R = i[b + 1], I = i[b + 2], O = i[D], B = i[D + 1], N = i[D + 2], c = O * (1 - y) * (1 - M) + A * y * (1 - M) + E * M * (1 - y) + S * M * y, d = B * (1 - y) * (1 - M) + R * y * (1 - M) + F * M * (1 - y) + P * M * y, h = N * (1 - y) * (1 - M) + I * y * (1 - M) + L * M * (1 - y) + T * M * y, U = c, k = d, j = h, c = e[Q], d = e[Q + 1], h = e[Q + 2]
                        }
                        if (z)
                            e[Q] = c + s * (U - 128), e[Q + 1] = d + s * (k - 128), e[Q + 2] = h + s * (j - 128), e[Q + 3] = 255;
                        else if (W) {
                            r0 = c, g0 = d, b0 = h, k = .2 * U + .7 * k + .1 * j;
                            var et = s * Math.pow(Math.abs(k - (.2 * c + .7 * d + .1 * h)) / 255, 2), tt = 1 - et;
                            c = 128 >= c ? tt * c + 2 * et * c * U / 256 + .5 | 0 : tt * c + et * (255 - 2 * (255 - c) * (255 - U) / 255) + .5 | 0, d = 128 >= d ? tt * d + 2 * et * d * k / 256 + .5 | 0 : tt * d + et * (255 - 2 * (255 - d) * (255 - k) / 255) + .5 | 0, h = 128 >= h ? tt * h + 2 * et * h * j / 256 + .5 | 0 : tt * h + et * (255 - 2 * (255 - h) * (255 - j)) + .5 | 0, e[Q] = c, e[Q + 1] = d, e[Q + 2] = h, e[Q + 3] = 255
                        } else if (X) {
                            r0 = c, g0 = d, b0 = h, k = .2 * U + .7 * k + .1 * j;
                            var et = s * Math.pow(Math.abs(k - (.2 * c + .7 * d + .1 * h)) / 255, 2), tt = 1 - et;
                            c = 128 >= c ? tt * c + 2 * et * c * U / 256 + .5 | 0 : tt * c + et * (255 - (255 - (2 * c - 256)) * (255 - U) / 256) + .5 | 0, d = 128 >= d ? tt * d + 2 * et * d * k / 256 + .5 | 0 : tt * d + et * (255 - (255 - (2 * d - 256)) * (255 - k) / 256) + .5 | 0, h = 128 >= h ? tt * h + 2 * et * h * j / 256 + .5 | 0 : tt * h + et * (255 - (255 - (2 * h - 256)) * (255 - j) / 256) + .5 | 0, e[Q] = c, e[Q + 1] = d, e[Q + 2] = h, e[Q + 3] = 255
                        } else if (V) {
                            var et = s, tt = 1 - et;
                            c = 128 >= c ? tt * c + 2 * et * c * U / 256 + .5 | 0 : tt * c + et * (255 - (255 - (2 * c - 256)) * (255 - U) / 256) + .5 | 0, d = 128 >= d ? tt * d + 2 * et * d * k / 256 + .5 | 0 : tt * d + et * (255 - (255 - (2 * d - 256)) * (255 - k) / 256) + .5 | 0, h = 128 >= h ? tt * h + 2 * et * h * j / 256 + .5 | 0 : tt * h + et * (255 - (255 - (2 * h - 256)) * (255 - j) / 256) + .5 | 0, e[Q] = c, e[Q + 1] = d, e[Q + 2] = h, e[Q + 3] = 255
                        } else
                            Y ? (e[Q] = c * (1 - s) + s * U, e[Q + 1] = d * (1 - s) + s * k, e[Q + 2] = h * (1 - s) + s * j, e[Q + 3] = 255) : ($[Q] = U, $[Q + 1] = k, $[Q + 2] = j, $[Q + 3] = 255)
                    }
                Z && a.blendWithBitmap(e, e, $, t, o, u, s)
            }, o.sharpenX = function(e, t, o, a, i) {
                if (0 !== a) {
                    var n, l, s = "undefined" != typeof i, u = !0;
                    0 > a && (a = -a, u = !1), a /= 100;
                    var f = 4 * a, c = [], d = Math.ceil(2 * f), h = 2 * d + 1, m = 0;
                    for (l = 0; h > l; l++)
                        c[l] = Math.exp(-(d - l) * (d - l) / (2 * f * f)), m += c[l];
                    var g, p, v, _, x, y, M, C, w, b = r.makeData(4 * t);
                    for (p = 0; o > p; p++) {
                        for (g = 0; t > g; g++)
                            M = 4 * (p * t + g), b[4 * g] = e[M], b[4 * g + 1] = e[M + 1], b[4 * g + 2] = e[M + 2], b[4 * g + 3] = e[M + 3];
                        for (g = 0; t > g; g++)
                            if (!s || i[g + t * p]) {
                                if (M = 4 * (p * t + g), w = 4 * (g - d), _ = 0, x = 0, y = 0, d > g || g > t - 1 - d)
                                    for (v = 0; h > v; v++)
                                        C = 4 * Math.max(0, Math.min(t - 1, g + v - d)), _ += c[v] * b[C], x += c[v] * b[C + 1], y += c[v] * b[C + 2];
                                else
                                    for (_ += c[0] * b[w], x += c[0] * b[w + 1], y += c[0] * b[w + 2], _ += c[1] * b[w + 4], x += c[1] * b[w + 5], y += c[1] * b[w + 6], _ += c[2] * b[w + 8], x += c[2] * b[w + 9], y += c[2] * b[w + 10], v = 3; h > v; v++)
                                        _ += c[v] * b[w + 4 * v], x += c[v] * b[w + 4 * v + 1], y += c[v] * b[w + 4 * v + 2];
                                u ? s ? (n = i[g + t * p], _ = (1 + .5 * n) * e[M] - n * _ / m / 2 + .5 | 0, x = (1 + .5 * n) * e[M + 1] - n * x / m / 2 + .5 | 0, y = (1 + .5 * n) * e[M + 2] - n * y / m / 2 + .5 | 0) : (_ = 1.5 * e[M] - _ / m / 2 + .5 | 0, x = 1.5 * e[M + 1] - x / m / 2 + .5 | 0, y = 1.5 * e[M + 2] - y / m / 2 + .5 | 0) : s ? (n = i[g + t * p], _ = (1 - n) * e[M] + n * _ / m + .5 | 0, x = (1 - n) * e[M + 1] + n * x / m + .5 | 0, y = (1 - n) * e[M + 2] + n * y / m + .5 | 0) : (_ = _ / m + .5 | 0, x = x / m + .5 | 0, y = y / m + .5 | 0), e[M] = 0 > _ ? 0 : _ > 255 ? 255 : _, e[M + 1] = 0 > x ? 0 : x > 255 ? 255 : x, e[M + 2] = 0 > y ? 0 : y > 255 ? 255 : y
                            }
                    }
                    b = null
                }
            }, o.sharpenY = function(e, t, o, a, i, n) {
                if (0 !== a) {
                    var l = "mascara" === n, s = !0;
                    0 > a && (a = -a, s = !1);
                    var u, f = "undefined" != typeof i;
                    a /= 100;
                    for (var c = 4 * a, d = [], h = Math.ceil(2 * c), m = 2 * h + 1, g = 0, p = 0; m > p; p++)
                        d[p] = Math.exp(-(h - p) * (h - p) / (2 * c * c)), g += d[p];
                    for (var v, _, x, y, M, C, w = r.makeData(4 * o), b = 0; t > b; b++) {
                        for (var D = 0; o > D; D++)
                            y = 4 * (D * t + b), w[4 * D] = e[y], w[4 * D + 1] = e[y + 1], w[4 * D + 2] = e[y + 2], w[4 * D + 3] = e[y + 3];
                        for (var D = 0; o > D; D++)
                            if (!f || i[b + t * D]) {
                                if (y = 4 * (D * t + b), C = 4 * (D - h), v = 0, _ = 0, x = 0, h > D || D > o - 1 - h)
                                    for (var S = 0; m > S; S++)
                                        M = 4 * Math.max(0, Math.min(o - 1, D + S - h)), v += d[S] * w[M], _ += d[S] * w[M + 1], x += d[S] * w[M + 2];
                                else {
                                    v += d[0] * w[C], _ += d[0] * w[C + 1], x += d[0] * w[C + 2], v += d[1] * w[C + 4], _ += d[1] * w[C + 4 + 1], x += d[1] * w[C + 4 + 2], v += d[2] * w[C + 8], _ += d[2] * w[C + 8 + 1], x += d[2] * w[C + 8 + 2];
                                    for (var S = 3; m > S; S++)
                                        v += d[S] * w[C + 4 * S], _ += d[S] * w[C + 4 * S + 1], x += d[S] * w[C + 4 * S + 2]
                                }
                                s ? f ? (u = i[b + t * D], l && e[y + 1] > _ / g && (u = 0), e[y] = (1 + .5 * u) * e[y] - u * v / g / 2 + .5 | 0, e[y + 1] = (1 + .5 * u) * e[y + 1] - u * _ / g / 2 + .5 | 0, e[y + 2] = (1 + .5 * u) * e[y + 2] - u * x / g / 2 + .5 | 0) : (e[y] = 1.5 * e[y] - v / g / 2 + .5 | 0, e[y + 1] = 1.5 * e[y + 1] - _ / g / 2 + .5 | 0, e[y + 2] = 1.5 * e[y + 2] - x / g / 2 + .5 | 0, e[y + 3] = w[4 * D + 3]) : f ? (u = i[b + t * D], e[y] = (1 - u) * e[y] + u * v / g + .5 | 0, e[y + 1] = (1 - u) * e[y + 1] + u * _ / g + .5 | 0, e[y + 2] = (1 - u) * e[y + 2] + u * x / g + .5 | 0) : (e[y] = v / g + .5 | 0, e[y + 1] = _ / g + .5 | 0, e[y + 2] = x / g + .5 | 0)
                            }
                    }
                }
            }, o.joesharpen = function(e, t, r, a) {
                return e.moaGL ? void o.convolutionEffectBoxHybridSharpen(e, t, r, a) : (o.sharpenX(e, t, r, a), void o.sharpenY(e, t, r, a))
            }, o.sharpen = function(e, t, a, i, n, l) {
                if (e.moaGL) {
                    if (0 == n)
                        return;
                    return o.joesharpen(e, t, a, i), void ((1 != n || "normal" != l) && ("normal" == l ? e.moaGL.renderBlendWithOriginal(n, 1 - n) : "overlay" == l && e.moaGL.renderBlendWithOriginalOverlayReverse(n)))
                }
                var s, u = (t + a) / 2;
                i *= u / 800, 1 == n && "normal" == l ? o.joesharpen(e, t, a, i) : (s = r.copy(e), 0 != n && o.joesharpen(s, t, a, i), o.bitmapBlend(e, t, a, s, t, a, n, l))
            };
            var i = function(e, t, o, r, a) {
                var i, n, l, s, u;
                for (i = 0; t > i; i++)
                    n = t * r + i, l = e[4 * n], s = e[4 * n + 1], u = e[4 * n + 2], a[4 * i] = l, a[4 * i + 1] = s, a[4 * i + 2] = u, i > 0 && (a[4 * i] += a[4 * (i - 1)], a[4 * i + 1] += a[4 * (i - 1) + 1], a[4 * i + 2] += a[4 * (i - 1) + 2])
            }, n = function(e, t, o, r, a) {
                var i, n, l, s, u;
                for (i = 0; o > i; i++)
                    n = t * i + r, l = e[4 * n], s = e[4 * n + 1], u = e[4 * n + 2], a[4 * i] = l, a[4 * i + 1] = s, a[4 * i + 2] = u, i > 0 && (a[4 * i] += a[4 * (i - 1)], a[4 * i + 1] += a[4 * (i - 1) + 1], a[4 * i + 2] += a[4 * (i - 1) + 2])
            }, l = function(e) {
                var t, o, r, a, i, n, l = [-1.3026537197817094, .6419697923564902, .019476473204185836, -.00956151478680863, -.000946595344482036, .000366839497852761, 42523324806907e-18, -20278578112534e-18, -1624290004647e-18, 130365583558e-17, 1.5626441722e-8, -8.5238095915e-8, 6.529054439e-9, 5.059343495e-9, -9.91364156e-10, -2.27365122e-10, 9.6467911e-11, 2.394038e-12, -6.886027e-12, 8.94487e-13, 3.13092e-13, -1.12708e-13, 3.81e-16, 7.106e-15, -1.523e-15, -9.4e-17, 1.21e-16, -2.8e-17];
                if (0 > e)
                    return 0;
                for (r = 0, a = 0, i = 2 / (2 + e), n = 4 * i - 2, t = 27; t > 0; t--)
                    o = r, r = n * r - a + l[t], a = o;
                return i * Math.exp(-e * e + .5 * (l[0] + n * r) - a)
            }, s = function(e) {
                return e >= 0 ? 1 - l(e) : l(-e) - 1
            }, u = function(e, t) {
                return (1 + s(e / Math.SQRT2 / t)) / 2
            }, f = function(e, t, o, r) {
                var a, n, l, s, f, c, d, h, m, g, p, v, _, x, y, M, C, w, b, D, S, P, T, E, F, L = 4096;
                if (a = 4, l = 4 * r / 100 * (t + o) / 1600, s = !0, 0 > l && (l = -l, s = !1), 0 != l) {
                    for (f = Math.floor(1.5 * l) + 1, d = 0, f > a && (d = Math.floor((f / a - 1) / 2) + 1, f = Math.floor(f / (2 * d + 1)) + 1), x = 0, v = 2 * d + 1, c = 2 * f + 1, h = [], _ = 0, n = 0; c > n; n++)
                        _ += v * (u(n + .5 - f, l / v) - u(n - .5 - f, l / v));
                    for (x = 0, n = 0; c > n; n++)
                        h[n] = 1 / _ * L * (u(n + .5 - f, l / v) - u(n - .5 - f, l / v)), x += h[n];
                    if (e.moaGL) {
                        var A = [], R = 4 - ((c - 1) / 2 | 0), I = 4 + ((c - 1) / 2 | 0);
                        for (n = 0; 9 > n; n++)
                            A[n] = R > n || n > I ? 0 : h[n - R] / x;
                        return void e.moaGL.addConvolution(A, v, "horizontal")
                    }
                    for (m = h[0], h[0] = -h[0], n = 1; c > n; n++)
                        g = h[n], h[n] = -h[n] + m, m = g;
                    for (h[c] = m, F = [], C = 0; o > C; C++)
                        for (i(e, C, F), n = t * C, M = 0; t > M; M++) {
                            for (w = L / 2 | 0, b = L / 2 | 0, D = L / 2 | 0, S = 0; c >= S; S++)
                                y = M + (S - f) * v - d - 1, p = h[S], 0 > y ? (P = (y + 1) * F[0] | 0, T = (y + 1) * F[1] | 0, E = (y + 1) * F[2] | 0) : y > t - 1 ? (P = F[4 * (t - 1)] + (y - (t - 1)) * (F[4 * (t - 1)] - F[4 * (t - 2)]) | 0, T = F[4 * (t - 1) + 1] + (y - (t - 1)) * (F[4 * (t - 1) + 1] - F[4 * (t - 2) + 1]) | 0, E = F[4 * (t - 1) + 2] + (y - (t - 1)) * (F[4 * (t - 1) + 2] - F[4 * (t - 2) + 2]) | 0) : (P = 0 | F[4 * y], T = 0 | F[4 * y + 1], E = 0 | F[4 * y + 2]), w += p * P | 0, b += p * T | 0, D += p * E | 0;
                            w = w / L | 0, b = b / L | 0, D = D / L | 0, s && (w = (3 * e[4 * n] - w + 1) / 2 | 0, b = (3 * e[4 * n + 1] - b + 1) / 2 | 0, D = (3 * e[4 * n + 2] - D + 1) / 2 | 0), e[4 * n] = w > 255 ? 255 : 0 > w ? 0 : w, e[4 * n + 1] = b > 255 ? 255 : 0 > b ? 0 : b, e[4 * n + 2] = D > 255 ? 255 : 0 > D ? 0 : D
                        }
                }
            }, c = function(e, t, o, r) {
                var a, t, o, i, l, s, f, c, d, h, m, g, p, v, _, x, y, M, C, w, b, D, S, P, T, E, F, L = 4096;
                if (a = 4, l = 4 * r / 100 * (t + o) / 1600, s = !0, 0 > l && (l = -l, s = !1), 0 != l) {
                    for (f = Math.floor(1.5 * l) + 1, d = 0, f > a && (d = Math.floor((f / a - 1) / 2) + 1, f = Math.floor(f / (2 * d + 1)) + 1), x = 0, v = 2 * d + 1, c = 2 * f + 1, h = [], _ = 0, i = 0; c > i; i++)
                        _ += v * (u(i + .5 - f, l / v) - u(i - .5 - f, l / v));
                    for (x = 0, i = 0; c > i; i++)
                        h[i] = .5 + 1 / _ * L * (u(i + .5 - f, l / v) - u(i - .5 - f, l / v)), x += h[i];
                    if (e.moaGL) {
                        var A = [], R = 4 - ((c - 1) / 2 | 0), I = 4 + ((c - 1) / 2 | 0);
                        for (i = 0; 9 > i; i++)
                            A[i] = R > i || i > I ? 0 : h[i - R] / x;
                        return void e.moaGL.addConvolution(A, v, "vertical")
                    }
                    for (m = h[0], h[0] = -h[0], i = 1; c > i; i++)
                        g = h[i], h[i] = -h[i] + m, m = g;
                    for (h[c] = m, F = [], M = 0; t > M; M++)
                        for (n(e, M, F), C = 0; o > C; C++) {
                            for (i = t * C + M, w = L / 2 | 0, b = L / 2 | 0, D = L / 2 | 0, S = 0; c >= S; S++)
                                y = C + (S - f) * v - d - 1, p = h[S], 0 > y ? (P = (y + 1) * F[0] | 0, T = (y + 1) * F[1] | 0, E = (y + 1) * F[2] | 0) : y > o - 1 ? (P = F[4 * (o - 1)] + (y - (o - 1)) * (F[4 * (o - 1)] - F[4 * (o - 2)]) | 0, T = F[4 * (o - 1) + 1] + (y - (o - 1)) * (F[4 * (o - 1) + 1] - F[4 * (o - 2) + 1]) | 0, E = F[4 * (o - 1) + 2] + (y - (o - 1)) * (F[4 * (o - 1) + 2] - F[4 * (o - 2) + 2]) | 0) : (P = 0 | F[4 * y], T = 0 | F[4 * y + 1], E = 0 | F[4 * y + 2]), w += p * P | 0, b += p * T | 0, D += p * E | 0;
                            w = w / L | 0, b = b / L | 0, D = D / L | 0, s && (w = (3 * e[4 * i] - w + 1) / 2 | 0, b = (3 * e[4 * i + 1] - b + 1) / 2 | 0, D = (3 * e[4 * i + 2] - D + 1) / 2 | 0), e[4 * i] = w > 255 ? 255 : 0 > w ? 0 : w, e[4 * i + 1] = b > 255 ? 255 : 0 > b ? 0 : b, e[4 * i + 2] = D > 255 ? 255 : 0 > D ? 0 : D
                        }
                }
            };
            o.convolutionEffectBoxHybridSharpen = function(e, t, o, r) {
                var a = !1;
                if (e.moaGL && (a = !0, 0 > r && (r = -r, a = !1)), f(e, t, o, r), c(e, t, o, r), e.moaGL && a) {
                    var i = 1.5, n = -.5;
                    e.moaGL.renderBlendWithOriginal(n, i)
                }
            }, t.exports = o
        }), e.define("/src/js/filters/blendWithBitmap.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../core/enums");
            o.blendWithBitmap = function(e, t, o, i, n, l, s) {
                var u, f, c, d, h, m, g, p, v, _, x, y, M, C, w, b = r.getBlendModeIndex(l), D = t, S = o, P = e.length / 4;
                for (M = 0; P > M; M++)
                    if (C = 4 * M, f = S[C], c = S[C + 1], d = S[C + 2], h = S[C + 3], m = D[C], g = D[C + 1], p = D[C + 2], v = D[C + 3], 0 != h) {
                        if (0 == b)
                            _ = f, x = c, y = d;
                        else if (1 == b)
                            _ = 127 >= m ? 2 * m * f >> 8 : 65025 - 2 * (255 - m) * (255 - f) >> 8, x = 127 >= g ? 2 * g * c >> 8 : 65025 - 2 * (255 - g) * (255 - c) >> 8, y = 127 >= p ? 2 * p * d >> 8 : 65025 - 2 * (255 - p) * (255 - d) >> 8;
                        else if (3 == b)
                            _ = 65025 - (255 - m) * (255 - f) >> 8, x = 65025 - (255 - g) * (255 - c) >> 8, y = 65025 - (255 - p) * (255 - d) >> 8;
                        else if (4 == b)
                            _ = f > m ? m : f, x = c > g ? g : c, y = d > p ? p : d;
                        else if (5 == b)
                            _ = m * f >> 8, x = g * c >> 8, y = p * d >> 8;
                        else if (6 == b)
                            _ = 2 * m * f + m * m - (2 * m * m * f >> 8) >> 8, x = 2 * g * c + g * g - (2 * g * g * c >> 8) >> 8, y = 2 * p * d + p * p - (2 * p * p * d >> 8) >> 8;
                        else if (7 == b)
                            _ = m > f ? m : f, x = g > c ? g : c, y = p > d ? p : d;
                        else if (8 == b)
                            _ = m > f ? m - f : f - m, x = g > c ? g - c : c - g, y = p > d ? p - d : d - p;
                        else if (9 == b)
                            _ = 255 - (0 > 255 - m - f ? -(255 - m - f) : 255 - m - f), x = 255 - (0 > 255 - g - c ? -(255 - g - c) : 255 - g - c), y = 255 - (0 > 255 - p - d ? -(255 - p - d) : 255 - p - d);
                        else if (10 == b)
                            _ = m + f - (2 * m * f >> 8), x = g + c - (2 * g * c >> 8), y = p + d - (2 * p * d >> 8);
                        else if (11 == b)
                            _ = (127 > f ? 2 * m * f : 65025 - 2 * (255 - m) * (255 - f)) >> 8, x = (127 > c ? 2 * g * c : 65025 - 2 * (255 - g) * (255 - c)) >> 8, y = (127 > d ? 2 * p * d : 65025 - 2 * (255 - p) * (255 - d)) >> 8;
                        else if (12 == b)
                            _ = f, x = g, y = p;
                        else if (13 == b)
                            _ = m, x = c, y = p;
                        else if (14 == b)
                            _ = m, x = g, y = d;
                        else if (15 == b)
                            _ = 127 - 63 * Math.cos(.012319971192156862 * m) - 63 * Math.cos(.012319971192156862 * f), x = 127 - 63 * Math.cos(.012319971192156862 * g) - 63 * Math.cos(.012319971192156862 * c), y = 127 - 63 * Math.cos(.012319971192156862 * p) - 63 * Math.cos(.012319971192156862 * d);
                        else if (16 == b)
                            _ = 255 == f ? 255 : 255 * m / (255 - f), x = 255 == c ? 255 : 255 * g / (255 - c), y = 255 == d ? 255 : 255 * p / (255 - d);
                        else if (17 == b)
                            _ = 255 == m ? 255 : 255 * f / (255 - m), x = 255 == g ? 255 : 255 * c / (255 - g), y = 255 == p ? 255 : 255 * d / (255 - p);
                        else if (18 == b)
                            _ = 256 > m + f ? (255 == f ? 255 : 255 * m / (255 - f)) / 2 : 255 - 127 * (255 - f) / m, x = 256 > g + c ? (255 == c ? 255 : 255 * g / (255 - c)) / 2 : 255 - 127 * (255 - c) / g, y = 256 > p + d ? (255 == d ? 255 : 255 * p / (255 - d)) / 2 : 255 - 127 * (255 - d) / p;
                        else if (19 == b)
                            _ = 0 == f ? 0 : 255 - 255 * (255 - m) / f, x = 0 == c ? 0 : 255 - 255 * (255 - g) / c, y = 0 == d ? 0 : 255 - 255 * (255 - p) / d;
                        else if (20 == b)
                            _ = 0 == m ? 0 : 255 - 255 * (255 - f) / m, x = 0 == g ? 0 : 255 - 255 * (255 - c) / g, y = 0 == p ? 0 : 255 - 255 * (255 - d) / p;
                        else if (21 == b)
                            _ = 256 > m + f ? 255 == m ? 255 : 127 * f / (255 - m) : 255 - 127 * (255 - m) / f, x = 256 > g + c ? 255 == g ? 255 : 127 * c / (255 - g) : 255 - 127 * (255 - g) / c, y = 256 > p + d ? 255 == p ? 255 : 127 * d / (255 - p) : 255 - 127 * (255 - p) / d;
                        else if (22 == b)
                            _ = m + f, x = g + c, y = p + d;
                        else if (23 == b)
                            _ = m + f - 255, x = g + c - 255, y = p + d - 255;
                        else if (24 == b)
                            _ = m + 2 * f - 255, x = g + 2 * c - 255, y = p + 2 * d - 255;
                        else if (25 == b)
                            _ = 255 == f ? 255 : m * m / (255 - f), x = 255 == c ? 255 : g * g / (255 - c), y = 255 == d ? 255 : p * p / (255 - d);
                        else if (26 == b)
                            _ = 255 == m ? 255 : f * f / (255 - m), x = 255 == g ? 255 : c * c / (255 - g), y = 255 == p ? 255 : d * d / (255 - p);
                        else if (27 == b)
                            _ = 0 == f ? 0 : 255 - (255 - m) * (255 - m) / f, x = 0 == c ? 0 : 255 - (255 - g) * (255 - g) / c, y = 0 == d ? 0 : 255 - (255 - p) * (255 - p) / d;
                        else if (28 == b)
                            _ = 0 == m ? 0 : 255 - (255 - f) * (255 - f) / m, x = 0 == g ? 0 : 255 - (255 - c) * (255 - c) / g, y = 0 == p ? 0 : 255 - (255 - d) * (255 - d) / p;
                        else if (2 == b) {
                            var T = a(m, g, p, f, c, d, s);
                            _ = T[0], x = T[1], y = T[2]
                        } else
                            _ = m, x = g, y = p;
                        u = s * h / 255, w = 1 - u, _ = 0 > _ ? 0 : _ > 255 ? 255 : _, x = 0 > x ? 0 : x > 255 ? 255 : x, y = 0 > y ? 0 : y > 255 ? 255 : y, _ = u * _ + w * m + .5 | 0, x = u * x + w * g + .5 | 0, y = u * y + w * p + .5 | 0, e[C] = _, e[C + 1] = x, e[C + 2] = y, e[C + 3] = v
                    } else
                        e[C] = m, e[C + 1] = g, e[C + 2] = p, e[C + 3] = v
            };
            var a = function(e, t, o, r, a, l, s) {
                var u = i(e, t, o), f = i(r, a, l);
                return n(f[0], s * f[1], u[2])
            }, i = function(e, t, o) {
                e /= 255, t /= 255, o /= 255;
                var r, a, i, n = Math.max(e, t, o), l = Math.min(e, t, o), s = n - l;
                if (i = (n + l) / 2, 0 == s)
                    r = 0, a = 0;
                else {
                    switch (a = i > .5 ? s / (2 - n - l) : s / (n + l), n) {
                        case e:
                            r = (t - o) / s + (o > t ? 6 : 0);
                            break;
                        case t:
                            r = (o - e) / s + 2;
                            break;
                        case o:
                            r = (e - t) / s + 4
                    }
                    r *= 60, 0 > r && (r += 360), r >= 360 && (r -= 360)
                }
                return i = .212671 * e + .71516 * t + .072169 * o, [r, a, i]
            }, n = function(e, t, o) {
                var r, a, i, n = e / 60, l = o > .5 ? 2 * t * (1 - o) : 2 * t * o, s = l * (1 - Math.abs(n % 2 - 1));
                1 > n ? (r = l, a = s, i = 0) : 2 > n ? (r = s, a = l, i = 0) : 3 > n ? (r = 0, a = l, i = s) : 4 > n ? (r = 0, a = s, i = l) : 5 > n ? (r = s, a = 0, i = l) : 6 > n && (r = l, a = 0, i = s);
                var u = o - .5 * l;
                return r += u, a += u, i += u, r *= 255, a *= 255, i *= 255, [r, a, i]
            };
            t.exports = o
        }), e.define("/src/js/core/enums.js", function(e, t) {
            "use strict";
            var o = {MOA_BLEND_MODE_NORMAL: 0,MOA_BLEND_MODE_OVERLAY: 1,MOA_BLEND_MODE_COLOR: 2,MOA_BLEND_MODE_SCREEN: 3,MOA_BLEND_MODE_DARKEN: 4,MOA_BLEND_MODE_MULTIPLY: 5,MOA_BLEND_MODE_SOFT: 6,MOA_BLEND_MODE_LIGHTEN: 7,MOA_BLEND_MODE_DIFFERENCE: 8,MOA_BLEND_MODE_NEGATION: 9,MOA_BLEND_MODE_EXCLUSION: 10,MOA_BLEND_MODE_HARD: 11,MOA_BLEND_MODE_RED: 12,MOA_BLEND_MODE_GREEN: 13,MOA_BLEND_MODE_BLUE: 14,MOA_BLEND_MODE_INTERPOLATION: 15,MOA_BLEND_MODE_COLOR_DODGE: 16,MOA_BLEND_MODE_INV_COLOR_DODGE: 17,MOA_BLEND_MODE_SOFT_DODGE: 18,MOA_BLEND_MODE_COLOR_BURN: 19,MOA_BLEND_MODE_INV_COLOR_BURN: 20,MOA_BLEND_MODE_SOFT_BURN: 21,MOA_BLEND_MODE_ADD: 22,MOA_BLEND_MODE_SUBTRACT: 23,MOA_BLEND_MODE_STAMP: 24,MOA_BLEND_MODE_REFLECT: 25,MOA_BLEND_MODE_GLOW: 26,MOA_BLEND_MODE_FREEZE: 27,MOA_BLEND_MODE_HEAT: 28,MOA_COMPOSITE_MODE_CLEAR: 0,MOA_COMPOSITE_MODE_SRC: 1,MOA_COMPOSITE_MODE_DST: 2,MOA_COMPOSITE_MODE_SRC_OVER: 3,MOA_COMPOSITE_MODE_DST_OVER: 4,MOA_COMPOSITE_MODE_SRC_IN: 5,MOA_COMPOSITE_MODE_DST_IN: 6,MOA_COMPOSITE_MODE_SRC_OUT: 7,MOA_COMPOSITE_MODE_DST_OUT: 8,MOA_COMPOSITE_MODE_SRC_ATOP: 9,MOA_COMPOSITE_MODE_DST_ATOP: 10,MOA_COMPOSITE_MODE_XOR: 11,MOA_ASPECT_MODE_STRETCH: 0,MOA_ASPECT_MODE_AVERAGE: 1,MOA_ASPECT_MODE_FIT: 2,MOA_ASPECT_MODE_FILL: 3,MOA_SHAPE_MODE_IDENTITY: 0,MOA_SHAPE_MODE_LINE: 1,MOA_SHAPE_MODE_CIRCLE: 2,MOA_SHAPE_MODE_GAUSSIAN: 3,MOA_SHAPE_MODE_SQUARE: 4,MOA_SHAPE_MODE_SQUARE_ROUND: 5,MOA_SHAPE_MODE_STARDOM: 6,MOA_SHAPE_MODE_LOBES: 7,MOA_SHAPE_MODE_RING_LOBES: 8,MOA_SHAPE_MODE_HEART: 9,MOA_SHAPE_MODE_STAR: 10,MOA_SHAPE_MODE_CRESCENT: 11,MOA_SHAPE_MODE_SQUIGGLY: 12,MOA_SHAPE_MODE_ZIGZAG: 13,MOA_SHAPE_MODE_SPIRAL: 14};
            o.getAspectModeIndex = function(e) {
                return "stretch" === e ? o.MOA_ASPECT_MODE_STRETCH : "average" === e ? o.MOA_ASPECT_MODE_AVERAGE : "fit" === e ? o.MOA_ASPECT_MODE_FIT : "fill" === e ? o.MOA_ASPECT_MODE_FILL : -1
            }, o.getShapeModeIndex = function(e) {
                return "line" === e ? o.MOA_SHAPE_MODE_LINE : "circle" === e ? o.MOA_SHAPE_MODE_CIRCLE : "gaussian" === e ? o.MOA_SHAPE_MODE_GAUSSIAN : "square" === e ? o.MOA_SHAPE_MODE_SQUARE : "squareRound" === e ? o.MOA_SHAPE_MODE_SQUARE_ROUND : "stardom" === e ? o.MOA_SHAPE_MODE_STARDOM : "lobes" === e ? o.MOA_SHAPE_MODE_LOBES : "ringLobes" === e ? o.MOA_SHAPE_MODE_RING_LOBES : "heart" === e ? o.MOA_SHAPE_MODE_HEART : "star" === e ? o.MOA_SHAPE_MODE_STAR : "crescent" === e ? o.MOA_SHAPE_MODE_CRESCENT : "squiggly" === e ? o.MOA_SHAPE_MODE_SQUIGGLY : "zigzag" === e ? o.MOA_SHAPE_MODE_ZIGZAG : "spiral" === e ? o.MOA_SHAPE_MODE_SPIRAL : -1
            }, o.getBlendModeIndex = function(e) {
                return "normal" == e ? o.MOA_BLEND_MODE_NORMAL : "overlay" == e ? o.MOA_BLEND_MODE_OVERLAY : "color" == e ? o.MOA_BLEND_MODE_COLOR : "screen" == e ? o.MOA_BLEND_MODE_SCREEN : "darken" == e ? o.MOA_BLEND_MODE_DARKEN : "multiply" == e ? o.MOA_BLEND_MODE_MULTIPLY : "soft" == e ? o.MOA_BLEND_MODE_SOFT : "lighten" == e ? o.MOA_BLEND_MODE_LIGHTEN : "difference" == e ? o.MOA_BLEND_MODE_DIFFERENCE : "negation" == e ? o.MOA_BLEND_MODE_NEGATION : "exclusion" == e ? o.MOA_BLEND_MODE_EXCLUSION : "hard" == e ? o.MOA_BLEND_MODE_HARD : "red" == e ? o.MOA_BLEND_MODE_RED : "green" == e ? o.MOA_BLEND_MODE_GREEN : "blue" == e ? o.MOA_BLEND_MODE_BLUE : "interpolation" == e ? o.MOA_BLEND_MODE_INTERPOLATION : "colordodge" == e ? o.MOA_BLEND_MODE_COLOR_DODGE : "invcolordodge" == e ? o.MOA_BLEND_MODE_INV_COLOR_DODGE : "softdodge" == e ? o.MOA_BLEND_MODE_SOFT_DODGE : "colorburn" == e ? o.MOA_BLEND_MODE_COLOR_BURN : "invcolorburn" == e ? o.MOA_BLEND_MODE_INV_COLOR_BURN : "softburn" == e ? o.MOA_BLEND_MODE_SOFT_BURN : "add" == e ? o.MOA_BLEND_MODE_ADD : "subtract" == e ? o.MOA_BLEND_MODE_SUBTRACT : "stamp" == e ? o.MOA_BLEND_MODE_STAMP : "reflect" == e ? o.MOA_BLEND_MODE_REFLECT : "glow" == e ? o.MOA_BLEND_MODE_GLOW : "freeze" == e ? o.MOA_BLEND_MODE_FREEZE : "heat" == e ? o.MOA_BLEND_MODE_HEAT : -1
            }, t.exports = o
        }), e.define("/src/js/mask-draw/colorsplash.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/colorMatrixTransform"), a = e("./mask"), i = e("./drawtool");
            o.draw = function(e, t, o, r, n) {
                if (n.constant = 1, n.considerLuminosity = !1, e.moaGL) {
                    var l = n.startX, s = n.startY;
                    return void e.moaGL.maskAddPoints(i.state.maskTexId, t, o, [l / t, s / o], n.radius, n.sigmaC, n.alpha, "splash", {r: 255,g: 0,b: 255,a: 255}, 1 == n.addMask)
                }
                a.masksimilarcolors(e, t, o, r, n)
            }, o.preview = i.preview, o.drawStroke = i.drawStroke, o.init = function(e, t, o, n) {
                a.initMaskOpaque(n, t, o, i.state), i.preprocess(e, function() {
                    var t = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0];
                    r.adjSaturation(t, 0), r.colorMatrixTransform(e, t)
                })
            }, t.exports = o
        }), e.define("/src/js/filters/colorMatrixTransform.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./histogramMapping"), a = e("./blendWithBitmap"), i = e("../core/copy");
            o.mulcm = function(e, t) {
                var o = new Array(12);
                o[0] = e[0] * t[0] + e[1] * t[4] + e[2] * t[8], o[1] = e[0] * t[1] + e[1] * t[5] + e[2] * t[9], o[2] = e[0] * t[2] + e[1] * t[6] + e[2] * t[10], o[4] = e[4] * t[0] + e[5] * t[4] + e[6] * t[8], o[5] = e[4] * t[1] + e[5] * t[5] + e[6] * t[9], o[6] = e[4] * t[2] + e[5] * t[6] + e[6] * t[10], o[8] = e[8] * t[0] + e[9] * t[4] + e[10] * t[8], o[9] = e[8] * t[1] + e[9] * t[5] + e[10] * t[9], o[10] = e[8] * t[2] + e[9] * t[6] + e[10] * t[10], o[3] = e[0] * t[3] + e[1] * t[7] + e[2] * t[11] + e[3], o[7] = e[4] * t[3] + e[5] * t[7] + e[6] * t[11] + e[7], o[11] = e[8] * t[3] + e[9] * t[7] + e[10] * t[11] + e[11];
                for (var r = 0; 12 > r; r++)
                    e[r] = o[r]
            }, o.getIdentity = function() {
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
            }, o.adjBrightnessContrast = function(e, t, r) {
                var a = 128 * (1 - r), i = a * t, n = r * t, l = [n, 0, 0, i, 0, n, 0, i, 0, 0, n, i];
                o.mulcm(e, l)
            }, o.adjSaturation = function(e, t) {
                var r = .213 * (1 - t), a = .715 * (1 - t), i = .072 * (1 - t), n = [r + t, a, i, 0, r, a + t, i, 0, r, a, i + t, 0];
                o.mulcm(e, n)
            }, o.adjBrightness = function(e, t) {
                var r = [t, 0, 0, 0, 0, t, 0, 0, 0, 0, t, 0];
                o.mulcm(e, r)
            }, o.adjContrast = function(e, t) {
                var r = 128 * (1 - t), a = [t, 0, 0, r, 0, t, 0, r, 0, 0, t, r];
                o.mulcm(e, a)
            }, o.colorMatrixTransform = function(e, t, o, n) {
                "string" != typeof o && (o = "normal"), "number" != typeof n && (n = 1);
                var l = i.copy(e);
                if (e.moaGL)
                    return void e.moaGL.renderColorMatrixTransform(t);
                var s, u, f, c = e.length, d = 0, h = 0 === t[1] && 0 === t[2] && 0 === t[4] && 0 === t[6] && 0 === t[8] && 0 === t[9];
                if (h) {
                    for (var m = [], g = [], p = [], v = 0; 256 > v; v++)
                        m[v] = Math.max(0, Math.min(255, t[0] * v + t[3] + .5 | 0)), g[v] = Math.max(0, Math.min(255, t[5] * v + t[7] + .5 | 0)), p[v] = Math.max(0, Math.min(255, t[10] * v + t[11] + .5 | 0));
                    var _ = {r: m,g: g,b: p};
                    r.mapHist(e, _)
                } else
                    for (; c > d; )
                        s = t[0] * e[d] + t[1] * e[d + 1] + t[2] * e[d + 2] + t[3] + .5 | 0, u = t[4] * e[d] + t[5] * e[d + 1] + t[6] * e[d + 2] + t[7] + .5 | 0, f = t[8] * e[d] + t[9] * e[d + 1] + t[10] * e[d + 2] + t[11] + .5 | 0, e[d] = 0 > s ? 0 : s > 255 ? 255 : s, e[d + 1] = 0 > u ? 0 : u > 255 ? 255 : u, e[d + 2] = 0 > f ? 0 : f > 255 ? 255 : f, d += 4;
                ("normal" !== o || 1 !== n) && a.blendWithBitmap(e, l, e, 0, 0, o, n)
            }, t.exports = o
        }), e.define("/src/js/mask-draw/mask.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/colorConversion");
            o.initMaskTransparent = function(e, t, o, r) {
                if (e.moaGL)
                    return r.maskTexId = e.moaGL.createMask(t, o), void (r.processedImageOverOriginal = !1);
                var a;
                for (a = 0; a < e.length; a++)
                    e[a] = 0
            }, o.initMaskOpaque = function(e, t, o, r) {
                if (e.moaGL)
                    return r.maskTexId = e.moaGL.createMask(t, o), void (r.processedImageOverOriginal = !0);
                var a;
                for (a = 0; a < e.length; a++)
                    e[a] = 255
            }, o.masksimilarcolors = function(e, t, o, a, i) {
                var n = i.posX, l = i.posY, s = i.startX, u = i.startY, f = i.radius, c = i.sigmaC, d = i.addMask, h = (i.constant, i.colorLAB), m = i.alpha, g = i.considerLuminosity;
                f || (f = 10), c || (c = 6), "undefined" == typeof g && (g = !1);
                var p, v = .5 * f, _ = new Array;
                for (p = 0; 256 > p; p++)
                    _[p] = .04045 >= p / 255 ? 100 * p / 255 / 12.92 : 100 * Math.pow((p / 255 + .055) / 1.055, 2.4);
                var x = [], y = 1024;
                for (p = 0; y > p; p++)
                    x[p] = Math.pow(p / (y - 1), 1 / 3);
                var M, C, w, b, D, S;
                s = Math.max(0, Math.min(t - 1, Math.round(s))), u = Math.max(0, Math.min(o - 1, Math.round(u)));
                var P, T = 4 * (s + t * u);
                P = "object" != typeof h ? r.rgb2labwithcbrtmapping(e[T], e[T + 1], e[T + 2], _, x) : h;
                var E, F, L, A, R, I = Math.pow(f + v * (1 - Math.sqrt(5 / 255)), 2), O = Math.sqrt(I), B = -2 * c * c * Math.log(250 / 255), N = -2 * c * c * Math.log(5 / 255), s = Math.max(0, Math.min(t - 1, Math.round(n - O))), U = Math.max(0, Math.min(t - 1, Math.round(n + O))), u = Math.max(0, Math.min(o - 1, Math.round(l - O))), k = Math.max(0, Math.min(o - 1, Math.round(l + O)));
                for (C = u; k >= C; C++)
                    for (M = s; U >= M; M++)
                        if (w = 4 * (M + t * C), E = M + t * C, b = (M - n) * (M - n) + (C - l) * (C - l), I > b) {
                            if (L = r.rgb2labwithcbrtmapping(e[w], e[w + 1], e[w + 2], _, x), S = g ? Math.pow(P[0] - L[0], 2) + Math.pow(P[1] - L[1], 2) + Math.pow(P[2] - L[2], 2) : Math.pow(P[1] - L[1], 2) + Math.pow(P[2] - L[2], 2), B > S)
                                A = 1;
                            else {
                                if (S > N) {
                                    A = 0;
                                    continue
                                }
                                A = Math.exp(-S / (2 * c * c))
                            }
                            if (f * f > b)
                                R = 1;
                            else {
                                var j = 1 - (Math.sqrt(b) - f) / v;
                                R = Math.pow(j, 2)
                            }
                            D = A * R, D *= m, d ? (F = 255 * (1 * D + (1 - D) * a[E] / 255), F = 0 > F ? 0 : F > 255 ? 255 : F + .5 | 0, a[E] = F) : (F = 255 * (0 * D + (1 - D) * a[E] / 255), F = 0 > F ? 0 : F > 255 ? 255 : F + .5 | 0, a[E] = F)
                        }
            }, o.maskradial = function(e, t, o, r, a) {
                var i, n, l, t, o, s, u, f, c, d, h = a.posX, m = a.posY, g = a.sigmaR;
                f = g * g, c = -2 * f * Math.log(1 - 1 / 255), d = -2 * f * Math.log(1 - 254 / 255);
                var p;
                for (n = 0; o > n; n++)
                    for (p = (n - m) * (n - m), i = 0; t > i; i++)
                        l = i + t * n, u = (i - h) * (i - h) + p, c > u ? s = 0 : u > d ? s = 255 : (s = 1 - Math.exp(-u / (2 * f)), s = 255 * s + .5, s = s > 255 ? 255 : 0 > s ? 0 : 0 | s), r[l] = s
            }, o.masklinear = function(e, t, o, r, a) {
                var i, n, l, s, u, f, c, d, h, m, g = a.posX, p = a.posY, v = a.sigmaR, _ = a.angle;
                for (u = v * v, f = Math.sqrt(-2 * u * Math.log(1 - 1 / 255)), c = Math.sqrt(-2 * u * Math.log(1 - 254 / 255)), d = -Math.sin(_), h = Math.cos(_), n = 0; o > n; n++)
                    for (i = 0; t > i; i++)
                        l = i + t * n, m = Math.abs(d * (g - i) + h * (n - p)), s = f > m ? 0 : m > c ? 1 : 1 - Math.exp(-m * m / (2 * u)), s = 255 * s + .5, s = s > 255 ? 255 : 0 > s ? 0 : 0 | s, r[l] = s
            }, t.exports = o
        }), e.define("/src/js/mask-draw/drawtool.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/colorMatrixTransform"), a = e("../filters/sharpness"), i = e("./mask");
            o.state = {}, o.sanitizeDrawParams = function(e) {
                return "undefined" == typeof e && (e = {}), "number" != typeof e.posX && (e.posX = 0), "number" != typeof e.posY && (e.posY = 0), "number" != typeof e.startX && (e.startX = e.posX), "number" != typeof e.startY && (e.startY = e.posY), "number" != typeof e.radius && (e.radius = 0), "number" != typeof e.sigmaC && (e.sigmaC = 10), "number" != typeof e.constant && (e.constant = 1), "number" != typeof e.alpha && (e.alpha = 1), "boolean" != typeof e.addMask && (e.addMask = !0), "boolean" != typeof e.isFirstDraw && (e.isFirstDraw = !0), "boolean" != typeof e.considerLuminosity && (e.considerLuminosity = !1), e
            }, o.draw = function(e, t, o, r, a) {
                "colorsplash" === a.toolName || "blemish" === a.toolName ? (a.constant = 1, a.considerLuminosity = !1, i.masksimilarcolors(e, t, o, r, a)) : "tiltshift" === a.toolName && ("linear" === a.tiltshiftMode ? i.masklinear(e, t, o, r, a) : "radial" === a.tiltshiftMode && i.maskradial(e, t, o, r, a))
            }, o.preview = function(e, t, r, a, i, n, l, s, u, f) {
                if (e.moaGL)
                    return void e.moaGL.drawExistingProcessedTextureWithMaskTexture(o.state.processedTexID, o.state.maskTexId, o.state.processedImageOverOriginal);
                "number" != typeof l && (l = 0), "number" != typeof s && (s = 0), "number" != typeof u && (u = i - 1), "number" != typeof f && (f = n - 1), l = 0 > l ? 0 : l > i - 1 ? i - 1 : Math.round(l), s = 0 > s ? 0 : s > n - 1 ? n - 1 : Math.round(s), u = 0 > u ? 0 : u > i - 1 ? i - 1 : Math.round(u), f = 0 > f ? 0 : f > n - 1 ? n - 1 : Math.round(f);
                var c, d, h, m;
                for (d = s; f >= d; d++)
                    for (c = l; u >= c; c++)
                        h = 4 * (i * d + c), m = a[i * d + c] / 255, e[h] = m * r[h] + (1 - m) * t[h], e[h + 1] = m * r[h + 1] + (1 - m) * t[h + 1], e[h + 2] = m * r[h + 2] + (1 - m) * t[h + 2]
            }, o.init = function(e, t, o, i, n) {
                if (!(t * o > i.length || 0 > t * o) && 4 * t * o === e.length) {
                    var l, s = "colorsplash" === n, u = "blemish" === n, f = "tiltshift" === n;
                    if (s)
                        for (l = 0; l < i.length; l++)
                            i[l] = 255;
                    else
                        for (l = 0; l < i.length; l++)
                            i[l] = 0;
                    if (s) {
                        var c = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0];
                        r.adjSaturation(c, 0), r.colorMatrixTransform(e, c)
                    } else
                        (u || f) && a.joesharpen(e, t, o, -100)
                }
            }, o.preprocess = function(e, t) {
                var r;
                e.moaGL && (r = e.moaGL.renderingMode, e.moaGL.renderingMode = 2, e.moaGL.createEffect()), t && t(), e.moaGL && (e.moaGL.renderingMode = r, o.state.processedTexID = e.moaGL.glRenderingObjects.readTexture, e.moaGL.finalizeEffect(), e.moaGL.renderingMode = r, e.moaGL.maskAddPoints(o.state.maskTexId, 500, 500, [5, 5], 1e3, 60, 1, "normal", {r: 255,g: 0,b: 255,a: 255}, !1))
            }, o.drawPoint = function() {
            }, o.drawStroke = function(e, t, r) {
                e.moaGL.maskFillRadial(o.state.maskTexID, t, r, t / 2, r / 2, r)
            }, t.exports = o
        }), e.define("/src/js/filters/adjustments.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./contrastCurve"), a = e("./gamma"), i = e("./sharpness"), n = e("./colortemp"), l = e("./blendWithBitmap"), s = e("../core/copy"), u = e("../filters/colorMatrixTransform");
            o.contrast = function(e, t, o, a) {
                a = .75 * a;
                var i = Math.log(.5 + a / 400) / Math.log(.5);
                r.contrastCurve(e, 1 / i)
            }, o.brightness = function(e, t, o, r) {
                if (0 > r) {
                    var i = Math.log(.5 + r / 400) / Math.log(.5);
                    a.gamma(e, i)
                } else {
                    r = .6 * r / 100 + 1;
                    var n = u.getIdentity();
                    u.adjBrightnessContrast(n, r, 1), u.colorMatrixTransform(e, n)
                }
            }, o.saturation = function(e, t, o, r) {
                r = r / 100 + 1;
                var a = u.getIdentity();
                u.adjSaturation(a, r), u.colorMatrixTransform(e, a)
            }, o.sharpness = function(e, t, o, r) {
                i.sharpen(e, t, o, r, 1, "normal")
            }, o.colortemp = function(e, t, o, r) {
                n.colortemp(e, r)
            }, o.adjustments = function(e, t) {
                for (var o, r = s.makeData(e.length), a = t.brightness, i = t.contrast, n = t.warmth, u = t.saturation, f = 0 != a, c = 0 != i, d = 0 > i, h = 0 != n, m = 0 != u, g = new Uint8ClampedArray(256), p = new Uint8ClampedArray(256), v = new Uint8ClampedArray(256), _ = new Uint8ClampedArray(256), x = new Uint8ClampedArray(256), y = new Array(9), M = new Array(9), C = new Array(3), w = Math.max(-100, Math.min(100, a)), b = w / 100, D = 0; 256 > D; D++) {
                    if (0 > b)
                        o = D + 50 * b * Math.sin(Math.PI * D / 255);
                    else {
                        var S = D / 255;
                        o = Math.pow(S, 1 + .15 * Math.abs(b) - Math.abs(b) * Math.pow(S, .2)), 0 > b && (o = S * (1 - .25 * Math.abs(b)) - .7 * (o - S) * Math.sin(.5 * Math.PI * S)), o *= 255
                    }
                    g[D] = Math.max(0, Math.min(255, Math.round(o)))
                }
                var P = Math.max(-100, Math.min(100, i));
                P /= 100;
                var T, b = P, E = Math.abs(b) + 1;
                b > 0 ? T = 110 : (b = Math.cos(Math.PI * Math.pow(Math.abs(b), .8) * .5) - 1, E = 1 / (Math.abs(b) + 1), T = 110);
                for (var D = 0; 256 > D; D++) {
                    var F;
                    F = T > D ? T * Math.pow(D / T, E) : 255 - (255 - T) * Math.pow((255 - D) / (255 - T), E), 0 > b && (F = D - Math.sin(Math.PI * D / 255) * (D - F)), p[D] = Math.max(0, Math.min(255, Math.round(F)))
                }
                var L = .3 * Math.abs(b);
                y[0] = -0.787 * L + 1, y[3] = .715 * L, y[6] = .072 * L, y[1] = .213 * L, y[4] = (.715 - 1) * L + 1, y[7] = .072 * L, y[2] = .213 * L, y[5] = .715 * L, y[8] = -0.928 * L + 1;
                var A, R, I, O = Math.max(-100, Math.min(100, n)), b = O / 100;
                b = b > 0 ? .7 * (1 - Math.cos(Math.PI * b * .5)) : Math.cos(Math.PI * b * .5) - 1, b > 0 ? (C[0] = 48 / 255 * b, C[1] = 28 / 255 * b, C[2] = -6 / 255 * b) : (C[0] = 16 / 255 * b, C[1] = -10 / 255 * b, C[2] = -48 / 255 * b);
                for (var D = 0; 255 >= D; D++)
                    b > 0 ? (A = D + 48 * b * Math.sin(Math.PI * D / 255), R = D + 28 * b * Math.sin(Math.PI * D / 255), I = D - 6 * b * Math.sin(Math.PI * D / 255)) : (A = D + 16 * b * Math.sin(Math.PI * D / 255), R = D - 10 * b * Math.sin(Math.PI * D / 255), I = D - 48 * b * Math.sin(Math.PI * D / 255)), v[D] = A > 255 ? 255 : 0 > A ? 0 : A + .5 | 0, _[D] = R > 255 ? 255 : 0 > R ? 0 : R + .5 | 0, x[D] = I > 255 ? 255 : 0 > I ? 0 : I + .5 | 0;
                var L, B = Math.max(-100, Math.min(100, u)), N = 1.4, U = 0, b = B / 100 + 1;
                b -= 1, b = 0 > b ? (1 - U) * (Math.cos(Math.PI * b * .5) - 1) : (N - 1) * (1 - Math.cos(Math.PI * b * .5)), b += 1, L = 1 - b, M[0] = -0.787 * L + 1, M[3] = .715 * L, M[6] = .072 * L, M[1] = .213 * L, M[4] = (.715 - 1) * L + 1, M[7] = .072 * L, M[2] = .213 * L, M[5] = .715 * L, M[8] = -0.928 * L + 1;
                for (var k, j, G, X, W, V, z, Y, H, q, Z, $, D = 0; D < e.length; )
                    k = e[D], j = e[D + 1], G = e[D + 2], f && (k = g[k], j = g[j], G = g[G]), c && (z = -k + j + G, Y = k - j + G, H = k + j - G, X = p[k], W = p[j], V = p[G], q = -X + W + V, Z = X - W + V, $ = X + W - V, X += .4 * (q - z), W += .4 * (Z - Y), V += .4 * ($ - H), d && (X = y[0] * X + y[3] * W + y[6] * V, W = y[1] * X + y[4] * W + y[7] * V, V = y[2] * X + y[5] * W + y[8] * V), k = X > 255 ? 255 : 0 > X ? 0 : X + .5 | 0, j = W > 255 ? 255 : 0 > W ? 0 : W + .5 | 0, G = V > 255 ? 255 : 0 > V ? 0 : V + .5 | 0), h && (k = v[k], j = _[j], G = x[G]), m && (X = M[0] * k + M[3] * j + M[6] * G, W = M[1] * k + M[4] * j + M[7] * G, V = M[2] * k + M[5] * j + M[8] * G, k = X, j = W, G = V), r[D] = k, r[D + 1] = j, r[D + 2] = G, r[D + 3] = e[D + 3], D += 4;
                l.blendWithBitmap(e, e, r, null, null, t.blendMode, t.alpha)
            }, t.exports = o
        }), e.define("/src/js/filters/contrastCurve.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./histogramMapping");
            o.contrastCurve = function(e, t) {
                for (var o = [], a = [], i = 0; 128 > i; i++)
                    o[i] = Math.round(127 * Math.pow(i / 127, t));
                for (i = 128; 256 > i; i++)
                    o[i] = Math.round(127 + 127 * Math.pow((i - 128) / 127, 1 / t));
                a.r = o, a.g = o, a.b = o, r.mapHist(e, a)
            }, t.exports = o
        }), e.define("/src/js/filters/gamma.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./histogramMapping");
            o.gamma = function(e, t) {
                "undefined" == typeof t && (t = 1);
                var o, a = [], i = [];
                for (o = 0; 256 > o; o++)
                    a[o] = 255 * Math.pow(o / 255, t) + .5 | 0;
                i.r = a, i.g = a, i.b = a, r.mapHist(e, i)
            }, t.exports = o
        }), e.define("/src/js/filters/colortemp.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./histogramMapping");
            o.colortemp = function(e, t) {
                var o = t;
                0 !== o && (o = 100 * o / Math.abs(o) * (1 - Math.cos(o * Math.PI / 200)));
                var a, i, n, l = [], s = [], u = [];
                a = i = n = 255, o > 0 ? (a = 255 + 90.78 * o / 100, i = 255 - 24 * o / 100, n = 255 - 140 * o / 100) : (a = 255 + 155 * o / 100, i = 255 - 44.625 * o / 100, n = 255 - 245.31 * o / 100);
                for (var f = 0; 255 >= f; f++)
                    l[f] = f * a / 255 + .5 | 0, s[f] = f * i / 255 + .5 | 0, u[f] = f * n / 255 + .5 | 0, l[f] = l[f] > 255 ? 255 : l[f] < 0 ? 0 : l[f], s[f] = s[f] > 255 ? 255 : s[f] < 0 ? 0 : s[f], u[f] = u[f] > 255 ? 255 : u[f] < 0 ? 0 : u[f];
                var c = {r: l,g: s,b: u};
                r.mapHist(e, c)
            }, o.colortempTool = function(e, t) {
                t /= 100, t = t > 0 ? .7 * (1 - Math.cos(Math.PI * t * .5)) : Math.cos(Math.PI * t * .5) - 1;
                for (var o = [], a = [], i = [], n = 0; 255 >= n; n++)
                    t > 0 ? (o[n] = n + 48 * t * Math.sin(Math.PI * n / 255), a[n] = n + 28 * t * Math.sin(Math.PI * n / 255), i[n] = n - 6 * t * Math.sin(Math.PI * n / 255)) : (o[n] = n + 16 * t * Math.sin(Math.PI * n / 255), a[n] = n + -10 * t * Math.sin(Math.PI * n / 255), i[n] = n + -48 * t * Math.sin(Math.PI * n / 255)), o[n] = o[n] > 255 ? 255 : o[n] < 0 ? 0 : o[n], a[n] = a[n] > 255 ? 255 : a[n] < 0 ? 0 : a[n], i[n] = i[n] > 255 ? 255 : i[n] < 0 ? 0 : i[n];
                var l = {r: o,g: a,b: i};
                r.mapHist(e, l)
            }, t.exports = o
        }), e.define("/src/js/mask-draw/tiltshift.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/sharpness"), a = e("./mask"), i = e("./drawtool");
            o.draw = function(e, t, o, r, n) {
                if ("linear" === n.tiltshiftMode) {
                    if (e.moaGL) {
                        var l = n.posX, s = n.posY, u = n.sigmaR, f = n.angle;
                        return void e.moaGL.maskFillLinear(i.state.maskTexId, t, o, l, s, u, f)
                    }
                    a.masklinear(e, t, o, r, n)
                } else if ("radial" === n.tiltshiftMode) {
                    if (e.moaGL) {
                        var l = n.posX, s = n.posY, u = n.sigmaR;
                        return void e.moaGL.maskAddPoints(i.state.maskTexId, t, o, [l / t, s / o], n.radius, n.sigmaC, n.alpha, "normal", {r: 255,g: 0,b: 255,a: 255}, !1)
                    }
                    a.maskradial(e, t, o, r, n)
                }
            }, o.preview = i.preview, o.drawStroke = i.drawStroke, o.init = function(e, t, o, n) {
                a.initMaskTransparent(n, t, o, i.state), i.preprocess(e, function() {
                    r.sharpen(e, t, o, -100, 1, "normal")
                })
            }, t.exports = o
        }), e.define("/src/js/mask-draw/blemish.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/sharpness"), a = e("./mask"), i = e("./drawtool");
            o.draw = function(e, t, o, r, n) {
                if (n.constant = 1, n.considerLuminosity = !1, n.sigmaC = 99999999999, e.moaGL) {
                    var l = n.startX, s = n.startY;
                    return void e.moaGL.maskAddPoints(i.state.maskTexId, t, o, [l / t, s / o], n.radius, n.sigmaC, n.alpha, "normal", {r: 255,g: 0,b: 255,a: 255}, !1)
                }
                a.masksimilarcolors(e, t, o, r, n)
            }, o.preview = i.preview, o.drawStroke = i.drawStroke, o.init = function(e, t, o, n) {
                a.initMaskTransparent(n, t, o, i.state), i.preprocess(e, function() {
                    r.sharpen(e, t, o, -100, 1, "normal")
                })
            }, t.exports = o
        }), e.define("/src/js/mask-draw/redeye.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./mask"), a = e("./drawtool");
            o.draw = function(e, t, o, i, n) {
                if (n.constant = 1, n.considerLuminosity = !1, n.sigmaC = 1e17, n.startX = n.posX, n.startY = n.posY, n.alpha = 1, e.moaGL) {
                    var l = n.startX, s = n.startY;
                    return void e.moaGL.maskAddPoints(a.state.maskTexId, t, o, [l / t, s / o], n.radius, n.sigmaC, n.alpha, "normal", {r: 255,g: 0,b: 255,a: 255}, !1)
                }
                r.masksimilarcolors(e, t, o, i, n)
            }, o.preview = a.preview, o.drawStroke = a.drawStroke, o.init = function(e, t, i, n) {
                r.initMaskTransparent(n, t, i, a.state), a.preprocess(e, function() {
                    o.redeye(e, t, i)
                })
            }, o.redeye = function(e, t, o) {
                var r, a, i, n, l, s, u;
                if (e.moaGL)
                    return void e.moaGL.renderRedeye();
                for (a = 0; o > a; a++)
                    for (r = 0; t > r; r++)
                        i = 4 * (r + t * a), n = e[i], l = e[i + 1], s = e[i + 2], n >= l + s && (u = (l + s) / 2, e[i] = 0 > u ? 0 : u > 255 ? 255 : u + .5 | 0)
            }, t.exports = o
        }), e.define("/src/js/mask-draw/whiten.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./mask"), a = e("./drawtool"), i = e("../filters/colorConversion");
            o.draw = function(e, t, o, i, n) {
                if (n.constant = 1, n.considerLuminosity = !0, n.sigmaC = 10, n.startX = n.posX, n.startY = n.posY, n.alpha = .5, n.sigmaC = 99999999999999, e.moaGL) {
                    var l = n.startX, s = n.startY;
                    return void e.moaGL.maskAddPoints(a.state.maskTexId, t, o, [l / t, s / o], n.radius, n.sigmaC, n.alpha, "splash", {r: 255,g: 0,b: 255,a: 255}, 0 == n.addMask)
                }
                r.masksimilarcolors(e, t, o, i, n)
            }, o.preview = a.preview, o.drawStroke = a.drawStroke, o.init = function(e, t, i, n) {
                r.initMaskTransparent(n, t, i, a.state), a.preprocess(e, function() {
                    o.whiten(e, t, i)
                })
            }, o.whiten = function(e, t, o) {
                if (e.moaGL)
                    return void e.moaGL.renderWhiten();
                for (var r = new Array, a = 0; 256 > a; a++)
                    r[a] = .04045 >= a / 255 ? 100 * a / 255 / 12.92 : 100 * Math.pow((a / 255 + .055) / 1.055, 2.4);
                var n, l, s, u, f, c, d, h;
                for (f = 0; o > f; f++)
                    for (u = 0; t > u; u++)
                        n = 4 * (u + t * f), d = i.rgb2lab(e[n], e[n + 1], e[n + 2], r), s = 0, s += Math.pow(d[1] - 132, 2), d[2] < 127 && (s += Math.pow(d[2] - 127, 2)), l = .65 * Math.exp(-s / 98), h = 255 * Math.pow(d[0] / 255, 1 / (.5 * l + 1)), c = i.lab2rgb([h, d[1], (1 - l) * (d[2] - 127) + 127]), e[n] = c[0], e[n + 1] = c[1], e[n + 2] = c[2]
            }, t.exports = o
        }), e.define("/src/js/mask-draw/spraytan.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/blendWithColor"), a = e("./mask"), i = e("./drawtool");
            o.draw = function(e, t, o, r, n) {
                n = i.sanitizeDrawParams(n), n.constant = 1, n.alpha = .1, n.considerLuminosity = !1, n.sigmaC = 10, a.masksimilarcolors(e, t, o, r, n)
            }, o.preview = i.preview, o.drawStroke = i.drawStroke, o.init = function(e, t, o, n) {
                t * o > n.length || 0 > t * o || 4 * t * o === e.length && (a.initMaskTransparent(n, i.state), i.preprocess(e, function() {
                    var a = [30, 30, 30, 1];
                    r.colorSoft(e, t, o, a[0], a[1], a[2], a[3])
                }))
            }, t.exports = o
        }), e.define("/src/js/filters/blendWithColor.js", function(e, t) {
            "use strict";
            var o = {}, r = (e("./colorMatrixTransform"), e("./histogramMapping")), a = e("../core/enums"), i = function(e, t, o, r, a) {
                var i = [];
                i.r = [], i.g = [], i.b = [];
                var n = 1 - a;
                if ("normal" == e)
                    for (var l = 0; 256 > l; l++)
                        i.r[l] = n * l + a * t + .5 | 0, i.g[l] = n * l + a * o + .5 | 0, i.b[l] = n * l + a * r + .5 | 0, i.r[l] = i.r[l] > 255 ? 255 : i.r[l] < 0 ? 0 : i.r[l], i.g[l] = i.g[l] > 255 ? 255 : i.g[l] < 0 ? 0 : i.g[l], i.b[l] = i.b[l] > 255 ? 255 : i.b[l] < 0 ? 0 : i.b[l];
                else if ("overlay" == e)
                    for (var l = 0; 256 > l; l++)
                        128 >= l ? (i.r[l] = n * l + 2 * a * l * t / 255 + .5 | 0, i.g[l] = n * l + 2 * a * l * o / 255 + .5 | 0, i.b[l] = n * l + 2 * a * l * r / 255 + .5 | 0) : (i.r[l] = n * l + a * (255 - (255 - l) * (255 - t) / 127.5) + .5 | 0, i.g[l] = n * l + a * (255 - (255 - l) * (255 - o) / 127.5) + .5 | 0, i.b[l] = n * l + a * (255 - (255 - l) * (255 - r) / 127.5) + .5 | 0), i.r[l] = i.r[l] > 255 ? 255 : i.r[l] < 0 ? 0 : i.r[l], i.g[l] = i.g[l] > 255 ? 255 : i.g[l] < 0 ? 0 : i.g[l], i.b[l] = i.b[l] > 255 ? 255 : i.b[l] < 0 ? 0 : i.b[l];
                else if ("multiply" == e)
                    for (var l = 0; 256 > l; l++)
                        i.r[l] = n * l + a * t * l / 255 + .5 | 0, i.g[l] = n * l + a * o * l / 255 + .5 | 0, i.b[l] = n * l + a * r * l / 255 + .5 | 0, i.r[l] = i.r[l] > 255 ? 255 : i.r[l] < 0 ? 0 : i.r[l], i.g[l] = i.g[l] > 255 ? 255 : i.g[l] < 0 ? 0 : i.g[l], i.b[l] = i.b[l] > 255 ? 255 : i.b[l] < 0 ? 0 : i.b[l];
                else if ("darken" == e)
                    for (var l = 0; 256 > l; l++)
                        i.r[l] = n * l + a * (t > l ? l : t) + .5 | 0, i.g[l] = n * l + a * (o > l ? l : o) + .5 | 0, i.b[l] = n * l + a * (r > l ? l : r) + .5 | 0, i.r[l] = i.r[l] > 255 ? 255 : i.r[l] < 0 ? 0 : i.r[l], i.g[l] = i.g[l] > 255 ? 255 : i.g[l] < 0 ? 0 : i.g[l], i.b[l] = i.b[l] > 255 ? 255 : i.b[l] < 0 ? 0 : i.b[l];
                else if ("screen" == e)
                    for (var l = 0; 256 > l; l++)
                        i.r[l] = n * l + a * (255 - (255 - l) * (255 - t) / 255) + .5 | 0, i.g[l] = n * l + a * (255 - (255 - l) * (255 - o) / 255) + .5 | 0, i.b[l] = n * l + a * (255 - (255 - l) * (255 - r) / 255) + .5 | 0, i.r[l] = i.r[l] > 255 ? 255 : i.r[l] < 0 ? 0 : i.r[l], i.g[l] = i.g[l] > 255 ? 255 : i.g[l] < 0 ? 0 : i.g[l], i.b[l] = i.b[l] > 255 ? 255 : i.b[l] < 0 ? 0 : i.b[l];
                else if ("soft" == e)
                    for (var s, l = 0; 256 > l; l++)
                        s = l * t >> 8, i.r[l] = n * l + opacityOrig * (s + (l * (255 - ((255 - l) * (255 - t) >> 8) - s) >> 8)) + .5 | 0, s = l * o >> 8, i.g[l] = n * l + opacityOrig * (s + (l * (255 - ((255 - l) * (255 - o) >> 8) - s) >> 8)) + .5 | 0, s = l * r >> 8, i.b[l] = n * l + opacityOrig * (s + (l * (255 - ((255 - l) * (255 - r) >> 8) - s) >> 8)) + .5 | 0, i.r[l] = i.r[l] > 255 ? 255 : i.r[l] < 0 ? 0 : i.r[l], i.g[l] = i.g[l] > 255 ? 255 : i.g[l] < 0 ? 0 : i.g[l], i.b[l] = i.b[l] > 255 ? 255 : i.b[l] < 0 ? 0 : i.b[l];
                return i
            };
            o.blendWithColor = function(e, t, i, n) {
                var l = [];
                l.r = [], l.g = [], l.b = [];
                var s, u, f, c, d, h, m, g, p, v = a.getBlendModeIndex(n.blendMode), _ = n.color, x = _.a, y = 1 - x;
                if (s = _.r, u = _.g, f = _.b, 2 == v)
                    o.colorColor(e, t, i, s, u, f, x);
                else {
                    var M;
                    for (M = 0; 256 > M; M++)
                        c = M, d = M, h = M, 0 == v ? (m = s, g = u, p = f) : 1 == v ? (m = 127 >= c ? 2 * c * s >> 8 : 65025 - 2 * (255 - c) * (255 - s) >> 8, g = 127 >= d ? 2 * d * u >> 8 : 65025 - 2 * (255 - d) * (255 - u) >> 8, p = 127 >= h ? 2 * h * f >> 8 : 65025 - 2 * (255 - h) * (255 - f) >> 8) : 3 == v ? (m = 65025 - (255 - c) * (255 - s) >> 8, g = 65025 - (255 - d) * (255 - u) >> 8, p = 65025 - (255 - h) * (255 - f) >> 8) : 4 == v ? (m = s > c ? c : s, g = u > d ? d : u, p = f > h ? h : f) : 5 == v ? (m = c * s >> 8, g = d * u >> 8, p = h * f >> 8) : 6 == v ? (m = 2 * c * s + c * c - (2 * c * c * s >> 8) >> 8, g = 2 * d * u + d * d - (2 * d * d * u >> 8) >> 8, p = 2 * h * f + h * h - (2 * h * h * f >> 8) >> 8) : 7 == v ? (m = c > s ? c : s, g = d > u ? d : u, p = h > f ? h : f) : 8 == v ? (m = c > s ? c - s : s - c, g = d > u ? d - u : u - d, p = h > f ? h - f : f - h) : 9 == v ? (m = 255 - (0 > 255 - c - s ? -(255 - c - s) : 255 - c - s), g = 255 - (0 > 255 - d - u ? -(255 - d - u) : 255 - d - u), p = 255 - (0 > 255 - h - f ? -(255 - h - f) : 255 - h - f)) : 10 == v ? (m = c + s - (2 * c * s >> 8), g = d + u - (2 * d * u >> 8), p = h + f - (2 * h * f >> 8)) : 11 == v ? (m = (127 > s ? 2 * c * s : 65025 - 2 * (255 - c) * (255 - s)) >> 8, g = (127 > u ? 2 * d * u : 65025 - 2 * (255 - d) * (255 - u)) >> 8, p = (127 > f ? 2 * h * f : 65025 - 2 * (255 - h) * (255 - f)) >> 8) : 12 == v ? (m = s, g = d, p = h) : 13 == v ? (m = c, g = u, p = h) : 14 == v ? (m = c, g = d, p = f) : 15 == v ? (m = 127 - 63 * Math.cos(.012319971192156862 * c) - 63 * Math.cos(.012319971192156862 * s), g = 127 - 63 * Math.cos(.012319971192156862 * d) - 63 * Math.cos(.012319971192156862 * u), p = 127 - 63 * Math.cos(.012319971192156862 * h) - 63 * Math.cos(.012319971192156862 * f)) : 16 == v ? (m = 255 == s ? 255 : 255 * c / (255 - s), g = 255 == u ? 255 : 255 * d / (255 - u), p = 255 == f ? 255 : 255 * h / (255 - f)) : 17 == v ? (m = 255 == c ? 255 : 255 * s / (255 - c), g = 255 == d ? 255 : 255 * u / (255 - d), p = 255 == h ? 255 : 255 * f / (255 - h)) : 18 == v ? (m = 256 > c + s ? (255 == s ? 255 : 255 * c / (255 - s)) / 2 : 255 - 127 * (255 - s) / c, g = 256 > d + u ? (255 == u ? 255 : 255 * d / (255 - u)) / 2 : 255 - 127 * (255 - u) / d, p = 256 > h + f ? (255 == f ? 255 : 255 * h / (255 - f)) / 2 : 255 - 127 * (255 - f) / h) : 19 == v ? (m = 0 == s ? 0 : 255 - 255 * (255 - c) / s, g = 0 == u ? 0 : 255 - 255 * (255 - d) / u, p = 0 == f ? 0 : 255 - 255 * (255 - h) / f) : 20 == v ? (m = 0 == c ? 0 : 255 - 255 * (255 - s) / c, g = 0 == d ? 0 : 255 - 255 * (255 - u) / d, p = 0 == h ? 0 : 255 - 255 * (255 - f) / h) : 21 == v ? (m = 256 > c + s ? 255 == c ? 255 : 127 * s / (255 - c) : 255 - 127 * (255 - c) / s, g = 256 > d + u ? 255 == d ? 255 : 127 * u / (255 - d) : 255 - 127 * (255 - d) / u, p = 256 > h + f ? 255 == h ? 255 : 127 * f / (255 - h) : 255 - 127 * (255 - h) / f) : 22 == v ? (m = c + s, g = d + u, p = h + f) : 23 == v ? (m = c + s - 255, g = d + u - 255, p = h + f - 255) : 24 == v ? (m = c + 2 * s - 255, g = d + 2 * u - 255, p = h + 2 * f - 255) : 25 == v ? (m = 255 == s ? 255 : c * c / (255 - s), g = 255 == u ? 255 : d * d / (255 - u), p = 255 == f ? 255 : h * h / (255 - f)) : 26 == v ? (m = 255 == c ? 255 : s * s / (255 - c), g = 255 == d ? 255 : u * u / (255 - d), p = 255 == h ? 255 : f * f / (255 - h)) : 27 == v ? (m = 0 == s ? 0 : 255 - (255 - c) * (255 - c) / s, g = 0 == u ? 0 : 255 - (255 - d) * (255 - d) / u, p = 0 == f ? 0 : 255 - (255 - h) * (255 - h) / f) : 28 == v ? (m = 0 == c ? 0 : 255 - (255 - s) * (255 - s) / c, g = 0 == d ? 0 : 255 - (255 - u) * (255 - u) / d, p = 0 == h ? 0 : 255 - (255 - f) * (255 - f) / h) : (m = c, g = d, p = h), m = 0 > m ? 0 : m > 255 ? 255 : m, g = 0 > g ? 0 : g > 255 ? 255 : g, p = 0 > p ? 0 : p > 255 ? 255 : p, m = x * m + y * c + .5 | 0, g = x * g + y * d + .5 | 0, p = x * p + y * h + .5 | 0, l.r[M] = m, l.g[M] = g, l.b[M] = p;
                    r.mapHist(e, l)
                }
            }, o.colorOverlay = function(e, t, o, a, n, l, s) {
                var u = i("overlay", a, n, l, s);
                r.mapHist(e, u)
            }, o.colorMultiply = function(e, t, o, a, n, l, s) {
                var u = i("multiply", a, n, l, s);
                r.mapHist(e, u)
            }, o.colorDarken = function(e, t, o, a, n, l, s) {
                var u = i("darken", a, n, l, s);
                r.mapHist(e, u)
            }, o.colorSoft = function(e, t, o, a, n, l, s) {
                var u = i("soft", a, n, l, s);
                r.mapHist(e, u)
            }, o.colorColor = function(e, t, o, r, a, i, n) {
                var l, s, u, f, c, d, h, m, g, p = 1 - n;
                h = r / 255, m = a / 255, g = i / 255;
                var v, _, x = Math.max(h, m, g), y = Math.min(h, m, g), M = (x + y) / 2;
                if (x == y)
                    v = _ = 0;
                else {
                    var C = x - y;
                    switch (_ = M > .5 ? C / (2 - x - y) : C / (x + y), x) {
                        case h:
                            v = (m - g) / C + (g > m ? 6 : 0);
                            break;
                        case m:
                            v = (g - h) / C + 2;
                            break;
                        case g:
                            v = (h - m) / C + 4
                    }
                    v /= 6
                }
                if (e.moaGL)
                    return e.moaGL.renderColorBlendColor([v, _, M], 1, n), !0;
                for (d = 0; o > d; d++)
                    for (c = 0; t > c; c++) {
                        f = 4 * (d * t + c), l = e[f], s = e[f + 1], u = e[f + 2];
                        var w = l, b = s, D = u;
                        M = (.212671 * l + .71516 * s + .072169 * u) / 255;
                        var S = 6 * v, P = M > .5 ? 2 * _ * (1 - M) : 2 * _ * M, T = P * (1 - Math.abs(S % 2 - 1));
                        1 > S ? (l = P, s = T, u = 0) : 2 > S ? (l = T, s = P, u = 0) : 3 > S ? (l = 0, s = P, u = T) : 4 > S ? (l = 0, s = T, u = P) : 5 > S ? (l = T, s = 0, u = P) : 6 > S && (l = P, s = 0, u = T);
                        var E = M - .5 * P;
                        l = 255 * (l + E) + .5 | 0, s = 255 * (s + E) + .5 | 0, u = 255 * (u + E) + .5 | 0, l = l > 255 ? 255 : 0 > l ? 0 : l, s = s > 255 ? 255 : 0 > s ? 0 : s, u = u > 255 ? 255 : 0 > u ? 0 : u, l = p * w + n * l, s = p * b + n * s, u = p * D + n * u, l = l > 255 ? 255 : 0 > l ? 0 : l, s = s > 255 ? 255 : 0 > s ? 0 : s, u = u > 255 ? 255 : 0 > u ? 0 : u, e[f] = l, e[f + 1] = s, e[f + 2] = u
                    }
            }, o.colorScreen = function(e, t, o, a, n, l, s) {
                var u = i("screen", a, n, l, s);
                r.mapHist(e, u)
            }, o.normalBlend = function(e, t, o, a, n, l, s) {
                var u = i("normal", a, n, l, s);
                r.mapHist(e, u)
            }, t.exports = o
        }), e.define("/src/js/mask-draw/shinereduce.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/blendWithColor"), a = e("./mask"), i = e("./drawtool"), n = e("../filters/colorConversion");
            o.findBrightest = function(e, t, o, r, a, i) {
                r = Math.round(r), a = Math.round(a);
                var n, l, s, u, f, c = Math.max(0, Math.min(t - 1, Math.round(r - i))), d = Math.max(0, Math.min(o - 1, Math.round(a - i))), h = Math.max(0, Math.min(t - 1, Math.round(r + i))), m = Math.max(0, Math.min(o - 1, Math.round(a + i))), g = 4 * (r + t * a), p = [e[g], e[g + 1], e[g + 2]], v = .2 * e[g] + .7 * e[g + 1] + .1 * e[g + 2];
                for (s = d; m >= s; s++)
                    for (l = c; h >= l; l++)
                        g = 4 * (t * s + l), f = Math.pow(l - r, 2) + Math.pow(s - a, 2), n = .2 * e[g] + .7 * e[g + 1] + .1 * e[g + 2], u = n * Math.exp(-f / (2 * i * i)), u > v && (p = [e[g], e[g + 1], e[g + 2]], v = u);
                return p
            }, o.draw = function(e, t, r, l, s) {
                if (s = i.sanitizeDrawParams(s), s.constant = 1, s.alpha = .5, s.considerLuminosity = !0, s.sigmaC = 25, s.isFirstDraw) {
                    s.isFirstDraw = !1;
                    var u = o.findBrightest(e, t, r, s.posX, s.posY, s.radius);
                    s.colorLAB = n.rgb2labwithcbrtmapping(u[0], u[1], u[2])
                }
                a.masksimilarcolors(e, t, r, l, s)
            }, o.preview = i.preview, o.drawStroke = i.drawStroke, o.init = function(e, t, o, n) {
                t * o > n.length || 0 > t * o || 4 * t * o === e.length && (a.initMaskTransparent(n, i.state), i.preprocess(e, function() {
                    var a = [190, 110, 62, .26];
                    r.colorMultiply(e, t, o, a[0], a[1], a[2], a[3])
                }))
            }, t.exports = o
        }), e.define("/src/js/mask-draw/blush.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/blendWithColor"), a = e("./mask"), i = e("./drawtool");
            o.draw = function(e, t, o, r, n) {
                n = i.sanitizeDrawParams(n), n.constant = 1, n.alpha = .1, n.considerLuminosity = !1, n.sigmaC = 15, a.masksimilarcolors(e, t, o, r, n)
            }, o.drawStroke = i.drawStroke, o.preview = i.preview, o.init = function(e, t, o, n) {
                t * o > n.length || 0 > t * o || 4 * t * o === e.length && (a.initMaskTransparent(n, i.state), i.preprocess(e, function() {
                    var a = [190, 30, 20, .34];
                    r.colorSoft(e, t, o, a[0], a[1], a[2], a[3])
                }))
            }, t.exports = o
        }), e.define("/src/js/mask-draw/lipstick.js", function(e, o) {
            "use strict";
            var r = {}, a = e("../filters/blendWithColor"), i = e("./mask"), n = e("./drawtool"), l = e("../filters/colorConversion");
            r.getColorClosestToLip = function(e, o, r, a, i, n) {
                a = Math.round(a), i = Math.round(i);
                var s, u = [213, 128, 118], f = [];
                for (s = 0; 256 > s; s++)
                    f[s] = .04045 >= s / 255 ? 100 * s / 255 / 12.92 : 100 * Math.pow((s / 255 + .055) / 1.055, 2.4);
                var c, d, h, m, g = l.rgb2labwithcbrtmapping(u[0], u[1], u[2], f), p = [], v = function(e, t, o, r) {
                    return Math.exp(r ? -(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)) / (2 * o * o) : -(Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)) / (2 * o * o))
                }, _ = function(e) {
                    var t = Math.cos(e * Math.PI / 180) - 1, o = Math.sin(e * Math.PI / 180), r = t * t + o * o;
                    return Math.exp(-r / (2 * sigmaHue * sigmaHue))
                }, x = Math.max(0, Math.min(o - 1, a - 3 * n)), y = Math.max(0, Math.min(r - 1, i - 3 * n)), M = Math.max(0, Math.min(o - 1, a + 3 * n)), C = Math.max(0, Math.min(r - 1, i + 3 * n));
                "number" != typeof t.gain && (t.gain = 1), "number" != typeof t.sigma1 && (t.sigma1 = 15), "number" != typeof t.sigmaHue && (t.sigmaHue = .1), "number" != typeof t.pow && (t.pow = .25);
                var w, b, D, S = -1;
                for (d = y; C >= d; d++)
                    for (c = x; M >= c; c++) {
                        D = 4 * (o * d + c), m = Math.pow(c - a, 2) + Math.pow(d - i, 2);
                        var P, T, E, r, F, L, A = e[D], R = e[D + 1], I = e[D + 2];
                        if (P = Math.min(A, R, I), T = Math.max(A, R, I), L = T, E = T - P, 0 == E)
                            return F = 0, r = 0, [r, F, L];
                        F = E / T, r = A == T ? (R - I) / E : R == T ? 2 + (I - A) / E : 4 + (A - R) / E, r *= 60, 0 > r && (r += 360);
                        var b = [r, F, L];
                        p = l.rgb2labwithcbrtmapping(e[D], e[D + 1], e[D + 2], f), h = _(b[0]) * v(g, p, t.sigma1, !1) * Math.exp(-m / (2 * n * n)), h > S && (w = [e[D], e[D + 1], e[D + 2]], S = h)
                    }
                return w
            }, r.draw = function(e, t, o, a, s) {
                if (s = n.sanitizeDrawParams(s), s.constant = 1, s.alpha = .5, s.considerLuminosity = !0, s.sigmaC = 7, s.isFirstDraw) {
                    s.isFirstDraw = !1;
                    var u = r.getColorClosestToLip(e, t, o, s.posX, s.posY, s.radius / 3);
                    s.colorLAB = l.rgb2labwithcbrtmapping(u[0], u[1], u[2])
                }
                i.masksimilarcolors(e, t, o, a, s)
            }, r.drawStroke = n.drawStroke, r.preview = n.preview, r.init = function(e, t, o, r) {
                t * o > r.length || 0 > t * o || 4 * t * o === e.length && (i.initMaskTransparent(r, n.state), n.preprocess(e, function() {
                    var r = [192, 42, 45, .6];
                    a.colorSoft(e, t, o, r[0], r[1], r[2], r[3])
                }))
            }, o.exports = r
        }), e.define("/src/js/mask-draw/mascara.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../filters/sharpness"), a = e("./mask"), i = e("./drawtool"), n = e("../core/copy");
            o.draw = function(e, t, o, r, n) {
                n = i.sanitizeDrawParams(n), n.constant = 1, n.considerLuminosity = !1, n.sigmaC = 99999999999, a.masksimilarcolors(e, t, o, r, n)
            }, o.preview = i.preview, o.drawStroke = i.drawStroke, o.init = function(e, t, o, s) {
                t * o > s.length || 0 > t * o || 4 * t * o === e.length && (a.initMaskTransparent(s, i.state), i.preprocess(e, function() {
                    var a = n.copy(e);
                    r.sharpen(e, t, o, 100, 1, "normal"), l(a, e, t, o)
                }))
            };
            var l = function(e, t, o, r) {
                if (!t.moaGL) {
                    var a, i, n, l;
                    for (a = 0; o * r > a; a++)
                        i = 4 * a, n = .2 * e[i] + .7 * e[i + 1] + .1 * e[i + 2], l = .2 * t[i] + .7 * t[i + 1] + .1 * t[i + 2], l > n && (t[i] = e[i], t[i + 1] = e[i + 1], t[i + 2] = e[i + 2])
                }
            };
            t.exports = o
        }), e.define("/proclist/src/js/MoaLiteProclistManager.coffee", function(e, t) {
            (function() {
                var o;
                o = e("./MoaLiteProclistProcessorRunning"), t.exports = {MLPLLoadEffect: function(e) {
                    var t, o, r;
                    return (o = JSON.parse(e)) ? (t = o.identifier, r = o.processors, t && r ? o : null) : null
                },MLPLRunEffect: function(e, t, r) {
                    var a, i, n, l, s, u;
                    if (l = !1, a = e.identifier, n = e.processors, !a || !n)
                        return !1;
                    for (t.data.moaGL && t.data.moaGL.createEffect(), s = 0, u = n.length; u > s; s++)
                        if (i = n[s], l = o.MLPLRunProcessor(i, t, r), !l)
                            return !1;
                    return t.data.moaGL && t.data.moaGL.finalizeEffect(), !0
                }}
            }).call(this)
        }), e.define("/proclist/src/js/MoaLiteProclistProcessorRunning.coffee", function(e, t) {
            (function() {
                var o, r, a, i, n, l = {}.hasOwnProperty, s = function(e, t) {
                    function o() {
                        this.constructor = e
                    }
                    for (var r in t)
                        l.call(t, r) && (e[r] = t[r]);
                    return o.prototype = t.prototype, e.prototype = new o, e.__super__ = t.prototype, e
                };
                o = function(e) {
                    function t(e, o) {
                        t.__super__.constructor.call(this), this.name = "Processor Error", this.processorName = o, this.message = e, this.toString = function() {
                            return "" + this.name + ": " + this.message + " (" + this.processorName + ")"
                        }
                    }
                    return s(t, e), t
                }(Error), n = {}, n.original = function(t, o) {
                    var r, a;
                    return a = !1, r = e("../../../src/js/core/copy"), o.data = r.copy(o.data), a = !0
                }, n.legacyProcessor = function(t, r, a) {
                    var i, n, l;
                    if (l = !1, n = e("../../../src/js/filters/legacy/legacyProcessor"), r && r.data.moaGL)
                        return !0;
                    if (i = null != t ? t.legacyName : void 0, null == i)
                        throw new o("Legacy name '" + i + "' not found.", "legacyProcessor");
                    return n[i](r.data, r.width, r.height, a), l = !0
                }, n.legacy_compare_processor = function(e, t, o, r) {
                    var a, i;
                    return i = !1, i = a(e, t, o, r)
                }, n.colorMatrixTransform = function(t, a, i) {
                    var n, l, s, u, f, c, d, h, m, g, p, v, _, x, y;
                    if (p = function() {
                        var e;
                        return e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
                    }, v = !1, g = e("../../../src/js/filters/colorMatrixTransform"), m = null != t ? t.operations : void 0, u = p(), s = t.blendMode, n = t.alpha, m)
                        for (x = 0, y = m.length; y > x; x++)
                            switch (h = m[x], _ = null != h ? h.value : void 0, null != h ? h.operation : void 0) {
                                case "hardSet":
                                    if (c = null != h ? h.gain : void 0, f = null != h ? h.entries : void 0, null == c || null == f)
                                        throw new o("invalid entries val for hardSet operation.", "colorMatrixTransform");
                                    for (d = 0; 12 > d; )
                                        u[d] = f[d], 0 === d || 5 === d || 10 === d ? u[d] = u[d] * c * i.intensity + (1 - i.intensity) : 3 !== d && 7 !== d && 11 !== d && (u[d] = u[d] * c * i.intensity), d++;
                                    v = !0;
                                    break;
                                case "saturation":
                                    l = r(_, 1, i.intensity), g.adjSaturation(u, l), v = !0;
                                    break;
                                case "brightness":
                                    l = r(_, 1, i.intensity), g.adjBrightness(u, l), v = !0;
                                    break;
                                case "contrast":
                                    l = r(_, 1, i.intensity), g.adjContrast(u, l), v = !0;
                                    break;
                                default:
                                    throw new o("Operation " + (null != h ? h.operation : void 0) + " not found.", "colorMatrixTransform")
                            }
                    return g.colorMatrixTransform(null != a ? a.data : void 0, u, s, n), v
                }, n.histogramMapping = function(t, r, i) {
                    var n, l, s;
                    if (s = !1, l = e("../../../src/js/filters//histogramMapping"), n = null != t ? t.histMap : void 0, !n)
                        throw new o("histMap dne or is not an object.", "histogramMapping");
                    return n = a(n), l.fadeMapping(n, null != i ? i.intensity : void 0), l.mapHist(null != r ? r.data : void 0, n), s = !0
                }, n.vignette = function(t, r, a) {
                    var i, n, l, s, u, f, c, d, h, m, g, p, v;
                    switch (p = !1, c = e("../../../src/js/filters/vignette"), i = 1e-9, s = null != t ? t.color : void 0, l = null != t ? t.blendMode : void 0, h = null != t ? t.shape : void 0, v = null != h ? h.vignetteScale : void 0, m = null != h ? h.shapeMode : void 0, d = null != h ? h.scaling : void 0, u = null != h ? h.dx : void 0, f = null != h ? h.dy : void 0, n = parseFloat(s.a / 255), g = !1, d) {
                        case "average":
                            v = (r.width + r.height) / 2 * v / (a.intensity + i), g = !1;
                            break;
                        case "max":
                            v = Math.max(r.width, r.height) * v / (a.intensity + i), g = !1;
                            break;
                        case "stretch":
                            v /= a.intensity + i, g = !0;
                            break;
                        default:
                            throw new o("scaling mode " + d + " not defined.", "vignette")
                    }
                    return c.vignette(r.data, r.width, r.height, v, s.r, s.g, s.b, n, l, m, g, u, f), p = !0
                }, n.contrast = function(t, a, i) {
                    var n, l, s, u;
                    if (s = !1, l = e("../../../src/js/filters/contrastCurve"), u = null != t ? t.value : void 0, null == u)
                        throw new o("value is missing.", "contrast");
                    return n = r(u, 1, i.intensity), l.contrastCurve(a.data, n), s = !0
                }, n.adjustments = function(t, r) {
                    var a, i;
                    if (i = !1, a = e("../../../src/js/filters/adjustments"), "number" != typeof t.brightness || "number" != typeof t.contrast || "number" != typeof t.warmth || "number" != typeof t.saturation || "string" != typeof t.blendMode || "number" != typeof t.alpha)
                        throw new o("value is missing.", "adjustments");
                    return a.adjustments(r.data, t), i = !0
                }, n.noise = function(t, r, a) {
                    var i, n, l, s, u;
                    if (u = !1, s = e("../../../src/js/core/rng"), n = e("../../../src/js/filters/noise"), i = null != t ? t.intensity : void 0, null == i)
                        throw new o("intensity is missing.", "noise");
                    return i *= a.intensity, l = new s.RNG(a.seed), n.noise(r.data, r.width, r.height, i, l.nextInt()), u = !0
                }, n.blendWithColor = function(t, r, a) {
                    var i, n, l, s, u;
                    if (u = !1, s = e("../../../src/js/filters/blendWithColor"), l = null != t ? t.color : void 0, n = null != t ? t.blendMode : void 0, i = null != t ? t.alpha : void 0, l.a = i, null == l || null == i)
                        throw new o("color or alpha param is missing.", "blendWithColor");
                    return i *= a.intensity, s.blendWithColor(r.data, r.width, r.height, {color: l,blendMode: n}), u = !0
                }, n.gamma = function(t, a, i) {
                    var n, l, s, u;
                    if (s = !1, l = e("../../../src/js/filters/gamma"), u = null != t ? t.value : void 0, null == u)
                        throw new o("value is missing.", "gamma");
                    return n = r(u, 1, i.intensity), l.gamma(a.data, n), s = !0
                }, n.fade = function(t, a, i) {
                    var n, l, s, u;
                    if (s = !1, l = e("../../../src/js/filters/fade"), u = null != t ? t.value : void 0, null == u)
                        throw new o("value is missing.", "fade");
                    return n = r(u, 1, i.intensity), l.fade(a.data, n), s = !0
                }, n.exposure = function(t, a, i) {
                    var n, l, s, u;
                    if (s = !1, l = e("../../../src/js/filters/exposure"), u = null != t ? t.value : void 0, null == u)
                        throw new o("value is missing.", "exposure");
                    return n = r(u, 1, i.intensity), l.exposure(a.data, n), s = !0
                }, n.shadows = function(t, a, i) {
                    var n, l, s, u;
                    if (s = !1, l = e("../../../src/js/filters/shadows"), u = null != t ? t.value : void 0, null == u)
                        throw new o("value is missing.", "shadows");
                    return n = r(u, 1, i.intensity), l.shadows(a.data, n), s = !0
                }, n.highlights = function(t, a, i) {
                    var n, l, s, u;
                    if (s = !1, l = e("../../../src/js/filters/highlights"), u = null != t ? t.value : void 0, null == u)
                        throw new o("value is missing.", "highlights");
                    return n = r(u, 1, i.intensity), l.highlights(a.data, n), s = !0
                }, n.flare = function(t, r, a) {
                    var i, n, l, s, u, f, c, d, h, m, g;
                    if (m = !1, h = e("../../../src/js/filters/flare"), l = null != t ? t.color : void 0, n = null != t ? t.blendMode : void 0, g = null != t ? t.type : void 0, f = null != t ? t.dx : void 0, c = null != t ? t.dy : void 0, s = null != t ? t.dsx : void 0, u = null != t ? t.dsy : void 0, d = null != t ? t.fScale : void 0, null == g || null == l || null == n || null == f || null == c || null == s || null == u || null == d)
                        throw new o("some params are incorrect or missing.", "flare");
                    return i = parseFloat(l.a / 255), i *= a.intensity, h.flare(r.data, r.width, r.height, d, l.r, l.g, l.b, i, g, f, c, s, u, n), m = !0
                }, n.intensityMap = function(t, r, i) {
                    var n, l, s, u, f, c;
                    if (c = !1, f = e("../../../src/js/filters/intensityMap"), u = e("../../../src/js/filters/histogramMapping"), s = null != t ? t.histMap : void 0, l = null != t ? t.blendMode : void 0, n = null != t ? t.alpha : void 0, null == s || null == n)
                        throw new o("histMap or alpha missing or problematic.", "intensityMap");
                    return s = a(s), u.fadeMapping(s, null != i ? i.intensity : void 0), f.mapIntensity(r.data, s, l, n * i.intensity), c = !0
                }, n.sharpness = function(t, r, a) {
                    var i, n, l, s, u;
                    if (u = !1, s = e("../../../src/js/filters/sharpness"), n = null != t ? t.amount : void 0, i = null != t ? t.alpha : void 0, l = null != t ? t.blendMode : void 0, null == n || null == l || null == i)
                        throw new o("amount, blendMode, or alpha param is missing.", "sharpness");
                    return i *= a.intensity, s.sharpen(r.data, r.width, r.height, n, i, l), u = !0
                }, n.gradient = function(t, r, a) {
                    var i, n, l, s, u, f, c, d, h, m, g, p, v, _, x, y;
                    if (v = !1, h = e("../../../src/js/filters/gradient"), u = null != t ? t.colors : void 0, d = null != t ? t.opacities : void 0, c = null != t ? t.gradientShape : void 0, m = null != t ? t.scale : void 0, x = null != t ? t.xCenter : void 0, y = null != t ? t.yCenter : void 0, l = null != t ? t.angle : void 0, l *= Math.PI / 180, n = null != t ? t.alpha : void 0, s = null != t ? t.blendMode : void 0, p = (null != t ? t.vignetteShape : void 0) || {}, null != t ? t.vignetteShape : void 0)
                        switch (i = 1e-9, g = null != p ? p.scaling : void 0, _ = null != p ? p.vignetteScale : void 0, g) {
                            case "average":
                                p.vignetteScale = (r.width + r.height) / 2 * _ / (a.intensity + i), p.stretch = !1;
                                break;
                            case "max":
                                p.vignetteScale = Math.max(r.width, r.height) * _ / (a.intensity + i), p.stretch = !1;
                                break;
                            case "stretch":
                                p.vignetteScale = _ / (a.intensity + i), p.stretch = !0;
                                break;
                            default:
                                throw new o("scaling mode " + g + " not defined.", "vignette")
                        }
                    if (null == u || null == d)
                        throw new o("colors or opacities param is missing.", "sharpness");
                    return f = {colors: u,opacities: d}, h.applyGradient(null != r ? r.data : void 0, r.width, r.height, f, c, m, x, y, l, p, s, n), v = !0
                }, n.gradientFlare = function(t, o) {
                    var r, a;
                    return a = !1, r = e("../../../src/js/filters/gradientFlare"), r.gradientFlare(o.data, o.width, o.height, t), a = !0
                }, n.gradientMap = function(t, o) {
                    var r, a;
                    return a = !1, r = e("../../../src/js/filters/gradientMap"), r.gradientMap(o.data, o.width, o.height, t), a = !0
                }, n.halftone = function(t, o) {
                    var r, a;
                    return a = !1, r = e("../../../src/js/filters/halftone"), r.halftone(o.data, o.width, o.height, t), a = !0
                }, i = function(e) {
                    var t, o, r;
                    for (t = [], o = 0, r = e.length; r > o; )
                        t.push(e[o]), o++;
                    return t
                }, a = function(e) {
                    return {r: i(e.r),g: i(e.g),b: i(e.b)}
                }, r = function(e, t, o) {
                    return null == t && (t = 1), null == o && (o = 1), e * o + 1 * (1 - o)
                }, t.exports = {MLPLRunProcessor: function(e, t, r) {
                    var a, i, l;
                    if (a = null != e ? e.parameters : void 0, "undefined" == typeof r && (r = {}), "undefined" == typeof r.border && (r.border = !0), "undefined" == typeof r.intensity && (r.intensity = 1), "undefined" == typeof r.seed && (r.seed = 0), i = n[null != e ? e.name : void 0], null != i)
                        l = i(a, t, r);
                    else {
                        if (null == i)
                            throw new o("unrecognized processor");
                        try {
                            l = i(a, t, r)
                        } catch (s) {
                        }
                    }
                    return l
                }}
            }).call(this)
        }), e.define("/src/js/filters/legacy/legacyProcessor.js", function(e, t) {
            "use strict";
            var o = e("../../core/rng"), r = e("../flare"), a = 1e-9, i = e("../vignette"), n = e("../../legacy/auto_colors_fade_max_color"), l = e("../../legacy/soft_focus"), s = {}, u = {};
            u.maxpow2 = function(e) {
                for (var t = 1; e >= 2 * t; )
                    t *= 2;
                return t
            }, u.getMPDRNG = function(e, t, o, r, a, i, n) {
                "undefined" == typeof i && (i = "uniform");
                var l = t + u.maxpow2(o - t);
                return e[l] = e[o], "uniform" === i ? u.getMPDU(e, t, l, r, a, n) : "normal" === i ? u.getMPDN(e, t, l, r, a, n) : "laplacian" === i && u.getMPDL(e, t, l, r, a, n), u.scaleLine(e, l, o), e
            }, u.scaleLine = function(e, t, o) {
                if (!(t >= o)) {
                    var r, a, i, n = o / t;
                    for (r = o; r >= 0; r--)
                        a = r / n, i = a - (0 | a), e[r] = i ? (1 - i) * e[0 | a] + i * e[(0 | a) + 1] : e[a]
                }
            }, u.getMPDU = function(e, t, o, r, a, i) {
                for (var n, l = o - t, s = (o - t) / 2; l >= 2; ) {
                    for (var u = t; o > u; u += l)
                        n = u + s, e[n] = (e[u] + e[u + l]) / 2 + r * (i.nextFloat() - .5);
                    r *= Math.pow(2, -a), l = s, s /= 2
                }
            }, u.getMPDN = function(e, t, o, r, a, i) {
                for (var n, l = o - t, s = (o - t) / 2; l >= 2; ) {
                    for (var u = t; o > u; u += l)
                        n = u + s, e[n] = (e[u] + e[u + l]) / 2 + r * i.nextFloatNormal();
                    r *= Math.pow(2, -a), l = s, s /= 2
                }
            }, u.getMPDL = function(e, t, o, r, a, i) {
                for (var n, l = o - t, s = (o - t) / 2; l >= 2; ) {
                    for (var u = t; o > u; u += l)
                        n = u + s, e[n] = (e[u] + e[u + l]) / 2 + r * i.nextFloatLaplace();
                    r *= Math.pow(2, -a), l = s, s /= 2
                }
            }, u.getMPD = function(e, t, r, a, i, n, l) {
                var s = new o.RNG(l);
                return u.getMPDRNG(e, t, r, a, i, n, s), s.getState()
            };
            var f = function(e, t, r, a, i, n) {
                "undefined" == typeof i && (i = "");
                var l, s, u, f, c, d, h, m, g, p, v, _, x, y, M, C, w, b, D, S, P, T, E, F, L, A, R, I, O = 1;
                T = E = F = L = A = R = I = !1, s = (t + r) / 30, u = 0;
                var B = !0, N = 0, U = r / 2 | 0, k = t / 2 | 0, j = a[0], G = a[1], X = a[2], W = 255 * a[3];
                if ("halftone" === i)
                    T = !0, s = (t + r) / 30, u = n[0], v = 1e3 / (t + r), "number" == typeof n[1] && (0 === n[1] ? v = 0 : v /= n[1]);
                else if ("smooth" === i)
                    F = !0, s = n[0] * (t + r) / 30, "undefined" != typeof n[1] && (u = n[1] / s);
                else if ("rough" === i)
                    R = !0, s = n[0] * (t + r) / 30, "undefined" != typeof n[1] && (u = n[1] / s), "undefined" != typeof n[2] && (N = n[2]), P = new o.RNG(N);
                else if ("viewfinder" === i)
                    I = !0, s = (t + r) / 60, y = M = w = C = 0, "undefined" != typeof n[0] && (w = n[0]), "undefined" != typeof n[1] && (C = n[1]), "undefined" != typeof n[2] && (y = n[2]), "undefined" != typeof n[3] && (M = n[3]), "undefined" != typeof n[4] && (N = n[4]), P = new o.RNG(N);
                else if ("lines" === i)
                    E = !0, s = n[0] * (t + r) / 30, S = n[1];
                else if ("shadow" === i) {
                    L = !0, s = n[0] * (t + r) / 80, u = .3;
                    var V = Math.PI / 180 * n[1], z = Math.sin(V), Y = Math.cos(V);
                    _ = .5 * Y * s, x = .5 * z * s
                } else
                    "fade" === i && (A = !0, s = (t + r) / 80, "number" == typeof n[0] && (s *= n[0]), u = "number" == typeof n[1] ? n[1] : 1, "number" == typeof n[2] && (O = n[2]));
                for (u *= s, I || (y = M = w = C = u), c = 0; r > c; c++)
                    for (h = U > c ? c - w : r - 1 - c - C, f = 0; t > f; f++)
                        if (l = 4 * (t * c + f), d = k > f ? f - y : t - 1 - f - M, g = B && h < Math.SQRT2 * O * s && d < Math.SQRT2 * O * s ? Math.SQRT2 * O * s - Math.sqrt((h - Math.SQRT2 * O * s) * (h - Math.SQRT2 * O * s) + (d - Math.SQRT2 * O * s) * (d - Math.SQRT2 * O * s)) : d > h ? h : d, 0 > h || 0 > d)
                            T ? (p = Math.cos((c - U) * v) * Math.cos((f - k) * v) + 1, m = 1 - 2 * p, m = 0 > m ? 0 : m > 1 ? 1 : m, e[l] = e[l] * m + j * (1 - m) + .5 | 0, e[l + 1] = e[l + 1] * m + G * (1 - m) + .5 | 0, e[l + 2] = e[l + 2] * m + X * (1 - m) + .5 | 0, e[l + 3] = e[l + 3] * m + W * (1 - m) + .5 | 0) : L ? (b = U > c ? c - u - x : r - 1 - c - u + x, D = k > f ? f - u - _ : t - 1 - f - u + _, g = b < Math.SQRT2 * O * s && D < Math.SQRT2 * O * s ? Math.SQRT2 * O * s - Math.pow(Math.pow(b - Math.SQRT2 * O * s, 4) + Math.pow(D - Math.SQRT2 * O * s, 4), .25) : D > b ? b : D, -s > g && (g = -s), m = .6 * Math.pow((g / s + 1) / 2, 4), m = 0 > m ? 0 : m > 1 ? 1 : m, e[l] = j * (1 - m) + .5 | 0, e[l + 1] = G * (1 - m) + .5 | 0, e[l + 2] = X * (1 - m) + .5 | 0, e[l + 3] = W * (1 - m) + m * e[l + 3] + .5 | 0) : (e[l] = j, e[l + 1] = G, e[l + 2] = X, e[l + 3] = W);
                        else if (s > g) {
                            if (T)
                                p = Math.cos((c - U) * v) * Math.cos((f - k) * v) + 1, m = 0 >= g ? 1 - 2 * p : 1 - 2 * p * Math.pow(1 - g / s, 4);
                            else {
                                if (L) {
                                    if (b = U > c ? c - u - x : r - 1 - c - u + x, D = k > f ? f - u - _ : t - 1 - f - u + _, g = b < Math.SQRT2 * O * s && D < Math.SQRT2 * O * s ? Math.SQRT2 * O * s - Math.pow(Math.pow(b - Math.SQRT2 * O * s, 4) + Math.pow(D - Math.SQRT2 * O * s, 4), .25) : D > b ? b : D, d >= s && h >= s)
                                        continue;
                                    -s > g && (g = -s), g > s && (g = Math.sqrt(g / s) * s), m = .6 * Math.pow((g / s + 1) / 2, 4), m = 0 > m ? 0 : m > 1 ? 1 : m, e[l] = j * (1 - m) + .5 | 0, e[l + 1] = G * (1 - m) + .5 | 0, e[l + 2] = X * (1 - m) + .5 | 0, e[l + 3] = 255;
                                    continue
                                }
                                if (A)
                                    g = 0 > g ? 0 : g, m = Math.pow(g / s, 2);
                                else if (F)
                                    m = 1 - 2 * Math.pow(1 - g / s, 4);
                                else if (R)
                                    m = 1 - 2 * (.4 * P.nextFloat() + .6) * Math.pow(1 - g / s, 4);
                                else if (I)
                                    m = 1 - 2 * (.4 * P.nextFloat() + .6) * Math.pow(1 - g / s, 4);
                                else if (E) {
                                    var H = (.4 * Math.random() + .6) * (Math.cos(140 * Math.PI * ((c - U) / r) / S) + 1);
                                    m = 1 - 2 * H * Math.pow(1 - g / s, 4)
                                }
                            }
                            m = 0 > m ? 0 : m > 1 ? 1 : m, e[l] = e[l] * m + j * (1 - m) + .5 | 0, e[l + 1] = e[l + 1] * m + G * (1 - m) + .5 | 0, e[l + 2] = e[l + 2] * m + X * (1 - m) + .5 | 0, e[l + 3] = e[l + 3] * m + W * (1 - m) + .5 | 0
                        }
            }, c = function(e, t, r, a, i, n) {
                "undefined" == typeof i && (i = "");
                var l, s, f, c;
                l = s = f = c = !1;
                var d, h, m, g, p, v, _, x, y, M, C, w, b, D, S, P, T, E, F = a[0], L = a[1], A = a[2], R = a[3], I = 1 !== R, O = 1 + (t + r) / 2 / 1024, B = new o.RNG;
                "torn" === i ? (s = !0, h = n[0] * (t + r) / 2, d = n[1] * (t + r) / 2, p = n[2], g = "uniform", "string" == typeof n[3] && (g = n[3]), m = n[4], v = "onlyout" === n[5], B = new o.RNG(m)) : "bulge" === i ? (l = !0, d = n[0] * (t + r) / 2, _ = n[1] * d, x = n[2] * d) : "rect" === i ? (f = !0, d = n[0] * (t + r) / 2, 1 === n[1] && (O = 0)) : "round" === i && (c = !0, d = n[0] * Math.min(t, r), M = n[1] * d, C = n[2] * d, w = n[3] * d, b = n[4] * d, y = d, "number" == typeof n[5] && (y *= n[5]));
                for (var N, U, k, j, G, X, W, V, z, Y = Math.max(t, r), H = [], q = [r, t, t, r], Z = [t, r, r, t], $ = [1, 1, -1, -1], Q = [0, 0, r - 1, t - 1], K = 0; 4 > K; K++) {
                    if (X = q[K], W = Z[K], V = $[K], z = Q[K], Y = X, s) {
                        if (H[Y - 1] = z + V * d, H[0] = z + V * d, u.getMPD(H, 0, Y - 1, h, p, g, B.nextInt()), v)
                            for (N = 0; Y > N; N++)
                                H[N] = V * Math.min(V * (z + V * d), V * H[N])
                    } else if (l)
                        for (N = 0; Y > N; N++)
                            H[N] = z - V * (_ * Math.sin(N * Math.PI / Y) - x);
                    else if (f)
                        for (N = 0; Y > N; N++)
                            H[N] = z + V * d;
                    else if (c)
                        for (E = y * (1 - 1 / Math.SQRT2), 0 === K && (P = C, S = M, T = w), 1 === K && (P = M, S = C, T = b), 2 === K && (P = w, S = C, T = b), 3 === K && (P = b, S = M, T = w), P -= O / 2, N = 0; Y > N; N++)
                            D = N, H[N] = S + E > D ? z + V * (P + E) : S + y > D ? z + V * (P + y - Math.sqrt(y * y - Math.pow(D - S - y, 2))) : X - 1 - T - y > D ? z + V * P : X - 1 - T - E >= D ? z + V * (P + y - Math.sqrt(y * y - Math.pow(X - 1 - D - T - y, 2))) : z + V * (P + E);
                    for (N = 0; X > N; N++)
                        for (k = H[N], U = z; V * (k + V * O) > V * U; U += V)
                            j = 0 === K || 3 === K ? 4 * (N * t + U) : 4 * (U * t + N), V * (k - V * O) > V * U ? I ? (e[j] = R * F + (1 - R) * e[j] + .5 | 0, e[j + 1] = R * L + (1 - R) * e[j + 1] + .5 | 0, e[j + 2] = R * A + (1 - R) * e[j + 2] + .5 | 0, e[j + 3] = 255 * R + (1 - R) * e[j + 3] + .5 | 0) : (e[j] = F, e[j + 1] = L, e[j + 2] = A, e[j + 3] = 255) : (G = R * (1 - (V * (U - k) + O) / (2 * O)), e[j] = G * F + (1 - G) * e[j] + .5 | 0, e[j + 1] = G * L + (1 - G) * e[j + 1] + .5 | 0, e[j + 2] = G * A + (1 - G) * e[j + 2] + .5 | 0, e[j + 3] = 255 * G + (1 - G) * e[j + 3] + .5 | 0)
                }
            }, d = function(e, t, r, a, i, n) {
                "undefined" == typeof i && (i = "");
                var l;
                l = !1;
                var s, f, c, d, h;
                "torn" === i && (l = !0, s = n[0] * (t + r) / 2, f = n[1] * (t + r) / 2, c = n[2], d = "uniform", "string" == typeof n[3] && (d = n[3]), h = n[4]);
                for (var m, g, p, v, _, x, y, M, C, w, b = a[0], D = a[1], S = a[2], P = a[3], T = 1 !== P, E = Math.max(t, r), F = [], L = [], A = Math.max(1, .001 * (t + r)), R = [r, t, t, r], I = [t, r, r, t], O = [1, 1, -1, -1], B = [0, 0, r - 1, t - 1], N = new o.RNG(h), U = 0; 4 > U; U++)
                    for (y = R[U], M = I[U], C = O[U], w = B[U], E = y, F[E - 1] = w + C * f, F[0] = w + C * f, u.getMPD(F, 0, E - 1, s, c, d, N.nextInt()), L[E - 1] = w + C * f, L[0] = w + C * f, u.getMPD(L, 0, E - 1, s, c, d, N.nextInt()), m = 0; y > m; m++)
                        for (p = F[m], v = L[m], g = w; C * (p + C * A) > C * g; g += C)
                            _ = 0 === U || 3 === U ? 4 * (m * t + g) : 4 * (g * t + m), C * (p - C * A) > C * g && C * g > C * (v + C * A) ? T ? (e[_] = P * b + (1 - P) * e[_] + .5 | 0, e[_ + 1] = P * D + (1 - P) * e[_ + 1] + .5 | 0, e[_ + 2] = P * S + (1 - P) * e[_ + 2] + .5 | 0) : (e[_] = b, e[_ + 1] = D, e[_ + 2] = S) : C * (p + C * A) > C * g && C * g > C * (v - C * A) && (x = P * Math.min(C * (p - g) / A, C * (g - v) / A), x > 1 ? x = 1 : 0 > x && (x = 0), e[_] = x * b + (1 - x) * e[_] + .5 | 0, e[_ + 1] = x * D + (1 - x) * e[_ + 1] + .5 | 0, e[_ + 2] = x * S + (1 - x) * e[_ + 2] + .5 | 0)
            }, h = function(e, t, r, a) {
                "undefined" == typeof a.offset && (a.offset = 0), "undefined" == typeof a.corner && (a.corner = 0), "undefined" == typeof a.scale && (a.scale = 1), "undefined" == typeof a.seed && (a.seed = 0), "undefined" == typeof a.alpha && (a.alpha = 1), "undefined" == typeof a.color && (a.color = [0, 0, 0, 1]);
                var i = a.offset, n = a.corner, l = a.scale, s = a.seed, f = a.color, c = a.alpha, d = new o.RNG(s), h = f[0], m = f[1], g = f[2], p = f[3], v = new Array(r), _ = new Array(r), x = new Array(t), y = new Array(t);
                v[r - 1] = n, v[0] = 0, _[r - 1] = 0, _[0] = 0, x[t - 1] = 0, x[0] = 0, y[t - 1] = 0, y[0] = n, u.getMPD(v, 0, r - 1, .03 * t * c, .7, "uniform", d.nextInt()), u.getMPD(_, 0, r - 1, .03 * t * c, .7, "uniform", d.nextInt()), u.getMPD(x, 0, t - 1, .03 * r * c, .7, "uniform", d.nextInt()), u.getMPD(y, 0, t - 1, .03 * r * c, .7, "uniform", d.nextInt());
                var M, C, w, b, D, S, P, T, E, F = r / 2 | 0, L = t / 2 | 0, A = (t + r) / 30;
                for (E = 0; r > E; E++)
                    for (T = 0; t > T; T++)
                        b = 4 * (E * t + T), S = F > E ? E - x[T] - i : r - 1 - E - y[T] - i, D = L > T ? T - v[E] - i : t - 1 - T - _[E] - i, 0 > S || 0 > D ? (M = 1 - p, e[b] = e[b] * M + h * (1 - M) | 0, e[b + 1] = e[b + 1] * M + m * (1 - M) | 0, e[b + 2] = e[b + 2] * M + g * (1 - M) | 0, e[b + 3] = e[b + 3]) : (C = S < Math.SQRT2 * A && D < Math.SQRT2 * A ? Math.SQRT2 * A - Math.sqrt(Math.pow(S - Math.SQRT2 * A, 2) + Math.pow(D - Math.SQRT2 * A, 2)) : S > D ? D : S, A > C && (P = 2 * Math.pow(1 - C / A, 4 * l), P > 1 / 255 && (w = .4 * d.nextFloat() + .6, M = 1 - w * P, M > 1 ? M = 1 : 0 > M && (M = 0), M = 1 - p + p * M, e[b] = e[b] * M + h * (1 - M) | 0, e[b + 1] = e[b + 1] * M + m * (1 - M) | 0, e[b + 2] = e[b + 2] * M + g * (1 - M) | 0, e[b + 3] = e[b + 3])))
            }, m = {};
            m.drawDot = function(e, t, o, r, a, i, n, l, s, u, f, c, d, h, m) {
                var g = t / 2 | 0, p = o / 2 | 0;
                h *= g, m *= p, l *= g, s *= g, l += h, s += m, f = 1;
                for (var v, _, x, y, M, C, w = 1 / f / g / c, b = 1 / f / g / d, D = u * u, S = Math.PI / (2 * D), P = Math.round(Math.min(o - 1, Math.max(0, p + s - 5 * u / b))), T = Math.round(Math.max(0, Math.min(o - 1, p + s + 5 * u / b))), E = Math.round(Math.min(t - 1, Math.max(0, g + l - 5 * u / w))), F = Math.round(Math.max(0, Math.min(t - 1, g + l + 5 * u / w))), L = P; T >= L; L++) {
                    v = 4 * L * t, _ = b * (L - p - s);
                    for (var A = E; F >= A; A++)
                        x = v + 4 * A, y = w * (A - g - l), M = y * y + _ * _, M > 5 * D ? C = 1 : (C = 2.25 > M * S ? 1 - n * Math.max(Math.cos(M * S), Math.cos(Math.sqrt(M * S) / 1.8) / 2) : 1 - n * Math.cos(Math.sqrt(M * S) / 1.8) / 2, C > 1 && (C = 1), e[x] = e[x] * C + r * (1 - C) | 0, e[x + 1] = e[x + 1] * C + a * (1 - C) | 0, e[x + 2] = e[x + 2] * C + i * (1 - C) | 0)
                }
            }, m.drawChar = function(e, t, o, r, a, i, n, l, s, u, f, c, d, h) {
                h || (h = 0), c || (c = 0), d || (d = 1.3), d *= a;
                var g = [], p = [[0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0]], v = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0]], _ = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], x = [[0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0]], y = [[1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1]], M = [[0, 1, 1, 1, 0, 1, 0], [0, 1, 1, 1, 0, 1, 0], [0, 1, 1, 1, 0, 1, 0], [0, 1, 0, 1, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0]], C = [[0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0]], w = [[0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0]], b = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], D = [[0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0]], S = [[0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0]], P = [[0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0]], T = [[0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0]], E = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], F = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0]], L = [[0, 0, 1, 1, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], A = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], R = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], I = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0]], O = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0]], B = [[0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0]], N = [[0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 0]], U = [[0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0]], k = [[0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 0]], j = [[0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0]], G = [[0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0]], X = [[0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0]], W = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0]], V = [[0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0]], z = [[0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0]], Y = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0]], H = [[0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0]], q = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 1, 1, 0], [0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0]], Z = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0]], $ = [[0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0]], Q = [[0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0]], K = [[0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0]], J = [[0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0]], et = [[0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0]], tt = [[0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0]], ot = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0]], rt = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0]], at = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0]], it = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0]], nt = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0]], lt = [[0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0]], st = [[0, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0]], ut = [[0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0]], ft = [[0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0]], ct = [[0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0]], dt = [[0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0]], ht = [[0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0]], mt = [[0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0]], gt = [[0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0]], pt = [[0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0]], vt = [[0, 0, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 1, 1, 0], [0, 1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 1, 0], [0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0]];
                g[" "] = _, g["%"] = v, g["&"] = p, g["~"] = x, g["{"] = y, g["}"] = M, g["^"] = C, g[">"] = P, g["<"] = T, g[":"] = R, g["-"] = A, g["+"] = b, g["."] = F, g["/"] = E, g["?"] = L, g["*"] = S, g["|"] = D, g["@"] = w, g.A = B, g.B = N, g.C = U, g.D = k, g.E = j, g.F = G, g.G = X, g.H = W, g.I = V, g.J = z, g.K = Y, g.L = H, g.M = q, g.N = Z, g.O = $, g.P = Q, g.Q = K, g.R = J, g.S = et, g.T = tt, g.U = ot, g.V = rt, g.W = at, g.X = it, g.Y = nt, g.Z = lt, g.f = I, g.s = O, g[1] = st, g[2] = ut, g[3] = ft, g[4] = ct, g[5] = dt, g[6] = ht, g[7] = mt, g[8] = gt, g[9] = pt, g[0] = vt;
                for (var _t, xt, yt = 0; yt < r.length; yt++)
                    for (var Mt = 0; 7 > Mt; Mt++)
                        for (var Ct = 0; 7 > Ct; Ct++)
                            g[r[yt]] && g[r[yt]][Ct][Mt] && (xt = (7 * (yt + c) + Mt) * d * Math.cos(h) - Ct * d * Math.sin(h), _t = (7 * (yt + c) + Mt) * d * Math.sin(h) + Ct * d * Math.cos(h), m.drawDot(e, t, o, l, s, u, f, xt, _t, a, 1, 1, 1, i, n))
            }, m.drawLine = function(e, t, o, r, a, i, n, l, s) {
                for (var u = 0; u < l.length - 1; u++) {
                    var f, c, d, h, m, g, p, v, _, x, y, M = l[u][0], C = l[u][1], w = l[u + 1][0], b = l[u + 1][1], D = [C - b, w - M], S = Math.sqrt(D[0] * D[0] + D[1] * D[1]);
                    D[0] /= S, D[1] /= S;
                    for (var P = [w - M, b - C], T = P[0] * P[0] + P[1] * P[1], E = s * s, F = 2, L = (s + F) * (s + F), A = Math.round(Math.min(o - 1, Math.max(0, Math.min(C, b) - s - F))), R = Math.round(Math.max(0, Math.min(o - 1, Math.max(C, b) + s + F))), I = Math.round(Math.min(t - 1, Math.max(0, Math.min(M, w) - s - F))), O = Math.round(Math.max(0, Math.min(t - 1, Math.max(M, w) + s + F))), B = A; R >= B; B++) {
                        g = 4 * B * t;
                        for (var N = I; O >= N; N++)
                            p = g + 4 * N, f = Math.abs(D[0] * (N - M) + D[1] * (B - C)), c = (N - M) * (N - M) + (B - C) * (B - C), d = (N - w) * (N - w) + (B - b) * (B - b), d > c ? (h = d, m = c) : (h = c, m = d), y = f > s + F ? 1 : h > m + T ? E > c || E > d ? 1 - n : L > c || L > d ? 1 - n + n * (Math.sqrt(m) - s) / F : 1 : f > s ? 1 - n + n * (f - s) / F : 1 - n, .995 > y && (v = e[p] * y + r * (1 - y) + .5 | 0, _ = e[p + 1] * y + a * (1 - y) + .5 | 0, x = e[p + 2] * y + i * (1 - y) + .5 | 0, v = 0 > v ? 0 : v > 255 ? 255 : v, _ = 0 > _ ? 0 : _ > 255 ? 255 : _, x = 0 > x ? 0 : x > 255 ? 255 : x, e[p] = v, e[p + 1] = _, e[p + 2] = x, e[p + 3] = e[p + 3])
                    }
                }
            }, m.ringFlare = function(e, t, o, r, a, i, n, l, s, u, f) {
                for (var c, d, h, m, g, p, v, _, x, y = (t + o) / 2, M = .01 * n, C = n * n, w = i * i, b = Math.min(o, Math.max(0, Math.round(a - n * y - 4))), D = Math.min(o, Math.max(0, Math.round(a + n * y + 4))), S = Math.min(t, Math.max(0, Math.round(r - n * y - 4))), P = Math.min(t, Math.max(0, Math.round(r + n * y + 4))), T = b; D > T; T++) {
                    h = 4 * T * t, c = (T - a) / y;
                    for (var E = S; P > E; E++)
                        m = h + 4 * E, d = (E - r) / y, g = d * d + c * c, p = g > C + M ? 0 : g > C ? (C + M - g) / M : g > w ? 1 : g > w - M ? 1 - (w - g) / M : 0, p = 1 - p * p * f, .995 > p && (v = e[m] * p + l * (1 - p) + .5 | 0, _ = e[m + 1] * p + s * (1 - p) + .5 | 0, x = e[m + 2] * p + u * (1 - p) + .5 | 0, v = 0 > v ? 0 : v > 255 ? 255 : v, _ = 0 > _ ? 0 : _ > 255 ? 255 : _, x = 0 > x ? 0 : x > 255 ? 255 : x, e[m] = v, e[m + 1] = _, e[m + 2] = x, e[m + 3] = e[m + 3])
                }
            }, m.drawBasicDot = function(e, t, o, r, a, i, n, l, s, u) {
                var f = u * u, c = 2;
                c > 2 * u && (c = 2 * u);
                for (var d, h, m, g, p = Math.pow(u + c, 2), v = Math.round(Math.min(o - 1, Math.max(0, s - u - c))), _ = Math.round(Math.max(0, Math.min(o - 1, s + u + c))), x = Math.round(Math.min(t - 1, Math.max(0, l - u - c))), y = Math.round(Math.max(0, Math.min(t - 1, l + u + c))), M = v; _ >= M; M++) {
                    d = 4 * M * t;
                    for (var C = x; y >= C; C++)
                        h = d + 4 * C, m = (l - C) * (l - C) + (s - M) * (s - M), m > p ? g = 1 : m > f ? (g = 1 - n + n * (Math.sqrt(m) - u) / c, e[h] = e[h] * g + r * (1 - g), e[h + 1] = e[h + 1] * g + a * (1 - g), e[h + 2] = e[h + 2] * g + i * (1 - g)) : (g = 1 - n, e[h] = e[h] * g + r * (1 - g), e[h + 1] = e[h + 1] * g + a * (1 - g), e[h + 2] = e[h + 2] * g + i * (1 - g))
                }
            }, m.dirtspec = function(e, t, r, a, i, n, l, s) {
                var u = new o.RNG(s), f = [];
                f[0] = [a, i, n];
                for (var c = 1; n > .2; ) {
                    n *= .97;
                    var d = u.nextFloat() * (c - 1) | 0, h = f[d][0], g = f[d][1], p = f[d][2], v = 2 * u.nextFloat() * Math.PI;
                    a = h + .5 * (p + n) * Math.cos(v), i = g + .5 * (p + n) * Math.sin(v), m.drawBasicDot(e, t, r, l[0], l[1], l[2], l[3], a, i, n), f[c] = [a, i, n], c++
                }
            }, s.purpleBorder = function(e, t, o, r) {
                var a = r.intensity, i = [0, 0, 0, 1];
                c(e, t, o, i, "torn", [.02 * a, .02, .5, "uniform", r.seed]), c(e, t, o, i, "round", [.02, 1, 1, 1, 1, 1.5])
            }, s.san_carmenBorder = function(e, t, r, a) {
                var i, n = 225, l = 225, s = 200, u = new o.RNG(a.seed), f = a.intensity;
                for (c(e, t, r, [n, l, s, 1], "round", [.025, 1, 1, 1, 1, 1.5]), i = 4; 10 > i; i++)
                    d(e, t, r, [n, l, s, .2], "torn", [.06 * f * (10 - i) / 10, .005 * i + .01, .4, "uniform", u.nextInt()])
            }, s.san_carmenAutoColors = function(e, t, o, r) {
                n.autocolorsfade(e, t, o, r.intensity, 251, 233, 194)
            }, s.threshBorder = function(e, t, o) {
                c(e, t, o, [0, 0, 0, 1], "round", [.025, 1, 1, 1, 1, 1.5])
            }, s.brownieBorder = function(e, t, r, a) {
                var i = a.intensity, n = a.seed, l = new o.RNG(n);
                c(e, t, r, [0, 0, 0, .2], "torn", [.03 * i, .02, .2, "uniform", l.nextInt()]), c(e, t, r, [0, 0, 0, .8], "torn", [.02 * i, .01, .5, "uniform", l.nextInt()]), h(e, t, r, {color: [0, 0, 0, 1],offset: -(t + r) / 150,corner: 0,scale: .5,seed: l.nextInt(),alpha: i})
            }, s.maya_unicornBorder = function(e, t, r, a) {
                var i = a.intensity, n = a.seed, l = new o.RNG(n);
                c(e, t, r, [0, 0, 0, 1], "torn", [0, .04 * r / Math.min(t, r), .2, "uniform", l.nextInt()]);
                var s = ["Abercrave", "Abilene", "Aith", "Banff", "Blean", "Caarnduncan", "Corrievorrie", "Cotterstock", "Dalrymple", "Draffan", "Dubuque", "Epsom", "Frolesworth", "Glassel", "Golant", "Harpenden", "Hassop", "Hove", "Popcastle", "Winkley"], u = "&  >| " + s[l.nextFloat() * s.length | 0].toUpperCase() + " |<  &", f = .8, d = .935, h = .003 * Math.min(t, r) / t;
                m.drawChar(e, t, r, u, h, f, d, 255, 255, 0, .3, -u.length), f = -.8, d = -.957, m.drawChar(e, t, r, u, h, f, d, 255, 255, 0, .3, 0, 0, 0);
                var g = [255, 255, 255, 1];
                c(e, t, r, g, "torn", [0, .01 * r / Math.min(t, r), .2, "uniform", l.nextInt()]), c(e, t, r, g, "torn", [.02 * i, .01 * r / Math.min(t, r), .5, "uniform", l.nextInt()]), c(e, t, r, g, "torn", [.008 * i, .01 * r / Math.min(t, r), .3, "normal", l.nextInt()])
            }, s.old_threshBorder = function(e, t, r, a) {
                var i = a.intensity, n = a.seed, l = new o.RNG(n);
                c(e, t, r, [255, 255, 255, 1], "round", [.025, 1, 1, 1, 1, 1.5]);
                for (var s = 4; 10 > s; s++)
                    d(e, t, r, [255, 255, 255, .2], "torn", [.06 * i * (10 - s) / 10, .005 * s + .01, .4, "uniform", l.nextInt()])
            }, s.bordeauxBorder = function(e, t, r, a) {
                var i = a.seed, n = new o.RNG(i), l = (t + r) / 2, s = t / l;
                m.drawLine(e, t, r, 255, 255, 255, .3, [[.46 * t, .5 * r - .05 * t], [.54 * t, .5 * r - .05 * t]], 0), m.ringFlare(e, t, r, t / 2, r / 2 - .05 * t, .08 * s, .081 * s, 255, 255, 255, .3), m.drawLine(e, t, r, 255, 255, 255, .3, [[.5 * t, .5 * r - .18 * t - .05 * t], [.5 * t, .5 * r - .25 * t - .05 * t]], 0), m.drawLine(e, t, r, 255, 255, 255, .3, [[.5 * t, .5 * r + .18 * t - .05 * t], [.5 * t, .5 * r + .25 * t - .05 * t]], 0), m.drawLine(e, t, r, 255, 255, 255, .3, [[.5 * t - .18 * t, .5 * r - .05 * t], [.5 * t - .25 * t, .5 * r - .05 * t]], 0), m.drawLine(e, t, r, 255, 255, 255, .3, [[.5 * t + .18 * t, .5 * r - .05 * t], [.5 * t + .25 * t, .5 * r - .05 * t]], 0), m.drawLine(e, t, r, 255, 255, 255, 1, [[-t, r - .1 * t], [2 * t, r - .1 * t]], 0), m.drawLine(e, t, r, 0, 0, 0, 1, [[-t, r], [2 * t, r]], .1 * t);
                var u = "               ", f = u.length * n.nextFloat() | 0;
                f = Math.min(u.length - 1, Math.max(0, f)), u = u.substr(0, f) + "@" + u.substr(f + 1);
                var c = [255, 255, 255, .6], d = .005, h = .5 * (1 - 3 * .1 * t / r) + .5;
                m.drawChar(e, t, r, "+2..1..0..1..2-", d / 1.2, -.5, h, c[0], c[1], c[2], c[3], -7.5), m.drawChar(e, t, r, u, d / 1.2, -.5, h + 7 * d * 1.3 * t / r, c[0], c[1], c[2], c[3], -7.5);
                var g = .005 * t, p = .8 * t, v = r - 8 * g;
                m.drawLine(e, t, r, 255, 255, 255, 1, [[p, v], [p + 10 * g, v]], g / 4), m.drawLine(e, t, r, 255, 255, 255, 1, [[p, v - 6 * g], [p + 10 * g, v - 6 * g]], g / 4), m.drawLine(e, t, r, 255, 255, 255, 1, [[p, v], [p, v - 6 * g]], g / 4), m.drawLine(e, t, r, 255, 255, 255, 1, [[p + 10 * g, v], [p + 10 * g, v - 6 * g]], g / 4), m.drawLine(e, t, r, 255, 255, 255, 1, [[p - g, v - 2 * g], [p - g, v - 4 * g]], g / 4);
                var _ = 4 * n.nextFloat();
                _ > 0 && m.drawLine(e, t, r, 255, 255, 255, 1, [[p + 8 * g, v - 2 * g], [p + 8 * g, v - 4 * g]], g / 4), _ > 1 && m.drawLine(e, t, r, 255, 255, 255, 1, [[p + 6 * g, v - 2 * g], [p + 6 * g, v - 4 * g]], g / 4), _ > 2 && m.drawLine(e, t, r, 255, 255, 255, 1, [[p + 4 * g, v - 2 * g], [p + 4 * g, v - 4 * g]], g / 4), _ > 3 && m.drawLine(e, t, r, 255, 255, 255, 1, [[p + 2 * g, v - 2 * g], [p + 2 * g, v - 4 * g]], g / 4)
            }, s.covertBorder = function(e, t, r, a) {
                var i = a.seed, n = new o.RNG(i);
                n.nextInt(), n.nextInt();
                for (var l = .5, s = ["1.4", "2", "2.8", "4", "5.6", "8", "11", "16", "22", "32"], u = s[n.nextFloat() * s.length | 0]; u.length < 3; )
                    u += " ";
                for (var c = ["100", "200", "400", "800", "1600"], d = c[n.nextFloat() * c.length | 0]; d.length < 4; )
                    d += " ";
                for (var h = .015625, g = ["1", "2", "4", "8", "15", "30", "60", "125", "250", "500", "1000"], p = g[0], v = l * parseFloat(d) / (parseFloat(u) * parseFloat(u) * h), _ = 1; _ < g.length; _++)
                    Math.abs(parseInt(g[_]) - v) < Math.abs(parseInt(p) - v) && (p = g[_]);
                for (; p.length < 4; )
                    p = " " + p;
                var x = "               ", y = x.length * n.nextFloat();
                y = Math.min(x.length - 1, Math.max(0, y)), x = x.substr(0, y) + "@" + x.substr(y + 1);
                var M = new Date, C = "dfasdfsdf";
                C = M.toDateString(), C = C.toUpperCase();
                var w = [90, 250, 20, .6];
                f(e, t, r, [0, 0, 0, 1], "smooth", [.5, Math.max(t, r) / 15 * .6]);
                for (var b = .0043 * Math.min(t, r) / t, D = 0; D < g.length; D++) {
                    var S = 1.1 / g.length, P = -S * D + .5;
                    (p == g[D] || p == " " + g[D] || p == "  " + g[D] || p == "   " + g[D]) && m.drawLine(e, t, r, 90, 250, 20, .6, [[.97 * t, (P + S / 2 + 1) * r / 2], [2 * t, (P + 1) * r / 2]], b * t * .7), m.drawChar(e, t, r, g[D], .7 * b, 1, P, w[0], w[1], w[2], w[3], -2 - g[D].length / 2)
                }
                m.drawLine(e, t, r, 0, 0, 0, .1, [[0, r / 3], [t, r / 3]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[0, 2 * r / 3], [t, 2 * r / 3]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[t / 3, 0], [t / 3, r]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[2 * t / 3, 0], [2 * t / 3, r]], 0), m.drawChar(e, t, r, "+2..1..0..1..2-", b / 1.2, -.5, .915, w[0], w[1], w[2], w[3], -7.5), m.drawChar(e, t, r, x, b / 1.2, -.5, .918 + 7 * b * 1.3 * t / r, w[0], w[1], w[2], w[3], -7.5), m.drawChar(e, t, r, C, b, .75, .92, w[0], w[1], w[2], w[3], -C.length)
            }, s.orcaBorder = function(e, t, r, a) {
                var i = a.seed, n = new o.RNG(i), l = ["1.4", "2", "2.8", "4", "5.6", "8", "11", "16", "22", "32"], s = l[n.nextFloat() * l.length | 0], u = [216, 193, 163, .6];
                f(e, t, r, [0, 0, 0, 1], "rough", [1, (t + r) / 30 * .6, i]);
                for (var c = .0043 * Math.min(t, r) / t, d = 0; d < l.length; d++) {
                    var h = 1.1 / l.length * d - .5;
                    (s == l[d] || s == l[d] + " " || s == l[d] + "  ") && m.drawLine(e, t, r, 230, 50, 40, .7, [[.95 * t, (h + 1) * r / 2], [2 * t, .5 * r]], c * t * .7), m.drawChar(e, t, r, l[d], .7 * c, 1, h, u[0], u[1], u[2], u[3], -2 - l[d].length / 2)
                }
                m.drawLine(e, t, r, 0, 0, 0, .1, [[t / 4, 0], [t / 4, r / 3]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[0, r / 4], [t / 3, r / 4]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[0, 3 * r / 4], [t / 3, 3 * r / 4]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[t / 4, r], [t / 4, 2 * r / 3]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[3 * t / 4, 0], [3 * t / 4, r / 3]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[t, r / 4], [2 * t / 3, r / 4]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[3 * t / 4, r], [3 * t / 4, 2 * r / 3]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[t, 3 * r / 4], [2 * t / 3, 3 * r / 4]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[0, r / 2], [t / 4, r / 2]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[t / 2, 0], [t / 2, r / 4]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[t / 2, r], [t / 2, 3 * r / 4]], 0), m.drawLine(e, t, r, 0, 0, 0, .1, [[t, r / 2], [3 * t / 4, r / 2]], 0), m.ringFlare(e, t, r, t / 2, r / 2, .08, .22, 255, 255, 255, .28)
            }, s.titanBorder = function(e, t, r, a) {
                var i = a.seed, n = new o.RNG(i), l = ["1.4", "2", "2.8", "4", "5.6", "8", "11", "16", "22", "32"], s = l[n.nextFloat() * l.length | 0], u = ["1", "2", "4", "8", "15", "30", "60", "125", "250", "500", "1000"], c = .005 * (t + r) / t / 2;
                f(e, t, r, [0, 0, 0, 1], "viewfinder", [.005 * (t + r), .035 * (t + r), .005 * (t + r), .035 * (t + r), i]), m.drawLine(e, t, r, 0, 0, 0, 1, [[t - .03 * (t + r), .8 * r - .035 * (t + r)], [t - .03 * (t + r), .2 * r]], (t + r) / 50);
                var d = .035 * (t + r), h = .5 * (1 - d / r * 2.5) + .5;
                m.drawLine(e, t, r, 255, 255, 255, .2, [[.4 * t, r - d / 2], [.45 * t, r - d / 2]], (t + r) / 100), m.drawChar(e, t, r, s, c, -.15, h, 255, 255, 255, 1, -s.length / 2);
                for (var g = [230, 230, 255, .8], p = 0; p < u.length; p++) {
                    var v = 1.1 / u.length, _ = -v * p + .4;
                    m.drawChar(e, t, r, u[p], .7 * c, 1, _, g[0], g[1], g[2], g[3], -3.5 - u[p].length / 2)
                }
            }, s.andyBorder = function(e, t, r, a) {
                var i = a.seed, n = new Date, l = n.toDateString();
                l = l.toUpperCase();
                for (var s = .5, u = new o.RNG(i), f = ["1.4", "2", "2.8", "4", "5.6", "8", "11", "16", "22", "32"], d = f[u.nextFloat() * f.length | 0]; d.length < 3; )
                    d += " ";
                for (var h = ["100", "200", "400", "800", "1600"], g = h[u.nextFloat() * h.length | 0]; g.length < 4; )
                    g += " ";
                for (var p = .015625, v = ["1", "2", "4", "8", "15", "30", "60", "125", "250", "500", "1000"], _ = v[0], x = s * parseFloat(g) / (parseFloat(d) * parseFloat(d) * p), y = 1; y < v.length; y++)
                    Math.abs(parseInt(v[y], 10) - x) < Math.abs(parseInt(_, 10) - x) && (_ = v[y]);
                for (; _.length < 4; )
                    _ = " " + _;
                var M = "               ", C = M.length * u.nextFloat();
                C = Math.min(M.length - 1, Math.max(0, C)), M = M.substr(0, C) + "@" + M.substr(C + 1);
                var w = _ + "/s f" + d + "  > |", b = "  | <     ISO:" + g;
                c(e, t, r, [0, 0, 0, 1], "round", [.008, 6, 4, 4, 4, 1.5]);
                var D = .0043 * Math.min(t, r) / t;
                m.drawChar(e, t, r, w, D, -.9, -.978, 180, 120, 0, 1), m.drawChar(e, t, r, b, D, .9, -.978, 180, 120, 0, 1, -b.length), m.drawChar(e, t, r, "+2..1..0..1..2-", D / 1.7, 0, -.985, 180, 120, 0, 1, -7.5), m.drawChar(e, t, r, M, D / 1.7, 0, -.988 + 7 * D * 1.3 * t / r, 180, 120, 0, 1, -7.5), m.drawChar(e, t, r, l, D, .85, .86, 230, 50, 40, 1, -l.length)
            }, s.aquaBorder = function(e, t, o) {
                c(e, t, o, [255, 255, 255, 1], "round", [.025, 1, 1, 1, 1, 1.5])
            }, s.edgewoodBorder = function(e, t, r, a) {
                var i, n = new o.RNG(a.seed), l = [255, 255, 255, 1];
                for (c(e, t, r, l, "round", [.025, 1, 1, 1, 1, 1.5]), i = 4; 10 > i; i++)
                    d(e, t, r, l, "torn", [.03 * a.intensity * (10 - i) / 10, .005 * i + .01, .4, "uniform", n.nextInt()])
            }, s.joe_coolBorder = function(e, t, o) {
                c(e, t, o, [255, 255, 255, 1], "bulge", [.05, .28, .5])
            }, s.singeBorder = function(e, t, o) {
                f(e, t, o, [0, 0, 0, 1], "fade", 1)
            }, s.solarBorder = function(e, t, r, a) {
                for (var i, n, l = a.seed, s = new o.RNG(l), u = (t + r) / 2 / 50, f = [[141, 88, 46, .1], [70, 48, 26, .1]], c = .02, d = 0; 2 > d; d++)
                    for (var g = 7; 10 > g; g++)
                        for (var p = g; 10 > p; p += .4)
                            i = t * c * s.nextFloatNormal(), n = r * s.nextFloat(), m.dirtspec(e, t, r, i, n, u / 3 * g / 15, f[d], s.nextInt()), i = t + t * c * s.nextFloatNormal(), n = r * s.nextFloat(), m.dirtspec(e, t, r, i, n, u / 3 * g / 15, f[d], s.nextInt()), i = t * s.nextFloat(), n = r * c * s.nextFloatNormal(), m.dirtspec(e, t, r, i, n, u / 3 * g / 15, f[d], s.nextInt()), i = t * s.nextFloat(), n = r + r * c * s.nextFloatNormal(), m.dirtspec(e, t, r, i, n, u / 3 * g / 15, f[d], s.nextInt());
                h(e, t, r, {color: [200, 140, 80, .3],offset: (t + r) / 80,corner: (t + r) / 40,seed: s.nextInt()}), h(e, t, r, {color: [113, 77, 40, .7],offset: (t + r) / 200,corner: (t + r) / 60,seed: s.nextInt()}), h(e, t, r, {color: [0, 0, 0, .9],offset: 0,corner: (t + r) / 80,seed: s.nextInt()})
            }, s.earthyBorder = function(e, t, r, a) {
                var i = a.seed, n = new o.RNG(i), l = [0, 15, 0, 1], s = a.intensity;
                c(e, t, r, l, "torn", [.02 * s, .02, .5, "uniform", n.nextInt()]), c(e, t, r, l, "torn", [.01 * s, .02, 0, "uniform", n.nextInt()]), h(e, t, r, {color: l,seed: n.nextInt(),alpha: s})
            }, s.ithacaFlare = function(e, t, a, i) {
                var n = i.intensity, l = new o.RNG(i.seed), s = .3 * (l.nextFloat() - .5), u = .3 * (l.nextFloat() - .5), f = .4 * l.nextFloat();
                r.flare(e, t, a, 1 + f, 255, 255, 255, .6 * n, "angleGaussian", s, u)
            }, s.ithacaBorder = function(e, t, o) {
                f(e, t, o, [255, 255, 255, 1], "smooth", [1])
            }, s.cherryBorder = function(e, t, r, a) {
                var i = new o.RNG(a.seed);
                c(e, t, r, [255, 255, 255, 1], "round", [.03, 1, 1, 1, 1, 1.5]);
                var n = .03 * Math.min(t, r) / t, l = ["ABERCRAVE", "ABILENE", "AITH", "BANFF", "BLEAN", "CAARNDUNCAN", "CORRIEVORRIE", "COTTERSTOCK", "DALRYMPLE", "DRAFFAN", "DUBUQUE", "EPSOM", "FROLESWORTH", "GLASSEL", "GOLANT", "HARPENDEN", "HASSOP", "HOVE", "POPCASTLE", "WINKLEY"], s = "<> <> " + l[i.nextFloat() * l.length | 0].toUpperCase() + " <> <>", u = 1 - 1.4 * n, f = .85, d = .003 * Math.min(t, r) / t, h = -Math.PI / 2;
                m.drawChar(e, t, r, s, d, u, f, 230, 50, 40, .4, 0, 0, h), u = -1 + .6 * n, m.drawChar(e, t, r, s, d, u, f, 230, 50, 40, .4, 0, 0, h), u = 1 - 1.4 * n, f = -.85, m.drawChar(e, t, r, s, d, u, f, 230, 50, 40, .4, -s.length, 0, h), u = -1 + .6 * n, m.drawChar(e, t, r, s, d, u, f, 230, 50, 40, .4, -s.length, 0, h)
            }, s.cross_processBorder = function(e, t, o, r) {
                c(e, t, o, [255, 255, 255, 1], "torn", [.015 * r.intensity, .02, .5, "uniform", r.seed])
            }, s.sunburnFlare = function(e, t, a, i) {
                var n = i.intensity, l = new o.RNG(i.seed), s = .1 * (l.nextFloat() - .5), u = .1 * (l.nextFloat() - .5), f = .1 * (l.nextFloat() - .5);
                r.flare(e, t, a, 1 + f, 255, 255, 255, 1 * n, "gaussianThing2", s, u)
            }, s.sunburnBorder = function(e, t, o) {
                f(e, t, o, [0, 0, 0, 1], "fade", [1, 0, 2.222])
            }, s.fadedBorder = function(e, t, r, a) {
                var i = a.intensity, n = new o.RNG(a.seed);
                c(e, t, r, [255, 255, 255, 1], "round", [.025, 1, 1, 1, 1, 1.5]);
                var l;
                for (l = 4; 10 > l; l++)
                    d(e, t, r, [255, 255, 255, 1], "torn", [.03 * i, .005 * l + .01, 8, "uniform", n.nextInt()])
            }, s.chronoBorder = function(e, t, r, n) {
                var l = n.intensity, s = new o.RNG(n.seed);
                m.drawLine(e, t, r, 255, 255, 0, .2, [[.35 * t, r / 8], [.65 * t, r / 8]], (t + r) / 250), m.drawLine(e, t, r, 255, 255, 0, .2, [[.35 * t, 7 * r / 8], [.65 * t, 7 * r / 8]], (t + r) / 250), m.drawLine(e, t, r, 255, 255, 0, .2, [[.11 * t, .2 * r], [.11 * t, .8 * r]], (t + r) / 250), m.drawLine(e, t, r, 110, 110, 0, .85, [[.965 * t, 0], [.965 * t, r]], .07 * t), m.drawLine(e, t, r, 110, 0, 0, .85, [[.947 * t, .04 * r], [1.2 * t, .3 * r]], .05 * t), m.drawLine(e, t, r, 110, 0, 0, .85, [[.947 * t, .96 * r], [1.2 * t, .7 * r]], .05 * t), m.drawLine(e, t, r, 0, 0, 0, .5, [[.895 * t, 0], [.895 * t, r]], 0);
                for (var u = ["1.4", "2", "2.8", "4", "5.6", "8", "11", "16", "22", "32"], f = u[s.nextFloat() * u.length | 0], d = .004, g = [0, 0, 0, .8], p = 0; p < u.length; p++) {
                    var v = 2 / u.length, _ = .9 - v * p;
                    (f == u[p] || f == u[p] + " " || f == u[p] + "  ") && m.drawLine(e, t, r, 255, 255, 0, .2, [[.86 * t, (_ / 2 - v / 10 + .5) * r], [.86 * t, (_ / 2 + v / 10 + .5) * r]], (t + r) / 250), m.drawChar(e, t, r, u[p], d, .95, _, g[0], g[1], g[2], g[3], -2 - u[p].length / 2), m.drawChar(e, t, r, "%", d, .95, _ + v / 2, g[0], g[1], g[2], g[3], -2.5)
                }
                h(e, t, r, {color: [0, 0, 0, 1],seed: s.nextInt(),alpha: 1,scale: .5}), i.vignette(e, t, r, (t + r) / 2 * 1.1 / (l + a), 0, 0, 150), c(e, t, r, [0, 0, 0, 1], "bulge", [.05, .28, .5])
            }, s.cabanaBorder = function(e, t, o) {
                var r = .0053 * Math.min(t, o) / t;
                m.drawLine(e, t, o, 255, 255, 255, .5, [[0, .1 * o], [.08 * t, .1 * o]], 0), m.drawChar(e, t, o, "0.5", r, -.8, -.8 - 2 * r, 255, 255, 255, .5), m.drawLine(e, t, o, 255, 255, 255, .5, [[0, .3 * o], [.08 * t, .3 * o]], 0), m.drawChar(e, t, o, "1.0", r, -.8, -.4 - 2 * r, 255, 255, 255, .5), m.drawLine(e, t, o, 255, 255, 255, .5, [[0, .5 * o], [.08 * t, .5 * o]], 0), m.drawChar(e, t, o, "1.5", r, -.8, -2 * r, 255, 255, 255, .5), m.drawLine(e, t, o, 255, 255, 255, .5, [[0, .7 * o], [.08 * t, .7 * o]], 0), m.drawChar(e, t, o, "2.0", r, -.8, .4 - 2 * r, 255, 255, 255, .5), m.drawLine(e, t, o, 255, 255, 255, .5, [[0, .9 * o], [.08 * t, .9 * o]], 0), m.drawChar(e, t, o, "2.5", r, -.8, .8 - 2 * r, 255, 255, 255, .5), c(e, t, o, [0, 0, 0, 1], "round", [.025, 1, 1, 1, 1, 1.5])
            }, s.soft_focus = function(e, t, o, r) {
                var a = r.intensity, i = .4 * a, n = 1 + .25 * a;
                l.softFocusConvolution(e, t, o, i, n)
            }, t.exports = s
        }), e.define("/src/js/core/rng.js", function(e, t) {
            "use strict";
            function o(e) {
                this.state = "number" == typeof e && e >= 0 ? e : Math.floor(4294967295 * Math.random()), this.seed = this.state
            }
            var r = {};
            o.prototype.nextInt = function() {
                return this.state = (69069 * this.state + 1) % 4294967296, this.state
            }, o.prototype.nextIntN = function(e) {
                for (; e > 0; )
                    this.state = (69069 * this.state + 1) % 4294967296, e--;
                return this.state
            }, o.prototype.nextFloat = function() {
                return this.state = (69069 * this.state + 1) % 4294967296, this.state / 4294967296
            }, o.prototype.getState = function() {
                return this.state
            }, o.prototype.getSeed = function() {
                return this.seed
            }, o.prototype.nextFloatNormal = function() {
                for (var e = this.nextFloat(), t = this.nextFloat(); 0 === e; )
                    e = this.nextFloat();
                for (; 0 === t; )
                    t = this.nextFloat();
                return Math.sqrt(-2 * Math.log(e)) * Math.cos(2 * Math.PI * t)
            }, o.prototype.nextFloatLaplace = function() {
                var e = .5 - this.nextFloat();
                return 0 > e ? Math.log(1 + 2 * e) : -Math.log(1 - 2 * e)
            }, r.RNG = o, t.exports = r
        }), e.define("/src/js/filters/flare.js", function(e, t) {
            "use strict";
            var o = {};
            o.flare = function(e, t, o, r, a, i, n, l, s, u, f, c, d, h) {
                if (e.moaGL)
                    return void e.moaGL.renderFlare(h, s, r, {r: a,g: i,b: n,a: 255 * l}, u, f, c, d);
                "undefined" == typeof u && (u = 0), "undefined" == typeof f && (f = 0), "undefined" == typeof c && (c = 1), "undefined" == typeof d && (d = 1), "undefined" == typeof a ? a = 0 : 0 > a ? a = 0 : a > 255 && (a = 255), "undefined" == typeof i ? i = 0 : 0 > i ? i = 0 : i > 255 && (i = 255), "undefined" == typeof n ? n = 0 : 0 > n ? n = 0 : n > 255 && (n = 255), "undefined" == typeof l && (l = 1);
                var m = "sinc" === s, g = "gaussianThing" === s, p = "gaussianThing2" === s, v = "gaussianThing3" === s, _ = "gaussianThing4" === s, x = "angleGaussian" === s, y = "stardom" === s, M = "lobes" === s, C = "stripe" === s, w = "stripe2" === s, b = "dimondFlare" === s, D = "crossFlare" === s, S = "cornerFlares" === s, P = "fingerFlare" === s, T = "blobFlare" === s, E = "blah" === s, F = "blob" === s, L = "blob2" === s;
                if (0 != c && 0 != d && 0 != r && 0 != l) {
                    var A = !1, R = !1;
                    "overlay" === h ? R = !0 : A = !0;
                    var I, O, B, N, U, k, j, G, X, W, V = t / 2 | 0, z = o / 2 | 0, Y = Math.log(1 / 255 / l), H = 0;
                    u *= V, f *= z;
                    var q = 1 / r / V / c, Z = 1 / r / z / d;
                    for (m && (q = 2 / r / (V + z), Z = q), j = 0; o > j; j++)
                        for (O = 4 * j * t, X = Z * (j - z - f), k = 0; t > k; k++)
                            if (I = O + 4 * k, W = q * (k - V - u), N = 1, m ? (U = 80 * (W * W + X * X), N = 0 === U ? 1 : 1 - .4 * l * (Math.sin(U) / Math.sqrt(U))) : g ? (B = 2 * -(W * W + X * X) - 16 * (X + .5) * (X + .5) * (W + .5) * (W + .5), N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)) : p ? (B = 2 * -(W * W + X * X) - 16 * (X + 1) * (X + 1) * (W - .5) * (W - .5), N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)) : v ? (U = W * W + X * X, B = 2 * -U - 1 * (X + 1.7) * (X + 1.7) * (W - .6) * (W - .6), N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)) : _ ? (U = W * W + X * X, B = -.5 * (X - 1.7) * (X - 1.7) * (W + .6) * (W + .6) - .5 * (X + 1.7) * (X + 1.7) * (W - .6) * (W - .6), N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)) : x ? (B = 2 * -(W * W + X * X) - 5 * (W + .2) * (X + .2) * W * W, N = Y > B ? 1 : B > H ? 1 - .5 * l : 1 - .5 * l * Math.exp(B)) : y ? (U = W * W + X * X, G = Math.atan2(X, W), N = 1 - .2 * l * (1 - U * U * Math.sin(10 * G))) : M ? (U = W * W + X * X, G = Math.atan2(X, W), N = 1 - .5 * l * Math.exp(2 * -U) * (.5 + .5 * Math.sin(4 * G + 1))) : C ? (B = -(W * W) - X * X / 64, N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)) : w ? (B = -(X * X) - W * W / 64, N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)) : b ? (U = W * W + X * X, N = 1 - l * Math.exp(2 * -(U * U) + -8 * (X + .5) * (X - .5) * (W + .5) * (W - .5))) : D ? (U = W * W + X * X, B = 2 * -(U / 180) - 16 * (X + .5) * (X + .5) * (W + .5) * (W + .5), N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)) : S ? (U = W * W + X * X, N = 1 - l * Math.exp(2 * -(U / 180)) * Math.exp(-8 * (X + 1) * (X - 1) * (W + 1) * (W - 1))) : P ? (X = Z * (j - z - f) - 1, W = q * (k - V - u) - 1, U = (W + 1) * W + X * X, N = l * Math.exp(X / W + -U * Math.exp(Math.exp(X) * W))) : T ? (U = W * W + X * X, N = 1 - l * Math.exp(-Math.pow(U, 2) + -.9 * (X - 1.7) * (X + .5) * (W - 1.5) * (W + .5))) : E ? (U = W * W + X * X, G = Math.atan2(X, W), N = Y > B ? 1 : B > H ? 1 - l : 1 - .2 * l * (1 - Math.sin(U) * Math.sin(10 * U) * Math.sin(10 * G))) : L ? (B = 10 * -Math.pow(X * X + W * W, 2), N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)) : F && (B = 100 * -Math.pow(X * X + W * W, 4), N = Y > B ? 1 : B > H ? 1 - l : 1 - l * Math.exp(B)), N = 0 > N ? 0 : N > 1 ? 1 : N, R) {
                                var $ = e[I], Q = e[I + 1], K = e[I + 2];
                                $ = 128 >= $ ? N * $ + 2 * (1 - N) * $ * a / 256 + .5 | 0 : N * $ + (1 - N) * (255 - (255 - (2 * $ - 256)) * (255 - a) / 256) + .5 | 0, Q = 128 >= Q ? N * Q + 2 * (1 - N) * Q * i / 256 + .5 | 0 : N * Q + (1 - N) * (255 - (255 - (2 * Q - 256)) * (255 - i) / 256) + .5 | 0, K = 128 >= K ? N * K + 2 * (1 - N) * K * n / 256 + .5 | 0 : N * K + (1 - N) * (255 - (255 - (2 * K - 256)) * (255 - n) / 256) + .5 | 0, e[I] = $, e[I + 1] = Q, e[I + 2] = K
                            } else
                                e[I] = e[I] * N + a * (1 - N) + .5 | 0, e[I + 1] = e[I + 1] * N + i * (1 - N) + .5 | 0, e[I + 2] = e[I + 2] * N + n * (1 - N) + .5 | 0
                }
            }, t.exports = o
        }), e.define("/src/js/filters/vignette.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./blendWithBitmap"), a = e("../core/copy");
            o.vignette = function(e, t, o, i, n, l, s, u, f, c, d, h, m) {
                if (e.moaGL)
                    return void e.moaGL.renderVignette({blendMode: f,shapeMode: c,vignetteScale: i,color: {r: n,g: l,b: s,a: 255 * u},dx: h || 0,dy: m || 0,stretch: d});
                var g = "overlay" === f, p = "multiply" === f, v = "normal" === f, _ = "sharp" === c, x = "ultraSharp" === c, y = "mediumSharp" === c;
                "boolean" != typeof d && (d = !1), "number" != typeof u && (u = 1), "number" != typeof h && (h = 0), "number" != typeof m && (m = 0);
                var M, C, w, b, D, S, P, T, E, F = 1.15, L = Math.pow(i, 2) / F, A = 1 / L, R = t / 2 | 0, I = o / 2 | 0, O = 5 / 3, B = 34 / 45, N = 13 / 63, U = 514 / 14175;
                h *= R, m *= I;
                var k, j = !g && !p && !v;
                j && (k = a.makeData(e.length));
                var G, X, W, V, z;
                for (z = 0; o > z; z++)
                    for (C = 4 * z * t, w = (z - I - m) * (z - I - m), V = 0; t > V; V++)
                        M = C + 4 * V, D = d ? ((V - R - h) * (V - R - h) / t / t + (z - I - m) * (z - I - m) / o / o) * A : ((V - R - h) * (V - R - h) + w) * A, _ && (D *= D), x && (D *= D, D *= D), y && (D = Math.pow(D, 1.5)), D > F ? b = 0 : .04 > D ? b = 1 : (S = D * D, P = S * S, T = P * S, E = T * S, b = 1 - 2 * S + O * P - B * T + N * E - U * E * S), g ? (G = e[M], X = e[M + 1], W = e[M + 2], b = (1 - b) * u, G = 128 >= G ? (1 - b) * G + 2 * b * G * n / 256 + .5 | 0 : (1 - b) * G + b * (255 - (255 - (2 * G - 256)) * (255 - n) / 256) + .5 | 0, X = 128 >= X ? (1 - b) * X + 2 * b * X * l / 256 + .5 | 0 : (1 - b) * X + b * (255 - (255 - (2 * X - 256)) * (255 - l) / 256) + .5 | 0, W = 128 >= W ? (1 - b) * W + 2 * b * W * s / 256 + .5 | 0 : (1 - b) * W + b * (255 - (255 - (2 * W - 256)) * (255 - s) / 256) + .5 | 0, G = G > 255 ? 255 : 0 > G ? 0 : G, X = X > 255 ? 255 : 0 > X ? 0 : X, W = W > 255 ? 255 : 0 > W ? 0 : W, e[M] = G, e[M + 1] = X, e[M + 2] = W) : p ? (b = 1 - u * (1 - b), b = 0 > b ? 0 : b > 1 ? 1 : b, G = b * e[M] + (1 - b) * n * e[M] / 255 + .5 | 0, X = b * e[M + 1] + (1 - b) * l * e[M + 1] / 255 + .5 | 0, W = b * e[M + 2] + (1 - b) * s * e[M + 2] / 255 + .5 | 0, G = G > 255 ? 255 : 0 > G ? 0 : G, X = X > 255 ? 255 : 0 > X ? 0 : X, W = W > 255 ? 255 : 0 > W ? 0 : W, e[M] = G, e[M + 1] = X, e[M + 2] = W) : v ? (b = 1 - u * (1 - b), b = 0 > b ? 0 : b > 1 ? 1 : b, e[M] = e[M] * b + n * (1 - b) + .5 | 0, e[M + 1] = e[M + 1] * b + l * (1 - b) + .5 | 0, e[M + 2] = e[M + 2] * b + s * (1 - b) + .5 | 0) : (k[M] = n, k[M + 1] = l, k[M + 2] = s, k[M + 3] = 255 * (1 - b) + .5 | 0);
                j && r.blendWithBitmap(e, e, k, t, o, f, u)
            }, t.exports = o
        }), e.define("/src/js/legacy/auto_colors_fade_max_color.js", function(e, t) {
            "use strict";
            var o = e("../filters/colorMatrixTransform"), r = {};
            r.getcdf = function(e) {
                for (var t = 0, o = 0; 256 > o; o++)
                    t += e[o];
                var r = new Array(256);
                r[0] = e[0] / t;
                for (var a = 1; 256 > a; a++)
                    r[a] = e[a] / t + r[a - 1];
                return r
            }, r.cdfinv = function(e, t) {
                if (0 >= t)
                    return 0;
                if (t >= 1)
                    return 255;
                for (var o = 0; t > e[o]; )
                    o++;
                if (0 === o)
                    return t / e[o];
                var r = o - 1 + (t - e[o - 1]) / (e[o] - e[o - 1]);
                return r
            }, r.getHist = function(e) {
                var t, o, r = new Array(256), a = new Array(256), i = new Array(256);
                for (t = 0; 256 > t; t++)
                    r[t] = 0, a[t] = 0, i[t] = 0;
                for (t = 0, o = e.length; o > t; t += 4)
                    r[e[t]]++, a[e[t + 1]]++, i[e[t + 2]]++;
                return {r: r,g: a,b: i}
            }, r.autocolorsfade = function(e, t, a, i, n, l, s) {
                "undefined" == typeof i && (i = 1);
                var u = .005, f = .995, c = r.getHist(e), d = r.getcdf(c.r), h = r.getcdf(c.g), m = r.getcdf(c.b), g = i * r.cdfinv(d, u), p = 255 * (1 - i) + i * r.cdfinv(d, f), v = i * r.cdfinv(h, u), _ = 255 * (1 - i) + i * r.cdfinv(h, f), x = i * r.cdfinv(m, u), y = 255 * (1 - i) + i * r.cdfinv(m, f);
                "undefined" != typeof n && (p = Math.max(n, p) * i + p * (1 - i)), "undefined" != typeof l && (_ = Math.max(l, _) * i + _ * (1 - i)), "undefined" != typeof s && (y = Math.max(s, y) * i + y * (1 - i));
                var M = [1, 0, 0, -g, 0, 1, 0, -v, 0, 0, 1, -x], C = 255 / (p - g), w = 255 / (_ - v), b = 255 / (y - x), D = [C, 0, 0, 0, 0, w, 0, 0, 0, 0, b, 0];
                o.colorMatrixTransform(e, M), o.colorMatrixTransform(e, D)
            }, t.exports = r
        }), e.define("/src/js/legacy/soft_focus.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../core/copy");
            o.softFocusConvolution = function(e, t, o, a, i) {
                "undefined" == typeof a && (a = .4), "undefined" == typeof i && (i = 1.25);
                for (var n, l, s, u, f, c, d, h, m = r.copy(e), g = 20, p = [4, 0, -4, 0, -10, 10, -10, 10, -15, 15, 0, 0, -6, 6, -6, 6, 10, -10, 0, 0], v = [0, 4, 0, -4, -10, -10, 10, 10, 0, 0, 15, -15, -6, -6, 6, 6, 0, 0, 10, -10], _ = new Array(g), x = 0, y = 0; g > y; y++)
                    _[y] = Math.exp(-(p[y] * p[y] + v[y] * v[y]) / 100), x += _[y];
                for (y = 0; g > y; y++)
                    _[y] /= x;
                for (var M = 0; o > M; M++)
                    for (var C = 0; t > C; C++) {
                        if (n = 4 * (C + t * M), u = 0, f = 0, c = 0, 20 > M || 20 > C || C > t - 20 || M > o - 20)
                            for (var w = 0; g > w; w++)
                                d = Math.max(0, Math.min(t - 1, C + p[w])), h = Math.max(0, Math.min(o - 1, M + v[w])), l = 4 * (d + t * h), s = _[w], u += s * m[l], f += s * m[l + 1], c += s * m[l + 2];
                        else
                            for (var w = 0; g > w; w++)
                                d = C + p[w], h = M + v[w], l = 4 * (d + t * h), s = _[w], u += s * m[l], f += s * m[l + 1], c += s * m[l + 2];
                        var b, D, S;
                        b = i * a * u + (1 - a) * m[n] + .5 | 0, D = i * a * f + (1 - a) * m[n + 1] + .5 | 0, S = i * a * c + (1 - a) * m[n + 2] + .5 | 0, b > 255 ? b = 255 : 0 > b && (b = 0), D > 255 ? D = 255 : 0 > D && (D = 0), S > 255 ? S = 255 : 0 > S && (S = 0), e[n] = b, e[n + 1] = D, e[n + 2] = S, e[n + 3] = m[n + 3]
                    }
            }, t.exports = o
        }), e.define("/src/js/filters/noise.js", function(e, t) {
            "use strict";
            var o = {}, r = e("../core/rng");
            o.noise = function(e, t, o, a, i) {
                var n, l, s, u, f, c, d = new r.RNG(i);
                if (e.moaGL)
                    return void e.moaGL.renderNoise(a, i);
                for (a *= 255, c = 0; t * o > c; c++)
                    n = 4 * c, f = a * (2 * d.nextFloat() - 1), l = e[n] + f + .5 | 0, s = e[n + 1] + f + .5 | 0, u = e[n + 2] + f + .5 | 0, l = 0 > l ? 0 : l > 255 ? 255 : l, s = 0 > s ? 0 : s > 255 ? 255 : s, u = 0 > u ? 0 : u > 255 ? 255 : u, e[n] = l, e[n + 1] = s, e[n + 2] = u
            }, t.exports = o
        }), e.define("/src/js/filters/fade.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./histogramMapping");
            o.fade = function(e, t) {
                "undefined" == typeof t && (t = 0), t /= 100;
                var o, a = [], i = [];
                for (o = 0; 256 > o; o++) {
                    var n = 1;
                    if (128 > o) {
                        var l = .55 * t;
                        n = 127.5 * Math.pow(o / 255 * 2, 1 + .95 * t), n = (1 - l) * n + .5 * l * 255
                    } else {
                        var l = .3 * t;
                        n = 255 - 127.5 * Math.pow(Math.abs(2 - o / 255 * 2), 1 + .35 * t), n = (1 - l) * n + .5 * l * 255
                    }
                    a[o] = n + .5 | 0
                }
                i.r = a, i.g = a, i.b = a, r.mapHist(e, i)
            }, t.exports = o
        }), e.define("/src/js/filters/exposure.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./histogramMapping");
            o.exposure = function(e, t) {
                "undefined" == typeof t && (t = 0), t /= 100;
                var o, a = [], i = [];
                for (o = 0; 256 > o; o++) {
                    var n = o / 255, l = Math.pow(n, 1 + .15 * Math.abs(t) - Math.abs(t) * Math.pow(n, .2));
                    0 > t && (l = n * (1 - .25 * Math.abs(t)) - .7 * (l - n) * Math.sin(.5 * Math.PI * n)), a[o] = 255 * l + .5 | 0
                }
                i.r = a, i.g = a, i.b = a, r.mapHist(e, i)
            }, t.exports = o
        }), e.define("/src/js/filters/shadows.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./histogramMapping");
            o.shadows = function(e, t) {
                "undefined" == typeof t && (t = 0), t /= 100;
                var o, a = [], i = [];
                for (o = 0; 256 > o; o++) {
                    var n = o / 255, l = -3.68113 + 4.829 * (o / 3 + 1) - .299125 * Math.pow(o / 3 + 1, 2) + .006449275 * Math.pow(o / 3 + 1, 3) - 474531e-10 * Math.pow(o / 3 + 1, 4);
                    if (0 > l && (l = 0), .25 >= t) {
                        var s = t / .25;
                        l = s * l + o
                    } else {
                        var u, s = (t - .25) / .75, f = 34 * s / 255;
                        u = .5 > n ? 255 * ((1 - 2 * f) * n + f) : o, l += u
                    }
                    a[o] = l + .5 | 0, a[o] = a[o] < 0 ? 0 : a[o] > 255 ? 255 : a[o]
                }
                i.r = a, i.g = a, i.b = a, r.mapHist(e, i)
            }, t.exports = o
        }), e.define("/src/js/filters/highlights.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./histogramMapping");
            o.highlights = function(e, t) {
                "undefined" == typeof t && (t = 0), t /= 100;
                var o, a = [], i = [];
                for (o = 0; 256 > o; o++) {
                    var n = o / 255, l = -3.68113 + 4.829 * (o / 3 + 1) - .299125 * Math.pow(o / 3 + 1, 2) + .006449275 * Math.pow(o / 3 + 1, 3) - 474531e-10 * Math.pow(o / 3 + 1, 4);
                    if (0 > l && (l = 0), .25 >= t) {
                        var s = t;
                        l = s * l + o
                    } else {
                        var u, s = (t - .25) / .75, f = 34 * s / 255;
                        u = .5 > n ? 255 * ((1 - 2 * f) * n + f) : o, l = t * l + u
                    }
                    a[255 - o] = 255 - (l + .5 | 0), a[255 - o] = a[255 - o] < 0 ? 0 : a[255 - o] > 255 ? 255 : a[255 - o]
                }
                i.r = a, i.g = a, i.b = a, r.mapHist(e, i)
            }, t.exports = o
        }), e.define("/src/js/filters/intensityMap.js", function(e, t) {
            "use strict";
            var o = {};
            o.mapIntensity = function(e, t, o, r) {
                if (e.moaGL)
                    return void e.moaGL.renderIntensityMap(t, o, r);
                for (var a, i, n, l, s, u, f, c = e.length, d = 0, h = r, m = 1 - r, g = "overlay" === o, p = "multiply" === o; c > d; )
                    a = .212671 * e[d] + .71516 * e[d + 1] + .072169 * e[d + 2] + .5 | 0, g ? (i = e[d], n = e[d + 1], l = e[d + 2], s = t.r[a], u = t.g[a], f = t.b[a], i = 128 >= i ? m * i + 2 * h * i * s / 256 + .5 | 0 : m * i + h * (255 - (255 - (2 * i - 256)) * (255 - s) / 256) + .5 | 0, n = 128 >= n ? m * n + 2 * h * n * u / 256 + .5 | 0 : m * n + h * (255 - (255 - (2 * n - 256)) * (255 - u) / 256) + .5 | 0, l = 128 >= l ? m * l + 2 * h * l * f / 256 + .5 | 0 : m * l + h * (255 - (255 - (2 * l - 256)) * (255 - f) / 256) + .5 | 0, i = 0 > i ? 0 : i > 255 ? 255 : i, n = 0 > n ? 0 : n > 255 ? 255 : n, l = 0 > l ? 0 : l > 255 ? 255 : l, e[d] = i, e[d + 1] = n, e[d + 2] = l) : p ? (i = e[d], n = e[d + 1], l = e[d + 2], s = t.r[a], u = t.g[a], f = t.b[a], i = m * i + h * i * s / 255 + .5 | 0, n = m * n + h * n * u / 255 + .5 | 0, l = m * l + h * l * f / 255 + .5 | 0, i = 0 > i ? 0 : i > 255 ? 255 : i, n = 0 > n ? 0 : n > 255 ? 255 : n, l = 0 > l ? 0 : l > 255 ? 255 : l, e[d] = i, e[d + 1] = n, e[d + 2] = l) : (e[d] = m * e[d] + h * t.r[a], e[d + 1] = m * e[d + 1] + h * t.g[a], e[d + 2] = m * e[d + 2] + h * t.b[a]), d += 4
            }, t.exports = o
        }), e.define("/src/js/filters/gradient.js", function(e, t) {
            "use strict";
            var o = {};
            o.memoizeGradient = function(e, t, o) {
                var r, a, i, n, l, s, u, f, c, d;
                for (u = 0, f = 1, r = 0; o > r; r++) {
                    for (n = 1 - (o - 1 - r) / (o - 1); e.colors[f].location <= 100 * n && "object" == typeof e.colors[f + 1]; )
                        f++, u++;
                    a = (100 * n - e.colors[u].location) / (e.colors[f].location - e.colors[u].location), a = Math.max(0, Math.min(1, a)), a += 9 * (1 + 1.5 * Math.abs(a - .5)) * Math.sin(2 * Math.PI * (a - .5)) / 255, a = Math.max(0, Math.min(1, a)), l = e.colors[u].color, s = e.colors[f].color, i = 1 - a, t[0][r] = Math.max(0, Math.min(255, Math.round(l.r * i + a * s.r))), t[1][r] = Math.max(0, Math.min(255, Math.round(l.g * i + a * s.g))), t[2][r] = Math.max(0, Math.min(255, Math.round(l.b * i + a * s.b)))
                }
                for (u = 0, f = 1, r = 0; o > r; r++) {
                    for (n = 1 - (o - 1 - r) / (o - 1); e.opacities[f].location <= 100 * n && "object" == typeof e.opacities[f + 1]; )
                        f++, u++;
                    a = (100 * n - e.opacities[u].location) / (e.opacities[f].location - e.opacities[u].location), a = Math.max(0, Math.min(1, a)), a += 9 * (1 + 1.5 * Math.abs(a - .5)) * Math.sin(2 * Math.PI * (a - .5)) / 255, a = Math.max(0, Math.min(1, a)), c = e.opacities[u].opacity, d = e.opacities[f].opacity, i = 1 - a, t[3][r] = Math.max(0, Math.min(1, c * i + a * d))
                }
            }, o.applyGradient = function(e, t, r, a, i, n, l, s, u, f, c, d) {
                if ("string" != typeof c && (c = "normal"), "number" != typeof d && (c = 1), 0 != n) {
                    var h = [[], [], [], []], m = 1024;
                    o.memoizeGradient(a, h, m);
                    var g, p, v, _, x, y = f.shapeMode, M = "sharp" === y, C = "ultraSharp" === y, w = "mediumSharp" === y, b = ("undefined" == typeof f.stretch ? !0 : f.stretch, f.dx), D = f.dy, S = f.vignetteScale, P = 1.15, T = Math.pow(S, 2) / P, E = 1 / T, F = t / 2 | 0, L = r / 2 | 0;
                    b *= F, D *= L;
                    var A, R, I, O, B, N, U, k, j, G, X, W, V, z, Y = 5 / 3, H = 34 / 45, q = 13 / 63, Z = 514 / 14175, $ = d, Q = "overlay" === c, K = "multiply" === c, J = "linear" === i, et = "linearVignette" === i, tt = "radial" === i;
                    X = W = V = 0;
                    var ot = Math.sin(u), rt = Math.cos(u);
                    if (e.moaGL)
                        return void e.moaGL.renderGradient(f, h, c, d, ot, rt, E);
                    for (U = 0; r > U; U++)
                        for (A = (U / r - s) / n, N = 0; t > N; N++)
                            I = 4 * (U * t + N), R = (N / t - l) / n, J ? O = rt * R - ot * A : tt ? O = Math.sqrt(R * R + A * A) : et && (O = rt * R - ot * A, g = ((N - F - b) * (N - F - b) / t / t + (U - L - D) * (U - L - D) / r / r) * E, M && (g *= g), C && (g *= g, g *= g), w && (g = Math.pow(g, 1.5)), g > P ? d = $ : .04 > g ? d = 0 : (p = g * g, v = p * p, _ = v * p, x = _ * p, d = $ * (1 - (1 - 2 * p + Y * v - H * _ + q * x - Z * x * p)))), O = 0 > O ? 0 : O > 1 ? 1 : O, X = h[0][O * (m - 1) + .5 | 0], W = h[1][O * (m - 1) + .5 | 0], V = h[2][O * (m - 1) + .5 | 0], z = h[3][O * (m - 1) + .5 | 0], O = z * d, B = 1 - O, k = e[I], j = e[I + 1], G = e[I + 2], Q ? (k = 128 >= k ? B * k + 2 * O * k * X / 256 + .5 | 0 : B * k + O * (255 - (255 - (2 * k - 256)) * (255 - X) / 256), j = 128 >= j ? B * j + 2 * O * j * W / 256 + .5 | 0 : B * j + O * (255 - (255 - (2 * j - 256)) * (255 - W) / 256), G = 128 >= G ? B * G + 2 * O * G * V / 256 + .5 | 0 : B * G + O * (255 - (255 - (2 * G - 256)) * (255 - V) / 256)) : K ? (k = B * k + O * X * k / 255, j = B * j + O * W * j / 255, G = B * G + O * V * G / 255) : (k = B * k + X * O, j = B * j + W * O, G = B * G + V * O), k = k + .5 | 0, j = j + .5 | 0, G = G + .5 | 0, k = k > 255 ? 255 : 0 > k ? 0 : k, j = j > 255 ? 255 : 0 > j ? 0 : j, G = G > 255 ? 255 : 0 > G ? 0 : G, e[I] = k, e[I + 1] = j, e[I + 2] = G
                }
            }, t.exports = o
        }), e.define("/src/js/filters/gradientFlare.js", function(e, t) {
            "use strict";
            function o(e, t) {
                var o = [];
                return o[0] = e[0] * t[0] + e[1] * t[4] + e[2] * t[8] + e[3] * t[12], o[1] = e[0] * t[1] + e[1] * t[5] + e[2] * t[9] + e[3] * t[13], o[2] = e[0] * t[2] + e[1] * t[6] + e[2] * t[10] + e[3] * t[14], o[3] = e[0] * t[3] + e[1] * t[7] + e[2] * t[11] + e[3] * t[15], o[4] = e[4] * t[0] + e[5] * t[4] + e[6] * t[8] + e[7] * t[12], o[5] = e[4] * t[1] + e[5] * t[5] + e[6] * t[9] + e[7] * t[13], o[6] = e[4] * t[2] + e[5] * t[6] + e[6] * t[10] + e[7] * t[14], o[7] = e[4] * t[3] + e[5] * t[7] + e[6] * t[11] + e[7] * t[15], o[8] = e[8] * t[0] + e[9] * t[4] + e[10] * t[8] + e[11] * t[12], o[9] = e[8] * t[1] + e[9] * t[5] + e[10] * t[9] + e[11] * t[13], o[10] = e[8] * t[2] + e[9] * t[6] + e[10] * t[10] + e[11] * t[14], o[11] = e[8] * t[3] + e[9] * t[7] + e[10] * t[11] + e[11] * t[15], o[12] = e[12] * t[0] + e[13] * t[4] + e[14] * t[8] + e[15] * t[12], o[13] = e[12] * t[1] + e[13] * t[5] + e[14] * t[9] + e[15] * t[13], o[14] = e[12] * t[2] + e[13] * t[6] + e[14] * t[10] + e[15] * t[14], o[15] = e[12] * t[3] + e[13] * t[7] + e[14] * t[11] + e[15] * t[15], o
            }
            function r(e) {
                var t = [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]];
                return t
            }
            function a(e, t, a, i) {
                var n = r(e);
                "number" != typeof i && (i = 0);
                var l = [1, 0, 0, t, 0, 1, 0, a, 0, 0, 1, i, 0, 0, 0, 1];
                return n = o(n, l)
            }
            function i(e, t, r) {
                var i = a(e, .5, .5), n = [t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                return i = o(i, n), i = a(i, -.5, -.5)
            }
            var n = {}, l = e("./gradient"), s = e("./blendWithBitmap"), u = e("../core/enums");
            n.gradientFlare = function(t, o, r, a) {
                var i = e("../core/copy"), u = 1024, f = [[], [], [], []];
                l.memoizeGradient(a.gradient, f, u);
                var c, d = "true" === a.invertGradient, h = i.makeData(4 * u);
                for (c = 0; u > c; c++)
                    d ? (h[4 * c] = f[0][u - 1 - c] + .5 | 0, h[4 * c + 1] = f[1][u - 1 - c] + .5 | 0, h[4 * c + 2] = f[2][u - 1 - c] + .5 | 0, h[4 * c + 3] = 255 * f[3][u - 1 - c] + .5 | 0) : (h[4 * c] = f[0][c] + .5 | 0, h[4 * c + 1] = f[1][c] + .5 | 0, h[4 * c + 2] = f[2][c] + .5 | 0, h[4 * c + 3] = 255 * f[3][c] + .5 | 0);
                var m = i.makeData(t.length), g = {gradientTransform: a.gradientTransform.slice(0),gradientShapeType: a.gradientShapeType,gradientParams: a.gradientParams.slice(0),aspectMode: a.aspectMode,gradientWrapMode: a.gradientWrapMode};
                g.gradMapLength = u, g.gradientGradMap = h, n.renderShape(m, m, o, r, g), s.blendWithBitmap(t, t, m, o, r, a.blendMode, a.alpha)
            }, n.copyAlpha = function(e, t) {
                var o, r = e.length;
                for (o = 0; r > o; o += 4)
                    e[o + 3] = t[o + 3]
            }, n.renderShape = function(e, t, o, a, n) {
                var l, s, f, c, d, h, m, g = n.gradMapLength, p = (n.isMask, n.gradientGradMap);
                m = u.getShapeModeIndex(n.gradientShapeType), d = r(n.gradientTransform), h = n.gradientParams;
                var f, c, v, _, x, y, M, C, w, b, D, S, P, T, E, F, L = "repeat" == n.gradientWrapMode, A = "mirroredRepeat" == n.gradientWrapMode, R = 1 / g / 100, I = Math.log(R), O = 0;
                if ("stretch" == n.aspectMode)
                    d[3] -= .5, d[7] -= .5;
                else if ("average" == n.aspectMode) {
                    d[3] -= .5, d[7] -= .5;
                    var B = (o + a) / 2;
                    d = i(d, o / B, a / B)
                } else if ("fill" == n.aspectMode) {
                    d[3] -= .5, d[7] -= .5;
                    var N = Math.max(o, a);
                    d = i(d, o / N, a / N)
                } else if ("fit" == n.aspectMode) {
                    d[3] -= .5, d[7] -= .5;
                    var U = Math.min(o, a);
                    d = i(d, o / U, a / U)
                }
                if (6 == m || 7 == m || 8 == m)
                    var k = Math.floor(h[0]), j = h[1], G = h[2];
                if (10 == m)
                    var k = Math.max(1, Math.floor(h[0]));
                if (14 == m)
                    var X = Math.round(h[1]);
                for (s = 0; a > s; s++)
                    for (c = s / (a - 1), v = d[1] * c + d[3], _ = d[5] * c + d[7], C = 4 * o * s, l = 0; o > l; l++) {
                        if (w = C + 4 * l, f = l / (o - 1), x = v + d[0] * f, y = _ + d[4] * f, 12 == m)
                            M = .5 + .5 * Math.sin(x + 2 * h[0] * Math.sin(y));
                        else if (1 == m)
                            M = .5 + .5 * x;
                        else if (5 == m) {
                            var W = h[0];
                            M = 0 == W ? Math.max(x, y) : Math.pow(Math.pow(Math.abs(x), W) + Math.pow(Math.abs(y), W), 1 / W)
                        } else if (2 == m)
                            M = Math.sqrt(x * x + y * y);
                        else if (3 == m) {
                            var V = h[0] * ((y - h[2]) * (y - h[2]) + (x - h[3]) * (x - h[3])) + h[1] * (y - h[4]) * (y - h[4]) * (x - h[5]) * (x - h[5]);
                            M = I > V ? 0 : V > O ? 1 : Math.exp(V)
                        } else if (4 == m)
                            M = Math.max(Math.abs(x), Math.abs(y));
                        else if (6 == m) {
                            var z = x * x + y * y, Y = Math.atan2(y, x);
                            M = z * z * Math.sin(k * Y / 2)
                        } else if (7 == m) {
                            var z = x * x + y * y, Y = Math.atan2(y, x);
                            M = 1 - .5 * Math.exp(-z) * (1 + Math.sin(Y * k))
                        } else if (8 == m) {
                            var z = x * x + y * y, Y = Math.atan2(y, x);
                            M = 1 - (1 - Math.sin(j * z + Math.PI / 2) * Math.sin(G * z + Math.PI / 2) * Math.sin(k * Y / 2 + Math.PI / 2))
                        } else if (9 == m) {
                            var z = x * x + y * y, H = Math.sqrt(z), q = -y / H, Z = x / H, $ = Z;
                            0 > Z && ($ = -Z);
                            var Q = 2 - 2 * q + h[0] * q * Math.sqrt($) / (q + h[1]);
                            M = H - Q
                        } else if (10 == m) {
                            var z = x * x + y * y, H = Math.sqrt(z), K = Math.PI / k, Y = 2 * Math.PI - Math.atan2(y, x) - Math.PI / 2, J = 1, et = h[2], tt = 0, D = Y / K - (Y / K | 0);
                            if ((Y / K | 0) % 2 == 0)
                                var ot = K / 2, rt = Math.PI - D - ot, at = J * Math.sin(ot) / Math.sin(rt);
                            else {
                                D = 1 - D;
                                var ot = K / 2, rt = Math.PI - D - ot, at = J * Math.sin(ot) / Math.sin(rt)
                            }
                            var tt = et + (J - et) * ((1 - h[1]) * at + h[1] * (1 - D));
                            M = H - tt
                        } else if (11 == m) {
                            var it = 1, nt = h[1], lt = h[0] * (it + nt), H = Math.sqrt(x * x + y * y), st = Math.sqrt((x - lt) * (x - lt) + y * y), M = 1;
                            if (st >= nt && H >= it)
                                M = 1;
                            else if (nt >= st && it >= H)
                                M = 1;
                            else if (nt >= st && H > it)
                                M = 1;
                            else {
                                M = H / it;
                                var ut = 1 - H / it, ft = st / nt - 1;
                                M = 1 - Math.min(ut, ft)
                            }
                        } else if (0 == m)
                            M = 1;
                        else if (13 == m) {
                            var Y = 2 * (x - Math.floor(h[0] + x));
                            M = 0 > Y ? y + Y / h[0] : y - Y / (1 - h[0])
                        } else if (14 == m) {
                            var ct = x * x + y * y, dt = Math.atan2(y, x);
                            M = Math.sqrt(ct) + dt * X / 2 / Math.PI
                        } else
                            M = 0;
                        L ? M -= Math.floor(M) : A && (Math.floor(M) % 2 != 0 ? (M -= Math.floor(M), M = 1 - M) : M -= Math.floor(M)), M = 0 > M ? 0 : M > 1 ? 1 : M, b = (g - 1) * M, D = b - (0 | b), S = 1 - D, b = 4 * (0 | b), 0 != D ? (P = S * p[0 + b] + D * p[4 + b], T = S * p[1 + b] + D * p[5 + b], E = S * p[2 + b] + D * p[6 + b], F = S * p[3 + b] + D * p[7 + b]) : (P = p[0 + b], T = p[1 + b], E = p[2 + b], F = p[3 + b]), e[w] = P, e[w + 1] = T, e[w + 2] = E, e[w + 3] = F
                    }
            }, t.exports = n
        }), e.define("/src/js/filters/gradientMap.js", function(e, t) {
            "use strict";
            var o = {}, r = e("./gradient"), a = e("./blendWithBitmap");
            o.gradientMap = function(t, i, n, l) {
                var s = 256, u = [[], [], [], []];
                r.memoizeGradient(l.gradient, u, s);
                var f, c;
                f = "undefined" != typeof Uint8Array ? new Uint8Array(4 * s) : [];
                var d;
                for (d = 0; d < u[0].length; d++)
                    f[4 * d] = u[0][d] + .5 | 0, f[4 * d + 1] = u[1][d] + .5 | 0, f[4 * d + 2] = u[2][d] + .5 | 0, f[4 * d + 3] = 255 * u[3][d] + .5 | 0;
                if (t.moaGL) {
                    var h;
                    h = "true" === l.invertGradient ? 1 : 0;
                    var m = {transformGradient: l.gradientTransform,transformMask: l.maskTransform,noiseType: t.moaGL.getNoiseTypeIndex(l.gradientShapeType),noiseTypeMask: t.moaGL.getNoiseTypeIndex(l.maskShapeType),invert: h,params: l.gradientParams,paramsMask: l.maskParams,blendMode: enums.getBlendModeIndex(l.blendMode),aspectMode: t.moaGL.getAspectModeIndex(l.aspectMode),alpha: l.alpha,gradMap: f,gradMapMask: c,invertMask: invertMask};
                    return void t.moaGL.renderGradientFlare(m)
                }
                var g = e("../core/copy"), p = g.copy(t);
                o.applyGradientmap(p, t, i, n, l, s, f), a.blendWithBitmap(t, t, p, i, n, l.blendMode, l.alpha)
            }, o.applyGradientmap = function(e, t, o, r, a, i, n) {
                for (var l = a.gradientVariable, s = "true" === a.invertGradient, u = 0; u < t.length; ) {
                    var f, c = t[u], d = t[u + 1], h = t[u + 2];
                    f = "intensity" == l ? .2 * c + .7 * d + .1 * h : "chroma" == l ? Math.max(c, d, h) - Math.min(c, d, h) : "redChannel" == l ? c : "greenChannel" == l ? d : "blueChannel" == l ? h : "maxChannel" == l ? Math.max(c, d, h) : "minChannel" == l ? Math.min(c, d, h) : 0;
                    var m = f;
                    s && (m = 255 - m), m = 0 > m ? 0 : m > 255 ? 255 : m, m = (i - 1) * (m / 255);
                    var g = m % 1;
                    if (m = Math.round(m), m *= 4, 1020 == m)
                        var p = n[m], v = n[m + 1], _ = n[m + 2], x = n[m + 3] / 255;
                    else {
                        var p = (1 - g) * n[m] + g * n[m + 4], v = (1 - g) * n[m + 1] + g * n[m + 5], _ = (1 - g) * n[m + 2] + g * n[m + 6], x = (1 - g) * n[m + 3] + g * n[m + 7];
                        x /= 255
                    }
                    e[u] = x * p + (1 - x) * c, e[u + 1] = x * v + (1 - x) * d, e[u + 2] = x * _ + (1 - x) * h, e[u + 3] = t[u + 3], u += 4
                }
            }, o.copyAlpha = function(e, t) {
                var o, r = e.length;
                for (o = 0; r > o; o += 4)
                    e[o + 3] = t[o + 3]
            }, t.exports = o
        }), e.define("/src/js/filters/halftone.js", function(e, t) {
            "use strict";
            function o(e, t, o) {
                var r, a, i, n = 30, l = 500, s = 1, u = 40, f = [], c = [];
                for (a = i = [], M = 0; l > M; M++)
                    r = 4 * (Math.floor(Math.random() * t * 1 / 2 + 1 * t / 4) + t * Math.floor(Math.random() * o * 1 / 2 + 1 * o / 4)), i[0] = e[r], i[1] = e[r + 1], i[2] = e[r + 2], c[M] = i, n > M && (f[M] = c[M]);
                for (var d, h, m, g, p = !0, v = 1, _ = [], x = [], y = 0; p && u > v; ) {
                    v++, p = !1;
                    for (var M = 0; l > M; M++) {
                        for (g = 195075e6, d = 0, C = 0; n > C; C++)
                            m = Math.abs(Math.abs(c[M][1] - f[C][1])), g > m && (g = m, d = C);
                        "undefined" == typeof _[d] && (_[d] = []), _[d].push(M), f[d][3] = _[d].length
                    }
                    for (var C = 0; n > C; C++)
                        if (x = [0, 0, 0, f[C][3]], "undefined" != typeof _[C] && 0 != _[C].length) {
                            for (var w = 0; w < _[C].length; w++)
                                h = c[_[C][w]], x[0] += h[0], x[1] += h[1], x[2] += h[2];
                            _[C].length && (x[0] /= _[C].length, x[1] /= _[C].length, x[2] /= _[C].length), y = x, Math.pow(f[C][0] - y[0], 2) > s && Math.pow(f[C][1] - y[1], 2) > s && Math.pow(f[C][2] - y[2], 2) > s && (p = !0), f[C] = x
                        } else
                            _[C] = []
                }
            }
            {
                var r = {};
                e("../core/copy"), e("../core/enums"), e("./blendWithBitmap"), e("./blendWithColor"), e("./colorMatrixTransform"), e("./sharpness")
            }
            r.halftone = function(e, t, o, a) {
                return e.moaGL ? !0 : void r.dotsOnePass(e, t, o, a)
            }, r.magazine = function(e, t, o, a) {
                return e.moaGL ? !0 : void r.dotsOnePass(e, t, o, a)
            }, r.dotsOnePass = function(e, t, r, a) {
                return void o(e, t, r, a)
            };
            t.exports = r
        }), e.define("/proclist/src/js/FeatherEntry.coffee", function(e) {
            (function() {
                var t, o, r, a, i, n, l, s, u, f, c, d, h, m;
                n = e("../../../src/js/webgl/moaGL_bundle"), i = e("../../../src/js/filters/enhance"), h = e("../../../src/js/legacy/whiten2"), s = e("../../../src/js/legacy/redeye2"), f = e("../../../src/js/legacy/selectiveblur"), r = e("../../../src/js/mask-draw/colorsplash"), t = e("../../../src/js/filters/adjustments"), a = e("../../../src/js/mask-draw/drawtool"), d = e("../../../src/js/mask-draw/tiltshift"), o = e("../../../src/js/mask-draw/blemish"), u = e("../../../src/js/mask-draw/redeye"), m = e("../../../src/js/mask-draw/whiten"), c = e("../../../src/js/mask-draw/spraytan"), c = e("../../../src/js/mask-draw/shinereduce"), c = e("../../../src/js/mask-draw/blush"), c = e("../../../src/js/mask-draw/lipstick"), c = e("../../../src/js/mask-draw/mascara"), l = e("./MoaLiteProclistManager"), void 0 !== typeof Aviary && (Aviary.require = e)
            }).call(this)
        }), e("/proclist/src/js/FeatherEntry.coffee")
    }(), "undefined" == typeof e && (e = {}), e.Actions = function() {
        return this.actionList = [], this.index = -1, this
    }, e.Actions.prototype.undoImplicitActions = function() {
        for (; this.index >= 0 && this.actionList[this.index][2].implicit === !0 && !this.isACheckpoint(); ) {
            var e = this.actionList[this.index][0], t = e[0], o = e[1], r = e[2];
            t.apply(o, r), this.index--
        }
    }, e.Actions.prototype.canUndo = function() {
        if (e.featherGLEnabled)
            return !1;
        if (e.launchData.forceCropPreset && this.index <= 1)
            return !1;
        var t = this.index >= 0;
        return 0 === this.index && this.actionList[0][2].implicit === !0 && (t = !1), t
    }, e.Actions.prototype.undo = function() {
        var t, o, r, a, i;
        if (!(this.index < 0 || this.isACheckpoint())) {
            do
                e.paintWidgetInstance && (e.paintWidgetInstance.dirty = !0), t = this.actionList[this.index][0], t && (o = t[0], r = t[1], a = t[2], o.apply(r, a)), this.index > 0 ? (i = this.actionList[this.index - 1][3], i && this.setDims(i.hiresWidth || i.width, i.hiresHeight || i.height)) : this.setDims(this._origHiresWidth, this._origHiresHeight), this.index--;
            while (this.index >= 0 && !this.isACheckpoint() && this.actionList[this.index][2].implicit === !0);
            e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [this.canUndo(), this.canRedo()])
        }
    }, e.Actions.prototype.undoFake = function() {
        var t;
        this.index < 0 || this.isACheckpoint() || (e.paintWidgetInstance && (e.paintWidgetInstance.dirty = !0), this.index > 0 ? (t = this.actionList[this.index - 1][3], t && this.setDims(t.hiresWidth || t.width, t.hiresHeight || t.height)) : this.setDims(this._origHiresWidth, this._origHiresHeight), this.index--, e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [this.canUndo(), this.canRedo()]))
    }, e.Actions.prototype.undoToCheckpoint = function() {
        var t, o, r, a, i;
        if (!(this.index < 0)) {
            e.paintWidgetInstance && (e.paintWidgetInstance.dirty = !0);
            do
                t = this.actionList[this.index][0], o = t[0], r = t[1], a = t[2], o.apply(r, a), this.index > 0 ? (i = this.actionList[this.index - 1][3], i && this.setDims(i.hiresWidth || i.width, i.hiresHeight || i.height)) : this.setDims(this._origHiresWidth, this._origHiresHeight), this.index--;
            while (this.index >= 0 && !this.isACheckpoint());
            e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [this.canUndo(), this.canRedo()])
        }
    }, e.Actions.prototype.canRedo = function() {
        return e.featherGLEnabled ? !1 : this.index < this.actionList.length - 1
    }, e.Actions.prototype.redo = function() {
        var t, o, r, a, i;
        if (!(this.index >= this.actionList.length - 1)) {
            do
                e.paintWidgetInstance && (e.paintWidgetInstance.dirty = !0), this.index++, t = this.actionList[this.index][1], t && (o = t[0], r = t[1], a = t[2], o.apply(r, a), i = this.actionList[this.index][3], i && this.setDims(i.hiresWidth || i.width, i.hiresHeight || i.height));
            while (this.index < this.actionList.length - 1 && this.actionList[this.index][2].implicit === !0);
            e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [this.canUndo(), this.canRedo()])
        }
    }, e.Actions.prototype.redoFake = function() {
        var t, o;
        this.index >= this.actionList.length - 1 || (e.paintWidgetInstance && (e.paintWidgetInstance.dirty = !0), t = this.actionList[this.index + 1], t && (o = t[3], o && this.setDims(o.hiresWidth || o.width, o.hiresHeight || o.height)), this.index++, e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [this.canUndo(), this.canRedo()]))
    }, e.Actions.prototype.redoToCheckpoint = function() {
        var t, o, r, a, i, n, l = !1;
        if (this.index >= this.actionList.length - 1)
            return !0;
        n = this.index;
        do
            n++, l = this.isACheckpoint(n);
        while (!l && n < this.actionList.length - 1);
        if (!l)
            return !1;
        e.paintWidgetInstance && (e.paintWidgetInstance.dirty = !0);
        do
            this.index++, t = this.actionList[this.index][1], t && (o = t[0], r = t[1], a = t[2], o.apply(r, a), i = this.actionList[this.index][3], this.setDims(i.hiresWidth || i.width, i.hiresHeight || i.height));
        while (this.index < this.actionList.length - 1 && !this.isACheckpoint());
        return e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [this.canUndo(), this.canRedo()]), !0
    }, e.Actions.prototype.push = function(e, t, o, r, a) {
        a = a || {};
        var i;
        this.truncate(!0), i = r || this.getDims(), this.actionList.push([e, t, a, i, o])
    }, e.Actions.prototype.setCheckpoint = function(e) {
        this.index < 0 || (this.actionList[this.index][2].checkpoint = e)
    }, e.Actions.prototype.isACheckpoint = function(e) {
        return e = void 0 !== e ? e : this.index, this.actionList[e] ? !!this.actionList[e][2].checkpoint : !1
    }, e.Actions.prototype.isImplicit = function(e) {
        this.index < 0 || (this.actionList[this.index][2].implicit = e)
    }, e.Actions.prototype.truncate = function(t) {
        this.actionList.length = this.index + 1, !t && e.controlsWidgetInstance && e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "updateUndoRedo", [this.canUndo(), this.canRedo()])
    }, e.Actions.prototype.getDims = function() {
        var t = null;
        return e.paintWidgetInstance && (t = t || {}, t.width = e.paintWidgetInstance.width, t.height = e.paintWidgetInstance.height), this.hiresWidth && this.hiresHeight && (t = t || {}, t.hiresWidth = this.hiresWidth, t.hiresHeight = this.hiresHeight), t
    }, e.Actions.prototype.setDims = function(t, o) {
        (this.hiresWidth != t || this.hiresHeight != o) && (this.hiresWidth = t, this.hiresHeight = o, e.controlsWidgetInstance && e.controlsWidgetInstance.imageSizeTracker.setImageScaledIndicator())
    }, e.Actions.prototype.setOrigSize = function(e, t) {
        this._origHiresWidth = e, this._origHiresHeight = t, this.setDims(e, t)
    }, e.Actions.prototype.exportJSON = function(t) {
        var o, r;
        if (e.paintWidgetInstance) {
            var a = e.paintWidgetInstance.getOrigSize();
            o = a.width, r = a.height
        }
        var i, n, l, s, u, f, c, d, h, m, g, p = {metadata: {imageorigsize: [o, r]}}, v = [];
        if (e.isRelaunched && e.prevActionList) {
            var _ = JSON.parse(e.prevActionList);
            _ && (v = _.actionlist.slice())
        }
        for (v.push({action: "setfeathereditsize",width: o,height: r}), l = 0; l < this.index + 1; l++)
            if (i = this.actionList[l], n = i[4])
                if (void 0 == n.length)
                    v.push(n);
                else
                    for (s = 0; s < n.length; s++)
                        v.push(n[s]);
        if (t) {
            for (f = {}, u = [], u.length = v.length, l = 0; l < v.length; l++)
                switch (i = e.util.extend({}, v[l]), c = i.action) {
                    case "addsticker":
                    case "addtext":
                        d = i.id, f[d] = l, u[l] = i;
                        break;
                    case "setsticker":
                        d = i.id, h = v[f[d]], m = {}, m.action = h.action, m.url = h.url, m.urls = h.urls, m.size = h.size, m.external = h.external, m.id = h.id, m.center = i.center, m.scale = i.scale, m.rotation = i.rotation, u[l] = m;
                        break;
                    case "settext":
                        d = i.id, h = v[f[d]], m = {}, m.action = h.action, m.id = h.id, m.text = h.text, m.font = h.font, m.size = h.size, m.color = h.color, m.shadowcolor = h.shadowcolor, m.center = i.center, m.scale = i.scale, m.rotation = i.rotation, u[l] = m;
                        break;
                    default:
                        u[l] = i
                }
            for (g = {}, l = u.length - 1; l >= 0; l--)
                if (i = u[l], c = i.action, 0 !== Object.keys(i).length)
                    switch (c) {
                        case "deletetext":
                        case "deletesticker":
                            d = i.id, g[d] = !0, u.splice(l, 1);
                            break;
                        case "addtext":
                        case "addsticker":
                            d = i.id, g[d] ? u.splice(l, 1) : g[d] = !0, delete i.id
                    }
                else
                    u.splice(l, 1);
            p.actionlist = u
        } else
            p.actionlist = v;
        if (p && p.actionlist && p.actionlist.length)
            for (var x = p.actionlist, l = 0; l < x.length; l++)
                if ("addsticker" == x[l].action && x[l].url && 0 == x[l].url.indexOf("https://")) {
                    x[l].url = x[l].url.replace("https://", "http://");
                    for (var y = 0; y < x[l].urls.length; y++)
                        x[l].urls[y] = x[l].urls[y].replace("https://", "http://")
                }
        var M = {};
        p.resources || (p.resources = []);
        var c;
        if (p && p.actionlist && p.actionlist.length)
            for (var x = p.actionlist, l = 0; l < x.length; l++)
                switch (x[l].action) {
                    case "addsticker":
                    case "effects":
                    case "frames":
                    case "imageborders":
                        x[l].packIdentifier && !M[x[l].packIdentifier] && (p.resources.push(x[l].packIdentifier), M[x[l].packIdentifier] = !0)
                }
        return p.version = "2.0.0", e.JSON.stringify(p)
    }, e.Actions.prototype.importJSON = function(t, o) {
        if (!t)
            return o && o(), !1;
        if (!e.paintWidgetInstance)
            return o && o(), !1;
        var r, a, i, n = [], l = this;
        try {
            r = e.JSON.parse(t), r && (n = r.actionlist)
        } catch (s) {
            return o && o(), !1
        }
        i = n.length;
        var u = {labcorrect: !0,backlightenhance: !0,nightenhance: !0,autoenhance: !0}, f = function(e) {
            var t = e.action;
            for (var o in u)
                if (o === t)
                    return e.id = t, e.action = "enhance", !0;
            return !1
        }, c = function(t) {
            f(t);
            var o = t.action;
            switch (o) {
                case "addsticker":
                    o = "overlay";
                    break;
                case "addtext":
                    o = t.align ? "textwithfont" : "text";
                    break;
                case "tools":
                    o = t.toolname, "tiltshift" == o && (o = "focus");
                    break;
                case "rotate":
                    o = "straighten";
                    break;
                case "colortemp":
                    o = "warmth";
                    break;
                case "sharpness":
                    o = "sharpen";
                    break;
                case "redeye2":
                    o = "redeye";
                    break;
                case "whiten2":
                    o = "whiten";
                    break;
                case "selectiveblur":
                    o = "blemish";
                    break;
                case "imageborders":
                    o = "frames"
            }
            e.paintWidgetInstance.module[o] && e.paintWidgetInstance.module[o].readAction ? e.paintWidgetInstance.moduleLoaded(o, function() {
                e.paintWidgetInstance.setMode(o), e.paintWidgetInstance.module[o].readAction.apply(this, [t, d])
            }) : d()
        }, d = function() {
            l.setCheckpoint(!0), a++, i > a ? c(n[a]) : (o && o(), e.paintWidgetInstance.setMode(null))
        };
        return a = 0, d(), !0
    }, e.FilterManager = function() {
        var t = {}, o = {}, r = this, a = [], i = {};
        r.getPacksById = function() {
            return i
        }, r.getPacksInOrder = function() {
            return a
        };
        var n = function(e, r) {
            var n, l, s, u;
            if (r)
                for (n = 0; n < r.length; n++)
                    if (l = r[n], a.push(l), i[l.identifier] = l, l) {
                        if (s = l.items) {
                            o[e] = s, u = s.length;
                            for (var f = 0; u > f; f++)
                                t[s[f].identifier] = s[f], t[s[f].identifier].packIdentifier = r[n].identifier
                        }
                        break
                    }
        };
        return r.getEffectById = function(e) {
            return t[e]
        }, r.getClickableFiltersForPack = function(e) {
            return o[e]
        }, r.loadPack = function(t, o, r, a) {
            e.controlsWidgetInstance.serverMessaging.sendMessage({id: "avpw_get_assets" + a,action: o,method: "GET",dataType: "json",announcer: e.build.asyncFeatherTargetAnnounce,origin: e.build.asyncImgrecvBase,callback: function(e) {
                n(t, [e]), r && r.call(this)
            }})
        }, r
    }, function(e) {
        e.AV = e.AV || {};
        var t = e.AV;
        return t.ImageBorderManager = function() {
            var e = {}, o = {}, r = this, a = [], i = {};
            r.getPacksById = function() {
                return i
            }, r.getPacksInOrder = function() {
                return a
            };
            var n = function(r, n) {
                var l, s, u, f;
                if (n) {
                    for (l = 0; l < n.length; l++)
                        for (i[n[l].identifier] = n[l], a.push(n[l]), o[r] = n[l], u = n[l].items.length, s = 0; u > s; s++)
                            f = n[l].items[s], e[f.identifier] = f, e[f.identifier].packIdentifier = n[l].identifier, e[f.identifier].safeAssetsBaseURL = t.util.getSafeAssetBaseURL(n[l].assetsBaseURL);
                    n.splice(0, l + 1)
                }
            };
            return r.getEffectById = function(t) {
                return e[t]
            }, r.getClickableFiltersForPack = function(e) {
                return o[e]
            }, r.tileBorder = function(e, o, a) {
                t.controlsWidgetInstance.showWaitThrobber(!0);
                for (var i = r.getEffectById(e), n = i.images, l = new Image, s = new Image, u = new Image, f = new Image, c = new Image, d = new Image, h = new Image, m = new Image, g = ["tl", "tr", "br", "bl", "l", "t", "r", "b"], p = [l, s, u, f, c, d, h, m], v = [], _ = {}, x = 0; x < g.length; x++) {
                    var y = g[x];
                    _[y] = {w: 512,h: 512,img: p[x]}, v.push({img: p[x],src: i.safeAssetsBaseURL + n[y],mappingObject: _[y]})
                }
                t.util.loadImagesSync(v, function() {
                    o && o.apply(this, [_]), t.controlsWidgetInstance.showWaitThrobber(!1)
                }, a)
            }, r.loadPack = function(e, o, r, a) {
                t.controlsWidgetInstance.serverMessaging.sendMessage({id: "avpw_get_assets" + a,action: o,method: "GET",dataType: "json",announcer: t.build.asyncFeatherTargetAnnounce,origin: t.build.asyncImgrecvBase,callback: function(t) {
                    n(e, [t]), r && r.call(this)
                }})
            }, r
        }, e
    }(this), e.OverlayRegistry = function() {
        var t = {}, r = function(t, r) {
            var i = t, n = o.createElement("img");
            n.fullimageurl = i;
            var l = function(e) {
                avpw$(n).unbind("load", l), a.addElement(t, n), r && r.apply(this, [e])
            };
            avpw$(n).load(l), avpw$.support.cors && "Microsoft Internet Explorer" != navigator.appName ? (n.crossOrigin = "Anonymous", avpw$(n).attr("src", t)) : avpw$.ajax({type: "GET",dataType: "json",url: e.build.jsonp_imgserver + "?callback=?",data: {url: escape(t)},success: function(e) {
                avpw$(n).attr("src", e.data)
            }})
        }, a = this;
        return a.add = function(e, o, r) {
            t[e] || (t[e] = {}), o && (t[e].hiresurl = o), r && (t[e].asset = r)
        }, a.addElement = function(e, o) {
            t[e] || a.add(e), t[e].element = o
        }, a.getElement = function(e, o) {
            var a = null;
            return t[e] && t[e].element ? (a = t[e].element, o && o.apply(this, [a])) : o && r(e, o), a
        }, a.getHiRes = function(e) {
            return t[e].hiresurl
        }, a.getAsset = function(e) {
            return t[e].asset
        }, a
    };
    var r = e.Events;
    e.ModeManager = function() {
        var e = this, t = function(t) {
            if (e.setCurrentLayerByName("background"), e.uiLayerShow(!1), null !== e.active && void 0 !== e.active.deactivate && e.active.deactivate(), null !== t && void 0 !== t && "" !== t) {
                var o = e.module[t];
                void 0 !== o && (e.active = o, void 0 !== e.active.activate && e.active.activate(e))
            } else
                e.active = null
        }, o = function(o) {
            o && (e = o), r.on("canvas:activate", t)
        }, a = function() {
            r.off("canvas:activate", t)
        }, i = {};
        return i.init = o, i.shutdown = a, i
    }, function(e, t, o) {
        e.AV = e.AV || {};
        var r = e.AV, a = r.Events;
        return function(e) {
            e.support.touch = e.support.touch || "ontouchend" in o
        }(avpw_jQuery), r.PaintUI = function(e, o) {
            var i, n = avpw$(e), l = avpw$(o), s = {}, u = ["mouseOutEvent", "mouseMoveEvent", "mouseDownEvent", "mouseUpEvent"], f = !0, c = 30, d = !0, h = !1, m = this, g = function() {
            }, p = function(e) {
                i = i || n.offset();
                var t, o, a, l, s, u;
                return "internal" == e.type ? (t = e.x, o = e.y) : (s = r.util.getTouch(e), s ? (t = s.pageX, o = s.pageY) : (t = e.pageX, o = e.pageY)), a = t - i.left, l = o - i.top, canvasControlsX = a, canvasControlsY = l, u = m.viewport.getRatio(), a *= u, l *= u, {x: 0 | t,y: 0 | o,canvasX: 0 | a,canvasY: 0 | l,canvasControlsX: canvasControlsX,canvasControlsY: canvasControlsY}
            }, v = function(e, t) {
                var o = m.viewport.getRatio(), r = n.offset(), a = r.left, i = a + n.width() / o, l = r.top, s = l + n.height() / o;
                return e > a && i > e && t > l && s > t
            };
            m.enablePan = function() {
                d = !0, m.viewport.clearAvailablePanDirections(), m.viewport.pan()
            }, m.disablePan = function() {
                d = !1, m.hidePan()
            }, m.showPan = function() {
                d && m.addCanvasClass("avpw_can_pan")
            }, m.hidePan = function() {
                m.removeCanvasClass("avpw_can_pan")
            };
            var _, x = 20, y = null, M = !1, C = function(e, o) {
                M = !0;
                var r = e - _.x, a = o - _.y;
                m.viewport.pan(r, a);
                var i = {x: e,y: o};
                t.clearTimeout(y), y = t.setTimeout(function() {
                    M = !1, _ = i
                }, x)
            }, w = 20, b = null, D = !1, S = function(e) {
                D = !0, m.viewport.gestureZoomUpdate(e), t.clearTimeout(b), b = t.setTimeout(function() {
                    D = !1
                }, w)
            }, P = function(e) {
                return e.scale && !D && S(e.scale), !1
            }, T = function(e) {
                m.setMouseCursor(), avpw$.support.touch && (null == e ? l.bind("gesturechange", P).bind("gestureend", m.viewport.gestureZoomFinish) : l.unbind("gesturechange").unbind("gestureend"))
            }, E = function(e) {
                s.mouseOutEvent && s.mouseOutEvent.apply(m, [{}, e])
            }, F = function(e) {
                var o;
                if (f) {
                    if (f = !1, t.setTimeout(function() {
                        f = !0
                    }, c), s.mouseMoveEvent)
                        return o = p(e), s.mouseMoveEvent.apply(m, [o, e]);
                    d && h && (o = p(e), e.preventDefault(), _ = _ || o, M || C(o.x, o.y))
                }
            }, L = function(e) {
                if (s.mouseDownEvent) {
                    var t = p(e);
                    return s.mouseDownEvent.apply(m, [t, e, v(t.x, t.y)])
                }
                d && (_ = void 0, h = !0, m.canvasHasClass("avpw_can_pan") && m.addCanvasClass("avpw_is_panning"))
            }, A = function(e) {
                if (s.mouseUpEvent) {
                    var t = p(e);
                    s.mouseUpEvent.apply(m, [t, e])
                } else
                    d && (h = !1, m.viewport.isZoomed() && m.viewport.bounceBack(), m.removeCanvasClass("avpw_is_panning"))
            };
            return m.resetOffset = function() {
                i = void 0
            }, m.getCoordinatesFromEventWithinCanvasBounds = function(e) {
                var t = p(e);
                return v(t.x, t.y) ? t : null
            }, m.getCoordinatesFromEvent = function(e) {
                return p(e)
            }, m.getViewportCenter = function() {
                var e, t, o, a;
                return t = r.controlsWidgetInstance.layoutNotify(r.launchData.openType, "getEmbedElement"), t ? (t = avpw$(t), o = t.width(), a = t.height(), e = t.offset(), p({type: "internal",x: o / 2 + e.left,y: a / 2 + e.top})) : null
            }, m.subscribe = function(e) {
                for (var t = 0; t < u.length; t++)
                    e[u[t]] && (s[u[t]] = e[u[t]].AV_bindInst(e));
                m.disablePan()
            }, m.unsubscribe = function() {
                s = {}, m.enablePan()
            }, m.shutdown = function() {
                a.off("layout:resize", m.resetOffset), l.unbind("mouseleave").unbind("mousedown"), avpw$(t).unbind("mousemove", F).unbind("mouseup", A).unbind("scroll", m.resetOffset), avpw$.support.touch && (l.unbind("touchmove").unbind("touchstart").unbind("touchend").unbind("gesturechange").unbind("gestureend"), avpw$(t).unbind("touchmove", g)), m.resetOffset(), m.viewport.shutdown(), s = {}, h = !1
            }, m.setMouseCursor = function(t) {
                void 0 === t && (t = ""), e.style.cursor = t
            }, m.addCanvasClass = function(e) {
                n.addClass(e)
            }, m.removeCanvasClass = function(e) {
                n.removeClass(e)
            }, m.canvasHasClass = function(e) {
                return n.hasClass(e)
            }, a.on("tool:open", T), a.on("layout:resize", m.resetOffset), l.bind("mouseleave", E).bind("mousedown", L), avpw$(t).bind("mouseup", A).bind("mousemove", F).bind("scroll", m.resetOffset), avpw$.support.touch && (avpw$(t).bind("touchmove", g), l.bind("touchstart", function(e) {
                return avpw$(t).unbind("mousemove", F), l.bind("touchmove", F), L(e)
            }).bind("touchend", function(e) {
                return l.unbind("touchmove", F), avpw$(t).bind("mousemove", F), A(e), !1
            }), l.bind("gesturechange", P).bind("gestureend", m.viewport.gestureZoomFinish)), m.viewport.setCanvas.apply(m, [e]), m
        }, r.PaintUI.prototype.viewport = function() {
            var e, t, o, i, n, l = {}, s = null, u = null, f = 0, c = 1, d = function() {
                var t = u.x0 + u.w, o = u.y0 + u.h, r = !1, a = !1;
                return (t > s.w || u.x0 < s.x0) && (r = !0), (u.y0 < s.y0 || o > s.h) && (a = !0), r || a ? e.showPan() : e.hidePan(), {x: r,y: a}
            }, h = r.support.getVendorProperty("transform"), m = function(e) {
                if (!h || "mobile" != r.launchData.openType && "aviary" != r.launchData.openType)
                    t.style.width = u.w + "px", t.style.height = u.h + "px", t.style.marginLeft = "-" + (u.w / 2 + .5 | 0) + "px", t.style.marginTop = "-" + (u.h / 2 + .5 | 0) + "px";
                else {
                    var o = e && e.scale ? e.scale : 1 / l.getRatio(), a = .5 * (1 * u.w / o - u.w) + .5 | 0, i = .5 * (1 * u.h / o - u.h) + .5 | 0, n = u.x0 - a, s = u.y0 - i, f = new r.TransformStyle(t.style[h]);
                    f.set({translate: n + "px, " + s + "px",scale: o}), t.style[h] = f.serialize()
                }
            };
            l.setCanvas = function(o) {
                t = o, e = this, h && e.addCanvasClass("avpw_position_by_transform")
            }, l.shutdown = function() {
                o = i = void 0, s = u = null
            };
            var g = function() {
                i = Math.abs((o - u.w) / 2) + .5 | 0
            }, p = function(e) {
                if (e) {
                    var o = u.w + i * e, r = o * t.height / t.width + .5 | 0;
                    if (0 > r || 0 > o)
                        return !1;
                    u.w = o, u.h = r, w(), M()
                }
            }, v = 1, _ = !!r.support.getVendorProperty("transformStyle");
            l.gestureZoomUpdate = function(e) {
                v = e, e = 1 * e / l.getRatio(), m({scale: e})
            }, l.gestureZoomFinish = function() {
                if (v) {
                    var e = u.w * v + .5 | 0, t = u.h * v + .5 | 0, o = e / t;
                    e < s.w && t < s.h ? e > o * t ? (u.w = s.w, u.h = s.w * t / e + .5 | 0) : (u.h = s.h, u.w = s.h * o + .5 | 0) : (u.w = e, u.h = t), m()
                }
            }, l.setPadding = function(e) {
                f = e
            };
            var x = function(e, a, i) {
                var n, l = t.width, s = t.height;
                e = e || l, a = a || s, e -= f, a -= f, o = l, i && (n = r.util.getScaledDims(l, s, e, a), e = n.width, a = n.height), u = new r.Bbox(0, 0, e, a), g(), M()
            }, y = function(e, t, o) {
                n = n || d();
                var r = !1;
                return (o || n.x) && (u.x0 += e, r = !0), (o || n.y) && (u.y0 += t, r = !0), r
            }, M = function() {
                n = void 0
            }, C = function() {
                var e, t = u.x0 + u.w, o = u.y0 + u.h;
                return t > s.w && u.x0 > s.x0 ? (e = s.w - u.w, u.x0 = e > 0 ? e : 0) : u.x0 < s.x0 && t < s.w && (e = s.w - u.w, u.x0 = 0 > e ? e : 0), o > s.h && u.y0 > s.y0 ? (e = s.h - u.h, u.y0 = e > 0 ? e : 0) : u.y0 < s.x0 && o < s.h && (e = s.h - u.h, u.y0 = 0 > e ? e : 0), y(0, 0)
            }, w = function() {
                if (s) {
                    var e = (s.w - u.w) / 2 + .5 | 0, t = (s.h - u.h) / 2 + .5 | 0;
                    u.x0 = u.y0 = 0, y(e, t, !0)
                }
            }, b = function(e) {
                if (e % 180 && !(e % 90)) {
                    var t = u.w;
                    return u.w = u.h, u.h = t, w(), !0
                }
                return !1
            }, D = function() {
                var e = l.getRatio();
                a.trigger("canvas:resize", u, e, c), c = e
            };
            return l.isZoomed = function() {
                return 1 !== l.getRatio()
            }, l.getRatio = function() {
                return u ? o / u.w : 1
            }, l.zoomIn = function() {
                return u || x(), p(1), m(), e.resetOffset(), D(), !1
            }, l.zoomOut = function() {
                return u || x(), p(-1), m(), e.resetOffset(), D(), !1
            }, l.zoomByRatio = function(o) {
                var r = t.width * o, a = t.height * o, i = u.w, l = u.h, f = 0, c = 0;
                return u.w = r + .5 | 0, u.h = a + .5 | 0, n = d(), n.x ? f = -((r - i) / 2 + .5 | 0) : (f = (s.w - u.w) / 2 + .5 | 0, u.x0 = 0), n.y ? c = -((a - l) / 2 + .5 | 0) : (c = (s.h - u.h) / 2 + .5 | 0, u.y0 = 0), y(f, c, !0), C(), m(), e.resetOffset(), M(), D(), !1
            }, l.fitLayout = function(t, o) {
                s = new r.Bbox(0, 0, t, o), x(t, o, !0), w(), m(), e.resetOffset(), D()
            }, l.resize = function(t, o) {
                return x(t, o, !0), w(), m(), e.resetOffset(), D(), !1
            }, l.resizeFake = function(t, o) {
                return x(t, o), w(), m(), e.resetOffset(), !1
            }, l.pan = function(t, o, r) {
                y(t, o, r) && (m(), e.resetOffset())
            }, l.clearAvailablePanDirections = function() {
                M()
            }, l.bounceBack = function() {
                C() && (m(), e.resetOffset()), D()
            }, l.rotate = function(e, o, a) {
                e = e ? e + "deg" : "0", o = o ? o + "deg" : "0", a = a ? a + "deg" : "0";
                var i = new r.TransformStyle(t.style[h]);
                i.set(_ ? {rotateX: e,rotateY: o,rotateZ: a} : {rotate: e}), t.style[h] = i.serialize()
            }, l.rotateBoundsBy90 = function(e) {
                return b(e) ? (D(), !0) : !1
            }, l
        }(), e
    }(this, "undefined" != typeof t ? t : {}, "undefined" != typeof o ? o : {}), avpw$ = "undefined" != typeof avpw$ ? avpw$ : {}, e.CropController = function(t, o) {
        var r, a, i, n, l, s, u, f, c, d, h = this, m = null, g = {}, p = !1, v = 1, _ = -1, x = function() {
            a = new e.Bbox(0, 0, o.width, o.height)
        }, y = function() {
            a = null
        }, M = function() {
            v = r ? Math.abs((r.x1 - r.x0) / (r.y1 - r.y0)) : 0
        }, C = function(t, o) {
            var i, n;
            if (0 != v) {
                var l = 1 / v;
                p && (Math.abs((r.x1 - r.x0) / (r.y1 - r.y0)) > v ? (i = e.math.sign(r.y1 - r.y0) * Math.abs(r.x1 - r.x0) * l + .5 | 0, r[o] = "y1" === o ? r.y0 + i : r.y1 - i) : (i = e.math.sign(r.x1 - r.x0) * Math.abs(r.y1 - r.y0) * v + .5 | 0, r[t] = "x1" === t ? r.x0 + i : r.x1 - i)), n = a.constrain(r[t], r[o]), r[t] = n.x, r[o] = n.y, p && n.dirty && (Math.abs((r.x1 - r.x0) / (r.y1 - r.y0)) > v ? (i = e.math.sign(r.x1 - r.x0) * Math.abs(r.y1 - r.y0) * v + .5 | 0, r[t] = "x1" === t ? r.x0 + i : r.x1 - i) : (i = e.math.sign(r.y1 - r.y0) * Math.abs(r.x1 - r.x0) * l + .5 | 0, r[o] = "y1" === o ? r.y0 + i : r.y1 - i))
            }
        }, w = function(e, t) {
            switch (_) {
                case 1:
                    r.x1 = e + g.x, r.y0 = t - g.y, C("x1", "y0");
                    break;
                case 2:
                    r.x0 = e - g.x, r.y1 = t + g.y, C("x0", "y1");
                    break;
                case 3:
                    r.x1 = e + g.x, r.y1 = t + g.y, C("x1", "y1");
                    break;
                case 0:
                default:
                    r.x0 = e - g.x, r.y0 = t - g.y, C("x0", "y0")
            }
        }, b = function(e, t) {
            var o, i;
            r.x0 += e, r.x1 += e, r.y0 += t, r.y1 += t, o = r.x1 - r.x0, i = r.y1 - r.y0;
            var n = a.constrain(r.x0, r.y0);
            n.dirty && (r.x0 = n.x, r.y0 = n.y, r.x1 = r.x0 + o, r.y1 = r.y0 + i);
            var l = a.constrain(r.x1, r.y1);
            l.dirty && (r.x1 = l.x, r.y1 = l.y, r.x0 = r.x1 - o, r.y0 = r.y1 - i)
        }, D = function() {
            u = avpw$('<div id="avpw_crop_flip_button"></div>'), t.layoutNotify(e.launchData.openType, "getCanvasControlsElement").append(u), i = avpw$(e.template[e.launchData.layout].cropLayer()), t.layoutNotify(e.launchData.openType, "getCanvasControlsElement").append(i), f = i.find("#avpw_crop_tooltip"), c = f.find("#avpw_crop_tooltip_w"), d = f.find("#avpw_crop_tooltip_h")
        };
        h.setToolTipValues = function(e, t) {
            c && d && (c.html(e), d.html(t))
        };
        var S, P = function() {
            i.remove(), i = null, u.remove(), u = null, f = c = d = null
        }, T = function(e) {
            var o, r, a, n, l = t.canvasUI.viewport.getRatio();
            e.x0 < e.x1 ? (o = e.x0, a = e.x1 - e.x0) : (o = e.x1, a = e.x0 - e.x1), e.y0 < e.y1 ? (r = e.y0, n = e.y1 - e.y0) : (r = e.y1, n = e.y0 - e.y1), S.trigger("tool:crop:change", a, n), o = o / l + .5 | 0, r = r / l + .5 | 0, a = a / l + .5 | 0, n = n / l + .5 | 0;
            var s = {left: o + "px",top: r + "px",width: a + "px",height: n + "px"};
            i.css(s)
        };
        h.activate = function(a) {
            r = new e.Bbox, x(), n = new e.OverlaySelectionModule(o), p = !1, D(), S = a, t.layoutNotify(e.launchData.openType, "showCanvasControlsElement")
        }, h.deactivate = function() {
            r = null, y(), n = null, t.layoutNotify(e.launchData.openType, "hideCanvasControlsElement"), P()
        };
        var E = 60, F = 60;
        return h.updateUIDown = function(a, i) {
            f.show();
            var l, s = 99999999, u = 1;
            u = t.canvasUI.viewport.getRatio();
            var c = n.getHandleImageWidth(), d = u * (c / 2) * (c / 2) | 0;
            switch (m = null, o.uiLayerReset(), o.uiLayerShow(!0), _ = -1, l = e.math.sqrDist(r.x0, r.y0, a, i), s > l && d > l && (_ = 0, s = l, f.css({top: -F,left: -E,right: "auto",bottom: "auto"})), l = e.math.sqrDist(r.x1, r.y0, a, i), s > l && d > l && (_ = 1, s = l, f.css({top: -F,left: "auto",right: -E,bottom: "auto"})), l = e.math.sqrDist(r.x0, r.y1, a, i), s > l && d > l && (_ = 2, s = l, f.css({top: "auto",left: -E,right: "auto",bottom: -F})), l = e.math.sqrDist(r.x1, r.y1, a, i), s > l && d > l && (_ = 3, s = l, f.css({top: "auto",left: "auto",right: -E,bottom: -F})), _) {
                case 0:
                    g = {x: a - r.x0,y: i - r.y0};
                    break;
                case 3:
                    g = {x: r.x1 - a,y: r.y1 - i};
                    break;
                case 1:
                    g = {x: r.x1 - a,y: i - r.y0};
                    break;
                case 2:
                    g = {x: a - r.x0,y: r.y1 - i};
                    break;
                default:
                    if (f.hide(), !r.contains(a, i))
                        return !1;
                    m = {x: a,y: i}
            }
            return !0
        }, h.updateUIMove = function(e, t) {
            var a, i;
            null != m ? (a = e - m.x, i = t - m.y, b(a, i), m.x = e, m.y = t) : w(e, t), n.drawCropSelectionBackground(r), o.recomposite(0), T(r)
        }, h.apply = function() {
            f.hide();
            var e;
            r.x0 > r.x1 && (e = r.x0, r.x0 = r.x1, r.x1 = e), r.y0 > r.y1 && (e = r.y0, r.y0 = r.y1, r.y1 = e)
        }, h.flipIt = function() {
            h.setInitialSelectionByRatio(s / l)
        }, h.setInitialSelectionTo = function(e, t) {
            r && (l = e, s = t, r.x0 = (o.canvas.width - e) / 2 + .5 | 0, r.x1 = r.x0 + e + .5 | 0, r.y0 = (o.canvas.height - t) / 2 + .5 | 0, r.y1 = r.y0 + t + .5 | 0, o.uiLayerReset(), o.uiLayerShow(!0), n.drawCropSelectionBackground(r), o.recomposite(), T(r, !0))
        }, h.setInitialSelectionByRatio = function(e) {
            var t, r, a = 0, i = o.canvas.width, n = o.canvas.height, l = a, s = a, u = i - 2 * s, f = n - 2 * l;
            return t = f * e, r = f, t > u && (t = u, r = u / e), h.setInitialSelectionTo(t, r)
        }, h.setInitialSelection = function() {
            var e, t, a, i;
            p ? e = a = .12 : (e = .09, a = .18), t = 1 - e, i = 1 - a, r.x0 = o.canvas.width * e + .5 | 0, r.x1 = o.canvas.width * t + .5 | 0, r.y0 = o.canvas.height * a + .5 | 0, r.y1 = o.canvas.height * i + .5 | 0, o.uiLayerReset(), o.uiLayerShow(!0), n.drawCropSelectionBackground(r), o.recomposite(), T(r)
        }, h.forceAspect = function(e) {
            e && M(), p = e
        }, h.isValidCrop = function() {
            return 0 === Math.abs(r.x0 - r.x1) || 0 === Math.abs(r.y0 - r.y1) ? !1 : !0
        }, h.crop = function() {
            return r
        }, h
    };
    var r = e.Events;
    avpw$ = "undefined" != typeof avpw$ ? avpw$ : {}, e.OverlayController = function(t, o, a) {
        var i, n, l, s, u = a.modes || {OFF_STATE: 0}, f = a.handlePosition || e.OverlayController.HANDLE_POSITION.BOTTOM_LEFT, c = 5, d = a.minimumOverlaySize || 20, h = a.maximumOverlaySize || 99999999, m = 10, g = "avpw_selection_overlay_selected avpw_selection_overlay_editing", p = "avpw_selection_overlay_selected avpw_selection_overlay_dragonly", v = e.support.getVendorProperty("transform"), _ = null, x = !1, y = !1, M = !1, C = a.forceDragMode || !1, w = function(e) {
            e && l === e || (l = null);
            for (var t in i)
                i.hasOwnProperty(t) && i[t] != e && T(i[t], u.OFF_STATE)
        }, b = function(e, t, o) {
            var r, a, n;
            if (t !== o) {
                t = 1 / t, o = 1 / o, r = t / o;
                for (a in i)
                    n = i[a], A(n, {x: n.topLeftX * r,y: n.topLeftY * r}), B(n, r)
            }
        }, D = function() {
            n++, l && l.element && (l.zIndex = n, l.element.css("z-index", n))
        }, S = function(e) {
            w(i[e]), l = i[e], D()
        }, P = function(t) {
            var o, r, n = a.aspectRatio, l = i[t.id];
            o = t ? parseInt(t.style.width, 10) : 0, r = t ? avpw$(t).height() : 0;
            var s = t ? parseInt(t.style.left, 10) : 0, u = t ? parseInt(t.style.top, 10) : 0, f = s + m + o / 2, c = u + m + r / 2;
            n || (n = 0 !== o && 0 !== r ? r / o : 1), l && e.util.extend(l, {width: o,aspectRatio: n,topLeftX: parseInt(t.style.left || 0, 10),topLeftY: parseInt(t.style.top || 0, 10),centerX: f,centerY: c})
        }, T = function(e, o) {
            e.mode = o, e.element.removeClass(p), e.element.removeClass(g), o === u.DRAG_STATE ? e.element.addClass(p) : o === u.EDIT_STATE ? e.element.addClass(g) : l && l == e && (l = null), a.onModeChange && a.onModeChange.apply(t, [e, o])
        }, E = function(e, t) {
            e && (e.mode && e.mode !== u.OFF_STATE ? e.mode === u.DRAG_STATE ? t ? u.EDIT_STATE && T(e, u.EDIT_STATE) : T(e, u.OFF_STATE) : e.mode === u.EDIT_STATE && (t || (u.DRAG_STATE ? T(e, u.DRAG_STATE) : T(e, u.OFF_STATE))) : t && u.DRAG_STATE && T(e, u.DRAG_STATE))
        }, F = function(e) {
            e && e.element && (e.element.remove(), delete i[e.id])
        }, L = function() {
            avpw$.each(i, function(e) {
                F(i[e])
            })
        }, A = function(e, t) {
            e.element.css({left: (t.x + .5 | 0) + "px",top: (t.y + .5 | 0) + "px"}), e.topLeftX = t.x, e.topLeftY = t.y
        }, R = function(e, t) {
            var o, r, a, i, n = !1;
            return o = e.initialCoordsX, r = e.initialCoordsY, a = t.x - o, i = t.y - r, (Math.abs(a) > c || Math.abs(i) > c) && (n = !0), n && e.element.css({left: (e.topLeftX + a + .5 | 0) + "px",top: (e.topLeftY + i + .5 | 0) + "px"}), n
        }, I = function() {
            l && l.element && l.element.show()
        }, O = function() {
            l && l.element && l.element.hide()
        }, B = function(e, t) {
            var o = e.width * t + .5 | 0, r = o * e.aspectRatio + .5 | 0;
            e.element.css({width: o + "px",height: r + "px"}), e.width = o + .5 | 0
        }, N = function(o, r) {
            var a, i, n, l, s, u, c, g, p, _, x, y, M, C, w, b, D, S, P, T, E;
            return u = o.topLeftX, c = o.topLeftY, a = o.initialCoordsX, i = o.initialCoordsY, C = t.layoutNotify(e.launchData.openType, "getCanvasControlsElement").offset(), a -= C.left, i -= C.top, r.x -= C.left, r.y -= C.top, s = o.aspectRatio, n = o.width, l = n * s, f == e.OverlayController.HANDLE_POSITION.BOTTOM_LEFT ? (_ = u, x = c + l + m / 2) : f == e.OverlayController.HANDLE_POSITION.BOTTOM_CENTER ? (_ = u + n / 2 + m, x = c + l + m) : f == e.OverlayController.HANDLE_POSITION.BOTTOM_RIGHT && (_ = u + n + 2 * m, x = c + l + 2 * m), g = o.centerX, p = o.centerY, y = r.x, M = r.y, S = Math.sqrt(Math.pow(y - g, 2) + Math.pow(M - p, 2)) / Math.sqrt(Math.pow(_ - g, 2) + Math.pow(x - p, 2)), P = d / n, T = h / n, S = S > P ? S : P, S = T > S ? S : T, w = o.rotation || 0, b = Math.atan2(x - p, _ - g), w && (b = w - (2 * Math.PI - b)), D = Math.atan2(M - p, y - g), E = D - b + w, o.rotation = E, o.element[0].style[v] = "rotate(" + E + "rad)", o.element.css({left: (u - .5 * n * (S - 1) + .5 | 0) + "px",top: (c - .5 * l * (S - 1) + .5 | 0) + "px",width: (n * S + .5 | 0) + "px",height: (l * S + .5 | 0) + "px"}), S
        }, U = function(e, o) {
            var r, a;
            e.length && (r = e[0].id, a = i[r], a && (o && o.apply(t, [a]), F(a)))
        }, k = function(e, o) {
            var r = i[e.attr("id")], a = !1;
            return r === l && (a = !0, y = !0), o && o.apply(t, [r, a]), a
        }, j = function(e) {
            l && (M = !0, s = l.rotation, e && e.apply(t, [l]))
        }, G = function(e) {
            e && (P(e[0]), S(e.attr("id")))
        }, X = function(e, o) {
            e && e.element && (P(e.element[0]), o && o.apply(t, [e]))
        }, W = function(e) {
            var t, o = n + 1, r = new Array(o);
            for (avpw$.each(i, function(e) {
                r[i[e].zIndex] = i[e]
            }), t = 0; o > t; t++)
                r[t] && X(r[t], e)
        }, V = this;
        return V.activate = function() {
            n = 1, i = {}, _ = null, t.layoutNotify(e.launchData.openType, "showCanvasControlsElement"), r.on("canvas:resize", b)
        }, V.deactivate = function() {
            L(), i = {}, t.layoutNotify(e.launchData.openType, "hideCanvasControlsElement"), r.off("canvas:resize", b)
        }, V.updateUIDown = function(t, o, r, a, i, n) {
            var s = !1, u = avpw$(o.target), f = u.closest(".avpw_selection_overlay"), c = u.closest(".avpw_selection_overlay_size_handle"), d = u.closest(".avpw_selection_overlay_close_button");
            return d && d.length ? (U(f, i), o.preventDefault(), !1) : (f && f.length && (x = !0, s = k(f, r)), c && c.length && j(a), void (s ? (e.util.extend(l, {initialCoordsX: t.x,initialCoordsY: t.y}), P(f[0])) : l && l.element && (C || E(l, !1), n && n())))
        }, V.updateUIMove = function(e, o, r, a, i) {
            return y && l && l.element && (x && r && r.apply(t, [l]), M ? (scale = N(l, e), a && a.apply(t, [l, scale]), x = !1) : l.mode === u.DRAG_STATE && (x = !R(l, e), i && i())), !1
        }, V.apply = function(e, o, r) {
            var a, n = !1, s = avpw$(o.target), u = s.closest(".avpw_selection_overlay");
            u && u.length && (G(u), n = !0, a = i[u.attr("id")]), r && r.apply(t, [a, n, M]), x && (x = !1, l && l.element && !C && E(l, !0)), y = !1, M = !1
        }, V.newOverlay = function(o) {
            var r = o.element;
            w(), t.layoutNotify(e.launchData.openType, "getCanvasControlsElement").append(r), E(o, !0), i[o.id] = o, P(r[0]), l = o, _ = o.id, D()
        }, V.commit = function(e) {
            W(e)
        }, V.currentOverlay = function() {
            return l
        }, V.showCurrentOverlay = function() {
            I()
        }, V.hideCurrentOverlay = function() {
            O()
        }, V.saveDimensions = function(e) {
            e = e || l, P(e.element[0])
        }, V.isLastOverlayAdded = function(e) {
            return _ && i[_] === e
        }, V.setHandlePosition = function(e) {
            f = e
        }, V.setRotation = function(e, t) {
            e.rotation = t, t = 180 * t / Math.PI + .5 | 0, e.element[0].style[v] = "rotate(" + t + "deg)"
        }, V
    }, e.OverlayController.HANDLE_POSITION = {BOTTOM_LEFT: 0,BOTTOM_CENTER: 1,BOTTOM_RIGHT: 2};
    var r = e.Events;
    avpw$ = "undefined" != typeof avpw$ ? avpw$ : {}, e.cnvs = {clearCanvas: function(e) {
        e.width = e.width
    },copyCanvas: function(e, t, r, a, i) {
        var n, l = o.createElement("canvas");
        return void 0 === i ? (l.width = e.width, l.height = e.height, n = l.getContext("2d"), n.drawImage(e, 0, 0)) : (l.width = a, l.height = i, n = l.getContext("2d"), n.drawImage(e, -t, -r)), l
    },drawImageCopy: function(e, t, o, r) {
        var a = e.globalCompositeOperation;
        e.save(), e.beginPath(), e.rect(o, r, t.width, t.height), e.clip(), e.closePath(), e.globalCompositeOperation = "copy", e.drawImage(t, o, r), e.globalCompositeOperation = a, e.restore()
    },getCanvasPixelData: function(e) {
        var t = e.getContext("2d");
        return t.getImageData(0, 0, e.width, e.height)
    },getImageDataRegion: function(e, t, r, a, i, n) {
        var l, s, u, f = e.width, c = e.height;
        if (0 > t || 0 > r || t + a > f || r + i > c) {
            if (s = o.createElement("canvas"), s.width = a, s.height = i, l = s.getContext("2d"), l.drawImage(e, -t, -r), u = l.getImageData(0, 0, a, i), n)
                for (var d = e.getContext("2d"), h = d.getImageData(0, 0, f, 1).data, m = d.getImageData(0, c - 1, f, 1).data, g = d.getImageData(0, 0, 1, c).data, p = d.getImageData(f - 1, 0, 1, c).data, v = u.data, _ = 0; i > _; _++) {
                    var x = null, y = _ + r;
                    0 > y && (y = 0, x = h), y >= c && (y = c - 1, x = m);
                    for (var M = 0; a > M; M++) {
                        var C = null, w = M + t;
                        0 > w && (w = 0, C = g), w >= f && (w = f - 1, C = p);
                        var b = 4 * (M + _ * a);
                        if (C) {
                            var D = 4 * y;
                            v[b++] = C[D++], v[b++] = C[D++], v[b++] = C[D++], v[b] = C[D]
                        } else if (x) {
                            var S = 4 * w;
                            v[b++] = x[S++], v[b++] = x[S++], v[b++] = x[S++], v[b] = x[S]
                        } else
                            M = f - t - 1
                    }
                }
        } else
            l = e.getContext("2d"), u = l.getImageData(t, r, a, i);
        return u
    },putImageDataRegion: function(e, t, r, a) {
        var i, n, l = e.getContext("2d"), s = e.width, u = e.height, f = t.width, c = t.height;
        0 > r || 0 > a || r + f >= s || a + c >= u ? (n = o.createElement("canvas"), n.width = f, n.height = c, i = n.getContext("2d"), i.putImageData(t, 0, 0), l.drawImage(n, r, a)) : l.putImageData(t, r, a)
    },convertRgbToHsv: function(e, t, o) {
        var r, a, i, n, l, s, u;
        for (r = 0; o > r; r += 4) {
            a = t[r], i = t[r + 1], n = t[r + 2];
            var f = Math.max(a, Math.max(i, n)), c = Math.min(a, Math.min(i, n));
            if (u = f, 0 == f)
                l = 0, s = 0;
            else {
                var d = f - c;
                s = d / f, l = a == f ? (i - n) / d : i == f ? 2 + (n - a) / d : 4 + (a - i) / d, 0 > l && (l += 6), l *= 60
            }
            e[r] = l, e[r + 1] = s, e[r + 2] = u, e[r + 3] = t[r + 3]
        }
    },convertHsvToRgb: function(e, t, o) {
        var r, a, i, n, l, s, u;
        for (r = 0; o > r; r += 4) {
            if (l = t[r], s = t[r + 1], u = t[r + 2], a = i = n = u, 0 != s) {
                l /= 60;
                var f = 0 | l, c = l - f, d = 1 - s, h = 1 - s * c, m = 1 - s * (1 - c);
                switch (f) {
                    case 0:
                        n *= d, i *= m;
                        break;
                    case 1:
                        n *= d, a *= h;
                        break;
                    case 2:
                        a *= d, n *= m;
                        break;
                    case 3:
                        a *= d, i *= h;
                        break;
                    case 4:
                        i *= d, a *= m;
                        break;
                    default:
                        i *= d, n *= h
                }
            }
            0 > a && (a = 0), a > 255 && (a = 255), 0 > i && (i = 0), i > 255 && (i = 255), 0 > n && (n = 0), n > 255 && (n = 255), e[r] = a, e[r + 1] = i, e[r + 2] = n, e[r + 3] = t[r + 3]
        }
    },applyKernel1D: function(e, t, o, r, a, i, n, l, s) {
        var u, f, c = e.length, d = t, h = s - 1 - (c - t);
        for (u = 0; s > u; u++) {
            var m = 0, g = 0, p = 0;
            if (u >= d && h >= u) {
                var v, _ = n + (u + (c - t) - 1) * l;
                for (f = c - 1; f >= 3; )
                    v = e[f--], m += v * i[_], g += v * i[_ + 1], p += v * i[_ + 2], _ -= l, v = e[f--], m += v * i[_], g += v * i[_ + 1], p += v * i[_ + 2], _ -= l, v = e[f--], m += v * i[_], g += v * i[_ + 1], p += v * i[_ + 2], _ -= l, v = e[f--], m += v * i[_], g += v * i[_ + 1], p += v * i[_ + 2], _ -= l;
                for (; f >= 0; )
                    v = e[f--], m += v * i[_], g += v * i[_ + 1], p += v * i[_ + 2], _ -= l
            } else
                for (f = 0; c > f; f++) {
                    var x = u + (f - t);
                    0 > x && (x = 0), x >= s && (x = s - 1);
                    var _ = n + x * l, v = e[f];
                    m += v * i[_], g += v * i[_ + 1], p += v * i[_ + 2]
                }
            var y = r + u * a;
            o[y] = m, o[y + 1] = g, o[y + 2] = p
        }
    },shadowTransform: function() {
        var e = o.createElement("canvas");
        e.height = e.width = 3;
        var t = -1, r = e.getContext("2d");
        r.shadowOffsetX = t, r.shadowOffsetY = t, r.shadowBlur = 1, r.shadowColor = "red", r.fillRect(1, 1, 1, 1);
        var a = r.getImageData(0, 0, 3, 3).data, i = {x: 1,y: 1};
        switch (255) {
            case a[32]:
                i.x = i.y = -1;
                break;
            case a[24]:
                i.y = -1;
                break;
            case a[8]:
                i.x = -1;
                break;
            case a[0]:
        }
        return i
    }(),isOriginClean: function(e) {
        var t = !0;
        try {
            e.getImageData(0, 0, 1, 1)
        } catch (o) {
            o && o.message && -1 !== o.message.toLowerCase().indexOf("security") && (t = !1), o && o.name && -1 !== o.name.toLowerCase().indexOf("security") && (t = !1)
        }
        return t
    }}, e.math = {sign: function(e) {
        return 0 > e ? -1 : 1
    },sqrDist: function(e, t, o, r) {
        var a = o - e, i = r - t;
        return a * a + i * i
    },solveQuadratic: function(e, t, o) {
        var r = -t, a = t * t - 4 * e * o, i = 2 * e;
        return 0 > a ? [0, 0] : [(r - Math.sqrt(a)) / i, (r + Math.sqrt(a)) / i]
    },lowestPositiveQuadratic: function(t, o, r) {
        var a = e.math.solveQuadratic(t, o, r), i = a[0], n = a[1];
        return 0 >= n && i > 0 ? i : 0 >= i && n > 0 ? n : Math.max(Math.min(i, n), 0)
    },lineSegmentIntersection: function(e, t, o, r, a, i, n, l, s) {
        var u, f, c, d, h, m, g;
        return e == o && t == r || a == n && i == l ? null : e == a && t == i || o == a && r == i || e == n && t == l || o == n && r == l ? null : (o -= e, r -= t, a -= e, i -= t, n -= e, l -= t, c = Math.sqrt(o * o + r * r), d = o / c, h = r / c, m = a * d + i * h, i = i * d - a * h, a = m, m = n * d + l * h, l = l * d - n * h, n = m, 0 > i && 0 > l || i >= 0 && l >= 0 ? null : (g = n + (a - n) * l / (l - i), 0 > g || g > c ? null : (u = e + g * d, f = t + g * h, s.x = u, s.y = f, !0)))
    }}, e.Bbox = function(e, t, o, r, a) {
        void 0 !== r ? (this.x0 = e, this.y0 = t, this.x1 = o, this.y1 = r, this.w = this.x1 - this.x0, this.h = this.y1 - this.y0, this.margin = void 0 !== a ? a : 0) : this.reset()
    }, e.Bbox.prototype.include = function(e, t) {
        var o = e - this.margin, r = t - this.margin, a = e + this.margin, i = t + this.margin;
        this.x0 > o && (this.x0 = o), this.y0 > r && (this.y0 = r), this.x1 < a && (this.x1 = a), this.y1 < i && (this.y1 = i), this.w = this.x1 - this.x0, this.h = this.y1 - this.y0
    }, e.Bbox.prototype.reset = function() {
        this.x0 = 999999999, this.y0 = 999999999, this.x1 = -999999999, this.y1 = -999999999, this.w = 0, this.h = 0, this.margin = 0
    }, e.Bbox.prototype.contains = function(e, t) {
        var o = e >= this.x0 && e <= this.x1, r = t >= this.y0 && t <= this.y1;
        return o && r
    }, e.Bbox.prototype.constrain = function(e, t) {
        var o = !1;
        return e < this.x0 && (e = this.x0, o = !0), e > this.x1 && (e = this.x1, o = !0), t < this.y0 && (t = this.y0, o = !0), t > this.y1 && (t = this.y1, o = !0), {x: e,y: t,dirty: o}
    }, e.Layer = function(e) {
        this.image = this.canvas = this.drawable = null, void 0 !== e.image ? (this.image = this.drawable = e.image, this.type = "image") : void 0 !== e.canvas && (this.canvas = this.drawable = e.canvas, this.type = "canvas"), this.name = e.name, this.rotate = 0, this.translateX = this.translateY = 0, this.scaleX = this.scaleY = 1
    }, e.Layer.prototype.worldToLocal = function(e) {
        e.x -= this.translateX, e.y -= this.translateY;
        var t = Math.cos(-this.rotate), o = Math.sin(-this.rotate), r = e.x;
        e.x = r * t - e.y * o, e.y = r * o + e.y * t, e.x /= this.scaleX, e.y /= this.scaleY
    }, e.Layer.prototype.localToWorld = function(e) {
        this.centerX && (e.x -= this.centerX), this.centerY && (e.y -= this.centerY), e.x *= this.scaleX, e.y *= this.scaleY;
        var t = Math.cos(this.rotate), o = Math.sin(this.rotate), r = e.x;
        e.x = r * t - e.y * o, e.y = r * o + e.y * t, e.x += this.translateX, e.y += this.translateY
    }, e.Layer.prototype.localPointIn = function(e) {
        var t = 0, o = 0;
        return this.centerX && (t -= this.centerX), this.centerY && (o -= this.centerY), e.x >= t && e.y >= o && e.x < t + this.drawable.width && e.y < o + this.drawable.height
    }, e.OverlaySelectionModule = function(t) {
        var r = t, a = o.createElement("img");
        a.width = a.height = 50;
        var i = o.createElement("img");
        i.width = i.height = 50;
        var n = this;
        return n.getLayerByMouseClickWithTag = function(e, t, o, n, l) {
            var s, u, f, c, d, h, m, g, p;
            for (s = r.layers.length - 1; s >= 0; s--) {
                var v = r.layers[s];
                if (!v.hidden && (void 0 === o || v[o] === n)) {
                    var _ = {x: e,y: t};
                    if (v.worldToLocal(_), null != l && (l.x = _.x, l.y = _.y, l.dx = l.dy = 0), l.handlesVisible) {
                        if (g = i.width / v.scaleX, p = i.height / v.scaleY, l.cornerHit = -1, f = 0, u = f - g / 2, c = f + g / 2, h = v.drawable.height, d = h - g / 2, m = h + g / 2, v.centerX && (f -= v.centerX, u -= v.centerX, c -= v.centerX), v.centerY && (h -= v.centerY, d -= v.centerY, m -= v.centerY), _.x >= u && _.x <= c && _.y >= d && _.y <= m) {
                            l.cornerHit = 2;
                            var x = (f - _.x) * v.scaleX, y = (h - _.y) * v.scaleY;
                            return l.dx = 0 | (x > 0 ? x + .5 : x - .5), l.dy = 0 | (y > 0 ? y + .5 : y - .5), v
                        }
                        if (u = v.drawable.width - a.width / 2, d = 0 - a.height / 2, c = v.drawable.width + a.width / 2, m = a.height / 2, v.centerX && (u -= v.centerX, c -= v.centerX), v.centerY && (d -= v.centerY, m -= v.centerY), _.x >= u && _.x <= c && _.y >= d && _.y <= m)
                            return l.cornerHit = 1, v
                    }
                    if (v.localPointIn(_))
                        return v
                }
            }
            return null
        }, n.uiLayerDrawRectSelection = function(t) {
            var o, n, l, s, u, f, c = (i.width, 1);
            e.controlsWidgetInstance && e.controlsWidgetInstance.canvasUI && (c = e.controlsWidgetInstance.canvasUI.viewport.getRatio()), u = t.drawable.width, f = t.drawable.height, o = n = 0, l = u, s = f;
            var d = r.getLayerByName("_ui"), h = d.canvas.getContext("2d");
            h.globalCompositeOperation = "copy", h.clearRect(0, 0, d.canvas.width, d.canvas.height), h.globalCompositeOperation = "source-over", h.setTransform(1, 0, 0, 1, 0, 0), h.translate(t.translateX, t.translateY), h.rotate(t.rotate), h.scale(t.scaleX, t.scaleY), null != t.centerX && null != t.centerY && h.translate(-t.centerX, -t.centerY), h.globalAlpha = .5, h.strokeStyle = "#000000", h.lineWidth = 3 * c / t.scaleX, h.lineCap = "round", h.lineJoin = "miter", h.beginPath(), h.moveTo(u, 0), h.lineTo(8, 0), h.arcTo(0, 0, 0, 8, 8), h.lineTo(0, f), h.lineTo(u - 8, f), h.arcTo(u, f, u, f - 8, 8), h.lineTo(u, 0), h.stroke(), h.closePath(), h.globalAlpha = 1, h.setTransform(1, 0, 0, 1, 0, 0);
            var m = {x: l,y: n};
            t.localToWorld(m), h.translate(m.x, m.y), h.rotate(t.rotate), h.translate(-1 * (a.width * c / 2 + .5 | 0), -1 * (a.height * c / 2 + .5 | 0)), h.scale(c, c), h.drawImage(a, 0, 0), h.scale(1, 1), h.setTransform(1, 0, 0, 1, 0, 0);
            var g = {x: o,y: s};
            t.localToWorld(g), h.translate(g.x, g.y), h.rotate(t.rotate), h.translate(-1 * (i.width * c / 2 + .5 | 0), -1 * (i.height * c / 2 + .5 | 0)), h.scale(c, c), h.drawImage(i, 0, 0), h.scale(1, 1), h.setTransform(1, 0, 0, 1, 0, 0)
        }, n.getHandleImageWidth = function() {
            return i.width
        }, n.drawCropSelection = function(t) {
            if (t) {
                var o, a, n, l, s, u, f = 1;
                e.controlsWidgetInstance && e.controlsWidgetInstance.canvasUI && (f = e.controlsWidgetInstance.canvasUI.viewport.getRatio());
                var c = r.getLayerByName("_ui");
                t.x0 < t.x1 ? (o = t.x0, n = t.x1) : (o = t.x1, n = t.x0), t.y0 < t.y1 ? (a = t.y0, l = t.y1) : (a = t.y1, l = t.y0), s = n - o, u = l - a;
                var d = c.canvas.getContext("2d");
                d.globalCompositeOperation = "copy", d.clearRect(0, 0, c.canvas.width, c.canvas.height), d.globalCompositeOperation = "source-over", d.fillStyle = "#000000", d.globalAlpha = .6, d.fillRect(0, 0, o, c.canvas.height), d.fillRect(n, 0, c.canvas.width, c.canvas.height), d.fillRect(o, 0, n - o, a - 0), d.fillRect(o, l, n - o, c.canvas.height - l), d.strokeStyle = "#f4f4f4", d.globalAlpha = 1, d.lineWidth = f, d.lineCap = "square", d.strokeRect(o, a, s, u), d.beginPath(), d.moveTo(o, a + .33 * u + .5 | 0), d.lineTo(n, a + .33 * u + .5 | 0), d.moveTo(o, a + .67 * u + .5 | 0), d.lineTo(n, a + .67 * u + .5 | 0), d.moveTo(o + .33 * s + .5 | 0, a), d.lineTo(o + .33 * s + .5 | 0, l), d.moveTo(o + .67 * s + .5 | 0, a), d.lineTo(o + .67 * s + .5 | 0, l), d.stroke(), d.closePath(), d.globalAlpha = 1;
                for (var h = [{x: o,y: a}, {x: n,y: a}, {x: o,y: l}, {x: n,y: l}], m = 0; m < h.length; m++) {
                    var g = h[m];
                    d.setTransform(1, 0, 0, 1, 0, 0), c.localToWorld(g), d.translate(g.x, g.y), d.translate(-1 * (f * i.width / 2 + .5 | 0), -1 * (f * i.height / 2 + .5 | 0)), d.scale(f, f), d.drawImage(i, 0, 0), d.scale(1, 1), d.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
        }, n.drawCropSelectionBackground = function(e) {
            if (e) {
                var t, o, a, i, n, l, s = r.getLayerByName("_ui");
                e.x0 < e.x1 ? (t = e.x0, a = e.x1) : (t = e.x1, a = e.x0), e.y0 < e.y1 ? (o = e.y0, i = e.y1) : (o = e.y1, i = e.y0), n = a - t, l = i - o;
                var u = s.canvas.getContext("2d");
                u.globalCompositeOperation = "copy", u.clearRect(0, 0, s.canvas.width, s.canvas.height), u.globalCompositeOperation = "source-over", u.fillStyle = "#000000", u.globalAlpha = .6, u.fillRect(0, 0, t, s.canvas.height), u.fillRect(a, 0, s.canvas.width, s.canvas.height), u.fillRect(t, 0, a - t, o - 0), u.fillRect(t, i, a - t, s.canvas.height - i)
            }
        }, n
    }, e.BrushModule = function(t) {
        var r, a, i, n, l, s, u, f, c = t.overflow || 0, d = t.layerName || "drawing", h = t.preserveBacking || !1, m = 5, g = "rgba(255,255,204,0.5)", p = !1, v = this, _ = function(e, t) {
            r.uiLayerDrawCircleSelection(e, t, m)
        }, x = function() {
            var t = r.getLayerByName(d);
            if (!t) {
                var a = o.createElement("canvas");
                a.width = r.width, a.height = r.height, t = new e.Layer({canvas: a,name: d}), r.addLayer(t), r.uiLayerReset()
            }
            return t.canvas.width != r.width && (t.canvas.width = r.width), t.canvas.height != r.height && (t.canvas.height = r.height), t
        }, y = function() {
            var e = r.findLayerIndexByName("spot_tool");
            -1 !== e && (r.layers[e].canvas.width = r.canvas.width, r.layers[e].canvas.height = r.canvas.height)
        }, M = function(e, t, o, r, a) {
            if (e.lineCap = "round", e.lineJoin = "round", e.lineWidth = 2 * m, p ? (e.strokeStyle = "#fff", e.globalCompositeOperation = "destination-out") : (e.strokeStyle = g, e.globalCompositeOperation = "source-over"), e.beginPath(), r)
                l = t, s = o, e.moveTo(l, s), e.lineTo(t + .02, o), u = t, f = o;
            else if (a)
                e.moveTo(u, f), e.lineTo(l, s), l = s = u = f = null;
            else {
                var i = (l + t) / 2 | 0, n = (s + o) / 2 | 0;
                e.moveTo(u, f), e.quadraticCurveTo(l, s, i, n), l = t, s = o, u = i, f = n
            }
            e.stroke(), e.closePath()
        }, C = function(e) {
            var t, o = m, r = 0, a = [], i = function(e, t, r, a, n, l, s) {
                var u = (a - t) * (a - t) + (n - r) * (n - r);
                if (o * o > u)
                    return null;
                var f, c, d, h, m, g;
                void 0 !== l ? (f = (l + t) / 2, c = (l + a) / 2, d = (s + r) / 2, h = (s + n) / 2, m = (f + c) / 2, g = (d + h) / 2) : (m = (t + a) / 2, g = (r + n) / 2), i(e, t, r, m, g, f, d), e.push([0 | m, 0 | g]), i(e, m, g, a, n, c, h)
            };
            for (r = 0; r < e.length - 1; ++r) {
                var n = e[r], l = e[r + 1], s = [(n[0] + l[0]) / 2 | 0, (n[1] + l[1]) / 2 | 0];
                0 === r ? i(a, n[0], n[1], s[0], s[1]) : i(a, t[0], t[1], s[0], s[1], n[0], n[1]), t = s, a.push(s), r === e.length - 2 && (i(a, s[0], s[1], l[0], l[1]), a.push(l))
            }
            return a
        }, w = function(t, o, a, i) {
            var n = r.getLayerByName(t), l = n.canvas.getContext("2d");
            e.cnvs.drawImageCopy(l, o, a, i), r.recomposite()
        }, b = function(t, o, a, i) {
            var n = x(), l = n.canvas.getContext("2d");
            e.cnvs.drawImageCopy(l, o, a, i), r.recomposite()
        };
        return v.activate = function(t) {
            r = t, n = new e.Bbox, l = s = 0, r.uiLayerReset(), r.uiLayerShow(!0)
        }, v.deactivate = function() {
            r.uiLayerShow(!1)
        }, v.updateUIDown = function(t, o) {
            var l = x();
            r.currentLayer = l, h && (a = e.cnvs.copyCanvas(l.canvas)), r.uiLayerShow(!0), i = [[t + .5 | 0, o + .5 | 0]], n.reset(), n.margin = (m + .5 | 0) + c, n.include(t, o);
            var s = l.canvas.getContext("2d");
            M(s, t, o, !0), r.recomposite()
        }, v.updateUIMove = function(e, t) {
            r.uiLayerShow(!0), _(e, t), r.recomposite()
        }, v.updateUIDraw = function(e, t) {
            var o = r.currentLayer, a = o.canvas.getContext("2d");
            i.push([e + .5 | 0, t + .5 | 0]), M(a, e, t, !1), n.include(e, t), r.uiLayerShow(!0), _(e, t), r.recomposite()
        }, v.commit = function(t, o, l, s) {
            var u, f;
            if (o && l) {
                var c = s && i.length > 1 ? C(i) : i;
                if (y(), u = r.layers[r.currentLayerIndex], !u.canvas)
                    return;
                f = e.cnvs.copyCanvas(u.canvas, n.x0, n.y0, n.w, n.h), r.actions.push([o, this, [u.name, f, n.x0, n.y0]], [l, this, [u.name, c, m]], {action: t,radius: m + .5 | 0,pointlist: c}), r.actions.redo()
            } else {
                u = r.currentLayer;
                var d = u.canvas.getContext("2d");
                M(d, 0, 0, !1, !0), r.recomposite(), f = e.cnvs.copyCanvas(u.canvas, n.x0, n.y0, n.w, n.h);
                var h = e.cnvs.copyCanvas(a, n.x0, n.y0, n.w, n.h);
                r.actions.push([w, this, [u.name, h, n.x0, n.y0]], [b, this, [u.name, f, n.x0, n.y0]], {action: t,erase: p,radius: m + .5 | 0,softness: 0,color: e.util.color_to_rgb(g),pointlist: i}), r.actions.redoFake()
            }
            i = null, a = null
        }, v.radius = function() {
            return m
        }, v.setRadius = function(e) {
            m = e
        }, v.setColor = function(e) {
            g = e
        }, v.setErase = function(e) {
            p = e
        }, v
    }, e.BrushCursor = function() {
        var t, a = {}, i = function() {
            t = o.createElement("div"), t.className = "avpw_draw_cursor", e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "getCanvasControlsElement").append(t)
        };
        return a.show = function() {
            t || i(), avpw$(t).fadeIn()
        }, a.hide = function() {
            t && avpw$(t).hide()
        }, a.setPosition = function(o, r) {
            var a = e.controlsWidgetInstance.canvasUI.viewport.getRatio();
            t.style.top = (r / a + .5 | 0) + "px", t.style.left = (o / a + .5 | 0) + "px"
        }, a.setSize = function(e) {
            t && (t.style.width = 2 * e + "px", t.style.height = 2 * e + "px", t.style.marginLeft = -e + "px", t.style.marginTop = -e + "px")
        }, r.on("canvas:showBrushCursor", a.show), r.on("canvas:hideBrushCursor", a.hide), r.on("canvas:setBrushPosition", a.setPosition), r.on("canvas:setBrushSize", a.setSize), a
    }(), e.PaintWidget = function(t, r, a, i, n, l, s) {
        this.imgElementClean = null, this.busy = !1, this.moduleLoadedCallback = {}, this.canvasReadyCallback = avpw$.Deferred ? new avpw$.Deferred : null, this.active = null, this.layers = [], this.dirtyRect = {bbox: new e.Bbox,dirty: !1}, this.canvas = o.createElement("canvas"), this.setDimensions(t, r), this.canvas.id = "avpw_canvas_element", this.dirty = !1, this.actions = a, i && i.init && (i.init(this), this.modeManager = i), this.filterManager = n, this.overlayRegistry = l, this.imageBorderManager = s
    }, e.PaintWidget.prototype.setOrigSize = function(e, t) {
        this._origWidth = e + .5 | 0, this._origHeight = t + .5 | 0
    }, e.PaintWidget.prototype.getOrigSize = function() {
        return {width: this._origWidth,height: this._origHeight}
    }, e.PaintWidget.prototype.c2a = function(e, t, o) {
        var r, a, i, n = this.getScaledSize();
        return n.hiresWidth && n.hiresHeight ? e != n.width || t != n.height ? (r = n.hiresWidth / n.width, a = e * r, o && (a = a + .5 | 0), r = n.hiresHeight / n.height, i = t * r, o && (i = i + .5 | 0), {width: e,height: t,hiresWidth: a,hiresHeight: i}) : n : {width: e,height: t}
    }, e.PaintWidget.prototype.a2c = function(e, t, o) {
        var r, a, i, n = this.getScaledSize();
        return n.hiresWidth && n.hiresHeight ? e != n.width || t != n.height ? (r = n.width / n.hiresWidth, a = e * r, o && (a = a + .5 | 0), r = n.height / n.hiresHeight, i = t * r, o && (i = i + .5 | 0), {width: a,height: i,hiresWidth: e,hiresHeight: t}) : n : {width: e,height: t}
    }, e.PaintWidget.prototype.shutdown = function() {
        this.setMode(null), this.modeManager && (this.modeManager.shutdown(), this.modeManager = null), this.actions = null, this.layers = null, this.currentLayer = null, this.canvas = null, this.moduleLoadedCallback = null, this.canvasReadyCallback = null, this.waitThrobberShow = null
    }, e.PaintWidget.prototype.moduleLoaded = function(t, o) {
        var r, a = this, i = [], n = function() {
            r.done(function() {
                o && o.apply(this, [t])
            }), a.moduleLoadedCallback[t] = r
        }, l = function(t, o) {
            var l, s;
            for (l = 0; l < t.length; l++)
                s = e.controlsWidgetInstance.assetManager.getContentURLByVersionKey(t[l].versionKey), s && !function() {
                    var r = new avpw$.Deferred;
                    o === e.controlsWidgetInstance.assetManager.types.EFFECT ? a.filterManager.loadPack(t[l].identifier, s, function() {
                        r.resolve()
                    }, o) : o === e.controlsWidgetInstance.assetManager.types.IMAGEBORDER ? a.imageBorderManager.loadPack(t[l].identifier, s, r.resolve, o) : o === e.controlsWidgetInstance.assetManager.types.FONTPACK ? e.util.loadFile(s, "js", r.resolve, o) : r.resolve(), i.push(r)
                }();
            i.push(a.canvasReadyCallback), r = avpw$.when.apply(a, i), n()
        };
        return a.moduleLoadedCallback && (r = a.moduleLoadedCallback[t]), r ? n() : "effects" === t ? e.controlsWidgetInstance.assetManager && e.controlsWidgetInstance.assetManager.getAssets("EFFECT", l) : "frames" === t ? e.controlsWidgetInstance.assetManager && e.controlsWidgetInstance.assetManager.getAssets("IMAGEBORDER", l) : "textwithfont" === t ? e.controlsWidgetInstance.assetManager && e.controlsWidgetInstance.assetManager.getAssets("FONTPACK", l) : (r = avpw$.when(a.canvasReadyCallback), n()), r ? r.isResolved() : !1
    }, e.PaintWidget.prototype.setDimensions = function(t, o) {
        this.canvas.width = this.width = t, this.canvas.height = this.height = o, e.controlsWidgetInstance && (e.controlsWidgetInstance.canvasUI && e.controlsWidgetInstance.canvasUI.resetOffset(), e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "scaleCanvas"))
    }, e.PaintWidget.prototype.getScaledSize = function() {
        return this.actions ? this.actions.getDims() : {width: this.width,height: this.height}
    }, e.PaintWidget.prototype.showWaitThrobber = function(e, t) {
        t && setTimeout(t, 5)
    }, e.PaintWidget.prototype.getBackgroundLayerIndex = function() {
        return 0
    }, e.PaintWidget.prototype.findLayerIndexByName = function(e) {
        var t;
        for (t = 0; t < this.layers.length; t++)
            if (this.layers[t].name === e)
                return t;
        return -1
    }, e.PaintWidget.prototype.getLayerByName = function(e) {
        var t = this.findLayerIndexByName(e);
        return -1 === t ? null : this.layers[t]
    }, e.PaintWidget.prototype.moveLayerByName = function(e, t, o) {
        var r = this.getLayerByName(e);
        null !== r && (r.translateX = t, r.translateY = o)
    }, e.PaintWidget.prototype.setCurrentLayerByName = function(e) {
        var t = this.findLayerIndexByName(e);
        return -1 === t ? !1 : (this.currentLayerIndex = t, this.currentLayer = this.layers[t], !0)
    }, e.PaintWidget.prototype.layerToTop = function(e) {
        for (var t = this.layers[e]; e < this.layers.length - 1; ) {
            var o = parseInt(e, 10) + 1;
            this.layers[e] = this.layers[o], e++
        }
        this.layers[e] = t
    }, e.PaintWidget.prototype.layerDelete = function(e) {
        for (; e < this.layers.length - 1; ) {
            var t = parseInt(e, 10) + 1;
            this.layers[e] = this.layers[t], e++
        }
        this.layers.length -= 1
    }, e.PaintWidget.prototype.uiLayerReset = function() {
        var t = this.findLayerIndexByName("_ui");
        if (-1 == t) {
            var r = o.createElement("canvas");
            r.width = this.canvas.width, r.height = this.canvas.height;
            var a = new e.Layer({canvas: r,name: "_ui"});
            a.hidden = !0, this.layers.push(a)
        } else
            this.layers[t].hidden = !0, this.layers[t].canvas.width = this.canvas.width, this.layers[t].canvas.height = this.canvas.height, this.layerToTop(t)
    }, e.PaintWidget.prototype.uiLayerShow = function(e) {
        var t = this.findLayerIndexByName("_ui");
        -1 != t && (this.layers[t].hidden = !e, e || this.recomposite())
    }, e.PaintWidget.prototype.uiLayerClear = function() {
        var e = this.getLayerByName("_ui"), t = e.canvas.getContext("2d");
        t.globalCompositeOperation = "copy", t.clearRect(0, 0, e.canvas.width, e.canvas.height), t.globalCompositeOperation = "source-over"
    }, e.PaintWidget.prototype.uiLayerDrawCircleSelection = function(t, o, r, a) {
        var i = this.getLayerByName("_ui"), n = i.canvas.getContext("2d"), l = 1;
        a || (n.globalCompositeOperation = "copy", n.clearRect(0, 0, i.canvas.width, i.canvas.height));
        var s = 1;
        e.controlsWidgetInstance.canvasUI && (s = e.controlsWidgetInstance.canvasUI.viewport.getRatio()), l = l * s + .5 | 0, n.globalCompositeOperation = "source-over", n.lineWidth = l, n.globalAlpha = 1, n.beginPath(), n.strokeStyle = "#ffffff", n.arc(t, o, r, 0, 2 * Math.PI, !1), n.closePath(), n.stroke();
        var u = r - l;
        u > 0 && (n.beginPath(), n.strokeStyle = "#000000", n.arc(t, o, u, 0, 2 * Math.PI, !1), n.closePath(), n.stroke())
    }, e.PaintWidget.prototype.dirtyRectEnable = function(e) {
        this.dirtyRect.dirty = e
    }, e.PaintWidget.prototype.recomposite = function(t) {
        var o, r;
        e.cnvs.clearCanvas(this.canvas);
        var a = this.canvas.getContext("2d");
        for (null == t ? t = 0 : (t--, 0 > t && (t = 0)), a.setTransform(1, 0, 0, 1, 0, 0), o = t; o < this.layers.length; o++)
            r = this.layers[o], r.hidden || (a.save(), this.dirtyRect.dirty && (a.beginPath(), a.rect(this.dirtyRect.bbox.x0, this.dirtyRect.bbox.y0, this.dirtyRect.bbox.w, this.dirtyRect.bbox.h), a.clip(), a.closePath()), a.translate(r.translateX, r.translateY), a.rotate(r.rotate), a.scale(r.scaleX, r.scaleY), null != r.centerX && null != r.centerY && a.translate(-r.centerX, -r.centerY), a.globalAlpha = null != r.alpha ? r.alpha : 1, a.drawImage(r.drawable, 0, 0), a.restore());
        null != this.debugPoint && (a.setTransform(1, 0, 0, 1, 0, 0), a.strokeStyle = "#00ffff", a.lineWidth = 1, a.lineCap = "round", a.lineJoin = "round", a.strokeRect(this.debugPoint.x - 2, this.debugPoint.y - 2, 4, 4))
    }, e.PaintWidget.prototype.makeThumbFlat = function(e, t, o) {
        this.recomposite(), o || (o = this.canvas);
        var r = e.width, a = e.height, i = e.getContext("2d");
        i.globalCompositeOperation = "copy", i.clearRect(0, 0, e.width, e.height), i.globalCompositeOperation = "source-over";
        var n = r / o.width, l = a / o.height;
        if (t)
            if (n > l) {
                var s = o.width * l, u = (r - s) / 2;
                i.drawImage(o, 0, 0, o.width, o.height, u, 0, s, a)
            } else {
                var f = o.height * n, c = (a - f) / 2;
                i.drawImage(o, 0, 0, o.width, o.height, 0, c, r, f)
            }
        else if (l > n) {
            var s = o.width * l, u = -(s - r) / 2;
            i.drawImage(o, 0, 0, o.width, o.height, u, 0, s, a)
        } else {
            var f = o.height * n, c = -(f - a) / 2;
            i.drawImage(o, 0, 0, o.width, o.height, 0, c, r, f)
        }
        return e
    }, e.PaintWidget.prototype.exportImage = function(t, r) {
        t = t || "image/png", this.uiLayerShow(!1), this.recomposite();
        var a, i = function() {
            var e = o.createElement("canvas"), t = e.toDataURL("image/png");
            return 0 == t.indexOf("data:image/png")
        };
        return a = i() ? this.canvas.toDataURL(t) : e.toBitmapURL(this.canvas), r && "function" == typeof r && r.apply(this, [a]), !0
    }, e.PaintWidget.prototype.addLayer = function(e) {
        return this.layers.push(e), this.layers.length - 1
    }, e.PaintWidget.prototype.setMode = function(e) {
        if (null !== this.active && void 0 !== this.active.deactivate && this.active.deactivate(), null !== e && void 0 !== e && "" !== e) {
            var t = this.module[e];
            void 0 !== t && (this.active = t, void 0 !== this.active.activate && this.active.activate(this))
        } else
            this.active = null
    }, e.PaintWidget.prototype.undo = function() {
        this.active && void 0 !== this.active.userUndo && this.active.userUndo(), this.actions.undo(), this.active && void 0 !== this.active.userPostUndo && this.active.userPostUndo()
    }, e.PaintWidget.prototype.redo = function() {
        this.active && void 0 !== this.active.userRedo && this.active.userRedo(), this.actions.redo(), this.active && void 0 !== this.active.userPostRedo && this.active.userPostRedo()
    }, e.PaintWidget.prototype.getBacking = function(e, t, o, r) {
        var a = this.canvas.getContext("2d"), i = a.getImageData(e, t, o, r);
        return i
    }, e.PaintWidget.prototype.getBackingAll = function() {
        var e = this.canvas.getContext("2d");
        return e.getImageData(0, 0, this.canvas.width, this.canvas.height)
    }, e.PaintWidget.prototype.putBacking = function(e, t, o, r) {
        var a = e.canvas.getContext("2d");
        a.putImageData(t, o, r)
    }, e.PaintWidget.prototype.rotate90 = function() {
        var e, t, r = function(e, t) {
            var o;
            e.rotate += t * Math.PI / 180, 90 == t ? (o = e.translateX, e.translateX = this.canvas.width - e.translateY, e.translateY = o) : 270 == t ? (o = e.translateX, e.translateX = e.translateY, e.translateY = this.canvas.height - o) : 180 == t && (e.translateX = this.canvas.width - e.translateX, e.translateY = this.canvas.height - e.translateY)
        };
        return function(a) {
            if (a %= 360, 0 > a && (a += 360), a = 90 * parseInt(a / 90, 10), 0 != a) {
                a % 180 != 0 && this.setDimensions(this.canvas.height, this.canvas.width);
                for (e = 0; e < this.layers.length; e++) {
                    var i = this.layers[e];
                    if (null != i.canvas)
                        if ("module_text" == i.tag)
                            r(i, a);
                        else {
                            var n = o.createElement("canvas");
                            n.width = this.canvas.width, n.height = this.canvas.height, t = n.getContext("2d"), t.setTransform(1, 0, 0, 1, 0, 0), t.translate(n.width / 2, n.height / 2), t.rotate(3.14159265358979 * a / 180), t.translate(-i.canvas.width / 2, -i.canvas.height / 2), t.globalCompositeOperation = "copy", t.drawImage(i.canvas, 0, 0), t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), i.canvas = i.drawable = n
                        }
                    else
                        null != i.image && r(i, a)
                }
                this.recomposite()
            }
        }
    }(), e.PaintWidget.prototype._dupLayerAttrs = function(e, t) {
        1 == t.hidden && (e.hidden = !0), void 0 != t.alpha && (e.alpha = t.alpha), e.rotate = t.rotate, e.scaleX = t.scaleX, e.scaleY = t.scaleY, e.translateX = t.translateX, e.translateY = t.translateY, null != t.centerX && (e.centerX = t.centerX), null != t.centerY && (e.centerY = t.centerY), null != t.tag && (e.tag = t.tag), null != t.module_data && (e.module_data = t.module_data)
    }, e.PaintWidget.prototype.duplicateAllLayers = function() {
        var t, r, a, i = [];
        for (t = 0; t < this.layers.length; t++)
            if ("_ui" != this.layers[t].name)
                if (null != this.layers[t].canvas) {
                    var n = o.createElement("canvas");
                    n.width = this.layers[t].canvas.width, n.height = this.layers[t].canvas.height, a = n.getContext("2d"), a.drawImage(this.layers[t].canvas, 0, 0, n.width, n.height), r = new e.Layer({canvas: n,name: this.layers[t].name}), this._dupLayerAttrs(r, this.layers[t]), i.push(r)
                } else
                    null != this.layers[t].image && (r = new e.Layer({image: this.layers[t].image,name: this.layers[t].name}), this._dupLayerAttrs(r, this.layers[t]), i.push(r));
        return i
    }, e.PaintWidget.prototype.duplicateAllLayersFrom = function(t) {
        var r, a;
        for (r = 0; r < t.length; r++)
            if ("_ui" != t[r].name) {
                var i = this.getLayerByName(t[r].name);
                null === i && (i = new e.Layer({name: t[r].name}), this.layers.push(i)), null != t[r].canvas ? (null == i.canvas && (i.canvas = o.createElement("canvas")), i.drawable = i.canvas, i.canvas.width = t[r].canvas.width, i.canvas.height = t[r].canvas.height, a = i.canvas.getContext("2d"), a.drawImage(t[r].canvas, 0, 0, t[r].canvas.width, t[r].canvas.height), this._dupLayerAttrs(i, t[r])) : null != t[r].image && (i.image = t[r].image, i.drawable = i.image, this._dupLayerAttrs(i, t[r]))
            }
    }, e.PaintWidget.prototype.resizeAllLayers = function(t, r, a) {
        var i, n, l, s, u = [], f = this.width;
        for (this.setDimensions(t, r), i = 0; i < this.layers.length; i++) {
            if (null != this.layers[i].canvas) {
                var c = o.createElement("canvas");
                c.width = t, c.height = r, n = c.getContext("2d"), n.drawImage(this.layers[i].canvas, 0, 0, t, r), l = new e.Layer({canvas: c,name: this.layers[i].name}), this._dupLayerAttrs(l, this.layers[i])
            } else
                null != this.layers[i].image && (l = new e.Layer({image: this.layers[i].image,name: this.layers[i].name}), this._dupLayerAttrs(l, this.layers[i]));
            l && (a && (l.image || "module_text" === l.tag) && (s = t / f, l.translateX *= s, l.translateY *= s, l.scaleX *= s, l.scaleY *= s), u.push(l))
        }
        this.layers = u, this.recomposite()
    }, e.PaintWidget.prototype.resizeAllLayersQnD = function(e, t) {
        var o;
        for (this.setDimensions(e, t), o = 0; o < this.layers.length; o++)
            null != this.layers[o].canvas && (this.layers[o].canvas.width = e, this.layers[o].canvas.height = t)
    }, e.PaintWidget.prototype.flattenAllLayers = function() {
        var t = this.getLayerByName("_ui");
        this.uiLayerShow(!1), this.recomposite(), this.layers.length = 0;
        var r = o.createElement("canvas");
        r.width = this.canvas.width, r.height = this.canvas.height;
        var a = new e.Layer({canvas: r,name: "background"});
        this.layers.push(a), t && this.layers.push(t);
        var i = r.getContext("2d");
        i.drawImage(this.canvas, 0, 0)
    }, e.PaintWidget.prototype.cropAllLayers = function(t, r, a, i) {
        var n, l, s, u, f, c = [];
        for (this.setDimensions(a, i), n = 0; n < this.layers.length; n++) {
            if (u = this.layers[n], null != u.canvas)
                f = "module_text" == u.tag ? "textcanvas" : "canvas";
            else {
                if (null == u.image)
                    continue;
                f = "image"
            }
            switch (f) {
                case "canvas":
                    var d = o.createElement("canvas");
                    d.width = a, d.height = i, l = d.getContext("2d"), l.drawImage(this.layers[n].canvas, -t, -r, this.layers[n].canvas.width, this.layers[n].canvas.height), s = new e.Layer({canvas: d,name: this.layers[n].name}), this._dupLayerAttrs(s, this.layers[n]), c.push(s);
                    break;
                case "image":
                    s = new e.Layer({image: this.layers[n].image,name: this.layers[n].name}), this._dupLayerAttrs(s, this.layers[n]), s.translateX -= t, s.translateY -= r, c.push(s);
                    break;
                case "textcanvas":
                    var d = o.createElement("canvas");
                    l = d.getContext("2d"), d.width = u.canvas.width, d.height = u.canvas.height, l.drawImage(this.layers[n].canvas, 0, 0), s = new e.Layer({canvas: d,name: this.layers[n].name}), this._dupLayerAttrs(s, this.layers[n]), s.translateX -= t, s.translateY -= r, c.push(s)
            }
        }
        this.layers = c, this.recomposite()
    }, e.PaintWidget.prototype.module = {}, e.PaintWidget.prototype.module.flatten = function() {
        var e, t = {}, o = function(t) {
            e.duplicateAllLayersFrom(t), e.recomposite()
        }, r = function() {
            e.flattenAllLayers(), e.recomposite()
        };
        return t.activate = function(t) {
            e = t
        }, t.flatten = function() {
            var t = e.duplicateAllLayers();
            e.actions.push([o, this, [t]], [r, this, []], {action: "flatten"}, null, {implicit: !0}), e.actions.redo()
        }, t
    }(), e.PaintWidget.prototype.module.colorsplash = function() {
        var t, o, r, a, i, n, l, s, u, f, c = {}, d = {smart: {IS_FREE_HAND: !1,SIGMA_COLOR: 10,REVERSE: 0},free: {IS_FREE_HAND: !0,SIGMA_COLOR: 99999999,REVERSE: 0},erase: {IS_FREE_HAND: !0,SIGMA_COLOR: 99999999,REVERSE: 1}}, h = function(s) {
            s || (s = !0);
            var u = t.layers[t.currentLayerIndex];
            if (null != u.canvas) {
                s && (f = t.duplicateAllLayers(), t.flattenAllLayers(), u = t.layers[t.currentLayerIndex]);
                var c = e.cnvs.copyCanvas(u.canvas), d = u.canvas.getContext("2d"), h = t.width, m = t.height;
                o = e.cnvs.getCanvasPixelData(c), a = o.data, r = e.cnvs.getCanvasPixelData(c), i = r.data, n = e.cnvs.getCanvasPixelData(c).data;
                var g = e.require("../../../src/js/core/copy");
                l = g.makeData(h * m);
                var p = e.require("../../../src/js/mask-draw/colorsplash");
                return p.init(n, h, m, l), p.preview(i, a, n, l, h, m), d.putImageData(r, 0, 0), t.recomposite(), u
            }
        }, m = function(e, o) {
            t.duplicateAllLayersFrom(o), t.recomposite()
        };
        c.getBrushSettingsForMode = function(e) {
            return d[e]
        };
        var g = function(e) {
            c.resetImageData();
            var o = t.layers[t.currentLayerIndex];
            o.canvas.getContext("2d").putImageData(e, 0, 0), t.recomposite()
        };
        return c.commit = function() {
            t.actions.push([m, this, [o, f]], [g, this, [r]], u), t.actions.redoFake()
        }, c.recordStroke = function(e) {
            u.strokes.push(e)
        }, c.applySplash = function(o, r, i, n, u, f, c) {
            var d = t.width, h = t.height;
            s = s || e.require("../../../src/js/mask-draw/colorsplash"), s.draw(a, d, h, l, {posX: o,posY: r,startX: i,startY: n,addMask: u,radius: f,sigmaC: c,alpha: 1})
        }, c.preview = function(e, o, u, f) {
            var c = t.width, d = t.height;
            s.preview(i, a, n, l, c, d, e, o, u, f);
            var h = t.layers[t.currentLayerIndex], m = h.canvas.getContext("2d");
            m.putImageData(r, 0, 0), t.recomposite()
        }, c.reset = function() {
            var e = t.layers[t.currentLayerIndex], r = e.canvas.getContext("2d");
            r.putImageData(o, 0, 0), t.recomposite()
        }, c.getColorAtPosition = function(e, o) {
            e = Math.floor(e), o = Math.floor(o);
            var r = t.width, i = t.height;
            if (0 > e ? e = 0 : e > r - 1 && (e = r - 1), 0 > o ? o = 0 : o > i - 1 && (o = i - 1), a)
                var n = a[4 * (r * o + e)], l = a[4 * (r * o + e) + 1], s = a[4 * (r * o + e) + 2], u = a[4 * (r * o + e) + 3];
            return [n, l, s, u]
        }, c.initImage = function() {
            h()
        }, c.activate = function(e) {
            t = e, u = {action: "tools",toolname: "colorsplash",strokes: []}
        }, c.deactivate = function() {
            s = null
        }, c.readAction = function(e, o) {
            var r, a, i, n, l, s, u, f;
            if (e && e.strokes && (l = e.strokes.length, l > 0)) {
                for (c.initImage(), r = 0; l > r; r++)
                    if (i = e.strokes[r], c.recordStroke(i), i.pointlist)
                        for (s = i.pointlist.length, a = 0; s > a; a++)
                            n = i.pointlist[a], (0 === a || "free" === i.brushmode) && (u = n[0], f = n[1]), c.applySplash(n[0], n[1], u, f, d[i.brushmode].REVERSE, i.radius, d[i.brushmode].SIGMA_COLOR, 1);
                c.preview(0, 0, t.width, t.height), c.commit()
            }
            o && o.call(this)
        }, c.resetImageData = function() {
            h(!0)
        }, c
    }(), e.PaintWidget.prototype.module.effects = function() {
        var t, o, r, a, i = null, n = !1, l = {}, s = function(a, n, l, s) {
            var u = t.getLayerByName(a);
            if (null != u.canvas) {
                o || (s && (r = t.duplicateAllLayers(), t.flattenAllLayers(), u = t.getLayerByName(a)), o = e.cnvs.copyCanvas(u.canvas));
                var f = u.canvas, c = f.getContext("2d"), d = (e.cnvs.getCanvasPixelData(o), e.cnvs.getCanvasPixelData(o));
                i = i || e.require("./MoaLiteProclistManager"), i.MLPLRunEffect(t.filterManager.getEffectById(n), d, l), c.putImageData(d, 0, 0), t.recomposite()
            }
        }, u = function(o, r) {
            i = i || e.require("./MoaLiteProclistManager");
            var a = {width: t.width,height: t.height,data: {moaGL: t.moaGL}};
            i.MLPLRunEffect(t.filterManager.getEffectById(o), a, r)
        }, f = function(a) {
            var i, n;
            if (a) {
                n = t.filterManager.getEffectById(a.filterName), i = {action: "effects",flatten: a.flatten,contentIdentifier: n.identifier,packIdentifier: n.packIdentifier}, i = e.util ? e.util.extend(i, a.filterParams) : i;
                var l = t.currentLayerIndex, s = t.layers[l];
                e.featherGLEnabled && (s = {name: "test"}), t.actions.push([c, this, [s.name, o, r]], [d, this, [s.name, a.filterName, a.filterParams, a.flatten]], i), t.actions.redoFake()
            }
        }, c = function(e, o, r) {
            if (r)
                t.duplicateAllLayersFrom(r);
            else {
                var a = t.getLayerByName(e), i = a.canvas.getContext("2d");
                i.globalCompositeOperation = "copy", i.drawImage(o, 0, 0), i.globalCompositeOperation = "source-over"
            }
            t.recomposite()
        }, d = function(t, i, n, l) {
            e.featherGLEnabled ? u(i, n, l) : s(t, i, n, l), o = null, r = null, a = !0
        };
        return l.activate = function(e) {
            n = !1, t = e, a = !1
        }, l.deactivate = function() {
            t.busy && (n = !0, t.actions.undoFake(), t.busy = !1), o = null, r = null, i = null
        }, l.makeThumb = function(o, r) {
            t.makeThumbFlat(r);
            var a = r.width, n = r.height, l = r.getContext("2d"), s = l.getImageData(0, 0, a, n);
            i = i || e.require("./MoaLiteProclistManager");
            var u = t.filterManager.getEffectById(o);
            u && i.MLPLRunEffect(u, s), l.putImageData(s, 0, 0)
        }, l.applyPreview = function(o, r, i) {
            if (e.featherGLEnabled)
                u(o, r, i);
            else {
                a ? (t.actions.undo(), a = !1) : t.actions.undoFake(), t.dirty = !0;
                var n = t.currentLayerIndex, l = t.layers[n];
                if (null == l.canvas)
                    return
            }
            f({filterName: o,filterParams: r,flatten: i})
        }, l.commit = function() {
            e.featherGLEnabled && t.moaGL.commit()
        }, l.readAction = function(e, t) {
            e && e.name && l.applyPreview(e.name, e, e.flatten), t && t.call(this)
        }, l
    }(), e.PaintWidget.prototype.module.frames = function() {
        var t, a, i, n, l = {};
        l.createFrameOverlay = function() {
            n = o.createElement("canvas"), n.width = e.paintWidgetInstance.canvas.width, n.height = e.paintWidgetInstance.canvas.height, n.style.backgroundColor = "blue", s(), avpw$("#avpw_canvas_embed").append(n), r.on("canvas:resize layout:resize", s)
        };
        var s = function() {
            if (n) {
                var e = avpw$(n);
                e.attr("style", avpw$("#avpw_canvas_element").attr("style")), e.css({left: 10,top: 10,position: "absolute"})
            }
        };
        l.removeFrameOverlay = function() {
            n && (avpw$(n).remove(), n = null), r.off("canvas:resize layout:resize", s)
        }, l.commitFrameOverlay = function() {
            if (n) {
                var t = new Image;
                t.onload = function() {
                    e.paintWidgetInstance.moaGL.createEffect(), e.paintWidgetInstance.moaGL.drawOverlay(t, t.width / 2, t.height / 2, 1, 1, 0), e.paintWidgetInstance.moaGL.finalizeEffect(), e.paintWidgetInstance.moaGL.commit()
                }, t.src = n.toDataURL()
            }
        };
        var u = function(e, o, r) {
            var a, i, n, l, s, u, f, c, d = e.getContext("2d"), h = e.width, m = e.height, g = (o.l.w + o.t.h + o.r.w + o.b.h) / 4, p = r * Math.min(h, m) * (o.l.w / g), v = r * Math.min(h, m) * (o.r.w / g), _ = r * Math.min(h, m) * (o.t.h / g), x = r * Math.min(h, m) * (o.b.h / g), y = p * (o.l.h / o.l.w), M = v * (o.r.h / o.r.w), C = _ * (o.t.w / o.t.h), w = x * (o.b.w / o.b.h), b = Math.round(p), D = Math.round(v), S = Math.round(_), P = Math.round(x), T = Math.max(1, Math.round((m - _ - x) / y)), E = Math.max(1, Math.round((m - _ - x) / M)), F = Math.max(1, Math.round((h - p - v) / C)), L = Math.max(1, Math.round((h - p - v) / w)), y = (m - _ - x) / T, M = (m - _ - x) / E, C = (h - p - v) / F, w = (h - p - v) / L;
            for (d.setTransform(b / o.tl.w, 0, 0, S / o.tl.h, 0, 0), d.drawImage(o.tl.img, 0, 0), d.setTransform(D / o.tr.w, 0, 0, S / o.tr.h, h - D, 0), d.drawImage(o.tr.img, 0, 0), d.setTransform(D / o.br.w, 0, 0, P / o.br.h, h - D, m - P), d.drawImage(o.br.img, 0, 0), d.setTransform(b / o.bl.w, 0, 0, P / o.bl.h, 0, m - P), d.drawImage(o.bl.img, 0, 0), n = S, l = 0, a = 0; T > a; a++)
                u = _ + a * y, s = n, f = Math.round(u - s + y), d.setTransform(b / o.l.w, 0, 0, f / o.l.h, l, s), d.drawImage(o.l.img, 0, 0), n = s + f;
            for (i = b, s = 0, a = 0; F > a; a++)
                u = p + a * C, l = i, c = Math.round(u - l + C), d.setTransform(c / o.t.w, 0, 0, S / o.t.h, l, s), d.drawImage(o.t.img, 0, 0), i = l + c;
            for (n = S, l = h - D, a = 0; E > a; a++)
                u = _ + a * M, s = n, f = Math.round(u - s + M), d.setTransform(D / o.r.w, 0, 0, f / o.r.h, l, s), d.drawImage(o.r.img, 0, 0), n = s + f;
            for (i = b, s = m - P, a = 0; L > a; a++)
                u = p + a * w, l = i, c = Math.round(u - l + w), d.setTransform(c / o.b.w, 0, 0, P / o.b.h, l, s), d.drawImage(o.b.img, 0, 0), i = l + c;
            d.setTransform(1, 0, 0, 1, 0, 0), t.recomposite()
        }, f = function(e, o, r) {
            t.imageBorderManager.tileBorder(o, function(r) {
                var a = t.imageBorderManager.getEffectById(o).images.width || .1;
                u(e, r, a)
            }, r)
        }, c = function(o, r) {
            if (e.featherGLEnabled && n)
                n.width = n.width, f(n, r);
            else {
                var a = t.getLayerByName(o);
                if (null == a.canvas)
                    return;
                f(a.canvas, r)
            }
        }, d = function(e) {
            var o = t.findLayerIndexByName(e);
            -1 != o && t.layerDelete(o), t.recomposite()
        }, h = function(e, t, o) {
            m(e), c(e, t, o), i = !0
        }, m = function(r) {
            r = r || a;
            var i = t.getLayerByName(r);
            if (!i) {
                var n = o.createElement("canvas");
                n.width = t.width, n.height = t.height, i = new e.Layer({canvas: n,name: r}), t.addLayer(i), t.uiLayerReset()
            }
            return i.canvas.width != t.width && (i.canvas.width = t.width), i.canvas.height != t.height && (i.canvas.height = t.height), i
        };
        return l.activate = function(e) {
            var o = Math.floor(4294967295 * Math.random()).toString(16), r = "_module_imageborder-" + o;
            a = r, t = e, i = !1
        }, l.deactivate = function() {
            a = void 0, i = !1
        }, l.applyPreview = function(o, r, n) {
            if (i) {
                var l = t.getLayerByName(a);
                l && l.canvas && (l.canvas.width = l.canvas.width), t.actions.undoFake(), i = !1
            } else
                t.actions.undoFake();
            var s = t.imageBorderManager.getEffectById(o), u = {action: "imageborders",name: o,flatten: r,contentIdentifier: s.identifier,packIdentifier: s.packIdentifier,bordersize: s.images ? s.images.width : .1};
            t.dirty = !0, t.actions.push([d, this, [a]], [h, this, [a, o, r]], u), e.util.nextFrame(function() {
                t.actions.redo(), n && n()
            })
        }, l.makeThumb = function(e, t) {
            f(e, t, !0)
        }, l.readAction = function(e, t) {
            e && e.name ? l.applyPreview(e.name, e.flatten, t) : t && t.call(this)
        }, l
    }(), e.PaintWidget.prototype.module.overlay = function() {
        var t, o = {}, r = function(e) {
            var o = t.findLayerIndexByName(e);
            -1 != o && t.layerDelete(o), t.recomposite()
        }, a = function(o, r, a, i, n, l, s) {
            var u = new e.Layer({name: o,image: r});
            u.tag = "module_overlay", u.centerX = u.drawable.width / 2 + .5 | 0, u.centerY = u.drawable.height / 2 + .5 | 0, null != s ? (u.translateX = a, u.translateY = i, u.rotate = s, u.scaleX = n, u.scaleY = l) : (u.translateX = t.width / 2 + .5 | 0, u.translateY = t.height / 2 + .5 | 0), t.layers.push(u), t.recomposite()
        };
        o.activate = function(o) {
            t = o, e.featherGLEnabled && t.moaGL.createEffect()
        };
        var i = function(e, o, r, a, i, n) {
            t.moaGL.createEffect(), t.moaGL.drawOverlay(e, o, r, a, i, n), t.moaGL.finalizeEffect(), t.moaGL.commit()
        };
        return o.addOverlay = function(o, n, l, s, u, f, c) {
            if (!e.featherGLEnabled) {
                var d;
                o || (d = Math.floor(4294967295 * Math.random()).toString(16), o = "_module_overlay-" + d);
                var h = t.overlayRegistry.getElement(n), m = t.overlayRegistry.getHiRes(n), g = t.overlayRegistry.getAsset(n), p = [o, h, l, s, u, f, c];
                return t.actions.push([r, this, [o]], [a, this, p], {action: "addsticker",url: m || n,id: o,center: [l, s],scale: [u, f],rotation: c,external: m ? 1 : 0,size: [h.width, h.height],urls: [n, m],contentIdentifier: g.identifier,packIdentifier: g.packIdentifier}), t.actions.redo(), o
            }
            {
                var m = n;
                t.overlayRegistry.getElement(m, function(e) {
                    var t;
                    t = e.currentTarget ? e.currentTarget : e, i(t, l, s, u, f, c)
                })
            }
        }, o.readAction = function(e, r) {
            var a, i, n, l, s, u;
            e && e.url ? (e.center && e.center.length && (n = e.center[0], l = e.center[1]), e.scale && e.scale.length && (s = e.scale[0], u = e.scale[1]), e.urls && e.urls.length ? (a = e.urls[0], i = e.urls[1]) : (a = e.url, i = e.url), t.overlayRegistry.add(a, i), t.overlayRegistry.getElement(a, function() {
                o.addOverlay("", a, n, l, s, u, e.rotation), r && r.call(this)
            })) : r && r.call(this)
        }, o
    }(), e.PaintWidget.prototype.setBackground = function(t) {
        var r, a;
        this.imgElementClean = t;
        var i = o.createElement("canvas");
        return i.width = this.width, i.height = this.height, r = i.getContext("2d"), r.drawImage(t, 0, 0, this.width, this.height), a = e.cnvs.isOriginClean(r), this.addLayer(new e.Layer({canvas: i,name: "background"})), this.recomposite(), this.currentLayerIndex = 0, this.currentLayer = this.layers[this.currentLayerIndex], this.canvasReadyCallback && this.canvasReadyCallback.resolve(), a
    }, e.PaintWidget.prototype.SliderModule = function(t, o) {
        var r, a, i, n, l, s = t, u = o || "UNDEFINED NAME", f = {}, c = function(e, o) {
            t.apply(this, [e, r.width, r.height, o])
        }, s = function(t, o, l) {
            var s = r.getLayerByName(t);
            if (null != s.canvas) {
                null == a && (l && (i = r.duplicateAllLayers(), r.flattenAllLayers(), s = r.getLayerByName(t)), a = e.cnvs.copyCanvas(s.canvas));
                var u = s.canvas.getContext("2d"), f = e.cnvs.getCanvasPixelData(a);
                _val = o, n = l, c(f.data, o), u.putImageData(f, 0, 0), r.recomposite()
            }
        }, d = function(e, t, o) {
            if (o)
                r.duplicateAllLayersFrom(o);
            else {
                var a = r.getLayerByName(e), i = a.canvas.getContext("2d");
                i.globalCompositeOperation = "copy", i.drawImage(t, 0, 0), i.globalCompositeOperation = "source-over"
            }
            r.recomposite()
        }, h = function(e, t, o) {
            s(e, t, o), a = null, i = null, l = !0
        }, m = function() {
            var e, t = r.currentLayerIndex, o = r.layers[t];
            e = "saturation" == u ? {action: "tools",toolname: "saturation",value: _val} : {action: u,value: _val,flatten: n}, r.actions.push([d, this, [o.name, a, i]], [h, this, [o.name, _val, n]], e), r.actions.redoFake()
        };
        return f.activate = function(e) {
            r = e, a = null, i = null, _val = 0, n = !1, l = !1
        }, f.deactivate = function() {
            f.reset()
        }, f.applyPreview = function(t, o) {
            var a = r.currentLayerIndex, i = r.layers[a];
            e.util.nextFrame(function() {
                l ? (r.actions.undo(), l = !1) : r.actions.undoFake(), s(i.name, t, o), m()
            })
        }, f.commit = function() {
        }, f.resetBacking = function() {
            a = null
        }, f.reset = function() {
            a = null, i = null
        }, f.readAction = function(e, t) {
            if (e && e.action && void 0 !== e.value) {
                var o = 0, a = 0, i = r.currentLayerIndex, n = r.layers[i];
                "brightness" == e.action ? o = e.value : "contrast" == e.action && (a = e.value), s(n.name, val, e.flatten), m()
            }
            t && t.call(this)
        }, f
    }, e.PaintWidget.prototype.module.flip = function() {
        var t, o = {}, r = function(t, o, r) {
            var a, i = t.getContext("2d");
            o && (a = e.cnvs.copyCanvas(t), e.cnvs.clearCanvas(t), i.setTransform(-1, 0, 0, 1, t.width, 0), i.drawImage(a, 0, 0)), r && (a = e.cnvs.copyCanvas(t), e.cnvs.clearCanvas(t), i.setTransform(1, 0, 0, -1, 0, t.height), i.drawImage(a, 0, 0)), i.setTransform(1, 0, 0, 1, 0, 0)
        }, a = function(e, o, r) {
            var a, l = t.currentLayerIndex, s = t.layers[l];
            null != s.canvas && (r ? (a = t.duplicateAllLayers(), t.actions.push([i, this, [a]], [n, this, [s.name, e, o, r]], {action: "flip",horizontal: e,vertical: o,flatten: r})) : t.actions.push([n, this, [s.name, e, o, r]], [n, this, [s.name, e, o, r]], {action: "flip",horizontal: e,vertical: o,flatten: r}), t.actions.redo())
        }, i = function(e) {
            t.duplicateAllLayersFrom(e), t.recomposite()
        }, n = function(e, o, a, i) {
            i && t.flattenAllLayers();
            var n = t.getLayerByName(e);
            r(n.canvas, o, a), t.recomposite()
        };
        return o.activate = function(e) {
            t = e
        }, o.flip = function(e, t, o) {
            a(e, t, o)
        }, o.readAction = function(e, t) {
            e && (e.horizontal || e.vertical) && o.flip(e.horizontal, e.vertical, e.flatten), t && t.call(this)
        }, o
    }(), e.PaintWidget.prototype.module.straighten = function() {
        var t, r, a, i = {}, n = function(e, o, r) {
            t.setDimensions(o, r), t.duplicateAllLayersFrom(e), t.recomposite()
        }, l = function(e, r, a, i) {
            var n, l, s, u;
            if (i && t.flattenAllLayers(), e) {
                for (n = 0; n < t.layers.length; n++)
                    s = t.layers[n], null != s.canvas && (u = o.createElement("canvas"), u.width = r, u.height = a, l = u.getContext("2d"), l.setTransform(1, 0, 0, 1, 0, 0), l.translate(r / 2, a / 2), l.rotate(e), l.translate(-s.canvas.width / 2, -s.canvas.height / 2), l.globalCompositeOperation = "copy", l.drawImage(s.canvas, 0, 0), l.globalCompositeOperation = "source-over", s.canvas = s.drawable = u);
                t.cropAllLayers(0, 0, r, a), t.recomposite()
            }
        }, s = function(e, o, r, a, s) {
            var u = t.duplicateAllLayers(), f = t.width, c = t.height;
            t.actions.push([n, i, [u, f, c]], [l, i, [e, r, a, s]], [{action: "rotate",angle: o,width: r,height: a,flatten: s}, {action: "setfeathereditsize",width: r,height: a}], t.c2a(r, a, !0)), t.actions.redo()
        };
        return i.activate = function(o) {
            t = o, r = new e.Bbox, t.uiLayerReset(), t.uiLayerShow(!0)
        }, i.deactivate = function() {
            t.uiLayerShow(!1), r = null
        }, i.reset = function() {
            t.uiLayerReset(), t.uiLayerShow(!0), t.recomposite()
        }, i.set = function(o) {
            var i = t.width, n = t.height, l = i / 2, s = n / 2, u = 0, f = i, c = 0, d = n;
            if (r.x0 = u, r.x1 = f, r.y0 = c, r.y1 = d, o) {
                var h, m = Math.cos(o), g = Math.sin(o), p = Math.cos(-o), v = Math.sin(-o), _ = l + m * (u - l) + g * (c - s), x = l + m * (u - l) + g * (d - s), y = l + m * (f - l) + g * (c - s), M = l + m * (f - l) + g * (d - s), C = s + g * -(u - l) + m * (c - s), w = s + g * -(u - l) + m * (d - s), b = s + g * -(f - l) + m * (c - s), D = s + g * -(f - l) + m * (d - s), S = [[_, C, y, b], [y, b, M, D], [M, D, x, w], [x, w, _, C]], P = [0, 0, i, n], T = [i, 0, 0, n], E = [], F = function(e) {
                    var t = l + p * (e.x - l) + v * (e.y - s), o = s + v * -(e.x - l) + p * (e.y - s);
                    t = 0 | t, o = 0 | o, r.contains(t, o) && E.push({x: e.x,y: e.y})
                };
                for (h = 0; h < S.length; h++) {
                    var L = S[h], A = {};
                    e.math.lineSegmentIntersection(L[0], L[1], L[2], L[3], P[0], P[1], P[2], P[3], A) && F(A), e.math.lineSegmentIntersection(L[0], L[1], L[2], L[3], T[0], T[1], T[2], T[3], A) && F(A)
                }
                for (h = 0; h < E.length; h++) {
                    var A = E[h];
                    A.y > s ? A.y < r.y1 && (r.y1 = A.y) : A.y > r.y0 && (r.y0 = A.y), A.x > l ? A.x < r.x1 && (r.x1 = A.x) : A.x > r.x0 && (r.x0 = A.x)
                }
            }
            t.uiLayerReset(), t.uiLayerShow(!0), t.recomposite(), a = r;
            var R = r.x1 - r.x0;
            return R ? t.width / R : 1
        }, i.commit = function(e, o, i) {
            a = a || r;
            var n = a.x0 + .5 | 0, l = a.y0 + .5 | 0, u = a.x1 + .5 | 0, f = a.y1 + .5 | 0, c = u - n, d = f - l;
            s(e, o, c, d, i), t.uiLayerShow(!1)
        }, i.readAction = function(e, t) {
            var o, r;
            e && e.angle && e.width && e.height && (r = e.angle, o = r * Math.PI / 180, s(o, r, e.width, e.height, e.flatten)), t && t.call(this)
        }, i
    }(), e.PaintWidget.prototype.module.rotate90 = function() {
        var e, t = {}, o = function(t, o, r) {
            e.setDimensions(o, r), e.duplicateAllLayersFrom(t), e.recomposite()
        }, r = function(t, o) {
            o && e.flattenAllLayers(), e.rotate90(t)
        };
        return t.activate = function(t) {
            e = t
        }, t.rotate90 = function(t, a) {
            var i, n, l, s = e.getScaledSize(), u = null;
            s && (u = {width: s.height,height: s.width,hiresWidth: s.hiresHeight,hiresHeight: s.hiresWidth}), a ? (i = e.duplicateAllLayers(), n = e.width, l = e.height, e.actions.push([o, this, [i, n, l]], [r, this, [t, a]], {action: "rotate90",angle: t,flatten: a}, u)) : e.actions.push([r, this, [-t, a]], [r, this, [t, a]], {action: "rotate90",angle: t,flatten: a}, u), e.actions.redo()
        }, t.readAction = function(e, o) {
            e && e.angle && t.rotate90(e.angle, e.flatten), o && o.call(this)
        }, t
    }(), e.PaintWidget.prototype.module.resize = function() {
        var t, o = {}, r = function(e, o, r) {
            t.setDimensions(o, r), t.duplicateAllLayersFrom(e), t.recomposite()
        }, a = function(e, o) {
            t.resizeAllLayers(e, o, !0), t.recomposite()
        };
        return o.activate = function(e) {
            t = e
        }, o.resize = function(o, i, n) {
            var l, s, u, f = t.duplicateAllLayers();
            n && t.flattenAllLayers(), o = o + .5 | 0, i = i + .5 | 0, l = e.controlsWidgetInstance ? e.controlsWidgetInstance.getScaledDims(o, i) : {width: o,height: i}, s = t.canvas.width, u = t.canvas.height, t.actions.push([r, this, [f, s, u]], [a, this, [l.width, l.height]], [{action: "resize",size: [o, i]}, {action: "setfeathereditsize",width: l.width,height: l.height}], t.a2c(o, i, !0)), t.actions.redo()
        }, o.readAction = function(e, t) {
            e && e.size && e.size.length && o.resize(e.size[0], e.size[1], e.flatten), t && t.call(this)
        }, o
    }(), e.PaintWidget.prototype.module.crop = function() {
        var t, o = {}, r = function(e, o, r) {
            t.setDimensions(o, r), t.duplicateAllLayersFrom(e), t.recomposite()
        }, a = function(e, o, r, a) {
            t.cropAllLayers(e, o, r, a), t.recomposite()
        }, i = function(e, i, n, l) {
            var s = t.duplicateAllLayers(), u = t.canvas.width, f = t.canvas.height;
            t.actions.push([r, o, [s, u, f]], [a, o, [e, i, n, l]], [{action: "crop",upperleftpoint: [e, i],size: [n, l]}, {action: "setfeathereditsize",width: n,height: l}], t.c2a(n, l, !0)), t.actions.redo()
        };
        return o.activate = function(e) {
            t = e
        }, o.crop = function(o) {
            o = o || new e.Bbox, t.uiLayerShow(!1);
            var r, a, n, l, s, u;
            o.x0 < o.x1 ? (r = o.x0, n = o.x1) : (r = o.x1, n = o.x0), o.y0 < o.y1 ? (a = o.y0, l = o.y1) : (a = o.y1, l = o.y0);
            var f = t.getLayerByName("_ui");
            0 > r && (r = 0), 0 > a && (a = 0), n > f.canvas.width && (n = f.canvas.width), l > f.canvas.height && (l = f.canvas.height), s = n - r, u = l - a, i(r, a, s, u)
        }, o.readAction = function(e, t) {
            e && e.size && e.upperleftpoint && i(e.upperleftpoint[0], e.upperleftpoint[1], e.size[0], e.size[1]), t && t.call(this)
        }, o
    }(), e.PaintWidget.prototype.module.overlay2d = function() {
        var t, o = {}, r = function(e) {
            var o = t.findLayerIndexByName(e);
            -1 != o && t.layerDelete(o), t.recomposite()
        }, a = function(o, r, a, i, n, l, s) {
            var u = new e.Layer({name: o,image: r});
            u.tag = "module_overlay", u.centerX = u.drawable.width / 2 + .5 | 0, u.centerY = u.drawable.height / 2 + .5 | 0, null != s ? (u.translateX = a, u.translateY = i, u.rotate = s, u.scaleX = n, u.scaleY = l) : (u.translateX = t.width / 2 + .5 | 0, u.translateY = t.height / 2 + .5 | 0), t.layers.push(u), t.recomposite()
        };
        return o.activate = function(e) {
            t = e
        }, o.addOverlay = function(e, o, i, n, l, s, u) {
            var f;
            e || (f = Math.floor(4294967295 * Math.random()).toString(16), e = "_module_overlay-" + f);
            var c = t.overlayRegistry.getElement(o), d = t.overlayRegistry.getHiRes(o), h = t.overlayRegistry.getAsset(o), m = [e, c, i, n, l, s, u];
            return t.actions.push([r, this, [e]], [a, this, m], {action: "addsticker",url: d || o,id: e,center: [i, n],scale: [l, s],rotation: u,external: d ? 1 : 0,size: [c.width, c.height],urls: [o, d],contentIdentifier: h.identifier,packIdentifier: h.packIdentifier}), t.actions.redo(), e
        }, o.readAction = function(e, r) {
            var a, i, n, l, s, u;
            e && e.url ? (e.center && e.center.length && (n = e.center[0], l = e.center[1]), e.scale && e.scale.length && (s = e.scale[0], u = e.scale[1]), e.urls && e.urls.length ? (a = e.urls[0], i = e.urls[1]) : (a = e.url, i = e.url), t.overlayRegistry.add(a, i), t.overlayRegistry.getElement(a, function() {
                o.addOverlay("", a, n, l, s, u, e.rotation), r && r.call(this)
            })) : r && r.call(this)
        }, o
    }(), e.PaintWidget.prototype.module.effects = function() {
        var t, o, r, a, i = null, n = !1, l = {}, s = function(a, n, l, s) {
            var u = t.getLayerByName(a);
            if (null != u.canvas) {
                o || (s && (r = t.duplicateAllLayers(), t.flattenAllLayers(), u = t.getLayerByName(a)), o = e.cnvs.copyCanvas(u.canvas));
                var f = u.canvas, c = f.getContext("2d"), d = (e.cnvs.getCanvasPixelData(o), e.cnvs.getCanvasPixelData(o));
                i = i || e.require("./MoaLiteProclistManager"), i.MLPLRunEffect(t.filterManager.getEffectById(n), d, l), c.putImageData(d, 0, 0), t.recomposite()
            }
        }, u = function(a) {
            var i, n;
            if (a) {
                n = t.filterManager.getEffectById(a.filterName), i = {action: "effects",name: a.filterName,flatten: a.flatten,contentIdentifier: n.identifier,packIdentifier: n.packIdentifier}, i = e.util ? e.util.extend(i, a.filterParams) : i;
                var l = t.currentLayerIndex, s = t.layers[l];
                t.actions.push([f, this, [s.name, o, r]], [c, this, [s.name, a.filterName, a.filterParams, a.flatten]], i), t.actions.redoFake()
            }
        }, f = function(e, r, a) {
            if (a)
                o = null, t.duplicateAllLayersFrom(a);
            else {
                var i = t.getLayerByName(e), n = i.canvas.getContext("2d");
                n.globalCompositeOperation = "copy", n.drawImage(r, 0, 0), n.globalCompositeOperation = "source-over"
            }
            t.recomposite()
        }, c = function(e, t, i, n) {
            s(e, t, i, n), o = null, r = null, a = !0
        };
        return l.activate = function(e) {
            n = !1, t = e, a = !1
        }, l.deactivate = function() {
            t.busy && (n = !0, t.actions.undoFake(), t.busy = !1), o = null, r = null, i = null
        }, l.makeThumb = function(o, r, a) {
            t.makeThumbFlat(r, !1, a);
            var n = r.width, l = r.height, s = r.getContext("2d"), u = s.getImageData(0, 0, n, l);
            i = i || e.require("./MoaLiteProclistManager");
            var f = t.filterManager.getEffectById(o);
            f && i.MLPLRunEffect(f, u), s.putImageData(u, 0, 0)
        }, l.applyPreview = function(e, o, r) {
            a ? (t.actions.undo(), a = !1) : t.actions.undoFake(), t.dirty = !0;
            var i = t.currentLayerIndex, n = t.layers[i];
            null != n.canvas && (s(n.name, e, o, r), u({filterName: e,filterParams: o,flatten: r}))
        }, l.readAction = function(e, t) {
            e && e.name && l.applyPreview(e.name, e, e.flatten), t && t.call(this)
        }, l
    }(), e.PaintWidget.prototype.module.enhance = function() {
        var t, o, r, a, i = null, n = !1, l = {}, s = function(a, n, l) {
            var s = t.getLayerByName(a);
            if (null != s.canvas) {
                o || (l && (r = t.duplicateAllLayers(), t.flattenAllLayers(), s = t.getLayerByName(a)), o = e.cnvs.copyCanvas(s.canvas));
                var u = s.canvas, f = u.getContext("2d"), c = e.cnvs.getCanvasPixelData(o);
                i = i || e.require("../../../src/js/filters/enhance"), i[n] && i[n](c.data, u.width, u.height), f.putImageData(c, 0, 0), t.recomposite()
            }
        }, u = function(e, a) {
            var i = {action: "effects",name: e}, n = t.currentLayerIndex, l = t.layers[n];
            t.actions.push([f, this, [l.name, o, r]], [c, this, [l.name, e, a]], i), t.actions.redoFake()
        }, f = function(e, o, r) {
            if (r)
                t.duplicateAllLayersFrom(r);
            else {
                var a = t.getLayerByName(e), i = a.canvas.getContext("2d");
                i.globalCompositeOperation = "copy", i.drawImage(o, 0, 0), i.globalCompositeOperation = "source-over"
            }
            t.recomposite()
        }, c = function(e, t, i, n) {
            s(e, t, i, n), o = null, r = null, a = !0
        };
        return l.activate = function(e) {
            n = !1, t = e, a = !1
        }, l.deactivate = function() {
            t.busy && (n = !0, t.actions.undoFake(), t.busy = !1), o = null, r = null, i = null
        }, l.applyPreview = function(e, o) {
            a ? (t.actions.undo(), a = !1) : t.actions.undoFake(), t.dirty = !0;
            var r = t.currentLayerIndex, i = t.layers[r];
            null != i.canvas && (s(i.name, e, o), u(e, o))
        }, l.readAction = function(e, t) {
            e && e.id && l.applyPreview(e.id, e.flatten), t && t.call(this)
        }, l
    }(), e.PaintWidget.prototype.module.textwithfont = function() {
        var t, r = 1 / 12, a = {}, i = function(e, o) {
            var r = e.split("\n"), a = t.canvas.getContext("2d"), i = a.font;
            a.font = o;
            var n, l, s = 0, u = a.measureText("W").width;
            for (l = 0; l < r.length; l++) {
                n = a.measureText(r[l]);
                var f = n.width;
                f > s && (s = f)
            }
            return a.font = i, s + u
        }, n = function(e, t) {
            var o = e.split("\n");
            return t * o.length
        }, l = function(e) {
            var o = t.findLayerIndexByName(e);
            o >= 0 && (t.layerDelete(o), t.recomposite())
        }, s = function(a, l, s, u, f, c, d, h, m, g, p, v) {
            var _ = (u ? u + " " : "") + f + "px " + s, x = i(l, _), y = n(l, c);
            m = m || 1;
            var M = o.createElement("canvas");
            M.width = x;
            var C = f;
            M.height = y + 2 * C;
            var w = new e.Layer({canvas: M,name: a});
            w.tag = "module_text", w.centerX = w.drawable.width / 2 + .5 | 0, w.centerY = w.drawable.height / 2 + .5 | 0, w.rotate = null == v ? 0 : v, w.scaleX = 1, w.scaleY = 1, null == g ? (w.translateX = t.width / 2 + .5 | 0, w.translateY = t.height / 2 + .5 | 0) : (w.translateX = g, w.translateY = p), w.alpha = m, t.layers.push(w);
            var b = M.getContext("2d");
            b.font = _, b.textAlign = "center", b.textBaseline = "bottom", b.fillStyle = d, b.globalAlpha = 1;
            var D, S = w.canvas.width / 2 + .5 | 0, P = c + C, T = l.split("\n");
            for (D = 0; D < T.length; D++)
                h && (b.strokeStyle = h, b.lineWidth = f * r, b.strokeText(T[D], S, P)), b.fillText(T[D], S, P), P += c;
            t.recomposite()
        };
        return a.activate = function(e) {
            t = e
        }, a.deactivate = function() {
        }, a.newText = function(o, r, a, i, n, u, f, c, d, h) {
            if ("" != o) {
                f = f || 1;
                var m = Math.floor(4294967295 * Math.random()).toString(16), g = "_module_text-" + m;
                h || (h = 0), c || (c = t.width / 2 + .5 | 0, d = t.height / 2 + .5 | 0);
                var p;
                p = [g, o, r.value, r.style, a, i, n, u, f, c, d, h], t.actions.push([l, this, [g]], [s, this, p], {action: "addtext",id: g,text: o,font: r.label,size: a,align: "center",color: e.util.color_to_rgb(n),outlinecolor: u ? e.util.color_to_rgb(u) : void 0,center: [c, d],scale: [1, 1],intensity: f,rotation: h}), t.actions.redo(), t.recomposite()
            }
        }, a.readAction = function(t, o) {
            var r, i, n, l;
            if (t && t.text && t.font && e.toolDefaults.textwithfont.presetsFont && e.util.addFontToPage && e.WebFont) {
                for (l = e.toolDefaults.textwithfont.presetsFont, n = l.length, i = 0; n > i; i++)
                    if (l[i].label === t.font) {
                        r = l[i];
                        break
                    }
                e.util.addFontToPage(r, function(e) {
                    var r, i;
                    e && (t.center && t.center.length && (r = t.center[0], i = t.center[1]), a.newText(t.text, e, t.size, t.size, t.color, t.outlinecolor, t.intensity, r, i, t.rotation)), o && o.call(this)
                })
            } else
                o && o.call(this)
        }, a
    }(), e.PaintWidget.prototype.module.focus = function() {
        var t, o, r, a, i, n, l, s, u, f, c = {}, d = function(o) {
            o && (u = t.duplicateAllLayers(), t.flattenAllLayers());
            var c = t.layers[t.currentLayerIndex];
            if (null != c.canvas) {
                var d = e.cnvs.copyCanvas(c.canvas), h = c.canvas.getContext("2d"), m = t.width, g = t.height;
                r = e.cnvs.getCanvasPixelData(d), i = r.data, a = e.cnvs.getCanvasPixelData(d), n = a.data, l = e.cnvs.getCanvasPixelData(d).data;
                var p = e.require("../../../src/js/core/copy");
                s = p.makeData(m * g), f = f || e.require("../../../src/js/mask-draw/tiltshift"), f.init(l, m, g, s), f.preview(n, i, l, s, m, g), h.putImageData(a, 0, 0), t.recomposite()
            }
        }, h = function() {
            var e = t.width, o = t.height;
            f.preview(n, i, l, s, e, o, 0, 0, e, o);
            var r = t.layers[t.currentLayerIndex], u = r.canvas.getContext("2d");
            u.putImageData(a, 0, 0), t.recomposite()
        };
        c.applyLinearBlur = function(r, a, i, l) {
            f = f || e.require("../../../src/js/mask-draw/tiltshift");
            var u = t.width, c = t.height;
            f.draw(n, u, c, s, {tiltshiftMode: "linear",posX: r,posY: a,sigmaR: i,angle: l}), o = {action: "tools",toolname: "tiltshift",x: r,y: a,radius: i,angle: l * (180 / Math.PI),tiltshiftmode: "linear"}, h()
        }, c.applyRadialBlur = function(r, a, i) {
            f = f || e.require("../../../src/js/mask-draw/tiltshift");
            var l = t.width, u = t.height;
            f.draw(n, l, u, s, {tiltshiftMode: "radial",posX: r,posY: a,sigmaR: i}), o = {action: "tools",toolname: "tiltshift",x: r,y: a,radius: i,tiltshiftmode: "radial"}, h()
        };
        var m = function(e, o) {
            if (o)
                t.duplicateAllLayersFrom(o), t.recomposite();
            else {
                t.flattenAllLayers();
                var r = t.layers[t.currentLayerIndex];
                r.canvas.getContext("2d").putImageData(e, 0, 0), t.recomposite()
            }
            t.recomposite()
        };
        return c.commit = function() {
            t.actions.push([m, this, [r, u]], [m, this, [a]], o), t.actions.redoFake()
        }, c.reset = function() {
            var e = t.layers[t.currentLayerIndex], o = e.canvas.getContext("2d");
            o.putImageData(r, 0, 0), t.recomposite()
        }, c.readAction = function(e, t) {
            e && e.tiltshiftmode && e.x && e.y && e.radius && ("radial" === e.tiltshiftmode ? c.applyRadialBlur(e.x, e.y, e.radius) : c.applyLinearBlur(e.x, e.y, e.radius, e.angle)), c.commit(), t && t.call(this)
        }, c.activate = function(e) {
            t = e, d(!0)
        }, c.deactivate = function() {
            f = null
        }, c.resetImageData = function() {
            d(!0)
        }, c
    }(), e.PaintWidget.prototype.module.drawing = function() {
        var t, o = 10, r = "#ffffff", a = !1, i = new e.BrushModule({overflow: 10,preserveBacking: !0}), n = e.util ? e.util.extend({}, i) : {};
        return n.activate = function(e) {
            t = e, i.activate(t)
        }, n.apply = function() {
            i.commit("drawing")
        }, n.width = function() {
            return o
        }, n.setWidth = function(e) {
            o = e, i.setRadius(o / 2)
        }, n.color = function() {
            return r
        }, n.setColor = function(e) {
            r = e, i.setColor(r)
        }, n.erase = function() {
            return a
        }, n.setErase = function(e) {
            a = e, i.setErase(a)
        }, n.flatten = function() {
        }, n.readAction = function(e, t) {
            var o, r, a;
            if (e && e.color && e.radius && e.pointlist) {
                for (r = e.pointlist.length, n.setErase(e.erase), n.setColor(e.color), n.setWidth(2 * e.radius), o = 0; r > o; o++)
                    a = e.pointlist[o], 0 === o ? n.updateUIDown(a[0], a[1]) : n.updateUIDraw(a[0], a[1]);
                n.apply()
            }
            t && t.call(this)
        }, n
    }(), e.SpotBrushModule = function(t) {
        var o, a, i, n, l, s, u, f, c, d, h, m, g, p, v, _ = t.processor, x = t.params, y = t.toolName, M = e.require("../../../src/js/core/copy"), C = 5, w = this, b = !1, D = function(t) {
            t || (t = !0);
            var r = d.layers[d.currentLayerIndex];
            if (null != r.canvas) {
                o = e.cnvs.copyCanvas(r.canvas), t && (f = d.duplicateAllLayers(), d.flattenAllLayers(), r = d.layers[d.currentLayerIndex]);
                var c = e.cnvs.copyCanvas(r.canvas), h = r.canvas.getContext("2d"), m = d.width, p = d.height;
                a = e.cnvs.getCanvasPixelData(c), n = a.data, i = e.cnvs.getCanvasPixelData(c), l = i.data, s = e.cnvs.getCanvasPixelData(c).data, u = M.makeData(m * p), _.init(s, m, p, u), _.preview(l, n, s, u, m, p), h.putImageData(i, 0, 0), d.recomposite(), g = []
            }
        }, S = function(e, t) {
            r.trigger("canvas:setBrushPosition", e, t)
        }, P = function(e) {
            var t, o = Math.floor(.2 * C) || 1, r = 0, a = [], i = function(e, t, r, a, n, l, s) {
                var u = (a - t) * (a - t) + (n - r) * (n - r);
                if (o * o > u)
                    return null;
                var f, c, d, h, m, g;
                void 0 !== l ? (f = (l + t) / 2, c = (l + a) / 2, d = (s + r) / 2, h = (s + n) / 2, m = (f + c) / 2, g = (d + h) / 2) : (m = (t + a) / 2, g = (r + n) / 2), i(e, t, r, m, g, f, d), e.push([0 | m, 0 | g]), i(e, m, g, a, n, c, h)
            };
            for (r = 0; r < e.length - 1; ++r) {
                var n = e[r], l = e[r + 1], s = [(n[0] + l[0]) / 2 | 0, (n[1] + l[1]) / 2 | 0];
                0 === r ? i(a, n[0], n[1], s[0], s[1]) : i(a, t[0], t[1], s[0], s[1], n[0], n[1]), t = s, a.push(s), r === e.length - 2 && (i(a, s[0], s[1], l[0], l[1]), a.push(l))
            }
            return a
        };
        w.reset = function() {
            D(!0)
        }, w.activate = function(t) {
            d = t, d.uiLayerReset(), d.uiLayerShow(!0), c = [], w.reset(), e.controlsWidgetInstance.layoutNotify(e.launchData.openType, "showCanvasControlsElement")
        }, w.deactivate = function() {
            d.uiLayerShow(!1), r.trigger("canvas:hideBrushCursor"), c = null
        };
        var T = function(e, t, o) {
            var r, a, f, c, h = d.layers[d.currentLayerIndex], m = h.canvas.getContext("2d"), g = d.width, x = d.height, y = 1.5 * o;
            if (null != v) {
                var M = Math.sqrt(Math.pow(v[0] - e, 2) + Math.pow(v[1] - t, 2));
                if (.6 * C > M)
                    return;
                var b = P([[v[0], v[1]], [e, t]]);
                r = e, a = t, f = e, c = t;
                for (var D, S, T = 0; T < b.length; T++)
                    D = b[T][0], S = b[T][1], r > D && (r = D), D > f && (f = D), a > S && (a = S), S > c && (c = S), w.drawPoint(D, S, D, S, g, x, o)
            } else
                r = e, a = t, f = e, c = t;
            r -= y, a -= y, f += y, c += y, p.push([e, t]), w.drawPoint(e, t, e, t, g, x, o), _.preview(l, n, s, u, g, x, r, a, f, c), m.putImageData(i, 0, 0), d.recomposite()
        };
        w.drawPoint = function(t, o, r, a, i, l, s) {
            var f = e.util.extend({posX: t,posY: o,startX: r,startY: a,radius: s}, x);
            p.push([t, o]), v = [t, o], _.draw(n, i, l, u, f)
        }, w.startStroke = function() {
            p = []
        }, w.updateUIDown = function(t, o, r) {
            m = M.copy(u), b || (d.uiLayerShow(!0), S(t, o));
            var a = d.layers[d.currentLayerIndex];
            a.canvas && (h = e.cnvs.getCanvasPixelData(a.canvas), w.startStroke(), p.push([t, o]), T(t, o, r))
        }, w.updateUIMove = function(e, t, o, r) {
            o && (T(e, t, r), p.push([e, t])), b || (d.uiLayerShow(!0), S(e, t)), d.recomposite()
        }, w.updateUIUp = function() {
            v = null
        };
        var E = function(t) {
            var o = d.layers[d.currentLayerIndex];
            o.canvas.getContext("2d").putImageData(t, 0, 0), d.recomposite(), a = e.cnvs.getCanvasPixelData(o.canvas), n = a.data, i = e.cnvs.getCanvasPixelData(o.canvas), l = i.data, u = M.makeData(d.width * d.height)
        }, F = function(e, t, o) {
            u = e, o && d.duplicateAllLayersFrom(o);
            var r = d.layers[d.currentLayerIndex], f = r.canvas.getContext("2d");
            a = t, n = a.data, _.preview(l, n, s, u, r.canvas.width, r.canvas.height), f.putImageData(i, 0, 0), d.recomposite()
        }, L = function(t) {
            u = t, f = d.duplicateAllLayers(), d.flattenAllLayers();
            var o = d.layers[d.currentLayerIndex], r = o.canvas.getContext("2d");
            a = e.cnvs.getCanvasPixelData(o.canvas), n = a.data, _.preview(l, n, s, u, o.canvas.width, o.canvas.height), r.putImageData(i, 0, 0), d.recomposite()
        };
        return w.commitStroke = function(t) {
            var r = M.copy(u), a = e.cnvs.getCanvasPixelData(o);
            d.actions.push([F, this, [m, a, f]], [L, this, [r]], {}), d.actions.redoFake(), w.finializeStroke(t)
        }, w.finializeStroke = function(t) {
            c.push(e.util.extend({}, {radius: t,pointlist: p}))
        }, w.commit = function() {
            var e = d.layers[d.currentLayerIndex], t = e.canvas.getContext("2d"), o = t.getImageData(0, 0, d.width, d.height), r = t.getImageData(0, 0, d.width, d.height);
            d.actions.push([E, this, [r]], [E, this, [o]], w.getFlattenedActionList()), d.actions.redo()
        }, w.getFlattenedActionList = function() {
            return {action: "tools",toolname: y,strokes: c}
        }, w.resetImageData = function() {
            D(!0)
        }, w.radius = function() {
            return C
        }, w.setRadius = function(e) {
            C = e, r.trigger("canvas:setBrushSize", e)
        }, w
    }, e.SpotModule = function(t) {
        var o, r = {}, a = e.util.extend({addMask: 1,alpha: 1}, t.params), i = t.processorName, n = e.require("../../../src/js/mask-draw/" + i), l = new e.SpotBrushModule({toolName: i,processor: n,params: a}), r = e.util ? e.util.extend({}, l) : {};
        return r.activate = function(e) {
            o = e, l.activate(o)
        }, r.deactivate = function() {
            n = null, l.deactivate()
        }, r.setParam = function(e, t) {
            a[e] = t
        }, r.readAction = function(t, a) {
            var i, n, l, s, u, f;
            if (t && t.strokes && (u = t.strokes.length, r.activate(o), u > 0)) {
                for (r.reset(), i = 0; u > i; i++) {
                    l = t.strokes[i];
                    var c = l.radius;
                    r.setRadius(c);
                    {
                        e.controlsWidgetInstance.canvasUI.viewport.getRatio()
                    }
                    if (l.pointlist) {
                        for (f = l.pointlist.length, r.startStroke(), n = 0; f > n; n++)
                            s = l.pointlist[n], r.drawPoint(s[0], s[1], s[0], s[1], c);
                        r.finializeStroke(c)
                    }
                }
                o.actions.push([null, null, []], [null, null, []], r.getFlattenedActionList()), o.actions.redoFake()
            }
            a && a.call(this)
        }, r
    }, e.PaintWidget.prototype.module.sharpen = function() {
        var o, r, a, i, n = null, l = 0, s = !1, u = {}, f = function(t, o, r, a) {
            n = n || e.require("../../../src/js/filters/adjustments"), n.sharpness && n.sharpness(t, o, r, a, 1, "normal")
        }, c = function(t, n, s) {
            var u = o.getLayerByName(t);
            if (null != u.canvas) {
                var c;
                null == r && (s && (a = o.duplicateAllLayers(), o.flattenAllLayers(), u = o.getLayerByName(t)), r = e.cnvs.copyCanvas(u.canvas)), c = u.canvas.getContext("2d");
                var d = e.cnvs.getCanvasPixelData(u.canvas);
                l = n, i = s, f(d.data, u.canvas.width, u.canvas.height, n), c.putImageData(d, 0, 0), o.recomposite()
            }
        }, d = function() {
            var e = o.currentLayerIndex, t = o.layers[e];
            o.actions.push([h, this, [t.name, r, a]], [m, this, [t.name, l, i]], {action: "tools",toolname: "sharpness",value: l}), o.actions.redoFake()
        }, h = function(e, t, r) {
            if (r)
                o.duplicateAllLayersFrom(r);
            else {
                var a = o.getLayerByName(e), i = a.canvas.getContext("2d");
                i.globalCompositeOperation = "copy", i.drawImage(t, 0, 0), i.globalCompositeOperation = "source-over"
            }
            o.recomposite()
        }, m = function(e, t, o) {
            c(e, t, o), r = null, a = null, s = !0
        };
        u.resetBacking = function() {
            r = null
        }, u.activate = function(e) {
            o = e, r = null, _newCanvasData = null, a = null, l = 0, i = !1, s = !1
        }, u.deactivate = function() {
            r = null, _newCanvasData = null, a = null, n = null
        };
        var g = -1;
        return u.applyPreview = function(e, r) {
            var a = o.currentLayerIndex, i = o.layers[a];
            t.clearTimeout(g), g = t.setTimeout(function() {
                s ? (o.actions.undo(), s = !1) : o.actions.undoFake(), c(i.name, e, r), o.showWaitThrobber(!1), d()
            }, 30)
        }, u.reset = function() {
            if (a)
                o.duplicateAllLayersFrom(a), o.recomposite();
            else if (r) {
                var e = o.currentLayerIndex, t = o.layers[e], i = t.canvas.getContext("2d");
                i.globalCompositeOperation = "copy", i.drawImage(r, 0, 0), i.globalCompositeOperation = "source-over", o.recomposite()
            }
            r = null, _newCanvasData = null, a = null
        }, u.readAction = function(e, t) {
            if (e && void 0 !== e.value) {
                var r = o.currentLayerIndex, a = o.layers[r];
                c(a.name, e.value, e.flatten), o.showWaitThrobber(!1), d()
            }
            t && t.call(this)
        }, u
    }(), e.PaintWidget.prototype.module.brightness = new e.PaintWidget.prototype.SliderModule(e.require("../../../src/js/filters/adjustments").brightness, "brightness"), e.PaintWidget.prototype.module.contrast = new e.PaintWidget.prototype.SliderModule(e.require("../../../src/js/filters/adjustments").contrast, "contrast"), e.PaintWidget.prototype.module.warmth = new e.PaintWidget.prototype.SliderModule(e.require("../../../src/js/filters/adjustments").colortemp, "colortemp"), e.PaintWidget.prototype.module.saturation = new e.PaintWidget.prototype.SliderModule(e.require("../../../src/js/filters/adjustments").saturation, "saturation"), e.PaintWidget.prototype.module.blemish = new e.SpotModule({processorName: "blemish",params: {alpha: .5}}), e.PaintWidget.prototype.module.redeye = new e.SpotModule({processorName: "redeye",params: {alpha: .5}}), e.PaintWidget.prototype.module.whiten = new e.SpotModule({processorName: "whiten",params: {alpha: .5}})
}(window.AV || (window.AV = {}), window, document);
