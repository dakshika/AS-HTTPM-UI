window.___jsl = window.___jsl || {};
(window.___jsl.ci = window.___jsl.ci || []).push({
    opensocial: {
        invalidatePath: "http://%host%/shindig//rpc",
        path: "http://%host%/shindig//rpc",
        domain: "shindig",
        supportedFields: {
            person: ["id", {
                name: ["familyName", "givenName", "unstructured"]
            }, "thumbnailUrl", "profileUrl"],
            mediaItem: "album_id created description duration file_size id language last_updated location mime_type num_comments num_views num_votes rating start_time tagged_people tags thumbnail_url title type url".split(" "),
            album: "id thumbnailUrl title description location ownerId".split(" "),
            group: ["id",
                "title", "description"
            ],
            activity: "appId body bodyId externalId id mediaItems postedTime priority streamFaviconUrl streamSourceUrl streamTitle streamUrl templateParams title url userId".split(" "),
            activityEntry: "actor content generator icon id object published provider target title updated url verb openSocial extensions".split(" ")
        },
        enableCaja: !1
    },
    rpc: {
        commSwf: "/xpc.swf",
        passReferrer: "c2p:query",
        parentRelayUrl: "/container/rpc_relay.html",
        useLegacyProtocol: !1
    },
    "shindig.auth": {
        authToken: "-1:-1:*:*:*:0:default"
    },
    views: {
        "default": {
            isOnlyVisible: !1,
            urlTemplate: "http://localhost//gadgets/default?{var}",
            aliases: ["home", "profile", "canvas"]
        },
        canvas: {
            isOnlyVisible: !0,
            urlTemplate: "http://localhost//gadgets/canvas?{var}",
            aliases: ["FULL_PAGE"]
        },
        profile: {
            isOnlyVisible: !1,
            urlTemplate: "http://localhost//gadgets/profile?{var}",
            aliases: ["DASHBOARD", "default"]
        }
    },
    container: {
        jsPath: "//gadgets/js",
        relayPath: "//gadgets/files/container/rpc_relay.html",
        enableRpcArbitration: !1
    },
    osapi: {
        endPoints: ["//%host%/shindig//rpc"]
    },
    "osapi.services": {
        "gadgets.rpc": ["container.listMethods"],
        "//%host%/shindig//rpc": "samplecontainer.update activities.supportedFields gadgets.metadata albums.supportedFields gadgets.proxySupportedFields albums.get mediaItems.create http.put system.listMethods gadgets.proxy gadgets.cajole http.head messages.create albums.delete mediaItems.update messages.delete appdata.update gadgets.js http.post gadgets.tokenSupportedFields samplecontainer.create http.get appdata.delete appdata.create gadgets.supportedFields mediaItems.get activities.update activities.delete albums.update activities.get messages.modify activitystreams.create appdata.get messages.get cache.invalidate samplecontainer.get people.supportedFields groups.get http.delete gadgets.jsSupportedFields people.get activitystreams.get mediaItems.supportedFields mediaItems.delete activitystreams.update gadgets.cajaSupportedFields activities.create albums.create people.update gadgets.token activitystreams.delete activitystreams.supportedFields".split(" ")
    },
    "core.io": {
        unparseableCruft: "throw 1; < don't be evil' >",
        jsonProxyUrl: "//%host%/shindig//gadgets/makeRequest",
        jsPath: "//gadgets/js",
        proxyUrl: "//%host%/shindig//gadgets/proxy?container=%container%&refresh=%refresh%&url=%url%%authz%%rewriteMime%",
        xhrPollIntervalMs: 50
    }
});
window.___jsl = window.___jsl || {};
window['___jsl']['f'] = ['auth-refresh', 'container', 'container.site', 'container.site.gadget', 'container.site.url', 'container.util', 'core.config', 'core.config.base', 'core.io', 'core.json', 'core.log', 'core.prefs', 'core.util', 'core.util.base', 'core.util.dom', 'core.util.event', 'core.util.onload', 'core.util.string', 'core.util.urlparams', 'embedded-experiences', 'gadgets.json.ext', 'globals', 'locked-domain', 'oauthpopup', 'open-views', 'open-views.common', 'open-views.ee', 'open-views.gadget', 'open-views.results', 'open-views.url', 'opensearch', 'opensocial', 'opensocial-base', 'opensocial-data-context', 'opensocial-jsonrpc', 'opensocial-reference', 'org.openajax.hub-2.0.7', 'osapi', 'osapi.base', 'pubsub-2', 'rpc', 'security-token', 'shindig.auth', 'shindig.uri', 'shindig.uri.ext', 'taming', 'views', 'xmlutil'];
gadgets = window.gadgets || {};
shindig = window.shindig || {};
osapi = window.osapi || {};
var safeJSON = window.safeJSON,
    tamings___ = window.tamings___ || [],
    bridge___, caja___ = window.caja___,
    ___ = window.___;
