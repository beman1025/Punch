(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [58205],
  {
    /***/ 795488: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var k0,
          l0,
          m0,
          n0,
          Vsc,
          Wsc,
          Xsc,
          Ysc,
          atc,
          $sc,
          ctc,
          ftc,
          etc,
          p0,
          Zsc,
          btc,
          dtc,
          o0;
        k0 = function (a, b) {
          if (a.type !== b)
            throw Error(`Expected override type ${b} but got ${a.type}`);
          return a.value;
        };
        l0 = function (a, b, c) {
          if (!c)
            throw Error(
              "No override key is available, but this is being set on an instance. This is likely an error with the locking logic."
            );
          a.rd.set(c, b);
        };
        m0 = function (a, b, c, d) {
          return {
            get: () => {
              var e = c ? a.rd?.get(c) : void 0;
              e = e && k0(e, "non-negative-double");
              return e != null || d ? e : b;
            },
            set: (e) =>
              e !== b && l0(a, { type: "non-negative-double", value: e }, c),
          };
        };
        n0 = function (a, b, c) {
          return {
            get: () => {
              var d = c ? a.rd?.get(c) : void 0;
              d = d && k0(d, "double");
              return d != null ? d : b;
            },
            set: (d) => d !== b && l0(a, { type: "double", value: d }, c),
          };
        };
        Vsc = function (a, b, c) {
          return {
            get: () => {
              var d = c ? a.rd?.get(c) : void 0;
              d = d && k0(d, "boolean");
              return d != null ? d : b;
            },
            set: (d) => d !== b && l0(a, { type: "boolean", value: d }, c),
          };
        };
        Wsc = function (a, b, c) {
          if (!c) return __c.ji.create(b);
          a = __c.y(
            a.rd.get(c),
            "Text overrides must always have an associated value"
          );
          return k0(a, "richtext2")?.text;
        };
        Xsc = function (a, b) {
          if (b) return (a = a.rd.get(b)) && k0(a, "image_or_video");
        };
        Ysc = function (a, b, c, d, e) {
          const f = Xsc(a, c);
          let g, h;
          f?.image.ref
            ? ((g = f.image.ref), (h = void 0))
            : f?.video.ref
            ? ((h = f.video.ref), (g = void 0))
            : ((g = b.image ? __c.Yq.create(b.image) : void 0),
              (h = b.video ? __c.uQ.create(b.video) : void 0));
          const k = (l) => {
            var m = (m = Xsc(a, c))
              ? { ...__c.BE, ...__c.wQ.snapshot(m) }
              : __c.BE;
            l0(a, { type: "image_or_video", value: { ...m, ...l } }, c);
          };
          b = g
            ? d(g, (l) => k({ image: { ...__c.Yq.snapshot(g), ...l } }))
            : void 0;
          e = h
            ? e(h, (l) => k({ video: { ...__c.uQ.snapshot(h), ...l } }))
            : void 0;
          return {
            image: { ref: b, set: (l) => k({ image: l }) },
            video: { ref: e, set: (l) => k({ video: l }) },
          };
        };
        atc = function (a, b) {
          return {
            gb: Zsc(a, b.gb, (c) => a.createPath(c)),
            zb: Zsc(a, b.zb, (c) =>
              a.e.classes.tya.create(
                {},
                {
                  P: { ...$sc(a, c) },
                  attributes: {
                    box: c.box,
                    Ll: c.Ll,
                    Pc: c.Pc,
                    Db: c.Db,
                    Ia: c.Ia,
                  },
                }
              )
            ),
          };
        };
        $sc = function (a, b) {
          return { text: btc(a, () => Wsc(a.rd, b.text, b.$a.text)) };
        };
        ctc = function (a, b) {
          return { text: btc(a, () => Wsc(a.rd, b.text, b.$a.text)) };
        };
        ftc = function (a, b) {
          return {
            cells: dtc(a, b.cells, (c) => {
              var d = { fill: etc(a, c.fill), stroke: c.stroke };
              const { stroke: e, ...f } = d;
              return a.e.classes.dya.create(
                {},
                {
                  P: { ...f, stroke: o0(e ? __c.yQ.create(e) : void 0) },
                  attributes: { V: c.V },
                }
              );
            }),
          };
        };
        etc = function (a, b) {
          var c = { ...Ysc(a.rd, b, b.$a.Jw, a.eyb, a.fyb), Ra: b.Ra };
          const { Ra: d, ...e } = c;
          return a.e.classes.oT.create(
            {},
            {
              P: { ...e, Ra: o0(d ? __c.knb.create(d) : void 0) },
              attributes: {
                Xg: b.Xg,
                color: b.color,
                wa: b.wa,
                locked: b.locked,
                Fg: b.Fg,
                ck: b.ck,
                Db: b.Db,
                flipX: b.flipX,
                flipY: b.flipY,
              },
            }
          );
        };
        p0 = function (a, b) {
          return a.e.XL(b);
        };
        Zsc = function (a, b, c) {
          return a.e.list(b.filter((d) => d != null).map((d) => c(d)));
        };
        btc = function (a, b) {
          return a.e.computed(b);
        };
        dtc = function (a, b, c) {
          return a.e.wd(
            Object.fromEntries([...b.entries()].map(([d, e]) => [d, c(e)]))
          );
        };
        o0 = function (a) {
          return { ref: a, set: () => {} };
        };
        __c.gtc = class {
          constructor(a) {
            this.rd = a;
          }
        };
        var htc = class {
          c3(a) {
            return {
              top: a.top,
              left: a.left,
              height: a.height,
              width: a.width,
              rotation: a.rotation,
              wa: a.wa,
            };
          }
          constructor(a) {
            this.rd = a;
          }
        };
        __c.itc = class extends htc {
          createPath(a) {
            var b = { fill: etc(this, a.fill), stroke: a.stroke };
            const { stroke: c, ...d } = b;
            return this.e.classes.TN.create(
              { d: a.d },
              {
                P: { ...d, stroke: o0(c ? __c.yQ.create(c) : void 0) },
                attributes: { V: a.V },
              }
            );
          }
          c3(a) {
            return { ...super.c3(a), re: this.v5a(), locked: !0 };
          }
          constructor(a, b, c) {
            super(b);
            this.e = a;
            this.rd = b;
            this.v5a = c;
            this.create = (d) => {
              switch (d.type) {
                case "rect":
                  var e = { fill: etc(this, d.fill), stroke: d.stroke };
                  const { stroke: h, ...k } = e;
                  e = this.e.classes.G_;
                  var f = e.create,
                    g = { ...k, stroke: o0(h ? __c.yQ.create(h) : void 0) };
                  d = {
                    ...this.c3(d),
                    top: p0(this, n0(this.rd, d.top, d.$a.top)),
                    left: p0(this, n0(this.rd, d.left, d.$a.left)),
                    V: d.V,
                  };
                  return f.call(e, {}, { P: g, attributes: d });
                case "shape":
                  return (
                    (e = this.e.classes.H_),
                    (f = e.create),
                    (g = {
                      ...atc(this, d),
                      resizeMode: d.resizeMode,
                      slice: d.slice,
                    }),
                    (d = {
                      ...this.c3(d),
                      top: p0(this, n0(this.rd, d.top, d.$a.top)),
                      left: p0(this, n0(this.rd, d.left, d.$a.left)),
                      width: p0(this, m0(this.rd, d.width, d.$a.width)),
                      height: p0(this, m0(this.rd, d.height, d.$a.height)),
                      si: d.si,
                      viewBox: d.viewBox,
                    }),
                    f.call(e, {}, { P: g, attributes: d })
                  );
                case "text":
                  e = { ...ctc(this, d), Ie: d.Ie };
                  const { Ie: l, ...m } = e;
                  e = this.e.classes.I_;
                  f = e.create;
                  g = { ...m, Ie: o0(l ? __c.oD.create(l) : void 0) };
                  d = {
                    ...this.c3(d),
                    top: p0(this, n0(this.rd, d.top, d.$a.top)),
                    left: p0(this, n0(this.rd, d.left, d.$a.left)),
                    uh: d.uh,
                    Ia: d.Ia,
                    width: p0(this, m0(this.rd, d.width, d.$a.width)),
                    height: p0(this, m0(this.rd, d.height, d.$a.height)),
                    I: p0(this, m0(this.rd, d.I, d.$a.I, !0)),
                    O: p0(this, m0(this.rd, d.O, d.$a.O, !0)),
                    kl: p0(this, Vsc(this.rd, d.kl, d.$a.kl)),
                  };
                  return f.call(e, {}, { P: g, attributes: d });
                case "grid":
                  return (
                    (e = this.e.classes.aja),
                    (f = e.create),
                    (g = { ...ftc(this, d) }),
                    (d = {
                      ...this.c3(d),
                      top: p0(this, n0(this.rd, d.top, d.$a.top)),
                      left: p0(this, n0(this.rd, d.left, d.$a.left)),
                      layout: d.layout,
                    }),
                    f.call(e, {}, { P: g, attributes: d })
                  );
                case "line":
                case "chart":
                  return __c.ZH.create({
                    ...d,
                    locked: !0,
                    Fg: !0,
                    re: this.v5a(),
                  });
                default:
                  throw Error(`Unexpected element type: ${d.type}`);
              }
            };
            this.eyb = (d, e) =>
              this.e.classes.gya.create(
                { media: d.media },
                {
                  P: { filter: d.filter },
                  attributes: {
                    po: this.e.XL({
                      get: () => d.po,
                      set: (f) => e({ po: f }),
                    }),
                    nb: this.e.XL({
                      get: () => d.nb,
                      set: (f) => e({ nb: f }),
                    }),
                    Ja: this.e.XL({
                      get: () => d.Ja,
                      set: (f) => e({ Ja: f }),
                    }),
                    wa: d.wa,
                    jc: d.jc,
                  },
                }
              );
            this.fyb = (d, e) =>
              this.e.classes.Fya.create(
                { video: d.video },
                {
                  P: { oy: d.oy, filter: d.filter, dc: d.dc, Uh: d.Uh },
                  attributes: {
                    nb: this.e.XL({
                      get: () => d.nb,
                      set: (f) => e({ nb: f }),
                    }),
                    wa: this.e.XL({
                      get: () => d.wa,
                      set: (f) => e({ wa: f }),
                    }),
                    Ja: this.e.XL({
                      get: () => d.Ja,
                      set: (f) => e({ Ja: f }),
                    }),
                    autoplay: this.e.XL({
                      get: () => d.autoplay,
                      set: (f) => e({ autoplay: f }),
                    }),
                    playbackRate: this.e.XL({
                      get: () => d.playbackRate,
                      set: (f) => e({ playbackRate: f }),
                    }),
                    trim: d.trim,
                    Dz: d.Dz,
                    jc: d.jc,
                  },
                }
              );
          }
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/3937f0bb78f81fb3.js.map
