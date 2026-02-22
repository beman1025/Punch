(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [47469],
  {
    /***/ 160092: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var K = __c.K;
        var oJc = function (a) {
            if (!a) return "";
            a = a.filter((b) => !!b);
            return a.length > 0 ? a.join(" ") : "";
          },
          B3 = function (a, b) {
            if (b) {
              switch (b) {
                case 1:
                  b = K("bn3I1g");
                  break;
                case 2:
                  b = K("qOQouQ");
                  break;
                case 3:
                  b = K("soFr1g");
                  break;
                case 4:
                  b = K("Ixn8Uw");
                  break;
                case 5:
                  b = K("5VkcJQ");
                  break;
                case 6:
                  b = K("Rz7hcw");
                  break;
                case 7:
                  b = K("TX/OSQ");
                  break;
                case 8:
                  b = K("2CYO9g");
                  break;
                case 9:
                  b = K("OonDog");
                  break;
                default:
                  throw new __c.z(b);
              }
              return a === "start"
                ? __c.Cb("Zqw16A", [b])
                : __c.Cb("8DkxDA", [b]);
            }
          },
          pJc = __webpack_require__(296713),
          C3 = pJc.jsx,
          qJc = pJc.jsxs;
        var rJc = __webpack_require__(270531).PA;
        var D3 = __webpack_require__(978109).useId;
        var uJc = rJc(({ element: a, Zj: b, Bh: c }) =>
            C3(b.role === "img" ? sJc : tJc, { element: a, Zj: b, Bh: c })
          ),
          sJc = rJc(({ Zj: a }) => {
            const b = a.id,
              c = a.role,
              d = a.tF,
              e = a.name;
            a = __c.yz(__c.zz(Object.values({ ...a.state, ...a.description })));
            return C3("div", {
              id: b,
              role: c,
              className: "_pFsfA",
              "aria-roledescription": d,
              "aria-label": e,
              ...a,
            });
          }),
          tJc = rJc(({ element: a, Zj: b, Bh: c }) => {
            const d = D3(),
              e = D3(),
              f = D3(),
              g = D3(),
              h = b.id,
              k = b.role,
              l = b.tF;
            var m = b.description;
            b = b.state;
            a = a.C.zb.first()?.text;
            const n = m.LF,
              p = m.SD,
              q = oJc([n ? d : void 0, g, p ? e : void 0]);
            m = { color: m.color, H0a: m.H0a, weight: m.weight };
            return C3("div", {
              id: h,
              role: k,
              className: "_pFsfA",
              "aria-roledescription": l,
              "aria-describedby": q,
              "aria-labelledby": f,
              children: qJc("div", {
                role: "caption",
                children: [
                  n && C3("span", { id: d, children: n }),
                  a && C3("div", { id: f, children: C3(c, { text: a }) }),
                  p && C3("span", { id: e, children: p }),
                  C3("div", {
                    id: g,
                    children: C3("p", {
                      children: __c.zz(Object.values({ ...b, ...m })),
                    }),
                  }),
                ],
              }),
            });
          });
        var vJc = class {
          name(a) {
            var b = a.Ja;
            if (b && b.text) return b.text;
            if ((b = this.innerText(a))) return __c.LW(b);
            b = B3("start", a.start.marker);
            const c = B3("end", a.end.marker),
              d = b || c ? void 0 : K("urY8kQ");
            a = a.weight >= 12 ? K("BAPKdQ") : K("07M6Aw");
            return [d, b, c, a].filter(__c.wb).join(", ");
          }
          innerText(a) {
            a = a.zb.first()?.text;
            return a?.stream.isEmpty ? void 0 : a;
          }
          role(a) {
            return (a = this.innerText(a)) && a.stream.charLength > 0
              ? "group"
              : "img";
          }
          description(a, b) {
            var c = b.color ?? b.fill.Ra.ref;
            c = c ? __c.Ps(this.ew, c) : void 0;
            const d = b.Qc && b.Qc.length > 0 ? K("NpJKaw") : void 0,
              e = b.weight >= 12 ? K("BAPKdQ") : K("07M6Aw");
            b = this.innerText(b)
              ? {
                  LF: B3("start", b.start.marker),
                  SD: B3("end", b.end.marker),
                  weight: e,
                }
              : { LF: void 0, SD: void 0, weight: void 0 };
            return { ...a.description, ...b, color: c, H0a: d };
          }
          state(a) {
            return a.state;
          }
          constructor(a) {
            this.ew = a;
            this.createNode = (b, c) => {
              c = c.C;
              return {
                ...b,
                type: 6,
                description: this.description(b, c),
                role: this.role(c),
                name: this.name(c),
                state: this.state(b),
              };
            };
          }
        };
        __c.lPa = {
          MHb: ({ rf: a, Bh: b }) => {
            const c = a.hy;
            a.pn.Z_a = new vJc(a.ew).createNode;
            c.od.ey = (d) => C3(uJc, { ...d, Bh: b });
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/6142b88d0dcb916e.js.map
