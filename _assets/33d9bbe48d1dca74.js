(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [4200],
  {
    /***/ 272435: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var wJc = __webpack_require__(296713).jsx;
        var xJc = __webpack_require__(270531).PA;
        __webpack_require__(978109);
        var yJc = xJc(({ Zj: a }) => {
          const b = a.id,
            c = a.role,
            d = a.tF,
            e = a.name;
          a = __c.yz(__c.zz(Object.values({ ...a.state, ...a.description })));
          return wJc("div", {
            className: "_pFsfA",
            id: b,
            role: c,
            "aria-roledescription": d,
            "aria-label": e,
            ...a,
          });
        });
        var zJc = class {
          role(a) {
            const b = this.Tma(a);
            return b && b.nj
              ? "presentation"
              : a.fill.video.ref
              ? "figure"
              : "img";
          }
          name(a, b) {
            const c = this.Tma(b)?.text;
            if (c) return c;
            b = __c.wQ.snapshot(b.fill);
            return (b = __c.mn(this.Dm, b)?.text) ? b : a.name;
          }
          Tma(a) {
            a = __c.JF.snapshot(a);
            return __c.ln(a);
          }
          state(a, b) {
            return {
              ...a.state,
              autoplay: b.fill.video.ref?.autoplay ? __c.K("jFg4Bw") : void 0,
            };
          }
          constructor(a) {
            this.Dm = a;
            this.createNode = (b, c) => {
              c = c.C;
              return {
                ...b,
                type: 7,
                role: this.role(c),
                name: this.name(b, c),
                state: this.state(b, c),
              };
            };
          }
        };
        __c.UQa = {
          RHb: ({ rf: a, Dm: b }) => {
            const c = a.hy;
            a.pn.$_a = new zJc(b).createNode;
            c.od.$v = yJc;
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/33d9bbe48d1dca74.js.map
