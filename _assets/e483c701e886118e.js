(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [96846],
  {
    /***/ 289783: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var rNc = __webpack_require__(296713).jsx;
        var sNc = __webpack_require__(270531).PA;
        __webpack_require__(978109);
        var tNc = class {
          name(a) {
            return __c.LW(a.text);
          }
          role() {
            return "group";
          }
          constructor() {
            this.createNode = (a, b) => ({
              ...a,
              type: 9,
              name: this.name(b.C),
              role: this.role(),
            });
          }
        };
        var uNc = sNc(({ element: a, Zj: b, Bh: c }) => {
          const d = b.id,
            e = b.role,
            f = b.name,
            g = b.tF;
          b = __c.yz(__c.zz(Object.values({ ...b.state, ...b.description })));
          return rNc("div", {
            id: d,
            role: e,
            "aria-label": f,
            "aria-roledescription": g,
            ...b,
            className: "_pFsfA",
            children: rNc(c, { text: a.C.text }),
          });
        });
        __c.VTa = {
          XHb: ({ rf: a, Bh: b }) => {
            const c = a.hy;
            a.pn.h0a = new tNc().createNode;
            c.od.Hs = (d) => rNc(uNc, { ...d, Bh: b });
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/e483c701e886118e.js.map
