/*! cpm-etools 2021-09-20 */
function ListFrame_onShow() {
    var a;
    this.parentApp.options && (a = this.parentApp.options.getSettings()) && (this.setTitle(a.title), this.setDescription(a.description));
}
(CPM = window.CPM || {}),
    (CPM.Graph3d && CPM.Graph3d.makeApp) ||
        (function () {
            (CPM.Graph3d = CPM.Graph3d || {}),
                (CPM.Graph3d.UNIT_WIDTH = CPM.Graph3d.UNIT_WIDTH || 41),
                (CPM.Graph3d.makeApp = function (a) {
                    function b() {
                        c.tray.currentFrame !== c.options ? (c.tray.setFrame(c.options), c.tray.replaceOption(c.frameOption, "Back", b)) : (c.tray.setFrame(c.plotter), c.tray.replaceOption(c.frameOption, "Options", b));
                    }
                    var c = this;
                    (c.pubDate = ""),
                        (c.tray = CPM.Base.createTray(c)),
                        c.tray.setTitle("CPM 3D Plotter"),
                        c.tray.attachTo(c),
                        (c.plotter = CPM.Graph3d.createListFrame(c)),
                        c.tray.addFrame(c.plotter),
                        (c.options = CPM.Graph3d.createOptionFrame(c)),
                        c.tray.addFrame(c.options),
                        (c.viewport = CPM.Graph3d.createViewport(c)),
                        (c.world = c.viewport.origin3d),
                        CPM.Graph3d.addAxes(c.world),
                        c.appendChild(c.viewport),
                        (c.colorPicker = CPM.Graph3d.createColorPicker(c)),
                        c.appendChild(c.colorPicker),
                        (c.helpDialog = CPM.Graph3d.createHelpDialog(c)),
                        c.appendChild(c.helpDialog),
                        (c.frameOption = c.tray.addOption("Options", b)),
                        c.tray.addOption("Clear All", function () {
                            c.plotter.clear();
                        }),
                        c.tray.addOption("Save", function () {
                            CPM.Graph3d.saveState(c);
                        }),
                        a.data ? CPM.Similarity.loadState(c, a.data) : CPM.Base.loadFromQuery(CPM.Graph3d.loadState, c, "graph3d");
                }),
                (CPM.Graph3d.App = CPM.Graph3d.makeApp),
                (CPM.Graph3d.saveState = function (a) {
                    var b,
                        c = new CPM.Base.Encoder();
                    a.options.save(c), a.plotter.save(c), (b = CPM.Base.createSavePopup(a, "graph3ddata=" + c, "graph3ddata=")), a.appendChild(b), b.show();
                }),
                (CPM.Graph3d.loadState = function (a, b) {
                    var c = new CPM.Base.Decoder(b);
                    a.options.load(c), a.plotter.load(c);
                });
        })(),
    (CPM = window.CPM || {}),
    CPM.makeApp ||
        (function () {
            function a() {
                var b;
                if (!a.calledBefore) {
                    var b = CPM.Style.getStylesheet("main");
                    b.addRule(".CPM-app", { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: b.makeGradient("to bottom", "#fff 0%", "#eee 100%") }), (a.calledBefore = !0);
                }
            }
            function b() {
                var b;
                for (a(), b = 0; b < d.length; ++b) c(d[b]);
            }
            function c(a) {
                var b = document.createElement("div");
                (b.getOffset = function () {
                    for (var a = { x: this.offsetLeft, y: this.offsetTop }, b = this; (b = b.offsetParent); ) (a.x += b.clientLeft + b.offsetLeft - b.scrollLeft), (a.y += b.clientTop + b.offsetTop - b.scrollTop);
                    return a;
                }),
                    b.setAttribute("class", "CPM-app"),
                    (b.GUID = CPM.GUID()),
                    a.parent.appendChild(b),
                    a.constructor.call(b, a);
            }
            var d = [];
            !(function () {
                var a = {};
                CPM.GUID = function () {
                    function b() {
                        return Math.floor(65536 * (1 + Math.random()))
                            .toString(16)
                            .substring(1);
                    }
                    for (var c; ; ) if (((c = b() + b() + b() + b() + b() + b()), null == a[c])) return (a[c] = !0), c;
                };
            })(),
                (CPM.makeApp = function (a, b) {
                    var c = document.getElementsByTagName("script"),
                        e = c[c.length - 1].parentNode;
                    (b = b || {}), (b.constructor = a), (b.parent = b.parent || e), d.push(b);
                }),
                window.addEventListener("load", b, !1);
        })(),
    (CPM = window.CPM || {}),
    (CPM.Style && CPM.Style.enable) ||
        (function () {
            function a(a, b) {
                for (var c = -1; ; ) {
                    if (-1 === (c = a.indexOf(b, c + 1))) break;
                    if (!((0 !== c && " " !== a[c - 1]) || (c + b.length !== a.length && " " !== a[c + b.length]))) break;
                }
                return c;
            }
            function b(b, c) {
                for (var d = b.getAttribute("class") || "", e = "", f = 0, g = -1; f < c.length; )
                    -1 === (g = c.indexOf(" ", g + 1)) ? ((e = c.substr(f)), (f = c.length)) : g > f && ((e = c.substr(f, g - f)), (f = g + 1)), -1 === a(d, e) && (d += (d.length > 0 ? " " : "") + e);
                b.setAttribute("class", d);
            }
            function c(b, c) {
                for (var d, e = b.getAttribute("class") || "", f = "", g = 0, h = -1; g < c.length; )
                    for (-1 === (h = c.indexOf(" ", h + 1)) ? ((f = c.substr(g)), (g = c.length)) : h > g && ((f = c.substr(g, h - g)), (g = h + 1)); -1 !== (d = a(e, f)); ) {
                        for (e = e.slice(0, d - 1) + e.slice(d + f.length), d = e.length; " " === e[d - 1]; ) --d;
                        d !== e.length && (e = e.slice(0, d - e.length));
                    }
                b.setAttribute("class", e);
            }
            function d(a) {
                return a.charAt(0).toUpperCase().concat(a.slice(1));
            }
            function e(a, b, c) {
                var d = a.cssRules.length;
                a.appendRule ? a.appendRule(b + " { }") : a.insertRule(b + " { }", d), (this.style = a.cssRules[d].style), null != c && this.setStyle(c);
            }
            function f(a) {
                var b = document.createElement("style"),
                    c = document.getElementsByTagName("head")[0];
                if (!c) throw new Error("Could not create Style element, create new Stylesheet failed.");
                c.appendChild(b), (this.ruleList = document.styleSheets[document.styleSheets.length - 1]);
            }
            CPM.Style = CPM.Style || {};
            var g, h, i;
            (g = (function () {
                function a(a) {
                    var b, c, d, e, f;
                    if (-1 !== a.indexOf("-")) return a.toLowerCase().split("-");
                    for (b = [], d = 0, e = 1, f = a.length; e < f; ++e) (c = a[e]) === c.toUpperCase() && c !== c.toLowerCase() && (b.push(a.slice(d, e).toLowerCase()), (d = e));
                    return b.push(a.slice(d, f).toLowerCase()), b;
                }
                function b(b) {
                    var c,
                        e,
                        f,
                        j,
                        k,
                        l,
                        m = document.getElementsByTagName("body")[0],
                        n = [];
                    if (!m) return !1;
                    for (c = a(b), e = c[0], k = 1, l = c.length; k < l; ++k) e += c[k].charAt(0).toUpperCase().concat(c[k].slice(1));
                    for (f = d(e), n[0] = e, k = 1, l = g.length; k < l; ++k) n[k] = g[k] + f;
                    for (k = 0, l = n.length; k < l; ++k)
                        if (void 0 !== m.style[n[k]]) {
                            j = g[k];
                            break;
                        }
                    return null != j ? ((h[b] = n[k]), (i[b] = 0 === k ? c.join("-") : "-" + j + "-" + c.join("-"))) : ((h[b] = "none"), (i[b] = "none")), !0;
                }
                function c(a) {
                    var c,
                        d,
                        e,
                        f,
                        g = "";
                    if ("" === a) return "";
                    for (c = a.split(","), f = 0; f < c.length; f += 1)
                        g.length > 0 && (g += ", "), c[f].trim(), (d = c[f].split(" ")), (e = d.shift()), void 0 !== i[e] || b(e) ? (g += i[e] + " " + d.join(" ")) : (g += e + " " + d.join(" "));
                    return g;
                }
                function e(a, d) {
                    var e, f;
                    if (!(arguments.length < 2)) for (e in d) d.hasOwnProperty(e) && ((f = "transition" === e ? c(d[e]) : d[e]), void 0 !== h[e] || b(e) ? (a[h[e]] = f) : (a[e] = f));
                }
                function f(a, c) {
                    var d;
                    switch (c) {
                        case "CSS":
                            d = i;
                            break;
                        case "JS":
                        default:
                            d = h;
                    }
                    return void 0 !== d[a] || b(a) ? d[a] : null;
                }
                var g = ["", "webkit", "moz", "Moz", "o", "ms", "khtml"],
                    h = {},
                    i = {};
                return { set: e, get: f };
            })()),
                (e.prototype.setStyle = function (a) {
                    g.set(this.style, a);
                }),
                (e.prototype.transform = function (a) {
                    g.set(this.style, { transform: a });
                }),
                (f.prototype.addRule = function (a, b) {
                    return new e(this.ruleList, a, b);
                }),
                (f.prototype.lockCursor = function (a) {
                    null == this.wildcard && (this.wildcard = this.addRule("*")), this.wildcard.setStyle({ userSelect: "none" }), (this.wildcard.style.cssText += ";cursor: " + a + " !important");
                }),
                (f.prototype.unlockCursor = function () {
                    this.wildcard.setStyle({ userSelect: "", cursor: "" });
                }),
                (f.prototype.makeGradient = (function () {
                    function a(a) {
                        return 1 === a.length ? ("string" == typeof a[0] ? a[0] : Array.isArray(a[0]) ? a[0].join(", ") : "") : a.join(", ");
                    }
                    function b(a) {
                        var b = a.split(" "),
                            c = b[0],
                            d = "",
                            e = "",
                            f = 1;
                        if ("at" !== c) for (; "at" !== b[f]; ) d.length > 0 && (d += " "), (d += b[f]), ++f;
                        else c = "";
                        for (++f; b[f]; ) e.length > 0 && (e += " "), (e += b[f]), ++f;
                        if (("circle" !== c && "ellipse" !== c && ((d = c + d), (c = "")), -1 === d.indexOf(" ")))
                            switch (d) {
                                case "closest-corner":
                                case "closest-side":
                                case "farthest-corner":
                                case "farthest-side":
                                    break;
                                default:
                                    d += " " + d;
                            }
                        return "center" === e && (e = ""), "" !== e && (e += ", "), "" !== c && (c += " "), e + c + d;
                    }
                    function c(b) {
                        var c = Array.prototype.slice.call(arguments, 1);
                        return "radial" === b ? "radial-gradient(" + c.join(", ") + ")" : "linear-gradient(" + b + ", " + a(c) + ")";
                    }
                    function d(c) {
                        return function (d) {
                            var e, f, g, h, i;
                            if ("radial" === d) return (g = b(arguments[1])), (e = Array.prototype.slice.call(arguments, 2)), c + "radial-gradient(" + g + ", " + a(e) + ")";
                            if (((e = Array.prototype.slice.call(arguments, 1)), -1 !== d.indexOf("to"))) {
                                for (f = d.split(" ").slice(1), h = 0, i = f.length; h < i; ++h)
                                    switch (f[h]) {
                                        case "top":
                                            f[h] = "bottom";
                                            break;
                                        case "bottom":
                                            f[h] = "top";
                                            break;
                                        case "left":
                                            f[h] = "right";
                                            break;
                                        case "right":
                                            f[h] = "left";
                                    }
                                f = f.join(" ");
                            } else f = d;
                            return c + "linear-gradient(" + f + ", " + a(e) + ")";
                        };
                    }
                    function e(b) {
                        var c,
                            d,
                            e = Array.prototype.slice.call(arguments, 1);
                        return (c = a(e)), (d = c.indexOf("#")), -1 === d && (d = c.indexOf("rgba(")), c.substring(d, c.indexOf(" ", d));
                    }
                    return function (a) {
                        function b(a) {
                            return (j.style.background = g), (f.prototype.makeGradient = a), a.apply(this, l);
                        }
                        var g,
                            h,
                            i,
                            j = document.getElementsByTagName("body")[0],
                            k = ["-webkit-", "-moz-", "-o-", "-ms-"],
                            l = arguments;
                        if (!j) return null;
                        if (((g = j.style.background), (j.style.background = ""), (j.style.background = "linear-gradient(to bottom, #fff 0%, #000 100%)"), "" != j.style.background)) return b(c);
                        for (h = 0, i = k.length; h < i; ++h) if (((j.style.background = k[h] + "linear-gradient(top, #000 0%, #fff 100%)"), "" != j.style.background)) return b(d(k[h]));
                        return b(e);
                    };
                })()),
                (f.prototype.addAnimation = function (a) {
                    return new h(this, a);
                }),
                (CPM.Style.getStylesheet = (function () {
                    var a = {};
                    return function (b) {
                        return void 0 !== a[b] ? a[b] : (a[b] = new f());
                    };
                })()),
                (h = (function () {
                    function a() {
                        var b,
                            e,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n = document.createElement("div"),
                            o = ["", "webkit", "moz", "o", "MS"],
                            p = ["start", "iteration", "end"],
                            q = [];
                        if (null == (l = g.get("animation-name", "CSS"))) return (c = "none"), l;
                        for (c = l.slice(0, l.indexOf("animation-name")) + "keyframes", "-khtml-keyframes" === c && (c = "-webkit-keyframes"), e = 0, j = o.length; e < j; ++e)
                            for (i = 0, k = p.length; i < k; ++i) (b = {}), (b.type = p[i]), (b.name = o[e]), (b.name += 0 === e ? "animation" + p[i] : "Animation" + d(p[i])), q.push(b);
                        for (e = 0, j = q.length; e < j; ++e)
                            n.addEventListener(
                                q[e].name,
                                (function (a) {
                                    return function b() {
                                        h[a.type] || (h[a.type] = a.name), this.removeEventListener(a.name, b, !1);
                                    };
                                })(q[e]),
                                !1
                            );
                        return (
                            document.getElementsByTagName("body")[0].appendChild(n),
                            (m = new f("test").addAnimation("test")),
                            m.addFrame(0, { color: "#000" }),
                            m.addFrame(1, { color: "#fff" }),
                            (n.style[g.get("animation")] = "test 0.01s linear 0s 2"),
                            window.setTimeout(function () {
                                n && (n.parentNode && n.parentNode.removeChild(n), (n = void 0));
                            }, 1e3),
                            window.removeEventListener("load", a, !1),
                            c
                        );
                    }
                    function b(b, d) {
                        var e = b.ruleList;
                        if ("none" === c) return null;
                        if (null == c && !a()) return (c = "none"), null;
                        var f = e.cssRules.length;
                        e.insertRule ? e.insertRule("@" + c + " " + d + " { }", f) : e.appendRule("@" + c + " " + d + " { }"), (this.name = d), (this.ruleList = e.cssRules[f]), (this.frameRules = {});
                    }
                    var c,
                        h = {};
                    return (
                        window.addEventListener("load", a, !1),
                        (b.prototype.addFrame = function (a, b) {
                            var c = new e(this.ruleList, 100 * a + "%", b);
                            return (this.frameRules[a] = c), c;
                        }),
                        (b.prototype.getFrame = function (a) {
                            return this.frameRules[a];
                        }),
                        (b.prototype.clear = function () {
                            for (var a; this.ruleList.cssRules.length > 0; ) this.ruleList.deleteRule(this.ruleList.cssRules[0].keyText);
                            for (a in this.frameRules) this.frameRules.hasOwnProperty(a) && delete this.frameRules[a];
                        }),
                        (CPM.Style.getAnimationEventName = function (a) {
                            return h[a];
                        }),
                        b
                    );
                })()),
                (i = (function () {
                    function a() {
                        var b,
                            c,
                            d = document.createElement("div"),
                            e = ["", "webkit", "moz", "o", "MS"],
                            f = [];
                        if (null == (m = g.get("transition"))) return (m = "none"), void (n = "");
                        for (f[0] = "transitionend", b = 1, c = e.length; b < c; ++b) f[b] = e[b] + "TransitionEnd";
                        for (b = 0, c = f.length; b < c; ++b)
                            d.addEventListener(
                                f[b],
                                (function (a) {
                                    return function b() {
                                        n || (n = a), this.removeEventListener(a, b, !1), this.parentNode && this.parentNode.removeChild(this), (d = void 0);
                                    };
                                })(f[b]),
                                !1
                            );
                        document.getElementsByTagName("body")[0].appendChild(d),
                            (d.style.color = "#000"),
                            window.getComputedStyle(d).color,
                            (d.style[m] = "color 0.01s"),
                            (d.style.color = "#fff"),
                            window.setTimeout(function () {
                                d && (d.parentNode && d.parentNode.removeChild(d), (n = ""), (d = void 0));
                            }, 1e3),
                            window.removeEventListener("load", a, !1);
                    }
                    function b(a, b, c) {
                        var d,
                            e = "",
                            f = c && c.type ? " " + c.type : "",
                            h = c && c.delay ? " " + c.delay : "",
                            i = (c && c.length) || p;
                        for (d in b) b.hasOwnProperty(d) && (e.length > 0 && (e += ", "), (e += g.get(d, "CSS") + " " + i + f + h));
                        a.style[m] = e;
                    }
                    function c(a, b) {
                        var c;
                        for (c in b) if (b.hasOwnProperty(c)) return void window.getComputedStyle(a)[g.get(c)];
                    }
                    function d(a) {
                        var b = a && a.delay ? parseFloat(a.delay) : 0,
                            c = a && a.length ? parseFloat(a.length) : o;
                        return Math.ceil(1e3 * (b + c));
                    }
                    function e(a) {
                        var b;
                        delete a.transitionTimeout,
                            g.set(a.style, a.transitionEndState),
                            delete a.transitionEndState,
                            (a.style.pointerEvents = a.cachedPointerEvents),
                            delete a.cachedPointerEvents,
                            "function" == typeof a.transitionCallback && ((b = a.transitionCallback), delete a.transitionCallback, b.call(a));
                    }
                    function f(a, b, c, f, h) {
                        var i = d(h);
                        a.transitionTimeout && (window.clearTimeout(a.transitionTimeout), e(a)),
                            g.set(a.style, b),
                            c &&
                                ((a.transitionCallback = f),
                                (a.transitionEndState = c),
                                (a.cachedPointerEvents = a.style.pointerEvents),
                                (h && h.allowInteraction) || (a.style.pointerEvents = "none"),
                                (a.transitionTimeout = window.setTimeout(function () {
                                    e(a);
                                }, i)));
                    }
                    function h(a) {
                        var b;
                        delete a.transitionTimeout,
                            g.set(a.style, a.transitionEndState),
                            delete a.transitionEndState,
                            (a.style[m] = a.cachedTransition),
                            delete a.cachedTransition,
                            (a.style.pointerEvents = a.cachedPointerEvents),
                            delete a.cachedPointerEvents,
                            "function" == typeof a.transitionCallback && ((b = a.transitionCallback), delete a.transitionCallback, b.call(a));
                    }
                    function i(a, e, f, i, j) {
                        var k;
                        a.transitionEventActive && h(a),
                            (a.cachedTransition = a.style[m]),
                            (a.style[m] = "none"),
                            g.set(a.style, e),
                            f
                                ? ((a.transitionCallback = i),
                                  (a.cachedPointerEvents = a.style.pointerEvents),
                                  (j && j.allowInteraction) || (a.style.pointerEvents = "none"),
                                  c(a, e),
                                  b(a, f, j),
                                  g.set(a.style, f),
                                  (k = d(j)),
                                  (a.transitionTimeout = window.setTimeout(function () {
                                      h(a);
                                  }, k)))
                                : ((a.style[m] = a.cachedTransition), delete a.cachedTransition);
                    }
                    function j() {
                        this.transitionEventActive && k(this);
                    }
                    function k(a) {
                        var b;
                        delete a.transitionEventActive,
                            a.removeEventListener(n, j, !1),
                            (a.style.pointerEvents = a.cachedPointerEvents),
                            (a.style[m] = a.cachedTransition),
                            delete a.cachedPointerEvents,
                            delete a.cachedTransition,
                            "function" == typeof a.transitionCallback && ((b = a.transitionCallback), delete a.transitionCallback, b.call(a));
                    }
                    function l(a, d, e, f, h) {
                        a.transitionEventActive && k(a),
                            (a.cachedTransition = a.style[m]),
                            (a.style[m] = "none"),
                            g.set(a.style, d),
                            e
                                ? ((a.transitionCallback = f),
                                  (a.transitionEventActive = !0),
                                  (a.cachedPointerEvents = a.style.pointerEvents),
                                  (h && h.allowInteraction) || (a.style.pointerEvents = "none"),
                                  a.addEventListener(n, j, !1),
                                  c(a, d),
                                  b(a, e, h),
                                  g.set(a.style, e))
                                : ((a.style[m] = a.cachedTransition), delete a.cachedTransition);
                    }
                    var m,
                        n,
                        o = 0.2,
                        p = o + "s",
                        q = {};
                    return (
                        window.addEventListener("load", a, !1),
                        (q.set = function (b, c, d, e, h) {
                            if ((void 0 === m && a(), void 0 === n)) return g.set(b.style, c), g.set(b.style, d), "function" == typeof e && e.call(b), !1;
                            (q.set = "none" !== m && "none" !== n ? l : "none" !== m ? i : f), q.set(b, c, d, e, h);
                        }),
                        q
                    );
                })());
            !(function () {
                var a,
                    b = document.createElement("div"),
                    c = {},
                    d = ["", "webkit", "moz", "o", "MS"],
                    e = [],
                    f = function () {
                        if ("none" !== (a = g.get("animation"))) {
                            for (var h in d)
                                "" === d[h]
                                    ? (e.push({ type: "start", name: "animationstart" }), e.push({ type: "end", name: "animationend" }), e.push({ type: "iteration", name: "animationiteration" }))
                                    : (e.push({ type: "start", name: d[h] + "AnimationStart" }), e.push({ type: "end", name: d[h] + "AnimationEnd" }), e.push({ type: "iteration", name: d[h] + "AnimationIteration" }));
                            document.getElementsByTagName("body")[0].appendChild(b);
                            for (var h in e)
                                b.addEventListener(
                                    e[h].name,
                                    (function (a) {
                                        return function d() {
                                            (c[a.type] = a.name), this.removeEventListener(a.name, d, !1), "end" === a.type && this.parentNode && this.parentNode.removeChild(this), (b = void 0);
                                        };
                                    })(e[h]),
                                    !1
                                );
                            var i = CPM.Style.getStylesheet("test").addAnimation("test");
                            i.addFrame(0, { color: "#000" }), i.addFrame(1, { color: "#fff" }), (b.style[a] = "test 0.01s linear 0s 1"), window.removeEventListener("load", f, !1), (d = void 0), (e = void 0);
                        }
                    };
                window.addEventListener("load", f, !1);
            })();
            CPM.Style.enable = function (a) {
                return (
                    (a.addClass = function (a) {
                        b(this, a);
                    }),
                    (a.removeClass = function (a) {
                        c(this, a);
                    }),
                    (a.setTransition = function (a, b, c, d) {
                        i.set(this, a, b, c, d);
                    }),
                    (a.setStyle = function (a) {
                        g.set(this.style, a);
                    }),
                    (a.transform = function (a) {
                        g.set(this.style, { transform: a });
                    }),
                    a
                );
            };
        })(),
    (CPM = window.CPM || {}),
    (CPM.Base = CPM.Base || {}),
    CPM.Base.makeEventReporter ||
        (CPM.Base.makeEventReporter = (function () {
            function a(a, b) {
                var c, d, e;
                for (c = 0, d = this.customListeners.length; c < d && ((e = this.customListeners[c]), e.type !== a || e.callback !== b); ++c);
                c === d && this.customListeners.push({ type: a, callback: b });
            }
            function b(a, b) {
                var c, d, e;
                for (c = 0, d = this.customListeners.length; c < d; ++c) if (((e = this.customListeners[c]), e.type === a && e.callback === b)) return void this.customListeners.splice(c, 1);
            }
            function c(a, b) {
                "object" != typeof b ? (b = { data: b, target: this, type: a }) : null !== b && ((b.target = this), (b.type = a));
                var c, d, e;
                for (c = 0, d = this.customListeners.length; c < d; ++c) (e = this.customListeners[c]) && e.type === a && "function" == typeof e.callback && e.callback.call(this, b);
            }
            return function (d) {
                return (d.customListeners = []), (d.addCustomEventListener = a), (d.removeCustomEventListener = b), (d.fireEvent = c), d;
            };
        })()),
    (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame),
    (window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame),
    (CPM = window.CPM || {}),
    (CPM.Base = CPM.Base || {}),
    CPM.Base.delegateEvents ||
        (CPM.Base.delegateEvents = (function () {
            function a(a, b) {
                for (var c = 0; c < a.length; ++c) if (a[c].identifier === b) return a[c];
            }
            function b(a, b, c, d, e) {
                a.push({ handler: b, type: c, callback: d, capturing: e }), b.addEventListener(c, d, e);
            }
            function c(a) {
                for (var b; a.length > 0; ) (b = a.pop()), b.handler.removeEventListener(b.type, b.callback, b.capturing);
            }
            function d(a, b) {
                var c = a.delegate;
                c.onAnimationFrame &&
                    (a.animationFrame && e(a),
                    window.requestAnimationFrame
                        ? (function d() {
                              c.onAnimationFrame.call(a, b), (a.animationFrame = window.requestAnimationFrame(d));
                          })()
                        : (function d() {
                              c.onAnimationFrame.call(a, b), (a.animationFrame = window.setTimeout(d, t));
                          })());
            }
            function e(a, b) {
                a.animationFrame && (a.delegate.onAnimationFrame.call(a, b), window.cancelAnimationFrame ? window.cancelAnimationFrame(a.animationFrame) : window.clearTimeout(a.animationFrame), (a.animationFrame = null));
            }
            function f(a) {
                switch (a.type.toLowerCase()) {
                    case "mousedown":
                        m.call(this, a);
                        break;
                    case "touchstart":
                        n.call(this, a);
                }
            }
            function g() {
                this.deactivate(), b(this.eventList, this, "mousedown", m, !1), b(this.eventList, this, "touchstart", n, !1);
            }
            function h() {
                this.timeout && (window.clearTimeout(this.timeout), (this.timeout = null)), c(this.eventList), e(this);
            }
            function i() {
                this.deactivate(), this.delegate.onDestroy && this.delegate.onDestroy.call(this), delete this.delegate, delete this.eventList, delete this.activate, delete this.deactivate, delete this.destroy, (this.destroyed = !0);
            }
            function j(a, b, e) {
                var f = this.delegate;
                "function" == typeof f.onHit && f.onHit.call(this, a, b, e),
                    (e.hitTime = Date.now()),
                    d(this, e),
                    "function" == typeof f.onHold &&
                        (this.timeout && window.clearTimeout(this.timeout),
                        (this.timeout = window.setTimeout(
                            (function (c) {
                                return function () {
                                    e.isClick && f.onHold.call(c, a, b, e);
                                };
                            })(this),
                            r
                        ))),
                    c(this.eventList);
            }
            function k(a, b, c, d) {
                var e = this.delegate;
                ((c.isClick && Date.now() - c.hitTime > p) || Math.abs(a - d.x) > o || Math.abs(b - d.y) > o) && (c.isClick = !1), "function" == typeof e.onMove && e.onMove.call(this, a, b, c);
            }
            function l(a, c, d) {
                var f = this.delegate;
                if ((e(this, d), f.onDoubleClick || f.onClick || f.onRelease)) {
                    if ((this.deactivate(), "function" == typeof f.onRelease && f.onRelease.call(this, a, c, d), this.destroyed)) return;
                    d.isClick
                        ? ("function" == typeof f.onClick && f.onClick.call(this, a, c, d),
                          "function" == typeof f.onDoubleClick &&
                              ("function" == typeof this.deactivate && this.deactivate(),
                              b(
                                  this.eventList,
                                  this,
                                  "mousedown",
                                  function (a) {
                                      f.onDoubleClick.call(this, a.pageX, a.pageY, d);
                                  },
                                  !1
                              ),
                              b(
                                  this.eventList,
                                  this,
                                  "touchstart",
                                  function (a) {
                                      f.onDoubleClick.call(this, a.changedTouches[0].pageX, a.changedTouches[0].pageY, d);
                                  },
                                  !1
                              ),
                              this.timeout && window.clearTimeout(this.timeout),
                              (this.timeout = window.setTimeout(
                                  (function (a) {
                                      return function () {
                                          a.activate();
                                      };
                                  })(this),
                                  q
                              ))))
                        : f.onRelease || this.activate();
                } else this.activate();
            }
            function m(a) {
                var c = this,
                    d = this.delegate,
                    e = { isClick: !0 },
                    f = { x: a.pageX, y: a.pageY };
                if (!d.validateMouseClick || d.validateMouseClick.call(c, a, e))
                    return (
                        j.call(this, a.pageX, a.pageY, e),
                        b(
                            this.eventList,
                            document,
                            "mousemove",
                            function (a) {
                                k.call(c, a.pageX, a.pageY, e, f);
                            },
                            !0
                        ),
                        b(
                            this.eventList,
                            document,
                            "mouseup",
                            function (a) {
                                l.call(c, a.pageX, a.pageY, e);
                            },
                            !0
                        ),
                        a.preventDefault(),
                        !1
                    );
            }
            function n(c) {
                var d,
                    e = this,
                    f = this.delegate,
                    g = { isClick: !0 },
                    h = c.changedTouches[0],
                    i = {};
                if (!f.validateTouch || f.validateTouch.call(e, c, g))
                    return (
                        (g.id = d = h.identifier),
                        (i.x = h.pageX),
                        (i.y = h.pageY),
                        j.call(this, h.pageX, h.pageY, g),
                        b(
                            this.eventList,
                            document,
                            "touchmove",
                            function (b) {
                                var c = a(b.changedTouches, d);
                                if (void 0 !== c) return k.call(e, c.pageX, c.pageY, g, i), b.preventDefault(), !1;
                            },
                            !0
                        ),
                        b(
                            this.eventList,
                            document,
                            "touchend",
                            function (b) {
                                var c = a(b.changedTouches, d);
                                if (void 0 !== c) return l.call(e, c.pageX, c.pageY, g), b.preventDefault(), !1;
                            },
                            !0
                        ),
                        c.preventDefault(),
                        !1
                    );
            }
            var o = 5,
                p = 100,
                q = 200,
                r = 550,
                s = 50,
                t = 1e3 / s;
            return function (a, b, c) {
                (a.delegate = b || {}), (a.eventList = []), (a.forwardEvent = f), (a.activate = g), (a.deactivate = h), (a.destroy = i), c && a.activate();
            };
        })()),
    (CPM = window.CPM || {}),
    (CPM.UI = CPM.UI || {}),
    CPM.UI.createIntegerField ||
        (function (a) {
            function b() {
                var a;
                b.applied ||
                    ((a = CPM.Style.getStylesheet("main")),
                    a.addRule(".CPM-slider", { display: "inline-block", position: "relative", cursor: "pointer" }),
                    a.addRule(".CPM-slider.horizontal", { height: "30px" }),
                    a.addRule(".CPM-slider.vertical", { width: "30px" }),
                    a.addRule(".CPM-slider-bar", {
                        position: "relative",
                        background: a.makeGradient("to bottom", "rgba(0,0,0,0.05) 0%", "rgba(0,0,0,0.1) 100%"),
                        borderRadius: "6px",
                        boxShadow: "0 1px 1px 1px rgba(0,0,0,0.05), inset 0 -1px 1px 1px rgba(255,255,255,0.15), inset 0 1px 1px 1px rgba(0,0,0,0.05)",
                    }),
                    a.addRule(".horizontal > .CPM-slider-bar", { width: "100%", height: "6px", top: "50%", marginTop: "-3px" }),
                    a.addRule(".vertical > .CPM-slider-bar", { height: "100%", width: "6px", left: "50%", marginLeft: "-3px" }),
                    a.addRule(".CPM-slider-knob", {
                        position: "absolute",
                        width: "14px",
                        height: "14px",
                        border: "1px solid #bbb",
                        borderRadius: "20px",
                        background: a.makeGradient("to bottom", "#fff 0%", "#ddd 100%"),
                        boxShadow: "0 1px 2px rgba(0,0,0,0.25), inset 0 -1px 1px 1px rgba(255,255,255,0.15), inset 0 1px 1px 1px rgba(0,0,0,0.05)",
                    }),
                    a.addRule(".horizontal > .CPM-slider-knob", { left: 0, top: "50%", marginTop: "-8px" }),
                    a.addRule(".vertical > .CPM-slider-knob", { left: "50%", top: 0, marginLeft: "-8px" }),
                    (b.applied = !0));
            }
            function c(a) {
                var c = CPM.Base.makeEventReporter(CPM.Style.enable(document.createElement("div"))),
                    d = CPM.Style.enable(document.createElement("div")),
                    e = CPM.Style.enable(document.createElement("div")),
                    f = 0;
                return (
                    b(),
                    (c.getValue = function () {
                        return f;
                    }),
                    (c.setValue = function (a, b) {
                        var d = Math.floor(a);
                        f !== d && ((f = d), 1 === c.orientation ? (e.style.left = f.toString() + "px") : (e.style.top = f.toString() + "px"), b || this.fireEvent("change", { value: f }));
                    }),
                    (c.orientation = "horizontal" === a ? 1 : 0),
                    CPM.Base.delegateEvents(
                        c,
                        (function () {
                            var a,
                                b,
                                d,
                                g = 1 === c.orientation;
                            return (
                                (d = g
                                    ? function (b, c) {
                                          var d = b.offsetLeft;
                                          for (b = b.offsetParent; b; ) (d += b.clientLeft + b.offsetLeft - b.scrollLeft), (b = b.offsetParent);
                                          return Math.max(Math.min(c - d - e.offsetWidth / 2, a), 0);
                                      }
                                    : function (b, c) {
                                          var d = b.offsetTop;
                                          for (b = b.offsetParent; b; ) (d += b.clientTop + b.offsetTop - b.scrollTop), (b = b.offsetParent);
                                          return Math.max(Math.min(c - d - e.offsetHeight / 2, a), 0);
                                      }),
                                {
                                    onAnimationFrame: function () {
                                        this.setValue(b);
                                    },
                                    onHit: function (c, e) {
                                        (a = this.max), this.setValue(d(this, g ? c : e)), (b = f);
                                    },
                                    onMove: function (a, c) {
                                        b = d(this, g ? a : c);
                                    },
                                    onRelease: function () {
                                        this.setValue(b), this.activate();
                                    },
                                }
                            );
                        })(),
                        !0
                    ),
                    c.setAttribute("class", "CPM-slider " + ("horizontal" === a ? "horizontal" : "vertical")),
                    d.setAttribute("class", "CPM-slider-bar"),
                    e.setAttribute("class", "CPM-slider-knob"),
                    c.appendChild(d),
                    c.appendChild(e),
                    Object.defineProperties(c, {
                        max: {
                            get:
                                1 === c.orientation
                                    ? function () {
                                          return c.offsetWidth - e.offsetWidth;
                                      }
                                    : function () {
                                          return c.offsetHeight - e.offsetHeight;
                                      },
                        },
                    }),
                    c
                );
            }
            function d() {
                var a,
                    b = 35;
                d.applied ||
                    ((a = CPM.Style.getStylesheet("main")),
                    a.addRule(".CPM-numeric-field", { display: "inline-block", position: "relative", height: "35px", minWidth: "110px", verticalAlign: "middle", marginTop: "4px", marginBottom: "4px", userSelect: "none" }),
                    a.addRule(".CPM-numeric-field:first-of-type", { marginTop: "0" }),
                    a.addRule(".CPM-numeric-field-wrapper", {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: b + "px",
                        right: b + "px",
                        border: "1px solid #ccc",
                        borderLeft: "none",
                        borderRight: "none",
                        padding: "0 4px",
                        background: "#ffffff",
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                    }),
                    a.addRule(".CPM-numeric-field-input", { width: "100%", height: "100%", margin: 0, border: 0, padding: 0, background: "transparent" }),
                    a.addRule(".CPM-numeric-field-button", {
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        width: b + "px",
                        border: "1px solid #ccc",
                        background: a.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                        cursor: "pointer",
                    }),
                    a.addRule(".CPM-numeric-field-button:active", { background: a.makeGradient("to bottom", "#ccc 0%", "#eee 100%") }),
                    a.addRule(".CPM-numeric-field-button:first-child", { left: 0, borderRadius: "40px 0 0 40px" }),
                    a.addRule(".CPM-numeric-field-button:last-child", { right: 0, borderRadius: "0 40px 40px 0" }),
                    (d.applied = !0));
            }
            function e(a, b) {
                var c = document.createElement("div"),
                    e = document.createElement("button"),
                    f = document.createElement("div"),
                    g = document.createElement("input"),
                    h = document.createElement("button");
                return (
                    d(),
                    c.setAttribute("class", "CPM-numeric-field"),
                    e.setAttribute("class", "CPM-numeric-field-button"),
                    e.appendChild(document.createTextNode("-")),
                    a.onMinus &&
                        e.addEventListener(
                            "click",
                            function () {
                                a.onMinus.call(g), c.fireEvent("change", { value: c.getValue() });
                            },
                            !1
                        ),
                    f.appendChild(g),
                    f.setAttribute("class", "CPM-numeric-field-wrapper"),
                    g.setAttribute("class", "CPM-numeric-field-input"),
                    (g.value = "0"),
                    g.addEventListener(
                        "touchend",
                        function () {
                            this.setAttribute("type", "number");
                        },
                        !1
                    ),
                    g.addEventListener(
                        "keyup",
                        function (a) {
                            13 === a.keyCode && this.blur();
                        },
                        !1
                    ),
                    a.onInput && g.addEventListener("input", a.onInput, !1),
                    a.onFocus && g.addEventListener("focus", a.onFocus, !1),
                    a.onBlur
                        ? (g.addEventListener(
                              "blur",
                              function (b) {
                                  a.onBlur.call(this, b), c.fireEvent("change", { value: c.getValue() });
                              },
                              !1
                          ),
                          a.onBlur.call(g))
                        : g.addEventListener(
                              "blur",
                              function () {
                                  c.fireEvent("change", { value: c.getValue() });
                              },
                              !1
                          ),
                    h.setAttribute("class", "CPM-numeric-field-button"),
                    h.appendChild(document.createTextNode("+")),
                    a.onPlus &&
                        h.addEventListener(
                            "click",
                            function () {
                                a.onPlus.call(g), c.fireEvent("change", { value: c.getValue() });
                            },
                            !1
                        ),
                    c.appendChild(e),
                    c.appendChild(f),
                    c.appendChild(h),
                    a.getValue
                        ? (c.getValue = function () {
                              return a.getValue.apply(g, arguments);
                          })
                        : (c.getValue = function () {
                              return g.value;
                          }),
                    a.setValue
                        ? (c.setValue = function () {
                              return a.setValue.apply(g, arguments);
                          })
                        : (c.setValue = function (a) {
                              g.value = a;
                          }),
                    b && (c.style.width = b + "px"),
                    CPM.Base.makeEventReporter(c),
                    c
                );
            }
            function f(a, b, c) {
                function d(a) {
                    return Math.min(f.max, Math.max(f.min, a));
                }
                var f = e({
                    onMinus: function () {
                        this.value = d(parseInt(this.value, 10) - 1);
                    },
                    onInput: function () {
                        "" !== this.value && "-" !== this.value && ("0-" === this.value ? (this.value = "-") : (this.value = d(parseInt(this.value, 10) || this.min)));
                    },
                    onBlur: function () {
                        f && (this.value = d(parseInt(this.value, 10) || this.min));
                    },
                    onPlus: function () {
                        this.value = d(parseInt(this.value, 10) + 1);
                    },
                    getValue: function () {
                        return parseInt(this.value, 10);
                    },
                });
                return f.setValue(c || a || 0), null == a && (a = -Number.MAX_VALUE), null == b && (b = Number.MAX_VALUE), (f.min = a), (f.max = b), f;
            }
            function g(a, b, c) {
                function d(a) {
                    return Math.min(f.max, Math.max(f.min, a));
                }
                var f = e({
                    onMinus: function () {
                        var a = parseFloat(this.value, 10);
                        "round" === f.buttonMode && (a = Math.ceil(a)), "log" === f.buttonMode ? ((a = Math.round(Math.log(a) / Math.log(10))), (this.value = d(Math.pow(10, a - 1)))) : (this.value = d(a - 1));
                    },
                    onInput: function () {},
                    onBlur: function () {
                        var a;
                        f &&
                            ("log" === f.buttonMode
                                ? ((a = Math.round(Math.log(parseFloat(this.value, 10)) / Math.log(10))), (this.value = d(Math.pow(10, a))))
                                : ((a = parseFloat(this.value, 10)), isNaN(a) ? (this.value = this.min) : (this.value = d(a))));
                    },
                    onPlus: function () {
                        var a = parseFloat(this.value, 10);
                        "round" === f.buttonMode && (a = Math.floor(a)), "log" === f.buttonMode ? ((a = Math.round(Math.log(a) / Math.log(10))), (this.value = d(Math.pow(10, a + 1)))) : (this.value = d(a + 1));
                    },
                    getValue: function () {
                        return d(parseFloat(this.value, 10) || this.min);
                    },
                });
                return f.setValue(c || a || 0), null == a && (a = -Number.MAX_VALUE), null == b && (b = Number.MAX_VALUE), (f.buttonMode = "float"), (f.min = a), (f.max = b), f;
            }
            function h() {
                function a(a) {
                    switch (a) {
                        case -3:
                            return "270Â° CCW";
                        case -2:
                            return "180Â° CCW";
                        case -1:
                            return "90Â° CCW";
                        case 1:
                            return "90Â° CW";
                        case 2:
                            return "180Â° CW";
                        case 3:
                            return "270Â° CW";
                        default:
                            return "0Â°";
                    }
                }
                var b = 0;
                return e(
                    {
                        onMinus: function () {
                            b > -3 ? --b : (b = 0), (this.value = a(b));
                        },
                        onInput: function () {
                            "-" !== this.value && ("0-" === this.value ? (this.value = "-") : (this.value = parseInt(this.value, 10) || "0"));
                        },
                        onFocus: function () {
                            this.value = 90 * b;
                        },
                        onBlur: function () {
                            var c = (parseInt(this.value, 10) || 0) % 360;
                            (b = c > 315 ? 0 : c > 225 ? 3 : c > 135 ? 2 : c > 45 ? 1 : c > -45 ? 0 : c > -135 ? -1 : c > -225 ? -2 : c > -315 ? -3 : 0), (this.value = a(b));
                        },
                        onPlus: function () {
                            b < 3 ? ++b : (b = 0), (this.value = a(b));
                        },
                        getValue: function () {
                            return b;
                        },
                        setValue: function (c) {
                            (b = c), (this.value = a(b));
                        },
                    },
                    140
                );
            }
            function i() {
                var a,
                    b = 35;
                i.applied ||
                    ((a = CPM.Style.getStylesheet("main")),
                    a.addRule(".CPM-button", {
                        display: "block",
                        height: b + "px",
                        lineHeight: b + "px",
                        verticalAlign: "middle",
                        marginTop: "4px",
                        marginBottom: "4px",
                        border: "1px solid #ccc",
                        borderRadius: b + "px",
                        background: a.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        cursor: "pointer",
                        userSelect: "none",
                    }),
                    a.addRule(".CPM-button:active", { boxShadow: "0 2px 10px rgba(0,0,0,0.2)", background: a.makeGradient("to bottom", "#ccc 0%", "#eee 100%") }),
                    (i.applied = !0));
            }
            function j(a) {
                var b = document.createElement("div");
                return (
                    i(),
                    b.setAttribute("class", "CPM-button"),
                    (b.setLabel = function (a) {
                        if ("string" == typeof a) b.innerHTML = a;
                        else {
                            for (; b.firstChild; ) b.removeChild(b.firstChild);
                            b.appendChild(a);
                        }
                    })(a || ""),
                    b
                );
            }
            function k() {
                var a,
                    b = 35;
                k.applied ||
                    ((a = CPM.Style.getStylesheet("main")),
                    a.addRule(".CPM-toggle-button", { position: "relative", height: b + "px", verticalAlign: "middle", marginTop: "4px", marginBottom: "4px", borderRadius: b + "px", cursor: "pointer" }),
                    a.addRule(".CPM-toggle-button:active", { boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }),
                    a.addRule(".CPM-toggle-button-handle", {
                        height: "100%",
                        width: b + "px",
                        margin: 0,
                        padding: 0,
                        border: "1px solid #ccc",
                        borderRadius: b + "px 0 0 " + b + "px",
                        background: a.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                        cursor: "pointer",
                        color: "#666",
                        verticalAlign: "bottom",
                    }),
                    a.addRule(".CPM-toggle-button-handle:active, .CPM-toggle-button-handle.toggled", { background: a.makeGradient("to bottom", "#ccc 0%", "#eee 100%"), color: "#222" }),
                    a.addRule(".CPM-toggle-button-label", {
                        position: "absolute",
                        left: b + "px",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        padding: "0 0.5em",
                        border: "1px solid #ccc",
                        borderLeft: "none",
                        borderRadius: "0 " + b + "px " + b + "px 0",
                        background: a.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                        lineHeight: b - 2 + "px",
                        verticalAlign: "bottom",
                        userSelect: "none",
                    }),
                    (k.applied = !0));
            }
            function l(a) {
                var b = document.createElement("div"),
                    c = document.createElement("button"),
                    d = document.createElement("span"),
                    e = !1;
                return (
                    k(),
                    b.setAttribute("class", "CPM-toggle-button"),
                    CPM.Base.makeEventReporter(b),
                    c.setAttribute("class", "CPM-toggle-button-handle"),
                    b.addEventListener(
                        "click",
                        function () {
                            this.setValue(!e), this.fireEvent("change", { value: e });
                        },
                        !1
                    ),
                    b.appendChild(c),
                    d.setAttribute("class", "CPM-toggle-button-label"),
                    b.appendChild(d),
                    (b.getValue = function () {
                        return e;
                    }),
                    (b.setValue = function (a) {
                        (e = a), e ? c.setAttribute("class", "CPM-toggle-button-handle toggled") : c.setAttribute("class", "CPM-toggle-button-handle");
                    }),
                    (b.setLabel = function (a) {
                        if ("string" == typeof a) d.innerHTML = a;
                        else {
                            for (; d.firstChild; ) d.removeChild(d.firstChild);
                            d.appendChild(a);
                        }
                    })(a || ""),
                    b
                );
            }
            function m() {
                var a,
                    b = 35;
                m.applied ||
                    ((a = CPM.Style.getStylesheet("main")),
                    a.addRule(".CPM-toggle-set", { position: "relative", height: b + "px", verticalAlign: "middle", marginTop: "4px", marginBottom: "4px" }),
                    a.addRule(".CPM-toggle-set-button", {
                        height: "100%",
                        border: "1px solid #ccc",
                        borderLeft: "none",
                        background: a.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                        whiteSpace: "nowrap",
                    }),
                    a.addRule(".CPM-toggle-set-button:enabled", { cursor: "pointer", color: "#666" }),
                    a.addRule(".CPM-toggle-set-button:active, .CPM-toggle-set-button:disabled", { background: a.makeGradient("to bottom", "#ccc 0%", "#eee 100%"), color: "#222" }),
                    a.addRule(".CPM-toggle-set-button:first-child", { borderLeft: "1px solid #ccc", borderRadius: b + "px 0 0 " + b + "px" }),
                    a.addRule(".CPM-toggle-set-button:last-child", { borderRadius: "0 " + b + "px " + b + "px 0" }),
                    (m.applied = !0));
            }
            function n(a) {
                var b,
                    c,
                    d = document.createElement("div"),
                    e = null,
                    f = 0;
                for (m(), d.setAttribute("class", "CPM-toggle-set"), CPM.Base.makeEventReporter(d), c = 0; c < a; ++c)
                    (b = document.createElement("button")),
                        b.setAttribute("class", "CPM-toggle-set-button"),
                        (b.style.width = 100 / a + "%"),
                        b.addEventListener(
                            "click",
                            (function (a) {
                                return function () {
                                    (e.disabled = !1), (this.disabled = !0), (e = this), (f = a), d.fireEvent("change", { value: a });
                                };
                            })(c),
                            !1
                        ),
                        d.appendChild(b);
                return (
                    (d.firstChild.disabled = !0),
                    (e = d.firstChild),
                    (d.getValue = function () {
                        return f;
                    }),
                    (d.setValue = function (a) {
                        a >= 0 && a < d.childNodes.length && ((e.disabled = !1), (e = d.childNodes[a]), (e.disabled = !0), (f = a));
                    }),
                    d
                );
            }
            function o() {
                var a,
                    b = 66,
                    c = 33;
                o.applied ||
                    ((a = CPM.Style.getStylesheet("main")),
                    a.addRule(".action-wheel", {
                        position: "absolute",
                        top: "2px",
                        right: "10px",
                        width: b + "px",
                        height: b + "px",
                        background: a.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                        border: "1px solid #ccc",
                        borderRadius: b + "px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        cursor: "pointer",
                    }),
                    a.addRule(".action-wheel > button", { position: "absolute", width: c + "px", height: c + "px", border: "none", background: "transparent", cursor: "pointer" }),
                    a.addRule(".action-wheel > button::before, .action-wheel > button::after", { position: "absolute", content: "''" }),
                    a.addRule(".action-wheel > button:active", { background: a.makeGradient("to bottom", "rgba(0,0,0,0.3) 0%", "rgba(0,0,0,0) 100%") }),
                    a.addRule(".action-wheel > .northwest", { top: 0, left: 0, borderRight: "1px solid #ccc", borderBottom: "1px solid #ccc", borderRadius: c + "px 0 0 0" }),
                    a.addRule(".action-wheel > .northeast", { top: 0, right: 0, borderBottom: "1px solid #ccc", borderRadius: "0 " + c + "px 0 0" }),
                    a.addRule(".action-wheel > .southwest", { bottom: 0, left: 0, borderRight: "1px solid #ccc", borderRadius: "0 0 0 " + c + "px" }),
                    a.addRule(".action-wheel > .southeast", { bottom: 0, right: 0, borderRadius: "0 0 " + c + "px 0" }),
                    (o.applied = !0));
            }
            function p() {
                var a = document.createElement("div");
                return (
                    o(),
                    (a.northwest = document.createElement("button")),
                    (a.northeast = document.createElement("button")),
                    (a.southwest = document.createElement("button")),
                    (a.southeast = document.createElement("button")),
                    a.setAttribute("class", "action-wheel"),
                    a.northwest.setAttribute("class", "northwest"),
                    a.northeast.setAttribute("class", "northeast"),
                    a.southwest.setAttribute("class", "southwest"),
                    a.southeast.setAttribute("class", "southeast"),
                    a.appendChild(a.northwest),
                    a.appendChild(a.northeast),
                    a.appendChild(a.southwest),
                    a.appendChild(a.southeast),
                    a
                );
            }
            (a._base = a._base || {}),
                (a._base.createNumericField = e),
                (a._base.createActionWheel = p),
                (a.createSlider = c),
                (a.createIntegerField = f),
                (a.createDecimalField = g),
                (a.createAngleField = h),
                (a.createToggleSet = n),
                (a.createToggleButton = l),
                (a.createButton = j);
        })(CPM.UI),
    (CPM = window.CPM || {}),
    (CPM.UI = CPM.UI || {}),
    CPM.UI.createFoldingList ||
        (function () {
            function a() {
                var b;
                a.applied ||
                    ((b = CPM.Style.getStylesheet("main")),
                    b.addRule(".CPM-folding-list", { margin: 0, padding: 0, listStyleType: "none" }),
                    b.addRule(".CPM-folding-list-item", { position: "relative", width: "100%", borderBottom: "1px solid #ccc", background: "none", color: "#666", overflow: "hidden" }),
                    b.addRule(".CPM-folding-list-item-label", { padding: "0.25em 2em", cursor: "pointer", userSelect: "none" }),
                    b.addRule(".CPM-folding-list-item-label:hover", { background: "rgba(64,192,255,0.2)" }),
                    b.addRule(".CPM-folding-list-content", { position: "relative", borderTop: "1px solid #ddd" }),
                    b.addRule(".CPM-folding-list-item-label::before", { position: "absolute", content: "'â–º'", left: "0.5em" }),
                    b.addRule(".open > .CPM-folding-list-item-label::before", { content: "'â–¼'" }),
                    (a.applied = !0));
            }
            function b() {
                a(), (this.elementid = document.createElement("ul")), this.elementid.setAttribute("class", "CPM-folding-list"), (this.items = []), (this.autoClose = !0);
            }
            function c(a, b, c) {
                (this.parentList = c),
                    (this.elementid = CPM.Style.enable(document.createElement("li"))),
                    this.elementid.setAttribute("class", "CPM-folding-list-item"),
                    b instanceof HTMLElement ? (this.content = b) : ((this.content = document.createElement("div")), (this.content.innerHTML = b)),
                    "function" != typeof this.content.addClass && CPM.Style.enable(this.content),
                    this.content.addClass("CPM-folding-list-content"),
                    (this.label = document.createElement("div")),
                    this.label.setAttribute("class", "CPM-folding-list-item-label"),
                    this.label.addEventListener("click", f.bind(this), !1),
                    this.setLabel(a),
                    this.elementid.appendChild(this.label),
                    (this.isOpen = !1);
            }
            function d() {
                this.elementid.style.height = "auto";
            }
            function e() {
                (this.elementid.style.height = "auto"), this.elementid.removeChild(this.content), this.elementid.removeClass("open"), (this.isOpen = !1);
            }
            function f() {
                this.isOpen ? this.close() : (this.parentList && this.parentList.autoClose && "function" == typeof this.parentList.closeAll && this.parentList.closeAll(), this.open());
            }
            (CPM.UI.createFoldingList = function () {
                return new b();
            }),
                (b.prototype.insertItem = function (a, b, d) {
                    var e = new c(b, d, this);
                    return (e.index = a), a < this.items.length ? (this.elementid.insertBefore(e.elementid, this.items[a].elementid), this.items.splice(a, 0, e)) : (this.elementid.appendChild(e.elementid), this.items.push(e)), e;
                }),
                (b.prototype.addItem = function (a, b) {
                    return this.insertItem(this.items.length, a, b);
                }),
                (b.prototype.removeItem = function (a) {
                    this.elementid.removeChild(a.elementid), this.items.splice(a.index);
                }),
                (b.prototype.getOpenFolds = function () {
                    var a,
                        b = [];
                    for (a = 0; a < this.items.length; ++a) this.items[a].isOpen && b.push(this.items[a]);
                    return b;
                }),
                (b.prototype.forEach = function (a) {
                    for (var b = 0; b < this.items.length; ++b) a.call(this.items[b], b);
                }),
                (b.prototype.openAll = function () {
                    for (var a = 0; a < this.items.length; ++a) this.items[a].open();
                }),
                (b.prototype.closeAll = function () {
                    for (var a = 0; a < this.items.length; ++a) this.items[a].close();
                }),
                (c.prototype.open = function () {
                    var a,
                        b = this.elementid.offsetHeight;
                    if (!this.isOpen) {
                        (this.isOpen = !0), this.elementid.appendChild(this.content), this.elementid.addClass("open"), (a = this.elementid.offsetHeight);
                        var c = d.bind(this);
                        a > 0 ? this.elementid.setTransition({ height: b + "px" }, { height: a + "px" }, c) : c();
                    }
                }),
                (c.prototype.close = function () {
                    var a,
                        b = this.elementid.offsetHeight;
                    if (this.isOpen) {
                        a = this.label.offsetHeight;
                        var c = e.bind(this);
                        a > 0 ? this.elementid.setTransition({ height: b + "px" }, { height: a + "px" }, c) : c();
                    }
                }),
                (c.prototype.setLabel = function (a) {
                    a instanceof HTMLElement ? ((this.label.innerHTML = ""), this.label.appendChild(a)) : (this.label.innerHTML = a);
                });
        })(),
    (CPM = window.CPM || {}),
    (CPM.UI = CPM.UI || {}),
    CPM.UI.createShuffleList ||
        (CPM.UI.createShuffleList = function a() {
            function b(a, b) {
                var c,
                    d,
                    e = !1,
                    f = 1;
                for (c = this.firstChild; c; ) (c === a || e) && (c.renumber(f), (e = !0)), ++f, (c = c.nextSibling);
                if (!b)
                    for (
                        this.setTransition({ height: this.offsetHeight - a.offsetHeight + "px" }, { height: this.offsetHeight + "px" }, function () {
                            this.style.height = "";
                        }),
                            a.setTransition({ minHeight: 0, height: 0 }, { height: a.offsetHeight - 1 + "px" }, function () {
                                this.style.height = this.style.minHeight = "";
                            }),
                            d = a.nextSibling;
                        d;

                    )
                        d.setTransition({ transform: "translate3d(0," + -a.offsetHeight + "px,0)" }, { transform: "translate3d(0,0,0)" }), (d = d.nextSibling);
                this.select(a), this.fireEvent("insert", { item: a });
            }
            var c = (function () {
                    var a = (function () {
                        function a(a, c) {
                            b && a.shift !== c && (a.transform("translate3d(0," + c * b.offsetHeight + "px,0)"), (a.shift = c));
                        }
                        var b,
                            c,
                            e,
                            f,
                            g,
                            h = {},
                            i = {},
                            j = [],
                            k = [];
                        return {
                            onAnimationFrame: function () {
                                b.transform("translate3d(" + (i.x - h.x) + "px," + (i.y - h.y) + "px,0)");
                            },
                            onHit: function (a, d) {
                                for (b = this.parentNode, b.addClass("dragging"), CPM.Style.getStylesheet("main").lockCursor("move"), i.x = h.x = a, i.y = h.y = d, c = b.parentNode.childNodes.length; c; --c)
                                    (e = b.parentNode.childNodes[c - 1]),
                                        e !== b
                                            ? (e.setStyle({ transition: "transform 0.2s", transform: "translate3d(0,0,0)" }),
                                              (e.style.top = 0),
                                              (e.shift = 0),
                                              e.deactivate(),
                                              j.unshift(b.parentNode.childNodes[c - 1]),
                                              k.unshift(e.offsetTop - b.offsetTop + e.offsetHeight / 2 - (e.offsetTop > b.offsetTop ? b.offsetHeight : 0)))
                                            : (g = f = c - 1);
                            },
                            onMove: function (b, c) {
                                var d = c - h.y;
                                for (i.x = b, i.y = c; d < k[g - 1]; ) --g, (e = j[g]), g < f ? a(e, 1) : a(e, 0);
                                for (; d > k[g]; ) ++g, (e = j[g - 1]), g <= f ? a(e, 0) : a(e, -1);
                            },
                            onRelease: function (a, h) {
                                for (b.parentNode.insertBefore(b, j[g]), b.transform(""); j.length > 0; ) (e = j.pop()), e.setStyle({ transform: "", transition: "" }), (e.style.top = 0), e.activate();
                                for (k.splice(0, k.length), c = Math.min(g, f); c <= Math.max(g, f); ++c) b.parentNode.childNodes[c].renumber(c + 1);
                                b.removeClass("dragging"), CPM.Style.getStylesheet("main").unlockCursor(), this.activate(), b.parentNode.fireEvent("reorder", { item: d });
                            },
                        };
                    })();
                    return function () {
                        function b() {
                            var a,
                                b = g.parentNode,
                                c = g.previousSibling;
                            for (h.destroy(), b.removeChild(g), b.style.height = "", i = b.childNodes.length; i; --i) (a = b.childNodes[i - 1]), a.renumber(i), a.setStyle({ transform: "", transition: "" });
                            f === g && b.select(c), g.onDestroy && g.onDestroy(), b.fireEvent("remove", { item: g, replacement: c }), (e = g = h = j = k = b = null), delete this.renumber, delete this.destroy;
                        }
                        function c() {
                            g.parentNode.select(g), g.parentNode.fireEvent("select", { item: g });
                        }
                        function d() {
                            g.destroy(), this.removeEventListener("click", d, !1);
                        }
                        var g = CPM.Style.enable(document.createElement("li")),
                            h = document.createElement("span"),
                            j = document.createElement("div"),
                            k = document.createElement("a");
                        return (
                            (g.renumber = function (a) {
                                h.firstChild.nodeValue = a;
                            }),
                            (g.setLabel = function (a) {
                                j.firstChild.nodeValue = a;
                            }),
                            (g.activate = function () {
                                h.activate(), j.addEventListener("click", c, !1), k.addEventListener("click", d, !1);
                            }),
                            (g.deactivate = function () {
                                h.deactivate(), j.removeEventListener("click", c, !1), k.removeEventListener("click", d, !1);
                            }),
                            (g.destroy = function (a) {
                                if (a) return void b();
                                var c,
                                    d,
                                    e = g.parentNode.offsetHeight,
                                    f = g.offsetHeight,
                                    h = [],
                                    i = -1;
                                for (c = 0; c < g.parentNode.childNodes.length; ++c) (d = g.parentNode.childNodes[c]), d === g ? (i = c) : i >= 0 && h.push(d);
                                for (
                                    g.setTransition({ transform: "translate3d(0,0,0)", opacity: 1 }, { transform: "translate3d(" + -g.offsetWidth + "px,0,0)", opacity: 0 }, function () {
                                        b();
                                    }),
                                        c = h.length;
                                    c;
                                    --c
                                )
                                    (d = h[c - 1]), d.setTransition({ transform: "translate3d(0,0,0)" }, { transform: "translate3d(0," + -f + "px,0)" });
                                g.parentNode.setTransition({ height: e + "px" }, { height: e - f + "px" });
                            }),
                            g.setAttribute("class", "shuffle-list-item"),
                            h.setAttribute("class", "numeral"),
                            h.appendChild(document.createTextNode("")),
                            CPM.Base.delegateEvents(h, a, !0),
                            j.setAttribute("class", "label"),
                            j.appendChild(document.createTextNode("")),
                            k.setAttribute("class", "delete-button"),
                            k.appendChild(document.createTextNode("x")),
                            g.appendChild(h),
                            g.appendChild(j),
                            g.appendChild(k),
                            g.activate(),
                            (g.itemLabel = j),
                            (g.itemNumeral = h),
                            g
                        );
                    };
                })(),
                d = CPM.Base.makeEventReporter(CPM.Style.enable(document.createElement("ol"))),
                f = null;
            return (
                a.styled ||
                    (function () {
                        var b = CPM.Style.getStylesheet("main");
                        b.addRule(".shuffle-list", { margin: 0, padding: 0, listStyleType: "none" }),
                            b.addRule(".shuffle-list-item", { position: "relative", width: "100%", minHeight: "40px", borderBottom: "1px solid #ccc", background: "none", color: "#444", opacity: 0.9, overflow: "hidden" }),
                            b.addRule(".shuffle-list-item:active", { boxShadow: "inset 0 0 2px 2px rgba(127,160,224,0.4)" }),
                            b.addRule(".shuffle-list-item.selected", { boxShadow: "inset 0 0 0 2px #8ad" }),
                            b.addRule(".shuffle-list-item.dragging", { background: "#fff", boxShadow: "0 0 8px rgba(0,0,0,0.5)", zIndex: 10 }),
                            b.addRule(".shuffle-list-item.selected.dragging", { boxShadow: "inset 0 0 0 2px #8ad, 0 0 4px rgba(0,0,0,0.5)" }),
                            b.addRule(".shuffle-list-item > .numeral", {
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "28px",
                                paddingLeft: "2px",
                                height: "100%",
                                background: "rgba(0,0,0,0.04)",
                                borderRight: "1px solid #ccc",
                                cursor: "move",
                            }),
                            b.addRule(".shuffle-list-item.selected > .numeral", { color: "#fff", backgroundColor: "#8ad", borderColor: "#8ad" }),
                            b.addRule(".shuffle-list-item > .label", { marginLeft: "31px", marginRight: "21px", padding: "8px 0 8px 8px", fontSize: "12pt", cursor: "pointer" }),
                            b.addRule(".shuffle-list-item > .delete-button", { position: "absolute", right: "5px", top: 0, opacity: 0.3, fontFamily: "sans-serif", fontWeight: "bold", fontSize: "14pt", cursor: "pointer" }),
                            b.addRule(".shuffle-list-item > .delete-button:hover", { opacity: 0.7 }),
                            b.addRule(".shuffle-list-item > .delete-button:active", { opacity: 1 }),
                            (a.styled = !0);
                    })(),
                (d.createItem = function () {
                    return c();
                }),
                (d.insertItem = function (a, d, e) {
                    if ("object" != typeof d) {
                        if ("object" != typeof a) throw new Error("Invalid ShuffleList item for insertion");
                        (e = d), (d = a), (a = c());
                    }
                    return this.insertBefore(a, d), b.call(this, a, e), a;
                }),
                (d.addItem = function (a, d) {
                    return "object" != typeof a && ((d = a), (a = c())), this.appendChild(a), b.call(this, a, d), a;
                }),
                (d.select = function (a) {
                    f && f.removeClass("selected"), a && a.addClass("selected"), (f = a);
                }),
                (d.getSelection = function () {
                    return f;
                }),
                (d.clear = function () {
                    this.firstChild &&
                        ((this.style.overflow = "hidden"),
                        this.setTransition({ height: this.offsetHeight + "px" }, { height: 0 }, function () {
                            for (; this.firstChild; ) this.firstChild.destroy(!0);
                            (this.style.height = ""), (this.style.overflow = "");
                        }));
                }),
                d.setAttribute("class", "shuffle-list"),
                d.addCustomEventListener("remove", function (a) {
                    this.fireEvent("reorder", { item: a.replacement });
                }),
                d
            );
        }),
    (CPM = window.CPM || {}),
    (CPM.Base = CPM.Base || {}),
    CPM.Base.createDialog ||
        (CPM.Base.createDialog = function a(b) {
            function c(a) {
                a.setStyle({ transform: "", left: "", right: "", top: "", bottom: "" });
            }
            function d(a, b) {
                a.setTransition({ display: "", transform: "scale(0)" }, { transform: "scale(1)" }, b);
            }
            function e(a, b) {
                a.setTransition({ transform: "scale(1)" }, { transform: "scale(0)" }, function () {
                    (this.style.display = "none"), c(this), "function" == typeof b && b.call(this);
                });
            }
            var f = b,
                g = CPM.Style.enable(document.createElement("div"));
            if (!a.styled) {
                var h = CPM.Style.getStylesheet("main");
                h.addRule(".CPM-dialog", {
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    right: "20px",
                    maxWidth: "320px",
                    margin: "0 auto",
                    background: h.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                    border: "1px solid #bbb",
                    textAlign: "left",
                    color: "#666",
                    boxShadow: "0 6px 20px 1px rgba(0,0,0,0.8)",
                    zIndex: 2e4,
                }),
                    h.addRule(".CPM-dialog-header", { height: "40px", borderBottom: "1px solid #bbb", background: h.makeGradient("to bottom", "#fff 0%", "#ddd 100%"), color: "#444" }),
                    h.addRule(".CPM-dialog-footer", { position: "absolute", left: 0, right: 0, bottom: 0, height: "40px", borderTop: "1px solid #bbb", background: h.makeGradient("to bottom", "#eee 0%", "#ccc 100%"), color: "#444" }),
                    h.addRule(".CPM-dialog-title", { padding: "5px", fontFamily: "sans-serif", fontSize: "18pt" }),
                    h.addRule(".CPM-dialog-close-button", {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        padding: "0 5px",
                        cursor: "pointer",
                        color: "#444",
                        fontWeight: "bold",
                        fontSize: "18pt",
                        fontFamily: "sans-serif",
                        textShadow: "0 1px 0 #fff",
                    }),
                    h.addRule(".CPM-dialog-close-button:hover", { background: "rgba(0,0,0,0.15)", textShadow: "none" }),
                    h.addRule(".CPM-dialog-close-button:active", {}),
                    (a.styled = !0);
            }
            return (
                (g.show = function (a) {
                    f && (f.dialog && f.dialog !== this && f.dialog.hide(), (f.dialog = this)), "none" === this.style.display && this.transitionIn(a);
                }),
                (g.hide = function (a) {
                    f && f.dialog === this && (f.dialog = null), "none" !== this.style.display && this.transitionOut(a);
                }),
                (g.transitionIn = function (a) {
                    d(this, a);
                }),
                (g.transitionOut = function (a) {
                    e(this, a);
                }),
                g.setAttribute("class", "CPM-dialog"),
                (g.style.display = "none"),
                (g.dialogheader = document.createElement("div")),
                g.dialogheader.setAttribute("class", "CPM-dialog-header"),
                (g.dialogtitle = document.createElement("h1")),
                g.dialogtitle.setAttribute("class", "CPM-dialog-title"),
                (g.closebutton = document.createElement("a")),
                g.closebutton.setAttribute("class", "CPM-dialog-close-button"),
                g.closebutton.appendChild(document.createTextNode("x")),
                g.closebutton.addEventListener(
                    "click",
                    function () {
                        g.hide();
                    },
                    !1
                ),
                g.dialogheader.appendChild(g.dialogtitle),
                g.dialogheader.appendChild(g.closebutton),
                g.appendChild(g.dialogheader),
                g
            );
        }),
    (CPM = window.CPM || {}),
    (CPM.Base = CPM.Base || {}),
    CPM.Base.createHelpDialog ||
        (function () {
            function a(a) {
                return (
                    a.appendChild(document.createElement("div")),
                    a.lastChild.setAttribute("class", "CPM-icon-paper shadow"),
                    a.lastChild.appendChild(document.createElement("div")),
                    a.lastChild.lastChild.setAttribute("class", "CPM-icon-pencil"),
                    a.lastChild.appendChild(document.createElement("div")),
                    a.lastChild.lastChild.setAttribute("class", "CPM-icon-lines"),
                    a.appendChild(a.lastChild.cloneNode(!0)),
                    a.lastChild.setAttribute("class", "CPM-icon-paper"),
                    a
                );
            }
            function b(a) {
                return a.appendChild(document.createElement("div")), a.lastChild.setAttribute("class", "CPM-icon-question"), a;
            }
            function c(a) {
                return a.appendChild(document.createElement("div")), a.lastChild.setAttribute("class", "CPM-icon-triangle left"), a;
            }
            (CPM.Base.generateElementShortcuts = (function () {
                var a,
                    b = ["a", "p", "em", "strong", "span", "div"];
                return function (c) {
                    var d, e;
                    if (null != a) return a;
                    for (a = {}, d = 0, e = b.length; d < e; ++d)
                        a[b[d]] = (function (a) {
                            return function (b) {
                                var c = document.createElement(a);
                                return null != b && c.appendChild(document.createTextNode(b)), c;
                            };
                        })(b[d]);
                    return (
                        (a.icon = function (a) {
                            var b = document.createElement("span");
                            return b.setAttribute("class", "CPM-help-dialog-icon " + a), b.appendChild(document.createElement("div")), b.firstChild.setAttribute("class", "decoration"), b;
                        }),
                        (a.link = function (a, b) {
                            null == b && (b = a);
                            var d = document.createElement("span");
                            return (
                                d.setAttribute("class", "CPM-help-link"),
                                d.appendChild(document.createTextNode(b)),
                                d.addEventListener(
                                    "click",
                                    function () {
                                        c.goToPage(c.lookup(a));
                                    },
                                    !1
                                ),
                                d
                            );
                        }),
                        a
                    );
                };
            })()),
                (CPM.Base.createHelpDialog = function d(e) {
                    function f(a) {
                        function b(a) {
                            0 === r
                                ? (m > 0
                                      ? (q.previousPage && q.previousPage.setStyle({ display: "", opacity: 1, transform: "translate3d(" + (-q.offsetWidth + m) + "px,0,0)" }), q.nextPage && (q.nextPage.style.display = "none"))
                                      : m < 0 && (q.nextPage && q.nextPage.setStyle({ display: "", opacity: 1, transform: "translate3d(" + (q.offsetWidth + m) + "px,0,0)" }), q.previousPage && (q.previousPage.style.display = "none")),
                                  q.transform("translate3d(" + m + "px,0,0)"))
                                : 1 === r && (q.transform("translate3d(0,0,0)"), (q.scrollTop = Math.max(0, o - n))),
                                a &&
                                    (h = window.requestAnimationFrame(function () {
                                        b(!0);
                                    }));
                        }
                        function c(a, b) {
                            var c;
                            for (c = a.length; c; --c) if (a[c - 1].identifier === b) return a[c - 1];
                            return null;
                        }
                        function d(a) {
                            var b;
                            (b = c(a.changedTouches, p)) && ((m = b.pageX - j), (n = b.pageY - l), -1 === r && (Math.abs(m) > g ? (r = 0) : Math.abs(n) > g && (r = 1)), a.preventDefault());
                        }
                        function e(a) {
                            var b;
                            (b = c(a.changedTouches, p)) &&
                                (0 === r &&
                                    ((m = b.pageX - j),
                                    (n = b.pageY - l),
                                    m > g && k.previousPage
                                        ? i.previousPage(!0)
                                        : m < -g && k.nextPage
                                        ? i.nextPage(!0)
                                        : (q.setTransition({}, { transform: "translate3d(0,0,0)" }),
                                          q.nextPage &&
                                              "none" !== q.nextPage.style.display &&
                                              q.nextPage.setTransition({}, { transform: "translate3d(" + q.offsetWidth + "px,0,0)" }, function () {
                                                  this.style.display = "none";
                                              }),
                                          q.previousPage &&
                                              "none" !== q.previousPage.style.display &&
                                              q.previousPage.setTransition({}, { transform: "translate3d(" + -q.offsetWidth + "px,0,0)" }, function () {
                                                  this.style.display = "none";
                                              }))),
                                this.removeEventListener("touchmove", d, !1),
                                this.removeEventListener("touchend", e, !1),
                                q.addEventListener("touchstart", f, !1),
                                window.cancelAnimationFrame ? window.cancelAnimationFrame(h) : window.clearInterval(h),
                                a.preventDefault());
                        }
                        var h,
                            j = (a.timeStamp, a.changedTouches[0].pageX),
                            l = a.changedTouches[0].pageY,
                            m = 0,
                            n = 0,
                            o = this.scrollTop,
                            p = a.changedTouches[0].identifier,
                            q = this,
                            r = -1;
                        q.removeEventListener("touchstart", f, !1), window.requestAnimationFrame ? b(!0) : (h = window.setInterval(b, 20)), document.addEventListener("touchmove", d, !1), document.addEventListener("touchend", e, !1);
                    }
                    var g = 15,
                        h = e,
                        i = CPM.Base.createDialog(h),
                        j = [],
                        k = null,
                        l = document.createElement("span"),
                        m = document.createElement("div"),
                        n = document.createElement("span"),
                        o = document.createElement("span"),
                        p = document.createElement("span"),
                        q = document.createElement("a"),
                        r = document.createElement("a"),
                        s = CPM.Base.generateElementShortcuts(i),
                        t = (s.a, s.p),
                        u = (s.span, s.icon),
                        v = s.link;
                    if (!d.styled) {
                        var w = CPM.Style.getStylesheet("main");
                        w.addRule(".CPM-dialog.CPM-help-dialog", { maxWidth: "420px", maxHeight: "520px", bottom: "20px", color: "#666", overflow: "hidden" }),
                            w.addRule(".CPM-help-dialog-title", { fontSize: "medium" }),
                            w.addRule(".CPM-help-dialog-footer", { height: "20px", padding: "10px", textAlign: "center" }),
                            w.addRule(".CPM-help-dialog-footer > a", { marginTop: "-3px", padding: "3px", opacity: 0.1, cursor: "default", userSelect: "none" }),
                            w.addRule(".CPM-help-dialog-footer > a.enabled", { opacity: 1, cursor: "pointer" }),
                            w.addRule(".CPM-help-dialog-footer > a.enabled:hover", { background: "rgba(0,0,0,0.15)" }),
                            w.addRule(".CPM-help-dialog-footer > a.enabled:active", {}),
                            w.addRule(".CPM-link-to-toc", { color: "#00f", textDecoration: "underline", cursor: "pointer" }),
                            w.addRule(".CPM-help-dialog-page", { position: "absolute", left: 0, right: 0, top: "41px", bottom: "41px", padding: "5px", overflowY: "auto" }),
                            w.addRule(".CPM-help-dialog-page > h1", { fontSize: "x-large", fontFamily: "sans-serif", textAlign: "center" }),
                            w.addRule(".CPM-help-dialog-page > p", { marginBottom: "1em" }),
                            w.addRule(".CPM-help-dialog-page > p:last-child", { marginBottom: 0 }),
                            w.addRule(".CPM-help-dialog-page > .copyright", { fontSize: "small", textAlign: "center" }),
                            w.addRule(".CPM-table-of-contents", { margin: "0.5em 3em 0 1em", listStyleType: "none" }),
                            w.addRule(".CPM-table-of-contents-section", { marginBottom: "0.5em", fontSize: "120%", fontWeight: "bold", fontFamily: "sans-serif" }),
                            w.addRule(".CPM-table-of-contents-link", { color: "#00f", marginLeft: "2em", marginBottom: "0.5em", borderBottom: "1px solid #00f", lineHeight: "0.8em", cursor: "pointer" }),
                            w.addRule(".CPM-table-of-contents-link > span:last-child", { cssFloat: "right" }),
                            w.addRule(".CPM-table-of-contents > li:last-child", { marginBottom: 0 }),
                            w.addRule(".CPM-help-link", { color: "#00f", borderBottom: "1px solid #00f", cursor: "pointer" }),
                            w.addRule(".CPM-help-dialog-icon", { cssFloat: "left", clear: "both", display: "inline-block", pointerEvents: "none", boxSizing: "border-box", textAlign: "center" }),
                            w.addRule(".CPM-help-dialog-mockup", { position: "relative", width: "260px", margin: "1em auto", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", pointerEvents: "none", overflow: "hidden" }),
                            (d.styled = !0);
                    }
                    return (
                        (i.addPage = function (a, b) {
                            var c = j.length > 0 ? j[j.length - 1] : null,
                                d = CPM.Style.enable(document.createElement("div"));
                            return (
                                c
                                    ? ((d.previousPage = c), (c.nextPage = d), (d.style.display = "none"), r.setAttribute("class", "enabled"))
                                    : ((d.previousPage = null), (k = d), (o.firstChild.nodeValue = "1"), (l.firstChild.nodeValue = a ? " - " + a : "")),
                                (d.pageTitle = a),
                                (d.pageID = null != b ? b : a),
                                (d.nextPage = null),
                                (d.pageNumber = j.length + 1),
                                d.setAttribute("class", "CPM-help-dialog-page"),
                                d.addEventListener("touchstart", f, !1),
                                i.appendChild(d),
                                j.push(d),
                                (p.firstChild.nodeValue = d.pageNumber.toString()),
                                d
                            );
                        }),
                        (i.addTitlePage = function (a, b) {
                            var c = this.addPage("Welcome"),
                                d = document.createElement("h1"),
                                e = t("");
                            return (
                                d.appendChild(document.createTextNode(a)),
                                e.setAttribute("class", "copyright"),
                                c.appendChild(d),
                                c.appendChild(e),
                                (b && b.singlePage) ||
                                    ((c.epilogue = t("Click on 'Next â–¶' below to get started!")),
                                    c.appendChild(c.epilogue),
                                    (c.addContent = function (a) {
                                        this.insertBefore(a, this.epilogue);
                                    })),
                                (this.titlePage = c),
                                c
                            );
                        }),
                        (i.addTrayPage = function (d) {
                            var e,
                                f,
                                g,
                                h,
                                j = i.addPage("The Toolbar"),
                                k = document.createElement("div"),
                                l = document.createElement("div");
                            return (
                                j.appendChild(t("At the top of the tray is a menu bar like the one below.")),
                                k.setAttribute("class", "CPM-help-dialog-mockup"),
                                (k.style.height = "40px"),
                                (k.style.borderRight = "none"),
                                l.setAttribute("class", "CPM-tray-topbar"),
                                (e = document.createElement("button")),
                                e.setAttribute("class", "CPM-tray-topbar-button"),
                                a(e),
                                l.appendChild(e),
                                (e = document.createElement("button")),
                                e.setAttribute("class", "CPM-tray-topbar-button"),
                                b(e),
                                l.appendChild(e),
                                (e = document.createElement("button")),
                                e.setAttribute("class", "CPM-tray-topbar-button"),
                                c(e),
                                (e.style.cssFloat = "right"),
                                l.appendChild(e),
                                (e = document.createTextNode(d)),
                                l.appendChild(e),
                                k.appendChild(l),
                                j.appendChild(k),
                                j.appendChild(c(u("CPM-tray-topbar-button"))),
                                (f = t("This button will hide the tray. When the tray is hidden, you can click on the button in the top left corner of the screen to show it again.")),
                                j.appendChild(f),
                                (j.setHideDescription = function (a) {
                                    f.firstChild.nodeValue = a;
                                }),
                                j.appendChild(b(u("CPM-tray-topbar-button"))),
                                (g = t("This button will show the help, which you are currently reading.")),
                                j.appendChild(g),
                                (j.setHelpDescription = function (a) {
                                    g.firstChild.nodeValue = a;
                                }),
                                j.appendChild(a(u("CPM-tray-topbar-button"))),
                                (h = t("This button will open a menu with more options.")),
                                j.appendChild(h),
                                (j.setGearDescription = function (a) {
                                    h.firstChild.nodeValue = a;
                                }),
                                j
                            );
                        }),
                        (i.addTableOfContents = function (a) {
                            var b,
                                c = this.addPage("Table of Contents"),
                                d = document.createElement("ol");
                            return (
                                d.setAttribute("class", "CPM-table-of-contents"),
                                (c.add = function (a) {
                                    var b = document.createElement("li");
                                    b.setAttribute("class", "CPM-table-of-contents-link"),
                                        b.appendChild(document.createElement("span")),
                                        b.lastChild.appendChild(document.createTextNode(a.pageTitle)),
                                        b.appendChild(document.createElement("span")),
                                        b.lastChild.appendChild(document.createTextNode(a.pageNumber)),
                                        b.addEventListener(
                                            "click",
                                            function () {
                                                i.goToPage(a);
                                            },
                                            !1
                                        ),
                                        d.appendChild(b);
                                }),
                                (c.addSection = function (a) {
                                    var b = document.createElement("li");
                                    b.setAttribute("class", "CPM-table-of-contents-section"), b.appendChild(document.createTextNode(a)), d.appendChild(b);
                                }),
                                c.appendChild(d),
                                n.setAttribute("class", "CPM-link-to-toc"),
                                n.addEventListener(
                                    "click",
                                    function () {
                                        i.goToPage(c);
                                    },
                                    !1
                                ),
                                (b = t("Click on '")),
                                b.appendChild(v("Table of Contents", "Page X of Y")),
                                b.appendChild(document.createTextNode("' below at any time to see the table of contents.")),
                                this.titlePage.appendChild(b),
                                (this.tableOfContents = c),
                                c
                            );
                        }),
                        (i.nextPage = function (a) {
                            k &&
                                k.nextPage &&
                                ((k.nextPage.style.display = ""),
                                !0 !== a
                                    ? (k.setTransition({ display: "", opacity: 1 }, { opacity: 0, transform: "translate3d(" + -k.offsetWidth + "px,0,0)" }, function () {
                                          this.style.display = "none";
                                      }),
                                      k.nextPage.setTransition({ display: "", opacity: 0, transform: "translate3d(" + k.offsetWidth + "px,0,0)" }, { opacity: 1, transform: "translate3d(0,0,0)" }))
                                    : (k.setTransition(
                                          {},
                                          { transform: "translate3d(" + -k.offsetWidth + "px,0,0)" },
                                          function () {
                                              this.style.display = "none";
                                          },
                                          { type: "cubic-bezier(0,0,0,1)" }
                                      ),
                                      k.nextPage.setTransition({}, { transform: "translate3d(0,0,0)" }, null, { type: "cubic-bezier(0,0,0,1)" })),
                                (o.firstChild.nodeValue = parseInt(o.firstChild.nodeValue) + 1),
                                (k = k.nextPage),
                                (l.firstChild.nodeValue = k.pageTitle ? " - " + k.pageTitle : ""),
                                k.nextPage || r.setAttribute("class", "disabled"),
                                q.setAttribute("class", "enabled"));
                        }),
                        (i.previousPage = function (a) {
                            k &&
                                k.previousPage &&
                                (!0 !== a
                                    ? (k.setTransition({ display: "", opacity: 1 }, { opacity: 0, transform: "translate3d(420px,0,0)" }, function () {
                                          this.style.display = "none";
                                      }),
                                      k.previousPage.setTransition({ display: "", opacity: 0, transform: "translate3d(-420px,0,0)" }, { opacity: 1, transform: "translate3d(0,0,0)" }))
                                    : (k.setTransition(
                                          {},
                                          { transform: "translate3d(" + k.offsetWidth + "px,0,0)" },
                                          function () {
                                              this.style.display = "none";
                                          },
                                          { type: "cubic-bezier(0,0,0,1)" }
                                      ),
                                      k.previousPage.setTransition({}, { transform: "translate3d(0,0,0)" }, null, { type: "cubic-bezier(0,0,0,1)" })),
                                (o.firstChild.nodeValue = parseInt(o.firstChild.nodeValue) - 1),
                                (k = k.previousPage),
                                (l.firstChild.nodeValue = k.pageTitle ? " - " + k.pageTitle : ""),
                                k.previousPage || q.setAttribute("class", "disabled"),
                                r.setAttribute("class", "enabled"));
                        }),
                        (i.goToPage = function (a) {
                            k &&
                                a &&
                                k !== a &&
                                ((a.style.display = ""),
                                k.pageNumber < a.pageNumber
                                    ? (k.setTransition({ display: "", opacity: 1 }, { opacity: 0, transform: "translate3d(" + -k.offsetWidth + "px,0,0)" }, function () {
                                          this.style.display = "none";
                                      }),
                                      a.setTransition({ display: "", opacity: 0, transform: "translate3d(" + k.offsetWidth + "px,0,0)" }, { opacity: 1, transform: "translate3d(0,0,0)" }))
                                    : (k.setTransition({ display: "", opacity: 1 }, { opacity: 0, transform: "translate3d(" + k.offsetWidth + "px,0,0)" }, function () {
                                          this.style.display = "none";
                                      }),
                                      a.setTransition({ display: "", opacity: 0, transform: "translate3d(" + -k.offsetWidth + "px,0,0)" }, { opacity: 1, transform: "translate3d(0,0,0)" })),
                                (o.firstChild.nodeValue = a.pageNumber),
                                (k = a),
                                (l.firstChild.nodeValue = k.pageTitle ? " - " + k.pageTitle : ""),
                                k.nextPage ? r.setAttribute("class", "enabled") : r.setAttribute("class", "disabled"),
                                k.previousPage ? q.setAttribute("class", "enabled") : q.setAttribute("class", "disabled"));
                        }),
                        (i.lookup = function (a) {
                            var b;
                            for (b = 0; b < j.length; ++b) if (j[b].pageID === a) return j[b];
                            return null;
                        }),
                        r.addEventListener("click", i.nextPage, !1),
                        q.addEventListener("click", i.previousPage, !1),
                        i.setAttribute("class", "CPM-dialog CPM-help-dialog"),
                        l.setAttribute("class", "CPM-help-dialog-title"),
                        l.appendChild(document.createTextNode("")),
                        i.dialogtitle.appendChild(document.createTextNode("Help")),
                        i.dialogtitle.appendChild(l),
                        o.appendChild(document.createTextNode("0")),
                        p.appendChild(document.createTextNode("0")),
                        n.appendChild(document.createTextNode("Page ")),
                        n.appendChild(o),
                        n.appendChild(document.createTextNode(" of ")),
                        n.appendChild(p),
                        q.appendChild(document.createTextNode("â—€ Prev")),
                        (q.style.cssFloat = "left"),
                        r.appendChild(document.createTextNode("Next â–¶")),
                        (r.style.cssFloat = "right"),
                        m.setAttribute("class", "CPM-dialog-footer CPM-help-dialog-footer"),
                        m.appendChild(q),
                        m.appendChild(r),
                        m.appendChild(n),
                        i.appendChild(m),
                        i
                    );
                });
        })(),
    (CPM = window.CPM || {}),
    (CPM.Base = CPM.Base || {}),
    CPM.Base.createSavePopup ||
        ((CPM.Base.createSavePopup = function a(b, c, d, e) {
            function f(a, b) {
                (a.style.display = ""), (a.style.position = "absolute"), a.setTransition({ transform: "translate3d(0,-" + (a.offsetHeight + 10) + "px,0)" }, { transform: "translate3d(0,0,0)" }, b);
            }
            function g(a, b) {
                function c() {
                    (this.style.display = "none"), (this.style.top = ""), "function" == typeof b && b.call(this);
                }
                a.setTransition({ transform: "translate3d(0,0,0)" }, { transform: "translate3d(0,-" + (a.offsetHeight + 10) + "px,0)" }, c);
            }
            var h,
                i,
                j,
                k,
                l = CPM.Base.createDialog(b);
            if (!a.styled) {
                var m = CPM.Style.getStylesheet("main");
                m.addRule(".CPM-dialog.save-popup", { top: 0, maxWidth: "360px", borderTop: "none" }),
                    m.addRule(".save-popup-area", { padding: "5px", textAlign: "center" }),
                    m.addRule(".CPM-dialog.save-popup textarea", { width: "90%", height: "8em", resize: "none" }),
                    (a.styled = !0);
            }
            return (
                (l.transitionIn = function (a) {
                    f(this, function () {
                        i && i.select(), "function" == typeof a && a.call(l);
                    });
                }),
                (l.transitionOut = function (a) {
                    g(this, a);
                }),
                l.setAttribute("class", "CPM-dialog save-popup"),
                (l.dialogarea = document.createElement("div")),
                l.dialogarea.setAttribute("class", "save-popup-area"),
                c !== d
                    ? (l.dialogtitle.appendChild(document.createTextNode("Saved!")),
                      l.dialogarea.appendChild(document.createTextNode("Bookmark or copy this link:")),
                      l.dialogarea.appendChild(document.createElement("br")),
                      (h = (window.location.origin || window.location.protocol + "//" + window.location.hostname) + window.location.pathname + "?" + c),
                      (i = document.createElement("textarea")),
                      i.appendChild(document.createTextNode(h)),
                      l.dialogarea.appendChild(i),
                      l.dialogarea.appendChild(document.createElement("br")),
                      (j = document.createElement("a")),
                      j.setAttribute("target", "_blank"),
                      j.setAttribute("href", h),
                      "string" == typeof e && "" !== e ? ((k = e.toLowerCase()), j.appendChild(document.createTextNode("Click here to open the saved " + k))) : j.appendChild(document.createTextNode("Click here to open the saved tool")),
                      l.dialogarea.appendChild(j))
                    : (l.dialogtitle.appendChild(document.createTextNode("Error")), l.dialogarea.appendChild(document.createTextNode("Nothing to save"))),
                l.appendChild(l.dialogarea),
                l
            );
        }),
        (CPM.Base.loadFromQuery = function (a, b, c) {
            "string" != typeof c && (c = "");
            var d,
                e,
                f = window.location.search.substring(1).split("&");
            for (d in f) if (((e = f[d].split("=")), e[0] === c + "data")) break;
            if (void 0 !== e && e[0] === c + "data")
                try {
                    a(b, e[1]);
                } catch (a) {
                    throw (alert("A problem occurred while loading the tool."), a);
                }
        }),
        (function () {
            function a(a) {
                function b(a, b) {
                    var d;
                    return "string" == typeof a ? ((d = c.substr(0, c.indexOf(a))), b && (c = c.slice(c.indexOf(a) + a.length))) : ((d = c.substr(0, a)), b && (c = c.slice(a))), d;
                }
                var c = a;
                (this.chomp = function (a) {
                    return b(a, !0);
                }),
                    (this.peek = function (a) {
                        return b(a, !1);
                    }),
                    Object.defineProperties(this, {
                        remaining: {
                            get: function () {
                                return c;
                            },
                        },
                        length: {
                            get: function () {
                                return c.length;
                            },
                        },
                    });
            }
            function b(a) {
                return a - Math.floor(a) < e ? Math.floor(a) : Math.ceil(a) - a < e ? Math.ceil(a) : a;
            }
            function c(a) {
                (this.chunks = []), this.set(a);
            }
            var d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-_.0123456789",
                e = 1e-5;
            (a.prototype.toString = function () {
                return this.remaining;
            }),
                (c.WORD_SIZE = d.length),
                (c.CHUNK_WIDTH = 4),
                (c.CHUNK_SIZE = Math.pow(c.WORD_SIZE, c.CHUNK_WIDTH)),
                (c.prototype.set = function (a) {
                    var b, c;
                    if ((this.chunks.splice(0, this.chunks.length), "number" == typeof a && a >= 0)) (this.chunks[0] = a), this.add(0);
                    else if ("object" == typeof a && a.chunks) for (b = 0, c = a.chunks.length; b < c; ++b) this.chunks[b] = a.chunks[b];
                    else this.chunks[0] = 0;
                    return this;
                }),
                (c.prototype.add = function (a) {
                    var b, d;
                    if ("number" == typeof a) {
                        if (a < 0) return this.subtract(-a);
                        for (this.chunks[0] += a, b = 0; b < this.chunks.length; ++b)
                            this.chunks[b] >= c.CHUNK_SIZE && (this.chunks[b + 1] || (this.chunks[b + 1] = 0), (this.chunks[b + 1] += Math.floor(this.chunks[b] / c.CHUNK_SIZE)), (this.chunks[b] = this.chunks[b] % c.CHUNK_SIZE));
                    } else if ("object" == typeof a && a.chunks) {
                        for (b = 0, d = a.chunks.length; b < d; ++b) this.chunks[b] || (this.chunks[b] = 0), (this.chunks[b] += a.chunks[b]);
                        this.add(0);
                    }
                    return this;
                }),
                (c.prototype.subtract = function (a) {
                    var b, d;
                    if ("number" == typeof a) {
                        if (a < 0) return this.add(-a);
                        for (this.chunks[0] -= a, b = 0; this.chunks[b] < 0; ) {
                            if (null == this.chunks[b + 1] || this.chunks[b + 1] < 0) return this.set(0);
                            (d = Math.ceil(Math.abs(this.chunks[b]) / c.CHUNK_SIZE)), (this.chunks[b + 1] -= d), (this.chunks[b] += d * c.CHUNK_SIZE), ++b;
                        }
                    } else if ("object" == typeof a && a.chunks) {
                        for (b = 0, d = a.chunks.length; b < d; ++b) this.chunks[b] || (this.chunks[b] = 0), (this.chunks[b] -= a.chunks[b]);
                        this.subtract(0);
                    }
                    return this;
                }),
                (c.prototype.multiply = function (a) {
                    var b, c;
                    if ("number" == typeof a) {
                        if (a < 0) return this.set(0);
                        for (b = 0, c = this.chunks.length; b < c; ++b) this.chunks[b] *= a;
                        this.add(0);
                    } else "object" == typeof a && a.chunks;
                    return this;
                }),
                (c.prototype.divide = function (a) {
                    var b, d;
                    if ("number" == typeof a) {
                        if (a < 0) return this.set(0);
                        for (b = this.chunks.length - 1; b >= 0; --b) (d = this.chunks[b] % a), (this.chunks[b] = Math.floor(this.chunks[b] / a)), b > 0 && (this.chunks[b - 1] += d * c.CHUNK_SIZE);
                    } else "object" == typeof a && a.chunks;
                    return (this.lastRemainder = d), this;
                }),
                (c.prototype.getWordLength = function () {
                    var a = this.chunks.length - 1,
                        d = 0;
                    return (d = 0 === this.chunks[a] ? 0 : 1 === this.chunks[a] ? 1 : Math.ceil(b(Math.log(this.chunks[a]) / Math.log(c.WORD_SIZE)))), (d += c.CHUNK_WIDTH * a);
                }),
                (c.prototype.extract = function () {
                    var a,
                        b,
                        d = 0;
                    for (a = 0, b = this.chunks.length; a < b; ++a) d += this.chunks[a] * Math.pow(c.CHUNK_SIZE, a);
                    return d;
                }),
                (CPM.Base.Encoder = function () {
                    var a = "";
                    (this.pushValue = function (b, c) {
                        var e,
                            f = "",
                            g = d.length;
                        if ((b = Math.floor(b)) <= 0) f = Number(c) > 0 ? new Array(c + 1).join(d[0]) : d[0];
                        else {
                            for (; b > 0; ) (b -= e = b % g), (b /= g), (f = d[e] + f);
                            if (Number(c) > 0) for (; f.length < c; ) f = d[0] + f;
                        }
                        return (a += f), f;
                    }),
                        (this.pushDecimal = function (a, b, c, e) {
                            var f = Math.pow(10, e),
                                g = (c - b) * f,
                                h = Math.ceil(Math.log(g) / Math.log(d.length)),
                                i = Math.max(0, Math.min(g, a * f - b * f));
                            return this.pushValue(i, h);
                        }),
                        (this.pushChars = function (b) {
                            return (b = encodeURIComponent(b)), (a += b), b;
                        }),
                        (this.pushRawString = function (b) {
                            var c = 0,
                                e = 0,
                                f = "";
                            for (b = encodeURIComponent(b); b.length > 0; )
                                if (((e = c = b.indexOf("_")), -1 !== c)) {
                                    for (; "_" !== d[e - c] && "_" === b[++e]; );
                                    (f += b.slice(0, c)), (f += "_"), (f += d[e - c - 1]), (b = b.slice(e));
                                } else (f += b), (b = "");
                            return (f += "__"), (a += f), f;
                        }),
                        (this.pack = function () {
                            for (var a, b, e, f = (d.length, new c(0)), g = new c(1), h = 0, i = arguments.length; h + 1 < i; ) (a = arguments[h]), (b = arguments[h + 1]), f.multiply(b), f.add(a), g.multiply(b), (h += 2);
                            for (g.subtract(1), e = g.getWordLength(), i = g.chunks.length - 1, e % c.CHUNK_WIDTH != 0 ? (this.pushValue(f.chunks[i] || 0, e % c.CHUNK_WIDTH), (h = i - 1)) : (h = i); h >= 0; )
                                this.pushValue(f.chunks[h] || 0, c.CHUNK_WIDTH), --h;
                        }),
                        Object.defineProperties(this, {
                            data: {
                                get: function () {
                                    return a;
                                },
                            },
                        });
                }),
                (CPM.Base.Encoder.prototype.toString = function () {
                    return this.data;
                }),
                (CPM.Base.Decoder = function (b) {
                    function e(a) {
                        for (var b = 0, c = d.length; a.length > 0; ) (b *= c), (b += d.indexOf(a[0])), (a = a.substring(1));
                        return b;
                    }
                    var f = new a(b);
                    (this.peekValue = function (a) {
                        return e(f.peek(a));
                    }),
                        (this.popValue = function (a) {
                            return e(f.chomp(a));
                        }),
                        (this.popDecimal = function (a, b, c) {
                            var g = Math.pow(10, c),
                                h = (b - a) * g,
                                i = Math.ceil(Math.log(h) / Math.log(d.length));
                            return (e(f.chomp(i)) + a * g) / g;
                        }),
                        (this.peekChar = function () {
                            return f.peek(1);
                        }),
                        (this.peekChars = function (a) {
                            return f.peek(a);
                        }),
                        (this.popChars = function (a) {
                            return f.chomp(a);
                        }),
                        (this.hasRawString = function () {
                            return f.remaining.indexOf("__") > -1;
                        }),
                        (this.popRawString = function () {
                            for (var a, b, c, d = "", g = decodeURIComponent(f.chomp("__")); (a = g.indexOf("_")) > -1; ) {
                                for (d += g.slice(0, a), b = e(g[a + 1]), c = 0; c <= b; d += "_", ++c);
                                g = g.slice(a + 2);
                            }
                            return d + g;
                        }),
                        (this.unpack = function () {
                            var a,
                                b,
                                e = (d.length, new c(0)),
                                f = new c(1),
                                g = [],
                                h = 0,
                                i = arguments.length;
                            for (h = 0; h < i; ++h) f.multiply(arguments[h]);
                            for (f.subtract(1), a = f.getWordLength(), i = f.chunks.length - 1, a % c.CHUNK_WIDTH != 0 ? ((e.chunks[i] = this.popValue(a % c.CHUNK_WIDTH)), (h = i - 1)) : (h = i); h >= 0; )
                                (e.chunks[h] = this.popValue(c.CHUNK_WIDTH)), --h;
                            for (h = arguments.length - 1; h >= 0; --h) (b = arguments[h]), e.divide(b), (g[h] = e.lastRemainder);
                            return g;
                        }),
                        Object.defineProperties(this, {
                            data: {
                                get: function () {
                                    return f.toString();
                                },
                            },
                        });
                }),
                (CPM.Base.Decoder.prototype.toString = function () {
                    return this.data;
                });
        })()),
    (CPM = window.CPM || {}),
    (CPM.Base = CPM.Base || {}),
    CPM.Base.createTray ||
        (function () {
            function a() {
                var b;
                a.applied ||
                    ((b = CPM.Style.getStylesheet("probability")),
                    b.addRule(".CPM-tray, .CPM-micro-tray", {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "260px",
                        minHeight: "97px",
                        borderRight: "1px solid #bbb",
                        background: b.makeGradient("to bottom", "#fff 0%", "#fbfbfb 100%"),
                        boxShadow: "-5px 0 10px 5px rgba(0,0,0,0.4)",
                        zIndex: 10,
                    }),
                    b.addRule(".CPM-tray", { bottom: 0 }),
                    b.addRule(".CPM-tray-topbar", {
                        position: "relative",
                        width: "100%",
                        height: "40px",
                        borderBottom: "1px solid #bbb",
                        background: b.makeGradient("to bottom", "#fff 0%", "#ddd 100%"),
                        cursor: "default",
                        color: "#444",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        lineHeight: "40px",
                        verticalAlign: "middle",
                        whiteSpace: "nowrap",
                    }),
                    b.addRule(".CPM-tray-topbar-button", {
                        position: "relative",
                        cssFloat: "left",
                        width: "30px",
                        height: "30px",
                        margin: "5px",
                        cursor: "pointer",
                        verticalAlign: "top",
                        background: b.makeGradient("to bottom", "#fff 10%", "#ddd 90%"),
                        border: "1px solid #bbb",
                        borderRadius: "30px",
                        boxShadow: "0 2px 2px rgba(0,0,0,0.2), inset 0 -2px 2px rgba(0,0,0,0.1), inset 0 2px 2px rgba(255,255,255,0.5)",
                    }),
                    b.addRule(".CPM-tray-topbar-button:hover:enabled", {
                        background: b.makeGradient("to bottom", "#fff 20%", "#eee 90%"),
                        boxShadow: "0 2px 6px rgba(0,0,0,0.4), inset 0 -2px 2px rgba(0,0,0,0.1), inset 0 2px 2px rgba(255,255,255,0.5)",
                    }),
                    b.addRule(".CPM-tray-topbar-button:active:enabled", {
                        background: b.makeGradient("to bottom", "#fff 20%", "#eee 90%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.2), inset 0 2px 2px rgba(0,0,0,0.1), inset 0 -2px 2px rgba(255,255,255,0.5)",
                    }),
                    b.addRule(".cpm-tray-footer", {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "48px",
                        lineHeight: "16px",
                        padding: "4px 0",
                        borderTop: "1px solid #bbb",
                        backgroundColor: "#f8f8f8",
                        textAlign: "center",
                        fontSize: "10pt",
                        fontFamily: "sans-serif",
                    }),
                    b.addRule(".cpm-tray-footer a", { color: "#888" }),
                    b.addRule(".cpm-tray-footer a:hover", { color: "#444" }),
                    b.addRule(".CPM-icon-question::before", { content: "'?'", lineHeight: "30px", color: "#444", fontFamily: "serif", fontSize: "30px", textShadow: "0 1px 0 #fff" }),
                    b.addRule(".CPM-icon-triangle::before, .CPM-icon-triangle::after", { position: "absolute", content: "''", left: "50%", top: "50%", marginLeft: "-9px", marginTop: "-8px", border: "8px solid transparent" }),
                    b.addRule(".CPM-icon-triangle.left::before", { marginTop: "-7px", borderLeft: "none", borderRight: "16px solid #fff" }),
                    b.addRule(".CPM-icon-triangle.left::after", { borderLeft: "none", borderRight: "16px solid #444" }),
                    b.addRule(".CPM-icon-triangle.right::before", { marginTop: "-7px", borderLeft: "16px solid #fff", borderRight: "none" }),
                    b.addRule(".CPM-icon-triangle.right::after", { marginTop: "-8px", borderLeft: "16px solid #444", borderRight: "none" }),
                    b.addRule(".CPM-icon-paper", { position: "absolute", left: "6px", top: "4px", width: "10px", height: "16px", border: "2px solid #444", borderRight: "none", borderRadius: "3px 0 0 3px" }),
                    b.addRule(".CPM-icon-paper::after", {
                        position: "absolute",
                        content: "''",
                        left: "10px",
                        top: "12px",
                        width: "3px",
                        height: "4px",
                        borderRight: "2px solid #444",
                        borderBottom: "2px solid #444",
                        borderRadius: "0 0 3px 0",
                    }),
                    b.addRule(".CPM-icon-paper > .CPM-icon-pencil", { position: "absolute", left: "8px", top: "3px", width: "8px", height: "4px", background: "#444", transform: "rotate(-70deg)" }),
                    b.addRule(".CPM-icon-paper > .CPM-icon-pencil::before", {
                        position: "absolute",
                        content: "''",
                        left: "-6px",
                        top: 0,
                        borderRight: "5px solid #444",
                        borderTop: "2px solid transparent",
                        borderBottom: "2px solid transparent",
                    }),
                    b.addRule(".CPM-icon-paper > .CPM-icon-pencil::after", { position: "absolute", content: "''", left: "9px", top: 0, border: "2px solid #444", borderLeft: "none", borderRadius: "0 2px 2px 0" }),
                    b.addRule(".CPM-icon-paper > .CPM-icon-lines", { position: "absolute", left: "2px", top: "2px", width: "5px", height: "2px", borderTop: "6px double #444", borderRight: "2px solid transparent" }),
                    b.addRule(".CPM-icon-paper > .CPM-icon-lines::before", { position: "absolute", content: "''", left: 0, top: "2px", width: "5px", borderBottom: "2px solid #444" }),
                    b.addRule(".CPM-icon-paper.shadow", { top: "5px" }),
                    b.addRule(".CPM-icon-paper.shadow, .CPM-icon-paper.shadow::after, .CPM-icon-paper.shadow > .CPM-icon-pencil::after, .CPM-icon-paper.shadow > .CPM-icon-lines::before", { borderColor: "white" }),
                    b.addRule(".CPM-icon-paper.shadow > .CPM-icon-pencil", { background: "white" }),
                    b.addRule(".CPM-icon-paper.shadow > .CPM-icon-pencil::before", { borderRightColor: "white" }),
                    b.addRule(".CPM-icon-paper.shadow > .CPM-icon-lines", { borderTopColor: "white" }),
                    b.addRule(".CPM-tray-options-menu", {
                        position: "absolute",
                        top: "35px",
                        left: "4px",
                        padding: "6px",
                        border: "1px solid #bbb",
                        borderRadius: "6px",
                        background: "#fff",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                        listStyleType: "none",
                        fontFamily: "sans-serif",
                        zIndex: 20,
                    }),
                    b.addRule(".CPM-tray-options-menu::before, .CPM-tray-options-menu::after", { content: "''", position: "absolute", left: "8px", border: "8px solid transparent", borderTop: "none", pointerEvents: "none" }),
                    b.addRule(".CPM-tray-options-menu::before", { top: "-15px", borderBottom: "15px solid #bbb" }),
                    b.addRule(".CPM-tray-options-menu::after", { top: "-13px", borderBottom: "15px solid #fff" }),
                    b.addRule(".CPM-tray-options-menu > li", { fontSize: "14pt", padding: "4px", color: "#888", cursor: "pointer" }),
                    b.addRule(".CPM-tray-options-menu > li:hover", { background: "rgba(64,192,255,0.2)" }),
                    b.addRule(".CPM-tray-options-menu > li:active", {}),
                    b.addRule(".CPM-tray-area", { position: "absolute", left: 0, right: 0, top: "41px", bottom: "57px", overflowX: "hidden", overflowY: "auto", cursor: "default" }),
                    b.addRule(".CPM-tray-frame-title", { padding: "5px", borderBottom: "3px double #bbb", fontSize: "large", fontFamily: "sans-serif", fontWeight: "normal", color: "#444" }),
                    b.addRule(".CPM-tray-frame-description", { padding: "5px", borderBottom: "1px solid #ddd", color: "#666", whiteSpace: "pre-line" }),
                    b.addRule(".CPM-tray-frame-title-editor-wrapper", { position: "relative", height: "25px" }),
                    b.addRule(".CPM-tray-frame-title-editor", { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, padding: "0 5px", borderBottom: "1px solid #eee" }),
                    b.addRule(".CPM-tray-frame-title-editor input", { width: "100%", height: "100%", border: "none", margin: "none", background: "none", resize: "none", fontSize: "110%", verticalAlign: "top" }),
                    b.addRule(".CPM-tray-frame-description-editor-wrapper", { position: "relative", height: "8em" }),
                    b.addRule(".CPM-tray-frame-description-editor", { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, padding: "5px" }),
                    b.addRule(".CPM-tray-frame-description-editor textarea", { width: "100%", height: "100%", border: "none", margin: "none", background: "none", resize: "none" }),
                    b.addRule(".CPM-tray-show-button", {
                        width: "40px",
                        height: "40px",
                        background: b.makeGradient("to bottom", "#fff 0%", "#ddd 100%"),
                        position: "absolute",
                        top: 0,
                        left: 0,
                        border: "1px solid #bbb",
                        borderLeft: "none",
                        borderTop: "none",
                        borderBottomRightRadius: "6px",
                        boxShadow: "0 0 5px 0 rgba(0,0,0,0.4)",
                        cursor: "pointer",
                        zIndex: 5,
                        color: "#444",
                        fontSize: "30px",
                        textShadow: "0 1px 0 #fff",
                        verticalAlign: "top",
                        transition: "opacity 0.2s",
                    }),
                    b.addRule(".CPM-tray-show-button:hover", { background: b.makeGradient("to bottom", "#fff 0%", "#eee 100%"), boxShadow: "-2px 0 7px 2px rgba(0,0,0,0.4)" }),
                    b.addRule(".CPM-tray-show-button:active", {
                        background: b.makeGradient("to bottom", "#fff 20%", "#eee 90%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.2), inset 0 2px 2px rgba(0,0,0,0.1), inset 0 -2px 2px rgba(255,255,255,0.5)",
                    }),
                    (a.applied = !0));
            }
            function b(b) {
                function c(a) {
                    a.stopImmediatePropagation();
                }
                a(),
                    CPM.Base.makeEventReporter(this),
                    (this.parentApp = b),
                    (this.isMicroTray = !0),
                    (this.elementid = CPM.Style.enable(document.createElement("div"))),
                    this.elementid.setAttribute("class", "CPM-micro-tray"),
                    (this.topBar = new e(this, { options: !0, help: !0, hide: !1, title: "" }, b)),
                    this.elementid.appendChild(this.topBar.elementid),
                    this.elementid.appendChild(i(b)),
                    (this.options = new j(this)),
                    this.elementid.appendChild(this.options.elementid),
                    (this.shown = !0),
                    (this.showButton = document.createElement("button")),
                    this.showButton.setAttribute("class", "CPM-tray-show-button"),
                    this.showButton.addEventListener("click", this.show.bind(this), !1),
                    this.showButton.appendChild(document.createElement("div")),
                    this.showButton.lastChild.setAttribute("class", "CPM-icon-triangle right"),
                    this.showButton.addEventListener("mousedown", c, !1),
                    this.showButton.addEventListener("touchstart", c, !1),
                    (this.showButton.style.display = "none");
            }
            function c() {
                this.showButton.style.display = "none";
            }
            function d() {
                (this.showButton.style.opacity = "1"), (this.elementid.style.display = "none"), (this.shown = !1);
            }
            function e(a, b, c) {
                (this.parentTray = a),
                    (this.parentApp = c),
                    (this.elementid = document.createElement("div")),
                    this.elementid.setAttribute("class", "CPM-tray-topbar"),
                    b.options && this.addOptionsButton(),
                    b.help && this.addHelpButton(),
                    b.hide && this.addHideButton(),
                    (this.titleNode = document.createTextNode("")),
                    this.elementid.appendChild(this.titleNode),
                    null != b.title && this.setTitle(b.title);
            }
            function f() {
                this.parentTray.options.show();
            }
            function g() {
                this.parentApp.helpDialog && (this.parentApp.dialog === this.parentApp.helpDialog ? this.parentApp.helpDialog.hide() : this.parentApp.helpDialog.show());
            }
            function h() {
                this.parentTray.hide();
            }
            function i(a) {
                var b = document.createElement("div");
                b.setAttribute("class", "cpm-tray-footer"), (b.innerHTML = "&copy; " + (a.pubDate ? a.pubDate : "") + " ");
                var c = document.createElement("a");
                c.setAttribute("href", "http://pdfs.cpm.org/information/CPM%20Website%20Privacy%20Policy.pdf"), (c.innerHTML = "");
                var d = document.createElement("div");
                return (d.style.padding = "0 2em"), d.appendChild(c), b.appendChild(d), b;
            }
            function j(a) {
                (this.parentTray = a), (this.elementid = CPM.Style.enable(document.createElement("ul"))), this.elementid.setAttribute("class", "CPM-tray-options-menu");
                var b = this.preserve.bind(this);
                this.elementid.addEventListener("mousedown", b, !1), this.elementid.addEventListener("touchstart", b, !1), (this.elementid.style.display = "none");
            }
            function k() {
                this.context = CPM.Base.openContext(this.hide.bind(this));
            }
            function l() {
                (this.shown = !1), (this.elementid.style.display = "none"), this.context && this.context.isOpen && this.context.close(!0), (this.context = null), "function" == typeof _callback && _callback.call(this.parentTray);
            }
            function m() {
                (this.style.display = "none"), this.onHide && this.onHide();
            }
            function n(a) {
                var b = m.bind(this);
                !a && this.offsetWidth > 0 ? this.setTransition({ left: 0, opacity: 1, transform: "translate3d(0,0,0)" }, { opacity: 0, transform: "translate3d(" + (-this.offsetWidth).toString() + "px,0,0)" }, b) : b();
            }
            function o(a) {
                this.onShow && this.onShow(),
                    (this.style.display = ""),
                    !a && this.offsetWidth > 0 && this.setTransition({ position: "absolute", left: 0, opacity: 0, transform: "translate3d(" + (-this.offsetWidth).toString() + "px,0,0)" }, { opacity: 1, transform: "translate3d(0,0,0)" });
            }
            function p(a) {
                null != a && "" !== a
                    ? (this.titleElement || ((this.titleElement = document.createElement("h1")), this.titleElement.setAttribute("class", "CPM-tray-frame-title"), this.insertBefore(this.titleElement, this.firstChild)),
                      this.titleElement.innerText ? (this.titleElement.innerText = a) : (this.titleElement.textContent = a))
                    : this.titleElement && (this.removeChild(this.titleElement), (this.titleElement = null));
            }
            function q(a) {
                var b;
                null != a && "" !== a
                    ? (this.descriptionElement ||
                          ((this.descriptionElement = document.createElement("p")),
                          this.descriptionElement.setAttribute("class", "CPM-tray-frame-description"),
                          (b = this.titleElement ? this.titleElement.nextSibling : this.firstChild),
                          this.insertBefore(this.descriptionElement, b)),
                      this.descriptionElement.innerText ? (this.descriptionElement.innerText = a) : (this.descriptionElement.textContent = a))
                    : this.descriptionElement && (this.removeChild(this.descriptionElement), (this.descriptionElement = null));
            }
            function r(a) {
                var b = document.createElement("div");
                return (b.wrapper = document.createElement("div")), (b.input = document.createElement(a)), b.wrapper.appendChild(b.input), b.appendChild(b.wrapper), b;
            }
            function s() {
                var a = r("input");
                return a.setAttribute("class", "CPM-tray-frame-title-editor-wrapper"), a.wrapper.setAttribute("class", "CPM-tray-frame-title-editor"), (a.input.placeholder = "Title"), a;
            }
            function t() {
                var a = r("textarea");
                return a.setAttribute("class", "CPM-tray-frame-description-editor-wrapper"), a.wrapper.setAttribute("class", "CPM-tray-frame-description-editor"), (a.input.placeholder = "add a description"), a;
            }
            function u() {
                return this.titleInput.input.value;
            }
            function v() {
                return this.descriptionInput.input.value;
            }
            function w(a) {
                this.titleInput.input.value = a;
            }
            function x(a) {
                this.descriptionInput.input.value = a;
            }
            function y() {
                (this.titleInput.input.value = ""), (this.descriptionInput.input.value = "");
            }
            function z(a) {
                a.pushRawString(this.getTitle()), a.pushRawString(this.getDescription());
            }
            function A(a) {
                (this.titleInput.input.value = a.popRawString()), (this.descriptionInput.input.value = a.popRawString());
            }
            (CPM.Base.createTray = function (a) {
                return new b(a);
            }),
                (b.prototype.addOption = function (a, b) {
                    return this.options.addOption(a, b);
                }),
                (b.prototype.removeOption = function (a) {
                    this.options.removeOption(a);
                }),
                (b.prototype.replaceOption = function (a, b, c) {
                    this.options.replaceOption(a, b, c);
                }),
                (b.prototype.setTitle = function (a, b) {
                    this.topBar.setTitle(a, b);
                }),
                (b.prototype.addFrame = function (a) {
                    this.isMicroTray && (this.elementid.setAttribute("class", "CPM-tray"), this.topBar.addHideButton(), (this.isMicroTray = !1)), this.elementid.appendChild(a), this.currentFrame ? a.hide(!0) : this.setFrame(a);
                }),
                (b.prototype.setFrame = function (a, b) {
                    this.currentFrame !== a && (this.currentFrame && (this.currentFrame.hide(b), a.show(b)), (this.currentFrame = a));
                }),
                (b.prototype.attachTo = function (a) {
                    a.appendChild(this.showButton), a.appendChild(this.elementid);
                }),
                (b.prototype.getX = function () {
                    return this.elementid.offsetLeft;
                }),
                (b.prototype.getY = function () {
                    return this.elementid.offsetTop;
                }),
                (b.prototype.getWidth = function () {
                    return this.elementid.offsetWidth;
                }),
                (b.prototype.getHeight = function () {
                    return this.elementid.offsetHeight;
                }),
                (b.prototype.show = function () {
                    this.shown ||
                        ((this.shown = !0),
                        (this.elementid.style.display = ""),
                        (this.showButton.style.opacity = "0"),
                        this.fireEvent("show", { openState: !0 }),
                        this.elementid.setTransition({ transform: "translate3d(" + (-this.offsetWidth - 10).toString() + "px,0,0)" }, { transform: "translate3d(0,0,0)" }, c.bind(this)));
                }),
                (b.prototype.hide = function () {
                    this.shown &&
                        ((this.showButton.style.opacity = "0"),
                        (this.showButton.style.display = ""),
                        this.fireEvent("hide", { openState: !1 }),
                        this.elementid.setTransition({ transform: "translate3d(0,0,0)" }, { transform: "translate3d(" + (-this.elementid.offsetWidth - 10) + "px,0,0)" }, d.bind(this)));
                }),
                (e.prototype.addButton = function (a) {
                    var b = document.createElement("button");
                    return b.setAttribute("class", "CPM-tray-topbar-button"), b.addEventListener("click", a, !1), b;
                }),
                (e.prototype.addOptionsButton = function () {
                    if (!this.optionsButton) {
                        this.optionsButton = this.addButton(f.bind(this));
                        var a = document.createElement("div");
                        a.setAttribute("class", "CPM-icon-paper"),
                            a.appendChild(document.createElement("div")),
                            a.lastChild.setAttribute("class", "CPM-icon-lines"),
                            a.appendChild(document.createElement("div")),
                            a.lastChild.setAttribute("class", "CPM-icon-pencil"),
                            this.optionsButton.appendChild(a.cloneNode(!0)),
                            this.optionsButton.lastChild.setAttribute("class", "CPM-icon-paper shadow"),
                            this.optionsButton.appendChild(a),
                            this.elementid.firstChild ? this.elementid.insertBefore(this.optionsButton, this.elementid.firstChild) : this.elementid.appendChild(this.optionsButton);
                    }
                }),
                (e.prototype.addHelpButton = function () {
                    if (!this.helpButton) {
                        this.helpButton = this.addButton(g.bind(this));
                        var a = document.createElement("div");
                        a.setAttribute("class", "CPM-icon-question"),
                            this.helpButton.appendChild(a),
                            this.hideButton ? this.elementid.insertBefore(this.helpButton, this.hideButton) : this.titleNode ? this.elementid.insertBefore(this.helpButton, this.titleNode) : this.elementid.appendChild(this.helpButton);
                    }
                }),
                (e.prototype.addHideButton = function () {
                    if (!this.hideButton) {
                        (this.hideButton = this.addButton(h.bind(this))), (this.hideButton.style.cssFloat = "right");
                        var a = document.createElement("div");
                        a.setAttribute("class", "CPM-icon-triangle left"), this.hideButton.appendChild(a), this.titleNode ? this.elementid.insertBefore(this.hideButton, this.titleNode) : this.elementid.appendChild(this.hideButton);
                    }
                }),
                (e.prototype.setTitle = function (a, b) {
                    (this.titleNode.nodeValue = a), b && (this.elementid.style.fontSize = b);
                }),
                (j.prototype.addOption = function (a, b) {
                    var c = document.createElement("li");
                    return (
                        (c.innerHTML = a),
                        (c.callback = b),
                        (c.parentMenu = this),
                        c.addEventListener(
                            "click",
                            function () {
                                this.parentMenu.hide(this.callback), "function" == typeof this.callback && this.callback();
                            },
                            !1
                        ),
                        this.elementid.appendChild(c),
                        c
                    );
                }),
                (j.prototype.removeOption = function (a) {
                    (a.callback = null), (a.parentMenu = null), this.elementid.removeChild(a);
                }),
                (j.prototype.replaceOption = function (a, b, c) {
                    (a.innerHTML = b), (a.callback = c);
                }),
                (j.prototype.show = function () {
                    this.shown || ((this.shown = !0), (this.elementid.style.display = ""), this.elementid.setTransition({ opacity: 0 }, { opacity: 1 }, k.bind(this)));
                }),
                (j.prototype.hide = function (a) {
                    this.shown && this.elementid.setTransition({ opacity: 1 }, { opacity: 0 }, l.bind(this));
                }),
                (j.prototype.preserve = function () {
                    this.context && this.context.preserve();
                }),
                (CPM.Base.createTrayFrame = function (a) {
                    var b = CPM.Style.enable(document.createElement("div"));
                    return (b.hide = n), (b.show = o), (b.setTitle = p), (b.setDescription = q), (b.parentApp = a), b.setAttribute("class", "CPM-tray-area"), b;
                }),
                (CPM.Base.createTrayFrameEditors = function () {
                    var a = document.createElement("div");
                    return (
                        (a.titleInput = s()),
                        (a.descriptionInput = t()),
                        (a.getTitle = u),
                        (a.getDescription = v),
                        (a.setTitle = w),
                        (a.setDescription = x),
                        (a.clear = y),
                        (a.save = z),
                        (a.load = A),
                        a.appendChild(a.titleInput),
                        a.appendChild(a.descriptionInput),
                        a
                    );
                });
        })(),
    (CPM = window.CPM || {}),
    (CPM.Base = CPM.Base || {}),
    CPM.Base.openContext ||
        (function () {
            function a(a) {
                var b, c;
                for (b = 0, c = d.length; b < c; ++b) d[b].invalidate();
            }
            function b(c) {
                for (var e, f = d.slice(); f.length > 0; ) (e = f.pop()), e.isOpen && !e.isValid && e.close();
                0 === d.length && (document.removeEventListener("mousedown", a, !0), document.removeEventListener("touchstart", a, !0), document.removeEventListener("mousedown", b, !1), document.removeEventListener("touchstart", b, !1));
            }
            function c(c) {
                0 === d.length && (document.addEventListener("mousedown", a, !0), document.addEventListener("touchstart", a, !0), document.addEventListener("mousedown", b, !1), document.addEventListener("touchstart", b, !1)),
                    (this.isValid = !0),
                    (this.isOpen = !0),
                    (this.onClose = c),
                    d.push(this);
            }
            var d = [];
            (c.prototype.invalidate = function () {
                this.isValid = !1;
            }),
                (c.prototype.preserve = function () {
                    this.isValid = !0;
                }),
                (c.prototype.close = function (a) {
                    this.isOpen && ((this.isOpen = !1), d.splice(d.indexOf(this), 1), a || "function" != typeof this.onClose || this.onClose());
                }),
                (CPM.Base.openContext = function (a) {
                    return new c(a);
                });
        })(),
    (CPM = window.CPM || {}),
    (CPM.UI = CPM.UI || {}),
    CPM.UI.addZoomButtons ||
        (function () {
            function a() {
                var b;
                a.applied ||
                    ((b = CPM.Style.getStylesheet("main")),
                    b.addRule(".CPM-zoom-button", { position: "absolute", top: "10px", right: "10px", cursor: "pointer", userSelect: "none", opacity: 0.5 }),
                    b.addRule(".CPM-zoom-button:hover", { opacity: 0.8 }),
                    b.addRule(".CPM-zoom-button:active", { opacity: 1 }),
                    b.addRule(".CPM-zoom-button.zoom-out", { position: "absolute", top: "60px", right: "10px" }),
                    b.addRule(".CPM-zoom-button.zoom-home", { position: "absolute", top: "110px", right: "10px" }),
                    (a.applied = !0));
            }
            CPM.UI.addZoomButtons = function (b) {
                var c = document.createElement("i"),
                    d = document.createElement("i"),
                    e = document.createElement("i");
                a(),
                    c.setAttribute("class", "CPM-zoom-button zoom-in fa fa-search-plus fa-2x"),
                    c.addEventListener(
                        "click",
                        function () {
                            b.zoomIn();
                        },
                        !1
                    ),
                    d.setAttribute("class", "CPM-zoom-button zoom-out fa fa-search-minus fa-2x"),
                    d.addEventListener(
                        "click",
                        function () {
                            b.zoomOut();
                        },
                        !1
                    ),
                    e.setAttribute("class", "CPM-zoom-button zoom-home fa fa-home fa-2x"),
                    e.addEventListener(
                        "click",
                        function () {
                            b.zoomHome();
                        },
                        !1
                    ),
                    b.appendChild(c),
                    b.appendChild(d),
                    b.appendChild(e);
            };
        })(),
    (CPM = window.CPM || {}),
    (CPM.Graph3d = CPM.Graph3d || {}),
    CPM.Graph3d.Vector3d ||
        (function () {
            function a(a) {
                return Math.abs(a) < 0.001 ? 0 : a;
            }
            function b(a, b, c) {
                (this.x = a || 0), (this.y = b || 0), (this.z = c || 0);
            }
            function c(a, b, c, d) {
                (this.x = a || 1), (this.y = b || 0), (this.z = c || 0), (this.w = d || 0);
            }
            (b.prototype.setValues = function (a, b, c) {
                return (this.x = a), (this.y = b), (this.z = c), this;
            }),
                (b.prototype.copyValues = function (a) {
                    return (this.x = a.x), (this.y = a.y), (this.z = a.z), this;
                }),
                (b.prototype.normalize = function () {
                    var b = 1 / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
                    return (this.x = a(this.x * b)), (this.y = a(this.y * b)), (this.z = a(this.z * b)), this;
                }),
                (b.prototype.dot = function (a) {
                    return this.x * a.x + this.y * a.y + this.z * a.z;
                }),
                (b.prototype.cross = function (a) {
                    var b = this.y * a.z - this.z * a.y,
                        c = this.z * a.x - this.x * a.z,
                        d = this.x * a.y - this.y * a.x;
                    return (this.x = b), (this.y = c), (this.z = d), this;
                }),
                (b.prototype.rotate = (function () {
                    var a = new b(0, 0, 0);
                    return function (b, c) {
                        var d = Math.cos(c),
                            e = Math.sin(c),
                            f = 1 - d,
                            g = this.dot(b),
                            h = this.x * d,
                            i = this.y * d,
                            j = this.z * d,
                            k = b.x * g * f,
                            l = b.y * g * f,
                            m = b.z * g * f;
                        return a.copyValues(b), a.cross(this), (a.x *= e), (a.y *= e), (a.z *= e), (this.x = h + a.x + k), (this.y = i + a.y + l), (this.z = j + a.z + m), this;
                    };
                })()),
                (b.prototype.toString = function () {
                    return "(" + this.x + "," + this.y + "," + this.z + ")";
                }),
                (c.prototype.setValues = function (a, b, c, d) {
                    return (this.x = a), (this.y = b), (this.z = c), (this.w = d), this;
                }),
                (c.prototype.copyValues = function (a) {
                    return (this.x = a.x), (this.y = a.y), (this.z = a.z), (this.w = a.w), this;
                }),
                (c.prototype.fromAxisAngle = function (a, b, c, d) {
                    var e, f;
                    if (2 === arguments.length) {
                        var g = a;
                        (d = b), (a = g.x), (b = g.y), (c = g.z);
                    }
                    return (d /= 2), (e = 1 / Math.sqrt(a * a + b * b + c * c)), (f = Math.sin(d)), (this.x = f * a * e), (this.y = f * b * e), (this.z = f * c * e), (this.w = Math.cos(d)), this;
                }),
                (c.prototype.toAxisAngle = function (b) {
                    var c;
                    return "object" != typeof b ? null : (this.normalize(), (c = a(Math.sqrt(1 - this.w * this.w))), 0 !== c && (c = 1 / c), (b[0] = this.x * c), (b[1] = this.y * c), (b[2] = this.z * c), (b[3] = 2 * Math.acos(this.w)), b);
                }),
                (c.prototype.toMatrix = function (a) {
                    return "object" != typeof a
                        ? null
                        : ((a[0] = 1 - 2 * (this.y * this.y + this.z * this.z)),
                          (a[1] = 2 * (this.x * this.y + this.z * this.w)),
                          (a[2] = 2 * (this.x * this.z + this.y * this.w)),
                          (a[3] = 0),
                          (a[4] = 2 * (this.x * this.y - this.z * this.w)),
                          (a[5] = 1 - 2 * (this.x * this.x + this.z * this.z)),
                          (a[6] = 2 * (this.y * this.z + this.x * this.w)),
                          (a[7] = 0),
                          (a[8] = 2 * (this.x * this.z + this.y * this.w)),
                          (a[9] = 2 * (this.y * this.z - this.x * this.w)),
                          (a[10] = 1 - 2 * (this.x * this.x + this.y * this.y)),
                          (a[11] = 0),
                          (a[12] = 0),
                          (a[13] = 0),
                          (a[14] = 0),
                          (a[15] = 1),
                          a);
                }),
                (c.prototype.normalize = function () {
                    var b = 1 / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
                    return (this.x = a(this.x * b)), (this.y = a(this.y * b)), (this.z = a(this.z * b)), (this.w = a(this.w * b)), this;
                }),
                (c.prototype.multiply = (function () {
                    return function (a) {
                        var b = this.w * a.w - this.x * a.x - this.y * a.y - this.z * a.z,
                            c = this.w * a.x + this.x * a.w + this.y * a.z - this.z * a.y,
                            d = this.w * a.y - this.x * a.z + this.y * a.w + this.z * a.x,
                            e = this.w * a.z + this.x * a.y - this.y * a.x + this.z * a.w;
                        return (this.w = b), (this.x = c), (this.y = d), (this.z = e), this;
                    };
                })()),
                (c.prototype.rotate = (function () {
                    var a = new c();
                    return function (b, c) {
                        return a.copyValues(this), this.fromAxisAngle(b, c), this.multiply(a).normalize();
                    };
                })()),
                (CPM.Graph3d.Vector3d = b),
                (CPM.Graph3d.Quaternion = c);
        })(),
    (CPM = window.CPM || {}),
    (CPM.Graph3d = CPM.Graph3d || {}),
    CPM.Graph3d.addAxes ||
        (function () {
            function a() {
                if (!a.applied) {
                    var b = CPM.Style.getStylesheet("graph3d");
                    b.addRule(".axis", { position: "absolute", top: "-0.05em", borderTop: "0.1em solid #888", transformOrigin: "0 0.05em", transformStyle: "preserve-3d" }),
                        b.addRule(".axis::before", { position: "absolute", content: "''", width: "100%", top: "-0.1em", borderTop: "inherit", transform: "rotateX(90deg)", transformOrigin: "0 0.05em" }),
                        b.addRule(".axis > div::before", { position: "absolute", content: "''", right: "-0.1em", top: "-0.3em", border: "0.25em solid transparent", borderLeft: "0.5em solid #888", borderRight: "none" }),
                        b.addRule(".axis > div::after", { position: "absolute", content: "''", left: "-0.1em", top: "-0.3em", border: "0.25em solid transparent", borderLeft: "none", borderRight: "0.5em solid #888" }),
                        b.addRule(".axis-label", {
                            width: "2em",
                            height: "2em",
                            lineHeight: "2em",
                            marginLeft: "-1em",
                            marginTop: "-1em",
                            textAlign: "center",
                            verticalAlign: "center",
                            color: "#888",
                            fontSize: "13pt",
                            fontWeight: "bold",
                            fontStyle: "italic",
                        }),
                        b.addRule(".grid", {
                            position: "absolute",
                            transformStyle: "preserve-3d",
                            backgroundImage:
                                b.makeGradient("to bottom", "rgba(0,0,0,0.15) 0%", "rgba(0,0,0,0.15) 5%", "rgba(0,0,0,0) 5%", "rgba(0,0,0,0) 95%", "rgba(0,0,0,0.15) 95%", "rgba(0,0,0,0.15) 100%") +
                                ", " +
                                b.makeGradient("to right", "rgba(0,0,0,0.15) 0%", "rgba(0,0,0,0.15) 5%", "rgba(0,0,0,0.0) 5%", "rgba(0,0,0,0.0) 95%", "rgba(0,0,0,0.15) 95%", "rgba(0,0,0,0.15) 100%"),
                            backgroundSize: "1em 1em, 1em 1em",
                        }),
                        b.addRule(".grid.grid-xy", {}),
                        b.addRule(".grid.grid-yz", { transform: "rotateY(90deg)" }),
                        b.addRule(".grid.grid-xz", { transform: "rotateX(90deg)" }),
                        (a.applied = !0);
                }
            }
            CPM.Graph3d.addAxes = function (b) {
                var c = CPM.Style.enable(document.createElement("div")),
                    d = CPM.Style.enable(document.createElement("div")),
                    e = CPM.Style.enable(document.createElement("div")),
                    f = CPM.Style.enable(document.createElement("div")),
                    g = CPM.Style.enable(document.createElement("div")),
                    h = CPM.Style.enable(document.createElement("div")),
                    i = document.createElement("div"),
                    j = document.createElement("div"),
                    k = document.createElement("div"),
                    l = document.createElement("div"),
                    m = document.createElement("div"),
                    n = document.createElement("div"),
                    o = CPM.Graph3d.makeBillboard;
                a(),
                    c.setAttribute("class", "axis axis-x"),
                    d.setAttribute("class", "axis axis-y"),
                    e.setAttribute("class", "axis axis-z"),
                    c.appendChild(document.createElement("div")),
                    d.appendChild(document.createElement("div")),
                    e.appendChild(document.createElement("div")),
                    f.setAttribute("class", "grid grid-xy"),
                    g.setAttribute("class", "grid grid-yz"),
                    h.setAttribute("class", "grid grid-xz"),
                    i.setAttribute("class", "axis-label"),
                    j.setAttribute("class", "axis-label"),
                    k.setAttribute("class", "axis-label"),
                    l.setAttribute("class", "axis-label"),
                    m.setAttribute("class", "axis-label"),
                    n.setAttribute("class", "axis-label"),
                    i.appendChild(document.createTextNode("+ x")),
                    j.appendChild(document.createTextNode("- x")),
                    k.appendChild(document.createTextNode("+ y")),
                    l.appendChild(document.createTextNode("- y")),
                    m.appendChild(document.createTextNode("+ z")),
                    n.appendChild(document.createTextNode("- z")),
                    (i = o(i)),
                    (j = o(j)),
                    (k = o(k)),
                    (l = o(l)),
                    (m = o(m)),
                    (n = o(n)),
                    b.appendChild(c),
                    b.appendChild(d),
                    b.appendChild(e),
                    b.appendChild(f),
                    b.appendChild(g),
                    b.appendChild(h),
                    b.appendChild(i),
                    b.appendChild(j),
                    b.appendChild(k),
                    b.appendChild(l),
                    b.appendChild(m),
                    b.appendChild(n),
                    (b.showAxes = function () {
                        (c.style.display = ""), (d.style.display = ""), (e.style.display = ""), (i.style.display = ""), (j.style.display = ""), (k.style.display = ""), (l.style.display = ""), (m.style.display = ""), (n.style.display = "");
                    }),
                    (b.hideAxes = function () {
                        (c.style.display = "none"),
                            (d.style.display = "none"),
                            (e.style.display = "none"),
                            (i.style.display = "none"),
                            (j.style.display = "none"),
                            (k.style.display = "none"),
                            (l.style.display = "none"),
                            (m.style.display = "none"),
                            (n.style.display = "none");
                    }),
                    (b.setAxesLength = function (a, b, o) {
                        c.setStyle({ width: 2 * a + 2 + "em", transform: "translate3d(-" + (a + 1) + "em,0,0)" }),
                            d.setStyle({ width: 2 * b + 2 + "em", transform: "translate3d(0,-" + (b + 1) + "em,0) rotateZ(90deg)" }),
                            e.setStyle({ width: 2 * o + 2 + "em", transform: "translate3d(0,0,-" + (o + 1) + "em) rotateY(-90deg)" }),
                            f.setStyle({ left: "-" + a + "em", top: "-" + b + "em", width: 2 * a + "em", height: 2 * b + "em", backgroundPosition: a + "em " + b + "em, " + a + "em " + b + "em" }),
                            g.setStyle({ left: "-" + o + "em", top: "-" + b + "em", width: 2 * o + "em", height: 2 * b + "em", backgroundPosition: o + "em " + b + "em, " + o + "em " + b + "em" }),
                            h.setStyle({ left: "-" + a + "em", top: "-" + o + "em", width: 2 * a + "em", height: 2 * o + "em", backgroundPosition: a + "em " + o + "em, " + a + "em " + o + "em" }),
                            i.transform("translate3d(" + (a + 2) + "em,0,0)"),
                            j.transform("translate3d(-" + (a + 2) + "em,0,0)"),
                            k.transform("translate3d(0," + (b + 2) + "em,0)"),
                            l.transform("translate3d(0,-" + (b + 2) + "em,0)"),
                            m.transform("translate3d(0,0," + (o + 2) + "em)"),
                            n.transform("translate3d(0,0,-" + (o + 2) + "em)");
                    }),
                    (b.showGrids = function (a, b, c) {
                        (f.style.display = a ? "" : "none"), (g.style.display = b ? "" : "none"), (h.style.display = c ? "" : "none");
                    }),
                    b.showGrids(!0, !1, !1),
                    b.setAxesLength(15, 15, 15);
            };
        })(),
    (CPM = window.CPM || {}),
    (CPM.Graph3d = CPM.Graph3d || {}),
    CPM.Graph3d.createViewport ||
        (function () {
            (CPM.Graph3d.makeBillboard = function (a) {
                var b = CPM.Style.enable(document.createElement("div"));
                return b.setAttribute("class", "billboard"), b.appendChild(a), (b.billboardElement = a), b;
            }),
                (CPM.Graph3d.createViewport = function a(b) {
                    function c(a) {
                        a
                            ? m.origin3d.setTransition({}, { transform: m.getTransformation() + " scaleY(-1)" }, function () {
                                  f && f.transform("scaleY(-1) " + m.getReverseTransformation());
                              })
                            : (m.origin3d.transform(m.getTransformation() + " scaleY(-1)"), f && f.transform("scaleY(-1) " + m.getReverseTransformation()));
                    }
                    function d(a) {
                        (null != a.deltaY ? a.deltaY : null != a.wheelDelta ? -a.wheelDelta : a.detail) > 0 ? this.zoomOut(!0) : this.zoomIn(!0);
                    }
                    function e(a) {
                        a.openState ? (m.style.left = "260px") : (m.style.left = 0);
                    }
                    var f,
                        g,
                        h = 10,
                        i = 20,
                        j = 50,
                        k = CPM.Graph3d.Quaternion,
                        l = CPM.Graph3d.Vector3d,
                        m = document.createElement("div"),
                        n = new k().fromAxisAngle(0.54, -1, 1.7, 2.3);
                    return (
                        (viewportOrientation = new k().copyValues(n)),
                        a.styled ||
                            (function () {
                                var b = CPM.Style.getStylesheet("graph3d");
                                b.addRule("#viewport-3d", { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, perspective: "none", transformStyle: "preserve-3d" }),
                                    b.addRule("#world-3d", { position: "absolute", left: "50%", top: "50%", transformStyle: "preserve-3d", pointerEvents: "none" }),
                                    (g = b.addRule("#world-3d", { fontSize: "20px", transition: "font-size 0.2s" })),
                                    (g.currentSize = i),
                                    b.addRule(".billboard", { position: "absolute", transformStyle: "preserve-3d", transformOrigin: "50% 50%", backfaceVisibility: "hidden" }),
                                    (f = b.addRule(".billboard>*", { transformOrigin: "50% 50%" })),
                                    (a.styled = !0);
                            })(),
                        (function () {
                            var a = new l(),
                                b = [0, 0, 0, 0];
                            (m.spin = function (b, d) {
                                var e = Math.sqrt(b * b + d * d);
                                a.setValues(-d, b, 0).normalize(), viewportOrientation.rotate(a, (e * Math.PI) / 320), c();
                            }),
                                (m.turn = function (b) {
                                    0 !== b && (a.setValues(0, 0, 1), viewportOrientation.rotate(a, (b * Math.PI) / 320), c());
                                }),
                                (m.lookToward = function (a, b, d, e, f, g, h) {
                                    var i,
                                        j = new l(a, b, d).normalize(),
                                        k = new l(e, f, g).normalize().cross(j).normalize(),
                                        m = new l().copyValues(j).cross(k).normalize();
                                    (i = 0.5 * Math.sqrt(1 + k.x + m.y + j.z)),
                                        0 !== i
                                            ? ((viewportOrientation.w = i), (i = 1 / (4 * i)), (viewportOrientation.x = (j.y - m.z) * i), (viewportOrientation.y = (k.z - j.x) * i), (viewportOrientation.z = (m.x - k.y) * i))
                                            : k.x > m.y && k.x > j.z
                                            ? ((viewportOrientation.x = 0.5 * Math.sqrt(1 + k.x - m.y - j.z)),
                                              (i = 1 / (4 * viewportOrientation.x)),
                                              (viewportOrientation.y = (m.x + k.y) * i),
                                              (viewportOrientation.z = (k.z + j.x) * i),
                                              (viewportOrientation.w = (j.y - m.z) * i))
                                            : m.y > j.z
                                            ? ((viewportOrientation.y = 0.5 * Math.sqrt(1 - k.x + m.y - j.z)),
                                              (i = 1 / (4 * viewportOrientation.y)),
                                              (viewportOrientation.x = (m.x + k.y) * i),
                                              (viewportOrientation.z = (j.y + m.z) * i),
                                              (viewportOrientation.w = (k.z - j.x) * i))
                                            : ((viewportOrientation.z = 0.5 * Math.sqrt(1 - k.x - m.y + j.z)),
                                              (i = 1 / (4 * viewportOrientation.z)),
                                              (viewportOrientation.x = (k.z + j.x) * i),
                                              (viewportOrientation.y = (j.y + m.z) * i),
                                              (viewportOrientation.w = (m.x - k.y) * i)),
                                        viewportOrientation.normalize(),
                                        c(h);
                                }),
                                (m.getTransformation = function () {
                                    return viewportOrientation.toAxisAngle(b), "rotate3d(" + b[0] + "," + b[1] + "," + b[2] + "," + b[3] + "rad)";
                                }),
                                (m.getReverseTransformation = function () {
                                    return viewportOrientation.toAxisAngle(b), "rotate3d(" + b[0] + "," + b[1] + "," + b[2] + "," + -b[3] + "rad)";
                                });
                        })(),
                        (m.enablePointerEvents = function () {
                            this.origin3d.setStyle({ pointerEvents: "auto" });
                        }),
                        (m.disablePointerEvents = function () {
                            this.origin3d.setStyle({ pointerEvents: "" });
                        }),
                        (m.setZoomLevel = function (a, b, c) {
                            3 === arguments.length && ((i = a), (h = b), (j = c)), (g.currentSize = Math.round(Math.min(Math.max(a, h), j))), (g.style.fontSize = g.currentSize + "px");
                        }),
                        (m.zoomIn = function (a) {
                            (g.currentSize *= a ? 1.2 : 1.5), (g.currentSize = Math.round(Math.min(Math.max(g.currentSize, h), j))), (g.style.fontSize = g.currentSize + "px");
                        }),
                        (m.zoomOut = function (a) {
                            (g.currentSize /= a ? 1.2 : 1.5), (g.currentSize = Math.round(Math.min(Math.max(g.currentSize, h), j))), (g.style.fontSize = g.currentSize + "px");
                        }),
                        (m.zoomHome = function () {
                            viewportOrientation.copyValues(n), (g.currentSize = Math.round(Math.min(Math.max(i, h), j))), (g.style.fontSize = g.currentSize + "px"), c(!0);
                        }),
                        "onwheel" in document.createElement("div") ? m.addEventListener("wheel", d, !1) : void 0 !== document.onmousewheel ? m.addEventListener("mousewheel", d, !1) : m.addEventListener("DOMMouseScroll", d, !1),
                        CPM.Base.delegateEvents(
                            m,
                            {
                                validateMouseClick: function (a, b) {
                                    return a.target === m && 0 === a.button;
                                },
                                validateTouch: function (a, b) {
                                    return a.target === m;
                                },
                                onAnimationFrame: function (a) {
                                    (this.lastX === this.posX && this.lastY === this.posY) || (this.spin(this.posX - this.lastX, this.posY - this.lastY), (this.lastX = this.posX), (this.lastY = this.posY));
                                },
                                onHit: function (a, b, c) {
                                    (this.hitX = a), (this.hitY = b), (this.startX = this.posX), (this.startY = this.posY), (this.lastX = this.posX), (this.lastY = this.posY), CPM.Style.getStylesheet("main").lockCursor("all-scroll");
                                },
                                onMove: function (a, b) {
                                    (this.posX = this.startX + a - this.hitX), (this.posY = this.startY + b - this.hitY);
                                },
                                onRelease: function (a, b) {
                                    CPM.Style.getStylesheet("main").unlockCursor(), this.activate();
                                },
                            },
                            !0
                        ),
                        b.tray && (b.tray.addCustomEventListener("show", e), b.tray.addCustomEventListener("hide", e), (m.style.left = "260px"), CPM.Style.enable(m).setStyle({ transition: "left 0.2s" })),
                        m.setAttribute("id", "viewport-3d"),
                        (m.origin3d = CPM.Style.enable(document.createElement("div"))),
                        m.origin3d.setAttribute("id", "world-3d"),
                        m.appendChild(m.origin3d),
                        CPM.UI.addZoomButtons(m),
                        c(),
                        (m.posX = 0),
                        (m.posY = 0),
                        m
                    );
                });
        })(),
    (CPM = window.CPM || {}),
    (CPM.Graph3d = CPM.Graph3d || {}),
    CPM.Graph3d.createListFrame ||
        (CPM.Graph3d.createListFrame = function (a) {
            function b(b) {
                var c = document.createElement("em"),
                    d = CPM.UI.createToggleButton(" - grid"),
                    e = "grid" + b.toUpperCase();
                return (
                    c.appendChild(document.createTextNode(b)),
                    d.lastChild.insertBefore(c, d.lastChild.firstChild),
                    d.addCustomEventListener("change", function (b) {
                        (f[e] = b.value), a.world.showGrids(f.gridXY, f.gridYZ, f.gridXZ);
                    }),
                    d
                );
            }
            function c() {
                k.renumber(i.childNodes.length + 1);
            }
            function d(a) {
                j && (j.itemPoint || j.itemPlane).hideEditors(), a.item && (a.item !== j ? ((a.item.itemPoint || a.item.itemPlane).showEditors(), (j = a.item)) : (i.select(null), (j = null)));
            }
            var e = Object.keys(CPM.Graph3d.COLORS),
                f = CPM.Base.createTrayFrame(a),
                g = CPM.UI.createFoldingList(),
                h = document.createElement("div"),
                i = CPM.UI.createShuffleList(),
                j = null;
            !(function () {
                var a,
                    b = CPM.Style.getStylesheet("graph3d"),
                    c = CPM.Graph3d.COLORS,
                    d = 18;
                b.addRule(".plot3d-options", { padding: "0 20px" }),
                    b.addRule(".list-object-3d-label", { paddingLeft: "40px", paddingRight: "40px", height: "24px" }),
                    b.addRule(".list-object-3d-editor", { marginTop: "12px" }),
                    b.addRule(".number-field-label", { padding: "0 8px", fontStyle: "italic" }),
                    b.addRule(".trail-button, .intercept-button, .color-picker-button", {
                        position: "absolute",
                        top: "4px",
                        width: "32px",
                        height: "32px",
                        border: "1px solid #ccc",
                        borderRadius: "32px",
                        background: b.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                        cursor: "pointer",
                        verticalAlign: "middle",
                    }),
                    b.addRule(".trail-button:active, .trail-button.activated, .intercept-button:active, .intercept-button.activated, .color-picker-button:active, .color-picker-button.activated", {
                        background: b.makeGradient("to bottom", "#ccc 0%", "#eee 100%"),
                    }),
                    b.addRule(".trail-button:hover, .intercept-button:hover, .color-picker-button:hover", { boxShadow: "0 0 6px rgba(128,192,224,1)" }),
                    b.addRule(".color-picker-button", { left: "36px" }),
                    b.addRule(".color-picker-button::before", {
                        position: "absolute",
                        content: "''",
                        left: (30 - d) / 2 + "px",
                        top: (30 - d) / 2 + "px",
                        width: d + "px",
                        height: d + "px",
                        backgroundImage: b.makeGradient("to bottom", "rgba(255,255,255,0.2) 0%", "rgba(255,255,255,0) 50%", "rgba(0,0,0,0) 50%", "rgba(0,0,0,0.2) 100%"),
                        borderRadius: d + "px",
                        boxShadow: "0 -1px 1px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.5), inset 0 0 1px rgba(0,0,0,0.5)",
                    }),
                    b.addRule(".color-picker-button:active", { background: b.makeGradient("to bottom", "#ccc 0%", "#eee 100%") }),
                    b.addRule(".point-3d-color-menu", { background: "#fff", border: "1px solid #000" }),
                    c.length;
                for (a in c) c.hasOwnProperty(a) && b.addRule(".color-picker-button." + a + "::before", { backgroundColor: c[a] });
                b.addRule(".trail-button, .intercept-button", { right: "24px" }),
                    b.addRule(".trail-button::before", { position: "absolute", content: "''", left: "8px", top: "13px", height: "10px", borderRight: "2px dotted #888", boxShadow: "0 1px #fff" }),
                    b.addRule(".trail-button > div", { position: "absolute", left: "6px", top: "10px", width: "6px", height: "6px", borderRadius: "6px", background: "#888", boxShadow: "0 1px #fff" }),
                    b.addRule(".trail-button > div::before", {
                        position: "absolute",
                        content: "''",
                        left: "9px",
                        top: "-2px",
                        width: "10px",
                        borderTop: "2px dotted #888",
                        boxShadow: "0 1px #fff",
                        transform: "rotate(30deg)",
                        transformOrigin: "0 1px",
                    }),
                    b.addRule(".trail-button > div::after", {
                        position: "absolute",
                        content: "''",
                        left: "3px",
                        top: "13px",
                        width: "18px",
                        borderTop: "2px dotted #888",
                        boxShadow: "0 1px #fff",
                        transform: "rotate(-30deg)",
                        transformOrigin: "0 1px",
                    }),
                    b.addRule(".intercept-button::before", { position: "absolute", content: "''", left: "14px", top: "5px", height: "20px", borderRight: "2px solid #888", boxShadow: "-1px 1px #fff", transform: "rotate(-60deg)" }),
                    b.addRule(".intercept-button::after", { position: "absolute", content: "''", left: "14px", top: "5px", height: "20px", borderRight: "2px solid #888", boxShadow: "1px 1px #fff", transform: "rotate(60deg)" }),
                    b.addRule(".intercept-button > div", { position: "absolute", left: "14px", top: "5px", height: "20px", borderRight: "2px solid #888", boxShadow: "0 1px #fff" }),
                    b.addRule(".intercept-button > div::before", {
                        position: "absolute",
                        content: "''",
                        left: "-1px",
                        top: "1px",
                        width: "4px",
                        height: "4px",
                        background: "#888",
                        borderRadius: "4px",
                        boxShadow: "0 1px #fff",
                        transform: "rotate(-60deg)",
                    }),
                    b.addRule(".intercept-button > div::after", {
                        position: "absolute",
                        content: "''",
                        left: "5px",
                        top: "12px",
                        width: "4px",
                        height: "4px",
                        background: "#888",
                        borderRadius: "4px",
                        boxShadow: "0 1px #fff",
                        transform: "rotate(-60deg)",
                    }),
                    b.addRule(".plot3d-adder", { position: "relative", width: "100%", height: "60px", padding: 0, background: "none", opacity: 0.9, color: "#666", textAlign: "center" }),
                    b.addRule(".plot3d-adder > .numeral", {
                        position: "relative",
                        display: "inline-block",
                        cssFloat: "left",
                        width: "28px",
                        paddingLeft: "2px",
                        height: "100%",
                        background: b.makeGradient("to bottom", "rgba(0,0,0,0.04) 0%", "rgba(0,0,0,0) 100%"),
                        borderRight: "1px solid transparent",
                        textAlign: "left",
                    }),
                    b.addRule(".plot3d-adder > .numeral::after", {
                        position: "absolute",
                        content: "''",
                        top: 0,
                        right: "-1px",
                        bottom: 0,
                        width: "1px",
                        background: b.makeGradient("to bottom", "rgba(204,204,204,1) 0%", "rgba(204,204,204,0) 100%"),
                    }),
                    b.addRule(".plot3d-adder > button", {
                        position: "relative",
                        width: "90px",
                        height: "40px",
                        margin: "8px 4px",
                        border: "1px solid #ccc",
                        borderRadius: "40px",
                        background: b.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                        cursor: "pointer",
                    }),
                    b.addRule(".plot3d-adder > button::before", {
                        position: "absolute",
                        content: "'+'",
                        left: "4px",
                        top: "2px",
                        color: "rgba(0,0,0,0.4)",
                        textShadow: "0 1px rgba(255,255,255,0.6)",
                        fontSize: "30px",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                    }),
                    b.addRule(".plot3d-adder > button:active", { background: b.makeGradient("to bottom", "#ccc 0%", "#eee 100%") }),
                    b.addRule(".plot3d-adder > button > span", { position: "absolute", left: 0, right: 0, bottom: "3px", color: "rgba(0,0,0,0.4)", textShadow: "0 1px rgba(255,255,255,0.6)", fontSize: "9pt", fontFamily: "sans-serif" }),
                    b.addRule(".icon-point", {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: "4px",
                        margin: "auto",
                        width: "12px",
                        height: "12px",
                        borderRadius: "12px",
                        background: "rgba(0,0,0,0.4)",
                        boxShadow: "0 1px rgba(255,255,255,0.6)",
                    }),
                    b.addRule(".icon-plane", {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: "4px",
                        margin: "auto",
                        width: "12px",
                        height: "12px",
                        background: "rgba(0,0,0,0.4)",
                        boxShadow: "1px 1px rgba(255,255,255,0.6)",
                        transform: "skewX(-33deg)",
                    });
            })(),
                (f.onShow = function () {}),
                (f.onHide = function () {}),
                i.addCustomEventListener("insert", c),
                i.addCustomEventListener("remove", c),
                i.addCustomEventListener("select", d),
                (f.save = function (a) {
                    var b, c, d;
                    for (a.pushValue((this.gridXY ? 1 : 0) + 2 * (this.gridXZ ? 1 : 0) + 4 * (this.gridYZ ? 1 : 0), 1), b = 0, c = i.childNodes.length; b < c; ++b)
                        (d = i.childNodes[b]),
                            d.itemPoint
                                ? ((d = d.itemPoint), a.pushValue(32 + (d.trailsOn ? 10 : 0) + e.indexOf(d.currentColor), 1), a.pushDecimal(d.x, -100, 100, 3), a.pushDecimal(d.y, -100, 100, 3), a.pushDecimal(d.z, -100, 100, 3))
                                : d.itemPlane &&
                                  ((d = d.itemPlane),
                                  a.pushValue((d.interceptsOn ? 10 : 0) + e.indexOf(d.currentColor), 1),
                                  a.pushDecimal(d.x, -100, 100, 3),
                                  a.pushDecimal(d.y, -100, 100, 3),
                                  a.pushDecimal(d.z, -100, 100, 3),
                                  a.pushDecimal(d.c, -1e3, 1e3, 3));
                }),
                (f.load = function (a) {
                    var b, c, d, f, g, i, j;
                    for (b = a.popValue(1), this.gridXY = !!(b % 2), this.gridXZ = !!((b = (b - this.gridXY) / 2) % 2), this.gridYZ = !!(((b - this.gridXZ) / 2) % 2), h.update(); "" !== a.peekChar(); )
                        (c = a.popValue(1)),
                            (d = a.popDecimal(-100, 100, 3)),
                            (f = a.popDecimal(-100, 100, 3)),
                            (g = a.popDecimal(-100, 100, 3)),
                            c >= 32
                                ? ((j = this.addPoint()), (c -= 32), j.setTrails(c >= 10), j.trailsOn && (c -= 10), j.setColor(e[c]), j.setValues({ x: d, y: f, z: g }))
                                : ((i = a.popDecimal(-1e3, 1e3, 3)), (j = this.addPlane()), j.setIntercepts(c >= 10), j.interceptsOn && (c -= 10), j.setColor(e[c]), j.setValues({ x: d, y: f, z: g, c: i }));
                    this.onShow();
                }),
                (f.addPoint = function () {
                    var b = i.createItem(),
                        c = CPM.Graph3d.createPoint(a);
                    return (
                        b.itemLabel.appendChild(c.listItem),
                        (b.onDestroy = function () {
                            c.destroy();
                        }),
                        (b.itemPoint = c),
                        c.attachTo(a.world),
                        i.addItem(b),
                        i.select(j),
                        c
                    );
                }),
                (f.addPlane = function () {
                    var b = i.createItem(),
                        c = CPM.Graph3d.createPlane(a);
                    return (
                        b.itemLabel.appendChild(c.listItem),
                        (b.onDestroy = function () {
                            c.destroy();
                        }),
                        (b.itemPlane = c),
                        c.attachTo(a.world),
                        i.addItem(b),
                        i.select(j),
                        c
                    );
                }),
                (f.clear = function () {
                    i.clear();
                }),
                (f.onShow = ListFrame_onShow),
                (f.gridXY = !0),
                (f.gridXZ = !1),
                (f.gridYZ = !1),
                (function () {
                    var c = b("xy"),
                        d = b("xz"),
                        e = b("yz");
                    h.setAttribute("class", "plot3d-options"),
                        h.appendChild(c),
                        h.appendChild(d),
                        h.appendChild(e),
                        (h.update = function () {
                            c.setValue(f.gridXY), d.setValue(f.gridXZ), e.setValue(f.gridYZ), a.world && a.world.showGrids(f.gridXY, f.gridYZ, f.gridXZ);
                        });
                })(),
                h.update(),
                g.addItem("Show / hide grids", h),
                f.appendChild(g.elementid),
                f.appendChild(i);
            var k = (function () {
                var a = CPM.Style.enable(document.createElement("div")),
                    b = document.createElement("div"),
                    c = document.createElement("button"),
                    d = document.createElement("button");
                return (
                    a.setAttribute("class", "plot3d-adder"),
                    b.setAttribute("class", "numeral"),
                    b.appendChild(document.createTextNode("1")),
                    a.appendChild(b),
                    c.appendChild(document.createElement("span")),
                    c.lastChild.appendChild(document.createTextNode("(1,2,3)")),
                    c.appendChild(document.createElement("div")),
                    c.lastChild.setAttribute("class", "icon-point"),
                    c.addEventListener(
                        "click",
                        function () {
                            f.addPoint();
                        },
                        !1
                    ),
                    a.appendChild(c),
                    d.appendChild(document.createElement("span")),
                    d.lastChild.appendChild(document.createTextNode("x+y+z=1")),
                    d.appendChild(document.createElement("div")),
                    d.lastChild.setAttribute("class", "icon-plane"),
                    d.addEventListener(
                        "click",
                        function () {
                            f.addPlane();
                        },
                        !1
                    ),
                    a.appendChild(d),
                    (a.renumber = function (a) {
                        b.firstChild.nodeValue = a.toString();
                    }),
                    a
                );
            })();
            return f.appendChild(k), f;
        }),
    (CPM = window.CPM || {}),
    (CPM.Graph3d = CPM.Graph3d || {}),
    CPM.Graph3d.createOptionFrame ||
        (function () {
            CPM.Graph3d.createOptionFrame = function (a) {
                var b = CPM.Base.createTrayFrame(a),
                    c = CPM.Base.createTrayFrameEditors();
                return (
                    (c.style.borderBottom = "1px solid #ddd"),
                    b.appendChild(c),
                    (b.save = function (a) {
                        c.save(a);
                    }),
                    (b.load = function (a) {
                        c.load(a);
                    }),
                    (b.getSettings = function () {
                        var a = {};
                        return (a.title = c.getTitle()), (a.description = c.getDescription()), a;
                    }),
                    b
                );
            };
        })(),
    (CPM = window.CPM || {}),
    (CPM.Graph3d = CPM.Graph3d || {}),
    CPM.Graph3d.createColorPicker ||
        (function () {
            var a = { hidden: "transparent", red: "#f21", orange: "#f92", yellow: "#fe1", green: "#2e4", blue: "#35f", purple: "#d1f" },
                b = (Object.keys(a), !1);
            (CPM.Graph3d.COLORS = a),
                (CPM.Graph3d.createColorPicker = function c(d) {
                    function e(a) {
                        var b = a,
                            c = d.area;
                        for (m.x = 0, m.y = 0; b && b !== c; ) (m.x += b.offsetLeft + b.scrollLeft), (m.y += b.offsetTop + b.scrollTop), (b = b.offsetParent);
                        return m;
                    }
                    function f(a) {
                        b = !1;
                    }
                    function g(a) {
                        b ||
                            "" !== j.style.display ||
                            (j.setTransition({ width: k.offsetWidth + "px" }, { width: 0 }, function () {
                                (this.style.display = "none"), (this.style.width = "");
                            }),
                            document.removeEventListener("click", f, !0),
                            document.removeEventListener("click", g, !1),
                            (l = null));
                    }
                    function h(a) {
                        return function () {
                            "function" == typeof l.setColor && l.setColor(a);
                        };
                    }
                    var i,
                        j = CPM.Style.enable(document.createElement("div")),
                        k = document.createElement("div"),
                        l = null,
                        m = {};
                    c.styled ||
                        (function () {
                            var a = CPM.Style.getStylesheet("graph3d"),
                                b = CPM.Graph3d.COLORS;
                            a.addRule(".color-picker-popout", {
                                position: "absolute",
                                height: "34px",
                                marginLeft: "5px",
                                border: "1px solid #bbb",
                                borderRadius: "6px",
                                background: "#fff",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                                zIndex: 20,
                                transition: "transform 0.2s",
                            }),
                                a.addRule(".color-picker-popout::before, .color-picker-popout::after", {
                                    content: "''",
                                    position: "absolute",
                                    top: "50%",
                                    marginTop: "-8px",
                                    border: "8px solid transparent",
                                    borderLeft: "none",
                                    pointerEvents: "none",
                                }),
                                a.addRule(".color-picker-popout::before", { left: "-15px", borderRight: "15px solid #bbb" }),
                                a.addRule(".color-picker-popout::after", { left: "-13px", borderRight: "15px solid #fff" }),
                                a.addRule(".color-picker-wrapper", { padding: "2px", overflow: "hidden", whiteSpace: "nowrap" }),
                                a.addRule(".color-picker-wrapper > button", {
                                    position: "relative",
                                    margin: "0 2px",
                                    width: "30px",
                                    height: "30px",
                                    border: "none",
                                    borderRadius: "6px",
                                    backgroundImage: a.makeGradient("to bottom", "rgba(255,255,255,0.4) 0%", "rgba(255,255,255,0) 50%", "rgba(0,0,0,0) 50%", "rgba(0,0,0,0.2) 100%"),
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.5),inset 0 0 2px rgba(0,0,0,0.5)",
                                    verticalAlign: "bottom",
                                }),
                                a.addRule(".color-picker-wrapper > button:active", { backgroundImage: a.makeGradient("to bottom", "rgba(0,0,0,0.4) 0%", "rgba(0,0,0,0.2) 100%") }),
                                a.addRule(".color-picker-wrapper > .hidden", {
                                    position: "relative",
                                    backgroundColor: "transparent",
                                    backgroundImage: a.makeGradient("to bottom", "rgba(0,0,0,0.1) 0%", "rgba(0,0,0,0) 50%", "rgba(0,0,0,0) 100%"),
                                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
                                }),
                                a.addRule(".color-picker-wrapper > .hidden::before, .color-picker-wrapper > .hidden::after", {
                                    position: "absolute",
                                    content: "''",
                                    left: "50%",
                                    top: "50%",
                                    marginLeft: "-9px",
                                    marginTop: "-3px",
                                    width: "18px",
                                    height: "6px",
                                    backgroundColor: "#ccc",
                                }),
                                a.addRule(".color-picker-wrapper > .hidden::before", { transform: "rotate(-45deg)" }),
                                a.addRule(".color-picker-wrapper > .hidden::after", { transform: "rotate(45deg)" }),
                                a.addRule(".color-picker-wrapper > .hidden", {
                                    backgroundColor: "transparent",
                                    backgroundImage: a.makeGradient("to bottom", "rgba(0,0,0,0.1) 0%", "rgba(0,0,0,0) 50%", "rgba(0,0,0,0) 100%"),
                                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
                                }),
                                a.addRule(".color-picker-wrapper > .hidden:active", {
                                    backgroundImage: a.makeGradient("to bottom", "rgba(0,0,0,0.2) 0%", "rgba(0,0,0,0.1) 50%", "rgba(0,0,0,0.1) 100%"),
                                    boxShadow: "inset 0 2px 3px rgba(0,0,0,0.5)",
                                }),
                                b.length;
                            for (i in b) b.hasOwnProperty(i) && "hidden" !== i && a.addRule(".color-picker-wrapper > ." + i, { backgroundColor: b[i] });
                            c.styled = !0;
                        })(),
                        (j.showAt = function (a) {
                            a !== l
                                ? (e(a),
                                  this.transform("translate3d(" + (m.x + a.offsetWidth) + "px," + (m.y + a.offsetHeight / 2 - 18) + "px,0)"),
                                  "" !== this.style.display &&
                                      ((this.style.display = ""),
                                      this.setTransition({ width: 0 }, { width: k.offsetWidth + "px" }, function () {
                                          this.style.width = "";
                                      }),
                                      document.addEventListener("click", f, !0),
                                      document.addEventListener("click", g, !1)),
                                  (l = a),
                                  (b = !0))
                                : g();
                        }),
                        j.setAttribute("class", "color-picker-popout"),
                        (j.style.display = "none"),
                        k.setAttribute("class", "color-picker-wrapper");
                    for (i in a) a.hasOwnProperty(i) && (k.appendChild(document.createElement("button")), k.lastChild.setAttribute("class", i), k.lastChild.addEventListener("click", h(i), !1));
                    return j.appendChild(k), j;
                });
        })(),
    (CPM = window.CPM || {}),
    (CPM.Graph3d = CPM.Graph3d || {}),
    CPM.Graph3d.createPoint ||
        (function () {
            function a() {
                if (!a.applied) {
                    var b,
                        c = CPM.Style.getStylesheet("graph3d"),
                        d = CPM.Graph3d.COLORS,
                        e = 0.55,
                        f = 20,
                        g = 0.25;
                    c.addRule(".point-3d", {
                        position: "absolute",
                        marginLeft: -e / 2 + "em",
                        marginTop: -e / 2 + "em",
                        width: e - 0.1 + "em",
                        height: e - 0.1 + "em",
                        border: "0.05em solid #000",
                        borderRadius: e + "em",
                        background: "#000",
                    }),
                        c.addRule(".point-3d.selected", { boxShadow: "0 0 4px 4px #8ad" }),
                        c.addRule(".point-3d.hidden", { borderColor: "transparent" }),
                        c.addRule(".point-trail-3d", { position: "absolute", top: "-0.1em", borderTop: "0.2em dashed #888", transformOrigin: "0 0.1em", transformStyle: "preserve-3d" }),
                        c.addRule(".point-trail-3d::before", { position: "absolute", content: "''", width: "100%", top: "-0.2em", borderTop: "inherit", transform: "rotateX(90deg)", transformOrigin: "0 0.1em" }),
                        c.addRule(".plane-3d", { position: "absolute", marginLeft: -(f / 2 + 0.05) + "em", marginTop: -(f / 2 + 0.05) + "em", width: f + "em", height: f + "em", border: "0.05em solid #000" }),
                        c.addRule(".plane-3d::before", { position: "absolute", content: "''", left: 0, top: 0, right: 0, bottom: 0, background: "#f00", opacity: 0.4 }),
                        c.addRule(".plane-3d.selected", { boxShadow: "0 0 4px 4px #8ad" }),
                        c.addRule(".intercept-3d", { position: "absolute", marginLeft: -g / 2 + "em", marginTop: -g / 2 + "em", width: g + "em", height: g + "em", borderRadius: g + "em", background: "#000" }),
                        d.length;
                    for (b in d)
                        d.hasOwnProperty(b) &&
                            (c.addRule(".point-3d." + b + ", .intercept-3d." + b + ", .plane-3d." + b + "::before", { backgroundColor: d[b] }),
                            c.addRule(".plane-3d." + b, { borderColor: d[b] }),
                            c.addRule(".point-trail-3d." + b, { borderTopColor: d[b] }));
                    a.applied = !0;
                }
            }
            function b(b, e) {
                function f(a) {
                    a.stopPropagation();
                }
                function g(a) {
                    m[a].setValue(h[a]);
                }
                var h = b,
                    i = CPM.Style.enable(document.createElement("div")),
                    j = document.createElement("div"),
                    k = document.createElement("span"),
                    l = CPM.Style.enable(document.createElement("div")),
                    m = {},
                    n = document.createElement("button");
                return (
                    a(),
                    (h.destroy = function () {
                        var a,
                            b = h.parts3d,
                            c = b.length;
                        for (a = 0; a < c; ++a) b[a] && b[a].parentNode && b[a].parentNode.removeChild(b[a]);
                    }),
                    (h.attachTo = function (a) {
                        var b,
                            c = h.parts3d,
                            d = c.length;
                        for (b = 0; b < d; ++b) c[b] && a.appendChild(c[b]);
                    }),
                    (h.addEditorField = function (a, b, c, d, e) {
                        var g = document.createElement("span"),
                            i = CPM.UI.createDecimalField(b, c);
                        e || (e = a),
                            g.setAttribute("class", "number-field-label"),
                            g.appendChild(document.createTextNode(a)),
                            l.appendChild(g),
                            l.appendChild(i),
                            l.appendChild(document.createElement("br")),
                            i.setValue(d),
                            i.addCustomEventListener("change", function (a) {
                                (h[e] = a.value), "function" == typeof h.update && h.update();
                            }),
                            i.addEventListener("click", f, !1),
                            (m[e] = i);
                    }),
                    (h.setValues = function (a) {
                        var b;
                        for (b in a) a.hasOwnProperty(b) && ((this[b] = a[b]), g(b), this.update());
                    }),
                    (h.showEditors = function (a) {
                        i.appendChild(l),
                            a ||
                                i.setTransition({ height: j.offsetHeight + "px" }, { height: i.offsetHeight + "px" }, function () {
                                    this.style.height = "";
                                }),
                            (h.isSelected = !0),
                            "function" == typeof this.onSelect && this.onSelect();
                    }),
                    (h.hideEditors = function (a) {
                        a
                            ? i.removeChild(l)
                            : i.setTransition({ height: i.offsetHeight + "px" }, { height: j.offsetHeight + "px" }, function () {
                                  (this.style.height = ""), this.removeChild(l);
                              }),
                            (h.isSelected = !1),
                            "function" == typeof this.onDeselect && this.onDeselect();
                    }),
                    (h.setColor = function (a) {
                        (this.currentColor = a), n.setAttribute("class", "color-picker-button " + a), this.updateColor();
                    }),
                    (h.updateColor = null),
                    (h.update = null),
                    (h.parts3d = [h]),
                    (h.currentColor = c[d]),
                    (h.isSelected = !1),
                    (h.listItem = i),
                    (h.listItemLabel = j),
                    (h.listItemLabelText = k),
                    j.setAttribute("class", "list-object-3d-label"),
                    n.setAttribute("class", "color-picker-button " + h.currentColor),
                    n.addEventListener(
                        "click",
                        function (a) {
                            e.colorPicker.showAt(this), a.stopPropagation();
                        },
                        !1
                    ),
                    (n.setColor = function (a) {
                        this.setAttribute("class", "color-picker-button " + a), "function" == typeof h.setColor && h.setColor(a);
                    }),
                    j.appendChild(n),
                    j.appendChild(k),
                    i.appendChild(j),
                    l.setAttribute("class", "list-object-3d-editor"),
                    ++d,
                    d === c.length && (d = 1),
                    h
                );
            }
            var c = Object.keys(CPM.Graph3d.COLORS),
                d = 1;
            (CPM.Graph3d.createPoint = function (a) {
                var c = document.createElement("div"),
                    d = CPM.Style.enable(document.createElement("div")),
                    e = CPM.Style.enable(document.createElement("div")),
                    f = CPM.Style.enable(document.createElement("div")),
                    g = document.createTextNode(""),
                    h = document.createElement("button");
                return (
                    (c = CPM.Graph3d.makeBillboard(c)),
                    b(c, a),
                    c.firstChild.setAttribute("class", "point-3d " + c.currentColor),
                    (c.update = function () {
                        var a,
                            b,
                            h,
                            i = c,
                            j = g,
                            k = [i.x, i.y, i.z],
                            l = [i.lastX, i.lastY, i.lastZ],
                            m = [d, e, f],
                            n = 3;
                        if (((j.nodeValue = "( " + i.x + " , " + i.y + " , " + i.z + " )"), c.trailsOn)) {
                            if (i.lastX === i.x && i.lastY === i.y && i.lastZ === i.z)
                                for (b = 0; b < n; ++b)
                                    m[b].setStyle({
                                        display: "",
                                        width: Math.abs(k[b]) + "em",
                                        transform:
                                            "translate3d(" +
                                            (b > 0 || i.x < 0 ? i.x : 0) +
                                            "em," +
                                            ((1 === b && i.y < 0) || 2 === b ? i.y : 0) +
                                            "em," +
                                            (2 === b && i.z < 0 ? i.z : 0) +
                                            "em)" +
                                            (1 === b ? " rotateZ(90deg)" : 2 === b ? " rotateY(-90deg)" : ""),
                                    });
                            else
                                for (b = 0; b < n; ++b)
                                    if (k[b] !== l[b])
                                        for (
                                            a = 1 === b ? " rotateZ(90deg)" : 2 === b ? " rotateY(-90deg)" : "",
                                                m[b].style.display = "",
                                                m[b].setTransition(
                                                    {
                                                        width: Math.abs(l[b]) + "em",
                                                        transform:
                                                            "translate3d(" +
                                                            (b > 0 ? i.x : i.lastX < 0 ? i.lastX : 0) +
                                                            "em," +
                                                            (b < 1 ? 0 : b > 1 ? i.y : i.lastY < 0 ? i.lastY : 0) +
                                                            "em," +
                                                            (b < 2 ? 0 : i.lastZ < 0 ? i.lastZ : 0) +
                                                            "em)" +
                                                            a,
                                                    },
                                                    {
                                                        width: Math.abs(k[b]) + "em",
                                                        transform: "translate3d(" + (b > 0 || i.x < 0 ? i.x : 0) + "em," + ((1 === b && i.y < 0) || 2 === b ? i.y : 0) + "em," + (2 === b && i.z < 0 ? i.z : 0) + "em)" + a,
                                                    },
                                                    function () {
                                                        0 === k[b] && (this.style.display = "none");
                                                    }
                                                ),
                                                h = b + 1;
                                            h < n;
                                            ++h
                                        )
                                            0 !== k[h] &&
                                                ((a = 1 === h ? " rotateZ(90deg)" : 2 === h ? " rotateY(-90deg)" : ""),
                                                m[h].setTransition(
                                                    { transform: "translate3d(" + (0 === b ? i.lastX : i.x) + "em," + (b < 1 ? (2 === h || i.y < 0 ? i.y : 0) : i.lastY) + "em," + (2 === h && i.z < 0 ? i.z : 0) + "em)" + a },
                                                    { transform: "translate3d(" + i.x + "em," + (2 === h || i.y < 0 ? i.y : 0) + "em," + (2 === h && i.z < 0 ? i.z : 0) + "em)" + a }
                                                ));
                        } else (d.style.display = "none"), (e.style.display = "none"), (f.style.display = "none");
                        (i.lastX === i.x && i.lastY === i.y && i.lastZ === i.z) ||
                            (i.setTransition({ transform: "translate3d(" + i.lastX + "em," + i.lastY + "em," + i.lastZ + "em)" }, { transform: "translate3d(" + i.x + "em," + i.y + "em," + i.z + "em)" }),
                            (i.lastX = i.x),
                            (i.lastY = i.y),
                            (i.lastZ = i.z));
                    }),
                    (c.onSelect = function () {
                        c.firstChild.setAttribute("class", "point-3d " + this.currentColor + " selected");
                    }),
                    (c.onDeselect = function () {
                        c.firstChild.setAttribute("class", "point-3d " + this.currentColor);
                    }),
                    (c.setTrails = function (a) {
                        (this.trailsOn = a), a ? h.setAttribute("class", "trail-button activated") : h.setAttribute("class", "trail-button");
                    }),
                    (c.updateColor = function () {
                        c.firstChild.setAttribute("class", "point-3d " + this.currentColor + (this.isSelected ? " selected" : "")),
                            d.setAttribute("class", "point-trail-3d trail-x " + this.currentColor),
                            e.setAttribute("class", "point-trail-3d trail-y " + this.currentColor),
                            f.setAttribute("class", "point-trail-3d trail-z " + this.currentColor);
                    }),
                    c.parts3d.splice(c.parts3d.length, 0, d, e, f),
                    c.listItemLabelText.appendChild(g),
                    h.setAttribute("class", "trail-button"),
                    h.appendChild(document.createElement("div")),
                    h.addEventListener(
                        "click",
                        function (a) {
                            (c.trailsOn = !c.trailsOn), c.trailsOn ? this.setAttribute("class", "trail-button activated") : this.setAttribute("class", "trail-button"), c.update(), a.stopPropagation();
                        },
                        !1
                    ),
                    c.listItemLabel.appendChild(h),
                    c.addEditorField("x", -100, 100, 0),
                    c.addEditorField("y", -100, 100, 0),
                    c.addEditorField("z", -100, 100, 0),
                    d.setAttribute("class", "point-trail-3d trail-x " + c.currentColor),
                    e.setAttribute("class", "point-trail-3d trail-y " + c.currentColor),
                    f.setAttribute("class", "point-trail-3d trail-z " + c.currentColor),
                    (c.trailsOn = !1),
                    (c.x = c.y = c.z = c.lastX = c.lastY = c.lastZ = 0),
                    c.update(),
                    c
                );
            }),
                (CPM.Graph3d.createPlane = function (c) {
                    function d() {
                        var a,
                            b,
                            c,
                            d = e,
                            f = ["x", "y", "z"],
                            g = [j, k, l],
                            h = !1,
                            m = f.length;
                        for (c = 0; c < m; ++c)
                            (a = d[f[c]]),
                                (b = g[c]),
                                0 !== a
                                    ? ((b.style.display = ""), (b.firstChild.nodeValue = h ? (a < 0 ? " - " : " + ") : a < 0 ? "-" : ""), 1 !== Math.abs(a) && (b.firstChild.nodeValue += Math.abs(a)), (h = !0))
                                    : (b.style.display = "none");
                        (i.lastChild.nodeValue = h ? " =" : "0 = "), (i.lastChild.nodeValue += d.c < 0 ? "-" + Math.abs(d.c) : d.c);
                    }
                    var e = b(CPM.Style.enable(document.createElement("div")), c),
                        f = document.createElement("div"),
                        g = document.createElement("div"),
                        h = document.createElement("div"),
                        i = e.listItemLabelText,
                        j = document.createElement("span"),
                        k = document.createElement("span"),
                        l = document.createElement("span"),
                        m = document.createElement("button");
                    a();
                    var n = (function () {
                        var a = new CPM.Graph3d.Vector3d(),
                            b = new CPM.Graph3d.Vector3d(),
                            c = new CPM.Graph3d.Vector3d(),
                            d = new CPM.Graph3d.Vector3d();
                        return function (e, f, g, h) {
                            if ((0 === e) & (0 === f) && 0 === g) return null;
                            var i,
                                j,
                                k,
                                l,
                                m,
                                n = 3,
                                o = [],
                                p = [],
                                q = 0,
                                r = [],
                                s = 0;
                            for (i = 0; i < n; ++i) (j = arguments[i]), 0 !== j ? ((o[i] = h / j), (p[i] = !0), ++q) : ((o[i] = 1), (p[i] = !1));
                            if (3 === q) 0 !== h ? (a.setValues(-o[0], o[1], 0), b.setValues(-o[0], 0, o[2])) : (a.setValues(f, -e, 0), b.setValues(0, g, -f));
                            else {
                                for (i = 0; i < n; ++i)
                                    if (p[i]) r[i] = o[i];
                                    else {
                                        if (((r[i] = null), !(++s < 2))) {
                                            b.setValues(0 === i ? 1 : 0, 1 === i ? 1 : 0, 2 === i ? 1 : 0);
                                            break;
                                        }
                                        a.setValues(0 === i ? 1 : 0, 1 === i ? 1 : 0, 2 === i ? 1 : 0);
                                    }
                                1 === s && (0 !== h ? b.setValues(null == r[0] ? 0 : -r[0], null == r[1] ? 0 : null == r[0] ? -r[1] : r[1], null == r[2] ? 0 : r[2]) : b.setValues(f - g, g - e, e - f));
                            }
                            for (c.copyValues(a).cross(b).normalize(), d.setValues(0, 0, 1), k = Math.acos(d.dot(c)), d.cross(c), l = null, i = 0; i < n; ++i) p[i] && (null == l || o[i] <= l) && ((l = o[i]), (m = i));
                            return "translate3d(" + (0 === m ? l + "em" : 0) + "," + (1 === m ? l + "em" : 0) + "," + (2 === m ? l + "em" : 0) + ") rotate3d(" + d.x + "," + d.y + "," + d.z + "," + k + "rad)";
                        };
                    })();
                    return (
                        (e.update = function () {
                            var a,
                                b,
                                c,
                                i = e,
                                j = [i.x, i.y, i.z],
                                k = [f, g, h];
                            if ((d(), i.interceptsOn))
                                if (0 !== i.c)
                                    for (b = 0, c = 3; b < c; ++b)
                                        0 !== j[b]
                                            ? k[b].setStyle({ display: "", transform: "translate3d(" + (0 === b ? i.c / i.x : 0) + "em," + (1 === b ? i.c / i.y : 0) + "em," + (2 === b ? i.c / i.z : 0) + "em)" })
                                            : (k[b].style.display = "none");
                                else f.setStyle({ display: "", transform: "translate3d(0,0,0)" }), (g.style.display = "none"), (h.style.display = "none");
                            else (f.style.display = "none"), (g.style.display = "none"), (h.style.display = "none");
                            (i.lastX === i.x && i.lastY === i.y && i.lastZ === i.z && i.lastC === i.c) ||
                                ((a = n(i.x, i.y, i.z, i.c)),
                                null != a ? i.setStyle({ display: "", transform: a }) : ((i.style.display = "none"), (f.style.display = "none"), (g.style.display = "none"), (h.style.display = "none")),
                                (i.lastX = i.x),
                                (i.lastY = i.y),
                                (i.lastZ = i.z),
                                (i.lastC = i.c));
                        }),
                        (e.onSelect = function () {
                            this.setAttribute("class", "plane-3d " + this.currentColor + " selected");
                        }),
                        (e.onDeselect = function () {
                            this.setAttribute("class", "plane-3d " + this.currentColor);
                        }),
                        (e.setIntercepts = function (a) {
                            (this.interceptsOn = a), a ? m.setAttribute("class", "intercept-button activated") : m.setAttribute("class", "intercept-button");
                        }),
                        (e.updateColor = function () {
                            this.setAttribute("class", "plane-3d " + this.currentColor + (this.isSelected ? " selected" : "")),
                                f.firstChild.setAttribute("class", "intercept-3d " + this.currentColor),
                                g.firstChild.setAttribute("class", "intercept-3d " + this.currentColor),
                                h.firstChild.setAttribute("class", "intercept-3d " + this.currentColor);
                        }),
                        e.setAttribute("class", "plane-3d " + e.currentColor),
                        f.setAttribute("class", "intercept-3d " + e.currentColor),
                        g.setAttribute("class", "intercept-3d " + e.currentColor),
                        h.setAttribute("class", "intercept-3d " + e.currentColor),
                        (f = CPM.Graph3d.makeBillboard(f)),
                        (g = CPM.Graph3d.makeBillboard(g)),
                        (h = CPM.Graph3d.makeBillboard(h)),
                        e.parts3d.splice(e.parts3d.length, 0, f, g, h),
                        j.appendChild(document.createTextNode("")),
                        j.appendChild(document.createElement("em")),
                        j.lastChild.appendChild(document.createTextNode("x")),
                        i.appendChild(j),
                        k.appendChild(document.createTextNode("")),
                        k.appendChild(document.createElement("em")),
                        k.lastChild.appendChild(document.createTextNode("y")),
                        i.appendChild(k),
                        l.appendChild(document.createTextNode("")),
                        l.appendChild(document.createElement("em")),
                        l.lastChild.appendChild(document.createTextNode("z")),
                        i.appendChild(l),
                        i.appendChild(document.createTextNode("")),
                        m.setAttribute("class", "intercept-button activated"),
                        m.appendChild(document.createElement("div")),
                        m.addEventListener(
                            "click",
                            function (a) {
                                (e.interceptsOn = !e.interceptsOn), e.interceptsOn ? this.setAttribute("class", "intercept-button activated") : this.setAttribute("class", "intercept-button"), e.update(), a.stopPropagation();
                            },
                            !1
                        ),
                        e.listItemLabel.appendChild(m),
                        e.addEditorField("a", -100, 100, 1, "x"),
                        e.addEditorField("b", -100, 100, 1, "y"),
                        e.addEditorField("c", -100, 100, 1, "z"),
                        e.addEditorField("d", -1e3, 1e3, 1, "c"),
                        (e.interceptsOn = !0),
                        (e.x = e.y = e.z = e.c = 1),
                        (e.lastX = e.lastY = e.lastZ = e.lastC = 0),
                        e.update(),
                        e
                    );
                });
        })(),
    (CPM = window.CPM || {}),
    (CPM.Graph3d = CPM.Graph3d || {}),
    CPM.Graph3d.createHelpDialog ||
        (function () {
            CPM.Graph3d.createHelpDialog = function a(b) {
                function c(a, b, c, d) {
                    var e = document.createElement("li"),
                        f = document.createElement("span"),
                        g = document.createElement("div"),
                        h = document.createElement("button"),
                        i = document.createElement("button"),
                        j = document.createElement("a");
                    return (
                        e.setAttribute("class", "shuffle-list-item"),
                        f.setAttribute("class", "numeral"),
                        g.setAttribute("class", "label"),
                        h.setAttribute("class", "color-picker-button " + c),
                        j.setAttribute("class", "delete-button"),
                        f.appendChild(document.createTextNode(a)),
                        e.appendChild(f),
                        g.appendChild(document.createElement("div")),
                        g.lastChild.setAttribute("class", "list-object-3d-label"),
                        g.lastChild.appendChild(h),
                        "string" == typeof b ? g.lastChild.appendChild(document.createTextNode(b)) : g.lastChild.appendChild(b),
                        i.appendChild(document.createElement("div")),
                        i.setAttribute("class", d),
                        g.appendChild(i),
                        e.appendChild(g),
                        (e.itemLabel = g),
                        j.appendChild(document.createTextNode("x")),
                        e.appendChild(j),
                        e
                    );
                }
                function d(a, b) {
                    var c = document.createElement("div"),
                        d = document.createElement("span"),
                        e = CPM.UI.createIntegerField(b);
                    return d.appendChild(document.createTextNode(a)), d.setAttribute("class", "number-field-label"), c.appendChild(d), c.appendChild(e), c;
                }
                var e,
                    f = CPM.Base.createHelpDialog(b);
                if (((shortcuts = CPM.Base.generateElementShortcuts()), (em = shortcuts.em), (paragraph = shortcuts.p), (icon = shortcuts.icon), !a.styled)) {
                    var g = CPM.Style.getStylesheet("main");
                    g.addRule(".CPM-help-dialog-icon.main-button", { position: "relative", left: 0, top: 0, margin: "0 8px" }),
                        g.addRule(".CPM-help-dialog-billboard", { position: "absolute", transformStyle: "preserve-3d", transformOrigin: "50% 50%", backfaceVisibility: "hidden" }),
                        (e = g.addRule(".CPM-help-dialog-billboard>*", { transformOrigin: "50% 50%" })),
                        (a.styled = !0);
                }
                return (
                    (function () {
                        f.addTitlePage("CPM 3D Plotter").addContent(paragraph("Welcome to the 3D Plotter! With this tool, you can graph points and planes on a set of 3D axes."));
                    })(),
                    (toc = f.addTableOfContents("CPM 3D Plotter")),
                    toc.addSection("The 3D Graph"),
                    (function () {
                        var a,
                            c,
                            d,
                            g,
                            h,
                            i = f.addPage("The 3D Axes");
                        for (
                            toc.add(i),
                                a = document.createElement("div"),
                                a.setAttribute("class", "CPM-help-dialog-mockup"),
                                a.style.height = "230px",
                                c = CPM.Graph3d.createViewport(b),
                                CPM.Graph3d.addAxes(c.origin3d),
                                c.origin3d.setAxesLength(9, 9, 9);
                            c.childNodes.length > 1;

                        )
                            c.removeChild(c.lastChild);
                        for (c.style.left = 0, c.firstChild.style.fontSize = "10px", e.transform("scaleY(-1) " + c.getReverseTransformation()), d = 0, g = c.origin3d.childNodes.length; d < g; ++d)
                            (h = c.origin3d.childNodes[d]), "billboard" === h.getAttribute("class") && h.setAttribute("class", "CPM-help-dialog-billboard");
                        a.appendChild(c),
                            i.appendChild(a),
                            i.appendChild(
                                paragraph("In the middle you will see the 3D axes with the XY grid shown. Click and drag anywhere to rotate the axes. You can click on 'Show / hide grids' in the tray at left to see a different grid.")
                            ),
                            (c = icon("CPM-zoom-button zoom-in")),
                            (c.style.position = "relative"),
                            (c.style.right = 0),
                            (c.style.top = 0),
                            (c.style.textAlign = "left"),
                            c.replaceChild(document.createTextNode("+"), c.firstChild),
                            i.appendChild(c),
                            (c = icon("CPM-zoom-button zoom-out")),
                            (c.style.position = "relative"),
                            (c.style.right = 0),
                            (c.style.top = 0),
                            (c.style.textAlign = "left"),
                            c.replaceChild(document.createTextNode("-"), c.firstChild),
                            i.appendChild(c),
                            i.appendChild(
                                paragraph(
                                    "In the top right corner you will see these two buttons. You can click on the '+' button to zoom in on the axes, and click on the '-' button to zoom out. If you have a mouse wheel, you can also use that to zoom."
                                )
                            );
                    })(),
                    toc.addSection("The Tray"),
                    (function () {
                        var a,
                            b,
                            d = f.addPage("Plotting Points and Planes");
                        toc.add(d),
                            d.appendChild(paragraph("In the tray at left, you will see two buttons.")),
                            (a = document.createElement("div")),
                            a.setAttribute("class", "CPM-help-dialog-mockup plot3d-adder"),
                            (a.style.width = "260px"),
                            (a.style.height = "52px"),
                            (b = document.createElement("div")),
                            b.setAttribute("class", "numeral"),
                            b.appendChild(document.createTextNode("1")),
                            a.appendChild(b),
                            (b = document.createElement("button")),
                            b.appendChild(document.createElement("span")),
                            b.lastChild.appendChild(document.createTextNode("(1,2,3)")),
                            b.appendChild(document.createElement("div")),
                            b.lastChild.setAttribute("class", "icon-point"),
                            a.appendChild(b),
                            (b = document.createElement("button")),
                            b.appendChild(document.createElement("span")),
                            b.lastChild.appendChild(document.createTextNode("x+y+z=1")),
                            b.appendChild(document.createElement("div")),
                            b.lastChild.setAttribute("class", "icon-plane"),
                            a.appendChild(b),
                            d.appendChild(a),
                            d.appendChild(paragraph("Click the left button to plot a point, and the other to plot a plane.")),
                            (a = document.createElement("ol")),
                            a.setAttribute("class", "CPM-help-dialog-mockup shuffle-list"),
                            a.appendChild(c(1, "(0,0,0)", "red", "trail-button")),
                            (b = document.createElement("span")),
                            b.appendChild(document.createElement("em")),
                            b.lastChild.appendChild(document.createTextNode("x")),
                            b.appendChild(document.createTextNode(" + ")),
                            b.appendChild(document.createElement("em")),
                            b.lastChild.appendChild(document.createTextNode("y")),
                            b.appendChild(document.createTextNode(" + ")),
                            b.appendChild(document.createElement("em")),
                            b.lastChild.appendChild(document.createTextNode("z")),
                            b.appendChild(document.createTextNode(" = 1")),
                            a.appendChild(c(2, b, "orange", "intercept-button")),
                            d.appendChild(a),
                            d.appendChild(paragraph("Click and drag on the number to the left of any item to reorder the list. Click on the 'x' to the right of any item to delete it.")),
                            (b = icon("color-picker-button red")),
                            (b.style.position = "relative"),
                            (b.style.left = 0),
                            (b.style.top = 0),
                            (b.style.margin = "4px"),
                            d.appendChild(b),
                            (b = paragraph("Click this to change the color of an item.")),
                            (b.style.paddingTop = "10px"),
                            d.appendChild(b),
                            (b = icon("trail-button")),
                            (b.style.position = "relative"),
                            (b.style.left = 0),
                            (b.style.top = 0),
                            (b.style.margin = "4px"),
                            d.appendChild(b),
                            (b = paragraph("Click this to connect the point to the origin.")),
                            (b.style.paddingTop = "10px"),
                            d.appendChild(b),
                            (b = icon("intercept-button")),
                            (b.style.position = "relative"),
                            (b.style.left = 0),
                            (b.style.top = 0),
                            (b.style.margin = "4px"),
                            d.appendChild(b),
                            (b = paragraph("Click this to show where the plane intersects the axes.")),
                            (b.style.paddingTop = "10px"),
                            d.appendChild(b);
                    })(),
                    (function () {
                        var a,
                            b,
                            e,
                            g,
                            h = f.addPage("Editing Points and Planes"),
                            i = ["hidden", "red", "orange", "yellow", "green", "blue"];
                        for (
                            toc.add(h),
                                h.appendChild(paragraph("Click on any point or plane to access an editor.")),
                                a = document.createElement("ol"),
                                a.setAttribute("class", "CPM-help-dialog-mockup shuffle-list"),
                                b = c(2, "", "orange"),
                                b.setAttribute("class", "shuffle-list-item selected"),
                                a.appendChild(b),
                                b = document.createElement("div"),
                                b.setAttribute("class", "list-object-3d-editor"),
                                b.appendChild(d("x", 1)),
                                b.appendChild(d("y", 1)),
                                b.appendChild(d("z", 1)),
                                b.appendChild(d("c", 1)),
                                a.lastChild.itemLabel.appendChild(b),
                                b = document.createElement("div"),
                                b.setAttribute("class", "color-picker-popout"),
                                b.appendChild(document.createElement("div")),
                                b.lastChild.setAttribute("class", "color-picker-wrapper"),
                                e = 0,
                                g = i.length;
                            e < g;
                            ++e
                        )
                            b.lastChild.appendChild(document.createElement("button")), b.lastChild.lastChild.setAttribute("class", i[e]);
                        (b.style.left = "68px"),
                            (b.style.top = "2px"),
                            a.appendChild(b),
                            h.appendChild(a),
                            (b = paragraph("For points, these fields correspond to the point's coordinates. For planes, these fields correspond to the equation's ")),
                            b.appendChild(em("x")),
                            b.appendChild(document.createTextNode(", ")),
                            b.appendChild(em("y")),
                            b.appendChild(document.createTextNode(", and ")),
                            b.appendChild(em("z")),
                            b.appendChild(document.createTextNode(" coefficients. The 'c' field refers to the constant term.")),
                            h.appendChild(b),
                            h.appendChild(paragraph("Also shown above is the color picker. Choose from any of the six colors, or click on the leftmost button to hide the point or plane without deleting it."));
                    })(),
                    (function () {
                        var a = f.addTrayPage("CPM 3D Plotter");
                        toc.add(a), a.setGearDescription("This button will open a menu with more options. Click on 'Save' to save all of the points and planes that you have plotted.");
                    })(),
                    f
                );
            };
        })();
