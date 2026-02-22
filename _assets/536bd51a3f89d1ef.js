(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [20814],
  {
    /***/ 285983: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(734120);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var W = __c.W;
        var G = __c.G;
        var eXc = function (a, b) {
            if (!a.ok)
              throw Error(
                `Encountered an error while sending ${b} request: ${a.error}`
              );
            if (a.value == null) throw Error(`${b}: Result cannot be empty`);
            return a.value;
          },
          hXc = async function (a, b) {
            const c = (0, __c.G5)()();
            try {
              const d = c.r(
                  await c.s(a.f$.request("RENDER_ELEMENT", fXc.serialize(b)))
                ),
                e = eXc(d, "RENDER_ELEMENT");
              return gXc.fa(e);
            } finally {
              c.s();
            }
          },
          kXc = async function (a, b) {
            const c = (0, __c.G5)()();
            try {
              const d = c.r(
                  await c.s(a.f$.request("SET_CAPABILITY", iXc.serialize(b)))
                ),
                e = eXc(d, "SET_CAPABILITY");
              return jXc.fa(e);
            } finally {
              c.s();
            }
          },
          nXc = async function (a, b) {
            const c = (0, __c.G5)()();
            try {
              const d = c.r(
                  await c.s(
                    a.f$.request("SET_EDIT_PANEL_VALUE", lXc.serialize(b))
                  )
                ),
                e = eXc(d, "SET_EDIT_PANEL_VALUE");
              return mXc.fa(e);
            } finally {
              c.s();
            }
          },
          B6 = async function (a, b) {
            const c = A6()();
            try {
              const [d] = c.r(await c.s(a.K2([b])));
              return new __c.v6({ id: b.id, url: d.fonts[0].files[0].url });
            } finally {
              c.s();
            }
          },
          oXc = async function (a, b, c) {
            const d = A6()();
            try {
              const e = d.r(await d.s(B6(a, c)));
              return kXc(b, e);
            } finally {
              d.s();
            }
          },
          pXc = async function (a, b, c, d, e, f, g) {
            const h = A6()();
            try {
              try {
                const k = b.Wna.ref?.first(),
                  l = a.Ba,
                  m = h.r(
                    await h.s(
                      hXc(c, {
                        config: b.config,
                        WV:
                          l != null && k != null
                            ? h.r(await h.s(B6(l, k)))
                            : void 0,
                      })
                    )
                  );
                a.config.wp?.Xwa({ ...m, SK: m.SK?.size }, b, d, e, f, g);
              } catch (k) {
                h.r(), a.J.nJ(k);
              } finally {
                a.rQa();
              }
            } finally {
              h.s();
            }
          },
          fXc = G(
            () => ({
              config: __c.X("config", 1),
              WV: __c.F("fontEditable", 2, __c.v6),
            }),
            { Hh: 0 }
          ),
          gXc = G(
            () => ({
              config: W("config", 1),
              N5: __c.Qa("recolorables", 4, __c.w6),
              Fub: __c.Qa("borderables", 5, __c.IWc),
              GAb: __c.Qa("editPanelValues", 6, __c.JWc),
              SK: __c.F("fontSizeable", 7, __c.x6),
              WV: __c.F("fontEditable", 8, __c.v6),
            }),
            { Hh: 0 }
          ),
          iXc = __c.db(
            () => ({ type: [1, __c.w6, 2, __c.IWc, 3, __c.v6, 5, __c.x6] }),
            () => ({}),
            { Hh: 0 }
          ),
          jXc = G(() => ({ config: W("config", 1) }), { Hh: 0 }),
          lXc = G(() => ({ id: W(1), value: W(2) })),
          mXc = G(() => ({ config: W(1) })),
          C6 = __webpack_require__(186901),
          qXc = C6.h5,
          rXc = C6.mJ,
          sXc = C6.sH,
          tXc = C6.XI;
        var A6 = __webpack_require__(75402)._;
        var uXc = __webpack_require__(296713),
          D6 = uXc.jsx,
          vXc = uXc.jsxs;
        var wXc = __webpack_require__(270531).PA;
        var xXc = __webpack_require__(978109),
          yXc = xXc.useEffect,
          zXc = xXc.useMemo,
          AXc = xXc.useState;
        var BXc = class {
            static G(a) {
              __c.L(a, { nh: sXc.ref });
            }
            constructor(a) {
              this.nh = (BXc.G(this), void 0);
              this.nh = a;
            }
          },
          CXc = __c.V4()(() => ({
            g7b(a, b) {
              return {
                data: {
                  C: {
                    iCa: { type: "embed", id: a, version: 0 },
                    TZa: b,
                    config: void 0,
                    Wna: void 0,
                  },
                  document: {},
                },
                S: { width: 1366, height: 768 },
              };
            },
          }));
        var DXc = class {};
        var EXc = class {
          static G(a) {
            __c.L(a, { MW: sXc.ref, rQa: tXc });
          }
          subscribe(a) {
            this.Ok.add(a);
            return () => {
              this.Ok.delete(a);
            };
          }
          async Noa(a, b, c, d, e, f) {
            const g = A6()();
            try {
              const h = a.Wna.ref?.first(),
                k = this.Ba,
                l = a.config != null && a.config !== "" ? a.config : b.config;
              this.config.wp?.Xwa({ config: l }, a, c, d, e, f);
              let m;
              try {
                m = k != null && h != null ? g.r(await g.s(B6(k, h))) : void 0;
              } catch (n) {
                g.r(), this.J.Xb(n);
              }
              return new __c.VQc({
                config: a.config != null && a.config !== "" ? a.config : void 0,
                WV: m,
              });
            } finally {
              g.s();
            }
          }
          constructor(a, b, c, d) {
            this.config = a;
            this.Ba = b;
            this.J = c;
            this.$q = d;
            this.Ok = (EXc.G(this), new Set());
            this.MW = !1;
            this.notifyListeners = (e) => {
              this.Ok.forEach((f) => f(e));
            };
            this.Qua = (e, f) => {
              this.tp?.();
              this.tp = void 0;
              const g = (r) => kXc(f, new __c.w6(r)),
                h = this.Ba,
                k = h ? (r) => oXc(h, f, r) : void 0,
                l = (r) => nXc(f, new lXc(r)),
                m = (r) => kXc(f, new __c.x6({ size: r })),
                n = {
                  Noa: async (r) => this.Noa(e, r, g, k, m, l),
                  S5a: (r) => {
                    this.config.wp?.Xwa(
                      { ...r, SK: r.SK?.size },
                      e,
                      g,
                      k,
                      m,
                      l
                    );
                    return new __c.XQc();
                  },
                  oca: this.OFb,
                },
                p = rXc(
                  () => e.config,
                  async (r) => {
                    const t = A6()();
                    try {
                      const u = t.r(
                        await t.s(hXc(f, { config: r, WV: void 0 }))
                      );
                      u.config &&
                        u.config !== r &&
                        this.config.wp?.Xwa(
                          { ...u, SK: u.SK?.size },
                          e,
                          g,
                          k,
                          m,
                          l
                        );
                    } finally {
                      t.s();
                    }
                  }
                ),
                q = rXc(
                  () => e.Wna.ref?.first(),
                  async (r) => {
                    const t = A6()();
                    try {
                      const u = e.config,
                        w = this.Ba,
                        A = t.r(
                          await t.s(
                            hXc(f, {
                              config: u,
                              WV:
                                w != null && r != null
                                  ? t.r(await t.s(B6(w, r)))
                                  : void 0,
                            })
                          )
                        );
                      A.config &&
                        A.config !== u &&
                        this.config.wp?.Xwa(
                          { ...A, SK: A.SK?.size },
                          e,
                          g,
                          k,
                          m,
                          l
                        );
                    } finally {
                      t.s();
                    }
                  }
                );
              this.tp = () => {
                p();
                q();
              };
              pXc(this, e, f, g, k, m, l);
              return { t2a: n };
            };
            this.L6 = (e) => {
              const f =
                this.$q && new __c.AWc({ baa: this.$q.id, Nd: this.$q.Nd });
              return {
                HDa: {
                  PHa: () =>
                    new __c.J5({
                      $i: e.page?.container?.id,
                      nh: e.nh,
                      Fob: f,
                      vV: e.page?.container?.extension,
                    }),
                  UHa: () => new __c.K5(),
                },
              };
            };
            this.M6 = (e) => ({
              eSa: {
                QHa: () => new __c.N5({ $i: e.page?.container?.id, nh: e.nh }),
                NHa: () => new __c.O5(),
              },
            });
            this.rQa = () => {
              this.MW = !0;
            };
            this.eI = () => {
              this.tp?.();
            };
            this.OFb = (e) => {
              this.notifyListeners({
                height: e.body.scrollHeight,
                width: e.body.scrollWidth,
              });
            };
          }
        };
        var FXc = __c.P4(1, "EmbedRef"),
          GXc = __c.F4.val(35, __c.D4()),
          HXc = __c.L4(29),
          IXc;
        IXc = __c.C4(6, __c.F4.Sda(__c.O4("FontRef")));
        var JXc = __c.U4({
          C: __c.y4({ iCa: FXc, TZa: GXc, config: HXc, Wna: IXc }),
        });
        var KXc;
        KXc = __c.Ox()(({ hi: a, LA: b }) => {
          const c = a.OC,
            d = a.Ba,
            e = a.$q,
            f = b.J,
            g = new DXc();
          return {
            ...__c.eW,
            metadata: {
              type: "codelet",
              name: __c.K("4kcGvw"),
              tZ: (h) => h.TZa,
            },
            NG: () => new BXc(void 0),
            C: __c.Nx(
              wXc(
                ({
                  data: { C: h, local: k },
                  Jf: { $xa: l, Tqb: m },
                  La: n,
                  bS: p,
                }) => {
                  qXc(() => {
                    k.nh = n.nh;
                  });
                  const [q] = AXc(() => new EXc(g, d, f, e));
                  yXc(() => {
                    p?.(q);
                  }, [q, p]);
                  const r = zXc(
                    () => ({
                      data: () => q.L6(n),
                      element: (t) => q.Qua(h, t),
                      telemetry: () => q.M6(n),
                    }),
                    [n, h, q]
                  );
                  return vXc("div", {
                    className: "guWTXA",
                    children: [
                      D6(l, {
                        url: h.iCa.id,
                        children: ({ bk: t }) =>
                          D6(c, {
                            url: h.iCa.id,
                            bk: t,
                            Poa: r,
                            eI: q.eI,
                            Glc: q.rQa,
                          }),
                      }),
                      n.Ec > 10 &&
                        h.config != null &&
                        !q.MW &&
                        D6("div", { className: "djA3nQ", children: D6(m, {}) }),
                    ],
                  });
                }
              )
            ),
            exports: { config: g },
          };
        });
        __c.KRc = { vf: CXc, yn: KXc, wf: JXc };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/536bd51a3f89d1ef.js.map
