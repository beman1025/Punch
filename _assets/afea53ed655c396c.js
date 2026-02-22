(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [98101],
  {
    /***/ 998480: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var iNc = __webpack_require__(296713),
          p4 = iNc.jsx,
          jNc = iNc.jsxs;
        var kNc = __webpack_require__(270531).PA;
        __webpack_require__(978109);
        var lNc = class {
          name(a) {
            return a.Ja?.text;
          }
          role() {
            return "table";
          }
          constructor() {
            this.createNode = (a, b) => ({
              ...a,
              type: 10,
              name: this.name(b.C),
              role: this.role(),
            });
          }
        };
        var pNc = kNc(({ element: a, Zj: b, ovb: c, Bh: d }) => {
            const e = b.id,
              f = b.name,
              g = b.role;
            var h = b.description;
            b = __c.zz(Object.values(b.state), Object.values(h));
            b = __c.yz(b);
            const k = a.C,
              l = k.layout.rows.toArray();
            a = k.layout.direction === 2 ? "rtl" : "ltr";
            h = __c.No(k);
            const m = __c.Mo(k),
              n = __c.Oo(k);
            return jNc("table", {
              id: e,
              role: g,
              dir: a,
              className: "_pFsfA",
              ...b,
              children: [
                f && p4("caption", { children: f }),
                p4(mNc, {}),
                p4("tbody", {
                  children: h.map((p, q) =>
                    p4(
                      "tr",
                      {
                        children: p.map((r, t) =>
                          p4(
                            nNc,
                            {
                              table: k,
                              Ug: r?.Ug,
                              zvb: m,
                              Asb: c,
                              rowIndex: q,
                              Bwb: t,
                              children: (u, w, A) =>
                                p4(oNc, {
                                  element: u,
                                  rowSpan: w.rows.length,
                                  colSpan: w.columns.length,
                                  Zj: A,
                                  Bh: d,
                                }),
                            },
                            n(q, t)
                          )
                        ),
                      },
                      k.layout.rows.wq(l[q])
                    )
                  ),
                }),
              ],
            });
          }),
          nNc = ({
            table: a,
            Ug: b,
            zvb: c,
            Asb: d,
            rowIndex: e,
            Bwb: f,
            children: g,
          }) => {
            c = (a = b != null && a.cells.get(b)) && c.get(a);
            b = b && d.get(b);
            e = c && c.rows[0] === e && c.columns[0] === f;
            return b && e ? g(a, c, b) : null;
          },
          oNc = kNc(({ element: a, rowSpan: b, colSpan: c, Zj: d, Bh: e }) => {
            a = a.content.text;
            const f = a.stream.isEmpty,
              g = d.id;
            d = __c.yz(d.description.color);
            return p4("td", {
              id: g,
              rowSpan: b,
              colSpan: c,
              ...d,
              children: f ? __c.K("ecweuA") : p4(e, { text: a }),
            });
          }),
          mNc = () => p4("thead", {});
        var qNc = class {
          description(a) {
            a = a.fill.color ?? a.fill.Ra.ref;
            return { color: a ? __c.Ps(this.ew, a) : void 0 };
          }
          constructor(a) {
            this.ew = a;
            this.createNode = (b, c) => {
              c = c.C;
              return {
                ...b,
                type: 11,
                role: "cell",
                name: __c.LW(c.content.text) || void 0,
                description: this.description(c),
              };
            };
          }
        };
        __c.QSa = {
          WHb: ({ rf: a, Bh: b }) => {
            const c = a.pn,
              d = a.hy;
            a = a.ew;
            c.g0a = new lNc().createNode;
            c.f0a = new qNc(a).createNode;
            d.od.ZN = (e) => p4(pNc, { ...e, Bh: b });
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/afea53ed655c396c.js.map
