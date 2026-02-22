(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [20716],
  {
    /***/ 256115: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var JNc = function (a, b, c = 1) {
            b = Math.min(a.weight, b);
            if (b !== 0) {
              a: {
                var d = a.Qc;
                if (d.length > 0) {
                  if (d[0] === 1) {
                    d = "dotted";
                    break a;
                  }
                  if (d[0] > 1) {
                    d = "dashed";
                    break a;
                  }
                }
                d = "solid";
              }
              return {
                borderWidth: `${b * c}px`,
                borderStyle: d,
                borderColor:
                  a.color ??
                  a.fill.color ??
                  a.fill.Ra.ref?.Te[0]?.color ??
                  "transparent",
              };
            }
          },
          KNc = function (a) {
            if (a.color) return { backgroundColor: a.color };
            if (a.Ra.ref && a.Ra.ref.type === "linear")
              return {
                backgroundColor: a.Ra.ref?.Te[0]?.color,
                background: `linear-gradient(${
                  a.Ra.ref.rotation
                }deg, ${a.Ra.ref?.Te.map((b) => `${b.color}`).join(",")})`,
              };
            if (a.Ra.ref && a.Ra.ref.type === "radial") {
              const b = a.Ra.ref.center.left,
                c = a.Ra.ref.center.top,
                d = a.Ra.ref?.Te.map((e) => `${e.color}`).join(",");
              return {
                backgroundColor: a.Ra.ref?.Te[0]?.color,
                background: `radial-gradient(circle at ${`${Math.round(
                  b * 100
                )}%`} ${`${Math.round(c * 100)}%`}, ${d})`,
              };
            }
            return {};
          },
          LNc = __webpack_require__(296713),
          q4 = LNc.jsx,
          MNc = LNc.jsxs;
        __webpack_require__(186901);
        var NNc = __webpack_require__(270531).PA;
        __webpack_require__(978109);
        var ONc = __c.zc("7f461eea", !1),
          PNc = __c.zc("58d622aa", !1);
        __c.QNc = {
          yn: __c.Ox()(() => ({
            ...__c.eW,
            metadata: { type: "button", name: __c.K("xdElgQ") },
            C: __c.Nx(
              NNc(({ data: { C: a }, Jf: b }) =>
                q4(b.cja, {
                  link: ONc ? a.link : void 0,
                  children: MNc("div", {
                    className: "_2Z_Fmg",
                    children: [
                      q4("div", {
                        className: "_0mvZOQ",
                        style: {
                          borderRadius: `${a.V}px`,
                          border: a.border.ref
                            ? `solid ${a.border.ref.weight}px  ${a.border.ref.color}`
                            : void 0,
                        },
                        children: q4(b.Ah, { fill: a.background }),
                      }),
                      q4("div", {
                        className: "ZcsBDg",
                        children: q4("div", {
                          className: "vyKiIw",
                          children: q4(b.zj, { text: a.label }),
                        }),
                      }),
                    ],
                  }),
                })
              )
            ),
            email: {
              type: 2,
              Component: NNc(
                ({ data: { C: a }, Jf: b, La: { S: c }, scale: d }) => {
                  var e = c.I * d;
                  e = (e = a.border.ref ? JNc(a.border.ref, e / 2, d) : void 0)
                    ? `${e.borderWidth} ${e.borderStyle} ${e.borderColor}`
                    : void 0;
                  const f = a.V ? a.V * d : 0;
                  return q4("a", {
                    href: a.link ?? "#",
                    "ses:no-track": "",
                    target: "_blank",
                    rel: "noopener",
                    style: {
                      display: "table",
                      width: "100%",
                      height: `${c.O * d}px`,
                      textDecoration: "none",
                      borderCollapse: "separate",
                      boxSizing: "border-box",
                      borderSpacing: 0,
                      padding: "8px",
                      ...KNc(a.background),
                      ...(e
                        ? {
                            borderTop: e,
                            borderBottom: e,
                            borderLeft: e,
                            borderRight: e,
                          }
                        : {}),
                      ...(f
                        ? {
                            borderTopLeftRadius: `${f}px`,
                            borderTopRightRadius: `${f}px`,
                            borderBottomLeftRadius: `${f}px`,
                            borderBottomRightRadius: `${f}px`,
                          }
                        : {}),
                    },
                    children: q4(b.zj, { text: a.label }),
                  });
                }
              ),
            },
            rV: PNc ? [] : ["fixed"],
          })),
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/2eb4c334afde18cb.js.map
