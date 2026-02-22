(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [70386],
  {
    /***/ 882779: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(734120);
      __web_req__(214065);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var Ba = __c.Ba;
        var L = __c.L;
        var Cb = __c.Cb;
        var x = __c.x;
        var K = __c.K;
        var Sf = __c.Sf;
        var Rf = __c.Rf;
        var j0 = __c.j0;
        var z = __c.z;
        var Xh = __c.Xh;
        var Wh = __c.Wh;
        var pZc = function (a, b) {
            return (c) => {
              c = a(c);
              if (typeof c === "boolean") return c ? Wh() : Xh(b);
              switch (c.state) {
                case "valid":
                  return c;
                case "invalid":
                  return Xh(b);
                default:
                  throw new z(c);
              }
            };
          },
          qZc = function (a) {
            return (b) => {
              for (const e of a) {
                var c = e,
                  d = b;
                c = (Array.isArray(c) ? pZc(...c) : c)(d);
                c =
                  typeof c === "boolean"
                    ? c
                      ? Wh()
                      : Xh()
                    : c.state === "invalid" && c.error == null
                    ? Xh()
                    : c;
                if (c.state === "invalid") return c;
              }
              return Wh();
            };
          },
          rZc = function (a, b) {
            switch (a.status) {
              case 1:
                return b.rF ? { status: 1, data: b.rF(a.data) } : a;
              case 2:
                return a;
              case 3:
                return b.error ? j0(b.error(a.error)) : a;
              default:
                throw new z(a);
            }
          },
          W6 = function (a, b) {
            const c = b.rF,
              d = b.loading,
              e = b.error;
            switch (a.status) {
              case 1:
                return c ? c(a.data) : b.default?.();
              case 2:
                return d ? d() : b.default?.();
              case 3:
                return e ? e(a.error) : b.default?.();
              default:
                throw new z(a);
            }
          },
          sZc = function (a) {
            if (a.status === 1) return a.data;
          },
          tZc = function (a) {
            const b = a.color;
            a = a.Ra;
            return b ? b : a.ref ? a.ref.Te[0].color : "#ffffff";
          },
          X6 = function (a, b, c) {
            if (b)
              switch (b.TD) {
                case "required":
                  return a.TFa();
                case "unknown_option_id":
                  return a.$Fa();
                case "invalid_format":
                  return c.type === 5 ? a.OFa() : a.NFa();
                case "invalid_email":
                  return a.MFa();
                case "out_of_bounds":
                  switch (c?.type) {
                    case 4:
                      return b.params.exact != null
                        ? a.XFa(b.params.exact)
                        : b.params.n0 != null
                        ? a.ZFa(b.params.n0)
                        : a.YFa(b.params.nAa);
                    case 1:
                    case 2:
                    case 3:
                      return b.params.exact != null
                        ? a.UFa(b.params.exact)
                        : b.params.n0 != null
                        ? a.WFa(b.params.n0)
                        : a.VFa(b.params.nAa);
                    case 5:
                      return b.params.exact != null
                        ? a.QFa(b.params.exact)
                        : b.params.n0 != null
                        ? a.SFa(b.params.n0)
                        : a.RFa(b.params.nAa);
                    default:
                      throw new z(c);
                  }
                default:
                  throw new z(b);
              }
          },
          uZc = function (a) {
            a = {
              ...__c.aH,
              stream: __c.Wg.wb()
                .attrs(a.stream.qj(0))
                .xb(a.stream.da.trim() + "*\n")
                .build(),
            };
            return __c.ji.create(a);
          },
          AZc = function (a) {
            const b = a.XJa,
              c = a.gridGap,
              [d, e] = vZc(0),
              f = wZc.count(a.children),
              g = b * f + c * (f - 1),
              h = xZc(null);
            yZc(() => {
              h.current && e(h.current.offsetWidth);
            }, []);
            return Y6(zZc, {
              onResize: (k) => e(k.entry?.width ?? 0),
              children: ({ measureRef: k }) =>
                Y6("div", {
                  ref: __c.Qs(k, h),
                  className: "lLyTrw",
                  style: {
                    "--7BjzEw": `${b}px`,
                    "--W5t64A": g > d ? 1 : f,
                    "--CEwLjw": `${c}px`,
                  },
                  children: a.children,
                }),
            });
          },
          BZc = function ({ size: a }) {
            return Y6("svg", {
              "aria-hidden": "true",
              width: a,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: Y6("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.6592 18.1181L13.7952 4.14664C13.6002 3.74964 13.279 3.42849 12.882 3.23346C11.8907 2.7464 10.6921 3.15525 10.2051 4.14664L3.34116 18.1181C3.20634 18.3925 3.13623 18.6942 3.13623 19C3.13623 20.1045 4.03166 21 5.13623 21H18.8641C19.1698 21 19.4715 20.9298 19.746 20.795C20.7374 20.308 21.1462 19.1095 20.6592 18.1181ZM12.2206 4.57976C12.3199 4.62852 12.4002 4.7088 12.4489 4.80805L19.3129 18.7795C19.4346 19.0273 19.3324 19.327 19.0846 19.4487C19.0159 19.4824 18.9405 19.5 18.8641 19.5H5.13623C4.86009 19.5 4.63623 19.2761 4.63623 19C4.63623 18.9235 4.65376 18.8481 4.68746 18.7795L11.5514 4.80805C11.6732 4.56021 11.9728 4.45799 12.2206 4.57976ZM12.0001 18.25C12.6905 18.25 13.2501 17.6903 13.2501 17C13.2501 16.3096 12.6905 15.75 12.0001 15.75C11.3098 15.75 10.7501 16.3096 10.7501 17C10.7501 17.6903 11.3098 18.25 12.0001 18.25ZM13.0001 9.99995C13.0001 9.44767 12.5524 8.99995 12.0001 8.99995C11.4479 8.99995 11.0001 9.44767 11.0001 9.99995V13.5C11.0001 14.0522 11.4479 14.5 12.0001 14.5C12.5524 14.5 13.0001 14.0522 13.0001 13.5V9.99995Z",
                fill: "#db142c",
              }),
            });
          },
          FZc = function (a) {
            const b = a.hCb,
              c = a.PB,
              d = a.TE,
              e = a.kk,
              f = a.Rr,
              [g, h, k] = Z6(() => {
                switch (b) {
                  case 4:
                  case 2:
                    return ["#e3fff0", "#00873d", CZc];
                  case 3:
                    return ["#ffd9df", "#c8001e", DZc];
                  case 1:
                    return [c.Un, d.Un];
                  case 0:
                    return e
                      ? [c.selected, d.selected]
                      : f === 3 || f === 2
                      ? [c.Un, d.Un]
                      : [c.default];
                  default:
                    throw new z(b);
                }
              }, [b, c.Un, c.selected, c.default, d.Un, d.selected, e, f]),
              l = b === 0 || b === 1;
            return Y6(EZc, {
              ...a,
              pb: k,
              J3: a.xua === "s" ? void 0 : e ? d.selected : d.default,
              aKa: h,
              backgroundColor: {
                default: g,
                Kh: l ? c.Kh : g,
                active: l ? c.active : g,
                selected: l ? c.selected : g,
              },
              qGb: !!k,
            });
          },
          EZc = function (a) {
            const b = a.OCb,
              c = a.backgroundColor,
              d = a.aKa,
              e = a.V,
              f = a.kk,
              g = a.label,
              h = a.rrb,
              k = a.onChange;
            var l = a.xua;
            const m = a.Rr,
              n = a.CNa,
              p = a.TVb,
              q = a.pb,
              r = a.J3,
              t = a.qGb,
              u = a.vP,
              w = a.GPb,
              A = a.Tvb,
              B = a.Uvb,
              C = a.ZBa;
            a = a.Oc;
            const D = $6(),
              H = $6(),
              J = $6(),
              M = xZc(null),
              N = xZc(null),
              R = l === "s" ? "radio" : "checkbox";
            l = Z6(() => {
              var Q = g.stream.ht(0);
              const U = Rf(Sf, Q, "font-size") * GZc,
                Y = a7("100%", { ...Q, "font-weight": "bold", "font-size": U });
              Q =
                n !== void 0
                  ? a7(`${n.value}%`, {
                      ...Q,
                      "font-weight": "bold",
                      color: n.zd,
                      "font-size": U,
                    })
                  : void 0;
              return { oWb: Y, ZWa: Q };
            }, [n, g]);
            const S = m === 0;
            return b7("div", {
              className: c7(
                "VTAQRg",
                !(f || n) && "zt5zlQ",
                S && "A_ugOA",
                (m === 2 || m === 3) && "zMViSA",
                f && "Buj71Q"
              ),
              style: {
                "--_v6jRQ": c.default,
                "--CGAV4g": c.selected,
                "--6wmixw": c.Kh,
                "--LX33kQ": c.active,
                "--T5edVA": `${e}px`,
                "--XYYx_A": `${a / 2}px`,
                padding: `${w}px`,
                gap: p ? `${w / 2}px` : "0",
              },
              onClick: S
                ? (Q) => {
                    N.current?.contains(Q.target) ||
                      M.current?.contains(Q.target) ||
                      M.current?.click();
                  }
                : void 0,
              children: [
                Y6("input", {
                  "aria-invalid": !!u,
                  "aria-checked": f,
                  "aria-labelledby": q ? H : void 0,
                  "aria-describedby":
                    n || u ? `${n ? J : ""} ${u || ""}`.trim() : void 0,
                  id: D,
                  name: b,
                  readOnly: m === 2,
                  disabled: m === 3,
                  type: R,
                  value: g.stream.da,
                  className: "EP8SeA",
                  onChange: S ? k : void 0,
                  onClick: S
                    ? (Q) => {
                        R === "radio" && f && (Q.preventDefault(), k());
                      }
                    : void 0,
                  checked: f,
                  ref: M,
                }),
                !!p &&
                  n !== void 0 &&
                  Y6("div", {
                    className: "GpAzFg",
                    role: "meter",
                    "aria-valuenow": n.value,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "data-percent": n.value,
                    style: { width: `${n.value}%`, "--60vMXA": n.cub },
                  }),
                b7("label", {
                  className: c7(
                    "rSeRzQ",
                    q && "zSZK5w",
                    R === "checkbox" && "bHM4Bw"
                  ),
                  htmlFor: D,
                  ref: N,
                  children: [
                    !t &&
                      R === "checkbox" &&
                      Y6("div", {
                        className: c7("n4ooaw", f && "Jw4Eqw"),
                        style: {
                          "--THA9bg": r,
                          "--KBfK1Q": `${C}px`,
                          "--HgMgMg": HZc(c.selected, A, B),
                        },
                      }),
                    Y6("div", { children: Y6(h, { text: d ? IZc(g, d) : g }) }),
                  ],
                }),
                !!p &&
                  b7("div", {
                    className: "kdZGyA",
                    children: [
                      Y6("div", {
                        className: "jptFCw",
                        "aria-hidden": "true",
                        children: Y6(h, { text: l.oWb }),
                      }),
                      l.ZWa &&
                        Y6("div", {
                          id: J,
                          className: "wTQg_g",
                          children: Y6(h, { text: l.ZWa }),
                        }),
                    ],
                  }),
                q && Y6(q, { id: H, size: a }),
              ],
            });
          },
          HZc = function (a, b, c) {
            a = encodeURIComponent(a);
            return `url("data:image/svg+xml,%3Csvg width='${c}' height='${b}' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.75 4.5L3.25 7L9.25 1' stroke='${a}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;
          },
          JZc = function (a) {
            return Y6("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              width: a.size,
              height: a.size,
              "data-testid": d7.$Cb,
              children: Y6("path", {
                d: "M10.5086 3.2223C11.0966 1.95168 12.9027 1.95168 13.4906 3.2223L15.3964 7.34106C15.5158 7.5992 15.7603 7.77718 16.0427 7.81153L20.546 8.35932C21.9319 8.52791 22.4892 10.2389 21.4683 11.1914L18.1397 14.297C17.9325 14.4903 17.8396 14.7768 17.8939 15.055L18.7667 19.5241C19.0347 20.8967 17.5744 21.9552 16.3533 21.2734L12.4001 19.0659C12.1512 18.9269 11.8481 18.9269 11.5992 19.0659L7.64594 21.2734C6.42485 21.9552 4.96453 20.8967 5.23259 19.5241L6.10534 15.055C6.15967 14.7768 6.06675 14.4903 5.85952 14.297L2.53093 11.1914C1.5101 10.2389 2.06735 8.52791 3.45329 8.35932L7.95656 7.81153C8.23892 7.77718 8.48342 7.5992 8.60286 7.34106L10.5086 3.2223Z",
                fill: a.color,
              }),
            });
          },
          KZc = function (a) {
            return Y6("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              width: a.size,
              height: a.size,
              "data-testid": d7.RPb,
              children: Y6("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14.0351 7.97096L12.1293 3.8522C12.1091 3.80853 12.0904 3.79555 12.08 3.78921C12.0636 3.77925 12.0359 3.76933 11.9996 3.76933C11.9634 3.76933 11.9357 3.77925 11.9193 3.78921C11.9089 3.79555 11.8902 3.80853 11.87 3.8522L9.9642 7.97095C9.62663 8.7005 8.93567 9.20348 8.13769 9.30055L3.63442 9.84834C3.58694 9.85412 3.5688 9.86784 3.55948 9.87586C3.54493 9.88838 3.527 9.91162 3.51583 9.94591C3.50467 9.98021 3.50547 10.0095 3.50986 10.0282C3.51267 10.0402 3.51924 10.062 3.55421 10.0946L6.8828 13.2002C7.46846 13.7466 7.73106 14.5564 7.57754 15.3425L6.70478 19.8116C6.69558 19.8587 6.70308 19.8802 6.70782 19.8915C6.71525 19.9092 6.73186 19.9334 6.76115 19.9546C6.79044 19.9759 6.81867 19.9841 6.83778 19.9857C6.84998 19.9867 6.87273 19.9871 6.91464 19.9637L10.8678 17.7563C11.5713 17.3635 12.428 17.3635 13.1314 17.7563L17.0846 19.9637C17.1265 19.9871 17.1493 19.9867 17.1615 19.9857C17.1806 19.9841 17.2088 19.9759 17.2381 19.9546C17.2674 19.9334 17.284 19.9092 17.2914 19.8915C17.2962 19.8802 17.3037 19.8587 17.2945 19.8116L16.4217 15.3425C16.2682 14.5564 16.5308 13.7466 17.1165 13.2002L20.445 10.0946C20.48 10.062 20.4866 10.0402 20.4894 10.0282C20.4938 10.0095 20.4946 9.98021 20.4834 9.94591C20.4723 9.91162 20.4543 9.88838 20.4398 9.87586C20.4305 9.86784 20.4123 9.85412 20.3648 9.84834L15.8616 9.30055C15.0636 9.20348 14.3726 8.7005 14.0351 7.97096ZM13.4906 3.2223C12.9027 1.95168 11.0966 1.95168 10.5086 3.2223L8.60286 7.34105C8.48342 7.5992 8.23892 7.77718 7.95656 7.81153L3.45329 8.35932C2.06735 8.52791 1.5101 10.2389 2.53093 11.1914L5.85952 14.297C6.06675 14.4903 6.15967 14.7768 6.10534 15.055L5.23259 19.5241C4.96453 20.8967 6.42486 21.9552 7.64595 21.2734L11.5992 19.0659C11.8481 18.9269 12.1512 18.9269 12.4001 19.0659L16.3533 21.2734C17.5744 21.9552 19.0347 20.8967 18.7667 19.5241L17.8939 15.055C17.8396 14.7768 17.9325 14.4903 18.1397 14.297L21.4683 11.1914C22.4892 10.2389 21.9319 8.52791 20.546 8.35932L16.0427 7.81153C15.7603 7.77718 15.5158 7.5992 15.3964 7.34106L13.4906 3.2223Z",
                fill: a.color,
              }),
            });
          },
          LZc = function (a, b, c) {
            b ?? (b = 0);
            if (
              c != null &&
              ((c > b && a > b && a <= c) || (c < b && a > c && a <= b))
            )
              return "hover";
            if (a <= b) return "selected";
          },
          MZc = function (a) {
            switch (a) {
              case 1:
                return "email";
              case 2:
                return "text";
              default:
                throw new z(a);
            }
          },
          e7 = function (a) {
            var b = a.rg;
            a = a.footer.zd;
            var c = b.fontFamily;
            a: switch (((b = b.direction), b)) {
              case "l":
                b = "ltr";
                break a;
              case "r":
                b = "rtl";
                break a;
              default:
                throw new z(b);
            }
            return {
              color: a,
              "font-family": c,
              "text-align": "center",
              direction: b,
            };
          },
          f7 = function (a, b, c = !1) {
            switch (a) {
              case 0:
                return c ? b.BBa() : b.HUa();
              case 5:
              case 1:
                return c ? b.ABa() : b.IUa();
              case 2:
                return b.offline();
              case 3:
                return b.loading();
              case 4:
                return b.PFa();
              case 6:
                return b.URa();
              case 7:
                return b.Zta();
              default:
                throw new z(a);
            }
          },
          OZc = function (a) {
            const b = NZc(a, a.document.language ?? "en"),
              c = g7((d) => {
                a.OZ = d;
              });
            Array.isArray(b)
              ? c(b)
              : b.then(
                  h7.wrap(c),
                  h7.wrap(() => c([]))
                );
          },
          i7 = function (a, b, c, d) {
            b = a.OZ?.[b];
            d?.length
              ? b
                ? ((a = a.document.language),
                  (d = new __c.Db(b, a ? __c.Qaa(a) : void 0, __c.Raa, {
                    ignoreTag: !0,
                  }).format(Object.fromEntries(Object.entries(d)))))
                : (d = c(...d))
              : (d = b || c());
            return d;
          },
          NZc = async function (a, b) {
            const c = j7()();
            try {
              try {
                const { OZ: d } = c.r(
                    await c.s(
                      a.J_b ??
                        (a.J_b = __webpack_require__
                          .me(557652)
                          .then(() => __c.PZc))
                    )
                  ),
                  e = JSON.parse(d);
                return Object.values(e[b] ?? {});
              } catch {
                return c.r(), [];
              }
            } finally {
              c.s();
            }
          },
          QZc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          TZc = function (a, b) {
            switch (a.type) {
              case 0:
                var c = RZc(a.options, a.BPa);
                if (!c.length) return { a2: "", QW: [] };
                a = RZc(b, a.BPa);
                return {
                  a2: c.map(({ label: d }) => d).join(", "),
                  QW: a.map(({ id: d }) => d),
                };
              case 2:
              case 1:
                return (
                  (c = SZc(b, a.value)), { a2: a.value, QW: c ? [c.id] : [] }
                );
              default:
                throw new z(a);
            }
          },
          UZc = function (a) {
            switch (a.type) {
              case 0:
                return (
                  (a = RZc(a.options, a.BPa)
                    .map(({ label: b }) => b)
                    .join(", ")),
                  { a2: a, QW: a }
                );
              case 2:
              case 1:
                return { a2: a.value, QW: a.value };
              default:
                throw new z(a);
            }
          },
          RZc = function (a, b) {
            const c = [];
            for (const d of a) b.includes(d.id) && c.push(d);
            return c;
          },
          SZc = function (a, b) {
            for (const c of a) if (c.label.trimEnd() === b) return c;
          },
          WZc = function (a) {
            const { min: b = 0, max: c = Infinity } = a;
            if (b !== 0 || c !== Infinity) {
              var d = VZc({ min: b, max: c });
              if (d) return ({ length: e }) => d(e);
            }
          },
          VZc = function (a) {
            const { min: b = -Infinity, max: c = Infinity } = a;
            if (b !== -Infinity || c !== Infinity)
              return (d) => {
                if (b === c) {
                  if (d !== b)
                    return Xh({ TD: "out_of_bounds", params: { exact: b } });
                } else {
                  if (d < b)
                    return Xh({ TD: "out_of_bounds", params: { n0: b } });
                  if (d > c)
                    return Xh({ TD: "out_of_bounds", params: { nAa: c } });
                }
                return Wh();
              };
          },
          XZc = function (a) {
            return a === void 0 ? 1 : a === 0 ? Infinity : a;
          },
          a_c = function (a, b, c) {
            switch (a.type) {
              case "select":
                return new YZc(a, b, c);
              case "text":
                return new ZZc(a, b, c);
              case "number":
                return new $Zc(a, b, c);
              default:
                throw new z(a);
            }
          },
          l7 = function (a, b, c) {
            let d = a.qGa.get(b);
            const e = a.form.fields.first(({ id: f }) => f === b);
            if (!e) throw Error(`Field ${b} is not found`);
            if (c != null && e.type !== c)
              throw Error(`Field ${b} is not the expected type (${c})`);
            (d && d.Dd === e) ||
              ((c = k7(
                () =>
                  a.QGa.get()?.getContext(a.form.id)?.Uac?.get(b) ??
                  a.pGa.get(b)
              )),
              (d = a_c(e, a.context, c)),
              a.qGa.set(b, d));
            return d;
          },
          d_c = function (a) {
            let b;
            b_c(a.A4, () => {
              b = a.XK?.Eec({ ecc: () => a.form.Yt }).subscribe((c) => {
                m7(() => {
                  a.A4.set(c.results);
                });
              });
            });
            c_c(a.A4, () => {
              b?.unsubscribe();
            });
          },
          e_c = function (a, b) {
            if (a.form.fields.count() !== 1) return !1;
            const c = a.form.fields.first();
            return (
              c.type === "select" &&
              (c.variant?.type === b ||
                (c.variant?.type === void 0 &&
                  a.form.type === (b === "q" ? "quiz" : "poll")))
            );
          },
          g_c = function (a, { TD: b, hgb: c }) {
            const d = a.sh;
            if (d) {
              switch (b) {
                case 5:
                  b = K("STZx7Q");
                  break;
                default:
                  b = K("izckBA");
              }
              c = c
                ? { CO: K("mQhziQ"), onClick: g7(() => void a.submit()) }
                : void 0;
              d.kG({ ZH: b, group: f_c, iy: c });
            }
          },
          h_c = function (a) {
            m7(() => {
              for (const b of a.qGa.values()) b.reset();
            });
          },
          i_c = function (a) {
            return a.map((b) => b.result);
          },
          j_c = function (a, b) {
            const c = n7(b);
            b = a.LW.get(c);
            if ((a = a.jha.get(c))) return { status: 1, data: a };
            switch (b) {
              case void 0:
              case "uninitialized":
                return j0();
              case "initializing":
                return { status: 2 };
              case "initialized":
                return { status: 1, data: a };
              default:
                throw new z(b);
            }
          },
          l_c = function (a) {
            return o7(
              () => {
                const b = a.formData.Pz,
                  c = a.En.getSettings(b);
                return [a.formData.Yt, b, c];
              },
              async ([b, c, d]) => {
                const e = j7()();
                try {
                  if (d.status === 1) {
                    var f = n7({ Yt: b, submitter: d.data.TRa }),
                      g = a.LW.get(f);
                    if (g !== "initialized" && g !== "initializing") {
                      a.LW.set(f, "initializing");
                      var h = e.r(await e.s(a.XK.dbc({ Yt: b, Pz: c })));
                      m7(() => {
                        a.LW.get(f) !== "initialized" &&
                          (a.LW.set(f, "initialized"),
                          h.ok && h.value && a.jha.set(f, h.value));
                      });
                    }
                  }
                } finally {
                  e.s();
                }
              },
              { equals: k_c.structural }
            );
          },
          n7 = function (a) {
            return [a.Yt, JSON.stringify(a.submitter)].join(":");
          },
          m_c = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new z(a);
            }
          },
          n_c = function (a) {
            return a.some((b) => {
              switch (b.type) {
                case 4:
                  return !0;
                case 5:
                  return b.variant === 1;
                case 1:
                case 2:
                case 3:
                  return !1;
                default:
                  throw new z(b);
              }
            });
          },
          p_c = function (a) {
            return new o_c(a.data.C.value, a.En);
          };
        __c.DA.prototype.CNa = __c.ca(43, function () {
          return __c.yA(this, () => __c.kA(this.operators, "%", this.value));
        });
        __c.IL.prototype.bea = __c.ca(5, function (a, b) {
          return new __c.IL(this.cells, this.attrs.Re(a, b), this.jb);
        });
        __c.gU.prototype.bea = __c.ca(4, function (a, b) {
          return new __c.gU({ stream: this.stream.bea(a, b), Bb: this.Bb });
        });
        var a7 = (a, b) => __c.ji.create(__c.n5(a, b)),
          q_c = __webpack_require__(296713),
          r_c = q_c.Fragment,
          Y6 = q_c.jsx,
          b7 = q_c.jsxs;
        var p7 = __webpack_require__(270531).PA;
        var q7 = __webpack_require__(978109),
          wZc = q7.Children,
          s_c = q7.createElement,
          t_c = q7.useEffect,
          $6 = q7.useId,
          yZc = q7.useLayoutEffect,
          Z6 = q7.useMemo,
          xZc = q7.useRef,
          vZc = q7.useState;
        var zZc = __webpack_require__(594314).A;
        var u_c = __webpack_require__,
          v_c = u_c(208463),
          c7 = u_c.n_x(v_c)();
        var r7 = __webpack_require__(186901),
          k7 = r7.EW,
          m7 = r7.h5,
          w_c = r7.L3,
          k_c = r7.m3,
          o7 = r7.mJ,
          c_c = r7.q$,
          s7 = r7.sH,
          b_c = r7.tC,
          g7 = r7.XI;
        var x_c = __webpack_require__(536618),
          y_c = x_c.iB,
          t7 = x_c.uP;
        var h7 = __webpack_require__(245307).Fm;
        var j7 = __webpack_require__(75402)._;
        var u7 = __c.zc("3ef8e263", !1);
        var z_c = {
          thin: "thin",
          extralight: "thin",
          light: "thin",
          normal: "extralight",
          medium: "normal",
          semibold: "normal",
          bold: "normal",
          ultrabold: "normal",
          heavy: "normal",
        };
        var d7 = __c.Mx.wna
          ? {
              mXb: "3ndmh4u",
              statusText: "1t7jg8u",
              $Cb: "36iimsp",
              RPb: "1a1nvnm",
              label: "32aek6n",
              U8b: "2tk7d5",
              Spc: "2n1bnv6",
              xbc: "2na0kmu",
              Bcc: "3qf811p",
              Acc: "246bpa8",
              Toc: "3p3qlie",
              V8b: "3tchg28",
            }
          : {};
        var v7 = p7((a) => {
          const {
              Dd: b,
              Jf: c,
              cv: d,
              errorMessage: e,
              vP: f,
              fca: g = !0,
            } = a,
            h = c.zj,
            k = b.label.stream.Ew("font-family")["font-family"];
          var l = b.label.stream.Ew("direction").direction;
          const m = g ? "fieldset" : "div",
            n = g ? "legend" : "label";
          l = l.values().next().value ?? "ltr";
          return b7(m, {
            className: "_4ILOcQ",
            onTouchEnd: (p) => {
              u7 || p.stopPropagation();
            },
            dir: l,
            children: [
              b.Djb &&
                Y6(n, {
                  htmlFor: g ? void 0 : a.hba,
                  "data-testid": d7.label,
                  style: { paddingBlockEnd: `${b.padding.OJb}px` },
                  children: Y6(h, {
                    text: d.required ? uZc(b.label) : b.label,
                  }),
                }),
              a.children,
              e &&
                Y6("div", {
                  id: f,
                  className: "o_7gvw",
                  style: { "--wfznTw": b.Gk, "--qMNgbA": b.Cj * 1.5 },
                  role: "alert",
                  children: Y6(h, {
                    text: a7(e ?? "", {
                      "font-family": k.values().next().value,
                      direction: l,
                      "font-size": b.dCb,
                      color: b.errorColor,
                      "text-align": "end",
                    }),
                  }),
                }),
            ],
          });
        });
        var A_c = p7((a) => {
          const b = a.Dd,
            c = a.Jf,
            d = a.cv,
            e = a.R4,
            f = a.Rr,
            g = d.gJ,
            h = $6(),
            k = __c.y(d.min);
          a = __c.y(d.max);
          x(k >= 1);
          x(a <= 10);
          a = Array.from({ length: a - k + 1 }, (n, p) => ({ JTb: p + k }));
          const l = X6(e, d.sN, b),
            m = $6();
          return Y6(v7, {
            Dd: b,
            Jf: c,
            cv: d,
            errorMessage: l,
            vP: m,
            fca: !0,
            children: Y6(AZc, {
              XJa: b.sizes.lBa,
              gridGap: b.gridGap,
              children: a.map(({ JTb: n }) => {
                var p = Number(g);
                const q = `${h}-${n}`,
                  r =
                    f !== 0
                      ? void 0
                      : g7(() => {
                          d.Ku = String(n);
                          d.$y = !0;
                        });
                p = p === n;
                return b7(
                  "label",
                  {
                    htmlFor: q,
                    className: c7(
                      "dAwWRA",
                      f === 0 && !p && "oKt_Cg",
                      (f === 2 || f === 3) && "HLJxlw",
                      p && "kpt6Eg"
                    ),
                    style: {
                      borderRadius: b.V,
                      padding: `${b.padding.Oa}px`,
                      "--dayejg": b.backgroundColor.default,
                      "--1PG0Mg": b.backgroundColor.Kh,
                      "--9P_0YQ": b.backgroundColor.active,
                      "--1y49lg": b.backgroundColor.selected,
                      "---3Rdqg": b.backgroundColor.Un,
                      "--Cjk51Q": b.accentColor,
                    },
                    onClick: r,
                    children: [
                      Y6("input", {
                        "aria-invalid": !!l,
                        "aria-describedby": l ? m : void 0,
                        checked: p,
                        type: "radio",
                        id: q,
                        name: h,
                        value: n,
                        className: "Mh7mQg",
                        onChange: r,
                        disabled: f === 3,
                        readOnly: f === 2,
                      }),
                      Y6("div", {
                        className: "_1TTelg",
                        children: Y6(c.zj, {
                          text: a7(String(n), {
                            "font-family": Rf(
                              Sf,
                              b.label.stream.qj(0),
                              "font-family"
                            ),
                            color: p ? b.zd.selected : b.zd.default,
                            "text-align": "center",
                            "font-size": b.sizes.v$,
                          }),
                        }),
                      }),
                    ],
                  },
                  n
                );
              }),
            }),
          });
        });
        var B_c = [
            {
              vea: 1,
              pb: ({ size: a, color: b }) =>
                b7("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  width: a,
                  height: a,
                  children: [
                    Y6("path", {
                      fill: b,
                      d: "M12 13.25c2.492 0 3.806 1.625 4.545 3.144l.14.301.028.072a.75.75 0 0 1-1.363.606l-.035-.068-.12-.26C14.571 15.762 13.65 14.75 12 14.75c-1.76 0-2.69 1.151-3.314 2.555a.75.75 0 0 1-1.372-.61C8.024 15.1 9.342 13.25 12 13.25ZM9.402 9.548a.749.749 0 1 1 1.196.904c-.449.593-1.655 1.473-3.389 1.269l-.354-.056-.074-.018a.75.75 0 0 1 .287-1.465l.31.047c1.14.135 1.848-.448 2.024-.681Zm4.146-.146a.75.75 0 0 1 1.05.146c.176.233.885.816 2.024.681l.31-.047a.75.75 0 0 1 .287 1.464l-.075.019-.353.056c-1.734.204-2.94-.676-3.389-1.269a.75.75 0 0 1 .146-1.05Z",
                    }),
                    Y6("path", {
                      fill: b,
                      "fill-rule": "evenodd",
                      d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                      "clip-rule": "evenodd",
                    }),
                  ],
                }),
              label: K("3Spodw"),
            },
            {
              vea: 2,
              pb: ({ size: a, color: b }) =>
                b7("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: a,
                  height: a,
                  children: [
                    Y6("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M12.001 21.802c-5.405 0-9.801-4.397-9.801-9.801S6.596 2.2 12 2.2s9.801 4.396 9.801 9.801-4.397 9.801-9.801 9.801ZM16.188 9.97a1.011 1.011 0 1 1-2.022 0 1.011 1.011 0 0 1 2.022 0Zm-7.363 1.011a1.011 1.011 0 1 0 0-2.022 1.011 1.011 0 0 0 0 2.022ZM3.7 12.001C3.7 7.424 7.424 3.7 12 3.7s8.301 3.724 8.301 8.301-3.724 8.301-8.301 8.301S3.7 16.578 3.7 12.001Z",
                      fill: b,
                    }),
                    Y6("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M12.009 14.458c-1.554 0-2.97.817-3.9 2.15a.875.875 0 0 1-1.436-1c1.213-1.74 3.137-2.9 5.336-2.9 2.2 0 4.123 1.16 5.336 2.9a.875.875 0 0 1-1.435 1c-.93-1.333-2.347-2.15-3.901-2.15Z",
                      fill: b,
                    }),
                  ],
                }),
              label: K("bqTQmw"),
            },
            {
              vea: 3,
              pb: ({ size: a, color: b }) =>
                b7("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  width: a,
                  height: a,
                  children: [
                    Y6("path", {
                      fill: b,
                      d: "M16 14.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h8ZM8.825 8.959a1.012 1.012 0 1 1 0 2.024 1.012 1.012 0 0 1 0-2.024Zm6.352 0a1.012 1.012 0 1 1 0 2.023 1.012 1.012 0 0 1 0-2.023Z",
                    }),
                    Y6("path", {
                      fill: b,
                      "fill-rule": "evenodd",
                      d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                      "clip-rule": "evenodd",
                    }),
                  ],
                }),
              label: K("k/uS7g"),
            },
            {
              vea: 4,
              pb: ({ size: a, color: b }) =>
                Y6("svg", {
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: a,
                  height: a,
                  children: Y6("path", {
                    "fill-rule": "evenodd",
                    fill: b,
                    d: "M12.001 21.802C6.59595 21.802 2.19995 17.405 2.19995 12.001C2.19995 6.59695 6.59595 2.19995 12.001 2.19995C17.406 2.19995 21.802 6.59595 21.802 12.001C21.802 17.406 17.405 21.802 12.001 21.802ZM16.188 9.96995C16.188 10.5283 15.7353 10.981 15.177 10.981C14.6186 10.981 14.166 10.5283 14.166 9.96995C14.166 9.41159 14.6186 8.95895 15.177 8.95895C15.7353 8.95895 16.188 9.41159 16.188 9.96995ZM8.82495 10.981C9.38331 10.981 9.83595 10.5283 9.83595 9.96998C9.83595 9.41162 9.38331 8.95898 8.82495 8.95898C8.26659 8.95898 7.81395 9.41162 7.81395 9.96998C7.81395 10.5283 8.26659 10.981 8.82495 10.981ZM16.235 13.164C14.498 16.944 9.57695 17.018 7.76595 13.259C7.27595 12.242 5.76695 13.13 6.25495 14.142C8.60795 19.026 15.478 18.984 17.747 14.047C18.215 13.029 16.706 12.139 16.235 13.164ZM3.69995 12.001C3.69995 7.42395 7.42395 3.69995 12.001 3.69995C16.578 3.69995 20.302 7.42395 20.302 12.001C20.302 16.578 16.578 20.302 12.001 20.302C7.42395 20.302 3.69995 16.578 3.69995 12.001Z",
                  }),
                }),
              label: K("ssYkyg"),
            },
            {
              vea: 5,
              pb: ({ size: a, color: b }) =>
                b7("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  width: a,
                  height: a,
                  children: [
                    Y6("path", {
                      fill: b,
                      "fill-rule": "evenodd",
                      d: "M17.799 12.277a.752.752 0 0 1 .951.723c0 3.298-3.156 5.75-6.75 5.75S5.25 16.298 5.25 13a.75.75 0 0 1 .951-.723l.005.002.023.006.094.025c.084.021.208.053.366.09.318.076.775.178 1.323.28 1.1.204 2.551.403 3.988.403 1.437 0 2.887-.2 3.988-.403a26.84 26.84 0 0 0 1.689-.37l.093-.025.024-.006.005-.002Zm-1.537 1.877c-1.15.213-2.699.429-4.262.429-1.563 0-3.113-.216-4.262-.429-.31-.057-.594-.116-.842-.17.54 1.804 2.527 3.266 5.104 3.266s4.563-1.462 5.102-3.266c-.247.054-.53.113-.84.17Z",
                      "clip-rule": "evenodd",
                    }),
                    Y6("path", {
                      fill: b,
                      d: "M8.55 8.25c.625 0 1.125.166 1.531.444.291.2.51.443.679.664l.154.212.041.065a.75.75 0 0 1-1.223.855l-.046-.06-.119-.161a1.51 1.51 0 0 0-.336-.338c-.14-.097-.34-.181-.681-.181s-.542.084-.682.18c-.157.109-.29.266-.454.5a.75.75 0 0 1-1.228-.86c.186-.266.444-.609.833-.876.405-.278.906-.444 1.53-.444Zm6.9 0c.625 0 1.126.166 1.531.444.291.2.51.443.68.664l.153.212.041.065a.75.75 0 0 1-1.222.855l-.047-.06-.118-.161a1.512 1.512 0 0 0-.336-.338c-.14-.097-.34-.18-.682-.181-.34 0-.541.084-.681.18-.158.109-.29.266-.454.5a.75.75 0 0 1-1.23-.86c.187-.266.446-.609.834-.876.406-.278.906-.444 1.531-.444Z",
                    }),
                    Y6("path", {
                      fill: b,
                      "fill-rule": "evenodd",
                      d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                      "clip-rule": "evenodd",
                    }),
                  ],
                }),
              label: K("WKDtIg"),
            },
          ],
          C_c = p7((a) => {
            const b = a.Dd,
              c = a.Jf,
              d = a.cv,
              e = a.R4,
              f = a.Rr,
              g = d.gJ;
            x(d.min != null && d.min >= 1);
            x(d.max != null && d.max <= 5);
            a = B_c.slice(d.min - 1, d.max);
            const h = X6(e, d.sN, b),
              k = $6(),
              l = $6();
            return Y6(v7, {
              Dd: b,
              Jf: c,
              cv: d,
              errorMessage: h,
              vP: k,
              fca: !0,
              children: Y6(AZc, {
                XJa: b.sizes.lBa,
                gridGap: b.gridGap,
                children: a.map(({ vea: m, pb: n, label: p }) => {
                  const q = Number(g),
                    r = g === String(m),
                    t = `${l}-${m}`,
                    u =
                      f === 2 || f === 3
                        ? void 0
                        : g7(() => {
                            d.Ku = String(m);
                          });
                  return b7(
                    "label",
                    {
                      htmlFor: t,
                      className: c7(
                        "r4VAMw",
                        r && "jc6y_A",
                        (f === 2 || f === 3) && "UpIThA",
                        f === 0 && !r && "SMPq5g"
                      ),
                      style: {
                        "--hMlWEg": b.backgroundColor.default,
                        "---127VA": b.backgroundColor.Kh,
                        "--9x4z1A": b.backgroundColor.active,
                        "--W5Lfog": b.backgroundColor.selected,
                        "--GtGNYg": b.backgroundColor.Un,
                        "--r8_7Tw": b.accentColor,
                        borderRadius: b.V,
                        padding: `${b.padding.Oa}px`,
                      },
                      onClick: u,
                      children: [
                        Y6("span", { className: "Mh7mQg", children: p }),
                        Y6("input", {
                          "aria-invalid": !!h,
                          "aria-describedby": h ? k : void 0,
                          checked: q === m,
                          type: "radio",
                          id: t,
                          name: l,
                          value: m,
                          className: "Mh7mQg",
                          onChange: u,
                          disabled: f === 3,
                          readOnly: f === 2,
                        }),
                        Y6("div", {
                          className: "aOiRWQ",
                          style: { width: b.sizes.Oc, height: b.sizes.Oc },
                          children: Y6(n, {
                            size: b.sizes.Oc,
                            color: r ? b.J3.selected : b.J3.default,
                          }),
                        }),
                      ],
                    },
                    m
                  );
                }),
              }),
            });
          });
        var D_c = p7((a) => {
          const b = a.Dd,
            c = a.Jf,
            d = a.cv,
            e = a.Rr;
          var f = a.R4;
          a = d.gJ;
          const g = c.bja,
            h = !!d.sN,
            k = $6(),
            l = Z6(
              () =>
                h
                  ? {
                      default: b.borderColor.error,
                      Kh: b.borderColor.error,
                      focus: b.borderColor.error,
                    }
                  : e === 0 || e === 1
                  ? {
                      default: b.borderColor.default,
                      Kh: b.borderColor.Kh,
                      focus: b.borderColor.focus,
                    }
                  : {
                      default: b.borderColor.default,
                      Kh: b.borderColor.default,
                      focus: b.borderColor.default,
                    },
              [
                b.borderColor.default,
                b.borderColor.error,
                b.borderColor.focus,
                b.borderColor.Kh,
                e,
                h,
              ]
            ),
            m = b.label.stream.qj(0),
            n = z_c[Rf(Sf, m, "font-weight")];
          f = X6(f, d.sN, b);
          const p = $6();
          return Y6(v7, {
            Dd: b,
            Jf: c,
            cv: d,
            errorMessage: f,
            vP: k,
            fca: !1,
            hba: p,
            children: b7("div", {
              className: "ybpBnQ",
              children: [
                Y6(g, {
                  boxSizing: "border-box",
                  id: p,
                  type: "text",
                  inputMode: "numeric",
                  IGa: Rf(Sf, m, "font-family"),
                  fontSize: `${b.sizes.v$}px`,
                  jk: b.zd,
                  fontWeight: n,
                  value: a ?? "",
                  name: b.id,
                  backgroundColor: "transparent",
                  borderStyle: "solid",
                  outline: "none",
                  borderWidth: b.sizes.TAa,
                  SAa: l,
                  borderRadius: b.V,
                  ariaInvalid: h,
                  paddingInlineEnd: h ? b.sizes.Oc * 1.5 : void 0,
                  $c: h ? k : void 0,
                  onChange: g7((q) => {
                    d.Ku = q.target.value;
                  }),
                  onBlur: g7(() => {
                    d.$y = !0;
                  }),
                  padding: b.padding.Oa,
                  readOnly: e === 2,
                  disabled: e === 3,
                  width: "100%",
                }),
                h &&
                  Y6("div", {
                    className: "_3v99oA",
                    style: { "--3tgqzg": `${b.sizes.Oc * 0.4}px` },
                    children: Y6(BZc, { size: b.sizes.Oc }),
                  }),
              ],
            }),
          });
        });
        var E_c = (a) => Cb("JWYKDQ", [a]),
          F_c = () => K("jh7u2w"),
          G_c = (a) => Cb("Jj1O+A", [a]),
          H_c = (a) => Cb("sUWUOA", [a]),
          I_c = (a) => Cb("Q5Pg4w", [a]),
          J_c = (a) => Cb("4EBAAA", [a]),
          K_c = () => K("orPgUw"),
          L_c = () => K("BtJs5g"),
          M_c = () => K("pgYrWw"),
          N_c = () => K("As1GTA"),
          O_c = () => K("xSH8Og"),
          P_c = () => K("wutQEA"),
          Q_c = (a) => Cb("Qso6Xw", [a]),
          R_c = () => K("z/bN8g"),
          S_c = (a) => Cb("Aa3fvQ", [a]),
          T_c = () => K("2Q9Q+A"),
          U_c = (a) => Cb("6QpLYA", [a]),
          V_c = (a) => Cb("SWeX4Q", [a]),
          W_c = () => K("nFbxIQ"),
          X_c = () => K("ktnWSg"),
          Y_c = (a) => Cb("U28wGg", [a]),
          Z_c = () => K("VGvKlQ"),
          $_c = (a) => Cb("kbfbNQ", [a]),
          a0c = () => K("fNQh9A"),
          b0c = () => K("i3mNPA"),
          c0c = () => K("zt/K0Q"),
          d0c = () => K("z/APcw"),
          e0c = () => K("/Y/V2Q"),
          f0c = () => K("Ahvd0w");
        var GZc = 10 / 14,
          g0c = p7((a) => {
            const b = a.Dd,
              c = a.Jf,
              d = a.cv,
              e = a.Rr,
              f = a.XHa;
            a = a.R4;
            const g = b.options,
              { gJ: h = [], feedback: k } = d,
              l = $6(),
              m = $6(),
              n = k7(() => k.get()?.UO),
              p = k7(() => k.get()?.ZQb),
              q = X6(a, d.sN, b),
              r = e === 0 || e === 1;
            return Y6(v7, {
              Dd: b,
              Jf: c,
              cv: d,
              errorMessage: q,
              vP: l,
              children: Y6("div", {
                className: "iaCeXQ",
                style: { gridGap: `${b.rowGap}px` },
                children: g.map((t) => {
                  var u = h.includes(t.id);
                  const w = {
                    xua: b.xua,
                    OCb: `select-${m}`,
                    V: b.V,
                    label: t.label,
                    background: b.PB,
                    kk: u,
                    rrb: c.zj,
                    vP: q ? l : void 0,
                    GPb: b.padding.Oa,
                    Tvb: b.sizes.Kvb,
                    Uvb: b.sizes.Mvb,
                    ZBa: b.sizes.ZBa,
                    Oc: b.sizes.Oc,
                    Rr: e,
                  };
                  switch (b.type) {
                    case 1:
                      var A = p.get();
                      A = A
                        ? Math.round(
                            (100 * (A.Nmc.get(t.id) ?? 0)) / (A.total || 1)
                          )
                        : void 0;
                      return s_c(EZc, {
                        ...w,
                        key: t.id,
                        backgroundColor: {
                          default: A != null ? b.wTa.track : b.PB.default,
                          Kh: b.PB.Kh,
                          active: b.PB.active,
                          selected: A != null ? b.sUa.track : b.PB.selected,
                        },
                        aKa: u ? b.TE.selected : r ? void 0 : b.TE.Un,
                        J3: u ? b.TE.selected : b.TE.default,
                        CNa:
                          A != null
                            ? {
                                value: A,
                                cub: u ? b.sUa.rO : b.wTa.rO,
                                zd: u ? b.sUa.text : b.wTa.text,
                              }
                            : void 0,
                        TVb: !0,
                        onChange: g7(() => {
                          d.xSa(t.id);
                          d.$y = !0;
                          f?.();
                        }),
                      });
                    case 2:
                      return (
                        (u = n.get()),
                        (u =
                          u == null
                            ? 0
                            : u.includes(t.id)
                            ? w.kk
                              ? 4
                              : 2
                            : w.kk
                            ? 3
                            : 1),
                        s_c(FZc, {
                          ...w,
                          key: t.id,
                          PB: b.PB,
                          TE: b.TE,
                          hCb: u,
                          onChange: g7(() => {
                            d.xSa(t.id);
                            d.$y = !0;
                          }),
                        })
                      );
                    case 3:
                      return s_c(EZc, {
                        ...w,
                        key: t.id,
                        onChange: g7(() => {
                          d.xSa(t.id);
                          d.$y = !0;
                        }),
                        J3: u ? b.TE.selected : b.TE.default,
                        aKa: u ? b.TE.selected : r ? void 0 : b.TE.Un,
                        backgroundColor: {
                          default: b.PB.default,
                          selected: b.PB.selected,
                          Kh: b.PB.Kh,
                          active: b.PB.active,
                        },
                      });
                    default:
                      throw new z(b);
                  }
                }),
              }),
            });
          }),
          CZc = (a) =>
            Y6("div", {
              id: a.id,
              className: "_5MHe6g",
              "aria-label": K("i3mNPA"),
              children: b7("svg", {
                width: a.size,
                height: a.size,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "gBYSAw",
                children: [
                  Y6("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "white",
                  }),
                  Y6("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "#00873D",
                  }),
                  Y6("path", {
                    d: "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z",
                    fill: "white",
                  }),
                ],
              }),
            }),
          DZc = (a) =>
            Y6("div", {
              id: a.id,
              className: "_5MHe6g",
              "aria-label": K("As1GTA"),
              children: b7("svg", {
                width: a.size,
                height: a.size,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "gBYSAw",
                children: [
                  Y6("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "white",
                  }),
                  Y6("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "#C8001E",
                  }),
                  Y6("path", {
                    d: "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                    fill: "white",
                  }),
                ],
              }),
            });
        var i0c = p7((a) => {
            const b = a.Dd,
              c = a.Jf,
              d = a.cv,
              e = a.R4,
              f = a.Rr,
              g = d.J7.ok ? d.J7.value : void 0,
              h = $6(),
              k = $6(),
              l = $6(),
              [m, n] = vZc(null);
            x(d.min != null && d.min >= 1);
            x(d.max != null && d.max <= 10);
            const p = X6(e, d.sN, b),
              q = f === 0,
              r = f === 0 || f === 1;
            return Y6(v7, {
              Dd: b,
              Jf: c,
              cv: d,
              errorMessage: p,
              vP: k,
              fca: !0,
              children: Y6(AZc, {
                XJa: b.Oc,
                gridGap: 0,
                children: Array.from({ length: d.max }, (t, u) => {
                  const w = u + 1;
                  t = `${l}-${w}`;
                  u = LZc(w, g, m);
                  const A = q
                    ? g7(() => {
                        d.Ku = w === g ? "" : String(w);
                        d.$y = !0;
                      })
                    : void 0;
                  return b7(
                    "label",
                    {
                      htmlFor: t,
                      className: c7("Rw_cTw", !r && "g0Fw6w"),
                      style: { "--4yIcLg": b.accentColor },
                      onMouseEnter: q ? () => n(w) : void 0,
                      onMouseLeave: q ? () => n(null) : void 0,
                      children: [
                        Y6("input", {
                          "aria-invalid": !!p,
                          "aria-describedby": p ? k : void 0,
                          checked: g === w,
                          type: "radio",
                          id: t,
                          name: h,
                          value: w,
                          "aria-label": Cb("1aqRWg", [w]),
                          className: "Mh7mQg",
                          onClick: A,
                          onChange: h0c,
                          disabled: f === 3,
                          readOnly: f === 2,
                        }),
                        u != null
                          ? Y6(JZc, {
                              size: b.Oc,
                              color: r
                                ? u === "hover"
                                  ? b.fillColor.Kh
                                  : b.fillColor.selected
                                : b.fillColor.Un,
                            })
                          : Y6(KZc, {
                              size: b.Oc,
                              color: r
                                ? b.borderColor.default
                                : b.borderColor.Un,
                            }),
                      ],
                    },
                    w
                  );
                }),
              }),
            });
          }),
          h0c = () => {};
        var j0c = p7((a) => {
          const b = a.Dd,
            c = a.Jf,
            d = a.cv,
            e = a.Rr;
          var f = a.R4;
          a = d.gJ;
          const g = c.bja,
            h = c.Bya,
            k = !!d.sN,
            l = $6(),
            m = e === 0 || e === 1;
          var n = Z6(
            () =>
              k
                ? {
                    default: b.borderColor.error,
                    Kh: b.borderColor.error,
                    focus: b.borderColor.error,
                  }
                : m
                ? {
                    default: b.borderColor.default,
                    Kh: b.borderColor.Kh,
                    focus: b.borderColor.focus,
                  }
                : {
                    default: b.borderColor.default,
                    Kh: b.borderColor.default,
                    focus: b.borderColor.default,
                  },
            [
              b.borderColor.default,
              b.borderColor.error,
              b.borderColor.focus,
              b.borderColor.Kh,
              m,
              k,
            ]
          );
          const p = b.label.stream.qj(0),
            q = z_c[Rf(Sf, p, "font-weight")],
            r = $6();
          n = {
            boxSizing: "border-box",
            IGa: Rf(Sf, p, "font-family"),
            fontSize: `${b.sizes.v$}px`,
            jk: m ? b.zd.default : b.zd.Un,
            fontWeight: q,
            padding: b.padding.Oa,
            paddingInlineEnd: k ? b.sizes.Oc * 1.5 : void 0,
            leb: b.placeholder.color,
            width: "100%",
            SAa: n,
            backgroundColor: "transparent",
            borderStyle: "solid",
            outline: "none",
            borderRadius: b.V,
            borderWidth: b.sizes.TAa,
            ariaInvalid: k,
            $c: k ? l : void 0,
          };
          f = X6(f, d.sN, b);
          return Y6(v7, {
            Dd: b,
            Jf: c,
            cv: d,
            errorMessage: f,
            vP: l,
            fca: !1,
            hba: r,
            children: b7("div", {
              className: "DsSAig",
              children: [
                b.VQ > 1
                  ? Y6(h, {
                      ...n,
                      rows: b.VQ,
                      id: r,
                      name: b.id,
                      placeholder: b.placeholder.text,
                      disabled: e === 3,
                      readOnly: e === 2,
                      onBlur: g7(() => {
                        d.$y = !0;
                      }),
                      onChange: g7((t) => {
                        d.Ku = t.target.value;
                      }),
                      resize: "none",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      value: a ?? "",
                    })
                  : Y6(g, {
                      ...n,
                      type: MZc(b.variant),
                      id: r,
                      name: b.id,
                      disabled: e === 3,
                      readOnly: e === 2,
                      onChange: g7((t) => {
                        d.Ku = t.target.value;
                      }),
                      onBlur: g7(() => {
                        d.$y = !0;
                      }),
                      value: a ?? "",
                      placeholder: b.placeholder.text,
                    }),
                k &&
                  Y6("div", {
                    className: c7("Xz8a5Q", b.VQ > 1 && "XsCoFw"),
                    style: { "--ozZJmw": `${b.sizes.Oc * 0.4}px` },
                    children: Y6(BZc, { size: b.sizes.Oc }),
                  }),
              ],
            }),
          });
        });
        var l0c = (a) => {
            var b = a.Dd;
            return Y6("div", {
              className: c7(
                "vhG7mw",
                "wYAs1w",
                !!(
                  b.type === 4 ||
                  (b.type === 5 && b.variant === 3) ||
                  (b.type === 5 && b.variant === 1)
                ) && "_1MkJMA"
              ),
              children: Y6(k0c, { ...a }),
            });
          },
          k0c = p7(({ Dd: a, Kr: b, ...c }) => {
            switch (a.type) {
              case 4:
                var d = t7(() => l7(b, a.id, "text"));
                return Y6(j0c, { ...c, Dd: a, cv: d, Rr: b.Rr });
              case 5:
                return (
                  (d = t7(() => l7(b, a.id, "number"))),
                  Y6(m0c, { ...c, Dd: a, cv: d, Rr: b.Rr })
                );
              case 1:
              case 2:
              case 3:
                d = t7(() => l7(b, a.id, "select"));
                const e = t7(() => (b.QI ? () => b.XHa(a.id) : void 0));
                return Y6(g0c, { ...c, Dd: a, cv: d, Rr: b.Rr, XHa: e });
              default:
                throw new z(a);
            }
          }),
          m0c = ({ Dd: a, ...b }) => {
            switch (a.variant) {
              case 1:
                return Y6(D_c, { Dd: a, ...b });
              case 2:
                return Y6(C_c, { Dd: a, ...b });
              case 4:
                return Y6(A_c, { Dd: a, ...b });
              case 3:
                return Y6(i0c, { Dd: a, ...b });
              default:
                throw new z(a);
            }
          };
        var n0c = p7((a) => {
          var b = a.iy;
          const c = a.Kr;
          a = a.gr.zj;
          const d = c.Rr,
            e = b.backgroundColor,
            f = b.label;
          b = b.padding;
          return Y6("button", {
            className: c7(
              "oA1OOg",
              d === 0 && "MkpYkA",
              (d === 2 || d === 3) && "RUKPJg"
            ),
            style: {
              "--fS0DFQ": e.default,
              "--MD0Pqg": e.Kh,
              "--DFILqA": e.active,
              "--Fr9rFw": e.Un,
              paddingInlineStart: b.ya,
              paddingInlineEnd: b.Ua,
              paddingBlockStart: b.qa,
              paddingBlockEnd: b.Ea,
            },
            disabled: d !== 0,
            onClick: g7(() => c.submit()),
            onTouchEnd: (g) => {
              u7 || g.stopPropagation();
            },
            children: Y6(a, { text: f }),
          });
        });
        var s0c = p7(({ form: a, gr: b, Dw: c, wK: d, Kr: e }) => {
            if (e.QI) return Y6(o0c, { Kr: e, form: a, gr: b, Dw: c, wK: d });
            if (e_c(e, "q"))
              return Y6(p0c, { Kr: e, form: a, gr: b, Dw: c, wK: d });
            const f = a.footer,
              g = a.EP,
              h = a.iy,
              k = b.zj,
              l = e.Rza,
              m = e.aP,
              n = e7(a);
            return b7("footer", {
              className: "GuCAHg",
              style: {
                paddingInlineStart: `${g.ya}px`,
                paddingInlineEnd: `${g.Ua}px`,
                paddingBlockEnd: `${g.Ea}px`,
              },
              children: [
                h != null &&
                  (m === 7
                    ? Y6("div", {
                        style: {
                          paddingBlockStart: `${g.RRa}px`,
                          paddingBlockEnd: `${g.QRa}px`,
                        },
                        "data-testid": d7.mXb,
                        children: Y6(k, {
                          text: a7(c.Zta(), {
                            ...n,
                            "font-size": f.hIa,
                            "font-weight": "bold",
                          }),
                        }),
                      })
                    : Y6(n0c, { iy: h, gr: b, Kr: e })),
                b7("div", {
                  style: { paddingBlockStart: `${a.EP.wra}px` },
                  children: [
                    m !== 7 &&
                      Y6("div", {
                        "data-testid": d7.statusText,
                        children: Y6(k, {
                          text: a7(f7(m, c, f.SVb), {
                            ...n,
                            "font-size": f.l1,
                          }),
                        }),
                      }),
                    l &&
                      m === 7 &&
                      Y6("div", {
                        className: "J8N9SA",
                        children: Y6(q0c, { Dw: c, gr: b, form: a, Kr: e }),
                      }),
                    f.dIa &&
                      m !== 2 &&
                      Y6("div", {
                        className: "Wql4tQ",
                        children: Y6(r0c, { Dw: c, gr: b, form: a, wK: d }),
                      }),
                  ],
                }),
              ],
            });
          }),
          q0c = p7(({ Dw: a, gr: b, form: c, Kr: d }) => {
            b = b.zj;
            const e = c.footer;
            c = e7(c);
            return Y6("a", {
              role: "button",
              href: "#",
              className: "_0UCMkA",
              onClick: g7((f) => {
                f.preventDefault();
                d.qub();
              }),
              onTouchEnd: (f) => {
                u7 || f.stopPropagation();
              },
              children: Y6(b, {
                text: a7(a.SRa(), {
                  ...c,
                  "font-size": e.l1,
                  decoration: "underline",
                }),
              }),
            });
          }),
          r0c = p7(({ Dw: a, gr: b, form: c, wK: d }) => {
            b = b.zj;
            const e = c.footer;
            c = e7(c);
            return Y6("a", {
              href: d.href,
              target: "_blank",
              onClick: (f) => {
                d.onClick && (d.onClick(), f.preventDefault());
              },
              onTouchEnd: (f) => {
                u7 || f.stopPropagation();
              },
              children: Y6(b, {
                text: a7(a.ENa(), {
                  ...c,
                  "font-size": e.l1,
                  decoration: "underline",
                }),
              }),
            });
          }),
          o0c = p7(({ Kr: a, form: b, gr: c, Dw: d, wK: e }) => {
            const f = b.EP,
              g = b.footer,
              h = c.zj,
              k = a.aP,
              l = e7(b);
            var m = f7(k, d);
            a = a.QI
              ? a.A4.get()?.fields.get(a.form.fields.first().id ?? "")?.total ??
                0
              : void 0;
            m = a != null ? `${m} | ${d.QLa(a)}` : m;
            return b7("footer", {
              className: "GuCAHg",
              style: {
                paddingInlineStart: `${f.ya}px`,
                paddingInlineEnd: `${f.Ua}px`,
                paddingBlockEnd: `${f.Ea}px`,
              },
              children: [
                Y6("div", {
                  "data-testid": d7.statusText,
                  style: { paddingBlockStart: `${f.wra}px` },
                  children: Y6(h, { text: a7(m, { ...l, "font-size": g.l1 }) }),
                }),
                g.dIa &&
                  k !== 2 &&
                  Y6("div", {
                    className: "Wql4tQ",
                    children: Y6(r0c, { Dw: d, gr: c, form: b, wK: e }),
                  }),
              ],
            });
          }),
          p0c = p7(({ Kr: a, form: b, gr: c, Dw: d, wK: e }) => {
            const f = b.EP;
            var g = b.iy;
            const h = b.footer;
            if (e_c(a, "q")) {
              var k = a.form.fields.first().id ?? "";
              var l = l7(a, k, "select");
              k = a.pGa.get(k);
              l = k?.UO == null ? 0 : QZc(l.gJ, k.UO) ? 2 : 1;
            } else l = 0;
            const m = l,
              n = c.zj,
              p = e7(b);
            l = a.aP;
            k = a.Rza;
            g =
              l !== 7
                ? b7(r_c, {
                    children: [
                      g && Y6(n0c, { iy: g, gr: c, Kr: a }),
                      Y6("div", {
                        "data-testid": d7.statusText,
                        style: { paddingBlockStart: `${f.wra}px` },
                        children: Y6(n, {
                          text: a7(f7(l, d), { ...p, "font-size": h.l1 }),
                        }),
                      }),
                    ],
                  })
                : m === 0
                ? Y6("div", {
                    style: {
                      paddingBlockStart: `${b.EP.RRa}px`,
                      paddingBlockEnd: `${b.EP.QRa}px`,
                    },
                    children: Y6(n, {
                      text: a7(f7(l, d), {
                        ...p,
                        "font-size": h.hIa,
                        "font-weight": "bold",
                      }),
                    }),
                  })
                : b7(r_c, {
                    children: [
                      Y6("div", {
                        style: {
                          paddingBlockStart: `${b.EP.RRa}px`,
                          paddingBlockEnd: `${b.EP.QRa}px`,
                        },
                        children: Y6(n, {
                          text: a7(m === 2 ? d.SCa() : d.AIa(), {
                            ...p,
                            "font-size": h.hIa,
                            "font-weight": "bold",
                          }),
                        }),
                      }),
                      Y6("div", {
                        "data-testid": d7.statusText,
                        style: { paddingBlockStart: `${f.wra}px` },
                        children: Y6(n, {
                          text: a7(f7(l, d), { ...p, "font-size": h.l1 }),
                        }),
                      }),
                    ],
                  });
            return b7("footer", {
              className: "GuCAHg",
              style: {
                paddingInlineStart: `${f.ya}px`,
                paddingInlineEnd: `${f.Ua}px`,
                paddingBlockEnd: `${f.Ea}px`,
              },
              children: [
                g,
                k &&
                  l === 7 &&
                  Y6("div", {
                    className: "J8N9SA",
                    children: Y6(q0c, { Dw: d, gr: c, form: b, Kr: a }),
                  }),
                h.dIa &&
                  l !== 2 &&
                  Y6("div", {
                    className: "Wql4tQ",
                    children: Y6(r0c, { Dw: d, gr: c, form: b, wK: e }),
                  }),
              ],
            });
          });
        var t0c = p7((a) => {
          const b = a.header,
            c = a.Jf;
          return b7("div", {
            className: "FnpX4Q",
            style: {
              paddingInlineStart: `${b.padding.ya}px`,
              paddingInlineEnd: `${b.padding.Ua}px`,
              paddingBlockStart: `${b.padding.qa}px`,
              paddingBlockEnd: `${b.padding.Ea}px`,
            },
            id: a.kGb,
            children: [
              b.background &&
                Y6("div", {
                  className: "n9ICbQ",
                  children: Y6(c.Ah, { fill: b.background }),
                }),
              Y6("div", {
                role: "heading",
                "aria-level": 1,
                children: Y6(c.zj, { text: b.label }),
              }),
            ],
          });
        });
        var u0c = p7(function (a) {
            const b = a.state,
              c = a.Dw,
              d = a.Kr,
              e = a.gr;
            a = a.HDb;
            var f = b.rg;
            const g = b.header,
              h = b.fields,
              k = f.background,
              l = f.V;
            f = f.border;
            const m = e.Ah,
              n = $6();
            return b7("div", {
              "aria-labelledby": n,
              role: "form",
              className: "_9sCIzQ",
              style: {
                borderRadius: l,
                border: `${f.weight}px solid ${f.color}`,
              },
              children: [
                Y6("div", {
                  className: "wNGpBA",
                  children: Y6(m, { fill: k }),
                }),
                b7("div", {
                  className: "_6i3kwQ",
                  children: [
                    g && Y6(t0c, { header: g, kGb: n, Jf: e }),
                    Y6("div", {
                      className: "xIuERA",
                      role: "group",
                      style: {
                        rowGap: b.iba.rowGap,
                        paddingBlockStart: `${b.iba.qa}px`,
                        paddingInlineStart: `${b.iba.ya}px`,
                        paddingBlockEnd: `${b.iba.Ea}px`,
                        paddingInlineEnd: `${b.iba.Ua}px`,
                      },
                      children: h.map((p) =>
                        Y6(l0c, { Dd: p, Kr: d, Jf: e, R4: c }, p.id)
                      ),
                    }),
                    Y6(s0c, { form: b, Dw: c, gr: e, wK: a, Kr: d }),
                  ],
                }),
              ],
            });
          }),
          IZc = (a, b) => {
            const c = a.stream.ht(0);
            a = {
              ...__c.aH,
              stream: __c.Wg.wb()
                .attrs({ ...c, color: b })
                .xb(a.stream.da)
                .build(),
            };
            return __c.ji.create(a);
          };
        var w7 = 0,
          x7 = {
            SFa: w7++,
            NFa: w7++,
            UFa: w7++,
            SRa: w7++,
            egb: w7++,
            ZFa: w7++,
            RFa: w7++,
            BBa: w7++,
            PFa: w7++,
            AIa: w7++,
            ABa: w7++,
            Zta: w7++,
            URa: w7++,
            HUa: w7++,
            XFa: w7++,
            MFa: w7++,
            QFa: w7++,
            loading: w7++,
            QLa: w7++,
            YFa: w7++,
            offline: w7++,
            TFa: w7++,
            WFa: w7++,
            IUa: w7++,
            VFa: w7++,
            OFa: w7++,
            SCa: w7++,
            $Fa: w7++,
            ENa: w7++,
          },
          v0c = class {
            static G(a) {
              L(a, { OZ: s7.shallow });
            }
            VFa(...a) {
              return i7(this, x7.VFa, $_c, a);
            }
            PFa() {
              return i7(this, x7.PFa, K_c);
            }
            SCa() {
              return i7(this, x7.SCa, b0c);
            }
            AIa() {
              return i7(this, x7.AIa, N_c);
            }
            Zta() {
              return i7(this, x7.Zta, O_c);
            }
            QLa(...a) {
              return i7(this, x7.QLa, U_c, a);
            }
            egb(...a) {
              return i7(this, x7.egb, H_c, a);
            }
            offline() {
              return i7(this, x7.offline, W_c);
            }
            loading() {
              return i7(this, x7.loading, T_c);
            }
            URa() {
              return i7(this, x7.URa, P_c);
            }
            IUa() {
              return i7(this, x7.IUa, d0c);
            }
            HUa() {
              return i7(this, x7.HUa, L_c);
            }
            ABa() {
              return i7(this, x7.ABa, e0c);
            }
            BBa() {
              return i7(this, x7.BBa, M_c);
            }
            ENa() {
              return i7(this, x7.ENa, Z_c);
            }
            TFa() {
              return i7(this, x7.TFa, X_c);
            }
            $Fa() {
              return i7(this, x7.$Fa, c0c);
            }
            OFa() {
              return i7(this, x7.OFa, a0c);
            }
            NFa() {
              return i7(this, x7.NFa, F_c);
            }
            XFa(...a) {
              return i7(this, x7.XFa, Q_c, a);
            }
            ZFa(...a) {
              return i7(this, x7.ZFa, I_c, a);
            }
            YFa(...a) {
              return i7(this, x7.YFa, V_c, a);
            }
            QFa(...a) {
              return i7(this, x7.QFa, S_c, a);
            }
            SFa(...a) {
              return i7(this, x7.SFa, E_c, a);
            }
            RFa(...a) {
              return i7(this, x7.RFa, J_c, a);
            }
            UFa(...a) {
              return i7(this, x7.UFa, G_c, a);
            }
            WFa(...a) {
              return i7(this, x7.WFa, Y_c, a);
            }
            MFa() {
              return i7(this, x7.MFa, R_c);
            }
            SRa() {
              return i7(this, x7.SRa, f0c);
            }
            constructor(a) {
              this.document = a;
              this.OZ = (v0c.G(this), void 0);
              o7(
                () => a.language,
                () => OZc(this),
                { fireImmediately: !0 }
              );
            }
          };
        var w0c = class extends v0c {};
        var y7 = {
          Xe: "form_widget_interacted",
          eg(a) {
            return __c.Vp({
              form_id: a.WK,
              form_type: a.Zna,
              action_group: a.S8,
              action: a.action,
              location: a.location,
              linked_design_id: a.Cec,
              toggle_value: a.bN,
              editing_context: a.be == null ? void 0 : __c.Wp(a.be),
              performance_context: a.Ae == null ? void 0 : __c.Xp(a.Ae),
              question_type: a.koc,
            });
          },
        };
        var z7 = class {
          static G(a) {
            L(a, { K7: k7, $y: s7.ref, J7: k7, rXa: k7, Vhb: k7, sN: k7 });
          }
          reset() {
            this.$y = !1;
            this.Ku = this.empty;
          }
          get K7() {}
          get gJ() {
            return this.context.mode === "edit" ? this.empty : this.Ku;
          }
          get J7() {
            if (this.isEmpty())
              return this.required ? Ba({ TD: "required" }) : (0, __c.za)();
            const a = this.mPa(this.gJ);
            if (a.ok) {
              const b = this.rXa(a.value);
              if (b.state === "invalid") return Ba(b.error);
            }
            return a;
          }
          get rXa() {
            const a = this.K7?.filter((b) => !!b);
            return a?.length ? qZc(a) : Wh;
          }
          get Vhb() {
            return this.J7.map(() =>
              this.isEmpty() ? void 0 : this.serialize(this.gJ)
            );
          }
          get sN() {
            return this.$y && !this.J7.ok && this.context.mode === "interact"
              ? this.J7.error
              : void 0;
          }
          get required() {
            return !!this.Dd.required;
          }
          isEmpty() {
            const a = this.gJ;
            return a.length === 0
              ? !0
              : typeof a === "string"
              ? (a != null && a.trim().length > 0 ? Wh() : Xh()).state ===
                "invalid"
              : !1;
          }
          constructor(a, b, c) {
            this.Dd = a;
            this.context = b;
            this.feedback = c;
            this.$y = (z7.G(this), !1);
            o7(
              () => sZc(this.context.Cqa),
              (d) => {
                d &&
                  ((this.Ku = (d = d.etb.get(this.Dd.id ?? ""))
                    ? this.fa(d)
                    : this.empty),
                  (this.$y = !1));
              }
            );
          }
        };
        var x0c = /^\s*-?(?:\d+[, ])*(?:\d*\.)?\d*\s*$/,
          y0c = /[\s,]+/g,
          $Zc = class extends z7 {
            static G(a) {
              L(a, { Ku: s7.ref });
            }
            get min() {
              return this.Dd.min;
            }
            get max() {
              return this.Dd.max;
            }
            get K7() {
              return [VZc({ min: this.Dd.min, max: this.Dd.max })];
            }
            mPa(a) {
              return a.length <= 50 &&
                x0c.test(a) &&
                ((a = a.replace(y0c, "")),
                (a = Number(a)),
                !isNaN(a) && isFinite(a))
                ? (0, __c.za)(a)
                : Ba({ TD: "invalid_format" });
            }
            serialize(a) {
              return {
                type: 2,
                hba: this.Dd.id ?? "",
                vo: this.Dd.label.text.stream.da,
                value: a,
              };
            }
            fa(a) {
              return UZc(a).QW;
            }
            constructor(...a) {
              super(...a);
              this.type = ($Zc.G(this), "number");
              this.Ku = this.empty = "";
            }
          };
        var YZc = class extends z7 {
          static G(a) {
            L(a, {
              Ku: s7.ref,
              Ocb: k7({ equals: k_c.shallow }),
              K7: k7,
              RMa: k7,
            });
          }
          get Ocb() {
            return new Set(this.Dd.options.map(({ id: a }) => a ?? ""));
          }
          get K7() {
            return [WZc({ max: XZc(this.Dd.L4) })];
          }
          mPa(a) {
            return a.every((b) => this.Ocb.has(b))
              ? (0, __c.za)(a.slice())
              : Ba({ TD: "unknown_option_id" });
          }
          serialize(a) {
            return {
              type: 0,
              hba: this.Dd.id ?? "",
              vo: this.Dd.label.text.stream.da,
              BPa: a,
              options: this.RMa,
            };
          }
          fa(a) {
            return TZc(a, this.RMa).QW;
          }
          get RMa() {
            return this.Dd.options.map((a) => ({
              id: a.id ?? "",
              label: a.label.text.stream.da,
            }));
          }
          constructor(...a) {
            super(...a);
            this.type = (YZc.G(this), "select");
            this.empty = [];
            this.Ku = [];
            this.xSa = (b) => {
              const c = this.gJ;
              this.Ku = c?.includes(b)
                ? c.filter((d) => d !== b)
                : XZc(this.Dd.L4) > 1 && c?.length
                ? [...c, b]
                : [b];
            };
          }
        };
        var ZZc = class extends z7 {
          static G(a) {
            L(a, { Ku: s7.ref });
          }
          get K7() {
            const a = __c.zc("b9892c2d", 500);
            return [
              a != null ? WZc({ min: 0, max: a }) : void 0,
              this.Dd.variant.type === "e"
                ? pZc(__c.AIb, { TD: "invalid_email" })
                : void 0,
            ];
          }
          mPa(a) {
            return (0, __c.za)(a.trim());
          }
          serialize(a) {
            return {
              type: 1,
              hba: this.Dd.id ?? "",
              vo: this.Dd.label.text.stream.da,
              value: a,
            };
          }
          fa(a) {
            return UZc(a).QW;
          }
          constructor(...a) {
            super(...a);
            this.type = (ZZc.G(this), "text");
            this.Ku = this.empty = "";
          }
        };
        var z0c = class {
          static G(a) {
            L(a, { Cqa: k7, YO: k7 });
          }
          get Cqa() {
            if (!this.lH || !this.En) return { status: 1, data: void 0 };
            const a = this.En.getSettings(this.formData.Pz);
            switch (a.status) {
              case 2:
              case 3:
                return a;
              case 1:
                return j_c(this.lH, {
                  Yt: this.formData.Yt,
                  submitter: a.data.TRa,
                });
              default:
                throw new z(a);
            }
          }
          get YO() {
            if (!this.En) return j0();
            const a = this.En.getSettings(this.formData.Pz);
            return rZc(a, {
              rF: (b) => ({ Yt: this.formData.Yt, submitter: b.TRa }),
            });
          }
          get mode() {
            return this.QGa.get()?.getContext(this.formData.id)
              ? "edit"
              : "interact";
          }
          constructor(a, b, c, d) {
            this.formData = a;
            this.En = b;
            this.lH = c;
            this.QGa = d;
            z0c.G(this);
          }
        };
        var f_c = Symbol(),
          A0c = class {
            static G(a) {
              L(a, {
                $W: s7.ref,
                Dkb: k7,
                FL: s7.ref,
                UO: k7,
                pGa: k7({ equals: k_c.structural }),
                mS: k7,
                aP: k7,
                Rr: k7,
                sXa: k7,
                Rza: k7,
                QI: k7,
              });
            }
            get Dkb() {
              if (!this.En) return "upsert";
              const a = this.En.getSettings(this.form.Pz);
              return W6(a, {
                rF: ({ JTa: b }) => {
                  switch (b) {
                    case "single":
                      return "upsert";
                    case "multiple":
                      return "create";
                    default:
                      throw new z(b);
                  }
                },
                loading: () => "upsert",
                error: () => "upsert",
              });
            }
            get UO() {
              const a = this.En?.getSettings(this.form.Pz);
              return a?.status === 1 ? a.data.UO : void 0;
            }
            get pGa() {
              var a = sZc(this.context.Cqa);
              if (a) {
                {
                  var b = this.FL;
                  a = a != null ? this.A4.get() : void 0;
                  var c = this.UO;
                  b = b?.ok ? b.value.PCb : b?.error.PCb;
                  const g = new Map();
                  if (b?.size || a?.fields?.size || c?.size) {
                    var d = new Set([
                      ...(b?.keys() || []),
                      ...(a?.fields.keys() || []),
                      ...(c?.keys() || []),
                    ]);
                    for (f of d) {
                      d = b?.get(f)?.feedback;
                      var e = a?.fields.get(f);
                      e = e ? { ZQb: e } : void 0;
                      const h = c?.get(f);
                      d = { ...d, ...e, ...(h ? { UO: h } : void 0) };
                      Object.keys(d).length > 0 && g.set(f, d);
                    }
                  }
                  var f = g;
                }
              } else f = new Map();
              return f;
            }
            get mS() {
              return this.$W
                ? 2
                : W6(this.context.Cqa, {
                    rF: (a) => (a == null ? 1 : 3),
                    loading: () => 4,
                    error: () => 1,
                  });
            }
            get aP() {
              return this.cb?.status === 2
                ? 2
                : this.XK && this.En && this.lH && this.context.mode !== "edit"
                ? this.mS === 2
                  ? 6
                  : this.mS === 3
                  ? 7
                  : this.mS === 4
                  ? 3
                  : W6(this.context.YO, {
                      rF: ({ submitter: a }) => (a?.type === "USER" ? 0 : 1),
                      loading: () => 3,
                      error: () => 4,
                    })
                : 5;
            }
            get Rr() {
              return this.aP === 6 || (this.aP === 7 && !this.QI)
                ? 2
                : this.aP === 5
                ? 1
                : this.sXa
                ? 0
                : 3;
            }
            get sXa() {
              if (!this.XK || this.context.mode !== "interact") return !1;
              switch (this.aP) {
                case 1:
                case 0:
                  return !0;
                case 7:
                  return this.QI;
                default:
                  return !1;
              }
            }
            get Rza() {
              if (!__c.zc("dfc8e58c", !0) || this.QI) return !1;
              const a = this.En?.getSettings(this.form.Pz);
              return a?.status === 1 ? a.data.JTa === "multiple" : !1;
            }
            get QI() {
              return e_c(this, "p") && this.En != null
                ? W6(this.En.getSettings(this.form.Pz), {
                    rF: ({ JTa: a }) => a === "single",
                    loading: () => !1,
                    error: () => !1,
                  })
                : !1;
            }
            constructor(a, b, c, d, e, f, g, h) {
              this.form = a;
              this.XK = b;
              this.En = c;
              this.lH = d;
              this.QGa = e;
              this.cb = f;
              this.oa = g;
              this.sh = h;
              this.qGa = (A0c.G(this), new Map());
              this.$W = !1;
              this.A4 = s7.box();
              this.submit = w_c(function () {
                const k = this,
                  l = j7(!0)();
                return (function* () {
                  l.r();
                  try {
                    var m = k.XK;
                    const t = k.lH;
                    var n = k.context;
                    const u = k.oa,
                      w = k.form.fields,
                      A = k.form.Pz,
                      B = k.form.Yt,
                      C = k.form.id,
                      D = k.form.type;
                    var p =
                      (k.mS === 1 || (k.QI && k.mS === 3)) &&
                      k.context.mode === "interact";
                    if (m && p && t && n.YO.status === 1) {
                      p = !0;
                      var q = n.YO.data;
                      n = [];
                      for (const H of w) {
                        const J = l7(k, H.id ?? "");
                        J.$y = !0;
                        const M = J.Vhb;
                        M.ok
                          ? p && M.value != null && n.push(M.value)
                          : (p = !1);
                      }
                      if (p)
                        if (n.length === 0) k.FL = Ba({ TD: 5, hgb: !1 });
                        else {
                          k.$W = !0;
                          try {
                            const H = l.r(
                              yield l.s(
                                m.afc({ Pz: A, Yt: B, etb: n, mode: k.Dkb })
                              )
                            );
                            k.FL = i_c(H);
                            if (H.ok) {
                              m = t;
                              var r = H.value.Pqc;
                              const J = n7(q);
                              m.jha.set(J, r);
                              m.LW.set(J, "initialized");
                              u?.track(y7, {
                                WK: C,
                                Zna: D,
                                S8: "interacted",
                                action: "form_submitted",
                                location: "in_form",
                              });
                            }
                          } finally {
                            l.r(), (k.$W = !1);
                          }
                        }
                      else k.FL = Ba({ TD: 6, hgb: !1 });
                      k.FL.ok || g_c(k, k.FL.error);
                    }
                  } finally {
                    l.s();
                  }
                })();
              });
              this.qub = () => {
                this.lH &&
                  this.context.YO.status === 1 &&
                  ((this.FL = void 0),
                  this.lH.X5(this.context.YO.data),
                  h_c(this),
                  this.oa?.track(y7, {
                    WK: this.form.id,
                    Zna: this.form.type,
                    S8: "interacted",
                    action: "resubmission_started",
                    location: "in_form",
                  }));
              };
              this.X5 = w_c(function () {
                const k = this,
                  l = j7(!0)();
                return (function* () {
                  l.r();
                  try {
                    const m = k.XK,
                      n = k.lH,
                      p = k.context,
                      q = k.form.Yt,
                      r =
                        (k.mS === 1 || (k.QI && k.mS === 3)) &&
                        k.context.mode === "interact";
                    if (m && r && n && p.YO.status === 1) {
                      k.$W = !0;
                      try {
                        l.r(yield l.s(m.X5({ Yt: q }))).ok
                          ? (k.oa?.track(y7, {
                              WK: k.form.id,
                              Zna: "poll",
                              S8: "interacted",
                              action: "response_unsubmitted",
                              location: "in_form",
                            }),
                            n.X5(p.YO.data),
                            (k.FL = void 0))
                          : k.sh?.kG({
                              ZH: K("kgHTHw"),
                              group: f_c,
                              iy: {
                                CO: K("mQhziQ"),
                                onClick: g7(() => k.X5()),
                              },
                            });
                      } finally {
                        l.r(), (k.$W = !1);
                      }
                    }
                  } finally {
                    l.s();
                  }
                })();
              });
              this.XHa = w_c(function (k) {
                const l = this,
                  m = j7(!0)();
                return (function* () {
                  m.r();
                  try {
                    l7(l, k, "select").isEmpty()
                      ? (l.oa?.track(y7, {
                          WK: l.form.id,
                          Zna: "poll",
                          S8: "interacted",
                          action: "response_unsubmitted",
                          location: "in_form",
                        }),
                        m.r(yield m.s(l.X5())))
                      : m.r(yield m.s(l.submit()));
                  } finally {
                    m.s();
                  }
                })();
              });
              o7(
                () => a.Yt,
                () => {
                  this.FL = void 0;
                  this.A4.set(void 0);
                  this.QI && h_c(this);
                }
              );
              this.context = new z0c(a, c, d, e);
              d_c(this);
            }
          };
        var B0c = class {
          static G(a) {
            L(a, { jha: s7.shallow, LW: s7.shallow });
          }
          X5(a) {
            a = n7(a);
            this.jha.delete(a);
          }
          constructor(a, b, c) {
            this.XK = a;
            this.En = b;
            this.formData = c;
            this.jha = (B0c.G(this), new Map());
            this.LW = new Map();
          }
        };
        var A7 = Object.freeze({
          Cj: 16,
          Gk: 16,
          Vac: 1.5625,
          RV: { $r: 1.25, Zr: 1.25, tv: 1 },
          footer: {
            gQb: 0.625,
            hQb: 1.25,
            $r: 1.25,
            Zr: 1.25,
            efa: 0.5,
            Ymc: 0.5,
            Xmc: 1.25,
          },
          header: { dfa: 1.25, tv: 1, $r: 1.25, Zr: 1.25 },
        });
        var C0c = __c.zc("4073adf", !1),
          o_c = class {
            get header() {
              if (!this.eb.F3) return new D0c(this.formData, this.eb);
            }
            get fields() {
              const a = this.formData.type;
              return this.formData.fields.map((b) => {
                switch (b.type) {
                  case "select":
                    switch (b.variant?.type) {
                      case "p":
                        return new E0c(b, this.eb);
                      case "q":
                        return new F0c(b, this.eb);
                      case void 0:
                        switch (a) {
                          case "quiz":
                            return new F0c(b, this.eb);
                          case "poll":
                            return new E0c(b, this.eb);
                          default:
                            throw new z(a);
                        }
                      case "r":
                        return new G0c(b, this.eb);
                      default:
                        throw new z(b.variant);
                    }
                  case "text":
                    switch (b.variant.type) {
                      case "f":
                        return new H0c(b, this.eb);
                      case "e":
                        return new I0c(b, this.eb);
                      default:
                        throw new z(b.variant);
                    }
                  case "number":
                    switch (b.variant.type) {
                      case "a":
                        return new J0c(b, this.eb);
                      case "b":
                        return new K0c(b, this.eb);
                      case "c":
                        return new L0c(b, this.eb);
                      case "d":
                        return new M0c(b, this.eb);
                      default:
                        throw new z(b.variant);
                    }
                  default:
                    throw new z(b);
                }
              });
            }
            get iy() {
              if (
                this.formData.footer.ref &&
                (this.fields.length !== 1 ||
                  this.fields[0].type !== 1 ||
                  !W6(this.eb.settings, {
                    rF: (a) => a.JTa === "single",
                    default: () => !0,
                  }))
              )
                return {
                  backgroundColor: {
                    default: this.eb.Ga.accentColor,
                    Kh: this.eb.Ga.wsb,
                    active: this.eb.Ga.vsb,
                    Un: this.eb.Ga.ysb,
                  },
                  label: this.formData.footer.ref?.label.text,
                  padding: {
                    qa: this.eb.Gk * 0.64,
                    Ea: this.eb.Gk * 0.64,
                    ya: this.eb.Gk * 0.64,
                    Ua: this.eb.Gk * 0.64,
                  },
                };
            }
            get settings() {
              return rZc(this.eb.settings, {
                rF: (a) => ({ submitter: a.TRa }),
              });
            }
            get footer() {
              const a =
                  C0c &&
                  W6(this.eb.settings, {
                    rF: (c) => !!c.Loc,
                    default: () => !1,
                  }),
                b = this.eb.Cj;
              return {
                hIa: b * __c.DOc,
                l1: b * 0.625,
                dIa: a,
                SVb: n_c(this.fields),
                zd: this.eb.Ga.JYa,
              };
            }
            get iba() {
              const a = this.eb.Gk,
                b = this.formData.RV?.ref;
              return {
                qa: a * 1,
                ya: a * (b?.$r ?? A7.RV.$r),
                Ua: a * (b?.Zr ?? A7.RV.Zr),
                Ea: a * (b?.tv ?? A7.RV.tv),
                rowGap: a * 2,
              };
            }
            get EP() {
              const a = !!this.iy,
                b = this.eb.Gk;
              return {
                Ea:
                  b *
                  (this.formData.footer.ref?.tv ??
                    (a ? A7.footer.gQb : A7.footer.hQb)),
                ya: b * (this.formData.footer.ref?.$r ?? A7.footer.$r),
                Ua: b * (this.formData.footer.ref?.Zr ?? A7.footer.Zr),
                wra:
                  b *
                  (this.formData.footer.ref?.efa ?? (a ? A7.footer.efa : 0)),
                RRa: b * 0.64,
                QRa: b * 0.64,
              };
            }
            constructor(a, b) {
              this.formData = a;
              this.eb = new N0c(a, b);
              this.rg = new O0c(a, this.eb);
            }
          },
          N0c = class {
            static G(a) {
              L(a, { Ga: k7 });
            }
            get Ga() {
              return __c.zOc(
                this.BR,
                this.qua,
                this.C0b,
                this.formData.header.ref?.background?.ref
              );
            }
            get BR() {
              return tZc(this.formData.Ffa);
            }
            get qua() {
              return tZc(this.formData.oga);
            }
            get direction() {
              return this.formData.direction === "r" ? "r" : "l";
            }
            get settings() {
              return this.En
                ? this.En.getSettings(this.formData.Pz)
                : { status: 2 };
            }
            get ENb() {
              return this.formData.fields.count();
            }
            get F3() {
              return this.formData.F3
                ? !0
                : (this.formData.mIa ||
                    this.formData.title.ref?.label == null) &&
                    this.formData.lva === !1;
            }
            get zGa() {
              return this.ENb === 1 && (this.formData.lva ?? !0);
            }
            get Cj() {
              if (this.formData.Cj) return this.formData.Cj;
              const a = Rf(Sf, this.Kna.label.text.stream.qj(0), "font-size");
              return this.zGa ? a / (this.Kna.bKa ?? 1.5625) : a;
            }
            get Gk() {
              return this.formData.Gk ?? 16;
            }
            get C0b() {
              return this.Kna.EL === "u"
                ? Rf(Sf, this.Kna.label.text.stream.qj(0), "color")
                : void 0;
            }
            get Kna() {
              return __c.y(this.formData.fields.first(), "Malformed form data");
            }
            constructor(a, b) {
              this.formData = a;
              this.En = b;
              N0c.G(this);
            }
          },
          O0c = class {
            get background() {
              return this.formData.oga;
            }
            get border() {
              return this.formData.border;
            }
            get V() {
              return this.formData.V ?? 0;
            }
            get fontFamily() {
              return this.formData.jma;
            }
            get direction() {
              return this.formData.direction === "r" ? "r" : "l";
            }
            constructor(a, b) {
              this.formData = a;
              this.eb = b;
            }
          },
          D0c = class {
            get background() {
              return (
                this.formData.header?.ref?.background.ref ?? this.formData.Ffa
              );
            }
            get label() {
              var a = this.formData.fields.first();
              return (a = this.eb.zGa
                ? a.label.text
                : this.formData.title?.ref?.label)
                ? P0c(a, this.eb.direction)
                : a7("", {
                    "font-size": this.eb.Cj * 1.953,
                    direction: m_c(this.eb.direction),
                  });
            }
            get padding() {
              const a = this.formData.header.ref;
              return {
                qa: this.eb.Gk * (a?.dfa ?? A7.header.dfa),
                Ea: this.eb.Gk * (a?.tv ?? A7.header.tv),
                ya: this.eb.Gk * (a?.$r ?? A7.header.$r),
                Ua: this.eb.Gk * (a?.Zr ?? A7.header.Zr),
              };
            }
            constructor(a, b) {
              this.formData = a;
              this.eb = b;
            }
          },
          Q0c = class {
            get id() {
              return this.Dd.id || "";
            }
            get label() {
              return P0c(this.Dd.label.text, this.eb.direction);
            }
            get Djb() {
              return !this.eb.zGa;
            }
            get accentColor() {
              return this.eb.Ga.accentColor;
            }
            get errorColor() {
              return this.eb.Ga.errorColor;
            }
            get dCb() {
              return this.eb.Cj * 0.8;
            }
            get Cj() {
              return this.eb.Cj;
            }
            get Gk() {
              return this.eb.Gk;
            }
            get padding() {
              return { OJb: this.eb.Gk * 0.512, Oa: this.eb.Gk * 0.64 };
            }
            constructor(a, b) {
              this.Dd = a;
              this.eb = b;
            }
          },
          R0c = class extends Q0c {
            get placeholder() {
              return {
                color: __c.k5(this.eb.Ga.dD, 0.5),
                text: this.Dd.placeholder || "",
              };
            }
            get V() {
              return this.Dd.V ?? 8;
            }
            get borderColor() {
              return {
                default: this.eb.Ga.LCa,
                Kh: this.eb.Ga.NCa,
                focus: this.eb.Ga.MCa,
                error: this.eb.Ga.errorColor,
              };
            }
            get zd() {
              return { default: this.eb.Ga.dD, Un: this.eb.Ga.xka };
            }
            get sizes() {
              return {
                v$: this.eb.Cj * 1,
                Oc: this.eb.Cj * 1.5,
                TAa: this.eb.Cj * 0.0625,
              };
            }
            constructor(...a) {
              super(...a);
              this.type = 4;
            }
          },
          H0c = class extends R0c {
            get VQ() {
              return this.Dd.variant.VQ;
            }
            constructor(...a) {
              super(...a);
              this.variant = 2;
            }
          },
          I0c = class extends R0c {
            constructor(...a) {
              super(...a);
              this.VQ = this.variant = 1;
            }
          },
          B7 = class extends Q0c {
            get V() {
              return this.Dd.V ?? 8;
            }
            constructor(...a) {
              super(...a);
              this.type = 5;
            }
          },
          J0c = class extends B7 {
            get borderColor() {
              return {
                default: this.eb.Ga.LCa,
                Kh: this.eb.Ga.NCa,
                focus: this.eb.Ga.MCa,
                error: this.eb.Ga.errorColor,
              };
            }
            get zd() {
              return this.eb.Ga.dD;
            }
            get sizes() {
              return {
                v$: this.eb.Cj * 1,
                Oc: this.eb.Cj * 1.5,
                TAa: this.eb.Cj * 0.0625,
              };
            }
            get gridGap() {
              return this.eb.Gk * 0.41;
            }
            constructor(...a) {
              super(...a);
              this.variant = 1;
            }
          },
          K0c = class extends B7 {
            get backgroundColor() {
              return {
                default: this.eb.Ga.C$,
                Kh: this.eb.Ga.D$,
                active: this.eb.Ga.Mla,
                selected: this.eb.Ga.Nla,
                error: this.eb.Ga.errorColor,
                Un: this.eb.Ga.m1,
              };
            }
            get J3() {
              return { default: this.eb.Ga.dD, selected: this.eb.Ga.Q8 };
            }
            get sizes() {
              return { lBa: this.eb.Cj * 2.5, Oc: this.eb.Cj * 1.953 };
            }
            get gridGap() {
              return this.eb.Gk * 0.41;
            }
            constructor(...a) {
              super(...a);
              this.variant = 2;
            }
          },
          L0c = class extends B7 {
            get borderColor() {
              return { default: this.eb.Ga.dD, Un: this.eb.Ga.xka };
            }
            get fillColor() {
              return {
                Kh: this.eb.Ga.D$,
                selected: this.eb.Ga.Nla,
                Un: this.eb.Ga.m1,
              };
            }
            get Oc() {
              return this.eb.Cj * 2.2;
            }
            get gridGap() {
              return this.eb.Gk * 0.41;
            }
            constructor(...a) {
              super(...a);
              this.variant = 3;
            }
          },
          M0c = class extends B7 {
            get backgroundColor() {
              return {
                default: this.eb.Ga.C$,
                Kh: this.eb.Ga.D$,
                active: this.eb.Ga.Mla,
                selected: this.eb.Ga.Nla,
                error: this.eb.Ga.errorColor,
                Un: this.eb.Ga.m1,
              };
            }
            get zd() {
              return { default: this.eb.Ga.dD, selected: this.eb.Ga.Q8 };
            }
            get sizes() {
              return { lBa: this.eb.Cj * 2.5, v$: this.eb.Cj * 1 };
            }
            get gridGap() {
              return this.eb.Gk * 0.41;
            }
            constructor(...a) {
              super(...a);
              this.variant = 4;
            }
          },
          T0c = class extends Q0c {
            get options() {
              return this.Dd.options.map((a) => new S0c(a, this.eb));
            }
            get PB() {
              return {
                default: this.eb.Ga.C$,
                Kh: this.eb.Ga.D$,
                active: this.eb.Ga.Mla,
                selected: this.eb.Ga.Nla,
                error: this.eb.Ga.errorColor,
                Un: this.eb.Ga.m1,
              };
            }
            get TE() {
              return {
                default: this.eb.Ga.dD,
                selected: this.eb.Ga.Q8,
                Un: this.eb.Ga.xka,
              };
            }
            get xua() {
              return this.Dd.L4 !== void 0 && this.Dd.L4 !== 1 ? "m" : "s";
            }
            get V() {
              return this.Dd.V ?? 8;
            }
            get rowGap() {
              return 0.512 * this.eb.Gk;
            }
            get sizes() {
              return {
                Oc: this.eb.Cj * 1,
                ZBa: this.eb.Cj * 1,
                Kvb: this.eb.Cj * 0.5,
                Mvb: this.eb.Cj * 0.625,
              };
            }
          },
          F0c = class extends T0c {
            static G(a) {
              L(a, { settings: k7 });
            }
            get settings() {
              return W6(this.eb.settings, {
                rF: (a) =>
                  (a = a.UO.get(this.id) ?? [])
                    ? { status: 1, data: { TCa: a } }
                    : j0(),
                loading: () => ({ status: 2 }),
                error: () => j0(),
              });
            }
            constructor(...a) {
              super(...a);
              this.type = (F0c.G(this), 2);
            }
          },
          E0c = class extends T0c {
            get sUa() {
              return {
                text: this.eb.Ga.Q8,
                track: this.eb.Ga.xsb,
                rO: this.eb.Ga.accentColor,
              };
            }
            get wTa() {
              return {
                text: this.eb.Ga.dD,
                track: this.eb.Ga.m1,
                rO: this.eb.Ga.C$,
              };
            }
            constructor(...a) {
              super(...a);
              this.type = 1;
            }
          },
          G0c = class extends T0c {
            constructor(...a) {
              super(...a);
              this.type = 3;
            }
          },
          S0c = class {
            get id() {
              return this.option.id || "";
            }
            get label() {
              return P0c(this.option.label.text, this.eb.direction);
            }
            constructor(a, b) {
              this.option = a;
              this.eb = b;
            }
          },
          P0c = y_c((a, b) => {
            const c = { version: 0, styles: new Map() },
              d = m_c(b);
            a = a.Tj(c);
            b = a.stream.bea(
              (e) => e === "direction",
              () => [d, Sf.encode("direction", d)]
            );
            return __c.ji.create({ ...a, stream: b });
          });
        var U0c = class {
          static G(a) {
            L(a, { I0: s7.shallow });
          }
          getSettings(a) {
            const b = a || "",
              c = this.I0.get(b);
            if (c) return c;
            m7(() => this.I0.set(b, { status: 2 }));
            this.XK.ccc(a).then(
              h7.wrap((d) => {
                m7(() => {
                  this.I0.set(b, d.ok ? { status: 1, data: d.value } : j0());
                });
              }),
              h7.wrap(() => {
                m7(() => {
                  this.I0.set(b, j0());
                });
              })
            );
            return __c.y(this.I0.get(b));
          }
          constructor(a) {
            this.XK = a;
            this.I0 = (U0c.G(this), new Map());
          }
        };
        __c.cSc = {
          yn: __c.Ox()(
            ({ LA: { oa: a, sh: b, cb: c }, hi: { S3: d, gk: e } }) => {
              function f({ WK: l, ri: m }) {
                __c.v(!0);
                l = __c.NC(
                  __c.NC(
                    new __c.EQa("/form-data-processing"),
                    "formUrl",
                    window.location.href
                  ),
                  "formId",
                  l
                );
                m && __c.NC(l, "designId", m);
                const n = window.location.origin + __c.OC(l);
                return {
                  href: encodeURIComponent(n),
                  onClick: e
                    ? () => {
                        e.Fra(new __c.xz({ uri: n, target: 1 }));
                      }
                    : void 0,
                };
              }
              const g = s7.box(),
                h = d?.(),
                k = new WeakMap();
              return {
                ...__c.eW,
                metadata: {
                  type: "form",
                  tZ: (l) => l.value.id,
                  name: K("w/Qzlg"),
                },
                C: __c.Nx(
                  p7(({ data: l, Jf: m, La: n }) => {
                    const p = n.page.container,
                      q = l.C.value,
                      r = q.id,
                      t = p.id;
                    n = Z6(() => new w0c(p), [p]);
                    const [u, w] = vZc();
                    t_c(() => {
                      h && h.then(h7.wrap((H) => w(H)));
                    }, []);
                    var A = Z6(() => {
                      var H = k.get(q);
                      if (H && H.WK === r && H.ri === t) return H;
                      let J, M, N;
                      u &&
                        t &&
                        ((J = u.Cbc.get({ WK: r, ri: t, Dac: p.extension })),
                        (M = new U0c(J)),
                        (N = new B0c(J, M, q)));
                      H = new A0c(q, J, M, N, g, c, a, b);
                      H = { WK: r, ri: t, En: M, lH: N, Kr: H };
                      J && M && N && k.set(q, H);
                      return H;
                    }, [u, r, t, q, p.extension]);
                    const B = A.En,
                      C = A.Kr,
                      D = A.lH;
                    t_c(() => {
                      if (D) return l_c(D);
                    }, [D]);
                    l = p_c({ data: l, En: B });
                    A = f({ WK: r, ri: t });
                    return Y6(u0c, {
                      Kr: C,
                      gr: { zj: m.zj, Ah: m.Ah, bja: m.bja, Bya: m.Bya },
                      state: l,
                      Dw: n,
                      HDb: A,
                    });
                  })
                ),
                rV: ["responsive"],
                exports: { FAb: g },
              };
            }
          ),
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/b8099e98c9b4f743.js.map
