(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 617729: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var cD = __c.cD;
        var tc = __c.tc;
        var Pk = __c.Pk;
        var lo = __c.lo;
        var L = __c.L;
        var aD = __c.aD;
        var fx = __c.fx;
        var z = __c.z;
        var K = __c.K;
        var Mn = __c.Mn;
        var y = __c.y;
        var UKc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of e) {
                d = l.na;
                var g = m.column,
                  h = a.layout.cells.get(d, g);
                if (
                  h &&
                  (l.boundary === "start" ? h.span.Fc !== d : h.span.Hd !== d)
                )
                  continue;
                d = c.get(`${g.id}:${d.id}`);
                d = l.boundary === "start" ? d?.qa : d?.Ea;
                if (!d) continue;
                h = f[f.length - 1];
                g = (g = b.next(g))
                  ? { column: g, boundary: "start" }
                  : { column: y(b.last()), boundary: "end" };
                var k;
                if ((k = h))
                  (k = h.CFa),
                    (k = k.column === m.column && k.boundary === m.boundary);
                k &&
                  ((k = h.sgb),
                  (k = k.na === l.na && k.boundary === l.boundary));
                k &&
                h.color === d.color &&
                h.weight === d.weight &&
                h.Td === d.Td &&
                h.Td === 0
                  ? (h.CFa = g)
                  : f.push({
                      sgb: l,
                      wWb: m,
                      CFa: g,
                      color: d.color,
                      weight: d.weight,
                      Td: d.Td,
                    });
              }
            return f;
          },
          VKc = function (a, b, c, d, e, f) {
            const g = [];
            for (const m of e)
              for (const n of d) {
                var h = n.na,
                  k = m.column;
                if (
                  (e = a.layout.cells.get(h, k)) &&
                  (m.boundary === "start" ? e.span.Uc !== k : e.span.ue !== k)
                )
                  continue;
                e = c.get(`${k.id}:${h.id}`);
                e = m.boundary === "start" ? e?.ya : e?.Ua;
                if (!e) continue;
                if (m.boundary === "start" && f(h, k) === 1) continue;
                k = g[g.length - 1];
                h = (h = b.next(h))
                  ? { na: h, boundary: "start" }
                  : { na: y(b.last()), boundary: "end" };
                var l;
                if ((l = k))
                  (l = k.XZa),
                    (l = l.column === m.column && l.boundary === m.boundary);
                l &&
                  ((l = k.IFa),
                  (l = l.na === n.na && l.boundary === n.boundary));
                l &&
                k.color === e.color &&
                k.weight === e.weight &&
                k.Td === e.Td &&
                k.Td === 0
                  ? (k.IFa = h)
                  : g.push({
                      XZa: m,
                      NWb: n,
                      IFa: h,
                      color: e.color,
                      weight: e.weight,
                      Td: e.Td,
                    });
              }
            return g;
          },
          WKc = function (a, b, c, d, e, f) {
            const g = a.fjb.Gxb(d, b.last(), c.last());
            a = (r, t) => {
              const u = g.get(r) || 0,
                w = g.get(t) || 0;
              return u <= w ? r : t;
            };
            const h = new Map();
            if (e.length === 0 || f.length === 0) return h;
            var k = [],
              l = c.previous(f[0].column);
            l && k.push({ column: l, boundary: "start" });
            k.push(...f);
            (f = c.next(f[f.length - 1].column)) &&
              k.push({ column: f, boundary: "start" });
            f = [];
            (l = b.previous(e[0].na)) && f.push({ na: l, boundary: "start" });
            f.push(...e);
            (e = b.next(e[e.length - 1].na)) &&
              f.push({ na: e, boundary: "start" });
            for (const r of k) {
              k = (e = r.boundary === "start" ? r.column : void 0)
                ? c.previous(e)
                : c.last();
              for (const t of f) {
                var m = t.boundary === "start" ? t.na : void 0;
                l = m ? b.previous(m) : b.last();
                var n = e && m && d.get(`${e.id}:${m.id}`),
                  p = e && l && d.get(`${e.id}:${l.id}`);
                m = k && m && d.get(`${k.id}:${m.id}`);
                var q = k && l && d.get(`${k.id}:${l.id}`);
                l = r.boundary === "end" ? m?.Ua : n?.ya;
                n = t.boundary === "end" ? p?.Ea : n?.qa;
                p = r.boundary === "end" ? q?.Ua : p?.ya;
                m = t.boundary === "end" ? q?.Ea : m?.qa;
                q = __c.mna({ qa: p, Ea: l, ya: m, Ua: n }, a);
                let u;
                switch (q) {
                  case "blockStart":
                    u = p;
                    break;
                  case "blockEnd":
                    u = l;
                    break;
                  case "inlineStart":
                    u = m;
                    break;
                  case "inlineEnd":
                    u = n;
                    break;
                  default:
                    u = void 0;
                }
                const { height: w, width: A } =
                  u?.Td === 1
                    ? { height: u.weight, width: u.weight }
                    : {
                        height: Math.max(m?.weight || 0, n?.weight || 0),
                        width: Math.max(p?.weight || 0, l?.weight || 0),
                      };
                h.set(K3(r, t), __c.Bn(q, w / 2, A / 2));
              }
            }
            return h;
          },
          XKc = function (a, b, c, d, e, f, g, h) {
            if (f.length === 0 || g.length === 0) return [];
            const k = UKc(b, d, e, f, g);
            h = VKc(b, c, e, f, g, h);
            const l = WKc(a, c, d, e, f, g),
              m = a.nFb(c),
              n = a.wEb(b, d),
              p = b.direction === "rtl";
            a = k
              .map((q) => {
                var r = q.wWb,
                  t = q.CFa,
                  u = q.sgb;
                const w = q.color,
                  A = q.weight;
                q = q.Td;
                const B = p ? -1 : 1,
                  C = l.get(K3(r, u))?.Ua,
                  D = l.get(K3(t, u))?.ya;
                if (C != null && D != null) {
                  var H = y(m.get(u.na)),
                    J = y(n.get(r.column));
                  r = y(n.get(t.column));
                  u = u.boundary === "start" ? H.start : H.end;
                  H = J.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: w,
                    weight: A,
                    Td: q,
                    p1: new Mn(H + C * B, u),
                    p2: new Mn(t + D * B, u),
                    ...__c.Gn((t - H) * B, q * A, C),
                  };
                }
              })
              .filter(__c.wb);
            return [
              ...h
                .map((q) => {
                  var r = q.XZa,
                    t = q.NWb,
                    u = q.IFa;
                  const w = q.color,
                    A = q.weight;
                  q = q.Td;
                  const B = l.get(K3(r, t))?.Ea,
                    C = l.get(K3(r, u))?.qa;
                  if (B != null && C != null) {
                    var D = y(n.get(r.column)),
                      H = y(m.get(t.na));
                    t = y(m.get(u.na));
                    r = r.boundary === "start" ? D.start : D.end;
                    D = H.start;
                    u = u.boundary === "start" ? t.start : t.end;
                    return {
                      color: w,
                      weight: A,
                      Td: q,
                      p1: new Mn(r, D + B),
                      p2: new Mn(r, u + C),
                      ...__c.Gn(u - D, q * A, B),
                    };
                  }
                })
                .filter(__c.wb),
              ...a,
            ];
          },
          YKc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.An(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.An(d, (e) => `${e.wn}_${e.xn}`);
              for (const [, e] of a) {
                const { xn: f, wn: g } = e[0];
                a = __c.An(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, wn: g, xn: f });
              }
            }
            return b;
          },
          ZKc = function (a, b, c, d, e) {
            return a.jTb(b, c, d, e);
          },
          $Kc = function (a, b, c, d, e, f, g, h) {
            var k = __c.SXb;
            const l = f.get().flatMap((p) =>
                d.last() === p
                  ? [
                      { na: p, boundary: "start" },
                      { na: p, boundary: "end" },
                    ]
                  : [{ na: p, boundary: "start" }]
              ),
              m = g.get().flatMap((p) =>
                e.last() === p
                  ? [
                      { column: p, boundary: "start" },
                      { column: p, boundary: "end" },
                    ]
                  : [{ column: p, boundary: "start" }]
              ),
              n = new Map();
            for (const p of f.get())
              for (const q of g.get())
                (f = ZKc(k.fjb, a, b, c, { column: q, na: p })) &&
                  n.set(`${q.id}:${p.id}`, f);
            a = XKc(k, a, d, e, n, l, m, h);
            return YKc(a);
          },
          L3 = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          aLc = function (a) {
            switch (a) {
              case 2:
                return K("ibdecg");
              case 7:
                return K("446quA");
              case 5:
                return K("j1fbqg");
              case 1:
                return K("O5i4AQ");
              case 6:
                return K("C0VHsg");
              case 4:
                return K("9ND0kg");
              case -1:
                return K("RWqnLA");
              case 9:
                return K("nQR/7w");
              case -2:
                return K("P23rtA");
              case 3:
                return K("+IXmVg");
              default:
                throw new z(a);
            }
          },
          bLc = function () {
            const [a] = (0, __c.nb)(() => fx());
            return a;
          },
          M3 = function (a) {
            return (b) => ({ type: "react", node: (0, __c.I)(a, { ...b }) });
          },
          dLc = async function (a, b) {
            const c = cLc()();
            try {
              const h = a.Mnb.get(b);
              if (h != null)
                return Promise.resolve({
                  url: h.blb,
                  width: h.clb || h.width,
                  height: h.alb || h.height,
                });
              const k = c.r(await c.s(__c.Cz(b, a.Qr)));
              var d = c.r,
                e = c.s,
                f = a.Nf;
              const l = __c.GQa(new URL(k).pathname);
              var g = l
                ? f
                  ? f.GEb(new __c.IQa(l))
                  : Promise.reject(Error("DocumentService not provided"))
                : Promise.reject(Error("Invalid document path"));
              const m = d
                .call(c, await e.call(c, g))
                .document.Mg.L6a.l7.images.at(0);
              return m && m.page !== 0
                ? { url: m.url, width: m.width, height: m.height }
                : Promise.reject(Error("No thumbnail found"));
            } finally {
              c.s();
            }
          },
          eLc = function (a) {
            var b = a.CF;
            const c = a.content,
              d = a.context,
              e = a.$w;
            __c.x(c?.Jg?.type === "formula");
            const f = c.Ik;
            a = { type: "dom", render: (g) => (g.innerText = "") };
            switch (f.type) {
              case 9:
                b = a;
                break;
              case 6:
                b = b.Jya?.({
                  content: __c.lS.dk({ ...__c.zKb, value: f.value }),
                  context: d,
                });
                break;
              case 8:
                if (c.Mm && c.Mm.type === "embed")
                  switch (c.Mm.Ys) {
                    case "PILL":
                      b = b.Mya?.({ context: d, $w: e });
                      break;
                    case "THUMBNAIL":
                      b = b.Sya?.({
                        content: __c.nS.dk({ ...__c.AKb, value: f.value }),
                        context: d,
                      });
                      break;
                    default:
                      throw new z(c.Mm.Ys);
                  }
                else
                  b = b.qja?.({
                    context: d,
                    value: c.YC,
                    valueType: c.Ik.type,
                  });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
                b = b.qja?.({ context: d, value: c.YC, valueType: c.Ik.type });
                break;
              case 0:
                b = {
                  type: "react",
                  node: N3(__c.$t, {
                    label: aLc(f.error),
                    children: N3(__c.Aic, { tone: "critical" }),
                  }),
                };
                break;
              default:
                throw new z(f);
            }
            return b ?? a;
          },
          lLc = function (a) {
            const b = a.Nf,
              c = a.embeds,
              d = a.CF,
              e = a.qb,
              f = a.tg,
              g = a.PXb,
              h = a.Qr,
              k = a.rb;
            d.qja = (l) => __c.hSa({ ...l, rb: k });
            d.oWa = (l) => eLc({ ...l, CF: d });
            d.nWa = (l) => fLc({ ...l });
            d.Jya = M3(gLc({ tg: f, A_: void 0, qb: e }));
            a = new hLc(b, h, c);
            d.Sya = M3(iLc({ Bha: a, qb: e }));
            d.pWa = jLc(g, k);
            d.qWa = M3((l) => N3(kLc, { ...l, rb: k }));
          },
          oLc = function ({
            label: a,
            pb: b,
            Oc: c,
            K3: d,
            lb: e,
            width: f,
            height: g,
            scale: h,
            c_a: k,
          }) {
            return N3("div", {
              style: { width: f, height: g, transform: `scale(${h})` },
              className: "bx74uQ",
              children: N3(mLc, {
                lb: e,
                children: O3(__c.Vt, {
                  className: P3("ivlMMQ", nLc(k), { gMAkdw: d === "pointer" }),
                  size: "small",
                  alignment: "center",
                  children: [b && N3(b, { size: c ?? "small" }), a],
                }),
              }),
            });
          },
          mLc = function ({ children: a, lb: b }) {
            return b
              ? N3(__c.GVb, {
                  state: new __c.EVb({ open: !0 }),
                  label: b,
                  children: a,
                })
              : a;
          },
          nLc = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          pLc = function (a) {
            return {
              o_1rMw: a === "primary-top",
              pNOpkg: a === "primary-inline-start",
            };
          },
          rLc = function ({
            $g: a,
            m6a: b,
            scale: c,
            et: d,
            onMouseDown: e,
            onTouchStart: f,
            ft: g,
            Tob: h,
            E0a: k,
          }) {
            const l = Q3(() => {
                const q = d?.get();
                if (q != null && q.length !== 0) return new __c.wy(q);
              }, [d]),
              m = g(1),
              n = g(c),
              p = { ssE9Tg: !a, OkifGQ: a };
            return N3(__c.Wt, {
              wr: "light",
              light: "light",
              yu: "light",
              dark: "light",
              children: (q) =>
                N3("div", {
                  className: P3("ze9QCQ", p, q.className),
                  style: { width: n, height: n },
                  children: N3("div", {
                    style: { width: m, height: m, transform: `scale(${c})` },
                    className: P3("N7J3UA", p),
                    onMouseDown: e,
                    onTouchStart: f,
                    ref: l?.Vk,
                    children: N3(__c.fu, {
                      className: P3("m8CFdg", p, {
                        G6wL4w: h,
                        W_E0wA: b,
                        _52RFdg: k === "move",
                      }),
                      ariaLabel: K("ruWN9A"),
                      children: N3(qLc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          tLc = function ({ qb: a }) {
            const b = new sLc(),
              c = new __c.UV(),
              d = R3((g) => {
                const {
                    scale: h = 1,
                    f6a: k,
                    size: l = "small",
                    Tob: m = !0,
                  } = g,
                  n = S3((p) => b.ft({ scale: p, size: l, mLa: k }), [l, k]);
                return N3(rLc, {
                  ...g,
                  scale: k ? Math.max(h, k) : h,
                  $g: g.sheet.direction === "rtl",
                  m6a: g.selection != null && b.mJb(g.sheet, a, g.selection),
                  ft: n,
                  Tob: m,
                  E0a: g.E0a,
                  onMouseDown: g.onMouseDown,
                  onTouchStart: g.onTouchStart,
                });
              }),
              e = R3((g) => {
                const {
                    scale: h = 1,
                    f6a: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    YTb: p,
                    UTb: q,
                  } = g,
                  r = S3((C) => b.ft({ scale: C, size: l, mLa: k }), [l, k]),
                  t = k ? Math.max(h, k) : h,
                  u = S3((C) => n != null && b.APa(n).has(C), [n]),
                  w = S3((C) => n != null && b.tGb(m, a, n).has(C), [m, n]),
                  A = S3(
                    (C) => {
                      var D = a.layout.lk.oi(m);
                      D = p != null && D.Ne(C, p.Uc) >= 0 && D.Ne(C, p.ue) <= 0;
                      return u(C)
                        ? D
                          ? "secondary-active"
                          : "primary-active"
                        : w(C)
                        ? D
                          ? "secondary-low"
                          : "primary-low"
                        : D
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, w, u]
                  ),
                  B = S3(
                    (C) => {
                      if (!q || u(C)) return "none";
                      const D = a.layout.lk.oi(m);
                      return q.some(
                        (H) => D.Ne(C, H.Uc) >= 0 && D.Ne(C, H.ue) <= 0
                      )
                        ? "primary-top"
                        : "none";
                    },
                    [m, q, u]
                  );
                return N3(T3, {
                  ...g,
                  Qd: h,
                  qe: t,
                  ft: r,
                  dL: A,
                  bL: B,
                  VL: c,
                  qb: a,
                });
              }),
              f = R3((g) => {
                const {
                    scale: h = 1,
                    f6a: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    YTb: p,
                    UTb: q,
                  } = g,
                  r = S3((C) => b.ft({ scale: C, size: l, mLa: k }), [l, k]),
                  t = k ? Math.max(h, k) : h,
                  u = S3((C) => n != null && b.DPa(n).has(C), [n]),
                  w = S3((C) => n != null && b.uGb(m, a, n).has(C), [m, n]),
                  A = S3(
                    (C) => {
                      var D = a.layout.lk.Bi(m);
                      D = p != null && D.Ne(C, p.Fc) >= 0 && D.Ne(C, p.Hd) <= 0;
                      return u(C)
                        ? D
                          ? "secondary-active"
                          : "primary-active"
                        : w(C)
                        ? D
                          ? "secondary-low"
                          : "primary-low"
                        : D
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, w, u]
                  ),
                  B = S3(
                    (C) => {
                      if (!q || u(C)) return "none";
                      const D = a.layout.lk.Bi(m);
                      return q.some(
                        (H) => D.Ne(C, H.Fc) >= 0 && D.Ne(C, H.Hd) <= 0
                      )
                        ? "primary-inline-start"
                        : "none";
                    },
                    [m, q, u]
                  );
                return N3(U3, {
                  ...g,
                  Qd: t,
                  qe: h,
                  ft: r,
                  dL: A,
                  bL: B,
                  VL: c,
                  qb: a,
                });
              });
            return { xpb: d, wpb: e, ypb: f };
          },
          uLc = function (a) {
            const b = a.ju,
              c = () => null;
            return __c.lx((d) => N3(V3, { ...d, ju: b, Yj: c }));
          },
          vLc = function ({ sheet: a, qb: b, Ci: c, ha: d, range: e, Zd: f }) {
            W3(
              () =>
                X3(() => {
                  if (f.current != null) {
                    var g = d?.get() ?? 1,
                      h = c.get(),
                      k = e
                        ? aD(
                            b.mb,
                            a,
                            { na: e.Fc, column: e.Uc },
                            { na: e.Hd, column: e.ue }
                          )?.sb()
                        : void 0,
                      l = a.direction === "rtl";
                    f.current.style.transform = `translate(${
                      k ? k.left * g * (l ? 1 : -1) : 0
                    }px, ${k ? -k.top * g : 0}px)`;
                    f.current.style.width = `${h.width * g}px`;
                    f.current.style.height = `${h.height * g}px`;
                  }
                }),
              [a, c, b.layout.Rh, b.mb, e, f, d]
            );
          },
          yLc = function ({ onScroll: a }) {
            const b = new wLc(a);
            return {
              II: b,
              rya: R3((c) =>
                N3(xLc, { sheet: c.sheet, II: b, children: c.children })
              ),
            };
          },
          zLc = function (a, b, c) {
            if ((a = a.JI.get(b)))
              c === "horizontal"
                ? (a.style.overflowX = "scroll")
                : (a.style.overflowY = "scroll");
          },
          ALc = function (a, b, c) {
            if ((a = a.JI.get(b)))
              c === "horizontal"
                ? (a.style.overflowX = "hidden")
                : (a.style.overflowY = "hidden");
          },
          DLc = function (a) {
            const b = a.ju,
              c = a.lf,
              d = a.hjb,
              e = a.qb,
              f = ({ children: m }) => m,
              g = ({ children: m }) =>
                N3("div", { className: "Vc5nkQ", children: m }),
              { II: h, rya: k } = yLc({ onScroll: a.onScroll });
            class l extends BLc {
              get tT() {
                const m = this.props.la.zw,
                  n = this.props.Wb;
                switch (m) {
                  case "screen":
                    return k;
                  case "print":
                    return n.kj != null ? g : f;
                  default:
                    throw new z(m);
                }
              }
              componentDidMount() {
                d.Mib(this.props.item, {
                  Wb: this.props.Wb,
                  la: this.props.la,
                });
              }
              componentWillUnmount() {
                d.dwb(this.props.item, {
                  Wb: this.props.Wb,
                  la: this.props.la,
                });
              }
              render() {
                d.Mib(this.props.item, {
                  Wb: this.props.Wb,
                  la: this.props.la,
                });
                return N3(CLc, {
                  ...this.props,
                  ha: this.ha,
                  ju: b,
                  tT: this.tT,
                  Yj: this.Yj,
                  hjb: d,
                  qb: e,
                  II: h,
                });
              }
              constructor(...m) {
                super(...m);
                this.ha = Y3(() => {
                  const n = this.props.item;
                  var p = this.props.la,
                    q = p.zw;
                  p = p.Tk;
                  const r = this.props.Wb;
                  switch (q) {
                    case "screen":
                      return p;
                    case "print":
                      if (r.kj != null) return 1;
                      q = d.tFb(n);
                      if (!q) return 1;
                      ({ width: q } = new __c.pv(n, q.Wb, { Tk: p }));
                      return q / n.config.width;
                    default:
                      throw new z(q);
                  }
                });
                this.Yj = R3((n) =>
                  N3("div", {
                    className: "IlUdwg",
                    children: N3(__c.pSa, { ...this.props, ...n, lf: c }),
                  })
                );
              }
            }
            return { Crb: l, II: h };
          },
          FLc = function (a) {
            const b = a.ju,
              c = a.qb,
              d = () => null;
            return (e) => N3(ELc, { ...e, ju: b, Yj: d, qb: c });
          },
          ILc = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { rZa: b, aK: b, ab: {}, pD: {} },
              d = Z3(
                () => a.rC.style || c,
                (h) => {
                  Object.assign(a.Zka.style, h.rZa);
                  Object.assign(a.tU.style, h.aK);
                  Object.assign(a.FO.style, h.ab);
                  Object.assign(a.fK.style, h.pD);
                  h = h?.ab?.textDecoration;
                  a.FO.classList.toggle("OQx3PQ", h === "underline");
                  a.FO.classList.toggle("_99ezUA", h === "line-through");
                  a.FO.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: GLc }
              ),
              e = Z3(
                () => a.NJa,
                (h) => {
                  a.FO.classList.toggle("_84KvRA", !h);
                  a.Zka.classList.toggle("_84KvRA", !h);
                  a.tU.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = Z3(
                () => a.renderer,
                (h) => {
                  a.Lla && h?.type !== "react"
                    ? ((a.Lla = void 0), a.vfa.remove())
                    : (a.fK.innerHTML = "");
                  switch (h?.type) {
                    case "react":
                      a.Lla = HLc(h.node, a.vfa);
                      a.fK.appendChild(a.vfa);
                      break;
                    case "dom":
                      h.render(a.fK);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new z(h);
                  }
                  a.fMa();
                },
                { fireImmediately: !0 }
              ),
              g = Z3(
                () => a.gdb,
                (h) => {
                  a.FEa?.();
                  a.FEa = void 0;
                  h != null && (a.FEa = a.jx.uSb(a.na, a.col, h));
                },
                { fireImmediately: !0 }
              );
            return () => {
              d();
              e();
              f();
              g();
              a.FEa?.();
            };
          },
          GLc = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          JLc = function (a) {
            a.TBa.reportObserved();
            const b = [];
            a.bfa.forEach(([c, d], e) => {
              e = e.get();
              e != null && b.push({ na: c, col: d, I: e });
            });
            return b;
          },
          LLc = function (a) {
            const b = a.Bx,
              c = a.qb,
              d = a.an,
              e = a.uJ,
              f = a.Vnb,
              g = a.Zba,
              h = a.r3,
              k = new KLc(d, c);
            return (l) =>
              N3($3, {
                ...l,
                uJ: e,
                qb: c,
                an: d,
                Bx: b,
                fJa: k,
                Vnb: f,
                Zba: g,
                r3: h,
              });
          },
          K3 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
          gLc =
            ({ tg: a, A_: b, qb: c }) =>
            (d) =>
              (0, __c.I)(__c.PZb, { ...d, tg: a, A_: b, qb: c }),
          MLc = (a) =>
            (0, __c.I)(__c.sX, { orientation: "bidirectional", ...a }),
          NLc = __webpack_require__(296713),
          OLc = NLc.Fragment,
          N3 = NLc.jsx,
          O3 = NLc.jsxs;
        var PLc = __webpack_require__,
          QLc = PLc(208463),
          P3 = PLc.n_x(QLc)();
        var R3 = __webpack_require__(270531).PA;
        var a4 = __webpack_require__(978109),
          b4 = a4.Component,
          BLc = a4.PureComponent,
          S3 = a4.useCallback,
          W3 = a4.useEffect,
          RLc = a4.useLayoutEffect,
          Q3 = a4.useMemo,
          c4 = a4.useRef,
          SLc = a4.useState;
        var d4 = __webpack_require__(186901),
          TLc = d4.Es,
          Y3 = d4.EW,
          X3 = d4.fm,
          ULc = d4.m3,
          Z3 = d4.mJ,
          VLc = d4.MN,
          WLc = d4.O8,
          e4 = d4.sH,
          f4 = d4.XI;
        var g4 = __webpack_require__(245307).Fm;
        var cLc = __webpack_require__(75402)._;
        var XLc = __webpack_require__(536618),
          YLc = XLc.Aj,
          h4 = XLc.iB,
          i4 = XLc.uP;
        var j4 = __webpack_require__(549056)._;
        var k4 = __webpack_require__(621369)._;
        var HLc = __webpack_require__(944552).createPortal;
        var ZLc = class {
            static G(a) {
              L(a, { viewBox: e4.ref });
            }
            constructor() {
              this.viewBox =
                (ZLc.G(this), __c.qo({ top: 0, left: 0, height: 0, width: 0 }));
              this.gVb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          $Lc = R3((a) => {
            var b = a.sheet.direction === "rtl";
            b = { H2wykw: !b, UweldA: b };
            const c = c4(new ZLc()),
              d = f4(() => {
                if (a.kxa) {
                  var g = a.kxa.current;
                  g &&
                    c.current.gVb(
                      __c.qo({
                        top: g.scrollTop,
                        left: g.scrollLeft,
                        height: g.clientHeight,
                        width: g.clientWidth,
                      })
                    );
                }
              });
            W3(() => {
              d();
              a.kxa.current?.addEventListener("scroll", d);
              window?.addEventListener("resize", d);
              return () => {
                a.kxa.current?.removeEventListener("scroll", d);
                window?.removeEventListener("resize", d);
              };
            }, [a.kxa, d]);
            const e = Q3(() => ({ get: () => c.current.viewBox }), []),
              f = Q3(
                () => Y3(() => lo(0, 0, a.sheet.width, a.sheet.height)),
                [a.sheet]
              );
            return O3("div", {
              className: P3("nMvVqA", b),
              children: [
                O3("div", {
                  ref: a.Zd,
                  className: "_0YOFPg",
                  children: [
                    N3(a.ju, { ...a, viewport: e, Ci: f }),
                    N3("div", {
                      className: P3("Gdl7fQ", b),
                      children: a.FVa?.get()?.map((g, h) => N3(g, {}, h)),
                    }),
                  ],
                }),
                a.zcc === "visible" &&
                  O3(OLc, {
                    children: [
                      N3("div", {
                        className: P3("_32sKQw", b),
                        children: N3(a.zrb, { ...a }),
                      }),
                      N3("div", {
                        className: P3("xdIsTQ", b),
                        children: N3(a.Drb, { ...a }),
                      }),
                      N3("div", {
                        className: P3("rsTRSA", b),
                        children: N3(a.Brb, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          aMc = R3((a) => {
            a = a.content;
            __c.v(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.stream.da;
              case "text3":
                return __c.qz.snapshot(a.value).cells.da();
              default:
                throw new z(a);
            }
          });
        var bMc = class {
            static G(a) {
              L(a, { set: f4.bound });
            }
            get(a) {
              return this.store.get(a);
            }
            set(a, b) {
              this.store.set(a, b);
            }
            fetch(a) {
              var b = this.store.get(a);
              if (b) return Promise.resolve(b);
              if ((b = this.SOa.get(a))) return b;
              b = dLc(this, a)
                .then(
                  g4.wrap((c) => {
                    this.store.set(a, c);
                    return c;
                  })
                )
                .finally(g4.wrap(() => this.SOa.delete(a)));
              this.SOa.set(a, b);
              return b;
            }
            constructor() {
              this.store = (bMc.G(this), new TLc());
              this.SOa = new Map();
            }
          },
          hLc = class extends bMc {
            constructor(a, b, c = []) {
              super();
              this.Nf = a;
              this.Qr = b;
              this.Mnb = new Map();
              c.forEach((d) => {
                this.Mnb.set(d.z$, d);
              });
            }
          };
        var cMc = 1 / 13.334,
          fLc = M3(
            R3((a) => {
              var b = a.context;
              const c = a.value,
                d = a.onChange,
                e = b.attrs;
              b = b.container.column;
              __c.x(a.valueType === 3);
              const f = S3(
                  (m) => {
                    d?.(c, m.target.checked);
                  },
                  [d, c]
                ),
                g = e.fontSize ?? Pk.Dc.fontSize,
                h = b.width;
              a = Q3(() => {
                const m = 20 * g * cMc;
                return `${Math.round(m * Math.min(1, (h - __c.gW * 2) / m))}px`;
              }, [g, h]);
              b = Q3(() => {
                var m = e.color ?? Pk.Dc.color,
                  n = e.zG ?? Pk.Dc.zG;
                const { h: p, s: q, Ca: r } = __c.Bs(m),
                  t = __c.zs(new __c.ts(p, q * 0.59, r * 0.69)).vs(),
                  u = __c.zs(new __c.ts(p, q * 0.68, r * 0.84)).vs(),
                  w = __c.Ls(__c.Fs(__c.zs(m), 0.5));
                return {
                  KZa: m,
                  Ovb: t,
                  LZa: u,
                  Pvb: n !== "transparent" ? n : "#ffffff",
                  Qvb: w,
                };
              }, [e]);
              const k = __c.wt(),
                l = S3(
                  (m) => {
                    m.nativeEvent.cancelable && m.preventDefault();
                    m.stopPropagation();
                    f4(() => {
                      d && d(c, !c);
                    })();
                  },
                  [d, c]
                );
              return N3("label", {
                className: P3("s5Xvtg", { _0YWo_Q: k, agLBbw: d == null }),
                onTouchEnd: l,
                children: O3("div", {
                  className: "nOL94A",
                  style: {
                    "--V8rdkw": a,
                    "--6kHV0A": b.KZa,
                    "--dhlyXQ": b.Ovb,
                    "--pMrTCg": b.LZa,
                    "--EyYwbg": b.KZa,
                    "--3ZWdlg": b.LZa,
                    "--81jhOQ": b.Pvb,
                    "--Cs3XTw": b.Qvb,
                  },
                  children: [
                    N3("input", {
                      type: "checkbox",
                      checked: c,
                      onChange: f4((m) => f(m)),
                      className: "p8DDOg",
                      hidden: !0,
                    }),
                    N3("span", {
                      "aria-hidden": !0,
                      className: P3("l_S_Ng", { iGjddQ: c }),
                      children: N3(dMc, {}),
                    }),
                  ],
                }),
              });
            })
          ),
          dMc = () =>
            N3("svg", {
              className: "_8CNofA",
              viewBox: "0 0 10 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: N3("path", {
                d: "M0.750977 4.5L3.25098 7L9.25098 1",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            });
        var jLc = (a, b) =>
            __c.QRa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.stream.isEmpty)
                for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Li: c } = __c.Tf(Pk, c.attrs)),
                  d.classList.add("IlUdwg"),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    d.classList.add("dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    pa: void 0,
                    writingMode: 1,
                    Pc: "start",
                    fg: eMc(e, c),
                    rb: b,
                  });
            }),
          eMc = h4(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.stream.da.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: ULc.structural }
          );
        var fMc,
          gMc,
          kLc,
          hMc = class extends j4 {
            constructor() {
              super(kLc);
              fMc();
            }
          };
        new ((() => {
          const a = (gMc = b4);
          class b extends a {
            static G(c) {
              L(c, { Li: Y3 });
            }
            get Li() {
              return __c.Tf(Pk, this.props.context.attrs).Li;
            }
            render() {
              var c = this.props.content;
              const d = this.props.context;
              if (c.value.isEmpty) return null;
              c = N3(this.props.Yj, {
                content: c,
                na: d.container.na,
                col: d.container.column,
                Li: this.Li,
              });
              return this.Li === "wrap"
                ? N3("div", { className: "dt4Dlg", children: c })
                : c;
            }
            constructor(...c) {
              super(...c);
              b.G(this);
            }
          }
          ({
            c: [kLc, fMc],
          } = k4(b, [], [tc], gMc));
        })(),
        hMc)();
        var iMc = __c.gW / 2,
          iLc =
            ({ Bha: a, qb: b }) =>
            (c) =>
              N3(jMc, { ...c, Bha: a, qb: b }),
          jMc = R3((a) => {
            const b = a.content,
              c = a.context,
              d = a.Bha,
              e = a.qb,
              f = c.container.container.config,
              g = { na: c.container.na, column: c.container.column },
              [h, k] = SLc(
                () => new Map(b.value.map((n) => [n, { width: 1, height: 1 }]))
              ),
              l = S3(
                (n, p) => {
                  const q = h.get(n);
                  (q != null && q.width === p.width && q.height === p.height) ||
                    k((r) => new Map(r).set(n, p));
                },
                [h]
              ),
              m = S3(
                (n, p) => __c.OZb([...h.values()], p, iMc, n, f, e),
                [h, f, e]
              );
            return N3("div", {
              className: "MAifoA",
              children: b.value.map((n, p) =>
                N3(
                  kMc,
                  {
                    ab: g,
                    url: n.embed.url,
                    mOb: (q) => l(n, q),
                    Aoa: m,
                    marginInlineStart: n === b.value.first() ? 0 : iMc,
                    marginInlineEnd: n === b.value.last() ? 0 : iMc,
                    Bha: d,
                  },
                  p
                )
              ),
            });
          }),
          kMc = R3((a) => {
            const b = a.url,
              c = a.ab,
              d = a.mOb,
              e = a.Aoa,
              f = a.marginInlineStart,
              g = a.marginInlineEnd,
              h = a.Bha,
              [k, l] = SLc(() => {
                const q = h.get(b);
                return q
                  ? {
                      status: "resolved",
                      url: q.url,
                      width: q.width,
                      height: q.height,
                    }
                  : { status: "ready" };
              });
            W3(() => {
              switch (k.status) {
                case "resolved":
                  d({ width: k.width ?? 1, height: k.height ?? 1 });
                  break;
                case "ready":
                  h.fetch(b)
                    .then(
                      g4.wrap((q) => {
                        l({
                          status: "resolved",
                          url: q.url,
                          width: q.width,
                          height: q.height,
                        });
                        d({ width: q.width ?? 1, height: q.height ?? 1 });
                      })
                    )
                    .catch(
                      g4.wrap(() => {
                        l({ status: "failed" });
                      })
                    );
                  break;
                case "failed":
                  break;
                default:
                  throw new z(k);
              }
            }, [h, b, k, d]);
            const m = Q3(
              () =>
                k.status === "resolved" && k.width != null && k.height != null
                  ? { width: k.width, height: k.height }
                  : { width: 1, height: 1 },
              [k]
            );
            var n = Q3(() => Y3(() => e(c, m)), [c, m, e]);
            a = m.width * n.get();
            n = m.height * n.get();
            let p;
            switch (k.status) {
              case "resolved":
                p = k?.url
                  ? N3("img", { src: k.url, width: a, height: n })
                  : null;
                break;
              case "ready":
                p = N3(__c.MW, { mediaType: "embed", failed: !1 });
                break;
              case "failed":
                p = N3(__c.MW, { mediaType: "embed", failed: !0 });
                break;
              default:
                throw new z(k);
            }
            return N3("div", {
              className: "_2NGN_A",
              style: {
                marginInlineStart: f,
                marginInlineEnd: g,
                width: a,
                height: n,
              },
              children: p,
            });
          });
        var sLc = class {
          ft({ size: a, scale: b, mLa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.HX * b : __c.xhc * b;
          }
          constructor() {
            this.mJb = h4((a, b, c) => {
              c = c.get();
              const d = b.layout.lk.Bi(a);
              a = b.layout.lk.oi(a);
              return (
                c != null &&
                d.count() === (c.rows?.size || 0) &&
                a.count() === (c.columns?.size || 0)
              );
            });
            this.APa = YLc((a) => new Set(a.get()?.columns || []), {
              equals: __c.nn,
            });
            this.DPa = YLc((a) => new Set(a.get()?.rows || []), {
              equals: __c.nn,
            });
            this.tGb = h4(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.DPa(c);
                b = b.layout.lk.oi(a);
                if (e.size > 0) return new Set(b);
                c = this.APa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.na, f.column);
                  for (const g of L3(
                    d ? d.span.Uc : f.column,
                    d ? d.span.ue : f.column,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.nn }
            );
            this.uGb = h4(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.APa(c);
                b = b.layout.lk.Bi(a);
                if (e.size > 0) return new Set(b);
                c = this.DPa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.na, f.column);
                  for (const g of L3(
                    d ? d.span.Fc : f.na,
                    d ? d.span.Hd : f.na,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.nn }
            );
          }
        };
        var lMc,
          mMc,
          nMc,
          oMc,
          pMc = parseInt("4px", 10) || 4,
          qMc = parseInt("0.5px", 10) || 0.5,
          rMc = parseInt("1px", 10) || 1,
          sMc = parseInt("0.5px", 10) || 0.5,
          tMc = parseInt("0.5px", 10) || 0.5,
          uMc = parseInt("1px", 10) || 1,
          vMc = parseInt("0.5px", 10) || 0.5,
          T3,
          wMc = class extends j4 {
            constructor() {
              super(T3);
              lMc();
            }
          };
        new ((() => {
          const a = (mMc = b4);
          class b extends a {
            static G(c) {
              L(c, { $g: Y3, Lr: Y3, fha: Y3 });
            }
            get $g() {
              return this.props.sheet.direction === "rtl";
            }
            get Lr() {
              const c = this.props.et?.get();
              if (c != null && c.length !== 0) return new __c.wy(c);
            }
            get fha() {
              return this.props.nHa?.()?.get();
            }
            render() {
              return N3(__c.Wt, {
                wr: "light",
                light: "light",
                yu: "light",
                dark: "light",
                children: this.Dwb,
              });
            }
            constructor(...c) {
              super(...c);
              this.onMouseMove =
                (T3.G(this),
                f4((d) => {
                  const { onMouseMove: e, sheet: f, Qd: g = 1 } = this.props;
                  e?.(d, f, "column", g);
                }));
              this.onMouseLeave = f4((d) => {
                this.props.onMouseLeave?.(d);
              });
              this.onMouseDown = f4((d) => {
                this.props.onMouseDown?.(d);
              });
              this.onTouchStart = f4((d) => {
                this.props.onTouchStart?.(d);
              });
              this.Mfb = (d, e, f) => {
                const {
                    sheet: g,
                    qb: h,
                    ft: k,
                    dL: l,
                    bL: m,
                    DGb: n,
                    Qd: p = 1,
                    qe: q = 1,
                  } = this.props,
                  r = { jNbTIg: !this.$g, gtA7Dw: this.$g };
                var t = f?.sticky
                  ? this.$g
                    ? { right: 0 }
                    : { left: 0 }
                  : void 0;
                t = f?.sticky ? this.fha ?? t : void 0;
                let u = 0;
                const w = h.layout.Rh.oi(g),
                  A = w.map((C) => {
                    if (!((d && w.Ne(C, d) < 0) || (e && w.Ne(C, e) > 0))) {
                      var D = h.mb.ya(g, C);
                      if (D != null) {
                        var H = n?.get()?.get(C);
                        u += C.width;
                        return N3(
                          xMc,
                          {
                            col: C,
                            label:
                              H?.variant === "icon-only"
                                ? void 0
                                : __c.Gw(g.ow(C)),
                            pb: H?.icon,
                            Oc: H?.Oc,
                            K3: H?.cursor,
                            lb: H?.lb,
                            ft: k,
                            dL: l,
                            bL: m,
                            Qd: p,
                            qe: q,
                            start: D,
                          },
                          C.id
                        );
                      }
                    }
                  }),
                  B = this.$g ? { right: u * p } : { left: u * p };
                return O3("div", {
                  style: { height: k(q), width: u * p, ...t },
                  className: P3("Vt2_4w", r, { Tn3nUw: f?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    A,
                    f?.sticky &&
                      N3("div", {
                        style: { width: pMc * p, ...B },
                        className: P3("HBvlug", "ru3tFQ", r),
                      }),
                  ],
                });
              };
              this.Dwb = (d) => {
                var e = this.props.sheet;
                const f = this.props.qb,
                  g = f.layout.Rh.Cba(e),
                  h = { jNbTIg: !this.$g, gtA7Dw: this.$g };
                e = f.layout.Rh.oi(e);
                return O3("div", {
                  ref: this.Lr?.Vk,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: P3("xhBZaw", h, d.className),
                  children: [
                    g && this.Mfb(void 0, g, { sticky: !0 }),
                    this.Mfb(g ? e.next(g) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [T3, lMc],
          } = k4(b, [], [tc], mMc));
        })(),
        wMc)();
        var U3,
          yMc = class extends j4 {
            constructor() {
              super(U3);
              nMc();
            }
          };
        new ((() => {
          const a = (oMc = b4);
          class b extends a {
            static G(c) {
              L(c, { $g: Y3, Lr: Y3, fha: Y3 });
            }
            get $g() {
              return this.props.sheet.direction === "rtl";
            }
            get Lr() {
              const c = this.props.et?.get();
              if (c != null && c.length !== 0) return new __c.wy(c);
            }
            get fha() {
              return this.props.nHa?.()?.get();
            }
            render() {
              return N3(__c.Wt, {
                wr: "light",
                light: "light",
                yu: "light",
                dark: "light",
                children: this.CTb,
              });
            }
            constructor(...c) {
              super(...c);
              this.onMouseMove =
                (U3.G(this),
                f4((d) => {
                  const { onMouseMove: e, sheet: f, qe: g = 1 } = this.props;
                  e?.(d, f, "row", g);
                }));
              this.onMouseLeave = f4((d) => {
                this.props.onMouseLeave?.(d);
              });
              this.onMouseDown = f4((d) => {
                this.props.onMouseDown?.(d);
              });
              this.onTouchStart = f4((d) => {
                this.props.onTouchStart?.(d);
              });
              this.Sfb = (d, e, f) => {
                const {
                    sheet: g,
                    qb: h,
                    ft: k,
                    dL: l,
                    bL: m,
                    DGb: n,
                    Qd: p = 1,
                    qe: q = 1,
                  } = this.props,
                  r = { jNbTIg: !this.$g, gtA7Dw: this.$g };
                var t = f?.sticky ? { top: 0 } : void 0;
                t = f?.sticky ? this.fha ?? t : void 0;
                let u = 0;
                const w = h.layout.Rh.Bi(g),
                  A = w.map((B) => {
                    if (!((d && w.Ne(B, d) < 0) || (e && w.Ne(B, e) > 0))) {
                      var C = h.mb.qa(g, B);
                      if (C != null) {
                        var D = n?.get()?.get(B);
                        u += B.height;
                        var H =
                          D?.variant === "icon-only"
                            ? void 0
                            : `${g.sx(B) + 1}`;
                        return N3(
                          zMc,
                          {
                            na: B,
                            label: H,
                            pb: D?.icon,
                            Oc: D?.Oc,
                            K3: D?.cursor,
                            lb: D?.lb,
                            dL: l,
                            bL: m,
                            ft: k,
                            Qd: p,
                            qe: q,
                            start: C,
                          },
                          B.id
                        );
                      }
                    }
                  });
                return O3("div", {
                  style: { height: u * q, width: k(p), ...t },
                  className: P3("_93roJg", r, { Tn3nUw: f?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    A,
                    f?.sticky &&
                      N3("div", {
                        style: { height: pMc * q },
                        className: P3("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.CTb = (d) => {
                var e = this.props.sheet;
                const f = this.props.qb,
                  g = f.layout.Rh.Dba(e),
                  h = { jNbTIg: !this.$g, gtA7Dw: this.$g };
                e = f.layout.Rh.Bi(e);
                return O3("div", {
                  ref: this.Lr?.Vk,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: P3("An9VeA", h, d.className),
                  children: [
                    g && this.Sfb(void 0, g, { sticky: !0 }),
                    this.Sfb(g ? e.next(g) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [U3, nMc],
          } = k4(b, [], [tc], oMc));
        })(),
        yMc)();
        var xMc = R3((a) => {
            const b = a.label,
              c = a.pb,
              d = a.Oc,
              e = a.K3,
              f = a.lb,
              g = a.col,
              h = a.dL,
              k = a.bL,
              l = a.ft,
              m = a.Qd,
              n = a.qe,
              p = l(n),
              q = i4(() => h(g)),
              r = i4(() => k(g));
            return N3("div", {
              className: P3("_83Rssw", "d2uLIA", nLc(q), pLc(r)),
              style: {
                width: g.width * m,
                height: p,
                borderInlineWidth: `${qMc * m}px`,
                borderBlockStartWidth: r === "none" ? `${rMc * m}px` : void 0,
                borderBlockEndWidth: `${sMc * m}px`,
                transform: `translateX(${a.start * m}px)`,
              },
              children: N3(oLc, {
                label: b,
                pb: c,
                Oc: d,
                K3: e,
                lb: f,
                width: g.width,
                height: l(1),
                scale: n,
                c_a: q,
              }),
            });
          }),
          zMc = R3((a) => {
            const b = a.label,
              c = a.pb,
              d = a.Oc,
              e = a.K3,
              f = a.lb,
              g = a.na,
              h = a.ft,
              k = a.dL,
              l = a.bL,
              m = a.Qd,
              n = a.qe,
              p = h(m),
              q = i4(() => k(g)),
              r = i4(() => l(g));
            return N3("div", {
              className: P3("_83Rssw", "JhBzyw", nLc(q), pLc(r)),
              style: {
                width: p,
                height: g.height * n,
                borderBlockWidth: `${tMc * n}px`,
                borderInlineStartWidth: r === "none" ? `${uMc * n}px` : void 0,
                borderInlineEndWidth: `${vMc * n}px`,
                transform: `translateY(${a.start * n}px)`,
              },
              children: N3(oLc, {
                label: b,
                pb: c,
                Oc: d,
                K3: e,
                lb: f,
                width: h(1),
                height: g.height,
                scale: m,
                c_a: q,
              }),
            });
          });
        var AMc =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var BMc =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var qLc = __c.GV({ Wq: AMc, medium: BMc });
        var CMc,
          DMc,
          V3,
          EMc = class extends j4 {
            constructor() {
              super(V3);
              CMc();
            }
          };
        new ((() => {
          const a = (DMc = b4);
          class b extends a {
            static G(c) {
              L(c, { Sg: Y3.struct });
            }
            render() {
              const c = this.props.element;
              return N3(this.props.ju, {
                sheet: c.C.config,
                container: c,
                Ci: this.Ci,
                Bka: "visible",
                et: this.props.et,
                zx: this.props.zx,
                Uy: this.props.Uy,
                Xy: this.props.Xy,
                ha: this.props.ha,
                Sg: this.Sg,
                Yj: this.props.Yj,
                WN: void 0,
              });
            }
            get Sg() {
              return __c.jn(this.props.element.C.Ja, this.props.Wf);
            }
            constructor(...c) {
              super(...c);
              this.Ci =
                (V3.G(this),
                Y3(() => {
                  const d = this.props.element.C.config;
                  return lo(0, 0, d.width, d.height);
                }));
            }
          }
          ({
            c: [V3, CMc],
          } = k4(b, [], [tc], DMc));
        })(),
        EMc)();
        var FMc = class {
          constructor() {
            this.Vua = new WeakMap();
            this.tFb = (a) => this.Vua.get(a);
            this.Mib = (a, b) => {
              this.Vua.set(a, b);
            };
            this.dwb = (a, b) => {
              const c = this.Vua.get(a);
              c && c.la === b.la && c.Wb === b.Wb && this.Vua.delete(a);
            };
          }
        };
        var GMc = parseInt("4px", 10) || 4,
          HMc = R3(
            ({ sheet: a, qb: b, Ci: c, ha: d, range: e, dB: f, eB: g }) => {
              if (e != null && (f || g)) {
                d = d?.get() ?? 1;
                c = c.get();
                var h = a.direction === "rtl",
                  k = { ZJ0G6w: !h, dOI_jA: h };
                a = aD(
                  b.mb,
                  a,
                  { na: e.Fc, column: e.Uc },
                  { na: e.Hd, column: e.ue }
                )?.sb();
                if (a != null) {
                  if (f && g)
                    return N3("div", {
                      style: {
                        top: (a.top + a.height) * d,
                        width: a.width * d,
                        height: GMc * d,
                      },
                      className: P3("aX8dhQ", "VGcLng"),
                    });
                  if (f)
                    return (
                      (f = a.left + a.width),
                      N3("div", {
                        style: {
                          width: GMc * d,
                          height: c.height * d,
                          ...(h ? { right: f * d } : { left: f * d }),
                        },
                        className: P3("aX8dhQ", "gl1RPg", k),
                      })
                    );
                  if (g)
                    return N3("div", {
                      style: {
                        top: (a.top + a.height) * d,
                        width: c.width * d,
                        height: GMc * d,
                      },
                      className: P3("aX8dhQ", "VGcLng"),
                    });
                }
              }
            }
          );
        var l4 = ({ sheet: a, qb: b, range: c, Ci: d, ha: e, children: f }) => {
            const g = bLc();
            vLc({ sheet: a, qb: b, Ci: d, ha: e, range: c, Zd: g });
            return N3("div", {
              ref: g,
              className: P3(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: f,
            });
          },
          IMc = ({ sheet: a, qb: b, range: c, Ci: d, ha: e, children: f }) => {
            const g = bLc();
            vLc({ sheet: a, qb: b, Ci: d, ha: e, range: c, Zd: g });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return N3("div", {
              className: P3("nstn2A", a, "_9sodyg"),
              children: N3("div", {
                ref: g,
                className: P3("nstn2A", a),
                children: f,
              }),
            });
          };
        var xLc = R3(({ sheet: a, children: b, II: c }) => {
            const d = S3(
                (f) => {
                  c.HQa(a, f);
                },
                [c, a]
              ),
              e = S3(
                (f) => {
                  f != null ? c.JI.set(a, f) : (c.JI.delete(a), c.LY.delete(a));
                },
                [c, a]
              );
            return N3(MLc, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              xx: e,
              children: b,
            });
          }),
          wLc = class {
            HQa(a, b) {
              this.onScroll && this.onScroll(a);
              this.LY.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.JI = new WeakMap();
              this.LY = e4.map(new Map(), { deep: !1 });
              this.scrollTo = f4((b, c) => {
                if ((b = this.JI.get(b))) {
                  const d = {};
                  c.left != null && (d.left = Math.floor(c.left));
                  c.top != null && (d.top = Math.floor(c.top));
                  b.scrollTo(d);
                }
              });
            }
          };
        var CLc = R3((a) => {
          const b = a.item,
            c = a.et,
            d = a.zx,
            e = a.cg,
            f = a.measureRef,
            g = a.ha,
            h = a.C7a,
            k = a.Wb,
            l = a.Uy,
            m = a.Xy,
            n = a.ju,
            p = a.tT,
            q = a.Yj,
            r = a.Wf,
            t = a.qb,
            u = a.II;
          a = Q3(() => __c.jn(b.Ja, r), [b, r]);
          const w = Q3(
              () =>
                Y3(() => {
                  const N = b.config;
                  return lo(0, 0, N.width, N.height);
                }),
              [b]
            ),
            A = S3(() => {
              const N = __c.ov(b.config),
                R = g.get();
              return {
                width: Math.min(N.width * R, k.width),
                height: k.kj ? Math.min(N.height * R, k.kj) : N.height * R,
              };
            }, [b, g, k]),
            B = Q3(
              () =>
                R3(({ sheet: N, range: R, dB: S, eB: Q }) =>
                  N3(l4, {
                    sheet: N,
                    qb: t,
                    range: R,
                    Ci: w,
                    ha: g,
                    children: N3(HMc, {
                      sheet: N,
                      qb: t,
                      Ci: w,
                      ha: g,
                      range: R,
                      dB: S,
                      eB: Q,
                    }),
                  })
                ),
              [g, w, t]
            ),
            C = Q3(
              () =>
                Y3(() => {
                  const N = g.get(),
                    { width: R, height: S } = A();
                  var Q = u.LY.get(b);
                  if (Q?.To) {
                    const U = Q.scroll;
                    Q = Q.offset;
                    return lo(
                      U.left / N,
                      U.top / N,
                      (U.left + Q.width) / N,
                      (U.top + Q.height) / N
                    );
                  }
                  return lo(0, 0, R / N, S / N);
                }),
              [b, u, g, A]
            );
          W3(
            () =>
              X3(() => {
                const N = b.config.view.freeze.eK
                  ? b.config.layout.Ee.get(b.config.view.freeze.eK)
                  : void 0;
                if (N != null) {
                  var { width: R } = A();
                  b.config.ya(N) + N.width > R
                    ? ALc(u, b, "horizontal")
                    : zLc(u, b, "horizontal");
                }
              }),
            [b, u, A]
          );
          W3(
            () =>
              X3(() => {
                const N = b.config.view.freeze.HM
                  ? b.config.layout.Ke.get(b.config.view.freeze.HM)
                  : void 0;
                if (N != null) {
                  var { height: R } = A();
                  b.config.qa(N) + N.height > R
                    ? ALc(u, b, "vertical")
                    : zLc(u, b, "vertical");
                }
              }),
            [b, u, A]
          );
          const { width: D, height: H } = A(),
            J = __c.ov(b.config),
            M = g.get();
          return N3("div", {
            ref: f,
            className: "E8r86A",
            style: { width: D, height: H },
            children: N3(p, {
              sheet: b,
              children: N3("div", {
                ref: h,
                className: "cXTiJA",
                style: { width: J.width * M, height: J.height * M },
                children: N3("div", {
                  className: "W1ir5A",
                  children: N3(n, {
                    container: e.Jk(b),
                    sheet: b.config,
                    Ci: w,
                    Bka: "visible",
                    et: c,
                    zx: d,
                    ha: g,
                    viewport: C,
                    Uy: l,
                    Xy: m,
                    Sg: a,
                    Yj: q,
                    WN: B,
                  }),
                }),
              }),
            }),
          });
        });
        var JMc = R3(({ page: a, qb: b, range: c, wI: d }) => {
          var e =
            c != null &&
            c.Uc != null &&
            c.Fc != null &&
            c.ue != null &&
            c.Hd != null
              ? aD(
                  b.mb,
                  a.sheet,
                  { na: c.Fc, column: c.Uc },
                  { na: c.Hd, column: c.ue }
                )
              : void 0;
          return N3("div", {
            className: "Gi9pfA",
            children: a.elements.map((f, g) =>
              e == null ? d(f, g) : __c.oo(__c.qo(f)).ut(e) && d(f, g)
            ),
          });
        });
        var KMc = new __c.UV(),
          LMc = (a) => __c.HX * a,
          MMc = () => "primary-default",
          NMc = () => "none",
          ELc = R3(
            ({
              container: a,
              et: b,
              zx: c,
              Uy: d,
              Xy: e,
              bca: f,
              ha: g,
              viewport: h,
              qb: k,
              UVb: l,
              ju: m,
              Yj: n,
              wI: p,
              Qta: q,
              i4b: r,
              L2b: t,
              K2b: u,
            }) => {
              const w = a.page,
                A = Q3(
                  () =>
                    Y3(() => {
                      {
                        var C = k.mb;
                        var D = w.sheet,
                          H = C.oC.lk.Bi(D),
                          J = C.oC.lk.oi(D);
                        const M = H.first(),
                          N = J.first();
                        H = H.last();
                        J = J.last();
                        C =
                          M && N && H && J
                            ? aD(
                                C,
                                D,
                                { na: M, column: N },
                                { na: H, column: J }
                              )
                            : void 0;
                      }
                      return C ?? lo(0, 0, 0, 0);
                    }),
                  [w, k]
                ),
                B = Q3(
                  () =>
                    R3(({ sheet: C, range: D, dB: H, eB: J }) =>
                      O3(OLc, {
                        children: [
                          N3(l4, {
                            sheet: w.sheet,
                            qb: k,
                            range: D,
                            Ci: A,
                            ha: g,
                            children: N3(HMc, {
                              sheet: C,
                              qb: k,
                              Ci: A,
                              ha: g,
                              range: D,
                              dB: H,
                              eB: J,
                            }),
                          }),
                          O3(IMc, {
                            sheet: w.sheet,
                            qb: k,
                            range: D,
                            Ci: A,
                            ha: g,
                            children: [
                              r && N3(r, {}),
                              p && N3(JMc, { page: w, qb: k, wI: p, range: D }),
                              u && N3(u, {}),
                              q && q(),
                            ],
                          }),
                          t &&
                            D &&
                            N3(l4, {
                              sheet: w.sheet,
                              qb: k,
                              range: D,
                              Ci: A,
                              ha: g,
                              children: N3(t, { range: D }),
                            }),
                        ],
                      })
                    ),
                  [w, k, A, g, r, p, u, q, t]
                );
              return l
                ? N3(OMc, {
                    container: a,
                    Ci: A,
                    viewport: h,
                    ha: g,
                    et: b,
                    zx: c,
                    Uy: d,
                    Xy: e,
                    ju: m,
                    Yj: n,
                    WN: B,
                    qb: k,
                  })
                : N3(m, {
                    sheet: w.sheet,
                    container: a,
                    Ci: A,
                    Bka: "hidden",
                    et: b,
                    zx: c,
                    Uy: d,
                    Xy: e,
                    bca: f,
                    ha: g,
                    viewport: h,
                    Yj: n,
                    WN: B,
                  });
            }
          ),
          OMc = R3((a) => {
            const b = a.container,
              c = a.Ci,
              d = a.ha,
              e = a.viewport,
              f = a.et,
              g = a.zx,
              h = a.Uy,
              k = a.Xy,
              l = a.ju,
              m = a.Yj,
              n = a.WN;
            a = a.qb;
            const p = b.page,
              q = p.sheet.direction === "rtl",
              r = c4(null),
              t = c4(null),
              u = c4(null);
            W3(() => {
              const D = m4({
                sheet: p.sheet,
                Dva: !0,
                Eva: !0,
                ha: d,
                viewport: e,
              });
              return Z3(
                () => D?.get(),
                (H) => {
                  const J = r.current;
                  if (H && J) {
                    var M = p.sheet.direction === "rtl";
                    J.style.position = H.position ?? "sticky";
                    J.style.top = H.top ?? "0px";
                    M
                      ? (J.style.right = H.right ?? "0px")
                      : (J.style.left = H.left ?? "0px");
                    J.style.transform = H.transform ?? "";
                  }
                }
              );
            }, [p.sheet, d, e]);
            W3(() => {
              const D = m4({
                sheet: p.sheet,
                Dva: !1,
                Eva: !0,
                ha: d,
                viewport: e,
              });
              return Z3(
                () => D?.get(),
                (H) => {
                  const J = u.current;
                  H &&
                    J &&
                    ((J.style.position = H.position ?? "sticky"),
                    (J.style.top = H.top ?? "0px"),
                    (J.style.transform = H.transform ?? ""));
                }
              );
            }, [p.sheet, d, e]);
            W3(() => {
              const D = m4({
                sheet: p.sheet,
                Dva: !0,
                Eva: !1,
                ha: d,
                viewport: e,
              });
              return Z3(
                () => D?.get(),
                (H) => {
                  const J = t.current;
                  if (H && J) {
                    var M = p.sheet.direction === "rtl";
                    J.style.position = H.position ?? "sticky";
                    M
                      ? (J.style.right = H.right ?? "0px")
                      : (J.style.left = H.left ?? "0px");
                    J.style.transform = H.transform ?? "";
                  }
                }
              );
            }, [p.sheet, d, e]);
            const w = S3(
                (D, H, J) =>
                  m4({ sheet: D, Dva: H, Eva: J, ha: d, viewport: e }),
                [d, e]
              ),
              A = Q3(
                () => (w ? () => w(p.sheet, !0, !1) : void 0),
                [w, p.sheet]
              ),
              B = Q3(
                () => (w ? () => w(p.sheet, !1, !0) : void 0),
                [w, p.sheet]
              ),
              C = d?.get() ?? 1;
            return O3("div", {
              className: P3("OsKKIQ", "cbOp6Q"),
              children: [
                N3("div", {
                  className: "VDFv_A",
                  children: N3(l, {
                    sheet: p.sheet,
                    container: b,
                    Ci: c,
                    Bka: "hidden",
                    et: f,
                    zx: g,
                    Uy: h,
                    Xy: k,
                    bca: w,
                    ha: d,
                    viewport: e,
                    Yj: m,
                    WN: n,
                  }),
                }),
                N3("div", {
                  ref: r,
                  className: "_688KWg",
                  children: N3(rLc, { $g: q, m6a: !1, ft: LMc, scale: C }),
                }),
                N3("div", {
                  ref: u,
                  className: "m0cT1w",
                  children: N3(T3, {
                    sheet: p.sheet,
                    Qd: C,
                    qe: C,
                    ft: LMc,
                    dL: MMc,
                    bL: NMc,
                    VL: KMc,
                    nHa: A,
                    qb: a,
                  }),
                }),
                N3("div", {
                  ref: t,
                  className: "zm537g",
                  children: N3(U3, {
                    sheet: p.sheet,
                    Qd: C,
                    qe: C,
                    ft: LMc,
                    dL: MMc,
                    bL: NMc,
                    VL: KMc,
                    nHa: B,
                    qb: a,
                  }),
                }),
              ],
            });
          }),
          m4 = ({ sheet: a, Dva: b, Eva: c, ha: d, viewport: e }) =>
            Y3(() => {
              var f = e?.get().sb();
              const g = d?.get() ?? 1;
              if (!f) return {};
              const h = {};
              f = new Mn(f.left, f.top);
              const k = a.direction === "rtl";
              h.position = "relative";
              c && (h.top = "0px");
              b && (k ? (h.right = "0px") : (h.left = "0px"));
              h.transform = `translate(${b ? f.x * g : 0}px, ${
                c ? f.y * g : 0
              }px)`;
              return h;
            });
        var KLc = class {
            constructor(a, b) {
              this.an = a;
              this.qb = b;
              this.xvb = __c.gW;
              this.REb = h4((c, d, e, f) => {
                e = e.get();
                const g = new WeakMap();
                for (let p = 0; p < e.length; p++) {
                  var h = e[p],
                    k = this.HEb(c, d, h);
                  if (!k) continue;
                  switch (k) {
                    case "start":
                    case "justify":
                      var l = e[p + 1];
                      if (l == null || !cD(c, this.qb, d, l)) continue;
                      break;
                    case "center":
                      l = e[p + 1];
                      if (l == null || !cD(c, this.qb, d, l)) continue;
                      l = e[p - 1];
                      if (l == null || !cD(c, this.qb, d, l)) continue;
                      break;
                    case "end":
                      l = e[p - 1];
                      if (l == null || !cD(c, this.qb, d, l)) continue;
                      break;
                    default:
                      throw new z(k);
                  }
                  l = f(d, h);
                  if (!l) continue;
                  var m = l.width + (k === "center" ? 0 : this.xvb);
                  if (h.width > m) continue;
                  switch (k) {
                    case "start":
                    case "justify":
                      k = this.qb.mb.ya(c, h);
                      if (k == null) continue;
                      l = k + m;
                      break;
                    case "center":
                      k = this.qb.mb.ya(c, h);
                      if (k == null) continue;
                      l = k + h.width / 2;
                      k = l - m / 2;
                      l += m / 2;
                      break;
                    case "end":
                      k = this.qb.mb.ya(c, h);
                      if (k == null) continue;
                      l = k + h.width;
                      k = l - m;
                      break;
                    default:
                      throw new z(k);
                  }
                  for (m = e.indexOf(h); m >= 0; m--) {
                    var n = e[m];
                    const q = this.qb.mb.ya(c, n),
                      r = m - 1 < 0 || cD(c, this.qb, d, e[m - 1]);
                    if (
                      (n === h || cD(c, this.qb, d, n)) &&
                      q != null &&
                      k < q &&
                      q < l &&
                      r
                    )
                      g.set(n, 1);
                    else break;
                  }
                  for (h = e.indexOf(h) + 1; h < e.length; h++)
                    if (
                      ((m = e[h]),
                      (n = this.qb.mb.ya(c, m)),
                      cD(c, this.qb, d, m) && n != null && k < n && n < l)
                    )
                      g.set(m, 1);
                    else break;
                }
                return g;
              });
              this.HEb = (c, d, e) => {
                const f = c.layout.cells.get(d, e);
                if (
                  f &&
                  (f.ref.content.ref || f.ref.Pa.ref) &&
                  f.span.Fc === f.span.Hd &&
                  f.span.Uc === f.span.ue
                ) {
                  var g = this.an.zo(c, d, e);
                  c = this.an.iHa(c, d, e, PMc);
                  var { Li: h, textAlign: k } = __c.Tf(Pk, c);
                  if (h === "overflow")
                    return __c.VRa(
                      k,
                      f.ref.content.ref?.type,
                      f.ref.Pa.ref?.type,
                      g ? () => g.Ik.type : void 0
                    );
                }
              };
            }
          },
          PMc = __c.If({ Li: void 0, textAlign: void 0 });
        var QMc = R3(function (a) {
          const b = a.sheet;
          var c = a.qb,
            d = a.a_;
          const e = a.Y0b,
            f = a.ha,
            g = a.fJa,
            h = a.uEb,
            k = a.overflow,
            l = a.Ci,
            m = bLc();
          RLc(
            () =>
              X3(() => {
                const w = y(m.current),
                  A = f?.get() ?? 1,
                  { width: B, height: C } = l.get();
                w.style.width = `${B * A}px`;
                w.style.height = `${C * A}px`;
              }),
            [m, f, l]
          );
          const n = S3((w) => g.REb(b, w, e, h), [g, b, e, h]);
          a = S3((w, A) => n(w)?.get(A) ?? 0, [n]);
          const p = c.layout.lk.Bi(b),
            q = c.layout.lk.oi(b),
            r = c.layout.Rh.Bi(b);
          c = c.layout.Rh.oi(b);
          d = $Kc(b, p, q, r, c, d, e, a);
          const { width: t, height: u } = l.get();
          c = b.direction === "rtl";
          return N3("svg", {
            ref: m,
            role: "presentation",
            className: P3("c6a1eQ", {
              H_CtIQ: !c,
              _8_56PQ: c,
              _3NnFzw: k === "visible",
              JMH1ng: k === "hidden",
            }),
            viewBox: `0 0 ${t} ${u}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: d.map(({ lines: w, color: A, weight: B, wn: C, xn: D }) =>
              N3(
                "path",
                {
                  stroke: A,
                  strokeDasharray: C,
                  strokeDashoffset: D,
                  strokeWidth: B,
                  d: w
                    .map(
                      ({ p1: H, p2: J }) => `M ${H.x} ${H.y} L ${J.x} ${J.y}`
                    )
                    .join(" "),
                },
                `${A}-${B}-${C}-${D}`
              )
            ),
          });
        });
        var RMc = Symbol.iterator,
          SMc = class {
            get size() {
              return this.mva;
            }
            get([a, b]) {
              return (a = this.DL.get(a)) ? a.get(b) : void 0;
            }
            has([a, b]) {
              a = this.DL.get(a);
              return a == null ? !1 : a.has(b);
            }
            set([a, b], c) {
              let d = this.DL.get(a);
              d == null && ((d = new Map()), this.DL.set(a, d));
              d.set(b, c);
              this.mva++;
              return this;
            }
            clear() {
              this.DL.clear();
              this.mva = 0;
            }
            delete([a, b]) {
              const c = this.DL.get(a);
              if (c == null || !c.delete(b)) return !1;
              this.mva--;
              c.size === 0 && this.DL.delete(a);
              return !0;
            }
            forEach(a) {
              for (const [b, c] of this.DL)
                for (const [d, e] of c) a([b, d], e);
            }
            *[RMc]() {
              for (const [a, b] of this.DL)
                for (const [c, d] of b) yield [[a, c], d];
            }
            constructor() {
              this.mva = 0;
              this.DL = new Map();
            }
          };
        var TMc,
          UMc,
          VMc,
          WMc,
          XMc,
          YMc,
          $Mc = class extends b4 {
            render() {
              const { foa: a, Zba: b, ...c } = this.props,
                d = this.props.sheet;
              return O3("div", {
                ref: this.ljb,
                className: P3(
                  "ZTz_iA",
                  d.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  a?.uYa &&
                    N3(n4, {
                      ...c,
                      sheet: d,
                      range: a.uYa.range,
                      dB: !0,
                      eB: !0,
                      className: "_0C8M3w",
                      jx: this.jx,
                    }),
                  a?.fob &&
                    N3(n4, {
                      ...c,
                      sheet: d,
                      range: a.fob.range,
                      dB: !1,
                      eB: !0,
                      className: "_7n44yg",
                      jx: this.jx,
                    }),
                  a?.p6a &&
                    N3(n4, {
                      ...c,
                      sheet: d,
                      range: a.p6a.range,
                      dB: !0,
                      eB: !1,
                      className: "fF5r6w",
                      jx: this.jx,
                    }),
                  a?.Pmb &&
                    N3(n4, {
                      ...c,
                      sheet: d,
                      range: a.Pmb.range,
                      dB: !1,
                      eB: !1,
                      className: "llILYw",
                      jx: this.jx,
                    }),
                  N3(this.grb, {}),
                ],
              });
            }
            componentDidMount() {
              const a = X3(() => {
                var b = this.props,
                  c = b.ha;
                b = b.Ci;
                const d = this.ljb.current;
                if (d) {
                  c = c ? c.get() : 1;
                  const { width: e, height: f } = b.get();
                  d.style.width = `${e * c}px`;
                  d.style.height = `${f * c}px`;
                }
              });
              __c.kc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.ljb = fx();
              this.jx = new ZMc();
              this.grb = R3(() => {
                const b = this.props.Zba;
                var c = this.props.r3,
                  d = this.props.Bx;
                const e = this.props.container,
                  f = this.props.sheet;
                var g = this.props.qb,
                  h = this.props.ha;
                const k = f.layout.rows.first(),
                  l = f.layout.cols.first();
                if (!b || !k || !l) return null;
                const m = Q3(() => b?.(e, f, k, l), [b, e, f, k, l])?.get();
                if (!m) return null;
                h = h.get();
                const n = g.mb.qa(f, k);
                g = g.mb.ya(f, l);
                if (n == null || g == null) return null;
                const p = c?.();
                c = p?.fontSize ? p.fontSize * h : void 0;
                d = p?.fontFamily ? d?.d6(p.fontFamily) : void 0;
                return N3("div", {
                  className: "_6eq__A",
                  style: {
                    top: n * h + h,
                    left: g * h + h,
                    height: k.height * h - h * 2,
                    paddingLeft: `${__c.gW * h}px`,
                    fontSize: c,
                    fontFamily: d,
                  },
                  children: m,
                });
              });
            }
          };
        ({
          c: [YMc, TMc],
        } = k4($Mc, [], [tc], b4));
        TMc();
        var n4,
          aNc = class extends j4 {
            constructor() {
              super(n4);
              UMc();
            }
          };
        new ((() => {
          const a = (VMc = b4);
          class b extends a {
            static G(c) {
              L(c, { WQa: Y3, bounds: Y3 });
            }
            get WQa() {
              const c = this.props.viewport,
                d = this.props.dB,
                e = this.props.eB;
              return c == null || (!d && !e)
                ? c
                : Y3(() => {
                    const f = c.get().sb();
                    return __c.qo({
                      top: e ? 0 : f.top,
                      left: d ? 0 : f.left,
                      width: f.width,
                      height: f.height,
                    });
                  });
            }
            render() {
              const c = this.props.sheet,
                d = this.props.Ci,
                e = this.props.container,
                f = this.props.range,
                g = this.props.WN,
                h = this.props.dB,
                k = this.props.eB;
              return O3("div", {
                ref: this.pNa,
                className: P3("i0YQww", this.props.className),
                children: [
                  N3("div", {
                    ref: this.Kdb,
                    className: "vUKoKg",
                    children: N3("div", {
                      ref: this.Ldb,
                      children: N3(o4, {
                        sheet: c,
                        container: e,
                        Ci: d,
                        bounds: f,
                        et: this.props.et,
                        zx: this.props.zx,
                        uJ: this.props.uJ,
                        Yj: this.props.Yj,
                        I$: this.props.I$,
                        qb: this.props.qb,
                        ha: this.props.ha,
                        a_: this.a_,
                        Gia: this.Gia,
                        j1: this.j1,
                        r3: this.props.r3,
                        jx: this.props.jx,
                      }),
                    }),
                  }),
                  N3(this.uya, {}),
                  g && N3(g, { sheet: c, range: f, dB: h, eB: k }),
                ],
              });
            }
            componentDidMount() {
              const c = X3(() => {
                  var k = this.props,
                    l = k.ha,
                    m = k.sheet,
                    n = k.Ci,
                    p = k.qb,
                    q = this.pNa.current;
                  const r = this.Kdb.current;
                  k = this.Ldb.current;
                  var t = this.bounds,
                    u = t.Uc;
                  const w = t.ue,
                    A = t.Fc;
                  t = t.Hd;
                  l = l ? l.get() : 1;
                  const { width: B, height: C } = n.get();
                  p = (n =
                    A && u && t && w
                      ? aD(
                          p.mb,
                          m,
                          { na: A, column: u },
                          { na: t, column: w }
                        )?.sb()
                      : void 0)
                    ? n.width
                    : B;
                  u = n ? n.height : C;
                  q &&
                    ((q.style.width = `${p * l}px`),
                    (q.style.height = `${u * l}px`));
                  r &&
                    ((r.style.width = `${p * l}px`),
                    (r.style.height = `${u * l}px`));
                  m = m.direction === "rtl";
                  m = n ? n.left * l * (m ? 1 : -1) : 0;
                  q = n ? -n.top * l : 0;
                  k && (k.style.transform = `translate(${m}px, ${q}px)`);
                }),
                d = this.props.sheet;
              var e = this.props.bca;
              const f = this.props.dB,
                g = this.props.eB,
                h = f || g ? e?.(d, f, g) : void 0;
              e = X3(() => {
                const k = this.pNa.current;
                if (k != null) {
                  var l = f || g ? "sticky" : "relative",
                    m = g ? "0px" : "unset",
                    n = f ? "0px" : "unset",
                    p = f ? "0px" : "unset",
                    q = d.direction === "rtl";
                  if (h == null)
                    (k.style.position = l),
                      (k.style.top = m),
                      (k.style.left = q ? "unset" : n),
                      (k.style.right = q ? p : "unset");
                  else {
                    const r = h.get();
                    k.style.position = r.position ?? l;
                    k.style.top = r.top ?? m;
                    k.style.left = q ? "unset" : r.left ?? n;
                    k.style.right = q ? r.right ?? p : "unset";
                    k.style.transform = r.transform ?? "unset";
                  }
                }
              });
              __c.kc(this, [c, e]);
            }
            get bounds() {
              var c = this.props.sheet,
                d = this.props.qb,
                e = this.props.range;
              const f = d.layout.lk.Bi(c);
              c = d.layout.lk.oi(c);
              if (c.empty || f.empty)
                return { Uc: void 0, ue: void 0, Fc: void 0, Hd: void 0 };
              d = e.Uc;
              const g = e.ue,
                h = e.Fc;
              e = e.Hd;
              const k = c.first(),
                l = f.first(),
                m = c.last(),
                n = f.last();
              return {
                Uc: d ? (c.has(d) ? d : void 0) : k,
                ue: g ? (c.has(g) ? g : void 0) : m,
                Fc: h ? (f.has(h) ? h : void 0) : l,
                Hd: e ? (f.has(e) ? e : void 0) : n,
              };
            }
            constructor(...c) {
              super(...c);
              this.pNa = (n4.G(this), fx());
              this.Kdb = fx();
              this.Ldb = fx();
              this.j1 = new bNc();
              this.Z0b = Y3(
                () =>
                  [...this.a_.get().keys()].sort((d, e) =>
                    this.props.qb.layout.Rh.Bi(this.props.sheet).Ne(d, e)
                  ),
                { equals: __c.on() }
              );
              this.X0b = Y3(
                () =>
                  [...this.Gia.get().keys()].sort((d, e) =>
                    this.props.qb.layout.Rh.oi(this.props.sheet).Ne(d, e)
                  ),
                { equals: __c.on() }
              );
              this.uya = R3(() =>
                N3(this.props.yrb, {
                  a_: this.Z0b,
                  Y0b: this.X0b,
                  uEb: this.j1.Sba,
                  range: this.props.range,
                })
              );
              this.a_ = Y3(
                () => {
                  const d = this.props.sheet;
                  var e = this.props.ha;
                  const f = this.props.qb;
                  var g = this.WQa?.get();
                  if (g && (g.height <= 0 || g.width <= 0)) return new Map();
                  const h = this.bounds;
                  e = e.get();
                  var k = 50 * e,
                    l =
                      !g && h.Fc && h.Uc && h.Hd && h.ue
                        ? aD(
                            f.mb,
                            d,
                            { na: h.Fc, column: h.Uc },
                            { na: h.Hd, column: h.ue }
                          )?.sb()
                        : void 0;
                  const m = g ? g.ra.y - k : l?.top ?? 0;
                  g = g ? g.br.y + k : (l?.top ?? 0) + (l?.height ?? 0);
                  k = new Map();
                  l = f.layout.lk.Bi(d);
                  for (
                    let n = h.Fc;
                    n != null && h.Hd != null && l.Ne(n, h.Hd) <= 0;
                    n = l.next(n)
                  ) {
                    const p = f.mb.qa(d, n);
                    if (p != null && !(p + n.height < m)) {
                      if (p > g) break;
                      k.set(n, p * e);
                    }
                  }
                  return k;
                },
                { equals: ULc.shallow }
              );
              this.Gia = Y3(
                () => {
                  const d = this.props.sheet;
                  var e = this.props.ha;
                  const f = this.props.qb;
                  var g = this.WQa?.get();
                  if (g && (g.height <= 0 || g.width <= 0)) return new Map();
                  const h = this.bounds;
                  e = e.get();
                  var k = 50 * e,
                    l =
                      !g && h.Fc && h.Uc && h.Hd && h.ue
                        ? aD(
                            f.mb,
                            d,
                            { na: h.Fc, column: h.Uc },
                            { na: h.Hd, column: h.ue }
                          )?.sb()
                        : void 0;
                  const m = g ? g.ra.x - k : l?.left ?? 0;
                  g = g ? g.br.x + k : (l?.left ?? 0) + (l?.width ?? 0);
                  k = new Map();
                  l = f.layout.lk.oi(d);
                  for (
                    let n = h.Uc;
                    n != null && h.ue != null && l.Ne(n, h.ue) <= 0;
                    n = l.next(n)
                  ) {
                    const p = f.mb.ya(d, n);
                    if (p != null && !(p + n.width < m)) {
                      if (p > g) break;
                      k.set(n, p * e);
                    }
                  }
                  return k;
                },
                { equals: ULc.shallow }
              );
            }
          }
          ({
            c: [n4, UMc],
          } = k4(b, [], [tc], VMc));
        })(),
        aNc)();
        var bNc = class {
            constructor() {
              this.cells = new SMc();
              this.xOa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = e4.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.Sba = (a, b) => {
                let c = this.cells.get([a, b]);
                c == null &&
                  ((c = e4.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], c));
                return c.get()?.ICa;
              };
            }
          },
          o4,
          cNc = class extends j4 {
            constructor() {
              super(o4);
              WMc();
            }
          };
        new ((() => {
          const a = (XMc = b4);
          class b extends a {
            static G(c) {
              L(c, { US: e4.shallow, Lr: Y3, SXa: f4, Vla: f4.bound, AZa: Y3 });
            }
            get Lr() {
              const c = this.props.et?.get();
              if (c != null && c.length !== 0) return new __c.wy(c);
            }
            render() {
              return O3("div", {
                onMouseDown: this.props.zx?.onMouseDown,
                onTouchStart: this.props.zx?.onTouchStart,
                ref: __c.Qs(this.Zd, this.Lr?.Vk),
                children: [
                  N3("div", { ref: this.IBa, className: "_5YlOqQ" }),
                  N3("div", { ref: this.MBa, className: "_XCmKw" }),
                  this.US.map((c) => c.dRb),
                ],
              });
            }
            componentDidMount() {
              const c = Z3(
                  () => [
                    this.props.sheet,
                    this.props.Gia.get(),
                    this.props.a_.get(),
                    this.AZa,
                  ],
                  ([f, g, h, k], l) => {
                    [l] = l || [];
                    f !== l && this.ewb();
                    this.SXa(g, h, k);
                  },
                  { fireImmediately: !0 }
                ),
                d = X3(() => {
                  var f = this.props,
                    g = f.ha;
                  f = f.Ci;
                  const h = this.Zd.current;
                  if (h) {
                    g = g ? g.get() : 1;
                    const { width: k, height: l } = f.get();
                    h.style.width = `${k * g}px`;
                    h.style.height = `${l * g}px`;
                  }
                }),
                e = this.US.map((f) => ILc(f));
              __c.kc(this, [d, c, ...e]);
            }
            ewb() {
              const c = y(this.IBa.current),
                d = y(this.MBa.current);
              c.innerHTML = "";
              d.innerHTML = "";
              this.bUa.length = 0;
              this.US.length = 0;
            }
            SXa(c, d, e) {
              const f = y(this.IBa.current),
                g = y(this.MBa.current),
                h = new Map(d),
                k = new Map();
              e.forEach(([p, q], { ya: r, qa: t }) => {
                h.has(p) || h.set(p, t);
                t = k.get(p);
                t || ((t = new Map()), k.set(p, t));
                t.set(q, r);
              });
              e = [];
              const l = new Map();
              for (var m of this.bUa) h.has(m.na) ? l.set(m.na, m) : e.push(m);
              for (const [p, q] of h) {
                m = l.get(p) || e.pop();
                m ||
                  ((m = new dNc(this.Vla, p)),
                  f.appendChild(m.$ka),
                  g.appendChild(m.bla),
                  this.bUa.push(m));
                var n = void 0;
                if (d.has(p))
                  if ((n = k.get(p)) && n.size > 0) {
                    const r = new Map(c);
                    for (const [t, u] of n) r.has(t) || r.set(t, u);
                    n = r;
                  } else n = c;
                else n = k.get(p) ?? new Map();
                m.update(q, p, n);
              }
              for (const p of e) p.hide();
            }
            Vla(c, d) {
              const e = this.props.I$,
                f = this.props.qb,
                g = this.props.sheet,
                h = this.props.container,
                k = this.props.j1,
                l = this.props.jx;
              c = new eNc(
                this.props.uJ,
                this.props.Yj,
                e(c, d),
                f,
                g,
                c,
                d,
                h,
                k.xOa,
                this.Eoa,
                this.Doa,
                l
              );
              __c.kc(this, ILc(c));
              this.US.push(c);
              return c;
            }
            get AZa() {
              const c = this.props.sheet,
                d = this.props.qb;
              var e = this.props.bounds,
                f = this.props.jx,
                g = e.Uc,
                h = e.ue,
                k = e.Fc,
                l = e.Hd;
              e = new SMc();
              if (!(g && h && k && l)) return e;
              h = aD(d.mb, c, { na: k, column: g }, { na: l, column: h });
              if (!h) return e;
              g = h.ra.x;
              h = h.br.x;
              f = JLc(f);
              for (const { na: n, col: p, I: q } of f) {
                var m = __c.bD(d.mb, c, p, n);
                if (!m) continue;
                f = m.ra.x;
                k = m.br.x;
                l = m.ra.y;
                m = this.Kwb({
                  sheet: c,
                  na: n,
                  col: p,
                  wvb: f,
                  vvb: k,
                  Avb: m.width,
                  I: q,
                });
                m = m.start < h && m.end > g;
                (k <= g || f >= h) && m && e.set([n, p], { ya: f, qa: l });
              }
              return e;
            }
            Kwb({ sheet: c, na: d, col: e, wvb: f, vvb: g, Avb: h, I: k }) {
              c = c.layout.attrs.get(
                __c.If({ textAlign: void 0 }),
                d,
                e
              )?.textAlign;
              switch (c) {
                case "end":
                  return { start: g - k, end: g };
                case "center":
                  return (f += h / 2), { start: f - k / 2, end: f + k / 2 };
                case void 0:
                case "auto":
                case "justify":
                case "start":
                  return { start: f, end: f + k };
                default:
                  throw new z(c);
              }
            }
            constructor(...c) {
              super(...c);
              this.Zd = (o4.G(this), fx());
              this.IBa = fx();
              this.MBa = fx();
              this.bUa = [];
              this.US = [];
              this.Eoa = h4((d) => {
                const e = this.props.a_.get();
                return d === "first"
                  ? e.keys().next().value
                  : [...e.keys()].pop();
              });
              this.Doa = h4((d) => {
                const e = this.props.Gia.get();
                return d === "first"
                  ? e.keys().next().value
                  : [...e.keys()].pop();
              });
            }
          }
          ({
            c: [o4, WMc],
          } = k4(b, [], [tc], XMc));
        })(),
        cNc)();
        var dNc = class {
            static G(a) {
              L(a, { update: f4 });
            }
            update(a, b, c) {
              [this.$ka, this.bla].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.na = b;
              for (const [d] of c)
                (c = this.US.get(d)),
                  c ||
                    ((c = this.Vla(d, b)),
                    this.US.set(d, c),
                    this.$ka.appendChild(c.Zka),
                    this.bla.appendChild(c.tU)),
                  c.update(b);
            }
            hide() {
              [this.$ka, this.bla].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.Vla = a;
              this.na = b;
              this.$ka = (dNc.G(this), document.createElement("div"));
              this.bla = document.createElement("div");
              this.US = new Map();
            }
          },
          eNc = class {
            static G(a) {
              L(a, {
                Lla: e4.ref,
                na: e4.ref,
                update: f4,
                DA: Y3,
                attrs: Y3.struct,
                NJa: Y3,
                aK: Y3,
                renderer: Y3,
                ICa: Y3.struct,
                gdb: Y3,
              });
            }
            update(a) {
              a !== this.na &&
                ((this.na = a),
                (this.rC.na = a),
                this.HEa && this.HEa(),
                (this.HEa = this.xOa(this.na, this.col, this)));
            }
            get dRb() {
              return this.Lla;
            }
            get DA() {
              const a = this.sheet.layout.cells.get(this.na, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.rC.attrs;
              return {
                Li: a?.Li,
                textAlign: a?.textAlign,
                direction: a?.direction,
                link: a?.link,
                fontSize: a?.fontSize,
                color: a?.color,
                zG: a?.zG,
              };
            }
            get NJa() {
              var a = this.rC.span;
              if (!a) return !1;
              if (a.Fc === a.Hd && a.Uc === a.ue) return !0;
              const b = this.Eoa("first"),
                c = this.Eoa("last"),
                d = this.Doa("first"),
                e = this.Doa("last");
              if (!(b && c && d && e)) return !1;
              const f = this.qb.layout.lk.Bi(this.sheet),
                g = this.qb.layout.lk.oi(this.sheet),
                h = this.qb.layout.Rh.Bi(this.sheet),
                k = this.qb.layout.Rh.oi(this.sheet),
                l = L3(a.Fc, a.Hd, f);
              a = L3(a.Uc, a.ue, g);
              let m;
              for (const p of l)
                if (h.has(p) && f.Ne(p, b) >= 0 && f.Ne(p, c) <= 0) {
                  m = p;
                  break;
                }
              let n;
              for (const p of a)
                if (k.has(p) && g.Ne(p, d) >= 0 && g.Ne(p, e) <= 0) {
                  n = p;
                  break;
                }
              return m === this.na && n === this.col;
            }
            get aK() {
              const a = this.sheet,
                b = this.na,
                c = this.col;
              if (!this.container)
                return {
                  type: void 0,
                  container: { config: a },
                  na: b,
                  column: c,
                };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.aW(c, b);
                case "sheet-item":
                  return this.container.aW(c, b);
                case "sheet-element":
                  return this.container.aW(c, b);
                default:
                  throw new z(this.container);
              }
            }
            get renderer() {
              const a = this.DA;
              if (a && this.NJa && (a.content.ref || a.Pa.ref))
                return this.uJ({
                  context: { container: this.aK, attrs: this.attrs },
                  $w: this.fMa,
                  Yj: this.Yj,
                });
            }
            get ICa() {
              this.C_a.reportObserved();
              var a = WLc(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.vfa : this.fK),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            get gdb() {
              var a = this.ICa;
              if (
                a &&
                this.rC.attrs?.Li === "overflow" &&
                ((a = a.width), !(a <= this.col.width))
              )
                return a;
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
              this.uJ = a;
              this.rC = c;
              this.qb = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.xOa = k;
              this.Eoa = l;
              this.Doa = m;
              this.jx = n;
              this.Zka = (eNc.G(this), document.createElement("div"));
              this.tU = document.createElement("div");
              this.FO = document.createElement("div");
              this.fK = document.createElement("div");
              this.vfa = document.createElement("div");
              this.C_a = VLc("content size atom");
              this.fMa = f4(() => this.C_a.reportChanged());
              this.na = g;
              this.Zka.className = "_2JFriw";
              this.tU.className = "imy9ug";
              this.FO.className = P3("KDr0Vw", {
                _0yZ6Qg: this.DA?.content.ref?.type !== "text3",
                qhF5uA:
                  this.DA?.content.ref?.type !== "text3" &&
                  this.DA?.content.ref?.type !== "text2",
              });
              this.fK.className = "_30B9pw";
              this.FO.appendChild(this.fK);
              this.tU.appendChild(this.FO);
              this.vfa.className = "G7zH2w";
              this.HEa = k(this.na, this.col, this);
              this.Yj = (p) => N3(b, { ...p, $w: this.fMa });
            }
          },
          ZMc = class {
            constructor() {
              this.bfa = new SMc();
              this.TBa = VLc("overflowing-cells-registry");
              this.uSb = f4((a, b, c) => {
                let d = this.bfa.get([a, b]);
                d == null &&
                  ((d = e4.box(void 0, { deep: !1 })), this.bfa.set([a, b], d));
                d.set(c);
                this.TBa.reportChanged();
                const e = d;
                return f4(() => {
                  const f = this.bfa.get([a, b]);
                  f === e &&
                    (f.set(void 0),
                    this.bfa.delete([a, b]),
                    this.TBa.reportChanged());
                });
              });
            }
          };
        var fNc,
          gNc,
          $3,
          hNc = class extends j4 {
            constructor() {
              super($3);
              fNc();
            }
          };
        new ((() => {
          const a = (gNc = b4);
          class b extends a {
            static G(c) {
              L(c, { foa: Y3 });
            }
            render() {
              const c = this.props.sheet,
                d = this.props.container,
                e = this.props.Ci,
                f = this.props.qb,
                g = this.props.et,
                h = this.props.zx,
                k = this.props.bca,
                l = this.props.uJ,
                m = this.props.Sg,
                n = this.props.Yj,
                p = this.props.viewport,
                q = this.props.WN;
              var r = this.props.Vnb;
              const t = this.props.Zba,
                u = this.props.Bx,
                w = this.props.r3,
                A = c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                B = f.layout.Rh.Bi(c);
              if (!f.layout.Rh.oi(c).empty && !B.empty)
                return (
                  (r = r?.get()),
                  N3("div", {
                    className: P3("SNkrHw", A, { sEBkig: r, Nby46g: !r }),
                    ...m,
                    children: N3(YMc, {
                      uJ: l,
                      Yj: n,
                      yrb: this.uya,
                      I$: this.I$,
                      qb: f,
                      sheet: c,
                      container: d,
                      Ci: e,
                      et: g,
                      zx: h,
                      bca: k,
                      ha: this.ha,
                      viewport: p,
                      WN: q,
                      foa: this.foa,
                      Zba: t,
                      Bx: u,
                      r3: w,
                    }),
                  })
                );
            }
            get foa() {
              var c = this.props.sheet,
                d = this.props.qb;
              const e = {},
                f = d.layout.lk.Dba(c),
                g = d.layout.lk.Cba(c);
              var h = d.layout.lk.Bi(c),
                k = d.layout.lk.oi(c);
              c = h.first();
              d = h.last();
              const l = k.first(),
                m = k.last();
              if (c != null && d != null && l != null && m != null)
                return (
                  (k = g ? k.next(g) : l),
                  (h = f ? h.next(f) : c),
                  f && g && (e.uYa = { range: { Uc: l, Fc: c, ue: g, Hd: f } }),
                  f && k && (e.fob = { range: { Uc: k, Fc: c, ue: m, Hd: f } }),
                  g && h && (e.p6a = { range: { Uc: l, Fc: h, ue: g, Hd: d } }),
                  h && k && (e.Pmb = { range: { Uc: k, Fc: h, ue: m, Hd: d } }),
                  e
                );
            }
            get ha() {
              return this.props.ha ? this.props.ha : Y3(() => 1);
            }
            constructor(...c) {
              super(...c);
              this.uya =
                ($3.G(this),
                R3((d) => {
                  const {
                    sheet: e,
                    Ci: f,
                    qb: g,
                    fJa: h,
                    ha: k,
                    Bka: l = "hidden",
                  } = this.props;
                  return N3(l4, {
                    sheet: e,
                    qb: g,
                    range: d.range,
                    Ci: f,
                    ha: k,
                    children: N3(QMc, {
                      ...d,
                      sheet: e,
                      qb: g,
                      ha: this.ha,
                      fJa: h,
                      overflow: l,
                      Ci: f,
                    }),
                  });
                }));
              this.I$ = (d, e) =>
                new __c.nSa(
                  this.props.an,
                  this.props.qb,
                  this.props.Bx,
                  this.props.sheet,
                  d,
                  e,
                  this.ha,
                  this.Uy,
                  this.Xy
                );
              this.Uy = (d, e) => this.props.Uy?.(this.props.sheet, d, e);
              this.Xy = (d, e) => this.props.Xy?.(this.props.sheet, d, e);
            }
          }
          ({
            c: [$3, fNc],
          } = k4(b, [], [tc], gNc));
        })(),
        hNc)();
        __c.zSa = {
          VHb: function (a) {
            const b = a.Cw,
              c = a.EV,
              d = a.Je,
              e = a.Pq,
              f = a.an,
              g = a.qb,
              h = a.Bx,
              k = a.w8;
            lLc({
              Nf: a.Nf,
              embeds: a.embeds,
              CF: a.CF,
              qb: g,
              tg: a.tg,
              PXb: a.DY,
              Qr: a.Qr,
              rb: a.rb,
            });
            const l = LLc({ uJ: k, qb: g, an: f, Bx: h });
            b.Qya = FLc({ ju: l, qb: g });
            c.vya = uLc({ ju: l });
            ({ Crb: a } = DLc({ ju: l, lf: e(), hjb: new FMc(), qb: g }));
            d.cq.Pya = a;
            const { xpb: m, ypb: n, wpb: p } = tLc({ qb: g });
            return {
              ZVa: R3((q) =>
                N3($Lc, {
                  ...q,
                  container: void 0,
                  ju: l,
                  Brb: m,
                  Drb: n,
                  zrb: p,
                  Yj: aMc,
                })
              ),
            };
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/b06cb19fbd451522.js.map
