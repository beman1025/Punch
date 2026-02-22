(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [74934],
  {
    /***/ 377279: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(92846);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var hJc = __webpack_require__(296713),
          iJc = hJc.Fragment,
          A3 = hJc.jsx,
          jJc = hJc.jsxs;
        var kJc = __webpack_require__(270531).PA;
        var lJc = __webpack_require__(978109).useId;
        var mJc = kJc(({ element: a, hy: b, Yv: c }) => {
          var d = { width: a.C.width, height: a.C.height, units: 4 };
          d = __c.Bkc(a.C.Oa.toArray(), d, __c.Mx.direction);
          return A3(iJc, {
            children: d.map((e) => {
              e = a.Ih(e);
              return A3(c, { element: e, config: b }, e.C.id);
            }),
          });
        });
        kJc((a) => {
          var b = a.Zj;
          const c = b.id,
            d = b.role,
            e = b.tF,
            f = b.state,
            g = b.description;
          b = b.name;
          const h = lJc();
          return jJc("div", {
            id: c,
            role: d,
            className: "_pFsfA",
            "aria-roledescription": e,
            "aria-label": b,
            "aria-describedby": h,
            children: [
              A3("div", {
                id: h,
                children: __c.zz(Object.values({ ...f, ...g })),
              }),
              A3(mJc, { ...a }),
            ],
          });
        });
        var nJc = class {
          description(a, b) {
            b = b.Oa.count();
            return {
              ...a.description,
              elements: __c.Cb("yNO6Ww", [b]),
              qcc: __c.K("ZpUBgQ"),
            };
          }
          constructor() {
            this.createNode = (a, b) => {
              b = b.C;
              return {
                ...a,
                type: 5,
                name: __c.K("xc+QRw"),
                role: "group",
                description: this.description(a, b),
              };
            };
          }
        };
        __c.GMa = {
          KHb: function ({ rf: a, Of: b }) {
            const c = b.Yv,
              d = a.hy.od;
            a.pn.Y_a = new nJc().createNode;
            d.RN = (e) => A3(mJc, { ...e, hy: d, Yv: c });
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/8340f62977bbe98c.js.map
