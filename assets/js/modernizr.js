/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-csspointerevents-csstransforms-input-inputtypes-localstorage-touchevents-setclasses !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, s, i, a;
    for (var l in S)
      if (S.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = S[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++)
          (i = e[s]),
            (a = i.split(".")),
            1 === a.length
              ? (Modernizr[a[0]] = o)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = o)),
            C.push((o ? "" : "no-") + a.join("-"));
      }
  }
  function s(e) {
    var t = x.className,
      n = Modernizr._config.classPrefix || "";
    if ((w && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      w ? (x.className.baseVal = t) : (x.className = t));
  }
  function i() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : w
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function a(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function l(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function u(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function f(e, t, n) {
    var o;
    for (var s in e)
      if (e[s] in t)
        return n === !1
          ? e[s]
          : ((o = t[e[s]]), r(o, "function") ? u(o, n || t) : o);
    return !1;
  }
  function c(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var s = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (s) {
        var i = s.error ? "error" : "log";
        s[i].call(
          s,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o;
  }
  function p() {
    var e = t.body;
    return e || ((e = i(w ? "svg" : "body")), (e.fake = !0)), e;
  }
  function m(e, n, r, o) {
    var s,
      a,
      l,
      u,
      f = "modernizr",
      c = i("div"),
      d = p();
    if (parseInt(r, 10))
      for (; r--; )
        (l = i("div")), (l.id = o ? o[r] : f + (r + 1)), c.appendChild(l);
    return (
      (s = i("style")),
      (s.type = "text/css"),
      (s.id = "s" + f),
      (d.fake ? d : c).appendChild(s),
      d.appendChild(c),
      s.styleSheet
        ? (s.styleSheet.cssText = e)
        : s.appendChild(t.createTextNode(e)),
      (c.id = f),
      d.fake &&
        ((d.style.background = ""),
        (d.style.overflow = "hidden"),
        (u = x.style.overflow),
        (x.style.overflow = "hidden"),
        x.appendChild(d)),
      (a = n(c, e)),
      d.fake
        ? (d.parentNode.removeChild(d), (x.style.overflow = u), x.offsetHeight)
        : c.parentNode.removeChild(c),
      !!a
    );
  }
  function v(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(c(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var s = []; o--; ) s.push("(" + c(t[o]) + ":" + r + ")");
      return (
        (s = s.join(" or ")),
        m(
          "@supports (" + s + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == d(e, null, "position");
          }
        )
      );
    }
    return n;
  }
  function h(e, t, o, s) {
    function u() {
      c && (delete L.style, delete L.modElem);
    }
    if (((s = r(s, "undefined") ? !1 : s), !r(o, "undefined"))) {
      var f = v(e, o);
      if (!r(f, "undefined")) return f;
    }
    for (
      var c, d, p, m, h, y = ["modernizr", "tspan", "samp"];
      !L.style && y.length;

    )
      (c = !0), (L.modElem = i(y.shift())), (L.style = L.modElem.style);
    for (p = e.length, d = 0; p > d; d++)
      if (
        ((m = e[d]),
        (h = L.style[m]),
        a(m, "-") && (m = l(m)),
        L.style[m] !== n)
      ) {
        if (s || r(o, "undefined")) return u(), "pfx" == t ? m : !0;
        try {
          L.style[m] = o;
        } catch (g) {}
        if (L.style[m] != h) return u(), "pfx" == t ? m : !0;
      }
    return u(), !1;
  }
  function y(e, t, n, o, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + A.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? h(a, t, o, s)
      : ((a = (e + " " + j.join(i + " ") + i).split(" ")), f(a, t, n));
  }
  function g(e, t, r) {
    return y(e, n, n, t, r);
  }
  var C = [],
    S = [],
    b = {
      _version: "3.5.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        S.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        S.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = b),
    (Modernizr = new Modernizr()),
    Modernizr.addTest("localstorage", function () {
      var e = "modernizr";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch (t) {
        return !1;
      }
    });
  var x = t.documentElement,
    w = "svg" === x.nodeName.toLowerCase();
  Modernizr.addTest("csspointerevents", function () {
    var e = i("a").style;
    return (e.cssText = "pointer-events:auto"), "auto" === e.pointerEvents;
  });
  var _ = i("input"),
    T =
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      ),
    z = {};
  Modernizr.input = (function (t) {
    for (var n = 0, r = t.length; r > n; n++) z[t[n]] = !!(t[n] in _);
    return z.list && (z.list = !(!i("datalist") || !e.HTMLDataListElement)), z;
  })(T);
  var k =
      "search tel url email datetime date month week time datetime-local number range color".split(
        " "
      ),
    E = {};
  Modernizr.inputtypes = (function (e) {
    for (var r, o, s, i = e.length, a = "1)", l = 0; i > l; l++)
      _.setAttribute("type", (r = e[l])),
        (s = "text" !== _.type && "style" in _),
        s &&
          ((_.value = a),
          (_.style.cssText = "position:absolute;visibility:hidden;"),
          /^range$/.test(r) && _.style.WebkitAppearance !== n
            ? (x.appendChild(_),
              (o = t.defaultView),
              (s =
                o.getComputedStyle &&
                "textfield" !== o.getComputedStyle(_, null).WebkitAppearance &&
                0 !== _.offsetHeight),
              x.removeChild(_))
            : /^(search|tel)$/.test(r) ||
              (s = /^(url|email)$/.test(r)
                ? _.checkValidity && _.checkValidity() === !1
                : _.value != a)),
        (E[e[l]] = !!s);
    return E;
  })(k);
  var P = "Moz O ms Webkit",
    A = b._config.usePrefixes ? P.split(" ") : [];
  b._cssomPrefixes = A;
  var j = b._config.usePrefixes ? P.toLowerCase().split(" ") : [];
  b._domPrefixes = j;
  var N = { elem: i("modernizr") };
  Modernizr._q.push(function () {
    delete N.elem;
  });
  var L = { style: N.elem.style };
  Modernizr._q.unshift(function () {
    delete L.style;
  }),
    (b.testAllProps = y),
    (b.testAllProps = g),
    Modernizr.addTest("backgroundsize", g("backgroundSize", "100%", !0)),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        g("transform", "scale(1)", !0)
      );
    });
  var V = b._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  b._prefixes = V;
  var q = (b.testStyles = m);
  Modernizr.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch))
      n = !0;
    else {
      var r = [
        "@media (",
        V.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}",
      ].join("");
      q(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  }),
    o(),
    s(C),
    delete b.addTest,
    delete b.addAsyncTest;
  for (var $ = 0; $ < Modernizr._q.length; $++) Modernizr._q[$]();
  e.Modernizr = Modernizr;
})(window, document);