window.gadgets.config || (gadgets.config = function () {
    function j(a, b) {
        for (var e in b) b.hasOwnProperty(e) && ("object" === typeof a[e] && "object" === typeof b[e] ? j(a[e], b[e]) : a[e] = b[e])
    }

    function n(a) {
        var b = "";
        if (3 == a.nodeType || 4 == a.nodeType) b = a.nodeValue;
        else if (a.innerText) b = a.innerText;
        else if (a.innerHTML) b = a.innerHTML;
        else if (a.firstChild) {
            b = [];
            for (a = a.firstChild; a; a = a.nextSibling) b.push(n(a));
            b = b.join("")
        }
        return b
    }

    function o(a) {
        var b = (f["core.io"] || {}).jsPath || null,
            e = [],
            d = 0,
            c = document.scripts || document.getElementsByTagName("script");
        if (c && 0 != c.length) {
            for (var h = 0; h < c.length; ++h) {
                var g = c[h].src,
                    i = null != b && g && g.indexOf(b) || -1; - 1 != i && /.*[.]js.*[?&]c=[01](#|&|$).*/.test(g.substring(i + b.length)) && (e[d++] = c[h])
            }
            e.length || (b = c[c.length - 1], b.src && (e[0] = b))
        }
        if (e.length)
            for (b = 0; b < e.length; b++) {
                d = n(e[b]);
                c = void 0;
                try {
                    c = (new Function("return (" + d + "\n)"))()
                } catch (l) {}
                if ("object" === typeof c) d = c;
                else {
                    try {
                        c = (new Function("return ({" + d + "\n})"))()
                    } catch (m) {}
                    d = "object" === typeof c ? c : {}
                }
                k.f && 1 == k.f.length && !d[k.f[0]] && (c = {}, c[k.f[0]] = d, d = c);
                j(a,
                    d);
                (d = window.___cfg) && j(a, d)
            }
    }

    function m(a) {
        for (var b in i)
            if (i.hasOwnProperty(b))
                for (var e = i[b], d = 0, c = e.length; d < c; ++d) a(b, e[d])
    }
    var k, i = {},
        f = {},
        l = !1;
    return {
        register: function (a, b, e, d) {
            var c = i[a];
            c || (c = [], i[a] = c);
            c.push({
                validators: b || {},
                callback: e,
                callOnUpdate: d
            });
            l && e && e(f)
        },
        get: function (a) {
            return a ? f[a] || {} : f
        },
        init: function (a, b) {
            k = window.___jsl || {};
            j(f, a);
            o(f);
            j(f, window.___config || {});
            m(function (a, d) {
                var c = f[a];
                if (c && !b) {
                    var h = d.validators,
                        g;
                    for (g in h)
                        if (h.hasOwnProperty(g) && !h[g](c[g])) throw Error('Invalid config value "' +
                            c[g] + '" for parameter "' + g + '" in component "' + a + '"');
                }
                d.callback && d.callback(f)
            });
            l = !0
        },
        update: function (a, b) {
            var e = [];
            m(function (c, d) {
                (a.hasOwnProperty(c) || b && f && f[c]) && d.callback && d.callOnUpdate && e.push(d.callback)
            });
            f = b ? {} : f || {};
            j(f, a);
            for (var d = 0, c = e.length; d < c; ++d) e[d](f)
        },
        clear: function () {
            gadgets.warn("This method is for testing.");
            k = void 0;
            f = {};
            l = !1
        }
    }
}());
gadgets.log = function () {
    function d(a, c) {
        "undefined" === typeof b && (b = window.console ? window.console : window.opera ? window.opera.postError : null);
        !(a < e) && b && (2 === a && b.warn ? b.warn(c) : 3 === a && b.error ? b.error(c) : b.log && b.log(c))
    }
    var c = function (a) {
        d(1, a)
    };
    gadgets.warn = function (a) {
        d(2, a)
    };
    gadgets.error = function (a) {
        d(3, a)
    };
    gadgets.setLogLevel = function (a) {
        e = a
    };
    c.INFO = 1;
    c.WARNING = 2;
    c.NONE = 4;
    var e = 1,
        b;
    return c
}();
(function () {
    gadgets.config.EnumValidator = function (a) {
        var c = [];
        if (1 < arguments.length)
            for (var b = 0, d; d = arguments[b]; ++b) c.push(d);
        else c = a;
        return function (a) {
            for (var b = 0; c[b]; ++b)
                if (a === c[b]) return !0;
            return !1
        }
    };
    gadgets.config.RegExValidator = function (a) {
        return function (c) {
            return a.test(c)
        }
    };
    gadgets.config.ExistsValidator = function (a) {
        return "undefined" !== typeof a
    };
    gadgets.config.NonEmptyStringValidator = function (a) {
        return "string" === typeof a && 0 < a.length
    };
    gadgets.config.BooleanValidator = function (a) {
        return "boolean" ===
            typeof a
    };
    gadgets.config.LikeValidator = function (a) {
        return function (c) {
            for (var b in a)
                if (a.hasOwnProperty(b) && !(0, a[b])(c[b])) return !1;
            return !0
        }
    }
})();
gadgets.util = gadgets.util || {};
gadgets.util.makeClosure = function (d, b, a) {
    var c = Array.prototype.slice.call(arguments, 2);
    return function () {
        var a = Array.prototype.slice.call(arguments);
        return b.apply(d, c.concat(a))
    }
};
gadgets.util.makeEnum = function (d) {
    var b, a, c = {};
    for (b = 0; a = d[b]; ++b) c[a] = a;
    return c
};
gadgets.util.shouldPollXhrReadyStateChange = function () {
    return document.all && !document.querySelector ? !0 : !1
};
gadgets.util = gadgets.util || {};
(function () {
    gadgets.util.createElement = function (a) {
        var b;
        if (!document.body || document.body.namespaceURI) try {
            b = document.createElementNS("http://www.w3.org/1999/xhtml", a)
        } catch (d) {}
        return b || document.createElement(a)
    };
    gadgets.util.createIframeElement = function (a) {
        var b = gadgets.util.createElement("iframe");
        try {
            var d, c = ["<", "iframe"],
                h = a || {},
                e;
            for (e in h) h.hasOwnProperty(e) && (c.push(" "), c.push(e), c.push('="'), c.push(gadgets.util.escapeString(h[e])), c.push('"'));
            c.push("></");
            c.push("iframe");
            c.push(">");
            d = c.join("");
            var f = gadgets.util.createElement(d);
            if (f && (!b || f.tagName == b.tagName && f.namespaceURI == b.namespaceURI)) b = f
        } catch (i) {}
        d = b;
        var a = a || {},
            g;
        for (g in a) a.hasOwnProperty(g) && (d[g] = a[g]);
        return b
    };
    gadgets.util.getBodyElement = function () {
        if (document.body) return document.body;
        try {
            var a = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
            if (a && 1 == a.length) return a[0]
        } catch (b) {}
        return document.documentElement || document
    }
})();
gadgets.util = gadgets.util || {};
gadgets.util.attachBrowserEvent = function (a, b, c, d) {
    "undefined" != typeof a.addEventListener ? a.addEventListener(b, c, d) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + b, c) : gadgets.warn("cannot attachBrowserEvent: " + b)
};
gadgets.util.removeBrowserEvent = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent ? a.detachEvent("on" + b, c) : gadgets.warn("cannot removeBrowserEvent: " + b)
};
gadgets.util = gadgets.util || {};
(function () {
    var b = [];
    gadgets.util.registerOnLoadHandler = function (a) {
        b.push(a)
    };
    gadgets.util.runOnLoadHandlers = function () {
        gadgets.util.registerOnLoadHandler = function (a) {
            a()
        };
        for (var a = 0, c = b.length; a < c; ++a) try {
            b[a]()
        } catch (d) {
            gadgets.warn("Could not fire onloadhandler " + d.message)
        }
        b = void 0
    }
})();
gadgets.util = gadgets.util || {};
(function () {
    function f(a, d) {
        return String.fromCharCode(d)
    }
    var g = {
        "0": !1,
        10: !0,
        13: !0,
        34: !0,
        39: !0,
        60: !0,
        62: !0,
        92: !0,
        8232: !0,
        8233: !0,
        65282: !0,
        65287: !0,
        65308: !0,
        65310: !0,
        65340: !0
    };
    gadgets.util.escape = function (a, d) {
        if (a) {
            if ("string" === typeof a) return gadgets.util.escapeString(a);
            if ("array" === typeof a)
                for (var b = 0, c = a.length; b < c; ++b) a[b] = gadgets.util.escape(a[b]);
            else if ("object" === typeof a && d) {
                b = {};
                for (c in a) a.hasOwnProperty(c) && (b[gadgets.util.escapeString(c)] = gadgets.util.escape(a[c], !0));
                return b
            }
        }
        return a
    };
    gadgets.util.escapeString = function (a) {
        if (!a) return a;
        for (var d = [], b, c, e = 0, f = a.length; e < f; ++e) b = a.charCodeAt(e), c = g[b], !0 === c ? d.push("&#", b, ";") : !1 !== c && d.push(a.charAt(e));
        return d.join("")
    };
    gadgets.util.unescapeString = function (a) {
        return !a ? a : a.replace(/&#([0-9]+);/g, f)
    }
})();
gadgets.util = gadgets.util || {};
(function () {
    var e = null;
    gadgets.util.getUrlParameters = function (a) {
        var g = "undefined" === typeof a;
        if (null !== e && g) return e;
        for (var f = {}, a = a || document.location.href, d = a.indexOf("?"), b = a.indexOf("#"), a = (-1 === b ? a.substr(d + 1) : [a.substr(d + 1, b - d - 1), "&", a.substr(b + 1)].join("")).split("&"), d = window.decodeURIComponent ? decodeURIComponent : unescape, b = 0, h = a.length; b < h; ++b) {
            var c = a[b].indexOf("=");
            if (-1 !== c) {
                var i = a[b].substring(0, c),
                    c = a[b].substring(c + 1),
                    c = c.replace(/\+/g, " ");
                try {
                    f[i] = d(c)
                } catch (j) {}
            }
        }
        g && (e = f);
        return f
    }
})();
gadgets.util.getUrlParameters();
gadgets.util = gadgets.util || {};
(function () {
    function c(a) {
        b = a["core.util"] || {}
    }
    var b = {},
        d = {};
    gadgets.config && gadgets.config.register("core.util", null, c);
    gadgets.util.getFeatureParameters = function (a) {
        return "undefined" === typeof b[a] ? null : b[a]
    };
    gadgets.util.hasFeature = function (a) {
        return "undefined" !== typeof b[a]
    };
    gadgets.util.getServices = function () {
        return d
    }
})();
window.JSON && (window.JSON.parse && window.JSON.stringify) && (gadgets.json = function () {
    function d(a) {
        return this[a]
    }
    var e = /___$/;
    return {
        parse: function (a) {
            try {
                return window.JSON.parse(a)
            } catch (c) {
                return !1
            }
        },
        stringify: function (a) {
            function c(a) {
                return b.call(this, a, d)
            }
            var b = window.JSON.stringify,
                f = Array.prototype.toJSON && '"[{\\"x\\": 1}]"' === b([{
                    x: 1
                }]) ? c : b;
            try {
                return f(a, function (a, b) {
                    return !e.test(a) ? b : void 0
                })
            } catch (g) {
                return null
            }
        }
    }
}());
if (!window.JSON || !window.JSON.parse || !window.JSON.stringify) gadgets.json = function () {
    function c(a) {
        return 10 > a ? "0" + a : a
    }

    function e(a) {
        var d, b, c;
        d = /[\"\\\x00-\x1f\x7f-\x9f]/g;
        switch (typeof a) {
        case "string":
            return d.test(a) ? '"' + a.replace(d, function (a) {
                var b = f[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }) + '"' : '"' + a + '"';
        case "number":
            return isFinite(a) ? "" + a : "null";
        case "boolean":
        case "null":
            return "" + a;
        case "object":
            if (!a) return "null";
            d = [];
            if ("number" ===
                typeof a.length && !a.propertyIsEnumerable("length")) {
                c = a.length;
                for (b = 0; b < c; b += 1) d.push(e(a[b]) || "null");
                return "[" + d.join(",") + "]"
            }
            for (b in a)!/___$/.test(b) && a.hasOwnProperty(b) && "string" === typeof b && (c = e(a[b])) && d.push(e(b) + ":" + c);
            return "{" + d.join(",") + "}"
        }
        return ""
    }
    Date.prototype.toJSON = function () {
        return [this.getUTCFullYear(), "-", c(this.getUTCMonth() + 1), "-", c(this.getUTCDate()), "T", c(this.getUTCHours()), ":", c(this.getUTCMinutes()), ":", c(this.getUTCSeconds()), "Z"].join("")
    };
    var f = {
        "\u0008": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\u000c": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    };
    return {
        stringify: e,
        parse: function (a) {
            return /^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? eval("(" + a + ")") : !1
        }
    }
}();
gadgets.json.flatten = function (a) {
    var c = {};
    if (null === a || "undefined" == typeof a) return c;
    for (var d in a)
        if (a.hasOwnProperty(d)) {
            var b = a[d];
            null === b || "undefined" == typeof b || (c[d] = "string" === typeof b ? b : gadgets.json.stringify(b))
        }
    return c
};
shindig.Auth = function () {
    function g(a) {
        for (var b = c.split("&"), f = 0; f < b.length; f++) {
            var d = b[f].split("=");
            if (2 === d.length) {
                var e = d[0],
                    d = d[1];
                "$" === d && (d = encodeURIComponent(a[e]), b[f] = e + "=" + d)
            }
        }
        c = b.join("&")
    }
    var c = null,
        e = null;
    gadgets.config.register("shindig.auth", null, function (a) {
        var b = gadgets.util.getUrlParameters(),
            a = a["shindig.auth"] || {};
        a.authToken ? c = a.authToken : b.st && (c = b.st);
        null !== c && g(b);
        a.trustedJson && (e = eval("(" + a.trustedJson + ")"))
    });
    return {
        getSecurityToken: function () {
            return c
        },
        updateSecurityToken: function (a) {
            c =
                a
        },
        getTrustedData: function () {
            return e
        }
    }
};
shindig.auth = new shindig.Auth;
gadgets.rpctx = gadgets.rpctx || {};
gadgets.rpctx.wpm || (gadgets.rpctx.wpm = function () {
    function g(a, b, c) {
        "undefined" != typeof window.addEventListener ? window.addEventListener(a, b, c) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + a, b)
    }

    function h(a) {
        var b = gadgets.json.parse(a.data);
        if (b && b.f) {
            var c = gadgets.rpc.getTargetOrigin(b.f);
            (!e || !("undefined" !== typeof a.origin ? a.origin !== c : a.domain !== /^.+:\/\/([^:]+).*/.exec(c)[1])) && f(b, a.origin)
        }
    }
    var f, d, e = !0;
    return {
        getCode: function () {
            return "wpm"
        },
        isParentVerifiable: function () {
            return !0
        },
        init: function (a, b) {
            gadgets.config.register("rpc", null, function (a) {
                if ("true" === "" + (a ? a.rpc : {}).disableForceSecure) e = !1
            });
            f = a;
            d = b;
            g("message", h, !1);
            d("..", !0);
            return !0
        },
        setup: function (a) {
            d(a, !0);
            return !0
        },
        call: function (a, b, c) {
            var d = gadgets.rpc.getTargetOrigin(a),
                e = gadgets.rpc._getTargetWin(a);
            d ? window.setTimeout(function () {
                e.postMessage(gadgets.json.stringify(c), d)
            }, 0) : gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
            return !0
        }
    }
}());
gadgets.rpctx = gadgets.rpctx || {};
gadgets.rpctx.flash || (gadgets.rpctx.flash = function () {
    function i(a, b) {
        m[b] = m[b] || function () {
            a.apply({}, arguments)
        };
        return n + "." + b
    }

    function o() {
        if (null === e && document.body && j) {
            var a = j + "?cb=" + Math.random() + "&origin=" + D + "&jsl=1",
                b = document.createElement("div");
            b.style.height = "1px";
            b.style.width = "1px";
            a = '<object height="1" width="1" id="' + E + '" type="application/x-shockwave-flash"><param name="allowScriptAccess" value="always"></param><param name="movie" value="' + a + '"></param><embed type="application/x-shockwave-flash" allowScriptAccess="always" src="' + a +
                '" height="1" width="1"></embed></object>';
            document.body.appendChild(b);
            b.innerHTML = a;
            e = b.firstChild
        }++p;
        null !== c && (null !== e || p >= F) ? window.clearTimeout(c) : c = window.setTimeout(o, q)
    }

    function r() {
        k[".."] || (s(".."), t++, t >= G && null !== f ? (window.clearTimeout(f), f = null) : f = window.setTimeout(r, u))
    }

    function l() {
        if (null !== e && e.setup) {
            for (; 0 < h.length;) {
                var a = h.shift(),
                    b = a.targetId;
                e.setup(a.token, ".." === b ? gadgets.rpc.RPC_ID : b, ".." === b ? "INNER" : "OUTER")
            }
            null !== g && (window.clearTimeout(g), g = null)
        } else null === g && 0 <
            h.length && (g = window.setTimeout(l, H))
    }

    function v() {
        l();
        null !== c && window.clearTimeout(c);
        c = null
    }

    function w() {
        !k[".."] && null === f && (f = window.setTimeout(r, u))
    }

    function x(a, b, c) {
        var b = gadgets.rpc.getTargetOrigin(a),
            d = gadgets.rpc.getAuthToken(a);
        e["sendMessage_" + (".." === a ? gadgets.rpc.RPC_ID : a) + "_" + d + "_" + (".." === a ? "INNER" : "OUTER")].call(e, gadgets.json.stringify(c), b);
        return !0
    }

    function y(a, b) {
        var c = gadgets.json.parse(a),
            d = c[z];
        d ? (A(d, !0), k[d] = !0, ".." !== d && s(d, !0)) : window.setTimeout(function () {
            B(c, b)
        }, 0)
    }

    function s(a,
        b) {
        var c = gadgets.rpc.RPC_ID,
            d = {};
        d[z] = b ? ".." : c;
        d[I] = c;
        x(a, c, d)
    }
    var E = "___xpcswf",
        j = null,
        C = !1,
        B = null,
        A = null,
        e = null,
        q = 100,
        F = 50,
        h = [],
        g = null,
        H = 500,
        c = null,
        p = 0,
        z = "_scr",
        I = "_pnt",
        u = 100,
        G = 50,
        t = 0,
        f = null,
        k = {},
        D = window.location.protocol + "//" + window.location.host,
        n, m = function () {
            window.___jsl = window.___jsl || {};
            var a = window.___jsl._fm = {};
            n = "___jsl._fm";
            return a
        }();
    gadgets.config.register("rpc", null, function (a) {
        C && (j = a.rpc.commSwf || "//xpc.googleusercontent.com/gadgets/xpc.swf")
    });
    i(v, "ready");
    i(w, "setupDone");
    i(y,
        "receiveMessage");
    return {
        getCode: function () {
            return "flash"
        },
        isParentVerifiable: function () {
            return !0
        },
        init: function (a, b) {
            B = a;
            A = b;
            return C = !0
        },
        setup: function (a, b) {
            h.push({
                token: b,
                targetId: a
            });
            null === e && null === c && (c = window.setTimeout(o, q));
            l();
            return !0
        },
        call: x,
        _receiveMessage: y,
        _ready: v,
        _setupDone: w
    }
}());
gadgets.rpctx = gadgets.rpctx || {};
gadgets.rpctx.frameElement || (gadgets.rpctx.frameElement = function () {
    function i(a, j, h) {
        try {
            if (".." !== j) {
                var d = window.frameElement;
                if ("function" === typeof d[b]) return "function" !== typeof d[b][c] && (d[b][c] = function (a) {
                    e(gadgets.json.parse(a))
                }), d[b](gadgets.json.stringify(h)), !0
            } else {
                var f = document.getElementById(a);
                if ("function" === typeof f[b] && "function" === typeof f[b][c]) return f[b][c](gadgets.json.stringify(h)), !0
            }
        } catch (g) {}
        return !1
    }
    var b = "__g2c_rpc",
        c = "__c2g_rpc",
        e, g;
    return {
        getCode: function () {
            return "fe"
        },
        isParentVerifiable: function () {
            return !1
        },
        init: function (a, b) {
            e = a;
            g = b;
            return !0
        },
        setup: function (a) {
            if (".." !== a) try {
                document.getElementById(a)[b] = function (a) {
                    e(gadgets.json.parse(a))
                }
            } catch (c) {
                return !1
            }
            ".." === a && (g("..", !0), gadgets.util.registerOnLoadHandler(function () {
                window.setTimeout(function () {
                    gadgets.rpc.call(a, gadgets.rpc.ACK)
                }, 500)
            }));
            return !0
        },
        call: function (a, b, c) {
            return i(a, b, c)
        }
    }
}());
gadgets.rpctx = gadgets.rpctx || {};
gadgets.rpctx.nix || (gadgets.rpctx.nix = function () {
    function f() {
        var a = d[".."];
        if (!a)
            if (++g > h) gadgets.warn("Nix transport setup failed, falling back..."), e("..", !1);
            else {
                if (!a && (window.opener && "GetAuthToken" in window.opener) && (a = window.opener, a.GetAuthToken() == gadgets.rpc.getAuthToken(".."))) {
                    var b = gadgets.rpc.getAuthToken("..");
                    a.CreateChannel(window[c]("..", b), b);
                    d[".."] = a;
                    window.opener = null;
                    e("..", !0);
                    return
                }
                window.setTimeout(function () {
                    f()
                }, i)
            }
    }
    var c = "GRPC____NIXVBS_get_wrapper",
        h = 10,
        i = 500,
        d = {},
        e, g = 0;
    return {
        getCode: function () {
            return "nix"
        },
        isParentVerifiable: function () {
            return !1
        },
        init: function (a, b) {
            e = b;
            if ("unknown" !== typeof window[c]) {
                window.GRPC____NIXVBS_handle_message = function (b) {
                    window.setTimeout(function () {
                        a(gadgets.json.parse(b))
                    }, 0)
                };
                window.GRPC____NIXVBS_create_channel = function (a, b, c) {
                    gadgets.rpc.getAuthToken(a) === c && (d[a] = b, e(a, !0))
                };
                var j = "Class GRPC____NIXVBS_wrapper\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n GRPC____NIXVBS_handle_message(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call GRPC____NIXVBS_create_channel(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction " +
                    c + "(name, auth)\nDim wrap\nSet wrap = New GRPC____NIXVBS_wrapper\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet " + c + " = wrap\nEnd Function";
                try {
                    window.execScript(j, "vbscript")
                } catch (k) {
                    return !1
                }
            }
            return !0
        },
        setup: function (a, b) {
            if (".." === a) return f(), !0;
            try {
                var d = document.getElementById(a),
                    e = window[c](a, b);
                d.contentWindow.opener = e
            } catch (g) {
                return !1
            }
            return !0
        },
        call: function (a, b, c) {
            try {
                d[a] && d[a].SendMessage(gadgets.json.stringify(c))
            } catch (e) {
                return !1
            }
            return !0
        }
    }
}());
gadgets.rpctx = gadgets.rpctx || {};
gadgets.rpctx.rmr || (gadgets.rpctx.rmr = function () {
    function k(a, b, c, e) {
        var d = function () {
            document.body.appendChild(a);
            a.src = "about:blank";
            e && (a.onload = function () {
                j(e)
            });
            a.src = b + "#" + c
        };
        document.body ? d() : gadgets.util.registerOnLoadHandler(function () {
            d()
        })
    }

    function l(a) {
        var b = null;
        f[a].searchCounter++;
        try {
            var c = gadgets.rpc._getTargetWin(a),
                b = ".." === a ? c.frames["rmrtransport-" + gadgets.rpc.RPC_ID] : c.frames["rmrtransport-.."]
        } catch (e) {}
        c = !1;
        b && (c = p(a, b));
        !c && !(f[a].searchCounter > q) && window.setTimeout(function () {
                l(a)
            },
            r)
    }

    function m(a, b, c, e) {
        var d = null;
        if (d = ".." !== c ? f[".."] : f[a]) {
            b !== gadgets.rpc.ACK && d.queue.push(e);
            if (d.waiting || 0 === d.queue.length && !(b === gadgets.rpc.ACK && e && !0 === e.ackAlone)) return !0;
            0 < d.queue.length && (d.waiting = !0);
            a = d.relayUri + "#" + h(a);
            try {
                d.frame.contentWindow.location = a;
                var g = 10 == d.width ? 20 : 10;
                d.frame.style.width = g + "px";
                d.width = g
            } catch (j) {
                return !1
            }
        }
        return !0
    }

    function h(a) {
        var a = f[a],
            b = {
                id: a.sendId
            };
        if (a) {
            b.d = Array.prototype.slice.call(a.queue, 0);
            var c = {
                s: gadgets.rpc.ACK,
                id: a.recvId
            };
            a.originVerified ||
                (c.sendToken = a.verifySendToken);
            a.verifyRecvToken && (c.recvToken = a.verifyRecvToken);
            b.d.push(c)
        }
        return gadgets.json.stringify(b)
    }

    function j(a) {
        for (var b = f[a], c = b.receiveWindow.location.hash.substring(1), e = gadgets.json.parse(decodeURIComponent(c)) || {}, c = e.d || [], d = !1, g = !1, j = 0, e = b.recvId - e.id, h = 0; h < c.length; ++h) {
            var i = c[h];
            if (i.s === gadgets.rpc.ACK) {
                n(a, !0);
                b.verifyRecvToken = i.sendToken;
                !b.originVerified && (i.recvToken && "" + i.recvToken == "" + b.verifySendToken) && (b.originVerified = !0);
                b.waiting && (g = !0);
                b.waiting = !1;
                var k = Math.max(0, i.id - b.sendId);
                b.queue.splice(0, k);
                b.sendId = Math.max(b.sendId, i.id || 0)
            } else d = !0, ++j <= e || (++b.recvId, o(i, b.originVerified ? b.relayOrigin : void 0))
        }
        if (d || g && 0 < b.queue.length) m(a, gadgets.rpc.ACK, ".." === a ? gadgets.rpc.RPC_ID : "..", {
            ackAlone: d
        })
    }

    function p(a, b) {
        function c() {
            j(a)
        }
        var e = f[a];
        try {
            var d = !1;
            if (!("document" in b)) return !1;
            d = "object" == typeof b.document;
            if (!d || "about:blank" === b.location.href) return !1
        } catch (g) {
            return !1
        }
        e.receiveWindow = b;
        "undefined" === typeof b.attachEvent ? b.onresize =
            c : b.attachEvent("onresize", c);
        ".." === a ? k(e.frame, e.relayUri, h(a), a) : j(a);
        return !0
    }
    var r = 500,
        q = 10,
        f = {},
        s = gadgets.util.getUrlParameters().parent,
        o, n;
    return {
        getCode: function () {
            return "rmr"
        },
        isParentVerifiable: function () {
            return !0
        },
        init: function (a, b) {
            o = a;
            n = b;
            return !0
        },
        setup: function (a) {
            try {
                if ("object" !== typeof f[a]) {
                    var b = document.createElement("iframe"),
                        c = b.style;
                    c.position = "absolute";
                    c.top = "0px";
                    c.border = "0";
                    c.opacity = "0";
                    c.width = "10px";
                    c.height = "1px";
                    b.id = "rmrtransport-" + a;
                    b.name = b.id;
                    var e = gadgets.rpc.getRelayUrl(a),
                        d = gadgets.rpc.getOrigin(s);
                    e || (e = d + "/robots.txt");
                    f[a] = {
                        frame: b,
                        receiveWindow: null,
                        relayUri: e,
                        relayOrigin: d,
                        searchCounter: 0,
                        width: 10,
                        waiting: !0,
                        queue: [],
                        sendId: 0,
                        recvId: 0,
                        verifySendToken: "" + Math.random(),
                        verifyRecvToken: null,
                        originVerified: !1
                    };
                    ".." !== a && k(b, e, h(a));
                    l(a)
                }
            } catch (g) {
                return gadgets.warn("Caught exception setting up RMR: " + g), !1
            }
            return !0
        },
        call: function (a, b, c) {
            return m(a, c.s, b, c)
        }
    }
}());
gadgets.rpctx = gadgets.rpctx || {};
gadgets.rpctx.ifpc || (gadgets.rpctx.ifpc = function () {
    function k(d) {
        for (var b = [], c = 0, a = d.length; c < a; ++c) b.push(encodeURIComponent(gadgets.json.stringify(d[c])));
        return b.join("&")
    }

    function l(d) {
        for (var b, c = f.length - 1; 0 <= c; --c) {
            var a = f[c];
            try {
                if (a && (a.recyclable || "complete" === a.readyState))
                    if (a.parentNode.removeChild(a), window.ActiveXObject) f[c] = a = null, f.splice(c, 1);
                    else {
                        a.recyclable = !1;
                        b = a;
                        break
                    }
            } catch (g) {}
        }
        b || (b = document.createElement("iframe"), b.style.border = b.style.width = b.style.height = "0px", b.style.visibility =
            "hidden", b.style.position = "absolute", b.onload = function () {
                this.recyclable = !0
            }, f.push(b));
        b.src = d;
        window.setTimeout(function () {
            document.body.appendChild(b)
        }, 0)
    }
    var f = [],
        i = 0,
        j, e = {};
    return {
        getCode: function () {
            return "ifpc"
        },
        isParentVerifiable: function () {
            return !0
        },
        init: function (d, b) {
            j = b;
            j("..", !0);
            return !0
        },
        setup: function (d) {
            j(d, !0);
            return !0
        },
        call: function (d, b, c) {
            var a = gadgets.rpc.getRelayUrl(d);
            ++i;
            if (!a) return gadgets.warn("No relay file assigned for IFPC"), !1;
            var g = null,
                h = [];
            if (c.l) g = [a, "#", k([b, i, 1,
                0, k([b, c.s, "", "", b].concat(c.a))
            ])].join(""), h.push(g);
            else
                for (var g = [a, "#", d, "&", b, "@", i, "&"].join(""), d = encodeURIComponent(gadgets.json.stringify(c)), b = 2E3 - g.length, c = Math.ceil(d.length / b), a = 0, e; 0 < d.length;) e = d.substring(0, b), d = d.substring(b), h.push([g, c, "&", a, "&", e].join("")), a += 1;
            do l(h.shift()); while (0 < h.length);
            return !0
        },
        _receiveMessage: function (d, b) {
            var c = d[1],
                a = parseInt(d[2], 10),
                g = parseInt(d[3], 10),
                h = d[d.length - 1],
                f = 1 === a;
            if (1 < a) {
                e[c] || (e[c] = []);
                e[c][g] = h;
                a: {
                    for (a -= 1; 0 <= a; --a)
                        if ("undefined" ===
                            typeof e[c][a]) {
                            a = !1;
                            break a
                        }
                    a = !0
                }
                a && (h = e[c].join(""), delete e[c], f = !0)
            }
            f && b(gadgets.json.parse(decodeURIComponent(h)))
        }
    }
}());
window.gadgets.rpc || (gadgets.rpc = function () {
    function w(a, b) {
        if (!n[a]) {
            var c = i;
            b || (c = q);
            n[a] = c;
            for (var d = o[a] || [], e = 0; e < d.length; ++e) {
                var f = d[e];
                f.t = j[a];
                c.call(a, f.f, f)
            }
            o[a] = []
        }
    }

    function Q() {
        function a() {
            I = !0
        }
        J || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", a), J = !0)
    }

    function R(a, b, c, d, e) {
        if (!j[b] || j[b] !== c) gadgets.error("Invalid auth token. " + j[b] + " vs " + c), r(b, x);
        e.onunload = function () {
            g[b] &&
                !I && (r(b, K), gadgets.rpc.removeReceiver(b))
        };
        Q();
        d = gadgets.json.parse(decodeURIComponent(d))
    }

    function s(a, b) {
        if (a && ("string" === typeof a.s && "string" === typeof a.f && a.a instanceof Array) && ("function" !== typeof arbitrate || arbitrate(a.s, a.f)))
            if (j[a.f] && j[a.f] !== a.t && (gadgets.error("Invalid auth token. " + j[a.f] + " vs " + a.t), r(a.f, x)), "__ack" === a.s) window.setTimeout(function () {
                w(a.f, true)
            }, 0);
            else {
                a.c && (a.callback = function (b) {
                    gadgets.rpc.call(a.f, "__cb", null, a.c, b)
                });
                if (b) {
                    var c = m(b);
                    a.origin = b;
                    var d = a.r;
                    if (!d || m(d) != c) d = b;
                    a[S] = d
                }
                c = (k[a.s] || k[""]).apply(a, a.a);
                a.c && "undefined" !== typeof c && gadgets.rpc.call(a.f, "__cb", null, a.c, c)
            }
    }

    function m(a) {
        if (!a) return "";
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a); - 1 == a.indexOf("://") && (a = window.location.protocol + "//" + a);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        var a = a.substring(0, a.indexOf("://")),
            c = "",
            d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1),
                b = b.substring(0, d);
            if ("http" === a && "80" !== e ||
                "https" === a && "443" !== e) c = ":" + e
        }
        return a + "://" + b + c
    }

    function p(a) {
        if ("/" == a.charAt(0)) {
            var b = a.indexOf("|"),
                c = 0 < b ? a.substring(1, b) : a.substring(1),
                a = 0 < b ? a.substring(b + 1) : null;
            return {
                id: c,
                origin: a
            }
        }
        return null
    }

    function y(a) {
        if ("undefined" === typeof a || ".." === a) return window.parent;
        var b = p(a);
        if (b) return window.frames[b.id];
        a = "" + a;
        return (b = document.getElementById(a)) && b.contentWindow ? b.contentWindow : (b = window.frames[a]) && !b.closed ? b : null
    }

    function L(a, b) {
        if (!0 !== g[a]) {
            "undefined" === typeof g[a] && (g[a] = 0);
            var c = y(a);
            (".." === a || null != c) && !0 === i.setup(a, b) ? g[a] = !0 : !0 !== g[a] && 10 > g[a]++ ? window.setTimeout(function () {
                L(a, b)
            }, 500) : (n[a] = q, g[a] = !0)
        }
    }

    function T(a, b) {
        var c = y(a);
        if (!f[a] || f[a] !== t && c.Function.prototype !== f[a].constructor.prototype) {
            var d = z(a);
            if (m(d) !== m(window.location.href)) return f[a] = t, !1;
            try {
                f[a] = c.gadgets.rpc.receiveSameDomain
            } catch (e) {
                return f[a] = t, !1
            }
        }
        return f[a] && f[a] !== t ? (f[a](b), !0) : !1
    }

    function z(a) {
        (a = A[a]) && "/" === a.substring(0, 1) && (a = "/" === a.substring(1, 2) ? document.location.protocol +
            a : document.location.protocol + "//" + document.location.host + a);
        return a
    }

    function B(a, b, c) {
        /http(s)?:\/\/.+/.test(b) || (0 == b.indexOf("//") ? b = window.location.protocol + b : "/" == b.charAt(0) ? b = window.location.protocol + "//" + window.location.host + b : -1 == b.indexOf("://") && (b = window.location.protocol + "//" + b));
        A[a] = b;
        "undefined" !== typeof c && (u[a] = !!c)
    }

    function C(a, b) {
        b = b || "";
        j[a] = "" + b;
        L(a, b)
    }

    function M(a) {
        a = (a.passReferrer || "").split(":", 2);
        v = a[0] || "none";
        D = a[1] || "origin"
    }

    function N(a) {
        "true" === "" + a.useLegacyProtocol &&
            (i = gadgets.rpctx.ifpc, i.init(s, w))
    }

    function U(a, b) {
        function c(c) {
            c = c ? c.rpc : {};
            M(c);
            var e = c.parentRelayUrl || "",
                e = m(l.parent || b) + e;
            B("..", e, "true" === "" + c.useLegacyProtocol);
            N(c);
            C("..", a)
        }!l.parent && b ? c({}) : gadgets.config.register("rpc", null, c)
    }

    function O(a, b, c) {
        if (".." === a) U(c || l.rpctoken || l.ifpctok || "", b);
        else a: {
            var d = null;
            if ("/" != a.charAt(0)) {
                if (!gadgets.util) break a;
                d = document.getElementById(a);
                if (!d) throw Error("Cannot set up gadgets.rpc receiver with ID: " + a + ", element not found.");
            }
            d = d && d.src;
            b = b || gadgets.rpc.getOrigin(d);
            B(a, b);
            b = gadgets.util.getUrlParameters(d);
            C(a, c || b.rpctoken)
        }
    }
    var S = "referer",
        k = {},
        A = {},
        u = {},
        j = {},
        E = 0,
        F = {},
        g = {},
        f = {},
        l = {},
        n = {},
        o = {},
        v = null,
        D = null,
        V = !!gadgets.util.getUrlParameters().parent && window.top !== window.self,
        G = window.name,
        r = function () {},
        K = 1,
        x = 2,
        H = window.console,
        P = H && H.log ? function (a) {
            H.log(a)
        } : function () {},
        q = function () {
            function a(a) {
                return function () {
                    P(a + ": call ignored")
                }
            }
            return {
                getCode: function () {
                    return "noop"
                },
                isParentVerifiable: function () {
                    return !0
                },
                init: a("init"),
                setup: a("setup"),
                call: a("call")
            }
        }();
    gadgets.util && (l = gadgets.util.getUrlParameters());
    var I = !1,
        J = !1,
        i = "flash" == l.rpctx ? gadgets.rpctx.flash : "rmr" == l.rpctx ? gadgets.rpctx.rmr : "function" === typeof window.postMessage ? gadgets.rpctx.wpm : "object" === typeof window.postMessage ? gadgets.rpctx.wpm : window.ActiveXObject ? gadgets.rpctx.flash ? gadgets.rpctx.flash : gadgets.rpctx.nix : 0 < navigator.userAgent.indexOf("WebKit") ? gadgets.rpctx.rmr : "Gecko" === navigator.product ? gadgets.rpctx.frameElement : gadgets.rpctx.ifpc;
    k[""] =
        function () {
            P("Unknown RPC service: " + this.s)
        };
    k.__cb = function (a, b) {
        var c = F[a];
        c && (delete F[a], c.call(this, b))
    };
    var t = {};
    return {
        config: function (a) {
            "function" === typeof a.securityCallback && (r = a.securityCallback);
            "function" === typeof a.arbitrator && (arbitrate = a.arbitrator)
        },
        register: function (a, b) {
            if ("__cb" === a || "__ack" === a) throw Error("Cannot overwrite callback/ack service");
            if ("" === a) throw Error("Cannot overwrite default service: use registerDefault");
            var c = k[a];
            k[a] = b;
            return c
        },
        unregister: function (a) {
            if ("__cb" ===
                a || "__ack" === a) throw Error("Cannot delete callback/ack service");
            if ("" === a) throw Error("Cannot delete default service: use unregisterDefault");
            delete k[a]
        },
        registerDefault: function (a) {
            k[""] = a
        },
        unregisterDefault: function () {
            delete k[""]
        },
        forceParentVerifiable: function () {
            i.isParentVerifiable() || (i = gadgets.rpctx.ifpc)
        },
        call: function (a, b, c, d) {
            var a = a || "..",
                e = "..";
            ".." === a ? e = G : "/" == a.charAt(0) && (e = gadgets.rpc.getOrigin(window.location.href), e = "/" + G + (e ? "|" + e : ""));
            ++E;
            c && (F[E] = c);
            var f = {
                    s: b,
                    f: e,
                    c: c ? E : 0,
                    a: Array.prototype.slice.call(arguments,
                        3),
                    t: j[a],
                    l: !!u[a]
                },
                h;
            a: if ("bidir" === v || "c2p" === v && ".." === a || "p2c" === v && ".." !== a) {
                h = window.location.href;
                var g = "?";
                if ("query" === D) g = "#";
                else if ("hash" === D) break a;
                g = h.lastIndexOf(g);
                g = -1 === g ? h.length : g;
                h = h.substring(0, g)
            } else h = null;
            h && (f.r = h);
            if (!(".." !== a && null == p(a) && !document.getElementById(a)) && !T(a, f))
                if (h = n[a], !h && null !== p(a) && (h = i), h) {
                    if (u[a] && (h = gadgets.rpctx.ifpc), !1 === h.call(a, e, f)) n[a] = q, i.call(a, e, f)
                } else o[a] ? o[a].push(f) : o[a] = [f]
        },
        getRelayUrl: z,
        setRelayUrl: B,
        setAuthToken: C,
        setupReceiver: O,
        getAuthToken: function (a) {
            return j[a]
        },
        removeReceiver: function (a) {
            delete A[a];
            delete u[a];
            delete j[a];
            delete g[a];
            delete f[a];
            delete n[a]
        },
        getRelayChannel: function () {
            return i.getCode()
        },
        receive: function (a, b) {
            4 < a.length ? i._receiveMessage(a, s) : R.apply(null, a.concat(b))
        },
        receiveSameDomain: function (a) {
            a.a = Array.prototype.slice.call(a.a);
            window.setTimeout(function () {
                s(a)
            }, 0)
        },
        getOrigin: m,
        getTargetOrigin: function (a) {
            var b = null,
                b = z(a);
            b || (b = (b = p(a)) ? b.origin : ".." == a ? l.parent : document.getElementById(a).src);
            return m(b)
        },
        init: function () {
            !1 === i.init(s, w) && (i = q);
            V ? O("..") : gadgets.config.register("rpc", null, function (a) {
                a = a.rpc || {};
                M(a);
                N(a)
            })
        },
        _getTargetWin: y,
        _parseSiblingId: p,
        ACK: "__ack",
        RPC_ID: G || "..",
        SEC_ERROR_LOAD_TIMEOUT: 0,
        SEC_ERROR_FRAME_PHISH: K,
        SEC_ERROR_FORGED_MSG: x
    }
}(), gadgets.rpc.init());
shindig.uri = function () {
    var B = /^(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    return function (i) {
        function o(a) {
            if (null === a.match(B)) throw "Malformed URL: " + a;
            j = RegExp.$1;
            k = RegExp.$2;
            m = RegExp.$3;
            g = RegExp.$4;
            h = RegExp.$5
        }

        function p(a) {
            for (var b = [], d = 0, C = a.length; d < C; ++d) {
                var l = a[d][0],
                    c = a[d][1];
                "undefined" != typeof c && b.push(q(l) + (null !== c ? "=" + q(c) : ""))
            }
            return b.join("&")
        }

        function r() {
            c && (g = p(c), c = null);
            return g
        }

        function s() {
            f && (h = p(f), f = null);
            return h
        }

        function t(a) {
            c = c || n(g);
            return u(c,
                a)
        }

        function v(a) {
            f = f || n(h);
            return u(f, a)
        }

        function w(a, b) {
            c = x(c || n(g), a, b);
            return e
        }

        function y(a, b) {
            f = x(f || n(h), a, b);
            return e
        }

        function z() {
            return [j, "" !== j ? ":" : "", "" !== k ? "//" : "", k].join("")
        }

        function n(a) {
            var b = [];
            if ("" === a) return b;
            for (var a = a.split("&"), d = 0, c = a.length; d < c; ++d) {
                var l = a[d].split("="),
                    f = l.shift(),
                    e = null;
                0 < l.length && (e = l.join("").replace(/\+/g, " "));
                b.push([f, null != e ? D(e) : null])
            }
            return b
        }

        function u(a, b) {
            for (var d = 0, c = a.length; d < c; ++d)
                if (a[d][0] == b) return a[d][1]
        }

        function x(a, b, d) {
            var c =
                b;
            "string" === typeof b && (c = {}, c[b] = d);
            for (var e in c) {
                for (var b = !1, d = 0, f = a.length; !b && d < f; ++d) a[d][0] == e && (a[d][1] = c[e], b = !0);
                b || a.push([e, c[e]])
            }
            return a
        }

        function A(a, b) {
            a = a || "";
            a[0] === b && (a = a.substr(b.length));
            return a
        }
        var j = "",
            k = "",
            m = "",
            g = "",
            c = null,
            h = "",
            f = null,
            D = window.decodeURIComponent ? decodeURIComponent : unescape,
            q = window.encodeURIComponent ? encodeURIComponent : escape,
            e = null;
        "object" === typeof i && "function" === typeof i.toString ? o(i.toString()) : i && o(i);
        return e = {
            getSchema: function () {
                return j
            },
            getAuthority: function () {
                return k
            },
            getOrigin: z,
            getPath: function () {
                return m
            },
            getQuery: r,
            getFragment: s,
            getQP: t,
            getFP: v,
            setSchema: function (a) {
                j = a;
                return e
            },
            setAuthority: function (a) {
                k = a;
                return e
            },
            setPath: function (a) {
                "undefined" !== typeof a && null != a && (m = ("/" === a[0] ? "" : "/") + a);
                return e
            },
            setQuery: function (a) {
                c = null;
                g = A(a, "?");
                return e
            },
            setFragment: function (a) {
                f = null;
                h = A(a, "#");
                return e
            },
            setQP: w,
            setFP: y,
            setExistingP: function (a, b) {
                "undefined" != typeof t(a, b) && w(a, b);
                "undefined" != typeof v(a, b) && y(a, b);
                return e
            },
            toString: function () {
                var a = r(),
                    b =
                    s();
                return [z(), m, "" !== a ? "?" : "", a, "" !== b ? "#" : "", b].join("")
            }
        }
    }
}();
gadgets.io = function () {
    function t() {
        var c;
        if ("undefined" != typeof shindig && shindig.xhrwrapper && shindig.xhrwrapper.createXHR) return shindig.xhrwrapper.createXHR();
        if ("undefined" != typeof ActiveXObject) try {
            return (c = new ActiveXObject("Msxml2.XMLHTTP")) || (c = new ActiveXObject("Microsoft.XMLHTTP")), c
        } catch (d) {}
        if ("undefined" != typeof XMLHttpRequest || window.XMLHttpRequest) return new window.XMLHttpRequest;
        throw "no xhr available";
    }

    function r(c, d) {
        if (4 !== c.readyState) return !0;
        try {
            if (200 !== c.status) {
                var a = "" + c.status;
                c.responseText && (a = a + " " + c.responseText);
                d({
                    errors: [a],
                    rc: c.status,
                    text: c.responseText
                });
                return !0
            }
        } catch (b) {
            return d({
                errors: [b.number + " Error not specified"],
                rc: b.number,
                text: b.description
            }), !0
        }
        return !1
    }

    function u(c, d, a, b) {
        r(b, d) || d(o(a, {
            body: b.responseText
        }))
    }

    function p(c, d, a, b) {
        if (!r(b, d)) {
            var b = b.responseText,
                h = m.unparseableCruft,
                g = b.indexOf(h) + h.length;
            g < h.length || (b = b.substr(g), b = eval("(" + b + ")"), b = b[c], b.oauthState && (n = b.oauthState), b.st && shindig.auth.updateSecurityToken(b.st), d(o(a, b)))
        }
    }

    function o(c,
        d) {
        var a = {
            text: d.body,
            rc: d.rc || 200,
            headers: d.headers,
            oauthApprovalUrl: d.oauthApprovalUrl,
            oauthError: d.oauthError,
            oauthErrorText: d.oauthErrorText,
            oauthErrorTrace: d.oauthErrorTrace,
            oauthErrorUri: d.oauthErrorUri,
            oauthErrorExplanation: d.oauthErrorExplanation,
            errors: []
        };
        if (200 > a.rc || 400 <= a.rc) a.errors = [a.rc + " Error"];
        else if (a.text) switch (300 <= a.rc && 400 > a.rc && (c.CONTENT_TYPE = "TEXT"), c.CONTENT_TYPE) {
        case "JSON":
        case "FEED":
            a.data = gadgets.json.parse(a.text);
            a.data || (a.errors.push("500 Failed to parse JSON"),
                a.rc = 500, a.data = null);
            break;
        case "DOM":
            var b;
            "undefined" != typeof DOMParser ? (b = (new DOMParser).parseFromString(a.text, "text/xml"), "parsererror" === b.documentElement.nodeName ? (a.errors.push("500 Failed to parse XML"), a.rc = 500) : a.data = b) : "undefined" != typeof ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.validateOnParse = !1, b.resolveExternals = !1, b.loadXML(a.text) ? a.data = b : (a.errors.push("500 Failed to parse XML"), a.rc = 500)) : (a.errors.push("500 Failed to parse XML because no DOM parser was available"),
                a.rc = 500);
            break;
        default:
            a.data = a.text
        }
        return a
    }

    function q(c, d, a, b, h, g, j, e) {
        var f = t();
        0 == d.indexOf("//") && (d = document.location.protocol + d);
        f.open(h, d, !0);
        a && (c = gadgets.util.makeClosure(null, j, c, a, g, f), gadgets.util.shouldPollXhrReadyStateChange() ? v(f, c) : f.onreadystatechange = c);
        "string" === typeof e && (e = {});
        e = e || {};
        null !== b && (e["Content-Type"] || (e["Content-Type"] = "application/x-www-form-urlencoded"));
        for (var k in e) f.setRequestHeader(k, e[k]);
        f.send(b)
    }

    function v(c, d) {
        var a = s;
        l[a] = window.setInterval(function () {
            c &&
                4 === c.readyState && (window.clearInterval(l[a]), delete l[a], d && d())
        }, m.xhrPollIntervalMs || 50);
        s++
    }
    var s = 0,
        l = {},
        m = {},
        n;
    gadgets.config.register("core.io", null, function (c) {
        m = c["core.io"] || {}
    });
    return {
        makeRequest: function (c, d, a) {
            var a = a || {},
                b = a.METHOD || "GET",
                h = a.REFRESH_INTERVAL,
                g, j;
            a.AUTHORIZATION && "NONE" !== a.AUTHORIZATION && (g = a.AUTHORIZATION.toLowerCase(), j = shindig.auth.getSecurityToken());
            var e = !0;
            "undefined" !== typeof a.SIGN_OWNER && (e = a.SIGN_OWNER);
            var f = !0;
            "undefined" !== typeof a.SIGN_VIEWER && (f = a.SIGN_VIEWER);
            var k = a.HEADERS || {};
            "POST" === b && !k["Content-Type"] && (k["Content-Type"] = "application/x-www-form-urlencoded");
            var l = gadgets.util.getUrlParameters(),
                e = {
                    url: c,
                    httpMethod: b,
                    headers: gadgets.io.encodeValues(k, !1),
                    postData: a.POST_DATA || "",
                    authz: g || "",
                    st: j || "",
                    contentType: a.CONTENT_TYPE || "TEXT",
                    numEntries: a.NUM_ENTRIES || "3",
                    getSummaries: !!a.GET_SUMMARIES,
                    signOwner: e,
                    signViewer: f,
                    gadget: l.url,
                    container: l.container || l.synd || "default",
                    bypassSpecCache: gadgets.util.getUrlParameters().nocache || "",
                    getFullHeaders: !!a.GET_FULL_HEADERS
                };
            if ("oauth" === g || "signed" === g || "oauth2" === g) {
                gadgets.io.oauthReceivedCallbackUrl_ && (e.OAUTH_RECEIVED_CALLBACK = gadgets.io.oauthReceivedCallbackUrl_, gadgets.io.oauthReceivedCallbackUrl_ = null);
                e.oauthState = n || "";
                for (var i in a)
                    if (a.hasOwnProperty(i) && (0 === i.indexOf("OAUTH_") || "code" === i)) e[i] = a[i]
            }
            g = (j = j || shindig.auth.getSecurityToken()) ? {
                "X-Shindig-ST": j
            } : {};
            j = m.jsonProxyUrl.replace("%host%", document.location.host);
            a: {
                if (gadgets.io.preloaded_ && "GET" === e.httpMethod)
                    for (i = 0; i < gadgets.io.preloaded_.length; i++)
                        if ((f =
                            gadgets.io.preloaded_[i]) && f.id === e.url) {
                            delete gadgets.io.preloaded_[i];
                            200 !== f.rc ? d({
                                rc: f.rc,
                                errors: [f.rc + " Error"]
                            }) : (f.oauthState && (n = f.oauthState), d(o(a, {
                                body: f.body,
                                rc: f.rc,
                                headers: f.headers,
                                oauthApprovalUrl: f.oauthApprovalUrl,
                                oauthError: f.oauthError,
                                oauthErrorText: f.oauthErrorText,
                                oauthErrorTrace: f.oauthErrorTrace,
                                oauthErrorUri: f.oauthErrorUri,
                                oauthErrorExplanation: f.oauthErrorExplanation,
                                errors: []
                            })));
                            i = !0;
                            break a
                        }
                i = !1
            }
            i || ("GET" == b && "undefined" != typeof h && (e.refresh = h), "GET" === b && !e.authz ?
                (b = "?" + gadgets.io.encodeValues(e), q(c, j + b, d, null, "GET", a, p, g)) : (b = gadgets.io.encodeValues(e), q(c, j, d, b, "POST", a, p, g)))
        },
        makeNonProxiedRequest: function (c, d, a, b) {
            a = a || {};
            q(c, c, d, a.POST_DATA, a.METHOD, a, u, b)
        },
        clearOAuthState: function () {
            n = void 0
        },
        encodeValues: function (c, d) {
            var a = !d,
                b = [],
                h = !1,
                g;
            for (g in c) c.hasOwnProperty(g) && !/___$/.test(g) && (h ? b.push("&") : h = !0, b.push(a ? encodeURIComponent(g) : g), b.push("="), b.push(a ? encodeURIComponent(c[g]) : c[g]));
            return b.join("")
        },
        getProxyUrl: function (c, d) {
            var a = m.proxyUrl;
            if (!a) return a;
            var b = d || {},
                h = b.REFRESH_INTERVAL;
            "undefined" == typeof h && (h = "3600");
            var g = gadgets.util.getUrlParameters(),
                j = shindig.auth.getSecurityToken(),
                e = b[gadgets.io.RequestParameters.AUTHORIZATION],
                f = b[gadgets.io.RequestParameters.OAUTH_SERVICE_NAME],
                b = b.rewriteMime ? "&rewriteMime=" + encodeURIComponent(b.rewriteMime) : "",
                k = "";
            e && (k = e == gadgets.io.AuthorizationType.OAUTH || e == gadgets.io.AuthorizationType.OAUTH2 ? "&authz=" + e.toLowerCase() + "&st=" + encodeURIComponent(j) + "&OAUTH_SERVICE_NAME=" + encodeURIComponent(f) :
                "&authz=" + e.toLowerCase());
            a = a.replace("%url%", encodeURIComponent(c)).replace("%host%", document.location.host).replace("%rawurl%", c).replace("%refresh%", encodeURIComponent(h)).replace("%gadget%", encodeURIComponent(g.url)).replace("%container%", encodeURIComponent(g.container || g.synd || "default")).replace("%authz%", k).replace("%rewriteMime%", b);
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            return a
        },
        processResponse_: p
    }
}();
gadgets.io.RequestParameters = gadgets.util.makeEnum("METHOD CONTENT_TYPE POST_DATA HEADERS AUTHORIZATION NUM_ENTRIES GET_SUMMARIES GET_FULL_HEADERS REFRESH_INTERVAL SIGN_OWNER SIGN_VIEWER OAUTH_SERVICE_NAME OAUTH_USE_TOKEN OAUTH_TOKEN_NAME OAUTH_REQUEST_TOKEN OAUTH_REQUEST_TOKEN_SECRET OAUTH_RECEIVED_CALLBACK".split(" "));
gadgets.io.MethodType = gadgets.util.makeEnum(["GET", "POST", "PUT", "DELETE", "HEAD"]);
gadgets.io.ContentType = gadgets.util.makeEnum(["TEXT", "DOM", "JSON", "FEED"]);
gadgets.io.AuthorizationType = gadgets.util.makeEnum(["NONE", "SIGNED", "OAUTH", "OAUTH2"]);
(function () {
    osapi.newBatch = function () {
        var e = {},
            g = [],
            j = function (b) {
                var c = {
                    method: b.request.method,
                    id: b.key
                };
                b.request.rpc && (c.params = b.request.rpc);
                return c
            };
        e.execute = function (b) {
            for (var c = {}, f = {}, e = 0, i = [], d = 0; d < g.length; d++) {
                var a = g[d].request.transport;
                f[a.name] || (i.push(a), e++);
                f[a.name] = f[a.name] || [];
                f[a.name].push(j(g[d]))
            }
            d = function (a) {
                a.error && (c.error = a.error);
                for (var d = 0; d < g.length; d++) {
                    var f = g[d].key,
                        h = a[f];
                    h && (c[f] = h.error ? h : h.data || h.result)
                }
                e--;
                0 === e && b(c)
            };
            for (a = 0; a < i.length; a++) i[a].execute(f[i[a].name],
                d);
            0 == e && window.setTimeout(function () {
                b(c)
            }, 0)
        };
        e.add = function (b, c) {
            c && b && g.push({
                key: b,
                request: c
            });
            return e
        };
        return e
    }
})();
osapi._registerMethod = function (b, d) {
    if ("newBatch" !== b) {
        for (var a = b.split("."), c = osapi, f = 0; f < a.length - 1; f++) c[a[f]] = c[a[f]] || {}, c = c[a[f]];
        var e = a[a.length - 1],
            g;
        c[e] && (g = c[e]);
        c[e] = function (a) {
            a = a || {};
            a.userId = a.userId || "@viewer";
            a.groupId = a.groupId || "@self";
            return new osapi._BoundCall(b, d, a)
        };
        "undefined" !== typeof tamings___ && (a = function () {
            caja___.markFunction(c[e], b)
        }, g && g.__taming_index ? (c[e].__taming_index = g.__taming_index, tamings___[g.__taming_index] = a) : (c[e].__taming_index = tamings___.length, tamings___.push(a)))
    }
};
osapi._BoundCall = function (b, d, a) {
    this.method = b;
    this.transport = d;
    this.rpc = a
};
osapi._BoundCall.prototype.execute = function (b) {
    var d = "undefined" !== typeof caja___ && caja___.getUseless && caja___.getUseless(),
        a = d ? caja___.getUseless() : this,
        c = d ? caja___.untame(b) : b,
        b = osapi.newBatch();
    b.add(this.method, this);
    b.execute(function (b) {
        b.error ? c.call(a, {
            error: b.error
        }) : c.call(a, b[a.method])
    })
};
shindig._uri = shindig.uri;
shindig.uri = function () {
    var f = shindig._uri;
    shindig._uri = null;
    return function (g) {
        var a = f(g);
        a.hasSameOrigin = function (b) {
            return a.getOrigin() == b.getOrigin()
        };
        a.resolve = function (b) {
            "" == a.getSchema() && a.setSchema(b.getSchema());
            "" == a.getAuthority() && a.setAuthority(b.getAuthority());
            var c = a.getPath();
            if ("" == c || "/" != c.charAt(0)) {
                var d = b.getPath(),
                    e = d.lastIndexOf("/"); - 1 != e && d.substring(0, e + 1);
                a.setPath(b.getPath() + c)
            }
        };
        return a
    }
}();
(function () {
    function i(e, d) {
        var c = {
                POST_DATA: gadgets.json.stringify(e),
                CONTENT_TYPE: "JSON",
                METHOD: "POST",
                AUTHORIZATION: "SIGNED"
            },
            f = {
                "Content-Type": "application/json"
            },
            a = this.name,
            g = shindig.auth.getSecurityToken();
        g && (h ? f.Authorization = "OAuth2 " + g : a = a + "?st=" + encodeURIComponent(g));
        gadgets.io.makeNonProxiedRequest(a, function (b) {
            if (b.errors[0]) d({
                error: {
                    code: b.rc,
                    message: b.text
                }
            });
            else {
                b = b.result || b.data;
                if (b.error) d(b);
                else {
                    for (var c = {}, a = 0; a < b.length; a++) c[b[a].id] = b[a];
                    d(c)
                }
            }
        }, c, f)
    }

    function j(e) {
        var d =
            e["osapi.services"];
        h = e["osapi.useOAuth2"];
        if (d)
            for (var c in d)
                if (d.hasOwnProperty(c) && (0 == c.indexOf("http") || 0 == c.indexOf("//")))
                    for (var e = {
                        name: c.replace("%host%", document.location.host),
                        execute: i
                    }, f = d[c], a = 0; a < f.length; a++) osapi._registerMethod(f[a], e)
    }
    var h;
    gadgets.config && gadgets.config.register("osapi.services", null, j)
})();
gadgets.util.registerOnLoadHandler(function () {
    osapi && (osapi.people && osapi.people.get) && (osapi.people.getViewer = function (a) {
        a = a || {};
        a.userId = "@viewer";
        a.groupId = "@self";
        return osapi.people.get(a)
    }, osapi.people.getViewerFriends = function (a) {
        a = a || {};
        a.userId = "@viewer";
        a.groupId = "@friends";
        return osapi.people.get(a)
    }, osapi.people.getOwner = function (a) {
        a = a || {};
        a.userId = "@owner";
        a.groupId = "@self";
        return osapi.people.get(a)
    }, osapi.people.getOwnerFriends = function (a) {
        a = a || {};
        a.userId = "@owner";
        a.groupId = "@friends";
        return osapi.people.get(a)
    })
});
osapi.container = {};
osapi.container.MetadataParam = {
    LOCAL_EXPIRE_TIME: "localExpireTimeMs",
    URL: "url"
};
osapi.container.MetadataResponse = {
    IFRAME_URLS: "iframeUrls",
    NEEDS_TOKEN_REFRESH: "needsTokenRefresh",
    VIEWS: "views",
    EXPIRE_TIME_MS: "expireTimeMs",
    FEATURES: "features",
    HEIGHT: "height",
    MODULE_PREFS: "modulePrefs",
    PREFERRED_HEIGHT: "preferredHeight",
    PREFERRED_WIDTH: "preferredWidth",
    RESPONSE_TIME_MS: "responseTimeMs",
    WIDTH: "width",
    TOKEN_TTL: "tokenTTL"
};
osapi.container.TokenResponse = {
    TOKEN: "token",
    TOKEN_TTL: "tokenTTL",
    MODULE_ID: "moduleId"
};
osapi.container.NavigateTiming = {
    URL: "url",
    ID: "id",
    START: "start",
    XRT: "xrt",
    SRT: "srt",
    DL: "dl",
    OL: "ol",
    PRT: "prt"
};
osapi.container.RenderParam = {
    ALLOW_DEFAULT_VIEW: "allowDefaultView",
    CAJOLE: "cajole",
    CLASS: "class",
    DEBUG: "debug",
    HEIGHT: "height",
    NO_CACHE: "nocache",
    TEST_MODE: "testmode",
    USER_PREFS: "userPrefs",
    VIEW: "view",
    WIDTH: "width",
    MODULE_ID: "moduleid"
};
osapi.container.ViewParam = {
    VIEW: "view"
};
osapi.container.CallbackType = {
    ON_BEFORE_PRELOAD: "onBeforePreload",
    ON_PRELOADED: "onPreloaded",
    ON_BEFORE_NAVIGATE: "onBeforeNavigate",
    ON_NAVIGATED: "onNavigated",
    ON_BEFORE_CLOSE: "onBeforeClose",
    ON_CLOSED: "onClosed",
    ON_BEFORE_UNLOAD: "onBeforeUnload",
    ON_UNLOADED: "onUnloaded",
    ON_BEFORE_RENDER: "onBeforeRender",
    ON_RENDER: "onRender",
    GADGET_ON_LOAD: "__gadgetOnLoad"
};
osapi.container.ContainerConfig = {
    ALLOW_DEFAULT_VIEW: "allowDefaultView",
    RENDER_CAJOLE: "renderCajole",
    RENDER_DEBUG: "renderDebug",
    RENDER_DEBUG_PARAM: "renderDebugParam",
    RENDER_TEST: "renderTest",
    TOKEN_REFRESH_INTERVAL: "tokenRefreshInterval",
    NAVIGATE_CALLBACK: "navigateCallback",
    PRELOAD_REF_TIME: "preloadRefTime",
    PRELOAD_METADATAS: "preloadMetadatas",
    PRELOAD_TOKENS: "preloadTokens",
    GET_LANGUAGE: "GET_LANGUAGE",
    GET_COUNTRY: "GET_COUNTRY",
    GET_PREFERENCES: "GET_PREFERENCES",
    SET_PREFERENCES: "SET_PREFERENCES",
    RPC_ARBITRATOR: "rpcArbitrator",
    GET_GADGET_TOKEN: "GET_GADGET_TOKEN",
    GET_CONTAINER_TOKEN: "GET_CONTAINER_TOKEN"
};
osapi.container.ServiceConfig = {
    API_HOST: "apiHost",
    API_PATH: "apiPath"
};
osapi.container.util = {};
osapi.container.util.getSafeJsonValue = function (a, b, c) {
    return "undefined" != typeof a[b] && null != a[b] ? a[b] : c
};
osapi.container.util.mergeJsons = function (a, b) {
    var c = {},
        d;
    for (d in a) c[d] = a[d];
    for (d in b) c[d] = b[d];
    return c
};
osapi.container.util.newMetadataRequest = function (a) {
    osapi.container.util.isArray(a) || (a = [a]);
    return {
        container: window.__CONTAINER,
        ids: a,
        fields: "iframeUrls modulePrefs.* needsTokenRefresh userPrefs.* views.preferredHeight views.preferredWidth expireTimeMs responseTimeMs rpcServiceIds tokenTTL".split(" ")
    }
};
osapi.container.util.newTokenRequest = function (a) {
    osapi.container.util.isArray(a) || (a = [a]);
    return {
        container: window.__CONTAINER,
        ids: a,
        fields: ["token", "tokenTTL", "moduleId"]
    }
};
osapi.container.util.toArrayOfJsonKeys = function (a) {
    var b = [],
        c;
    for (c in a) b.push(c);
    return b
};
osapi.container.util.isArray = function (a) {
    return "[object Array]" == Object.prototype.toString.call(a)
};
osapi.container.util.isEmptyJson = function (a) {
    for (var b in a) return !1;
    return !0
};
osapi.container.util.getCurrentTimeMs = function () {
    return (new Date).getTime()
};
osapi.container.util.createIframeHtml = function (a) {
    var b = [],
        c = 0;
    b[c++] = "<iframe ";
    for (var d in a) {
        var e = a[d];
        "undefined" != typeof e && (b[c++] = d, b[c++] = '="', b[c++] = e, b[c++] = '" ')
    }
    b[c++] = "></iframe>";
    return b.join("")
};
osapi.container.util.buildTokenRequestUrl = function (a, b) {
    a = shindig.uri(a);
    b && a.setFragment(b);
    return a.toString()
};
osapi.container.Site = function (b, a, c) {
    this.container_ = b;
    this.service_ = a;
    this.id_ = (this.el_ = c) && this.el_.id ? this.el_.id : osapi.container.Site.prototype.nextUniqueSiteId_++;
    this.ownerId_ = this.parentId_ = void 0
};
osapi.container.Site.prototype.nextUniqueSiteId_ = 0;
osapi.container.Site.prototype.onConstructed = function () {};
osapi.container.Site.prototype.getId = function () {
    return this.id_
};
osapi.container.Site.prototype.setWidth = function (b) {
    var a = this.getActiveSiteHolder();
    if (a && (a = a.getIframeElement())) a.style.width = b + "px";
    return this
};
osapi.container.Site.prototype.setHeight = function (b) {
    var a = this.getActiveSiteHolder();
    if (a && (a = a.getIframeElement())) a.style.height = b + "px";
    return this
};
osapi.container.Site.prototype.close = function () {
    var b = this.getActiveSiteHolder();
    b && b.dispose()
};
osapi.container.Site.prototype.getParentId = function () {
    return this.parentId_
};
osapi.container.Site.prototype.setParentId = function (b) {
    this.parentId_ = b;
    return this
};
osapi.container.Site.prototype.getActiveSiteHolder = function () {
    throw Error("This method must be implemented by a subclass.");
};
osapi.container.Site.prototype.render = function () {
    throw Error("This method must be implemented by a subclass.");
};
osapi.container.SiteHolder = function (c, b, a) {
    this.site_ = c;
    this.el_ = b;
    this.onLoad_ = a;
    this.renderParams_ = this.iframeId_ = void 0;
    this.onConstructed()
};
osapi.container.SiteHolder.prototype.onConstructed = function () {};
osapi.container.SiteHolder.prototype.getElement = function () {
    return this.el_
};
osapi.container.SiteHolder.prototype.getIframeId = function () {
    return this.iframeId_
};
osapi.container.SiteHolder.prototype.dispose = function () {
    this.el_ && this.el_.firstChild && this.el_.removeChild(this.el_.firstChild)
};
osapi.container.SiteHolder.prototype.createIframeHtml = function (c, b) {
    return osapi.container.util.createIframeHtml(this.createIframeAttributeMap(c, b))
};
osapi.container.SiteHolder.prototype.createIframeAttributeMap = function (c, b) {
    var a = this.renderParams_ || {},
        a = {
            id: this.iframeId_,
            name: this.iframeId_,
            src: c,
            scrolling: "no",
            marginwidth: 0,
            marginheight: 0,
            frameborder: 0,
            vspace: 0,
            hspace: 0,
            "class": a[osapi.container.RenderParam.CLASS],
            height: a[osapi.container.RenderParam.HEIGHT],
            width: a[osapi.container.RenderParam.WIDTH],
            onload: this.onLoad_ ? "window." + this.onLoad_ + "('" + this.getUrl() + "', '" + this.site_.getId() + "');" : void 0
        };
    if (b)
        for (var d in b) a[d] = b[d];
    return a
};
osapi.container.SiteHolder.prototype.getIframeElement = function () {
    throw Error("This method must be implemented by a subclass.");
};
osapi.container.SiteHolder.prototype.render = function () {
    throw Error("This method must be implemented by a subclass.");
};
osapi.container.SiteHolder.prototype.getUrl = function () {
    throw Error("This method must be implemented by a subclass.");
};
osapi.container.GadgetHolder = function (a, b, c) {
    osapi.container.SiteHolder.call(this, a, b, c);
    this.securityToken_ = this.viewParams_ = this.gadgetInfo_ = void 0;
    this.onConstructed()
};
osapi.container.GadgetHolder.prototype = new osapi.container.SiteHolder;
osapi.container.GadgetHolder.prototype.relayPath_ = null;
osapi.container.GadgetHolder.prototype.getGadgetInfo = function () {
    return this.gadgetInfo_
};
osapi.container.GadgetHolder.prototype.dispose = function () {
    osapi.container.SiteHolder.prototype.dispose.call(this);
    this.gadgetInfo_ = null
};
osapi.container.GadgetHolder.prototype.getUrl = function () {
    return this.gadgetInfo_ && this.gadgetInfo_.url
};
osapi.container.GadgetHolder.prototype.getView = function () {
    return this.renderParams_[osapi.container.RenderParam.VIEW]
};
osapi.container.GadgetHolder.prototype.getIframeElement = function () {
    return this.el_.getElementsByTagName("iframe")[0]
};
osapi.container.GadgetHolder.prototype.setSecurityToken = function (a) {
    this.securityToken_ = a;
    return this
};
osapi.container.GadgetHolder.prototype.render = function (a, b, c) {
    this.iframeId_ = osapi.container.GadgetHolder.IFRAME_ID_PREFIX_ + this.site_.getId();
    this.gadgetInfo_ = a;
    this.viewParams_ = b;
    this.renderParams_ = c;
    this.hasFeature_(a, "pubsub-2") ? this.doOaaIframeHtml_() : this.doNormalIframeHtml_()
};
osapi.container.GadgetHolder.IFRAME_ID_PREFIX_ = "__gadget_";
osapi.container.GadgetHolder.prototype.doNormalIframeHtml_ = function () {
    var a = this.getIframeUrl_();
    this.el_.innerHTML = this.createIframeHtml(a);
    var a = shindig.uri(a),
        b = shindig.uri().setSchema(a.getSchema()).setAuthority(a.getAuthority()).setPath(this.relayPath_);
    gadgets.rpc.setupReceiver(this.iframeId_, b.toString(), a.getFP("rpctoken"))
};
osapi.container.GadgetHolder.prototype.doOaaIframeHtml_ = function () {
    this.removeOaaContainer_(this.iframeId_);
    new OpenAjax.hub.IframeContainer(gadgets.pubsub2router.hub, this.iframeId_, {
        Container: {
            onSecurityAlert: function (a, b) {
                gadgets.error(["Security error for container ", a.getClientID(), " : ", b].join(""));
                a.getIframe().src = "about:blank"
            },
            onConnect: function (a) {
                gadgets.log(["connected: ", a.getClientID()].join(""))
            }
        },
        IframeContainer: {
            parent: this.el_,
            uri: this.getIframeUrl_(),
            tunnelURI: shindig.uri(this.relayPath_).resolve(shindig.uri(window.location.href)),
            iframeAttrs: this.createIframeAttributeMap(this.getIframeUrl_()),
            onGadgetLoad: this.onLoad_
        }
    })
};
osapi.container.GadgetHolder.prototype.removeOaaContainer_ = function (a) {
    (a = gadgets.pubsub2router.hub.getContainer(a)) && gadgets.pubsub2router.hub.removeContainer(a)
};
osapi.container.GadgetHolder.prototype.hasFeature_ = function (a, b) {
    var c = a[osapi.container.MetadataResponse.MODULE_PREFS];
    return c && (c = c[osapi.container.MetadataResponse.FEATURES]) && c[b] ? !0 : !1
};
osapi.container.GadgetHolder.prototype.getIframeUrl_ = function () {
    var a = shindig.uri(this.gadgetInfo_[osapi.container.MetadataResponse.IFRAME_URLS][this.getView()]);
    a.setQP("debug", this.renderParams_[osapi.container.RenderParam.DEBUG] ? "1" : "0");
    a.setQP("nocache", this.renderParams_[osapi.container.RenderParam.NO_CACHE] ? "1" : "0");
    a.setQP("testmode", this.renderParams_[osapi.container.RenderParam.TEST_MODE] ? "1" : "0");
    a.setQP("view", this.getView());
    if (this.renderParams_[osapi.container.RenderParam.CAJOLE]) {
        var b =
            a.getQP("libs");
        null == b || "" == b ? a.setQP("libs", "caja") : a.setQP("libs", [b, ":caja"].join(""));
        a.setQP("caja", "1")
    }
    this.updateUserPrefParams_(a);
    a.setQP("parent", window.__CONTAINER_URI.getOrigin());
    this.securityToken_ && a.setExistingP("st", this.securityToken_);
    a.setQP("mid", "" + this.site_.getModuleId());
    osapi.container.util.isEmptyJson(this.viewParams_) || (b = gadgets.json.stringify(this.viewParams_), a.setFP("view-params", b));
    "undefined" === typeof a.getFP("rpctoken") && (b = 2147483647 * Math.random() | 0, a.setFP("rpctoken",
        b));
    var b = this.site_.service_.getLanguage(),
        c = this.site_.service_.getCountry(),
        e = a.getQP("lang"),
        d = a.getQP("country"); - 1 != e.indexOf("%") && a.setQP("lang", b); - 1 != d.indexOf("%") && a.setQP("country", c);
    return a.toString()
};
osapi.container.GadgetHolder.prototype.updateUserPrefParams_ = function (a) {
    var b = this.renderParams_[osapi.container.RenderParam.USER_PREFS];
    if (b)
        for (var c in b) {
            var e = "up_" + c,
                d = b[c];
            d instanceof Array && (d = d.join("|"));
            a.setExistingP(e, d)
        }
};

