(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [97857],
  {
    /***/ 494294: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(795488);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var DNc = function (a, b) {
            b = a.jj.get(__c.es(b));
            return b != null ? a.E0.get(__c.es(b.ref)) : void 0;
          },
          ENc = __webpack_require__(186901).fm;
        var FNc = ({ expr: a, resource: b, xG: c, rd: d }) => {
          const e = ENc(() => {
            __c.Pva(c, b.ref.ref);
          });
          return {
            Oa: a.list(() => {
              const f = DNc(c, b.ref.ref);
              if (!f) return [];
              __c.x(f.type === "group", "Expected group element");
              if (d.ref) {
                const g = new __c.itc(
                  a,
                  new __c.gtc(d.ref),
                  () => __c.y(f.Os).HC
                );
                return f.Oa.filter(__c.wb).map((h) => g.create(h));
              }
              return f.Oa.filter(__c.wb).map((g) =>
                __c.JF.create({ ...g, locked: !0, Fg: !0 })
              );
            }),
            Jo: e,
          };
        };
        __c.GNc = {
          yn: __c.Ox()(({ LA: { expr: a }, hi: { xG: b } }) => ({
            ...__c.eW,
            metadata: { type: "blueprint", name: __c.K("iAtEVw") },
            C: {
              type: 0,
              Iy: ({ C: c }) =>
                FNc({ expr: a, resource: c.ru.resource, xG: b, rd: c.ru.rd }),
            },
          })),
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/d27336ec58260715.js.map
