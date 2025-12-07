((m, p) => {
  var h = {},
    f = (m.GreenSockGlobals = m.GreenSockGlobals || m);
  if (!f.TweenLite) {
    var g,
      t,
      z,
      V = function (e) {
        for (var t = e.split("."), i = f, s = 0; s < t.length; s++)
          i[t[s]] = i = i[t[s]] || {};
        return i;
      },
      u = V("com.greensock"),
      v = 1e-10,
      B = function (e) {
        for (var t = [], i = e.length, s = 0; s !== i; t.push(e[s++]));
        return t;
      },
      N = function () {},
      y =
        ((t = Object.prototype.toString),
        (z = t.call([])),
        function (e) {
          return (
            null != e &&
            (e instanceof Array ||
              ("object" == typeof e && !!e.push && t.call(e) === z))
          );
        }),
      b = {},
      q = function (o, l, d, c) {
        (this.sc = b[o] ? b[o].sc : []),
          ((b[o] = this).gsClass = null),
          (this.func = d);
        var u = [];
        (this.check = function (e) {
          for (var t, i, s, a, n = l.length, r = n; -1 < --n; )
            (t = b[l[n]] || new q(l[n], [])).gsClass
              ? ((u[n] = t.gsClass), r--)
              : e && t.sc.push(this);
          if (0 === r && d) {
            if (
              ((i = (a = ("com.greensock." + o).split(".")).pop()),
              (s = V(a.join("."))[i] = this.gsClass = d.apply(d, u)),
              c)
            )
              if (
                ((f[i] = h[i] = s),
                !(a = "undefined" != typeof module && module.exports) &&
                  "function" == typeof define &&
                  define.amd)
              )
                define(
                  (m.GreenSockAMDPath ? m.GreenSockAMDPath + "/" : "") +
                    o.split(".").pop(),
                  [],
                  function () {
                    return s;
                  }
                );
              else if (a)
                if (o === p)
                  for (n in ((module.exports = h[p] = s), h)) s[n] = h[n];
                else h[p] && (h[p][i] = s);
            for (n = 0; n < this.sc.length; n++) this.sc[n].check();
          }
        }),
          this.check(!0);
      },
      s = (m._gsDefine = function (e, t, i, s) {
        return new q(e, t, i, s);
      }),
      w = (u._class = function (e, t, i) {
        return (
          (t = t || function () {}),
          s(
            e,
            [],
            function () {
              return t;
            },
            i
          ),
          t
        );
      }),
      R = ((s.globals = f), [0, 0, 1, 1]),
      x = w(
        "easing.Ease",
        function (e, t, i, s) {
          (this._func = e),
            (this._type = i || 0),
            (this._power = s || 0),
            (this._params = t ? R.concat(t) : R);
        },
        !0
      ),
      _ = (x.map = {}),
      e = (x.register = function (e, t, i, s) {
        for (
          var a,
            n,
            r,
            o,
            l = t.split(","),
            d = l.length,
            c = (i || "easeIn,easeOut,easeInOut").split(",");
          -1 < --d;

        )
          for (
            n = l[d],
              a = s ? w("easing." + n, null, !0) : u.easing[n] || {},
              r = c.length;
            -1 < --r;

          )
            (o = c[r]),
              (_[n + "." + o] =
                _[o + n] =
                a[o] =
                  e.getRatio ? e : e[o] || new e());
      }),
      i = x.prototype;
    for (
      i._calcEnd = !1,
        i.getRatio = function (e) {
          var t, i, s;
          return this._func
            ? ((this._params[0] = e), this._func.apply(null, this._params))
            : ((s =
                1 === (t = this._type)
                  ? 1 - e
                  : 2 === t
                  ? e
                  : e < 0.5
                  ? 2 * e
                  : 2 * (1 - e)),
              1 === (i = this._power)
                ? (s *= s)
                : 2 === i
                ? (s *= s * s)
                : 3 === i
                ? (s *= s * s * s)
                : 4 === i && (s *= s * s * s * s),
              1 === t ? 1 - s : 2 === t ? s : e < 0.5 ? s / 2 : 1 - s / 2);
        },
        n = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
      -1 < --n;

    )
      (i = a[n] + ",Power" + n),
        e(new x(null, null, 1, n), i, "easeOut", !0),
        e(new x(null, null, 2, n), i, "easeIn" + (0 === n ? ",easeNone" : "")),
        e(new x(null, null, 3, n), i, "easeInOut");
    (_.linear = u.easing.Linear.easeIn), (_.swing = u.easing.Quad.easeInOut);
    for (
      var a,
        F = w("events.EventDispatcher", function (e) {
          (this._listeners = {}), (this._eventTarget = e || this);
        }),
        S =
          (((i = F.prototype).addEventListener = function (e, t, i, s, a) {
            a = a || 0;
            var n,
              r,
              o = this._listeners[e],
              l = 0;
            for (
              this !== M || g || M.wake(),
                null == o && (this._listeners[e] = o = []),
                r = o.length;
              -1 < --r;

            )
              (n = o[r]).c === t && n.s === i
                ? o.splice(r, 1)
                : 0 === l && n.pr < a && (l = r + 1);
            o.splice(l, 0, { c: t, s: i, up: s, pr: a });
          }),
          (i.removeEventListener = function (e, t) {
            var i,
              s = this._listeners[e];
            if (s)
              for (i = s.length; -1 < --i; )
                if (s[i].c === t) return void s.splice(i, 1);
          }),
          (i.dispatchEvent = function (e) {
            var t,
              i,
              s,
              a = this._listeners[e];
            if (a)
              for (
                1 < (t = a.length) && (a = a.slice(0)), i = this._eventTarget;
                -1 < --t;

              )
                (s = a[t]) &&
                  (s.up
                    ? s.c.call(s.s || i, { type: e, target: i })
                    : s.c.call(s.s || i));
          }),
          m.requestAnimationFrame),
        T = m.cancelAnimationFrame,
        E =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        C = E(),
        n = (a = ["ms", "moz", "webkit", "o"]).length;
      -1 < --n && !S;

    )
      (S = m[a[n] + "RequestAnimationFrame"]),
        (T =
          m[a[n] + "CancelAnimationFrame"] ||
          m[a[n] + "CancelRequestAnimationFrame"]);
    w("Ticker", function (e, t) {
      var s,
        a,
        n,
        r,
        o,
        l = this,
        d = E(),
        i = !(!1 === t || !S) && "auto",
        c = 500,
        u = 33,
        p = "tick",
        h = function (e) {
          var t,
            i = E() - C;
          c < i && (d += i - u),
            (C += i),
            (l.time = (C - d) / 1e3),
            (i = l.time - o),
            (!s || 0 < i || !0 === e) &&
              (l.frame++, (o += i + (r <= i ? 0.004 : r - i)), (t = !0)),
            !0 !== e && (n = a(h)),
            t && l.dispatchEvent(p);
        };
      F.call(l),
        (l.time = l.frame = 0),
        (l.tick = function () {
          h(!0);
        }),
        (l.lagSmoothing = function (e, t) {
          (c = e || 1 / v), (u = Math.min(t, c, 0));
        }),
        (l.sleep = function () {
          null != n &&
            ((i && T ? T : clearTimeout)(n), (a = N), (n = null), l === M) &&
            (g = !1);
        }),
        (l.wake = function (e) {
          null !== n
            ? l.sleep()
            : e
            ? (d += -C + (C = E()))
            : 10 < l.frame && (C = E() - c + 5),
            (a =
              0 === s
                ? N
                : i && S
                ? S
                : function (e) {
                    return setTimeout(e, (1e3 * (o - l.time) + 1) | 0);
                  }),
            l === M && (g = !0),
            h(2);
        }),
        (l.fps = function (e) {
          if (!arguments.length) return s;
          (r = 1 / ((s = e) || 60)), (o = this.time + r), l.wake();
        }),
        (l.useRAF = function (e) {
          if (!arguments.length) return i;
          l.sleep(), (i = e), l.fps(s);
        }),
        l.fps(e),
        setTimeout(function () {
          "auto" === i &&
            l.frame < 5 &&
            "hidden" !== document.visibilityState &&
            l.useRAF(!1);
        }, 1500);
    }),
      ((i = u.Ticker.prototype = new u.events.EventDispatcher()).constructor =
        u.Ticker);
    var o = w("core.Animation", function (e, t) {
        (this.vars = t = t || {}),
          (this._duration = this._totalDuration = e || 0),
          (this._delay = Number(t.delay) || 0),
          (this._timeScale = 1),
          (this._active = !0 === t.immediateRender),
          (this.data = t.data),
          (this._reversed = !0 === t.reversed),
          c &&
            (g || M.wake(),
            (e = this.vars.useFrames ? d : c).add(this, e._time),
            this.vars.paused) &&
            this.paused(!0);
      }),
      M = (o.ticker = new u.Ticker()),
      H =
        (((i = o.prototype)._dirty = i._gc = i._initted = i._paused = !1),
        (i._totalTime = i._time = 0),
        (i._rawPrevTime = -1),
        (i._next = i._last = i._onUpdate = i._timeline = i.timeline = null),
        (i._paused = !1),
        function () {
          g && 2e3 < E() - C && M.wake(), setTimeout(H, 2e3);
        }),
      r =
        (H(),
        (i.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (i.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (i.resume = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!1);
        }),
        (i.seek = function (e, t) {
          return this.totalTime(Number(e), !1 !== t);
        }),
        (i.restart = function (e, t) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(e ? -this._delay : 0, !1 !== t, !0);
        }),
        (i.reverse = function (e, t) {
          return (
            null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (i.render = function (e, t, i) {}),
        (i.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (!this._gc && this.timeline) || this._enabled(!0),
            this
          );
        }),
        (i.isActive = function () {
          var e = this._timeline,
            t = this._startTime;
          return (
            !e ||
            (!this._gc &&
              !this._paused &&
              e.isActive() &&
              (e = e.rawTime()) >= t &&
              e < t + this.totalDuration() / this._timeScale)
          );
        }),
        (i._enabled = function (e, t) {
          return (
            g || M.wake(),
            (this._gc = !e),
            (this._active = this.isActive()),
            !0 !== t &&
              (e && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !e && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (i._kill = function (e, t) {
          return this._enabled(!1, !1);
        }),
        (i.kill = function (e, t) {
          return this._kill(e, t), this;
        }),
        (i._uncache = function (e) {
          for (var t = e ? this : this.timeline; t; )
            (t._dirty = !0), (t = t.timeline);
          return this;
        }),
        (i._swapSelfInParams = function (e) {
          for (var t = e.length, i = e.concat(); -1 < --t; )
            "{self}" === e[t] && (i[t] = this);
          return i;
        }),
        (i._callback = function (e) {
          var t = this.vars,
            i = t[e],
            s = t[e + "Params"],
            a = t[e + "Scope"] || t.callbackScope || this;
          switch (s ? s.length : 0) {
            case 0:
              i.call(a);
              break;
            case 1:
              i.call(a, s[0]);
              break;
            case 2:
              i.call(a, s[0], s[1]);
              break;
            default:
              i.apply(a, s);
          }
        }),
        (i.eventCallback = function (e, t, i, s) {
          if ("on" === (e || "").substr(0, 2)) {
            var a = this.vars;
            if (1 === arguments.length) return a[e];
            null == t
              ? delete a[e]
              : ((a[e] = t),
                (a[e + "Params"] =
                  y(i) && -1 !== i.join("").indexOf("{self}")
                    ? this._swapSelfInParams(i)
                    : i),
                (a[e + "Scope"] = s)),
              "onUpdate" === e && (this._onUpdate = t);
          }
          return this;
        }),
        (i.delay = function (e) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (i.duration = function (e) {
          return arguments.length
            ? ((this._duration = this._totalDuration = e),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                0 < this._time &&
                this._time < this._duration &&
                0 !== e &&
                this.totalTime(this._totalTime * (e / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (i.totalDuration = function (e) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(e) : this._totalDuration
          );
        }),
        (i.time = function (e, t) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(e > this._duration ? this._duration : e, t))
            : this._time;
        }),
        (i.totalTime = function (e, t, i) {
          if ((g || M.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (e < 0 && !i && (e += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var s = this._totalDuration,
                a = this._timeline;
              if (
                (s < e && !i && (e = s),
                (this._startTime =
                  (this._paused ? this._pauseTime : a._time) -
                  (this._reversed ? s - e : e) / this._timeScale),
                a._dirty || this._uncache(!1),
                a._timeline)
              )
                for (; a._timeline; )
                  a._timeline._time !==
                    (a._startTime + a._totalTime) / a._timeScale &&
                    a.totalTime(a._totalTime, !0),
                    (a = a._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime === e && 0 !== this._duration) ||
                (O.length && A(), this.render(e, t, !1), O.length && A());
          }
          return this;
        }),
        (i.progress = i.totalProgress =
          function (e, t) {
            var i = this.duration();
            return arguments.length
              ? this.totalTime(i * e, t)
              : i
              ? this._time / i
              : this.ratio;
          }),
        (i.startTime = function (e) {
          return arguments.length
            ? (e !== this._startTime &&
                ((this._startTime = e), this.timeline) &&
                this.timeline._sortChildren &&
                this.timeline.add(this, e - this._delay),
              this)
            : this._startTime;
        }),
        (i.endTime = function (e) {
          return (
            this._startTime +
            (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (i.timeScale = function (e) {
          var t;
          return arguments.length
            ? ((e = e || v),
              this._timeline &&
                this._timeline.smoothChildTiming &&
                ((t =
                  (t = this._pauseTime) || 0 === t
                    ? t
                    : this._timeline.totalTime()),
                (this._startTime =
                  t - ((t - this._startTime) * this._timeScale) / e)),
              (this._timeScale = e),
              this._uncache(!1))
            : this._timeScale;
        }),
        (i.reversed = function (e) {
          return arguments.length
            ? (e != this._reversed &&
                ((this._reversed = e),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (i.paused = function (e) {
          var t, i, s;
          return arguments.length
            ? ((t = this._timeline),
              e != this._paused &&
                t &&
                (g || e || M.wake(),
                (s = (i = t.rawTime()) - this._pauseTime),
                !e &&
                  t.smoothChildTiming &&
                  ((this._startTime += s), this._uncache(!1)),
                (this._pauseTime = e ? i : null),
                (this._paused = e),
                (this._active = this.isActive()),
                !e) &&
                0 != s &&
                this._initted &&
                this.duration() &&
                ((i = t.smoothChildTiming
                  ? this._totalTime
                  : (i - this._startTime) / this._timeScale),
                this.render(i, i === this._totalTime, !0)),
              this._gc && !e && this._enabled(!0, !1),
              this)
            : this._paused;
        }),
        w("core.SimpleTimeline", function (e) {
          o.call(this, 0, e),
            (this.autoRemoveChildren = this.smoothChildTiming = !0);
        })),
      k =
        (((i = r.prototype = new o()).constructor = r),
        (i.kill()._gc = !1),
        (i._first = i._last = i._recent = null),
        (i._sortChildren = !1),
        (i.add = i.insert =
          function (e, t, i, s) {
            var a, n;
            if (
              ((e._startTime = Number(t || 0) + e._delay),
              e._paused &&
                this !== e._timeline &&
                (e._pauseTime =
                  e._startTime +
                  (this.rawTime() - e._startTime) / e._timeScale),
              e.timeline && e.timeline._remove(e, !0),
              (e.timeline = e._timeline = this),
              e._gc && e._enabled(!0, !0),
              (a = this._last),
              this._sortChildren)
            )
              for (n = e._startTime; a && a._startTime > n; ) a = a._prev;
            return (
              a
                ? ((e._next = a._next), (a._next = e))
                : ((e._next = this._first), (this._first = e)),
              e._next ? (e._next._prev = e) : (this._last = e),
              (e._prev = a),
              (this._recent = e),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (i._remove = function (e, t) {
          return (
            e.timeline === this &&
              (t || e._enabled(!1, !0),
              e._prev
                ? (e._prev._next = e._next)
                : this._first === e && (this._first = e._next),
              e._next
                ? (e._next._prev = e._prev)
                : this._last === e && (this._last = e._prev),
              (e._next = e._prev = e.timeline = null),
              e === this._recent && (this._recent = this._last),
              this._timeline) &&
              this._uncache(!0),
            this
          );
        }),
        (i.render = function (e, t, i) {
          var s,
            a = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = e; a; )
            (s = a._next),
              (a._active || (e >= a._startTime && !a._paused)) &&
                (a._reversed
                  ? a.render(
                      (a._dirty ? a.totalDuration() : a._totalDuration) -
                        (e - a._startTime) * a._timeScale,
                      t,
                      i
                    )
                  : a.render((e - a._startTime) * a._timeScale, t, i)),
              (a = s);
        }),
        (i.rawTime = function () {
          return g || M.wake(), this._totalTime;
        }),
        w(
          "TweenLite",
          function (e, t, i) {
            if (
              (o.call(this, t, i),
              (this.render = k.prototype.render),
              null == e)
            )
              throw "Cannot tween a null target.";
            this.target = e = ("string" == typeof e && k.selector(e)) || e;
            var s,
              a,
              n,
              i =
                e.jquery ||
                (e.length &&
                  e !== m &&
                  e[0] &&
                  (e[0] === m || (e[0].nodeType && e[0].style && !e.nodeType))),
              r = this.vars.overwrite;
            if (
              ((this._overwrite = r =
                null == r
                  ? Z[k.defaultOverwrite]
                  : "number" == typeof r
                  ? r >> 0
                  : Z[r]),
              (i || e instanceof Array || (e.push && y(e))) &&
                "number" != typeof e[0])
            )
              for (
                this._targets = n = B(e),
                  this._propLookup = [],
                  this._siblings = [],
                  s = 0;
                s < n.length;
                s++
              )
                (a = n[s])
                  ? "string" == typeof a
                    ? "string" == typeof (a = n[s--] = k.selector(a)) &&
                      n.splice(s + 1, 1)
                    : a.length &&
                      a !== m &&
                      a[0] &&
                      (a[0] === m ||
                        (a[0].nodeType && a[0].style && !a.nodeType))
                    ? (n.splice(s--, 1), (this._targets = n = n.concat(B(a))))
                    : ((this._siblings[s] = I(a, this, !1)),
                      1 === r &&
                        1 < this._siblings[s].length &&
                        ee(a, this, null, 1, this._siblings[s]))
                  : n.splice(s--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = I(e, this, !1)),
                1 === r &&
                  1 < this._siblings.length &&
                  ee(e, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === t &&
                0 === this._delay &&
                !1 !== this.vars.immediateRender)) &&
              ((this._time = -v), this.render(Math.min(0, -this._delay)));
          },
          !0
        )),
      L = function (e) {
        return (
          e &&
          e.length &&
          e !== m &&
          e[0] &&
          (e[0] === m || (e[0].nodeType && e[0].style && !e.nodeType))
        );
      },
      O =
        (((i = k.prototype = new o()).constructor = k),
        (i.kill()._gc = !1),
        (i.ratio = 0),
        (i._firstPT = i._targets = i._overwrittenProps = i._startAt = null),
        (i._notifyPluginsOfEnabled = i._lazy = !1),
        (k.version = "1.19.0"),
        (k.defaultEase = i._ease = new x(null, null, 1, 1)),
        (k.defaultOverwrite = "auto"),
        (k.ticker = M),
        (k.autoSleep = 120),
        (k.lagSmoothing = function (e, t) {
          M.lagSmoothing(e, t);
        }),
        (k.selector =
          m.$ ||
          m.jQuery ||
          function (e) {
            var t = m.$ || m.jQuery;
            return t
              ? (k.selector = t)(e)
              : "undefined" == typeof document
              ? e
              : document.querySelectorAll
              ? document.querySelectorAll(e)
              : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
          }),
        []),
      D = {},
      X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      Y = function (e) {
        for (var t, i = this._firstPT; i; )
          (t = i.blob ? (e ? this.join("") : this.start) : i.c * e + i.s),
            i.m
              ? (t = i.m(t, this._target || i.t))
              : t < 1e-6 && -1e-6 < t && (t = 0),
            i.f ? (i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t)) : (i.t[i.p] = t),
            (i = i._next);
      },
      j = function (e, t, i, s) {
        var a,
          n,
          r,
          o,
          l,
          d,
          c = [e, t],
          u = 0,
          p = "",
          h = 0;
        for (
          c.start = e,
            i && (i(c), (e = c[0]), (t = c[1])),
            c.length = 0,
            a = e.match(X) || [],
            n = t.match(X) || [],
            s &&
              ((s._next = null), (s.blob = 1), (c._firstPT = c._applyPT = s)),
            o = n.length,
            r = 0;
          r < o;
          r++
        )
          (d = n[r]),
            (p += (l = t.substr(u, t.indexOf(d, u) - u)) || !r ? l : ","),
            (u += l.length),
            h ? (h = (h + 1) % 5) : "rgba(" === l.substr(-5) && (h = 1),
            d === a[r] || a.length <= r
              ? (p += d)
              : (p && (c.push(p), (p = "")),
                (l = parseFloat(a[r])),
                c.push(l),
                (c._firstPT = {
                  _next: c._firstPT,
                  t: c,
                  p: c.length - 1,
                  s: l,
                  c:
                    ("=" === d.charAt(1)
                      ? parseInt(d.charAt(0) + "1", 10) *
                        parseFloat(d.substr(2))
                      : parseFloat(d) - l) || 0,
                  f: 0,
                  m: h && h < 4 ? Math.round : 0,
                })),
            (u += d.length);
        return (p += t.substr(u)) && c.push(p), (c.setRatio = Y), c;
      },
      G = function (e, t, i, s, a, n, r, o, l) {
        "function" == typeof s && (s = s(l || 0, e));
        var l = "get" === i ? e[t] : i,
          d = typeof e[t],
          c = "string" == typeof s && "=" === s.charAt(1),
          n = {
            t: e,
            p: t,
            s: l,
            f: "function" == d,
            pg: 0,
            n: a || t,
            m: n ? ("function" == typeof n ? n : Math.round) : 0,
            pr: 0,
            c: c
              ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2))
              : parseFloat(s) - l || 0,
          };
        if (
          ("number" != d &&
            ("function" == d &&
              "get" === i &&
              ((d =
                t.indexOf("set") || "function" != typeof e["get" + t.substr(3)]
                  ? t
                  : "get" + t.substr(3)),
              (n.s = l = r ? e[d](r) : e[d]())),
            "string" == typeof l && (r || isNaN(l))
              ? ((n.fp = r),
                (n = {
                  t: j(l, s, o || k.defaultStringFilter, n),
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: a || t,
                  pr: 0,
                  m: 0,
                }))
              : c || ((n.s = parseFloat(l)), (n.c = parseFloat(s) - n.s || 0))),
          n.c)
        )
          return (
            (n._next = this._firstPT) && (n._next._prev = n),
            (this._firstPT = n)
          );
      },
      W = (k._internals = {
        isArray: y,
        isSelector: L,
        lazyTweens: O,
        blobDif: j,
      }),
      P = (k._plugins = {}),
      l = (W.tweenLookup = {}),
      U = 0,
      Q = (W.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
      }),
      Z = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0,
      },
      d = (o._rootFramesTimeline = new r()),
      c = (o._rootTimeline = new r()),
      K = 30,
      A = (W.lazyRender = function () {
        var e,
          t = O.length;
        for (D = {}; -1 < --t; )
          (e = O[t]) &&
            !1 !== e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
        O.length = 0;
      }),
      I =
        ((c._startTime = M.time),
        (d._startTime = M.frame),
        (c._active = d._active = !0),
        setTimeout(A, 1),
        (o._updateRoot = k.render =
          function () {
            var e, t, i;
            if (
              (O.length && A(),
              c.render((M.time - c._startTime) * c._timeScale, !1, !1),
              d.render((M.frame - d._startTime) * d._timeScale, !1, !1),
              O.length && A(),
              M.frame >= K)
            ) {
              for (i in ((K = M.frame + (parseInt(k.autoSleep, 10) || 120)),
              l)) {
                for (e = (t = l[i].tweens).length; -1 < --e; )
                  t[e]._gc && t.splice(e, 1);
                0 === t.length && delete l[i];
              }
              if (
                (!(i = c._first) || i._paused) &&
                k.autoSleep &&
                !d._first &&
                1 === M._listeners.tick.length
              ) {
                for (; i && i._paused; ) i = i._next;
                i || M.sleep();
              }
            }
          }),
        M.addEventListener("tick", o._updateRoot),
        function (e, t, i) {
          var s,
            a,
            n = e._gsTweenID;
          if (
            (l[n || (e._gsTweenID = n = "t" + U++)] ||
              (l[n] = { target: e, tweens: [] }),
            t && (((s = l[n].tweens)[(a = s.length)] = t), i))
          )
            for (; -1 < --a; ) s[a] === t && s.splice(a, 1);
          return l[n].tweens;
        }),
      J = function (e, t, i, s) {
        var a,
          n,
          r = e.vars.onOverwrite;
        return (
          r && (a = r(e, t, i, s)),
          (r = k.onOverwrite) && (n = r(e, t, i, s)),
          !1 !== a && !1 !== n
        );
      },
      ee = function (e, t, i, s, a) {
        var n, r, o;
        if (1 === s || 4 <= s) {
          for (o = a.length, h = 0; h < o; h++)
            if ((r = a[h]) !== t) r._gc || (r._kill(null, e, t) && (n = !0));
            else if (5 === s) break;
        } else {
          for (
            var l,
              d = t._startTime + v,
              c = [],
              u = 0,
              p = 0 === t._duration,
              h = a.length;
            -1 < --h;

          )
            (r = a[h]) === t ||
              r._gc ||
              r._paused ||
              (r._timeline !== t._timeline
                ? ((l = l || te(t, 0, p)), 0 === te(r, l, p) && (c[u++] = r))
                : r._startTime <= d &&
                  r._startTime + r.totalDuration() / r._timeScale > d &&
                  (((p || !r._initted) && d - r._startTime <= 2e-10) ||
                    (c[u++] = r)));
          for (h = u; -1 < --h; )
            (r = c[h]),
              2 === s && r._kill(i, e, t) && (n = !0),
              (2 !== s || (!r._firstPT && r._initted)) &&
                (2 === s || J(r, t)) &&
                r._enabled(!1, !1) &&
                (n = !0);
        }
        return n;
      },
      te = function (e, t, i) {
        for (
          var s = e._timeline, a = s._timeScale, n = e._startTime;
          s._timeline;

        ) {
          if (((n += s._startTime), (a *= s._timeScale), s._paused))
            return -100;
          s = s._timeline;
        }
        return t < (n /= a)
          ? n - t
          : (i && n === t) || (!e._initted && n - t < 2 * v)
          ? v
          : (n += e.totalDuration() / e._timeScale / a) > t + v
          ? 0
          : n - t - v;
      },
      $ =
        ((i._init = function () {
          var e,
            t,
            i,
            s,
            a,
            n,
            r = this.vars,
            o = this._overwrittenProps,
            l = this._duration,
            d = !!r.immediateRender,
            c = r.ease;
          if (r.startAt) {
            for (s in (this._startAt &&
              (this._startAt.render(-1, !0), this._startAt.kill()),
            (a = {}),
            r.startAt))
              a[s] = r.startAt[s];
            if (
              ((a.overwrite = !1),
              (a.immediateRender = !0),
              (a.lazy = d && !1 !== r.lazy),
              (a.startAt = a.delay = null),
              (this._startAt = k.to(this.target, 0, a)),
              d)
            )
              if (0 < this._time) this._startAt = null;
              else if (0 !== l) return;
          } else if (r.runBackwards && 0 !== l)
            if (this._startAt)
              this._startAt.render(-1, !0),
                this._startAt.kill(),
                (this._startAt = null);
            else {
              for (s in (0 !== this._time && (d = !1), (i = {}), r))
                (Q[s] && "autoCSS" !== s) || (i[s] = r[s]);
              if (
                ((i.overwrite = 0),
                (i.data = "isFromStart"),
                (i.lazy = d && !1 !== r.lazy),
                (i.immediateRender = d),
                (this._startAt = k.to(this.target, 0, i)),
                d)
              ) {
                if (0 === this._time) return;
              } else
                this._startAt._init(),
                  this._startAt._enabled(!1),
                  this.vars.immediateRender && (this._startAt = null);
            }
          if (
            ((this._ease = c =
              c
                ? c instanceof x
                  ? c
                  : "function" == typeof c
                  ? new x(c, r.easeParams)
                  : _[c] || k.defaultEase
                : k.defaultEase),
            r.easeParams instanceof Array &&
              c.config &&
              (this._ease = c.config.apply(c, r.easeParams)),
            (this._easeType = this._ease._type),
            (this._easePower = this._ease._power),
            (this._firstPT = null),
            this._targets)
          )
            for (n = this._targets.length, e = 0; e < n; e++)
              this._initProps(
                this._targets[e],
                (this._propLookup[e] = {}),
                this._siblings[e],
                o ? o[e] : null,
                e
              ) && (t = !0);
          else
            t = this._initProps(
              this.target,
              this._propLookup,
              this._siblings,
              o,
              0
            );
          if (
            (t && k._onPluginEvent("_onInitAllProps", this),
            !o ||
              this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1)),
            r.runBackwards)
          )
            for (i = this._firstPT; i; )
              (i.s += i.c), (i.c = -i.c), (i = i._next);
          (this._onUpdate = r.onUpdate), (this._initted = !0);
        }),
        (i._initProps = function (e, t, i, s, a) {
          var n, r, o, l, d, c;
          if (null == e) return !1;
          if (
            (D[e._gsTweenID] && A(),
            !this.vars.css &&
              e.style &&
              e !== m &&
              e.nodeType &&
              P.css &&
              !1 !== this.vars.autoCSS)
          ) {
            var u,
              p = this.vars,
              h = e,
              f = {};
            for (u in p)
              Q[u] ||
                (u in h &&
                  "transform" !== u &&
                  "x" !== u &&
                  "y" !== u &&
                  "width" !== u &&
                  "height" !== u &&
                  "className" !== u &&
                  "border" !== u) ||
                (P[u] && (P[u], !P[u]._autoCSS)) ||
                ((f[u] = p[u]), delete p[u]);
            p.css = f;
          }
          for (n in this.vars)
            if (((c = this.vars[n]), Q[n]))
              c &&
                (c instanceof Array || (c.push && y(c))) &&
                -1 !== c.join("").indexOf("{self}") &&
                (this.vars[n] = c = this._swapSelfInParams(c, this));
            else if (
              P[n] &&
              (l = new P[n]())._onInitTween(e, this.vars[n], this, a)
            ) {
              for (
                this._firstPT = d =
                  {
                    _next: this._firstPT,
                    t: l,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: n,
                    pg: 1,
                    pr: l._priority,
                    m: 0,
                  },
                  r = l._overwriteProps.length;
                -1 < --r;

              )
                t[l._overwriteProps[r]] = this._firstPT;
              (l._priority || l._onInitAllProps) && (o = !0),
                (l._onDisable || l._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0),
                d._next && (d._next._prev = d);
            } else
              t[n] = G.call(
                this,
                e,
                n,
                "get",
                c,
                n,
                0,
                null,
                this.vars.stringFilter,
                a
              );
          return s && this._kill(s, e)
            ? this._initProps(e, t, i, s, a)
            : 1 < this._overwrite &&
              this._firstPT &&
              1 < i.length &&
              ee(e, this, t, this._overwrite, i)
            ? (this._kill(t, e), this._initProps(e, t, i, s, a))
            : (this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (D[e._gsTweenID] = !0),
              o);
        }),
        (i.render = function (e, t, i) {
          var s,
            a,
            n,
            r,
            o,
            l,
            d,
            c = this._time,
            u = this._duration,
            p = this._rawPrevTime;
          if (
            (u - 1e-7 <= e
              ? ((this._totalTime = this._time = u),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                this._reversed ||
                  ((s = !0),
                  (a = "onComplete"),
                  (i = i || this._timeline.autoRemoveChildren)),
                0 !== u ||
                  (!this._initted && this.vars.lazy && !i) ||
                  (this._startTime === this._timeline._duration && (e = 0),
                  (p < 0 ||
                    (e <= 0 && -1e-7 <= e) ||
                    (p === v && "isPause" !== this.data)) &&
                    p !== e &&
                    ((i = !0), v < p) &&
                    (a = "onReverseComplete"),
                  (this._rawPrevTime = r = !t || e || p === e ? e : v)))
              : e < 1e-7
              ? ((this._totalTime = this._time = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== c || (0 === u && 0 < p)) &&
                  ((a = "onReverseComplete"), (s = this._reversed)),
                e < 0 &&
                  ((this._active = !1),
                  0 !== u ||
                    (!this._initted && this.vars.lazy && !i) ||
                    (0 <= p && (p !== v || "isPause" !== this.data) && (i = !0),
                    (this._rawPrevTime = r = !t || e || p === e ? e : v))),
                this._initted || (i = !0))
              : ((this._totalTime = this._time = e),
                this._easeType
                  ? ((o = e / u),
                    (1 === (l = this._easeType) || (3 === l && 0.5 <= o)) &&
                      (o = 1 - o),
                    3 === l && (o *= 2),
                    1 === (d = this._easePower)
                      ? (o *= o)
                      : 2 === d
                      ? (o *= o * o)
                      : 3 === d
                      ? (o *= o * o * o)
                      : 4 === d && (o *= o * o * o * o),
                    (this.ratio =
                      1 === l
                        ? 1 - o
                        : 2 === l
                        ? o
                        : e / u < 0.5
                        ? o / 2
                        : 1 - o / 2))
                  : (this.ratio = this._ease.getRatio(e / u))),
            this._time !== c || i)
          ) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = c),
                  (this._rawPrevTime = p),
                  O.push(this),
                  void (this._lazy = [e, t])
                );
              this._time && !s
                ? (this.ratio = this._ease.getRatio(this._time / u))
                : s &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== c &&
                    0 <= e &&
                    (this._active = !0)),
                0 === c &&
                  (this._startAt &&
                    (0 <= e
                      ? this._startAt.render(e, t, i)
                      : (a = a || "_dummyGS")),
                  !this.vars.onStart ||
                    (0 === this._time && 0 !== u) ||
                    t ||
                    this._callback("onStart")),
                n = this._firstPT;
              n;

            )
              n.f
                ? n.t[n.p](n.c * this.ratio + n.s)
                : (n.t[n.p] = n.c * this.ratio + n.s),
                (n = n._next);
            this._onUpdate &&
              (e < 0 &&
                this._startAt &&
                -1e-4 !== e &&
                this._startAt.render(e, t, i),
              t ||
                ((this._time !== c || s || i) && this._callback("onUpdate"))),
              !a ||
                (this._gc && !i) ||
                (e < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  -1e-4 !== e &&
                  this._startAt.render(e, t, i),
                s &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !t && this.vars[a] && this._callback(a),
                0 === u &&
                  this._rawPrevTime === v &&
                  r !== v &&
                  (this._rawPrevTime = 0));
          }
        }),
        (i._kill = function (e, t, i) {
          if (
            null == (e = "all" === e ? null : e) &&
            (null == t || t === this.target)
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          t =
            "string" != typeof t
              ? t || this._targets || this.target
              : k.selector(t) || t;
          var s,
            a,
            n,
            r,
            o,
            l,
            d,
            c,
            u,
            p =
              i &&
              this._time &&
              i._startTime === this._startTime &&
              this._timeline === i._timeline;
          if ((y(t) || L(t)) && "number" != typeof t[0])
            for (s = t.length; -1 < --s; ) this._kill(e, t[s], i) && (l = !0);
          else {
            if (this._targets) {
              for (s = this._targets.length; -1 < --s; )
                if (t === this._targets[s]) {
                  (o = this._propLookup[s] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (a = this._overwrittenProps[s] =
                      e ? this._overwrittenProps[s] || {} : "all");
                  break;
                }
            } else {
              if (t !== this.target) return !1;
              (o = this._propLookup),
                (a = this._overwrittenProps =
                  e ? this._overwrittenProps || {} : "all");
            }
            if (o) {
              if (
                ((d = e || o),
                (c =
                  e !== a &&
                  "all" !== a &&
                  e !== o &&
                  ("object" != typeof e || !e._tempKill)),
                i && (k.onOverwrite || this.vars.onOverwrite))
              ) {
                for (n in d) o[n] && (u = u || []).push(n);
                if ((u || !e) && !J(this, i, t, u)) return !1;
              }
              for (n in d)
                (r = o[n]) &&
                  (p && (r.f ? r.t[r.p](r.s) : (r.t[r.p] = r.s), (l = !0)),
                  r.pg && r.t._kill(d) && (l = !0),
                  (r.pg && 0 !== r.t._overwriteProps.length) ||
                    (r._prev
                      ? (r._prev._next = r._next)
                      : r === this._firstPT && (this._firstPT = r._next),
                    r._next && (r._next._prev = r._prev),
                    (r._next = r._prev = null)),
                  delete o[n]),
                  c && (a[n] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (i.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              k._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            o.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -v), this.render(Math.min(0, -this._delay))),
            this
          );
        }),
        (i._enabled = function (e, t) {
          if ((g || M.wake(), e && this._gc)) {
            var i,
              s = this._targets;
            if (s)
              for (i = s.length; -1 < --i; )
                this._siblings[i] = I(s[i], this, !0);
            else this._siblings = I(this.target, this, !0);
          }
          return (
            o.prototype._enabled.call(this, e, t),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
              k._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
          );
        }),
        (k.to = function (e, t, i) {
          return new k(e, t, i);
        }),
        (k.from = function (e, t, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new k(e, t, i)
          );
        }),
        (k.fromTo = function (e, t, i, s) {
          return (
            (s.startAt = i),
            (s.immediateRender =
              0 != s.immediateRender && 0 != i.immediateRender),
            new k(e, t, s)
          );
        }),
        (k.delayedCall = function (e, t, i, s, a) {
          return new k(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: i,
            callbackScope: s,
            onReverseComplete: t,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: a,
            overwrite: 0,
          });
        }),
        (k.set = function (e, t) {
          return new k(e, 0, t);
        }),
        (k.getTweensOf = function (e, t) {
          if (null == e) return [];
          var i, s, a, n;
          if (
            ((e = ("string" == typeof e && k.selector(e)) || e),
            (y(e) || L(e)) && "number" != typeof e[0])
          ) {
            for (i = e.length, s = []; -1 < --i; )
              s = s.concat(k.getTweensOf(e[i], t));
            for (i = s.length; -1 < --i; )
              for (n = s[i], a = i; -1 < --a; ) n === s[a] && s.splice(i, 1);
          } else
            for (i = (s = I(e).concat()).length; -1 < --i; )
              (s[i]._gc || (t && !s[i].isActive())) && s.splice(i, 1);
          return s;
        }),
        (k.killTweensOf = k.killDelayedCallsTo =
          function (e, t, i) {
            "object" == typeof t && ((i = t), (t = !1));
            for (var s = k.getTweensOf(e, t), a = s.length; -1 < --a; )
              s[a]._kill(i, e);
          }),
        w(
          "plugins.TweenPlugin",
          function (e, t) {
            (this._overwriteProps = (e || "").split(",")),
              (this._propName = this._overwriteProps[0]),
              (this._priority = t || 0),
              (this._super = $.prototype);
          },
          !0
        ));
    if (
      ((i = $.prototype),
      ($.version = "1.19.0"),
      ($.API = 2),
      (i._firstPT = null),
      (i._addTween = G),
      (i.setRatio = Y),
      (i._kill = function (e) {
        var t,
          i = this._overwriteProps,
          s = this._firstPT;
        if (null != e[this._propName]) this._overwriteProps = [];
        else for (t = i.length; -1 < --t; ) null != e[i[t]] && i.splice(t, 1);
        for (; s; )
          null != e[s.n] &&
            (s._next && (s._next._prev = s._prev),
            s._prev
              ? ((s._prev._next = s._next), (s._prev = null))
              : this._firstPT === s && (this._firstPT = s._next)),
            (s = s._next);
        return !1;
      }),
      (i._mod = i._roundProps =
        function (e) {
          for (var t, i = this._firstPT; i; )
            (t =
              e[this._propName] ||
              (null != i.n && e[i.n.split(this._propName + "_").join("")])) &&
              "function" == typeof t &&
              (2 === i.f ? (i.t._applyPT.m = t) : (i.m = t)),
              (i = i._next);
        }),
      (k._onPluginEvent = function (e, t) {
        var i,
          s,
          a,
          n,
          r,
          o = t._firstPT;
        if ("_onInitAllProps" === e) {
          for (; o; ) {
            for (r = o._next, s = a; s && s.pr > o.pr; ) s = s._next;
            (o._prev = s ? s._prev : n) ? (o._prev._next = o) : (a = o),
              (o._next = s) ? (s._prev = o) : (n = o),
              (o = r);
          }
          o = t._firstPT = a;
        }
        for (; o; )
          o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0),
            (o = o._next);
        return i;
      }),
      ($.activate = function (e) {
        for (var t = e.length; -1 < --t; )
          e[t].API === $.API && (P[new e[t]()._propName] = e[t]);
        return !0;
      }),
      (s.plugin = function (e) {
        if (!(e && e.propName && e.init && e.API))
          throw "illegal plugin definition.";
        var t,
          i = e.propName,
          s = e.priority || 0,
          a = e.overwriteProps,
          n = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps",
          },
          r = w(
            "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function () {
              $.call(this, i, s), (this._overwriteProps = a || []);
            },
            !0 === e.global
          ),
          o = (r.prototype = new $(i));
        for (t in (((o.constructor = r).API = e.API), n))
          "function" == typeof e[t] && (o[n[t]] = e[t]);
        return (r.version = e.version), $.activate([r]), r;
      }),
      (a = m._gsQueue))
    ) {
      for (n = 0; n < a.length; n++) a[n]();
      for (i in b)
        b[i].func || m.console.log("GSAP encountered missing dependency: " + i);
    }
    g = !1;
  }
})(
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window,
  "TweenLite"
);
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  _gsScope._gsDefine(
    "plugins.CSSPlugin",
    ["plugins.TweenPlugin", "TweenLite"],
    function (r, O) {
      function D() {
        r.call(this, "css"),
          (this._overwriteProps.length = 0),
          (this.setRatio = D.prototype.setRatio);
      }
      function o(e, t) {
        return t.toUpperCase();
      }
      function l(e) {
        return $.createElementNS
          ? $.createElementNS("http://www.w3.org/1999/xhtml", e)
          : $.createElement(e);
      }
      function d(e) {
        return ie.test(
          "string" == typeof e ? e : (e.currentStyle || e.style).filter || ""
        )
          ? parseFloat(RegExp.$1) / 100
          : 1;
      }
      function g(e) {
        window.console && console.log(e);
      }
      function _(e, t) {
        var i,
          s,
          a = (t = t || z).style;
        if (void 0 !== a[e]) return e;
        for (
          e = e.charAt(0).toUpperCase() + e.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            s = 5;
          -1 < --s && void 0 === a[i[s] + e];

        );
        return 0 <= s
          ? ((me = "-" + (ge = 3 === s ? "ms" : i[s]).toLowerCase() + "-"),
            ge + e)
          : null;
      }
      function p(e, t) {
        var i,
          s,
          a = {};
        if ((t = t || m(e, null)))
          if ((i = t.length))
            for (; -1 < --i; )
              (-1 !== (s = t[i]).indexOf("-transform") && Ne !== s) ||
                (a[s.replace(oe, o)] = t.getPropertyValue(s));
          else
            for (i in t)
              (-1 !== i.indexOf("Transform") && Y !== i) || (a[i] = t[i]);
        else if ((t = e.currentStyle || e.style))
          for (i in t)
            "string" == typeof i &&
              void 0 === a[i] &&
              (a[i.replace(oe, o)] = t[i]);
        return (
          V || (a.opacity = d(e)),
          (e = Ge(e, t, !1)),
          (a.rotation = e.rotation),
          (a.skewX = e.skewX),
          (a.scaleX = e.scaleX),
          (a.scaleY = e.scaleY),
          (a.x = e.x),
          (a.y = e.y),
          j &&
            ((a.z = e.z),
            (a.rotationX = e.rotationX),
            (a.rotationY = e.rotationY),
            (a.scaleZ = e.scaleZ)),
          a.filters && delete a.filters,
          a
        );
      }
      function v(e, t, i, s, a) {
        var n,
          r,
          o,
          l = {},
          d = e.style;
        for (r in i)
          "cssText" === r ||
            ("length" !== r &&
              isNaN(r) &&
              (t[r] !== (n = i[r]) || (a && a[r])) &&
              -1 === r.indexOf("Origin") &&
              ("number" == typeof n || "string" == typeof n) &&
              ((l[r] =
                "auto" !== n || ("left" !== r && "top" !== r)
                  ? ("" !== n && "auto" !== n && "none" !== n) ||
                    "string" != typeof t[r] ||
                    "" === t[r].replace(ee, "")
                    ? n
                    : 0
                  : ve(e, r)),
              void 0 !== d[r]) &&
              (o = new Te(d, r, d[r], o)));
        if (s) for (r in s) "className" !== r && (l[r] = s[r]);
        return { difs: l, firstMPT: o };
      }
      function C(e, t) {
        return "string" == typeof (e = "function" == typeof e ? e(k, M) : e) &&
          "=" === e.charAt(1)
          ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))
          : parseFloat(e) - parseFloat(t) || 0;
      }
      function S(e, t) {
        return null == (e = "function" == typeof e ? e(k, M) : e)
          ? t
          : "string" == typeof e && "=" === e.charAt(1)
          ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t
          : parseFloat(e) || 0;
      }
      function T(e, t, i, s) {
        var a, n, r;
        return (n =
          (n =
            null == (e = "function" == typeof e ? e(k, M) : e)
              ? t
              : "number" == typeof e
              ? e
              : ((a = 360),
                (n = e.split("_")),
                (r =
                  ((r = "=" === e.charAt(1))
                    ? parseInt(e.charAt(0) + "1", 10) *
                      parseFloat(n[0].substr(2))
                    : parseFloat(n[0])) *
                    (-1 === e.indexOf("rad") ? 1 : I) -
                  (r ? 0 : t)),
                n.length &&
                  (s && (s[i] = t + r),
                  -1 !== e.indexOf("short") &&
                    (r %= a) !== r % 180 &&
                    (r = r < 0 ? r + a : r - a),
                  -1 !== e.indexOf("_cw") && r < 0
                    ? (r = ((r + 3599999999640) % a) - ((r / a) | 0) * a)
                    : -1 !== e.indexOf("ccw") &&
                      0 < r &&
                      (r = ((r - 3599999999640) % a) - ((r / a) | 0) * a)),
                t + r)) < 1e-6 && -1e-6 < n
            ? 0
            : n);
      }
      function c(e, t, i) {
        return (
          (255 *
            (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1
              ? t + (i - t) * e * 6
              : e < 0.5
              ? i
              : 3 * e < 2
              ? t + (i - t) * (2 / 3 - e) * 6
              : t) +
            0.5) |
          0
        );
      }
      function u(e, t) {
        for (
          var i, s, a = e.match(R) || [], n = 0, r = a.length ? "" : e, o = 0;
          o < a.length;
          o++
        )
          (i = a[o]),
            (n += (s = e.substr(n, e.indexOf(i, n) - n)).length + i.length),
            3 === (i = xe(i, t)).length && i.push(1),
            (r +=
              s +
              (t
                ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3]
                : "rgba(" + i.join(",")) +
              ")");
        return r + e.substr(n);
      }
      var h,
        G,
        E,
        y,
        W,
        b,
        w,
        U,
        Q,
        x,
        M,
        k,
        Z = _gsScope._gsDefine.globals,
        f = {},
        e = (D.prototype = new r("css")),
        L =
          (((e.constructor = D).version = "1.19.0"),
          (D.API = 2),
          (D.defaultTransformPerspective = 0),
          (D.defaultSkewType = "compensated"),
          (D.defaultSmoothOrigin = !0),
          (D.suffixMap = {
            top: (e = "px"),
            right: e,
            bottom: e,
            left: e,
            width: e,
            height: e,
            fontSize: e,
            padding: e,
            margin: e,
            perspective: e,
            lineHeight: "",
          }),
          /(?:\-|\.|\b)(\d|\.|e\-)+/g),
        K = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        J = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        ee = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        te = /(?:\d|\-|\+|=|#|\.)*/g,
        ie = /opacity *= *([^)]*)/i,
        se = /opacity:([^;]*)/i,
        ae = /alpha\(opacity *=.+?\)/i,
        ne = /^(rgb|hsl)/,
        re = /([A-Z])/g,
        oe = /-([a-z])/gi,
        le = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        de = /(?:Left|Right|Width)/i,
        ce = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        ue = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        P = /,(?=[^\)]*(?:\(|$))/gi,
        pe = /[\s,\(]/i,
        A = Math.PI / 180,
        I = 180 / Math.PI,
        he = {},
        $ = document,
        z = l("div"),
        fe = l("img"),
        t = (D._internals = { _specialProps: f }),
        i = navigator.userAgent,
        V =
          ((a = i.indexOf("Android")),
          (s = l("a")),
          (w =
            -1 !== i.indexOf("Safari") &&
            -1 === i.indexOf("Chrome") &&
            (-1 === a || 3 < Number(i.substr(a + 8, 1)))),
          (Q = w && Number(i.substr(i.indexOf("Version/") + 8, 1)) < 6),
          (U = -1 !== i.indexOf("Firefox")),
          (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(i) ||
            /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(i)) &&
            (x = parseFloat(RegExp.$1)),
          !!s &&
            ((s.style.cssText = "top:1px;opacity:.55;"),
            /^0.55/.test(s.style.opacity))),
        me = "",
        ge = "",
        m = $.defaultView ? $.defaultView.getComputedStyle : function () {},
        B = (D.getStyle = function (e, t, i, s, a) {
          var n;
          return V || "opacity" !== t
            ? (!s && e.style[t]
                ? (n = e.style[t])
                : (i = i || m(e))
                ? (n =
                    i[t] ||
                    i.getPropertyValue(t) ||
                    i.getPropertyValue(t.replace(re, "-$1").toLowerCase()))
                : e.currentStyle && (n = e.currentStyle[t]),
              null == a ||
              (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                ? n
                : a)
            : d(e);
        }),
        N = (t.convertToPixels = function (e, t, i, s, a) {
          if ("px" === s || !s) return i;
          if ("auto" === s || !i) return 0;
          var n,
            r,
            o,
            l = de.test(t),
            d = e,
            c = z.style,
            u = i < 0,
            p = 1 === i;
          if (
            (u && (i = -i),
            p && (i *= 100),
            "%" === s && -1 !== t.indexOf("border"))
          )
            n = (i / 100) * (l ? e.clientWidth : e.clientHeight);
          else {
            if (
              ((c.cssText =
                "border:0 solid red;position:" +
                B(e, "position") +
                ";line-height:0;"),
              "%" !== s && d.appendChild && "v" !== s.charAt(0) && "rem" !== s)
            )
              c[l ? "borderLeftWidth" : "borderTopWidth"] = i + s;
            else {
              if (
                ((r = (d = e.parentNode || $.body)._gsCache),
                (o = O.ticker.frame),
                r && l && r.time === o)
              )
                return (r.width * i) / 100;
              c[l ? "width" : "height"] = i + s;
            }
            d.appendChild(z),
              (n = parseFloat(z[l ? "offsetWidth" : "offsetHeight"])),
              d.removeChild(z),
              l &&
                "%" === s &&
                !1 !== D.cacheWidths &&
                (((r = d._gsCache = d._gsCache || {}).time = o),
                (r.width = (n / i) * 100)),
              0 !== n || a || (n = N(e, t, i, s, !0));
          }
          return p && (n /= 100), u ? -n : n;
        }),
        ve = (t.calculateOffset = function (e, t, i) {
          var s;
          return "absolute" !== B(e, "position", i)
            ? 0
            : ((i = B(e, "margin" + (s = "left" === t ? "Left" : "Top"), i)),
              e["offset" + s] -
                (N(e, t, parseFloat(i), i.replace(te, "")) || 0));
        }),
        ye = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
        be = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        q = function (e, t) {
          if ("contain" === e || "auto" === e || "auto auto" === e)
            return e + " ";
          var i,
            s = (e = null != e && "" !== e ? e : "0 0").split(" "),
            a =
              -1 !== e.indexOf("left")
                ? "0%"
                : -1 !== e.indexOf("right")
                ? "100%"
                : s[0],
            n =
              -1 !== e.indexOf("top")
                ? "0%"
                : -1 !== e.indexOf("bottom")
                ? "100%"
                : s[1];
          if (3 < s.length && !t) {
            for (
              s = e.split(", ").join(",").split(","), e = [], i = 0;
              i < s.length;
              i++
            )
              e.push(q(s[i]));
            return e.join(",");
          }
          return (
            null == n
              ? (n = "center" === a ? "50%" : "0")
              : "center" === n && (n = "50%"),
            (e =
              (a =
                "center" === a ||
                (isNaN(parseFloat(a)) && -1 === (a + "").indexOf("="))
                  ? "50%"
                  : a) +
              " " +
              n +
              (2 < s.length ? " " + s[2] : "")),
            t &&
              ((t.oxp = -1 !== a.indexOf("%")),
              (t.oyp = -1 !== n.indexOf("%")),
              (t.oxr = "=" === a.charAt(1)),
              (t.oyr = "=" === n.charAt(1)),
              (t.ox = parseFloat(a.replace(ee, ""))),
              (t.oy = parseFloat(n.replace(ee, ""))),
              (t.v = e)),
            t || e
          );
        },
        we = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          fuchsia: [255, 0, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        xe = (D.parseColor = function (e, t) {
          var i, s, a, n, r, o, l, d;
          if (e)
            if ("number" == typeof e) i = [e >> 16, (e >> 8) & 255, 255 & e];
            else {
              if (
                ("," === e.charAt(e.length - 1) &&
                  (e = e.substr(0, e.length - 1)),
                we[e])
              )
                i = we[e];
              else if ("#" === e.charAt(0))
                4 === e.length &&
                  (e =
                    "#" +
                    (s = e.charAt(1)) +
                    s +
                    (a = e.charAt(2)) +
                    a +
                    (n = e.charAt(3)) +
                    n),
                  (i = [
                    (e = parseInt(e.substr(1), 16)) >> 16,
                    (e >> 8) & 255,
                    255 & e,
                  ]);
              else if ("hsl" === e.substr(0, 3))
                if (((i = d = e.match(L)), t)) {
                  if (-1 !== e.indexOf("=")) return e.match(K);
                } else
                  (r = (Number(i[0]) % 360) / 360),
                    (o = Number(i[1]) / 100),
                    (s =
                      2 * (l = Number(i[2]) / 100) -
                      (a = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                    3 < i.length && (i[3] = Number(e[3])),
                    (i[0] = c(r + 1 / 3, s, a)),
                    (i[1] = c(r, s, a)),
                    (i[2] = c(r - 1 / 3, s, a));
              else i = e.match(L) || we.transparent;
              (i[0] = Number(i[0])),
                (i[1] = Number(i[1])),
                (i[2] = Number(i[2])),
                3 < i.length && (i[3] = Number(i[3]));
            }
          else i = we.black;
          return (
            t &&
              !d &&
              ((s = i[0] / 255),
              (a = i[1] / 255),
              (n = i[2] / 255),
              (l = ((e = Math.max(s, a, n)) + (t = Math.min(s, a, n))) / 2),
              e === t
                ? (r = o = 0)
                : ((d = e - t),
                  (o = 0.5 < l ? d / (2 - e - t) : d / (e + t)),
                  (r =
                    e === s
                      ? (a - n) / d + (a < n ? 6 : 0)
                      : e === a
                      ? (n - s) / d + 2
                      : (s - a) / d + 4),
                  (r *= 60)),
              (i[0] = (r + 0.5) | 0),
              (i[1] = (100 * o + 0.5) | 0),
              (i[2] = (100 * l + 0.5) | 0)),
            i
          );
        }),
        R =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (e in we) R += "|" + e + "\\b";
      (R = new RegExp(R + ")", "gi")),
        (D.colorStringFilter = function (e) {
          var t = e[0] + e[1];
          R.test(t) &&
            ((t = -1 !== t.indexOf("hsl(") || -1 !== t.indexOf("hsla(")),
            (e[0] = u(e[0], t)),
            (e[1] = u(e[1], t))),
            (R.lastIndex = 0);
        }),
        O.defaultStringFilter || (O.defaultStringFilter = D.colorStringFilter);
      function _e(e, t, n, r) {
        var o, l, d, c, u, p, h, f;
        return null == e
          ? function (e) {
              return e;
            }
          : ((o = t ? (e.match(R) || [""])[0] : ""),
            (l = e.split(o).join("").match(J) || []),
            (d = e.substr(0, e.indexOf(l[0]))),
            (c = ")" === e.charAt(e.length - 1) ? ")" : ""),
            (u = -1 !== e.indexOf(" ") ? " " : ","),
            (p = l.length),
            (h = 0 < p ? l[0].replace(L, "") : ""),
            p
              ? (f = t
                  ? function (e) {
                      var t, i, s, a;
                      if ("number" == typeof e) e += h;
                      else if (r && P.test(e)) {
                        for (
                          a = e.replace(P, "|").split("|"), s = 0;
                          s < a.length;
                          s++
                        )
                          a[s] = f(a[s]);
                        return a.join(",");
                      }
                      if (
                        ((t = (e.match(R) || [o])[0]),
                        (s = (i = e.split(t).join("").match(J) || []).length),
                        p > s--)
                      )
                        for (; ++s < p; )
                          i[s] = n ? i[((s - 1) / 2) | 0] : l[s];
                      return (
                        d +
                        i.join(u) +
                        u +
                        t +
                        c +
                        (-1 !== e.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (e) {
                      var t, i, s;
                      if ("number" == typeof e) e += h;
                      else if (r && P.test(e)) {
                        for (
                          i = e.replace(P, "|").split("|"), s = 0;
                          s < i.length;
                          s++
                        )
                          i[s] = f(i[s]);
                        return i.join(",");
                      }
                      if (((s = (t = e.match(J) || []).length), p > s--))
                        for (; ++s < p; )
                          t[s] = n ? t[((s - 1) / 2) | 0] : l[s];
                      return d + t.join(u) + c;
                    })
              : function (e) {
                  return e;
                });
      }
      function Se(d) {
        return (
          (d = d.split(",")),
          function (e, t, i, s, a, n, r) {
            var o,
              l = (t + "").split(" ");
            for (r = {}, o = 0; o < 4; o++)
              r[d[o]] = l[o] = l[o] || l[((o - 1) / 2) >> 0];
            return s.parse(e, r, a, n);
          }
        );
      }
      function Te(e, t, i, s, a) {
        (this.t = e),
          (this.p = t),
          (this.v = i),
          (this.r = a),
          s && ((s._prev = this)._next = s);
      }
      (t._setPluginRatio = function (e) {
        this.plugin.setRatio(e);
        for (var t, i, s, a, n, r = this.data, o = r.proxy, l = r.firstMPT; l; )
          (t = o[l.v]),
            l.r ? (t = Math.round(t)) : t < 1e-6 && -1e-6 < t && (t = 0),
            (l.t[l.p] = t),
            (l = l._next);
        if (
          (r.autoRotate &&
            (r.autoRotate.rotation = r.mod
              ? r.mod(o.rotation, this.t)
              : o.rotation),
          1 === e || 0 === e)
        )
          for (l = r.firstMPT, n = 1 === e ? "e" : "b"; l; ) {
            if ((i = l.t).type) {
              if (1 === i.type) {
                for (a = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++)
                  a += i["xn" + s] + i["xs" + (s + 1)];
                i[n] = a;
              }
            } else i[n] = i.s + i.xs0;
            l = l._next;
          }
      }),
        (t._parseToProxy = function (e, t, i, s, a, n) {
          var r,
            o,
            l,
            d,
            c = s,
            u = {},
            p = {},
            h = i._transform,
            f = he;
          for (
            i._transform = null,
              he = t,
              s = e = i.parse(e, t, s, a),
              he = f,
              n &&
                ((i._transform = h), c) &&
                ((c._prev = null), c._prev) &&
                (c._prev._next = null);
            s && s !== c;

          ) {
            if (
              s.type <= 1 &&
              ((p[(o = s.p)] = s.s + s.c),
              (u[o] = s.s),
              n || ((d = new Te(s, "s", o, d, s.r)), (s.c = 0)),
              1 === s.type)
            )
              for (r = s.l; 0 < --r; )
                (p[(o = s.p + "_" + (l = "xn" + r))] = s.data[l]),
                  (u[o] = s[l]),
                  n || (d = new Te(s, l, o, d, s.rxp[l]));
            s = s._next;
          }
          return { proxy: u, end: p, firstMPT: d, pt: e };
        });
      function Ee(e, t, i, s, a, n) {
        return (
          ((e = new F(e, t, i, s - i, a, -1, n)).b = i), (e.e = e.xs0 = s), e
        );
      }
      var F = (t.CSSPropTween = function (e, t, i, s, a, n, r, o, l, d, c) {
          (this.t = e),
            (this.p = t),
            (this.s = i),
            (this.c = s),
            (this.n = r || t),
            e instanceof F || y.push(this.n),
            (this.r = o),
            (this.type = n || 0),
            l && ((this.pr = l), (h = !0)),
            (this.b = void 0 === d ? i : d),
            (this.e = void 0 === c ? i + s : c),
            a && ((this._next = a)._prev = this);
        }),
        Ce = (D.parseComplex = function (e, t, i, s, a, n, r, o, l, d) {
          (i = i || n || ""),
            "function" == typeof s && (s = s(k, M)),
            (r = new F(e, t, 0, 0, r, d ? 2 : 1, null, !1, o, i, s)),
            (s += ""),
            a &&
              R.test(s + i) &&
              (D.colorStringFilter((s = [i, s])), (i = s[0]), (s = s[1]));
          var c,
            u,
            p,
            h,
            f,
            m,
            g,
            v,
            y,
            b,
            w,
            x,
            _ = i.split(", ").join(",").split(" "),
            S = s.split(", ").join(",").split(" "),
            T = _.length,
            E = !1 !== W;
          for (
            (-1 === s.indexOf(",") && -1 === i.indexOf(",")) ||
              ((_ = _.join(" ").replace(P, ", ").split(" ")),
              (S = S.join(" ").replace(P, ", ").split(" ")),
              (T = _.length)),
              T !== S.length && (T = (_ = (n || "").split(" ")).length),
              r.plugin = l,
              r.setRatio = d,
              c = R.lastIndex = 0;
            c < T;
            c++
          )
            if (((h = _[c]), (f = S[c]), (x = parseFloat(h)) || 0 === x))
              r.appendXtra(
                "",
                x,
                C(f, x),
                f.replace(K, ""),
                E && -1 !== f.indexOf("px"),
                !0
              );
            else if (a && R.test(h))
              (w = ")" + ((w = f.indexOf(")") + 1) ? f.substr(w) : "")),
                (x = -1 !== f.indexOf("hsl") && V),
                (h = xe(h, x)),
                (f = xe(f, x)),
                (v = 6 < h.length + f.length) && !V && 0 === f[3]
                  ? ((r["xs" + r.l] += r.l ? " transparent" : "transparent"),
                    (r.e = r.e.split(S[c]).join("transparent")))
                  : (V || (v = !1),
                    x
                      ? r
                          .appendXtra(
                            v ? "hsla(" : "hsl(",
                            h[0],
                            C(f[0], h[0]),
                            ",",
                            !1,
                            !0
                          )
                          .appendXtra("", h[1], C(f[1], h[1]), "%,", !1)
                          .appendXtra(
                            "",
                            h[2],
                            C(f[2], h[2]),
                            v ? "%," : "%" + w,
                            !1
                          )
                      : r
                          .appendXtra(
                            v ? "rgba(" : "rgb(",
                            h[0],
                            f[0] - h[0],
                            ",",
                            !0,
                            !0
                          )
                          .appendXtra("", h[1], f[1] - h[1], ",", !0)
                          .appendXtra("", h[2], f[2] - h[2], v ? "," : w, !0),
                    v &&
                      ((h = h.length < 4 ? 1 : h[3]),
                      r.appendXtra(
                        "",
                        h,
                        (f.length < 4 ? 1 : f[3]) - h,
                        w,
                        !1
                      ))),
                (R.lastIndex = 0);
            else if ((m = h.match(L))) {
              if (!(g = f.match(K)) || g.length !== m.length) return r;
              for (u = p = 0; u < m.length; u++)
                (b = m[u]),
                  (y = h.indexOf(b, p)),
                  r.appendXtra(
                    h.substr(p, y - p),
                    Number(b),
                    C(g[u], b),
                    "",
                    E && "px" === h.substr(y + b.length, 2),
                    0 === u
                  ),
                  (p = y + b.length);
              r["xs" + r.l] += h.substr(p);
            } else r["xs" + r.l] += r.l || r["xs" + r.l] ? " " + f : f;
          if (-1 !== s.indexOf("=") && r.data) {
            for (w = r.xs0 + r.data.s, c = 1; c < r.l; c++)
              w += r["xs" + c] + r.data["xn" + c];
            r.e = w + r["xs" + c];
          }
          return r.l || ((r.type = -1), (r.xs0 = r.e)), r.xfirst || r;
        }),
        H = 9;
      for ((e = F.prototype).l = e.pr = 0; 0 < --H; )
        (e["xn" + H] = 0), (e["xs" + H] = "");
      (e.xs0 = ""),
        (e._next =
          e._prev =
          e.xfirst =
          e.data =
          e.plugin =
          e.setRatio =
          e.rxp =
            null),
        (e.appendXtra = function (e, t, i, s, a, n) {
          var r = this,
            o = r.l;
          return (
            (r["xs" + o] += n && (o || r["xs" + o]) ? " " + e : e || ""),
            i || 0 === o || r.plugin
              ? (r.l++,
                (r.type = r.setRatio ? 2 : 1),
                (r["xs" + r.l] = s || ""),
                0 < o
                  ? ((r.data["xn" + o] = t + i),
                    (r.rxp["xn" + o] = a),
                    (r["xn" + o] = t),
                    r.plugin ||
                      ((r.xfirst = new F(
                        r,
                        "xn" + o,
                        t,
                        i,
                        r.xfirst || r,
                        0,
                        r.n,
                        a,
                        r.pr
                      )),
                      (r.xfirst.xs0 = 0)))
                  : ((r.data = { s: t + i }),
                    (r.rxp = {}),
                    (r.s = t),
                    (r.c = i),
                    (r.r = a)))
              : (r["xs" + o] += t + (s || "")),
            r
          );
        });
      function Me(e, t) {
        (this.p = ((t = t || {}).prefix && _(e)) || e),
          ((f[e] = f[this.p] = this).format =
            t.formatter || _e(t.defaultValue, t.color, t.collapsible, t.multi)),
          t.parser && (this.parse = t.parser),
          (this.clrs = t.color),
          (this.multi = t.multi),
          (this.keyword = t.keyword),
          (this.dflt = t.defaultValue),
          (this.pr = t.priority || 0);
      }
      function ke(e, t, i) {
        var s,
          a = $.createElementNS("http://www.w3.org/2000/svg", e),
          n = /([a-z])([A-Z])/g;
        for (s in i)
          a.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
        return t.appendChild(a), a;
      }
      function Le(e, t, i, s, a, n) {
        var r,
          o,
          l,
          d,
          c,
          u,
          p,
          h,
          f,
          m,
          g = e._gsTransform,
          v = De(e, !0);
        g && ((f = g.xOrigin), (m = g.yOrigin)),
          (!s || (r = s.split(" ")).length < 2) &&
            ((d = e.getBBox()),
            (r = [
              (-1 !== (t = q(t).split(" "))[0].indexOf("%")
                ? (parseFloat(t[0]) / 100) * d.width
                : parseFloat(t[0])) + d.x,
              (-1 !== t[1].indexOf("%")
                ? (parseFloat(t[1]) / 100) * d.height
                : parseFloat(t[1])) + d.y,
            ])),
          (i.xOrigin = t = parseFloat(r[0])),
          (i.yOrigin = l = parseFloat(r[1])),
          s &&
            v !== je &&
            ((s = v[0]),
            (d = v[1]),
            (c = v[2]),
            (u = v[3]),
            (p = v[4]),
            (o =
              t * (-d / (h = s * u - d * c)) +
              l * (s / h) -
              (s * (s = v[5]) - d * p) / h),
            (t =
              i.xOrigin =
              r[0] =
              c =
                t * (u / h) + l * (-c / h) + (c * s - u * p) / h),
            (l = i.yOrigin = r[1] = o)),
          g &&
            (n && ((i.xOffset = g.xOffset), (i.yOffset = g.yOffset), (g = i)),
            a || (!1 !== a && !1 !== D.defaultSmoothOrigin)
              ? ((g.xOffset += (c = t - f) * v[0] + (o = l - m) * v[2] - c),
                (g.yOffset += c * v[1] + o * v[3] - o))
              : (g.xOffset = g.yOffset = 0)),
          n || e.setAttribute("data-svg-origin", r.join(" "));
      }
      function Oe(e) {
        try {
          return e.getBBox();
        } catch (e) {}
      }
      function De(e, t) {
        var i,
          s,
          a,
          n,
          r,
          o,
          l = e._gsTransform || new Re(),
          d = e.style;
        if (
          (Y
            ? (s = B(e, Ne, null, !0))
            : e.currentStyle &&
              (s =
                (s = e.currentStyle.filter.match(ce)) && 4 === s.length
                  ? [
                      s[0].substr(4),
                      Number(s[2].substr(4)),
                      Number(s[1].substr(4)),
                      s[3].substr(4),
                      l.x || 0,
                      l.y || 0,
                    ].join(",")
                  : ""),
          (i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s) &&
            Y &&
            ((o = "none" === m(e).display) || !e.parentNode) &&
            (o && ((n = d.display), (d.display = "block")),
            e.parentNode || ((r = 1), He.appendChild(e)),
            (i =
              !(s = B(e, Ne, null, !0)) ||
              "none" === s ||
              "matrix(1, 0, 0, 1, 0, 0)" === s),
            n ? (d.display = n) : o && Ue(d, "display"),
            r) &&
            He.removeChild(e),
          (l.svg || (e.getBBox && Ye(e))) &&
            (i && -1 !== (d[Y] + "").indexOf("matrix") && ((s = d[Y]), (i = 0)),
            (a = e.getAttribute("transform")),
            i) &&
            a &&
            (-1 !== a.indexOf("matrix")
              ? ((s = a), (i = 0))
              : -1 !== a.indexOf("translate") &&
                ((s =
                  "matrix(1,0,0,1," +
                  a.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                  ")"),
                (i = 0))),
          i)
        )
          return je;
        for (a = (s || "").match(L) || [], H = a.length; -1 < --H; )
          (n = Number(a[H])),
            (a[H] = (r = n - (n |= 0))
              ? ((1e5 * r + (r < 0 ? -0.5 : 0.5)) | 0) / 1e5 + n
              : n);
        return t && 6 < a.length ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a;
      }
      function Pe(e) {
        var t,
          i = this.data,
          s = (r = -i.rotation * A) + i.skewX * A,
          a = 1e5,
          n = ((Math.cos(r) * i.scaleX * a) | 0) / a,
          r = ((Math.sin(r) * i.scaleX * a) | 0) / a,
          o = ((Math.sin(s) * -i.scaleY * a) | 0) / a,
          s = ((Math.cos(s) * i.scaleY * a) | 0) / a,
          l = this.t.style,
          d = this.t.currentStyle;
        if (d) {
          (t = r), (r = -o), (o = -t), (a = d.filter), (l.filter = "");
          var c = this.t.offsetWidth,
            u = this.t.offsetHeight,
            p = "absolute" !== d.position,
            h =
              "progid:DXImageTransform.Microsoft.Matrix(M11=" +
              n +
              ", M12=" +
              r +
              ", M21=" +
              o +
              ", M22=" +
              s,
            f = i.x + (c * i.xPercent) / 100,
            m = i.y + (u * i.yPercent) / 100;
          if (
            (null != i.ox &&
              ((f +=
                (b = (i.oxp ? c * i.ox * 0.01 : i.ox) - c / 2) -
                (b * n + (w = (i.oyp ? u * i.oy * 0.01 : i.oy) - u / 2) * r)),
              (m += w - (b * o + w * s))),
            (h += p
              ? ", Dx=" +
                ((b = c / 2) - (b * n + (w = u / 2) * r) + f) +
                ", Dy=" +
                (w - (b * o + w * s) + m) +
                ")"
              : ", sizingMethod='auto expand')"),
            -1 !== a.indexOf("DXImageTransform.Microsoft.Matrix(")
              ? (l.filter = a.replace(ue, h))
              : (l.filter = h + " " + a),
            (0 !== e && 1 !== e) ||
              1 != n ||
              0 != r ||
              0 != o ||
              1 != s ||
              (p && -1 === h.indexOf("Dx=0, Dy=0")) ||
              (ie.test(a) && 100 !== parseFloat(RegExp.$1)) ||
              (-1 === a.indexOf(a.indexOf("Alpha")) &&
                l.removeAttribute("filter")),
            !p)
          ) {
            var g,
              v,
              y = x < 8 ? 1 : -1,
              b = i.ieOffsetX || 0,
              w = i.ieOffsetY || 0;
            for (
              i.ieOffsetX = Math.round(
                (c - ((n < 0 ? -n : n) * c + (r < 0 ? -r : r) * u)) / 2 + f
              ),
                i.ieOffsetY = Math.round(
                  (u - ((s < 0 ? -s : s) * u + (o < 0 ? -o : o) * c)) / 2 + m
                ),
                H = 0;
              H < 4;
              H++
            )
              (v =
                (t =
                  -1 !== (v = d[(g = be[H])]).indexOf("px")
                    ? parseFloat(v)
                    : N(this.t, g, parseFloat(v), v.replace(te, "")) || 0) !==
                i[g]
                  ? H < 2
                    ? -i.ieOffsetX
                    : -i.ieOffsetY
                  : H < 2
                  ? b - i.ieOffsetX
                  : w - i.ieOffsetY),
                (l[g] =
                  (i[g] = Math.round(t - v * (0 === H || 2 === H ? 1 : y))) +
                  "px");
          }
        }
      }
      function Ae(e) {
        var t,
          i = this.t,
          s = i.filter || B(this.data, "filter") || "",
          e = (this.s + this.c * e) | 0;
        (t =
          100 == e
            ? -1 === s.indexOf("atrix(") &&
              -1 === s.indexOf("radient(") &&
              -1 === s.indexOf("oader(")
              ? (i.removeAttribute("filter"), !B(this.data, "filter"))
              : ((i.filter = s.replace(ae, "")), !0)
            : t) ||
          (this.xn1 && (i.filter = s = s || "alpha(opacity=" + e + ")"),
          -1 === s.indexOf("pacity")
            ? (0 == e && this.xn1) ||
              (i.filter = s + " alpha(opacity=" + e + ")")
            : (i.filter = s.replace(ie, "opacity=" + e)));
      }
      function Ie(e) {
        if (((this.t._gsClassPT = this), 1 === e || 0 === e)) {
          this.t.setAttribute("class", 0 === e ? this.b : this.e);
          for (var t = this.data, i = this.t.style; t; )
            t.v ? (i[t.p] = t.v) : Ue(i, t.p), (t = t._next);
          1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null);
        } else
          this.t.getAttribute("class") !== this.e &&
            this.t.setAttribute("class", this.e);
      }
      function $e(e) {
        if (
          (1 === e || 0 === e) &&
          this.data._totalTime === this.data._totalDuration &&
          "isFromStart" !== this.data.data
        ) {
          var t,
            i,
            s,
            a,
            n = this.t.style,
            r = f.transform.parse;
          if ("all" === this.e) a = !(n.cssText = "");
          else
            for (
              s = (t = this.e.split(" ").join("").split(",")).length;
              -1 < --s;

            )
              (i = t[s]),
                f[i] &&
                  (f[i].parse === r
                    ? (a = !0)
                    : (i = "transformOrigin" === i ? qe : f[i].p)),
                Ue(n, i);
          a &&
            (Ue(n, Y), (e = this.t._gsTransform)) &&
            (e.svg &&
              (this.t.removeAttribute("data-svg-origin"),
              this.t.removeAttribute("transform")),
            delete this.t._gsTransform);
        }
      }
      var X,
        s,
        ze,
        a,
        n = (t._registerComplexSpecialProp = function (e, t, i) {
          "object" != typeof t && (t = { parser: i });
          var s,
            a = e.split(","),
            n = t.defaultValue;
          for (i = i || [n], s = 0; s < a.length; s++)
            (t.prefix = 0 === s && t.prefix),
              (t.defaultValue = i[s] || n),
              new Me(a[s], t);
        }),
        Ve = (t._registerPluginProp = function (e) {
          var l;
          f[e] ||
            ((l = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin"),
            n(e, {
              parser: function (e, t, i, s, a, n, r) {
                var o = Z.com.greensock.plugins[l];
                return o
                  ? (o._cssRegister(), f[i].parse(e, t, i, s, a, n, r))
                  : (g("Error: " + l + " js file not loaded."), a);
              },
            }));
        }),
        Be =
          (((e = Me.prototype).parseComplex = function (e, t, i, s, a, n) {
            var r,
              o,
              l,
              d,
              c,
              u,
              p = this.keyword;
            if (
              (this.multi &&
                (P.test(i) || P.test(t)
                  ? ((o = t.replace(P, "|").split("|")),
                    (l = i.replace(P, "|").split("|")))
                  : p && ((o = [t]), (l = [i]))),
              l)
            ) {
              for (d = (l.length > o.length ? l : o).length, r = 0; r < d; r++)
                (t = o[r] = o[r] || this.dflt),
                  (i = l[r] = l[r] || this.dflt),
                  p &&
                    (c = t.indexOf(p)) !== (u = i.indexOf(p)) &&
                    (-1 === u
                      ? (o[r] = o[r].split(p).join(""))
                      : -1 === c && (o[r] += " " + p));
              (t = o.join(", ")), (i = l.join(", "));
            }
            return Ce(e, this.p, t, i, this.clrs, this.dflt, s, this.pr, a, n);
          }),
          (e.parse = function (e, t, i, s, a, n, r) {
            return this.parseComplex(
              e.style,
              this.format(B(e, this.p, E, !1, this.dflt)),
              this.format(t),
              a,
              n
            );
          }),
          (D.registerSpecialProp = function (e, o, l) {
            n(e, {
              parser: function (e, t, i, s, a, n, r) {
                a = new F(e, i, 0, 0, a, 2, i, !1, l);
                return (a.plugin = n), (a.setRatio = o(e, t, s._tween, i)), a;
              },
              priority: l,
            });
          }),
          (D.useSVGTransformAttr = w || U),
          "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
            ","
          )),
        Y = _("transform"),
        Ne = me + "transform",
        qe = _("transformOrigin"),
        j = null !== _("perspective"),
        Re = (t.Transform = function () {
          (this.perspective = parseFloat(D.defaultTransformPerspective) || 0),
            (this.force3D =
              !1 !== D.defaultForce3D && j && (D.defaultForce3D || "auto"));
        }),
        Fe = window.SVGElement,
        He = $.documentElement,
        Xe =
          ((a = x || (/Android/i.test(i) && !window.chrome)),
          $.createElementNS &&
            !a &&
            ((s = ke("svg", He)),
            (ze = (i = ke("rect", s, {
              width: 100,
              height: 50,
              x: 100,
            })).getBoundingClientRect().width),
            (i.style[qe] = "50% 50%"),
            (i.style[Y] = "scaleX(0.5)"),
            (a = ze === i.getBoundingClientRect().width && !(U && j)),
            He.removeChild(s)),
          a),
        Ye = function (e) {
          return !!(
            Fe &&
            e.getBBox &&
            e.getCTM &&
            Oe(e) &&
            (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM))
          );
        },
        je = [1, 0, 0, 1, 0, 0],
        Ge = (t.getTransform = function (e, t, i, s) {
          if (e._gsTransform && i && !s) return e._gsTransform;
          var a,
            n,
            r,
            o,
            l,
            d,
            c,
            u,
            p,
            h,
            f,
            m,
            g,
            v,
            y,
            b,
            w,
            x,
            _,
            S,
            T,
            E,
            C = (i && e._gsTransform) || new Re(),
            M = C.scaleX < 0,
            k =
              (j &&
                (parseFloat(B(e, qe, t, !1, "0 0 0").split(" ")[2]) ||
                  C.zOrigin)) ||
              0,
            L = parseFloat(D.defaultTransformPerspective) || 0;
          if (
            ((C.svg = !(!e.getBBox || !Ye(e))),
            C.svg &&
              (Le(
                e,
                B(e, qe, t, !1, "50% 50%") + "",
                C,
                e.getAttribute("data-svg-origin")
              ),
              (X = D.useSVGTransformAttr || Xe)),
            (t = De(e)) !== je)
          )
            for (a in (16 === t.length
              ? ((n = t[0]),
                (r = t[1]),
                (o = t[2]),
                (_ = t[3]),
                (l = t[4]),
                (d = t[5]),
                (c = t[6]),
                (x = t[7]),
                (S = t[8]),
                (u = t[9]),
                (p = t[10]),
                (h = t[12]),
                (f = t[13]),
                (m = t[14]),
                (g = t[11]),
                (v = Math.atan2(c, p)),
                C.zOrigin &&
                  ((h = S * (m = -C.zOrigin) - t[12]),
                  (f = u * m - t[13]),
                  (m = p * m + C.zOrigin - t[14])),
                (C.rotationX = v * I),
                v &&
                  ((T = l * (b = Math.cos(-v)) + S * (w = Math.sin(-v))),
                  (y = d * b + u * w),
                  (E = c * b + p * w),
                  (S = l * -w + S * b),
                  (u = d * -w + u * b),
                  (p = c * -w + p * b),
                  (g = x * -w + g * b),
                  (l = T),
                  (d = y),
                  (c = E)),
                (v = Math.atan2(-o, p)),
                (C.rotationY = v * I),
                v &&
                  ((y = r * (b = Math.cos(-v)) - u * (w = Math.sin(-v))),
                  (E = o * b - p * w),
                  (u = r * w + u * b),
                  (p = o * w + p * b),
                  (g = _ * w + g * b),
                  (n = T = n * b - S * w),
                  (r = y),
                  (o = E)),
                (v = Math.atan2(r, n)),
                (C.rotation = v * I),
                v &&
                  ((n = n * (b = Math.cos(-v)) + l * (w = Math.sin(-v))),
                  (y = r * b + d * w),
                  (d = r * -w + d * b),
                  (c = o * -w + c * b),
                  (r = y)),
                C.rotationX &&
                  359.9 < Math.abs(C.rotationX) + Math.abs(C.rotation) &&
                  ((C.rotationX = C.rotation = 0),
                  (C.rotationY = 180 - C.rotationY)),
                (C.scaleX = ((1e5 * Math.sqrt(n * n + r * r) + 0.5) | 0) / 1e5),
                (C.scaleY = ((1e5 * Math.sqrt(d * d + u * u) + 0.5) | 0) / 1e5),
                (C.scaleZ = ((1e5 * Math.sqrt(c * c + p * p) + 0.5) | 0) / 1e5),
                C.rotationX || C.rotationY
                  ? (C.skewX = 0)
                  : ((C.skewX =
                      l || d
                        ? Math.atan2(l, d) * I + C.rotation
                        : C.skewX || 0),
                    90 < Math.abs(C.skewX) &&
                      Math.abs(C.skewX) < 270 &&
                      (M
                        ? ((C.scaleX *= -1),
                          (C.skewX += C.rotation <= 0 ? 180 : -180),
                          (C.rotation += C.rotation <= 0 ? 180 : -180))
                        : ((C.scaleY *= -1),
                          (C.skewX += C.skewX <= 0 ? 180 : -180)))),
                (C.perspective = g ? 1 / (g < 0 ? -g : g) : 0),
                (C.x = h),
                (C.y = f),
                (C.z = m),
                C.svg &&
                  ((C.x -= C.xOrigin - (C.xOrigin * n - C.yOrigin * l)),
                  (C.y -= C.yOrigin - (C.yOrigin * r - C.xOrigin * d))))
              : (j &&
                  !s &&
                  t.length &&
                  C.x === t[4] &&
                  C.y === t[5] &&
                  (C.rotationX || C.rotationY)) ||
                ((_ = (x = 6 <= t.length) ? t[0] : 1),
                (S = t[1] || 0),
                (T = t[2] || 0),
                (E = x ? t[3] : 1),
                (C.x = t[4] || 0),
                (C.y = t[5] || 0),
                (v = Math.sqrt(_ * _ + S * S)),
                (o = Math.sqrt(E * E + T * T)),
                (w = _ || S ? Math.atan2(S, _) * I : C.rotation || 0),
                (b = T || E ? Math.atan2(T, E) * I + w : C.skewX || 0),
                90 < Math.abs(b) &&
                  Math.abs(b) < 270 &&
                  (M
                    ? ((v *= -1),
                      (b += w <= 0 ? 180 : -180),
                      (w += w <= 0 ? 180 : -180))
                    : ((o *= -1), (b += b <= 0 ? 180 : -180))),
                (C.scaleX = v),
                (C.scaleY = o),
                (C.rotation = w),
                (C.skewX = b),
                j &&
                  ((C.rotationX = C.rotationY = C.z = 0),
                  (C.perspective = L),
                  (C.scaleZ = 1)),
                C.svg &&
                  ((C.x -= C.xOrigin - (C.xOrigin * _ + C.yOrigin * T)),
                  (C.y -= C.yOrigin - (C.xOrigin * S + C.yOrigin * E)))),
            (C.zOrigin = k),
            C))
              C[a] < 2e-5 && -2e-5 < C[a] && (C[a] = 0);
          return (
            i &&
              (e._gsTransform = C).svg &&
              (X && e.style[Y]
                ? O.delayedCall(0.001, function () {
                    Ue(e.style, Y);
                  })
                : !X &&
                  e.getAttribute("transform") &&
                  O.delayedCall(0.001, function () {
                    e.removeAttribute("transform");
                  })),
            C
          );
        }),
        We =
          (t.set3DTransformRatio =
          t.setTransformRatio =
            function (e) {
              var t,
                i,
                s,
                a,
                n,
                r,
                o,
                l,
                d,
                c,
                u,
                p,
                h,
                f,
                m,
                g,
                v,
                y,
                b = this.data,
                w = this.t.style,
                x = b.rotation,
                _ = b.rotationX,
                S = b.rotationY,
                T = b.scaleX,
                E = b.scaleY,
                C = b.scaleZ,
                M = b.x,
                k = b.y,
                L = b.z,
                O = b.svg,
                D = b.perspective,
                P = b.force3D;
              if (
                ((((1 !== e && 0 !== e) ||
                  "auto" !== P ||
                  (this.tween._totalTime !== this.tween._totalDuration &&
                    this.tween._totalTime)) &&
                  P) ||
                  L ||
                  D ||
                  S ||
                  _ ||
                  1 !== C) &&
                (!X || !O) &&
                j
              ) {
                if (
                  (U &&
                    (T < (p = 1e-4) && -p < T && (T = C = 2e-5),
                    E < p && -p < E && (E = C = 2e-5),
                    !D || b.z || b.rotationX || b.rotationY || (D = 0)),
                  x || b.skewX)
                )
                  (x *= A),
                    (v = t = Math.cos(x)),
                    (f = a = Math.sin(x)),
                    b.skewX &&
                      ((x -= b.skewX * A),
                      (v = Math.cos(x)),
                      (f = Math.sin(x)),
                      "simple" === b.skewType) &&
                      ((h = Math.tan((b.skewX - b.skewY) * A)),
                      (v *= h = Math.sqrt(1 + h * h)),
                      (f *= h),
                      b.skewY) &&
                      ((h = Math.tan(b.skewY * A)),
                      (t *= h = Math.sqrt(1 + h * h)),
                      (a *= h)),
                    (i = -f),
                    (n = v);
                else {
                  if (!(S || _ || 1 !== C || D || O))
                    return void (w[Y] =
                      (b.xPercent || b.yPercent
                        ? "translate(" +
                          b.xPercent +
                          "%," +
                          b.yPercent +
                          "%) translate3d("
                        : "translate3d(") +
                      M +
                      "px," +
                      k +
                      "px," +
                      L +
                      "px)" +
                      (1 !== T || 1 !== E
                        ? " scale(" + T + "," + E + ")"
                        : ""));
                  (t = n = 1), (i = a = 0);
                }
                (e = 1),
                  (s = r = o = l = d = P = 0),
                  (c = D ? -1 / D : 0),
                  (u = b.zOrigin),
                  (p = 1e-6),
                  (m = ","),
                  (g = "0"),
                  (x = S * A) &&
                    ((v = Math.cos(x)),
                    (d = c * (o = -(f = Math.sin(x)))),
                    (s = t * f),
                    (r = a * f),
                    (c *= e = v),
                    (t *= v),
                    (a *= v)),
                  (x = _ * A) &&
                    ((h = i * (v = Math.cos(x)) + s * (f = Math.sin(x))),
                    (y = n * v + r * f),
                    (l = e * f),
                    (P = c * f),
                    (s = i * -f + s * v),
                    (r = n * -f + r * v),
                    (e *= v),
                    (c *= v),
                    (i = h),
                    (n = y)),
                  1 !== C && ((s *= C), (r *= C), (e *= C), (c *= C)),
                  1 !== E && ((i *= E), (n *= E), (l *= E), (P *= E)),
                  1 !== T && ((t *= T), (a *= T), (o *= T), (d *= T)),
                  (u || O) &&
                    (u && ((M += s * -u), (k += r * -u), (L += e * -u + u)),
                    O &&
                      ((M +=
                        b.xOrigin -
                        (b.xOrigin * t + b.yOrigin * i) +
                        b.xOffset),
                      (k +=
                        b.yOrigin -
                        (b.xOrigin * a + b.yOrigin * n) +
                        b.yOffset)),
                    M < p && -p < M && (M = g),
                    k < p && -p < k && (k = g),
                    L < p) &&
                    -p < L &&
                    (L = 0),
                  (f =
                    (f =
                      b.xPercent || b.yPercent
                        ? "translate(" +
                          b.xPercent +
                          "%," +
                          b.yPercent +
                          "%) matrix3d("
                        : "matrix3d(") +
                    ((t < p && -p < t ? g : t) +
                      m +
                      (a < p && -p < a ? g : a) +
                      m +
                      (o < p && -p < o ? g : o)) +
                    (m +
                      (d < p && -p < d ? g : d) +
                      m +
                      (i < p && -p < i ? g : i) +
                      m +
                      (n < p && -p < n ? g : n))),
                  _ || S || 1 !== C
                    ? (f =
                        f +
                        m +
                        (l < p && -p < l ? g : l) +
                        m +
                        (P < p && -p < P ? g : P) +
                        m +
                        (s < p && -p < s ? g : s) +
                        m +
                        (r < p && -p < r ? g : r) +
                        m +
                        (e < p && -p < e ? g : e) +
                        m +
                        (c < p && -p < c ? g : c) +
                        m)
                    : (f += ",0,0,0,0,1,0,"),
                  (w[Y] = f +=
                    M + m + k + m + L + m + (D ? 1 + -L / D : 1) + ")");
              } else
                x || b.skewX || O
                  ? ((x *= A),
                    (v = b.skewX * A),
                    (y = 1e5),
                    (t = Math.cos(x) * T),
                    (a = Math.sin(x) * T),
                    (i = Math.sin(x - v) * -E),
                    (n = Math.cos(x - v) * E),
                    v &&
                      "simple" === b.skewType &&
                      ((h = Math.tan(v - b.skewY * A)),
                      (i *= h = Math.sqrt(1 + h * h)),
                      (n *= h),
                      b.skewY) &&
                      ((h = Math.tan(b.skewY * A)),
                      (t *= h = Math.sqrt(1 + h * h)),
                      (a *= h)),
                    O &&
                      ((M +=
                        b.xOrigin -
                        (b.xOrigin * t + b.yOrigin * i) +
                        b.xOffset),
                      (k +=
                        b.yOrigin -
                        (b.xOrigin * a + b.yOrigin * n) +
                        b.yOffset),
                      X &&
                        (b.xPercent || b.yPercent) &&
                        ((p = this.t.getBBox()),
                        (M += 0.01 * b.xPercent * p.width),
                        (k += 0.01 * b.yPercent * p.height)),
                      M < (p = 1e-6) && -p < M && (M = 0),
                      k < p) &&
                      -p < k &&
                      (k = 0),
                    (f =
                      ((t * y) | 0) / y +
                      "," +
                      ((a * y) | 0) / y +
                      "," +
                      ((i * y) | 0) / y +
                      "," +
                      ((n * y) | 0) / y +
                      "," +
                      M +
                      "," +
                      k +
                      ")"),
                    O && X
                      ? this.t.setAttribute("transform", "matrix(" + f)
                      : (w[Y] =
                          (b.xPercent || b.yPercent
                            ? "translate(" +
                              b.xPercent +
                              "%," +
                              b.yPercent +
                              "%) matrix("
                            : "matrix(") + f))
                  : (w[Y] =
                      (b.xPercent || b.yPercent
                        ? "translate(" +
                          b.xPercent +
                          "%," +
                          b.yPercent +
                          "%) matrix("
                        : "matrix(") +
                      T +
                      ",0,0," +
                      E +
                      "," +
                      M +
                      "," +
                      k +
                      ")");
            }),
        Ue =
          (((e = Re.prototype).x =
            e.y =
            e.z =
            e.skewX =
            e.skewY =
            e.rotation =
            e.rotationX =
            e.rotationY =
            e.zOrigin =
            e.xPercent =
            e.yPercent =
            e.xOffset =
            e.yOffset =
              0),
          (e.scaleX = e.scaleY = e.scaleZ = 1),
          n(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (e, t, i, s, a, n, r) {
                if (s._lastParsedTransform !== r) {
                  "function" == typeof (s._lastParsedTransform = r)[i] &&
                    ((o = r[i]), (r[i] = t));
                  var o,
                    l,
                    d,
                    c,
                    u,
                    p,
                    h,
                    f,
                    m,
                    t = e._gsTransform,
                    g = e.style,
                    v = Be.length,
                    y = r,
                    b = {},
                    w = "transformOrigin",
                    x = Ge(e, E, !0, y.parseTransform),
                    _ =
                      y.transform &&
                      ("function" == typeof y.transform
                        ? y.transform(k, M)
                        : y.transform);
                  if (((s._transform = x), _ && "string" == typeof _ && Y))
                    ((d = z.style)[Y] = _),
                      (d.display = "block"),
                      (d.position = "absolute"),
                      $.body.appendChild(z),
                      (l = Ge(z, null, !1)),
                      x.svg &&
                        ((p = x.xOrigin),
                        (h = x.yOrigin),
                        (l.x -= x.xOffset),
                        (l.y -= x.yOffset),
                        (y.transformOrigin || y.svgOrigin) &&
                          ((_ = {}),
                          Le(
                            e,
                            q(y.transformOrigin),
                            _,
                            y.svgOrigin,
                            y.smoothOrigin,
                            !0
                          ),
                          (p = _.xOrigin),
                          (h = _.yOrigin),
                          (l.x -= _.xOffset - x.xOffset),
                          (l.y -= _.yOffset - x.yOffset)),
                        p || h) &&
                        ((f = De(z, !0)),
                        (l.x -= p - (p * f[0] + h * f[2])),
                        (l.y -= h - (p * f[1] + h * f[3]))),
                      $.body.removeChild(z),
                      l.perspective || (l.perspective = x.perspective),
                      null != y.xPercent &&
                        (l.xPercent = S(y.xPercent, x.xPercent)),
                      null != y.yPercent &&
                        (l.yPercent = S(y.yPercent, x.yPercent));
                  else if ("object" == typeof y) {
                    if (
                      ((l = {
                        scaleX: S(
                          null != y.scaleX ? y.scaleX : y.scale,
                          x.scaleX
                        ),
                        scaleY: S(
                          null != y.scaleY ? y.scaleY : y.scale,
                          x.scaleY
                        ),
                        scaleZ: S(y.scaleZ, x.scaleZ),
                        x: S(y.x, x.x),
                        y: S(y.y, x.y),
                        z: S(y.z, x.z),
                        xPercent: S(y.xPercent, x.xPercent),
                        yPercent: S(y.yPercent, x.yPercent),
                        perspective: S(y.transformPerspective, x.perspective),
                      }),
                      null != (u = y.directionalRotation))
                    )
                      if ("object" == typeof u) for (d in u) y[d] = u[d];
                      else y.rotation = u;
                    "string" == typeof y.x &&
                      -1 !== y.x.indexOf("%") &&
                      ((l.x = 0), (l.xPercent = S(y.x, x.xPercent))),
                      "string" == typeof y.y &&
                        -1 !== y.y.indexOf("%") &&
                        ((l.y = 0), (l.yPercent = S(y.y, x.yPercent))),
                      (l.rotation = T(
                        "rotation" in y
                          ? y.rotation
                          : "shortRotation" in y
                          ? y.shortRotation + "_short"
                          : "rotationZ" in y
                          ? y.rotationZ
                          : x.rotation - x.skewY,
                        x.rotation - x.skewY,
                        "rotation",
                        b
                      )),
                      j &&
                        ((l.rotationX = T(
                          "rotationX" in y
                            ? y.rotationX
                            : "shortRotationX" in y
                            ? y.shortRotationX + "_short"
                            : x.rotationX || 0,
                          x.rotationX,
                          "rotationX",
                          b
                        )),
                        (l.rotationY = T(
                          "rotationY" in y
                            ? y.rotationY
                            : "shortRotationY" in y
                            ? y.shortRotationY + "_short"
                            : x.rotationY || 0,
                          x.rotationY,
                          "rotationY",
                          b
                        ))),
                      (l.skewX = T(y.skewX, x.skewX - x.skewY)),
                      (l.skewY = T(y.skewY, x.skewY)) &&
                        ((l.skewX += l.skewY), (l.rotation += l.skewY));
                  }
                  for (
                    j &&
                      null != y.force3D &&
                      ((x.force3D = y.force3D), (c = !0)),
                      x.skewType =
                        y.skewType || x.skewType || D.defaultSkewType,
                      (f =
                        x.force3D ||
                        x.z ||
                        x.rotationX ||
                        x.rotationY ||
                        l.z ||
                        l.rotationX ||
                        l.rotationY ||
                        l.perspective) ||
                        null == y.scale ||
                        (l.scaleZ = 1);
                    -1 < --v;

                  )
                    (1e-6 < (_ = l[(m = Be[v])] - x[m]) ||
                      _ < -1e-6 ||
                      null != y[m] ||
                      null != he[m]) &&
                      ((c = !0),
                      (a = new F(x, m, x[m], _, a)),
                      m in b && (a.e = b[m]),
                      (a.xs0 = 0),
                      (a.plugin = n),
                      s._overwriteProps.push(a.n));
                  (_ = y.transformOrigin),
                    x.svg &&
                      (_ || y.svgOrigin) &&
                      ((p = x.xOffset),
                      (h = x.yOffset),
                      Le(e, q(_), l, y.svgOrigin, y.smoothOrigin),
                      (a = Ee(
                        x,
                        "xOrigin",
                        (t ? x : l).xOrigin,
                        l.xOrigin,
                        a,
                        w
                      )),
                      (a = Ee(
                        x,
                        "yOrigin",
                        (t ? x : l).yOrigin,
                        l.yOrigin,
                        a,
                        w
                      )),
                      (p === x.xOffset && h === x.yOffset) ||
                        ((a = Ee(
                          x,
                          "xOffset",
                          t ? p : x.xOffset,
                          x.xOffset,
                          a,
                          w
                        )),
                        (a = Ee(
                          x,
                          "yOffset",
                          t ? h : x.yOffset,
                          x.yOffset,
                          a,
                          w
                        ))),
                      (_ = X ? null : "0px 0px")),
                    (_ || (j && f && x.zOrigin)) &&
                      (Y
                        ? ((c = !0),
                          (m = qe),
                          (_ = (_ || B(e, m, E, !1, "50% 50%")) + ""),
                          ((a = new F(g, m, 0, 0, a, -1, w)).b = g[m]),
                          (a.plugin = n),
                          j
                            ? ((d = x.zOrigin),
                              (_ = _.split(" ")),
                              (x.zOrigin =
                                (2 < _.length && (0 === d || "0px" !== _[2])
                                  ? parseFloat(_[2])
                                  : d) || 0),
                              (a.xs0 = a.e =
                                _[0] + " " + (_[1] || "50%") + " 0px"),
                              ((a = new F(x, "zOrigin", 0, 0, a, -1, a.n)).b =
                                d),
                              (a.xs0 = a.e = x.zOrigin))
                            : (a.xs0 = a.e = _))
                        : q(_ + "", x)),
                    c &&
                      (s._transformType =
                        (x.svg && X) || (!f && 3 !== this._transformType)
                          ? 2
                          : 3),
                    o && (r[i] = o);
                }
                return a;
              },
              prefix: !0,
            }
          ),
          n("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          n("borderRadius", {
            defaultValue: "0px",
            parser: function (e, t, i, s, a, n) {
              t = this.format(t);
              for (
                var r,
                  o,
                  l,
                  d,
                  c,
                  u,
                  p,
                  h,
                  f,
                  m,
                  g = [
                    "borderTopLeftRadius",
                    "borderTopRightRadius",
                    "borderBottomRightRadius",
                    "borderBottomLeftRadius",
                  ],
                  v = e.style,
                  y = parseFloat(e.offsetWidth),
                  b = parseFloat(e.offsetHeight),
                  w = t.split(" "),
                  x = 0;
                x < g.length;
                x++
              )
                this.p.indexOf("border") && (g[x] = _(g[x])),
                  -1 !== (l = o = B(e, g[x], E, !1, "0px")).indexOf(" ") &&
                    ((l = (o = l.split(" "))[0]), (o = o[1])),
                  (d = r = w[x]),
                  (f = parseFloat(l)),
                  (m = l.substr((f + "").length)),
                  (u =
                    "" ===
                    (u = (p = "=" === d.charAt(1))
                      ? ((c = parseInt(d.charAt(0) + "1", 10)),
                        (d = d.substr(2)),
                        (c *= parseFloat(d)),
                        d.substr((c + "").length - (c < 0 ? 1 : 0)) || "")
                      : ((c = parseFloat(d)), d.substr((c + "").length)))
                      ? G[i] || m
                      : u) !== m &&
                    ((h = N(e, "borderLeft", f, m)),
                    (f = N(e, "borderTop", f, m)),
                    (o =
                      "%" === u
                        ? ((l = (h / y) * 100 + "%"), (f / b) * 100 + "%")
                        : "em" === u
                        ? ((l = h / (m = N(e, "borderLeft", 1, "em")) + "em"),
                          f / m + "em")
                        : ((l = h + "px"), f + "px")),
                    p) &&
                    ((d = parseFloat(l) + c + u), (r = parseFloat(o) + c + u)),
                  (a = Ce(v, g[x], l + " " + o, d + " " + r, !1, "0px", a));
              return a;
            },
            prefix: !0,
            formatter: _e("0px 0px 0px 0px", !1, !0),
          }),
          n(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (e, t, i, s, a, n) {
                return Ce(
                  e.style,
                  i,
                  this.format(B(e, i, E, !1, "0px 0px")),
                  this.format(t),
                  !1,
                  "0px",
                  a
                );
              },
              prefix: !0,
              formatter: _e("0px 0px", !1, !0),
            }
          ),
          n("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (e, t, i, s, a, n) {
              var r,
                o,
                l,
                d,
                c,
                u = "background-position",
                p = E || m(e, null),
                h = this.format(
                  (p
                    ? x
                      ? p.getPropertyValue(u + "-x") +
                        " " +
                        p.getPropertyValue(u + "-y")
                      : p.getPropertyValue(u)
                    : e.currentStyle.backgroundPositionX +
                      " " +
                      e.currentStyle.backgroundPositionY) || "0 0"
                ),
                p = this.format(t);
              if (
                (-1 !== h.indexOf("%")) != (-1 !== p.indexOf("%")) &&
                p.split(",").length < 2 &&
                (u = B(e, "backgroundImage").replace(le, "")) &&
                "none" !== u
              ) {
                for (
                  r = h.split(" "),
                    o = p.split(" "),
                    fe.setAttribute("src", u),
                    l = 2;
                  -1 < --l;

                )
                  (d = -1 !== (h = r[l]).indexOf("%")) !=
                    (-1 !== o[l].indexOf("%")) &&
                    ((c =
                      0 === l
                        ? e.offsetWidth - fe.width
                        : e.offsetHeight - fe.height),
                    (r[l] = d
                      ? (parseFloat(h) / 100) * c + "px"
                      : (parseFloat(h) / c) * 100 + "%"));
                h = r.join(" ");
              }
              return this.parseComplex(e.style, h, p, a, n);
            },
            formatter: q,
          }),
          n("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (e) {
              return q(-1 === (e += "").indexOf(" ") ? e + " " + e : e);
            },
          }),
          n("perspective", { defaultValue: "0px", prefix: !0 }),
          n("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          n("transformStyle", { prefix: !0 }),
          n("backfaceVisibility", { prefix: !0 }),
          n("userSelect", { prefix: !0 }),
          n("margin", {
            parser: Se("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          n("padding", {
            parser: Se("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          n("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (e, t, i, s, a, n) {
              var r, o;
              return (
                (t =
                  x < 9
                    ? ((r = e.currentStyle),
                      (o = x < 8 ? " " : ","),
                      (r =
                        "rect(" +
                        r.clipTop +
                        o +
                        r.clipRight +
                        o +
                        r.clipBottom +
                        o +
                        r.clipLeft +
                        ")"),
                      this.format(t).split(",").join(o))
                    : ((r = this.format(B(e, this.p, E, !1, this.dflt))),
                      this.format(t))),
                this.parseComplex(e.style, r, t, a, n)
              );
            },
          }),
          n("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          n("autoRound,strictUnits", {
            parser: function (e, t, i, s, a) {
              return a;
            },
          }),
          n("border", {
            defaultValue: "0px solid #000",
            parser: function (e, t, i, s, a, n) {
              var r = B(e, "borderTopWidth", E, !1, "0px"),
                t = this.format(t).split(" "),
                o = t[0].replace(te, "");
              return (
                "px" !== o &&
                  (r = parseFloat(r) / N(e, "borderTopWidth", 1, o) + o),
                this.parseComplex(
                  e.style,
                  this.format(
                    r +
                      " " +
                      B(e, "borderTopStyle", E, !1, "solid") +
                      " " +
                      B(e, "borderTopColor", E, !1, "#000")
                  ),
                  t.join(" "),
                  a,
                  n
                )
              );
            },
            color: !0,
            formatter: function (e) {
              var t = e.split(" ");
              return (
                t[0] +
                " " +
                (t[1] || "solid") +
                " " +
                (e.match(R) || ["#000"])[0]
              );
            },
          }),
          n("borderWidth", {
            parser: Se(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          n("float,cssFloat,styleFloat", {
            parser: function (e, t, i, s, a, n) {
              var e = e.style,
                r = "cssFloat" in e ? "cssFloat" : "styleFloat";
              return new F(e, r, 0, 0, a, -1, i, !1, 0, e[r], t);
            },
          }),
          n("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (e, t, i, s, a, n) {
              var r = parseFloat(B(e, "opacity", E, !1, "1")),
                o = e.style,
                l = "autoAlpha" === i;
              return (
                "string" == typeof t &&
                  "=" === t.charAt(1) &&
                  (t =
                    ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) +
                    r),
                l &&
                  1 === r &&
                  "hidden" === B(e, "visibility", E) &&
                  0 !== t &&
                  (r = 0),
                V
                  ? (a = new F(o, "opacity", r, t - r, a))
                  : (((a = new F(o, "opacity", 100 * r, 100 * (t - r), a)).xn1 =
                      l ? 1 : 0),
                    (o.zoom = 1),
                    (a.type = 2),
                    (a.b = "alpha(opacity=" + a.s + ")"),
                    (a.e = "alpha(opacity=" + (a.s + a.c) + ")"),
                    (a.data = e),
                    (a.plugin = n),
                    (a.setRatio = Ae)),
                l &&
                  (((a = new F(
                    o,
                    "visibility",
                    0,
                    0,
                    a,
                    -1,
                    null,
                    !1,
                    0,
                    0 !== r ? "inherit" : "hidden",
                    0 === t ? "hidden" : "inherit"
                  )).xs0 = "inherit"),
                  s._overwriteProps.push(a.n),
                  s._overwriteProps.push(i)),
                a
              );
            },
          }),
          function (e, t) {
            t &&
              (e.removeProperty
                ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                    (t = "-" + t),
                  e.removeProperty(t.replace(re, "-$1").toLowerCase()))
                : e.removeAttribute(t));
          });
      n("className", {
        parser: function (e, t, i, s, a, n, r) {
          var o,
            l,
            d,
            c = e.getAttribute("class") || "",
            u = e.style.cssText;
          if (
            (((a = s._classNamePT = new F(e, i, 0, 0, a, 2)).setRatio = Ie),
            (a.pr = -11),
            (h = !0),
            (a.b = c),
            (i = p(e, E)),
            (o = e._gsClassPT))
          ) {
            for (l = {}, d = o.data; d; ) (l[d.p] = 1), (d = d._next);
            o.setRatio(1);
          }
          return (
            ((e._gsClassPT = a).e =
              "=" !== t.charAt(1)
                ? t
                : c.replace(
                    new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"),
                    ""
                  ) + ("+" === t.charAt(0) ? " " + t.substr(2) : "")),
            e.setAttribute("class", a.e),
            (o = v(e, i, p(e), r, l)),
            e.setAttribute("class", c),
            (a.data = o.firstMPT),
            (e.style.cssText = u),
            (a = a.xfirst = s.parse(e, o.difs, a, n))
          );
        },
      });
      for (
        n("clearProps", {
          parser: function (e, t, i, s, a) {
            return (
              ((a = new F(e, i, 0, 0, a, 2)).setRatio = $e),
              (a.e = t),
              (a.pr = -10),
              (a.data = s._tween),
              (h = !0),
              a
            );
          },
        }),
          e = "bezier,throwProps,physicsProps,physics2D".split(","),
          H = e.length;
        H--;

      )
        Ve(e[H]);
      ((e = D.prototype)._firstPT =
        e._lastParsedTransform =
        e._transform =
          null),
        (e._onInitTween = function (e, t, i, s) {
          if (!e.nodeType) return !1;
          (this._target = M = e),
            (this._tween = i),
            (this._vars = t),
            (k = s),
            (W = t.autoRound),
            (h = !1),
            (G = t.suffixMap || D.suffixMap),
            (E = m(e, "")),
            (y = this._overwriteProps);
          var a,
            n,
            r,
            o,
            l,
            d,
            s = e.style;
          if (
            (!b ||
              "" !== s.zIndex ||
              ("auto" !== (d = B(e, "zIndex", E)) && "" !== d) ||
              this._addLazySet(s, "zIndex", 0),
            "string" == typeof t &&
              ((r = s.cssText),
              (d = p(e, E)),
              (s.cssText = r + ";" + t),
              (d = v(e, d, p(e)).difs),
              !V && se.test(t) && (d.opacity = parseFloat(RegExp.$1)),
              (t = d),
              (s.cssText = r)),
            t.className
              ? (this._firstPT = a =
                  f.className.parse(
                    e,
                    t.className,
                    "className",
                    this,
                    null,
                    null,
                    t
                  ))
              : (this._firstPT = a = this.parse(e, t, null)),
            this._transformType)
          ) {
            for (
              d = 3 === this._transformType,
                Y
                  ? w &&
                    ((b = !0),
                    "" !== s.zIndex ||
                      ("auto" !== (t = B(e, "zIndex", E)) && "" !== t) ||
                      this._addLazySet(s, "zIndex", 0),
                    Q) &&
                    this._addLazySet(
                      s,
                      "WebkitBackfaceVisibility",
                      this._vars.WebkitBackfaceVisibility ||
                        (d ? "visible" : "hidden")
                    )
                  : (s.zoom = 1),
                n = a;
              n && n._next;

            )
              n = n._next;
            (t = new F(e, "transform", 0, 0, null, 2)),
              this._linkCSSP(t, null, n),
              (t.setRatio = Y ? We : Pe),
              (t.data = this._transform || Ge(e, E, !0)),
              (t.tween = i),
              (t.pr = -1),
              y.pop();
          }
          if (h) {
            for (; a; ) {
              for (l = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
              (a._prev = n ? n._prev : o) ? (a._prev._next = a) : (r = a),
                (a._next = n) ? (n._prev = a) : (o = a),
                (a = l);
            }
            this._firstPT = r;
          }
          return !0;
        }),
        (e.parse = function (e, t, i, s) {
          var a,
            n,
            r,
            o,
            l,
            d,
            c,
            u,
            p = e.style;
          for (a in t)
            "function" == typeof (l = t[a]) && (l = l(k, M)),
              (o = f[a])
                ? (i = o.parse(e, l, a, this, i, s, t))
                : ((o = B(e, a, E) + ""),
                  (c = "string" == typeof l),
                  "color" === a ||
                  "fill" === a ||
                  "stroke" === a ||
                  -1 !== a.indexOf("Color") ||
                  (c && ne.test(l))
                    ? (c ||
                        (l =
                          (3 < (l = xe(l)).length ? "rgba(" : "rgb(") +
                          l.join(",") +
                          ")"),
                      (i = Ce(p, a, o, l, !0, "transparent", i, 0, s)))
                    : c && pe.test(l)
                    ? (i = Ce(p, a, o, l, !0, null, i, 0, s))
                    : ((d =
                        (n = parseFloat(o)) || 0 === n
                          ? o.substr((n + "").length)
                          : ""),
                      ("" !== o && "auto" !== o) ||
                        (d =
                          "width" === a || "height" === a
                            ? ((n = ((e, t, i) => {
                                if ("svg" === (e.nodeName + "").toLowerCase())
                                  return (i || m(e))[t] || 0;
                                if (e.getBBox && Ye(e))
                                  return e.getBBox()[t] || 0;
                                var s = parseFloat(
                                    "width" === t
                                      ? e.offsetWidth
                                      : e.offsetHeight
                                  ),
                                  a = ye[t],
                                  n = a.length;
                                for (i = i || m(e, null); -1 < --n; )
                                  s =
                                    (s -=
                                      parseFloat(
                                        B(e, "padding" + a[n], i, !0)
                                      ) || 0) -
                                    (parseFloat(
                                      B(e, "border" + a[n] + "Width", i, !0)
                                    ) || 0);
                                return s;
                              })(e, a, E)),
                              "px")
                            : "left" === a || "top" === a
                            ? ((n = ve(e, a, E)), "px")
                            : ((n = "opacity" !== a ? 0 : 1), "")),
                      "" ===
                        (c = (u = c && "=" === l.charAt(1))
                          ? ((r = parseInt(l.charAt(0) + "1", 10)),
                            (l = l.substr(2)),
                            (r *= parseFloat(l)),
                            l.replace(te, ""))
                          : ((r = parseFloat(l)),
                            c ? l.replace(te, "") : "")) &&
                        (c = a in G ? G[a] : d),
                      (l = r || 0 === r ? (u ? r + n : r) + c : t[a]),
                      d !== c &&
                        "" !== c &&
                        (r || 0 === r) &&
                        n &&
                        ((n = N(e, a, n, d)),
                        "%" === c
                          ? ((n /= N(e, a, 100, "%") / 100),
                            !0 !== t.strictUnits && (o = n + "%"))
                          : "em" === c ||
                            "rem" === c ||
                            "vw" === c ||
                            "vh" === c
                          ? (n /= N(e, a, 1, c))
                          : "px" !== c && ((r = N(e, a, r, c)), (c = "px")),
                        u) &&
                        (r || 0 === r) &&
                        (l = r + n + c),
                      u && (r += n),
                      (!n && 0 !== n) || (!r && 0 !== r)
                        ? void 0 !== p[a] &&
                          (l || (l + "" != "NaN" && null != l))
                          ? ((i = new F(
                              p,
                              a,
                              r || n || 0,
                              0,
                              i,
                              -1,
                              a,
                              !1,
                              0,
                              o,
                              l
                            )).xs0 =
                              "none" !== l ||
                              ("display" !== a && -1 === a.indexOf("Style"))
                                ? l
                                : o)
                          : g("invalid " + a + " tween value: " + t[a])
                        : ((i = new F(
                            p,
                            a,
                            n,
                            r - n,
                            i,
                            0,
                            a,
                            !1 !== W && ("px" === c || "zIndex" === a),
                            0,
                            o,
                            l
                          )).xs0 = c))),
              s && i && !i.plugin && (i.plugin = s);
          return i;
        }),
        (e.setRatio = function (e) {
          var t,
            i,
            s,
            a = this._firstPT;
          if (
            1 !== e ||
            (this._tween._time !== this._tween._duration &&
              0 !== this._tween._time)
          )
            if (
              e ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time) ||
              -1e-6 === this._tween._rawPrevTime
            )
              for (; a; ) {
                if (
                  ((t = a.c * e + a.s),
                  a.r ? (t = Math.round(t)) : t < 1e-6 && -1e-6 < t && (t = 0),
                  a.type)
                )
                  if (1 === a.type)
                    if (2 === (s = a.l))
                      a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2;
                    else if (3 === s)
                      a.t[a.p] =
                        a.xs0 + t + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3;
                    else if (4 === s)
                      a.t[a.p] =
                        a.xs0 +
                        t +
                        a.xs1 +
                        a.xn1 +
                        a.xs2 +
                        a.xn2 +
                        a.xs3 +
                        a.xn3 +
                        a.xs4;
                    else if (5 === s)
                      a.t[a.p] =
                        a.xs0 +
                        t +
                        a.xs1 +
                        a.xn1 +
                        a.xs2 +
                        a.xn2 +
                        a.xs3 +
                        a.xn3 +
                        a.xs4 +
                        a.xn4 +
                        a.xs5;
                    else {
                      for (i = a.xs0 + t + a.xs1, s = 1; s < a.l; s++)
                        i += a["xn" + s] + a["xs" + (s + 1)];
                      a.t[a.p] = i;
                    }
                  else
                    -1 === a.type
                      ? (a.t[a.p] = a.xs0)
                      : a.setRatio && a.setRatio(e);
                else a.t[a.p] = t + a.xs0;
                a = a._next;
              }
            else
              for (; a; )
                2 !== a.type ? (a.t[a.p] = a.b) : a.setRatio(e), (a = a._next);
          else
            for (; a; ) {
              if (2 !== a.type)
                if (a.r && -1 !== a.type)
                  if (((t = Math.round(a.s + a.c)), a.type)) {
                    if (1 === a.type) {
                      for (s = a.l, i = a.xs0 + t + a.xs1, s = 1; s < a.l; s++)
                        i += a["xn" + s] + a["xs" + (s + 1)];
                      a.t[a.p] = i;
                    }
                  } else a.t[a.p] = t + a.xs0;
                else a.t[a.p] = a.e;
              else a.setRatio(e);
              a = a._next;
            }
        }),
        (e._enableTransforms = function (e) {
          (this._transform = this._transform || Ge(this._target, E, !0)),
            (this._transformType =
              (this._transform.svg && X) || (!e && 3 !== this._transformType)
                ? 2
                : 3);
        });
      function Qe(e) {
        (this.t[this.p] = this.e),
          this.data._linkCSSP(this, this._next, null, !0);
      }
      function Ze(e, t, i) {
        var s, a, n, r;
        if (e.slice) for (a = e.length; -1 < --a; ) Ze(e[a], t, i);
        else
          for (a = (s = e.childNodes).length; -1 < --a; )
            (r = (n = s[a]).type),
              n.style && (t.push(p(n)), i) && i.push(n),
              (1 !== r && 9 !== r && 11 !== r) ||
                !n.childNodes.length ||
                Ze(n, t, i);
      }
      (e._addLazySet = function (e, t, i) {
        e = this._firstPT = new F(e, t, 0, 0, this._firstPT, 2);
        (e.e = i), (e.setRatio = Qe), (e.data = this);
      }),
        (e._linkCSSP = function (e, t, i, s) {
          return (
            e &&
              (t && (t._prev = e),
              e._next && (e._next._prev = e._prev),
              e._prev
                ? (e._prev._next = e._next)
                : this._firstPT === e && ((this._firstPT = e._next), (s = !0)),
              i
                ? (i._next = e)
                : s || null !== this._firstPT || (this._firstPT = e),
              (e._next = t),
              (e._prev = i)),
            e
          );
        }),
        (e._mod = function (e) {
          for (var t = this._firstPT; t; )
            "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1),
              (t = t._next);
        }),
        (e._kill = function (e) {
          var t,
            i,
            s,
            a = e;
          if (e.autoAlpha || e.alpha) {
            for (i in ((a = {}), e)) a[i] = e[i];
            (a.opacity = 1), a.autoAlpha && (a.visibility = 1);
          }
          for (
            e.className &&
              (t = this._classNamePT) &&
              ((s = t.xfirst) && s._prev
                ? this._linkCSSP(s._prev, t._next, s._prev._prev)
                : s === this._firstPT && (this._firstPT = t._next),
              t._next && this._linkCSSP(t._next, t._next._next, s._prev),
              (this._classNamePT = null)),
              t = this._firstPT;
            t;

          )
            t.plugin &&
              t.plugin !== i &&
              t.plugin._kill &&
              (t.plugin._kill(e), (i = t.plugin)),
              (t = t._next);
          return r.prototype._kill.call(this, a);
        });
      return (
        (D.cascadeTo = function (e, t, i) {
          var s,
            a,
            n,
            r,
            o = O.to(e, t, i),
            l = [o],
            d = [],
            c = [],
            u = [],
            p = O._internals.reservedProps;
          for (
            e = o._targets || o.target,
              Ze(e, d, u),
              o.render(t, !0, !0),
              Ze(e, c),
              o.render(0, !0, !0),
              o._enabled(!0),
              s = u.length;
            -1 < --s;

          )
            if ((a = v(u[s], d[s], c[s])).firstMPT) {
              for (n in ((a = a.difs), i)) p[n] && (a[n] = i[n]);
              for (n in ((r = {}), a)) r[n] = d[s][n];
              l.push(O.fromTo(u[s], t, r, a));
            }
          return l;
        }),
        r.activate([D]),
        D
      );
    },
    !0
  );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (() => {
    function e() {
      return (_gsScope.GreenSockGlobals || _gsScope).CSSPlugin;
    }
    "function" == typeof define && define.amd
      ? define(["static/src/js/workfiles/gsap/TweenLite"], e)
      : "undefined" != typeof module &&
        module.exports &&
        (require("../TweenLite.js"), (module.exports = e()));
  })(),
  (
    (_gsScope =
      "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
        ? global
        : this || window)._gsQueue || (_gsScope._gsQueue = [])
  ).push(function () {
    function n(e, t) {
      var i = "scroll" + (t = "x" === t ? "Width" : "Height"),
        s = "client" + t,
        a = document.body;
      return e === o || e === r || e === a
        ? Math.max(r[i], a[i]) - (o["inner" + t] || r[s] || a[s])
        : e[i] - e["offset" + t];
    }
    function a(e, t) {
      var e = l(e).getBoundingClientRect(),
        i = !t || t === o || t === document.body,
        s = (i ? r : t).getBoundingClientRect(),
        e = { x: e.left - s.left, y: e.top - s.top };
      return !i && t && ((e.x += d(t, "x")()), (e.y += d(t, "y")())), e;
    }
    function s(e, t, i) {
      var s = typeof e;
      return "number" == s || ("string" == s && "=" === e.charAt(1))
        ? e
        : "max" === e
        ? n(t, i)
        : Math.min(n(t, i), a(e, t)[i]);
    }
    var r = document.documentElement,
      o = window,
      l = function (e) {
        return (e =
          (e = "string" == typeof e ? TweenLite.selector(e) : e).length &&
          e !== o &&
          e[0] &&
          e[0].style &&
          !e.nodeType
            ? e[0]
            : e) === o ||
          (e.nodeType && e.style)
          ? e
          : null;
      },
      d = function (e, t) {
        var i = "scroll" + ("x" === t ? "Left" : "Top");
        return (
          e === o &&
            (null != e.pageXOffset
              ? (i = "page" + t.toUpperCase() + "Offset")
              : (e = null != r[i] ? r : document.body)),
          function () {
            return e[i];
          }
        );
      },
      c = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.8.0",
        init: function (e, t, i) {
          return (
            (this._wdw = e === o),
            (this._target = e),
            (this._tween = i),
            "object" != typeof t
              ? "string" == typeof (t = { y: t }).y &&
                "max" !== t.y &&
                "=" !== t.y.charAt(1) &&
                (t.x = t.y)
              : t.nodeType && (t = { y: t, x: t }),
            (this.vars = t),
            (this._autoKill = !1 !== t.autoKill),
            (this.getX = d(e, "x")),
            (this.getY = d(e, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            null != t.x
              ? (this._addTween(
                  this,
                  "x",
                  this.x,
                  s(t.x, e, "x") - (t.offsetX || 0),
                  "scrollTo_x",
                  !0
                ),
                this._overwriteProps.push("scrollTo_x"))
              : (this.skipX = !0),
            null != t.y
              ? (this._addTween(
                  this,
                  "y",
                  this.y,
                  s(t.y, e, "y") - (t.offsetY || 0),
                  "scrollTo_y",
                  !0
                ),
                this._overwriteProps.push("scrollTo_y"))
              : (this.skipY = !0),
            !0
          );
        },
        set: function (e) {
          this._super.setRatio.call(this, e);
          var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
            t = this._wdw || !this.skipY ? this.getY() : this.yPrev,
            i = t - this.yPrev,
            s = e - this.xPrev,
            a = c.autoKillThreshold;
          this.x < 0 && (this.x = 0),
            this.y < 0 && (this.y = 0),
            this._autoKill &&
              (!this.skipX &&
                (a < s || s < -a) &&
                e < n(this._target, "x") &&
                (this.skipX = !0),
              !this.skipY &&
                (a < i || i < -a) &&
                t < n(this._target, "y") &&
                (this.skipY = !0),
              this.skipX) &&
              this.skipY &&
              (this._tween.kill(), this.vars.onAutoKill) &&
              this.vars.onAutoKill.apply(
                this.vars.onAutoKillScope || this._tween,
                this.vars.onAutoKillParams || []
              ),
            this._wdw
              ? o.scrollTo(this.skipX ? e : this.x, this.skipY ? t : this.y)
              : (this.skipY || (this._target.scrollTop = this.y),
                this.skipX || (this._target.scrollLeft = this.x)),
            (this.xPrev = this.x),
            (this.yPrev = this.y);
        },
      }),
      e = c.prototype;
    (c.max = n),
      (c.getOffset = a),
      (c.autoKillThreshold = 7),
      (e._kill = function (e) {
        return (
          e.scrollTo_x && (this.skipX = !0),
          e.scrollTo_y && (this.skipY = !0),
          this._super._kill.call(this, e)
        );
      });
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (() => {
    function e() {
      return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin;
    }
    "function" == typeof define && define.amd
      ? define(["static/src/js/workfiles/gsap/TweenLite"], e)
      : "undefined" != typeof module &&
        module.exports &&
        (require("../TweenLite.js"), (module.exports = e()));
  })();
(
  (_gsScope =
    "undefined" != typeof module &&
    module.exports &&
    "undefined" != typeof global
      ? global
      : this || window)._gsQueue || (_gsScope._gsQueue = [])
).push(function () {
  _gsScope._gsDefine(
    "easing.Back",
    ["easing.Ease"],
    function (g) {
      function e(e, t) {
        var i = ((e = d("easing." + e, function () {}, !0)).prototype =
          new g());
        return (i.constructor = e), (i.getRatio = t), e;
      }
      function t(e, t, i, s, a) {
        return (
          (t = d(
            "easing." + e,
            { easeOut: new t(), easeIn: new i(), easeInOut: new s() },
            !0
          )),
          c(t, e),
          t
        );
      }
      function v(e, t, i) {
        (this.t = e),
          (this.v = t),
          i &&
            ((((this.next = i).prev = this).c = i.v - t), (this.gap = i.t - e));
      }
      function i(e, t) {
        var i = d(
          "easing." + e,
          function (e) {
            (this._p1 = e || 0 === e ? e : 1.70158),
              (this._p2 = 1.525 * this._p1);
          },
          !0
        );
        return (
          ((e = i.prototype = new g()).constructor = i),
          (e.getRatio = t),
          (e.config = function (e) {
            return new i(e);
          }),
          i
        );
      }
      var s,
        a,
        n = _gsScope.GreenSockGlobals || _gsScope,
        r = n.com.greensock,
        o = 2 * Math.PI,
        l = Math.PI / 2,
        d = r._class,
        c = g.register || function () {},
        r = t(
          "Back",
          i("BackOut", function (e) {
            return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1;
          }),
          i("BackIn", function (e) {
            return e * e * ((this._p1 + 1) * e - this._p1);
          }),
          i("BackInOut", function (e) {
            return (e *= 2) < 1
              ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2)
              : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2);
          })
        ),
        u = d(
          "easing.SlowMo",
          function (e, t, i) {
            (t = t || 0 === t ? t : 0.7),
              null == e ? (e = 0.7) : 1 < e && (e = 1),
              (this._p = 1 !== e ? t : 0),
              (this._p1 = (1 - e) / 2),
              (this._p2 = e),
              (this._p3 = this._p1 + this._p2),
              (this._calcEnd = !0 === i);
          },
          !0
        ),
        p = (u.prototype = new g());
      return (
        (p.constructor = u),
        (p.getRatio = function (e) {
          var t = e + (0.5 - e) * this._p;
          return e < this._p1
            ? this._calcEnd
              ? 1 - (e = 1 - e / this._p1) * e
              : t - (e = 1 - e / this._p1) * e * e * e * t
            : e > this._p3
            ? this._calcEnd
              ? 1 - (e = (e - this._p3) / this._p1) * e
              : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
            : this._calcEnd
            ? 1
            : t;
        }),
        (u.ease = new u(0.7, 0.7)),
        (p.config = u.config =
          function (e, t, i) {
            return new u(e, t, i);
          }),
        ((p = (s = d(
          "easing.SteppedEase",
          function (e) {
            (this._p1 = 1 / (e = e || 1)), (this._p2 = e + 1);
          },
          !0
        )).prototype =
          new g()).constructor = s),
        (p.getRatio = function (e) {
          return (
            e < 0 ? (e = 0) : 1 <= e && (e = 0.999999999),
            ((this._p2 * e) >> 0) * this._p1
          );
        }),
        (p.config = s.config =
          function (e) {
            return new s(e);
          }),
        ((p = (a = d(
          "easing.RoughEase",
          function (e) {
            for (
              var t,
                i,
                s,
                a,
                n,
                r,
                o = (e = e || {}).taper || "none",
                l = [],
                d = 0,
                c = 0 | (e.points || 20),
                u = c,
                p = !1 !== e.randomize,
                h = !0 === e.clamp,
                f = e.template instanceof g ? e.template : null,
                m = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
              -1 < --u;

            )
              (t = p ? Math.random() : (1 / c) * u),
                (i = f ? f.getRatio(t) : t),
                (s =
                  "none" === o
                    ? m
                    : "out" === o
                    ? (a = 1 - t) * a * m
                    : "in" === o
                    ? t * t * m
                    : t < 0.5
                    ? (a = 2 * t) * a * 0.5 * m
                    : (a = 2 * (1 - t)) * a * 0.5 * m),
                p
                  ? (i += Math.random() * s - 0.5 * s)
                  : u % 2
                  ? (i += 0.5 * s)
                  : (i -= 0.5 * s),
                h && (1 < i ? (i = 1) : i < 0 && (i = 0)),
                (l[d++] = { x: t, y: i });
            for (
              l.sort(function (e, t) {
                return e.x - t.x;
              }),
                r = new v(1, 1, null),
                u = c;
              -1 < --u;

            )
              r = new v((n = l[u]).x, n.y, r);
            this._prev = new v(0, 0, 0 !== r.t ? r : r.next);
          },
          !0
        )).prototype =
          new g()).constructor = a),
        (p.getRatio = function (e) {
          var t = this._prev;
          if (e > t.t) {
            for (; t.next && e >= t.t; ) t = t.next;
            t = t.prev;
          } else for (; t.prev && e <= t.t; ) t = t.prev;
          return (this._prev = t).v + ((e - t.t) / t.gap) * t.c;
        }),
        (p.config = function (e) {
          return new a(e);
        }),
        (a.ease = new a()),
        t(
          "Bounce",
          e("BounceOut", function (e) {
            return e < 1 / 2.75
              ? 7.5625 * e * e
              : e < 2 / 2.75
              ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
              : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
          }),
          e("BounceIn", function (e) {
            return (e = 1 - e) < 1 / 2.75
              ? 1 - 7.5625 * e * e
              : e < 2 / 2.75
              ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
              : e < 2.5 / 2.75
              ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
              : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
          }),
          e("BounceInOut", function (e) {
            var t = e < 0.5;
            return (
              (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75
                ? (e *= 7.5625 * e)
                : (e =
                    e < 2 / 2.75
                      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                      : e < 2.5 / 2.75
                      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375),
              t ? 0.5 * (1 - e) : 0.5 * e + 0.5
            );
          })
        ),
        t(
          "Circ",
          e("CircOut", function (e) {
            return Math.sqrt(1 - (e -= 1) * e);
          }),
          e("CircIn", function (e) {
            return -(Math.sqrt(1 - e * e) - 1);
          }),
          e("CircInOut", function (e) {
            return (e *= 2) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
          })
        ),
        t(
          "Elastic",
          (p = function (e, t, i) {
            var s = d(
                "easing." + e,
                function (e, t) {
                  (this._p1 = 1 <= e ? e : 1),
                    (this._p2 = (t || i) / (e < 1 ? e : 1)),
                    (this._p3 =
                      (this._p2 / o) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = o / this._p2);
                },
                !0
              ),
              e = (s.prototype = new g());
            return (
              (e.constructor = s),
              (e.getRatio = t),
              (e.config = function (e, t) {
                return new s(e, t);
              }),
              s
            );
          })(
            "ElasticOut",
            function (e) {
              return (
                this._p1 *
                  Math.pow(2, -10 * e) *
                  Math.sin((e - this._p3) * this._p2) +
                1
              );
            },
            0.3
          ),
          p(
            "ElasticIn",
            function (e) {
              return -(
                this._p1 *
                Math.pow(2, 10 * --e) *
                Math.sin((e - this._p3) * this._p2)
              );
            },
            0.3
          ),
          p(
            "ElasticInOut",
            function (e) {
              return (e *= 2) < 1
                ? this._p1 *
                    Math.pow(2, 10 * --e) *
                    Math.sin((e - this._p3) * this._p2) *
                    -0.5
                : this._p1 *
                    Math.pow(2, -10 * --e) *
                    Math.sin((e - this._p3) * this._p2) *
                    0.5 +
                    1;
            },
            0.45
          )
        ),
        t(
          "Expo",
          e("ExpoOut", function (e) {
            return 1 - Math.pow(2, -10 * e);
          }),
          e("ExpoIn", function (e) {
            return Math.pow(2, 10 * (e - 1)) - 0.001;
          }),
          e("ExpoInOut", function (e) {
            return (e *= 2) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          })
        ),
        t(
          "Sine",
          e("SineOut", function (e) {
            return Math.sin(e * l);
          }),
          e("SineIn", function (e) {
            return 1 - Math.cos(e * l);
          }),
          e("SineInOut", function (e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1);
          })
        ),
        d(
          "easing.EaseLookup",
          {
            find: function (e) {
              return g.map[e];
            },
          },
          !0
        ),
        c(n.SlowMo, "SlowMo", "ease,"),
        c(a, "RoughEase", "ease,"),
        c(s, "SteppedEase", "ease,"),
        r
      );
    },
    !0
  );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (() => {
    function e() {
      return _gsScope.GreenSockGlobals || _gsScope;
    }
    "function" == typeof define && define.amd
      ? define(["static/src/js/workfiles/gsap/TweenLite"], e)
      : "undefined" != typeof module &&
        module.exports &&
        (require("../TweenLite.js"), (module.exports = e()));
  })(),
  ((e, t) => {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).LazyLoad =
          t());
  })(this, function () {
    function t() {
      return (t =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i,
              s = arguments[t];
            for (i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    function r(e) {
      return t({}, te, e);
    }
    function e(e, t) {
      var i,
        s = "LazyLoad::Initialized",
        t = new e(t);
      try {
        i = new CustomEvent(s, { detail: { instance: t } });
      } catch (e) {
        (i = document.createEvent("CustomEvent")).initCustomEvent(s, !1, !1, {
          instance: t,
        });
      }
      window.dispatchEvent(i);
    }
    function c(e) {
      return b(e) === ae;
    }
    function u(e) {
      return e.llTempImage;
    }
    function z(e, t) {
      e && (e.toLoadCount = t);
    }
    function V(e) {
      for (var t, i = [], s = 0; (t = e.children[s]); s += 1)
        "SOURCE" === t.tagName && i.push(t);
      return i;
    }
    function B(e, t) {
      V(e).forEach(t);
    }
    function N(e) {
      delete e[m];
    }
    function i(t, e) {
      var i;
      D(t) ||
        ((i = {}),
        e.forEach(function (e) {
          i[e] = t.getAttribute(e);
        }),
        (t[m] = i));
    }
    function p(s, e) {
      var a;
      D(s) &&
        ((a = ce(s)),
        e.forEach(function (e) {
          var t, i;
          (t = s),
            (i = a[(e = e)]) ? t.setAttribute(e, i) : t.removeAttribute(e);
        }));
    }
    function q(e, t, i) {
      T(e, t.class_applied),
        w(e, se),
        i && (t.unobserve_completed && C(e, t), S(t.callback_applied, e, i));
    }
    function R(e, t, i) {
      T(e, t.class_loading),
        w(e, g),
        i && (M(i, 1), S(t.callback_loading, e, i));
    }
    function s(e, t, i) {
      i && e.setAttribute(t, i);
    }
    function F(e, t) {
      s(e, f, y(e, t.data_sizes)),
        s(e, n, y(e, t.data_srcset)),
        s(e, h, y(e, t.data_src));
    }
    function H(e, t) {
      !t || 0 < t.loadingCount || 0 < t.toLoadCount || S(e.callback_finish, t);
    }
    function X(e, t, i) {
      e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
    }
    function Y(e, t, i) {
      delete e.llTempImage,
        M(i, -1),
        i && --i.toLoadCount,
        E(e, t.class_loading),
        t.unobserve_completed && C(e, i);
    }
    function l(r, o, l) {
      var e,
        t,
        d = u(r) || r;
      P(d) ||
        (P((e = d)) || (e.llEvLisnrs = {}),
        (t = "VIDEO" === e.tagName ? "loadeddata" : "load"),
        X(e, t, function (e) {
          var t = 0,
            i = r,
            s = o,
            a = l,
            n = c(i);
          Y(i, s, a),
            T(i, s.class_loaded),
            w(i, ie),
            S(s.callback_loaded, i, a),
            n || H(s, a),
            A(d);
        }),
        X(e, "error", function (e) {
          var t = 0,
            i = r,
            s = o,
            a = l,
            n = c(i);
          Y(i, s, a),
            T(i, s.class_error),
            w(i, v),
            S(s.callback_error, i, a),
            s.restore_on_error && p(i, O),
            n || H(s, a),
            A(d);
        }));
    }
    function j(e) {
      return e.use_native && "loading" in HTMLImageElement.prototype;
    }
    function G(e, d, c) {
      e.forEach(function (e) {
        return e.isIntersecting || 0 < e.intersectionRatio
          ? ((a = e.target),
            (n = e),
            (r = d),
            (o = c),
            (l = 0 <= oe.indexOf(b(a))),
            w(a, "entered"),
            T(a, r.class_entered),
            E(a, r.class_exited),
            r.unobserve_entered && C(a, o),
            S(r.callback_enter, a, n, o),
            void (l || I(a, r, o)))
          : ((n = e.target),
            (l = e),
            (a = d),
            (r = c),
            void (
              _(n) ||
              (T(n, a.class_exited),
              (o = n),
              (e = l),
              (i = r),
              (t = a).cancel_on_exit &&
                b(o) === g &&
                "IMG" === o.tagName &&
                (A(o),
                k((s = o), function (e) {
                  fe(e);
                }),
                fe(s),
                me(o),
                E(o, t.class_loading),
                M(i, -1),
                x(o),
                S(t.callback_cancel, o, e, i)),
              S(a.callback_exit, n, l, r))
            ));
        var t, i, s, a, n, r, o, l;
      });
    }
    function W(e) {
      return Array.prototype.slice.call(e);
    }
    function o(e) {
      return e.container.querySelectorAll(e.elements_selector);
    }
    function U(e) {
      return b(e) === v;
    }
    function Q(e, t) {
      return (e = e || o(t)), W(e).filter(_);
    }
    function a(e, t) {
      var s,
        a,
        i,
        n,
        e = r(e);
      (this._settings = e),
        (this.loadingCount = 0),
        (i = e),
        (n = this),
        K &&
          !j(i) &&
          (n._observer = new IntersectionObserver(
            function (e) {
              G(e, i, n);
            },
            {
              root: i.container === document ? null : i.container,
              rootMargin: i.thresholds || i.threshold + "px",
            }
          )),
        (s = e),
        (a = this),
        d &&
          ((a._onlineHandler = function () {
            var t, e, i;
            (e = a),
              (i = o((t = s))),
              W(i)
                .filter(U)
                .forEach(function (e) {
                  E(e, t.class_error), x(e);
                }),
              e.update();
          }),
          window.addEventListener("online", a._onlineHandler)),
        this.update(t);
    }
    var d = "undefined" != typeof window,
      Z =
        (d && !("onscroll" in window)) ||
        ("undefined" != typeof navigator &&
          /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
      K = d && "IntersectionObserver" in window,
      J = d && "classList" in document.createElement("p"),
      ee = d && 1 < window.devicePixelRatio,
      te = {
        elements_selector: ".lazy",
        container: Z || d ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_bg_set: "bg-set",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
        restore_on_error: !1,
      },
      h = "src",
      n = "srcset",
      f = "sizes",
      m = "llOriginalAttrs",
      g = "loading",
      ie = "loaded",
      se = "applied",
      v = "error",
      ae = "native",
      ne = "data-",
      re = "ll-status",
      y = function (e, t) {
        return e.getAttribute(ne + t);
      },
      b = function (e) {
        return y(e, re);
      },
      w = function (e, t) {
        var i;
        (e = e),
          (i = "data-ll-status"),
          null !== t ? e.setAttribute(i, t) : e.removeAttribute(i);
      },
      x = function (e) {
        return w(e, null);
      },
      _ = function (e) {
        return null === b(e);
      },
      oe = [g, "loaded", se, v],
      S = function (e, t, i, s) {
        e && (void 0 === s ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, s));
      },
      T = function (e, t) {
        J ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
      },
      E = function (e, t) {
        J
          ? e.classList.remove(t)
          : (e.className = e.className
              .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
              .replace(/^\s+/, "")
              .replace(/\s+$/, ""));
      },
      C = function (e, t) {
        t && (t = t._observer) && t.unobserve(e);
      },
      M = function (e, t) {
        e && (e.loadingCount += t);
      },
      k = function (e, t) {
        e = e.parentNode;
        e && "PICTURE" === e.tagName && V(e).forEach(t);
      },
      L = [h],
      le = [h, "poster"],
      O = [h, n, f],
      de = ["data"],
      D = function (e) {
        return !!e[m];
      },
      ce = function (e) {
        return e[m];
      },
      ue = {
        IMG: function (e, t) {
          k(e, function (e) {
            i(e, O), F(e, t);
          }),
            i(e, O),
            F(e, t);
        },
        IFRAME: function (e, t) {
          i(e, L), s(e, h, y(e, t.data_src));
        },
        VIDEO: function (e, t) {
          B(e, function (e) {
            i(e, L), s(e, h, y(e, t.data_src));
          }),
            i(e, le),
            s(e, "poster", y(e, t.data_poster)),
            s(e, h, y(e, t.data_src)),
            e.load();
        },
        OBJECT: function (e, t) {
          i(e, de), s(e, "data", y(e, t.data_src));
        },
      },
      pe = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
      he = function (e, t, i) {
        e.removeEventListener(t, i);
      },
      P = function (e) {
        return !!e.llEvLisnrs;
      },
      A = function (e) {
        if (P(e)) {
          var t,
            i = e.llEvLisnrs;
          for (t in i) {
            var s = i[t];
            he(e, t, s);
          }
          delete e.llEvLisnrs;
        }
      },
      I = function (e, t, i) {
        var s, a, n, r, o;
        -1 < pe.indexOf(e.tagName)
          ? (l((n = e), (s = t), (o = i)),
            (s = s),
            (o = o),
            (a = ue[(n = n).tagName]) && (a(n, s), R(n, s, o)))
          : ((a = t),
            (n = i),
            ((s = e).llTempImage = document.createElement("IMG")),
            l(s, a, n),
            D((o = s)) || (o[m] = { backgroundImage: o.style.backgroundImage }),
            (o = n),
            (e = y((t = s), (i = a).data_bg)),
            (r = y(t, i.data_bg_hidpi)),
            (r = ee && r ? r : e) &&
              ((t.style.backgroundImage = 'url("'.concat(r, '")')),
              u(t).setAttribute(h, r),
              R(t, i, o)),
            (e = n),
            (i = y((r = s), (t = a).data_bg_multi)),
            (o = y(r, t.data_bg_multi_hidpi)),
            (o = ee && o ? o : i) &&
              ((r.style.backgroundImage = o), q(r, t, e)),
            (i = n),
            (t = y((o = s), (r = a).data_bg_set)) &&
              ((e = (t = t.split("|")).map(function (e) {
                return "image-set(".concat(e, ")");
              })),
              (o.style.backgroundImage = e.join()),
              "" === o.style.backgroundImage &&
                ((e = t.map(function (e) {
                  return "-webkit-image-set(".concat(e, ")");
                })),
                (o.style.backgroundImage = e.join())),
              q(o, r, i)));
      },
      fe = function (e) {
        e.removeAttribute(h), e.removeAttribute(n), e.removeAttribute(f);
      },
      me = function (e) {
        k(e, function (e) {
          p(e, O);
        }),
          p(e, O);
      },
      ge = {
        IMG: me,
        IFRAME: function (e) {
          p(e, L);
        },
        VIDEO: function (e) {
          B(e, function (e) {
            p(e, L);
          }),
            p(e, le),
            e.load();
        },
        OBJECT: function (e) {
          p(e, de);
        },
      },
      ve = ["IMG", "IFRAME", "VIDEO"];
    if (
      ((a.prototype = {
        update: function (e) {
          var t,
            i,
            s,
            a,
            n = this._settings,
            e = Q(e, n);
          z(this, e.length),
            !Z && K
              ? j(n)
                ? ((s = n),
                  (a = this),
                  e.forEach(function (e) {
                    var t, i;
                    -1 !== ve.indexOf(e.tagName) &&
                      ((t = s),
                      (i = a),
                      (e = e).setAttribute("loading", "lazy"),
                      l(e, t, i),
                      (i = ue[e.tagName]) && i(e, t),
                      w(e, ae));
                  }),
                  z(a, 0))
                : ((n = e),
                  (t = this._observer).disconnect(),
                  (i = t),
                  n.forEach(function (e) {
                    i.observe(e);
                  }))
              : this.loadAll(e);
        },
        destroy: function () {
          this._observer && this._observer.disconnect(),
            d && window.removeEventListener("online", this._onlineHandler),
            o(this._settings).forEach(function (e) {
              N(e);
            }),
            delete this._observer,
            delete this._settings,
            delete this._onlineHandler,
            delete this.loadingCount,
            delete this.toLoadCount;
        },
        loadAll: function (e) {
          var t = this,
            i = this._settings;
          Q(e, i).forEach(function (e) {
            C(e, t), I(e, i, t);
          });
        },
        restoreAll: function () {
          var a = this._settings;
          o(a).forEach(function (e) {
            var t, i, s;
            (t = a),
              (s = ge[(i = e = e).tagName])
                ? s(i)
                : D((s = i)) &&
                  ((i = ce(s)), (s.style.backgroundImage = i.backgroundImage)),
              (s = t),
              _((i = e)) ||
                c(i) ||
                (E(i, s.class_entered),
                E(i, s.class_exited),
                E(i, s.class_applied),
                E(i, s.class_loading),
                E(i, s.class_loaded),
                E(i, s.class_error)),
              x(e),
              N(e);
          });
        },
      }),
      (a.load = function (e, t) {
        t = r(t);
        I(e, t);
      }),
      (a.resetStatus = function (e) {
        x(e);
      }),
      d)
    ) {
      var ye = a,
        $ = window.lazyLoadOptions;
      if ($)
        if ($.length) for (var be, we = 0; (be = $[we]); we += 1) e(ye, be);
        else e(ye, $);
    }
    return a;
  }),
  ((e, t) => {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.tingle = t());
  })(this, function () {
    var t = !1;
    function e(e) {
      (this.opts = (function () {
        for (var e = 1; e < arguments.length; e++)
          for (var t in arguments[e])
            arguments[e].hasOwnProperty(t) &&
              (arguments[0][t] = arguments[e][t]);
        return arguments[0];
      })(
        {},
        {
          onClose: null,
          onOpen: null,
          beforeOpen: null,
          beforeClose: null,
          stickyFooter: !1,
          footer: !1,
          cssClass: [],
          closeLabel: "Close",
          closeMethods: ["overlay", "button", "escape"],
        },
        e
      )),
        this.init();
    }
    function i() {
      this.modalBoxFooter &&
        ((this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px"),
        (this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px"));
    }
    return (
      (e.prototype.init = function () {
        if (!this.modal)
          return (
            function () {
              (this.modal = document.createElement("div")),
                this.modal.classList.add("tingle-modal"),
                (0 !== this.opts.closeMethods.length &&
                  -1 !== this.opts.closeMethods.indexOf("overlay")) ||
                  this.modal.classList.add("tingle-modal--noOverlayClose");
              (this.modal.style.display = "none"),
                this.opts.cssClass.forEach(function (e) {
                  "string" == typeof e && this.modal.classList.add(e);
                }, this),
                -1 !== this.opts.closeMethods.indexOf("button") &&
                  ((this.modalCloseBtn = document.createElement("button")),
                  (this.modalCloseBtn.type = "button"),
                  this.modalCloseBtn.classList.add("tingle-modal__close"),
                  (this.modalCloseBtnIcon = document.createElement("span")),
                  this.modalCloseBtnIcon.classList.add(
                    "tingle-modal__closeIcon"
                  ),
                  (this.modalCloseBtnIcon.innerHTML =
                    '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>'),
                  (this.modalCloseBtnLabel = document.createElement("span")),
                  this.modalCloseBtnLabel.classList.add(
                    "tingle-modal__closeLabel"
                  ),
                  (this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel),
                  this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),
                  this.modalCloseBtn.appendChild(this.modalCloseBtnLabel));
              (this.modalBox = document.createElement("div")),
                this.modalBox.classList.add("tingle-modal-box"),
                (this.modalBoxContent = document.createElement("div")),
                this.modalBoxContent.classList.add("tingle-modal-box__content"),
                this.modalBox.appendChild(this.modalBoxContent),
                -1 !== this.opts.closeMethods.indexOf("button") &&
                  this.modal.appendChild(this.modalCloseBtn);
              this.modal.appendChild(this.modalBox);
            }.call(this),
            function () {
              (this._events = {
                clickCloseBtn: this.close.bind(this),
                clickOverlay: function (e) {
                  -1 !== this.opts.closeMethods.indexOf("overlay") &&
                    !((e, t) => {
                      for (
                        ;
                        (e = e.parentElement) && !e.classList.contains(t);

                      );
                      return e;
                    })(e.target, "tingle-modal") &&
                    e.clientX < this.modal.clientWidth &&
                    this.close();
                }.bind(this),
                resize: this.checkOverflow.bind(this),
                keyboardNav: function (e) {
                  -1 !== this.opts.closeMethods.indexOf("escape") &&
                    27 === e.which &&
                    this.isOpen() &&
                    this.close();
                }.bind(this),
              }),
                -1 !== this.opts.closeMethods.indexOf("button") &&
                  this.modalCloseBtn.addEventListener(
                    "click",
                    this._events.clickCloseBtn
                  );
              this.modal.addEventListener(
                "mousedown",
                this._events.clickOverlay
              ),
                window.addEventListener("resize", this._events.resize),
                document.addEventListener("keydown", this._events.keyboardNav);
            }.call(this),
            document.body.insertBefore(this.modal, document.body.firstChild),
            this.opts.footer && this.addFooter(),
            this
          );
      }),
      (e.prototype._busy = function (e) {
        t = e;
      }),
      (e.prototype._isBusy = function () {
        return t;
      }),
      (e.prototype.destroy = function () {
        null !== this.modal &&
          (this.isOpen() && this.close(!0),
          function () {
            -1 !== this.opts.closeMethods.indexOf("button") &&
              this.modalCloseBtn.removeEventListener(
                "click",
                this._events.clickCloseBtn
              );
            this.modal.removeEventListener(
              "mousedown",
              this._events.clickOverlay
            ),
              window.removeEventListener("resize", this._events.resize),
              document.removeEventListener("keydown", this._events.keyboardNav);
          }.call(this),
          this.modal.parentNode.removeChild(this.modal),
          (this.modal = null));
      }),
      (e.prototype.isOpen = function () {
        return !!this.modal.classList.contains("tingle-modal--visible");
      }),
      (e.prototype.open = function () {
        var e;
        if (!this._isBusy())
          return (
            this._busy(!0),
            "function" == typeof (e = this).opts.beforeOpen &&
              e.opts.beforeOpen(),
            this.modal.style.removeProperty
              ? this.modal.style.removeProperty("display")
              : this.modal.style.removeAttribute("display"),
            (this._scrollPosition = window.pageYOffset),
            document.body.classList.add("tingle-enabled"),
            (document.body.style.top = -this._scrollPosition + "px"),
            this.setStickyFooter(this.opts.stickyFooter),
            this.modal.classList.add("tingle-modal--visible"),
            "function" == typeof e.opts.onOpen && e.opts.onOpen.call(e),
            e._busy(!1),
            this.checkOverflow(),
            this
          );
      }),
      (e.prototype.close = function (e) {
        if (!this._isBusy()) {
          if ((this._busy(!0), "function" == typeof this.opts.beforeClose))
            if (!this.opts.beforeClose.call(this)) return void this._busy(!1);
          document.body.classList.remove("tingle-enabled"),
            window.scrollTo({ top: this._scrollPosition, behavior: "instant" }),
            (document.body.style.top = null),
            this.modal.classList.remove("tingle-modal--visible");
          (this.modal.style.display = "none"),
            "function" == typeof this.opts.onClose &&
              this.opts.onClose.call(this),
            this._busy(!1);
        }
      }),
      (e.prototype.setContent = function (e) {
        return (
          "string" == typeof e
            ? (this.modalBoxContent.innerHTML = e)
            : ((this.modalBoxContent.innerHTML = ""),
              this.modalBoxContent.appendChild(e)),
          this.isOpen() && this.checkOverflow(),
          this
        );
      }),
      (e.prototype.getContent = function () {
        return this.modalBoxContent;
      }),
      (e.prototype.addFooter = function () {
        return (
          function () {
            (this.modalBoxFooter = document.createElement("div")),
              this.modalBoxFooter.classList.add("tingle-modal-box__footer"),
              this.modalBox.appendChild(this.modalBoxFooter);
          }.call(this),
          this
        );
      }),
      (e.prototype.setFooterContent = function (e) {
        return (this.modalBoxFooter.innerHTML = e), this;
      }),
      (e.prototype.getFooterContent = function () {
        return this.modalBoxFooter;
      }),
      (e.prototype.setStickyFooter = function (e) {
        return (
          (e = this.isOverflow() ? e : !1)
            ? this.modalBox.contains(this.modalBoxFooter) &&
              (this.modalBox.removeChild(this.modalBoxFooter),
              this.modal.appendChild(this.modalBoxFooter),
              this.modalBoxFooter.classList.add(
                "tingle-modal-box__footer--sticky"
              ),
              i.call(this),
              (this.modalBoxContent.style["padding-bottom"] =
                this.modalBoxFooter.clientHeight + 20 + "px"))
            : this.modalBoxFooter &&
              !this.modalBox.contains(this.modalBoxFooter) &&
              (this.modal.removeChild(this.modalBoxFooter),
              this.modalBox.appendChild(this.modalBoxFooter),
              (this.modalBoxFooter.style.width = "auto"),
              (this.modalBoxFooter.style.left = ""),
              (this.modalBoxContent.style["padding-bottom"] = ""),
              this.modalBoxFooter.classList.remove(
                "tingle-modal-box__footer--sticky"
              )),
          this
        );
      }),
      (e.prototype.addFooterBtn = function (e, t, i) {
        var s = document.createElement("button");
        return (
          (s.innerHTML = e),
          s.addEventListener("click", i),
          "string" == typeof t &&
            t.length &&
            t.split(" ").forEach(function (e) {
              s.classList.add(e);
            }),
          this.modalBoxFooter.appendChild(s),
          s
        );
      }),
      (e.prototype.resize = function () {
        console.warn("Resize is deprecated and will be removed in version 1.0");
      }),
      (e.prototype.isOverflow = function () {
        return window.innerHeight <= this.modalBox.clientHeight;
      }),
      (e.prototype.checkOverflow = function () {
        this.modal.classList.contains("tingle-modal--visible") &&
          (this.isOverflow()
            ? this.modal.classList.add("tingle-modal--overflow")
            : this.modal.classList.remove("tingle-modal--overflow"),
          !this.isOverflow() && this.opts.stickyFooter
            ? this.setStickyFooter(!1)
            : this.isOverflow() &&
              this.opts.stickyFooter &&
              (i.call(this), this.setStickyFooter(!0)));
      }),
      { modal: e }
    );
  }),
  ((e, t) => {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    function s(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function a(t, i) {
      void 0 === t && (t = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach((e) => {
          void 0 === t[e]
            ? (t[e] = i[e])
            : s(i[e]) &&
              s(t[e]) &&
              0 < Object.keys(i[e]).length &&
              a(t[e], i[e]);
        });
    }
    let t = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function T() {
      var e = "undefined" != typeof document ? document : {};
      return a(e, t), e;
    }
    let z = {
      document: t,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function D() {
      var e = "undefined" != typeof window ? window : {};
      return a(e, z), e;
    }
    class r extends Array {
      constructor(e) {
        if ("number" == typeof e) super(e);
        else {
          super(...(e || []));
          {
            e = this;
            let t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          }
        }
      }
    }
    function n(e) {
      let t = [];
      return (
        (e = void 0 === e ? [] : e).forEach((e) => {
          Array.isArray(e) ? t.push(...n(e)) : t.push(e);
        }),
        t
      );
    }
    function o(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function P(e, s) {
      let t = D(),
        a = T(),
        n = [];
      if (!s && e instanceof r) return e;
      if (!e) return new r(n);
      if ("string" == typeof e) {
        let i = e.trim();
        if (0 <= i.indexOf("<") && 0 <= i.indexOf(">")) {
          let e = "div",
            t =
              (0 === i.indexOf("<li") && (e = "ul"),
              0 === i.indexOf("<tr") && (e = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
              0 === i.indexOf("<tbody") && (e = "table"),
              0 === i.indexOf("<option") && (e = "select"),
              a.createElement(e));
          t.innerHTML = i;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = ((e) => {
            if ("string" != typeof e) return [e];
            var t = [],
              i = (s || a).querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
            return t;
          })(e.trim());
      } else if (e.nodeType || e === t || e === a) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof r) return e;
        n = e;
      }
      return new r(
        ((t) => {
          var i = [];
          for (let e = 0; e < t.length; e += 1)
            -1 === i.indexOf(t[e]) && i.push(t[e]);
          return i;
        })(n)
      );
    }
    P.fn = r.prototype;
    let i = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        let s = n(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...s);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        let s = n(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...s);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        let s = n(t.map((e) => e.split(" ")));
        return (
          0 <
          o(this, (t) => 0 < s.filter((e) => t.classList.contains(e)).length)
            .length
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        let s = n(t.map((e) => e.split(" ")));
        this.forEach((t) => {
          s.forEach((e) => {
            t.classList.toggle(e);
          });
        });
      },
      attr: function (i, e) {
        if (1 === arguments.length && "string" == typeof i)
          return this[0] ? this[0].getAttribute(i) : void 0;
        for (let t = 0; t < this.length; t += 1)
          if (2 === arguments.length) this[t].setAttribute(i, e);
          else
            for (let e in i) (this[t][e] = i[e]), this[t].setAttribute(e, i[e]);
        return this;
      },
      removeAttr: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
        return this;
      },
      transform: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
        return this;
      },
      transition: function (t) {
        for (let e = 0; e < this.length; e += 1)
          this[e].style.transitionDuration =
            "string" != typeof t ? t + "ms" : t;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        let [s, a, n, r] = t;
        function o(e) {
          var i = e.target;
          if (i) {
            var s = e.target.dom7EventData || [];
            if ((s.indexOf(e) < 0 && s.unshift(e), P(i).is(a))) n.apply(i, s);
            else {
              let t = P(i).parents();
              for (let e = 0; e < t.length; e += 1)
                P(t[e]).is(a) && n.apply(t[e], s);
            }
          }
        }
        function l(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof t[1] && (([s, n, r] = t), (a = void 0)),
          (r = r || !1);
        var d = s.split(" ");
        let c;
        for (let e = 0; e < this.length; e += 1) {
          let t = this[e];
          if (a)
            for (c = 0; c < d.length; c += 1) {
              let e = d[c];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: o }),
                t.addEventListener(e, o, r);
            }
          else
            for (c = 0; c < d.length; c += 1) {
              let e = d[c];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: l }),
                t.addEventListener(e, l, r);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        let [s, n, r, o] = t;
        "function" == typeof t[1] && (([s, r, o] = t), (n = void 0)),
          (o = o || !1);
        var l = s.split(" ");
        for (let e = 0; e < l.length; e += 1) {
          let a = l[e];
          for (let e = 0; e < this.length; e += 1) {
            let i = this[e],
              s;
            if (
              (!n && i.dom7Listeners
                ? (s = i.dom7Listeners[a])
                : n && i.dom7LiveListeners && (s = i.dom7LiveListeners[a]),
              s && s.length)
            )
              for (let t = s.length - 1; 0 <= t; --t) {
                let e = s[t];
                ((r && e.listener === r) ||
                  (r &&
                    e.listener &&
                    e.listener.dom7proxy &&
                    e.listener.dom7proxy === r) ||
                  !r) &&
                  (i.removeEventListener(a, e.proxyListener, o),
                  s.splice(t, 1));
              }
          }
        }
        return this;
      },
      trigger: function () {
        for (
          var s = D(), e = arguments.length, a = new Array(e), t = 0;
          t < e;
          t++
        )
          a[t] = arguments[t];
        let n = a[0].split(" "),
          r = a[1];
        for (let e = 0; e < n.length; e += 1) {
          let i = n[e];
          for (let e = 0; e < this.length; e += 1) {
            let t = this[e];
            if (s.CustomEvent) {
              let e = new s.CustomEvent(i, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              });
              (t.dom7EventData = a.filter((e, t) => 0 < t)),
                t.dispatchEvent(e),
                (t.dom7EventData = []),
                delete t.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (i) {
        let s = this;
        return (
          i &&
            s.on("transitionend", function e(t) {
              t.target === this && (i.call(this, t), s.off("transitionend", e));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (0 < this.length) {
          if (e) {
            let e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (0 < this.length) {
          if (e) {
            let e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = D();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        var e, t, i, s, a, n;
        return 0 < this.length
          ? ((n = D()),
            (s = T()),
            (t = (e = this[0]).getBoundingClientRect()),
            (s = s.body),
            (i = e.clientTop || s.clientTop || 0),
            (s = e.clientLeft || s.clientLeft || 0),
            (a = e === n ? n.scrollY : e.scrollTop),
            (n = e === n ? n.scrollX : e.scrollLeft),
            { top: t.top + a - i, left: t.left + n - s })
          : null;
      },
      css: function (t, e) {
        var i = D();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof t) {
            for (s = 0; s < this.length; s += 1)
              for (let e in t) this[s].style[e] = t[e];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(t);
        }
        if (2 === arguments.length && "string" == typeof t)
          for (s = 0; s < this.length; s += 1) this[s].style[t] = e;
        return this;
      },
      each: function (i) {
        return (
          i &&
            this.forEach((e, t) => {
              i.apply(e, [e, t]);
            }),
          this
        );
      },
      html: function (t) {
        if (void 0 === t) return this[0] ? this[0].innerHTML : null;
        for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
        return this;
      },
      text: function (t) {
        if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
        for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
        return this;
      },
      is: function (e) {
        var t = D(),
          i = T(),
          s = this[0];
        let a, n;
        if (s && void 0 !== e)
          if ("string" == typeof e) {
            if (s.matches) return s.matches(e);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
            if (s.msMatchesSelector) return s.msMatchesSelector(e);
            for (a = P(e), n = 0; n < a.length; n += 1)
              if (a[n] === s) return !0;
          } else {
            if (e === i) return s === i;
            if (e === t) return s === t;
            if (e.nodeType || e instanceof r)
              for (a = e.nodeType ? [e] : e, n = 0; n < a.length; n += 1)
                if (a[n] === s) return !0;
          }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        var t;
        return void 0 === e
          ? this
          : P(
              (t = this.length) - 1 < e
                ? []
                : e < 0
                ? (t = t + e) < 0
                  ? []
                  : [this[t]]
                : [this[e]]
            );
      },
      append: function () {
        var i,
          s = T();
        for (let e = 0; e < arguments.length; e += 1) {
          i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
          for (let t = 0; t < this.length; t += 1)
            if ("string" == typeof i) {
              let e = s.createElement("div");
              for (e.innerHTML = i; e.firstChild; )
                this[t].appendChild(e.firstChild);
            } else if (i instanceof r)
              for (let e = 0; e < i.length; e += 1) this[t].appendChild(i[e]);
            else this[t].appendChild(i);
        }
        return this;
      },
      prepend: function (t) {
        var i = T();
        let s, a;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof t) {
            let e = i.createElement("div");
            for (e.innerHTML = t, a = e.childNodes.length - 1; 0 <= a; --a)
              this[s].insertBefore(e.childNodes[a], this[s].childNodes[0]);
          } else if (t instanceof r)
            for (a = 0; a < t.length; a += 1)
              this[s].insertBefore(t[a], this[s].childNodes[0]);
          else this[s].insertBefore(t, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return 0 < this.length
          ? e
            ? this[0].nextElementSibling && P(this[0].nextElementSibling).is(e)
              ? P([this[0].nextElementSibling])
              : P([])
            : this[0].nextElementSibling
            ? P([this[0].nextElementSibling])
            : P([])
          : P([]);
      },
      nextAll: function (e) {
        var t = [];
        let i = this[0];
        if (!i) return P([]);
        for (; i.nextElementSibling; ) {
          var s = i.nextElementSibling;
          (e && !P(s).is(e)) || t.push(s), (i = s);
        }
        return P(t);
      },
      prev: function (e) {
        var t;
        return 0 < this.length
          ? ((t = this[0]),
            e
              ? t.previousElementSibling && P(t.previousElementSibling).is(e)
                ? P([t.previousElementSibling])
                : P([])
              : t.previousElementSibling
              ? P([t.previousElementSibling])
              : P([]))
          : P([]);
      },
      prevAll: function (e) {
        var t = [];
        let i = this[0];
        if (!i) return P([]);
        for (; i.previousElementSibling; ) {
          var s = i.previousElementSibling;
          (e && !P(s).is(e)) || t.push(s), (i = s);
        }
        return P(t);
      },
      parent: function (t) {
        var i = [];
        for (let e = 0; e < this.length; e += 1)
          null === this[e].parentNode ||
            (t && !P(this[e].parentNode).is(t)) ||
            i.push(this[e].parentNode);
        return P(i);
      },
      parents: function (i) {
        var s = [];
        for (let t = 0; t < this.length; t += 1) {
          let e = this[t].parentNode;
          for (; e; ) (i && !P(e).is(i)) || s.push(e), (e = e.parentNode);
        }
        return P(s);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? P([]) : (t = t.is(e) ? t : t.parents(e).eq(0));
      },
      find: function (t) {
        var i = [];
        for (let e = 0; e < this.length; e += 1) {
          var s = this[e].querySelectorAll(t);
          for (let e = 0; e < s.length; e += 1) i.push(s[e]);
        }
        return P(i);
      },
      children: function (t) {
        var i = [];
        for (let e = 0; e < this.length; e += 1) {
          var s = this[e].children;
          for (let e = 0; e < s.length; e += 1)
            (t && !P(s[e]).is(t)) || i.push(s[e]);
        }
        return P(i);
      },
      filter: function (e) {
        return P(o(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    function E(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function v() {
      return Date.now();
    }
    function A(e, t) {
      void 0 === t && (t = "x");
      var i = D();
      let s, a, n;
      e = ((e) => {
        var t = D();
        let i;
        return (i =
          (i =
            !(i = t.getComputedStyle ? t.getComputedStyle(e, null) : i) &&
            e.currentStyle
              ? e.currentStyle
              : i) || e.style);
      })(e);
      return (
        i.WebKitCSSMatrix
          ? (6 < (a = e.transform || e.webkitTransform).split(",").length &&
              (a = a
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (n = new i.WebKitCSSMatrix("none" === a ? "" : a)))
          : ((n =
              e.MozTransform ||
              e.OTransform ||
              e.MsTransform ||
              e.msTransform ||
              e.transform ||
              e
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = n.toString().split(","))),
        "x" === t &&
          (a = i.WebKitCSSMatrix
            ? n.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        (a =
          "y" === t
            ? i.WebKitCSSMatrix
              ? n.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])
            : a) || 0
      );
    }
    function l(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function f(e) {
      let i = Object(arguments.length <= 0 ? void 0 : e),
        t = ["__proto__", "constructor", "prototype"];
      for (let e = 1; e < arguments.length; e += 1) {
        var s = e < 0 || arguments.length <= e ? void 0 : arguments[e];
        if (
          null != s &&
          ((o = s),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? o instanceof HTMLElement
            : o && (1 === o.nodeType || 11 === o.nodeType)))
        ) {
          var a = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
          for (let e = 0, t = a.length; e < t; e += 1) {
            var n = a[e],
              r = Object.getOwnPropertyDescriptor(s, n);
            void 0 !== r &&
              r.enumerable &&
              (l(i[n]) && l(s[n])
                ? s[n].__swiper__
                  ? (i[n] = s[n])
                  : f(i[n], s[n])
                : l(i[n]) || !l(s[n]) || ((i[n] = {}), s[n].__swiper__)
                ? (i[n] = s[n])
                : f(i[n], s[n]));
          }
        }
      }
      var o;
      return i;
    }
    function C(e, t, i) {
      e.style.setProperty(t, i);
    }
    function y(e) {
      let { swiper: i, targetPosition: s, side: a } = e,
        n = D(),
        r = -i.translate,
        o,
        l = null,
        d = i.params.speed,
        c =
          ((i.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(i.cssModeFrameID),
          s > r ? "next" : "prev"),
        u = (e, t) => ("next" === c && t <= e) || ("prev" === c && e <= t),
        p = () => {
          (o = new Date().getTime()), null === l && (l = o);
          var e = Math.max(Math.min((o - l) / d, 1), 0),
            e = 0.5 - Math.cos(e * Math.PI) / 2;
          let t = r + e * (s - r);
          u(t, s) && (t = s),
            i.wrapperEl.scrollTo({ [a]: t }),
            u(t, s)
              ? ((i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [a]: t });
                }),
                n.cancelAnimationFrame(i.cssModeFrameID))
              : (i.cssModeFrameID = n.requestAnimationFrame(p));
        };
      p();
    }
    let e, d, c;
    function p() {
      return (e =
        e ||
        (() => {
          let i = D(),
            e = T();
          return {
            smoothScroll:
              e.documentElement && "scrollBehavior" in e.documentElement.style,
            touch: !!(
              "ontouchstart" in i ||
              (i.DocumentTouch && e instanceof i.DocumentTouch)
            ),
            passiveListener: (() => {
              let e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get() {
                    e = !0;
                  },
                });
                i.addEventListener("testPassiveListener", null, t);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in i,
          };
        })());
    }
    function V(u) {
      return (
        void 0 === u && (u = {}),
        (d =
          d ||
          (() => {
            var e = (void 0 === u ? {} : u).userAgent,
              t = p(),
              i = (n = D()).navigator.platform,
              e = e || n.navigator.userAgent,
              s = { ios: !1, android: !1 },
              a = n.screen.width,
              n = n.screen.height,
              r = e.match(/(Android);?[\s\/]+([\d.]+)?/);
            let o = e.match(/(iPad).*OS\s([\d_]+)/);
            var l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
              d = !o && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              c = "Win32" === i,
              i = "MacIntel" === i;
            return (
              !o &&
                i &&
                t.touch &&
                0 <=
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(a + "x" + n) &&
                (o = (o = e.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]),
              r && !c && ((s.os = "android"), (s.android = !0)),
              (o || d || l) && ((s.os = "ios"), (s.ios = !0)),
              s
            );
          })())
      );
    }
    function B() {
      return (c =
        c ||
        (() => {
          let e = D();
          return {
            isSafari:
              0 <=
                (t = e.navigator.userAgent.toLowerCase()).indexOf("safari") &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
          var t;
        })());
    }
    function u(e) {
      var { swiper: e, runCallbacks: t, direction: i, step: s } = e,
        { activeIndex: a, previousIndex: n } = e;
      let r = i;
      if (
        ((r = r || (n < a ? "next" : a < n ? "prev" : "reset")),
        e.emit("transition" + s),
        t && a !== n)
      ) {
        if ("reset" === r) return e.emit("slideResetTransition" + s);
        e.emit("slideChangeTransition" + s),
          "next" === r
            ? e.emit("slideNextTransition" + s)
            : e.emit("slidePrevTransition" + s);
      }
    }
    function h() {
      var e,
        t,
        i = this,
        { params: s, el: a } = i;
      (a && 0 === a.offsetWidth) ||
        (s.breakpoints && i.setBreakpoint(),
        ({ allowSlideNext: a, allowSlidePrev: e, snapGrid: t } = i),
        (i.allowSlideNext = !0),
        (i.allowSlidePrev = !0),
        i.updateSize(),
        i.updateSlides(),
        i.updateSlidesClasses(),
        ("auto" === s.slidesPerView || 1 < s.slidesPerView) &&
        i.isEnd &&
        !i.isBeginning &&
        !i.params.centeredSlides
          ? i.slideTo(i.slides.length - 1, 0, !1, !0)
          : i.slideTo(i.activeIndex, 0, !1, !0),
        i.autoplay &&
          i.autoplay.running &&
          i.autoplay.paused &&
          i.autoplay.run(),
        (i.allowSlidePrev = e),
        (i.allowSlideNext = a),
        i.params.watchOverflow && t !== i.snapGrid && i.checkOverflow());
    }
    Object.keys(i).forEach((e) => {
      Object.defineProperty(P.fn, e, { value: i[e], writable: !0 });
    });
    let m = !1;
    function N() {}
    let g = (t, e) => {
        var i = T(),
          {
            params: s,
            touchEvents: a,
            el: n,
            wrapperEl: r,
            device: o,
            support: l,
          } = t,
          d = !!s.nested,
          c = "on" === e ? "addEventListener" : "removeEventListener";
        if (l.touch) {
          let e = !(
            "touchstart" !== a.start ||
            !l.passiveListener ||
            !s.passiveListeners
          ) && { passive: !0, capture: !1 };
          n[c](a.start, t.onTouchStart, e),
            n[c](
              a.move,
              t.onTouchMove,
              l.passiveListener ? { passive: !1, capture: d } : d
            ),
            n[c](a.end, t.onTouchEnd, e),
            a.cancel && n[c](a.cancel, t.onTouchEnd, e);
        } else
          n[c](a.start, t.onTouchStart, !1),
            i[c](a.move, t.onTouchMove, d),
            i[c](a.end, t.onTouchEnd, !1);
        (s.preventClicks || s.preventClicksPropagation) &&
          n[c]("click", t.onClick, !0),
          s.cssMode && r[c]("scroll", t.onScroll),
          s.updateOnWindowResize
            ? t[e](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                h,
                !0
              )
            : t[e]("observerUpdate", h, !0);
      },
      q = {
        attachEvents: function () {
          var e = this,
            t = T(),
            { params: i, support: s } = e;
          (e.onTouchStart = function (e) {
            var a = this,
              n = T(),
              t = D(),
              r = a.touchEventsData,
              { params: o, touches: l, enabled: d } = a;
            if (d && (!a.animating || !o.preventInteractionOnTransition)) {
              !a.animating && o.cssMode && o.loop && a.loopFix();
              let i = e,
                s = P((i = i.originalEvent ? i.originalEvent : i).target);
              if (
                ("wrapper" !== o.touchEventsTarget ||
                  s.closest(a.wrapperEl).length) &&
                ((r.isTouchEvent = "touchstart" === i.type),
                r.isTouchEvent || !("which" in i) || 3 !== i.which) &&
                !(
                  (!r.isTouchEvent && "button" in i && 0 < i.button) ||
                  (r.isTouched && r.isMoved)
                )
              ) {
                var d = !!o.noSwipingClass && "" !== o.noSwipingClass,
                  c = e.composedPath ? e.composedPath() : e.path,
                  d =
                    (d && i.target && i.target.shadowRoot && c && (s = P(c[0])),
                    o.noSwipingSelector || "." + o.noSwipingClass),
                  c = !(!i.target || !i.target.shadowRoot);
                if (
                  o.noSwiping &&
                  (c
                    ? (function (s, e) {
                        return (function e(t) {
                          var i;
                          return t &&
                            t !== T() &&
                            t !== D() &&
                            ((i = (t = t.assignedSlot
                              ? t.assignedSlot
                              : t).closest(s)) ||
                              t.getRootNode)
                            ? i || e(t.getRootNode().host)
                            : null;
                        })((e = void 0 === e ? this : e));
                      })(d, s[0])
                    : s.closest(d)[0])
                )
                  a.allowClick = !0;
                else if (!o.swipeHandler || s.closest(o.swipeHandler)[0]) {
                  (l.currentX = (
                    "touchstart" === i.type ? i.targetTouches[0] : i
                  ).pageX),
                    (l.currentY = (
                      "touchstart" === i.type ? i.targetTouches[0] : i
                    ).pageY);
                  var c = l.currentX,
                    d = l.currentY,
                    u = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                    p = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                  if (u && (c <= p || c >= t.innerWidth - p)) {
                    if ("prevent" !== u) return;
                    e.preventDefault();
                  }
                  if (
                    (Object.assign(r, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0,
                    }),
                    (l.startX = c),
                    (l.startY = d),
                    (r.touchStartTime = v()),
                    (a.allowClick = !0),
                    a.updateSize(),
                    (a.swipeDirection = void 0),
                    0 < o.threshold && (r.allowThresholdMove = !1),
                    "touchstart" !== i.type)
                  ) {
                    let e = !0,
                      t =
                        (s.is(r.focusableElements) &&
                          ((e = !1), "SELECT" === s[0].nodeName) &&
                          (r.isTouched = !1),
                        n.activeElement &&
                          P(n.activeElement).is(r.focusableElements) &&
                          n.activeElement !== s[0] &&
                          n.activeElement.blur(),
                        e && a.allowTouchMove && o.touchStartPreventDefault);
                    (!o.touchStartForcePreventDefault && !t) ||
                      s[0].isContentEditable ||
                      i.preventDefault();
                  }
                  a.params.freeMode &&
                    a.params.freeMode.enabled &&
                    a.freeMode &&
                    a.animating &&
                    !o.cssMode &&
                    a.freeMode.onTouchStart(),
                    a.emit("touchStart", i);
                }
              }
            }
          }.bind(e)),
            (e.onTouchMove = function (e) {
              var a = T(),
                n = this,
                r = n.touchEventsData,
                { params: o, touches: l, rtlTranslate: d, enabled: t } = n;
              if (t) {
                let s = e;
                if ((s.originalEvent && (s = s.originalEvent), r.isTouched)) {
                  if (!r.isTouchEvent || "touchmove" === s.type) {
                    (t =
                      "touchmove" === s.type &&
                      s.targetTouches &&
                      (s.targetTouches[0] || s.changedTouches[0])),
                      (e = ("touchmove" === s.type ? t : s).pageX),
                      (t = ("touchmove" === s.type ? t : s).pageY);
                    if (s.preventedByNestedSwiper)
                      (l.startX = e), (l.startY = t);
                    else if (n.allowTouchMove) {
                      if (r.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                        if (n.isVertical()) {
                          if (
                            (t < l.startY && n.translate <= n.maxTranslate()) ||
                            (t > l.startY && n.translate >= n.minTranslate())
                          )
                            return (r.isTouched = !1), void (r.isMoved = !1);
                        } else if (
                          (e < l.startX && n.translate <= n.maxTranslate()) ||
                          (e > l.startX && n.translate >= n.minTranslate())
                        )
                          return;
                      if (
                        r.isTouchEvent &&
                        a.activeElement &&
                        s.target === a.activeElement &&
                        P(s.target).is(r.focusableElements)
                      )
                        (r.isMoved = !0), (n.allowClick = !1);
                      else if (
                        (r.allowTouchCallbacks && n.emit("touchMove", s),
                        !(s.targetTouches && 1 < s.targetTouches.length))
                      ) {
                        (l.currentX = e), (l.currentY = t);
                        var i,
                          a = l.currentX - l.startX,
                          c = l.currentY - l.startY;
                        if (
                          !(
                            n.params.threshold &&
                            Math.sqrt(a ** 2 + c ** 2) < n.params.threshold
                          )
                        )
                          if (
                            (void 0 === r.isScrolling &&
                              ((n.isHorizontal() && l.currentY === l.startY) ||
                              (n.isVertical() && l.currentX === l.startX)
                                ? (r.isScrolling = !1)
                                : 25 <= a * a + c * c &&
                                  ((i =
                                    (180 *
                                      Math.atan2(Math.abs(c), Math.abs(a))) /
                                    Math.PI),
                                  (r.isScrolling = n.isHorizontal()
                                    ? i > o.touchAngle
                                    : 90 - i > o.touchAngle))),
                            r.isScrolling && n.emit("touchMoveOpposite", s),
                            void 0 !== r.startMoving ||
                              (l.currentX === l.startX &&
                                l.currentY === l.startY) ||
                              (r.startMoving = !0),
                            r.isScrolling)
                          )
                            r.isTouched = !1;
                          else if (r.startMoving) {
                            (n.allowClick = !1),
                              !o.cssMode && s.cancelable && s.preventDefault(),
                              o.touchMoveStopPropagation &&
                                !o.nested &&
                                s.stopPropagation(),
                              r.isMoved ||
                                (o.loop && !o.cssMode && n.loopFix(),
                                (r.startTranslate = n.getTranslate()),
                                n.setTransition(0),
                                n.animating &&
                                  n.$wrapperEl.trigger(
                                    "webkitTransitionEnd transitionend"
                                  ),
                                (r.allowMomentumBounce = !1),
                                !o.grabCursor ||
                                  (!0 !== n.allowSlideNext &&
                                    !0 !== n.allowSlidePrev) ||
                                  n.setGrabCursor(!0),
                                n.emit("sliderFirstMove", s)),
                              n.emit("sliderMove", s),
                              (r.isMoved = !0);
                            let e = n.isHorizontal() ? a : c,
                              t =
                                ((l.diff = e),
                                (e *= o.touchRatio),
                                d && (e = -e),
                                (n.swipeDirection = 0 < e ? "prev" : "next"),
                                (r.currentTranslate = e + r.startTranslate),
                                !0),
                              i = o.resistanceRatio;
                            if (
                              (o.touchReleaseOnEdges && (i = 0),
                              0 < e && r.currentTranslate > n.minTranslate()
                                ? ((t = !1),
                                  o.resistance &&
                                    (r.currentTranslate =
                                      n.minTranslate() -
                                      1 +
                                      (-n.minTranslate() +
                                        r.startTranslate +
                                        e) **
                                        i))
                                : e < 0 &&
                                  r.currentTranslate < n.maxTranslate() &&
                                  ((t = !1), o.resistance) &&
                                  (r.currentTranslate =
                                    n.maxTranslate() +
                                    1 -
                                    (n.maxTranslate() - r.startTranslate - e) **
                                      i),
                              t && (s.preventedByNestedSwiper = !0),
                              !n.allowSlideNext &&
                                "next" === n.swipeDirection &&
                                r.currentTranslate < r.startTranslate &&
                                (r.currentTranslate = r.startTranslate),
                              !n.allowSlidePrev &&
                                "prev" === n.swipeDirection &&
                                r.currentTranslate > r.startTranslate &&
                                (r.currentTranslate = r.startTranslate),
                              n.allowSlidePrev ||
                                n.allowSlideNext ||
                                (r.currentTranslate = r.startTranslate),
                              0 < o.threshold)
                            ) {
                              if (
                                !(
                                  Math.abs(e) > o.threshold ||
                                  r.allowThresholdMove
                                )
                              )
                                return void (r.currentTranslate =
                                  r.startTranslate);
                              if (!r.allowThresholdMove)
                                return (
                                  (r.allowThresholdMove = !0),
                                  (l.startX = l.currentX),
                                  (l.startY = l.currentY),
                                  (r.currentTranslate = r.startTranslate),
                                  void (l.diff = n.isHorizontal()
                                    ? l.currentX - l.startX
                                    : l.currentY - l.startY)
                                );
                            }
                            o.followFinger &&
                              !o.cssMode &&
                              (((o.freeMode &&
                                o.freeMode.enabled &&
                                n.freeMode) ||
                                o.watchSlidesProgress) &&
                                (n.updateActiveIndex(),
                                n.updateSlidesClasses()),
                              n.params.freeMode &&
                                o.freeMode.enabled &&
                                n.freeMode &&
                                n.freeMode.onTouchMove(),
                              n.updateProgress(r.currentTranslate),
                              n.setTranslate(r.currentTranslate));
                          }
                      }
                    } else
                      P(s.target).is(r.focusableElements) ||
                        (n.allowClick = !1),
                        r.isTouched &&
                          (Object.assign(l, {
                            startX: e,
                            startY: t,
                            currentX: e,
                            currentY: t,
                          }),
                          (r.touchStartTime = v()));
                  }
                } else
                  r.startMoving &&
                    r.isScrolling &&
                    n.emit("touchMoveOpposite", s);
              }
            }.bind(e)),
            (e.onTouchEnd = function (n) {
              let r = this,
                t = r.touchEventsData,
                {
                  params: o,
                  touches: e,
                  rtlTranslate: i,
                  slidesGrid: l,
                  enabled: s,
                } = r;
              if (s) {
                let a = n;
                if (
                  (a.originalEvent && (a = a.originalEvent),
                  t.allowTouchCallbacks && r.emit("touchEnd", a),
                  (t.allowTouchCallbacks = !1),
                  t.isTouched)
                ) {
                  o.grabCursor &&
                    t.isMoved &&
                    t.isTouched &&
                    (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
                    r.setGrabCursor(!1);
                  var d,
                    c = v(),
                    u = c - t.touchStartTime;
                  if (r.allowClick) {
                    let e = a.path || (a.composedPath && a.composedPath());
                    r.updateClickedSlide((e && e[0]) || a.target),
                      r.emit("tap click", a),
                      u < 300 &&
                        c - t.lastClickTime < 300 &&
                        r.emit("doubleTap doubleClick", a);
                  }
                  if (
                    ((t.lastClickTime = v()),
                    E(() => {
                      r.destroyed || (r.allowClick = !0);
                    }),
                    t.isTouched &&
                      t.isMoved &&
                      r.swipeDirection &&
                      0 !== e.diff &&
                      t.currentTranslate !== t.startTranslate)
                  ) {
                    if (
                      ((t.isTouched = !1),
                      (t.isMoved = !1),
                      (t.startMoving = !1),
                      (d = o.followFinger
                        ? i
                          ? r.translate
                          : -r.translate
                        : -t.currentTranslate),
                      !o.cssMode)
                    )
                      if (r.params.freeMode && o.freeMode.enabled)
                        r.freeMode.onTouchEnd({ currentPos: d });
                      else {
                        let i = 0,
                          s = r.slidesSizesGrid[0];
                        for (
                          let t = 0;
                          t < l.length;
                          t += t < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
                        ) {
                          let e =
                            t < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
                          void 0 !== l[t + e]
                            ? d >= l[t] &&
                              d < l[t + e] &&
                              ((i = t), (s = l[t + e] - l[t]))
                            : d >= l[t] &&
                              ((i = t),
                              (s = l[l.length - 1] - l[l.length - 2]));
                        }
                        let e = null,
                          t = null;
                        o.rewind &&
                          (r.isBeginning
                            ? (t =
                                r.params.virtual &&
                                r.params.virtual.enabled &&
                                r.virtual
                                  ? r.virtual.slides.length - 1
                                  : r.slides.length - 1)
                            : r.isEnd && (e = 0));
                        (n = (d - l[i]) / s),
                          (c =
                            i < o.slidesPerGroupSkip - 1
                              ? 1
                              : o.slidesPerGroup);
                        u > o.longSwipesMs
                          ? o.longSwipes
                            ? ("next" === r.swipeDirection &&
                                (n >= o.longSwipesRatio
                                  ? r.slideTo(o.rewind && r.isEnd ? e : i + c)
                                  : r.slideTo(i)),
                              "prev" === r.swipeDirection &&
                                (n > 1 - o.longSwipesRatio
                                  ? r.slideTo(i + c)
                                  : null !== t &&
                                    n < 0 &&
                                    Math.abs(n) > o.longSwipesRatio
                                  ? r.slideTo(t)
                                  : r.slideTo(i)))
                            : r.slideTo(r.activeIndex)
                          : o.shortSwipes
                          ? !r.navigation ||
                            (a.target !== r.navigation.nextEl &&
                              a.target !== r.navigation.prevEl)
                            ? ("next" === r.swipeDirection &&
                                r.slideTo(null !== e ? e : i + c),
                              "prev" === r.swipeDirection &&
                                r.slideTo(null !== t ? t : i))
                            : a.target === r.navigation.nextEl
                            ? r.slideTo(i + c)
                            : r.slideTo(i)
                          : r.slideTo(r.activeIndex);
                      }
                  } else
                    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
                } else
                  t.isMoved && o.grabCursor && r.setGrabCursor(!1),
                    (t.isMoved = !1),
                    (t.startMoving = !1);
              }
            }.bind(e)),
            i.cssMode &&
              (e.onScroll = function () {
                var e = this,
                  { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
                s &&
                  ((e.previousTranslate = e.translate),
                  e.isHorizontal()
                    ? (e.translate = -t.scrollLeft)
                    : (e.translate = -t.scrollTop),
                  0 === e.translate && (e.translate = 0),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses(),
                  (0 == (s = e.maxTranslate() - e.minTranslate())
                    ? 0
                    : (e.translate - e.minTranslate()) / s) !== e.progress &&
                    e.updateProgress(i ? -e.translate : e.translate),
                  e.emit("setTranslate", e.translate, !1));
              }.bind(e)),
            (e.onClick = function (e) {
              var t = this;
              t.enabled &&
                !t.allowClick &&
                (t.params.preventClicks && e.preventDefault(),
                t.params.preventClicksPropagation) &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation());
            }.bind(e)),
            s.touch && !m && (t.addEventListener("touchstart", N), (m = !0)),
            g(e, "on");
        },
        detachEvents: function () {
          g(this, "off");
        },
      },
      b = (e, t) => e.grid && t.grid && 1 < t.grid.rows,
      R = {
        addClasses: function () {
          var {
              classNames: e,
              params: t,
              rtl: i,
              $el: s,
              device: a,
              support: n,
            } = this,
            n = ((e, i) => {
              let s = [];
              return (
                e.forEach((t) => {
                  "object" == typeof t
                    ? Object.keys(t).forEach((e) => {
                        t[e] && s.push(i + e);
                      })
                    : "string" == typeof t && s.push(i + t);
                }),
                s
              );
            })(
              [
                "initialized",
                t.direction,
                { "pointer-events": !n.touch },
                { "free-mode": this.params.freeMode && t.freeMode.enabled },
                { autoheight: t.autoHeight },
                { rtl: i },
                { grid: t.grid && 1 < t.grid.rows },
                {
                  "grid-column":
                    t.grid && 1 < t.grid.rows && "column" === t.grid.fill,
                },
                { android: a.android },
                { ios: a.ios },
                { "css-mode": t.cssMode },
                { centered: t.cssMode && t.centeredSlides },
                { "watch-progress": t.watchSlidesProgress },
              ],
              t.containerModifierClass
            );
          e.push(...n),
            s.addClass([...e].join(" ")),
            this.emitContainerClasses();
        },
        removeClasses: function () {
          var { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
    var w = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    let x = {
        eventsEmitter: {
          on(e, i, s) {
            let a = this;
            if (a.eventsListeners && !a.destroyed && "function" == typeof i) {
              let t = s ? "unshift" : "push";
              e.split(" ").forEach((e) => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                  a.eventsListeners[e][t](i);
              });
            }
            return a;
          },
          once(s, a, e) {
            let n = this;
            return !n.eventsListeners || n.destroyed || "function" != typeof a
              ? n
              : ((r.__emitterProxy = a), n.on(s, r, e));
            function r() {
              n.off(s, r), r.__emitterProxy && delete r.__emitterProxy;
              for (
                var e = arguments.length, t = new Array(e), i = 0;
                i < e;
                i++
              )
                t[i] = arguments[i];
              a.apply(n, t);
            }
          },
          onAny(e, t) {
            var i = this;
            return (
              i.eventsListeners &&
                !i.destroyed &&
                "function" == typeof e &&
                ((t = t ? "unshift" : "push"),
                i.eventsAnyListeners.indexOf(e) < 0) &&
                i.eventsAnyListeners[t](e),
              i
            );
          },
          offAny(e) {
            var t = this;
            return (
              t.eventsListeners &&
                !t.destroyed &&
                t.eventsAnyListeners &&
                0 <= (e = t.eventsAnyListeners.indexOf(e)) &&
                t.eventsAnyListeners.splice(e, 1),
              t
            );
          },
          off(e, s) {
            let a = this;
            return (
              !a.eventsListeners ||
                a.destroyed ||
                (a.eventsListeners &&
                  e.split(" ").forEach((i) => {
                    void 0 === s
                      ? (a.eventsListeners[i] = [])
                      : a.eventsListeners[i] &&
                        a.eventsListeners[i].forEach((e, t) => {
                          (e === s ||
                            (e.__emitterProxy && e.__emitterProxy === s)) &&
                            a.eventsListeners[i].splice(t, 1);
                        });
                  })),
              a
            );
          },
          emit() {
            let a = this;
            if (a.eventsListeners && !a.destroyed && a.eventsListeners) {
              let e, i, s;
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              (s =
                "string" == typeof n[0] || Array.isArray(n[0])
                  ? ((e = n[0]), (i = n.slice(1, n.length)), a)
                  : ((e = n[0].events), (i = n[0].data), n[0].context || a)),
                i.unshift(s),
                (Array.isArray(e) ? e : e.split(" ")).forEach((t) => {
                  a.eventsAnyListeners &&
                    a.eventsAnyListeners.length &&
                    a.eventsAnyListeners.forEach((e) => {
                      e.apply(s, [t, ...i]);
                    }),
                    a.eventsListeners &&
                      a.eventsListeners[t] &&
                      a.eventsListeners[t].forEach((e) => {
                        e.apply(s, i);
                      });
                });
            }
            return a;
          },
        },
        update: {
          updateSize: function () {
            var e = this;
            let t, i;
            var s = e.$el;
            (t = null != e.params.width ? e.params.width : s[0].clientWidth),
              (i =
                null != e.params.height ? e.params.height : s[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === i && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(s.css("padding-left") || 0, 10) -
                  parseInt(s.css("padding-right") || 0, 10)),
                (i =
                  i -
                  parseInt(s.css("padding-top") || 0, 10) -
                  parseInt(s.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(i) && (i = 0),
                Object.assign(e, {
                  width: t,
                  height: i,
                  size: e.isHorizontal() ? t : i,
                }));
          },
          updateSlides: function () {
            let a = this;
            function n(e) {
              return a.isHorizontal()
                ? e
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[e];
            }
            function d(e, t) {
              return parseFloat(e.getPropertyValue(n(t)) || 0);
            }
            let r = a.params,
              { $wrapperEl: e, size: c, rtlTranslate: t, wrongRTL: i } = a,
              s = a.virtual && r.virtual.enabled,
              o = (s ? a.virtual : a).slides.length,
              u = e.children("." + a.params.slideClass),
              p = (s ? a.virtual.slides : u).length,
              h = [],
              f = [],
              m = [],
              g = r.slidesOffsetBefore,
              v =
                ("function" == typeof g && (g = r.slidesOffsetBefore.call(a)),
                r.slidesOffsetAfter);
            "function" == typeof v && (v = r.slidesOffsetAfter.call(a));
            var y = a.snapGrid.length,
              b = a.slidesGrid.length;
            let w = r.spaceBetween,
              x = -g,
              _ = 0,
              S = 0;
            if (void 0 !== c) {
              "string" == typeof w &&
                0 <= w.indexOf("%") &&
                (w = (parseFloat(w.replace("%", "")) / 100) * c),
                (a.virtualSize = -w),
                t
                  ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                  : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                r.centeredSlides &&
                  r.cssMode &&
                  (C(a.wrapperEl, "--swiper-centered-offset-before", ""),
                  C(a.wrapperEl, "--swiper-centered-offset-after", ""));
              var T = r.grid && 1 < r.grid.rows && a.grid;
              let l;
              T && a.grid.initSlides(p);
              var E =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                0 <
                  Object.keys(r.breakpoints).filter(
                    (e) => void 0 !== r.breakpoints[e].slidesPerView
                  ).length;
              for (let s = 0; s < p; s += 1) {
                l = 0;
                let o = u.eq(s);
                if (
                  (T && a.grid.updateSlide(s, o, p, n),
                  "none" !== o.css("display"))
                ) {
                  if ("auto" === r.slidesPerView) {
                    E && (u[s].style[n("width")] = "");
                    let t = getComputedStyle(o[0]),
                      e = o[0].style.transform,
                      i = o[0].style.webkitTransform;
                    if (
                      (e && (o[0].style.transform = "none"),
                      i && (o[0].style.webkitTransform = "none"),
                      r.roundLengths)
                    )
                      l = a.isHorizontal()
                        ? o.outerWidth(!0)
                        : o.outerHeight(!0);
                    else {
                      let i = d(t, "width"),
                        s = d(t, "padding-left"),
                        a = d(t, "padding-right"),
                        n = d(t, "margin-left"),
                        r = d(t, "margin-right"),
                        e = t.getPropertyValue("box-sizing");
                      if (e && "border-box" === e) l = i + n + r;
                      else {
                        let { clientWidth: e, offsetWidth: t } = o[0];
                        l = i + s + a + n + r + (t - e);
                      }
                    }
                    e && (o[0].style.transform = e),
                      i && (o[0].style.webkitTransform = i),
                      r.roundLengths && (l = Math.floor(l));
                  } else
                    (l = (c - (r.slidesPerView - 1) * w) / r.slidesPerView),
                      r.roundLengths && (l = Math.floor(l)),
                      u[s] && (u[s].style[n("width")] = l + "px");
                  u[s] && (u[s].swiperSlideSize = l),
                    m.push(l),
                    r.centeredSlides
                      ? ((x = x + l / 2 + _ / 2 + w),
                        0 === _ && 0 !== s && (x = x - c / 2 - w),
                        0 === s && (x = x - c / 2 - w),
                        Math.abs(x) < 0.001 && (x = 0),
                        r.roundLengths && (x = Math.floor(x)),
                        S % r.slidesPerGroup == 0 && h.push(x),
                        f.push(x))
                      : (r.roundLengths && (x = Math.floor(x)),
                        (S - Math.min(a.params.slidesPerGroupSkip, S)) %
                          a.params.slidesPerGroup ==
                          0 && h.push(x),
                        f.push(x),
                        (x = x + l + w)),
                    (a.virtualSize += l + w),
                    (_ = l),
                    (S += 1);
                }
              }
              if (
                ((a.virtualSize = Math.max(a.virtualSize, c) + v),
                t &&
                  i &&
                  ("slide" === r.effect || "coverflow" === r.effect) &&
                  e.css({ width: a.virtualSize + r.spaceBetween + "px" }),
                r.setWrapperSize &&
                  e.css({
                    [n("width")]: a.virtualSize + r.spaceBetween + "px",
                  }),
                T && a.grid.updateWrapperSize(l, h, n),
                !r.centeredSlides)
              ) {
                let i = [];
                for (let t = 0; t < h.length; t += 1) {
                  let e = h[t];
                  r.roundLengths && (e = Math.floor(e)),
                    h[t] <= a.virtualSize - c && i.push(e);
                }
                (h = i),
                  1 <
                    Math.floor(a.virtualSize - c) -
                      Math.floor(h[h.length - 1]) && h.push(a.virtualSize - c);
              }
              if ((0 === h.length && (h = [0]), 0 !== r.spaceBetween)) {
                let e = a.isHorizontal() && t ? "marginLeft" : n("marginRight");
                u.filter((e, t) => !r.cssMode || t !== u.length - 1).css({
                  [e]: w + "px",
                });
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                let t = 0,
                  i =
                    (m.forEach((e) => {
                      t += e + (r.spaceBetween || 0);
                    }),
                    (t -= r.spaceBetween) - c);
                h = h.map((e) => (e < 0 ? -g : e > i ? i + v : e));
              }
              if (r.centerInsufficientSlides) {
                let t = 0;
                if (
                  (m.forEach((e) => {
                    t += e + (r.spaceBetween || 0);
                  }),
                  (t -= r.spaceBetween) < c)
                ) {
                  let i = (c - t) / 2;
                  h.forEach((e, t) => {
                    h[t] = e - i;
                  }),
                    f.forEach((e, t) => {
                      f[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(a, {
                  slides: u,
                  snapGrid: h,
                  slidesGrid: f,
                  slidesSizesGrid: m,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                C(a.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
                  C(
                    a.wrapperEl,
                    "--swiper-centered-offset-after",
                    a.size / 2 - m[m.length - 1] / 2 + "px"
                  );
                let t = -a.snapGrid[0],
                  i = -a.slidesGrid[0];
                (a.snapGrid = a.snapGrid.map((e) => e + t)),
                  (a.slidesGrid = a.slidesGrid.map((e) => e + i));
              }
              if (
                (p !== o && a.emit("slidesLengthChange"),
                h.length !== y &&
                  (a.params.watchOverflow && a.checkOverflow(),
                  a.emit("snapGridLengthChange")),
                f.length !== b && a.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && a.updateSlidesOffset(),
                !(
                  s ||
                  r.cssMode ||
                  ("slide" !== r.effect && "fade" !== r.effect)
                ))
              ) {
                let e = r.containerModifierClass + "backface-hidden",
                  t = a.$el.hasClass(e);
                p <= r.maxBackfaceHiddenSlides
                  ? t || a.$el.addClass(e)
                  : t && a.$el.removeClass(e);
              }
            }
          },
          updateAutoHeight: function (e) {
            let i = this,
              t = [],
              s = i.virtual && i.params.virtual.enabled,
              a,
              n = 0;
            "number" == typeof e
              ? i.setTransition(e)
              : !0 === e && i.setTransition(i.params.speed);
            var r = (t) =>
              (s
                ? i.slides.filter(
                    (e) =>
                      parseInt(
                        e.getAttribute("data-swiper-slide-index"),
                        10
                      ) === t
                  )
                : i.slides.eq(t))[0];
            if ("auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
              if (i.params.centeredSlides)
                (i.visibleSlides || P([])).each((e) => {
                  t.push(e);
                });
              else
                for (a = 0; a < Math.ceil(i.params.slidesPerView); a += 1) {
                  let e = i.activeIndex + a;
                  if (e > i.slides.length && !s) break;
                  t.push(r(e));
                }
            else t.push(r(i.activeIndex));
            for (a = 0; a < t.length; a += 1)
              if (void 0 !== t[a]) {
                let e = t[a].offsetHeight;
                n = e > n ? e : n;
              }
            (!n && 0 !== n) || i.$wrapperEl.css("height", n + "px");
          },
          updateSlidesOffset: function () {
            var t = this.slides;
            for (let e = 0; e < t.length; e += 1)
              t[e].swiperSlideOffset = this.isHorizontal()
                ? t[e].offsetLeft
                : t[e].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var o = this,
              l = o.params,
              { slides: d, rtlTranslate: c, snapGrid: u } = o;
            if (0 !== d.length) {
              void 0 === d[0].swiperSlideOffset && o.updateSlidesOffset();
              let r = c ? e : -e;
              d.removeClass(l.slideVisibleClass),
                (o.visibleSlidesIndexes = []),
                (o.visibleSlides = []);
              for (let n = 0; n < d.length; n += 1) {
                var p = d[n];
                let e = p.swiperSlideOffset,
                  t =
                    (l.cssMode &&
                      l.centeredSlides &&
                      (e -= d[0].swiperSlideOffset),
                    (r + (l.centeredSlides ? o.minTranslate() : 0) - e) /
                      (p.swiperSlideSize + l.spaceBetween)),
                  i =
                    (r - u[0] + (l.centeredSlides ? o.minTranslate() : 0) - e) /
                    (p.swiperSlideSize + l.spaceBetween),
                  s = -(r - e),
                  a = s + o.slidesSizesGrid[n];
                ((0 <= s && s < o.size - 1) ||
                  (1 < a && a <= o.size) ||
                  (s <= 0 && a >= o.size)) &&
                  (o.visibleSlides.push(p),
                  o.visibleSlidesIndexes.push(n),
                  d.eq(n).addClass(l.slideVisibleClass)),
                  (p.progress = c ? -t : t),
                  (p.originalProgress = c ? -i : i);
              }
              o.visibleSlides = P(o.visibleSlides);
            }
          },
          updateProgress: function (t) {
            var i = this;
            if (void 0 === t) {
              let e = i.rtlTranslate ? -1 : 1;
              t = (i && i.translate && i.translate * e) || 0;
            }
            let e = i.params,
              s = i.maxTranslate() - i.minTranslate(),
              { progress: a, isBeginning: n, isEnd: r } = i;
            var o = n,
              l = r;
            (r =
              0 == s
                ? ((a = 0), (n = !0))
                : ((a = (t - i.minTranslate()) / s), (n = a <= 0), 1 <= a)),
              Object.assign(i, { progress: a, isBeginning: n, isEnd: r }),
              (e.watchSlidesProgress || (e.centeredSlides && e.autoHeight)) &&
                i.updateSlidesProgress(t),
              n && !o && i.emit("reachBeginning toEdge"),
              r && !l && i.emit("reachEnd toEdge"),
              ((o && !n) || (l && !r)) && i.emit("fromEdge"),
              i.emit("progress", a);
          },
          updateSlidesClasses: function () {
            var {
                slides: e,
                params: t,
                $wrapperEl: i,
                activeIndex: s,
                realIndex: a,
              } = this,
              n = this.virtual && t.virtual.enabled;
            e.removeClass(
              t.slideActiveClass +
                ` ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` +
                t.slideDuplicatePrevClass
            ),
              (n = n
                ? this.$wrapperEl.find(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]`
                  )
                : e.eq(s)).addClass(t.slideActiveClass),
              t.loop &&
                (n.hasClass(t.slideDuplicateClass)
                  ? i.children(
                      `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                    )
                  : i.children(
                      `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                    )
                ).addClass(t.slideDuplicateActiveClass);
            let r = n
                .nextAll("." + t.slideClass)
                .eq(0)
                .addClass(t.slideNextClass),
              o =
                (t.loop &&
                  0 === r.length &&
                  (r = e.eq(0)).addClass(t.slideNextClass),
                n
                  .prevAll("." + t.slideClass)
                  .eq(0)
                  .addClass(t.slidePrevClass));
            t.loop &&
              0 === o.length &&
              (o = e.eq(-1)).addClass(t.slidePrevClass),
              t.loop &&
                ((r.hasClass(t.slideDuplicateClass)
                  ? i.children(
                      `.${t.slideClass}:not(.${
                        t.slideDuplicateClass
                      })[data-swiper-slide-index="${r.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                  : i.children(
                      `.${t.slideClass}.${
                        t.slideDuplicateClass
                      }[data-swiper-slide-index="${r.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                ).addClass(t.slideDuplicateNextClass),
                (o.hasClass(t.slideDuplicateClass)
                  ? i.children(
                      `.${t.slideClass}:not(.${
                        t.slideDuplicateClass
                      })[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                  : i.children(
                      `.${t.slideClass}.${
                        t.slideDuplicateClass
                      }[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                ).addClass(t.slideDuplicatePrevClass)),
              this.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            var t = this,
              i = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: s,
                snapGrid: a,
                params: n,
                activeIndex: r,
                realIndex: o,
                snapIndex: l,
              } = t;
            let d,
              c = e;
            if (void 0 === c) {
              for (let e = 0; e < s.length; e += 1)
                void 0 !== s[e + 1]
                  ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                    ? (c = e)
                    : i >= s[e] && i < s[e + 1] && (c = e + 1)
                  : i >= s[e] && (c = e);
              n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (0 <= a.indexOf(i)) d = a.indexOf(i);
            else {
              let e = Math.min(n.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / n.slidesPerGroup);
            }
            d >= a.length && (d = a.length - 1),
              c === r
                ? d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
                : ((e = parseInt(
                    t.slides.eq(c).attr("data-swiper-slide-index") || c,
                    10
                  )),
                  Object.assign(t, {
                    snapIndex: d,
                    realIndex: e,
                    previousIndex: r,
                    activeIndex: c,
                  }),
                  t.emit("activeIndexChange"),
                  t.emit("snapIndexChange"),
                  o !== e && t.emit("realIndexChange"),
                  (t.initialized || t.params.runCallbacksOnInit) &&
                    t.emit("slideChange"));
          },
          updateClickedSlide: function (e) {
            var t = this,
              i = t.params,
              s = P(e).closest("." + i.slideClass)[0];
            let a,
              n = !1;
            if (s)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === s) {
                  (n = !0), (a = e);
                  break;
                }
            s && n
              ? ((t.clickedSlide = s),
                t.virtual && t.params.virtual.enabled
                  ? (t.clickedIndex = parseInt(
                      P(s).attr("data-swiper-slide-index"),
                      10
                    ))
                  : (t.clickedIndex = a),
                i.slideToClickedSlide &&
                  void 0 !== t.clickedIndex &&
                  t.clickedIndex !== t.activeIndex &&
                  t.slideToClickedSlide())
              : ((t.clickedSlide = void 0), (t.clickedIndex = void 0));
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var {
              params: t,
              rtlTranslate: i,
              translate: s,
              $wrapperEl: a,
            } = this;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            let n = A(a[0], e);
            return (n = i ? -n : n) || 0;
          },
          setTranslate: function (e, t) {
            var i = this,
              {
                rtlTranslate: s,
                params: a,
                $wrapperEl: n,
                wrapperEl: r,
                progress: o,
              } = i;
            let l = 0,
              d = 0;
            i.isHorizontal() ? (l = s ? -e : e) : (d = e),
              a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
              a.cssMode
                ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    i.isHorizontal() ? -l : -d)
                : a.virtualTranslate ||
                  n.transform(`translate3d(${l}px, ${d}px, 0px)`),
              (i.previousTranslate = i.translate),
              (i.translate = i.isHorizontal() ? l : d);
            s = i.maxTranslate() - i.minTranslate();
            (0 == s ? 0 : (e - i.minTranslate()) / s) !== o &&
              i.updateProgress(e),
              i.emit("setTranslate", i.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, i, s, a) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              void 0 === s && (s = !0);
            let n = this,
              { params: r, wrapperEl: o } = n;
            if (n.animating && r.preventInteractionOnTransition) return !1;
            var l = n.minTranslate(),
              d = n.maxTranslate(),
              l = s && l < e ? l : s && e < d ? d : e;
            if ((n.updateProgress(l), r.cssMode)) {
              let e = n.isHorizontal();
              if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -l;
              else {
                if (!n.support.smoothScroll)
                  return (
                    y({
                      swiper: n,
                      targetPosition: -l,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                o.scrollTo({ [e ? "left" : "top"]: -l, behavior: "smooth" });
              }
            } else
              0 === t
                ? (n.setTransition(0),
                  n.setTranslate(l),
                  i &&
                    (n.emit("beforeTransitionStart", t, a),
                    n.emit("transitionEnd")))
                : (n.setTransition(t),
                  n.setTranslate(l),
                  i &&
                    (n.emit("beforeTransitionStart", t, a),
                    n.emit("transitionStart")),
                  n.animating ||
                    ((n.animating = !0),
                    n.onTranslateToWrapperTransitionEnd ||
                      (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            n.onTranslateToWrapperTransitionEnd
                          ),
                          n.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            n.onTranslateToWrapperTransitionEnd
                          ),
                          (n.onTranslateToWrapperTransitionEnd = null),
                          delete n.onTranslateToWrapperTransitionEnd,
                          i) &&
                          n.emit("transitionEnd");
                      }),
                    n.$wrapperEl[0].addEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      n.onTranslateToWrapperTransitionEnd
                    )));
            return !0;
          },
        },
        transition: {
          setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e),
              this.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.params;
            i.cssMode ||
              (i.autoHeight && this.updateAutoHeight(),
              u({
                swiper: this,
                runCallbacks: e,
                direction: t,
                step: "Start",
              }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.params;
            (this.animating = !1),
              i.cssMode ||
                (this.setTransition(0),
                u({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "End",
                }));
          },
        },
        slide: {
          slideTo: function (t, e, i, s, a) {
            if (
              (void 0 === e && (e = this.params.speed),
              void 0 === i && (i = !0),
              "number" != typeof (t = void 0 === t ? 0 : t) &&
                "string" != typeof t)
            )
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
              );
            if ("string" == typeof t) {
              let e = parseInt(t, 10);
              if (!isFinite(e))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
                );
              t = e;
            }
            let n = this,
              r = t;
            r < 0 && (r = 0);
            var {
              params: t,
              snapGrid: o,
              slidesGrid: l,
              previousIndex: d,
              activeIndex: c,
              rtlTranslate: u,
              wrapperEl: p,
              enabled: h,
            } = n;
            if (
              (n.animating && t.preventInteractionOnTransition) ||
              (!h && !s && !a)
            )
              return !1;
            h = Math.min(n.params.slidesPerGroupSkip, r);
            let f = h + Math.floor((r - h) / n.params.slidesPerGroup);
            var m = -o[(f = f >= o.length ? o.length - 1 : f)];
            if (t.normalizeSlideIndex)
              for (let s = 0; s < l.length; s += 1) {
                let e = -Math.floor(100 * m),
                  t = Math.floor(100 * l[s]),
                  i = Math.floor(100 * l[s + 1]);
                void 0 !== l[s + 1]
                  ? e >= t && e < i - (i - t) / 2
                    ? (r = s)
                    : e >= t && e < i && (r = s + 1)
                  : e >= t && (r = s);
              }
            if (n.initialized && r !== c) {
              if (!n.allowSlideNext && m < n.translate && m < n.minTranslate())
                return !1;
              if (
                !n.allowSlidePrev &&
                m > n.translate &&
                m > n.maxTranslate() &&
                (c || 0) !== r
              )
                return !1;
            }
            let g;
            if (
              (r !== (d || 0) && i && n.emit("beforeSlideChangeStart"),
              n.updateProgress(m),
              (g = r > c ? "next" : r < c ? "prev" : "reset"),
              (u && -m === n.translate) || (!u && m === n.translate))
            )
              return (
                n.updateActiveIndex(r),
                t.autoHeight && n.updateAutoHeight(),
                n.updateSlidesClasses(),
                "slide" !== t.effect && n.setTranslate(m),
                "reset" != g &&
                  (n.transitionStart(i, g), n.transitionEnd(i, g)),
                !1
              );
            if (t.cssMode) {
              let t = n.isHorizontal(),
                i = u ? m : -m;
              if (0 === e) {
                let e = n.virtual && n.params.virtual.enabled;
                e &&
                  ((n.wrapperEl.style.scrollSnapType = "none"),
                  (n._immediateVirtual = !0)),
                  (p[t ? "scrollLeft" : "scrollTop"] = i),
                  e &&
                    requestAnimationFrame(() => {
                      (n.wrapperEl.style.scrollSnapType = ""),
                        (n._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!n.support.smoothScroll)
                  return (
                    y({
                      swiper: n,
                      targetPosition: i,
                      side: t ? "left" : "top",
                    }),
                    !0
                  );
                p.scrollTo({ [t ? "left" : "top"]: i, behavior: "smooth" });
              }
            } else
              n.setTransition(e),
                n.setTranslate(m),
                n.updateActiveIndex(r),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", e, s),
                n.transitionStart(i, g),
                0 === e
                  ? n.transitionEnd(i, g)
                  : n.animating ||
                    ((n.animating = !0),
                    n.onSlideToWrapperTransitionEnd ||
                      (n.onSlideToWrapperTransitionEnd = function (e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            n.onSlideToWrapperTransitionEnd
                          ),
                          n.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            n.onSlideToWrapperTransitionEnd
                          ),
                          (n.onSlideToWrapperTransitionEnd = null),
                          delete n.onSlideToWrapperTransitionEnd,
                          n.transitionEnd(i, g));
                      }),
                    n.$wrapperEl[0].addEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      n.onSlideToWrapperTransitionEnd
                    ));
            return !0;
          },
          slideToLoop: function (t, e, i, s) {
            if (
              (void 0 === e && (e = this.params.speed),
              void 0 === i && (i = !0),
              "string" == typeof (t = void 0 === t ? 0 : t))
            ) {
              let e = parseInt(t, 10);
              if (!isFinite(e))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
                );
              t = e;
            }
            let a = t;
            return (
              this.params.loop && (a += this.loopedSlides),
              this.slideTo(a, e, i, s)
            );
          },
          slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this,
              { animating: a, enabled: n, params: r } = s;
            if (!n) return s;
            let o = r.slidesPerGroup;
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
            n = s.activeIndex < r.slidesPerGroupSkip ? 1 : o;
            if (r.loop) {
              if (a && r.loopPreventsSlide) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            return r.rewind && s.isEnd
              ? s.slideTo(0, e, t, i)
              : s.slideTo(s.activeIndex + n, e, t, i);
          },
          slidePrev: function (t, i, s) {
            void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            let a = this,
              {
                params: e,
                animating: n,
                snapGrid: r,
                slidesGrid: o,
                rtlTranslate: l,
                enabled: d,
              } = a;
            if (!d) return a;
            if (e.loop) {
              if (n && e.loopPreventsSlide) return !1;
              a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
            }
            function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            let u = c(l ? a.translate : -a.translate),
              p = r.map((e) => c(e)),
              h = r[p.indexOf(u) - 1];
            if (void 0 === h && e.cssMode) {
              let i;
              r.forEach((e, t) => {
                u >= e && (i = t);
              }),
                void 0 !== i && (h = r[0 < i ? i - 1 : i]);
            }
            let f = 0;
            if (
              (void 0 !== h &&
                ((f = o.indexOf(h)) < 0 && (f = a.activeIndex - 1),
                "auto" === e.slidesPerView) &&
                1 === e.slidesPerGroup &&
                e.slidesPerGroupAuto &&
                ((f = f - a.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0))),
              e.rewind && a.isBeginning)
            ) {
              let e =
                a.params.virtual && a.params.virtual.enabled && a.virtual
                  ? a.virtual.slides.length - 1
                  : a.slides.length - 1;
              return a.slideTo(e, t, i, s);
            }
            return a.slideTo(f, t, i, s);
          },
          slideReset: function (e, t, i) {
            return (
              void 0 === e && (e = this.params.speed),
              this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), i)
            );
          },
          slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === s && (s = 0.5);
            var a = this;
            let n = a.activeIndex;
            var r = Math.min(a.params.slidesPerGroupSkip, n),
              r = r + Math.floor((n - r) / a.params.slidesPerGroup),
              o = a.rtlTranslate ? a.translate : -a.translate;
            if (o >= a.snapGrid[r]) {
              let e = a.snapGrid[r];
              o - e > (a.snapGrid[r + 1] - e) * s &&
                (n += a.params.slidesPerGroup);
            } else {
              let e = a.snapGrid[r - 1];
              o - e <= (a.snapGrid[r] - e) * s &&
                (n -= a.params.slidesPerGroup);
            }
            return (
              (n = Math.max(n, 0)),
              (n = Math.min(n, a.slidesGrid.length - 1)),
              a.slideTo(n, e, t, i)
            );
          },
          slideToClickedSlide: function () {
            let e = this,
              { params: t, $wrapperEl: i } = e,
              s =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView,
              a,
              n = e.clickedIndex;
            t.loop
              ? e.animating ||
                ((a = parseInt(
                  P(e.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                t.centeredSlides
                  ? n < e.loopedSlides - s / 2 ||
                    n > e.slides.length - e.loopedSlides + s / 2
                    ? (e.loopFix(),
                      (n = i
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      E(() => {
                        e.slideTo(n);
                      }))
                    : e.slideTo(n)
                  : n > e.slides.length - s
                  ? (e.loopFix(),
                    (n = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    E(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n))
              : e.slideTo(n);
          },
        },
        loop: {
          loopCreate: function () {
            let e = this,
              i = T(),
              { params: s, $wrapperEl: t } = e,
              a = 0 < t.children().length ? P(t.children()[0].parentNode) : t,
              n =
                (a
                  .children(`.${s.slideClass}.` + s.slideDuplicateClass)
                  .remove(),
                a.children("." + s.slideClass));
            if (s.loopFillGroupWithBlank) {
              let t = s.slidesPerGroup - (n.length % s.slidesPerGroup);
              if (t !== s.slidesPerGroup) {
                for (let e = 0; e < t; e += 1) {
                  let e = P(i.createElement("div")).addClass(
                    s.slideClass + " " + s.slideBlankClass
                  );
                  a.append(e);
                }
                n = a.children("." + s.slideClass);
              }
            }
            "auto" !== s.slidesPerView ||
              s.loopedSlides ||
              (s.loopedSlides = n.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(s.loopedSlides || s.slidesPerView, 10)
              )),
              (e.loopedSlides += s.loopAdditionalSlides),
              e.loopedSlides > n.length &&
                e.params.loopedSlidesLimit &&
                (e.loopedSlides = n.length);
            var r = [],
              o = [];
            n.each((e, t) => {
              P(e).attr("data-swiper-slide-index", t);
            });
            for (let t = 0; t < e.loopedSlides; t += 1) {
              let e = t - Math.floor(t / n.length) * n.length;
              o.push(n.eq(e)[0]), r.unshift(n.eq(n.length - e - 1)[0]);
            }
            for (let e = 0; e < o.length; e += 1)
              a.append(P(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = r.length - 1; 0 <= e; --e)
              a.prepend(P(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          },
          loopFix: function () {
            var e = this,
              {
                activeIndex: t,
                slides: i,
                loopedSlides: s,
                allowSlidePrev: a,
                allowSlideNext: n,
                snapGrid: r,
                rtlTranslate: o,
              } = (e.emit("beforeLoopFix"), e);
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            r = -r[t] - e.getTranslate();
            t < s
              ? ((l = i.length - 3 * s + t),
                (l += s),
                e.slideTo(l, 0, !1, !0) &&
                  0 != r &&
                  e.setTranslate((o ? -e.translate : e.translate) - r))
              : t >= i.length - s &&
                ((l = -i.length + t + s), (l += s), e.slideTo(l, 0, !1, !0)) &&
                0 != r &&
                e.setTranslate((o ? -e.translate : e.translate) - r),
              (e.allowSlidePrev = a),
              (e.allowSlideNext = n),
              e.emit("loopFix");
          },
          loopDestroy: function () {
            var { $wrapperEl: e, params: t, slides: i } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` +
                  t.slideBlankClass
              )
              .remove(),
              i.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            var t = this;
            t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode ||
              (((t =
                "container" === t.params.touchEventsTarget
                  ? t.el
                  : t.wrapperEl).style.cursor = "move"),
              (t.style.cursor = e ? "grabbing" : "grab"));
          },
          unsetGrabCursor: function () {
            var e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: q,
        breakpoints: {
          setBreakpoint: function () {
            let a = this,
              {
                activeIndex: n,
                initialized: r,
                loopedSlides: o = 0,
                params: l,
                $el: d,
              } = a,
              c = l.breakpoints;
            if (c && 0 !== Object.keys(c).length) {
              var u = a.getBreakpoint(c, a.params.breakpointsBase, a.el);
              if (u && a.currentBreakpoint !== u) {
                let s = (u in c ? c[u] : void 0) || a.originalParams,
                  e = b(a, l),
                  t = b(a, s),
                  i = l.enabled;
                e && !t
                  ? (d.removeClass(
                      `${l.containerModifierClass}grid ${l.containerModifierClass}grid-column`
                    ),
                    a.emitContainerClasses())
                  : !e &&
                    t &&
                    (d.addClass(l.containerModifierClass + "grid"),
                    ((s.grid.fill && "column" === s.grid.fill) ||
                      (!s.grid.fill && "column" === l.grid.fill)) &&
                      d.addClass(l.containerModifierClass + "grid-column"),
                    a.emitContainerClasses()),
                  ["navigation", "pagination", "scrollbar"].forEach((e) => {
                    var t = l[e] && l[e].enabled,
                      i = s[e] && s[e].enabled;
                    t && !i && a[e].disable(), !t && i && a[e].enable();
                  });
                var p = s.direction && s.direction !== l.direction,
                  h = l.loop && (s.slidesPerView !== l.slidesPerView || p),
                  p =
                    (p && r && a.changeDirection(),
                    f(a.params, s),
                    a.params.enabled);
                Object.assign(a, {
                  allowTouchMove: a.params.allowTouchMove,
                  allowSlideNext: a.params.allowSlideNext,
                  allowSlidePrev: a.params.allowSlidePrev,
                }),
                  i && !p ? a.disable() : !i && p && a.enable(),
                  (a.currentBreakpoint = u),
                  a.emit("_beforeBreakpoint", s),
                  h &&
                    r &&
                    (a.loopDestroy(),
                    a.loopCreate(),
                    a.updateSlides(),
                    a.slideTo(n - o + a.loopedSlides, 0, !1)),
                  a.emit("breakpoint", s);
              }
            }
          },
          getBreakpoint: function (e, r, o) {
            if (
              (void 0 === r && (r = "window"), e && ("container" !== r || o))
            ) {
              let s = !1,
                a = D(),
                i = "window" === r ? a.innerHeight : o.clientHeight,
                n = Object.keys(e).map((e) => {
                  var t;
                  return "string" == typeof e && 0 === e.indexOf("@")
                    ? ((t = parseFloat(e.substr(1))),
                      { value: i * t, point: e })
                    : { value: e, point: e };
                });
              n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let i = 0; i < n.length; i += 1) {
                let { point: e, value: t } = n[i];
                "window" === r
                  ? a.matchMedia(`(min-width: ${t}px)`).matches && (s = e)
                  : t <= o.clientWidth && (s = e);
              }
              return s || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            let i = this,
              { isLocked: e, params: t } = i,
              s = t.slidesOffsetBefore;
            if (s) {
              let e = i.slides.length - 1,
                t = i.slidesGrid[e] + i.slidesSizesGrid[e] + 2 * s;
              i.isLocked = i.size > t;
            } else i.isLocked = 1 === i.snapGrid.length;
            !0 === t.allowSlideNext && (i.allowSlideNext = !i.isLocked),
              !0 === t.allowSlidePrev && (i.allowSlidePrev = !i.isLocked),
              e && e !== i.isLocked && (i.isEnd = !1),
              e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
          },
        },
        classes: R,
        images: {
          loadImage: function (e, t, i, s, a, n) {
            var r = D();
            function o() {
              n && n();
            }
            !(P(e).parent("picture")[0] || (e.complete && a)) && t
              ? (((e = new r.Image()).onload = o),
                (e.onerror = o),
                s && (e.sizes = s),
                i && (e.srcset = i),
                t && (e.src = t))
              : o();
          },
          preloadImages: function () {
            let t = this;
            function i() {
              null != t &&
                t &&
                !t.destroyed &&
                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length) &&
                (t.params.updateOnImagesReady && t.update(),
                t.emit("imagesReady"));
            }
            t.imagesToLoad = t.$el.find("img");
            for (let e = 0; e < t.imagesToLoad.length; e += 1) {
              var s = t.imagesToLoad[e];
              t.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                i
              );
            }
          },
        },
      },
      _ = {};
    class S {
      constructor() {
        let e, i;
        for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
          s[a] = arguments[a];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (i = s[0])
            : ([e, i] = s),
          (i = f({}, (i = i || {}))),
          e && !i.el && (i.el = e),
          i.el && 1 < P(i.el).length)
        ) {
          let t = [];
          return (
            P(i.el).each((e) => {
              e = f({}, i, { el: e });
              t.push(new S(e));
            }),
            t
          );
        }
        let n = this,
          r =
            ((n.__swiper__ = !0),
            (n.support = p()),
            (n.device = V({ userAgent: i.userAgent })),
            (n.browser = B()),
            (n.eventsListeners = {}),
            (n.eventsAnyListeners = []),
            (n.modules = [...n.__modules__]),
            i.modules &&
              Array.isArray(i.modules) &&
              n.modules.push(...i.modules),
            {});
        n.modules.forEach((e) => {
          var s, a;
          e({
            swiper: n,
            extendParams:
              ((s = i),
              (a = r),
              function (e) {
                void 0 === e && (e = {});
                var t = Object.keys(e)[0],
                  i = e[t];
                "object" == typeof i &&
                  null !== i &&
                  (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) &&
                    !0 === s[t] &&
                    (s[t] = { auto: !0 }),
                  t in s) &&
                  "enabled" in i &&
                  (!0 === s[t] && (s[t] = { enabled: !0 }),
                  "object" != typeof s[t] ||
                    "enabled" in s[t] ||
                    (s[t].enabled = !0),
                  s[t] || (s[t] = { enabled: !1 })),
                  f(a, e);
              }),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        var o,
          l = f({}, w, r);
        return (
          (n.params = f({}, l, _, i)),
          (n.originalParams = f({}, n.params)),
          (n.passedParams = f({}, i)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = P),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: e,
            classNames: [],
            slides: P(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents:
              ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
              (o = ["pointerdown", "pointermove", "pointerup"]),
              (n.touchEventsTouch = {
                start: l[0],
                move: l[1],
                end: l[2],
                cancel: l[3],
              }),
              (n.touchEventsDesktop = { start: o[0], move: o[1], end: o[2] }),
              n.support.touch || !n.params.simulateTouch
                ? n.touchEventsTouch
                : n.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: v(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        var e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        var e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        var i = this,
          s = ((e = Math.min(Math.max(e, 0), 1)), i.minTranslate()),
          e = (i.maxTranslate() - s) * e + s;
        i.translateTo(e, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        let t = this;
        var e;
        t.params._emitClasses &&
          t.el &&
          ((e = t.el.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper") ||
                0 === e.indexOf(t.params.containerModifierClass)
            )),
          t.emit("_containerClasses", e.join(" ")));
      }
      getSlideClasses(e) {
        let t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        let s = this;
        if (s.params._emitClasses && s.el) {
          let i = [];
          s.slides.each((e) => {
            var t = s.getSlideClasses(e);
            i.push({ slideEl: e, classNames: t }), s.emit("_slideClass", e, t);
          }),
            s.emit("_slideClasses", i);
        }
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var {
          params: i,
          slides: s,
          slidesGrid: a,
          slidesSizesGrid: n,
          size: r,
          activeIndex: o,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let t,
            i = s[o].swiperSlideSize;
          for (let e = o + 1; e < s.length; e += 1)
            s[e] &&
              !t &&
              ((i += s[e].swiperSlideSize), (l += 1), i > r) &&
              (t = !0);
          for (let e = o - 1; 0 <= e; --e)
            s[e] &&
              !t &&
              ((i += s[e].swiperSlideSize), (l += 1), i > r) &&
              (t = !0);
        } else if ("current" === e)
          for (let e = o + 1; e < s.length; e += 1)
            (t ? a[e] + n[e] - a[o] < r : a[e] - a[o] < r) && (l += 1);
        else for (let e = o - 1; 0 <= e; --e) a[o] - a[e] < r && (l += 1);
        return l;
      }
      update() {
        let t = this;
        var e, i;
        function s() {
          var e = t.rtlTranslate ? -1 * t.translate : t.translate,
            e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        t &&
          !t.destroyed &&
          (({ snapGrid: e, params: i } = t),
          i.breakpoints && t.setBreakpoint(),
          t.updateSize(),
          t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.params.freeMode && t.params.freeMode.enabled
            ? (s(), t.params.autoHeight && t.updateAutoHeight())
            : (("auto" === t.params.slidesPerView ||
                1 < t.params.slidesPerView) &&
              t.isEnd &&
              !t.params.centeredSlides
                ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                : t.slideTo(t.activeIndex, 0, !1, !0)) || s(),
          i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
          t.emit("update"));
      }
      changeDirection(t, e) {
        void 0 === e && (e = !0);
        var i = this,
          s = i.params.direction;
        return (
          (t = t || ("horizontal" === s ? "vertical" : "horizontal")) === s ||
            ("horizontal" !== t && "vertical" !== t) ||
            (i.$el
              .removeClass("" + i.params.containerModifierClass + s)
              .addClass("" + i.params.containerModifierClass + t),
            i.emitContainerClasses(),
            (i.params.direction = t),
            i.slides.each((e) => {
              "vertical" === t ? (e.style.width = "") : (e.style.height = "");
            }),
            i.emit("changeDirection"),
            e && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        var t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(s) {
        let a = this;
        if (!a.mounted) {
          let t = P(s || a.params.el);
          if (!(s = t[0])) return !1;
          s.swiper = a;
          let e = () =>
              "." + (a.params.wrapperClass || "").trim().split(" ").join("."),
            i =
              s && s.shadowRoot && s.shadowRoot.querySelector
                ? (((n = P(s.shadowRoot.querySelector(e()))).children = (e) =>
                    t.children(e)),
                  n)
                : (t.children ? t : P(t)).children(e());
          var n;
          if (0 === i.length && a.params.createElements) {
            let e = T().createElement("div");
            (i = P(e)),
              (e.className = a.params.wrapperClass),
              t.append(e),
              t.children("." + a.params.slideClass).each((e) => {
                i.append(e);
              });
          }
          Object.assign(a, {
            $el: t,
            el: s,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === t.css("direction"),
            rtlTranslate:
              "horizontal" === a.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === t.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          });
        }
        return !0;
      }
      init(e) {
        var t = this;
        return (
          t.initialized ||
            (!1 !== t.mount(e) &&
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit"))),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        let i = this,
          { params: s, $el: a, $wrapperEl: n, slides: r } = i;
        if (void 0 !== i.params && !i.destroyed) {
          if (
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              a.removeAttr("style"),
              n.removeAttr("style"),
              r) &&
              r.length &&
              r
                .removeClass(
                  [
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index"),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e)
          ) {
            i.$el[0].swiper = null;
            {
              let t = i;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            }
          }
          i.destroyed = !0;
        }
        return null;
      }
      static extendDefaults(e) {
        f(_, e);
      }
      static get extendedDefaults() {
        return _;
      }
      static get defaults() {
        return w;
      }
      static installModule(e) {
        S.prototype.__modules__ || (S.prototype.__modules__ = []);
        var t = S.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return (
          Array.isArray(e)
            ? e.forEach((e) => S.installModule(e))
            : S.installModule(e),
          S
        );
      }
    }
    function M(i, s, a, n) {
      let r = T();
      return (
        i.params.createElements &&
          Object.keys(n).forEach((t) => {
            if (!a[t] && !0 === a.auto) {
              let e = i.$el.children("." + n[t])[0];
              e ||
                (((e = r.createElement("div")).className = n[t]),
                i.$el.append(e)),
                (a[t] = e),
                (s[t] = e);
            }
          }),
        a
      );
    }
    function k(e) {
      return (
        "." +
        (e = void 0 === e ? "" : e)
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")
      );
    }
    function L(e) {
      let {
          effect: i,
          swiper: s,
          on: t,
          setTranslate: a,
          setTransition: n,
          overwriteParams: r,
          perspective: o,
          recreateShadows: l,
          getEffectParams: d,
        } = e,
        c;
      t("beforeInit", () => {
        var e;
        s.params.effect === i &&
          (s.classNames.push("" + s.params.containerModifierClass + i),
          o && o() && s.classNames.push(s.params.containerModifierClass + "3d"),
          (e = r ? r() : {}),
          Object.assign(s.params, e),
          Object.assign(s.originalParams, e));
      }),
        t("setTranslate", () => {
          s.params.effect === i && a();
        }),
        t("setTransition", (e, t) => {
          s.params.effect === i && n(t);
        }),
        t("transitionEnd", () => {
          s.params.effect === i &&
            l &&
            d &&
            d().slideShadows &&
            (s.slides.each((e) => {
              s.$(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .remove();
            }),
            l());
        }),
        t("virtualUpdate", () => {
          s.params.effect === i &&
            (s.slides.length || (c = !0),
            requestAnimationFrame(() => {
              c && s.slides && s.slides.length && (a(), (c = !1));
            }));
        });
    }
    function O(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function I(e) {
      let { swiper: i, duration: t, transformEl: s, allSlides: a } = e,
        { slides: n, activeIndex: r, $wrapperEl: o } = i;
      if (i.params.virtualTranslate && 0 !== t) {
        let e = !1;
        (a ? (s ? n.find(s) : n) : s ? n.eq(r).find(s) : n.eq(r)).transitionEnd(
          () => {
            if (!e && i && !i.destroyed) {
              (e = !0), (i.animating = !1);
              var t = ["webkitTransitionEnd", "transitionend"];
              for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
            }
          }
        );
      }
    }
    function $(e, t, i) {
      var s = "swiper-slide-shadow" + (i ? "-" + i : ""),
        e = e.transformEl ? t.find(e.transformEl) : t;
      let a = e.children("." + s);
      return (
        a.length ||
          ((a = P(
            `<div class="swiper-slide-shadow${i ? "-" + i : ""}"></div>`
          )),
          e.append(a)),
        a
      );
    }
    return (
      Object.keys(x).forEach((t) => {
        Object.keys(x[t]).forEach((e) => {
          S.prototype[e] = x[t][e];
        });
      }),
      S.use([
        function (e) {
          let { swiper: n, on: t, emit: i } = e,
            s = D(),
            a = null,
            r = null,
            o = () => {
              n &&
                !n.destroyed &&
                n.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              n && !n.destroyed && n.initialized && i("orientationchange");
            };
          t("init", () => {
            n.params.resizeObserver && void 0 !== s.ResizeObserver
              ? n &&
                !n.destroyed &&
                n.initialized &&
                (a = new ResizeObserver((i) => {
                  r = s.requestAnimationFrame(() => {
                    var { width: e, height: t } = n;
                    let s = e,
                      a = t;
                    i.forEach((e) => {
                      var { contentBoxSize: e, contentRect: t, target: i } = e;
                      (i && i !== n.el) ||
                        ((s = t ? t.width : (e[0] || e).inlineSize),
                        (a = t ? t.height : (e[0] || e).blockSize));
                    }),
                      (s === e && a === t) || o();
                  });
                })).observe(n.el)
              : (s.addEventListener("resize", o),
                s.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              r && s.cancelAnimationFrame(r),
                a && a.unobserve && n.el && (a.unobserve(n.el), (a = null)),
                s.removeEventListener("resize", o),
                s.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          function i(e, t) {
            void 0 === t && (t = {});
            var i = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                var t;
                1 === e.length
                  ? n("observerUpdate", e[0])
                  : ((t = function () {
                      n("observerUpdate", e[0]);
                    }),
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0));
              }
            );
            i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              r.push(i);
          }
          let { swiper: s, extendParams: t, on: a, emit: n } = e,
            r = [],
            o = D();
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            a("init", () => {
              if (s.params.observer) {
                if (s.params.observeParents) {
                  var t = s.$el.parents();
                  for (let e = 0; e < t.length; e += 1) i(t[e]);
                }
                i(s.$el[0], { childList: s.params.observeSlideChildren }),
                  i(s.$wrapperEl[0], { attributes: !1 });
              }
            }),
            a("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]),
      S.use([
        function (e) {
          let t,
            { swiper: x, extendParams: i, on: s, emit: _ } = e;
          function S(e, t) {
            var i = x.params.virtual;
            return i.cache && x.virtual.cache[t]
              ? x.virtual.cache[t]
              : ((e = P(
                  i.renderSlide
                    ? i.renderSlide.call(x, e, t)
                    : `<div class="${x.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
                )).attr("data-swiper-slide-index") ||
                  e.attr("data-swiper-slide-index", t),
                i.cache && (x.virtual.cache[t] = e),
                e);
          }
          function a(t) {
            let {
                slidesPerView: e,
                slidesPerGroup: i,
                centeredSlides: s,
              } = x.params,
              { addSlidesBefore: a, addSlidesAfter: n } = x.params.virtual,
              {
                from: r,
                to: o,
                slides: l,
                slidesGrid: d,
                offset: c,
              } = x.virtual;
            x.params.cssMode || x.updateActiveIndex();
            var u = x.activeIndex || 0;
            let p,
              h,
              f,
              m =
                ((p = x.rtlTranslate
                  ? "right"
                  : x.isHorizontal()
                  ? "left"
                  : "top"),
                (f = s
                  ? ((h = Math.floor(e / 2) + i + n), Math.floor(e / 2) + i + a)
                  : ((h = e + (i - 1) + n), i + a)),
                Math.max((u || 0) - f, 0)),
              g = Math.min((u || 0) + h, l.length - 1),
              v = (x.slidesGrid[m] || 0) - (x.slidesGrid[0] || 0);
            function y() {
              x.updateSlides(),
                x.updateProgress(),
                x.updateSlidesClasses(),
                x.lazy && x.params.lazy.enabled && x.lazy.load(),
                _("virtualUpdate");
            }
            if (
              (Object.assign(x.virtual, {
                from: m,
                to: g,
                offset: v,
                slidesGrid: x.slidesGrid,
              }),
              r !== m || o !== g || t)
            )
              if (x.params.virtual.renderExternal)
                x.params.virtual.renderExternal.call(x, {
                  offset: v,
                  from: m,
                  to: g,
                  slides: (() => {
                    var t = [];
                    for (let e = m; e <= g; e += 1) t.push(l[e]);
                    return t;
                  })(),
                }),
                  x.params.virtual.renderExternalUpdate
                    ? y()
                    : _("virtualUpdate");
              else {
                var b = [],
                  w = [];
                if (t) x.$wrapperEl.find("." + x.params.slideClass).remove();
                else
                  for (let e = r; e <= o; e += 1)
                    (e < m || e > g) &&
                      x.$wrapperEl
                        .find(
                          `.${x.params.slideClass}[data-swiper-slide-index="${e}"]`
                        )
                        .remove();
                for (let e = 0; e < l.length; e += 1)
                  e >= m &&
                    e <= g &&
                    (void 0 === o || t
                      ? w.push(e)
                      : (e > o && w.push(e), e < r && b.push(e)));
                w.forEach((e) => {
                  x.$wrapperEl.append(S(l[e], e));
                }),
                  b
                    .sort((e, t) => t - e)
                    .forEach((e) => {
                      x.$wrapperEl.prepend(S(l[e], e));
                    }),
                  x.$wrapperEl.children(".swiper-slide").css(p, v + "px"),
                  y();
              }
            else
              x.slidesGrid !== d && v !== c && x.slides.css(p, v + "px"),
                x.updateProgress(),
                _("virtualUpdate");
          }
          i({
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          }),
            (x.virtual = {
              cache: {},
              from: void 0,
              to: void 0,
              slides: [],
              offset: 0,
              slidesGrid: [],
            }),
            s("beforeInit", () => {
              x.params.virtual.enabled &&
                ((x.virtual.slides = x.params.virtual.slides),
                x.classNames.push(x.params.containerModifierClass + "virtual"),
                (x.params.watchSlidesProgress = !0),
                (x.originalParams.watchSlidesProgress = !0),
                x.params.initialSlide || a());
            }),
            s("setTranslate", () => {
              x.params.virtual.enabled &&
                (x.params.cssMode && !x._immediateVirtual
                  ? (clearTimeout(t),
                    (t = setTimeout(() => {
                      a();
                    }, 100)))
                  : a());
            }),
            s("init update resize", () => {
              x.params.virtual.enabled &&
                x.params.cssMode &&
                C(x.wrapperEl, "--swiper-virtual-size", x.virtualSize + "px");
            }),
            Object.assign(x.virtual, {
              appendSlide: function (t) {
                if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1)
                    t[e] && x.virtual.slides.push(t[e]);
                else x.virtual.slides.push(t);
                a(!0);
              },
              prependSlide: function (t) {
                let e = x.activeIndex,
                  i = e + 1,
                  n = 1;
                if (Array.isArray(t)) {
                  for (let e = 0; e < t.length; e += 1)
                    t[e] && x.virtual.slides.unshift(t[e]);
                  (i = e + t.length), (n = t.length);
                } else x.virtual.slides.unshift(t);
                if (x.params.virtual.cache) {
                  let s = x.virtual.cache,
                    a = {};
                  Object.keys(s).forEach((e) => {
                    var t = s[e],
                      i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + n),
                      (a[parseInt(e, 10) + n] = t);
                  }),
                    (x.virtual.cache = a);
                }
                a(!0), x.slideTo(i, 0);
              },
              removeSlide: function (i) {
                if (null != i) {
                  let t = x.activeIndex;
                  if (Array.isArray(i))
                    for (let e = i.length - 1; 0 <= e; --e)
                      x.virtual.slides.splice(i[e], 1),
                        x.params.virtual.cache && delete x.virtual.cache[i[e]],
                        i[e] < t && --t,
                        (t = Math.max(t, 0));
                  else
                    x.virtual.slides.splice(i, 1),
                      x.params.virtual.cache && delete x.virtual.cache[i],
                      i < t && --t,
                      (t = Math.max(t, 0));
                  a(!0), x.slideTo(t, 0);
                }
              },
              removeAllSlides: function () {
                (x.virtual.slides = []),
                  x.params.virtual.cache && (x.virtual.cache = {}),
                  a(!0),
                  x.slideTo(0, 0);
              },
              update: a,
            });
        },
        function (e) {
          let { swiper: u, extendParams: t, on: i, emit: p } = e,
            h = T(),
            f = D();
          function s(c) {
            if (u.enabled) {
              let l = u.rtlTranslate,
                e = c,
                t =
                  (e = e.originalEvent ? e.originalEvent : e).keyCode ||
                  e.charCode,
                i = u.params.keyboard.pageUpDown,
                s = i && 33 === t,
                a = i && 34 === t,
                n = 37 === t,
                r = 39 === t,
                o = 38 === t,
                d = 40 === t;
              if (
                !u.allowSlideNext &&
                ((u.isHorizontal() && r) || (u.isVertical() && d) || a)
              )
                return !1;
              if (
                !u.allowSlidePrev &&
                ((u.isHorizontal() && n) || (u.isVertical() && o) || s)
              )
                return !1;
              if (
                !(
                  e.shiftKey ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  (h.activeElement &&
                    h.activeElement.nodeName &&
                    ("input" === h.activeElement.nodeName.toLowerCase() ||
                      "textarea" === h.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  u.params.keyboard.onlyInViewport &&
                  (s || a || n || r || o || d)
                ) {
                  let i = !1;
                  if (
                    0 < u.$el.parents("." + u.params.slideClass).length &&
                    0 === u.$el.parents("." + u.params.slideActiveClass).length
                  )
                    return;
                  let e = u.$el,
                    t = e[0].clientWidth,
                    s = e[0].clientHeight,
                    a = f.innerWidth,
                    n = f.innerHeight,
                    r = u.$el.offset(),
                    o =
                      (l && (r.left -= u.$el[0].scrollLeft),
                      [
                        [r.left, r.top],
                        [r.left + t, r.top],
                        [r.left, r.top + s],
                        [r.left + t, r.top + s],
                      ]);
                  for (let t = 0; t < o.length; t += 1) {
                    let e = o[t];
                    0 <= e[0] &&
                      e[0] <= a &&
                      0 <= e[1] &&
                      e[1] <= n &&
                      ((0 === e[0] && 0 === e[1]) || (i = !0));
                  }
                  if (!i) return;
                }
                u.isHorizontal()
                  ? ((s || a || n || r) &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1)),
                    (((a || r) && !l) || ((s || n) && l)) && u.slideNext(),
                    (((s || n) && !l) || ((a || r) && l)) && u.slidePrev())
                  : ((s || a || o || d) &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1)),
                    (a || d) && u.slideNext(),
                    (s || o) && u.slidePrev()),
                  p("keyPress", t);
              }
            }
          }
          function a() {
            u.keyboard.enabled ||
              (P(h).on("keydown", s), (u.keyboard.enabled = !0));
          }
          function n() {
            u.keyboard.enabled &&
              (P(h).off("keydown", s), (u.keyboard.enabled = !1));
          }
          (u.keyboard = { enabled: !1 }),
            t({
              keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
            }),
            i("init", () => {
              u.params.keyboard.enabled && a();
            }),
            i("destroy", () => {
              u.keyboard.enabled && n();
            }),
            Object.assign(u.keyboard, { enable: a, disable: n });
        },
        function (e) {
          let { swiper: d, extendParams: t, on: i, emit: c } = e,
            s = D(),
            u;
          t({
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: "container",
              thresholdDelta: null,
              thresholdTime: null,
            },
          }),
            (d.mousewheel = { enabled: !1 });
          let p,
            a = v(),
            h = [];
          function n() {
            d.enabled && (d.mouseEntered = !0);
          }
          function r() {
            d.enabled && (d.mouseEntered = !1);
          }
          function f(e) {
            (d.params.mousewheel.thresholdDelta &&
              e.delta < d.params.mousewheel.thresholdDelta) ||
              (d.params.mousewheel.thresholdTime &&
                v() - a < d.params.mousewheel.thresholdTime) ||
              (6 <= e.delta && v() - a < 60) ||
              (e.direction < 0
                ? (d.isEnd && !d.params.loop) ||
                  d.animating ||
                  (d.slideNext(), c("scroll", e.raw))
                : (d.isBeginning && !d.params.loop) ||
                  d.animating ||
                  (d.slidePrev(), c("scroll", e.raw)),
              (a = new s.Date().getTime()));
          }
          function o(i) {
            let r = i,
              s = !0;
            if (d.enabled) {
              var o = d.params.mousewheel;
              d.params.cssMode && r.preventDefault();
              let e = d.$el;
              if (
                ("container" !== d.params.mousewheel.eventsTarget &&
                  (e = P(d.params.mousewheel.eventsTarget)),
                !d.mouseEntered &&
                  !e[0].contains(r.target) &&
                  !o.releaseOnEdges)
              )
                return !0;
              r.originalEvent && (r = r.originalEvent);
              let n = 0;
              var a = d.rtlTranslate ? -1 : 1,
                l = ((e) => {
                  let t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                  return (
                    "detail" in e && (i = e.detail),
                    "wheelDelta" in e && (i = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e &&
                      e.axis === e.HORIZONTAL_AXIS &&
                      ((t = i), (i = 0)),
                    (s = 10 * t),
                    (a = 10 * i),
                    "deltaY" in e && (a = e.deltaY),
                    "deltaX" in e && (s = e.deltaX),
                    e.shiftKey && !s && ((s = a), (a = 0)),
                    (s || a) &&
                      e.deltaMode &&
                      (1 === e.deltaMode
                        ? ((s *= 40), (a *= 40))
                        : ((s *= 800), (a *= 800))),
                    s && !t && (t = s < 1 ? -1 : 1),
                    a && !i && (i = a < 1 ? -1 : 1),
                    { spinX: t, spinY: i, pixelX: s, pixelY: a }
                  );
                })(r);
              if (o.forceToAxis)
                if (d.isHorizontal()) {
                  if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                  n = -l.pixelX * a;
                } else {
                  if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                  n = -l.pixelY;
                }
              else
                n =
                  Math.abs(l.pixelX) > Math.abs(l.pixelY)
                    ? -l.pixelX * a
                    : -l.pixelY;
              if (0 === n) return !0;
              o.invert && (n = -n);
              let t = d.getTranslate() + n * o.sensitivity;
              if (
                ((t = t >= d.minTranslate() ? d.minTranslate() : t) <=
                  d.maxTranslate() && (t = d.maxTranslate()),
                (s =
                  !!d.params.loop ||
                  !(t === d.minTranslate() || t === d.maxTranslate())) &&
                  d.params.nested &&
                  r.stopPropagation(),
                d.params.freeMode && d.params.freeMode.enabled)
              ) {
                let s = {
                    time: v(),
                    delta: Math.abs(n),
                    direction: Math.sign(n),
                  },
                  a =
                    p &&
                    s.time < p.time + 500 &&
                    s.delta <= p.delta &&
                    s.direction === p.direction;
                if (!a) {
                  (p = void 0), d.params.loop && d.loopFix();
                  let e = d.getTranslate() + n * o.sensitivity,
                    t = d.isBeginning,
                    i = d.isEnd;
                  if (
                    ((e = e >= d.minTranslate() ? d.minTranslate() : e) <=
                      d.maxTranslate() && (e = d.maxTranslate()),
                    d.setTransition(0),
                    d.setTranslate(e),
                    d.updateProgress(),
                    d.updateActiveIndex(),
                    d.updateSlidesClasses(),
                    ((!t && d.isBeginning) || (!i && d.isEnd)) &&
                      d.updateSlidesClasses(),
                    d.params.freeMode.sticky)
                  ) {
                    clearTimeout(u), (u = void 0), 15 <= h.length && h.shift();
                    let e = h.length ? h[h.length - 1] : void 0,
                      t = h[0];
                    if (
                      (h.push(s),
                      e && (s.delta > e.delta || s.direction !== e.direction))
                    )
                      h.splice(0);
                    else if (
                      15 <= h.length &&
                      s.time - t.time < 500 &&
                      1 <= t.delta - s.delta &&
                      s.delta <= 6
                    ) {
                      let e = 0 < n ? 0.8 : 0.2;
                      (p = s),
                        h.splice(0),
                        (u = E(() => {
                          d.slideToClosest(d.params.speed, !0, void 0, e);
                        }, 0));
                    }
                    u =
                      u ||
                      E(() => {
                        (p = s),
                          h.splice(0),
                          d.slideToClosest(d.params.speed, !0, void 0, 0.5);
                      }, 500);
                  }
                  if (
                    (a || c("scroll", r),
                    d.params.autoplay &&
                      d.params.autoplayDisableOnInteraction &&
                      d.autoplay.stop(),
                    e === d.minTranslate() || e === d.maxTranslate())
                  )
                    return !0;
                }
              } else {
                let e = {
                    time: v(),
                    delta: Math.abs(n),
                    direction: Math.sign(n),
                    raw: i,
                  },
                  t =
                    (2 <= h.length && h.shift(),
                    h.length ? h[h.length - 1] : void 0);
                if (
                  (h.push(e),
                  (!t ||
                    e.direction !== t.direction ||
                    e.delta > t.delta ||
                    e.time > t.time + 150) &&
                    f(e),
                  ((e) => {
                    var t = d.params.mousewheel;
                    if (e.direction < 0) {
                      if (d.isEnd && !d.params.loop && t.releaseOnEdges)
                        return 1;
                    } else if (
                      d.isBeginning &&
                      !d.params.loop &&
                      t.releaseOnEdges
                    )
                      return 1;
                  })(e))
                )
                  return !0;
              }
              return (
                r.preventDefault ? r.preventDefault() : (r.returnValue = !1), !1
              );
            }
          }
          function l(e) {
            let t = d.$el;
            (t =
              "container" !== d.params.mousewheel.eventsTarget
                ? P(d.params.mousewheel.eventsTarget)
                : t)[e]("mouseenter", n),
              t[e]("mouseleave", r),
              t[e]("wheel", o);
          }
          function m() {
            return d.params.cssMode
              ? (d.wrapperEl.removeEventListener("wheel", o), !0)
              : !d.mousewheel.enabled && (l("on"), (d.mousewheel.enabled = !0));
          }
          function g() {
            return d.params.cssMode
              ? (d.wrapperEl.addEventListener(event, o), !0)
              : !!d.mousewheel.enabled &&
                  (l("off"), !(d.mousewheel.enabled = !1));
          }
          i("init", () => {
            !d.params.mousewheel.enabled && d.params.cssMode && g(),
              d.params.mousewheel.enabled && m();
          }),
            i("destroy", () => {
              d.params.cssMode && m(), d.mousewheel.enabled && g();
            }),
            Object.assign(d.mousewheel, { enable: m, disable: g });
        },
        function (e) {
          let { swiper: a, extendParams: t, on: i, emit: n } = e;
          function s(e) {
            let t;
            return (t =
              e &&
              ((t = P(e)), a.params.uniqueNavElements) &&
              "string" == typeof e &&
              1 < t.length &&
              1 === a.$el.find(e).length
                ? a.$el.find(e)
                : t);
          }
          function r(e, t) {
            var i = a.params.navigation;
            e &&
              0 < e.length &&
              (e[t ? "addClass" : "removeClass"](i.disabledClass),
              e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t),
              a.params.watchOverflow) &&
              a.enabled &&
              e[a.isLocked ? "addClass" : "removeClass"](i.lockClass);
          }
          function o() {
            var e, t;
            a.params.loop ||
              (({ $nextEl: e, $prevEl: t } = a.navigation),
              r(t, a.isBeginning && !a.params.rewind),
              r(e, a.isEnd && !a.params.rewind));
          }
          function l(e) {
            e.preventDefault(),
              (a.isBeginning && !a.params.loop && !a.params.rewind) ||
                (a.slidePrev(), n("navigationPrev"));
          }
          function d(e) {
            e.preventDefault(),
              (a.isEnd && !a.params.loop && !a.params.rewind) ||
                (a.slideNext(), n("navigationNext"));
          }
          function c() {
            var e,
              t,
              i = a.params.navigation;
            (a.params.navigation = M(
              a,
              a.originalParams.navigation,
              a.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
              (i.nextEl || i.prevEl) &&
                ((e = s(i.nextEl)),
                (t = s(i.prevEl)),
                e && 0 < e.length && e.on("click", d),
                t && 0 < t.length && t.on("click", l),
                Object.assign(a.navigation, {
                  $nextEl: e,
                  nextEl: e && e[0],
                  $prevEl: t,
                  prevEl: t && t[0],
                }),
                a.enabled ||
                  (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
          }
          function u() {
            var { $nextEl: e, $prevEl: t } = a.navigation;
            e &&
              e.length &&
              (e.off("click", d),
              e.removeClass(a.params.navigation.disabledClass)),
              t &&
                t.length &&
                (t.off("click", l),
                t.removeClass(a.params.navigation.disabledClass));
          }
          t({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
              navigationDisabledClass: "swiper-navigation-disabled",
            },
          }),
            (a.navigation = {
              nextEl: null,
              $nextEl: null,
              prevEl: null,
              $prevEl: null,
            }),
            i("init", () => {
              (!1 === a.params.navigation.enabled ? p : (c(), o))();
            }),
            i("toEdge fromEdge lock unlock", () => {
              o();
            }),
            i("destroy", () => {
              u();
            }),
            i("enable disable", () => {
              var { $nextEl: e, $prevEl: t } = a.navigation;
              e &&
                e[a.enabled ? "removeClass" : "addClass"](
                  a.params.navigation.lockClass
                ),
                t &&
                  t[a.enabled ? "removeClass" : "addClass"](
                    a.params.navigation.lockClass
                  );
            }),
            i("click", (e, t) => {
              var { $nextEl: i, $prevEl: s } = a.navigation,
                t = t.target;
              if (
                a.params.navigation.hideOnClick &&
                !P(t).is(s) &&
                !P(t).is(i) &&
                (!(
                  a.pagination &&
                  a.params.pagination &&
                  a.params.pagination.clickable
                ) ||
                  (a.pagination.el !== t && !a.pagination.el.contains(t)))
              ) {
                let e;
                i
                  ? (e = i.hasClass(a.params.navigation.hiddenClass))
                  : s && (e = s.hasClass(a.params.navigation.hiddenClass)),
                  n(!0 === e ? "navigationShow" : "navigationHide"),
                  i && i.toggleClass(a.params.navigation.hiddenClass),
                  s && s.toggleClass(a.params.navigation.hiddenClass);
              }
            });
          let p = () => {
            a.$el.addClass(a.params.navigation.navigationDisabledClass), u();
          };
          Object.assign(a.navigation, {
            enable: () => {
              a.$el.removeClass(a.params.navigation.navigationDisabledClass),
                c(),
                o();
            },
            disable: p,
            update: o,
            init: c,
            destroy: u,
          });
        },
        function (e) {
          let { swiper: u, extendParams: t, on: i, emit: n } = e;
          e = "swiper-pagination";
          let p,
            h =
              (t({
                pagination: {
                  el: null,
                  bulletElement: "span",
                  clickable: !1,
                  hideOnClick: !1,
                  renderBullet: null,
                  renderProgressbar: null,
                  renderFraction: null,
                  renderCustom: null,
                  progressbarOpposite: !1,
                  type: "bullets",
                  dynamicBullets: !1,
                  dynamicMainBullets: 1,
                  formatFractionCurrent: (e) => e,
                  formatFractionTotal: (e) => e,
                  bulletClass: e + "-bullet",
                  bulletActiveClass: e + "-bullet-active",
                  modifierClass: e + "-",
                  currentClass: e + "-current",
                  totalClass: e + "-total",
                  hiddenClass: e + "-hidden",
                  progressbarFillClass: e + "-progressbar-fill",
                  progressbarOppositeClass: e + "-progressbar-opposite",
                  clickableClass: e + "-clickable",
                  lockClass: e + "-lock",
                  horizontalClass: e + "-horizontal",
                  verticalClass: e + "-vertical",
                  paginationDisabledClass: e + "-disabled",
                },
              }),
              (u.pagination = { el: null, $el: null, bullets: [] }),
              0);
          function r() {
            return (
              !u.params.pagination.el ||
              !u.pagination.el ||
              !u.pagination.$el ||
              0 === u.pagination.$el.length
            );
          }
          function f(e, t) {
            var i = u.params.pagination.bulletActiveClass;
            e[t]()
              .addClass(i + "-" + t)
              [t]()
              .addClass(i + `-${t}-` + t);
          }
          function s() {
            let d = u.rtl,
              c = u.params.pagination;
            if (!r()) {
              let e = (u.virtual && u.params.virtual.enabled ? u.virtual : u)
                  .slides.length,
                o = u.pagination.$el,
                l;
              var s = u.params.loop
                ? Math.ceil((e - 2 * u.loopedSlides) / u.params.slidesPerGroup)
                : u.snapGrid.length;
              if (
                (u.params.loop
                  ? ((l = Math.ceil(
                      (u.activeIndex - u.loopedSlides) / u.params.slidesPerGroup
                    )) >
                      e - 1 - 2 * u.loopedSlides &&
                      (l -= e - 2 * u.loopedSlides),
                    l > s - 1 && (l -= s),
                    l < 0 &&
                      "bullets" !== u.params.paginationType &&
                      (l = s + l))
                  : (l =
                      void 0 !== u.snapIndex
                        ? u.snapIndex
                        : u.activeIndex || 0),
                "bullets" === c.type &&
                  u.pagination.bullets &&
                  0 < u.pagination.bullets.length)
              ) {
                let s = u.pagination.bullets,
                  a,
                  n,
                  r;
                if (
                  (c.dynamicBullets &&
                    ((p = s
                      .eq(0)
                      [u.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    o.css(
                      u.isHorizontal() ? "width" : "height",
                      p * (c.dynamicMainBullets + 4) + "px"
                    ),
                    1 < c.dynamicMainBullets &&
                      void 0 !== u.previousIndex &&
                      ((h += l - (u.previousIndex - u.loopedSlides || 0)) >
                      c.dynamicMainBullets - 1
                        ? (h = c.dynamicMainBullets - 1)
                        : h < 0 && (h = 0)),
                    (a = Math.max(l - h, 0)),
                    (n = a + (Math.min(s.length, c.dynamicMainBullets) - 1)),
                    (r = (n + a) / 2)),
                  s.removeClass(
                    ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                      .map((e) => "" + c.bulletActiveClass + e)
                      .join(" ")
                  ),
                  1 < o.length)
                )
                  s.each((e) => {
                    var e = P(e),
                      t = e.index();
                    t === l && e.addClass(c.bulletActiveClass),
                      c.dynamicBullets &&
                        (t >= a &&
                          t <= n &&
                          e.addClass(c.bulletActiveClass + "-main"),
                        t === a && f(e, "prev"),
                        t === n) &&
                        f(e, "next");
                  });
                else {
                  let e = s.eq(l),
                    i = e.index();
                  if ((e.addClass(c.bulletActiveClass), c.dynamicBullets)) {
                    let e = s.eq(a),
                      t = s.eq(n);
                    for (let e = a; e <= n; e += 1)
                      s.eq(e).addClass(c.bulletActiveClass + "-main");
                    if (u.params.loop)
                      if (i >= s.length) {
                        for (let e = c.dynamicMainBullets; 0 <= e; --e)
                          s.eq(s.length - e).addClass(
                            c.bulletActiveClass + "-main"
                          );
                        s.eq(s.length - c.dynamicMainBullets - 1).addClass(
                          c.bulletActiveClass + "-prev"
                        );
                      } else f(e, "prev"), f(t, "next");
                    else f(e, "prev"), f(t, "next");
                  }
                }
                if (c.dynamicBullets) {
                  let e = Math.min(s.length, c.dynamicMainBullets + 4),
                    t = (p * e - p) / 2 - r * p,
                    i = d ? "right" : "left";
                  s.css(u.isHorizontal() ? i : "top", t + "px");
                }
              }
              if (
                ("fraction" === c.type &&
                  (o
                    .find(k(c.currentClass))
                    .text(c.formatFractionCurrent(l + 1)),
                  o.find(k(c.totalClass)).text(c.formatFractionTotal(s))),
                "progressbar" === c.type)
              ) {
                var a = c.progressbarOpposite
                  ? u.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : u.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                let e = (l + 1) / s,
                  t = 1,
                  i = 1;
                "horizontal" == a ? (t = e) : (i = e),
                  o
                    .find(k(c.progressbarFillClass))
                    .transform(`translate3d(0,0,0) scaleX(${t}) scaleY(${i})`)
                    .transition(u.params.speed);
              }
              "custom" === c.type && c.renderCustom
                ? (o.html(c.renderCustom(u, l + 1, s)),
                  n("paginationRender", o[0]))
                : n("paginationUpdate", o[0]),
                u.params.watchOverflow &&
                  u.enabled &&
                  o[u.isLocked ? "addClass" : "removeClass"](c.lockClass);
            }
          }
          function a() {
            var s = u.params.pagination;
            if (!r()) {
              var e = (u.virtual && u.params.virtual.enabled ? u.virtual : u)
                  .slides.length,
                a = u.pagination.$el;
              let i = "";
              if ("bullets" === s.type) {
                let t = u.params.loop
                  ? Math.ceil(
                      (e - 2 * u.loopedSlides) / u.params.slidesPerGroup
                    )
                  : u.snapGrid.length;
                u.params.freeMode &&
                  u.params.freeMode.enabled &&
                  !u.params.loop &&
                  t > e &&
                  (t = e);
                for (let e = 0; e < t; e += 1)
                  s.renderBullet
                    ? (i += s.renderBullet.call(u, e, s.bulletClass))
                    : (i += `<${s.bulletElement} class="${s.bulletClass}"></${s.bulletElement}>`);
                a.html(i), (u.pagination.bullets = a.find(k(s.bulletClass)));
              }
              "fraction" === s.type &&
                ((i = s.renderFraction
                  ? s.renderFraction.call(u, s.currentClass, s.totalClass)
                  : `<span class="${s.currentClass}"></span> / <span class="${s.totalClass}"></span>`),
                a.html(i)),
                "progressbar" === s.type &&
                  ((i = s.renderProgressbar
                    ? s.renderProgressbar.call(u, s.progressbarFillClass)
                    : `<span class="${s.progressbarFillClass}"></span>`),
                  a.html(i)),
                "custom" !== s.type &&
                  n("paginationRender", u.pagination.$el[0]);
            }
          }
          function o() {
            u.params.pagination = M(
              u,
              u.originalParams.pagination,
              u.params.pagination,
              { el: "swiper-pagination" }
            );
            var t = u.params.pagination;
            if (t.el) {
              let e = P(t.el);
              0 !== e.length &&
                (u.params.uniqueNavElements &&
                  "string" == typeof t.el &&
                  1 < e.length &&
                  1 < (e = u.$el.find(t.el)).length &&
                  (e = e.filter((e) => P(e).parents(".swiper")[0] === u.el)),
                "bullets" === t.type &&
                  t.clickable &&
                  e.addClass(t.clickableClass),
                e.addClass(t.modifierClass + t.type),
                e.addClass(
                  u.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (e.addClass("" + t.modifierClass + t.type + "-dynamic"),
                  (h = 0),
                  t.dynamicMainBullets < 1) &&
                  (t.dynamicMainBullets = 1),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  e.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  e.on("click", k(t.bulletClass), function (e) {
                    e.preventDefault();
                    let t = P(this).index() * u.params.slidesPerGroup;
                    u.params.loop && (t += u.loopedSlides), u.slideTo(t);
                  }),
                Object.assign(u.pagination, { $el: e, el: e[0] }),
                u.enabled || e.addClass(t.lockClass));
            }
          }
          function l() {
            var e,
              t = u.params.pagination;
            r() ||
              ((e = u.pagination.$el).removeClass(t.hiddenClass),
              e.removeClass(t.modifierClass + t.type),
              e.removeClass(
                u.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              u.pagination.bullets &&
                u.pagination.bullets.removeClass &&
                u.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && e.off("click", k(t.bulletClass)));
          }
          i("init", () => {
            (!1 === u.params.pagination.enabled ? d : (o(), a(), s))();
          }),
            i("activeIndexChange", () => {
              (!u.params.loop && void 0 !== u.snapIndex) || s();
            }),
            i("snapIndexChange", () => {
              u.params.loop || s();
            }),
            i("slidesLengthChange", () => {
              u.params.loop && (a(), s());
            }),
            i("snapGridLengthChange", () => {
              u.params.loop || (a(), s());
            }),
            i("destroy", () => {
              l();
            }),
            i("enable disable", () => {
              var e = u.pagination.$el;
              e &&
                e[u.enabled ? "removeClass" : "addClass"](
                  u.params.pagination.lockClass
                );
            }),
            i("lock unlock", () => {
              s();
            }),
            i("click", (e, t) => {
              var t = t.target,
                i = u.pagination.$el;
              if (
                u.params.pagination.el &&
                u.params.pagination.hideOnClick &&
                i &&
                0 < i.length &&
                !P(t).hasClass(u.params.pagination.bulletClass) &&
                (!u.navigation ||
                  !(
                    (u.navigation.nextEl && t === u.navigation.nextEl) ||
                    (u.navigation.prevEl && t === u.navigation.prevEl)
                  ))
              ) {
                let e = i.hasClass(u.params.pagination.hiddenClass);
                n(!0 === e ? "paginationShow" : "paginationHide"),
                  i.toggleClass(u.params.pagination.hiddenClass);
              }
            });
          let d = () => {
            u.$el.addClass(u.params.pagination.paginationDisabledClass),
              u.pagination.$el &&
                u.pagination.$el.addClass(
                  u.params.pagination.paginationDisabledClass
                ),
              l();
          };
          Object.assign(u.pagination, {
            enable: () => {
              u.$el.removeClass(u.params.pagination.paginationDisabledClass),
                u.pagination.$el &&
                  u.pagination.$el.removeClass(
                    u.params.pagination.paginationDisabledClass
                  ),
                o(),
                a(),
                s();
            },
            disable: d,
            render: a,
            update: s,
            init: o,
            destroy: l,
          });
        },
        function (e) {
          let { swiper: l, extendParams: t, on: i, emit: n } = e,
            o = T(),
            r,
            d,
            c,
            s,
            u = !1,
            p = null,
            h = null;
          function a() {
            if (l.params.scrollbar.el && l.scrollbar.el) {
              let { scrollbar: e, rtlTranslate: t, progress: i } = l,
                { $dragEl: s, $el: a } = e,
                n = l.params.scrollbar,
                r = d,
                o = (c - d) * i;
              t
                ? 0 < (o = -o)
                  ? ((r = d - o), (o = 0))
                  : -o + d > c && (r = c + o)
                : o < 0
                ? ((r = d + o), (o = 0))
                : o + d > c && (r = c - o),
                l.isHorizontal()
                  ? (s.transform(`translate3d(${o}px, 0, 0)`),
                    (s[0].style.width = r + "px"))
                  : (s.transform(`translate3d(0px, ${o}px, 0)`),
                    (s[0].style.height = r + "px")),
                n.hide &&
                  (clearTimeout(p),
                  (a[0].style.opacity = 1),
                  (p = setTimeout(() => {
                    (a[0].style.opacity = 0), a.transition(400);
                  }, 1e3)));
            }
          }
          function f() {
            var e, t, i;
            l.params.scrollbar.el &&
              l.scrollbar.el &&
              ((e = l.scrollbar),
              ({ $dragEl: t, $el: i } = e),
              (t[0].style.width = ""),
              (t[0].style.height = ""),
              (c = l.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
              (s =
                l.size /
                (l.virtualSize +
                  l.params.slidesOffsetBefore -
                  (l.params.centeredSlides ? l.snapGrid[0] : 0))),
              (d =
                "auto" === l.params.scrollbar.dragSize
                  ? c * s
                  : parseInt(l.params.scrollbar.dragSize, 10)),
              l.isHorizontal()
                ? (t[0].style.width = d + "px")
                : (t[0].style.height = d + "px"),
              (i[0].style.display = 1 <= s ? "none" : ""),
              l.params.scrollbar.hide && (i[0].style.opacity = 0),
              l.params.watchOverflow) &&
              l.enabled &&
              e.$el[l.isLocked ? "addClass" : "removeClass"](
                l.params.scrollbar.lockClass
              );
          }
          function m(e) {
            return l.isHorizontal()
              ? ("touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0]
                  : e
                ).clientX
              : ("touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0]
                  : e
                ).clientY;
          }
          function g(e) {
            var { scrollbar: t, rtlTranslate: i } = l,
              t = t.$el;
            let s;
            (s =
              (m(e) -
                t.offset()[l.isHorizontal() ? "left" : "top"] -
                (null !== r ? r : d / 2)) /
              (c - d)),
              (s = Math.max(Math.min(s, 1), 0)),
              i && (s = 1 - s);
            e = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * s;
            l.updateProgress(e),
              l.setTranslate(e),
              l.updateActiveIndex(),
              l.updateSlidesClasses();
          }
          function v(e) {
            var t = l.params.scrollbar,
              { scrollbar: i, $wrapperEl: s } = l,
              { $el: i, $dragEl: a } = i;
            (u = !0),
              (r =
                e.target === a[0] || e.target === a
                  ? m(e) -
                    e.target.getBoundingClientRect()[
                      l.isHorizontal() ? "left" : "top"
                    ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              s.transition(100),
              a.transition(100),
              g(e),
              clearTimeout(h),
              i.transition(0),
              t.hide && i.css("opacity", 1),
              l.params.cssMode && l.$wrapperEl.css("scroll-snap-type", "none"),
              n("scrollbarDragStart", e);
          }
          function y(e) {
            var { scrollbar: t, $wrapperEl: i } = l,
              { $el: t, $dragEl: s } = t;
            u &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              g(e),
              i.transition(0),
              t.transition(0),
              s.transition(0),
              n("scrollbarDragMove", e));
          }
          function b(e) {
            let t = l.params.scrollbar,
              { scrollbar: i, $wrapperEl: s } = l,
              a = i.$el;
            u &&
              ((u = !1),
              l.params.cssMode &&
                (l.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
              t.hide &&
                (clearTimeout(h),
                (h = E(() => {
                  a.css("opacity", 0), a.transition(400);
                }, 1e3))),
              n("scrollbarDragEnd", e),
              t.snapOnRelease) &&
              l.slideToClosest();
          }
          function w(e) {
            var t,
              {
                scrollbar: i,
                touchEventsTouch: s,
                touchEventsDesktop: a,
                params: n,
                support: r,
              } = l,
              i = i.$el;
            i &&
              ((i = i[0]),
              (t = !(!r.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1,
              }),
              (n = !(!r.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1,
              }),
              i) &&
              ((e = "on" === e ? "addEventListener" : "removeEventListener"),
              r.touch
                ? (i[e](s.start, v, t), i[e](s.move, y, t), i[e](s.end, b, n))
                : (i[e](a.start, v, t), o[e](a.move, y, t), o[e](a.end, b, n)));
          }
          function x() {
            var { scrollbar: i, $el: s } = l,
              a =
                ((l.params.scrollbar = M(
                  l,
                  l.originalParams.scrollbar,
                  l.params.scrollbar,
                  { el: "swiper-scrollbar" }
                )),
                l.params.scrollbar);
            if (a.el) {
              let e = P(a.el),
                t =
                  ((e =
                    l.params.uniqueNavElements &&
                    "string" == typeof a.el &&
                    1 < e.length &&
                    1 === s.find(a.el).length
                      ? s.find(a.el)
                      : e).addClass(
                    l.isHorizontal() ? a.horizontalClass : a.verticalClass
                  ),
                  e.find("." + l.params.scrollbar.dragClass));
              0 === t.length &&
                ((t = P(`<div class="${l.params.scrollbar.dragClass}"></div>`)),
                e.append(t)),
                Object.assign(i, {
                  $el: e,
                  el: e[0],
                  $dragEl: t,
                  dragEl: t[0],
                }),
                a.draggable &&
                  l.params.scrollbar.el &&
                  l.scrollbar.el &&
                  w("on"),
                e &&
                  e[l.enabled ? "removeClass" : "addClass"](
                    l.params.scrollbar.lockClass
                  );
            }
          }
          function _() {
            var e = l.params.scrollbar,
              t = l.scrollbar.$el;
            t &&
              t.removeClass(
                l.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              l.params.scrollbar.el && l.scrollbar.el && w("off");
          }
          t({
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
              scrollbarDisabledClass: "swiper-scrollbar-disabled",
              horizontalClass: "swiper-scrollbar-horizontal",
              verticalClass: "swiper-scrollbar-vertical",
            },
          }),
            (l.scrollbar = {
              el: null,
              dragEl: null,
              $el: null,
              $dragEl: null,
            }),
            i("init", () => {
              (!1 === l.params.scrollbar.enabled ? S : (x(), f(), a))();
            }),
            i("update resize observerUpdate lock unlock", () => {
              f();
            }),
            i("setTranslate", () => {
              a();
            }),
            i("setTransition", (e, t) => {
              (t = t),
                l.params.scrollbar.el &&
                  l.scrollbar.el &&
                  l.scrollbar.$dragEl.transition(t);
            }),
            i("enable disable", () => {
              var e = l.scrollbar.$el;
              e &&
                e[l.enabled ? "removeClass" : "addClass"](
                  l.params.scrollbar.lockClass
                );
            }),
            i("destroy", () => {
              _();
            });
          let S = () => {
            l.$el.addClass(l.params.scrollbar.scrollbarDisabledClass),
              l.scrollbar.$el &&
                l.scrollbar.$el.addClass(
                  l.params.scrollbar.scrollbarDisabledClass
                ),
              _();
          };
          Object.assign(l.scrollbar, {
            enable: () => {
              l.$el.removeClass(l.params.scrollbar.scrollbarDisabledClass),
                l.scrollbar.$el &&
                  l.scrollbar.$el.removeClass(
                    l.params.scrollbar.scrollbarDisabledClass
                  ),
                x(),
                f(),
                a();
            },
            disable: S,
            updateSize: f,
            setTranslate: a,
            init: x,
            destroy: _,
          });
        },
        function (e) {
          let { swiper: l, extendParams: t, on: i } = e,
            n =
              (t({ parallax: { enabled: !1 } }),
              (e, t) => {
                var i = l.rtl,
                  s = P(e),
                  e = i ? -1 : 1,
                  i = s.attr("data-swiper-parallax") || "0";
                let a = s.attr("data-swiper-parallax-x"),
                  n = s.attr("data-swiper-parallax-y");
                var r = s.attr("data-swiper-parallax-scale"),
                  o = s.attr("data-swiper-parallax-opacity");
                if (
                  (a || n
                    ? ((a = a || "0"), (n = n || "0"))
                    : l.isHorizontal()
                    ? ((a = i), (n = "0"))
                    : ((n = i), (a = "0")),
                  (a =
                    0 <= a.indexOf("%")
                      ? parseInt(a, 10) * t * e + "%"
                      : a * t * e + "px"),
                  (n =
                    0 <= n.indexOf("%")
                      ? parseInt(n, 10) * t + "%"
                      : n * t + "px"),
                  null != o)
                ) {
                  let e = o - (o - 1) * (1 - Math.abs(t));
                  s[0].style.opacity = e;
                }
                if (null == r) s.transform(`translate3d(${a}, ${n}, 0px)`);
                else {
                  let e = r - (r - 1) * (1 - Math.abs(t));
                  s.transform(`translate3d(${a}, ${n}, 0px) scale(${e})`);
                }
              }),
            s = () => {
              let { $el: e, slides: t, progress: s, snapGrid: a } = l;
              e
                .children(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((e) => {
                  n(e, s);
                }),
                t.each((e, t) => {
                  let i = e.progress;
                  1 < l.params.slidesPerGroup &&
                    "auto" !== l.params.slidesPerView &&
                    (i += Math.ceil(t / 2) - s * (a.length - 1)),
                    (i = Math.min(Math.max(i, -1), 1)),
                    P(e)
                      .find(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                      )
                      .each((e) => {
                        n(e, i);
                      });
                });
            };
          i("beforeInit", () => {
            l.params.parallax.enabled &&
              ((l.params.watchSlidesProgress = !0),
              (l.originalParams.watchSlidesProgress = !0));
          }),
            i("init", () => {
              l.params.parallax.enabled && s();
            }),
            i("setTranslate", () => {
              l.params.parallax.enabled && s();
            }),
            i("setTransition", (e, t) => {
              var i;
              l.params.parallax.enabled &&
                (void 0 === (i = t) && (i = l.params.speed),
                l.$el
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    e = P(e);
                    let t =
                      parseInt(e.attr("data-swiper-parallax-duration"), 10) ||
                      i;
                    0 === i && (t = 0), e.transition(t);
                  }));
            });
        },
        function (e) {
          let { swiper: x, extendParams: t, on: i, emit: s } = e,
            _ = D();
          t({
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          }),
            (x.zoom = { enabled: !1 });
          let a,
            n,
            r,
            S = 1,
            o = !1,
            T = {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3,
            },
            E = {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {},
            },
            l = {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0,
            },
            d = 1;
          function c(e) {
            var t, i, s;
            return e.targetTouches.length < 2
              ? 1
              : ((t = e.targetTouches[0].pageX),
                (i = e.targetTouches[0].pageY),
                (s = e.targetTouches[1].pageX),
                (e = e.targetTouches[1].pageY),
                Math.sqrt((s - t) ** 2 + (e - i) ** 2));
          }
          function u(e) {
            var t = x.support,
              i = x.params.zoom;
            if (((n = !1), (r = !1), !t.gestures)) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              (n = !0), (T.scaleStart = c(e));
            }
            (T.$slideEl && T.$slideEl.length) ||
            ((T.$slideEl = P(e.target).closest("." + x.params.slideClass)),
            0 === T.$slideEl.length &&
              (T.$slideEl = x.slides.eq(x.activeIndex)),
            (T.$imageEl = T.$slideEl
              .find("." + i.containerClass)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (T.$imageWrapEl = T.$imageEl.parent("." + i.containerClass)),
            (T.maxRatio =
              T.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
            0 !== T.$imageWrapEl.length)
              ? (T.$imageEl && T.$imageEl.transition(0), (o = !0))
              : (T.$imageEl = void 0);
          }
          function p(e) {
            var t = x.support,
              i = x.params.zoom,
              s = x.zoom;
            if (!t.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (r = !0), (T.scaleMove = c(e));
            }
            T.$imageEl && 0 !== T.$imageEl.length
              ? (t.gestures
                  ? (s.scale = e.scale * S)
                  : (s.scale = (T.scaleMove / T.scaleStart) * S),
                s.scale > T.maxRatio &&
                  (s.scale =
                    T.maxRatio - 1 + (s.scale - T.maxRatio + 1) ** 0.5),
                s.scale < i.minRatio &&
                  (s.scale =
                    i.minRatio + 1 - (i.minRatio - s.scale + 1) ** 0.5),
                T.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`))
              : "gesturechange" === e.type && u(e);
          }
          function h(e) {
            var t = x.device,
              i = x.support,
              s = x.params.zoom,
              a = x.zoom;
            if (!i.gestures) {
              if (!n || !r) return;
              if (
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !t.android)
              )
                return;
              (n = !1), (r = !1);
            }
            T.$imageEl &&
              0 !== T.$imageEl.length &&
              ((a.scale = Math.max(Math.min(a.scale, T.maxRatio), s.minRatio)),
              T.$imageEl
                .transition(x.params.speed)
                .transform(`translate3d(0,0,0) scale(${a.scale})`),
              (S = a.scale),
              (o = !1),
              1 === a.scale) &&
              (T.$slideEl = void 0);
          }
          function f(e) {
            var t = x.zoom;
            if (
              T.$imageEl &&
              0 !== T.$imageEl.length &&
              ((x.allowClick = !1), E.isTouched) &&
              T.$slideEl
            ) {
              E.isMoved ||
                ((E.width = T.$imageEl[0].offsetWidth),
                (E.height = T.$imageEl[0].offsetHeight),
                (E.startX = A(T.$imageWrapEl[0], "x") || 0),
                (E.startY = A(T.$imageWrapEl[0], "y") || 0),
                (T.slideWidth = T.$slideEl[0].offsetWidth),
                (T.slideHeight = T.$slideEl[0].offsetHeight),
                T.$imageWrapEl.transition(0));
              var i = E.width * t.scale,
                t = E.height * t.scale;
              if (!(i < T.slideWidth && t < T.slideHeight)) {
                if (
                  ((E.minX = Math.min(T.slideWidth / 2 - i / 2, 0)),
                  (E.maxX = -E.minX),
                  (E.minY = Math.min(T.slideHeight / 2 - t / 2, 0)),
                  (E.maxY = -E.minY),
                  (E.touchesCurrent.x = (
                    "touchmove" === e.type ? e.targetTouches[0] : e
                  ).pageX),
                  (E.touchesCurrent.y = (
                    "touchmove" === e.type ? e.targetTouches[0] : e
                  ).pageY),
                  !E.isMoved && !o)
                ) {
                  if (
                    x.isHorizontal() &&
                    ((Math.floor(E.minX) === Math.floor(E.startX) &&
                      E.touchesCurrent.x < E.touchesStart.x) ||
                      (Math.floor(E.maxX) === Math.floor(E.startX) &&
                        E.touchesCurrent.x > E.touchesStart.x))
                  )
                    return void (E.isTouched = !1);
                  if (
                    !x.isHorizontal() &&
                    ((Math.floor(E.minY) === Math.floor(E.startY) &&
                      E.touchesCurrent.y < E.touchesStart.y) ||
                      (Math.floor(E.maxY) === Math.floor(E.startY) &&
                        E.touchesCurrent.y > E.touchesStart.y))
                  )
                    return void (E.isTouched = !1);
                }
                e.cancelable && e.preventDefault(),
                  e.stopPropagation(),
                  (E.isMoved = !0),
                  (E.currentX =
                    E.touchesCurrent.x - E.touchesStart.x + E.startX),
                  (E.currentY =
                    E.touchesCurrent.y - E.touchesStart.y + E.startY),
                  E.currentX < E.minX &&
                    (E.currentX =
                      E.minX + 1 - (E.minX - E.currentX + 1) ** 0.8),
                  E.currentX > E.maxX &&
                    (E.currentX =
                      E.maxX - 1 + (E.currentX - E.maxX + 1) ** 0.8),
                  E.currentY < E.minY &&
                    (E.currentY =
                      E.minY + 1 - (E.minY - E.currentY + 1) ** 0.8),
                  E.currentY > E.maxY &&
                    (E.currentY =
                      E.maxY - 1 + (E.currentY - E.maxY + 1) ** 0.8),
                  l.prevPositionX || (l.prevPositionX = E.touchesCurrent.x),
                  l.prevPositionY || (l.prevPositionY = E.touchesCurrent.y),
                  l.prevTime || (l.prevTime = Date.now()),
                  (l.x =
                    (E.touchesCurrent.x - l.prevPositionX) /
                    (Date.now() - l.prevTime) /
                    2),
                  (l.y =
                    (E.touchesCurrent.y - l.prevPositionY) /
                    (Date.now() - l.prevTime) /
                    2),
                  Math.abs(E.touchesCurrent.x - l.prevPositionX) < 2 &&
                    (l.x = 0),
                  Math.abs(E.touchesCurrent.y - l.prevPositionY) < 2 &&
                    (l.y = 0),
                  (l.prevPositionX = E.touchesCurrent.x),
                  (l.prevPositionY = E.touchesCurrent.y),
                  (l.prevTime = Date.now()),
                  T.$imageWrapEl.transform(
                    `translate3d(${E.currentX}px, ${E.currentY}px,0)`
                  );
              }
            }
          }
          function m() {
            var e = x.zoom;
            T.$slideEl &&
              x.previousIndex !== x.activeIndex &&
              (T.$imageEl &&
                T.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              T.$imageWrapEl && T.$imageWrapEl.transform("translate3d(0,0,0)"),
              (e.scale = 1),
              (S = 1),
              (T.$slideEl = void 0),
              (T.$imageEl = void 0),
              (T.$imageWrapEl = void 0));
          }
          function g(y) {
            var b = x.zoom,
              w = x.params.zoom;
            if (
              (T.$slideEl ||
                (y &&
                  y.target &&
                  (T.$slideEl = P(y.target).closest("." + x.params.slideClass)),
                T.$slideEl ||
                  (x.params.virtual && x.params.virtual.enabled && x.virtual
                    ? (T.$slideEl = x.$wrapperEl.children(
                        "." + x.params.slideActiveClass
                      ))
                    : (T.$slideEl = x.slides.eq(x.activeIndex))),
                (T.$imageEl = T.$slideEl
                  .find("." + w.containerClass)
                  .eq(0)
                  .find("picture, img, svg, canvas, .swiper-zoom-target")
                  .eq(0)),
                (T.$imageWrapEl = T.$imageEl.parent("." + w.containerClass))),
              T.$imageEl &&
                0 !== T.$imageEl.length &&
                T.$imageWrapEl &&
                0 !== T.$imageWrapEl.length)
            ) {
              let e, t, i, s, a, n, r, o, l, d, c, u, p, h, f, m, g, v;
              x.params.cssMode &&
                ((x.wrapperEl.style.overflow = "hidden"),
                (x.wrapperEl.style.touchAction = "none")),
                T.$slideEl.addClass("" + w.zoomedSlideClass),
                (t =
                  void 0 === E.touchesStart.x && y
                    ? ((e = ("touchend" === y.type ? y.changedTouches[0] : y)
                        .pageX),
                      ("touchend" === y.type ? y.changedTouches[0] : y).pageY)
                    : ((e = E.touchesStart.x), E.touchesStart.y)),
                (b.scale =
                  T.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                (S = T.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                y
                  ? ((g = T.$slideEl[0].offsetWidth),
                    (v = T.$slideEl[0].offsetHeight),
                    (i = T.$slideEl.offset().left + _.scrollX),
                    (s = T.$slideEl.offset().top + _.scrollY),
                    (a = i + g / 2 - e),
                    (n = s + v / 2 - t),
                    (l = T.$imageEl[0].offsetWidth),
                    (d = T.$imageEl[0].offsetHeight),
                    (c = l * b.scale),
                    (u = d * b.scale),
                    (f = -(p = Math.min(g / 2 - c / 2, 0))),
                    (m = -(h = Math.min(v / 2 - u / 2, 0))),
                    (r = a * b.scale),
                    (o = n * b.scale),
                    (r = r < p ? p : r) > f && (r = f),
                    (o = o < h ? h : o) > m && (o = m))
                  : ((r = 0), (o = 0)),
                T.$imageWrapEl
                  .transition(300)
                  .transform(`translate3d(${r}px, ${o}px,0)`),
                T.$imageEl
                  .transition(300)
                  .transform(`translate3d(0,0,0) scale(${b.scale})`);
            }
          }
          function v() {
            var e = x.zoom,
              t = x.params.zoom;
            T.$slideEl ||
              (x.params.virtual && x.params.virtual.enabled && x.virtual
                ? (T.$slideEl = x.$wrapperEl.children(
                    "." + x.params.slideActiveClass
                  ))
                : (T.$slideEl = x.slides.eq(x.activeIndex)),
              (T.$imageEl = T.$slideEl
                .find("." + t.containerClass)
                .eq(0)
                .find("picture, img, svg, canvas, .swiper-zoom-target")
                .eq(0)),
              (T.$imageWrapEl = T.$imageEl.parent("." + t.containerClass))),
              T.$imageEl &&
                0 !== T.$imageEl.length &&
                T.$imageWrapEl &&
                0 !== T.$imageWrapEl.length &&
                (x.params.cssMode &&
                  ((x.wrapperEl.style.overflow = ""),
                  (x.wrapperEl.style.touchAction = "")),
                (e.scale = 1),
                (S = 1),
                T.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                T.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                T.$slideEl.removeClass("" + t.zoomedSlideClass),
                (T.$slideEl = void 0));
          }
          function y(e) {
            var t = x.zoom;
            t.scale && 1 !== t.scale ? v() : g(e);
          }
          function b() {
            var e = x.support;
            return {
              passiveListener: !(
                "touchstart" !== x.touchEvents.start ||
                !e.passiveListener ||
                !x.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              activeListenerWithCapture: !e.passiveListener || {
                passive: !1,
                capture: !0,
              },
            };
          }
          function w() {
            return "." + x.params.slideClass;
          }
          function C(e) {
            var t = b().passiveListener,
              i = w();
            x.$wrapperEl[e]("gesturestart", i, u, t),
              x.$wrapperEl[e]("gesturechange", i, p, t),
              x.$wrapperEl[e]("gestureend", i, h, t);
          }
          function M() {
            a || ((a = !0), C("on"));
          }
          function k() {
            a && ((a = !1), C("off"));
          }
          function L() {
            var e,
              t,
              i,
              s = x.zoom;
            s.enabled ||
              ((s.enabled = !0),
              (s = x.support),
              ({ passiveListener: e, activeListenerWithCapture: t } = b()),
              (i = w()),
              s.gestures
                ? (x.$wrapperEl.on(x.touchEvents.start, M, e),
                  x.$wrapperEl.on(x.touchEvents.end, k, e))
                : "touchstart" === x.touchEvents.start &&
                  (x.$wrapperEl.on(x.touchEvents.start, i, u, e),
                  x.$wrapperEl.on(x.touchEvents.move, i, p, t),
                  x.$wrapperEl.on(x.touchEvents.end, i, h, e),
                  x.touchEvents.cancel) &&
                  x.$wrapperEl.on(x.touchEvents.cancel, i, h, e),
              x.$wrapperEl.on(
                x.touchEvents.move,
                "." + x.params.zoom.containerClass,
                f,
                t
              ));
          }
          function O() {
            var e,
              t,
              i,
              s = x.zoom;
            s.enabled &&
              ((e = x.support),
              ({ passiveListener: s, activeListenerWithCapture: t } =
                ((s.enabled = !1), b())),
              (i = w()),
              e.gestures
                ? (x.$wrapperEl.off(x.touchEvents.start, M, s),
                  x.$wrapperEl.off(x.touchEvents.end, k, s))
                : "touchstart" === x.touchEvents.start &&
                  (x.$wrapperEl.off(x.touchEvents.start, i, u, s),
                  x.$wrapperEl.off(x.touchEvents.move, i, p, t),
                  x.$wrapperEl.off(x.touchEvents.end, i, h, s),
                  x.touchEvents.cancel) &&
                  x.$wrapperEl.off(x.touchEvents.cancel, i, h, s),
              x.$wrapperEl.off(
                x.touchEvents.move,
                "." + x.params.zoom.containerClass,
                f,
                t
              ));
          }
          Object.defineProperty(x.zoom, "scale", {
            get: () => d,
            set(e) {
              var t, i;
              d !== e &&
                ((t = T.$imageEl ? T.$imageEl[0] : void 0),
                (i = T.$slideEl ? T.$slideEl[0] : void 0),
                s("zoomChange", e, t, i)),
                (d = e);
            },
          }),
            i("init", () => {
              x.params.zoom.enabled && L();
            }),
            i("destroy", () => {
              O();
            }),
            i("touchStart", (e, t) => {
              var i;
              x.zoom.enabled &&
                ((t = t), (i = x.device), T.$imageEl) &&
                0 !== T.$imageEl.length &&
                !E.isTouched &&
                (i.android && t.cancelable && t.preventDefault(),
                (E.isTouched = !0),
                (E.touchesStart.x = (
                  "touchstart" === t.type ? t.targetTouches[0] : t
                ).pageX),
                (E.touchesStart.y = (
                  "touchstart" === t.type ? t.targetTouches[0] : t
                ).pageY));
            }),
            i("touchEnd", (e, t) => {
              if (x.zoom.enabled) {
                var i = x.zoom;
                if (T.$imageEl && 0 !== T.$imageEl.length) {
                  if (!E.isTouched || !E.isMoved)
                    return void ((E.isTouched = !1), (E.isMoved = !1));
                  (E.isTouched = !1), (E.isMoved = !1);
                  let e = 300,
                    t = 300;
                  var s = l.x * e,
                    s = E.currentX + s,
                    a = l.y * t,
                    a = E.currentY + a,
                    n =
                      (0 !== l.x && (e = Math.abs((s - E.currentX) / l.x)),
                      0 !== l.y && (t = Math.abs((a - E.currentY) / l.y)),
                      Math.max(e, t)),
                    s = ((E.currentX = s), (E.currentY = a), E.width * i.scale),
                    a = E.height * i.scale;
                  (E.minX = Math.min(T.slideWidth / 2 - s / 2, 0)),
                    (E.maxX = -E.minX),
                    (E.minY = Math.min(T.slideHeight / 2 - a / 2, 0)),
                    (E.maxY = -E.minY),
                    (E.currentX = Math.max(
                      Math.min(E.currentX, E.maxX),
                      E.minX
                    )),
                    (E.currentY = Math.max(
                      Math.min(E.currentY, E.maxY),
                      E.minY
                    )),
                    T.$imageWrapEl
                      .transition(n)
                      .transform(
                        `translate3d(${E.currentX}px, ${E.currentY}px,0)`
                      );
                }
              }
            }),
            i("doubleTap", (e, t) => {
              !x.animating &&
                x.params.zoom.enabled &&
                x.zoom.enabled &&
                x.params.zoom.toggle &&
                y(t);
            }),
            i("transitionEnd", () => {
              x.zoom.enabled && x.params.zoom.enabled && m();
            }),
            i("slideChange", () => {
              x.zoom.enabled &&
                x.params.zoom.enabled &&
                x.params.cssMode &&
                m();
            }),
            Object.assign(x.zoom, {
              enable: L,
              disable: O,
              in: g,
              out: v,
              toggle: y,
            });
        },
        function (e) {
          let { swiper: c, extendParams: t, on: i, emit: u } = e,
            o =
              (t({
                lazy: {
                  checkInView: !1,
                  enabled: !1,
                  loadPrevNext: !1,
                  loadPrevNextAmount: 1,
                  loadOnTransitionStart: !1,
                  scrollingElement: "",
                  elementClass: "swiper-lazy",
                  loadingClass: "swiper-lazy-loading",
                  loadedClass: "swiper-lazy-loaded",
                  preloaderClass: "swiper-lazy-preloader",
                },
              }),
              !(c.lazy = {})),
            p = !1;
          function h(t, l) {
            void 0 === l && (l = !0);
            let d = c.params.lazy;
            if (void 0 !== t && 0 !== c.slides.length) {
              let o =
                  c.virtual && c.params.virtual.enabled
                    ? c.$wrapperEl.children(
                        `.${c.params.slideClass}[data-swiper-slide-index="${t}"]`
                      )
                    : c.slides.eq(t),
                e = o.find(
                  `.${d.elementClass}:not(.${d.loadedClass}):not(.${d.loadingClass})`
                );
              !o.hasClass(d.elementClass) ||
                o.hasClass(d.loadedClass) ||
                o.hasClass(d.loadingClass) ||
                e.push(o[0]),
                0 !== e.length &&
                  e.each((e) => {
                    let t = P(e),
                      i =
                        (t.addClass(d.loadingClass), t.attr("data-background")),
                      s = t.attr("data-src"),
                      a = t.attr("data-srcset"),
                      n = t.attr("data-sizes"),
                      r = t.parent("picture");
                    c.loadImage(t[0], s || i, a, n, !1, () => {
                      var e;
                      null == c ||
                        !c ||
                        (c && !c.params) ||
                        c.destroyed ||
                        (i
                          ? (t.css("background-image", `url("${i}")`),
                            t.removeAttr("data-background"))
                          : (a &&
                              (t.attr("srcset", a),
                              t.removeAttr("data-srcset")),
                            n &&
                              (t.attr("sizes", n), t.removeAttr("data-sizes")),
                            r.length &&
                              r.children("source").each((e) => {
                                e = P(e);
                                e.attr("data-srcset") &&
                                  (e.attr("srcset", e.attr("data-srcset")),
                                  e.removeAttr("data-srcset"));
                              }),
                            s && (t.attr("src", s), t.removeAttr("data-src"))),
                        t.addClass(d.loadedClass).removeClass(d.loadingClass),
                        o.find("." + d.preloaderClass).remove(),
                        c.params.loop &&
                          l &&
                          ((e = o.attr("data-swiper-slide-index")),
                          o.hasClass(c.params.slideDuplicateClass)
                            ? h(
                                c.$wrapperEl
                                  .children(
                                    `[data-swiper-slide-index="${e}"]:not(.${c.params.slideDuplicateClass})`
                                  )
                                  .index(),
                                !1
                              )
                            : h(
                                c.$wrapperEl
                                  .children(
                                    `.${c.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                                  )
                                  .index(),
                                !1
                              )),
                        u("lazyImageReady", o[0], t[0]),
                        c.params.autoHeight && c.updateAutoHeight());
                    }),
                      u("lazyImageLoad", o[0], t[0]);
                  });
            }
          }
          function l() {
            let { $wrapperEl: i, params: s, slides: a, activeIndex: n } = c,
              t = c.virtual && s.virtual.enabled,
              r = s.lazy,
              o = s.slidesPerView;
            function l(e) {
              if (t) {
                if (
                  i.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                    .length
                )
                  return 1;
              } else if (a[e]) return 1;
            }
            function d(e) {
              return t ? P(e).attr("data-swiper-slide-index") : P(e).index();
            }
            if (
              ("auto" === o && (o = 0),
              (p = p || !0),
              c.params.watchSlidesProgress)
            )
              i.children("." + s.slideVisibleClass).each((e) => {
                h(t ? P(e).attr("data-swiper-slide-index") : P(e).index());
              });
            else if (1 < o) for (let e = n; e < n + o; e += 1) l(e) && h(e);
            else h(n);
            if (r.loadPrevNext)
              if (1 < o || (r.loadPrevNextAmount && 1 < r.loadPrevNextAmount)) {
                let e = r.loadPrevNextAmount,
                  t = Math.ceil(o),
                  i = Math.min(n + t + Math.max(e, t), a.length),
                  s = Math.max(n - Math.max(t, e), 0);
                for (let e = n + t; e < i; e += 1) l(e) && h(e);
                for (let e = s; e < n; e += 1) l(e) && h(e);
              } else {
                let e = i.children("." + s.slideNextClass),
                  t =
                    (0 < e.length && h(d(e)),
                    i.children("." + s.slidePrevClass));
                0 < t.length && h(d(t));
              }
          }
          function d() {
            var e = D();
            if (c && !c.destroyed) {
              var t = c.params.lazy.scrollingElement
                  ? P(c.params.lazy.scrollingElement)
                  : P(e),
                s = t[0] === e,
                a = s ? e.innerWidth : t[0].offsetWidth,
                n = s ? e.innerHeight : t[0].offsetHeight,
                s = c.$el.offset(),
                e = c.rtlTranslate;
              let i = !1;
              e && (s.left -= c.$el[0].scrollLeft);
              var r = [
                [s.left, s.top],
                [s.left + c.width, s.top],
                [s.left, s.top + c.height],
                [s.left + c.width, s.top + c.height],
              ];
              for (let t = 0; t < r.length; t += 1) {
                let e = r[t];
                0 <= e[0] &&
                  e[0] <= a &&
                  0 <= e[1] &&
                  e[1] <= n &&
                  ((0 === e[0] && 0 === e[1]) || (i = !0));
              }
              e = !(
                "touchstart" !== c.touchEvents.start ||
                !c.support.passiveListener ||
                !c.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              i
                ? (l(), t.off("scroll", d, e))
                : o || ((o = !0), t.on("scroll", d, e));
            }
          }
          i("beforeInit", () => {
            c.params.lazy.enabled &&
              c.params.preloadImages &&
              (c.params.preloadImages = !1);
          }),
            i("init", () => {
              c.params.lazy.enabled && (c.params.lazy.checkInView ? d : l)();
            }),
            i("scroll", () => {
              c.params.freeMode &&
                c.params.freeMode.enabled &&
                !c.params.freeMode.sticky &&
                l();
            }),
            i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
              c.params.lazy.enabled && (c.params.lazy.checkInView ? d : l)();
            }),
            i("transitionStart", () => {
              c.params.lazy.enabled &&
                (c.params.lazy.loadOnTransitionStart ||
                  (!c.params.lazy.loadOnTransitionStart && !p)) &&
                (c.params.lazy.checkInView ? d : l)();
            }),
            i("transitionEnd", () => {
              c.params.lazy.enabled &&
                !c.params.lazy.loadOnTransitionStart &&
                (c.params.lazy.checkInView ? d : l)();
            }),
            i("slideChange", () => {
              var {
                lazy: e,
                cssMode: t,
                watchSlidesProgress: i,
                touchReleaseOnEdges: s,
                resistanceRatio: a,
              } = c.params;
              e.enabled && (t || (i && (s || 0 === a))) && l();
            }),
            i("destroy", () => {
              c.$el &&
                c.$el
                  .find("." + c.params.lazy.loadingClass)
                  .removeClass(c.params.lazy.loadingClass);
            }),
            Object.assign(c.lazy, { load: l, loadInSlide: h });
        },
        function (e) {
          let { swiper: o, extendParams: t, on: i } = e;
          function l(e, t) {
            let i = (() => {
                let i, s, a;
                return (e, t) => {
                  for (s = -1, i = e.length; 1 < i - s; )
                    e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
                  return i;
                };
              })(),
              s,
              a;
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function (e) {
                return e
                  ? ((a = i(this.x, e)),
                    (s = a - 1),
                    ((e - this.x[s]) * (this.y[a] - this.y[s])) /
                      (this.x[a] - this.x[s]) +
                      this.y[s])
                  : 0;
              }),
              this
            );
          }
          function s() {
            o.controller.control &&
              o.controller.spline &&
              ((o.controller.spline = void 0), delete o.controller.spline);
          }
          t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
            (o.controller = { control: void 0 }),
            i("beforeInit", () => {
              o.controller.control = o.params.controller.control;
            }),
            i("update", () => {
              s();
            }),
            i("resize", () => {
              s();
            }),
            i("observerUpdate", () => {
              s();
            }),
            i("setTranslate", (e, t, i) => {
              o.controller.control && o.controller.setTranslate(t, i);
            }),
            i("setTransition", (e, t, i) => {
              o.controller.control && o.controller.setTransition(t, i);
            }),
            Object.assign(o.controller, {
              setTranslate: function (e, t) {
                var i = o.controller.control;
                let s, a;
                var n = o.constructor;
                function r(e) {
                  var t,
                    i = o.rtlTranslate ? -o.translate : o.translate;
                  "slide" === o.params.controller.by &&
                    ((t = e),
                    o.controller.spline ||
                      (o.controller.spline = o.params.loop
                        ? new l(o.slidesGrid, t.slidesGrid)
                        : new l(o.snapGrid, t.snapGrid)),
                    (a = -o.controller.spline.interpolate(-i))),
                    (a && "container" !== o.params.controller.by) ||
                      ((s =
                        (e.maxTranslate() - e.minTranslate()) /
                        (o.maxTranslate() - o.minTranslate())),
                      (a = (i - o.minTranslate()) * s + e.minTranslate())),
                    o.params.controller.inverse && (a = e.maxTranslate() - a),
                    e.updateProgress(a),
                    e.setTranslate(a, o),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                }
                if (Array.isArray(i))
                  for (let e = 0; e < i.length; e += 1)
                    i[e] !== t && i[e] instanceof n && r(i[e]);
                else i instanceof n && t !== i && r(i);
              },
              setTransition: function (t, e) {
                let i = o.constructor,
                  s = o.controller.control,
                  a;
                function n(e) {
                  e.setTransition(t, o),
                    0 !== t &&
                      (e.transitionStart(),
                      e.params.autoHeight &&
                        E(() => {
                          e.updateAutoHeight();
                        }),
                      e.$wrapperEl.transitionEnd(() => {
                        s &&
                          (e.params.loop &&
                            "slide" === o.params.controller.by &&
                            e.loopFix(),
                          e.transitionEnd());
                      }));
                }
                if (Array.isArray(s))
                  for (a = 0; a < s.length; a += 1)
                    s[a] !== e && s[a] instanceof i && n(s[a]);
                else s instanceof i && e !== s && n(s);
              },
            });
        },
        function (e) {
          let { swiper: r, extendParams: t, on: i } = e,
            o =
              (t({
                a11y: {
                  enabled: !0,
                  notificationClass: "swiper-notification",
                  prevSlideMessage: "Previous slide",
                  nextSlideMessage: "Next slide",
                  firstSlideMessage: "This is the first slide",
                  lastSlideMessage: "This is the last slide",
                  paginationBulletMessage: "Go to slide {{index}}",
                  slideLabelMessage: "{{index}} / {{slidesLength}}",
                  containerMessage: null,
                  containerRoleDescriptionMessage: null,
                  itemRoleDescriptionMessage: null,
                  slideRole: "group",
                  id: null,
                },
              }),
              (r.a11y = { clicked: !1 }),
              null);
          function s(e) {
            var t = o;
            0 !== t.length && (t.html(""), t.html(e));
          }
          function a(e) {
            e.attr("tabIndex", "0");
          }
          function n(e) {
            e.attr("tabIndex", "-1");
          }
          function l(e, t) {
            e.attr("role", t);
          }
          function d(e, t) {
            e.attr("aria-roledescription", t);
          }
          function c(e, t) {
            e.attr("aria-label", t);
          }
          function u(e) {
            e.attr("aria-disabled", !0);
          }
          function p(e) {
            e.attr("aria-disabled", !1);
          }
          function h(e) {
            var t;
            (13 !== e.keyCode && 32 !== e.keyCode) ||
              ((t = r.params.a11y),
              (e = P(e.target)),
              r.navigation &&
                r.navigation.$nextEl &&
                e.is(r.navigation.$nextEl) &&
                ((r.isEnd && !r.params.loop) || r.slideNext(),
                r.isEnd ? s(t.lastSlideMessage) : s(t.nextSlideMessage)),
              r.navigation &&
                r.navigation.$prevEl &&
                e.is(r.navigation.$prevEl) &&
                ((r.isBeginning && !r.params.loop) || r.slidePrev(),
                r.isBeginning ? s(t.firstSlideMessage) : s(t.prevSlideMessage)),
              r.pagination &&
                e.is(k(r.params.pagination.bulletClass)) &&
                e[0].click());
          }
          function f() {
            return (
              r.pagination &&
              r.pagination.bullets &&
              r.pagination.bullets.length
            );
          }
          function m() {
            return f() && r.params.pagination.clickable;
          }
          let g = (e, t, i) => {
              a(e),
                "BUTTON" !== e[0].tagName &&
                  (l(e, "button"), e.on("keydown", h)),
                c(e, i),
                e.attr("aria-controls", t);
            },
            v = () => {
              r.a11y.clicked = !0;
            },
            y = () => {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  r.destroyed || (r.a11y.clicked = !1);
                });
              });
            },
            b = (e) => {
              var t, i, s;
              r.a11y.clicked ||
                ((t = e.target.closest("." + r.params.slideClass)) &&
                  r.slides.includes(t) &&
                  ((i = r.slides.indexOf(t) === r.activeIndex),
                  (s =
                    r.params.watchSlidesProgress &&
                    r.visibleSlides &&
                    r.visibleSlides.includes(t)),
                  i ||
                    s ||
                    (e.sourceCapabilities &&
                      e.sourceCapabilities.firesTouchEvents) ||
                    (r.isHorizontal()
                      ? (r.el.scrollLeft = 0)
                      : (r.el.scrollTop = 0),
                    r.slideTo(r.slides.indexOf(t), 0))));
            },
            w = () => {
              let i = r.params.a11y,
                s =
                  (i.itemRoleDescriptionMessage &&
                    d(P(r.slides), i.itemRoleDescriptionMessage),
                  i.slideRole && l(P(r.slides), i.slideRole),
                  (r.params.loop
                    ? r.slides.filter(
                        (e) =>
                          !e.classList.contains(r.params.slideDuplicateClass)
                      )
                    : r.slides
                  ).length);
              i.slideLabelMessage &&
                r.slides.each((e, t) => {
                  (e = P(e)),
                    (t = r.params.loop
                      ? parseInt(e.attr("data-swiper-slide-index"), 10)
                      : t);
                  c(
                    e,
                    i.slideLabelMessage
                      .replace(/\{\{index\}\}/, t + 1)
                      .replace(/\{\{slidesLength\}\}/, s)
                  );
                });
            };
          i("beforeInit", () => {
            o = P(
              `<span class="${r.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
            );
          }),
            i("afterInit", () => {
              r.params.a11y.enabled &&
                (() => {
                  var e = r.params.a11y,
                    t = (r.$el.append(o), r.$el),
                    t =
                      (e.containerRoleDescriptionMessage &&
                        d(t, e.containerRoleDescriptionMessage),
                      e.containerMessage && c(t, e.containerMessage),
                      r.$wrapperEl),
                    i =
                      e.id ||
                      t.attr("id") ||
                      "swiper-wrapper-" +
                        "x"
                          .repeat((i = void 0 === (i = 16) ? 16 : i))
                          .replace(/x/g, () =>
                            Math.round(16 * Math.random()).toString(16)
                          ),
                    s =
                      r.params.autoplay && r.params.autoplay.enabled
                        ? "off"
                        : "polite";
                  let a, n;
                  t.attr("id", i),
                    t.attr("aria-live", s),
                    w(),
                    r.navigation &&
                      r.navigation.$nextEl &&
                      (a = r.navigation.$nextEl),
                    r.navigation &&
                      r.navigation.$prevEl &&
                      (n = r.navigation.$prevEl),
                    a && a.length && g(a, i, e.nextSlideMessage),
                    n && n.length && g(n, i, e.prevSlideMessage),
                    m() &&
                      r.pagination.$el.on(
                        "keydown",
                        k(r.params.pagination.bulletClass),
                        h
                      ),
                    r.$el.on("focus", b, !0),
                    r.$el.on("pointerdown", v, !0),
                    r.$el.on("pointerup", y, !0);
                })();
            }),
            i(
              "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
              () => {
                r.params.a11y.enabled && w();
              }
            ),
            i("fromEdge toEdge afterInit lock unlock", () => {
              var e, t;
              r.params.a11y.enabled &&
                !r.params.loop &&
                !r.params.rewind &&
                r.navigation &&
                (({ $nextEl: e, $prevEl: t } = r.navigation),
                t && 0 < t.length && (r.isBeginning ? (u(t), n) : (p(t), a))(t),
                e && 0 < e.length) &&
                (r.isEnd ? (u(e), n) : (p(e), a))(e);
            }),
            i("paginationUpdate", () => {
              if (r.params.a11y.enabled) {
                let t = r.params.a11y;
                f() &&
                  r.pagination.bullets.each((e) => {
                    e = P(e);
                    r.params.pagination.clickable &&
                      (a(e),
                      r.params.pagination.renderBullet ||
                        (l(e, "button"),
                        c(
                          e,
                          t.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            e.index() + 1
                          )
                        ))),
                      e.is("." + r.params.pagination.bulletActiveClass)
                        ? e.attr("aria-current", "true")
                        : e.removeAttr("aria-current");
                  });
              }
            }),
            i("destroy", () => {
              if (r.params.a11y.enabled) {
                let e, t;
                o && 0 < o.length && o.remove(),
                  r.navigation &&
                    r.navigation.$nextEl &&
                    (e = r.navigation.$nextEl),
                  r.navigation &&
                    r.navigation.$prevEl &&
                    (t = r.navigation.$prevEl),
                  e && e.off("keydown", h),
                  t && t.off("keydown", h),
                  m() &&
                    r.pagination.$el.off(
                      "keydown",
                      k(r.params.pagination.bulletClass),
                      h
                    ),
                  r.$el.off("focus", b, !0),
                  r.$el.off("pointerdown", v, !0),
                  r.$el.off("pointerup", y, !0);
              }
            });
        },
        function (e) {
          let { swiper: r, extendParams: t, on: i } = e,
            n =
              (t({
                history: {
                  enabled: !1,
                  root: "",
                  replaceState: !1,
                  key: "slides",
                  keepQuery: !1,
                },
              }),
              !1),
            s = {},
            o = (e) =>
              e
                .toString()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, ""),
            a = (e) => {
              var t = D(),
                e = (e ? new URL(e) : t.location).pathname
                  .slice(1)
                  .split("/")
                  .filter((e) => "" !== e),
                t = e.length;
              return { key: e[t - 2], value: e[t - 1] };
            },
            l = (i, e) => {
              var s = D();
              if (n && r.params.history.enabled) {
                var a = r.params.url ? new URL(r.params.url) : s.location,
                  e = r.slides.eq(e);
                let t = o(e.attr("data-history"));
                if (0 < r.params.history.root.length) {
                  let e = r.params.history.root;
                  "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                    (t = e + `/${i}/` + t);
                } else a.pathname.includes(i) || (t = i + "/" + t);
                r.params.history.keepQuery && (t += a.search);
                e = s.history.state;
                (e && e.value === t) ||
                  (r.params.history.replaceState
                    ? s.history.replaceState({ value: t }, null, t)
                    : s.history.pushState({ value: t }, null, t));
              }
            },
            d = (i, s, a) => {
              if (s)
                for (let e = 0, t = r.slides.length; e < t; e += 1) {
                  var n = r.slides.eq(e);
                  if (
                    o(n.attr("data-history")) === s &&
                    !n.hasClass(r.params.slideDuplicateClass)
                  ) {
                    let e = n.index();
                    r.slideTo(e, i, a);
                  }
                }
              else r.slideTo(0, i, a);
            },
            c = () => {
              (s = a(r.params.url)), d(r.params.speed, s.value, !1);
            };
          i("init", () => {
            var e;
            r.params.history.enabled &&
              ((e = D()), r.params.history) &&
              (e.history && e.history.pushState
                ? ((n = !0),
                  ((s = a(r.params.url)).key || s.value) &&
                    (d(0, s.value, r.params.runCallbacksOnInit),
                    r.params.history.replaceState ||
                      e.addEventListener("popstate", c)))
                : ((r.params.history.enabled = !1),
                  (r.params.hashNavigation.enabled = !0)));
          }),
            i("destroy", () => {
              var e;
              r.params.history.enabled &&
                ((e = D()),
                r.params.history.replaceState ||
                  e.removeEventListener("popstate", c));
            }),
            i("transitionEnd _freeModeNoMomentumRelease", () => {
              n && l(r.params.history.key, r.activeIndex);
            }),
            i("slideChange", () => {
              n && r.params.cssMode && l(r.params.history.key, r.activeIndex);
            });
        },
        function (e) {
          let { swiper: a, extendParams: t, emit: i, on: s } = e,
            n = !1,
            r = T(),
            o = D(),
            l =
              (t({
                hashNavigation: {
                  enabled: !1,
                  replaceState: !1,
                  watchState: !1,
                },
              }),
              () => {
                i("hashChange");
                var e = r.location.hash.replace("#", "");
                e !== a.slides.eq(a.activeIndex).attr("data-hash") &&
                  void 0 !==
                    (e = a.$wrapperEl
                      .children(`.${a.params.slideClass}[data-hash="${e}"]`)
                      .index()) &&
                  a.slideTo(e);
              }),
            d = () => {
              var e;
              n &&
                a.params.hashNavigation.enabled &&
                (a.params.hashNavigation.replaceState &&
                o.history &&
                o.history.replaceState
                  ? o.history.replaceState(
                      null,
                      null,
                      "#" + a.slides.eq(a.activeIndex).attr("data-hash") || ""
                    )
                  : ((e =
                      (e = a.slides.eq(a.activeIndex)).attr("data-hash") ||
                      e.attr("data-history")),
                    (r.location.hash = e || "")),
                i("hashSet"));
            };
          s("init", () => {
            if (
              a.params.hashNavigation.enabled &&
              !(
                !a.params.hashNavigation.enabled ||
                (a.params.history && a.params.history.enabled)
              )
            ) {
              n = !0;
              let i = r.location.hash.replace("#", "");
              if (i)
                for (let e = 0, t = a.slides.length; e < t; e += 1) {
                  var s = a.slides.eq(e);
                  if (
                    (s.attr("data-hash") || s.attr("data-history")) === i &&
                    !s.hasClass(a.params.slideDuplicateClass)
                  ) {
                    let e = s.index();
                    a.slideTo(e, 0, a.params.runCallbacksOnInit, !0);
                  }
                }
              a.params.hashNavigation.watchState && P(o).on("hashchange", l);
            }
          }),
            s("destroy", () => {
              a.params.hashNavigation.enabled &&
                a.params.hashNavigation.watchState &&
                P(o).off("hashchange", l);
            }),
            s("transitionEnd _freeModeNoMomentumRelease", () => {
              n && d();
            }),
            s("slideChange", () => {
              n && a.params.cssMode && d();
            });
        },
        function (e) {
          let i,
            { swiper: s, extendParams: t, on: a, emit: n } = e;
          function r() {
            if (s.size) {
              var t = s.slides.eq(s.activeIndex);
              let e = s.params.autoplay.delay;
              t.attr("data-swiper-autoplay") &&
                (e = t.attr("data-swiper-autoplay") || s.params.autoplay.delay),
                clearTimeout(i),
                (i = E(() => {
                  let e;
                  s.params.autoplay.reverseDirection
                    ? s.params.loop
                      ? (s.loopFix(),
                        (e = s.slidePrev(s.params.speed, !0, !0)),
                        n("autoplay"))
                      : s.isBeginning
                      ? s.params.autoplay.stopOnLastSlide
                        ? l()
                        : ((e = s.slideTo(
                            s.slides.length - 1,
                            s.params.speed,
                            !0,
                            !0
                          )),
                          n("autoplay"))
                      : ((e = s.slidePrev(s.params.speed, !0, !0)),
                        n("autoplay"))
                    : s.params.loop
                    ? (s.loopFix(),
                      (e = s.slideNext(s.params.speed, !0, !0)),
                      n("autoplay"))
                    : s.isEnd
                    ? s.params.autoplay.stopOnLastSlide
                      ? l()
                      : ((e = s.slideTo(0, s.params.speed, !0, !0)),
                        n("autoplay"))
                    : ((e = s.slideNext(s.params.speed, !0, !0)),
                      n("autoplay")),
                    ((s.params.cssMode && s.autoplay.running) || !1 === e) &&
                      r();
                }, e));
            } else (s.autoplay.running = !1), (s.autoplay.paused = !1);
          }
          function o() {
            return (
              void 0 === i &&
              !s.autoplay.running &&
              ((s.autoplay.running = !0), n("autoplayStart"), r(), !0)
            );
          }
          function l() {
            return (
              !!s.autoplay.running &&
              void 0 !== i &&
              (i && (clearTimeout(i), (i = void 0)),
              (s.autoplay.running = !1),
              n("autoplayStop"),
              !0)
            );
          }
          function d(e) {
            !s.autoplay.running ||
              s.autoplay.paused ||
              (i && clearTimeout(i),
              (s.autoplay.paused = !0),
              0 !== e && s.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    s.$wrapperEl[0].addEventListener(e, u);
                  })
                : ((s.autoplay.paused = !1), r()));
          }
          function c() {
            var e = T();
            "hidden" === e.visibilityState && s.autoplay.running && d(),
              "visible" === e.visibilityState &&
                s.autoplay.paused &&
                (r(), (s.autoplay.paused = !1));
          }
          function u(e) {
            s &&
              !s.destroyed &&
              s.$wrapperEl &&
              e.target === s.$wrapperEl[0] &&
              (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                s.$wrapperEl[0].removeEventListener(e, u);
              }),
              (s.autoplay.paused = !1),
              (s.autoplay.running ? r : l)());
          }
          function p() {
            (s.params.autoplay.disableOnInteraction
              ? l
              : (n("autoplayPause"), d))(),
              ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                s.$wrapperEl[0].removeEventListener(e, u);
              });
          }
          function h() {
            s.params.autoplay.disableOnInteraction ||
              ((s.autoplay.paused = !1), n("autoplayResume"), r());
          }
          (s.autoplay = { running: !1, paused: !1 }),
            t({
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            }),
            a("init", () => {
              s.params.autoplay.enabled &&
                (o(),
                T().addEventListener("visibilitychange", c),
                s.params.autoplay.pauseOnMouseEnter) &&
                (s.$el.on("mouseenter", p), s.$el.on("mouseleave", h));
            }),
            a("beforeTransitionStart", (e, t, i) => {
              s.autoplay.running &&
                (i || !s.params.autoplay.disableOnInteraction
                  ? s.autoplay.pause(t)
                  : l());
            }),
            a("sliderFirstMove", () => {
              s.autoplay.running &&
                (s.params.autoplay.disableOnInteraction ? l : d)();
            }),
            a("touchEnd", () => {
              s.params.cssMode &&
                s.autoplay.paused &&
                !s.params.autoplay.disableOnInteraction &&
                r();
            }),
            a("destroy", () => {
              s.$el.off("mouseenter", p),
                s.$el.off("mouseleave", h),
                s.autoplay.running && l(),
                T().removeEventListener("visibilitychange", c);
            }),
            Object.assign(s.autoplay, { pause: d, run: r, start: o, stop: l });
        },
        function (e) {
          let { swiper: d, extendParams: t, on: i } = e,
            s =
              (t({
                thumbs: {
                  swiper: null,
                  multipleActiveThumbs: !0,
                  autoScrollOffset: 0,
                  slideThumbActiveClass: "swiper-slide-thumb-active",
                  thumbsContainerClass: "swiper-thumbs",
                },
              }),
              !1),
            a = !1;
          function n() {
            var i = d.thumbs.swiper;
            if (i && !i.destroyed) {
              let e = i.clickedIndex,
                t = i.clickedSlide;
              if (
                !(
                  (t && P(t).hasClass(d.params.thumbs.slideThumbActiveClass)) ||
                  null == e
                )
              ) {
                let s;
                if (
                  ((s = i.params.loop
                    ? parseInt(
                        P(i.clickedSlide).attr("data-swiper-slide-index"),
                        10
                      )
                    : e),
                  d.params.loop)
                ) {
                  let e = d.activeIndex,
                    t =
                      (d.slides.eq(e).hasClass(d.params.slideDuplicateClass) &&
                        (d.loopFix(),
                        (d._clientLeft = d.$wrapperEl[0].clientLeft),
                        (e = d.activeIndex)),
                      d.slides
                        .eq(e)
                        .prevAll(`[data-swiper-slide-index="${s}"]`)
                        .eq(0)
                        .index()),
                    i = d.slides
                      .eq(e)
                      .nextAll(`[data-swiper-slide-index="${s}"]`)
                      .eq(0)
                      .index();
                  s = void 0 === t || (void 0 !== i && i - e < e - t) ? i : t;
                }
                d.slideTo(s);
              }
            }
          }
          function r() {
            var e = d.params.thumbs;
            if (s) return !1;
            s = !0;
            var t = d.constructor;
            return (
              e.swiper instanceof t
                ? ((d.thumbs.swiper = e.swiper),
                  Object.assign(d.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object.assign(d.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }))
                : l(e.swiper) &&
                  ((e = Object.assign({}, e.swiper)),
                  Object.assign(e, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  (d.thumbs.swiper = new t(e)),
                  (a = !0)),
              d.thumbs.swiper.$el.addClass(
                d.params.thumbs.thumbsContainerClass
              ),
              d.thumbs.swiper.on("tap", n),
              !0
            );
          }
          function o(n) {
            var r = d.thumbs.swiper;
            if (r && !r.destroyed) {
              let e =
                  "auto" === r.params.slidesPerView
                    ? r.slidesPerViewDynamic()
                    : r.params.slidesPerView,
                t = 1;
              var i = d.params.thumbs.slideThumbActiveClass;
              if (
                (1 < d.params.slidesPerView &&
                  !d.params.centeredSlides &&
                  (t = d.params.slidesPerView),
                d.params.thumbs.multipleActiveThumbs || (t = 1),
                (t = Math.floor(t)),
                r.slides.removeClass(i),
                r.params.loop || (r.params.virtual && r.params.virtual.enabled))
              )
                for (let e = 0; e < t; e += 1)
                  r.$wrapperEl
                    .children(`[data-swiper-slide-index="${d.realIndex + e}"]`)
                    .addClass(i);
              else
                for (let e = 0; e < t; e += 1)
                  r.slides.eq(d.realIndex + e).addClass(i);
              var o = d.params.thumbs.autoScrollOffset,
                l = o && !r.params.loop;
              if (d.realIndex !== r.realIndex || l) {
                let i,
                  s,
                  a = r.activeIndex;
                if (r.params.loop) {
                  r.slides.eq(a).hasClass(r.params.slideDuplicateClass) &&
                    (r.loopFix(),
                    (r._clientLeft = r.$wrapperEl[0].clientLeft),
                    (a = r.activeIndex));
                  let e = r.slides
                      .eq(a)
                      .prevAll(`[data-swiper-slide-index="${d.realIndex}"]`)
                      .eq(0)
                      .index(),
                    t = r.slides
                      .eq(a)
                      .nextAll(`[data-swiper-slide-index="${d.realIndex}"]`)
                      .eq(0)
                      .index();
                  (i =
                    void 0 === e
                      ? t
                      : void 0 === t
                      ? e
                      : t - a == a - e
                      ? 1 < r.params.slidesPerGroup
                        ? t
                        : a
                      : t - a < a - e
                      ? t
                      : e),
                    (s = d.activeIndex > d.previousIndex ? "next" : "prev");
                } else
                  (i = d.realIndex),
                    (s = i > d.previousIndex ? "next" : "prev");
                l && (i += "next" === s ? o : -1 * o),
                  r.visibleSlidesIndexes &&
                    r.visibleSlidesIndexes.indexOf(i) < 0 &&
                    (r.params.centeredSlides
                      ? (i =
                          i > a
                            ? i - Math.floor(e / 2) + 1
                            : i + Math.floor(e / 2) - 1)
                      : i > a && r.params.slidesPerGroup,
                    r.slideTo(i, n ? 0 : void 0));
              }
            }
          }
          (d.thumbs = { swiper: null }),
            i("beforeInit", () => {
              var e = d.params.thumbs;
              e && e.swiper && (r(), o(!0));
            }),
            i("slideChange update resize observerUpdate", () => {
              o();
            }),
            i("setTransition", (e, t) => {
              var i = d.thumbs.swiper;
              i && !i.destroyed && i.setTransition(t);
            }),
            i("beforeDestroy", () => {
              var e = d.thumbs.swiper;
              e && !e.destroyed && a && e.destroy();
            }),
            Object.assign(d.thumbs, { init: r, update: o });
        },
        function (e) {
          let { swiper: p, extendParams: t, emit: h, once: f } = e;
          t({
            freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: 0.02,
            },
          }),
            Object.assign(p, {
              freeMode: {
                onTouchStart: function () {
                  var e = p.getTranslate();
                  p.setTranslate(e),
                    p.setTransition(0),
                    (p.touchEventsData.velocities.length = 0),
                    p.freeMode.onTouchEnd({
                      currentPos: p.rtl ? p.translate : -p.translate,
                    });
                },
                onTouchMove: function () {
                  var { touchEventsData: e, touches: t } = p;
                  0 === e.velocities.length &&
                    e.velocities.push({
                      position: t[p.isHorizontal() ? "startX" : "startY"],
                      time: e.touchStartTime,
                    }),
                    e.velocities.push({
                      position: t[p.isHorizontal() ? "currentX" : "currentY"],
                      time: v(),
                    });
                },
                onTouchEnd: function (r) {
                  let e = r.currentPos,
                    {
                      params: o,
                      $wrapperEl: l,
                      rtlTranslate: d,
                      snapGrid: c,
                      touchEventsData: u,
                    } = p,
                    t = v() - u.touchStartTime;
                  if (e < -p.minTranslate()) p.slideTo(p.activeIndex);
                  else if (e > -p.maxTranslate())
                    p.slides.length < c.length
                      ? p.slideTo(c.length - 1)
                      : p.slideTo(p.slides.length - 1);
                  else {
                    if (o.freeMode.momentum) {
                      if (1 < u.velocities.length) {
                        let e = u.velocities.pop(),
                          t = u.velocities.pop(),
                          i = e.position - t.position,
                          s = e.time - t.time;
                        (p.velocity = i / s),
                          (p.velocity /= 2),
                          Math.abs(p.velocity) < o.freeMode.minimumVelocity &&
                            (p.velocity = 0),
                          (150 < s || 300 < v() - e.time) && (p.velocity = 0);
                      } else p.velocity = 0;
                      (p.velocity *= o.freeMode.momentumVelocityRatio),
                        (u.velocities.length = 0);
                      let i = 1e3 * o.freeMode.momentumRatio,
                        e = p.velocity * i,
                        s = p.translate + e;
                      d && (s = -s);
                      let t,
                        a = !1;
                      r =
                        20 *
                        Math.abs(p.velocity) *
                        o.freeMode.momentumBounceRatio;
                      let n;
                      if (s < p.maxTranslate())
                        o.freeMode.momentumBounce
                          ? (s + p.maxTranslate() < -r &&
                              (s = p.maxTranslate() - r),
                            (t = p.maxTranslate()),
                            (a = !0),
                            (u.allowMomentumBounce = !0))
                          : (s = p.maxTranslate()),
                          o.loop && o.centeredSlides && (n = !0);
                      else if (s > p.minTranslate())
                        o.freeMode.momentumBounce
                          ? (s - p.minTranslate() > r &&
                              (s = p.minTranslate() + r),
                            (t = p.minTranslate()),
                            (a = !0),
                            (u.allowMomentumBounce = !0))
                          : (s = p.minTranslate()),
                          o.loop && o.centeredSlides && (n = !0);
                      else if (o.freeMode.sticky) {
                        let t;
                        for (let e = 0; e < c.length; e += 1)
                          if (c[e] > -s) {
                            t = e;
                            break;
                          }
                        s = -(s =
                          Math.abs(c[t] - s) < Math.abs(c[t - 1] - s) ||
                          "next" === p.swipeDirection
                            ? c[t]
                            : c[t - 1]);
                      }
                      if (
                        (n &&
                          f("transitionEnd", () => {
                            p.loopFix();
                          }),
                        0 !== p.velocity)
                      ) {
                        if (
                          ((i = d
                            ? Math.abs((-s - p.translate) / p.velocity)
                            : Math.abs((s - p.translate) / p.velocity)),
                          o.freeMode.sticky)
                        ) {
                          let e = Math.abs((d ? -s : s) - p.translate),
                            t = p.slidesSizesGrid[p.activeIndex];
                          i =
                            e < t
                              ? o.speed
                              : e < 2 * t
                              ? 1.5 * o.speed
                              : 2.5 * o.speed;
                        }
                      } else if (o.freeMode.sticky)
                        return void p.slideToClosest();
                      o.freeMode.momentumBounce && a
                        ? (p.updateProgress(t),
                          p.setTransition(i),
                          p.setTranslate(s),
                          p.transitionStart(!0, p.swipeDirection),
                          (p.animating = !0),
                          l.transitionEnd(() => {
                            p &&
                              !p.destroyed &&
                              u.allowMomentumBounce &&
                              (h("momentumBounce"),
                              p.setTransition(o.speed),
                              setTimeout(() => {
                                p.setTranslate(t),
                                  l.transitionEnd(() => {
                                    p && !p.destroyed && p.transitionEnd();
                                  });
                              }, 0));
                          }))
                        : p.velocity
                        ? (h("_freeModeNoMomentumRelease"),
                          p.updateProgress(s),
                          p.setTransition(i),
                          p.setTranslate(s),
                          p.transitionStart(!0, p.swipeDirection),
                          p.animating ||
                            ((p.animating = !0),
                            l.transitionEnd(() => {
                              p && !p.destroyed && p.transitionEnd();
                            })))
                        : p.updateProgress(s),
                        p.updateActiveIndex(),
                        p.updateSlidesClasses();
                    } else {
                      if (o.freeMode.sticky) return void p.slideToClosest();
                      o.freeMode && h("_freeModeNoMomentumRelease");
                    }
                    (!o.freeMode.momentum || t >= o.longSwipesMs) &&
                      (p.updateProgress(),
                      p.updateActiveIndex(),
                      p.updateSlidesClasses());
                  }
                },
              },
            });
        },
        function (e) {
          let u,
            p,
            h,
            { swiper: f, extendParams: t } = e;
          t({ grid: { rows: 1, fill: "column" } }),
            (f.grid = {
              initSlides: (e) => {
                var t = f.params.slidesPerView,
                  { rows: i, fill: s } = f.params.grid;
                (p = u / i),
                  (h = Math.floor(e / i)),
                  (u = Math.floor(e / i) === e / i ? e : Math.ceil(e / i) * i),
                  "auto" !== t && "row" === s && (u = Math.max(u, t * i));
              },
              updateSlide: (s, a, n, e) => {
                var { slidesPerGroup: r, spaceBetween: t } = f.params,
                  { rows: o, fill: i } = f.params.grid;
                let l, d, c;
                if ("row" === i && 1 < r) {
                  let e = Math.floor(s / (r * o)),
                    t = s - o * r * e,
                    i =
                      0 === e ? r : Math.min(Math.ceil((n - e * o * r) / o), r);
                  (c = Math.floor(t / i)),
                    (l = (d = t - c * i + e * r) + (c * u) / o),
                    a.css({ "-webkit-order": l, order: l });
                } else
                  "column" === i
                    ? ((d = Math.floor(s / o)),
                      (c = s - d * o),
                      (d > h || (d === h && c === o - 1)) &&
                        (c += 1) >= o &&
                        ((c = 0), (d += 1)))
                    : ((c = Math.floor(s / p)), (d = s - c * p));
                a.css(e("margin-top"), 0 !== c ? t && t + "px" : "");
              },
              updateWrapperSize: (e, s, t) => {
                var {
                    spaceBetween: i,
                    centeredSlides: a,
                    roundLengths: n,
                  } = f.params,
                  r = f.params.grid.rows;
                if (
                  ((f.virtualSize = (e + i) * u),
                  (f.virtualSize = Math.ceil(f.virtualSize / r) - i),
                  f.$wrapperEl.css({ [t("width")]: f.virtualSize + i + "px" }),
                  a)
                ) {
                  s.splice(0, s.length);
                  let i = [];
                  for (let t = 0; t < s.length; t += 1) {
                    let e = s[t];
                    n && (e = Math.floor(e)),
                      s[t] < f.virtualSize + s[0] && i.push(e);
                  }
                  s.push(...i);
                }
              },
            });
        },
        function (e) {
          e = e.swiper;
          Object.assign(e, {
            appendSlide: function (t) {
              var { $wrapperEl: i, params: e } = this;
              if (
                (e.loop && this.loopDestroy(),
                "object" == typeof t && "length" in t)
              )
                for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
              else i.append(t);
              e.loop && this.loopCreate(), e.observer || this.update();
            }.bind(e),
            prependSlide: function (t) {
              var e = this,
                { params: i, $wrapperEl: s, activeIndex: a } = e;
              i.loop && e.loopDestroy();
              let n = a + 1;
              if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && s.prepend(t[e]);
                n = a + t.length;
              } else s.prepend(t);
              i.loop && e.loopCreate(),
                i.observer || e.update(),
                e.slideTo(n, 0, !1);
            }.bind(e),
            addSlide: function (i, t) {
              var s = this,
                { $wrapperEl: a, params: n, activeIndex: r } = s;
              let o = r;
              if (
                (n.loop &&
                  ((o -= s.loopedSlides),
                  s.loopDestroy(),
                  (s.slides = a.children("." + n.slideClass))),
                (r = s.slides.length),
                i <= 0)
              )
                s.prependSlide(t);
              else if (r <= i) s.appendSlide(t);
              else {
                let e = o > i ? o + 1 : o;
                var l = [];
                for (let t = r - 1; t >= i; --t) {
                  let e = s.slides.eq(t);
                  e.remove(), l.unshift(e);
                }
                if ("object" == typeof t && "length" in t) {
                  for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
                  e = o > i ? o + t.length : o;
                } else a.append(t);
                for (let e = 0; e < l.length; e += 1) a.append(l[e]);
                n.loop && s.loopCreate(),
                  n.observer || s.update(),
                  n.loop
                    ? s.slideTo(e + s.loopedSlides, 0, !1)
                    : s.slideTo(e, 0, !1);
              }
            }.bind(e),
            removeSlide: function (t) {
              var i = this,
                { params: e, $wrapperEl: s, activeIndex: a } = i;
              let n = a;
              e.loop &&
                ((n -= i.loopedSlides),
                i.loopDestroy(),
                (i.slides = s.children("." + e.slideClass)));
              let r,
                o = n;
              if ("object" == typeof t && "length" in t)
                for (let e = 0; e < t.length; e += 1)
                  (r = t[e]),
                    i.slides[r] && i.slides.eq(r).remove(),
                    r < o && --o;
              else
                (r = t), i.slides[r] && i.slides.eq(r).remove(), r < o && --o;
              (o = Math.max(o, 0)),
                e.loop && i.loopCreate(),
                e.observer || i.update(),
                e.loop
                  ? i.slideTo(o + i.loopedSlides, 0, !1)
                  : i.slideTo(o, 0, !1);
            }.bind(e),
            removeAllSlides: function () {
              var t = [];
              for (let e = 0; e < this.slides.length; e += 1) t.push(e);
              this.removeSlide(t);
            }.bind(e),
          });
        },
        function (e) {
          let { swiper: r, extendParams: t, on: i } = e;
          t({ fadeEffect: { crossFade: !1, transformEl: null } }),
            L({
              effect: "fade",
              swiper: r,
              on: i,
              setTranslate: () => {
                let e = r.slides,
                  a = r.params.fadeEffect;
                for (let s = 0; s < e.length; s += 1) {
                  let e = r.slides.eq(s),
                    t = -e[0].swiperSlideOffset,
                    i = (r.params.virtualTranslate || (t -= r.translate), 0);
                  r.isHorizontal() || ((i = t), (t = 0));
                  var n = r.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(e[0].progress), 0)
                    : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                  O(a, e)
                    .css({ opacity: n })
                    .transform(`translate3d(${t}px, ${i}px, 0px)`);
                }
              },
              setTransition: (e) => {
                var t = r.params.fadeEffect.transformEl;
                (t ? r.slides.find(t) : r.slides).transition(e),
                  I({ swiper: r, duration: e, transformEl: t, allSlides: !0 });
              },
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !r.params.cssMode,
              }),
            });
        },
        function (e) {
          let { swiper: o, extendParams: t, on: i } = e,
            v =
              (t({
                cubeEffect: {
                  slideShadows: !0,
                  shadow: !0,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
              }),
              (e, t, i) => {
                let s = i
                    ? e.find(".swiper-slide-shadow-left")
                    : e.find(".swiper-slide-shadow-top"),
                  a = i
                    ? e.find(".swiper-slide-shadow-right")
                    : e.find(".swiper-slide-shadow-bottom");
                0 === s.length &&
                  ((s = P(
                    `<div class="swiper-slide-shadow-${
                      i ? "left" : "top"
                    }"></div>`
                  )),
                  e.append(s)),
                  0 === a.length &&
                    ((a = P(
                      `<div class="swiper-slide-shadow-${
                        i ? "right" : "bottom"
                      }"></div>`
                    )),
                    e.append(a)),
                  s.length && (s[0].style.opacity = Math.max(-t, 0)),
                  a.length && (a[0].style.opacity = Math.max(t, 0));
              });
          L({
            effect: "cube",
            swiper: o,
            on: i,
            setTranslate: () => {
              let {
                  $el: e,
                  $wrapperEl: t,
                  slides: d,
                  width: i,
                  height: n,
                  rtlTranslate: c,
                  size: u,
                  browser: s,
                } = o,
                p = o.params.cubeEffect,
                h = o.isHorizontal(),
                f = o.virtual && o.params.virtual.enabled,
                r,
                m = 0;
              p.shadow &&
                (h
                  ? (0 === (r = t.find(".swiper-cube-shadow")).length &&
                      ((r = P('<div class="swiper-cube-shadow"></div>')),
                      t.append(r)),
                    r.css({ height: i + "px" }))
                  : 0 === (r = e.find(".swiper-cube-shadow")).length &&
                    ((r = P('<div class="swiper-cube-shadow"></div>')),
                    e.append(r)));
              for (let l = 0; l < d.length; l += 1) {
                let e = d.eq(l),
                  t = l,
                  i =
                    90 *
                    (t = f
                      ? parseInt(e.attr("data-swiper-slide-index"), 10)
                      : t),
                  s = Math.floor(i / 360),
                  a =
                    (c && ((i = -i), (s = Math.floor(-i / 360))),
                    Math.max(Math.min(e[0].progress, 1), -1)),
                  n = 0,
                  r = 0,
                  o = 0;
                t % 4 == 0
                  ? ((n = 4 * -s * u), (o = 0))
                  : (t - 1) % 4 == 0
                  ? ((n = 0), (o = 4 * -s * u))
                  : (t - 2) % 4 == 0
                  ? ((n = u + 4 * s * u), (o = u))
                  : (t - 3) % 4 == 0 && ((n = -u), (o = 3 * u + 4 * u * s)),
                  c && (n = -n),
                  h || ((r = n), (n = 0));
                var g = `rotateX(${h ? 0 : -i}deg) rotateY(${
                  h ? i : 0
                }deg) translate3d(${n}px, ${r}px, ${o}px)`;
                a <= 1 &&
                  -1 < a &&
                  ((m = 90 * t + 90 * a), c) &&
                  (m = 90 * -t - 90 * a),
                  e.transform(g),
                  p.slideShadows && v(e, a, h);
              }
              if (
                (t.css({
                  "-webkit-transform-origin": `50% 50% -${u / 2}px`,
                  "transform-origin": `50% 50% -${u / 2}px`,
                }),
                p.shadow)
              )
                if (h)
                  r.transform(
                    `translate3d(0px, ${i / 2 + p.shadowOffset}px, ${
                      -i / 2
                    }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
                  );
                else {
                  let e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                    t =
                      1.5 -
                      (Math.sin((2 * e * Math.PI) / 360) / 2 +
                        Math.cos((2 * e * Math.PI) / 360) / 2),
                    i = p.shadowScale,
                    s = p.shadowScale / t,
                    a = p.shadowOffset;
                  r.transform(
                    `scale3d(${i}, 1, ${s}) translate3d(0px, ${n / 2 + a}px, ${
                      -n / 2 / s
                    }px) rotateX(-90deg)`
                  );
                }
              var a = s.isSafari || s.isWebView ? -u / 2 : 0;
              t.transform(
                `translate3d(0px,0,${a}px) rotateX(${
                  o.isHorizontal() ? 0 : m
                }deg) rotateY(${o.isHorizontal() ? -m : 0}deg)`
              ),
                t[0].style.setProperty("--swiper-cube-translate-z", a + "px");
            },
            setTransition: (e) => {
              var { $el: t, slides: i } = o;
              i
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                o.params.cubeEffect.shadow &&
                  !o.isHorizontal() &&
                  t.find(".swiper-cube-shadow").transition(e);
            },
            recreateShadows: () => {
              let i = o.isHorizontal();
              o.slides.each((e) => {
                var t = Math.max(Math.min(e.progress, 1), -1);
                v(P(e), t, i);
              });
            },
            getEffectParams: () => o.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            }),
          });
        },
        function (e) {
          let { swiper: u, extendParams: t, on: i } = e,
            p =
              (t({
                flipEffect: {
                  slideShadows: !0,
                  limitRotation: !0,
                  transformEl: null,
                },
              }),
              (e, t, i) => {
                let s = u.isHorizontal()
                    ? e.find(".swiper-slide-shadow-left")
                    : e.find(".swiper-slide-shadow-top"),
                  a = u.isHorizontal()
                    ? e.find(".swiper-slide-shadow-right")
                    : e.find(".swiper-slide-shadow-bottom");
                0 === s.length &&
                  (s = $(i, e, u.isHorizontal() ? "left" : "top")),
                  0 === a.length &&
                    (a = $(i, e, u.isHorizontal() ? "right" : "bottom")),
                  s.length && (s[0].style.opacity = Math.max(-t, 0)),
                  a.length && (a[0].style.opacity = Math.max(t, 0));
              });
          L({
            effect: "flip",
            swiper: u,
            on: i,
            setTranslate: () => {
              var { slides: r, rtlTranslate: o } = u,
                l = u.params.flipEffect;
              for (let n = 0; n < r.length; n += 1) {
                var d = r.eq(n);
                let e = d[0].progress;
                u.params.flipEffect.limitRotation &&
                  (e = Math.max(Math.min(d[0].progress, 1), -1));
                var c = d[0].swiperSlideOffset;
                let t = -180 * e,
                  i = 0,
                  s = u.params.cssMode ? -c - u.translate : -c,
                  a = 0;
                u.isHorizontal()
                  ? o && (t = -t)
                  : ((a = s), (s = 0), (i = -t), (t = 0)),
                  (d[0].style.zIndex = -Math.abs(Math.round(e)) + r.length),
                  l.slideShadows && p(d, e, l);
                c = `translate3d(${s}px, ${a}px, 0px) rotateX(${i}deg) rotateY(${t}deg)`;
                O(l, d).transform(c);
              }
            },
            setTransition: (e) => {
              var t = u.params.flipEffect.transformEl;
              (t ? u.slides.find(t) : u.slides)
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                I({ swiper: u, duration: e, transformEl: t });
            },
            recreateShadows: () => {
              let s = u.params.flipEffect;
              u.slides.each((e) => {
                var t = P(e);
                let i = t[0].progress;
                u.params.flipEffect.limitRotation &&
                  (i = Math.max(Math.min(e.progress, 1), -1)),
                  p(t, i, s);
              });
            },
            getEffectParams: () => u.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !u.params.cssMode,
            }),
          });
        },
        function (e) {
          let { swiper: s, extendParams: t, on: i } = e;
          t({
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
              transformEl: null,
            },
          }),
            L({
              effect: "coverflow",
              swiper: s,
              on: i,
              setTranslate: () => {
                let { width: e, height: t, slides: p, slidesSizesGrid: h } = s,
                  f = s.params.coverflowEffect,
                  m = s.isHorizontal(),
                  i = s.translate,
                  g = m ? e / 2 - i : t / 2 - i,
                  v = m ? f.rotate : -f.rotate,
                  y = f.depth;
                for (let u = 0, e = p.length; u < e; u += 1) {
                  let i = p.eq(u),
                    e = h[u],
                    t = (g - i[0].swiperSlideOffset - e / 2) / e,
                    s =
                      "function" == typeof f.modifier
                        ? f.modifier(t)
                        : t * f.modifier,
                    a = m ? v * s : 0,
                    n = m ? 0 : v * s,
                    r = -y * Math.abs(s),
                    o = f.stretch,
                    l =
                      ("string" == typeof o &&
                        -1 !== o.indexOf("%") &&
                        (o = (parseFloat(f.stretch) / 100) * e),
                      m ? 0 : o * s),
                    d = m ? o * s : 0,
                    c = 1 - (1 - f.scale) * Math.abs(s);
                  Math.abs(d) < 0.001 && (d = 0),
                    Math.abs(l) < 0.001 && (l = 0),
                    Math.abs(r) < 0.001 && (r = 0),
                    Math.abs(a) < 0.001 && (a = 0),
                    Math.abs(n) < 0.001 && (n = 0),
                    Math.abs(c) < 0.001 && (c = 0);
                  var b = `translate3d(${d}px,${l}px,${r}px)  rotateX(${n}deg) rotateY(${a}deg) scale(${c})`;
                  if (
                    (O(f, i).transform(b),
                    (i[0].style.zIndex = 1 - Math.abs(Math.round(s))),
                    f.slideShadows)
                  ) {
                    let e = m
                        ? i.find(".swiper-slide-shadow-left")
                        : i.find(".swiper-slide-shadow-top"),
                      t = m
                        ? i.find(".swiper-slide-shadow-right")
                        : i.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = $(f, i, m ? "left" : "top")),
                      0 === t.length && (t = $(f, i, m ? "right" : "bottom")),
                      e.length && (e[0].style.opacity = 0 < s ? s : 0),
                      t.length && (t[0].style.opacity = 0 < -s ? -s : 0);
                  }
                }
              },
              setTransition: (e) => {
                var t = s.params.coverflowEffect.transformEl;
                (t ? s.slides.find(t) : s.slides)
                  .transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e);
              },
              perspective: () => !0,
              overwriteParams: () => ({ watchSlidesProgress: !0 }),
            });
        },
        function (e) {
          let { swiper: y, extendParams: t, on: i } = e;
          t({
            creativeEffect: {
              transformEl: null,
              limitProgress: 1,
              shadowPerProgress: !1,
              progressMultiplier: 1,
              perspective: !0,
              prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
              },
              next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
              },
            },
          });
          L({
            effect: "creative",
            swiper: y,
            on: i,
            setTranslate: () => {
              let { slides: c, $wrapperEl: t, slidesSizesGrid: i } = y,
                u = y.params.creativeEffect,
                p = u.progressMultiplier,
                h = y.params.centeredSlides;
              if (h) {
                let e = i[0] / 2 - y.params.slidesOffsetBefore || 0;
                t.transform(`translateX(calc(50% - ${e}px))`);
              }
              for (let d = 0; d < c.length; d += 1) {
                let e = c.eq(d),
                  t = e[0].progress,
                  i = Math.min(
                    Math.max(e[0].progress, -u.limitProgress),
                    u.limitProgress
                  ),
                  s = i,
                  a =
                    (h ||
                      (s = Math.min(
                        Math.max(e[0].originalProgress, -u.limitProgress),
                        u.limitProgress
                      )),
                    e[0].swiperSlideOffset),
                  n = [y.params.cssMode ? -a - y.translate : -a, 0, 0],
                  r = [0, 0, 0],
                  o = !1,
                  l =
                    (y.isHorizontal() || ((n[1] = n[0]), (n[0] = 0)),
                    {
                      translate: [0, 0, 0],
                      rotate: [0, 0, 0],
                      scale: 1,
                      opacity: 1,
                    });
                i < 0
                  ? ((l = u.next), (o = !0))
                  : 0 < i && ((l = u.prev), (o = !0)),
                  n.forEach((e, t) => {
                    n[t] = `calc(${e}px + (${
                      ((e = l.translate[t]),
                      "string" == typeof e ? e : e + "px")
                    } * ${Math.abs(i * p)}))`;
                  }),
                  r.forEach((e, t) => {
                    r[t] = l.rotate[t] * Math.abs(i * p);
                  }),
                  (e[0].style.zIndex = -Math.abs(Math.round(t)) + c.length);
                var f = n.join(", "),
                  m = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`,
                  g =
                    s < 0
                      ? `scale(${1 + (1 - l.scale) * s * p})`
                      : `scale(${1 - (1 - l.scale) * s * p})`,
                  v =
                    s < 0
                      ? 1 + (1 - l.opacity) * s * p
                      : 1 - (1 - l.opacity) * s * p,
                  f = `translate3d(${f}) ${m} ` + g;
                if ((o && l.shadow) || !o) {
                  let t = e.children(".swiper-slide-shadow");
                  if ((t = 0 === t.length && l.shadow ? $(u, e) : t).length) {
                    let e = u.shadowPerProgress ? i * (1 / u.limitProgress) : i;
                    t[0].style.opacity = Math.min(Math.max(Math.abs(e), 0), 1);
                  }
                }
                m = O(u, e);
                m.transform(f).css({ opacity: v }),
                  l.origin && m.css("transform-origin", l.origin);
              }
            },
            setTransition: (e) => {
              var t = y.params.creativeEffect.transformEl;
              (t ? y.slides.find(t) : y.slides)
                .transition(e)
                .find(".swiper-slide-shadow")
                .transition(e),
                I({ swiper: y, duration: e, transformEl: t, allSlides: !0 });
            },
            perspective: () => y.params.creativeEffect.perspective,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !y.params.cssMode,
            }),
          });
        },
        function (e) {
          let { swiper: b, extendParams: t, on: i } = e;
          t({
            cardsEffect: {
              slideShadows: !0,
              transformEl: null,
              rotate: !0,
              perSlideRotate: 2,
              perSlideOffset: 8,
            },
          }),
            L({
              effect: "cards",
              swiper: b,
              on: i,
              setTranslate: () => {
                let { slides: o, activeIndex: l } = b,
                  d = b.params.cardsEffect,
                  { startTranslate: c, isTouched: u } = b.touchEventsData,
                  p = b.translate;
                for (let r = 0; r < o.length; r += 1) {
                  var h = o.eq(r),
                    f = h[0].progress,
                    m = Math.min(Math.max(f, -4), 4);
                  let e = h[0].swiperSlideOffset,
                    t =
                      (b.params.centeredSlides &&
                        !b.params.cssMode &&
                        b.$wrapperEl.transform(
                          `translateX(${b.minTranslate()}px)`
                        ),
                      b.params.centeredSlides &&
                        b.params.cssMode &&
                        (e -= o[0].swiperSlideOffset),
                      b.params.cssMode ? -e - b.translate : -e),
                    i = 0;
                  var g = -100 * Math.abs(m);
                  let s = 1,
                    a = -d.perSlideRotate * m,
                    n = d.perSlideOffset - 0.75 * Math.abs(m);
                  var v =
                      b.virtual && b.params.virtual.enabled
                        ? b.virtual.from + r
                        : r,
                    y =
                      (v === l || v === l - 1) &&
                      0 < m &&
                      m < 1 &&
                      (u || b.params.cssMode) &&
                      p < c,
                    v =
                      (v === l || v === l + 1) &&
                      m < 0 &&
                      -1 < m &&
                      (u || b.params.cssMode) &&
                      c < p;
                  if (y || v) {
                    let e = (1 - Math.abs((Math.abs(m) - 0.5) / 0.5)) ** 0.5;
                    (a += -28 * m * e),
                      (s += -0.5 * e),
                      (n += 96 * e),
                      (i = -25 * e * Math.abs(m) + "%");
                  }
                  if (
                    ((t =
                      m < 0
                        ? `calc(${t}px + (${n * Math.abs(m)}%))`
                        : 0 < m
                        ? `calc(${t}px + (-${n * Math.abs(m)}%))`
                        : t + "px"),
                    !b.isHorizontal())
                  ) {
                    let e = i;
                    (i = t), (t = e);
                  }
                  (y = m < 0 ? "" + (1 + (1 - s) * m) : "" + (1 - (1 - s) * m)),
                    (v = `
        translate3d(${t}, ${i}, ${g}px)
        rotateZ(${d.rotate ? a : 0}deg)
        scale(${y})
      `);
                  if (d.slideShadows) {
                    let e = h.find(".swiper-slide-shadow");
                    (e = 0 === e.length ? $(d, h) : e).length &&
                      (e[0].style.opacity = Math.min(
                        Math.max((Math.abs(m) - 0.5) / 0.5, 0),
                        1
                      ));
                  }
                  (h[0].style.zIndex = -Math.abs(Math.round(f)) + o.length),
                    O(d, h).transform(v);
                }
              },
              setTransition: (e) => {
                var t = b.params.cardsEffect.transformEl;
                (t ? b.slides.find(t) : b.slides)
                  .transition(e)
                  .find(".swiper-slide-shadow")
                  .transition(e),
                  I({ swiper: b, duration: e, transformEl: t });
              },
              perspective: () => !0,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !b.params.cssMode,
              }),
            });
        },
      ]),
      S
    );
  });
var AMG = window.AMG || {};
function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
    return i;
  }
  return Array.from(e);
}
((l) => {
  (AMG.DOM = {
    calculatorBox: document.querySelector(".volumetric-calculator"),
    formsDynamics: document.querySelector(".module.ms-dynamics"),
    officesTable: document.querySelector(".offices #result-table"),
    responsiveImage: document.querySelector(".responsive-image"),
    accordions: document.querySelectorAll(".accordion"),
    siteSelector: document.querySelector(".site-selector"),
    responsiveTables: document.querySelectorAll(".text__content table"),
    mainNavigation: document.querySelector(".nav"),
    header: document.querySelector(".header"),
    headerWidget: document.querySelectorAll(".header-widget--overlay"),
    serviceTabs: document.querySelectorAll(".service-tabs"),
    servicebarTabs: document.querySelectorAll(".servicebar-tabs"),
    subnavigationBar: document.querySelector(".subnavigation-bar"),
    searchResult: document.querySelector(".search-result"),
    officeMap: document.querySelector(".office-map"),
    officesList: document.querySelector(".offices-list"),
    newslist: document.querySelector(".newslist"),
    overlayTriggers: document.querySelectorAll("[data-overlay-trigger]"),
    bannerNotification: document.querySelector(".module.banner-notification"),
    spotContents: document.querySelectorAll(".spot__content"),
    jobPage: document.querySelector(".module.job"),
    vocast: document.querySelector(".module.news-article--vocast"),
    swiper: document.querySelectorAll(".carousel"),
    digitalSolutions: document.querySelectorAll(".digital-solutions"),
    topAnnouncementBar: document.querySelector(".module.announcement-top-bar"),
  }),
    (AMG.data = {
      overlayEndpoint: document.documentElement.getAttribute(
        "data-overlay-endpoint"
      ),
      iplookup: {
        url: "https://api.ipstack.com/check",
        accessKey: "6c3247821878f1a87854a619c9e687eb",
        countryCode: null,
      },
    }),
    (AMG.tools = {
      screenSizes: {
        unknown: 0,
        mobile: 1,
        tablet: 2,
        desktop: 3,
        large: 4,
        xlarge: 5,
        xxlarge: 6,
      },
      computedStyle: function (e) {
        return l.getComputedStyle
          ? l.getComputedStyle(e)
          : e.currentStyle || null;
      },
      getUrlParams: function (e) {
        e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(l.location.href);
        return e ? e[1] : 0;
      },
      isInViewport: function (e) {
        e = e.getBoundingClientRect();
        return (
          0 <= e.top &&
          0 <= e.left &&
          e.bottom <=
            (l.innerHeight || document.documentElement.clientHeight) &&
          e.right <= (l.innerWidth || document.documentElement.clientWidth)
        );
      },
      updateQueryString: function (e, t, i) {
        e = e || l.location.href;
        var s,
          a,
          n = document.createElement("a"),
          r = new RegExp(t + "((?:\\[[^\\]]*\\])?)(=|$)(.*)"),
          o = !1;
        if (((n.href = e), n.search)) {
          for (
            a = (s = n.search.replace(/^\?/, "").split(/&(?:amp;)?/)).length;
            0 < a;

          )
            s[--a]
              ? r.test(s[a]) &&
                (null === i
                  ? s.splice(a, 1)
                  : (s[a] = s[a].replace(r, t + "$1") + "=" + i),
                (o = !0))
              : s.splice(a, 1);
          o || s.push(t + "=" + i), (n.search = "?" + s.join("&"));
        } else n.search = "?" + t + "=" + i;
        return { href: n.href, queries: s };
      },
      throttle: function (e, t) {
        var i = Date.now();
        return function () {
          i + t - Date.now() < 0 && (e(), (i = Date.now()));
        };
      },
      hasClass: function (e, t) {
        return e.classList
          ? e.classList.contains(t)
          : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
      },
      addClass: function (e, t) {
        e.classList
          ? e.classList.add(t)
          : hasClass(e, t) || (e.className += " " + t);
      },
      removeClass: function (e, t) {
        e.classList
          ? e.classList.remove(t)
          : hasClass(e, t) &&
            ((t = new RegExp("(\\s|^)" + t + "(\\s|$)")),
            (e.className = e.className.replace(t, " ")));
      },
      screenMode: {
        currentMode: 0,
        changeEvent: new CustomEvent("screenmode.change"),
        get: function () {
          var e = l.innerWidth;
          return 1440 <= e
            ? 6
            : 1280 <= e
            ? 5
            : 1024 <= e
            ? 4
            : 769 <= e
            ? 3
            : 481 <= e
            ? 2
            : 1;
        },
        isCurrent: function (e) {
          return this.currentMode === e;
        },
        onChange: function (e) {
          l.addEventListener(this.changeEvent, e, !1);
        },
        init: function () {
          var t = this,
            e = AMG.tools.throttle(function () {
              var e = t.get();
              e !== t.currentMode &&
                ((t.currentMode = e), l.dispatchEvent(t.changeEvent));
            }, 100);
          (t.currentMode = t.get()), l.addEventListener("resize", e);
        },
      },
    }),
    AMG.tools.screenMode.init();
})(window),
  (AMG.template = {}),
  (AMG.template.bannerTemplate = {
    getTemplate: function (e) {
      return (
        '\n        <div class="search-result__banner">\n            <p>' +
        e.BannerText +
        "</p>\n        </div>\n        "
      );
    },
  }),
  (AMG.template.listViewTemplate = {
    getTemplate: function (e, t, i, s) {
      var a = t.Id,
        t = t.LogicalOffset;
      return (
        '\n            <li>\n                <h3><a href="' +
        s +
        "?url=" +
        e.get("Uri")[0].Value +
        "&documentId=" +
        a +
        "&documentOffset=" +
        t +
        "&searchId=" +
        i +
        '">' +
        e.get("Title")[0].ValueMarkup +
        "</a></h3>\n                <div>\n                    " +
        (e.get("Content") && e.get("Content")[0].ValueMarkup) +
        '\n                </div>\n                <a href="' +
        s +
        "?url=" +
        e.get("Uri")[0].Value +
        "&documentId=" +
        a +
        "&documentOffset=" +
        t +
        "&searchId=" +
        i +
        '">' +
        decodeURIComponent(e.get("Uri")[0].Value) +
        "</a>\n            </li>\n        "
      );
    },
  }),
  (AMG.template.paginationButton = {
    getTemplate: function (e, t, i, s, a) {
      return 0 === i
        ? '\n                <li class="pagination__item pagination__item--prev" ' +
            (0 === t ? "disabled" : "") +
            ' data-pagination-offset="' +
            (e.Offset + 1) +
            '">\n                    <a class="pagination__link ' +
            (t === e.Page ? "selected" : "") +
            '" ' +
            (0 === t ? 'tabindex="-1"' : "") +
            ' href="#">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">\n                            <path fill-rule="evenodd" d="M6.384 7.364l5.47-6.003a.508.508 0 0 0 0-.714.501.501 0 0 0-.71 0L6.004 6.29.859.647a.501.501 0 0 0-.71 0 .508.508 0 0 0 0 .714l5.47 6.003c.105.105.245.15.385.143a.498.498 0 0 0 .38-.143"/>\n                        </svg>\n                    </a>\n                </li>'
        : i === s - 1
        ? '\n                <li class="pagination__item pagination__item--next" ' +
          (t === a - 1 ? "disabled" : "") +
          ' data-pagination-offset="' +
          (e.Offset + 1) +
          '">\n                    <a class="pagination__link ' +
          (t === e.Page ? "selected" : "") +
          '" ' +
          (t === a - 1 ? 'tabindex="-1"' : "") +
          '  href="#">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">\n                            <path fill-rule="evenodd" d="M6.384 7.364l5.47-6.003a.508.508 0 0 0 0-.714.501.501 0 0 0-.71 0L6.004 6.29.859.647a.501.501 0 0 0-.71 0 .508.508 0 0 0 0 .714l5.47 6.003c.105.105.245.15.385.143a.498.498 0 0 0 .38-.143"/>\n                        </svg>\n                    </a>\n                </li>'
        : '\n            <li class="pagination__item ' +
          (t === e.Page ? "pagination__item--active" : "") +
          '" data-pagination-offset="' +
          (e.Offset + 1) +
          '">\n                <a class="pagination__link" href="#">\n                    ' +
          e.Label +
          "\n                </a>\n            </li>";
    },
  }),
  ((i) => {
    AMG.ui = {
      checkForTrackNumber: function (e) {
        e =
          e.match(/(^|\s)([a-z0-9]{5}\-[a-z0-9]{5})($|\s)/i) ||
          e.match(/(^|\s)([A-Z]{4}[0-9]{7})($|\s)/i) ||
          e.match(/(^|\s)([0-9]{3,16})($|\s)/) ||
          e.match(/(^|\s)([A-Z]{5}[0-9]{9})($|\s)/i) ||
          e.match(/(^|\s)(\d{3,}\-\d{3,})($|\s)/);
        return !!e && e[0];
      },
      stockQuotes: {
        item: null,
        get: function () {
          var t = this;
          fetch("/layouts/Handlers/StockQuote.ashx", {
            type: "GET",
            headers: { "Content-Type": "application/json" },
          })
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              t.update(e);
            })
            .catch(function (e) {
              console.log("Error status: " + e);
            });
        },
        update: function (e) {
          this.item || (this.item = document.querySelector("#stockQuote"));
          var t = Number(e.lastTrade),
            e = "" + e.changeNumber;
          (String(t).split(".").length < 2 ||
            String(t).split(".")[1].length <= 2) &&
            (t = t.toFixed(2)),
            e.indexOf("-") < 0 && (e = "+" + e),
            (this.item.innerText = t + " / " + e);
        },
      },
      enableDataLinks: function () {
        document.querySelectorAll("[data-link]").forEach(function (t) {
          t.addEventListener("click", function (e) {
            e.stopPropagation(), e.preventDefault(), (e.returnValue = !1);
            e = t.getAttribute("data-link");
            i.open(e, "newwin");
          });
        });
      },
      accordionHandler: {
        DOM: { modules: "", width: i.innerWidth },
        throttleCloseAllAccordions: AMG.tools.throttle(function () {
          AMG.ui.accordionHandler.DOM.width !== i.innerWidth &&
            ((AMG.ui.accordionHandler.DOM.width = i.innerWidth),
            AMG.ui.accordionHandler.closeAllAccordions());
        }, 100),
        closeAllAccordions: function () {
          this.DOM.modules
            .querySelectorAll(".accordion__body")
            .forEach(function (e) {
              var t = e.clientHeight;
              TweenLite.to(e, 0.3, { marginTop: -t });
            });
        },
        scrollToActiveAccordion: function (e, t) {
          t.classList.contains("accordion__radio") &&
            !AMG.tools.isInViewport(e) &&
            ((t = Math.round(e.getBoundingClientRect().top + i.pageYOffset)),
            (e = document.querySelector(".header").offsetHeight),
            TweenLite.to(i, 1, { scrollTo: t - e, ease: Power2.easeOut }));
        },
        bindEvents: function () {
          this.DOM.modules
            .querySelector(".accordion__reset")
            .addEventListener("change", function (e) {
              AMG.ui.accordionHandler.closeAllAccordions();
            }),
            this.DOM.modules
              .querySelectorAll(".accordion__radio")
              .forEach(function (e) {
                e.addEventListener("change", function (e) {
                  var t = this.parentElement.querySelector(".accordion__body");
                  AMG.ui.accordionHandler.closeAllAccordions(),
                    TweenLite.to(t, 0.3, {
                      marginTop: 0,
                      ease: Power3.easeInOut,
                      onComplete:
                        AMG.ui.accordionHandler.scrollToActiveAccordion,
                      onCompleteParams: [t, e.currentTarget],
                    });
                });
              });
        },
        init: function (e) {
          (this.DOM.modules = e),
            (this.DOM.width = i.innerWidth),
            this.DOM.modules &&
              !this.DOM.modules.classList.contains("accordion--initialized") &&
              ((e = this.DOM.modules.dataset.openOnDefault),
              console.log(e, "openOnDefault"),
              this.DOM.modules.classList.add("accordion--initialized"),
              e || AMG.ui.accordionHandler.closeAllAccordions(),
              AMG.ui.accordionHandler.bindEvents(),
              i.addEventListener(
                "resize",
                AMG.ui.accordionHandler.throttleCloseAllAccordions
              ));
        },
      },
    };
  })(window),
  (AMG.ui.bannerNotification = {
    close: function () {
      AMG.ui.cookies.setCookie(this.id, !0),
        this.dom.container.parentNode.removeChild(this.dom.container);
    },
    init: function (e) {
      var t = e.dataset.shortId;
      Boolean(AMG.ui.cookies.getCookie(t)) ||
        (e.style.removeProperty("display"),
        (this.dom = {}),
        (this.dom.container = e),
        (this.dom.ctaButton =
          this.dom.container.querySelector(".cta.cta--module")),
        (this.dom.closeButton = this.dom.container.querySelector(
          ".banner-notification__close"
        )),
        (this.id = t),
        this.dom.ctaButton &&
          this.dom.ctaButton.addEventListener(
            "click",
            AMG.ui.bannerNotification.close.bind(this)
          ),
        this.dom.closeButton &&
          this.dom.closeButton.addEventListener(
            "click",
            AMG.ui.bannerNotification.close.bind(this)
          ));
    },
  }),
  ((a) => {
    AMG.ui.calculatorBox = {
      units: {
        metric: {
          lwh: "cm",
          weight: "kg",
          conversion: "kg/m<sup>3</sup>",
          conversionLDM: "kg/LDM",
        },
        imperial: {
          lwh: "in",
          weight: "lb",
          conversion: "lb/in<sup>3</sup>",
          conversionLDM: "lb/LDM",
        },
      },
      savedState: { heightValue: void 0 },
      init: function (e) {
        var t = this,
          i =
            ((this.DOM = {
              formfields: {
                form: e.querySelector(".volumetric-calculator__form"),
                stackableYes: e.querySelector("#stackableYes"),
                length: e.querySelector("#length"),
                width: e.querySelector("#width"),
                height: e.querySelector("#height"),
                conversionfactor: e.querySelector("#conversionfactor"),
                conversionfactorLabel: e.querySelector(
                  ".volumetric-calculator__conversion-factor label"
                ),
                conversionfactorText: e.querySelector(
                  ".volumetric-calculator__conversion-factor .unit > span"
                ),
                submitbutton: e.querySelector(".submit-btn > input"),
                total: e.querySelector("#total"),
                radioboxes: e.querySelectorAll("input[name='stackable']"),
                datafields: e.querySelectorAll(".form-cols .col:nth-child(2)"),
                units: e.querySelectorAll(
                  '.unit span[data-unittype^="unit--"]'
                ),
              },
              constants: {
                ldmfactor: e.getAttribute("data-ldm"),
                ismetricunit: e.getAttribute("data-metric"),
                requiredText: e.getAttribute("data-requiredtext"),
                stackableLabel:
                  e.getAttribute("data-globalstckllabel") +
                  e.getAttribute("data-stckbllabel"),
                ldmLabel:
                  e.getAttribute("data-globalldmlabel") +
                  e.getAttribute("data-ldmlabel"),
                conversionfactorTextOriginalClone: e.querySelector(
                  ".volumetric-calculator__conversion-factor .unit > span"
                ).innerHTML,
              },
            }),
            this),
          s = !1;
        this.DOM.formfields.form
          .querySelectorAll('input[type="text"]')
          .forEach(function (e) {
            e.addEventListener("keydown", function (e) {
              return document.body.classList.contains("experience-editor") ||
                i.controlCharacters(i, e)
                ? void 0
                : (e.preventDefault(), !1);
            }),
              e.addEventListener("keyup", function (e) {
                i.replaceCharacter(e);
              });
          }),
          this.DOM.formfields.submitbutton.addEventListener(
            "click",
            function (e) {
              e.preventDefault(),
                (s = !0),
                i.validateInputFields() && i.getResult();
            }
          ),
          this.DOM.formfields.radioboxes.forEach(function (e) {
            e.addEventListener("change", function (e) {
              i.handleStackableChange(i, e),
                s && i.validateInputFields().bind(i);
            });
          }),
          a.addEventListener(
            "resize",
            AMG.tools.throttle(this.setDatafieldWidth.bind(i), 250)
          ),
          setTimeout(function () {
            t.setDatafieldWidth();
          }, 0),
          this.setUnitLabelsOnInit(i);
      },
      setUnitLabelsOnInit: function (t) {
        this.DOM.formfields.units.forEach(function (e) {
          switch (e.getAttribute("data-unittype")) {
            case "unit--lwh":
              e.innerText = t.getUnit("lwh");
              break;
            case "unit--volumetric":
              e.innerHTML = t.getUnit("conversion");
              break;
            case "unit--weight":
              e.innerText = t.getUnit("weight");
          }
        });
      },
      setDatafieldWidth: function () {
        var t,
          e = this;
        768 < a.innerWidth
          ? ((t = void 0),
            this.DOM.formfields.datafields.forEach(function (e) {
              (e.style.width = null),
                (void 0 === t || t > e.offsetWidth) && (t = e.offsetWidth);
            }),
            this.DOM.formfields.datafields.forEach(function (e) {
              e.style.width = t + "px";
            }),
            1280 === t &&
              setTimeout(function () {
                e.setDatafieldWidth();
              }, 250))
          : this.DOM.formfields.datafields.forEach(function (e) {
              e.style.width = null;
            });
      },
      setResult: function (e) {
        "number" == typeof e &&
          (this.DOM.formfields.total.value =
            0 < e.toFixed(2) ? e.toFixed(2).replace(/\.00$/, "") : 0);
      },
      getUnit: function (e) {
        if ("True" === this.DOM.constants.ismetricunit)
          switch (e) {
            case "lwh":
              return this.units.metric.lwh;
            case "weight":
              return this.units.metric.weight;
            case "conversion":
              return this.units.metric.conversion;
            case "conversionLDM":
              return this.units.metric.conversionLDM;
          }
        else
          switch (e) {
            case "lwh":
              return this.units.imperial.lwh;
            case "weight":
              return this.units.imperial.weight;
            case "conversion":
              return this.units.imperial.conversion;
            case "conversionLDM":
              return this.units.imperial.conversionLDM;
          }
      },
      validateInputFields: function () {
        for (
          var e = [
              this.DOM.formfields.length,
              this.DOM.formfields.width,
              this.DOM.formfields.height,
              this.DOM.formfields.conversionfactor,
            ],
            t = !0,
            i = 0;
          i < e.length;
          i++
        )
          e[i].parentElement.classList.remove("error"),
            e[i].getAttribute("placeholder", null),
            (!this.DOM.formfields.stackableYes.checked &&
              "height" === e[i].getAttribute("id")) ||
              0 !== e[i].value.length ||
              ((t = !1),
              e[i].parentElement.classList.add("error"),
              e[i].getAttribute(
                "placeholder",
                this.DOM.constants.requiredText
              ));
        return t;
      },
      controlCharacters: function (e, t) {
        return !(
          (!t.key.match(/^[0-9.,]+$/) &&
            8 !== t.which &&
            9 !== t.which &&
            37 !== t.which &&
            39 !== t.which &&
            46 !== t.which &&
            13 !== t.which) ||
          (t.target.value &&
            -1 != t.target.value.indexOf(".") &&
            (188 === t.which || 190 === t.which)) ||
          (13 === t.which && (e.validateInputFields() && e.getResult(), 1))
        );
      },
      replaceCharacter: function (e) {
        e = e.currentTarget;
        "INPUT" === e.tagName && (e.value = e.value.split(",").join("."));
      },
      handleStackableChange: function (e, t) {
        "stackableNo" === t.target.id
          ? (e.DOM.formfields.height.setAttribute("disabled", "disabled"),
            (e.savedState.heightValue = e.DOM.formfields.height.value),
            (e.DOM.formfields.height.value = ""),
            (e.DOM.formfields.conversionfactorLabel.innerText =
              e.DOM.constants.ldmLabel),
            (e.DOM.formfields.conversionfactorText.innerHTML =
              e.getUnit("conversionLDM")))
          : "stackableYes" === t.target.id &&
            (e.DOM.formfields.height.removeAttribute("disabled"),
            (e.DOM.formfields.conversionfactorLabel.innerText =
              e.DOM.constants.stackableLabel),
            e.savedState.heightValue &&
              (e.DOM.formfields.height.value = e.savedState.heightValue),
            (e.DOM.formfields.conversionfactorText.innerHTML =
              e.getUnit("conversion")));
      },
      makeJSONData: function () {
        var e = {};
        return (
          (e.IsStackable = this.DOM.formfields.stackableYes.checked),
          (e.Length = this.DOM.formfields.length.value),
          (e.Width = this.DOM.formfields.width.value),
          (e.Height = this.DOM.formfields.height.value || "0"),
          (e.ConversionFactor = this.DOM.formfields.conversionfactor.value),
          (e.LDM = this.DOM.constants.ldmfactor),
          JSON.stringify(e)
        );
      },
      getResult: function () {
        var t = this;
        fetch("/layouts/Handlers/VolumetricCalculator.ashx", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: this.makeJSONData(),
        })
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            t.setResult(e);
          })
          .catch(function (e) {
            console.log("Error status: " + e.statusText);
          });
      },
    };
  })(window),
  (AMG.ui.cookies = {
    setCookie: function (e, t, i) {
      var s = new Date(),
        i =
          (s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3),
          "expires=" + s.toUTCString());
      document.cookie = e + "=" + t + ";" + i + ";path=/";
    },
    getCookie: function (e) {
      for (
        var t = e + "=",
          i = decodeURIComponent(document.cookie).split(";"),
          s = 0;
        s < i.length;
        s++
      ) {
        for (var a = i[s]; " " == a.charAt(0); ) a = a.substring(1);
        if (0 == a.indexOf(t)) return a.substring(t.length, a.length);
      }
      return "";
    },
  }),
  ((u) => {
    u.AMG.ui.digitalSolutions = {
      init: function (e) {
        var t,
          i,
          s,
          a,
          n = e.querySelector(".digital-solutions__tags-swiper"),
          r = e.querySelector(".digital-solutions__slides-swiper"),
          o = e.querySelector(".digital-solutions__accordion");
        function l(i) {
          t.forEach(function (e) {
            var t = parseInt(e.getAttribute("data-index"));
            e.classList.toggle("active", t === i);
          }),
            n.querySelector(
              '.digital-solutions__tag[data-index="' + i + '"]'
            ) &&
              s &&
              s.slideTo(i);
        }
        function d(s) {
          i.forEach(function (e) {
            var t = parseInt(e.getAttribute("data-index")),
              i = e.querySelector(".digital-solutions__accordion-item-content");
            t === s
              ? (e.classList.add("active"),
                i && (i.style.height = i.scrollHeight + "px"))
              : (e.classList.remove("active"), i && (i.style.height = 0));
          });
        }
        function c() {
          var e;
          u.innerWidth < 1024
            ? (o.classList.remove("is-hidden"),
              n.classList.add("is-hidden"),
              r.classList.add("is-hidden"),
              (e = o
                .querySelector(".digital-solutions__accordion-item.active")
                .querySelector(".digital-solutions__accordion-item-content")) &&
                (e.style.height = e.scrollHeight + "px"))
            : (o.classList.add("is-hidden"),
              n.classList.remove("is-hidden"),
              r.classList.remove("is-hidden"));
        }
        n &&
          r &&
          o &&
          ((t = n.querySelectorAll(".digital-solutions__tag")),
          (i = o.querySelectorAll(".digital-solutions__accordion-item")),
          (s = new Swiper(n, {
            loop: !1,
            slidesPerView: "auto",
            spaceBetween: 12,
            freeMode: !0,
          })),
          (a = new Swiper(r, {
            loop: !1,
            slidesPerView: 1,
            on: {
              slideChange: function () {
                var e = a.activeIndex;
                l(e), d(e);
              },
            },
          })),
          t.forEach(function (e) {
            e.addEventListener("click", function () {
              var e = parseInt(this.getAttribute("data-index"));
              a.slideTo(e);
            });
          }),
          i.forEach(function (e) {
            e.addEventListener("click", function (e) {
              var e = e.target.closest(".digital-solutions__accordion-item"),
                t = parseInt(e.getAttribute("data-index"));
              e.classList.contains("active") || a.slideTo(t);
            });
          }),
          l(0),
          d(0),
          c(),
          u.addEventListener("resize", c));
      },
    };
  })(window),
  ((r) => {
    AMG.ui.fitvids = {
      init: function () {
        var e = r.querySelectorAll(
          ['iframe[src*="youtube.com"]', 'iframe[src*="youku.com"]'].join(",")
        );
        if (e.length)
          for (var t = 0; t < e.length; t++) {
            var i = e[t],
              s = i.getAttribute("width"),
              s = i.getAttribute("height") / s,
              a = i.parentNode,
              n = r.createElement("div");
            (n.className = "fitVids-wrapper"),
              (n.style.paddingBottom = 100 * s + "%"),
              a.insertBefore(n, i),
              i.remove(),
              n.appendChild(i),
              i.removeAttribute("height"),
              i.removeAttribute("width");
          }
      },
    };
  })(document),
  (AMG.ui.focus = {
    rememberExistingFocus: function () {
      this.previousFocusedElement = document.activeElement;
    },
    setExistingFocus: function () {
      this.previousFocusedElement.focus();
    },
    trapFocus: function (e, t) {
      var i = e.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        ),
        s = i[0],
        a = i[i.length - 1];
      this.rememberExistingFocus(),
        a.focus(),
        e.addEventListener("keydown", function (e) {
          ("Tab" !== e.key && 9 !== e.keyCode) ||
            (e.shiftKey
              ? document.activeElement === s && (a.focus(), e.preventDefault())
              : document.activeElement === a &&
                (s.focus(), e.preventDefault()));
        });
    },
  }),
  (AMG.ui.formsDynamics = {
    applyUtmLogic: function (e) {
      var t = this,
        e = e.dataset.utm ? JSON.parse(e.dataset.utm) : {};
      e.isUtmCapturingActive &&
        e.capturedUtmFieldList.forEach(function (e) {
          t.setUtmValueFromUrl(e.propertyId, e.defaultValue, e.forceDefault);
        });
    },
    setUtmValueFromUrl: function (e, t, i) {
      var s = document.querySelector("[data-" + e + "]");
      s &&
        ((e = s.dataset[e]),
        (e = new URLSearchParams(window.location.search).get(e)),
        (s.value = (!i && e) || t));
    },
    validateCheckboxLists: function (t) {
      setTimeout(function () {
        var e = t.querySelector('[data-editorblocktype="Field-checkboxList"]');
        0 <
        t.querySelector(
          '[data-editorblocktype="Field-checkboxList"] .lp-form-fieldInput[aria-labelledby]'
        ).length
          ? e.classList.add("checkboxList-error")
          : e.classList.remove("checkboxList-error");
      }, 100);
    },
    translateFields: function (e) {
      for (
        var t = e.dataset.translationsSettings
            ? JSON.parse(e.dataset.translationsSettings)
            : {},
          i = t.translations || [],
          s = 0;
        s < i.length;
        s++
      ) {
        var a = i[s];
        switch (a.type) {
          case "Text":
            this.translateText(e, a);
            break;
          case "Checkbox":
            this.translateCheckbox(e, a);
            break;
          case "CheckboxGroup":
            this.translateCheckboxGroup(e, a);
            break;
          case "RadioButtonGroup":
            this.translateRadioButtonGroup(e, a);
            break;
          case "Dropdown":
            this.translateDropdown(e, a);
            break;
          case "Lookup":
            this.translateLookup(e, a);
            break;
          case "Date":
            this.translateDate(e, a);
            break;
          case "SubmitButton":
            this.translateSubmitButton(e, a);
            break;
          case "FreeText":
            this.translateFreeText(e, a);
        }
      }
    },
    translateText: function (e, t) {
      this.translatePlaceholder(e, t),
        this.translateTitle(e, t),
        this.translateLabel(e, t);
    },
    translateCheckbox: function (e, t) {
      this.translateTitle(e, t), this.translateRichTextLabel(e, t, !0);
    },
    translateCheckboxGroup: function (t, e) {
      var i = this;
      this.translateTitle(t, e),
        this.translateLabel(t, e),
        e.children.forEach(function (e) {
          return i.translateCheckbox(t, e);
        });
    },
    translateRadioButton: function (e, t) {
      this.translateTitle(e, t), this.translateLabel(e, t, !0);
    },
    translateRadioButtonGroup: function (t, e) {
      var i = this;
      this.translateTitle(t, e),
        this.translateLabel(t, e),
        e.children.forEach(function (e) {
          return i.translateRadioButton(t, e);
        });
    },
    translateDropdown: function (t, e) {
      var i = this;
      this.translateTitle(t, e),
        this.translateLabel(t, e),
        this.translateDefaultOption(t, e),
        e.children.forEach(function (e) {
          return i.translateDropdownValue(t, e);
        });
    },
    translateDropdownValue: function (e, t) {
      this.translateLabel(e, t), this.translateOption(e, t);
    },
    translateLookup: function (e, t) {
      this.translatePlaceholder(e, t),
        this.translateTitle(e, t),
        this.translateLabel(e, t);
    },
    translateDate: function (e, t) {
      this.translateTitle(e, t), this.translateLabel(e, t);
    },
    translateSubmitButton: function (e, t) {
      e = e.querySelector("button[type=submit]");
      e && t.label && (e.innerText = t.label);
    },
    translateFreeText: function (e, t) {
      t.textToMatch &&
        (e = Array.from(
          e.querySelectorAll('[data-editorblocktype="Text"]')
        ).find(function (e) {
          return e.innerText
            .toLowerCase()
            .includes(t.textToMatch.toLowerCase());
        })) &&
        t.richTextLabel &&
        (e.innerHTML = t.richTextLabel);
    },
    translateTitle: function (e, t) {
      e = e.querySelector("#" + CSS.escape(t.fieldId));
      e && t.label && (e.title = t.label);
    },
    translateLabel: function (e, t, i) {
      e = this.findLabel(e, t.fieldId, i);
      e && t.label && (e.innerText = t.label);
    },
    translateRichTextLabel: function (e, t, i) {
      e = this.findLabel(e, t.fieldId, i);
      e && t.richTextLabel && (e.innerHTML = t.richTextLabel);
    },
    findLabel: function (e, t, i) {
      return i
        ? e.querySelector("#" + CSS.escape(t) + "~label")
        : e.querySelector("[for=" + CSS.escape(t) + "]");
    },
    translatePlaceholder: function (e, t) {
      e = e.querySelector("#" + CSS.escape(t.fieldId));
      e && t.placeholder && (e.placeholder = t.placeholder);
    },
    translateOption: function (e, t) {
      e = e.querySelector("#" + CSS.escape(t.fieldId));
      e && t.label && (e.innerText = t.label);
    },
    translateDefaultOption: function (e, t) {
      e = e.querySelector("#" + CSS.escape(t.fieldId) + " option[selected]");
      e && t.placeholder && (e.innerText = t.placeholder);
    },
    dSVCountryInput: function (e) {
      var t,
        i,
        s = this,
        a = e.dataset.dsvCountry ? JSON.parse(e.dataset.dsvCountry) : {},
        a = a.name || "";
      a &&
        (t = e.querySelector('div[data-targetproperty="dsv_country"]')) &&
        (e = t.querySelector("input")) &&
        ((e.value = a),
        e.dispatchEvent(new Event("keyup")),
        (i = window.setInterval(function () {
          return s.updateInputWithValue(t, i);
        }, 1e3)));
    },
    leadOwnerInput: function (e) {
      var t,
        i,
        s = this,
        a = e.dataset.leadOwner ? JSON.parse(e.dataset.leadOwner) : {},
        a = a.title || "";
      a &&
        (t = e.querySelector('div[data-targetproperty="team_lead_owner"]')) &&
        (e = t.querySelector("input")) &&
        ((e.value = a),
        e.dispatchEvent(new Event("keyup")),
        (i = window.setInterval(function () {
          return s.updateInputWithValue(t, i);
        }, 1e3)));
    },
    contactOwnerInput: function (e) {
      var t,
        i,
        s = this,
        a = e.dataset.contactOwner ? JSON.parse(e.dataset.contactOwner) : {},
        a = a.title || "";
      a &&
        (t = e.querySelector(
          'div[data-targetproperty="team_contact_owner"]'
        )) &&
        (e = t.querySelector("input")) &&
        ((e.value = a),
        e.dispatchEvent(new Event("keyup")),
        (i = window.setInterval(function () {
          return s.updateInputWithValue(t, i);
        }, 1e3)));
    },
    updateInputWithValue: function (e, t) {
      var i = e.querySelector("li[data-value]");
      i &&
        (i = i.dataset.value) &&
        ((e.querySelector("input").dataset.value = i), window.clearInterval(t));
    },
    affterFormSubmitRedirect: function (e) {
      var t,
        e = e.dataset.redirectLink ? JSON.parse(e.dataset.redirectLink) : {};
      e &&
        e.url &&
        ((t = e.url),
        setTimeout(function () {
          window.location.href = t;
        }, 2500));
    },
    affterFormSubmitSuccessMessage: function (i) {
      var s = i.dataset.successMessage
        ? JSON.parse(i.dataset.successMessage)
        : {};
      s &&
        setTimeout(function () {
          var e = i.querySelector('div[data-submissionresponse="success"]'),
            t = i.querySelector('div[class="onFormSubmittedFeedbackMessage"]');
          e && t && (t.innerHTML = s);
        }, 200);
    },
    affterFormSubmitFailureMessage: function (i) {
      var s = i.dataset.failureMessage
        ? JSON.parse(i.dataset.failureMessage)
        : {};
      s &&
        setTimeout(function () {
          var e = i.querySelector('div[data-submissionresponse="error"]'),
            t = i.querySelector('div[class="onFormSubmittedFeedbackMessage"]');
          e && t && (t.innerHTML = s);
        }, 200);
    },
    toggleTopicInputs: function (e) {
      var t,
        i,
        s = "True" === e.dataset.subscriptionTopics,
        a = e.querySelector('div[data-editorblocktype="Consent"]');
      a &&
        ((t = a.querySelector('input[type="checkbox"]')),
        (i = e.querySelectorAll('div[data-editorblocktype="Topic"]')),
        s) &&
        t &&
        t.addEventListener("change", function () {
          i.forEach(function (e) {
            e = e.querySelector('input[type="checkbox"]');
            e && (e.checked = t.checked);
          });
        });
    },
    init: function (e) {
      var t = this,
        i = e.querySelector("button[type='submit']"),
        s = e.querySelector(
          '[data-editorblocktype="Field-checkboxList"] .lp-form-fieldInput'
        );
      i &&
        i.addEventListener("click", function () {
          t.validateCheckboxLists(e);
        }),
        s &&
          s.addEventListener("change", function () {
            t.validateCheckboxLists(e);
          }),
        this.applyUtmLogic(e),
        document.MsCrmMkt &&
          document.MsCrmMkt.MsCrmFormLoader &&
          document.MsCrmMkt.MsCrmFormLoader.on("afterFormLoad", function () {
            t.applyUtmLogic(e);
          }),
        this.translateFields(e),
        this.toggleTopicInputs(e),
        this.dSVCountryInput(e),
        this.leadOwnerInput(e),
        this.contactOwnerInput(e),
        document.addEventListener("d365mkt-afterformload", function () {
          t.translateFields(e),
            t.toggleTopicInputs(e),
            t.dSVCountryInput(e),
            t.leadOwnerInput(e),
            t.contactOwnerInput(e);
        }),
        document.addEventListener("d365mkt-afterformsubmit", function () {
          t.affterFormSubmitRedirect(e),
            t.affterFormSubmitSuccessMessage(e),
            t.affterFormSubmitFailureMessage(e);
        });
    },
  }),
  ((i) => {
    var s = document.querySelector(".header"),
      a = document.querySelector(".header__nav-wrapper");
    AMG.ui.header = {
      updateHeaderHeight: function () {
        document.documentElement.style.setProperty(
          "--header-height",
          s.offsetHeight + "px"
        );
      },
      fixedHeader: function () {
        0 < i.pageYOffset
          ? s.classList.add("header--fixed")
          : s.classList.remove("header--fixed");
      },
      toggleMobileNav: function () {
        var e = document.querySelector(".nav__trigger--open"),
          t =
            (document.querySelector(".nav__trigger--close"),
            new Event("mainNavClosed", {
              bubbles: !0,
              cancelable: !0,
              composed: !1,
            }));
        e.addEventListener(
          "click",
          function (e) {
            e.preventDefault(),
              document.body.classList.contains("nav-open")
                ? (s.classList.remove("trigger--open"),
                  s.dispatchEvent(t),
                  TweenLite.to(a, 0.3, {
                    x: "110%",
                    clearProps: "x",
                    onComplete: function () {
                      document.body.classList.remove("nav-open"),
                        (document.body.style.paddingRight = 0);
                    },
                  }))
                : (s.classList.add("trigger--open"),
                  TweenLite.to(a, 0.3, {
                    x: "0%",
                    clearProps: "x",
                    onComplete: function () {
                      var e =
                        i.innerWidth - document.documentElement.clientWidth;
                      document.body.classList.add("nav-open"),
                        (document.body.style.paddingRight = e + "px");
                    },
                  }));
          },
          !1
        );
      },
      throttle: function (t, i) {
        var s = 0;
        return function () {
          var e = new Date().getTime();
          if (!(e - s < t)) return (s = e), i.apply(void 0, arguments);
        };
      },
      debounce: function (s, a) {
        var n = void 0;
        return function () {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          n && clearTimeout(n),
            (n = setTimeout(function () {
              a.apply(void 0, t), (n = null);
            }, s));
        };
      },
      setup: function () {
        AMG.tools.screenMode.currentMode < AMG.tools.screenSizes.desktop + 1 ||
        1024 === i.innerWidth
          ? this.toggleMobileNav()
          : (this.fixedHeader(), TweenLite.set(a, { clearProps: "all" }));
      },
      resizeHandler: function () {
        var e = this,
          t = this.debounce(100, function () {
            return e.setup();
          });
        i.addEventListener("resize", function () {
          return t();
        });
      },
      init: function () {
        var e = this;
        this.setup(),
          this.resizeHandler(),
          i.addEventListener("scroll", this.throttle(300, this.fixedHeader)),
          i.addEventListener("scroll", this.debounce(300, this.fixedHeader)),
          this.updateHeaderHeight(),
          new ResizeObserver(function () {
            return e.updateHeaderHeight();
          }).observe(s);
      },
    };
  })(window),
  ((c) => {
    AMG.ui.headerWidget = {
      toggleHeaderWidget: function (l) {
        for (
          var d = this,
            e = function (e) {
              var t = l[e],
                e = t.querySelector("button.header-widget__button"),
                i = t.querySelector(".header-widget__overlay"),
                s = t.querySelector(".header-widget__close"),
                a = "header-widget--active",
                n =
                  AMG.tools.screenMode.currentMode <
                  AMG.tools.screenSizes.large + 1;
              function r() {
                i.classList.remove(a),
                  n && t.classList.contains("header-widget--search")
                    ? TweenLite.set(i, { clearProps: "all" })
                    : TweenLite.set(i, { x: "100%", "z-index": 10 });
              }
              function o() {
                var e;
                i.classList.contains(a)
                  ? (i.classList.remove(a), TweenLite.to(i, 0.4, { x: "100%" }))
                  : ((e = document.querySelector("." + a)) &&
                      (e.classList.remove("header-widget--active"),
                      TweenLite.to(e, 0.4, { x: "100%" })),
                    i.classList.add(a),
                    (e = i.querySelectorAll(
                      'input[type="text"]:not([disabled])'
                    )[0]) && e.focus(),
                    TweenLite.to(i, 0.4, { x: "0%" }));
              }
              r(),
                e.addEventListener("click", function (e) {
                  e.preventDefault(), o();
                }),
                s.addEventListener("click", function (e) {
                  e.preventDefault(), o();
                }),
                c.addEventListener("scroll", d.throttle(300, r)),
                c.addEventListener("scroll", d.debounce(300, r)),
                c.addEventListener("resize", function () {
                  (n =
                    AMG.tools.screenMode.currentMode <
                    AMG.tools.screenSizes.large + 1),
                    d.debounce(300, r());
                });
            },
            t = 0;
          t < l.length;
          t++
        )
          e(t);
      },
      handleHeaderWidgetSearch: function () {
        var i,
          s,
          e = document.querySelector(".header-widget__form");
        e &&
          ((i = e.action),
          (s = document.querySelector(".header-widget__input")),
          e.addEventListener("submit", function (e) {
            e.preventDefault();
            var e = !1,
              t = s.value;
            (e = t && "" != t ? AMG.ui.checkForTrackNumber(t) : e) &&
            AMG.data.overlayEndpoint
              ? AMG.ui.overlays.loadContent(
                  AMG.data.overlayEndpoint + "?id=" + e
                )
              : c.location.replace(i + "?q=" + encodeURIComponent(s.value));
          }));
      },
      throttle: function (t, i) {
        var s = 0;
        return function () {
          var e = new Date().getTime();
          if (!(e - s < t)) return (s = e), i.apply(void 0, arguments);
        };
      },
      debounce: function (s, a) {
        var n = void 0;
        return function () {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          n && clearTimeout(n),
            (n = setTimeout(function () {
              a.apply(void 0, t), (n = null);
            }, s));
        };
      },
      init: function (e) {
        this.toggleHeaderWidget(e), this.handleHeaderWidgetSearch();
      },
    };
  })(window),
  (AMG.ui.jobPage = {
    DOM: {
      module: document.querySelector(".module.job"),
      isExperienceEditor: document.body.classList.contains("experience-editor"),
    },
    init: function (e) {
      function t(t) {
        ("&nbsp;" != t.innerHTML.trim() && "" != t.innerHTML.trim()) ||
          t.parentNode.removeChild(t);
        var e = t.childNodes,
          e =
            (e[0] &&
              e[0].nodeType === Node.ELEMENT_NODE &&
              "BR" === t.children[0].tagName &&
              e[0].remove(),
            1 !== t.children.length ||
              "BR" !== t.children[0].tagName ||
              t.parentNode.classList.contains("text__content") ||
              t.parentNode.removeChild(t),
            t.querySelectorAll("b")),
          i = !0,
          t = !1,
          s = void 0;
        try {
          for (
            var a, n = e[Symbol.iterator]();
            !(i = (a = n.next()).done);
            i = !0
          ) {
            var r,
              o,
              l = a.value,
              d = l.parentNode.childNodes;
            l.parentNode &&
              "P" === l.parentNode.tagName &&
              d &&
              1 === d.length &&
              ((r = l.innerText),
              ((o = document.createElement("h2")).innerText = r),
              l.replaceWith(o),
              o.nextElementSibling &&
                "BR" === o.nextElementSibling.tagName &&
                o.nextElementSibling.remove(),
              o.parentElement.parentElement.insertBefore(o, o.parentElement));
          }
        } catch (e) {
          (t = !0), (s = e);
        } finally {
          try {
            !i && n.return && n.return();
          } finally {
            if (t) throw s;
          }
        }
      }
      function i(e) {
        e.style.cssText = "";
      }
      if (this.DOM.module && !this.DOM.isExperienceEditor) {
        var s = this.DOM.module.querySelector(".rte"),
          a = this.DOM.module.getElementsByTagName("p"),
          n = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var l, d = s.children[Symbol.iterator]();
            !(n = (l = d.next()).done);
            n = !0
          ) {
            var c = l.value;
            i(c), t(c);
          }
        } catch (e) {
          (r = !0), (o = e);
        } finally {
          try {
            !n && d.return && d.return();
          } finally {
            if (r) throw o;
          }
        }
        var u = !0,
          s = !1,
          r = void 0;
        try {
          for (
            var p, h = a[Symbol.iterator]();
            !(u = (p = h.next()).done);
            u = !0
          ) {
            var f = p.value;
            i(f), t(f);
          }
        } catch (e) {
          (s = !0), (r = e);
        } finally {
          try {
            !u && h.return && h.return();
          } finally {
            if (s) throw r;
          }
        }
      }
    },
  }),
  ((n) => {
    var r = "",
      o =
        AMG.tools.screenMode.currentMode < AMG.tools.screenSizes.desktop + 1 ||
        1024 === n.innerWidth;
    AMG.ui.mainNavigation = {
      detectActiveItems: function () {
        var i = document.querySelector(".nav"),
          e = i.querySelectorAll(".nav__main-item a"),
          t = i.querySelectorAll(".nav__sub-item a");
        [].concat(_toConsumableArray(e)).forEach(function (e, t) {
          e.classList.contains("selected") &&
            (e.closest(".nav__main").classList.add("active-subnav"),
            i.classList.add("active-item"));
        }),
          [].concat(_toConsumableArray(t)).forEach(function (e, t) {
            e.classList.contains("selected") &&
              (e.closest(".nav__sub").classList.add("active-sub-item"),
              i.classList.add("active-item"));
          });
      },
      handleDeepNavigation: function () {
        var a = this;
        fetch(this.getParentMenuUrl + "?contextItemId=" + this.contextId)
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            var i = [];
            (function e(t) {
              t.HasChildren &&
                (i.push(t.Children),
                (t = t.Children.filter(function (e) {
                  return e.Selected && e.HasChildren;
                })).length) &&
                e(t[0]);
            })(e);
            for (var t = 0; t < i.length; t++) {
              var s = document.querySelectorAll(".nav__sub-item .selected")[t];
              s &&
                ((s = s.parentNode),
                a.renderSubmenu(i[t], s),
                a.addExpandButtons());
            }
          })
          .then(function () {
            a.toggleNavItems();
          })
          .catch(function (e) {
            n.console.error(e);
          });
      },
      reset: function () {
        for (
          var e = document.querySelectorAll(".nav__expand-toggle"), t = 0;
          t < e.length;
          t++
        ) {
          var i = e[t];
          i.parentNode.classList.remove("expand"),
            i.classList.remove("toggle--open");
        }
      },
      toggleNavItems: function () {
        for (
          var e = document.querySelectorAll(".nav__expand-toggle"), t = 0;
          t < e.length;
          t++
        ) {
          var i = e[t],
            s = i.parentNode,
            a = s.nextElementSibling;
          s.classList.contains("selected") &&
            a &&
            a.querySelector(".selected") &&
            (s.classList.add("expand"), i.classList.add("toggle--open"));
        }
      },
      addClickEvents: function () {
        for (
          var t = this,
            e = document.querySelectorAll(".nav__expand-toggle"),
            i = 0;
          i < e.length;
          i++
        ) {
          var s = e[i],
            a = s.parentNode,
            n = a.nextElementSibling;
          o && !AMG.tools.hasClass(s, "btn--initialized")
            ? (s.classList.add("btn--initialized"),
              a.addEventListener("click", function (e) {
                e.preventDefault();
                e =
                  "A" === e.target.nodeName
                    ? e.target.querySelector("button")
                    : e.target;
                e &&
                  e.parentNode &&
                  e.parentNode.parentNode &&
                  (1 <
                    (e.parentNode.dataset.currentMenuLevel
                      ? Number(e.parentNode.parentNode.dataset.currentMenuLevel)
                      : 2) &&
                    (e.parentNode.parentNode.querySelector(
                      ".nav__back-button"
                    ).innerHTML = r),
                  (r =
                    (r = e.parentNode.dataset.itemTitle) ||
                    e.parentNode.parentNode.dataset.itemTitle)),
                  t.showSubmenu(e);
              }))
            : TweenLite.set(n, { clearProps: "all" });
        }
      },
      showSubmenu: function (e) {
        var t = this,
          i = e.parentNode,
          s = AMG.tools.hasClass(i.nextElementSibling, "nav__sub--initialized"),
          a = i.parentNode,
          i = i.getAttribute("data-item-id");
        s
          ? this.toggleItem(e)
          : fetch(
              this.getChildMenuUrl +
                "?itemId=" +
                i +
                "&contextItemId=" +
                this.contextId
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                (t.submenu = e), t.renderSubmenu(t.submenu, a);
              })
              .then(function () {
                t.setup(), t.toggleItem(e);
              })
              .catch(function (e) {
                n.console.error(e);
              });
      },
      renderSubmenu: function (e, t) {
        if (!Array.isArray(e)) return "";
        for (
          var i = t.querySelector(".nav__sub ul"), s = 0, a = e.length;
          s < a;
          s += 1
        ) {
          var n = e[s],
            r = n.NavigationModel.NavigationTitle,
            o = n.NavigationModel.Link.Url,
            l = n.Id.Guid,
            n = n.HasChildren;
          i.insertAdjacentHTML(
            "beforeend",
            '<li class="nav__sub-item" ' +
              (n ? "data-has-children" : "") +
              '>\n                                    <a href="' +
              o +
              '" class="nav__link nav__link--sub ' +
              (n ? "expandable" : "") +
              '" data-item-id="' +
              l +
              '" data-item-title="' +
              r +
              '">\n                                    ' +
              r +
              "\n                                    </a>\n                                </li>"
          );
        }
      },
      toggleItem: function (e) {
        var t = e.parentNode,
          i = t.nextElementSibling;
        o || TweenLite.set(i, { height: "auto" }),
          t.classList.contains("expand")
            ? (e.classList.remove("toggle--open"),
              o ||
                TweenLite.to(i, 0.3, {
                  height: 0,
                  clearProps: "all",
                  onComplete: function () {
                    t.classList.remove("expand");
                  },
                }))
            : (t.classList.add("expand"),
              e.classList.add("toggle--open"),
              o || TweenLite.from(i, 0.3, { height: 0, clearProps: "all" })),
          this.addActiveClass();
      },
      toggleSubnav: function () {
        for (
          var i = document.querySelectorAll(".nav__main-item"), e = 0;
          e < i.length;
          e++
        )
          ((e) => {
            var t = (e = i[e]).querySelector(".nav__sub");
            t &&
              !o &&
              (e.addEventListener("mouseenter", function (e) {
                o ||
                  (e.preventDefault(),
                  TweenLite.from(t, 0.6, {
                    y: "-20px",
                    opacity: 1,
                    display: "none",
                  }),
                  TweenLite.to(t, 0.6, {
                    y: " 0%",
                    opacity: 1,
                    display: "block",
                  }));
              }),
              e.addEventListener("mouseleave", function (e) {
                e.preventDefault(),
                  o ||
                    TweenLite.to(t, 0.3, {
                      y: "-20px",
                      opacity: 0,
                      display: "none",
                    });
              }));
          })(e);
      },
      addExpandButtons: function () {
        var n = document.querySelector(".nav");
        if (o)
          for (
            var r = document.querySelectorAll(
                ".nav__sub-item[data-has-children]:not(.nav__sub-item--initialized) > a"
              ),
              e = 0;
            e < r.length;
            e++
          )
            ((e) => {
              var e = r[e],
                t =
                  (((t = document.createElement("BUTTON")).innerHTML =
                    '<span class="icon--expand"></span>'),
                  (t.className = "nav__expand-toggle"),
                  t.setAttribute(
                    "aria-label",
                    "Click to expand sub navigation"
                  ),
                  e.appendChild(t),
                  AMG.tools.addClass(e, "expandable"),
                  AMG.tools.addClass(
                    e.parentNode,
                    "nav__sub-item--initialized"
                  ),
                  document.createElement("div")),
                i = document.createElement("button"),
                s = document.createElement("a");
              (a = document.createElement("span")).classList.add(
                "nav__sub__header__title"
              ),
                (a.innerHTML = e.textContent),
                s.classList.add("nav__sub__header"),
                s.appendChild(a);
              (a = document.createElement("span")).classList.add(
                "nav__sub__header__link"
              ),
                (s.href = e.href),
                (a.innerHTML = n.dataset.translationSeePage),
                s.appendChild(a),
                i.classList.add("nav__back-button"),
                (i.innerHTML = n.dataset.translationBackButton),
                i.addEventListener("click", function () {
                  i.closest(".nav__sub-item")
                    .querySelector(".expandable")
                    .classList.remove("expand");
                }),
                t.classList.add("nav__sub");
              var a = document.createElement("UL");
              t.appendChild(i),
                t.appendChild(s),
                t.appendChild(a),
                (t.className = "nav__sub"),
                e.parentNode.appendChild(t);
            })(e);
      },
      debounce: function (s, a) {
        var n = void 0;
        return function () {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          n && clearTimeout(n),
            (n = setTimeout(function () {
              a.apply(void 0, t), (n = null);
            }, s));
        };
      },
      setup: function () {
        var t = this,
          e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
          i = document
            .querySelector(".nav")
            .querySelectorAll(".nav__back-button");
        n.addEventListener("mainNavClosed", function (e) {
          t.reset();
        }),
          (o =
            AMG.tools.screenMode.currentMode <
              AMG.tools.screenSizes.desktop + 1 || 1024 === n.innerWidth),
          (isScreensizeLarge =
            AMG.tools.screenMode.currentMode === AMG.tools.screenSizes.large),
          (isScreensizeLargest =
            AMG.tools.screenMode.currentMode === AMG.tools.screenSizes.xxlarge),
          this.detectActiveItems(),
          this.addExpandButtons(),
          this.addClickEvents(),
          e || this.toggleNavItems(),
          this.toggleSubnav(),
          [].concat(_toConsumableArray(i)).forEach(function (e) {
            e.addEventListener("click", function () {
              (e.closest(".nav__sub-item")
                ? e.closest(".nav__sub-item")
                : e.closest(".nav__main-item")
              )
                .querySelector(".expandable")
                .classList.remove("expand"),
                t.addActiveClass();
            });
          }),
          o &&
            2 < this.menulvl &&
            !this.deepNavInitialized &&
            (this.handleDeepNavigation(), (this.deepNavInitialized = !0));
      },
      addActiveClass: function () {
        var i = document.querySelectorAll(".expand");
        i.forEach(function (e, t) {
          t === i.length - 1
            ? e.classList.add("active")
            : e.classList.contains("active") && e.classList.remove("active");
        });
      },
      resizeHandler: function () {
        var e = this,
          t = this.debounce(500, function () {
            e.reset(), e.setup(!0);
          });
        n.addEventListener("resize", function () {
          return t();
        });
      },
      init: function () {
        (this.hostUrl = n.location.protocol + "//" + n.location.host),
          (this.getChildMenuUrl =
            this.hostUrl + "/api/sitecore/menu/GetMenuItemChildren"),
          (this.getParentMenuUrl =
            this.hostUrl + "/api/sitecore/menu/GetMenuItemParents"),
          (this.contextId = document
            .querySelector(".nav")
            .getAttribute("data-context-item-id")),
          (this.menulvl = document
            .querySelector(".nav")
            .getAttribute("data-current-menu-level")),
          (this.deepNavInitialized = !1),
          this.setup(!0),
          this.resizeHandler();
      },
    };
  })(window);
var offices = offices || 0,
  _slicedToArray =
    ((() => {
      var u, p;
      AMG.ui.maps = {
        googleMapsApiKey: "AIzaSyDlT-lKAabFfExqPoWMLuZ7sRG05t60ACY",
        staticMapApi: "AIzaSyDlT-lKAabFfExqPoWMLuZ7sRG05t60ACY",
        officeInfo: [],
        setupMap: function () {
          var e = new google.maps.Map(u, {
            zoom: 8,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: "terrain",
            scrollwheel: !1,
            disableDefaultUI: !0,
            zoomControl: !0,
            maxZoom: 16,
            minZoom: 3,
            draggable: 3 <= AMG.tools.screenMode.currentMode || !1,
            styles: [
              { featureType: "all", stylers: [{ saturation: -80 }] },
              {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ hue: "#b4b089" }, { saturation: 50 }],
              },
              {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
              },
            ],
          });
          this.setMarkers(e);
        },
        createPrintableMap: function (e, t, i) {
          var s = document.getElementById("static-map"),
            a = "https://maps.googleapis.com/maps/api/staticmap",
            a =
              (a =
                (a += "?size=640x325") +
                ("&center=" + t + "," + i) +
                "&zoom=11") +
              ("&markers=" + t + "," + i) +
              ("&key=" + this.staticMapApi);
          s && (s[0].src = a);
        },
        setMarkers: function (t) {
          var i = this,
            e = new google.maps.MarkerImage(
              "https://dsv-media-premium.azureedge.net/frontend/base/static/dist/img/pin_map.png",
              null,
              null,
              null,
              new google.maps.Size(28, 43)
            ),
            s = parseInt(u.getAttribute("data-offset-x")) || -200,
            a = parseInt(u.getAttribute("data-offset-y")) || 0;
          if (offices) {
            for (
              var n, r = new google.maps.LatLngBounds(), o = 0;
              o < offices.length;
              o++
            ) {
              var l,
                d,
                c = offices[o];
              c[1] &&
                c[2] &&
                (l = new google.maps.Marker({
                  position: { lat: c[1], lng: c[2] },
                  map: t,
                  flat: !0,
                  icon: e,
                  title: c[0],
                  zIndex: c[3] || o + 1,
                })),
                r.extend(l.position),
                2 <= AMG.tools.screenMode.currentMode &&
                  (((d = document.createElement("div")).className =
                    "office-info"),
                  (d.innerHTML =
                    "<h3>" +
                    c[9] +
                    "</h3><p>" +
                    c[0] +
                    "<br />" +
                    c[4] +
                    "<br />" +
                    c[5] +
                    " " +
                    c[6] +
                    "<br />" +
                    c[7] +
                    '</p><div><a class="cta cta--link" href="' +
                    c[10] +
                    '" data-office="' +
                    o +
                    '" target="_blank" rel="noopener">' +
                    c[8] +
                    "</a></div>"),
                  (c = new google.maps.InfoWindow({ content: d })),
                  i.officeInfo.push(c),
                  l.addListener("click", function (e) {
                    i.openOfficeInfo(this, this.zIndex - 1);
                  })),
                3 <= AMG.tools.screenMode.currentMode &&
                  0 === o &&
                  ((p = l), (c = document.getElementById("static-map"))) &&
                  c.parentNode.insertBefore(d, c.nextSibling);
            }
            t.fitBounds(r),
              3 <= AMG.tools.screenMode.currentMode &&
                (n = google.maps.event.addListener(t, "idle", function () {
                  var e = parseInt(u.getAttribute("data-zoomlevel"));
                  e && t.setZoom(e),
                    t.panBy(s, a),
                    setTimeout(function () {
                      i.officeInfo[0].open(t, p);
                    }, 1500),
                    setTimeout(function () {
                      AMG.ui.maps.createPrintableMap(
                        t,
                        p.getPosition().lat(),
                        p.getPosition().lng()
                      );
                    }, 2500),
                    google.maps.event.removeListener(n);
                }));
          } else;
        },
        openOfficeInfo: function (e, t) {
          this.closeOfficeInfos(), this.officeInfo[t].open(map, e);
        },
        closeOfficeInfos: function () {
          for (var e = 0; e < this.officeInfo.length; e++)
            this.officeInfo[e].close();
        },
        init: function () {
          var e;
          (u = document.getElementById("map")) &&
            (((e = document.createElement("script")).type = "text/javascript"),
            (e.src =
              "https://maps.googleapis.com/maps/api/js?key=" +
              this.googleMapsApiKey +
              "&callback=AMG.ui.maps.setupMap"),
            document.head.appendChild(e));
        },
      };
    })(),
    ((a) => {
      AMG.ui.newslist = {
        displayItems: function (e, t) {
          var i = this;
          this.dom.newslist
            .querySelectorAll("li")
            [t].classList.add("initialized"),
            setTimeout(function () {
              t + 1 < e.length && i.displayItems(e, t + 1);
            }, 100);
        },
        renderItems: function (e) {
          if (!Array.isArray(e)) return "";
          (this.dom.newslist.innerHTML = ""),
            TweenLite.to(this.dom.newslist, 0, { opacity: 1 });
          for (var t = [], i = 0, s = this.responseLength; i < s; i += 1) {
            var a = e[i],
              a =
                '<li class="newslist__item">\n                                    <a href="' +
                a.Url +
                '">\n                                        <h3>' +
                a.Headline +
                "</h3>\n                                        <p>" +
                a.Manchet +
                "</p>\n                                        <date>" +
                a.Date +
                "</date>\n                                    </a>\n                                </li>";
            t.push(a), this.dom.newslist.insertAdjacentHTML("beforeend", a);
          }
          this.displayItems(t, 0);
        },
        displayErrorMessage: function (e) {
          this.dom.newslist.innerHTML = e;
        },
        renderLoader: function (e) {
          e
            ? this.dom.newslistLoader.insertAdjacentHTML(
                "afterbegin",
                '\n                                <div class="module-loader">\n                                    <div class="module-loader--spinner"></div>\n                                </div>'
              )
            : (this.dom.newslistLoader.innerHTML = "");
        },
        loadData: function () {
          var t = this,
            e = (this.renderLoader(!0), this.currentPage * this.pageSize);
          fetch(
            this.apiUrl +
              "?datasourceId=" +
              this.dataSource +
              "&from=" +
              e +
              "&numberofnews=" +
              this.pageSize
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              (t.newsItem = e.NewsItems),
                (t.responseLength = t.newsItem.length),
                (t.totalNews = e.TotalCount || 20),
                (t.numberOfPages = Math.ceil(t.totalNews / t.pageSize)),
                t.renderLoader(!1),
                t.renderItems(t.newsItem),
                t.dom.pagination &&
                  t.totalNews > t.pageSize &&
                  ((t.dom.pagination.innerHTML = ""),
                  t.dom.pagination.appendChild(
                    AMG.ui.pagination.renderPagination(
                      t.numberOfPages,
                      Number(t.currentPage)
                    )
                  ),
                  t.bindPaginationEvents());
            })
            .catch(function (e) {
              t.renderLoader(!1),
                t.displayErrorMessage(
                  "Sorry. There seems to be an error loading news. Please try again"
                ),
                a.console.error(e);
            });
        },
        updateQueryStringParameter: function (e, t, i) {
          var s = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
            a = -1 !== e.indexOf("?") ? "&" : "?";
          return e.match(s)
            ? e.replace(s, "$1" + t + "=" + i + "$2")
            : e + a + t + "=" + i;
        },
        bindPaginationEvents: function () {
          for (
            var i = this,
              s = this,
              e =
                ((this.dom.paginationLinks =
                  document.querySelectorAll(".pagination__link")),
                0);
            e < this.dom.paginationLinks.length;
            e++
          )
            ((t) => {
              i.dom.paginationLinks[t].addEventListener("click", function (e) {
                switch ((e.preventDefault(), t)) {
                  case 0:
                    0 < i.currentPage && --i.currentPage;
                    break;
                  case i.dom.paginationLinks.length - 1:
                    i.currentPage < i.numberOfPages - 1 && (i.currentPage += 1);
                    break;
                  default:
                    i.currentPage = Number(
                      i.dom.paginationLinks[t].getAttribute("data-page")
                    );
                }
                e = i.updateQueryStringParameter(
                  a.location.href,
                  "page",
                  Number(i.currentPage + 1)
                );
                a.history.replaceState("", "page", e),
                  TweenLite.to(a, 0, {
                    scrollTo: { y: i.dom.container, offsetY: 100 },
                  }),
                  TweenLite.to(i.dom.newslist, 0, {
                    opacity: 0,
                    onComplete: s.loadData,
                    onCompleteScope: s,
                  });
              });
            })(e);
        },
        init: function (e) {
          (this.dom = {}),
            (this.dom.container = AMG.DOM.newslist),
            (this.dom.newslist = document.querySelector(".newslist__list")),
            (this.dom.newslistLoader =
              document.querySelector(".newslist__loader")),
            (this.dom.pagination = document.querySelector(
              ".newslist__pagination"
            )),
            (this.pageSize =
              this.dom.newslist.getAttribute("data-pagesize") || 5),
            (this.serviceUrl =
              this.dom.newslist.getAttribute("data-service-url")),
            (this.dataSource =
              this.dom.newslist.getAttribute("data-datasource")),
            (this.hostUrl = a.location.protocol + "//" + a.location.host),
            AMG.tools.getUrlParams("page")
              ? (this.currentPage = Number(AMG.tools.getUrlParams("page")) - 1)
              : (this.currentPage = 0),
            (this.apiUrl = this.hostUrl + "/" + this.serviceUrl),
            this.loadData();
        },
      };
    })(window),
    ((i) => {
      var s = void 0;
      AMG.ui.offices = {
        DOM: {
          module: document.querySelector(".offices-list"),
          resultList: document.querySelector(".offices-list__result"),
        },
        setButtonText: function (e) {
          s.options.toggleBtn.textContent = e;
        },
        toggleShowOffices: function (e) {
          e.preventDefault(), e.stopPropagation(), s.options.toggleBtn.blur();
          var e = s.DOM.resultList,
            t = s.DOM.resultList;
          e.classList.contains(s.options.hideClass)
            ? (e.classList.remove(s.options.hideClass),
              s.setButtonText(s.options.hideText))
            : (e.classList.add(s.options.hideClass),
              s.setButtonText(s.options.showText),
              TweenLite.to(i, 0.1, { scrollTo: { y: t, offsetY: 150 } }));
        },
        init: function () {
          ((s = this).options = {
            hideClass: "hide-offices",
            showText: this.DOM.resultList.getAttribute("data-showtext"),
            hideText: this.DOM.resultList.getAttribute("data-hidetext"),
            toggleBtn: this.DOM.module.querySelector(".offices-list__toggle"),
          }),
            AMG.ui.enableDataLinks(),
            this.DOM.resultList.classList.contains(s.options.hideClass)
              ? s.setButtonText(s.options.showText)
              : s.setButtonText(s.options.hideText),
            s.options.toggleBtn.addEventListener("click", s.toggleShowOffices);
        },
      };
    })(window),
    ((l) => {
      AMG.ui.overlays = {
        loadContent: function (e) {
          var t = this;
          fetch(e)
            .then(function (e) {
              return e.text();
            })
            .then(function (e) {
              e.includes("div")
                ? t.createOverlay(e)
                : l.console.log("No content returned from overlay service");
            })
            .catch(function (e) {
              l.console.error(e);
            });
        },
        createOverlay: function (e, t) {
          var i,
            s = this,
            a = !1,
            n =
              (t && (a = t.hasAttribute("data-overlay-large")),
              new tingle.modal({
                footer: !0,
                stickyFooter: !1,
                closeMethods: ["overlay", "escape"],
                cssClass: [a ? "tingle--youtube" : "tingle--regular"],
                onOpen: function () {
                  AMG.ui.focus.trapFocus(n.modal);
                },
                onClose: function () {
                  this.destroy(), AMG.ui.focus.setExistingFocus();
                },
                beforeClose: function () {
                  return !0;
                },
              })),
            a =
              (n.setContent(e),
              n.getContent().querySelector(".tingle-modal__image img")),
            a =
              (a &&
                ((e = new Image()) && (e.src = a.getAttribute("src")),
                (e.onload = function () {
                  n.checkOverflow();
                })),
              document.querySelector(".ip-lookup")),
            e = n.getContent().querySelector("iframe[data-consent-src]");
          if (
            (e &&
              ((o = e.getAttribute("data-consent-src")),
              (i = e.getAttribute("data-category-consent")),
              CookieInformation.getConsentGivenFor(i)
                ? (e && (e.src = o), AMG.ui.fitvids.init())
                : ((l.renewConsent = function () {
                    n.close(),
                      CookieConsent.renew(),
                      s.bindOneTimeConsentEvent(t, i);
                  }),
                  (e =
                    "\n                                 <p>" +
                    l.CookieInformation.youtubeNotVisibleDescription +
                    '</p>\n                                 <p></p>\n                                 <button class="cta cta--primary" onClick="renewConsent()">Renew Consent</button>'),
                  n.setContent(e))),
            a)
          ) {
            var r = a.dataset.redirectUrl,
              o = a.dataset.overlayRedirectSeconds;
            if (r)
              return (
                setTimeout(
                  function () {
                    return l.location.assign(r);
                  },
                  o ? 1e3 * o : 3e3
                ),
                void this.displayOverlay(n)
              );
          }
          n.addFooterBtn("Close", "cta--close", function () {
            n.close();
          }),
            document.querySelector(".cta-overlay--close") &&
              document
                .querySelector(".cta-overlay--close")
                .addEventListener("click", function () {
                  n.close();
                }),
            document.querySelector(".cta-overlay--changeCountrySite") &&
              document
                .querySelector(".cta-overlay--changeCountrySite")
                .addEventListener("click", function () {
                  AMG.ui.cookies.setCookie(
                    "countryCode",
                    AMG.data.iplookup.countryCode,
                    180
                  );
                }),
            this.displayOverlay(n);
        },
        bindOneTimeConsentEvent: function (i, s) {
          l.addEventListener(
            "CookieInformationConsentGiven",
            function e(t) {
              CookieInformation.getConsentGivenFor(s) && i.click(),
                this.removeEventListener("CookieInformationConsentGiven", e);
            },
            !1
          );
        },
        displayOverlay: function (e) {
          e.open();
        },
        setupOverlayTriggers: function (e) {
          var t = this,
            i = e,
            s = i.getAttribute("data-overlay-content");
          i.addEventListener("click", function (e) {
            e.preventDefault(), t.createOverlay(s, i);
          });
        },
      };
    })(window),
    (AMG.ui.pagination = {
      renderPagination: function (e, t) {
        var i =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : "pagination__item",
          s =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : "pagination__link",
          a =
            4 < arguments.length && void 0 !== arguments[4]
              ? arguments[4]
              : "data-page",
          n = document.createElement("ul"),
          r =
            ((n.className = "pagination"),
            '\n                            <li class="' +
              i +
              " " +
              i +
              '--next" ' +
              (t + 1 === e ? "disabled" : "") +
              '>\n                                <a class="' +
              s +
              '" href="#" ' +
              (t + 1 === e ? 'tabindex="-1"' : "") +
              ' aria-label="Next">\n                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">\n                                        <path fill-rule="evenodd" d="M6.384 7.364l5.47-6.003a.508.508 0 0 0 0-.714.501.501 0 0 0-.71 0L6.004 6.29.859.647a.501.501 0 0 0-.71 0 .508.508 0 0 0 0 .714l5.47 6.003c.105.105.245.15.385.143a.498.498 0 0 0 .38-.143"/>\n                                    </svg>\n                                </a>\n                            </li>\n            '),
          o =
            '\n                            <li class="' +
            i +
            '" disabled>\n                                <a class="' +
            s +
            '">\n                                    ...\n                                </a>\n                            </li>\n            ',
          l = [],
          d = void 0,
          c =
            (l.push(
              '\n                            <li class="' +
                i +
                " " +
                i +
                '--prev" ' +
                (0 === t ? "disabled" : "") +
                '>\n                                <a class="' +
                s +
                '" href="#" ' +
                (0 === t ? 'tabindex="-1"' : "") +
                ' aria-label="Previous">\n                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">\n                                        <path fill-rule="evenodd" d="M6.384 7.364l5.47-6.003a.508.508 0 0 0 0-.714.501.501 0 0 0-.71 0L6.004 6.29.859.647a.501.501 0 0 0-.71 0 .508.508 0 0 0 0 .714l5.47 6.003c.105.105.245.15.385.143a.498.498 0 0 0 .38-.143"/>\n                                    </svg>\n                                </a>\n                            </li>\n            '
            ),
            t - 2 + 1),
          u = t + 2;
        if (
          (e - 1 < u && ((u = e - 1), (c = (c = e - 4) < 0 ? 0 : c)),
          c <= 0 && ((c = 0), (u = Math.min(3, e - 1))),
          c < 2)
        )
          for (var p = 0; p < c; p++)
            l.push(
              (d =
                '<li class="' +
                i +
                " " +
                (p === t ? "pagination__item--active" : "") +
                '">\n                            <a class="' +
                s +
                '" href="#" ' +
                a +
                '="' +
                p +
                '">\n                                ' +
                (p + 1) +
                "\n                                " +
                (p === t ? '<span class="sr-only">(current)</span>' : "") +
                "\n                            </a>\n                        </li>")
            );
        else
          l.push(
            (d =
              '<li class="' +
              i +
              " " +
              (0 === t ? "pagination__item--active" : "") +
              '">\n                            <a class="' +
              s +
              '" href="#" ' +
              a +
              '="0">\n                                1\n                                ' +
              (0 === t ? '<span class="sr-only">(current)</span>' : "") +
              "\n                            </a>\n                        </li>\n                    ")
          ),
            l.push(o);
        for (var h = c, f = u; h < f; h += 1)
          l.push(
            (d =
              '<li class="' +
              i +
              " " +
              (h === t ? "pagination__item--active" : "") +
              '">\n                            <a class="' +
              s +
              '" href="#" ' +
              a +
              '="' +
              h +
              '">\n                                ' +
              (h + 1) +
              "\n                                " +
              (h === t ? '<span class="sr-only">(current)</span>' : "") +
              "\n                            </a>\n                        </li>")
          );
        if (e - 2 < u)
          for (var m = u; m < e; m++)
            l.push(
              (d =
                '<li class="' +
                i +
                " " +
                (m === t ? "pagination__item--active" : "") +
                '">\n                            <a class="' +
                s +
                '" href="#" ' +
                a +
                '="' +
                m +
                '">\n                                ' +
                (m + 1) +
                "\n                                " +
                (m === t ? '<span class="sr-only">(current)</span>' : "") +
                "\n                            </a>\n                        </li>")
            );
        else
          (d =
            '<li class="' +
            i +
            '">\n                        <a class="' +
            s +
            '" href="#" ' +
            a +
            '="' +
            (e - 1) +
            '">\n                            ' +
            e +
            "\n                        </a>\n                    </li>\n                    "),
            l.push(o),
            l.push(d);
        return l.push(r), (n.innerHTML = l.join("")), n;
      },
    }),
    ((o) => {
      AMG.ui.responsiveTables = {
        DOM: { tables: AMG.DOM.responsiveTables },
        constants: {
          deviceHasTouch:
            document.body.parentElement.classList.contains("touchevents"),
        },
        init: function () {
          this.wrapTables(), this.addSwipeIcon();
        },
        wrapTables: function () {
          this.DOM.tables.forEach(function (e) {
            var t = document.createElement("div");
            t.classList.add("responsive-table__wrapper"),
              e.parentNode.insertBefore(t, e),
              t.appendChild(e);
          });
        },
        addSwipeIcon: function () {
          var e = this.DOM.tables,
            r = this;
          e.forEach(function (e, t) {
            var i, s, a, n;
            e.clientWidth > e.parentNode.clientWidth &&
              r.constants.deviceHasTouch &&
              ((i = function () {
                a.classList.add("responsive-table__icon--inactive"), n();
              }),
              (s = function () {
                AMG.tools.throttle(function () {
                  !e.classList.contains("table--inView") &&
                    r.isElementInViewport(e) &&
                    (e.classList.add("table--inView"),
                    setTimeout(function () {
                      a.classList.add("responsive-table__icon--inactive"), n();
                    }, 4e3));
                }, 250);
              }),
              (a = document.createElement("img")).setAttribute(
                "src",
                "https://dsv-media-premium.azureedge.net/frontend/base/static/dist/svg/swipefilled.svg"
              ),
              a.classList.add("responsive-table__icon"),
              (n = function () {
                a.removeEventListener("click", i),
                  e.removeEventListener("click", i),
                  e.parentNode.removeEventListener("scroll", i),
                  o.removeEventListener("scroll", s);
              }),
              a.addEventListener("click", i),
              e.addEventListener("click", i),
              e.parentNode.addEventListener("scroll", i),
              e.parentNode.insertBefore(a, e));
          });
        },
        isElementInViewport: function (e) {
          function t(e, t) {
            return document.elementFromPoint(e, t);
          }
          var i = e.getBoundingClientRect(),
            s = o.innerWidth || doc.documentElement.clientWidth,
            a = o.innerHeight || doc.documentElement.clientHeight;
          return (
            !(i.right < 0 || i.bottom < 0 || i.left > s || i.top > a) &&
            (e.contains(t(i.left, i.top)) ||
              e.contains(t(i.right, i.top)) ||
              e.contains(t(i.right, i.bottom)) ||
              e.contains(t(i.left, i.bottom)))
          );
        },
      };
    })(window),
    ((t) => {
      var e, i;
      AMG.ui.scroll = {
        scrollFunctions: [],
        totalFunctions: 0,
        throttleTimer: null,
        position: 0,
        menuTop: AMG.DOM.header.lenght
          ? AMG.DOM.header && AMG.DOM.header.offset().top
          : "",
        getScrollPosition: function (e) {
          AMG.ui.scroll.position =
            (t.pageYOffset || document.documentElement.scrollTop) -
            (document.documentElement.clientTop || 0);
        },
        runScrollFunctions: function () {
          var e,
            t = AMG.ui.scroll.scrollFunctions.length;
          for (AMG.ui.scroll.getScrollPosition(), e = 0; e < t; e++)
            AMG.ui.scroll.scrollFunctions[e]();
        },
        touchendFnc: function () {
          clearTimeout(e),
            (e = setTimeout(AMG.ui.scroll.animateInElements, 1500));
        },
        onScrollMobile: function () {
          AMG.ui.scroll.runScrollFunctions(),
            AMG.ui.scroll.position < AMG.ui.scroll.menuTop &&
              (t.removeEventListener("scroll", i),
              t.addEventListener("touchend", AMG.ui.scroll.touchendFnc));
        },
        animateInElements: function () {
          (i = AMG.tools.throttle(AMG.ui.scroll.onScrollMobile, 15)),
            AMG.ui.scroll.runScrollFunctions(),
            AMG.ui.scroll.position >= AMG.ui.scroll.menuTop &&
              (t.removeEventListener("touchend", AMG.ui.scroll.touchendFnc),
              t.addEventListener("scroll", i));
        },
        init: function () {
          Modernizr.touchevents
            ? t.addEventListener("touchend", function () {
                clearTimeout(e),
                  (e = setTimeout(AMG.ui.scroll.animateInElements, 1300));
              })
            : t.addEventListener(
                "scroll",
                AMG.tools.throttle(this.runScrollFunctions, 16)
              ),
            setTimeout(this.runScrollFunctions, 1300);
        },
      };
    })(window),
    function (e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) {
        var i = t,
          s = [],
          a = !0,
          t = !1,
          n = void 0;
        try {
          for (
            var r, o = e[Symbol.iterator]();
            !(a = (r = o.next()).done) &&
            (s.push(r.value), !i || s.length !== i);
            a = !0
          );
        } catch (e) {
          (t = !0), (n = e);
        } finally {
          try {
            !a && o.return && o.return();
          } finally {
            if (t) throw n;
          }
        }
        return s;
      }
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    });
function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
    return i;
  }
  return Array.from(e);
}
function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
    return i;
  }
  return Array.from(e);
}
((h) => {
  AMG.ui.searchResult = {
    DOM: {
      container: AMG.DOM.searchResult,
      input: document.querySelector(".search-result__input"),
      submitButton: document.querySelector(".search-result__button"),
      resultCount: document.querySelector(".search-result-count span"),
      form: document.querySelector(".search-result__search-container"),
      paginationContainer: document.querySelector(".search-result__pagination"),
      resultListView: document.querySelector(".search-result__result-list"),
      groupSummationsContainer: document.querySelector(".search-result .tabs"),
      groupSummationsTabs: document.querySelectorAll(".search-result .tabs li"),
      sortContainer: document.querySelector(".search-result__sort"),
      sorting: document.querySelector(".search-result__list-sort"),
      noResultsContainer: document.querySelector(".search-result__no-result"),
      bannerContainer: document.querySelector(".search-result__banners"),
    },
    DATASET: null,
    state: {
      input: "",
      totaltResults: "",
      documents: [],
      startIndex: 1,
      params: null,
      currentTabs: new Map(),
      initialSearchHasBeenMade: !1,
    },
    getUrl: function (e, t) {
      return (
        "" +
        this.DATASET.searchUrl +
        this.DATASET.searchProfile +
        "/" +
        this.DATASET.search +
        (e ? "?" + e.join("&") : "?q=" + t)
      );
    },
    updateResultCount: function (e) {
      (this.state.totaltResults = e),
        0 === (this.DOM.resultCount.innerText = e)
          ? (this.DOM.noResultsContainer.classList.remove("hidden"),
            this.DOM.sortContainer.classList.add("hidden"))
          : (this.DOM.noResultsContainer.classList.add("hidden"),
            this.DOM.sortContainer.classList.remove("hidden"));
    },
    groupBy: function (e, s) {
      var a = new Map();
      return (
        e.forEach(function (e) {
          var t = s(e),
            i = a.get(t);
          i ? i.push(e) : a.set(t, [e]);
        }),
        a
      );
    },
    handleUpdatingList: function (e) {
      var i,
        s,
        a = this;
      e.Documents &&
        ((i = e.SearchId),
        (s =
          "" +
          this.DATASET.searchUrl +
          this.DATASET.searchProfile +
          "/" +
          this.DATASET.redir),
        (e = e.Documents.map(function (e) {
          var t = a.groupBy(e.Properties, function (e) {
            return e.Name;
          });
          return AMG.template.listViewTemplate.getTemplate(t, e, i, s);
        }).join("")),
        (this.DOM.resultListView.innerHTML = e),
        []
          .concat(
            _toConsumableArray(this.DOM.resultListView.querySelectorAll("li"))
          )
          .forEach(function (e, t) {
            TweenLite.to(e, 0.5, { delay: 0.15 * t, opacity: 1 });
          }));
    },
    handlePaginationButtons: function (e) {
      var t;
      e &&
        ((t = e.Pages),
        this.createPaginationButtons(t, e.CurrentPage, e.TotalPages));
    },
    handleNewStartIndex: function (e) {
      (this.state.startIndex = e), this.handleQueryParameters("startIndex", e);
    },
    handleSearchBanner: function (e) {
      if (!e) return (this.DOM.bannerContainer.innerHTML = "");
      0 < e.length
        ? ((e = e
            .map(function (e) {
              return AMG.template.bannerTemplate.getTemplate(e);
            })
            .join("")),
          (this.DOM.bannerContainer.innerHTML = e))
        : (this.DOM.bannerContainer.innerHTML = "");
    },
    createPaginationButtons: function (e, i, s) {
      var a = e.length,
        e = e
          .map(function (e, t) {
            return AMG.template.paginationButton.getTemplate(e, i, t, a, s);
          })
          .join("");
      this.DOM.paginationContainer.innerHTML = e;
    },
    handleSorting: function (e) {
      var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
        i = (e || {}).target;
      (i && !i.closest(".search-result__sort-item") && !t) ||
        ((e = (i && i.dataset.sortBy) || (t && t.dataset.sortBy)),
        this.DOM.sorting.querySelectorAll("a").forEach(function (e) {
          e !== i && e !== t
            ? e.classList.remove("selected")
            : e.classList.add("selected");
        }),
        this.handleQueryParameters("startIndex", 1),
        this.handleQueryParameters("sortDesc", e),
        this.fetchResult());
    },
    handleTabClick: function (e) {
      var i = this,
        t = e.target,
        e = (e.preventDefault(), t.closest("li"));
      e &&
        !e.classList.contains("selected") &&
        (this.handleQueryParameters("startIndex", 1),
        (this.state.startIndex = 1),
        []
          .concat(_toConsumableArray(this.currentTabs.keys()))
          .forEach(function (e) {
            var t = AMG.tools.updateQueryString(null, e, null);
            (i.state.params = t.params),
              i.replaceUrlState(t.href),
              i.currentTabs.delete(e);
          }),
        (e = JSON.parse(t.closest("li").dataset.searchParamValue)),
        Object.entries(e).forEach(function (e) {
          var e = _slicedToArray(e, 2),
            t = e[0],
            e = e[1];
          i.currentTabs.set(t, e), i.handleQueryParameters(t, e);
        }),
        this.fetchResult());
    },
    updateGroupSummations: function (e) {
      var e = _slicedToArray(e, 1)[0],
        a = this.groupBy(e.Groups, function (e) {
          return e.Value;
        });
      []
        .concat(_toConsumableArray(this.DOM.groupSummationsTabs))
        .forEach(function (s) {
          s.innerHTML =
            s.innerHTML.substring(0, 1).toUpperCase() +
            s.innerHTML.substring(1).toLowerCase();
          var e = JSON.parse(s.dataset.searchParamValue);
          Object.entries(e).forEach(function (e) {
            var t,
              e = _slicedToArray(e, 2),
              i = e[0],
              e = e[1];
            "Domain" === i &&
              ((i = a.get(e)),
              (t = s.querySelector(".search-result__tab-count")),
              AMG.tools.getUrlParams("Domain") === e
                ? s.classList.add("active")
                : s.classList.remove("active"),
              void 0 === i
                ? (t.innerText = 0)
                : ((e = i[0].Count), (t.innerText = e)));
          });
        });
    },
    replaceUrlState: function (e) {
      h.history.replaceState("", "", e);
    },
    conductSearchResult: function (e) {
      var t = e.Decorations && e.Decorations.Pagination,
        i = e.Decorations && e.Decorations.Banners;
      (this.state.documents = e.Documents),
        this.updateResultCount(e.TotalResults),
        this.handlePaginationButtons(t),
        this.handleUpdatingList(e),
        e.PreFacetInfo &&
          this.updateGroupSummations(e.PreFacetInfo.GroupSummations),
        this.handleSearchBanner(i);
    },
    handleQueryParameters: function (e, t) {
      e = AMG.tools.updateQueryString(null, e, t);
      return (this.state.params = e.queries), this.replaceUrlState(e.href), e;
    },
    fetchResult: function () {
      var t = this;
      this.state.initialSearchHasBeenMade ||
        ((this.state.initialSearchHasBeenMade = !0), this.initialQueryParams()),
        this.handleQueryParameters("q", this.state.input),
        this.DOM.groupSummationsContainer.classList.remove("hidden"),
        fetch(this.getUrl(this.state.params, this.state.input))
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            t.conductSearchResult(e);
          });
    },
    initialQueryParams: function () {
      var i,
        s = this,
        e = AMG.tools.getUrlParams("startIndex"),
        e =
          (0 !== e &&
            0 !== e.length &&
            (this.state.startIndex = AMG.tools.getUrlParams("startIndex")),
          AMG.tools.getUrlParams("sortDesc"));
      0 !== e &&
        0 !== e.length &&
        ((e = document.querySelector(
          '.search-result__sort-item[data-sort-by="' + e + '"]'
        )),
        this.handleSorting(null, e)),
        0 === AMG.tools.getUrlParams("Domain") &&
          ((i = !1),
          []
            .concat(_toConsumableArray(this.DOM.groupSummationsTabs))
            .forEach(function (e) {
              e.classList.contains("hidden") ||
                i ||
                ((e = JSON.parse(e.dataset.searchParamValue)),
                Object.entries(e).forEach(function (e) {
                  var t;
                  i ||
                    ("Domain" === (t = (e = _slicedToArray(e, 2))[0]) &&
                      ((i = !0), s.handleQueryParameters(t, e[1])));
                }));
            }));
      try {
        var t = JSON.parse(this.DATASET.searchRegionLanguage),
          a = Object.keys(t),
          n = _slicedToArray(a, 1)[0],
          r = Object.values(t),
          o = _slicedToArray(r, 1)[0];
        this.handleQueryParameters(n, o);
      } catch (e) {
        h.console.warn("regionLang not set", e);
      }
      try {
        var l = JSON.parse(this.DATASET.searchRegion),
          d = Object.keys(l),
          c = _slicedToArray(d, 1)[0],
          u = Object.values(l),
          p = _slicedToArray(u, 1)[0];
        this.handleQueryParameters(c, p);
      } catch (e) {
        h.console.warn("regionLang not set", e);
      }
    },
    init: function () {
      var t = this,
        e =
          ((this.DATASET = this.DOM.container.dataset),
          (this.currentTabs = new Map()),
          AMG.tools.getUrlParams("q"));
      0 !== e &&
        0 !== e.length &&
        ((this.state.input = decodeURIComponent(e)),
        (this.DOM.input.value = this.state.input)),
        this.state.input &&
          (this.fetchResult(), (this.state.initialSearchHasBeenMade = !0)),
        this.DOM.input.addEventListener("input", function (e) {
          e = e.target;
          t.state.input = e.value.trim();
        }),
        this.DOM.form.addEventListener("submit", function (e) {
          e.preventDefault(),
            0 === t.state.input.length && (t.state.input = "*"),
            AMG.ui.checkForTrackNumber(t.state.input) &&
            AMG.data.overlayEndpoint
              ? AMG.ui.overlays.loadContent(
                  AMG.data.overlayEndpoint + "?id=" + t.state.input
                )
              : t.fetchResult();
        }),
        this.DOM.paginationContainer.addEventListener("click", function (e) {
          e.preventDefault();
          e = e.target.closest(".pagination__item");
          e &&
            (t.handleNewStartIndex(e.dataset.paginationOffset),
            TweenLite.to(h, 1, {
              scrollTo: { y: t.DOM.sortContainer, offsetY: 150 },
            }),
            t.fetchResult());
        }),
        this.DOM.groupSummationsContainer.addEventListener(
          "click",
          function (e) {
            t.handleTabClick(e);
          }
        ),
        this.DOM.sorting.addEventListener("click", function (e) {
          e.preventDefault(), t.handleSorting(e);
        });
    },
  };
})(window),
  (AMG.selfService = {
    tooltip: function (e) {
      var e = e.querySelectorAll("a"),
        t = void 0;
      e.forEach(function (e) {
        e.title &&
          Modernizr.touchevents &&
          (((e = e.nextElementSibling).dataset.classname = "active-click"),
          e) &&
          e.addEventListener("click", function (e) {
            t && t !== e.currentTarget && t.classList.remove("active-click"),
              e.currentTarget.classList.contains("active-click")
                ? e.currentTarget.classList.remove("active-click")
                : e.currentTarget.classList.add("active-click"),
              (t = e.currentTarget);
          });
      });
    },
  }),
  ((n) => {
    AMG.ui.servicebarTabs = {
      init: function (s) {
        var i,
          a = {
            serviceSection: s,
            tabButtons: s.querySelectorAll(".servicebar-tab"),
            tabContents: s.querySelectorAll(".servicebar-tab__content"),
          };
        a.tabContents.forEach(function (e) {
          var t = e.querySelectorAll(".icon-button"),
            e = e.querySelector(".icon-button__container"),
            t = t.length;
          0 !== t && e.classList.add("cta-" + t);
        }),
          a.serviceSection &&
            ((i = new Swiper(s.querySelector(".servicebar-tabs__parent"), {
              slidesPerView: "auto",
              spaceBetween: 0,
              freeMode: !0,
            })),
            n.addEventListener("scroll", function () {
              var e = s.getBoundingClientRect().top,
                t = n
                  .getComputedStyle(s)
                  .getPropertyValue("--header-height")
                  .slice(0, -2),
                i = n
                  .getComputedStyle(s)
                  .getPropertyValue("--overlap-with-above-component")
                  .slice(0, -2),
                t = Number(t) + Number(i);
              s.toggleAttribute("data-stuck", e <= t);
            }),
            a.tabButtons.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var t,
                  e = e.target.closest(".servicebar-tab");
                e &&
                  (t = e.dataset.tab) &&
                  (i.slideTo(t),
                  (t = s.querySelector("#tab-" + t)),
                  e.classList.contains("active")
                    ? (e.classList.remove("active"),
                      t.classList.remove("active"))
                    : (a.tabButtons.forEach(function (e) {
                        return e.classList.remove("active");
                      }),
                      a.tabContents.forEach(function (e) {
                        return e.classList.remove("active");
                      }),
                      e.classList.add("active"),
                      t.classList.add("active")));
              });
            }));
      },
    };
  })(window),
  ((s) => {
    AMG.ui.serviceTabs = {
      updateFormUrl: function (e) {
        var t =
          e.tntForm.getAttribute("action").split("?")[0] +
          "?query=" +
          e.tntInput.value.toUpperCase();
        e.tntForm.setAttribute("action", t);
      },
      updateSchenkerFormUrl: function (e) {
        var t =
          e.schenkerTntForm.getAttribute("action").split("?")[0] +
          "?refNumber=" +
          e.schenkerTntInput.value.toUpperCase();
        e.schenkerTntForm.setAttribute("action", t);
      },
      init: function (e) {
        var r,
          o = {
            serviceSection: e,
            tabs: e.querySelectorAll(".service-tabs__tab"),
            tntSelect: e.querySelector(".service-tabs__tnt-select"),
            tntSubmit: e.querySelector(".service-tabs__tnt-submit"),
            tntForm: e.querySelector(".service-tabs__tnt-form"),
            tntInput: e.querySelector(".service-tabs__tnt-input"),
            schenkerTntForm: e.querySelector(
              ".service-tabs__schenker-tnt-form"
            ),
            schenkerTntInput: e.querySelector(
              ".service-tabs__schenker-tnt-input"
            ),
          },
          i = this;
        AMG.tools.screenMode.currentMode, AMG.tools.screenSizes.desktop;
        o.tabs &&
          o.tabs.forEach(function (e) {
            e.addEventListener("click", function (s) {
              var a = this,
                n =
                  ((r =
                    AMG.tools.screenMode.currentMode <=
                    AMG.tools.screenSizes.desktop),
                  0);
              o.tabs.forEach(function (e) {
                var t = o.serviceSection.querySelector(
                    "." + e.dataset.linkedInfo
                  ),
                  i = t.querySelector("a");
                !r &&
                o.serviceSection.classList.contains("service-tabs--closed") &&
                e.classList.contains("service-tabs__tab--one") &&
                s.currentTarget.classList.contains("service-tabs__tab--one")
                  ? (e.classList.add("service-tabs__tab--selected"),
                    t.classList.add("open"),
                    n++)
                  : a !== e || (r && t.classList.contains("open"))
                  ? (e.classList.remove("service-tabs__tab--selected"),
                    i && TweenLite.to(i, 0, { opacity: 0 }),
                    TweenLite.to(t, 0.25, { opacity: 0 }),
                    TweenLite.to(t, 0.5, { height: "0" }),
                    i && TweenLite.to(i, 0.5, { opacity: 1 }).delay(0.5),
                    t.classList.remove("open"))
                  : (!r && t.classList.contains("open")) ||
                    (i && TweenLite.to(i, 0, { opacity: 1 }),
                    TweenLite.set(t, { height: "auto", opacity: 1 }),
                    TweenLite.from(t, 0.5, { height: 0, opacity: 0 }),
                    t.classList.add("open"),
                    e.classList.add("service-tabs__tab--selected"),
                    n++);
              }),
                0 < n
                  ? o.serviceSection.classList.remove("service-tabs--closed")
                  : r && o.serviceSection.classList.add("service-tabs--closed");
            });
          }),
          o.tntSubmit &&
            o.tntSubmit.addEventListener("click", function (e) {
              e.preventDefault();
              var e = o.tntSelect.selectedIndex,
                t = o.tntSelect.options[e].value,
                e = o.tntSelect.options[e].getAttribute("data-target");
              "" !== t && s.open(t, (e = "" === e ? "_self" : e));
            }),
          o.tntForm &&
            o.tntForm.addEventListener("submit", function (e) {
              e.preventDefault();
              var e = o.tntForm.getAttribute("target"),
                t =
                  ("" === e && (e = "_self"),
                  o.serviceSection.getAttribute("data-no-reference-error")),
                i = o.serviceSection.getAttribute("data-wrong-reference-error");
              return "" === o.tntInput.value.trim()
                ? s.alert(t)
                : /^[^,]{3,}([,][^,]{3,})*$/g.test(o.tntInput.value)
                ? void s.open(o.tntForm.getAttribute("action"), e)
                : s.alert(i);
            }),
          o.tntInput &&
            (o.tntInput.addEventListener("keypress", function () {
              i.updateFormUrl(o);
            }),
            o.tntInput.addEventListener("change", function (e) {
              var t = e.currentTarget.value
                .replace(/\s+/g, ",")
                .replace(/[,]{2,}/g, ",")
                .replace(/^[,]+|[,]+$/g, "");
              (e.currentTarget.value = t), i.updateFormUrl(o);
            })),
          o.schenkerTntForm &&
            o.schenkerTntForm.addEventListener("submit", function (e) {
              e.preventDefault();
              var e = o.schenkerTntForm.getAttribute("target"),
                t =
                  ("" === e && (e = "_self"),
                  o.serviceSection.getAttribute("data-no-reference-error")),
                i = o.serviceSection.getAttribute("data-wrong-reference-error");
              return "" === o.schenkerTntInput.value.trim()
                ? s.alert(t)
                : /^[^,]{3,}([,][^,]{3,})*$/g.test(o.schenkerTntInput.value)
                ? void s.open(o.schenkerTntForm.getAttribute("action"), e)
                : s.alert(i);
            }),
          o.schenkerTntInput &&
            (o.schenkerTntInput.addEventListener("keypress", function () {
              i.updateSchenkerFormUrl(o);
            }),
            o.schenkerTntInput.addEventListener("change", function (e) {
              var t = e.currentTarget.value
                .replace(/\s+/g, "")
                .replace(/,+/g, "");
              (e.currentTarget.value = t), i.updateSchenkerFormUrl(o);
            }));
      },
    };
  })(window),
  ((e) => {
    var t = AMG.tools.screenSizes.large;
    AMG.ui.siteSelector = {
      DOM: { module: document.querySelector(".site-selector") },
      removeAccordionEvents: function () {
        var e = document.querySelector(
            ".site-selector .page-content__container"
          ),
          t = e.cloneNode(!0);
        e.parentNode.replaceChild(t, e);
      },
      undoAccordion: function () {
        var t;
        this.DOM.module.classList.contains("accordion--initialized") &&
          ((t = this),
          e.removeEventListener(
            "resize",
            AMG.ui.accordionHandler.throttleCloseAllAccordions
          ),
          this.DOM.module.classList.remove("accordion--initialized"),
          this.DOM.module
            .querySelectorAll(".accordion__body")
            .forEach(function (e) {
              TweenLite.to(e, 0.3, {
                delay: 0.2,
                marginTop: 0,
                onComplete: t.removeAccordionEvents,
              });
            }));
      },
      resizeHandler: AMG.tools.throttle(function () {
        AMG.tools.screenMode.currentMode < t
          ? AMG.ui.accordionHandler.init(AMG.ui.siteSelector.DOM.module)
          : AMG.ui.siteSelector.undoAccordion();
      }, 100),
      init: function () {
        AMG.tools.screenMode.currentMode < t &&
          AMG.ui.accordionHandler.init(this.DOM.module),
          e.addEventListener("resize", this.resizeHandler);
      },
    };
  })(window),
  ((i) => {
    AMG.ui.spotContent = {
      init: function (e) {
        (this.DOM = {}),
          (this.DOM.spot = e),
          (this.DOM.link = e.querySelector("a.jsspotlink")),
          this.DOM.spot &&
            this.DOM.link &&
            this.DOM.spot.addEventListener("click", function (e) {
              var t = e.currentTarget.querySelector("a").getAttribute("href"),
                e = e.currentTarget.querySelector("a").getAttribute("target");
              e && "_blank" === e ? i.open(t) : (i.location.href = t);
            });
      },
    };
  })(window),
  ((t) => {
    AMG.ui.subnavigationBar = {
      mobile: function () {
        var e = document.querySelectorAll(".subnavigation-bar__list");
        [].concat(_toConsumableArray(e)).forEach(function (e) {
          var t = e.querySelector(".selected");
          t
            ? ((t = Math.round(t.offsetLeft - 28)), (e.scrollLeft = t))
            : (e.scrollLeft = 28);
        });
      },
      setup: function () {
        AMG.tools.screenMode.currentMode < AMG.tools.screenSizes.desktop &&
          this.mobile();
      },
      resizeHandler: function () {
        var e = this;
        t.addEventListener("resize", function () {
          e.debounce(300, e.setup());
        });
      },
      debounce: function (s, a) {
        var n = void 0;
        return function () {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          n && clearTimeout(n),
            (n = setTimeout(function () {
              a.apply(void 0, t), (n = null);
            }, s));
        };
      },
      init: function () {
        this.setup(), this.resizeHandler();
      },
    };
  })(window),
  ((n) => {
    AMG.ui.swiper = {
      init: function (e) {
        var t = e.dataset.timer,
          i = e.dataset.initialSlide - 1,
          s = e.dataset.type,
          i = {
            loop: !0,
            watchSlidesVisibility: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            centeredSlides: !0,
            initialSlide: i,
          },
          a = Object.assign(
            {
              slidesPerView: 1,
              spaceBetween: 0,
              breakpoints: {
                1024: { slidesPerView: 1.28, spaceBetween: 30 },
                1202: { slidesPerView: 1.5, spaceBetween: 30 },
              },
            },
            i
          ),
          i = Object.assign(
            {
              slidesPerView: 1.3,
              spaceBetween: 30,
              breakpoints: { 1024: { slidesPerView: 3.5, slidesPerGroup: 1 } },
            },
            i
          ),
          a = new Swiper(e.querySelector(".swiper"), "Single" === s ? a : i);
        this.setupNavigation(e, a, s),
          this.setupAutoplay(e, a, s, t),
          e.querySelectorAll(".carousel-item").forEach(function (t) {
            t.addEventListener("click", function (e) {
              e.target.closest("a") ||
                ((e = t.getAttribute("data-href")) &&
                  (n.location.pathname = e));
            });
          });
      },
      setupAutoplay: function (e, t, i, s) {
        var a = this;
        "0" !== s &&
          void 0 !== s &&
          setInterval(function () {
            a.moveSlides(e, t, i);
          }, Number(s));
      },
      setupNavigation: function (e, t, i) {
        var s = this;
        e
          .querySelector(".swiper-button-prev")
          .addEventListener("click", function () {
            s.moveSlides(e, t, i, !0);
          }),
          e
            .querySelector(".swiper-button-next")
            .addEventListener("click", function () {
              s.moveSlides(e, t, i);
            });
      },
      moveSlides: function (e, t, i, s) {
        i = n.innerWidth < 1024 || "Single" === i ? 1 : 3;
        s && (i *= -1), this.moveSlidesByOffset(e, t, i);
      },
      moveSlidesByOffset: function (e, t, i) {
        (e = e.querySelectorAll(
          ".swiper-slide:not(.swiper-slide-duplicate)"
        ).length),
          (i = (t.realIndex + i) % e);
        i < 0 && (i += e), t.slideToLoop(i);
      },
    };
  })(window),
  (AMG.ui.topAnnouncementBar = {
    close: function (e, t) {
      AMG.ui.cookies.setCookie(t, !0), e.parentNode.removeChild(e);
    },
    init: function (e) {
      var t,
        i = this,
        s = e.dataset.shortId;
      !Boolean(AMG.ui.cookies.getCookie(s)) &&
        (e.style.removeProperty("display"),
        (t = e.querySelector(".announcement-close"))) &&
        t.addEventListener("click", function () {
          return i.close(e, s);
        });
    },
  }),
  (AMG.ui.vocast = {
    DOM: {
      module: document.querySelector(".module.news-article--vocast"),
      isExperienceEditor: document.body.classList.contains("experience-editor"),
    },
    init: function (e) {
      function t(e) {
        ("&nbsp;" != e.innerHTML.trim() && "" != e.innerHTML.trim()) ||
          e.parentNode.removeChild(e),
          1 === e.children.length &&
            "BR" === e.children[0].tagName &&
            e.parentNode.removeChild(e);
        var e = e.querySelectorAll("b"),
          t = !0,
          i = !1,
          s = void 0;
        try {
          for (
            var a, n = e[Symbol.iterator]();
            !(t = (a = n.next()).done);
            t = !0
          ) {
            var r,
              o,
              l = a.value;
            l.parentNode &&
              "P" === l.parentNode.tagName &&
              ((r = l.innerText),
              ((o = document.createElement("h2")).innerText = r),
              l.replaceWith(o),
              o.nextElementSibling &&
                "BR" === o.nextElementSibling.tagName &&
                o.nextElementSibling.remove(),
              o.parentElement.parentElement.insertBefore(o, o.parentElement));
          }
        } catch (e) {
          (i = !0), (s = e);
        } finally {
          try {
            !t && n.return && n.return();
          } finally {
            if (i) throw s;
          }
        }
      }
      function i(e) {
        e.style.cssText = "";
      }
      if (this.DOM.module && !this.DOM.isExperienceEditor) {
        var s = this.DOM.module.querySelectorAll("h1"),
          a = this.DOM.module.querySelectorAll("h2"),
          s =
            (this.DOM.module
              .querySelector(".col_1")
              .querySelector(".styles_element_image")
              .remove(),
            s.forEach(function (e) {
              e.innerHTML = e.innerText;
            }),
            a.forEach(function (e) {
              e.innerHTML = e.innerText;
            }),
            this.DOM.module.querySelector(".rte")),
          a = this.DOM.module.getElementsByTagName("p"),
          n = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var l, d = s.children[Symbol.iterator]();
            !(n = (l = d.next()).done);
            n = !0
          ) {
            var c = l.value;
            i(c), t(c);
          }
        } catch (e) {
          (r = !0), (o = e);
        } finally {
          try {
            !n && d.return && d.return();
          } finally {
            if (r) throw o;
          }
        }
        var u = !0,
          s = !1,
          r = void 0;
        try {
          for (
            var p, h = a[Symbol.iterator]();
            !(u = (p = h.next()).done);
            u = !0
          ) {
            var f = p.value;
            i(f), t(f);
          }
        } catch (e) {
          (s = !0), (r = e);
        } finally {
          try {
            !u && h.return && h.return();
          } finally {
            if (s) throw r;
          }
        }
        var o = this.DOM.module.querySelectorAll("li"),
          m = !0,
          a = !1,
          s = void 0;
        try {
          for (
            var g, v = o[Symbol.iterator]();
            !(m = (g = v.next()).done);
            m = !0
          )
            (() => {
              var t = g.value.querySelectorAll("br");
              t.forEach(function (e) {
                t.nextElementSibling || e.remove();
              });
            })();
        } catch (e) {
          (a = !0), (s = e);
        } finally {
          try {
            !m && v.return && v.return();
          } finally {
            if (a) throw s;
          }
        }
        r = this.DOM.module.querySelectorAll(".styles_element_image");
        r[r.length - 1]
          .closest(".column")
          .classList.add("vocast__image__center");
      }
    },
  }),
  ((s) => {
    var t, i, a, e, n, r, o, l, d, c, u;
    if (
      ("loading" in HTMLImageElement.prototype
        ? document
            .querySelectorAll("img[loading='lazy']")
            .forEach(function (e) {
              var t = e.getAttribute("data-src"),
                i = e.getAttribute("data-srcset");
              t && e.setAttribute("src", t), i && e.setAttribute("srcset", i);
            })
        : new LazyLoad(),
      document.body.classList.contains("experience-editor") ||
        ((t = {}),
        (a = i = void 0),
        (e = AMG.tools.getUrlParams("utm_source")) && (t.utm_source = e),
        (n =
          "/" == s.location.pathname ||
          "/en/" == s.location.pathname ||
          "/en" == s.location.pathname),
        s.console.log("pathname: " + s.location.pathname),
        (r = AMG.ui.cookies.getCookie("countryCode")),
        (o = document.querySelector(".ip-lookup")) &&
          (console.log(o.dataset),
          (l = o.dataset.showRedirectModal),
          (o = o.dataset.overlayUrl),
          l) &&
          AMG.ui.overlays.loadContent(o),
        n && !r
          ? (s.console.log("Cookie not found. Fetching country from service."),
            fetch(
              AMG.data.iplookup.url +
                "?access_key=" +
                AMG.data.iplookup.accessKey +
                "&fields=country_code"
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                e.country_code &&
                  (s.console.log("Country code found: " + e.country_code),
                  (i = e.country_code),
                  (t.country_code = i),
                  s.console.log("overlayParams: " + t.country_code),
                  (i = AMG.tools.getUrlParams("country_code")) &&
                    ((t.country_code = i),
                    s.console.log(
                      "country_code hardcoded to: " + t.country_code
                    )),
                  AMG.ui.cookies.setCookie("countryCode", i, 180),
                  (a = Object.keys(t)
                    .map(function (e) {
                      return e + "=" + t[e];
                    })
                    .join("&")),
                  s.console.log("Final querystring for layer set to: " + a),
                  AMG.data.overlayEndpoint) &&
                  AMG.ui.overlays.loadContent(
                    AMG.data.overlayEndpoint + "?" + a
                  );
              })
              .catch(function (e) {
                s.console.error(e);
              }))
          : e
          ? ((a = Object.keys(t)
              .map(function (e) {
                return e + "=" + t[e];
              })
              .join("&")),
            s.console.log("UTM Only querystring: " + a),
            AMG.data.overlayEndpoint &&
              AMG.ui.overlays.loadContent(AMG.data.overlayEndpoint + "?" + a))
          : s.console.log(
              "CountryCode cookie already set to or trigger set to false. No UTM params added. Overlay not triggered."
            )),
      (TweenLite.defaultEase = Power3.easeOut),
      AMG.ui.scroll.init(),
      document
        .querySelectorAll(".self-service-box .self-service__link-list")
        .forEach(function (e) {
          e && AMG.selfService.tooltip(e);
        }),
      AMG.DOM.overlayTriggers.length)
    )
      for (var p = 0; p < AMG.DOM.overlayTriggers.length; p++)
        AMG.ui.overlays.setupOverlayTriggers(AMG.DOM.overlayTriggers[p]);
    AMG.tools.screenMode.currentMode === AMG.tools.screenSizes.desktop &&
      (l = document.querySelector("#search")) &&
      ((d = l.querySelector("input[type=search]")),
      l
        .querySelector("input[type=submit]")
        .addEventListener("click", function (e) {
          "" === d.value &&
            (e.preventDefault(), e.stopPropagation(), d.focus());
        }),
      d.addEventListener("blur", function (e) {
        "" === d.val() ? d.classList.remove("open") : d.classList.add("open");
      })),
      AMG.DOM.officesTable && AMG.ui.offices.init(),
      AMG.DOM.accordions &&
        AMG.DOM.accordions.forEach(function (e) {
          AMG.ui.accordionHandler.init(e);
        }),
      AMG.DOM.siteSelector && AMG.ui.siteSelector.init(),
      AMG.DOM.calculatorBox && AMG.ui.calculatorBox.init(AMG.DOM.calculatorBox),
      AMG.DOM.responsiveTables && AMG.ui.responsiveTables.init(),
      AMG.DOM.mainNavigation && AMG.ui.mainNavigation.init(),
      AMG.DOM.header && AMG.ui.header.init(),
      AMG.DOM.headerWidget && AMG.ui.headerWidget.init(AMG.DOM.headerWidget),
      AMG.DOM.jobPage && AMG.ui.jobPage.init(AMG.DOM.jobPage),
      AMG.DOM.vocast && AMG.ui.vocast.init(AMG.DOM.vocast),
      AMG.DOM.serviceTabs &&
        AMG.DOM.serviceTabs.forEach(function (e) {
          AMG.ui.serviceTabs.init(e);
        }),
      AMG.DOM.servicebarTabs &&
        AMG.DOM.servicebarTabs.forEach(function (e) {
          AMG.ui.servicebarTabs.init(e);
        }),
      AMG.DOM.subnavigationBar &&
        AMG.ui.subnavigationBar.init(AMG.DOM.subnavigationBar),
      AMG.DOM.searchResult &&
        !document.body.classList.contains("experience-editor") &&
        AMG.ui.searchResult.init(),
      AMG.DOM.officeMap && AMG.ui.maps.init(),
      AMG.DOM.officesList && AMG.ui.offices.init(AMG.DOM.officesList),
      AMG.DOM.newslist && AMG.ui.newslist.init(AMG.DOM.newslist),
      AMG.DOM.bannerNotification &&
        AMG.ui.bannerNotification.init(AMG.DOM.bannerNotification),
      AMG.DOM.spotContents &&
        AMG.DOM.spotContents.forEach(function (e) {
          AMG.ui.spotContent.init(e);
        }),
      AMG.DOM.swiper &&
        AMG.DOM.swiper.forEach(function (e) {
          AMG.ui.swiper.init(e);
        }),
      AMG.DOM.digitalSolutions &&
        AMG.DOM.digitalSolutions.forEach(function (e) {
          AMG.ui.digitalSolutions.init(e);
        }),
      AMG.DOM.topAnnouncementBar &&
        AMG.ui.topAnnouncementBar.init(AMG.DOM.topAnnouncementBar),
      document.getElementById("storybook-env") ||
        (c = new IntersectionObserver(
          function (e) {
            !0 === e[0].isIntersecting &&
              (AMG.ui.stockQuotes.get(),
              c.unobserve(document.querySelector("footer.footer")));
          },
          { threshold: [0] }
        )).observe(document.querySelector("footer.footer")),
      s.addEventListener("load", function () {
        var t,
          e,
          i =
            /Chrome/.test(navigator.userAgent) &&
            /Google Inc/.test(navigator.vendor);
        s.location.hash &&
          ((t = document.querySelector(".header").offsetHeight),
          i
            ? setTimeout(function () {
                var e = s.location.hash,
                  e =
                    ((s.location.hash = ""),
                    (s.location.hash = e),
                    Math.round(s.scrollY));
                s.scrollTo(0, e - t);
              }, 300)
            : ((i = s.location.hash.substring(1)),
              (i = document.getElementById(i)),
              (e = s.scrollY),
              (i = Math.round(i.getBoundingClientRect().top + e)),
              s.scrollTo(0, i - t))),
          AMG.DOM.formsDynamics &&
            AMG.ui.formsDynamics.init(AMG.DOM.formsDynamics);
      }),
      (u = "FoundrySterlingOT3W03"),
      ["ExtraBold", "Bold", "Book", "Demi", "Light", "Md"].forEach(function (
        e
      ) {
        var t = "font-loaded--" + e;
        document.fonts.load('1em "' + (u + "-" + e) + '"').then(function () {
          document.body.classList.add(t);
        });
      });
  })(window);