function init(a) {
    a.container && (osapi.container.GadgetHolder.prototype.relayPath_ = a.container.relayPath)
}
gadgets.config && gadgets.config.register("container", null, init);
osapi.container.GadgetSite = function (b, c, d) {
    osapi.container.Site.call(this, b, c, d.gadgetEl);
    this.navigateCallback_ = d.navigateCallback;
    this.loadingGadgetEl_ = d.bufferEl;
    this.gadgetOnLoad_ = d.gadgetOnLoad;
    this.moduleId_ = 0;
    this.loadingGadgetHolder_ = this.currentGadgetHolder_ = void 0;
    this.onConstructed()
};
osapi.container.GadgetSite.prototype = new osapi.container.Site;
osapi.container.GadgetSite.prototype.getModuleId = function () {
    return this.moduleId_
};
osapi.container.GadgetSite.prototype.setModuleId_ = function (b, c, d) {
    if (c && this.moduleId_ != c) {
        var a = this,
            b = osapi.container.util.buildTokenRequestUrl(b, c);
        if (!a.service_.getCachedGadgetToken(b)) {
            c = osapi.container.util.newTokenRequest([b]);
            a.service_.getGadgetToken(c, function (c) {
                var e;
                if (c && c[b] && ((e = c[b][osapi.container.TokenResponse.TOKEN_TTL]) && a.container_.scheduleRefreshTokens_(e), (c = c[b][osapi.container.TokenResponse.MODULE_ID]) || 0 == c)) a.moduleId_ = c;
                d && d()
            });
            return
        }
    }
    d && d()
};
osapi.container.GadgetSite.prototype.getActiveSiteHolder = function () {
    return this.loadingGadgetHolder_ || this.currentGadgetHolder_
};
osapi.container.GadgetSite.prototype.getFeature = function (b, c) {
    var d = c || this.getActiveSiteHolder().getGadgetInfo();
    return d[osapi.container.MetadataResponse.FEATURES] && d[osapi.container.MetadataResponse.FEATURES][b]
};
osapi.container.GadgetSite.prototype.navigateTo = function (b, c, d, a) {
    var f = osapi.container.util.getCurrentTimeMs(),
        e = this.service_.getCachedGadgetMetadata(b),
        h = a || function () {},
        g = this;
    this.service_.getGadgetMetadata(osapi.container.util.newMetadataRequest([b]), function (a) {
        var j = !e ? osapi.container.util.getCurrentTimeMs() - f : 0,
            i = a[b];
        i.error ? (a = ["Failed to navigate for gadget ", b, "."].join(""), gadgets.warn(a), a = ["Detailed error: ", i.error.code || "", " ", i.error.message || ""].join(""), gadgets.log(a)) : g.setModuleId_(b,
            d[osapi.container.RenderParam.MODULE_ID] || 0, function () {
                g.container_.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_BEFORE_RENDER, i);
                g.render(i, c, d)
            });
        a = {};
        a[osapi.container.NavigateTiming.URL] = b;
        a[osapi.container.NavigateTiming.ID] = g.id_;
        a[osapi.container.NavigateTiming.START] = f;
        a[osapi.container.NavigateTiming.XRT] = j;
        g.onNavigateTo(a);
        h(i)
    })
};
osapi.container.GadgetSite.prototype.onNavigateTo = function (b) {
    if (this.navigateCallback_) {
        var c = window[this.navigateCallback_];
        "function" === typeof c && c(b)
    }
};
osapi.container.GadgetSite.prototype.render = function (b, c, d) {
    var a = null;
    if ((this.currentGadgetHolder_ ? this.currentGadgetHolder_.getUrl() : null) == b.url) a = this.currentGadgetHolder_.getView();
    var f = function (a) {
            if ("undefined" !== typeof a && null != a)
                for (var a = a.aliases || [], c = 0; c < a.length; c++)
                    if (b[osapi.container.MetadataResponse.VIEWS][a[c]]) return {
                        view: a[c],
                        viewInfo: b[osapi.container.MetadataResponse.VIEWS][a[c]]
                    };
            return null
        },
        a = d[osapi.container.RenderParam.VIEW] || c[osapi.container.ViewParam.VIEW] || a,
        e = b[osapi.container.MetadataResponse.VIEWS][a];
    if (a && !e) {
        var h = f(gadgets.config.get("views")[a]);
        h && (a = h.view, e = h.viewInfo)
    }
    if (!e && (d[osapi.container.RenderParam.ALLOW_DEFAULT_VIEW] && a != osapi.container.GadgetSite.DEFAULT_VIEW_) && (a = osapi.container.GadgetSite.DEFAULT_VIEW_, e = b[osapi.container.MetadataResponse.VIEWS][a], !e && (h = f(gadgets.config.get("views")[a])))) a = h.view, e = h.viewInfo;
    if (e) {
        this.currentGadgetHolder_ && !this.loadingGadgetEl_ ? (this.loadingGadgetHolder_ = this.currentGadgetHolder_, this.currentGadgetHolder_ = null) : this.loadingGadgetHolder_ =
            new osapi.container.GadgetHolder(this, this.loadingGadgetEl_ || this.el_, this.gadgetOnLoad_);
        var f = {},
            g;
        for (g in d) f[g] = d[g];
        f[osapi.container.RenderParam.VIEW] = a;
        f[osapi.container.RenderParam.HEIGHT] = d[osapi.container.RenderParam.HEIGHT] || e[osapi.container.MetadataResponse.PREFERRED_HEIGHT] || b[osapi.container.MetadataResponse.MODULE_PREFS][osapi.container.MetadataResponse.HEIGHT] || "" + osapi.container.GadgetSite.DEFAULT_HEIGHT_;
        f[osapi.container.RenderParam.WIDTH] = d[osapi.container.RenderParam.WIDTH] ||
            e[osapi.container.MetadataResponse.PREFERRED_WIDTH] || b[osapi.container.MetadataResponse.MODULE_PREFS][osapi.container.MetadataResponse.WIDTH] || "" + osapi.container.GadgetSite.DEFAULT_WIDTH_;
        this.updateSecurityToken_(b, f);
        this.loadingGadgetHolder_.render(b, c, f);
        this.onRender(b, c, d)
    } else gadgets.warn(["Unsupported view ", a, " for gadget ", b.url, "."].join(""))
};
osapi.container.GadgetSite.prototype.onRender = function () {
    this.swapBuffers_();
    this.currentGadgetHolder_ && this.currentGadgetHolder_.dispose();
    this.currentGadgetHolder_ = this.loadingGadgetHolder_;
    this.loadingGadgetHolder_ = null
};
osapi.container.GadgetSite.prototype.rpcCall = function (b, c, d) {
    this.currentGadgetHolder_ && gadgets.rpc.call(this.currentGadgetHolder_.getIframeId(), b, c, d)
};
osapi.container.GadgetSite.prototype.updateSecurityToken_ = function (b) {
    (b = this.service_.getCachedGadgetToken(osapi.container.util.buildTokenRequestUrl(b.url, this.moduleId_))) && this.loadingGadgetHolder_.setSecurityToken(b[osapi.container.TokenResponse.TOKEN])
};
osapi.container.GadgetSite.prototype.close = function () {
    this.loadingGadgetHolder_ && this.loadingGadgetHolder_.dispose();
    this.currentGadgetHolder_ && this.currentGadgetHolder_.dispose()
};
osapi.container.GadgetSite.prototype.swapBuffers_ = function () {
    if (this.loadingGadgetEl_) {
        this.loadingGadgetEl_.style.left = "";
        this.loadingGadgetEl_.style.position = "";
        this.el_.style.position = "absolute";
        this.el_.style.left = "-2000px";
        var b = this.el_;
        this.el_ = this.loadingGadgetEl_;
        this.loadingGadgetEl_ = b
    }
};
osapi.container.GadgetSite.RPC_ARG_KEY = "gs";
osapi.container.GadgetSite.DEFAULT_HEIGHT_ = 200;
osapi.container.GadgetSite.DEFAULT_WIDTH_ = 320;
osapi.container.GadgetSite.DEFAULT_VIEW_ = "default";
osapi.container.UrlHolder = function (a, b, c) {
    osapi.container.SiteHolder.call(this, a, b, c);
    this.url_ = void 0;
    this.onConstructed()
};
osapi.container.UrlHolder.prototype = new osapi.container.SiteHolder;
osapi.container.UrlHolder.prototype.dispose = function () {
    osapi.container.SiteHolder.prototype.dispose.call(this);
    this.url_ = null
};
osapi.container.UrlHolder.prototype.getIframeElement = function () {
    return this.el_.firstChild
};
osapi.container.UrlHolder.prototype.getUrl = function () {
    return this.url_
};
osapi.container.UrlHolder.prototype.render = function (a, b) {
    this.iframeId_ = osapi.container.UrlHolder.IFRAME_PREFIX_ + this.site_.getId();
    this.renderParams_ = b;
    this.el_.innerHTML = this.createIframeHtml(this.url_ = a, {
        scrolling: "auto"
    })
};
osapi.container.UrlHolder.IFRAME_PREFIX_ = "__url_";
osapi.container.UrlSite = function (c, a, b) {
    osapi.container.Site.call(this, c, a, b[osapi.container.UrlSite.URL_ELEMENT]);
    this.url_ = this.holder_ = void 0;
    this.onConstructed()
};
osapi.container.UrlSite.prototype = new osapi.container.Site;
osapi.container.UrlSite.prototype.getActiveSiteHolder = function () {
    return this.holder_
};
osapi.container.UrlSite.prototype.render = function (c, a) {
    this.holder_ = new osapi.container.UrlHolder(this, this.el_);
    var b = {},
        d;
    for (d in a) b[d] = a[d];
    this.holder_.render(c, b)
};
osapi.container.UrlSite.URL_ELEMENT = "urlEl";
(function () {
    function i(a, b, c) {
        this.isClosed(a) && "undefined" != typeof d[c] && (window.clearInterval(d[c]), delete d[c], b())
    }
    var d = {},
        j = 1,
        e = {
            open: function (a, b, c, e) {
                var g = a + ":" + c + ":" + b,
                    f = this.getWindow(a, b);
                if (f) {
                    var h = j++,
                        k = gadgets.util.makeClosure(this, function (a) {
                            this.closeWindow(f);
                            gadgets.rpc.call(c, "oauth.close", null, a)
                        }, h);
                    d[g] = window.setInterval(gadgets.util.makeClosure(this, i, f, k, g), 100);
                    e(h)
                } else this.error(Array.prototype.slice.call(arguments))
            },
            getWindow: function (a, b) {
                return window.open(a, "_blank",
                    b)
            },
            closeWindow: function (a) {
                a && a.close && a.close()
            },
            isClosed: function (a) {
                return !a || a.closed
            },
            error: function () {
                gadgets.warn("OAuth popup window was not opened.")
            }
        };
    osapi && osapi.container && osapi.container.Container && osapi.container.Container.addMixin ? osapi.container.Container.addMixin("oauth", function (a) {
        gadgets.rpc.register("oauth.open", function (b, c) {
            a.oauth.open(b, c, this.f, this.callback)
        });
        return e
    }) : gadgets.rpc.register("oauth.open", function (a, b) {
        e.open(a, b, this.f, this.callback)
    })
})();
osapi.container.Service = function (a) {
    this.container_ = a;
    var a = this.config_ = a.config_ || {},
        b = /^([^\/]*\/\/[^\/]+)(.*)$/.exec(((gadgets.config.get("osapi") || {}).endPoints || [window.__API_URI.getOrigin() + "/rpc"])[0]);
    this.apiHost_ = "" + osapi.container.util.getSafeJsonValue(a, osapi.container.ServiceConfig.API_HOST, b[1]);
    this.apiPath_ = "" + osapi.container.util.getSafeJsonValue(a, osapi.container.ServiceConfig.API_PATH, b[2]);
    this.cachedMetadatas_ = {};
    this.cachedTokens_ = {};
    a.GET_LANGUAGE && (this.getLanguage = a.GET_LANGUAGE);
    a.GET_COUNTRY && (this.getCountry = a.GET_COUNTRY);
    this.registerOsapiServices();
    this.onConstructed(a)
};
osapi.container.Service.prototype.onConstructed = function () {};
osapi.container.Service.prototype.getGadgetMetadata = function (a, b) {
    var f = b || function () {},
        d = osapi.container.util.toArrayOfJsonKeys(this.getUncachedDataByRequest_(this.cachedMetadatas_, a)),
        c = this.getCachedDataByRequest_(this.cachedMetadatas_, a);
    if (0 == d.length) f(c);
    else {
        var g = this;
        a.ids = d;
        a.language = this.getLanguage();
        a.country = this.getCountry();
        this.updateContainerSecurityToken(function (b) {
            if (b) {
                for (var e = 0; e < a.ids.length; e++) c[a.ids[e]] = {
                    error: b
                };
                f(c)
            } else osapi.gadgets.metadata(a).execute(function (b) {
                if (b.error)
                    for (var e =
                        0; e < a.ids.length; e++) {
                        var d = a.ids[e];
                        c[d] = {
                            error: b.error
                        }
                    } else
                        for (d in e = osapi.container.util.getCurrentTimeMs(), b) {
                            var h = b[d];
                            g.updateResponse_(h, d, e);
                            g.cachedMetadatas_[d] = h;
                            c[d] = h
                        }
                f(c)
            })
        })
    }
};
osapi.container.Service.prototype.addGadgetMetadatas = function (a, b) {
    this.addToCache_(a, b, this.cachedMetadatas_)
};
osapi.container.Service.prototype.addGadgetTokens = function (a, b) {
    this.addToCache_(a, b, this.cachedTokens_)
};
osapi.container.Service.prototype.addToCache_ = function (a, b, f) {
    var d = osapi.container.util.getCurrentTimeMs(),
        c;
    for (c in a) {
        var g = a[c];
        this.updateResponse_(g, c, d, b);
        f[c] = g
    }
};
osapi.container.Service.prototype.updateResponse_ = function (a, b, f, d) {
    a[osapi.container.MetadataParam.URL] = b;
    a[osapi.container.MetadataParam.LOCAL_EXPIRE_TIME] = a[osapi.container.MetadataResponse.EXPIRE_TIME_MS] - (null == d ? a[osapi.container.MetadataResponse.RESPONSE_TIME_MS] : d) + f
};
osapi.container.Service.prototype.getGadgetToken = function (a, b) {
    var f = b || function () {},
        d = this,
        c = function (b) {
            var c = {};
            if (b.error)
                for (var e = 0; e < a.ids.length; e++) c[a.ids[e]] = {
                    error: b.error
                };
            else
                for (e in b) {
                    var k = osapi.container.util.buildTokenRequestUrl(e, b[osapi.container.TokenResponse.MODULE_ID]);
                    d.cachedTokens_[k] = b[e];
                    c[e] = b[e]
                }
            f(c)
        };
    d.updateContainerSecurityToken(function (b) {
        if (b) c({
            error: b
        });
        else if (d.config_[osapi.container.ContainerConfig.GET_GADGET_TOKEN]) d.config_[osapi.container.ContainerConfig.GET_GADGET_TOKEN](a,
            c);
        else osapi.gadgets.token(a).execute(c)
    })
};
osapi.container.Service.prototype.getCachedGadgetMetadata = function (a) {
    return this.cachedMetadatas_[a]
};
osapi.container.Service.prototype.getCachedGadgetToken = function (a) {
    return this.cachedTokens_[a]
};
osapi.container.Service.prototype.uncacheStaleGadgetMetadataExcept = function (a) {
    for (var b in this.cachedMetadatas_) "undefined" === typeof a[b] && this.cachedMetadatas_[b][osapi.container.MetadataParam.LOCAL_EXPIRE_TIME] < osapi.container.util.getCurrentTimeMs() && delete this.cachedMetadatas_[b]
};
osapi.container.Service.prototype.registerOsapiServices = function () {
    var a = this.apiHost_ + this.apiPath_,
        b = {
            "gadgets.rpc": ["container.listMethods"]
        };
    b[a] = ["gadgets.metadata", "gadgets.token"];
    gadgets.config.init({
        osapi: {
            endPoints: [a]
        },
        "osapi.services": b
    })
};
osapi.container.Service.prototype.getCachedDataByRequest_ = function (a, b) {
    return this.filterCachedDataByRequest_(a, b, function (a) {
        return "undefined" !== typeof a
    })
};
osapi.container.Service.prototype.getUncachedDataByRequest_ = function (a, b) {
    return this.filterCachedDataByRequest_(a, b, function (a) {
        return "undefined" === typeof a
    })
};
osapi.container.Service.prototype.filterCachedDataByRequest_ = function (a, b, f) {
    for (var d = {}, c = 0; c < b.ids.length; c++) {
        var g = b.ids[c],
            h = a[g];
        f(h) && (d[g] = h)
    }
    return d
};
osapi.container.Service.prototype.getLocale_ = function () {
    var a = window.navigator;
    return a.userLanguage || a.systemLanguage || a.language
};
osapi.container.Service.prototype.getLanguage = function () {
    try {
        return this.getLocale_().split("-")[0] || "ALL"
    } catch (a) {
        return "ALL"
    }
};
osapi.container.Service.prototype.getCountry = function () {
    try {
        return this.getLocale_().split("-")[1] || "ALL"
    } catch (a) {
        return "ALL"
    }
};
(function () {
    function a(a, b) {
        for (; a.length;) a.shift().call(null, b)
    }

    function b(e) {
        var k = this;
        f && (clearTimeout(f), f = 0);
        (e = e || this.config_[osapi.container.ContainerConfig.GET_CONTAINER_TOKEN]) ? c || (c = !0, e(function (e, j, i) {
            c = false;
            (g = typeof j == "number" ? j * 800 : g) && (f = setTimeout(gadgets.util.makeClosure(k, b, null), g));
            if (e) {
                shindig.auth.updateSecurityToken(e);
                d = osapi.container.util.getCurrentTimeMs();
                a(h)
            } else i && a(h, i)
        })): (c = !1, a(h))
    }
    var f, d, c, g = 144E4,
        h = [];
    osapi.container.Service.prototype.updateContainerSecurityToken =
        function (a, f, l) {
            var j = osapi.container.util.getCurrentTimeMs(),
                i = "boolean" != typeof f && f || void 0,
                f = "boolean" == typeof f && f;
            g && (c || i || !d || j > d + g) ? (d && !(j > d + 95 * g / 80) && a ? a() : a && h.push(a), i ? b.call(this, function (a) {
                a(i, l)
            }) : !c && !f && b.call(this)) : a && a()
        }
})();
osapi.container.Container = function (a) {
    a = this.config_ = a || {};
    this.gadgetLifecycleCallbacks_ = {};
    this.preloadedGadgetUrls_ = {};
    this.sites_ = {};
    this.allowDefaultView_ = Boolean(osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.ALLOW_DEFAULT_VIEW, !0));
    this.renderCajole_ = Boolean(osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.RENDER_CAJOLE, !1));
    this.renderDebugParam_ = "" + osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.RENDER_DEBUG_PARAM, osapi.container.ContainerConfig.RENDER_DEBUG);
    var b = window.__CONTAINER_URI.getQP(this.renderDebugParam_);
    this.renderDebug_ = "undefined" === typeof b ? Boolean(osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.RENDER_DEBUG, !1)) : "1" === b;
    this.renderTest_ = Boolean(osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.RENDER_TEST, !1));
    this.tokenRefreshInterval_ = Number(osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.TOKEN_REFRESH_INTERVAL, 0));
    this.lastRefresh_ = 0;
    this.navigateCallback_ = "" + osapi.container.util.getSafeJsonValue(a,
        osapi.container.ContainerConfig.NAVIGATE_CALLBACK, null);
    this.service_ = new osapi.container.Service(this);
    this.tokenRefreshTimer_ = null;
    var c = this;
    window[osapi.container.CallbackType.GADGET_ON_LOAD] = function (a, b) {
        c.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_RENDER, a, b)
    };
    this.initializeMixins_();
    this.setupRpcArbitrator_(a);
    this.preloadCaches(a);
    this.registerRpcServices_();
    this.onConstructed(a)
};
osapi.container.Container.prototype.newGadgetSite = function (a, b) {
    var c = new osapi.container.GadgetSite(this, this.service_, {
        navigateCallback: this.navigateCallback_,
        gadgetEl: a,
        bufferEl: b || null,
        gadgetOnLoad: osapi.container.CallbackType.GADGET_ON_LOAD
    });
    return this.sites_[c.getId()] = c
};
osapi.container.Container.prototype.navigateGadget = function (a, b, c, d, e) {
    var f = e || function () {},
        e = osapi.container.ContainerConfig,
        g = osapi.container.RenderParam;
    this.allowDefaultView_ && (d[g.ALLOW_DEFAULT_VIEW] = !0);
    this.renderCajole_ && (d[g.CAJOLE] = !0);
    this.renderDebug_ && (d[g.NO_CACHE] = !0, d[g.DEBUG] = !0);
    this.renderTest_ && (d[g.TEST_MODE] = !0);
    this.refreshService_();
    var h = this,
        i = function (e) {
            d[g.USER_PREFS] = e;
            h.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_BEFORE_NAVIGATE, b, a.getId());
            a.navigateTo(b,
                c, d, function (c) {
                    c.error ? gadgets.warn(["Failed to possibly schedule token refresh for gadget ", b, "."].join("")) : c[osapi.container.MetadataResponse.NEEDS_TOKEN_REFRESH] && h.scheduleRefreshTokens_(c[osapi.container.MetadataResponse.TOKEN_TTL]);
                    h.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_NAVIGATED, a);
                    f(c)
                })
        };
    if (this.config_[e.GET_PREFERENCES] && !d[g.USER_PREFS]) this.config_[e.GET_PREFERENCES](a.getId(), b, i);
    else i(d[g.USER_PREFS])
};
osapi.container.Container.prototype.closeGadget = function (a) {
    var b = a.getId();
    this.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_BEFORE_CLOSE, a);
    a.close();
    this.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_CLOSED, a);
    delete this.sites_[b];
    a instanceof osapi.container.GadgetSite && this.unscheduleRefreshTokens_()
};
osapi.container.Container.prototype.addGadgetLifecycleCallback = function (a, b) {
    return !this.gadgetLifecycleCallbacks_[a] ? (this.gadgetLifecycleCallbacks_[a] = b, !0) : !1
};
osapi.container.Container.prototype.removeGadgetLifecycleCallback = function (a) {
    delete this.gadgetLifecycleCallbacks_[a]
};
osapi.container.Container.prototype.preloadGadget = function (a, b) {
    this.preloadGadgets([a], b)
};
osapi.container.Container.prototype.preloadGadgets = function (a, b) {
    var c = b || function () {},
        d = osapi.container.util.newMetadataRequest(a),
        e = this;
    this.refreshService_();
    this.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_BEFORE_PRELOAD, a);
    this.service_.getGadgetMetadata(d, function (a) {
        e.addPreloadGadgets_(a);
        e.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_PRELOADED, a);
        c(a)
    })
};
osapi.container.Container.prototype.unloadGadget = function (a) {
    this.unloadGadgets([a])
};
osapi.container.Container.prototype.unloadGadgets = function (a) {
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        this.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_BEFORE_UNLOAD, c);
        delete this.preloadedGadgetUrls_[c];
        this.applyLifecycleCallbacks_(osapi.container.CallbackType.ON_UNLOADED, c)
    }
};
osapi.container.Container.prototype.getGadgetMetadata = function (a, b) {
    var c = osapi.container.util.newMetadataRequest([a]);
    this.refreshService_();
    this.service_.getGadgetMetadata(c, b)
};
osapi.container.Container.prototype.rpcRegister = function (a, b) {
    var c = this;
    return gadgets.rpc.register(a, function () {
        this[osapi.container.GadgetSite.RPC_ARG_KEY] = c.getGadgetSiteByIframeId_(this.f);
        for (var a = [this], e = 0; e < arguments.length; ++e) a.push(arguments[e]);
        return b.apply(c, a)
    })
};
osapi.container.Container.prototype.onConstructed = function () {};
osapi.container.Container.addMixin = function (a, b) {
    var c = osapi.container.Container.prototype.mixins_;
    if (c[a]) {
        var d = c[a];
        c[a] = function (a) {
            var c = d.call(this, a);
            return b.call(this, a, c)
        }
    } else osapi.container.Container.prototype.mixinsOrder_.push(a), c[a] = b
};
osapi.container.Container.prototype.mixins_ = {};
osapi.container.Container.prototype.mixinsOrder_ = [];
osapi.container.Container.prototype.initializeMixins_ = function () {
    for (var a = osapi.container.Container.prototype.mixins_, b = osapi.container.Container.prototype.mixinsOrder_, c = 0; c < b.length; c++) {
        var d = b[c];
        this[d] = new a[d](this)
    }
};
osapi.container.Container.prototype.addPreloadGadgets_ = function (a) {
    for (var b in a)
        if (a[b].error) {
            var c = ["Failed to preload gadget ", b, "."].join("");
            gadgets.warn(c);
            c = ["Detailed error: ", a[b].error.code || "", " ", a[b].error.message || ""].join("");
            gadgets.log(c)
        } else this.addPreloadedGadgetUrl_(b), a[b][osapi.container.MetadataResponse.NEEDS_TOKEN_REFRESH] && this.scheduleRefreshTokens_(a[b][osapi.container.MetadataResponse.TOKEN_TTL])
};
osapi.container.Container.prototype.preloadCaches = function (a) {
    var b = osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.PRELOAD_METADATAS, {}),
        c = osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.PRELOAD_TOKENS, {}),
        a = osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.PRELOAD_REF_TIME, null);
    this.service_.addGadgetMetadatas(b, a);
    this.service_.addGadgetTokens(c, a);
    this.addPreloadGadgets_(b)
};
osapi.container.Container.prototype.refreshService_ = function () {
    this.service_.uncacheStaleGadgetMetadataExcept(this.getActiveGadgetUrls_())
};
osapi.container.Container.prototype.getGadgetSiteByIframeId_ = function (a) {
    for (var b in this.sites_) {
        var c = this.sites_[b],
            d = c.getActiveSiteHolder();
        if (d && d.getIframeId() === a) return c
    }
    return null
};
osapi.container.Container.prototype.getSiteById = function (a) {
    return this.sites_[a]
};
osapi.container.Container.prototype.updateContainerSecurityToken = function (a, b, c) {
    this.service_.updateContainerSecurityToken(a, b, c)
};
osapi.container.Container.prototype.scheduleRefreshTokens_ = function (a) {
    var b = this,
        c = this.tokenRefreshInterval_,
        d = a ? this.setRefreshTokenInterval_(1E3 * a) : c,
        e = function () {
            function a(c) {
                c ? setTimeout(gadgets.util.makeClosure(b, b.updateContainerSecurityToken, a, !0), 1) : (b.lastRefresh_ = osapi.container.util.getCurrentTimeMs(), b.tokenRefreshTimer_ = setTimeout(e, d), b.refreshTokens_())
            }
            b.updateContainerSecurityToken(a)
        };
    if (this.isRefreshTokensEnabled_() && (!this.tokenRefreshTimer_ || d != c))
        if (a = osapi.container.util.getCurrentTimeMs(),
            this.tokenRefreshTimer_) {
            if (c = (this.lastRefresh_ || 0) + c, c < a && (c = a + d, d = 1), c > a + d) clearTimeout(this.tokenRefreshTimer_), this.tokenRefreshTimer_ = setTimeout(e, d)
        } else this.lastRefresh_ = a, this.tokenRefreshTimer_ = setTimeout(e, d)
};
osapi.container.Container.prototype.unscheduleRefreshTokens_ = function () {
    this.tokenRefreshTimer_ && 0 >= this.getTokenRefreshableGadgetUrls_().length && (clearTimeout(this.tokenRefreshTimer_), this.tokenRefreshTimer_ = null)
};
osapi.container.Container.prototype.isRefreshTokensEnabled_ = function () {
    return 0 < this.tokenRefreshInterval_
};
osapi.container.Container.prototype.setRefreshTokenInterval_ = function (a) {
    if (a) {
        var a = 0.8 * a,
            b = this.tokenRefreshInterval_;
        return 0 > b ? b : this.tokenRefreshInterval_ = 0 == b ? a : Math.min(b, a)
    }
};
osapi.container.Container.prototype.registerRpcServices_ = function () {
    var a = this;
    this.rpcRegister("resize_iframe", function (a, c) {
        var d = a[osapi.container.GadgetSite.RPC_ARG_KEY];
        d && d.setHeight(c)
    });
    this.rpcRegister("resize_iframe_width", function (a, c) {
        var d = a[osapi.container.GadgetSite.RPC_ARG_KEY];
        d && d.setWidth(c);
        return !0
    });
    this.rpcRegister("set_pref", function (b, c, d) {
        var e = b[osapi.container.GadgetSite.RPC_ARG_KEY],
            f = a.config_[osapi.container.ContainerConfig.SET_PREFERENCES];
        if (e && f) {
            for (var g = {}, h = 2,
                i = arguments.length; h < i; h += 2) g[arguments[h]] = arguments[h + 1];
            f(e.getId(), e.getActiveSiteHolder().getUrl(), g)
        }
    })
};
osapi.container.Container.prototype.setupRpcArbitrator_ = function (a) {
    var b = gadgets.config.get("container");
    if ("undefined" !== typeof b.enableRpcArbitration && b.enableRpcArbitration) {
        a = osapi.container.util.getSafeJsonValue(a, osapi.container.ContainerConfig.RPC_ARBITRATOR, null);
        if (!a) var c = this,
            a = function (a, b) {
                var f = c.getGadgetSiteByIframeId_(b);
                if (f && f.getActiveSiteHolder() && (f = c.service_.getCachedGadgetMetadata(f.getActiveSiteHolder().getUrl()), !f.error && f.rpcServiceIds))
                    for (var g = 0, h; h = f.rpcServiceIds[g]; g++)
                        if (h ==
                            a) return !0;
                gadgets.warn("RPC call to " + a + " was not allowed.");
                return !1
            };
        gadgets.rpc.config({
            arbitrator: a
        })
    }
};
osapi.container.Container.prototype.addPreloadedGadgetUrl_ = function (a) {
    this.preloadedGadgetUrls_[a] = null
};
osapi.container.Container.prototype.getTokenRefreshableGadgetUrls_ = function () {
    var a = {},
        b;
    for (b in this.getActiveGadgetUrls_()) this.service_.getCachedGadgetMetadata(b)[osapi.container.MetadataResponse.NEEDS_TOKEN_REFRESH] && (a[b] = 1);
    for (var c in this.sites_) {
        var d = this.sites_[c];
        if (d instanceof osapi.container.GadgetSite && (b = d.getActiveSiteHolder())) b = b.getUrl(), mid = d.getModuleId(), a[b] && (a[osapi.container.util.buildTokenRequestUrl(b, mid)] = 1)
    }
    return osapi.container.util.toArrayOfJsonKeys(a)
};
osapi.container.Container.prototype.getActiveGadgetUrls_ = function () {
    return osapi.container.util.mergeJsons(this.getNavigatedGadgetUrls_(), this.preloadedGadgetUrls_)
};
osapi.container.Container.prototype.getNavigatedGadgetUrls_ = function () {
    var a = {},
        b;
    for (b in this.sites_) {
        var c = this.sites_[b];
        c instanceof osapi.container.GadgetSite && (c = c.getActiveSiteHolder()) && (a[c.getUrl()] = 1)
    }
    return a
};
osapi.container.Container.prototype.refreshTokens_ = function () {
    var a = this.getTokenRefreshableGadgetUrls_(),
        b = this;
    this.service_.getGadgetToken(osapi.container.util.newTokenRequest(a), function (a) {
        for (var d in b.sites_) {
            var e = b.sites_[d];
            if (e instanceof osapi.container.GadgetSite) {
                var f = e.getActiveSiteHolder();
                if (f && b.service_.getCachedGadgetMetadata(f.getUrl())[osapi.container.MetadataResponse.NEEDS_TOKEN_REFRESH]) {
                    var e = e.getModuleId(),
                        e = osapi.container.util.buildTokenRequestUrl(f.getUrl(), e),
                        g = a[e];
                    g.error ? gadgets.warn(["Failed to get token for gadget ", e, "."].join("")) : gadgets.rpc.call(f.getIframeId(), "update_security_token", null, g[osapi.container.TokenResponse.TOKEN])
                }
            }
        }
    })
};
osapi.container.Container.prototype.applyLifecycleCallbacks_ = function (a) {
    var b = Array.prototype.slice.call(arguments, 1);
    for (name in this.gadgetLifecycleCallbacks_) {
        var c = this.gadgetLifecycleCallbacks_[name][a];
        c && c.apply(null, b)
    }
};
osapi.container.Container.prototype.newUrlSite = function (a) {
    var b = {};
    b[osapi.container.UrlSite.URL_ELEMENT] = a;
    a = new osapi.container.UrlSite(this, this.service_, b);
    return this.sites_[a.getId()] = a
};
osapi.container.Container.prototype.navigateUrl = function (a, b, c) {
    a.render(b, c);
    return a
};
gadgets.config.register("container", null, function (a) {
    a = a.container.jsPath || null;
    window.__CONTAINER_URI = shindig.uri(window.location.href);
    var b = window.__API_URI = null;
    if (window.__CONTAINER_SCRIPT_ID) b = document.getElementById(window.__CONTAINER_SCRIPT_ID);
    else
        for (var c = document.getElementsByTagName("script"), d = 0; c && d < c.length; d++) {
            var e = c[d].src,
                f = null != a && e && e.indexOf(a) || -1;
            if (-1 != f && /.*container.*[.]js.*[?&]c=1(#|&|$).*/.test(e.substring(f + a.length))) {
                b = c[d];
                break
            }
        }
    b && (window.__API_URI = shindig.uri(b.src),
        window.__API_URI.resolve(window.__CONTAINER_URI));
    window.__CONTAINER = window.__API_URI ? window.__API_URI.getQP("container") : "default"
}, !1);
osapi.container.Container.addMixin("views", function (b) {
    var f = this;
    b.rpcRegister("gadgets.views.close", function (a, d) {
        var e = b.getGadgetSiteByIframeId_(a.f),
            c = "undefined" != typeof d && null != d ? b.getSiteById(d) : e;
        c && (c == e || c.ownerId_ == a.f) && f.destroyElement(c)
    });
    b.rpcRegister("gadgets.window.getContainerDimensions", function () {
        var a = document.documentElement;
        return {
            width: a ? a.clientWidth : -1,
            height: a ? a.clientHeight : -1
        }
    });
    this.destroyElement = function () {
        console.log("container needs to define destroyElement function")
    }
});
osapi.container.Container.addMixin("views", function (a) {
    this.resultCallbacks_ = {};
    this.returnValues_ = {};
    var c = this,
        f = {};
    f[osapi.container.CallbackType.ON_BEFORE_CLOSE] = function (d) {
        var b = d.getId(),
            e = c.returnValues_[b],
            a = c.resultCallbacks_[b];
        "undefined" !== typeof a && d.ownerId_ && gadgets.rpc.call(d.ownerId_, "gadgets.views.deliverResult", null, a, e);
        delete c.returnValues_[b];
        delete c.resultCallbacks_[b]
    };
    a.addGadgetLifecycleCallback("open-views", f);
    a.rpcRegister("gadgets.views.setReturnValue", function (d, b) {
        var e =
            a.getGadgetSiteByIframeId_(d.f);
        e && (c.returnValues_[e.getId()] = b)
    })
});
osapi.container.ee = {};
osapi.container.ee.RenderParam = {
    GADGET_RENDER_PARAMS: "gadgetRenderParams",
    GADGET_VIEW_PARAMS: "gadgetViewParams",
    URL_RENDER_PARAMS: "urlRenderParams",
    DATA_MODEL: "eeDataModel",
    EMBEDDED: "embedded"
};
osapi.container.ee.DataModel = {
    CONTEXT: "context",
    GADGET: "gadget",
    URL: "url",
    PREVIEW_IMAGE: "previewImage",
    PREFERRED_EXPERIENCE: "preferredExperience"
};
osapi.container.ee.PreferredExperience = {
    TARGET: "target",
    DISPLAY: "display",
    TYPE: "type",
    VIEW: "view",
    VIEW_TARGET: "viewTarget"
};
osapi.container.ee.Context = {
    ASSOCIATED_CONTEXT: "associatedContext",
    OPENSOCIAL: "openSocial"
};
osapi.container.ee.AssociatedContext = {
    ID: "id",
    TYPE: "type",
    OBJECT_REFERENCE: "objectReference"
};
osapi.container.ee.TargetType = {
    GADGET: "gadget",
    URL: "url"
};
osapi.container.ee.DisplayType = {
    IMAGE: "image",
    TEXT: "text"
};
osapi.container.ee.ContainerConfig = {
    GET_EE_NAVIGATION_TYPE: "GET_EE_NAVIGATION_TYPE"
};
(function () {
    osapi.container.Container.addMixin("ee", function (e) {
        function r(b, a, h, f, k) {
            var c = h[osapi.container.ee.RenderParam.GADGET_VIEW_PARAMS] || {},
                n = h[osapi.container.ee.RenderParam.GADGET_RENDER_PARAMS] || {};
            n[osapi.container.RenderParam.VIEW] = osapi.container.ee.RenderParam.EMBEDDED;
            var d = a[g.PREFERRED_EXPERIENCE];
            d && (d = d[i.TARGET]) && d[i.TYPE] === s.GADGET && d[i.VIEW] && (n[osapi.container.RenderParam.VIEW] = d[i.VIEW]);
            if (k) {
                var d = a[g.CONTEXT],
                    l = !0;
                d ? "object" != typeof d && (l = !1) : d = {};
                if (l) {
                    l = {};
                    l[p.ASSOCIATED_CONTEXT] = {};
                    for (var j in k) k.hasOwnProperty(j) && (l[j] = k[j]);
                    d[p.OPENSOCIAL] = l;
                    a[g.CONTEXT] = d
                }
            }
            n[osapi.container.ee.RenderParam.DATA_MODEL] = a;
            var o = e.newGadgetSite(b),
                m = a[g.GADGET];
            e.preloadGadget(m, function (d) {
                !d[m] || d[m].error ? a[g.URL] != null ? q(b, a, h, f) : f != null && f(o, d[m] || {
                    error: d
                }) : e.navigateGadget(o, m, c, n, function (a) {
                    f != null && f(o, a)
                })
            })
        }

        function q(b, a, h, f) {
            h = h[osapi.container.ee.RenderParam.URL_RENDER_PARAMS] || {};
            b = e.newUrlSite(b);
            a = e.navigateUrl(b, a[g.URL], h);
            f && f(a, null)
        }
        var g = osapi.container.ee.DataModel,
            i = osapi.container.ee.PreferredExperience,
            s = osapi.container.ee.TargetType,
            p = osapi.container.ee.Context,
            j = osapi.container.ee.ContainerConfig;
        e.rpcRegister("ee_gadget_rendered", function (b) {
            return (b = b.gs.currentGadgetHolder_.renderParams_.eeDataModel) ? b[g.CONTEXT] : null
        });
        return {
            navigate: function (b, a, h, f, k) {
                var c = null;
                if (e.config_ && e.config_[j.GET_EE_NAVIGATION_TYPE] && "function" === typeof e.config_[j.GET_EE_NAVIGATION_TYPE]) c = e.config_[j.GET_EE_NAVIGATION_TYPE].call(e, a);
                else a: {
                    if (a[g.PREFERRED_EXPERIENCE] &&
                        (c = a[g.PREFERRED_EXPERIENCE], c[i.TARGET] && (c = c[i.TARGET]) && c[i.TYPE]))
                        if (c = c[i.TYPE], osapi.container.ee.TargetType.URL === c && "undefined" !== typeof a.url || osapi.container.ee.TargetType.GADGET === c && "undefined" !== typeof a.gadget) break a;
                    c = null
                }
                null === c && (a[g.GADGET] ? c = osapi.container.ee.TargetType.GADGET : a[g.URL] && (c = osapi.container.ee.TargetType.URL));
                c === osapi.container.ee.TargetType.GADGET ? r(b, a, h, f, k) : c === osapi.container.ee.TargetType.URL && q(b, a, h, f)
            },
            close: function (b) {
                b instanceof osapi.container.GadgetSite &&
                    e.closeGadget(b);
                b instanceof osapi.container.UrlSite && b.close()
            }
        }
    })
})();
gadgets.json.xml = function () {
    function i(b, c) {
        for (var e = 0; e < b.length; e++) {
            var a = b[e];
            if (a.nodeType == k) l(c, a.nodeName, a);
            else if (0 == a.childNodes.length)
                if (null != a.attributes && 0 != a.attributes.length) {
                    var d = a,
                        a = c,
                        g = a[d.nodeName];
                    if (null == g) a[d.nodeName] = {}, h(d.attributes, a[d.nodeName]);
                    else {
                        var f = {};
                        h(d.attributes, f);
                        a[d.nodeName] = j(g, f)
                    }
                } else c[a.nodeName] = null;
            else 1 == a.childNodes.length && a.firstChild.nodeType == k && (null == a.attributes || 0 == a.attributes.length) ? l(c, a.nodeName, a.firstChild) : (d = c, g = d[a.nodeName],
                null == g ? (d[a.nodeName] = {}, null != a.attributes && 0 != a.attributes.length && h(a.attributes, d[a.nodeName]), i(a.childNodes, d[a.nodeName])) : (f = {}, null != a.attributes && 0 != a.attributes.length && h(a.attributes, f), i(a.childNodes, f), d[a.nodeName] = j(g, f)))
        }
    }

    function l(b, c, e) {
        var a = b[c];
        b[c] = null != a ? j(a, e.nodeValue) : e.nodeValue
    }

    function j(b, c) {
        return b instanceof Array ? (b[b.length] = c, b) : [b, c]
    }

    function h(b, c) {
        for (var e = null, a = 0; a < b.length; a++) e = b[a], c["@" + e.nodeName] = e.nodeValue
    }
    var k = 3;
    return {
        convertXmlToJson: function (b) {
            var c = {};
            i(b.childNodes, c);
            return c
        }
    }
}();
var opensocial = opensocial || {};
opensocial.xmlutil = opensocial.xmlutil || {};
opensocial.xmlutil.parser_ = null;
opensocial.xmlutil.parseXML = function (b) {
    if ("undefined" != typeof DOMParser) {
        opensocial.xmlutil.parser_ = opensocial.xmlutil.parser_ || new DOMParser;
        var a = opensocial.xmlutil.parser_.parseFromString(b, "text/xml");
        if (a.firstChild && "parsererror" == a.firstChild.tagName) throw Error(a.firstChild.firstChild.nodeValue);
        return a
    }
    if ("undefined" != typeof ActiveXObject) {
        a = new ActiveXObject("MSXML2.DomDocument");
        a.validateOnParse = !1;
        a.loadXML(b);
        if (a.parseError && a.parseError.errorCode) throw Error(a.parseError.reason);
        return a
    }
    throw Error("No XML parser found in this browser.");
};
opensocial.xmlutil.NSMAP = {
    os: "http://opensocial.org/"
};
opensocial.xmlutil.getRequiredNamespaces = function (b, a) {
    var c = a ? opensocial.xmlutil.getNamespaceDeclarations_(a) : {},
        d;
    for (d in opensocial.xmlutil.NSMAP) opensocial.xmlutil.NSMAP.hasOwnProperty(d) && (!c.hasOwnProperty(d) && 0 <= b.indexOf("<" + d + ":") && 0 > b.indexOf("xmlns:" + d + ":")) && (c[d] = opensocial.xmlutil.NSMAP[d]);
    return opensocial.xmlutil.serializeNamespaces_(c)
};
opensocial.xmlutil.serializeNamespaces_ = function (b) {
    var a = [],
        c;
    for (c in b) b.hasOwnProperty(c) && a.push(" xmlns:", c, '="', b[c], '"');
    return a.join("")
};
opensocial.xmlutil.getNamespaceDeclarations_ = function (b) {
    for (var a = {}, c = 0; c < b.attributes.length; c++) {
        var d = b.attributes[c].nodeName;
        "xmlns:" == d.substring(0, 6) && (a[d.substring(6, d.length)] = b.getAttribute(d))
    }
    return a
};
opensocial.xmlutil.ENTITIES = '<!ENTITY nbsp "&#160;">';
opensocial.xmlutil.prepareXML = function (b, a) {
    var c = opensocial.xmlutil.getRequiredNamespaces(b, a);
    return "<!DOCTYPE root [" + opensocial.xmlutil.ENTITIES + ']><root xml:space="preserve"' + c + ">" + b + "</root>"
};
osapi.container.Container.addMixin("views", function (h) {
    var j = this;
    h.rpcRegister("gadgets.views.openEmbeddedExperience", function (a, m, b, c) {
        var i = a.callback,
            k = a.f,
            e = b.gadget;
        if ("string" == typeof b)
            if ((a = /^<(embed)>/i.exec(b)) && a[1]) try {
                var f = gadgets.json.xml.convertXmlToJson(opensocial.xmlutil.parseXML(b)),
                    b = f && f[a[1]] || b
            } catch (p) {} else try {
                b = (f = gadgets.json.parse(b)) || b
            } catch (q) {}
            var d = function (g) {
                function e(g) {
                    var a = {};
                    a[osapi.container.RenderParam.VIEW] = osapi.container.ee.RenderParam.EMBEDDED;
                    a[osapi.container.RenderParam.WIDTH] =
                        "100%";
                    a[osapi.container.RenderParam.HEIGHT] = "100%";
                    var c = {};
                    c[osapi.container.RenderParam.WIDTH] = "100%";
                    c[osapi.container.RenderParam.HEIGHT] = "100%";
                    var d = {};
                    d[osapi.container.ee.RenderParam.GADGET_RENDER_PARAMS] = a;
                    d[osapi.container.ee.RenderParam.URL_RENDER_PARAMS] = c;
                    d[osapi.container.ee.RenderParam.GADGET_VIEW_PARAMS] = f;
                    h.ee.navigate(g, b, d, function (a, b) {
                        a.ownerId_ = k;
                        b && (j.resultCallbacks_[a.getId()] = m);
                        i && i([a.getId(), b])
                    }, n)
                }
                var a = "",
                    f = {},
                    d;
                if (c && (c.viewTarget && (a = c.viewTarget), c.viewParams &&
                    (f = c.viewParams), c.coordinates)) d = c.coordinates;
                var l = h.getGadgetSiteByIframeId_(k),
                    o = l.getActiveSiteHolder().getIframeElement(),
                    n = j.getContainerAssociatedContext(b, g);
                (g = j.createElementForEmbeddedExperience(o, g, a, d, l, e)) && e(g)
            };
        e ? h.preloadGadget(e, function (a) {
            (!a[e] || a[e].error) && !b.url ? null != i && i([null, a[e] || {
                error: a
            }]) : d(a[e])
        }) : d()
    });
    this.createElementForEmbeddedExperience = function () {
        console.log("container needs to define createElementForEmbeddedExperience function")
    };
    this.getContainerAssociatedContext =
        function () {
            return null
        }
});
osapi.container.Container.addMixin("views", function (e) {
    var i = this;
    e.rpcRegister("gadgets.views.openGadget", function (d, n, a) {
        var g = d.callback,
            o = d.f,
            c = "",
            b = e.getGadgetSiteByIframeId_(d.f);
        "undefined" != typeof b && "undefined" != typeof b.getActiveSiteHolder() && (c = b.getActiveSiteHolder().getUrl());
        var f = "",
            j = "",
            k = {},
            l;
        if (a && (a.view && (f = a.view), a.viewTarget && (j = a.viewTarget), a.viewParams && (k = a.viewParams), a.coordinates)) l = a.coordinates;
        var p = e.getGadgetSiteByIframeId_(d.f).getActiveSiteHolder().getIframeElement();
        e.preloadGadget(c, function (a) {
            function d(a) {
                var b = {},
                    h = e.newGadgetSite(a);
                h.ownerId_ = o;
                "undefined" != typeof f && "" !== f && (b[osapi.container.RenderParam.VIEW] = f);
                b[osapi.container.RenderParam.WIDTH] = "100%";
                b[osapi.container.RenderParam.HEIGHT] = "100%";
                e.navigateGadget(h, c, k, b, function (a) {
                    a && (i.resultCallbacks_[h.getId()] = n);
                    g && g([h.getId(), a])
                })
            }
            var m = {};
            if ("undefined" != typeof a && "undefined" != typeof a[c]) {
                if (a[c].error) {
                    gadgets.error("Failed to preload gadget : " + c);
                    null != g && g([null, a[c]]);
                    return
                }
                m = a[c]
            }(a =
                i.createElementForGadget(m, p, f, j, l, b, d)) && d(a)
        })
    });
    this.createElementForGadget = function () {
        console.log("container needs to define createElementForGadget function")
    }
});
osapi.container.Container.addMixin("views", function (c) {
    var g = this;
    c.rpcRegister("gadgets.views.openUrl", function (d, h, a, i) {
        function e(b) {
            var b = c.newUrlSite(b),
                a = {};
            a[osapi.container.RenderParam.WIDTH] = "100%";
            a[osapi.container.RenderParam.HEIGHT] = "100%";
            c.navigateUrl(b, h, a);
            b.ownerId_ = d.f;
            d.callback([b.getId()])
        }
        var f = c.getGadgetSiteByIframeId_(d.f),
            j = f.getActiveSiteHolder().getIframeElement();
        (a = g.createElementForUrl(j, a, i, f, e)) && e(a)
    });
    this.createElementForUrl = function () {
        console.log("container needs to define createElementForUrl function")
    }
});
(function () {
    function l(a) {
        var c;
        window.DOMParser ? c = (new DOMParser).parseFromString(a, "text/xml") : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a));
        return c
    }

    function g(a, c) {
        var b = gadgets.json.xml.convertXmlToJson(a);
        null != b && (null != b.OpenSearchDescription.Url && null == d[c]) && (d[c] = b, h(!0, b))
    }

    function h(a, c) {
        for (var b in e) e[b].apply(this, [c, a])
    }

    function i(a) {
        for (var c in a)
            if (!a[c].error) {
                var b = a[c].modulePrefs.features.opensearch;
                if (null != b && (b = b.params, null != b)) {
                    var d = b["opensearch-description"];
                    null != d ? (b = l(d), g(b, a[c].url)) : (d = b["opensearch-url"], null != d && (b = {}, b[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.DOM, gadgets.io.makeRequest(d, function (a) {
                        if (0 == a.errors.length) {
                            var b = a.data;
                            null != b && g(b, a[c].url)
                        }
                    }, b)))
                }
            }
    }
    var d = {},
        j = {},
        e = [],
        k = function (a, c) {
            var b = [];
            for (url in d) {
                var e = [];
                d[url].OpenSearchDescription.Url instanceof Array ? e = d[url].OpenSearchDescription.Url : e.push(d[url].OpenSearchDescription.Url);
                for (var f in e) {
                    var g = e[f]["@template"];
                    if (null != g && (e[f]["@type"] ==
                        a || null == a))
                        if (c) b.push(g);
                        else {
                            b.push(d[url]);
                            break
                        }
                }
            }
            return b
        },
        f = {};
    f[osapi.container.CallbackType.ON_PRELOADED] = i;
    f[osapi.container.CallbackType.ON_BEFORE_CLOSE] = function (a) {
        null != a && (a = url = j[a.getId()], null != d[a] && (h(!1, d[a]), delete d[a]))
    };
    f[osapi.container.CallbackType.ON_NAVIGATED] = function (a) {
        null != a && null != a.getActiveSiteHolder() && (url = a.getActiveSiteHolder().getUrl(), null == d[url] && i([a.getActiveSiteHolder().getGadgetInfo()]), j[a.getId()] = url)
    };
    osapi.container.Container.addMixin("opensearch",
        function (a) {
            a.addGadgetLifecycleCallback("opensearch", f);
            return {
                getOpenSearchURLs: function (a) {
                    return k(a, !0)
                },
                getOpenSearchDescriptions: function (a) {
                    return k(a, !1)
                },
                addOpenSearchCallback: function (a) {
                    e.push(a)
                },
                removeOpenSearchCallback: function (a) {
                    for (index in e)
                        if (e[index] == a) return e.splice(index, 1), !0;
                    return !1
                }
            }
        })
})();
var OpenAjax = OpenAjax || {};
OpenAjax.hub || (OpenAjax.hub = function () {
        var a = {};
        return {
            implementer: "http://openajax.org",
            implVersion: "2.0.7",
            specVersion: "2.0",
            implExtraData: {},
            libraries: a,
            registerLibrary: function (b, c, d, e) {
                a[b] = {
                    prefix: b,
                    namespaceURI: c,
                    version: d,
                    extraData: e
                };
                this.publish("org.openajax.hub.registerLibrary", a[b])
            },
            unregisterLibrary: function (b) {
                this.publish("org.openajax.hub.unregisterLibrary", a[b]);
                delete a[b]
            }
        }
    }(), OpenAjax.hub.Error = {
        BadParameters: "OpenAjax.hub.Error.BadParameters",
        Disconnected: "OpenAjax.hub.Error.Disconnected",
        Duplicate: "OpenAjax.hub.Error.Duplicate",
        NoContainer: "OpenAjax.hub.Error.NoContainer",
        NoSubscription: "OpenAjax.hub.Error.NoSubscription",
        NotAllowed: "OpenAjax.hub.Error.NotAllowed",
        WrongProtocol: "OpenAjax.hub.Error.WrongProtocol",
        IncompatBrowser: "OpenAjax.hub.Error.IncompatBrowser"
    }, OpenAjax.hub.SecurityAlert = {
        LoadTimeout: "OpenAjax.hub.SecurityAlert.LoadTimeout",
        FramePhish: "OpenAjax.hub.SecurityAlert.FramePhish",
        ForgedMsg: "OpenAjax.hub.SecurityAlert.ForgedMsg"
    }, OpenAjax.hub._debugger = function () {}, OpenAjax.hub.ManagedHub = function (a) {
        if (!a ||
            !a.onPublish || !a.onSubscribe) throw Error(OpenAjax.hub.Error.BadParameters);
        this._p = a;
        this._onUnsubscribe = a.onUnsubscribe ? a.onUnsubscribe : null;
        this._scope = a.scope || window;
        if (a.log) {
            var b = this;
            this._log = function (c) {
                try {
                    a.log.call(b._scope, "ManagedHub: " + c)
                } catch (d) {
                    OpenAjax.hub._debugger()
                }
            }
        } else this._log = function () {};
        this._subscriptions = {
            c: {},
            s: null
        };
        this._containers = {};
        this._seq = 0;
        this._active = !0;
        this._isPublishing = !1;
        this._pubQ = []
    }, OpenAjax.hub.ManagedHub.prototype.subscribeForClient = function (a,
        b, c) {
        this._assertConn();
        if (this._invokeOnSubscribe(b, a)) return this._subscribe(b, this._sendToClient, this, {
            c: a,
            sid: c
        });
        throw Error(OpenAjax.hub.Error.NotAllowed);
    }, OpenAjax.hub.ManagedHub.prototype.unsubscribeForClient = function (a, b) {
        this._unsubscribe(b);
        this._invokeOnUnsubscribe(a, b)
    }, OpenAjax.hub.ManagedHub.prototype.publishForClient = function (a, b, c) {
        this._assertConn();
        this._publish(b, c, a)
    }, OpenAjax.hub.ManagedHub.prototype.disconnect = function () {
        this._active = !1;
        for (var a in this._containers) this.removeContainer(this._containers[a])
    },
    OpenAjax.hub.ManagedHub.prototype.getContainer = function (a) {
        return (a = this._containers[a]) ? a : null
    }, OpenAjax.hub.ManagedHub.prototype.listContainers = function () {
        var a = [],
            b;
        for (b in this._containers) a.push(this._containers[b]);
        return a
    }, OpenAjax.hub.ManagedHub.prototype.addContainer = function (a) {
        this._assertConn();
        var b = a.getClientID();
        if (this._containers[b]) throw Error(OpenAjax.hub.Error.Duplicate);
        this._containers[b] = a
    }, OpenAjax.hub.ManagedHub.prototype.removeContainer = function (a) {
        var b = a.getClientID();
        if (!this._containers[b]) throw Error(OpenAjax.hub.Error.NoContainer);
        a.remove();
        delete this._containers[b]
    }, OpenAjax.hub.ManagedHub.prototype.subscribe = function (a, b, c, d, e) {
        function f(a, d, f, h) {
            if (g._invokeOnPublish(a, d, h, null)) try {
                b.call(c, a, d, e)
            } catch (i) {
                OpenAjax.hub._debugger(), g._log("caught error from onData callback to Hub.subscribe(): " + i.message)
            }
        }
        this._assertConn();
        this._assertSubTopic(a);
        if (!b) throw Error(OpenAjax.hub.Error.BadParameters);
        c = c || window;
        if (this._invokeOnSubscribe(a, null)) {
            var g =
                this,
                a = this._subscribe(a, f, c, e);
            this._invokeOnComplete(d, c, a, !0);
            return a
        }
        this._invokeOnComplete(d, c, null, !1, OpenAjax.hub.Error.NotAllowed)
    }, OpenAjax.hub.ManagedHub.prototype.publish = function (a, b) {
        this._assertConn();
        this._assertPubTopic(a);
        this._publish(a, b, null)
    }, OpenAjax.hub.ManagedHub.prototype.unsubscribe = function (a, b, c) {
        this._assertConn();
        if (!a) throw Error(OpenAjax.hub.Error.BadParameters);
        this._unsubscribe(a);
        this._invokeOnUnsubscribe(null, a);
        this._invokeOnComplete(b, c, a, !0)
    }, OpenAjax.hub.ManagedHub.prototype.isConnected =
    function () {
        return this._active
    }, OpenAjax.hub.ManagedHub.prototype.getScope = function () {
        return this._scope
    }, OpenAjax.hub.ManagedHub.prototype.getSubscriberData = function (a) {
        this._assertConn();
        var a = a.split("."),
            b = a.pop();
        if (a = this._getSubscriptionObject(this._subscriptions, a, 0, b)) return a.data;
        throw Error(OpenAjax.hub.Error.NoSubscription);
    }, OpenAjax.hub.ManagedHub.prototype.getSubscriberScope = function (a) {
        this._assertConn();
        var a = a.split("."),
            b = a.pop();
        if (a = this._getSubscriptionObject(this._subscriptions,
            a, 0, b)) return a.scope;
        throw Error(OpenAjax.hub.Error.NoSubscription);
    }, OpenAjax.hub.ManagedHub.prototype.getParameters = function () {
        return this._p
    }, OpenAjax.hub.ManagedHub.prototype._sendToClient = function (a, b, c, d) {
        this.isConnected() && this._invokeOnPublish(a, b, d, c.c) && c.c.sendToClient(a, b, c.sid)
    }, OpenAjax.hub.ManagedHub.prototype._assertConn = function () {
        if (!this.isConnected()) throw Error(OpenAjax.hub.Error.Disconnected);
    }, OpenAjax.hub.ManagedHub.prototype._assertPubTopic = function (a) {
        if (!a || "" === a || -1 !=
            a.indexOf("*") || -1 != a.indexOf("..") || "." == a.charAt(0) || "." == a.charAt(a.length - 1)) throw Error(OpenAjax.hub.Error.BadParameters);
    }, OpenAjax.hub.ManagedHub.prototype._assertSubTopic = function (a) {
        if (!a) throw Error(OpenAjax.hub.Error.BadParameters);
        for (var a = a.split("."), b = a.length, c = 0; c < b; c++) {
            var d = a[c];
            if ("" === d || -1 != d.indexOf("*") && "*" != d && "**" != d) throw Error(OpenAjax.hub.Error.BadParameters);
            if ("**" == d && c < b - 1) throw Error(OpenAjax.hub.Error.BadParameters);
        }
    }, OpenAjax.hub.ManagedHub.prototype._invokeOnComplete =
    function (a, b, c, d, e) {
        if (a) try {
            b = b || window, a.call(b, c, d, e)
        } catch (f) {
            OpenAjax.hub._debugger(), this._log("caught error from onComplete callback: " + f.message)
        }
    }, OpenAjax.hub.ManagedHub.prototype._invokeOnPublish = function (a, b, c, d) {
        try {
            return this._p.onPublish.call(this._scope, a, b, c, d)
        } catch (e) {
            OpenAjax.hub._debugger(), this._log("caught error from onPublish callback to constructor: " + e.message)
        }
        return !1
    }, OpenAjax.hub.ManagedHub.prototype._invokeOnSubscribe = function (a, b) {
        try {
            return this._p.onSubscribe.call(this._scope,
                a, b)
        } catch (c) {
            OpenAjax.hub._debugger(), this._log("caught error from onSubscribe callback to constructor: " + c.message)
        }
        return !1
    }, OpenAjax.hub.ManagedHub.prototype._invokeOnUnsubscribe = function (a, b) {
        if (this._onUnsubscribe) {
            var c = b.slice(0, b.lastIndexOf("."));
            try {
                this._onUnsubscribe.call(this._scope, c, a)
            } catch (d) {
                OpenAjax.hub._debugger(), this._log("caught error from onUnsubscribe callback to constructor: " + d.message)
            }
        }
    }, OpenAjax.hub.ManagedHub.prototype._subscribe = function (a, b, c, d) {
        var e = a + "." + this._seq,
            b = {
                scope: c,
                cb: b,
                data: d,
                sid: this._seq++
            };
        this._recursiveSubscribe(this._subscriptions, a.split("."), 0, b);
        return e
    }, OpenAjax.hub.ManagedHub.prototype._recursiveSubscribe = function (a, b, c, d) {
        var e = b[c];
        c == b.length ? (d.next = a.s, a.s = d) : ("undefined" == typeof a.c && (a.c = {}), "undefined" == typeof a.c[e] && (a.c[e] = {
            c: {},
            s: null
        }), this._recursiveSubscribe(a.c[e], b, c + 1, d))
    }, OpenAjax.hub.ManagedHub.prototype._publish = function (a, b, c) {
        if (this._isPublishing) this._pubQ.push({
            t: a,
            d: b,
            p: c
        });
        else
            for (this._safePublish(a, b, c); 0 <
                this._pubQ.length;) a = this._pubQ.shift(), this._safePublish(a.t, a.d, a.p)
    }, OpenAjax.hub.ManagedHub.prototype._safePublish = function (a, b, c) {
        this._isPublishing = !0;
        this._recursivePublish(this._subscriptions, a.split("."), 0, a, b, c);
        this._isPublishing = !1
    }, OpenAjax.hub.ManagedHub.prototype._recursivePublish = function (a, b, c, d, e, f) {
        if ("undefined" != typeof a && (c != b.length && (this._recursivePublish(a.c[b[c]], b, c + 1, d, e, f), this._recursivePublish(a.c["*"], b, c + 1, d, e, f), a = a.c["**"]), "undefined" != typeof a))
            for (a = a.s; a;) {
                var b =
                    a.scope,
                    c = a.cb,
                    g = a.data;
                "string" == typeof c && (c = b[c]);
                c.call(b, d, e, g, f);
                a = a.next
            }
    }, OpenAjax.hub.ManagedHub.prototype._unsubscribe = function (a) {
        var a = a.split("."),
            b = a.pop();
        if (!this._recursiveUnsubscribe(this._subscriptions, a, 0, b)) throw Error(OpenAjax.hub.Error.NoSubscription);
    }, OpenAjax.hub.ManagedHub.prototype._recursiveUnsubscribe = function (a, b, c, d) {
        if ("undefined" == typeof a) return !1;
        if (c < b.length) {
            var e = a.c[b[c]];
            if (!e) return !1;
            this._recursiveUnsubscribe(e, b, c + 1, d);
            if (!e.s) {
                for (var f in e.c) return !0;
                delete a.c[b[c]]
            }
        } else {
            b = a.s;
            c = null;
            for (e = !1; b;) {
                if (d == b.sid) {
                    e = !0;
                    b == a.s ? a.s = b.next : c.next = b.next;
                    break
                }
                c = b;
                b = b.next
            }
            if (!e) return !1
        }
        return !0
    }, OpenAjax.hub.ManagedHub.prototype._getSubscriptionObject = function (a, b, c, d) {
        if ("undefined" != typeof a) {
            if (c < b.length) return this._getSubscriptionObject(a.c[b[c]], b, c + 1, d);
            for (a = a.s; a;) {
                if (d == a.sid) return a;
                a = a.next
            }
        }
        return null
    }, OpenAjax.hub._hub = new OpenAjax.hub.ManagedHub({
        onSubscribe: function () {
            return !0
        },
        onPublish: function () {
            return !0
        }
    }), OpenAjax.hub.subscribe =
    function (a, b, c, d) {
        "string" === typeof b && (c = c || window, b = c[b] || null);
        return OpenAjax.hub._hub.subscribe(a, b, c, null, d)
    }, OpenAjax.hub.unsubscribe = function (a) {
        return OpenAjax.hub._hub.unsubscribe(a)
    }, OpenAjax.hub.publish = function (a, b) {
        OpenAjax.hub._hub.publish(a, b)
    }, OpenAjax.hub.registerLibrary("OpenAjax", "http://openajax.org/hub", "2.0", {}));
