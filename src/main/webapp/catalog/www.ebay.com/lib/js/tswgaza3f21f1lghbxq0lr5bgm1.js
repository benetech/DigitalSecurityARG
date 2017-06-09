(function() {
    var k = function(a) {
            a = +a;
            a !== a ? a = 0 : 0 !== a && (a !== 1 / 0 && a !== -(1 / 0)) && (a = (0 < a || -1) * Math.floor(Math.abs(a)));
            return a
        },
        p = "a" != "a" [0],
        h = function(a) {
            if (null == a) throw new TypeError("can't convert " + a + " to object");
            return p && "string" == typeof a && a ? a.split("") : Object(a)
        },
        f = Function.prototype.call,
        l = Object.prototype,
        j = Array.prototype.slice;
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var d = this;
        if ("function" != typeof d) throw new TypeError("Function.prototype.bind called on incompatible " +
            d);
        var b = j.call(arguments, 1),
            c = function() {
                if (this instanceof c) {
                    var e = function() {};
                    e.prototype = d.prototype;
                    var e = new e,
                        g = d.apply(e, b.concat(j.call(arguments)));
                    return Object(g) === g ? g : e
                }
                return d.apply(a, b.concat(j.call(arguments)))
            };
        return c
    });
    var i = f.bind(l.toString),
        m = f.bind(l.hasOwnProperty);
    Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" == i(a)
    });
    Array.prototype.forEach || (Array.prototype.forEach = function(a, d) {
        var b = h(this),
            c = -1,
            e = b.length >>> 0;
        if ("[object Function]" != i(a)) throw new TypeError;
        for (; ++c < e;) c in b && a.call(d, b[c], c, b)
    });
    Array.prototype.map || (Array.prototype.map = function(a, d) {
        var b = h(this),
            c = b.length >>> 0,
            e = Array(c);
        if ("[object Function]" != i(a)) throw new TypeError(a + " is not a function");
        for (var g = 0; g < c; g++) g in b && (e[g] = a.call(d, b[g], g, b));
        return e
    });
    Array.prototype.filter || (Array.prototype.filter = function(a, d) {
        var b = h(this),
            c = b.length >>> 0,
            e = [],
            g;
        if ("[object Function]" != i(a)) throw new TypeError(a + " is not a function");
        for (var f = 0; f < c; f++) f in b && (g = b[f], a.call(d, g, f, b) && e.push(g));
        return e
    });
    Array.prototype.every || (Array.prototype.every = function(a, d) {
        var b = h(this),
            c = b.length >>> 0;
        if ("[object Function]" != i(a)) throw new TypeError(a + " is not a function");
        for (var e = 0; e < c; e++)
            if (e in b && !a.call(d, b[e], e, b)) return !1;
        return !0
    });
    Array.prototype.some || (Array.prototype.some = function(a, d) {
        var b = h(this),
            c = b.length >>> 0;
        if ("[object Function]" != i(a)) throw new TypeError(a + " is not a function");
        for (var e = 0; e < c; e++)
            if (e in b && a.call(d, b[e], e, b)) return !0;
        return !1
    });
    Array.prototype.reduce || (Array.prototype.reduce =
        function(a) {
            var d = h(this),
                b = d.length >>> 0;
            if ("[object Function]" != i(a)) throw new TypeError(a + " is not a function");
            if (!b && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
            var c = 0,
                e;
            if (2 <= arguments.length) e = arguments[1];
            else {
                do {
                    if (c in d) {
                        e = d[c++];
                        break
                    }
                    if (++c >= b) throw new TypeError("reduce of empty array with no initial value");
                } while (1)
            }
            for (; c < b; c++) c in d && (e = a.call(void 0, e, d[c], c, d));
            return e
        });
    Array.prototype.reduceRight || (Array.prototype.reduceRight = function(a) {
        var d =
            h(this),
            b = d.length >>> 0;
        if ("[object Function]" != i(a)) throw new TypeError(a + " is not a function");
        if (!b && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
        var c, b = b - 1;
        if (2 <= arguments.length) c = arguments[1];
        else {
            do {
                if (b in d) {
                    c = d[b--];
                    break
                }
                if (0 > --b) throw new TypeError("reduceRight of empty array with no initial value");
            } while (1)
        }
        do b in this && (c = a.call(void 0, c, d[b], b, d)); while (b--);
        return c
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        var d =
            h(this),
            b = d.length >>> 0;
        if (!b) return -1;
        var c = 0;
        1 < arguments.length && (c = k(arguments[1]));
        for (c = 0 <= c ? c : Math.max(0, b + c); c < b; c++)
            if (c in d && d[c] === a) return c;
        return -1
    });
    Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(a) {
        var d = h(this),
            b = d.length >>> 0;
        if (!b) return -1;
        var c = b - 1;
        1 < arguments.length && (c = Math.min(c, k(arguments[1])));
        for (c = 0 <= c ? c : b - Math.abs(c); 0 <= c; c--)
            if (c in d && a === d[c]) return c;
        return -1
    });
    if (!Object.keys) {
        var n = !0,
            o = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
            q = o.length,
            r;
        for (r in {
                toString: null
            }) n = !1;
        Object.keys = function(a) {
            if ("object" != typeof a && "function" != typeof a || null === a) throw new TypeError("Object.keys called on a non-object");
            var d = [],
                b;
            for (b in a) m(a, b) && d.push(b);
            if (n)
                for (b = 0; b < q; b++) {
                    var c = o[b];
                    m(a, c) && d.push(c)
                }
            return d
        }
    }
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    f = "\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    if (!String.prototype.trim ||
        f.trim()) {
        var f = "[" + f + "]",
            s = RegExp("^" + f + f + "*"),
            t = RegExp(f + f + "*$");
        String.prototype.trim = function() {
            if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
            return String(this).replace(s, "").replace(t, "")
        }
    }
})();
(function() {
    var d = String.prototype;
    d.startsWith || (d.startsWith = function(b, c) {
        var a = this;
        c && (a = a.substring(c));
        return a.length < b.length ? !1 : a.substring(0, b.length) == b
    });
    d.endsWith || (d.endsWith = function(b, c) {
        var a = this;
        c && (a = a.substring(c));
        return a.length < b.length ? !1 : a.slice(0 - b.length) == b
    })
})();
(function() {
    var f, k = {},
        m = {},
        n = {},
        v = [].slice,
        z = Array.isArray,
        g = function(a, b) {
            a || (a = {});
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        },
        t = function(a) {
            return "function" == typeof a
        },
        w = function(a, b, c) {
            null != a && (a.forEach ? a : [a]).forEach(b, c)
        },
        A = function(a, b, c) {
            for (var d in a) a.hasOwnProperty(d) && b.call(c, d, a[d])
        },
        C = function(a, b, c) {
            var d = t(b) ? b() : b,
                e;
            c && w(c, function(a) {
                if (e = a(d)) d = e
            });
            return d
        },
        D = function(a, b, c) {
            var d = a.prototype,
                e = function() {},
                b = "string" == typeof b ? i(b) : b;
            g(a, b);
            e.prototype = b.prototype;
            a.superclass = e.prototype;
            a.prototype = new e;
            c && g(a.prototype, d);
            return d
        },
        E = function(a, b, c) {
            if (!t(a)) {
                var d = a,
                    a = d.init || function() {};
                g(a.prototype, d)
            }
            b && D(a, b, !0);
            a.getName = a.getName || function() {
                return c
            };
            b = a.prototype;
            b.constructor = a;
            b.getClass = function() {
                return a
            };
            return a
        },
        H = function() {
            return this._ordinal
        },
        F = function() {
            return this._name
        },
        I = function(a) {
            return this._ordinal - a._ordinal
        },
        q = function(a, b) {
            "/" == a.charAt(0) && (a = a.substring(1));
            if ("." == a.charAt(0)) {
                if (!b) return a;
                var c = b.split("/").slice(0, -1);
                w(a.split("/"), function(a) {
                    ".." == a ? c.splice(c.length - 1, 1) : "." != a && c.push(a)
                });
                return c.join("/")
            }
            return a.replace(/\./g, "/")
        },
        i = function(a, b, c) {
            if (b) return i("raptor/loader").load(a, b, c);
            if (m.hasOwnProperty(a)) return m[a];
            if (f.exists(a)) return b = k[a], m[a] = C(a, b.factory, b.postCreate);
            throw Error(a + " not found");
        },
        B = {
            load: function(a, b) {
                var c = this.normalize;
                z(a) || (a = [a]);
                for (var d = 0, e = a.length; d < e; d++) a[d] = c(a[d]);
                return i(a, b)
            },
            exists: function(a) {
                return f.exists(this.normalize(a))
            },
            find: function(a) {
                return f.find(this.normalize(a))
            }
        },
        x = {
            extend: function() {
                return j(arguments, this.require, 0, 1)
            },
            Class: function() {
                return j(arguments, this.require, 1)
            },
            Enum: function() {
                return j(arguments, this.require, 0, 0, 1)
            }
        },
        j = function(a, b, c, d, e) {
            var i = 0,
                m = a.length - 1,
                n, o, l, p, u, j = [],
                k, h, r = g(function(a, c) {
                    return c ? r.load(a, c) : b(a, l)
                }, B),
                y = new G(r),
                s = y.exports,
                x = {
                    require: r,
                    exports: s,
                    module: y
                },
                v = function() {
                    w(j, function(a, c) {
                        var d;
                        if (!(d = x[a])) d = b(a, l);
                        j[c] = d
                    });
                    return j
                };
            for (r.normalize = function(a) {
                    return q(a, l)
                }; i < m; i++) o = a[i], "string" == typeof o ? l ? p = q(o, l) :
                l = y.id = q(o) : z(o) ? j = o : e ? u = o : p = o.superclass;
            h = a[m];
            d ? k = function(a) {
                t(h) && (h = h.apply(f, v().concat([r, a])));
                h && g(t(a) ? a.prototype : a, h)
            } : (c || p ? k = function(a) {
                p = "string" == typeof p ? r(p) : p;
                return E(a, p, l)
            } : e && (z(h) && (u = h, h = null), k = function(a) {
                a ? "object" == typeof a && (a = E(a, 0, l)) : a = function() {};
                var b = a.prototype,
                    c = 0;
                if (z(u)) w(u, function(b) {
                    g(a[b] = new a, {
                        _ordinal: c++,
                        _name: b
                    })
                });
                else if (u) {
                    var d = function() {};
                    d.prototype = b;
                    A(u, function(b, e) {
                        a.apply(g(a[b] = new d, {
                            _ordinal: c++,
                            _name: b
                        }), e || [])
                    })
                }
                a.valueOf = function(b) {
                    return a[b]
                };
                g(b, {
                    name: F,
                    ordinal: H,
                    compareTo: I
                });
                b.toString == Object.prototype.toString && (b.toString = F);
                return a
            }), n = t(h) ? function() {
                var a = h.apply(f, v().concat([r, s, y]));
                return void 0 === a ? y.exports : a
            } : h);
            return f.define(l, n, k)
        },
        G = function(a) {
            this.require = a;
            this.exports = {}
        };
    G.prototype = {
        logger: function() {
            return this.l || (this.l = i("raptor/logging").logger(this.id))
        }
    };
    f = {
        cache: m,
        inherit: D,
        extend: g,
        forEach: w,
        arrayFromArguments: function(a, b) {
            return !a ? [] : b ? b < a.length ? v.call(a, b) : [] : v.call(a)
        },
        forEachEntry: A,
        createError: function(a,
            b) {
            var c, d = arguments.length,
                e = Error;
            2 == d ? (c = a instanceof e ? a : new e(a), c._cause = b) : 1 == d && (c = a instanceof e ? a : new e(a));
            return c
        },
        define: function(a, b, c) {
            if (!a) return C.apply(f, arguments);
            var d = a && k[a] || (k[a] = {
                    postCreate: []
                }),
                e;
            b && (d.factory = b);
            c && (d.postCreate.push(c), (e = m[a]) && c(e));
            "object" == typeof e && e.toString === Object.prototype.toString && (e.toString = function() {
                return "[" + a + "]"
            })
        },
        exists: function(a) {
            return k.hasOwnProperty(a)
        },
        find: function(a) {
            return f.exists(a) ? f.require(a) : void 0
        },
        require: i,
        normalize: q,
        _define: j,
        props: [B, x]
    };
    var s;
    if ("undefined" != typeof window) {
        s = window;
        var J = x.require = function(a, b) {
            return i(q(a, b))
        };
        define = g(function() {
            return j(arguments, J)
        }, x);
        require = g(function(a, b) {
            return t(b) ? require.load(a, b) : i(q(a))
        }, B);
        require.normalize = q;
        define.amd = {}
    } else s = global, module.exports = f;
    f.define("raptor", f);
    g(s, {
        $rset: function(a, b, c) {
            if ("object" === typeof b) A(b, function(b, c) {
                $rset(a, b, c)
            });
            else {
                var d = n[a];
                d || (d = n[a] = {});
                void 0 !== c ? d[b] = c : delete d[b]
            }
        },
        $radd: function(a, b) {
            var c = n[a];
            c || (c = n[a] = []);
            c.push(b)
        },
        $rget: function(a, b) {
            var c = n[a];
            return 2 == arguments.length ? c && c[b] : c
        }
    });
    f.global = s
})();
define("raptor/logging", ["raptor"], function(c) {
    var a = function() {
            return !1
        },
        b = {
            isDebugEnabled: a,
            isInfoEnabled: a,
            isWarnEnabled: a,
            isErrorEnabled: a,
            isFatalEnabled: a,
            dump: a,
            debug: a,
            info: a,
            warn: a,
            error: a,
            fatal: a,
            alert: a,
            trace: a
        };
    return {
        logger: function() {
            return b
        },
        makeLogger: function(a) {
            c.extend(a, b)
        },
        configure: a,
        voidLogger: b
    }
});
define("raptor/listeners", ["raptor"], function(j) {
    var k = j.forEachEntry,
        r = Array.isArray,
        s = j.extend,
        t = 0,
        o = function() {},
        l, p = function(a, b) {
            return !a ? o : !b ? a : function() {
                a.apply(b, arguments)
            }
        },
        m = function(a) {
            var b = [],
                c;
            a._listeners.forEach(function(a) {
                a.removed ? (c = a.thisObj) && delete c.__lstnrs[a.id] : b.push(a)
            });
            a._listeners = b;
            a._listeners.length || a._onEmpty()
        },
        g = function(a, b) {
            this.name = a;
            this.data = b
        };
    g.prototype = {
        getName: function() {
            return this.name
        },
        getData: function() {
            return this.data
        }
    };
    var n = function() {
        this._listeners = [];
        this._onEmpty = o
    };
    n.prototype = {
        add: function(a, b, c) {
            var d = {
                    callback: a,
                    thisObj: b,
                    removed: !1,
                    autoRemove: c,
                    id: t++
                },
                e = this,
                a = d.remove = function() {
                    d.removed = !0;
                    m(e)
                };
            this._listeners.push(d);
            c = {
                remove: a
            };
            c.unsubscribe = c.remove;
            if (b) {
                if (!(a = b.__lstnrs)) a = b.__lstnrs = {};
                a[d.id] = c
            }
            return c
        },
        publish: function() {
            var a = arguments,
                b = this;
            b._listeners.forEach(function(c) {
                if (!c.removed && (c.callback.apply(c.thisObj, a), c.autoRemove)) {
                    var d = b;
                    c.removed = !0;
                    m(d)
                }
            })
        },
        onEmpty: function(a, b) {
            this._onEmpty = p(a, b)
        },
        removeAll: function() {
            for (var a =
                    this._listeners, b = 0; b < a.length; b++) a[b].removed = !0;
            m(this)
        }
    };
    var q = function(a, b) {
            var c = b._allowed;
            if (c && !c[a]) throw Error('Invalid message name of "' + a + '". Allowed messages: ' + Object.keys(c).join(", "));
        },
        u = function(a) {
            return function(b) {
                var c = [a].concat(Array.prototype.slice.call(arguments));
                this["function" == typeof b ? "subscribe" : "publish"].apply(this, c)
            }
        },
        h = function() {
            this._byName || (this._byName = {})
        };
    h.prototype = {
        __observable: !0,
        registerMessages: function(a, b) {
            this._allowed || (this._allowed = {});
            for (var c =
                    0, d = a.length; c < d; c++) {
                var e = a[c];
                this._allowed[e] = !0;
                b && (this[e] = u(e))
            }
        },
        subscribe: function(a, b, c, d) {
            var e = this,
                f;
            if ("object" == typeof a) return d = c, c = b, f = {}, k(a, function(a, b) {
                f[a] = e.subscribe(a, b, c, d)
            }), b = {
                unsubscribe: function(a) {
                    if (arguments.length) {
                        var b = f[a];
                        if (!b) throw j.createError(Error("Invalid message name: " + a));
                        b.unsubscribe()
                    } else k(f, function(a, b) {
                        b.remove()
                    })
                }
            }, b.remove = b.removeAll = b.unsubscribe, b;
            q(a, e);
            var i = e._byName[a];
            i || (e._byName[a] = i = new n, i.onEmpty(function() {
                delete e._byName[a]
            }));
            return i.add(b, c, d)
        },
        unsubscribeAll: function() {
            k(this._byName, function(a, b) {
                b.removeAll()
            });
            this._byName = {}
        },
        publish: function(a, b) {
            var c;
            r(b) ? c = b : (l.isMessage(a) ? (b = a, a = b.getName()) : b = l.createMessage(a, b), c = [b.data, b]);
            q(a, this);
            var d = this,
                e = function(a) {
                    (a = d._byName[a]) && a.publish.apply(a, c)
                };
            e(a);
            e("*");
            var f = a.lastIndexOf(".");
            0 <= f && e(a.substring(0, f + 1) + "*");
            return b
        }
    };
    return l = {
        Message: g,
        createListeners: function() {
            return new n
        },
        createObservable: function(a, b) {
            var c = new h;
            a && c.registerMessages(a,
                b);
            return c
        },
        makeObservable: function(a, b, c, d) {
            b || (b = a);
            b.__observable || s(b, h.prototype);
            h.call(a);
            c && a.registerMessages(c, d)
        },
        isObervable: function(a) {
            return a && a.__observable
        },
        createMessage: function(a, b) {
            return new g(a, b)
        },
        isMessage: function(a) {
            return a instanceof g
        },
        bind: p,
        unsubscribeFromAll: function(a) {
            if (a = a.__lstnrs)
                for (var b in a) a[b].unsubscribe()
        }
    }
});
define("raptor/pubsub", function(e) {
    var d = e("raptor/listeners"),
        g = define.Class({
            superclass: d.Message
        }, function() {
            var a = function(a, c) {
                d.Message.call(this, a, c);
                this.topic = a
            };
            a.prototype = {
                getTopic: function() {
                    return this.topic
                }
            };
            return a
        }),
        h = define.Class(function() {
            return {
                init: function(a) {
                    this.name = a;
                    this.observable = d.createObservable()
                },
                publish: function(a, b) {
                    var c;
                    c = d.isMessage(a) ? a : e("raptor/pubsub").createMessage(a, b);
                    this.observable.publish(c);
                    return c
                },
                subscribe: function(a, b, c) {
                    return this.observable.subscribe(a,
                        b, c)
                }
            }
        }),
        f = {};
    return {
        channel: function(a) {
            var b = f[a];
            b || (b = new h(a), f[a] = b);
            return b
        },
        global: function() {
            return this.channel("global")
        },
        publish: function(a, b) {
            var c = this.global();
            c.publish.apply(c, arguments)
        },
        subscribe: function(a, b, c) {
            var d = this.global();
            return d.subscribe.apply(d, arguments)
        },
        createMessage: function(a, b) {
            return new g(a, b)
        }
    }
});
define("raptor/widgets/WidgetDef", ["raptor"], function(c) {
    var b = function(a) {
        this.children = [];
        c.extend(this, a)
    };
    b.prototype = {
        a: function() {},
        addChild: function(a) {
            this.children.push(a)
        },
        elId: function(a) {
            return 0 === arguments.length ? this.id : this.id + "-" + a
        }
    };
    return b
});
define("raptor/widgets/WidgetsContext", ["raptor"], function(g, h) {
    var i = h("raptor/widgets/WidgetDef"),
        b = function(a) {
            this.context = a;
            this.widgets = [];
            this.widgetStack = []
        };
    b.prototype = {
        getWidgets: function() {
            return this.widgets
        },
        beginWidget: function(a, b) {
            var c = this.widgetStack,
                e = c.length,
                f = e ? c[e - 1] : null;
            a.id || (a.id = this._nextWidgetId());
            if (a.assignedId && !a.scope) throw g.createError(Error('Widget with an assigned ID "' + a.assignedId + '" is not scoped within another widget.'));
            a.parent = f;
            var d = new i(a);
            f ? f.addChild(d) :
                this.widgets.push(d);
            c.push(d);
            try {
                b(d)
            } finally {
                c.splice(e, 1)
            }
        },
        hasWidgets: function() {
            return 0 !== this.widgets.length
        },
        clearWidgets: function() {
            this.widgets = [];
            this.widgetStack = []
        },
        _nextWidgetId: function() {
            return "w" + this.context.uniqueId()
        }
    };
    return b
});
define("raptor/widgets", function(c) {
    var d = c("raptor/widgets/WidgetsContext");
    return {
        getWidgetsContext: function(a) {
            var b = a.getAttributes();
            return b.widgets || (b.widgets = new d(a))
        }
    }
});
define.extend("raptor/widgets/Widget", ["raptor"], function(b, e, c) {
    var d = b.arrayFromArguments;
    c.legacy = !0;
    return {
        getRootEl: function() {
            return this.getEl()
        },
        getRootElId: function() {
            return this.getElId()
        },
        getChild: function(a) {
            return this.getWidget(a)
        },
        getChildren: function(a) {
            return this.getWidget(a)
        },
        getParent: function() {
            return this._parentWidget
        },
        getChildWidget: function(a) {
            return this.getChild(a)
        },
        getChildWidgets: function(a) {
            return this.getChildren.apply(this, arguments)
        },
        getParentWidget: function() {
            return this._parentWidget
        },
        notify: function(a, b) {
            return this.publish(a, d(arguments, 1))
        },
        getDoc: function() {
            return this.widgets
        }
    }
});
define("raptor/dom", function(h) {
    var c = function(b) {
            if ("string" === typeof b) {
                var a = b,
                    b = document.getElementById(a);
                if (!b) throw raptor.createError(Error('Target element not found: "' + a + '"'));
            }
            return b
        },
        f = function(b) {
            var a = h.find("raptor/pubsub");
            a && a.publish("dom/beforeRemove", {
                el: b
            })
        },
        d = {
            forEachChildEl: function(b, a, c) {
                d.forEachChild(b, a, c, 1)
            },
            forEachChild: function(b, a, c, e) {
                if (b)
                    for (var d = 0, b = b.childNodes, f = b.length; d < f; d++) {
                        var g = b[d];
                        g && (null == e || e == g.nodeType) && a.call(c, g)
                    }
            },
            detach: function(b) {
                b = c(b);
                b.parentNode.removeChild(b)
            },
            appendTo: function(b, a) {
                c(a).appendChild(c(b))
            },
            replace: function(b, a) {
                a = c(a);
                f(a);
                a.parentNode.replaceChild(c(b), a)
            },
            replaceChildrenOf: function(b, a) {
                a = c(a);
                d.forEachChildEl(a, function(a) {
                    f(a)
                });
                a.innerHTML = "";
                a.appendChild(c(b))
            },
            insertBefore: function(b, a) {
                a = c(a);
                a.parentNode.insertBefore(c(b), a)
            },
            insertAfter: function(b, a) {
                var a = c(a),
                    b = c(b),
                    d = a.nextSibling,
                    e = a.parentNode;
                d ? e.insertBefore(b, d) : e.appendChild(b)
            },
            prependTo: function(b, a) {
                a = c(a);
                a.insertBefore(c(b), a.firstChild ||
                    null)
            }
        };
    return d
});
define.extend("raptor/widgets/WidgetsContext", function(a) {
    return {
        initWidgets: function() {
            var b = this.widgets,
                c = a("raptor/widgets");
            b.forEach(function(a) {
                c.initWidget(a)
            });
            this.clearWidgets()
        }
    }
});
define.extend("raptor/widgets", function(h, n) {
    var r = h("raptor/logging").logger("raptor/widgets"),
        l = {},
        s = h("raptor"),
        o = Array.isArray,
        t = s.createError,
        p = h("raptor/widgets/Widget"),
        x = function(a) {
            var b = {};
            s.forEach(a, function(a) {
                b[a[0]] = {
                    target: a[1],
                    props: a[2]
                }
            }, this);
            return b
        },
        u = function() {};
    u.prototype = {
        _remove: function(a, b) {
            var d = this[b];
            o(d) ? this[b] = d.filter(function(b) {
                return b !== a
            }) : delete this[b]
        },
        _add: function(a, b, d) {
            var g = this[b];
            g ? o(g) ? g.push(a) : this[b] = [g, a] : this[b] = d ? [a] : a
        },
        getWidget: function(a) {
            return this[a]
        },
        getWidgets: function(a) {
            return (a = this[a]) ? o(a) ? a : [a] : []
        }
    };
    var w = function(a, b, d, g, i, q, f, m) {
        if (!h.exists(a)) throw t(Error('Unable to initialize widget of type "' + a + '". The class for the widget was not found.'));
        var c, e = h(a);
        r.debug('Creating widget of type "' + a + '" (' + b + ")");
        if (e.initWidget) g.elId = b, g.events = q, c = e, e.onReady || (e.onReady = n.onReady);
        else {
            var j = function() {},
                k;
            j.prototype = k = e.prototype;
            c = new j;
            p.makeWidget(c, k);
            c.registerMessages(["beforeDestroy", "destroy"], !1);
            (j = k.events || e.events) && c.registerMessages(j, !1);
            b && (c._id = b, c.el = c.getEl());
            e.getName || (e.getName = function() {
                return a
            });
            k.constructor = e;
            p.legacy && (c._parentWidget = f);
            q && (c._events = x(q));
            c.widgets = new u;
            l[b] = c;
            if (d && i) {
                var v;
                d.endsWith("[]") && (d = d.slice(0, -2), v = !0);
                c._assignedId = d;
                c._scope = i;
                b = l[i];
                if (!b) throw t(Error("Parent scope not found: " + i));
                b.widgets._add(c, d, v);
                p.legacy && (b[d] = c)
            }
        }
        return {
            widget: c,
            init: function() {
                var b = function() {
                    try {
                        c.initWidget ? c.initWidget(g) : e.call(c, g)
                    } catch (b) {
                        var d = 'Unable to initialize widget of type "' + a + "'. Exception: " +
                            b;
                        if (m) r.error(d, b);
                        else throw b;
                    }
                };
                if (!0 === c.initBeforeOnDomReady) b();
                else c.onReady(b)
            }
        }
    };
    h("raptor/pubsub").subscribe({
        "dom/beforeRemove": function(a) {
            (a = n.get(a.el.id)) && a.destroy({
                removeNode: !1,
                recursive: !0
            })
        },
        "raptor/renderer/renderedToDOM": function(a) {
            n.getWidgetsContext(a.context).initWidgets()
        }
    });
    return {
        initWidget: function(a) {
            var b = w(a.type, a.id, a.assignedId, a.config, a.scope ? a.scope.id : null, a.events);
            a.widget = b.widget;
            a.children.length && a.children.forEach(this.initWidget, this);
            b.init()
        },
        _serverInit: function(a) {
            var b =
                function(a, g) {
                    if (a)
                        for (var i = 0, h = a.length; i < h; i++) {
                            var f = a[i],
                                m = f[0],
                                c = f[1],
                                e = f[2] || {},
                                j = f[3],
                                k = f[4],
                                l = f[5] || {},
                                f = f.slice(6);
                            0 === j && (j = void 0);
                            0 === k && (k = void 0);
                            0 === e && (e = void 0);
                            m = w(m, c, k, e, j, l, g, 1);
                            f && f.length && b(f, m.widget);
                            m.init()
                        }
                };
            b(a)
        },
        get: function(a) {
            return l[a]
        },
        _remove: function(a) {
            delete l[a]
        }
    }
});
$rwidgets = function() {
    require("raptor/widgets")._serverInit(require("raptor").arrayFromArguments(arguments))
};
define("raptor/widgets/Widget", ["raptor"], function(g, h) {
    var k = h("raptor/listeners"),
        f = h("raptor/dom"),
        l = function(a, c, b) {
            var d = {
                    widget: a
                },
                j = a.getEl(),
                e = h("raptor/widgets"),
                g = a._assignedId;
            a.publish("beforeDestroy", d);
            k.unsubscribeFromAll(a);
            a.__destroyed = !0;
            if (j) {
                if (b) {
                    var i = function(a) {
                        f.forEachChildEl(a, function(a) {
                            if (a.id) {
                                var b = e.get(a.id);
                                b && l(b, !1, !1)
                            }
                            i(a)
                        })
                    };
                    i(j)
                }
                c && j.parentNode.removeChild(j)
            }
            e._remove(a._id);
            g && (c = e.get(a._scope)) && c.widgets._remove(a, g);
            a.publish("destroy", d)
        },
        e, i = function() {};
    i.makeWidget = function(a, c) {
        if (!a._isWidget)
            for (var b in e) c.hasOwnProperty(b) || (c[b] = e[b])
    };
    i.prototype = e = {
        _isWidget: !0,
        getObservable: function() {
            return this._observable || (this._observable = k.createObservable())
        },
        registerMessages: function(a, c) {
            this.getObservable().registerMessages.apply(this, arguments)
        },
        publish: function(a, c) {
            var b = this.getObservable();
            b.publish.apply(b, arguments);
            var d;
            if (this._events && (d = this._events[a])) d.props && (c = g.extend(c || {}, d.props)), h("raptor/pubsub").publish(d.target, c)
        },
        subscribe: function(a, c, b) {
            var d = this.getObservable();
            return d.subscribe.apply(d, arguments)
        },
        getElId: function(a) {
            return a ? this._id + "-" + a : this._id
        },
        getEl: function(a) {
            return 1 === arguments.length ? document.getElementById(this.getElId(a)) : this.el || document.getElementById(this.getElId())
        },
        getWidget: function(a) {
            return this.widgets.getWidget(a)
        },
        getWidgets: function(a) {
            return this.widgets.getWidgets(a)
        },
        destroy: function(a) {
            a = a || {};
            l(this, !1 !== a.removeNode, !1 !== a.recursive)
        },
        isDestroyed: function() {
            return this.__destroyed
        },
        _getRootEl: function() {
            var a = this.getEl();
            if (!a) throw g.createError(Error("Root element missing for widget of type " + this.constructor.getName()));
            return a
        },
        rerender: function(a, c) {
            var b = this.renderer,
                d = this.constructor.getName(),
                e = h("raptor/renderer"),
                f = this._getRootEl();
            b || (this.constructor.render ? b = this.constructor : d.endsWith("Widget") && (b = h.find(d.slice(0, -6) + "Renderer")));
            if (!b) throw g.createError(Error("Renderer not found for widget " + d));
            return e.render(b, a, c).replace(f)
        },
        detach: function() {
            f.detach(this._getRootEl())
        },
        appendTo: function(a) {
            f.appendTo(this._getRootEl(), a)
        },
        replace: function(a) {
            f.replace(this._getRootEl(), a)
        },
        replaceChildrenOf: function(a) {
            f.replaceChildrenOf(this._getRootEl(), a)
        },
        insertBefore: function(a) {
            f.insertBefore(this._getRootEl(), a)
        },
        insertAfter: function(a) {
            f.insertAfter(this._getRootEl(), a)
        },
        prependTo: function(a) {
            f.prependTo(this._getRootEl(), a)
        }
    };
    e.on = e.subscribe;
    return i
});
define("raptor/loader", ["raptor"], function(i, q) {
    var h = {},
        g = {},
        j = i.forEach,
        r = i.forEachEntry,
        k = q("raptor/listeners"),
        l = ["asyncStart", "asyncComplete", "success", "error", "complete"],
        m = function(a, c) {
            var b = k.createObservable(l, !0);
            a && ("function" === typeof a ? b.complete(a, c) : b.subscribe(a, c));
            return b
        },
        n = k.createObservable(),
        s = function(a, c) {
            var b = g[a];
            if (b) return b.success ? c.success(b) : c.error(b), c.complete(b), !0;
            if (b = h[a]) return c.asyncStart(b), j(l, function(b) {
                "asyncStart" !== b && n.subscribe(b + ":" + a, function(a) {
                    c.publish(b,
                        a)
                }, this, !0)
            }, this), !0;
            h[a] = b = {
                url: a,
                completed: !1
            };
            c.asyncStart(b);
            return !1
        },
        p = function(a, c, b) {
            var e = h[a];
            delete h[a];
            e.success = c;
            e.complete = !0;
            var f = function(o) {
                b[o](e);
                n.publish(o + ":" + a, e)
            };
            c ? (g[a] = e, f("success")) : f("error");
            f("asyncComplete");
            f("complete")
        },
        t = function(a, c) {
            return {
                success: function() {
                    p(a, !0, c)
                },
                error: function() {
                    p(a, !1, c)
                }
            }
        },
        v = function(a) {
            var c = [],
                b = {},
                e, f = {
                    _add: function(a, f, d, u) {
                        !e && !b[a] && (b[a] = 1, c.push(function(b) {
                            s(a, b) || d.call(u, f, t(a, b))
                        }))
                    },
                    isIncluded: function(a) {
                        return !!b[a]
                    },
                    setIncluded: function(a) {
                        b[a] = 1
                    },
                    add: function(b, c) {
                        var d = a["handle_" + b];
                        if (null == d) throw Error("Invalid type: " + b);
                        j(c, function(b) {
                            d.call(a, b, f)
                        })
                    },
                    execute: function(a) {
                        e = 1;
                        var b = [],
                            d = {
                                failed: b
                            };
                        c.length || (a.success(d), a.complete(d));
                        var h = 0,
                            g = !1,
                            i = m({
                                asyncStart: function() {
                                    g || (g = !0, a.asyncStart(d))
                                },
                                error: function(a) {
                                    b.push(a)
                                },
                                complete: function() {
                                    h++;
                                    h === c.length && ((d.success = !b.length) ? a.success(d) : a.error(d), g && a.asyncComplete(d), a.complete(d))
                                }
                            });
                        j(c, function(a) {
                            a(i)
                        });
                        return f
                    }
                };
            return f
        };
    return {
        isDownloaded: function(a) {
            return void 0 !==
                g[a]
        },
        setDownloaded: function(a) {
            a && (g[a] = {
                url: a,
                success: !0,
                complete: !0
            })
        },
        include: function(a, c, b) {
            var e = new v(this);
            this.beforeInclude && this.beforeInclude();
            r(a, function(a, b) {
                e.add(a, b)
            });
            return e.execute(m(c, b))
        }
    }
});
define.extend("raptor/loader", ["raptor"], function(e) {
    var d = !1,
        f = e.forEach;
    return {
        handle_js: function(a, b) {
            b._add(a.src || a.url || a, a, this.includeJSImpl, this)
        },
        handle_css: function(a, b) {
            b._add(a.href || a.url || a, a, this.includeCSSImpl, this)
        },
        includeJS: function(a, b, c) {
            return this.include({
                js: [a]
            }, b, c)
        },
        includeCSS: function(a, b, c) {
            return this.include({
                css: [a]
            }, b, c)
        },
        registerResources: function() {
            var a = [].slice,
                b = document.getElementsByTagName("script"),
                c = document.getElementsByTagName("link");
            (a = a.call(b).concat(a.call(c))) &&
            f(a, function(a) {
                this.setDownloaded(a.src || a.href)
            }, this)
        },
        beforeInclude: function() {
            d || this.registerResources();
            d = !0
        }
    }
});
define.extend("raptor/loader", function(f) {
    var h = f("raptor/logging").logger("raptor/loader"),
        b = f("raptor"),
        i = b.forEach,
        j = b.extend,
        b = function(d, a) {
            if (!f.exists(d) && !a.isIncluded(d)) {
                a.setIncluded(d);
                var c = $rget("loaderMeta", d);
                if (c) a.add("requires", c.requires), a.add("js", c.js), a.add("css", c.css);
                else throw Error('Dependencies missing: "' + d + '"');
            }
        };
    return {
        handle_require: b,
        handle_requires: b,
        load: function(d, a, c) {
            var b, e, g = "function" === typeof a;
            if (b = g ? a : a.success) e = "function" !== typeof a ? j({}, a) : {}, e.success =
                function() {
                    var a = [];
                    try {
                        i(d, function(b) {
                            a.push(f.exists(b) ? f(b) : null)
                        })
                    } catch (g) {
                        h.error(g);
                        e.error && e.error.call(c);
                        return
                    }
                    b.apply(c, a)
                }, g && (e.error = function() {
                    b.call(c)
                });
            return this.include({
                requires: d
            }, e || a, c)
        }
    }
});
(function() {
    var e = require("raptor"),
        f, j = e.global,
        n = require("raptor/logging"),
        d = j.define || e.createDefine();
    j.raptor = f = e.extend({}, e);
    var o = /^(arrays|json.*|debug|listeners|loader.*|locale.*|logging|pubsub|objects|strings|templating.*|widgets)$/,
        g = function(a) {
            a = e.normalize(a);
            return o.test(a) ? "raptor/" + a : a
        },
        h = function(a, b, c, h) {
            var i = a.length - 1,
                g = a[i],
                k = a[0];
            "string" != typeof a[0] && (k = "(anonymous)");
            "function" == typeof g && (a[i] = function() {
                var a = g(f),
                    c = a;
                if (b || "function" == typeof a) b = 1, "function" != typeof a &&
                    (c = a.init || function() {}, e.extend(c.prototype, a), a = c), c = a.prototype;
                if (!h) {
                    var i = k,
                        d;
                    c.logger = function() {
                        return d ? d : d = n.logger(i)
                    }
                }
                b && (a.getName = function() {
                    return k
                }, c.init = c.constructor = a);
                return a
            });
            return b ? d.Class.apply(d, a) : c ? d.Enum.apply(d, a) : d.apply(j, a)
        },
        l = function() {
            return h(arguments)
        },
        m = function(a) {
            return e.find(g(a))
        };
    e.extend(f, {
        require: function(a, b, c, d) {
            return d ? f.find(a) : e.require("string" === typeof a ? g(a) : a.map(g), b, c)
        },
        find: m,
        load: m,
        define: l,
        defineModule: l,
        defineClass: function() {
            return h(arguments,
                1)
        },
        defineEnum: function() {
            return h(arguments, 0, 1)
        },
        defineMixin: function() {
            return h(arguments, 0, 0, 1)
        },
        extend: function(a, b) {
            if ("string" === typeof a) {
                if ("function" === typeof b) var c = b,
                    b = function(a, b) {
                        "function" === typeof b && (b = b.prototype);
                        return c(f, b)
                    };
                d.extend(a, b)
            } else return e.extend(a, b)
        },
        inherit: function(a, b, c) {
            e.inherit(a, "string" === typeof b ? f.require(b) : b, c)
        },
        isString: function(a) {
            return "string" == typeof a
        },
        isNumber: function(a) {
            return "number" === typeof a
        },
        isFunction: function(a) {
            return "function" ==
                typeof a
        },
        isObject: function(a) {
            return "object" == typeof a
        },
        isBoolean: function(a) {
            return "boolean" === typeof a
        },
        isServer: function() {
            return !this.isClient()
        },
        isClient: function() {
            return void 0 !== typeof window
        },
        isArray: Array.isArray
    })
})();
define.Class("ebay/context/Context", ["raptor"], function(c, a) {
    var b = a("raptor/client/features/Features");
    return function(a) {
        c.extend(this, a);
        b.call(b, this.features)
    }
});
define.Class("raptor/client/features/Features", ["raptor"], function(b) {
    var c = function(a) {
        b.extend(this.supported, a)
    };
    b.extend(c, {
        supported: {},
        supports: function(a) {
            return this.supported[a]
        }
    });
    return c
});
define("ebay/errors/Errors", function(g) {
    var f = !1,
        b = g("ebay/context/Context"),
        c = [];
    return {
        init: function() {
            f || (window.onerror = function(a, h, d) {
                c.push({
                    message: a,
                    url: h,
                    linenumber: d
                });
                a = !0;
                b.errors && b.errors.enabled && (a = !b.errors.enabled);
                return a
            }, f = !0)
        },
        hasErrors: function() {
            return 0 < c.length
        },
        getErrorLength: function() {
            return c.length
        },
        getErrors: function() {
            for (var a = [], b = c.length, d = 0; d < b; d++) {
                var e = c[d];
                0 < a.length && a.push("|");
                a.push("js-err-line-" + e.linenumber + "-msg-" + e.message + "-url-" + e.url)
            }
            return a.join("")
        }
    }
});
require("ebay.errors.Errors").init();
define("ebay/legacy/adaptor-utils", function() {
    var i = {},
        f;
    return f = {
        extend: raptor.extend,
        inherit: raptor.inherit,
        isArray: Array.isArray,
        alias: function(a, b) {
            var d = b.lastIndexOf("."),
                e = b.substring(0, d),
                c = i[e],
                b = b.substring(d + 1);
            if (c) return c[b] = a;
            for (var d = e ? e.split(".") : [], f = d.length, h, c = raptor.global, g = 0; g < f && c[h = d[g]]; g++) c = c[h];
            for (; g < f;) c = c[h = d[g++]] = {};
            i[e] = c;
            return c[b] = a
        },
        elem: function(a) {
            return "string" == typeof a ? $(document.getElementById(a.match(/^#?(.*)/)[1]) || a) : a && a.jquery ? a : $(a)
        },
        bind: function(a,
            b, d, e, c) {
            return (b = f.elem(b)) && b.length ? b.bind(d, c, $.proxy(e, a)) : b
        },
        unbind: function(a, b, d, e) {
            return (b = f.elem(b)) && b.length ? b.unbind(d, e) : b
        },
        log: function() {},
        isNull: function(a) {
            return null === a
        },
        isEmpty: function(a) {
            for (var b in a) return !1;
            return !0
        },
        isNode: function(a) {
            return null != a && "undefined" !== typeof a.nodeType
        },
        isDefined: function(a) {
            return "undefined" !== typeof a
        },
        isUndefined: function(a) {
            return "undefined" === typeof a
        }
    }
});
raptor.extend(raptor, require("ebay/legacy/adaptor-utils"));
define.Class("Base64", ["raptor"], function(j) {
    var c = function() {};
    j.extend(c, {
        decode: function(a) {
            var h = a.length;
            if (0 >= h || /[^A-Za-z0-9+/=*]/.exec(a)) return "";
            for (var d = 0, h = a.length, b = "", f, e, g, i, c; d < h;) f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(d++)), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(d++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(d++)), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(d++)),
                f = f << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, c = (g & 3) << 6 | i, b += String.fromCharCode(f), 64 <= g || (b += String.fromCharCode(e)), 64 <= i || (b += String.fromCharCode(c));
            return b
        }
    });
    return c
});
require("Base64");
define.Class("Utf8", ["raptor"], function() {
    var a = function() {};
    a.decode = function(a) {
        return decodeURIComponent(escape(a))
    };
    return a
});
define("ebay/cookies", function() {
    var j = {
            COOKIELET_DELIMITER: "^",
            NAME_VALUE_DELIMITER: "/",
            escapedValue: !0
        },
        k = {
            COOKIELET_DELIMITER: "^",
            NAME_VALUE_DELIMITER: "/",
            bUseExp: !0,
            startDelim: "b"
        },
        i = {
            COOKIELET_DELIMITER: "^",
            NAME_VALUE_DELIMITER: "=",
            escapedValue: !0,
            startDelim: "^"
        },
        g = {
            reg: ["dp1", "reg"],
            recent_vi: ["ebay", "lvmn"],
            ebaysignin: ["ebay", "sin"],
            p: ["dp1", "p"],
            etfc: ["dp1", "etfc"],
            keepmesignin: ["dp1", "kms"],
            ItemList: ["ebay", "wl"],
            BackToList: ["s", "BIBO_BACK_TO_LIST"]
        },
        l = {
            r: j,
            dp1: k,
            npii: k,
            ebay: i,
            reg: i,
            apcCookies: i,
            ds2: {
                COOKIELET_DELIMITER: "^",
                NAME_VALUE_DELIMITER: "/"
            }
        };
    return {
        readCookie: function(a, b) {
            var d = this.readCookieObj(a, b).value;
            return d ? decodeURIComponent(d) : ""
        },
        createDefaultCookieBean: function(a, b) {
            var d = {};
            d.name = a;
            d.cookieletname = b;
            d.value = "";
            d.maxage = 0;
            d.rawcookievalue = "";
            d.mode = "";
            return d
        },
        readCookieObj: function(a, b) {
            var d = this.createDefaultCookieBean(a, b);
            this.update();
            this.checkConversionMap(d);
            d.rawcookievalue = this.aCookies[d.name];
            !d.name || !d.rawcookievalue ? d.value = "" : d.cookieletname ? this.readCookieletInternal(d) :
                this.readCookieInternal(d);
            var c = b && b.match(/guid$/),
                e = "undefined" != typeof d ? d : "";
            e && (c && 32 < d.value.length) && (d.value = d.value.substring(0, 32));
            return e
        },
        checkConversionMap: function(a) {
            var b = g[a.name];
            b && (a.mode = this.getMode(a.name), a.name = b[0], a.cookieletname = b[1])
        },
        readCookieInternal: function(a) {
            a.value = a.rawcookievalue;
            return a
        },
        readCookieletInternal: function(a) {
            var b = this.getCookielet(a.name, a.cookieletname, a.rawcookievalue),
                d = this.getFormat(a.name);
            b && d.bUseExp && (d = b, b = b.substring(0, b.length -
                8), 8 < d.length && (a.maxage = d.substring(d.length - 8)));
            a.value = b;
            "10" == a.mode && (a.value = a.rawcookievalue);
            return a
        },
        readMultiLineCookie: function(a, b) {
            if (!a || !b) return "";
            var d, c = "",
                e = g[a];
            e && (d = this.readCookieObj(e[0], e[1]).value || "");
            d && (c = this.getCookielet(a, b, d) || "");
            return "undefined" != typeof c ? c : ""
        },
        writeCookie: function(a, b, d) {
            var c = g[a];
            c ? this.writeCookielet(c[0], c[1], b, d) : (c = this.getFormat(a), b && c.escapedValue && (b = encodeURIComponent(b)), this.writeRawCookie(a, b, d))
        },
        writeRawCookie: function(a, b, d) {
            if (a &&
                void 0 !== b && (isNaN(b) && 4E3 > b.length || 4E3 > (b + "").length)) {
                "number" == typeof d && (d = this.getExpDate(d));
                var c = d ? new Date(d) : new Date(this.getExpDate(730)),
                    e = this.getFormat(a),
                    f = document.domain;
                if (-1 == f.indexOf(this.sCookieDomain)) {
                    var g = f.indexOf(".ebay.");
                    0 < g && (this.sCookieDomain = f.substring(g))
                }
                document.cookie && (document.cookie = a + "=" + (b || "") + (d || e.bUseExp ? "; expires=" + c.toGMTString() : "") + "; domain=" + this.sCookieDomain + "; path=/")
            }
        },
        writeCookieEx: function(a, b, d) {
            this.writeCookie(a, b, this.getExpDate(d))
        },
        writeCookielet: function(a, b, d, c, e) {
            a && b && (this.update(), this.getFormat(a).bUseExp && d && ("number" == typeof c && (c = this.getExpDate(c)), c = c ? new Date(c) : new Date(this.getExpDate(730)), c = Date.UTC(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate(), c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds()), c = Math.floor(c / 1E3), d += parseInt(c, 10).toString(16)), b = this.createCookieValue(a, b, d), this.writeRawCookie(a, b, e))
        },
        writeMultiLineCookie: function(a, b, d, c, e) {
            this.update();
            if (b = this.createCookieValue(a, b, d))(a = g[a]) &&
                this.writeCookielet(a[0], a[1], b, c, e)
        },
        getBitFlagOldVersion: function(a, b) {
            var d = parseInt(a, 10),
                c = d.toString(2);
            return "1" == (d ? c.charAt(c.length - b - 1) : "") ? 1 : 0
        },
        setBitFlagOldVersion: function(a, b, d) {
            var c = "",
                e;
            (a = parseInt(a + "", 10)) && (c = a.toString(2));
            a = c.length;
            if (a < b) {
                e = b - a;
                for (a = 0; a <= e; a++) c = "0" + c
            }
            b = c.length - b - 1;
            return parseInt(c.substring(0, b) + d + c.substring(b + 1), 2)
        },
        getBitFlag: function(a, b) {
            if (null != a && 0 < a.length && "#" == a.charAt(0)) {
                var d = b % 4,
                    c = a.length - (Math.floor(b / 4) + 1),
                    c = parseInt(a.substring(c, c +
                        1), 16),
                    d = 1 << d;
                return (c & d) == d ? 1 : 0
            }
            return this.getBitFlagOldVersion(a, b)
        },
        setBitFlag: function(a, b, d) {
            if (null != a && 0 < a.length && "#" == a.charAt(0)) {
                var c = a.length,
                    e = b % 4,
                    b = Math.floor(b / 4) + 1;
                if (c <= b) {
                    if (1 != d) return a;
                    for (var f = b - c + 1, a = a.substring(1, c); 0 < f;) a = "0" + a, f--;
                    a = "#" + a;
                    c = a.length
                }
                b = c - b;
                f = parseInt(a.substring(b, b + 1), 16);
                e = 1 << e;
                f = 1 == d ? f | e : f & ~e;
                return a = a.substring(0, b) + f.toString(16) + a.substring(b + 1, c)
            }
            return 31 < b ? a : this.setBitFlagOldVersion(a, b, d)
        },
        createCookieValue: function(a, b, d) {
            var c = g[a],
                e = this.getFormat(a),
                f = this.getMode(a),
                a = c && ("00" == f || "01" == f) ? this.readCookieObj(c[0], c[1]).value || "" : this.aCookies[a] || "";
            if (e) {
                a = this.getCookieletArray(a, e);
                a[b] = d;
                var b = "",
                    h;
                for (h in a) a.hasOwnProperty(h) && (b += h + e.NAME_VALUE_DELIMITER + a[h] + e.COOKIELET_DELIMITER);
                b && e.startDelim && (b = e.startDelim + b);
                a = b;
                e.escapedValue && (a = encodeURIComponent(a))
            }
            return a
        },
        update: function() {
            var a = document.cookie.split("; ");
            this.aCookies = {};
            for (var b = /^"(.*)"$/, d = 0; d < a.length; d++) {
                var c = a[d].split("="),
                    e = this.getFormat(c[0]),
                    f = c[1];
                (e =
                    e.startDelim) && (f && 0 === f.indexOf(e)) && (c[1] = f.substring(e.length, f.length));
                c[1] && c[1].match(b) && (c[1] = c[1].substring(1, c[1].length - 1));
                this.aCookies[c[0]] = c[1]
            }
        },
        getCookielet: function(a, b, d) {
            a = this.getFormat(a);
            return this.getCookieletArray(d, a)[b] || ""
        },
        getFormat: function(a) {
            return l[a] || j
        },
        getCookieletArray: function(a, b) {
            var d = [],
                c = a || "";
            b.escapedValue && (c = decodeURIComponent(c));
            for (var c = c.split(b.COOKIELET_DELIMITER), e = 0; e < c.length; e++) {
                var f = c[e].indexOf(b.NAME_VALUE_DELIMITER);
                0 < f && (d[c[e].substring(0,
                    f)] = c[e].substring(f + 1))
            }
            return d
        },
        getExpDate: function(a) {
            var b;
            "number" == typeof a && 0 <= a && (b = new Date, b.setTime(b.getTime() + 864E5 * a), b = b.toGMTString());
            return b
        },
        getMode: function(a) {
            var b = this.readCookieObj("ebay", "cv").value,
                d;
            if (!(a in g)) return null;
            if (!b) return "";
            if (0 === b) return "00";
            if (b && "0" != b) {
                if (-1 != b.indexOf("."))
                    for (var c = b.split("."), b = 0; b < c.length; b++) d = parseInt(c[b], 16).toString(2) + d;
                else d = parseInt(b, 16).toString(2);
                var b = 0,
                    c = d.length,
                    e, f;
                for (f in g) {
                    e = c - 2 * (b + 1);
                    e = d.substring(e, e + 2).toString(10);
                    e = !e ? "00" : e;
                    if (a == f) return 1 == e.length ? "0" + e : e;
                    b++
                }
            }
            return null
        },
        getMulti: function(a, b, d) {
            var c = "",
                e;
            for (e = 0; e < d; e++) c = this.getBitFlag(a, b + e) + c;
            return parseInt(c, 2)
        },
        setMulti: function(a, b, d, c) {
            var e = 0,
                f, c = c.toString(2).substring(0, d);
            f = c.length;
            if (f < d) {
                d -= f;
                for (e = 0; e < d; e++) c = "0" + c;
                f += d
            }
            for (e = 0; e < f; e++) a = this.setBitFlag(a, b + e, c.substring(f - e - 1, f - e));
            return a
        },
        setJsCookie: function() {
            this.writeCookielet("ebay", "js", "1")
        }
    }
});
"undefined" !== typeof raptor && raptor.alias(require("ebay/cookies"), "raptor.dom.Cookie");
define("browser/layout", ["raptor", "ebay.cookies"], function(g, d) {
    var f = [25, 26, 40, 41],
        b = [{
            name: "sz760",
            minWidth: 760,
            maxWidth: 940,
            bits: 1
        }, {
            name: "sz940",
            minWidth: 940,
            maxWidth: 1200,
            bits: 0
        }, {
            name: "sz1200",
            minWidth: 1200,
            maxWidth: 1200,
            bits: 5
        }],
        c;
    c = {
        processLayout: function() {
            var a = this.getComputedLayout($(window).width());
            a != this.current && (this.setLayout(a), this.current = a)
        },
        setLayout: function(a) {
            for (var b = d.readCookie("dp1", "pbf") || "#", e = 0, a = a.bits, c = f.length; e < c; e++, a >>= 1) b = d.setBitFlag(b, f[e], a & 1);
            d.writeCookielet("dp1",
                "pbf", b)
        },
        getComputedLayout: function() {
            var a = $(window).width(),
                c = null;
            return c = a < b[1].minWidth ? b[0] : a < b[2].minWidth ? b[1] : b[2]
        }
    };
    return {
        process: function() {
            return c.processLayout()
        }
    }
});
define.Class("ebay/legacy/utils/Script", ["ebay/legacy/adaptor-utils"], function(b) {
    var c = function(a, d, b) {
        this.scope = a;
        this.script = d;
        this.handler = b;
        this.head = $("head", document);
        if (!c.getScript(d.src)) {
            if (d.src) return this.loadScript(d);
            d.text && c.evalScript(d.text)
        }
        this.onDone()
    };
    b.extend(c, {
        Scripts: {},
        addScripts: function() {
            for (var a = $("script", document), d = 0, b = a.length; d < b; d++) this.addScript(a[d])
        },
        addScript: function(a) {
            var b = a.type,
                c = this.getFile(a.src);
            return "text/javascript" == b && c ? this.Scripts[c] =
                a : null
        },
        getScript: function(a) {
            return (a = this.getFile(a)) ? this.Scripts[a] : null
        },
        getFile: function(a) {
            return a ? a.substring(a.lastIndexOf("/") + 1) : null
        },
        evalScript: function(a) {
            window.execScript ? window.execScript(a) : window.eval.call(window, a)
        }
    });
    b.extend(c.prototype, {
        loadScript: function(a) {
            a = $uri(a.src);
            $.browser.safari && 525.28 > $.browser.version && a.appendParam("_ts", (new Date).valueOf().toString());
            this.elem = $("<script/>").attr({
                type: "text/javascript"
            });
            $.browser.msie ? b.bind(this, this.elem, "readystatechange",
                this.onChange) : b.bind(this, this.elem, "load error", this.onLoaded);
            b.log("debug", "Script.loadScript", a.getUrl());
            this.head[0].appendChild(this.elem[0]);
            this.elem[0].src = a.getUrl()
        },
        onChange: function(a) {
            if (this.elem[0].readyState.match(/loaded/)) this.onLoaded(a)
        },
        onLoaded: function() {
            var a = this.elem;
            c.addScript(a[0]);
            b.unbind(this, a);
            b.log("debug", "Script.onLoaded", a[0].src);
            this.onDone()
        },
        onDone: function() {
            var a = this.handler;
            a && a.apply(this.scope, [this])
        }
    });
    c.addScripts();
    b.bind(c, window, "load", c.addScripts);
    return c
});
require("ebay/legacy/utils/Script");
define.Class("ebay/legacy/utils/Style", ["ebay/legacy/adaptor-utils"], function(d) {
    var c = function(a, b, f) {
        this.scope = a;
        this.style = b;
        this.handler = f;
        this.head = $("head", document);
        this.sheets = document.styleSheets;
        if (!c.getStyle(b.href)) {
            if (b.href) return this.loadStyle(b);
            b.rules && c.loadRules(b.rules)
        }
        this.onDone()
    };
    d.extend(c, {
        Styles: {},
        addStyles: function() {
            for (var a = $("link", document), b = 0, c = a.length; b < c; b++) this.addStyle(a[b])
        },
        addStyle: function(a) {
            var b = this.getFile(a.href);
            return b ? this.Styles[b] = a : null
        },
        getStyle: function(a) {
            return (a = this.getFile(a)) ? this.Styles[a] : null
        },
        getFile: function(a) {
            return a ? a.substring(a.lastIndexOf("/") + 1) : null
        },
        loadRules: function(a) {
            var b = $("head", document),
                b = $("<style/>").attr({
                    type: "text/css"
                }).appendTo(b);
            b[0].styleSheet ? b[0].styleSheet.cssText = a : b.html(a)
        }
    });
    d.extend(c.prototype, {
        retries: 20,
        loadStyle: function(a) {
            var b = $uri(a.href);
            $.browser.safari && 525.28 > $.browser.version && b.appendParam("_ts", (new Date).valueOf().toString());
            var c = a.type || "text/css",
                a = a.rel || "stylesheet";
            this.elem = $("<link/>").attr({
                type: c,
                rel: a
            }).appendTo(this.head);
            d.log("debug", "Style.loadStyle", b.getUrl());
            $.browser.msie ? d.bind(this, this.elem, "load", this.onLoaded) : window.setTimeout(this.onLoaded.bind(this), 10);
            this.elem[0].href = b.getUrl()
        },
        onLoaded: function() {
            for (var a = this.elem[0], b = this.sheets, c = 0, g = this.sheets.length; c < g; c++) {
                var e = b[c].href;
                if (e && 0 <= a.href.indexOf(e)) return window.setTimeout(this.onReady.bind(this), 10)
            }
            d.log("debug", "Style.onLoaded", this.retries);
            return this.retries-- ? window.setTimeout(this.onLoaded.bind(this),
                10) : window.setTimeout(this.onReady.bind(this), 0)
        },
        onReady: function() {
            var a = this.elem;
            c.addStyle(a[0]);
            d.unbind(this, a);
            d.log("debug", "Style.onReady", a[0].href);
            this.onDone()
        },
        onDone: function() {
            var a = this.handler;
            a && a.apply(this.scope, [this])
        }
    });
    c.addStyles();
    d.bind(c, window, "load", c.addStyles);
    return c
});
require("ebay/legacy/utils/Style");
define.Class("ebay/legacy/utils/Loader", ["ebay/legacy/adaptor-utils"], function(d, e) {
    var f = e("ebay/legacy/utils/Style"),
        g = e("ebay/legacy/utils/Script"),
        c = function(a, b) {
            d.isArray(a) ? this.load(a, b) : this.parse(a, b)
        };
    d.extend(c.prototype, {
        loaded: 0,
        parse: function(a, b) {
            var c = [],
                d = a.jquery ? $("<div/>").append(a) : this.html(a);
            $("link,style,script[src]", d).each(function() {
                var a = this.tagName,
                    b = $(this);
                a.match(/link/i) ? c.push({
                        type: "text/css",
                        href: this.href
                    }) : a.match(/style/i) ? c.push({
                        type: "text/css",
                        rules: b.html()
                    }) :
                    a.match(/script/i) && c.push({
                        type: "text/javascript",
                        src: this.src
                    });
                b.remove()
            });
            this.fragment = d.children();
            this.load(c, b)
        },
        html: function(a) {
            var b = document.createElement("div");
            b.innerHTML = "div<div>" + a + "</div>";
            return $(b.lastChild)
        },
        load: function(a, b) {
            this.resources = a;
            this.handler = b;
            this.next()
        },
        next: function() {
            var a = this.resources[this.loaded++];
            a && a.type.match(/css/) ? new f(this, a, this.next) : a && a.type.match(/javascript/) ? new g(this, a, this.next) : this.handler && this.handler(this)
        }
    });
    d.extend(c, {
        load: function(a,
            b) {
            return new c(a, b)
        }
    });
    $load = c.load.bind(c);
    d.bind(c, document, "ready", function() {
        var a = [];
        $("script[type*=defer]", document).each(function() {
            a.push({
                type: "text/javascript",
                src: this.src,
                text: this.text
            })
        });
        a.length && c.load(a)
    });
    return c
});
require("ebay/legacy/utils/Loader");
define.Class("ebay/legacy/utils/Uri", ["ebay/legacy/adaptor-utils"], function(j) {
    var d = function(a, c) {
            for (var b = document.getElementsByTagName("meta"), e = 0, d = b.length; e < d; e++)
                if (b[e].getAttribute(a) == c) return b[e];
            return null
        },
        k = (d = (d = d("http-equiv", "Content-Type") || d("httpEquiv", "Content-Type")) ? d.getAttribute("content") : null) && d.match(/utf/gi) ? encodeURI : window.escape,
        l = d && d.match(/utf/gi) ? decodeURI : window.unescape,
        g = d && d.match(/utf/gi) ? encodeURIComponent : window.escape,
        i = d && d.match(/utf/gi) ? decodeURIComponent :
        window.unescape,
        m = /(([^:]*):\/\/([^:/?]*)(:([0-9]+))?)?([^?#]*)([?]([^#]*))?(#(.*))?/,
        f = function(a) {
            this.params = {};
            a = a.match(m);
            null != a && (this.protocol = this.match(a, 2), this.host = this.match(a, 3), this.port = this.match(a, 5), this.href = this.match(a, 6), this.query = this.match(a, 8), this.href.match(/eBayISAPI.dll/i) ? this.decodeIsapi(this.query) : this.decodeParams(this.query), this.href = l(this.href), this.hash = this.match(a, 10))
        };
    j.extend(f.prototype, {
        match: function(a, c) {
            return a.length > c && a[c] ? a[c] : ""
        },
        decodeIsapi: function(a) {
            a =
                a ? a.split("&") : [];
            this.isapi = a.shift();
            this.query = a.join("&");
            this.decodeParams(this.query)
        },
        appendParam: function(a, c) {
            var b = this.params;
            null == b[a] ? b[a] = c : "object" == typeof b[a] ? b[a].push(c) : b[a] = [b[a], c]
        },
        appendParams: function(a) {
            for (var c in a) {
                var b = a[c];
                if ("object" != typeof b) this.appendParam(c, b);
                else
                    for (var e = 0; e < b.length; e++) this.appendParam(c, b[e])
            }
        },
        decodeParams: function(a) {
            for (var a = a ? a.split("&") : [], c = 0; c < a.length; c++) {
                var b = a[c].split("="),
                    e = i(b[0]),
                    b = 1 < b.length ? i(b[1].replace(/\+/g, "%20")) :
                    "";
                e && this.appendParam(e, b)
            }
        },
        encodeParam: function(a, c) {
            var b = g(a);
            return c ? b.concat("=", g(c)) : b
        },
        encodeParams: function(a) {
            var c = [],
                a = a ? a : this.params,
                b;
            for (b in a)
                if (a.hasOwnProperty(b))
                    if ("object" != typeof a[b]) c.push(this.encodeParam(b, a[b]));
                    else
                        for (var e = a[b], e = "undefined" !== typeof e ? e.length : 0, d = 0; d < e; d++) c.push(this.encodeParam(b, a[b][d]));
            return c.join("&")
        },
        decodeForm: function(a) {
            for (var a = a.elements, c = {}, b = 0, e = a.length; b < e; b++) delete this.params[a[b].name];
            b = 0;
            for (e = a.length; b < e; b++) {
                var d =
                    a[b];
                if (!d.disabled) {
                    var f = d.type,
                        h = d.name,
                        g = d.value;
                    f.match(/text|hidden|textarea|password|file/) ? this.appendParam(h, g) : f.match(/radio|checkbox/) && d.checked ? this.appendParam(h, g) : f.match(/select-one|select-multiple/) && this.appendSelect(d);
                    c[h] = this.params[h]
                }
            }
            return c
        },
        appendSelect: function(a) {
            for (var c = a.options, b = 0, d = c.length; b < d; b++) c[b].selected && this.appendParam(a.name, c[b].value)
        },
        getUrl: function() {
            var a = this.protocol ? this.protocol.concat("://") : "";
            this.host && (a = a.concat(this.host));
            this.port &&
                (a = a.concat(":", this.port));
            this.href && (a = a.concat(k(this.href)));
            this.isapi && (a = a.concat("?", this.isapi));
            var c = this.encodeParams(this.params);
            c && (a = a.concat(this.isapi ? "&" : "?", c));
            this.hash && (a = a.concat("#", this.hash));
            return a
        }
    });
    $uri = function(a) {
        return new f(a)
    };
    return f
});
require("ebay/legacy/utils/Uri");
define.Class("ebay/profiler/Profiler", ["ebay/legacy/adaptor-utils"], function(f, h) {
    var d = h("ebay/cookies"),
        c = function() {};
    f.extend(c, {
        getParam: function(b) {
            return this.beacon.params[b]
        },
        addParam: function(b, a) {
            b && (this.beacon.params[b] = a)
        },
        updateLoad: function() {
            if ("undefined" != typeof oGaugeInfo && !0 === oGaugeInfo.ld) {
                var b = oGaugeInfo,
                    a = (new Date).getTime();
                b.wt = a;
                b.ex3 = a;
                b.ct21 = a - b.iST
            }
        },
        send: function(b) {
            if ("undefined" !== typeof oGaugeInfo) {
                var a = oGaugeInfo,
                    c = oGaugeInfo.deferExecInMs || 0;
                !1 === a.ld ? (this.addParam("ex2",
                    (new Date).getTime() - a.iST), this.internal()) : (1 == a.bf ? this.addParam("ex1", "1") : (this.addParam("ct21", a.ct21), "undefined" != typeof a.iLoadST && this.addParam("ctb", a.iLoadST - a.iST), "undefined" != typeof a.st1a && this.addParam("st1a", a.st1a), "undefined" != typeof a.aChunktimes && 0 < a.aChunktimes.length && (this.addParam("jslcom", a.aChunktimes.length), this.addParam("jseo", a.aChunktimes[0]), 1 < a.aChunktimes.length && this.addParam("jsllib1", a.aChunktimes[1]), 2 < a.aChunktimes.length && this.addParam("jsllib2", a.aChunktimes[2]),
                    3 < a.aChunktimes.length && this.addParam("jsllib3", a.aChunktimes[3]), 4 < a.aChunktimes.length && this.addParam("jslpg", a.aChunktimes[4]), 5 < a.aChunktimes.length && this.addParam("jslss", a.aChunktimes[5]), 6 < a.aChunktimes.length && this.addParam("jslsys", a.aChunktimes[6]))), 1 == b ? (a.wt = (new Date).getTime() - a.wt, this.addParam("sgwt", a.wt)) : 0 < c ? (a.wt = (new Date).getTime() - a.wt, this.addParam("sgwt", a.wt), this.addParam("i_30i", a.wt)) : a.wt = 0, 12E5 > a.wt && (0 == b ? setTimeout(this.internal, 0) : this.internal()))
            }
        },
        internal: function() {
            if ("undefined" !==
                typeof oGaugeInfo) {
                var b = oGaugeInfo;
                if (!0 !== b.sent) {
                    b.sent = !0;
                    try {
                        var a = h("ebay/errors/Errors");
                        a.hasErrors() && (c.addParam("sgbld", a.getErrorLength()), c.addParam("emsg", a.getErrors()))
                    } catch (d) {}
                    window.performance && window.performance.timing && (a = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart, 0 < a && c.addParam("i_nve2elc", a));
                    a = new Image;
                    1 == b.bf && c.addParam("st1", "");
                    a.src = c.beacon.getUrl()
                }
            }
        },
        onLoad: function() {
            var b = d.readCookie("ebay", "sbf");
            d.writeCookielet("ebay",
                "sbf", d.setBitFlag(b, 20, 1));
            if ("undefined" != typeof oGaugeInfo) {
                oGaugeInfo.ld = !0;
                this.updateLoad();
                var b = navigator.userAgent,
                    a = 0;
                "undefined" !== typeof oGaugeInfo.deferExecInMs && null !== oGaugeInfo.deferExecInMs && (a = oGaugeInfo.deferExecInMs);
                if (0 < b.indexOf("Firefox/") || 0 < b.indexOf("Safari") && 0 > b.indexOf("Chrome")) {
                    var c = this;
                    window.setTimeout(function() {
                        c.send(0)
                    }, a)
                }
            }
        },
        onBeforeUnload: function() {
            d.writeCookielet("ds2", "ssts", (new Date).getTime());
            this.send(1)
        },
        onUnload: function() {}
    });
    if ("undefined" != typeof oGaugeInfo) {
        var e =
            oGaugeInfo;
        c.beacon = $uri(oGaugeInfo.sUrl);
        var g = d.readCookie("ebay", "sbf"),
            i = g ? d.getBitFlag(g, 20) : 0;
        d.writeCookielet("ebay", "sbf", d.setBitFlag(g, 20, 1));
        e.ut = d.readCookie("ds2", "ssts");
        e.bf = i;
        e.sent = !1;
        e.ld = !1;
        e.wt = 0;
        e.ex3 = 0;
        e.ct21 = 0
    }
    window.jQuery && (f.bind(c, window, "load", c.onLoad), f.bind(c, window, "beforeunload", c.onBeforeUnload), f.bind(c, window, "unload", c.onUnload));
    return c
});
require("ebay/profiler/Profiler");
define.Class("ebay/profiler/Performance", ["ebay/legacy/adaptor-utils"], function(g, h) {
    var c = h("ebay/profiler/Profiler"),
        f = function() {};
    g.extend(f, {
        fpt: null,
        onLoad: function() {
            var d = window,
                a = d.performance.timing || d.msPerformance.timing || d.webkitPerformance.timing || d.mozPerformance.timing,
                e = (new Date).getTime() - a.navigationStart;
            c.addParam("ex3", e);
            e = (new Date).getTime() - a.responseStart;
            c.addParam("jseaa", e);
            a.secureConnectionStart && (e = a.connectEnd - a.secureConnectionStart, 0 < e && c.addParam("i_ssl", e));
            e = a.responseStart - a.navigationStart;
            c.addParam("jseap", e);
            c.addParam("ct1chnk", a.domComplete - a.responseStart);
            c.addParam("jsljgr3", a.domainLookupEnd - a.domainLookupStart);
            c.addParam("svo", a.connectEnd - a.connectStart);
            e = a.responseStart - a.requestStart;
            c.addParam("jsljgr1", e);
            c.addParam("slo", a.responseEnd - a.responseStart);
            var b;
            if (a.msFirstPaint) b = a.msFirstPaint - a.responseStart;
            else if (d.chrome && d.chrome.loadTimes && (d = d.chrome.loadTimes())) b = d.firstPaintTime + "", b = b.split(".")[0], b = parseInt(b, 10), ltsltsec =
                d.startLoadTime + "", ltsltsec = ltsltsec.split(".")[0], ltsltsec = parseInt(ltsltsec, 10), b -= ltsltsec, b *= 1E3;
            0 < b && c.addParam("i_firstpaint", b)
        }
    });
    var i = window.oGaugeInfo;
    window.jQuery && i && window.performance && g.bind(f, window, "load", f.onLoad);
    return f
});
require("ebay/profiler/Performance");