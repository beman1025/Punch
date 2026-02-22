(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [27560],
  {
    /***/ 403505: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(734120);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var G4 = __c.G4;
        var R4 = __c.R4;
        var z = __c.z;
        var LXc = function (a, b) {
            const c = a.gTa,
              d = a.IQ;
            if (d && b.type === "RESOLVED") return __c.Oq(a, b, () => d.Dn(b));
            if (c && b.type === "UNRESOLVED")
              return __c.Oq(a, b, () => c.Dn(b));
            __c.Mq(a, b);
            return Promise.reject(Error());
          },
          MXc = async function (a, b) {
            const c = (0, __c.Bc)()();
            try {
              const d = b
                .map(__c.Iq)
                .filter((e) => !a.contains(e))
                .map(async (e) => {
                  const f = (0, __c.Bc)()();
                  try {
                    const g = f.r(await f.s(LXc(a.Hk, e)));
                    g && f.r(await f.s(__c.Tq(a, e, g)));
                  } finally {
                    f.s();
                  }
                });
              c.r(await c.s(Promise.all(d)));
            } finally {
              c.s();
            }
          },
          NXc = function (a, ...b) {
            return __c.C4(a, __c.T4({ type: void 0 }, ...b));
          },
          PXc = function (a) {
            if (a.image.ref?.media.type === "RESOLVED")
              return `canva://${a.image.ref.media.id}/${a.image.ref.media.version}`;
            if (a.color) return a.color;
            if (a.Ra.ref) {
              a: switch (((a = a.Ra.ref), a.type)) {
                case "linear":
                  a = `linear-gradient(${a.rotation}deg, ${a.Te.map(OXc).join(
                    ", "
                  )})`;
                  break a;
                case "radial":
                  a = `radial-gradient(${a.Te.map(OXc).join(", ")})`;
                  break a;
                default:
                  throw new z(a);
              }
              return a;
            }
            if (!a.color && !a.Ra.ref) return "transparent";
          },
          OXc = function (a) {
            return __c.Ls(__c.Fs(__c.ys(a.color), 1 - a.wa));
          },
          SXc = function (a, b, c) {
            const d = new Map();
            return QXc(
              () => {
                const e = a.yj(b.config).filter(({ key: f, snapshot: g }) => {
                  const h = d.get(f);
                  d.set(f, g);
                  return new (class extends __c.PWc {
                    $S(k, l) {
                      return l || k !== h?.textContent;
                    }
                    zN(k, l) {
                      return l || k !== h?.background;
                    }
                    AN(k, l) {
                      return l || k !== h?.color;
                    }
                    xob(k, l) {
                      return l || k !== h?.fontFamily;
                    }
                    Aob(k, l) {
                      return l || k !== h?.fontWeight;
                    }
                    zob(k, l) {
                      return l || k !== h?.fontStyle;
                    }
                    yob(k, l) {
                      return l || k !== h?.fontSize;
                    }
                    CN(k, l) {
                      return l || k !== h?.Or;
                    }
                    XS(k, l) {
                      return l || k !== h?.Ja;
                    }
                  })().map(g, !1);
                });
                return Promise.all(
                  e.map(async ({ key: f, snapshot: g }) => {
                    const h = RXc()();
                    try {
                      return [
                        f,
                        h.r(
                          await h.s(
                            __c.CRc(
                              g,
                              { Ba: a.Ba, oc: a },
                              f === "background" ? 7 : 6
                            )
                          )
                        ),
                      ];
                    } finally {
                      h.s();
                    }
                  })
                );
              },
              async (e) => {
                const f = RXc()();
                try {
                  try {
                    f.r(
                      await f.s(
                        c.G6(
                          new __c.DWc({ config: new Map(f.r(await f.s(e))) })
                        )
                      )
                    );
                  } catch (g) {
                    f.r(), a.J.Xb(g);
                  }
                } finally {
                  f.s();
                }
              },
              { fireImmediately: !0 }
            );
          },
          TXc = function ({ ref: a, details: b }) {
            switch (b.type) {
              case 1:
                return new __c.ar({
                  id: a.id,
                  brand: b.Jsa?.brand,
                  version: a.version,
                  Ln: b.Ln,
                  files: b.Xja,
                  mG: b.mG,
                  Qw: b.Qw,
                });
              case 2:
                return new __c.br({
                  id: a.id,
                  brand: b.Jsa?.brand,
                  version: a.version,
                  Ln: b.Ln,
                  files: b.Xja,
                  JF: b.metadata,
                  mG: b.mG,
                  Qw: b.Qw,
                });
              default:
                throw new z(b.type);
            }
          },
          WXc = function (a) {
            const b = UXc(a);
            VXc(() => {
              if (b.current === !0 && a === !1)
                try {
                  document.dispatchEvent(
                    new PointerEvent("pointerup", {
                      bubbles: !0,
                      cancelable: !0,
                      view: window,
                      pointerId: 1,
                      pointerType: "mouse",
                    })
                  ),
                    document.dispatchEvent(
                      new MouseEvent("mouseup", {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                      })
                    );
                } catch (c) {
                  throw Error(
                    `Failed to dispatch pointer release events for codelet iframe: ${c}`
                  );
                }
              b.current = a;
            }, [a]);
          },
          XXc = __webpack_require__(186901),
          QXc = XXc.mJ,
          YXc = XXc.sH,
          ZXc = XXc.z7;
        var RXc = __webpack_require__(75402)._;
        var $Xc = __webpack_require__(536618).Aj;
        var aYc = __webpack_require__(296713),
          bYc = aYc.Fragment,
          E6 = aYc.jsx,
          cYc = aYc.jsxs;
        var dYc = __webpack_require__(270531).PA;
        var F6 = __webpack_require__(978109),
          VXc = F6.useEffect,
          eYc = F6.useMemo,
          UXc = F6.useRef,
          fYc = F6.useState;
        var gYc = __c.P4(1, "EmbedRef"),
          hYc,
          iYc = R4({
            textContent: __c.L4(1),
            background: __c.B4(5, __c.O4("Fill")),
            color: __c.B4(6, __c.O4("Fill")),
            fontFamily: NXc(
              4,
              R4({ type: G4(1, 1), fontFamily: __c.H4(2) }),
              R4({ type: G4(1, 2), fontFamily: __c.P4(2, "FontRef") })
            ),
            fontWeight: __c.N4(
              7,
              "normal",
              "thin",
              "extralight",
              "light",
              "medium",
              "semibold",
              "bold",
              "ultrabold",
              "heavy"
            ),
            fontStyle: __c.N4(8, "normal", "italic"),
            fontSize: __c.M4(11),
            Or: NXc(
              9,
              R4({ type: G4(1, 1), src: __c.H4(2) }),
              R4({ type: G4(1, 2), media: __c.P4(2, "MediaRef") }),
              R4({ type: G4(1, 3), fill: __c.P4(2, "Fill") })
            ),
            Ja: __c.L4(10),
          });
        hYc = __c.F4.ref(2, __c.Q4(iYc));
        var jYc = __c.y4({ UZa: gYc, config: hYc }),
          kYc = __c.U4({ C: __c.y4({ Dy: __c.C4(1, R4(jYc)) }) });
        var lYc = class extends __c.xRc {
          $S(a, b) {
            return { ...b, textContent: a };
          }
          zN(a, b) {
            return { ...b, background: a };
          }
          AN(a, b) {
            return { ...b, color: a };
          }
          X7({ fontFamily: a, fontWeight: b, fontStyle: c, fontSize: d }, e) {
            if (a != null)
              a: switch (a.type) {
                case 1:
                  a = {
                    type: 2,
                    fontFamily: {
                      type: "font",
                      id: a.fontFamily.id,
                      version: a.fontFamily.version,
                    },
                  };
                  break a;
                case 2:
                  a = { type: 1, fontFamily: a.fontFamily };
                  break a;
                default:
                  throw new z(a);
              }
            else a = void 0;
            return {
              ...e,
              fontFamily: a,
              fontWeight: b,
              fontStyle: c,
              fontSize: d,
            };
          }
          CN(a, b) {
            if (a)
              a: switch (a.type) {
                case 1:
                  a = {
                    type: 3,
                    fill: {
                      ...__c.BE,
                      image: {
                        ...__c.MJb,
                        nb: void 0,
                        media: {
                          type: "RESOLVED",
                          id: a.media.id,
                          version: a.media.version,
                        },
                      },
                    },
                  };
                  break a;
                case 2:
                  a = { type: 1, src: a.media };
                  break a;
                default:
                  throw new z(a);
              }
            else a = void 0;
            return { ...b, Or: a };
          }
          XS(a, b) {
            return { ...b, Ja: a };
          }
        };
        var mYc = class {
            static G(a) {
              __c.L(a, { TEa: YXc.ref });
            }
            constructor() {
              this.TEa = (mYc.G(this), void 0);
            }
          },
          nYc = __c.V4()(() => ({
            f7b(a) {
              var b;
              if ((b = a)) {
                b = { type: "embed", id: a.A6b, version: 0 };
                a = a.config;
                const c = new Map(),
                  d = new lYc();
                for (const [e, f] of a.entries())
                  c.set(
                    e,
                    d.map(__c.tRc(f), {
                      textContent: void 0,
                      background: void 0,
                      color: void 0,
                      fontFamily: void 0,
                      fontWeight: void 0,
                      fontStyle: void 0,
                      fontSize: void 0,
                      Or: void 0,
                      Ja: void 0,
                    })
                  );
                b = { UZa: b, config: c };
              }
              return {
                data: { C: { Dy: b }, document: {} },
                S: { width: 1366, height: 768 },
              };
            },
          })),
          oYc = class {
            static G(a) {
              __c.L(a, { wp: YXc.ref, mVa: YXc.ref });
            }
            constructor() {
              this.wp = (oYc.G(this), void 0);
            }
          };
        var pYc = class {},
          qYc = class extends pYc {
            map(a, b) {
              b = this.$S(a.textContent, b);
              b = this.zN(a.background, b);
              b = this.AN(a.color, b);
              b = this.X7(a, b);
              b = this.CN(a.Or, b);
              return (b = this.XS(a.Ja, b));
            }
          },
          rYc = class extends qYc {
            $S(a, b) {
              return { ...b, textContent: a };
            }
            zN(a, b) {
              return { ...b, background: a != null ? PXc(a) : void 0 };
            }
            AN(a, b) {
              return { ...b, color: a != null ? PXc(a) : void 0 };
            }
            X7({ fontFamily: a, fontWeight: b, fontStyle: c, fontSize: d }, e) {
              b = {
                ...e,
                fontWeight: b != null ? __c.Fp(b)?.toString() : void 0,
                fontStyle: c,
                fontSize: d,
              };
              switch (a.ref?.type) {
                case void 0:
                  return b;
                case 1:
                  return { ...b, fontFamily: a.ref.fontFamily };
                case 2:
                  return { ...b, fontFamily: __c.up(a.ref.fontFamily) };
                default:
                  throw new z(a.ref);
              }
            }
            CN(a, b) {
              a: {
                switch (a.ref?.type) {
                  case void 0:
                    break;
                  case 1:
                    a = a.ref.src;
                    break a;
                  case 2:
                    a = `canva://${a.ref.media.id}/${a.ref.media.version}`;
                    break a;
                  case 3:
                    a = __c.y(a.ref.fill.image.ref);
                    __c.x(a.media.type === "RESOLVED");
                    a = `canva://${a.media.id}/${a.media.version}`;
                    break a;
                  default:
                    throw new z(a.ref);
                }
                a = void 0;
              }
              return { ...b, Or: a };
            }
            XS(a, b) {
              return { ...b, Ja: a };
            }
          };
        var sYc = class {
          subscribe(a) {
            this.Ok.add(a);
            return () => {
              this.Ok.delete(a);
            };
          }
          dispose() {
            this.Jj.forEach((a) => a());
            this.Jj = [];
          }
          j3(a) {
            return this.oc.j3({
              type: "RESOLVED",
              id: a.id,
              version: a.version,
            });
          }
          HL(a) {
            a = { type: "RESOLVED", id: a.id, version: a.version };
            const b = __c.Uq(this.oc, a);
            return b == null
              ? MXc(this.oc, [a])
              : __c.Hsa(this.oc, TXc({ ref: a, details: b }));
          }
          constructor(a, b, c, d, e) {
            this.config = a;
            this.Ba = b;
            this.oc = c;
            this.$q = d;
            this.J = e;
            this.Ok = new Set();
            this.Jj = [];
            this.Pua = (f, g, h) => {
              this.dispose();
              this.Jj.push(SXc(this, f, h));
              g.Ec > 10 &&
                g.zp &&
                ZXc(
                  () => this.config.wp != null,
                  () => {
                    this.config.wp.toc(f, h);
                  }
                );
              return {
                r2a: {
                  R5a: (k) => {
                    this.config.wp?.Olc(f, k);
                    return new __c.OQc();
                  },
                  pca: (k) => {
                    if (g.nh == null) return new __c.L5();
                    this.config.wp?.Llc(f, g.nh, k);
                    return new __c.L5();
                  },
                  N5a: (k) => {
                    if (g.nh == null) return new __c.M5();
                    this.config.wp?.Klc(f, g.nh, k.rect);
                    return new __c.M5();
                  },
                  U5a: (k) => {
                    this.config.wp?.$lc(f, k.i3a, k.textContent);
                    return new __c.SQc();
                  },
                },
              };
            };
            this.Rua = () => ({
              Yfb: {
                oca: (f) => {
                  const g = {
                    height: f.body.scrollHeight,
                    width: f.body.scrollWidth,
                  };
                  this.Ok.forEach((h) => h(g));
                },
              },
            });
            this.L6 = (f) => {
              const g =
                this.$q && new __c.AWc({ baa: this.$q.id, Nd: this.$q.Nd });
              return {
                HDa: {
                  PHa: () =>
                    new __c.J5({
                      $i: f.page?.container?.id,
                      nh: f.nh,
                      Fob: g,
                      vV: f.page?.container.extension,
                    }),
                  UHa: () => new __c.K5(),
                },
              };
            };
            this.M6 = (f) => ({
              eSa: {
                QHa: () => new __c.N5({ $i: f.page?.container?.id, nh: f.nh }),
                NHa: () => new __c.O5(),
              },
            });
            this.eI = () => {
              this.dispose();
            };
            this.FVb = (f, g) =>
              g.Ec === 10
                ? !0
                : g.page.type === "controlled"
                ? !1
                : ((f = f.Dy.ref) && this.config.wp?.bqc(f)) ?? !1;
            this.yj = $Xc((f) => [...f.entries()].map(this.fZb));
            this.fZb = $Xc(([f, g]) => ({
              key: f,
              snapshot: new rYc().map(g, {
                textContent: void 0,
                backgroundColor: void 0,
                background: void 0,
                color: void 0,
                fontFamily: void 0,
                fontWeight: void 0,
                fontStyle: void 0,
                fontSize: void 0,
                Or: void 0,
                Ja: void 0,
              }),
            }));
          }
        };
        var tYc = dYc(
          ({ local: a, Dy: b, La: c, Na: d, bk: e, OC: f, Jf: g }) => {
            const h = eYc(
              () => ({
                data: () => d.L6(c),
                wp: (k) => d.Pua(b, c, k),
                zY: () => d.Rua(),
                telemetry: () => d.M6(c),
              }),
              [c, b, d]
            );
            return cYc(bYc, {
              children: [
                E6(f, {
                  Poa: h,
                  url: b.UZa.id,
                  eI: d.eI,
                  bk: e || a.TEa != null,
                }),
                E6(g.mT, { Hcc: a.TEa?.P8b != null }),
              ],
            });
          }
        );
        var uYc;
        uYc = __c.Ox()(({ LA: a, hi: b }) => {
          let { J: c } = a;
          const d = b.OC,
            e = b.Ba,
            f = b.oc,
            g = b.$q,
            h = new oYc();
          c = c.Jd("codelet2Widget");
          return {
            ...__c.eW,
            metadata: { type: "codelet2", name: __c.K("lr1RzQ") },
            NG: () => new mYc(),
            C: __c.Nx(
              dYc(({ data: { C: k, local: l }, La: m, bS: n, Jf: p }) => {
                const [q] = fYc(() => new sYc(h, __c.y(e), __c.y(f), g, c));
                VXc(() => {
                  n?.(q);
                }, [q, n]);
                VXc(() => {
                  const t = [];
                  t.push(
                    ZXc(
                      () => h.wp != null,
                      () => {
                        m.Ec > 10 && m.zp && t.push(h.wp.voc(k));
                      }
                    )
                  );
                  return () => {
                    t.forEach((u) => u());
                  };
                }, [k, m]);
                const r = q.FVb(k, m);
                WXc(r);
                return k.Dy.ref != null
                  ? E6(tYc, {
                      La: m,
                      C: k,
                      local: l,
                      Dy: k.Dy.ref,
                      Na: q,
                      bk: r,
                      OC: d,
                      Jf: p,
                    })
                  : h.mVa != null
                  ? E6(h.mVa, {})
                  : null;
              })
            ),
            exports: { configuration: h },
          };
        });
        __c.LRc = { vf: nYc, yn: uYc, wf: kYc };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/f74818dace11344f.js.map
