(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [43432],
  {
    /***/ 510547: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(734120);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var L = __c.L;
        var y = __c.y;
        var c1c = async function (a, b) {
            return a.xxa(b, async () => {
              const c = (0, __c.Bc)()();
              try {
                if (a.i2a == null)
                  throw Error("Scene document resources are not supported");
                const d = c.r(
                    await c.s(a.i2a.Dn({ id: b, version: 1 }, void 0))
                  ),
                  e = {
                    id: d.id,
                    files: { nW: d.content.url, Nt: d.sd?.url },
                    uI: d.uI,
                  };
                (0, __c.dc)(() => {
                  a.scenes.set(e.id, e);
                });
                return e;
              } finally {
                c.s();
              }
            });
          },
          h1c = function (a, b) {
            a.w9a ||
              (a.w9a = (async () => {
                const c = D7()();
                try {
                  const [d, e] = c.r(
                    await c.s(Promise.all([d1c(e1c), d1c(f1c)]))
                  );
                  return g1c(b, d, e);
                } finally {
                  c.s();
                }
              })());
            return a.w9a;
          },
          l1c = async function (a, b) {
            a = y(a.Hi.Eob);
            if (a instanceof i1c && b instanceof E7) return new F7(a, b);
            if (a instanceof j1c && b instanceof k1c) return b.load(a);
            throw Error("Invalid resource type");
          },
          o1c = async function (a, b) {
            const c = D7()();
            try {
              if (m1c) {
                const d = c.r(await c.s(d1c(b))),
                  e = y(a.Hi.Eob),
                  f = c.r(await c.s(h1c(a, e)));
                return new k1c(d, f);
              }
              return n1c
                ? new E7(b)
                : new E7(b, { environment_sdr: e1c, environment_gain: f1c });
            } finally {
              c.s();
            }
          },
          d1c = async function (a) {
            const b = D7()();
            try {
              const c = b.r(await b.s(fetch(a)));
              if (!c.ok) throw Error(`status: ${c.status} for url: ${a}`);
              return new Uint8Array(b.r(await b.s(c.arrayBuffer())));
            } finally {
              b.s();
            }
          },
          q1c = async function (a, b) {
            const c = D7()();
            try {
              const d = a.store.entries.get(b);
              if (d) return d;
              const e = p1c(a, b),
                f = { resource: { status: "loading", x9a: e } };
              a.store.entries.set(b, f);
              try {
                const { renderer: g, resource: h } = c.r(await c.s(e));
                a.store.entries.get(b) || (h instanceof E7 && h.dispose());
                G7(() => {
                  f.resource = { status: "loaded", resource: h };
                  f.renderer = g;
                });
              } catch (g) {
                c.r(), a.store.entries.delete(b);
              }
              return f;
            } finally {
              c.s();
            }
          },
          r1c = async function (a, b) {
            const c = D7()();
            try {
              const d = a.store.entries.get(b);
              if (
                d &&
                (d.resource.status === "loading" &&
                  c.r(await c.s(d.resource.x9a)),
                d.resource.status === "loaded" && d.renderer)
              )
                return Promise.resolve({
                  resource: d.resource.resource,
                  renderer: d.renderer,
                });
            } finally {
              c.s();
            }
          },
          s1c = async function (a, b) {
            const c = D7()();
            try {
              const d = c.r(await c.s(q1c(a, b)));
              if (d) {
                if (d.resource.status === "loaded" && d.renderer)
                  return Promise.resolve({
                    resource: d.resource.resource,
                    renderer: d.renderer,
                  });
                if (d.resource.status === "loading")
                  return c.r(await c.s(d.resource.x9a)), r1c(a, b);
              }
            } finally {
              c.s();
            }
          },
          p1c = async function (a, b) {
            const c = D7()();
            try {
              const d = c.r(await c.s(o1c(a.RP, b)));
              d instanceof E7 && c.r(await c.s(d.load()));
              const e = c.r(await c.s(l1c(a.RP, d)));
              e instanceof H7 &&
                e.render({
                  width: 1,
                  height: 1,
                  rotationPhi: 0,
                  rotationTheta: 0,
                  enableGrid: !0,
                });
              e instanceof F7 &&
                e.render({
                  distance: 1,
                  rotationPhi: 0,
                  rotationTheta: 0,
                  enableGrid: !0,
                });
              return { resource: d, renderer: e };
            } finally {
              c.s();
            }
          },
          t1c = function (a, b, c) {
            let d = b - 1,
              e = 0,
              f = c - 1,
              g = 0;
            for (let h = 0; h < c; h++)
              for (let k = 0; k < b; k++)
                a[3 + (h * b + k) * 4] !== 0 &&
                  ((d = Math.min(d, k)),
                  (e = Math.max(e, k)),
                  (f = Math.min(f, h)),
                  (g = Math.max(g, h)));
            a = g - f + 1;
            return { left: d, top: c - (f + a), width: e - d + 1, height: a };
          },
          u1c = async function (a, b) {
            const c = D7()();
            try {
              if (a.cache?.cGb(b)) {
                const d = c.r(await c.s(s1c(a.cache, b)));
                if (!d) return !1;
                a.store.w3 = d.resource;
                if (a.store.w3 !== d.resource) return !1;
                a.store.Fn = d.renderer;
              } else {
                const d = c.r(await c.s(o1c(a.RP, b)));
                a.store.w3 = d;
                d instanceof E7 && c.r(await c.s(d.load()));
                if (d !== a.store.w3) return !1;
                const e = c.r(await c.s(l1c(a.RP, d)));
                a.store.Fn = e;
              }
              return !0;
            } finally {
              c.s();
            }
          },
          v1c = function (a, b) {
            a.store.container = b;
            b.contains(a.Hi.canvas) || b.appendChild(a.Hi.canvas);
          },
          x1c = function (a) {
            if (a.store.Ff) {
              const b = requestAnimationFrame(w1c.wrap(() => x1c(a)));
              a.store.cka = b;
              a.render({ SM: a.store.SM });
            }
          },
          C1c = function ({ RP: a, Hi: b }) {
            const c = new y1c();
            var d = new z1c(new A1c(), a);
            return new B1c(c, a, b, d);
          },
          D1c = function (a) {
            const b = a.Ah;
            a = __c.wQ.create({
              ...__c.BE,
              image: {
                ...__c.MJb,
                media: { ...__c.lma, id: a.JE, version: 1 },
                nb: void 0,
              },
            });
            return I7(b, { fill: a });
          },
          G1c = function ({
            PC: a,
            oya: b,
            sT: c,
            uw: d,
            IIa: e,
            Ah: f,
            Tt: g,
          }) {
            switch (d) {
              case 1:
                return I7(c, {});
              case 3:
                return I7(E1c, { pE: e || "" });
              case 0:
                return I7(b, {});
              case 2:
                return I7(D1c, { Ah: f, JE: g || "" });
              case 4:
                return I7(a, {});
              case 5:
                return I7(F1c, {});
              default:
                throw new __c.z(d);
            }
          },
          K1c = function ({
            gg: a,
            Ah: b,
            Zm: c,
            Hi: d,
            cC: e,
            exports: f,
            cb: g,
            oya: h,
            sT: k,
            PC: l,
          }) {
            const m = new H1c(),
              n = new I1c(m, a, c, d, e, g, f.kXa);
            return J7(() => {
              K7(() => {
                n.initialize();
                return () => {
                  n.destroy();
                };
              }, []);
              return I7(J1c, {
                he: n.he,
                children: I7(G1c, {
                  uw: n.uw,
                  IIa: n.pE,
                  selected: n.kk,
                  Tt: n.Tt,
                  Ah: b,
                  sT: k,
                  oya: h,
                  PC: l,
                }),
              });
            });
          },
          O1c = function ({ gg: a, S: b, cC: c }) {
            const d = new L1c();
            a = new M1c(d, a, b, c);
            const e = new __c.Oac({
              onDragStart: a.M5a,
              dI: a.L5a,
              onDragEnd: a.K5a,
            });
            return ({ children: f }) =>
              I7(N1c, {
                onMouseDown: e.onMouseDown,
                onTouchStart: e.onTouchStart,
                children: f,
              });
          },
          P1c = function ({ Ah: a, PC: b, sT: c, uw: d, IIa: e, Tt: f }) {
            switch (d) {
              case 0:
                return I7(c, {});
              case 2:
                return I7(E1c, { pE: e || "" });
              case 1:
                return I7(D1c, { Ah: a, JE: f || "" });
              case 3:
                return I7(b, {});
              case 4:
                return I7(F1c, {});
              default:
                throw new __c.z(d);
            }
          },
          S1c = function ({
            gg: a,
            Zm: b,
            Hi: c,
            S: d,
            cC: e,
            Ah: f,
            PC: g,
            sT: h,
          }) {
            const k = new Q1c(),
              l = new R1c(k, a, b, c),
              m = O1c({ gg: a, S: d, cC: e });
            return J7(() => {
              K7(() => {
                l.initialize();
                return () => {
                  l.destroy();
                };
              }, []);
              return I7(m, {
                children: I7(P1c, {
                  uw: l.uw,
                  IIa: l.pE,
                  Tt: l.Tt,
                  Ah: f,
                  sT: h,
                  PC: g,
                }),
              });
            });
          },
          T1c = function ({ uw: a, Nt: b, Ah: c, PC: d, Tt: e }) {
            switch (a) {
              case 1:
                return I7(E1c, { pE: b || "" });
              case 0:
                return I7(D1c, { Ah: c, JE: e || "" });
              case 3:
                return I7(F1c, {});
              case 2:
                return I7(d, {});
              default:
                throw new __c.z(a);
            }
          },
          W1c = function ({ gg: a, Zm: b, Ah: c, lga: d, PC: e }) {
            const f = new U1c(),
              g = new V1c(f, a, b, d);
            return J7(() => {
              K7(() => {
                g.initialize();
              }, []);
              return I7(T1c, { Ah: c, uw: g.uw, Nt: g.Nt, Tt: g.Tt, PC: e });
            });
          },
          a2c = function ({
            gg: a,
            Ec: b,
            S: c,
            Ah: d,
            Zm: e,
            Hi: f,
            cC: g,
            lga: h,
            exports: k,
            cb: l,
            zp: m,
          }) {
            const n = new X1c(b, Y1c, m);
            b = Z1c({ local: a.local, S: c });
            m = $1c({ local: a.local, S: c });
            const p = () => I7("div", { children: "Error" }),
              q = K1c({
                gg: a,
                Ah: d,
                Zm: e,
                Hi: f,
                cC: g,
                exports: k,
                cb: l,
                oya: b,
                sT: m,
                PC: p,
              }),
              r = W1c({ gg: a, Ah: d, Zm: e, lga: h, PC: p }),
              t = S1c({
                gg: a,
                Zm: e,
                Hi: f,
                S: c,
                cC: g,
                Ah: d,
                PC: p,
                sT: m,
              });
            return J7(() => {
              switch (n.vDa) {
                case 0:
                  return I7(q, {});
                case 1:
                  return I7(t, {});
                case 2:
                  return I7(r, {});
                default:
                  throw new __c.z(n.vDa);
              }
            });
          },
          d2c = function (a) {
            return b2c(
              ({ data: b, Jf: { Ah: c }, La: { Ec: d, S: e, zp: f } }) => {
                const g = c2c(
                  () => a2c({ gg: b, Ec: d, zp: f, S: e, Ah: c, ...a }),
                  [b, d, c, e, f]
                );
                return I7("div", { className: "N73IPQ", children: I7(g, {}) });
              }
            );
          },
          f2c = function (a, b, c) {
            a = a.startSpan("load_resource", c);
            return e2c(a, b);
          },
          e2c = function (a, b) {
            return (typeof b === "function" ? b() : b)
              .catch(
                w1c.wrap((c) => {
                  a.setStatus("error");
                  throw c;
                })
              )
              .finally(
                w1c.wrap(() => {
                  a.end();
                })
              );
          },
          g2c = function (a, b) {
            a.Mfa = a.Mfa.filter((c) => c !== b);
          },
          j2c = async function (a) {
            const b = D7()();
            try {
              a.P_ || (a.P_ = h2c(a));
              try {
                const [{ default: c, WebGlRenderer: d }, { default: e }] = b.r(
                  await b.s(
                    Promise.all([
                      m1c
                        ? __webpack_require__.me(328611)
                        : __webpack_require__.me(244059),
                      m1c
                        ? __webpack_require__.me(752636)
                        : __webpack_require__.me(883901),
                    ])
                  )
                );
                b.r(await b.s(c({ path: e })));
                a.vVa = d;
              } catch (c) {
                throw (
                  (b.r(),
                  (a.Gja = void 0),
                  Error("Failed to initialize renderer", { cause: c }))
                );
              }
              try {
                a.c0 = i2c(a);
              } catch (c) {
                a.J.info(`Unable to initialize WebGL context error: ${c}`),
                  G7(() => {
                    a.hza = !0;
                  });
              }
            } finally {
              b.s();
            }
          },
          h2c = function (a) {
            const b = document.createElement("canvas");
            b.width = 1e3;
            b.height = 1e3;
            b.style.width = "100%";
            b.style.visibility = "visible";
            b.addEventListener("webglcontextlost", () => k2c(a));
            return b;
          },
          i2c = function (a) {
            if (a.YXa > 5) throw Error("Unable to recreate context");
            const b = l2c(a);
            a.c0 = new (y(a.vVa))(b);
            return a.c0;
          },
          l2c = function (a) {
            a = a.canvas;
            let b;
            const c = (e) => {
              b = e.statusMessage ?? "Unknown";
            };
            a.addEventListener("webglcontextcreationerror", c);
            const d = a.getContext("webgl");
            a.removeEventListener("webglcontextcreationerror", c);
            if (d != null) return d;
            throw Error(b);
          },
          k2c = function (a) {
            a.J.info("WebGL context lost for scene widget");
            a.c0 = void 0;
            a.Gja = void 0;
            a.YXa++;
            a.eLa = () => {
              const b = a.canvas;
              a.P_ = h2c(a);
              a.vVa && i2c(a);
              a.Mfa.forEach((c) => c(b));
              a.eLa = void 0;
            };
          };
        __c.hs.prototype.xxa = __c.ca(31, function (a, b) {
          const c = this.jj.get(__c.es(a));
          if (c != null && c.agb != null) {
            const e = this.E0.get(__c.es(c.ref));
            if (e != null) return Promise.resolve({ ...c, element: e });
          }
          const d = __c.es(a);
          if ((a = this.pending.get(d))) return a;
          c != null &&
            c.agb != null &&
            (b = async () => {
              const e = (0, __c.Bc)()();
              try {
                const f = e.r(await e.s(__c.gs(this, c)));
                return { ...c, element: f };
              } finally {
                e.s();
              }
            });
          b = b().finally(__c.Aa.wrap(() => this.pending.delete(d)));
          this.pending.set(d, b);
          return b;
        });
        __c.is.prototype.xxa = __c.ca(30, function (a, b) {
          var c = this.scenes.get(a);
          if (c) return Promise.resolve(c);
          if ((c = this.pending.get(a))) return c;
          b = b().finally(__c.Aa.wrap(() => this.pending.delete(a)));
          this.pending.set(a, b);
          return b;
        });
        var D7 = __webpack_require__(75402)._;
        var m2c = __webpack_require__(244059),
          F7 = m2c.GltfRenderer,
          E7 = m2c.GltfResource,
          i1c = m2c.WebGlRenderer;
        var L7 = __webpack_require__(328611),
          g1c = L7.loadEnvTextures,
          H7 = L7.MeshRenderer,
          k1c = L7.MeshResource,
          j1c = L7.WebGlRenderer;
        var M7 = __webpack_require__(186901),
          N7 = M7.EW,
          G7 = M7.h5,
          O7 = M7.mJ,
          P7 = M7.sH,
          Q7 = M7.XI;
        var w1c = __webpack_require__(245307).Fm;
        var n2c = __webpack_require__(296713),
          I7 = n2c.jsx,
          o2c = n2c.jsxs;
        var R7 = __webpack_require__(978109),
          b2c = R7.memo,
          K7 = R7.useEffect,
          c2c = R7.useMemo,
          p2c = R7.useRef,
          q2c = R7.useState;
        var J7 = __webpack_require__(270531).PA;
        var m1c = __c.zc("26678fc5", !1);
        var f1c =
          __webpack_require__.p + "images/2c85eef4a2aebfa503e4c75ec38b39d7.png";
        var e1c =
          __webpack_require__.p + "images/5231af3dca25f08da672bcfd989db529.png";
        var n1c = __c.zc("1aab289f", !1),
          r2c = class {
            constructor(a) {
              this.Hi = a;
            }
          };
        var s2c = class {
          static G(a) {
            L(a, {
              selected: P7.ref,
              upa: P7.ref,
              fJb: P7.ref,
              uI: P7.shallow,
              Knb: P7.ref,
              VMa: P7.ref,
              yqa: P7.ref,
              bJb: P7.ref,
              cJb: P7.ref,
            });
          }
          constructor(a) {
            this.ei = a;
            this.selected = (s2c.G(this), !1);
            this.upa = 0;
            this.Knb = this.fJb = !1;
            this.yqa = this.VMa = void 0;
            this.cJb = this.bJb = !1;
          }
        };
        var z1c = class {
          precache(a) {
            q1c(this, a);
          }
          cGb(a) {
            return this.store.entries.has(a);
          }
          dispose(a) {
            const b = this.store.entries.get(a);
            b &&
              (b.renderer instanceof F7 && b.renderer?.dispose(),
              b.renderer instanceof H7 && b.renderer?.free(),
              b.resource.status === "loaded" &&
                (b.resource.resource instanceof E7
                  ? b.resource.resource?.dispose()
                  : b.resource.resource instanceof k1c &&
                    b.resource.resource?.free()),
              this.store.entries.delete(a));
          }
          constructor(a, b) {
            this.store = a;
            this.RP = b;
          }
        };
        var A1c = class {
          static G(a) {
            L(a, { entries: P7.ref });
          }
          constructor() {
            this.entries = (A1c.G(this), new Map());
          }
        };
        var B1c = class {
          static G(a) {
            L(a, {
              initialize: Q7,
              Jib: Q7,
              o3a: Q7,
              Gva: Q7,
              Mua: Q7,
              dispose: Q7,
              O4a: Q7,
              Loa: Q7,
              dkb: Q7,
            });
          }
          async initialize(a, b) {
            const c = D7()();
            try {
              this.store.isInitialized ||
                this.store.he ||
                ((this.store.he = !0),
                c.r(await c.s(u1c(this, a))) &&
                  (this.Hi.Mfa.push(this.Loa),
                  this.render({ SM: !0 }),
                  b.length > 0 && this.setRecolorings(b),
                  G7(() => {
                    this.store.isInitialized = !0;
                    this.store.he = !1;
                  })));
            } finally {
              c.s();
            }
          }
          Jib(a) {
            var b = this.Hi;
            b.canvas.width = a;
            b.canvas.height = a;
          }
          o3a({ SM: a } = { SM: !0 }) {
            this.store.bba = this.O4a();
            this.store.SM = a;
            this.dkb();
          }
          get bba() {
            return this.store.bba;
          }
          Gva() {
            this.store.Ff = !1;
            this.store.cka != null &&
              (cancelAnimationFrame(this.store.cka), (this.store.cka = void 0));
          }
          Mua(a) {
            this.store.qK = a;
          }
          async dispose(a) {
            const b = D7()();
            try {
              this.Gva();
              const c = b.r(await b.s(r1c(this.cache, a)));
              c ||
                (this.store.Fn instanceof F7
                  ? this.store.Fn.dispose()
                  : this.store.Fn instanceof H7 && this.store.Fn.free());
              const d = this.store.w3;
              G7(() => {
                this.store.Fn = void 0;
                this.store.isInitialized = !1;
                g2c(this.Hi, this.Loa);
                this.store.he = !1;
                this.store.w3 = void 0;
              });
              !c && d instanceof E7 && (b.r(await b.s(d.load())), d.dispose());
            } finally {
              b.s();
            }
          }
          O4a() {
            if (this.store.Dka && this.store.qK === this.store.Dka?.eRb)
              return this.store.Dka.ka;
            var a = this.Hi;
            var b = a.canvas.width;
            a = a.canvas.height;
            var c = this.Hi;
            c.canvas.width = 2e3;
            c.canvas.height = 2e3;
            this.render({ SM: !1 });
            c = this.Hi.getImageData();
            var d = this.Hi;
            d.canvas.width = b;
            d.canvas.height = a;
            b = this.qEb(c.data, c.width, c.height);
            this.store.Dka = { eRb: this.store.qK, ka: b };
            return b;
          }
          get isInitialized() {
            return this.store.isInitialized;
          }
          get he() {
            return this.store.he;
          }
          get Ff() {
            return this.store.Ff;
          }
          setRecolorings(a) {
            this.store.Fn instanceof F7 && this.store.Fn.setRecolorings(a);
            this.store.Fn instanceof H7 &&
              this.store.Fn.Opc(
                a.map((b) => ({
                  type: "solid",
                  qoc: parseInt(b.id, 10),
                  color: b.override,
                }))
              );
          }
          dkb() {
            this.Gva();
            this.store.Ff = !0;
            x1c(this);
          }
          render({ SM: a }) {
            this.store.Fn instanceof F7
              ? this.store.Fn.render({
                  distance: 1,
                  rotationPhi: this.store.qK.rotation.WB,
                  rotationTheta: this.store.qK.rotation.DC,
                  enableGrid: a,
                })
              : this.store.Fn instanceof H7 &&
                this.store.Fn.render({
                  width: this.Hi.canvas.width,
                  height: this.Hi.canvas.height,
                  rotationPhi: this.store.qK.rotation.WB,
                  rotationTheta: this.store.qK.rotation.DC,
                  enableGrid: a,
                });
          }
          constructor(a, b, c, d, e = t1c) {
            this.store = a;
            this.RP = b;
            this.Hi = c;
            this.cache = d;
            this.qEb = e;
            this.Loa =
              (B1c.G(this),
              (f) => {
                G7(async () => {
                  const g = D7()();
                  try {
                    const m = this.store.w3,
                      n = this.store.container;
                    if (n && this.store.isInitialized && m) {
                      n.contains(f) && n.removeChild(f);
                      v1c(this, n);
                      this.store.Fn instanceof F7
                        ? this.store.Fn.dispose()
                        : this.store.Fn instanceof H7 && this.store.Fn.free();
                      this.store.Fn = void 0;
                      var h = g.r(await g.s(l1c(this.RP, m)));
                      this.store.Fn = h;
                      var k = this.cache;
                      h = m;
                      var l = this.store.Fn;
                      for (const [, p] of k.store.entries)
                        if (
                          p.resource.status === "loaded" &&
                          p.resource.resource === h
                        ) {
                          p.renderer = l;
                          break;
                        }
                      this.Hi.Mfa.push(this.Loa);
                      this.store.isInitialized = !0;
                    }
                  } finally {
                    g.s();
                  }
                });
              });
          }
        };
        var y1c = class {
          static G(a) {
            L(a, {
              Ff: P7.ref,
              qK: P7.ref,
              cka: P7.ref,
              Dka: P7.ref,
              isInitialized: P7.ref,
              he: P7.ref,
              bba: P7.ref,
            });
          }
          constructor() {
            this.container = (y1c.G(this), void 0);
            this.SM = this.Ff = !1;
            this.qK = { rotation: { WB: 0, DC: 0 } };
            this.he = this.isInitialized = !1;
            this.bba = { left: 0, top: 0, width: 1, height: 1 };
          }
        };
        var t2c = ({ NIb: a }) =>
            o2c("div", {
              className: "Wfem7A",
              children: [
                I7("div", { className: "CSoSRg" }),
                I7("div", {
                  className: "__J59g",
                  style: {
                    width: a ? "100%" : "init",
                    height: a ? "init" : "100%",
                    aspectRatio: "1",
                  },
                  children: I7("div", { className: "tEhdig" }),
                }),
              ],
            }),
          J1c = ({ children: a, he: b }) => {
            const c = p2c(null),
              [d, e] = q2c(!1);
            K7(() => {
              c.current && e(c.current.clientWidth >= c.current.clientHeight);
            }, [c]);
            return b
              ? I7("div", {
                  ref: c,
                  className: "uDEnGQ",
                  children: o2c("div", {
                    className: "E8BDLQ",
                    children: [
                      I7("div", { className: "II7r4Q", children: a }),
                      I7(t2c, { NIb: d }),
                    ],
                  }),
                })
              : a;
          };
        var F1c = () => I7("div", { className: "_7SJjPA" });
        var E1c = ({ pE: a }) =>
          I7("img", {
            src: a,
            style: {
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            },
          });
        var I1c = class {
          static G(a) {
            L(a, {
              initialize: Q7,
              destroy: Q7,
              uw: N7,
              pE: N7,
              he: N7,
              isError: N7,
              SJa: N7,
              i4: N7,
              pca: Q7,
            });
          }
          async initialize() {
            const a = D7()();
            try {
              this.gg.local.upa++;
              this.store.Uzb = O7(
                () => ({ selected: this.kk, scene: this.store.scene }),
                ({ selected: c, scene: d }) => this.pca(c, d),
                { fireImmediately: !0 }
              );
              this.store.$1a = O7(
                () => [
                  this.gg.C.config.ref.rotationPhi,
                  this.gg.C.config.ref.rotationTheta,
                ],
                this.VFb,
                { fireImmediately: !0 }
              );
              this.store.Tzb = O7(() => [this.gg.C.config.ref.jc], this.TFb, {
                fireImmediately: !0,
              });
              const b = a.r(await a.s(c1c(this.Zm, this.gg.C.scene.id)));
              G7(() => {
                this.gg.local.uI = b.uI;
                this.store.scene = b;
              });
            } finally {
              a.s();
            }
          }
          destroy() {
            this.gg.local.upa--;
            this.gg.local.upa === 0 &&
              this.ei.dispose(this.store.scene?.files.nW ?? "");
            this.store.x8b?.();
            this.store.Uzb?.();
            this.store.$1a?.();
            this.store.Tzb?.();
          }
          get uw() {
            return (this.i4 && this.SJa && !this.ei.Ff) ||
              (this.i4 && this.SJa && !this.kk)
              ? 0
              : this.i4 && this.kk && this.ei.isInitialized && this.ei.Ff
              ? 1
              : this.Tt
              ? 2
              : this.pE
              ? 3
              : this.isError
              ? 4
              : 5;
          }
          get pE() {
            return this.store.scene?.files.Nt;
          }
          get Tt() {
            return this.gg.C.config.ref.snapshot?.id;
          }
          get he() {
            return this.i4 && this.kk && !this.ei.isInitialized;
          }
          get kk() {
            return this.gg.local.selected;
          }
          get isError() {
            return !!this.store.scene && !this.store.scene.files.Nt;
          }
          get SJa() {
            return !!this.gg.local.Knb;
          }
          get i4() {
            return this.cb?.status !== 2 && !this.Hi.RJa;
          }
          get ei() {
            return this.gg.local.ei;
          }
          lDa(a) {
            return Array.from(a ?? [], ([b, c]) => ({
              type: "solid",
              id: b,
              override: c.color,
            }));
          }
          constructor(a, b, c, d, e, f, g) {
            this.store = a;
            this.gg = b;
            this.Zm = c;
            this.Hi = d;
            this.cC = e;
            this.cb = f;
            this.kXa = g;
            this.pca =
              (I1c.G(this),
              async (h, k) => {
                const l = D7()();
                try {
                  if (k != null)
                    if (!h) this.ei.dispose(this.store.scene?.files.nW ?? "");
                    else if (!this.ei.he) {
                      var m = y(k.files.nW);
                      l.r(await l.s(this.Hi.Dob));
                      if (this.Hi.RJa) this.kXa?.();
                      else if (this.i4) {
                        var n = this.cC.startSpan("select");
                        l.r(
                          await l.s(
                            f2c(
                              this.cC,
                              async () => {
                                const p = D7()();
                                try {
                                  const q = this.lDa(this.gg.C.config.ref.jc);
                                  p.r(await p.s(this.ei.initialize(m, q)));
                                } finally {
                                  p.s();
                                }
                              },
                              n
                            )
                          )
                        );
                        n.end();
                      }
                    }
                } finally {
                  l.s();
                }
              });
            this.VFb = () => {
              this.ei.Ff ||
                this.ei.Mua({
                  rotation: {
                    WB: this.gg.C.config.ref.rotationPhi,
                    DC: this.gg.C.config.ref.rotationTheta,
                  },
                });
            };
            this.TFb = () => {
              const h = [];
              this.gg.C.config.ref.jc?.forEach((k, l) => {
                k.color && h.push({ type: "solid", id: l, override: k.color });
              });
              this.ei.setRecolorings(h);
            };
          }
        };
        var H1c = class {
          static G(a) {
            L(a, { scene: P7.ref });
          }
          constructor() {
            this.$1a = (H1c.G(this), void 0);
          }
        };
        var u2c = ({ iOb: a, hOb: b }) => {
          const c = p2c(null);
          K7(() => {
            const d = c.current;
            c.current && a(c.current);
            return () => {
              d && b();
            };
          }, [c, a, b]);
          return I7("div", {
            ref: c,
            style: { display: "block", position: "absolute" },
          });
        };
        var v2c = class {
          get ei() {
            return this.local.ei;
          }
          constructor(a, b) {
            this.local = a;
            this.S = b;
            this.QFb = (c) => {
              const d = this.ei.bba;
              this.ei.Jib(
                Math.round(Math.min((this.S.width * 2e3) / d.width, 2e3))
              );
              const e = this.S.I / d.width;
              c.style.width = 2e3 * e + "px";
              c.style.height = 2e3 * e + "px";
              c.style.left = `-${d.left * e}px`;
              c.style.top = `-${d.top * e}px`;
              v1c(this.ei, c);
            };
            this.PFb = () => {
              var c = this.ei;
              c.store.container?.removeChild(c.Hi.canvas);
              c.store.container = void 0;
            };
          }
        };
        var $1c = ({ local: a, S: b }) => {
          const c = new v2c(a, b);
          return () => I7(u2c, { iOb: c.QFb, hOb: c.PFb });
        };
        var w2c = ({ GW: a, JOb: b, onDispose: c }) => {
          const d = p2c(null);
          K7(() => {
            d.current && b(d.current);
            return () => c();
          }, [d, b, c]);
          K7(() => {
            d.current &&
              a &&
              ((a.style.width = "100%"),
              (a.style.height = "100%"),
              d.current.firstChild &&
                d.current.removeChild(d.current.firstChild),
              d.current.appendChild(a));
          }, [d, a]);
          return I7("div", {
            ref: d,
            style: { width: "100%", height: "100%" },
          });
        };
        var x2c = class {
          static G(a) {
            L(a, { initialize: Q7.bound, dispose: Q7.bound, Z1a: Q7 });
          }
          initialize(a) {
            this.store.container = a;
            this.store.Y1a = O7(
              () => this.local.yqa,
              () => {
                var b = y(this.store.container, "Missing container");
                if (this.local.VMa && this.local.yqa) {
                  var c = this.local.VMa,
                    d = this.S.I / c.width;
                  b.style.width = 2e3 * d + "px";
                  b.style.height = 2e3 * d + "px";
                  b.style.left = `-${c.left * d}px`;
                  b.style.top = `-${c.top * d}px`;
                  b.style.position = "absolute";
                  b = new Image();
                  b.src = this.local.yqa;
                  this.store.GW = b;
                }
              },
              { fireImmediately: !0 }
            );
          }
          dispose() {
            this.Z1a();
            this.store.Y1a?.();
            this.store.Y1a = void 0;
          }
          get GW() {
            return this.store.GW;
          }
          Z1a() {
            this.store.GW = void 0;
          }
          constructor(a, b, c) {
            this.store = a;
            this.local = b;
            this.S = c;
            x2c.G(this);
          }
        };
        var y2c = class {
          static G(a) {
            L(a, { GW: P7.ref });
          }
          constructor() {
            this.container = (y2c.G(this), void 0);
          }
        };
        var Z1c = ({ local: a, S: b }) => {
          const c = new y2c(),
            d = new x2c(c, a, b);
          return J7(() =>
            I7(w2c, { JOb: d.initialize, onDispose: d.dispose, GW: d.GW })
          );
        };
        var N1c = ({ children: a, onMouseDown: b, onTouchStart: c }) =>
          I7("div", {
            role: "none",
            className: "EBsZEg",
            onMouseDown: b,
            onTouchStart: c,
            children: a,
          });
        var z2c = Math.PI / 2 - 0.001,
          A2c = -Math.PI / 2 + 0.001;
        var M1c = class {
          static G(a) {
            L(a, { M5a: Q7.bound, L5a: Q7.bound, K5a: Q7.bound });
          }
          get ei() {
            return this.gg.local.ei;
          }
          async M5a() {
            this.store.span = this.cC.startSpan("rotate");
            const a = this.ei.store.qK;
            this.ei.o3a({ SM: !1 });
            this.store.Y6a = { WB: a.rotation.WB, DC: a.rotation.DC };
          }
          L5a(a) {
            var b = a.clientX;
            a = a.clientY;
            if (this.store.Mca) {
              b -= this.store.Mca.x;
              a -= this.store.Mca.y;
              var c = -(((this.S.rotation ?? 0) * Math.PI) / 180),
                [d, e] = [
                  b * Math.cos(c) - a * Math.sin(c),
                  b * Math.sin(c) + a * Math.cos(c),
                ];
              a = this.store.Y6a;
              b = (a.WB + d * 0.01) % (2 * Math.PI);
              a = a.DC + e * 0.01;
              this.store.rotation = {
                WB: b < 0 ? b + 2 * Math.PI : b,
                DC: a > z2c ? z2c : a < A2c ? A2c : a,
              };
              this.ei.Mua({
                rotation: {
                  WB: this.store.rotation?.WB,
                  DC: this.store.rotation?.DC,
                },
              });
            } else this.store.Mca = { x: b, y: a };
          }
          K5a() {
            this.ei.Gva();
            this.store.Mca = void 0;
            this.store.span?.end();
            this.store.span = void 0;
          }
          constructor(a, b, c, d) {
            this.store = a;
            this.gg = b;
            this.S = c;
            this.cC = d;
            M1c.G(this);
          }
        };
        var L1c = class {
          static G(a) {
            L(a, { span: P7.ref, Mca: P7.ref, rotation: P7.ref });
          }
          constructor() {
            this.span = (L1c.G(this), void 0);
            this.rotation = { WB: 0, DC: 0 };
            this.Y6a = { WB: 0, DC: 0 };
          }
        };
        var R1c = class {
          static G(a) {
            L(a, {
              initialize: Q7,
              destroy: Q7,
              uw: N7,
              a8a: N7,
              Tt: N7,
              pE: N7,
              isError: N7,
            });
          }
          async initialize() {
            const a = D7()();
            try {
              const b = a.r(await a.s(c1c(this.Zm, this.gg.C.scene.id)));
              if (b.files.nW) {
                a.r(await a.s(this.Hi.Dob));
                if (this.Hi.RJa) return;
                this.ei.Mua({
                  rotation: {
                    WB: this.gg.C.config.ref.rotationPhi,
                    DC: this.gg.C.config.ref.rotationTheta,
                  },
                });
                const c = this.lDa(this.gg.C.config.ref.jc);
                this.ei.initialize(b.files.nW, c);
              }
              G7(() => {
                this.gg.local.uI = b.uI;
                this.store.scene = b;
              });
            } finally {
              a.s();
            }
          }
          destroy() {
            this.ei.dispose(this.store.scene?.files.nW ?? "");
          }
          get uw() {
            return this.a8a
              ? 0
              : this.Tt
              ? 1
              : this.pE
              ? 2
              : this.isError
              ? 3
              : 4;
          }
          get a8a() {
            return this.ei.isInitialized && this.ei.Ff;
          }
          get Tt() {
            return this.gg.C.config.ref.snapshot?.id;
          }
          get pE() {
            return this.store.scene?.files.Nt;
          }
          get isError() {
            return !!this.store.scene && !this.store.scene.files.Nt;
          }
          get ei() {
            return this.gg.local.ei;
          }
          lDa(a) {
            return Array.from(a ?? [], ([b, c]) => ({
              type: "solid",
              id: b,
              override: c.color,
            }));
          }
          constructor(a, b, c, d) {
            this.store = a;
            this.gg = b;
            this.Zm = c;
            this.Hi = d;
            R1c.G(this);
          }
        };
        var Q1c = class {
          static G(a) {
            L(a, { scene: P7.ref });
          }
          constructor() {
            this.scene = (Q1c.G(this), void 0);
          }
        };
        var X1c = class {
          static G(a) {
            L(a, { vDa: N7, Mpa: N7, B8a: N7, X7a: N7 });
          }
          get vDa() {
            return this.B8a ? 1 : this.X7a ? 0 : 2;
          }
          get Mpa() {
            return this.Ec === 30;
          }
          get B8a() {
            return this.JBb && this.Mpa && !this.zp;
          }
          get X7a() {
            return this.Ec === 30;
          }
          constructor(a, b, c) {
            this.Ec = a;
            this.JBb = b;
            this.zp = c;
            X1c.G(this);
          }
        };
        var V1c = class {
          static G(a) {
            L(a, { uw: N7, Tt: N7, Nt: N7, isError: N7 });
          }
          async initialize() {
            const a = D7()();
            try {
              try {
                const b = a.r(await a.s(c1c(this.Zm, this.gg.C.scene.id)));
                G7(() => {
                  this.store.Nt = b.files.Nt;
                });
              } catch (b) {
                a.r(),
                  this.lga.info(`Unable to fetch scene: ${b}`),
                  G7(() => {
                    this.store.isError = !0;
                  });
              }
            } finally {
              a.s();
            }
          }
          get uw() {
            return this.Tt ? 0 : this.store.Nt ? 1 : this.store.isError ? 2 : 3;
          }
          get Tt() {
            return this.gg.C.config.ref.snapshot?.id;
          }
          get Nt() {
            return this.store.Nt;
          }
          get isError() {
            return this.store.isError;
          }
          constructor(a, b, c, d) {
            this.store = a;
            this.gg = b;
            this.Zm = c;
            this.lga = d;
            V1c.G(this);
          }
        };
        var U1c = class {
          static G(a) {
            L(a, { Nt: P7.ref, isError: P7.ref });
          }
          constructor() {
            this.Nt = (U1c.G(this), void 0);
            this.isError = !1;
          }
        };
        var Y1c = __c.zc("91e25338", !1);
        var B2c = class {
          startSpan(a, b) {
            a = `scene.${a}`;
            return b
              ? this.ub.startSpan(a, b)
              : this.ub.hj(a, {
                  rs: { name: `editor.${a}`, performance: { YL: !0 } },
                });
          }
          constructor(a) {
            this.ub = a;
          }
        };
        var C2c = class {
          static G(a) {
            L(a, { hza: P7.ref });
          }
          get RJa() {
            return this.hza;
          }
          get Dob() {
            this.eLa && this.eLa();
            this.Gja || (this.Gja = j2c(this));
            return this.Gja;
          }
          get canvas() {
            this.P_ || (this.P_ = h2c(this));
            return this.P_;
          }
          get Eob() {
            return this.c0;
          }
          getImageData() {
            __c.x(this.c0 != null, "WebGlRenderer is not initialized");
            return this.c0.readPixels();
          }
          constructor(a) {
            this.J = a;
            this.P_ = (C2c.G(this), void 0);
            this.Mfa = [];
            this.hza = !1;
            this.YXa = 0;
          }
        };
        var D2c;
        D2c = __c.Ox()(({ hi: a, LA: b }) => {
          var c = b.ub;
          const d = b.cb;
          b = b.J.Jd("scene_widget_rendering");
          const e = new B2c(c),
            f = new C2c(b),
            g = new r2c(f);
          c = {};
          a = d2c({ Zm: a.Zm, Hi: f, cC: e, lga: b, exports: c, cb: d });
          return {
            ...__c.eW,
            metadata: {
              type: "scene",
              name: __c.K("6XoKOg"),
              tZ: (h) => h.scene.id,
            },
            NG: () => {
              const h = C1c({ RP: g, Hi: f });
              return new s2c(h);
            },
            C: __c.Nx(a),
            exports: c,
          };
        });
        __c.T5 = {};
        __c.T5.S3b = s2c;
        __c.T5.vf = __c.jVc;
        __c.T5.yn = D2c;
        __c.T5.wf = __c.oVc;
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/631cdf1e0cd6ff83.js.map