var OpenAjax = OpenAjax || {};
OpenAjax.hub = OpenAjax.hub || {};
OpenAjax.gadgets = "object" === typeof OpenAjax.gadgets ? OpenAjax.gadgets : "object" === typeof gadgets ? gadgets : {};
OpenAjax.gadgets.rpctx = OpenAjax.gadgets.rpctx || {};
(function () {
    if ("undefined" === typeof gadgets) {
        if ("undefined" === typeof oaaConfig)
            for (var j = document.getElementsByTagName("script"), e = /openajax(?:managedhub-(?:all|core).*|-mashup)\.js$/i, i = j.length - 1; 0 <= i; i--) {
                var f = j[i].getAttribute("src");
                if (f && f.match(e)) {
                    if (j = j[i].getAttribute("oaaConfig")) try {
                        oaaConfig = eval("({ " + j + " })")
                    } catch (m) {}
                    break
                }
            }
        "undefined" !== typeof oaaConfig && oaaConfig.gadgetsGlobal && (gadgets = OpenAjax.gadgets)
    }
})();
OpenAjax.hub.IframeContainer || function () {
    OpenAjax.hub.IframeContainer = function (e, i, f) {
        function m() {
            var a = document.createElement("span");
            f.IframeContainer.parent.appendChild(a);
            var d = '<iframe id="' + c + '" name="' + c + '" src="javascript:\'<html></html>\'"',
                l = "",
                b = f.IframeContainer.iframeAttrs;
            if (b)
                for (var e in b) switch (e) {
                case "style":
                    for (var g in b.style) l += g + ":" + b.style[g] + ";";
                    break;
                case "className":
                    d += ' class="' + b[e] + '"';
                    break;
                default:
                    d += " " + e + '="' + b[e] + '"'
                }
            a.innerHTML = d + (' style="' + (l + "visibility:hidden;") +
                '"></iframe>');
            a = f.IframeContainer.tunnelURI ? "&parent=" + encodeURIComponent(f.IframeContainer.tunnelURI) + "&forcesecure=true" : "&oahParent=" + encodeURIComponent(OpenAjax.gadgets.rpc.getOrigin(window.location.href));
            d = "";
            c !== i && (d = "&oahId=" + c.substring(c.lastIndexOf("_") + 1));
            l = document.getElementById(c);
            l.attachEvent ? l.attachEvent("onload", function () {
                window[f.IframeContainer.onGadgetLoad]()
            }) : l.onload = function () {
                window[f.IframeContainer.onGadgetLoad]()
            };
            b = f.IframeContainer.uri;
            e = -1 === b.indexOf("#") ? "#" :
                "&";
            l.src = b + e + "rpctoken=" + o + a + d
        }

        function q() {
            OpenAjax.gadgets.rpc.call(c, "openajax.pubsub", function (d) {
                if (d && (a = !0, clearTimeout(r), document.getElementById(c).style.visibility = "visible", f.Container.onConnect)) try {
                    f.Container.onConnect.call(k, g)
                } catch (b) {
                    OpenAjax.hub._debugger(), n("caught error from onConnect callback to constructor: " + b.message)
                }
            }, "cmd", "con")
        }

        function h() {
            if (a) {
                a = !1;
                document.getElementById(c).style.visibility = "hidden";
                for (var b in d) e.unsubscribeForClient(g, d[b]);
                d = {}
            }
        }

        function b(a) {
            try {
                f.Container.onSecurityAlert.call(k,
                    g, a)
            } catch (d) {
                OpenAjax.hub._debugger(), n("caught error from onSecurityAlert callback to constructor: " + d.message)
            }
        }

        function p() {
            r = setTimeout(function () {
                b(OpenAjax.hub.SecurityAlert.LoadTimeout);
                g._handleIncomingRPC = function () {}
            }, s)
        }(function (a) {
            var d = a[1],
                c = a[2];
            if (!a[0] || !d || !c || !c.Container || !c.Container.onSecurityAlert || !c.IframeContainer || !c.IframeContainer.parent || !c.IframeContainer.uri) throw Error(OpenAjax.hub.Error.BadParameters);
        })(arguments);
        var g = this,
            k = f.Container.scope || window,
            a = !1,
            d = {},
            o, c, s = f.IframeContainer.timeout || 15E3,
            r, n = f.Container.log ? function (a) {
                try {
                    f.Container.log.call(k, "IframeContainer::" + i + ": " + a)
                } catch (c) {
                    OpenAjax.hub._debugger()
                }
            } : function () {};
        this._init = function () {
            e.addContainer(this);
            c = OpenAjax.hub.IframeContainer._rpcRouter.add(i, this);
            var a = f,
                d = k,
                b = n;
            if (!OpenAjax.hub.IframeContainer._prng) {
                var g = (new Date).getTime() + Math.random() + document.cookie;
                OpenAjax.hub.IframeContainer._prng = OpenAjax._smash.crypto.newPRNG(g)
            }
            if ((a = a.IframeContainer || a.IframeHubClient) &&
                a.seed) try {
                var h = a.seed.call(d);
                OpenAjax.hub.IframeContainer._prng.addSeed(h)
            } catch (j) {
                OpenAjax.hub._debugger(), b("caught error from 'seed' callback: " + j.message)
            }
            o = OpenAjax.hub.IframeContainer._prng.nextRandomB64Str(a && a.tokenLength || 6);
            d = f.IframeContainer.clientRelay;
            b = OpenAjax.gadgets.rpc.getRelayChannel();
            if (f.IframeContainer.tunnelURI) {
                if ("wpm" !== b && "ifpc" !== b) throw Error(OpenAjax.hub.Error.IncompatBrowser);
            } else n("WARNING: Parameter 'IframeContaienr.tunnelURI' not specified. Connection will not be fully secure."),
                "rmr" === b && !d && (d = OpenAjax.gadgets.rpc.getOrigin(f.IframeContainer.uri) + "/robots.txt");
            m();
            OpenAjax.gadgets.rpc.setupReceiver(c, d);
            p()
        };
        this.sendToClient = function (a, d, b) {
            OpenAjax.gadgets.rpc.call(c, "openajax.pubsub", null, "pub", a, d, b)
        };
        this.remove = function () {
            h();
            clearTimeout(r);
            OpenAjax.gadgets.rpc.removeReceiver(c);
            var a = document.getElementById(c);
            a.parentNode.removeChild(a);
            OpenAjax.hub.IframeContainer._rpcRouter.remove(c)
        };
        this.isConnected = function () {
            return a
        };
        this.getClientID = function () {
            return i
        };
        this.getPartnerOrigin = function () {
            if (a) {
                var d = OpenAjax.gadgets.rpc.getReceiverOrigin(c);
                if (d) return /^([a-zA-Z]+:\/\/[^:]+).*/.exec(d)[1]
            }
            return null
        };
        this.getParameters = function () {
            return f
        };
        this.getHub = function () {
            return e
        };
        this.getIframe = function () {
            return document.getElementById(c)
        };
        this._handleIncomingRPC = function (a, c, b) {
            switch (a) {
            case "pub":
                e.publishForClient(g, c, b);
                break;
            case "sub":
                a = "";
                try {
                    d[b] = e.subscribeForClient(g, c, b)
                } catch (o) {
                    a = o.message
                }
                return a;
            case "uns":
                return e.unsubscribeForClient(g,
                    d[b]), delete d[b], b;
            case "con":
                return q(), !0;
            case "dis":
                p();
                h();
                if (f.Container.onDisconnect) try {
                    f.Container.onDisconnect.call(k, g)
                } catch (i) {
                    OpenAjax.hub._debugger(), n("caught error from onDisconnect callback to constructor: " + i.message)
                }
                return !0
            }
        };
        this._onSecurityAlert = function (a) {
            b(j[a])
        };
        this._init()
    };
    OpenAjax.hub.IframeHubClient = function (e) {
        function i() {
            if (!h) throw Error(OpenAjax.hub.Error.Disconnected);
        }

        function f(a) {
            if (!a) throw Error(OpenAjax.hub.Error.BadParameters);
            for (var a = a.split("."), d =
                a.length, b = 0; b < d; b++) {
                var c = a[b];
                if ("" === c || -1 != c.indexOf("*") && "*" != c && "**" != c) throw Error(OpenAjax.hub.Error.BadParameters);
                if ("**" == c && b < d - 1) throw Error(OpenAjax.hub.Error.BadParameters);
            }
        }
        if (!e || !e.HubClient || !e.HubClient.onSecurityAlert) throw Error(OpenAjax.hub.Error.BadParameters);
        var m = this,
            j = e.HubClient.scope || window,
            h = !1,
            b = {},
            p = 0,
            g, k = e.HubClient.log ? function (a) {
                try {
                    e.HubClient.log.call(j, "IframeHubClient::" + g + ": " + a)
                } catch (b) {
                    OpenAjax.hub._debugger()
                }
            } : function () {};
        this._init = function () {
            var a =
                OpenAjax.gadgets,
                b = a.util.getUrlParameters();
            b.parent || a.rpc.setupReceiver("..", b.oahParent + "/robots.txt");
            if (e.IframeHubClient && e.IframeHubClient.requireParentVerifiable && null === a.rpc.getReceiverOrigin("..")) throw a.rpc.removeReceiver(".."), Error(OpenAjax.hub.Error.IncompatBrowser);
            OpenAjax.hub.IframeContainer._rpcRouter.add("..", this);
            g = OpenAjax.gadgets.rpc.RPC_ID;
            b.oahId && (g = g.substring(0, g.lastIndexOf("_")))
        };
        this.connect = function (a, b) {
            if (h) throw Error(OpenAjax.hub.Error.Duplicate);
            OpenAjax.gadgets.rpc.call("..",
                "openajax.pubsub", function (f) {
                    if (f && (h = !0, a)) try {
                        a.call(b || window, m, !0)
                    } catch (c) {
                        OpenAjax.hub._debugger(), k("caught error from onComplete callback to connect(): " + c.message)
                    }
                }, "con")
        };
        this.disconnect = function (a, b) {
            if (!h) throw Error(OpenAjax.hub.Error.Disconnected);
            h = !1;
            var f = null;
            a && (f = function () {
                try {
                    a.call(b || window, m, !0)
                } catch (c) {
                    OpenAjax.hub._debugger(), k("caught error from onComplete callback to disconnect(): " + c.message)
                }
            });
            OpenAjax.gadgets.rpc.call("..", "openajax.pubsub", f, "dis")
        };
        this.getPartnerOrigin =
            function () {
                if (h) {
                    var a = OpenAjax.gadgets.rpc.getReceiverOrigin("..");
                    if (a) return /^([a-zA-Z]+:\/\/[^:]+).*/.exec(a)[1]
                }
                return null
            };
        this.getClientID = function () {
            return g
        };
        this.subscribe = function (a, d, e, c, g) {
            i();
            f(a);
            if (!d) throw Error(OpenAjax.hub.Error.BadParameters);
            var e = e || window,
                h = "" + p++;
            b[h] = {
                cb: d,
                sc: e,
                d: g
            };
            OpenAjax.gadgets.rpc.call("..", "openajax.pubsub", function (a) {
                "" !== a && delete b[h];
                if (c) try {
                    c.call(e, h, "" === a, a)
                } catch (d) {
                    OpenAjax.hub._debugger(), k("caught error from onComplete callback to subscribe(): " +
                        d.message)
                }
            }, "sub", a, h);
            return h
        };
        this.publish = function (a, b) {
            i();
            if (!a || "" === a || -1 != a.indexOf("*") || -1 != a.indexOf("..") || "." == a.charAt(0) || "." == a.charAt(a.length - 1)) throw Error(OpenAjax.hub.Error.BadParameters);
            OpenAjax.gadgets.rpc.call("..", "openajax.pubsub", null, "pub", a, b)
        };
        this.unsubscribe = function (a, d, f) {
            i();
            if (!a) throw Error(OpenAjax.hub.Error.BadParameters);
            if (!b[a] || b[a].uns) throw Error(OpenAjax.hub.Error.NoSubscription);
            b[a].uns = !0;
            OpenAjax.gadgets.rpc.call("..", "openajax.pubsub", function () {
                delete b[a];
                if (d) try {
                    d.call(f || window, a, !0)
                } catch (c) {
                    OpenAjax.hub._debugger(), k("caught error from onComplete callback to unsubscribe(): " + c.message)
                }
            }, "uns", null, a)
        };
        this.isConnected = function () {
            return h
        };
        this.getScope = function () {
            return j
        };
        this.getSubscriberData = function (a) {
            i();
            if (b[a]) return b[a].d;
            throw Error(OpenAjax.hub.Error.NoSubscription);
        };
        this.getSubscriberScope = function (a) {
            i();
            if (b[a]) return b[a].sc;
            throw Error(OpenAjax.hub.Error.NoSubscription);
        };
        this.getParameters = function () {
            return e
        };
        this._handleIncomingRPC =
            function (a, d, f, c) {
                if ("pub" === a && b[c] && !b[c].uns) try {
                    b[c].cb.call(b[c].sc, d, f, b[c].d)
                } catch (e) {
                    OpenAjax.hub._debugger(), k("caught error from onData callback to subscribe(): " + e.message)
                }
                return "con" === d ? !0 : !1
            };
        this._init()
    };
    OpenAjax.hub.IframeContainer._rpcRouter = function () {
        function e() {
            var e = f[this.f];
            if (e) return e._handleIncomingRPC.apply(e, arguments)
        }

        function i(e, i) {
            var h = f[e];
            h && h._onSecurityAlert.call(h, i)
        }
        var f = {};
        return {
            add: function (m, q) {
                function h(b, e) {
                    if (".." === b) f[".."] || (f[".."] = e);
                    else {
                        for (var g =
                            b; document.getElementById(g);) g = b + "_" + (32767 * Math.random() | 0).toString(16);
                        f[g] = e;
                        return g
                    }
                }
                OpenAjax.gadgets.rpc.register("openajax.pubsub", e);
                OpenAjax.gadgets.rpc.config({
                    securityCallback: i
                });
                j[OpenAjax.gadgets.rpc.SEC_ERROR_LOAD_TIMEOUT] = OpenAjax.hub.SecurityAlert.LoadTimeout;
                j[OpenAjax.gadgets.rpc.SEC_ERROR_FRAME_PHISH] = OpenAjax.hub.SecurityAlert.FramePhish;
                j[OpenAjax.gadgets.rpc.SEC_ERROR_FORGED_MSG] = OpenAjax.hub.SecurityAlert.ForgedMsg;
                this.add = h;
                return h(m, q)
            },
            remove: function (e) {
                delete f[e]
            }
        }
    }();
    var j = {}
}();
OpenAjax.hub.InlineContainer = function (a, c, d) {
    function f(b, f, a, c, d) {
        if (b) try {
            f = f || window, b.call(f, a, c, d)
        } catch (e) {
            OpenAjax.hub._debugger(), o._log("caught error from onComplete callback: " + e.message)
        }
    }

    function e() {
        for (var b in j) a.unsubscribeForClient(this, j[b].h);
        j = [];
        p = 0;
        g = !1
    }

    function k() {
        if (!g) throw Error(OpenAjax.hub.Error.Disconnected);
    }

    function m(b) {
        if (b = j[b]) return b;
        throw Error(OpenAjax.hub.Error.NoSubscription);
    }
    if (!a || !c || !d || !d.Container || !d.Container.onSecurityAlert) throw Error(OpenAjax.hub.Error.BadParameters);
    var h = d.Container.scope || window,
        g = !1,
        j = [],
        p = 0,
        o = null,
        q = d.Container.log ? function (b) {
            try {
                d.Container.log.call(h, "InlineContainer::" + c + ": " + b)
            } catch (f) {
                OpenAjax.hub._debugger()
            }
        } : function () {};
    this._init = function () {
        a.addContainer(this)
    };
    this.getHub = function () {
        return a
    };
    this.sendToClient = function (b, f, a) {
        if (g) {
            a = j[a];
            try {
                a.cb.call(a.sc, b, f, a.d)
            } catch (c) {
                OpenAjax.hub._debugger(), o._log("caught error from onData callback to HubClient.subscribe(): " + c.message)
            }
        }
    };
    this.remove = function () {
        g && e()
    };
    this.isConnected =
        function () {
            return g
        };
    this.getClientID = function () {
        return c
    };
    this.getPartnerOrigin = function () {
        return g ? window.location.protocol + "//" + window.location.hostname : null
    };
    this.getParameters = function () {
        return d
    };
    this.connect = function (b, a, c) {
        if (g) throw Error(OpenAjax.hub.Error.Duplicate);
        g = !0;
        o = b;
        if (d.Container.onConnect) try {
            d.Container.onConnect.call(h, this)
        } catch (e) {
            OpenAjax.hub._debugger(), q("caught error from onConnect callback to constructor: " + e.message)
        }
        f(a, c, b, !0)
    };
    this.disconnect = function (b, a, c) {
        if (!g) throw Error(OpenAjax.hub.Error.Disconnected);
        e();
        if (d.Container.onDisconnect) try {
            d.Container.onDisconnect.call(h, this)
        } catch (k) {
            OpenAjax.hub._debugger(), q("caught error from onDisconnect callback to constructor: " + k.message)
        }
        f(a, c, b, !0)
    };
    this.subscribe = function (b, c, e, d, g) {
        k();
        if (!b) throw Error(OpenAjax.hub.Error.BadParameters);
        for (var i = b.split("."), n = i.length, l = 0; l < n; l++) {
            var h = i[l];
            if ("" === h || -1 != h.indexOf("*") && "*" != h && "**" != h) throw Error(OpenAjax.hub.Error.BadParameters);
            if ("**" == h && l < n - 1) throw Error(OpenAjax.hub.Error.BadParameters);
        }
        if (!c) throw Error(OpenAjax.hub.Error.BadParameters);
        i = "" + p++;
        n = !1;
        l = null;
        try {
            var m = a.subscribeForClient(this, b, i),
                n = !0
        } catch (o) {
            i = null, l = o.message
        }
        e = e || window;
        n && (j[i] = {
            h: m,
            cb: c,
            sc: e,
            d: g
        });
        f(d, e, i, n, l);
        return i
    };
    this.publish = function (b, f) {
        k();
        if (null == b || "" === b || -1 != b.indexOf("*") || -1 != b.indexOf("..") || "." == b.charAt(0) || "." == b.charAt(b.length - 1)) throw Error(OpenAjax.hub.Error.BadParameters);
        a.publishForClient(this, b, f)
    };
    this.unsubscribe = function (b, c, e) {
        k();
        if ("undefined" === typeof b || null === b) throw Error(OpenAjax.hub.Error.BadParameters);
        var d = j[b];
        if (!d) throw Error(OpenAjax.hub.Error.NoSubscription);
        a.unsubscribeForClient(this, d.h);
        delete j[b];
        f(c, e, b, !0)
    };
    this.getSubscriberData = function (b) {
        k();
        return m(b).d
    };
    this.getSubscriberScope = function (b) {
        k();
        return m(b).sc
    };
    this._init()
};
OpenAjax.hub.InlineHubClient = function (a) {
    if (!a || !a.HubClient || !a.HubClient.onSecurityAlert || !a.InlineHubClient || !a.InlineHubClient.container) throw Error(OpenAjax.hub.Error.BadParameters);
    var c = a.InlineHubClient.container,
        d = a.HubClient.scope || window;
    this._log = a.HubClient.log ? function (f) {
        try {
            a.HubClient.log.call(d, "InlineHubClient::" + c.getClientID() + ": " + f)
        } catch (e) {
            OpenAjax.hub._debugger()
        }
    } : function () {};
    this.connect = function (a, e) {
        c.connect(this, a, e)
    };
    this.disconnect = function (a, e) {
        c.disconnect(this,
            a, e)
    };
    this.getPartnerOrigin = function () {
        return c.getPartnerOrigin()
    };
    this.getClientID = function () {
        return c.getClientID()
    };
    this.subscribe = function (a, e, d, m, h) {
        return c.subscribe(a, e, d, m, h)
    };
    this.publish = function (a, e) {
        c.publish(a, e)
    };
    this.unsubscribe = function (a, e, d) {
        c.unsubscribe(a, e, d)
    };
    this.isConnected = function () {
        return c.isConnected()
    };
    this.getScope = function () {
        return d
    };
    this.getSubscriberData = function (a) {
        return c.getSubscriberData(a)
    };
    this.getSubscriberScope = function (a) {
        return c.getSubscriberScope(a)
    };
    this.getParameters = function () {
        return a
    }
};
"undefined" == typeof OpenAjax._smash && (OpenAjax._smash = {});
OpenAjax._smash.crypto = {
    strToWA: function (a, b) {
        for (var f = [], c = (1 << b) - 1, d = 0; d < a.length * b; d = d + b) f[d >> 5] = f[d >> 5] | (a.charCodeAt(d / b) & c) << 32 - b - d % 32;
        return f
    },
    hmac_sha1: function (a, b, f) {
        for (var c = Array(16), d = Array(16), g = 0; g < 16; g++) {
            c[g] = a[g] ^ 909522486;
            d[g] = a[g] ^ 1549556828
        }
        a = this.sha1(c.concat(this.strToWA(b, f)), 512 + b.length * f);
        return this.sha1(d.concat(a), 672)
    },
    newPRNG: function (a) {
        function b(a) {
            for (var a = f.hmac_sha1(c, a, 8), b = 0; b < 5; b++) d[b] = d[b] ^ a[b]
        }
        var f = this;
        (typeof a != "string" || a.length < 12) && alert("WARNING: Seed length too short ...");
        var c = [43417, 15926, 18182, 33130, 9585, 30800, 49772, 40144, 47678, 55453, 4659, 38181, 65340, 6787, 54417, 65301],
            d = [],
            g = 0;
        b(a);
        return {
            addSeed: function (a) {
                b(a)
            },
            nextRandomOctets: function (a) {
                for (var b = []; a > 0;) {
                    g = g + 1;
                    var c = f.hmac_sha1(d, g.toString(16), 8);
                    for (i = 0; i < 20 & a > 0; i++, a--) b.push((c[i >> 2] >> i % 4) % 256)
                }
                return b
            },
            nextRandomB64Str: function (a) {
                for (var b = this.nextRandomOctets(a), c = "", d = 0; d < a; d++) c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[d] & 63);
                return c
            }
        }
    },
    sha1: function () {
        var a =
            function (a, f) {
                var c = (a & 65535) + (f & 65535);
                return (a >> 16) + (f >> 16) + (c >> 16) << 16 | c & 65535
            };
        return function (b, f) {
            b[f >> 5] = b[f >> 5] | 128 << 24 - f % 32;
            b[(f + 64 >> 9 << 4) + 15] = f;
            for (var c = Array(80), d = 1732584193, g = -271733879, m = -1732584194, n = 271733878, o = -1009589776, p = 0; p < b.length; p = p + 16) {
                for (var l = d, h = g, j = m, k = n, q = o, e = 0; e < 80; e++) {
                    c[e] = e < 16 ? b[p + e] : (c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16]) << 1 | (c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16]) >>> 31;
                    var r = l << 5 | l >>> 27,
                        s;
                    s = e < 20 ? h & j | ~h & k : e < 40 ? h ^ j ^ k : e < 60 ? h & j | h & k | j & k : h ^ j ^ k;
                    r = a(a(r, s), a(a(q, c[e]), e < 20 ? 1518500249 :
                        e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514));
                    q = k;
                    k = j;
                    j = h << 30 | h >>> 2;
                    h = l;
                    l = r
                }
                d = a(l, d);
                g = a(h, g);
                m = a(j, m);
                n = a(k, n);
                o = a(q, o)
            }
            return [d, g, m, n, o]
        }
    }()
};
gadgets.pubsub2router = function () {
    return {
        init: function (a) {
            this.hub = a.hub ? a.hub : new OpenAjax.hub.ManagedHub({
                onPublish: a.onPublish,
                onSubscribe: a.onSubscribe,
                onUnsubscribe: a.onUnsubscribe
            })
        }
    }
}();
gadgets.config.init({
    opensocial: {
        invalidatePath: "http://%host%/shindig//rpc",
        path: "http://%host%/shindig//rpc",
        domain: "shindig",
        supportedFields: {
            person: ["id", {
                name: ["familyName", "givenName", "unstructured"]
            }, "thumbnailUrl", "profileUrl"],
            mediaItem: "album_id created description duration file_size id language last_updated location mime_type num_comments num_views num_votes rating start_time tagged_people tags thumbnail_url title type url".split(" "),
            album: "id thumbnailUrl title description location ownerId".split(" "),
            group: ["id", "title", "description"],
            activity: "appId body bodyId externalId id mediaItems postedTime priority streamFaviconUrl streamSourceUrl streamTitle streamUrl templateParams title url userId".split(" "),
            activityEntry: "actor content generator icon id object published provider target title updated url verb openSocial extensions".split(" ")
        },
        enableCaja: !1
    },
    rpc: {
        commSwf: "/xpc.swf",
        passReferrer: "c2p:query",
        parentRelayUrl: "/container/rpc_relay.html",
        useLegacyProtocol: !1
    },
    "shindig.auth": {
        authToken: "-1:-1:*:*:*:0:default"
    },
    views: {
        "default": {
            isOnlyVisible: !1,
            urlTemplate: "http://localhost//gadgets/default?{var}",
            aliases: ["home", "profile", "canvas"]
        },
        canvas: {
            isOnlyVisible: !0,
            urlTemplate: "http://localhost//gadgets/canvas?{var}",
            aliases: ["FULL_PAGE"]
        },
        profile: {
            isOnlyVisible: !1,
            urlTemplate: "http://localhost//gadgets/profile?{var}",
            aliases: ["DASHBOARD", "default"]
        }
    },
    container: {
        relayPath: "//gadgets/files/container/rpc_relay.html",
        enableRpcArbitration: !1
    },
    osapi: {
        endPoints: ["//%host%/shindig//rpc"]
    },
    "osapi.services": {
        "gadgets.rpc": ["container.listMethods"],
        "//%host%/shindig//rpc": "samplecontainer.update activities.supportedFields gadgets.metadata albums.supportedFields gadgets.proxySupportedFields albums.get mediaItems.create http.put system.listMethods gadgets.proxy gadgets.cajole http.head messages.create albums.delete mediaItems.update messages.delete appdata.update gadgets.js http.post gadgets.tokenSupportedFields samplecontainer.create http.get appdata.delete appdata.create gadgets.supportedFields mediaItems.get activities.update activities.delete albums.update activities.get messages.modify activitystreams.create appdata.get messages.get cache.invalidate samplecontainer.get people.supportedFields groups.get http.delete gadgets.jsSupportedFields people.get activitystreams.get mediaItems.supportedFields mediaItems.delete activitystreams.update gadgets.cajaSupportedFields activities.create albums.create people.update gadgets.token activitystreams.delete activitystreams.supportedFields".split(" ")
    },
    "core.io": {
        unparseableCruft: "throw 1; < don't be evil' >",
        jsonProxyUrl: "//%host%/shindig//gadgets/makeRequest",
        jsPath: "//gadgets/js",
        proxyUrl: "//%host%/shindig//gadgets/proxy?container=%container%&refresh=%refresh%&url=%url%%authz%%rewriteMime%",
        xhrPollIntervalMs: 50
    }
});
window['___jsl']['l'] = (window['___jsl']['l'] || []).concat(['container', 'open-views', 'opensearch', 'pubsub-2', 'rpc', 'xmlutil']);
