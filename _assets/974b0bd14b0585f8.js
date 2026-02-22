(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [6712],
  {
    /***/ 734120: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var wK = __c.wK;
        var F = __c.F;
        var X = __c.X;
        var W = __c.W;
        var G = __c.G;
        var H4;
        var V4;
        var C4;
        var B4;
        var U4;
        var T4;
        var P4;
        var G4;
        var y4;
        var L = __c.L;
        var K = __c.K;
        var G5;
        var x = __c.x;
        var Ba = __c.Ba;
        var y = __c.y;
        var Ld = __c.Ld;
        var BE = __c.BE;
        var sp = __c.sp;
        var k5;
        var Cs = __c.Cs;
        var Wg = __c.Wg;
        var aH = __c.aH;
        var Sf = __c.Sf;
        var M4;
        var L4;
        var N4;
        var z = __c.z;
        var R4;
        var O4;
        var D4;
        var F4;
        var zE = __c.zE;
        var v = __c.v;
        var ld = __c.ld;
        var RNc,
          TNc,
          VNc,
          s4,
          XNc,
          YNc,
          ZNc,
          aOc,
          $Nc,
          cOc,
          u4,
          rOc,
          z4,
          A4,
          E4,
          sOc,
          I4,
          J4,
          K4,
          S4,
          tOc,
          uOc,
          W4,
          X4,
          wOc,
          f5,
          g5,
          h5,
          i5,
          j5,
          l5,
          xOc,
          BOc,
          AOc,
          FOc,
          GOc,
          EOc,
          cPc,
          gPc,
          hPc,
          iPc,
          jPc,
          kPc,
          q5,
          r5,
          mPc,
          nPc,
          oPc,
          s5,
          rPc,
          pPc,
          t5,
          vPc,
          tPc,
          uPc,
          u5,
          xPc,
          zPc,
          APc,
          CPc,
          x5,
          DPc,
          QPc,
          RPc,
          SPc,
          TPc,
          B5,
          EPc,
          GPc,
          KPc,
          NPc,
          PPc,
          z5,
          MPc,
          UPc,
          BPc,
          WPc,
          XPc,
          YPc,
          VPc,
          aQc,
          bQc,
          dQc,
          eQc,
          D5,
          tQc,
          qQc,
          nQc,
          pQc,
          gQc,
          iQc,
          hQc,
          oQc,
          fQc,
          uQc,
          mQc,
          kQc,
          jQc,
          E5,
          zQc,
          yQc,
          dPc,
          BQc,
          JOc,
          AQc,
          DQc,
          CQc,
          FQc,
          F5,
          HQc,
          JQc,
          IQc,
          I5,
          MQc,
          TQc,
          ZQc,
          aRc,
          dRc,
          eRc,
          P5,
          iRc,
          jRc,
          lRc,
          nRc,
          R5,
          pRc,
          qRc,
          S5,
          mRc,
          rRc,
          wRc,
          yRc,
          zRc,
          ARc,
          ERc,
          JRc,
          MRc,
          NRc,
          eSc,
          U5,
          fSc,
          PRc,
          iSc,
          jSc,
          kSc,
          lSc,
          V5,
          oSc,
          pSc,
          qSc,
          sSc,
          tSc,
          rSc,
          ASc,
          W5,
          X5,
          Y5,
          Z5,
          vSc,
          wSc,
          ESc,
          GSc,
          FSc,
          ISc,
          HSc,
          JSc,
          KSc,
          LSc,
          OSc,
          e6,
          PSc,
          QSc,
          USc,
          VSc,
          XSc,
          YSc,
          ZSc,
          $Sc,
          aTc,
          bTc,
          dTc;
        RNc = function (a, b) {
          if (a.z5a != null) throw Error();
          a.z5a = b;
        };
        TNc = function (a) {
          return new SNc(typeof a === "function" ? r4(a) : a);
        };
        VNc = function (a) {
          return new UNc(a);
        };
        s4 = function (a) {
          return typeof a === "function";
        };
        XNc = function (a) {
          return { get: () => a, set: WNc };
        };
        YNc = function (...a) {
          const b = new Set(),
            c = new Set();
          for (const d of a) for (const e in d) b.has(e) ? c.add(e) : b.add(e);
          if (c.size)
            throw Error(
              `keys not disjoint: ${[...c].map((d) => `'${d}'`).join(", ")}`
            );
        };
        ZNc = function (a, b) {
          return () => b(ld(a, (c) => c()));
        };
        aOc = function (a) {
          v(a.length === 1);
          let b;
          return (c) => {
            if (b != null && $Nc(b[0], c)) return b[1];
            const d = a(c);
            b = [c, d];
            return d;
          };
        };
        $Nc = function (a, b) {
          if (a === b) return !0;
          if (a == null || b == null) return !1;
          const c = Object.keys(a),
            d = Object.keys(b);
          if (c.length !== d.length) return !1;
          for (const e of c) if (a[e] !== b[e]) return !1;
          return !0;
        };
        cOc = function (a) {
          var b = bOc;
          return {
            oT: b({
              Fj: a.oT,
              args: {},
              rd: {
                P: { image: void 0, video: void 0, Ra: void 0 },
                attributes: {
                  Xg: void 0,
                  color: void 0,
                  wa: void 0,
                  locked: void 0,
                  Fg: void 0,
                  ck: void 0,
                  Db: void 0,
                  flipX: void 0,
                  flipY: void 0,
                },
              },
            }),
            gya: b({
              Fj: a.gya,
              args: { media: void 0 },
              rd: {
                P: { filter: void 0 },
                attributes: {
                  po: void 0,
                  nb: void 0,
                  wa: void 0,
                  jc: void 0,
                  Ja: void 0,
                },
              },
            }),
            Fya: b({
              Fj: a.Fya,
              args: { video: void 0 },
              rd: {
                P: { oy: void 0, filter: void 0, dc: void 0, Uh: void 0 },
                attributes: {
                  nb: void 0,
                  wa: void 0,
                  jc: void 0,
                  Ja: void 0,
                  trim: void 0,
                  Dz: void 0,
                  autoplay: void 0,
                  playbackRate: void 0,
                  volume: void 0,
                },
              },
            }),
            mja: b({
              Fj: a.mja,
              args: {},
              rd: {
                P: { fill: void 0 },
                attributes: {
                  weight: void 0,
                  color: void 0,
                  Qc: void 0,
                  Ye: void 0,
                },
              },
            }),
            TN: b({
              Fj: a.TN,
              args: { d: void 0 },
              rd: {
                P: { fill: void 0, stroke: void 0 },
                attributes: { V: void 0 },
              },
            }),
            G_: b({
              Fj: a.G_,
              args: {},
              rd: {
                P: { fill: void 0, stroke: void 0 },
                attributes: { ...t4, V: void 0 },
              },
            }),
            H_: b({
              Fj: a.H_,
              args: {},
              rd: {
                P: {
                  zb: void 0,
                  resizeMode: void 0,
                  slice: void 0,
                  gb: void 0,
                },
                attributes: { ...t4, si: void 0, viewBox: void 0 },
              },
            }),
            tya: b({
              Fj: a.tya,
              args: {},
              rd: {
                P: { text: void 0 },
                attributes: {
                  box: void 0,
                  Ia: void 0,
                  Pc: void 0,
                  Ll: void 0,
                  Db: void 0,
                },
              },
            }),
            I_: b({
              Fj: a.I_,
              args: {},
              rd: {
                P: { text: void 0, Ie: void 0 },
                attributes: {
                  ...t4,
                  kl: void 0,
                  uh: void 0,
                  Ia: void 0,
                  I: void 0,
                  O: void 0,
                  ug: void 0,
                },
              },
            }),
            Zxa: b({
              Fj: a.Zxa,
              args: { url: void 0, I: void 0, O: void 0 },
              rd: { P: {}, attributes: t4 },
            }),
            aja: b({
              Fj: a.aja,
              args: {},
              rd: {
                P: { cells: void 0 },
                attributes: { ...t4, layout: void 0 },
              },
            }),
            dya: b({
              Fj: a.dya,
              args: {},
              rd: {
                P: { fill: void 0, stroke: void 0 },
                attributes: { V: void 0 },
              },
            }),
            kya: b({
              Fj: a.kya,
              args: {},
              rd: {
                P: {
                  start: void 0,
                  end: void 0,
                  fill: void 0,
                  geometry: void 0,
                  zb: void 0,
                },
                attributes: {
                  ...t4,
                  weight: void 0,
                  color: void 0,
                  Qc: void 0,
                  Ye: void 0,
                },
              },
            }),
            wVa: b({
              Fj: a.wVa,
              args: {},
              rd: {
                P: {},
                attributes: {
                  marker: void 0,
                  anchor: void 0,
                  position: void 0,
                },
              },
            }),
            xVa: b({
              Fj: a.xVa,
              args: {},
              rd: {
                P: { text: void 0 },
                attributes: {
                  width: void 0,
                  height: void 0,
                  position: void 0,
                  orientation: void 0,
                  ug: void 0,
                  uh: void 0,
                  Db: void 0,
                },
              },
            }),
            kVa: b({
              Fj: a.kVa,
              args: {},
              rd: { P: { Jh: void 0 }, attributes: { V: void 0 } },
            }),
            YUa: b({
              Fj: a.YUa,
              args: {},
              rd: { P: {}, attributes: { depth: void 0, ps: void 0 } },
            }),
          };
        };
        u4 = function (a, b) {
          return (c) => b({ ...a, ...c });
        };
        rOc = function () {
          return cOc({
            oT: u4(v4, (a) => __c.wQ.dk(a)),
            gya: u4(dOc, (a) => __c.Yq.dk(a)),
            Fya: u4(eOc, (a) => __c.uQ.dk({ ...a, id: __c.uec.generate() })),
            mja: u4(fOc, (a) => __c.yQ.dk(a)),
            TN: u4(gOc, (a) => __c.Ozb.dk(a)),
            G_: u4(w4, (a) => __c.yE.dk({ ...a, id: zE.generate() })),
            H_: u4(x4, (a) =>
              __c.OI.dk({
                ...a,
                gb: [],
                viewBox: { top: 0, left: 0, width: 1, height: 1 },
                id: zE.generate(),
              })
            ),
            tya: u4(hOc, (a) => __c.gEb.dk(a)),
            I_: u4(iOc, (a) => __c.lU.dk({ ...a, id: zE.generate() })),
            Zxa: u4(jOc, (a) => __c.mU.dk({ ...a, id: zE.generate() })),
            wVa: u4(kOc, (a) => __c.AEb.dk(a)),
            kya: u4(lOc, (a) => __c.nU.dk({ ...a, id: zE.generate() })),
            xVa: u4(mOc, (a) => __c.LEb.dk(a)),
            kVa: u4(nOc, (a) => __c.EEb.dk(a)),
            YUa: u4(oOc, (a) => __c.EEb.dk(a)),
            aja: u4(pOc, (a) => __c.PEb.dk({ ...a, id: zE.generate() })),
            dya: u4(qOc, (a) => __c.NI.dk(a)),
          });
        };
        y4 = __c.y4 = function (a) {
          const b = new Set();
          for (const c of Object.values(a))
            v(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
          return a;
        };
        z4 = function (a, b) {
          return { key: a, PM: 1, Iq: 0, type: b };
        };
        A4 = function (a, b) {
          return { key: a, PM: 1, Iq: 1, type: b };
        };
        B4 = __c.B4 = function (a, b) {
          return { key: a, PM: 0, Iq: 1, type: b };
        };
        C4 = __c.C4 = function (a, b) {
          return { key: a, PM: 1, Iq: 1, type: b };
        };
        D4 = __c.D4 = function (a) {
          return { kind: 0, Vf: a };
        };
        E4 = function (a) {
          return { kind: 2, range: a };
        };
        sOc = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        G4 = __c.G4 = function (a, ...b) {
          return F4.val(a, sOc(...b));
        };
        H4 = __c.H4 = function (a) {
          return z4(a, D4());
        };
        I4 = function (a, ...b) {
          return z4(a, sOc(...b));
        };
        J4 = function (a, b) {
          return z4(a, { kind: 3, range: b });
        };
        K4 = function (a) {
          return { kind: 5, itemType: a };
        };
        L4 = __c.L4 = function (a, b) {
          return A4(a, D4(b));
        };
        M4 = __c.M4 = function (a, b) {
          return A4(a, E4(b));
        };
        N4 = __c.N4 = function (a, ...b) {
          return A4(a, sOc(...b));
        };
        O4 = __c.O4 = function (a) {
          return { kind: 7, name: a };
        };
        P4 = __c.P4 = function (a, b) {
          return F4.ref(a, O4(b));
        };
        __c.Q4 = function (a) {
          return { kind: 9, itemType: a };
        };
        R4 = __c.R4 = function (a) {
          return { kind: 10, fields: a };
        };
        S4 = function (a, b) {
          return F4.ref(a, R4(b));
        };
        T4 = __c.T4 = function (a, ...b) {
          return { kind: 11, R1a: a, Ki: b };
        };
        tOc = function (a) {
          return { key: 2, PM: 1, Iq: 0, type: R4(a) };
        };
        uOc = function (a) {
          switch (a.kind) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              return !1;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
              return !0;
            default:
              throw new z(a);
          }
        };
        U4 = __c.U4 = function (a) {
          return () => ({ ...vOc, ...a });
        };
        V4 = __c.V4 = function () {
          return (a) => a;
        };
        W4 = function (a, b) {
          return b.map((c) => ({ type: a, id: c.id, version: c.version }));
        };
        X4 = function () {
          return {
            Bd: J4(1, { min: 0 }),
            G9: A4(2, K4({ kind: 3, range: void 0 })),
            V: J4(3, { min: 0, max: 100 }),
          };
        };
        wOc = function (a, b, c) {
          return {
            Ga: z4(a, K4(Y4)),
            height: J4(b, { min: 1 }),
            width: J4(c, { min: 1 }),
          };
        };
        f5 = function (a) {
          return { borderColor: z4(a, Y4) };
        };
        g5 = function (a) {
          return { zd: z4(a, Y4) };
        };
        h5 = function (a) {
          return {
            Tp: S4(a, {
              Ve: N4(1, "none", "underline"),
              direction: N4(2, "ltr", "rtl"),
              fontFamily: L4(3),
              fontStyle: N4(4, "normal", "italic"),
              fontWeight: N4(
                5,
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
              letterSpacing: M4(6, { min: -200, max: 800 }),
              lineHeight: M4(7, { min: 500, max: 2500 }),
              Mj: N4(8, "none", "bulleted", "numbered", "checked"),
              size: M4(9, { min: 0 }),
              Gl: N4(10, "none", "strikethrough"),
              textAlign: N4(11, "start", "center", "end", "justify"),
              textTransform: N4(
                12,
                "none",
                "uppercase",
                "lowercase",
                "capitalize"
              ),
            }),
          };
        };
        i5 = function (a = {}) {
          return {
            Ve: Sf.Dc.decoration,
            direction: Sf.Dc.direction,
            fontFamily: Sf.Dc["font-family"],
            fontStyle: Sf.Dc["font-style"],
            fontWeight: Sf.Dc["font-weight"],
            letterSpacing: Sf.Dc.tracking,
            lineHeight: Sf.Dc.leading,
            Mj: "none",
            size: Sf.Dc["font-size"],
            Gl: Sf.Dc.strikethrough,
            textAlign: Sf.Dc["text-align"],
            textTransform: Sf.Dc["text-transform"],
            ...a,
          };
        };
        j5 = function (a, b) {
          return { ...aH, stream: Wg.wb().attrs(b).xb(a).build() };
        };
        k5 = __c.k5 = function (a, b) {
          return __c.Ls(__c.Fs(__c.zs(a), b));
        };
        l5 = function (a, b) {
          v(b.length > 0, "zero contrast candidates received");
          const c = new Map();
          return __c.Cp(b, (d) => {
            const e = c.get(d) ?? __c.JC(d, a);
            c.set(d, e);
            return e;
          });
        };
        xOc = function (a, b, c) {
          v(!0);
          v(!0);
          v(!0);
          const { Ca: d, a: e, b: f } = __c.us(a),
            { Ca: g, a: h, b: k } = __c.us(b),
            l = (d + g) / 2;
          var m = (Math.hypot(e, f) + Math.hypot(h, k)) / 2;
          m = 0.5 * (1 - Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7)));
          var n = e * (1 + m),
            p = h * (1 + m),
            q = Math.hypot(n, f),
            r = Math.hypot(p, k);
          m = (q + r) / 2;
          var t = __c.Is((Math.atan2(f, n) * 180) / Math.PI);
          const u = __c.Is((Math.atan2(k, p) * 180) / Math.PI);
          n = Math.abs(t - u) > 180 ? (t + u + 360) / 2 : (t + u) / 2;
          p = r - q;
          q =
            2 *
            Math.sqrt(q * r) *
            Math.sin(
              (((Math.abs(u - t) <= 180
                ? u - t
                : u <= t
                ? u - t + 360
                : u - t - 360) /
                2) *
                Math.PI) /
                180
            );
          r = 1 + 0.045 * m;
          t =
            1 +
            0.015 *
              m *
              (1 -
                0.17 * Math.cos(((n - 30) * Math.PI) / 180) +
                0.24 * Math.cos((2 * n * Math.PI) / 180) +
                0.32 * Math.cos(((3 * n + 6) * Math.PI) / 180) -
                0.2 * Math.cos(((4 * n - 63) * Math.PI) / 180));
          return Math.sqrt(
            ((g - d) /
              (1 + (0.015 * (l - 50) ** 2) / Math.sqrt(20 + (l - 50) ** 2))) **
              2 +
              (p / (1 * r)) ** 2 +
              (q / (1 * t)) ** 2 +
              (p / (1 * r)) *
                (q / (1 * t)) *
                (-(2 * Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7))) *
                  Math.sin(
                    (30 * Math.exp(-1 * ((n - 275) / 25) ** 2) * 2 * Math.PI) /
                      180
                  ))
          ) >= (c ?? 20)
            ? a
            : l5(b, m5);
        };
        __c.zOc = function (a, b, c, d) {
          const e = a !== b,
            f = e ? a : l5(a, m5),
            { h: g, s: h, Ca: k } = __c.Bs(f);
          var l = new __c.ts(g, h, k < 10 ? k + 6 : k - 6);
          l = Cs(l);
          var m = new __c.ts(g, h, k < 10 ? k + 10 : k - 10);
          m = Cs(m);
          return {
            backgroundColor: b,
            accentColor: f,
            xsb: k5(f, e ? 0.5 : 0.12),
            wsb: l,
            vsb: m,
            ysb: k5(f, 0.4),
            errorColor: xOc("#db142c", b),
            ...(function () {
              const n = l5(f, m5);
              return c
                ? {
                    h6a: c,
                    Q8: c === f ? n : c,
                    RWa: c === f ? n : c,
                    dD: c,
                    xka: c,
                    JYa: Cs(__c.HC(__c.Fs(__c.zs(c), 0.8), __c.zs(b))),
                  }
                : {
                    h6a: d?.wa === 1 ? l5(b, m5) : l5(a, m5),
                    Q8: n,
                    RWa: e ? l5(a, m5) : a,
                    dD: l5(b, m5),
                    xka: l5(b, yOc),
                    JYa: l5(b, m5),
                  };
            })(),
            Nla: f,
            ...(function () {
              if (c)
                return {
                  C$: k5(c, 0.12),
                  D$: k5(c, 0.3),
                  Mla: k5(c, 0.5),
                  m1: k5(c, 0.1),
                };
              const n = xOc("#000000", b);
              return {
                C$: k5(n, 0.08),
                D$: k5(n, 0.12),
                Mla: k5(n, 0.5),
                m1: k5(n, 0.1),
              };
            })(),
            ...(function () {
              if (c)
                return { LCa: k5(c, 0.6), NCa: k5(c, 0.5), MCa: k5(c, 0.5) };
              const n = xOc("#000000", b, 50),
                { h: p, s: q, Ca: r } = __c.Bs(n);
              var t = new __c.ts(p, q, r < 10 ? r + 6 : r - 6);
              t = Cs(t);
              var u = new __c.ts(p, q, r < 10 ? r + 10 : r - 10);
              u = Cs(u);
              return { LCa: k5(n, 0.6), NCa: k5(t, 0.5), MCa: k5(u, 0.5) };
            })(),
          };
        };
        BOc = function (a) {
          return {
            data: { C: { type: "quiz", value: AOc(a) }, document: {} },
            S: { width: a.width, height: a.height },
          };
        };
        AOc = function (a) {
          const b = a.title,
            c = a.fields,
            d = a.jma,
            e = a.Ffa,
            f = a.oga,
            g = a.borderColor,
            h = a.Bd,
            k = a.V,
            l = a.ybc,
            [m, n] = [e, f].map((r) =>
              typeof r === "string" ? r : r.Te[0].color || "#ffffff"
            ),
            p = c.length === 1 && !b,
            q = {
              Ga: __c.zOc(m, n, void 0, COc),
              fontFamily: d,
              Sy: { base: 18, g6a: 1.953, H3a: 1, HPb: 1, Csb: __c.DOc },
              G3a: p,
            };
          return {
            minHeight: 500,
            minWidth: 368,
            id: sp(),
            Yt: sp(),
            Pz: void 0,
            type: "quiz",
            Cj: 18,
            Gk: 18,
            direction: a.direction ?? "l",
            jma: d,
            Ffa: typeof e === "string" ? { ...BE, color: e } : { ...BE, Ra: e },
            oga: typeof f === "string" ? { ...BE, color: f } : { ...BE, Ra: f },
            border: { ...__c.QJb, color: g ?? m, weight: h ?? 8 },
            V: k ?? 8,
            V0a: {},
            mIa: void 0,
            title: b ? { label: __c.n5(b, EOc(q)), EL: "c" } : void 0,
            header: {
              dfa: 1.953,
              Zr: 1.953,
              $r: 1.953,
              tv: 0.64,
              background: COc,
            },
            F3: !1,
            lva: p,
            fields: c
              .map((r) => {
                a: switch (r.type) {
                  case "select":
                    var t = FOc(r, q);
                    break a;
                  case "text":
                    t = { ...GOc(r, q) };
                    var u = r.placeholder;
                    b: {
                      var w = r.variant;
                      switch (w.type) {
                        case 1:
                          w = { type: "e" };
                          break b;
                        case 2:
                          w = { type: "f", VQ: w.Ydc ? 1 : 3 };
                          break b;
                        default:
                          throw new z(w);
                      }
                    }
                    t = { ...t, type: "text", placeholder: u, variant: w };
                    break a;
                  case "number":
                    t = { ...GOc(r, q) };
                    u = { type: HOc[r.variant.type] };
                    b: {
                      var A = r.min;
                      w = r.max;
                      r = r.variant;
                      switch (r.type) {
                        case 1:
                          w =
                            w && A && w < A
                              ? { min: w, max: A }
                              : { min: A, max: w };
                          break b;
                        case 2:
                          r = Math.max(1, A ?? 1);
                          w = Math.min(5, w ?? 5);
                          w = { min: Math.min(r, w), max: Math.max(r, w) };
                          break b;
                        case 3:
                          w = {
                            min: 1,
                            max: Math.max(1, Math.min(10, w ?? 10)),
                          };
                          break b;
                        case 4:
                          r = Math.max(1, A ?? 1);
                          w = Math.min(10, w ?? 10);
                          w = { min: Math.min(r, w), max: Math.max(r, w) };
                          break b;
                        default:
                          throw new z(r);
                      }
                    }
                    t = { ...t, type: "number", variant: u, ...w };
                    break a;
                  default:
                    throw new z(r);
                }
                return t;
              })
              .slice(0, 10),
            RV: { $r: 1.953, Zr: 1.953, tv: 0.64 },
            footer: {
              label: {
                type: "text2",
                text: __c.n5(l.slice(0, 250), {
                  color: q.Ga.RWa,
                  "font-size": q.Sy.base * q.Sy.Csb,
                  "font-family": q.fontFamily,
                  "font-weight": "bold",
                  "text-align": "center",
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                }),
              },
              EL: void 0,
              tv: 1.953,
              Zr: 1.953,
              $r: 1.953,
              efa: 0.512,
            },
          };
        };
        FOc = function (a, b) {
          const c = [],
            d = a.options.map((e, f) => {
              e = {
                id: sp(),
                label: {
                  type: "text2",
                  text: __c.n5(e.slice(0, 250), {
                    color: b.Ga.dD,
                    "font-size": b.Sy.base * b.Sy.HPb,
                    "font-family": b.fontFamily,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on",
                  }),
                },
              };
              a.variant.type === 2 &&
                a.variant.b7b.includes(f) &&
                e.id &&
                c.push(e.id);
              return e;
            });
          return {
            ...GOc(a, b),
            type: "select",
            variant: { type: IOc[a.variant.type] },
            L4: a.Ekc ? 0 : 1,
            TCa: c,
            options: d.slice(0, 10),
          };
        };
        GOc = function (a, b) {
          var c = b.Sy;
          c = b.G3a ? c.g6a : c.H3a;
          return {
            id: sp(),
            label: {
              type: "text2",
              text: __c.n5(
                a.label.slice(0, 250),
                b.G3a
                  ? EOc(b)
                  : {
                      color: b.Ga.dD,
                      "font-size": b.Sy.base * b.Sy.H3a,
                      "font-family": b.fontFamily,
                      "font-weight": "semibold",
                      "font-kerning": "normal",
                      "font-feature-liga": "on",
                      "font-feature-clig": "on",
                      "font-feature-calt": "on",
                    }
              ),
            },
            bKa: c,
            EL: "c",
            V: 8,
            required: a.required,
          };
        };
        EOc = function (a) {
          return {
            color: a.Ga.h6a,
            "font-size": a.Sy.base * a.Sy.g6a,
            "font-family": a.fontFamily,
            "font-weight": "bold",
            "text-align": "start",
            leading: 1200,
            "font-kerning": "normal",
            "font-feature-liga": "on",
            "font-feature-clig": "on",
            "font-feature-calt": "on",
          };
        };
        cPc = function (a) {
          function b(d, e) {
            e = JOc(c, d, e());
            return { id: d, schema: e };
          }
          const c = a.bT;
          return {
            pi: a.qFa
              ? Promise.all([
                  __webpack_require__.me(938574).then(() => KOc),
                  __webpack_require__.me(576579).then(() => LOc),
                  __webpack_require__.me(708292).then(() => MOc),
                  __webpack_require__.me(307561).then(() => NOc),
                  __webpack_require__.me(205346).then(() => OOc),
                  __webpack_require__.me(737447).then(() => POc),
                  __webpack_require__.me(700760).then(() => QOc),
                  __webpack_require__.me(104317).then(() => ROc),
                  __webpack_require__.me(647718).then(() => SOc),
                  __webpack_require__.me(314524).then(() => TOc),
                  __webpack_require__.me(760347).then(() => UOc),
                  __webpack_require__.me(367270).then(() => VOc),
                  __webpack_require__.me(823869).then(() => WOc),
                ]).then(
                  o5.wrap(([d, e, f, g, h, k, l, m, n, p, q, r, t]) => ({
                    H1: b("w:cm9wgGptP", d.wf),
                    M1: b("w:yLMS4dWnl", e.wf),
                    N1: b("w:2flp30CGQ", f.wf),
                    O1: b("w:1Nv6K6Dtv", g.wf),
                    P1: b("w:5Nv6K6Dtv", h.wf),
                    Q1: b("w:6Nv6K6Dtv", k.wf),
                    R1: b("w:7Nv6K6Dtv", l.wf),
                    S1: b("w:8Nv6K6Dtv", m.wf),
                    T1: b("w:9Nv6K6Dtv", n.wf),
                    I1: b("w:sSrc7m4Q3", p.wf),
                    J1: b("w:ANv6K6Dtv", q.wf),
                    K1: b("w:7kN2mP9qT", r.wf),
                    L1: b("w:13v6K6Dtv", t.wf),
                  }))
                )
              : void 0,
            ru: __webpack_require__
              .me(734120)
              .then(() => XOc)
              .then(o5.wrap((d) => b("w:wnJF5T87v", d.wf))),
            c2: __webpack_require__
              .me(713476)
              .then(() => YOc)
              .then(o5.wrap((d) => b("w:xB9fK2LmQ", d.wf))),
            button: __webpack_require__
              .me(699793)
              .then(() => ZOc)
              .then(o5.wrap((d) => b("w:PQccHDsCJ", d.wf))),
            NQ: a.xFa
              ? __webpack_require__
                  .me(809957)
                  .then(() => $Oc)
                  .then(o5.wrap((d) => b("w:K7mQ9xR3p", d.wf)))
              : void 0,
            scene: __webpack_require__
              .me(356363)
              .then(() => aPc)
              .then(o5.wrap((d) => b("w:2pbXJMtm1", d.wf))),
            form: __webpack_require__
              .me(232140)
              .then(() => bPc)
              .then(o5.wrap((d) => b("widget:form", d.wf))),
          };
        };
        gPc = function (a) {
          function b({ id: f, schema: g }, h, k) {
            return dPc(e, f, g, h(k));
          }
          const c = new ePc(),
            d = a.g_,
            e = a.aT;
          return {
            ltc: c,
            pi: d.pi
              ? Promise.all([
                  d.pi,
                  __webpack_require__.me(938574).then(() => KOc),
                  __webpack_require__.me(576579).then(() => LOc),
                  __webpack_require__.me(708292).then(() => MOc),
                  __webpack_require__.me(307561).then(() => NOc),
                  __webpack_require__.me(205346).then(() => OOc),
                  __webpack_require__.me(737447).then(() => POc),
                  __webpack_require__.me(700760).then(() => QOc),
                  __webpack_require__.me(104317).then(() => ROc),
                  __webpack_require__.me(647718).then(() => SOc),
                  __webpack_require__.me(314524).then(() => TOc),
                  __webpack_require__.me(760347).then(() => UOc),
                  __webpack_require__.me(367270).then(() => VOc),
                  __webpack_require__.me(823869).then(() => WOc),
                ]).then(
                  o5.wrap(([f, g, h, k, l, m, n, p, q, r, t, u, w, A]) => ({
                    H1: b(f.H1, g.vf, void 0),
                    M1: b(f.M1, h.vf, void 0),
                    N1: b(f.N1, k.vf, void 0),
                    O1: b(f.O1, l.vf, void 0),
                    P1: b(f.P1, m.vf, void 0),
                    Q1: b(f.Q1, n.vf, void 0),
                    R1: b(f.R1, p.vf, void 0),
                    S1: b(f.S1, q.vf, void 0),
                    T1: b(f.T1, r.vf, void 0),
                    I1: b(f.I1, t.vf, void 0),
                    J1: b(f.J1, u.vf, void 0),
                    K1: b(f.K1, w.vf, void 0),
                    L1: b(f.L1, A.vf, void 0),
                  }))
                )
              : void 0,
            ru: Promise.all([
              d.ru,
              __webpack_require__.me(734120).then(() => XOc),
            ]).then(o5.wrap(([f, g]) => b(f, g.vf, void 0))),
            c2: Promise.all([
              d.c2,
              __webpack_require__.me(713476).then(() => YOc),
            ]).then(o5.wrap(([f, g]) => b(f, g.vf, { pr: a.pr }))),
            button: Promise.all([
              d.button,
              __webpack_require__.me(699793).then(() => ZOc),
            ]).then(o5.wrap(([f, g]) => b(f, g.vf, { Vma: c.Vma }))),
            NQ: d.NQ
              ? Promise.all([
                  d.NQ,
                  __webpack_require__.me(809957).then(() => $Oc),
                ]).then(o5.wrap(([f, g]) => b(f, g.vf, void 0)))
              : void 0,
            scene: Promise.all([
              d.scene,
              __webpack_require__.me(584378).then(() => fPc),
            ]).then(o5.wrap(([f, g]) => b(f, g.vf, void 0))),
            form: Promise.all([
              d.form,
              __webpack_require__.me(232140).then(() => bPc),
            ]).then(o5.wrap(([f, g]) => b(f, g.vf, void 0))),
          };
        };
        hPc = function (a) {
          var b = { document: void 0, C: void 0 };
          const c = new Map();
          for (const d in b) a[d].IU.forEach((e, f) => c.set(f, e));
          return {
            IU: c,
            Zp: (d) => {
              const e = new Map(),
                f = {};
              for (const g in d) {
                const h = a[g].Zp(d[g]);
                h.lPa.forEach((k, l) => e.set(l, k));
                f[g] = h.data;
              }
              return { lPa: e, data: f };
            },
          };
        };
        iPc = function (a) {
          return () => a;
        };
        jPc = function (a) {
          return a();
        };
        kPc = function (a, b, c) {
          return new p5([a], b, c);
        };
        q5 = function (a, b, c, d) {
          return new p5([a, b], c, d);
        };
        r5 = function (a, b, c, d) {
          return new lPc(a, b, c, d);
        };
        mPc = function (a, b) {
          return b(a);
        };
        nPc = function (a) {
          return (b, c) => ({ kind: 2, name: a, args: [b, c] });
        };
        oPc = function (a) {
          return (b) => ({ kind: 3, name: a, args: b });
        };
        s5 = function (a, b) {
          return a === b || b.map((c) => a.iJa(pPc(c)));
        };
        rPc = function (a, b) {
          return a.wLa(b).map((c) => new qPc(c, (d) => d.props[b]));
        };
        pPc = function (a) {
          v(a instanceof sPc);
          return a;
        };
        t5 = function (a) {
          const b = new WeakMap();
          return function (c) {
            let d = b.get(c);
            d == null && ((d = a.call(this, c)), b.set(c, d));
            return d;
          };
        };
        vPc = function (a, b) {
          if (a === b) return !0;
          switch (typeof a) {
            case "string":
            case "number":
            case "boolean":
            case "undefined":
              return !1;
            case "object":
              if (typeof b !== "object" || a.kind !== b.kind) return !1;
              switch (a.kind) {
                case "array":
                  return b.kind === "array" && tPc(a.items, b.items);
                case "set":
                  var c;
                  if ((c = b.kind === "set"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : tPc([...a], [...b]));
                  return c;
                case "map":
                  if ((c = b.kind === "map"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : tPc(
                              [...a.keys(), ...a.values()],
                              [...b.keys(), ...b.values()]
                            ));
                  return c;
                case "record":
                  return b.kind === "record" && uPc(a.fields, b.fields);
                case "instance":
                  return b.kind === "instance" && a.instance === b.instance;
                default:
                  throw new z(a);
              }
            default:
              throw new z(a);
          }
        };
        tPc = function (a, b) {
          if (a === b) return !0;
          if (a.length !== b.length) return !1;
          for (let c = 0; c < a.length; c++) if (!vPc(a[c], b[c])) return !1;
          return !0;
        };
        uPc = function (a, b) {
          if (a === b) return !0;
          const c = Object.keys(a),
            d = Object.keys(b),
            e = new Set([...c, ...d]);
          if (c.length !== e.size || d.length !== e.size) return !1;
          for (const f of e) if (!vPc(a[f], b[f])) return !1;
          return !0;
        };
        u5 = function (a) {
          return typeof a === "string" ? JSON.stringify(a) : String(a);
        };
        xPc = function (a, b) {
          return a.map((c) => b.map((d) => wPc[0](c, d)));
        };
        zPc = function (a, b, c) {
          return b.map((d) => yPc[a](d, c));
        };
        APc = function (a, b) {
          return new v5(new w5(new Map(b), a.vars), a.Iba);
        };
        CPc = function (a, b, c) {
          for (const [e, f] of c.Iba) {
            var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
            d = BPc(b, d, (g) => x5(a, g, f.body));
            b = new v5(b.vars, b.Iba.define(e, d));
          }
          return x5(a, b, c.body);
        };
        x5 = function (a, b, c) {
          switch (c.kind) {
            case 1:
              return DPc(c.value);
            case 2:
              const f = c.args.map((q) => x5(a, b, q));
              c = c.name;
              return typeof c === "string"
                ? b.Iba.resolve(c).map((q) => EPc(q, f))
                : FPc[c].map((q) => GPc(q, f));
            case 3:
              const g = c.args.map((q) => {
                q.kind !== 13
                  ? ((q = x5(a, b, q)), (q = new HPc(q)))
                  : ((q = x5(a, b, q.cec)), (q = new IPc(q)));
                return q;
              });
              c = c.name;
              switch (c) {
                case 0:
                case 1:
                  var d = g.map((q) =>
                    q.CGa(
                      (r) => r.type,
                      (r) => r.type.gX()
                    )
                  );
                  return y5
                    .union(...d)
                    .map(JPc[c])
                    .map((q) => KPc(q, g));
                default:
                  return LPc[c].map((q) => KPc(q, g));
              }
            case 4:
              d = c.name;
              var e = c.param;
              const h = c.body,
                k = x5(a, b, c.Z0);
              c = k.type.gX();
              const l = BPc(b, [[e, c]], (q) => x5(a, q, h));
              return zPc(d, c, l.resultType).map((q) => MPc(q, k, l));
            case 5:
              const m = c.entries.map(([q, r]) => [x5(a, b, q), x5(a, b, r)]);
              c = y5.union(...m.map(([q]) => q.type));
              d = y5.union(...m.map(([, q]) => q.type));
              if (!s5(c, y5.primitive))
                throw Error(`key type is not a primitive: ${c}`);
              return xPc(c, d).map((q) => NPc(q, m));
            case 6:
              const n = ld(c.fields, (q) => x5(a, b, q));
              c = ld(n, (q) => q.type);
              return (0, OPc[0])(c).map((q) => PPc(q, n));
            case 7:
              d = a.types.resolve(c.name);
              if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
              const p = x5(a, b, { kind: 6, fields: c.args });
              return d.mNb.map((q) => GPc(q, [p], { Io: !0 }));
            case 8:
              return (d = x5(a, b, c.base)), QPc(d, c.aoc);
            case 9:
              return RPc(b, c.name);
            case 10:
              return (d = Ld(c.defs, (q) => x5(a, b, q))), SPc(a, b, d, c.body);
            case 11:
              return (
                (d = x5(a, b, c.test).as(y5.boolean)),
                (e = x5(a, b, c.T6b)),
                (c = x5(a, b, c.alternate)),
                TPc(d, e, c)
              );
            case 12:
              return x5(a, b, c.body).computed();
            default:
              throw new z(c);
          }
        };
        DPc = function (a) {
          switch (typeof a) {
            case "string":
              return z5(y5.string, a);
            case "number":
              return z5(y5.number, a);
            case "boolean":
              return z5(y5.boolean, a);
            case "undefined":
              return z5(y5.undefined, a);
            default:
              throw new z(a);
          }
        };
        QPc = function (a, b) {
          return a.map((c) =>
            rPc(c, b).map(({ type: d, get: e }) => GPc(new p5([c], d, e), [a]))
          );
        };
        RPc = function (a, b) {
          return a.vars.resolve(b).map((c) => A5.of(c, (d) => d.resolve(b)));
        };
        SPc = function (a, b, c, d) {
          const e = Ld(c, (g) => g.type),
            f = Ld(c, (g) => g.evaluate);
          return UPc(x5(a, APc(b, e), d), (g) => {
            const h = Ld(f, (k) => k(g));
            return new w5(new Map(h), g);
          });
        };
        TPc = function (a, b, c) {
          return b.map((d, e) =>
            c.map((f, g) => {
              f = y5.union(d, f);
              return A5.of(f, (h) => {
                const k = a(h),
                  l = e(h),
                  m = g(h);
                return () => (k() ? l() : m());
              });
            })
          );
        };
        B5 = function (a) {
          return (b) => b(a);
        };
        EPc = function ({ Usa: a, resultType: b, evaluate: c }, d) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const e = VPc(a, (f, g) => d[g].as(f));
          return A5.of(b, (f) => {
            const g = e.map(B5(f));
            return c(f)(...g);
          });
        };
        GPc = function ({ Usa: a, resultType: b, apply: c }, d, e) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const f = VPc(a, (g, h) => d[h].as(g));
          return A5.of(b, (g) => {
            g = f.map(B5(g));
            return WPc(e?.Io ? XPc(c) : c, g);
          });
        };
        KPc = function ({ GQb: a, resultType: b, apply: c }, d) {
          let e;
          const f = d.map((g) =>
            g.MAa(
              (h) => h.as(a),
              (h) => h.as(e ?? (e = y5.Z0(a)))
            )
          );
          return new A5(b, (g) => {
            const h = B5(g),
              k = f.map((l) => l.MAa(h, h));
            return () => {
              const l = [];
              k.forEach((m) => {
                m.CGa(
                  (n) => l.push(n()),
                  (n) => l.push(...n())
                );
              });
              return c(l);
            };
          });
        };
        NPc = function (
          { keyType: a, valueType: b, resultType: c, apply: d },
          e
        ) {
          const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
          return new A5(c, (g) => {
            const h = f.map(([k, l]) => [k(g), l(g)]);
            return () => d(h.map(([k, l]) => [k(), l()]));
          });
        };
        PPc = function ({ ptb: a, resultType: b, apply: c }, d) {
          const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
          if (e.length) throw Error(`too few arguments (missing ${e})`);
          const f = YPc(a, (g, h) => d[h].as(g));
          return new A5(b, (g) => {
            const h = ld(f, B5(g));
            return () => {
              var k = ld(h, jPc);
              return c(k);
            };
          });
        };
        z5 = function (a, b) {
          const c = iPc(b);
          return new A5(a, () => c);
        };
        MPc = function (
          { itemType: a, Ntb: b, resultType: c, reduce: d },
          e,
          f
        ) {
          const g = f.as([a], b),
            h = e.as(y5.Z0(a));
          return new A5(c, (k) => {
            const l = h(k),
              m = g(k),
              n = XPc((p) => {
                p = p.map(iPc);
                return [p, p.map(m)];
              });
            return () => {
              const [p, q] = n(l());
              return d(p, q);
            };
          });
        };
        UPc = function (a, b) {
          const c = a.evaluate;
          return new A5(a.type, (d) => c(b(d)));
        };
        BPc = function (a, b, c) {
          const d = b.map((f) => f[0]),
            e = b.map((f) => f[1]);
          return mPc(e, (f) =>
            c(APc(a, new Map(b))).map(
              (g, h) =>
                new ZPc(f, g, (k) => (...l) => {
                  const m = new Map(d.map((n, p) => [n, l[p]]));
                  return h(new w5(new Map(m), k));
                })
            )
          );
        };
        WPc = function (a, b) {
          switch (b.length) {
            case 0:
              return a;
            case 1:
              const [c] = b;
              return () => a(c());
            case 2:
              const [d, e] = b;
              return () => a(d(), e());
            default:
              return () => {
                var f = b.map(jPc);
                return a(...f);
              };
          }
        };
        XPc = function (a) {
          let b;
          return (...c) => {
            if (
              b &&
              b.Nnb.length === c.length &&
              b.Nnb.every((e, f) => C5.Th(e, c[f]))
            )
              return b.v;
            const d = a(...c);
            b = { Nnb: c, v: d };
            return d;
          };
        };
        YPc = function (a, b) {
          return ld(a, b);
        };
        VPc = function (a, b) {
          return a.map(b);
        };
        aQc = function (a, b, c) {
          return new $Pc(a, b, c);
        };
        bQc = function (a, b) {
          return [...a].map(b)[Symbol.iterator]();
        };
        dQc = function (a, b, c) {
          return new cQc(a, b, c);
        };
        eQc = function (a) {
          const b = new WeakMap();
          return (c) => {
            let d = b.get(c);
            d || ((d = a(c)), b.set(c, d));
            return d;
          };
        };
        D5 = function (a, b, c, d) {
          if (d == null) throw a.error(b.jH(c), "not found");
          return d;
        };
        tQc = function (a) {
          function b(w) {
            return q[w.kind](w);
          }
          const c = a.Sk,
            d = a.BUa,
            e = a.J,
            f = c.types,
            g = c.values;
          class h {
            static of(w, A, B, C, D, H, J) {
              const M = fQc(A);
              return new h(w, B, C, gQc(D, fQc(A)), hQc(H, M), gQc(J, M));
            }
            map(w) {
              return w(this);
            }
            validate(w) {
              return w
                ? new h(
                    this.dataType,
                    this.lia,
                    this.Lha,
                    iQc(this.Zp, w),
                    gQc(this.encode, w),
                    iQc(this.decode, w)
                  )
                : this;
            }
            constructor(w, A, B, C, D, H) {
              this.dataType = w;
              this.lia = A;
              this.Lha = B;
              this.Zp = C;
              this.encode = D;
              this.decode = H;
            }
          }
          const k = h.of(
              { kind: 0 },
              "string",
              f.string,
              (w) => w,
              (w, A, B) => B.value,
              (w, A, B) => ({ type: "string", value: B }),
              (w, A, B) => B.value
            ),
            l = h.of(
              { kind: 1 },
              "boolean",
              f.boolean,
              (w) => w,
              (w, A, B) => B.value,
              (w, A, B) => ({ type: "boolean", value: B }),
              (w, A, B) => B.value
            ),
            m = h
              .of(
                { kind: 2 },
                "double",
                f.number,
                (w) => w,
                (w, A, B) => B.value,
                (w, A, B) => ({ type: "double", value: B }),
                (w, A, B) => B.value
              )
              .validate((w, A, B) => {
                if (!Number.isFinite(B))
                  throw w.error(A, `number is not finite: ${B}`);
              }),
            n = h
              .of(
                { kind: 3 },
                "int32",
                f.number,
                (w) => w,
                (w, A, B) => B.value,
                (w, A, B) => ({ type: "int32", value: B }),
                (w, A, B) => B.value
              )
              .validate((w, A, B) => {
                if (!Number.isInteger(B) || B < -2147483648 || B > 2147483647)
                  throw w.error(A, `number is not an int32: ${B}`);
              }),
            p = {
              FontRef: h.of(
                { kind: 7, name: "FontRef" },
                "ref",
                f.instance("FontRef"),
                (w) => g.instance("FontRef", w),
                E5("font"),
                (w, A, B) => ({ type: "ref", value: B }),
                E5("font")
              ),
              MediaRef: h.of(
                { kind: 7, name: "MediaRef" },
                "ref",
                f.instance("MediaRef"),
                (w) => g.instance("MediaRef", w),
                E5("media"),
                (w, A, B) => ({ type: "ref", value: B }),
                E5("media")
              ),
              VideoRef: h.of(
                { kind: 7, name: "VideoRef" },
                "ref",
                f.instance("VideoRef"),
                (w) => g.instance("VideoRef", w),
                E5("video"),
                (w, A, B) => ({ type: "ref", value: B }),
                E5("video")
              ),
              AudioRef: h.of(
                { kind: 7, name: "AudioRef" },
                "ref",
                f.instance("AudioRef"),
                (w) => g.instance("AudioRef", w),
                E5("audio"),
                (w, A, B) => ({ type: "ref", value: B }),
                E5("audio")
              ),
              EmbedRef: h.of(
                { kind: 7, name: "EmbedRef" },
                "ref",
                f.instance("EmbedRef"),
                (w) => g.instance("EmbedRef", w),
                E5("embed"),
                (w, A, B) => ({ type: "ref", value: B }),
                E5("embed")
              ),
              SceneRef: h.of(
                { kind: 7, name: "SceneRef" },
                "ref",
                f.instance("SceneRef"),
                (w) => g.instance("SceneRef", w),
                E5("scene"),
                (w, A, B) => ({ type: "ref", value: B }),
                E5("scene")
              ),
              BlueprintRef: h.of(
                { kind: 7, name: "BlueprintRef" },
                "ref",
                f.instance("BlueprintRef"),
                (w) => g.instance("BlueprintRef", w),
                E5("blueprint"),
                (w, A, B) => ({ type: "ref", value: B }),
                E5("blueprint")
              ),
              Fill: h.of(
                { kind: 7, name: "Fill" },
                "fill",
                f.instance("Fill"),
                (w) => g.instance("Fill", w),
                (w, A, B) => B.value,
                (w, A, B) => ({ type: "fill", value: B }),
                (w, A, B) => B.value
              ),
              Stroke: h.of(
                { kind: 7, name: "Stroke" },
                "stroke",
                f.instance("Stroke"),
                (w) => g.instance("Stroke", w),
                (w, A, B) => B.value,
                (w, A, B) => ({ type: "stroke", value: B }),
                (w, A, B) => B.value
              ),
              Richtext2: h.of(
                { kind: 7, name: "Richtext2" },
                "text2",
                f.instance("Richtext2"),
                (w) => g.instance("Richtext2", w),
                (w, A, B) => B.value,
                (w, A, B) => ({ type: "text2", value: B }),
                (w, A, B) => B.value
              ),
            },
            q = {
              [0]: (w) => k.validate(jQc(w.Vf)),
              [1]: () => l,
              [2]: (w) => m.validate(kQc(w.range)),
              [3]: (w) => n.validate(kQc(w.range)),
              [4]: (w) =>
                h
                  .of(
                    { kind: 4, values: w.values },
                    lQc,
                    f.primitive,
                    (A) => A,
                    (A, B, C) => C.value,
                    (A, B, C) => {
                      a: switch (typeof C) {
                        case "string":
                          A = { type: "string", value: C };
                          break a;
                        case "boolean":
                          A = { type: "boolean", value: C };
                          break a;
                        case "number":
                          A = { type: "int32", value: C };
                          break a;
                        default:
                          throw new z(C);
                      }
                      return A;
                    },
                    (A, B, C) => C.value
                  )
                  .validate(mQc(w.values)),
              [5]: (w) => {
                const {
                  dataType: A,
                  lia: B,
                  Lha: C,
                  Zp: D,
                  encode: H,
                  decode: J,
                } = b(w.itemType);
                return h.of(
                  { kind: 5, itemType: A },
                  "list",
                  f.array(B),
                  (M) => g.array(M.map(C)),
                  (M, N, R) =>
                    R.value.toArray().map((S, Q) => D(M, N.VK(Q), S)),
                  (M, N, R) => ({
                    type: "list",
                    value: R.map((S, Q) => H(M, N.VK(Q), S)),
                  }),
                  (M, N, R) => __c.ef(R.value).map((S, Q) => J(M, N.VK(Q), S))
                );
              },
              [6]: (w) => {
                const {
                  dataType: A,
                  lia: B,
                  Lha: C,
                  Zp: D,
                  encode: H,
                  decode: J,
                } = b(w.itemType);
                return h.of(
                  { kind: 6, itemType: A },
                  "dict",
                  f.map(f.string, B),
                  (M) => g.map(Ld(M, C)),
                  (M, N, R) => Ld(R.value.Ei(), (S, Q) => D(M, N.$V(Q), S)),
                  (M, N, R) => ({
                    type: "dict",
                    value: Ld(R, (S, Q) => H(M, N.$V(Q), S)),
                  }),
                  (M, N, R) => Ld(R.value, (S, Q) => J(M, N.$V(Q), S))
                );
              },
              [7]: (w) => p[w.name],
              [8]: (w) => {
                const {
                  dataType: A,
                  Zp: B,
                  encode: C,
                  decode: D,
                } = b(w.itemType);
                return h.of(
                  { kind: 8, itemType: A },
                  "list",
                  f.undefined,
                  () => {},
                  (H, J, M) =>
                    dQc(
                      M.value,
                      (N) => C(H, J.VK("*"), N),
                      nQc(B, H, J.VK("*"))
                    ),
                  (H, J, M) => ({
                    type: "list",
                    value: M.map((N, R) => C(H, J.VK(R), N)),
                  }),
                  (H, J, M) => M.value.map((N, R) => D(H, J.VK(R), N))
                );
              },
              [9]: (w) => {
                const {
                  dataType: A,
                  Zp: B,
                  encode: C,
                  decode: D,
                } = b(w.itemType);
                return h.of(
                  { kind: 9, itemType: A },
                  "dict",
                  f.undefined,
                  () => {},
                  (H, J, M) =>
                    aQc(
                      M.value,
                      (N) => C(H, J.$V("*"), N),
                      nQc(B, H, J.VK("*"))
                    ),
                  (H, J, M) => ({
                    type: "dict",
                    value: Ld(M, (N, R) => C(H, J.$V(R), N)),
                  }),
                  (H, J, M) => Ld(M.value, (N, R) => D(H, J.$V(R), N))
                );
              },
              [10]: (w) => {
                const { Zp: A, encode: B, decode: C } = t.K9a(w.fields);
                return h.of(
                  { kind: 10, fields: w.fields },
                  "dict",
                  f.undefined,
                  () => {},
                  A,
                  B,
                  C
                );
              },
              [11]: (w) => {
                function A(Q, U, Y, aa) {
                  Y = Y.get(aa);
                  if (Y == null)
                    throw Q.error(
                      U,
                      `unknown case for discriminator value: ${aa}`
                    );
                  return Y;
                }
                const B = w.R1a;
                w = w.Ki;
                var C = Object.keys(B);
                v(C.length >= 1, "missing discriminator props");
                v(C.length <= 1, "too many discriminator props: {}", C);
                const D = C[0];
                v(w.length >= 1, "discriminated union has no cases");
                C = new Map();
                for (const Q of w) {
                  const U = Q.fields[D].type.values,
                    Y = b(Q);
                  for (const aa of U)
                    v(
                      !C.has(aa),
                      "discriminator values are not unique across cases: {}",
                      aa
                    ),
                      C.set(aa, Y);
                }
                const {
                    Zp: H,
                    encode: J,
                    decode: M,
                  } = b({ kind: 4, values: new Set(C.keys()) }),
                  N = Ld(C, (Q) => Q.Zp),
                  R = Ld(C, (Q) => Q.encode),
                  S = Ld(C, (Q) => Q.decode);
                return h.of(
                  { kind: 11, R1a: B, Ki: w },
                  "dict",
                  f.undefined,
                  () => {},
                  (Q, U, Y) => {
                    var aa = D5(Q, U, "k", Y.value.get("k"));
                    Y = D5(Q, U, "v", Y.value.get("v"));
                    oQc(Q, U, "dict", Y);
                    aa = H(Q, U, aa);
                    return A(Q, U, N, aa)(Q, U, Y);
                  },
                  (Q, U, Y) => {
                    const aa = Y[D],
                      la = A(Q, U, R, aa);
                    return {
                      type: "dict",
                      value: new Map([
                        ["k", J(Q, U, aa)],
                        ["v", la(Q, U, Y)],
                      ]),
                    };
                  },
                  (Q, U, Y) => {
                    var aa = D5(Q, U, "k", Y.value.get("k"));
                    Y = D5(Q, U, "v", Y.value.get("v"));
                    oQc(Q, U, "dict", Y);
                    aa = M(Q, U, aa);
                    return A(Q, U, S, aa)(Q, U, Y);
                  }
                );
              },
            },
            r = Symbol("$impl");
          class t {
            static K9a(w) {
              const A = ld(w, (D) => u.of(D)),
                B = ld(A, (D) => D.nYb()),
                C = Object.entries(A);
              return {
                IU: new Map(C.map(([, D]) => D.iYb())),
                oYb: (D) => {
                  const H = D[r];
                  return new Map(C.map(([, J]) => J.pYb(H)));
                },
                Zp: (D, H, J) => {
                  const M = Object.create(null, B);
                  Object.defineProperty(M, r, {
                    enumerable: !1,
                    writable: !1,
                    value: new t(D, H, J.value),
                  });
                  return M;
                },
                encode: (D, H, J) => {
                  const M = C.map(([N, R]) => R.encode(D, H, J[N]));
                  return { type: "dict", value: new Map(M.filter(__c.wb)) };
                },
                decode: (D, H, J) => {
                  const M = J.value;
                  return ld(A, (N) => N.decode(D, H, M.get(N.key)));
                },
              };
            }
            xHa(w, A) {
              const B = D5(this.e, this.p, A, this.data.get(A));
              return pQc(this.F3a, w.Zp, this.e, this.p.jH(A), B);
            }
            vHa(w, A) {
              const B = this.data.get(A);
              if (B != null)
                return pQc(this.F3a, w.Zp, this.e, this.p.jH(A), B);
            }
            Kib(w, A, B) {
              const C = this.p.jH(A);
              this.Wob(C) && this.data.set(A, w.encode(this.e, C, B));
            }
            Dib(w, A, B) {
              const C = this.p.jH(A);
              this.Wob(C) &&
                (B != null
                  ? this.data.set(A, w.encode(this.e, C, B))
                  : this.data.delete(A));
            }
            Wob(w) {
              return d()
                ? !0
                : (e.error(
                    this.e.error(
                      w,
                      "Attempt to write when writes are disabled."
                    )
                  ),
                  !1);
            }
            constructor(w, A, B) {
              this.e = w;
              this.p = A;
              this.data = B;
              this.F3a = new WeakMap();
              this.OYa = new Map();
              this.lFb = qQc(this.OYa, (C, D) => {
                const H = this;
                return {
                  get ref() {
                    return H.xHa(D, C);
                  },
                  set(J) {
                    H.Kib(D, C, J);
                  },
                };
              });
              this.ZEb = qQc(this.OYa, (C, D) => {
                const H = this;
                return {
                  get ref() {
                    return H.vHa(D, C);
                  },
                  set(J) {
                    H.Dib(D, C, J);
                  },
                };
              });
            }
          }
          class u {
            static of(w) {
              return new u(w, b(w.type));
            }
            iYb() {
              const w = this.key,
                A = this.Rb,
                B = this.type;
              switch (A.Iq) {
                case 0:
                  return [w, B.lia];
                case 1:
                  return [w, f.optional(B.lia)];
                default:
                  throw new z(A.Iq);
              }
            }
            pYb(w) {
              const A = this.key,
                B = this.Rb,
                C = this.type;
              switch (B.Iq) {
                case 0:
                  return [A, () => C.Lha(w.xHa(C, A))];
                case 1:
                  return [
                    A,
                    () => {
                      const D = w.vHa(C, A);
                      return D != null ? C.Lha(D) : void 0;
                    },
                  ];
                default:
                  throw new z(B.Iq);
              }
            }
            nYb() {
              const w = this.key;
              var A = this.Rb;
              const B = this.type;
              if (uOc(B.dataType) && A.PM === 1) {
                switch (A.Iq) {
                  case 0:
                    A = function () {
                      return this[r].lFb(w, B);
                    };
                    break;
                  case 1:
                    A = function () {
                      return this[r].ZEb(w, B);
                    };
                    break;
                  default:
                    throw new z(A.Iq);
                }
                return { enumerable: !0, get: A };
              }
              let C;
              switch (A.Iq) {
                case 0:
                  C = {
                    enumerable: !0,
                    get() {
                      return this[r].xHa(B, w);
                    },
                    set(D) {
                      this[r].Kib(B, w, D);
                    },
                  };
                  break;
                case 1:
                  C = {
                    enumerable: !0,
                    get() {
                      return this[r].vHa(B, w);
                    },
                    set(D) {
                      this[r].Dib(B, w, D);
                    },
                  };
                  break;
                default:
                  throw new z(A.Iq);
              }
              switch (A.PM) {
                case 0:
                  C.set = void 0;
                  break;
                case 1:
                  break;
                default:
                  throw new z(A.PM);
              }
              return C;
            }
            encode(w, A, B) {
              const C = this.key,
                D = this.Rb,
                H = this.type;
              switch (D.Iq) {
                case 0:
                  return [C, H.encode(w, A.jH(C), D5(w, A, C, B))];
                case 1:
                  return B != null ? [C, H.encode(w, A.jH(C), B)] : void 0;
                default:
                  throw new z(D.Iq);
              }
            }
            decode(w, A, B) {
              const C = this.key,
                D = this.Rb,
                H = this.type;
              switch (D.Iq) {
                case 0:
                  return H.decode(w, A.jH(C), D5(w, A, C, B));
                case 1:
                  return B != null ? H.decode(w, A.jH(C), B) : void 0;
                default:
                  throw new z(D.Iq);
              }
            }
            constructor(w, A) {
              this.Rb = w;
              this.type = A;
              w = w.key;
              v(w > 0 && Number.isInteger(w));
              if (w <= 52)
                w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                  w - 1
                ];
              else {
                for (A = ""; w > 0; )
                  w--,
                    (A =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                        w % 52
                      ] + A),
                    (w = Math.floor(w / 52));
                w = A;
              }
              this.key = w;
            }
          }
          return (w, A) => {
            const B = new rQc(w),
              C = new sQc(),
              { IU: D, oYb: H, Zp: J, encode: M, decode: N } = t.K9a(A);
            return {
              IU: D,
              Zp: eQc((R) => {
                R = J(B, C, { type: "dict", value: R });
                return { lPa: H(R), data: R };
              }),
              encode: (R) => M(B, C, R).value,
              decode: (R) => N(B, C, { type: "dict", value: R }),
            };
          };
        };
        qQc = function (a, b) {
          return (c, ...d) => {
            a.has(c) || a.set(c, b(c, ...d));
            return a.get(c);
          };
        };
        nQc = function (a, b, c) {
          const d = new WeakMap();
          return (e) => pQc(d, a, b, c, e);
        };
        pQc = function (a, b, c, d, e) {
          let f = a.get(e);
          f == null && ((f = b(c, d, e)), a.set(e, f));
          return f;
        };
        gQc = function (a, b) {
          return (c, d, e) => {
            b(c, d, e);
            return a(c, d, e);
          };
        };
        iQc = function (a, b) {
          return (c, d, e) => {
            e = a(c, d, e);
            b(c, d, e);
            return e;
          };
        };
        hQc = function (a, b) {
          var c = uQc();
          return (d, e, f) => {
            f = a(d, e, f);
            b(d, e, f);
            c(d, e, f);
            return f;
          };
        };
        oQc = function (a, b, c, d) {
          if (d.type !== c)
            throw a.error(b, `type error: expected ${c}, was ${d.type}`);
        };
        fQc = function (a) {
          return typeof a === "string"
            ? (b, c, d) => oQc(b, c, a, d)
            : (b, c, d) => {
                if (!a.has(d.type))
                  throw b.error(
                    c,
                    `type error: expected one of ${[...a].join(" or ")}, was ${
                      d.type
                    }`
                  );
              };
        };
        uQc = function () {
          return (a, b, c) => {
            if (typeof c.value !== vQc[c.type])
              throw a.error(
                b,
                `type error: expected ${c.type}, was ${typeof c.value}`
              );
          };
        };
        mQc = function (a) {
          return (b, c, d) => {
            if (!a.has(d))
              throw b.error(
                c,
                `expected one of ${[...a].join(" or ")}, was ${d}`
              );
          };
        };
        kQc = function (a) {
          if (a) {
            var b = a.min,
              c = a.max;
            v(b == null || c == null || b <= c);
            return (d, e, f) => {
              if (b != null && f < b)
                throw d.error(e, `value below min ${b}: ${f}`);
              if (c != null && f > c)
                throw d.error(e, `value above max ${b}: ${f}`);
            };
          }
        };
        jQc = function (a) {
          if (a)
            return (b, c, d) => {
              if (!a.test(d))
                throw b.error(c, `value does not match regex ${a}: '${d}'`);
            };
        };
        E5 = function (a) {
          return (b, c, d) => {
            if (d.value.type !== a)
              throw b.error(
                c,
                `expected ${wQc[a]} resource type, got ${wQc[d.value.type]}`
              );
            return { ...d.value, type: a };
          };
        };
        zQc = function () {
          return new xQc({})
            .add((a, b) => ({
              FontRef: new a(
                "FontRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "font", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              MediaRef: new a(
                "MediaRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "media", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              VideoRef: new a("VideoRef", { id: b.string }, (c) => ({
                type: "video",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              AudioRef: new a("AudioRef", { id: b.string }, (c) => ({
                type: "audio",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              EmbedRef: new a("EmbedRef", { id: b.string }, (c) => ({
                type: "embed",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              SceneRef: new a("SceneRef", { id: b.string }, (c) => ({
                type: "scene",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              BlueprintRef: new a(
                "BlueprintRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "blueprint", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              Fill: new a("Fill", { color: b.string }, (c) =>
                __c.wQ.create({ ...v4, color: c.color })
              ),
            }))
            .add((a, b) => ({
              Stroke: new a(
                "Stroke",
                {
                  color: b.string,
                  weight: b.number,
                  Qc: b.array(b.number),
                  Ye: b.boolean,
                },
                (c) =>
                  __c.yQ.create({
                    ...fOc,
                    color: c.color,
                    weight: c.weight,
                    Qc: c.Qc.items,
                    Ye: c.Ye,
                  })
              ),
            }))
            .add((a, b) => ({
              Richtext2: new a(
                "Richtext2",
                {
                  YDb: b.array(
                    b.M({ xb: b.string, attrs: b.map(b.string, b.string) })
                  ),
                },
                (c) => {
                  c = c.YDb;
                  const d = Wg.wb();
                  c.items.forEach((e) => {
                    const f = e.fields.xb;
                    d.attrs(__c.Vf(e.fields.attrs.items));
                    d.xb(f);
                  });
                  return __c.ji.create({ ...aH, stream: d.build() });
                }
              ),
            }))
            .add((a, b) => ({
              Path: new a(
                "Path",
                {
                  d: b.string,
                  fill: b.instance("Fill"),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = c.fill;
                  c = __c.Ozb.create({ ...gOc, d: c.d, fill: v4 });
                  Object.defineProperties(c, {
                    fill: { value: e.instance },
                    stroke: { value: yQc(d) },
                  });
                  return c;
                }
              ),
            }))
            .add((a, b) => ({
              RectElement: new a(
                "RectElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  fill: b.instance("Fill"),
                  V: b.union(b.array(b.number), b.undefined),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = __c.yE.create({
                      ...w4,
                      id: zE.generate(),
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation: c.rotation ?? w4.rotation,
                      fill: v4,
                      V: c.V?.items ?? w4.V,
                    });
                  Object.defineProperties(e, {
                    fill: { value: c.fill.instance },
                    stroke: { value: yQc(d) },
                  });
                  return e;
                }
              ),
            }))
            .add((a, b) => ({
              ShapeElement: new a(
                "ShapeElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  wa: b.union(b.number, b.undefined),
                  viewBox: b.M({
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                  }),
                  gb: b.array(b.instance("Path")),
                },
                (c) => {
                  const d = __c.OI.create({
                    ...x4,
                    id: zE.generate(),
                    top: c.top,
                    left: c.left,
                    width: c.width,
                    height: c.height,
                    rotation: c.rotation ?? x4.rotation,
                    wa: c.wa ?? x4.wa,
                    gb: [],
                    viewBox: c.viewBox.fields,
                  });
                  Object.defineProperties(d, {
                    gb: {
                      value: VNc(c.gb.items.map((e) => r4(() => e.instance))),
                    },
                  });
                  return d;
                }
              ),
            }));
        };
        yQc = function (a) {
          return (
            a && {
              ref: a.instance,
              set() {
                throw Error(
                  "Replacing of stroke on a model unit is not yet supported"
                );
              },
            }
          );
        };
        dPc = function (a, b, c, d) {
          AQc(a.rPa, b, c);
          v(!a.k0a.has(b));
          c = BQc(b, d, c);
          a.k0a.set(b, c);
          return c;
        };
        BQc = function (a, b, c) {
          return ld(b, (d) => (...e) => {
            const {
              data: f,
              S: { width: g, height: h },
            } = d(...e);
            e = c.C.encode(f.C);
            const k =
              c.document.IU.size > 0 ? c.document.encode(f.document) : void 0;
            return {
              Ac: { ...__c.iKb, app: { id: a, version: 1 } },
              E8b: k,
              Zc: e,
              ag: { width: g, height: h },
            };
          });
        };
        JOc = function (a, b, c) {
          v(!a.iua.has(b));
          c = { document: a.c0a(b, c.document), C: a.c0a(b, c.C) };
          a.iua.set(b, c);
          return c;
        };
        AQc = function (a, b, c) {
          a = y(a.iua.get(b));
          v(a.C === c.C);
        };
        DQc = function (a, b) {
          b = CQc(b);
          return a.origin !== b.NTa
            ? {
                valid: !1,
                error: {
                  message: "Message origin does not match iframe src origin",
                  extra: new Map([
                    ["msg.origin", a.origin],
                    ["iframe.origin", b.NTa],
                  ]),
                },
              }
            : { valid: !0, qga: b.qga };
        };
        CQc = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return EQc;
          a = new URL(a).origin;
          return a === "null" ? EQc : { NTa: a, qga: a };
        };
        FQc = function (a, b) {
          if (!a) return Ba("missing 'data' field in MessageEvent");
          const c = a.sandboxCommsSource ?? a.source;
          return c
            ? c !== "iframe"
              ? Ba("invalid source")
              : a.clientId !== b
              ? Ba("unknown client id")
              : (0, __c.za)()
            : Ba("'source' is missing in MessageEvent data object");
        };
        F5 = function (a, b) {
          x(!a.disposed, "IFrameHostConnector disposed");
          x(!a.o$.has(b), "Callback already registered");
          a.o$.add(b);
        };
        HQc = function (a) {
          a.cf = setTimeout(
            o5.wrap(() => {
              a.Ffb(new GQc());
            }),
            500
          );
        };
        JQc = async function (a, b) {
          const c = G5()();
          try {
            const f = b.requestId,
              g = b.path,
              h = b.payload,
              k = a.b6.get(g);
            if (k) {
              a.rea.L9.send({ type: "ack", requestId: f });
              var d = setInterval(
                o5.wrap(() => a.rea.L9.send({ type: "ack", requestId: f })),
                9e3
              );
              try {
                const l = c.r(await c.s(k(h)));
                clearInterval(d);
                a.rea.L9.send({ type: "response", requestId: f, payload: l });
              } catch (l) {
                c.r();
                clearInterval(d);
                b = "internal_error";
                d =
                  "Something went wrong on our end, if this issue persists please contact us.";
                if (l instanceof H5) {
                  var e = l;
                  l.code === "internal_error"
                    ? a.J.Xb(l, {
                        gf: "Internal error in comms handler",
                        tags: new Map([
                          ["type", "request"],
                          ["path", g],
                        ]),
                      })
                    : ((b = l.code), (d = l.XRb));
                } else
                  a.WSb
                    ? a.J.Xb(l, {
                        gf: "Unexpected error type thrown from comms handler",
                        tags: new Map([
                          ["type", "request"],
                          ["path", g],
                        ]),
                      })
                    : a.yzb.error(l);
                const m = IQc(a.rea, f, b, d);
                m.ok ||
                  a.J.aV(m.error, {
                    gf: "unable to send error response",
                    tags: new Map([
                      ["type", "request"],
                      ["path", g],
                    ]),
                  });
              }
              if (e != null)
                for (const l of a.eCb)
                  try {
                    l(e);
                  } catch (m) {
                    a.J.nJ(m, { gf: "Error executing errorObserver" });
                  }
            } else {
              const l = IQc(
                a.rea,
                f,
                "internal_error",
                `No request handler configured for path: "${g}".`
              );
              l.ok ||
                a.J.aV(l.error, {
                  gf: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", g],
                  ]),
                });
            }
          } finally {
            c.s();
          }
        };
        IQc = function (a, b, c, d) {
          return a.L9.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        I5 = function (a, b, c, d, e) {
          a.handle(b, async (f) => {
            const g = G5()();
            try {
              if (f === void 0)
                throw new H5({
                  code: "internal_error",
                  message: `${b}: request cannot be undefined.`,
                });
              var h = c.fa(f);
              const k = g.r(await g.s(d(h)));
              if (e) return e.serialize(k);
            } finally {
              g.s();
            }
          });
        };
        MQc = function (a, b) {
          I5(a, "INIT_DATA", KQc, (c) => b.PHa(c), __c.J5);
          I5(a, "DATA_RENDER_READY", LQc, (c) => b.UHa(c), __c.K5);
        };
        TQc = function (a, b) {
          I5(a, "LAYOUT_SHIFT_EVENT", NQc, (c) => b.R5a(c), __c.OQc);
          I5(a, "SELECTION_CHANGE", PQc, (c) => b.pca(c), __c.L5);
          I5(a, "HOVER_ELEMENT_CHANGED", QQc, (c) => b.N5a(c), __c.M5);
          I5(a, "TEXT_CONTENT_CHANGED", RQc, (c) => b.U5a(c), __c.SQc);
        };
        ZQc = function (a, b) {
          I5(a, "INIT_ELEMENT", UQc, (c) => b.Noa(c), __c.VQc);
          I5(a, "SET_CONFIG", WQc, (c) => b.S5a(c), __c.XQc);
          I5(a, "RESIZE_EVENT", YQc, (c) => b.oca(c));
        };
        aRc = function (a, b) {
          I5(a, "RESIZE_EVENT", $Qc, (c) => b.oca(c));
        };
        dRc = function (a, b) {
          I5(a, "INIT_TELEMETRY", bRc, (c) => b.QHa(c), __c.N5);
          I5(a, "ERROR_OCCURRED", cRc, (c) => b.NHa(c), __c.O5);
        };
        eRc = function (a, b) {
          const c = a.d1.get(b);
          if (c) {
            for (const f of c.keys()) {
              var d = c.get(f);
              if (d?.wW) {
                var e = a.M3;
                d = d.wW;
                x(!e.disposed, "IFrameHostConnector disposed");
                e.o$.delete(d);
              }
            }
            a.d1.delete(b);
          }
        };
        P5 = function (a, b, c) {
          const d = ({ Twb: e }) => {
            var f = e.clientId;
            e = e.FRb;
            if (f !== c.clientId || e !== b)
              return Promise.resolve({
                type: "connection_request_not_matched",
              });
            e = y(a.d1.get(b));
            f = y(e.get(f));
            if (f.connected)
              return Promise.resolve({ type: "already_connected" });
            const { port1: g, port2: h } = new MessageChannel();
            e = new fRc(g, a.J);
            c.n$(e);
            f.connected = !0;
            return Promise.resolve({
              type: "connection_request_matched",
              port: h,
            });
          };
          y(a.d1.get(b)).set(c.clientId, { wW: d, connected: !1 });
          return d;
        };
        iRc = function (a, b, { L6: c, Qua: d, Pua: e, Rua: f, M6: g }) {
          a.d1.has(b) ||
            (a.d1.set(b, new Map()),
            F5(
              a.M3,
              P5(a, b, {
                clientId: "canva-code-data-sdk",
                n$: (h) => {
                  const { HDa: k } = c();
                  MQc(h, k);
                },
              })
            ),
            d &&
              F5(
                a.M3,
                P5(a, b, {
                  clientId: "canva-code-element-sdk",
                  n$: (h) => {
                    const { t2a: k } = d(new gRc(h));
                    ZQc(h, k);
                  },
                })
              ),
            e &&
              F5(
                a.M3,
                P5(a, b, {
                  clientId: "canva-code-editing-sdk",
                  n$: (h) => {
                    const { r2a: k } = e(new hRc(h));
                    TQc(h, k);
                  },
                })
              ),
            f &&
              F5(
                a.M3,
                P5(a, b, {
                  clientId: "canva-code-resizing-sdk",
                  n$: (h) => {
                    const { Yfb: k } = f();
                    aRc(h, k);
                  },
                })
              ),
            g &&
              F5(
                a.M3,
                P5(a, b, {
                  clientId: "canva-code-telemetry-sdk",
                  n$: (h) => {
                    const { eSa: k } = g();
                    dRc(h, k);
                  },
                })
              ));
        };
        jRc = function (a) {
          a = new DOMParser().parseFromString(a, "text/html");
          a = y(a.querySelector("iframe"));
          return {
            id: a.id,
            src: y(a.getAttribute("src")),
            sandbox: a.sandbox.toString(),
            allow: a.allow,
            allowFullscreen: a.allowFullscreen,
          };
        };
        lRc = function ({ Lq: a, CU: b, J: c, Ec: d, so: e, jq: f, cb: g }) {
          const h = (k, l) =>
            c.error(k, { gf: "codelet: ", extra: new Map(Object.entries(l)) });
          return (k) =>
            Q5(kRc, { ...k, Lq: a, CU: b, $A: h, Ec: d, so: e, jq: f, cb: g });
        };
        nRc = function (a) {
          if (a === "transparent") return { ...BE, color: void 0 };
          var b = R5(a);
          if (b) return { ...BE, color: b.color };
          if ((b = mRc(a))) return { ...BE, Ra: b };
          throw Error(`Unrecognized color: ${a}`);
        };
        R5 = function (a) {
          if (a in oRc) return { color: oRc[a], wa: 0 };
          var [, b] = a.match(/^#?([a-fA-F0-9]{3,8})$/) ?? ["", ""];
          switch (b.length) {
            case 3:
              return {
                color: `#${b.charAt(0).repeat(2)}${b.charAt(1).repeat(2)}${b
                  .charAt(2)
                  .repeat(2)}`.toLowerCase(),
                wa: 0,
              };
            case 6:
              return { color: `#${b}`.toLowerCase(), wa: 0 };
            case 8:
              return { color: `#${b.substring(0, 6)}`.toLowerCase(), wa: 0 };
          }
          const [, c, d, e, f] = a.match(
            /^rgba?\(\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*(?:,\s*([\d.]+)?%?\s*)?\)$/
          ) ?? ["", "", "", ""];
          a = parseInt(c, 10);
          b = parseInt(d, 10);
          const g = parseInt(e, 10),
            h = parseFloat(f) || 1;
          if (a >= 0 && a <= 255 && b >= 0 && b <= 255 && g >= 0 && g <= 255)
            return {
              color: `#${a.toString(16).padStart(2, "0")}${b
                .toString(16)
                .padStart(2, "0")}${g.toString(16).padStart(2, "0")}`,
              wa: 1 - h,
            };
        };
        pRc = function (a) {
          switch (a) {
            case "to right":
              return 0;
            case "to bottom right":
            case "to right bottom":
              return 45;
            case "to bottom":
              return 90;
            case "to bottom left":
            case "to left bottom":
              return 135;
            case "to left":
              return 180;
            case "to top left":
            case "to left top":
              return 225;
            case "to top":
              return 270;
            case "to top right":
            case "to right top":
              return 315;
          }
          a = a.match(/^([-+]?[\d.]+)(deg|rad|grad|turn)?$/);
          if (!a) return 0;
          const [, b, c = "deg"] = a;
          a = parseFloat(b);
          if (isNaN(a)) return 0;
          switch (c) {
            case "deg":
              return a;
            case "rad":
              return (a * 180) / Math.PI;
            case "grad":
              return a * 0.9;
            case "turn":
              return a * 360;
            default:
              return 0;
          }
        };
        qRc = function (a) {
          const b = [];
          let c = "",
            d = 0;
          for (const e of a)
            if (e === "(") d++, (c += e);
            else if (e === ")") {
              d--;
              if (d < 0)
                throw Error(
                  "Malformed gradient string: unmatched closing parenthesis"
                );
              c += e;
            } else e === "," && d === 0 ? (b.push(c), (c = "")) : (c += e);
          c && b.push(c);
          return b;
        };
        S5 = function (a) {
          return a.replace(/\s+[\d.]+%?\s*$/, "").trim();
        };
        mRc = function (a) {
          var [, b] = a.match(/^linear-gradient\((.*)\)$/) ?? ["", ""];
          if (b) {
            b = qRc(b);
            if (b.length === 0) return;
            const d = b.length > 0 && !R5(S5(b[0]));
            a = d ? pRc(b[0]) : 0;
            b = (d ? b.slice(1) : b)
              .map((f) => R5(S5(f.trim())))
              .filter((f) => f !== void 0);
            const e = b.length;
            return e === 0
              ? void 0
              : {
                  type: "linear",
                  Te: b.map(({ color: f, wa: g }, h) => ({
                    color: f,
                    wa: g,
                    position: e > 1 ? h / (e - 1) : 0,
                  })),
                  rotation: a,
                };
          }
          [, a] = a.match(/^radial-gradient\((.*)\)$/) ?? ["", ""];
          if (a && ((a = qRc(a)), a.length !== 0)) {
            a = (a.length > 0 && !R5(S5(a[0])) ? a.slice(1) : a)
              .map((d) => R5(S5(d.trim())))
              .filter((d) => d !== void 0);
            var c = a.length;
            return c === 0
              ? void 0
              : {
                  type: "radial",
                  Te: a.map(({ color: d, wa: e }, f) => ({
                    color: d,
                    wa: e,
                    position: c > 1 ? f / (c - 1) : 0,
                  })),
                  center: { top: 0.5, left: 0.5 },
                };
          }
        };
        rRc = function (a) {
          var b = new URL(a);
          if (b.protocol === "canva:") {
            const c = b.hostname;
            b = parseInt(b.pathname.substring(1), 10);
            if (c.startsWith("M") && !isNaN(b))
              return { type: 1, media: { id: c, version: b } };
          }
          return { type: 2, media: a };
        };
        __c.tRc = function (a) {
          return new sRc().map(a, {
            textContent: void 0,
            background: void 0,
            color: void 0,
            fontFamily: void 0,
            fontWeight: void 0,
            fontStyle: void 0,
            fontSize: void 0,
            Or: void 0,
            Ja: void 0,
          });
        };
        wRc = async function (a, b, c) {
          const d = G5()();
          try {
            const e = [],
              f = new (class extends uRc {
                mUa(g) {
                  switch (g.type) {
                    case "font":
                      e.push(b.K2([g]));
                      break;
                    case "media":
                      e.push(c.HL(g));
                      break;
                    default:
                      throw new z(g);
                  }
                }
              })();
            vRc(() => f.yN(a));
            d.r(await d.s(Promise.all(e)));
          } finally {
            d.s();
          }
        };
        __c.CRc = async function (a, b, c) {
          const d = G5()();
          try {
            const e = __c.tRc(a);
            d.r(await d.s(wRc(e, b.Ba, b.oc)));
            return new (class extends __c.xRc {
              $S(f, g) {
                return { ...g, textContent: f };
              }
              zN(f, g) {
                if (f == null) return g;
                if (f.image != null) {
                  f = f.image;
                  var h = b.oc;
                  x(f.media.type === "RESOLVED", "unexpected media");
                  f = h.j3(f.media);
                  f = yRc(f, 7);
                  f =
                    f != null
                      ? {
                          url: `url(${zRc(f.url)})`,
                          width: f.width,
                          height: f.height,
                        }
                      : void 0;
                  return f != null
                    ? {
                        ...g,
                        background: f.url,
                        Wtb: { width: f.width, height: f.height },
                      }
                    : g;
                }
                return { ...g, background: ARc(f) };
              }
              AN(f, g) {
                return { ...g, color: f && ARc(f) };
              }
              X7(
                { fontFamily: f, fontWeight: g, fontStyle: h, fontSize: k },
                l
              ) {
                if (f == null && g == null && h == null && k == null) return l;
                var m = __c.Hp(g ?? "normal", (h ?? "normal") === "italic");
                g = __c.Fp(__c.Gp(m))?.toString() ?? "400";
                h = __c.gq.get(m) === "italic" ? "italic" : "normal";
                switch (f?.type) {
                  case void 0:
                  case 2:
                    return {
                      ...l,
                      font: {
                        id: void 0,
                        src: void 0,
                        p0a: void 0,
                        weight: g,
                        style: h,
                        size: k,
                      },
                    };
                  case 1:
                    var n = b.Ba.gB(f.fontFamily);
                    n = (m = n && __c.Woa(n.fonts, m)) && zRc(m.files[0].url);
                    return {
                      ...l,
                      font: {
                        id: __c.yp(f.fontFamily),
                        src: n,
                        size: k ?? void 0,
                        p0a: b.Ba.AY(f.fontFamily),
                        ...(m != null
                          ? {
                              weight:
                                __c.Fp(__c.Gp(m.style))?.toString() ?? "400",
                              style:
                                __c.gq.get(m.style) === "italic"
                                  ? "italic"
                                  : "normal",
                            }
                          : { weight: g, style: h }),
                      },
                    };
                  default:
                    throw new z(f);
                }
              }
              CN(f, g) {
                switch (f?.type) {
                  case void 0:
                    return g;
                  case 2:
                    return { ...g, Or: f.media };
                  case 1:
                    return (
                      (f = b.oc.j3(f.media)),
                      (f = yRc(f, c)),
                      { ...g, Or: f != null ? zRc(f.url) : "" }
                    );
                  default:
                    throw new z(f);
                }
              }
              XS(f, g) {
                return { ...g, Ja: f };
              }
            })().map(e, new BRc({}));
          } finally {
            d.s();
          }
        };
        yRc = function (a, b = 6) {
          const { lower: c, Voa: d } = a.reduce(
            (e, f) => {
              const g = Math.max(f.width, f.height) - DRc[b];
              return {
                lower: g < 0 ? [...e.lower, { ...f, delta: g }] : e.lower,
                Voa: g >= 0 ? [...e.Voa, { ...f, delta: g }] : e.Voa,
              };
            },
            { lower: [], Voa: [] }
          );
          return (
            [...d].sort((e, f) => e.delta - f.delta)[0] ??
            [...c].sort((e, f) => f.delta - e.delta)[0]
          );
        };
        zRc = function (a) {
          return new URL(a, self.location.href).href;
        };
        ARc = function (a) {
          x(a.image == null, "image fill not supported");
          if (a.color) return a.color;
          if (a.Ra) {
            a: switch (((a = a.Ra), a.type)) {
              case "linear":
                a = `linear-gradient(${a.rotation}deg, ${a.Te.map(ERc).join(
                  ", "
                )})`;
                break a;
              case "radial":
                a = `radial-gradient(${a.Te.map(ERc).join(", ")})`;
                break a;
              default:
                throw new z(a);
            }
            return a;
          }
          if (!a.color && !a.Ra) return "transparent";
        };
        ERc = function (a) {
          return __c.Ls(__c.Fs(__c.ys(a.color), 1 - a.wa));
        };
        JRc = function ({ Lq: a, MNa: b, CU: c, J: d, RK: e, RL: f }) {
          const g = () => ({
              t2a: {
                Noa: () => Promise.resolve(new __c.VQc({})),
                S5a: () => new FRc(),
                oca: () => {},
              },
            }),
            h = () => ({
              HDa: {
                PHa: () => new __c.J5({ $i: void 0, nh: void 0, Vpa: !b }),
                UHa: () => new __c.K5(),
              },
            }),
            k = () => ({ Yfb: { oca: () => {} } }),
            l = () => ({
              eSa: { QHa: () => new __c.N5({}), NHa: () => new __c.O5() },
            });
          f = __c.gta(f);
          e = __c.sqa({ RK: e });
          const m = new GRc(f),
            n = new HRc(e);
          return (p) =>
            Q5(IRc, {
              ...p,
              Lq: a,
              CU: c,
              Poa: { data: h, element: g, zY: k, telemetry: l },
              oc: m,
              Ba: n,
              J: d,
            });
        };
        MRc = function (a) {
          function b(d, e) {
            e = JOc(c, d, e());
            return { id: d, schema: e };
          }
          const c = a.bT;
          return {
            Dy: __webpack_require__
              .me(285983)
              .then(() => __c.KRc)
              .then(o5.wrap((d) => b("w:JR4G8hDDg", d.wf))),
            V0: __webpack_require__
              .me(403505)
              .then(() => __c.LRc)
              .then(o5.wrap((d) => b("w:KS5H9iEEh", d.wf))),
          };
        };
        NRc = function (a) {
          function b({ id: e, schema: f }, g, h) {
            return dPc(d, e, f, g(h));
          }
          const c = a.g_,
            d = a.aT;
          return {
            Dy: Promise.all([
              c.Dy,
              __webpack_require__.me(285983).then(() => __c.KRc),
            ]).then(o5.wrap(([e, f]) => b(e, f.vf, void 0))),
            V0: Promise.all([
              c.V0,
              __webpack_require__.me(403505).then(() => __c.LRc),
            ]).then(o5.wrap(([e, f]) => b(e, f.vf, void 0))),
          };
        };
        eSc = function (a) {
          const b = a.g_,
            c = a.Kia,
            d = a.a8,
            e = a.Rg,
            f = a.LA;
          a = a.hi;
          class g extends ORc {
            async load() {
              const m = G5()();
              try {
                const [n, p, q] = m.r(
                    await m.s(
                      Promise.all([
                        this.sm,
                        this.gm(),
                        Promise.resolve(this.hi),
                      ])
                    )
                  ),
                  r = n.id,
                  t = n.schema,
                  u = p.yn({
                    LA: {
                      ...f,
                      ub: e.hB(`widgets.rendering.clients.${this.Zk}`),
                    },
                    hi: q,
                  }),
                  w = PRc(c, r, t, u);
                d?.Vkc(r);
                return { id: r, schema: t, Xfa: w, Zk: this.Zk };
              } finally {
                m.s();
              }
            }
            constructor(m) {
              super(m.id, m.gm);
              this.sm = m.sm;
              this.hi = m.hi;
              this.Zk = m.Zk ?? "default";
            }
          }
          const h = {
            ru: new g({
              id: "w:wnJF5T87v",
              sm: Promise.resolve(b.ru),
              gm: () => __webpack_require__.me(494294).then(() => __c.GNc),
              hi: { pr: a.pr, xG: a.xG },
              Zk: "blueprint",
            }),
            c2: new g({
              id: "w:xB9fK2LmQ",
              sm: Promise.resolve(b.c2),
              gm: () => __webpack_require__.me(14646).then(() => __c.INc),
              hi: { pr: a.pr },
              Zk: "documentBlueprint",
            }),
            H1: b.pi
              ? new g({
                  id: "w:cm9wgGptP",
                  sm: b.pi.then(o5.wrap((m) => m.H1)),
                  gm: () => __webpack_require__.me(597172).then(() => __c.QRc),
                  hi: void 0,
                  Zk: "demo1",
                })
              : null,
            M1: b.pi
              ? new g({
                  id: "w:yLMS4dWnl",
                  sm: b.pi.then(o5.wrap((m) => m.M1)),
                  gm: () => __webpack_require__.me(974581).then(() => __c.RRc),
                  hi: void 0,
                  Zk: "demo2",
                })
              : null,
            N1: b.pi
              ? new g({
                  id: "w:2flp30CGQ",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.N1))),
                  gm: () => __webpack_require__.me(780898).then(() => __c.SRc),
                  hi: void 0,
                  Zk: "demo3",
                })
              : null,
            O1: b.pi
              ? new g({
                  id: "w:1Nv6K6Dtv",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.O1))),
                  gm: () => __webpack_require__.me(334167).then(() => __c.TRc),
                  hi: void 0,
                  Zk: "demo4",
                })
              : null,
            P1: b.pi
              ? new g({
                  id: "w:5Nv6K6Dtv",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.P1))),
                  gm: () => __webpack_require__.me(269696).then(() => __c.URc),
                  hi: void 0,
                  Zk: "demo5",
                })
              : null,
            Q1: b.pi
              ? new g({
                  id: "w:6Nv6K6Dtv",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.Q1))),
                  gm: () => __webpack_require__.me(853715).then(() => __c.VRc),
                  hi: void 0,
                  Zk: "demo6",
                })
              : null,
            R1: b.pi
              ? new g({
                  id: "w:7Nv6K6Dtv",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.R1))),
                  gm: () => __webpack_require__.me(198958).then(() => __c.WRc),
                  hi: void 0,
                  Zk: "demo7",
                })
              : null,
            S1: b.pi
              ? new g({
                  id: "w:8Nv6K6Dtv",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.S1))),
                  gm: () => __webpack_require__.me(697867).then(() => __c.XRc),
                  hi: void 0,
                  Zk: "demo8",
                })
              : null,
            T1: b.pi
              ? new g({
                  id: "w:9Nv6K6Dtv",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.T1))),
                  gm: () => __webpack_require__.me(558396).then(() => __c.YRc),
                  hi: void 0,
                  Zk: "demo9",
                })
              : null,
            I1: b.pi
              ? new g({
                  id: "w:sSrc7m4Q3",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.I1))),
                  gm: () => __webpack_require__.me(309378).then(() => __c.ZRc),
                  hi: void 0,
                  Zk: "demo10",
                })
              : null,
            J1: b.pi
              ? new g({
                  id: "w:ANv6K6Dtv",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.J1))),
                  gm: () => __webpack_require__.me(355285).then(() => __c.$Rc),
                  hi: void 0,
                  Zk: "demo11",
                })
              : null,
            K1: b.pi
              ? new g({
                  id: "w:7kN2mP9qT",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.K1))),
                  gm: () => __webpack_require__.me(972068).then(() => __c.aSc),
                  hi: void 0,
                  Zk: "demo12",
                })
              : null,
            L1: b.pi
              ? new g({
                  id: "w:13v6K6Dtv",
                  sm: Promise.resolve(b.pi.then(o5.wrap((m) => m.L1))),
                  gm: () => __webpack_require__.me(108353).then(() => __c.bSc),
                  hi: void 0,
                  Zk: "demo13",
                })
              : null,
            Dy: new g({
              id: "w:JR4G8hDDg",
              sm: Promise.resolve(b.Dy),
              gm: () => __webpack_require__.me(285983).then(() => __c.KRc),
              hi: { OC: a.OC, Ba: a.Ba, $q: a.$q },
              Zk: "codelet",
            }),
            V0: new g({
              id: "w:KS5H9iEEh",
              sm: Promise.resolve(b.V0),
              gm: () => __webpack_require__.me(403505).then(() => __c.LRc),
              hi: { OC: a.OC, Ba: a.Ba, oc: a.oc, $q: a.$q },
              Zk: "codelet2",
            }),
            form: new g({
              id: "widget:form",
              sm: b.form,
              gm: () => __webpack_require__.me(882779).then(() => __c.cSc),
              hi: { S3: a.S3, gk: a.gk },
              Zk: "form",
            }),
            NQ: b.NQ
              ? new g({
                  id: "w:K7mQ9xR3p",
                  sm: b.NQ,
                  gm: () => __webpack_require__.me(667609).then(() => __c.dSc),
                  hi: void 0,
                  Zk: "navigationMenu",
                })
              : null,
            scene: new g({
              id: "w:2pbXJMtm1",
              sm: b.scene,
              gm: () => __webpack_require__.me(510547).then(() => __c.T5),
              hi: { Zm: a.Zm },
              Zk: "scene",
            }),
            button: new g({
              id: "w:PQccHDsCJ",
              sm: b.button,
              gm: () => __webpack_require__.me(256115).then(() => __c.QNc),
              hi: void 0,
              Zk: "button",
            }),
          };
          a = new Set([
            "widget:form",
            "w:JR4G8hDDg",
            "w:wnJF5T87v",
            "w:2pbXJMtm1",
            "w:PQccHDsCJ",
          ]);
          const k = [];
          for (var l of Object.values(h))
            l && a.has(l.id) && k.push(l.dm(Promise.resolve()));
          l = Promise.allSettled(k).then(o5.wrap(() => {}));
          return {
            xY: {
              ru: h.ru.dm(l),
              c2: h.c2.dm(l),
              pi: b.pi && {
                H1: h.H1.dm(l),
                M1: h.M1.dm(l),
                N1: h.N1.dm(l),
                O1: h.O1.dm(l),
                P1: h.P1.dm(l),
                Q1: h.Q1.dm(l),
                R1: h.R1.dm(l),
                S1: h.S1.dm(l),
                T1: h.T1.dm(l),
                I1: h.I1.dm(l),
                J1: h.J1.dm(l),
                K1: h.K1.dm(l),
                L1: h.L1.dm(l),
              },
              Dy: h.Dy.dm(l),
              V0: h.V0.dm(l),
              form: h.form.dm(l),
              NQ: h.NQ?.dm(l) ?? void 0,
              scene: h.scene.dm(l),
              button: h.button.dm(l),
            },
            r4a: () => {
              const m = [];
              for (const n of Object.values(h))
                n && m.push(n.dm(Promise.resolve()));
              return Promise.allSettled(m);
            },
          };
        };
        U5 = function () {
          throw Error("ref not found");
        };
        fSc = function (a, b) {
          const c = (d) => a.Xb(d);
          return function (d) {
            return Q5(__c.ju, {
              onError: c,
              fallback: Q5(__c.ht, {
                background: "criticalLow",
                width: "full",
                height: "full",
                padding: "0.25u",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                role: "alert",
                children: Q5(__c.Vt, {
                  size: "xsmall",
                  alignment: "center",
                  children: K("Q6XSow"),
                }),
              }),
              children: Q5(b, { ...d }),
            });
          };
        };
        PRc = function (a, b, c, d) {
          AQc(a.rPa, b, c);
          v(!a.xY.has(b));
          gSc.has(b) || (__c.LFb.set(b, hSc), gSc.add(b));
          const e = iSc(d.NG);
          var f = (h) => e.uc(h.C);
          const g = jSc(a, c, f, d);
          f = kSc(a, c, f, d);
          d = {
            C: g,
            email: f,
            exports: d.exports,
            yMb: lSc(a, c, d.metadata),
            A7b: (h) => V5(a, h, c),
            DKb: e,
            rV: new Set(d.rV),
          };
          a.xY.set(b, d);
          return d;
        };
        iSc = function (a) {
          return a === __c.eW.NG ? mSc : new nSc(a);
        };
        jSc = function (a, b, c, d) {
          const e = d.C;
          d = d.Q4a;
          switch (e.type) {
            case 0:
              a = oSc(a, e, b, c, d);
              break;
            case 1:
              a = pSc(a, e, b, c, d);
              break;
            default:
              throw new z(e);
          }
          return a;
        };
        kSc = function (a, b, c, d) {
          d = d.email;
          if (d != null) {
            var e = d.type;
            switch (e) {
              case 2:
                return qSc(a, d, b, c);
              default:
                throw new z(e);
            }
          }
        };
        lSc = function (a, b, c) {
          return (d) => {
            if (c)
              try {
                const e = b.C.decode(d.Zc);
                return {
                  type: c.type,
                  tZ: typeof c.tZ === "function" ? c.tZ(e) : c.tZ,
                  name: typeof c.name === "function" ? c.name(e) : c.name,
                };
              } catch (e) {
                a.J.Xb(e);
              }
          };
        };
        V5 = function (a, b, c) {
          var d = a.h3a.get(b);
          if (d != null) return d;
          d = c.document.IU.size > 0;
          let e;
          try {
            c.C.decode(__c.oU.snapshot(b.Zc)),
              d && c.document.decode(__c.oU.snapshot(rSc(a, b))),
              (e = !0);
          } catch (f) {
            a.J.Xb(f), (e = !1);
          }
          a.h3a.set(b, e);
          return e;
        };
        oSc = function (a, b, c, d, e) {
          const f = b.Iy,
            { Yza: g, P$: h, schema: k, NOa: l } = sSc(a, c);
          return typeof f === "object"
            ? ((b = a.HS.types),
              (b = b.Z0(
                b.union(b.instance("RectElement"), b.instance("ShapeElement"))
              )),
              tSc(
                a,
                g,
                k,
                b,
                f,
                (m) => new uSc(() => m().map((n) => n.instance)),
                l
              ))
            : {
                type: 0,
                Iy: (m, n, p) => {
                  if (!V5(a, m.C, c))
                    throw Error(
                      "Widget app data does not satisfy schema validation."
                    );
                  n = h(m, n, p);
                  m = vSc(k, d, g, m);
                  return f(m, n);
                },
                oea: e ? wSc(k, d, g, h, e) : W5(l),
                HQ: X5(l),
                lW: Y5(l),
                uY: Z5(l),
              };
        };
        pSc = function (a, b, c, d, e) {
          const f = b.Component,
            { Yza: g, P$: h, schema: k, NOa: l } = sSc(a, c);
          return {
            type: 1,
            oea: e ? wSc(k, d, g, h, e) : W5(l),
            HQ: X5(l),
            lW: Y5(l),
            uY: Z5(l),
            Component: fSc(
              a.J,
              $5(({ model: m, Ec: n, FV: p, bS: q, Ur: r, zp: t }) => {
                a6(() => {
                  if (!V5(a, m.C, c))
                    throw Error(
                      "Widget app data does not satisfy schema validation."
                    );
                }, []);
                p = xSc(a.Jf, m, n, r, p, t);
                r = a6(() => {
                  const { document: u, C: w } = k.Zp(g(m)).data;
                  return { document: u, C: w, local: d(m) };
                }, [m]);
                n = h(m, n, t);
                return Q5(f, { data: r, Jf: p, La: n, bS: q });
              })
            ),
          };
        };
        qSc = function (a, b, c, d) {
          const e = b.Component,
            { Yza: f, P$: g, schema: h, NOa: k } = sSc(a, c);
          return {
            type: 2,
            oea: W5(k),
            HQ: X5(k),
            lW: Y5(k),
            uY: Z5(k),
            Component: fSc(
              a.J,
              $5(({ model: l, Ec: m, scale: n, zp: p }) => {
                a6(() => {
                  if (!V5(a, l.C, c))
                    throw Error(
                      "Widget app data does not satisfy schema validation."
                    );
                }, []);
                const q = ySc(a.SAb, n),
                  r = a6(() => vSc(h, d, f, l), [l]);
                m = g(l, m, p);
                return Q5(e, { data: r, Jf: q, scale: n, La: m });
              })
            ),
          };
        };
        sSc = function (a, b) {
          return {
            Yza: (c) => ({ document: rSc(a, c.C), C: c.C.Zc }),
            P$: (c, d, e) => a.sxa.P$(c, d, e),
            schema: hPc(b),
            NOa: new zSc(),
          };
        };
        tSc = function (a, b, c, d, e, f, g) {
          const h = a.aDa(a.HS, c, d).compile(e);
          return {
            type: 0,
            Iy: (k) => ({ Oa: f(h(b(k))) }),
            HQ: X5(g),
            oea: W5(g),
            lW: Y5(g),
            uY: Z5(g),
          };
        };
        rSc = function (a, b) {
          return (
            a.Da.io.first(
              (c) =>
                c.app.id === b.Ac.app.id && c.app.version === b.Ac.app.version
            )?.data ?? __c.oU.create(new Map())
          );
        };
        ASc = function (a, b) {
          return a.xY.get(b.Ac.app.id)?.yMb(b);
        };
        W5 = function (a) {
          return b6(function (b) {
            if ((b = a.get(b.C)) && b.size !== 0)
              return Array.from(b)
                .map((c) => c.Sba())
                .reduce(
                  (c, d) => ({
                    top: Math.min(c.top, d.top),
                    left: Math.min(c.left, d.left),
                    width: Math.max(c.width, d.width),
                    height: Math.max(c.height, d.height),
                  }),
                  {
                    top: Infinity,
                    left: Infinity,
                    width: -Infinity,
                    height: -Infinity,
                  }
                );
          });
        };
        X5 = function (a) {
          return b6((b, c) => {
            b = a.get(b);
            if (!b || b.size === 0) return c;
            for (const d of b) if (d.HQ) return d.HQ(c);
            return c;
          });
        };
        Y5 = function (a) {
          return b6((b) =>
            (b = a.get(b.C)) && b.size !== 0
              ? Array.from(b).flatMap((c) => c.lW())
              : []
          );
        };
        Z5 = function (a) {
          return (b, c) => {
            a.add(b.C, c);
            return () => a.remove(b.C, c);
          };
        };
        vSc = function (a, b, c, d) {
          a = a.Zp(c(d)).data;
          return b ? { ...a, local: b(d) } : { ...a, local: void 0 };
        };
        wSc = function (a, b, c, d, e) {
          return (f) => {
            var g = vSc(a, b, c, f),
              h = d(f, 10, !1);
            g = e(g, h.S);
            if (f.type === "controlled-element") {
              h = f.C.left;
              const k = f.C.top;
              f = __c.$n(f.C.width / f.C.I).then(o5.wrap(__c.Zn(h, k)));
              return __c.qo(g).transform(f).sb();
            }
            return g;
          };
        };
        ESc = function (a) {
          var b = a.b8;
          const c = a.tUa,
            d = a.m1b,
            e = a.N$,
            f = a.HS,
            g = a.J,
            h = a.Da,
            k = a.GPa,
            l = a.Bfb;
          a = new BSc(a.up, h);
          const m = new CSc(h, b, f, e, g, a, c, d);
          b = new DSc();
          k && RNc(k, (n) => ASc(m, n));
          l && l((n) => ASc(m, n));
          return { Kia: m, LC: m, sxa: a, Iob: b };
        };
        GSc = function (a, b) {
          if (!a) return "Arial, Helvetica, sans-serif";
          const c = __c.wp(a);
          a = b.find((d) => d.id === c.id && d.version === c.version);
          switch (a?.name) {
            case "Arimo":
            case "Arial":
              return "Arial, Helvetica, sans-serif";
            case "Helvetica":
            case "Helvetica Now":
              return "Helvetica, Arial, sans-serif";
            case "Times New Roman MT":
            case "Times New Roman":
              return '"Times New Roman", Times, serif';
            case "Tahoma":
              return "Tahoma, Geneva, sans-serif";
            case "Trebuchet MS":
              return '"Trebuchet MS", Helvetica, sans-serif';
            case "Lucida Console":
              return '"Lucida Console", Monaco, monospace';
            case "Comic Sans":
              return '"Comic Sans MS", "Comic Sans", "Chalkboard SE", Chalkboard, "Marker Felt", Arial, sans-serif';
            case "Courier New OS":
            case "Courier New":
              return '"Courier New", monospace';
            case "Georgia Pro":
            case "Georgia":
              return "Georgia, serif";
            case "Verdana Pro":
            case "Verdana":
              return "Verdana, Geneva, sans-serif";
            default:
              return a?.name
                ? `${FSc(a.name)}, ${"Arial, Helvetica, sans-serif"}`
                : "Arial, Helvetica, sans-serif";
          }
        };
        FSc = function (a) {
          a = a.replace(/["']/g, "");
          return /[\s,]/.test(a) ? `"${a}"` : a;
        };
        ISc = function () {
          ({ pj: a } = { pj: [] });
          var a;
          return ({ text: b }) => {
            const c = HSc(b, a);
            return Q5("span", {
              style: {
                ...c,
                display: "table-cell",
                width: "100%",
                height: "100%",
                verticalAlign: "middle",
                boxSizing: "border-box",
              },
              children: b.stream.da,
            });
          };
        };
        HSc = function (a, b) {
          var c = (q) =>
              [...a.stream.Ew(q)[q]].values().next().value ?? Sf.Dc[q],
            d = c("font-family");
          b = GSc(d, b);
          d = c("font-size");
          var e = c("color"),
            f = c("font-weight"),
            g = c("font-style"),
            h = c("decoration"),
            k = c("strikethrough"),
            l = c("direction"),
            m = c("text-align"),
            n = c("leading");
          c = c("tracking");
          const p = [];
          h === "underline" && p.push("underline");
          k === "strikethrough" && p.push("line-through");
          h = p.length > 0 ? p.join(" ") : "none";
          return {
            color: e,
            fontSize: `${d}px`,
            fontWeight: f,
            fontFamily: b,
            fontStyle: g === "italic" ? "italic" : "normal",
            textDecoration: h,
            direction: l,
            textAlign: JSc(l, m),
            lineHeight: `${KSc(n)}em`,
            letterSpacing: `${KSc(c)}em`,
          };
        };
        JSc = function (a, b) {
          const c = {
            start: "left",
            center: "center",
            end: "right",
            justify: "justify",
          };
          if (a !== "rtl") return c[b];
          switch (b) {
            case "start":
              return "end";
            case "end":
              return "start";
            default:
              return c[b];
          }
        };
        KSc = function (a) {
          if (!Number.isFinite(a)) throw Error("Invalid milliEms value");
          return a / 1e3;
        };
        LSc = function (a) {
          return c6(function (b) {
            const { model: c, Ec: d, A6: e, ...f } = b;
            return a.sya
              ? Q5(a.sya, { ...f, model: c, Ec: d, A6: e })
              : Q5(__c.bA, { ...f });
          });
        };
        OSc = function (a, b) {
          return c6(function (c) {
            const {
                FV: { yOa: d, ...e },
                model: f,
                Ec: g,
                A6: h,
                element: k,
              } = c,
              l = a.read(k),
              m =
                (c = f.type === "controlled-element" && l.id != null) &&
                g >= 20;
            MSc(() => {
              if (m) {
                const n = d(l);
                return d6(n);
              }
            }, [m, l, f.C, d]);
            return c
              ? NSc(b, {
                  ...e,
                  key: l.id,
                  model: f,
                  Ec: g,
                  A6: h,
                  ha: void 0,
                  element: f.Ih(l),
                })
              : null;
          });
        };
        e6 = function (a, b, c) {
          return c6(function (d) {
            const e = d.FV,
              f = d.model,
              g = d.Ec,
              h = d.A6,
              k = d.args,
              l = d.P,
              m = d.attributes;
            d = a6(
              () =>
                c(a.classes, k, {
                  ...(l && { P: l }),
                  ...(m && { attributes: m }),
                }),
              []
            );
            return Q5(b, { FV: e, model: f, Ec: g, A6: h, element: d });
          });
        };
        PSc = function ({ expr: a, uxa: b }) {
          b = LSc(b);
          b = OSc(a, b);
          return {
            $v: e6(a, b, (c, d, e) => c.G_.create(d, e)),
            Hs: e6(a, b, (c, d, e) => c.I_.create(d, e)),
            gy: e6(a, b, (c, d, e) => c.H_.create(d, e)),
            PN: e6(a, b, (c, d, e) => c.Zxa.create(d, e)),
            QN: e6(a, b, (c, d, e) => c.aja.create(d, e)),
            ey: e6(a, b, (c, d, e) => c.kya.create(d, e)),
          };
        };
        QSc = function (a) {
          a.yT && (a.yT(), (a.yT = null));
          const b = a.props.cAb;
          b.forEach((c) => {
            window.addEventListener(c, a.AWa);
          });
          a.yT = () => {
            b.forEach((c) => {
              window.removeEventListener(c, a.AWa);
            });
          };
        };
        USc = function (a) {
          const b = c6(function (c) {
            const [{ store: d, Na: e }] = f6(() => {
              const f = new RSc(),
                g = new SSc(f);
              return { store: f, Na: g };
            });
            return Q5(TSc, {
              dR: e.reset,
              children: Q5(__c.R2b, {
                bIb: e,
                cIb: d,
                p8a: a.so.contains(c.url),
                children: ({ bk: f }) => c.children({ bk: f }),
              }),
            });
          });
          return c6((c) =>
            c.Xub && a.cb?.status !== 2
              ? Q5(b, { ...c })
              : c.children({ bk: !1 })
          );
        };
        VSc = function (a) {
          return $5(function (b) {
            return Q5("div", {
              className: "gcYy_A PYuKbg",
              children: Q5(__c.gy, {
                aba: "both",
                children: ({ width: c, height: d }) =>
                  Q5(a.Dk, {
                    fill: b.fill,
                    Pb: c,
                    sc: d,
                    Qe: void 0,
                    animation: void 0,
                    GF: !1,
                    ha: void 0,
                    la: void 0,
                  }),
              }),
            });
          });
        };
        XSc = function (a) {
          const b = a.Ba,
            c = a.eW,
            d = (e) => {
              e = __c.wp(e);
              b.VD([e], { Rm: !0 });
              return b.AY(e);
            };
          return $5(function (e) {
            var f = e.IGa;
            const g = e.fontWeight,
              h = e.SAa,
              k = e.$c,
              l = e.stb,
              m = e.ariaInvalid,
              n = e.disabled,
              p = e.id,
              q = e.name,
              r = e.inputMode,
              t = e.onBlur,
              u = e.onFocus,
              w = e.onChange,
              A = e.padding,
              B = e.placeholder,
              C = e.leb,
              D = e.readOnly,
              H = e.outline,
              J = e.paddingInlineEnd,
              M = e.type,
              N = e.value,
              R = e.width;
            e = {
              boxSizing: e.boxSizing,
              color: e.jk,
              fontSize: e.fontSize,
              backgroundColor: e.backgroundColor,
              borderStyle: e.borderStyle,
              borderRadius: e.borderRadius,
              borderWidth: e.borderWidth,
              fontFamily: f && d(f),
              fontWeight: g && __c.Fp(g),
              padding: A,
              paddingInlineEnd: J,
              outline: H,
              width: R,
            };
            [f] = f6(() => c?.yFb());
            return Q5("div", {
              ref: f?.Vk,
              className: "BHOPhg PYuKbg",
              children: Q5("input", {
                "aria-describedby": k,
                "aria-errormessage": l,
                "aria-invalid": m,
                className: WSc(["_6Yde8g", C && "sR0SUA"]),
                disabled: n,
                id: p,
                name: q,
                inputMode: r,
                onBlur: t,
                onFocus: u,
                onChange: w,
                placeholder: B,
                readOnly: D,
                type: M,
                value: N,
                style: {
                  ...e,
                  "--srRiKA": C,
                  "--oiOG3Q": h?.default,
                  "--oGOcXA": h?.Kh,
                  "--UBd2ow": h?.focus,
                },
                "data-1p-ignore": !0,
                "data-bwignore": !0,
                "data-lpignore": !0,
                "data-protonpass-ignore": !0,
                "data-form-type": "other",
              }),
            });
          });
        };
        YSc = function () {
          return $5(function ({ link: a, Ur: b, children: c, T_b: d = !0 }) {
            return (a = a != null && b != null ? b(a) : void 0)
              ? Q5("a", {
                  ...a,
                  style: { textDecoration: d ? "underline" : "none" },
                  children: c,
                })
              : c;
          });
        };
        ZSc = function () {
          return () => Q5(__c.MW, { mediaType: "embed", failed: !1 });
        };
        $Sc = function (a) {
          return $5(function (b) {
            return Q5("div", {
              className: "oUJNhQ PYuKbg",
              children: Q5(a.lf, {
                text: b.text,
                animation: void 0,
                Pc: "middle",
                pa: void 0,
                rb: void 0,
                fg: [],
                writingMode: 1,
              }),
            });
          });
        };
        aTc = function () {
          return $5(function (a) {
            return Q5("div", {
              className: a.className,
              style: a.style,
              children: a.children,
            });
          });
        };
        bTc = function (a) {
          const b = a.Ba,
            c = a.eW,
            d = (e) => {
              e = __c.wp(e);
              b.VD([e], { Rm: !0 });
              return b.AY(e);
            };
          return $5(function (e) {
            var f = e.IGa;
            const g = e.fontSize,
              h = e.fontWeight,
              k = e.SAa,
              l = e.$c,
              m = e.stb,
              n = e.ariaInvalid,
              p = e.disabled,
              q = e.id,
              r = e.name,
              t = e.onBlur,
              u = e.onFocus,
              w = e.onChange,
              A = e.padding,
              B = e.paddingInlineEnd,
              C = e.placeholder,
              D = e.leb,
              H = e.readOnly,
              J = e.resize,
              M = e.outline,
              N = e.rows,
              R = e.value,
              S = e.width,
              Q = e.whiteSpace,
              U = e.wordBreak;
            e = {
              backgroundColor: e.backgroundColor,
              borderRadius: e.borderRadius,
              borderStyle: e.borderStyle,
              borderWidth: e.borderWidth,
              boxSizing: e.boxSizing,
              color: e.jk,
              fontFamily: f && d(f),
              fontSize: g,
              fontWeight: h && __c.Fp(h),
              outline: M,
              padding: A,
              paddingInlineEnd: B,
              resize: J,
              whiteSpace: Q,
              width: S,
              wordBreak: U,
            };
            [f] = f6(() => c?.yFb());
            return Q5("div", {
              ref: f?.Vk,
              className: "BHOPhg PYuKbg",
              children: Q5("textarea", {
                "aria-describedby": l,
                "aria-errormessage": m,
                "aria-invalid": n,
                className: WSc(["_6Yde8g", D && "sR0SUA"]),
                disabled: p,
                id: q,
                name: r,
                onBlur: t,
                onFocus: u,
                onChange: w,
                placeholder: C,
                rows: N,
                readOnly: H,
                style: {
                  ...e,
                  "--srRiKA": D,
                  "--oiOG3Q": k?.default,
                  "--oGOcXA": k?.Kh,
                  "--UBd2ow": k?.focus,
                },
                value: R,
              }),
            });
          });
        };
        dTc = function (a) {
          const b = new cTc(),
            c = aTc(),
            d = c6((B) => (b.eo ? Q5(b.eo, { ...B }) : Q5(c, { ...B }))),
            e = c6((B) => (b.mT ? Q5(b.mT, { ...B }) : void 0)),
            f = USc({ so: a.so, cb: a.cb }),
            g = ZSc(),
            h = YSc(),
            k = $Sc({ lf: a.lf }),
            l = VSc({ Dk: a.tg }),
            m = c6((B) => (b.vT ? Q5(b.vT, { ...B }) : Q5(l, { ...B }))),
            n = XSc({ Ba: a.Ba, eW: a.eW }),
            p = bTc({ Ba: a.Ba, eW: a.eW }),
            {
              $v: q,
              Hs: r,
              gy: t,
              PN: u,
              QN: w,
              ey: A,
            } = PSc({ expr: a.expr, uxa: b });
          return {
            tUa: {
              $xa: f,
              Tqb: g,
              cja: h,
              eo: d,
              mT: e,
              zj: k,
              Ah: l,
              vT: m,
              bja: n,
              Bya: p,
              $v: q,
              Hs: r,
              gy: t,
              PN: u,
              QN: w,
              ey: A,
            },
            uxa: b,
          };
        };
        __c.lI.prototype.Q4a = __c.ca(46, function () {
          return this.ka;
        });
        __c.WJ.prototype.aV = __c.ca(42, function (a, b) {
          this.console.error(...__c.eA(this, "critical", a, b));
        });
        __c.XJ.prototype.aV = __c.ca(41, function (a, b) {
          this.Gy.aV(a, b);
          __c.UJ(this, a, "critical", b);
        });
        __c.Rq.prototype.j3 = __c.ca(29, function (a) {
          a = __c.Iq(a);
          let b = this.Hk.Vu(a);
          (b && b.images.length !== 0) || (b = this.kY.get(__c.gp(a)));
          return b ? b.images : [];
        });
        var mSc = { uc: () => {} },
          g6 = __webpack_require__(186901),
          r4 = g6.EW,
          vRc = g6.h5,
          eTc = g6.m3,
          h6 = g6.sH,
          d6 = g6.XI;
        var o5 = __webpack_require__(245307).Fm;
        G5 = __c.G5 = __webpack_require__(75402)._;
        var Q5 = __webpack_require__(296713).jsx;
        var i6 = __webpack_require__(978109),
          fTc = i6.Component,
          NSc = i6.createElement,
          $5 = i6.memo,
          gTc = i6.useCallback,
          MSc = i6.useEffect,
          a6 = i6.useMemo,
          f6 = i6.useState;
        var c6 = __webpack_require__(270531).PA;
        var b6 = __webpack_require__(536618).iB;
        var hTc = __webpack_require__,
          iTc = hTc(208463),
          WSc = hTc.n_x(iTc)();
        var jTc = class {
          constructor(a) {
            this.ref = a;
          }
        };
        var kTc = class {
          get ref() {
            return this.box.ref;
          }
          set() {
            throw Error("cannot set unmodifiable box");
          }
          constructor(a) {
            this.box = a;
          }
        };
        var lTc = class {
          get ref() {
            return this.box.get();
          }
          constructor(a) {
            this.box = a;
          }
        };
        var mTc = Symbol.iterator,
          nTc = class {
            get size() {
              return this.cells.size;
            }
            get(a) {
              return this.cells.get(a)?.get();
            }
            has(a) {
              return this.cells.has(a);
            }
            forEach(a) {
              for (const [b, c] of this.cells.entries()) a(c.get(), b);
            }
            map(a) {
              const b = [];
              for (const [c, d] of this.cells.entries()) b.push(a(d.get(), c));
              return b;
            }
            every(a) {
              for (const [b, c] of this.cells.entries())
                if (!a(c.get(), b)) return !1;
              return !0;
            }
            entries() {
              return this.Ei().entries();
            }
            keys() {
              return this.cells.keys();
            }
            *values() {
              for (const a of this.cells.values()) yield a.get();
            }
            Ei() {
              const a = new Map();
              for (const [b, c] of this.cells.entries()) a.set(b, c.get());
              return a;
            }
            [mTc]() {
              return this.Ei()[Symbol.iterator]();
            }
            constructor(a) {
              this.cells = new Map(a);
            }
          };
        var oTc = Symbol.iterator,
          SNc = class {
            get wd() {
              return this.mWb.get();
            }
            get size() {
              return this.wd.size;
            }
            get(a) {
              return this.wd.get(a);
            }
            has(a) {
              return this.wd.has(a);
            }
            forEach(a) {
              this.wd.forEach(a);
            }
            map(a) {
              return this.wd.map(a);
            }
            every(a) {
              return this.wd.every(a);
            }
            entries() {
              return this.wd.entries();
            }
            keys() {
              return this.wd.keys();
            }
            values() {
              return this.wd.values();
            }
            Ei() {
              return this.wd.Ei();
            }
            [oTc]() {
              return this.wd[Symbol.iterator]();
            }
            set(a, b) {
              return this.wd.set(a, b);
            }
            delete(a) {
              return this.wd.delete(a);
            }
            constructor(a) {
              this.mWb = a;
            }
          };
        var pTc = Symbol.iterator,
          qTc = class {
            get size() {
              return this.wd.size;
            }
            get(a) {
              return this.wd.get(a);
            }
            has(a) {
              return this.wd.has(a);
            }
            forEach(a) {
              this.wd.forEach(a);
            }
            map(a) {
              return this.wd.map(a);
            }
            every(a) {
              return this.wd.every(a);
            }
            entries() {
              return this.wd.entries();
            }
            keys() {
              return this.wd.keys();
            }
            values() {
              return this.wd.values();
            }
            Ei() {
              return this.wd.Ei();
            }
            [pTc]() {
              return this.wd[Symbol.iterator]();
            }
            set() {
              return this.gA();
            }
            delete() {
              return this.gA();
            }
            gA() {
              throw Error("dict not modifiable");
            }
            constructor(a) {
              this.wd = a;
            }
          };
        var rTc = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          },
          sTc = Symbol.iterator,
          UNc = class {
            static G(a) {
              L(a, { ot: r4, TV: r4, jX: r4 });
            }
            get ot() {
              const a = new Map();
              this.cells.forEach((b, c) => a.set(b.value, c));
              return a;
            }
            hm(a) {
              return y(this.ot.get(a), "ref not found");
            }
            get empty() {
              return !this.cells.length;
            }
            count() {
              return this.cells.length;
            }
            toArray() {
              return this.cells.map((a) => a.value);
            }
            Ei() {
              return new Map(this.map((a, b) => [b, a]));
            }
            get TV() {
              return this.cells[0]?.value;
            }
            get jX() {
              return this.cells[this.cells.length - 1]?.value;
            }
            first(a) {
              return a ? this.cells.find((b) => a(b.value))?.value : this.TV;
            }
            last(a) {
              if (!a) return this.jX;
              const b = this.cells;
              for (let c = b.length - 1; c >= 0; c--) {
                const d = b[c];
                if (a(d.value)) return d.value;
              }
            }
            next(a, b) {
              const c = this.cells;
              for (a = this.hm(a) + 1; a < c.length; a++) {
                const d = c[a];
                if (d && (!b || b(d.value))) return d.value;
              }
            }
            previous(a, b) {
              const c = this.cells;
              for (a = this.hm(a) - 1; a >= 0; a--) {
                const d = c[a];
                if (d && (!b || b(d.value))) return d.value;
              }
            }
            Ne(a, b) {
              a = this.ot.get(a);
              b = this.ot.get(b);
              v(a != null);
              v(b != null);
              return a < b ? -1 : a > b ? 1 : 0;
            }
            wq(a) {
              return this.cells[this.hm(a)].id;
            }
            has(a) {
              return this.ot.has(a);
            }
            Jr(a) {
              return new __c.gM(this, a);
            }
            map(a) {
              return this.cells.map((b) => a(b.value, b.id));
            }
            flatMap(a) {
              return this.cells.flatMap((b) => a(b.value, b.id));
            }
            filter(a) {
              return this.cells
                .filter((b) => a(b.value, b.id))
                .map((b) => b.value);
            }
            forEach(a) {
              this.cells.forEach((b) => a(b.value, b.id));
            }
            reduce(a, b) {
              return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
            }
            some(a) {
              return this.cells.some((b) => a(b.value, b.id));
            }
            every(a) {
              return this.cells.every((b) => a(b.value, b.id));
            }
            [sTc]() {
              return this.toArray()[Symbol.iterator]();
            }
            constructor(a) {
              this.cells = (UNc.G(this), void 0);
              this.cells = a.map((b, c) => new rTc(String(c), b));
            }
          };
        var tTc, bOc, WNc, uTc, vTc;
        __c.j6 = class {
          map(a, b) {
            const c = this.get,
              d = this.set;
            return new __c.j6(
              () => a(c()),
              (e) => d(b(e))
            );
          }
          project({ get: a, set: b }) {
            const c = this.get,
              d = this.set;
            return new __c.j6(
              () => a(c()),
              (e) => d(b(c(), e))
            );
          }
          constructor(a, b) {
            this.get = a;
            this.set = b;
          }
        };
        tTc = class {
          read(a) {
            return s4(a) ? a() : a;
          }
          computed(a) {
            const b = r4(a);
            return () => b.get();
          }
          map(a, b) {
            return s4(a) ? () => b(a()) : b(a);
          }
          XL(a) {
            return new __c.j6(
              () => a.get(),
              (b) => a.set(b)
            );
          }
          box(a) {
            s4(a) ? ((a = r4(a)), (a = new lTc(a))) : (a = new jTc(a));
            return new kTc(a);
          }
          list(a) {
            const b = this.map(a, (c) =>
              __c.gha(VNc(c.map((d) => (s4(d) ? r4(d) : XNc(d)))))
            );
            return s4(b) ? __c.Tg(() => b()) : b;
          }
          wd(a) {
            const b = this.map(a, (c) => {
              c = new Map(
                Object.entries(c).map(([d, e]) => {
                  e = s4(e) ? r4(e) : XNc(e);
                  return [d, e];
                })
              );
              return new qTc(new nTc(c));
            });
            return s4(b) ? TNc(() => b()) : b;
          }
          constructor() {
            this.classes = rOc();
          }
        };
        bOc = (a) => {
          const b = a.Fj,
            c = a.rd,
            d = c.P,
            e = c.attributes;
          YNc(a.args, d, e);
          return {
            create: function (f, g) {
              const h = {};
              var k;
              const l = g?.P;
              g = g?.attributes;
              if (l)
                for (const [m, n] of Object.entries(l))
                  v(m in d, "unknown override: '{}'", m),
                    s4(n) ? ((k || (k = {}))[m] = n) : (h[m] = uTc(n));
              if (g)
                for (const [m, n] of Object.entries(g))
                  v(m in e, "unknown override: '{}'", m),
                    (h[m] =
                      n instanceof __c.j6
                        ? n
                        : s4(n)
                        ? { enumerable: !0, get: n, set: WNc }
                        : vTc(n));
              if (k)
                return ZNc(
                  k,
                  aOc((m) => {
                    const n = b(f);
                    Object.defineProperties(n, { ...h, ...ld(m, uTc) });
                    return n;
                  })
                );
              k = b(f);
              Object.defineProperties(k, h);
              return k;
            },
          };
        };
        WNc = () => {};
        uTc = (a) => ({ enumerable: !0, writable: !1, value: a });
        vTc = (a) => ({ enumerable: !0, get: () => a, set: WNc });
        var t4 = {
          top: void 0,
          left: void 0,
          width: void 0,
          height: void 0,
          rotation: void 0,
          wa: void 0,
          locked: void 0,
          re: void 0,
        };
        var k6 = new Map(),
          l6 = [],
          v4 = Object.freeze({
            Xg: void 0,
            image: void 0,
            video: void 0,
            Ra: void 0,
            color: void 0,
            wa: 0,
            locked: !0,
            Fg: !0,
            ck: void 0,
            Db: void 0,
            K: void 0,
            transition: void 0,
            flipX: !1,
            flipY: !1,
            $a: __c.OJb,
          }),
          dOc = Object.freeze({
            filter: void 0,
            po: void 0,
            nb: void 0,
            wa: 0,
            jc: k6,
            Ja: void 0,
          }),
          eOc = Object.freeze({
            po: void 0,
            jc: k6,
            filter: void 0,
            wa: 0,
            Ja: void 0,
            nb: Object.freeze({
              top: 0,
              left: 0,
              width: 0,
              height: 0,
              rotation: 0,
            }),
            oy: Object.freeze({ hk: void 0, ik: void 0 }),
            dc: l6,
            Uh: l6,
            Dz: 1,
            trim: void 0,
            autoplay: !0,
            playbackRate: void 0,
            volume: 1,
          }),
          gOc = Object.freeze({ fill: v4, stroke: void 0, V: 0 }),
          fOc = Object.freeze({
            weight: 0,
            color: "#000000",
            fill: v4,
            Qc: l6,
            Ye: !1,
          }),
          m6 = Object.freeze({
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            rotation: 0,
            wa: 0,
            wj: void 0,
            ea: void 0,
            K: void 0,
            transition: void 0,
            pa: l6,
            dc: l6,
            animation: void 0,
            Be: void 0,
            link: void 0,
            locked: !0,
            re: void 0,
            Fg: !0,
            ck: void 0,
            Ja: void 0,
            S8: void 0,
            kg: l6,
            tI: k6,
            LI: k6,
            anchor: void 0,
            Vg: k6,
          }),
          w4 = Object.freeze({
            ...m6,
            type: "rect",
            fill: v4,
            stroke: void 0,
            V: l6,
            $a: __c.jKb,
          }),
          x4 = Object.freeze({
            ...m6,
            type: "shape",
            slice: void 0,
            si: void 0,
            zb: l6,
            resizeMode: void 0,
            $a: __c.nKb,
          }),
          hOc = Object.freeze({
            text: Object.freeze({ stream: Wg.tw("\n"), Bb: k6 }),
            Ia: __c.MU,
            Pc: 2,
            Ll: [],
            box: Object.freeze({ top: 0, left: 0, width: 0, height: 0 }),
            Db: void 0,
            $a: __c.qKb,
          }),
          iOc = Object.freeze({
            ...m6,
            type: "text",
            text: Object.freeze({ stream: Wg.tw("\n"), Bb: k6 }),
            Ia: Object.freeze({ Za: [] }),
            Ie: void 0,
            placeholder: void 0,
            ug: 1,
            writingMode: void 0,
            I: void 0,
            O: void 0,
            uq: !1,
            kl: void 0,
            uh: void 0,
            Db: void 0,
            $a: __c.mKb,
          }),
          jOc = Object.freeze({ ...m6, type: "embed" }),
          pOc = Object.freeze({
            ...m6,
            type: "grid",
            cells: k6,
            layout: Object.freeze({
              template: l6,
              vD: l6,
              uk: l6,
              pw: 0,
              ux: 0,
            }),
            $a: __c.lKb,
          }),
          qOc = Object.freeze({ fill: v4, stroke: void 0, V: l6 }),
          nOc = Object.freeze({ type: "elbowed", Jh: l6, V: 0 }),
          oOc = Object.freeze({ type: "curved", depth: 0, ps: 0 }),
          kOc = Object.freeze({
            marker: void 0,
            anchor: void 0,
            position: void 0,
          }),
          mOc = Object.freeze({
            text: Object.freeze({ ...aH, stream: Wg.tw("\n") }),
            width: 0,
            height: 0,
            position: 0.5,
            orientation: 1,
            ug: 2,
            uh: void 0,
            Db: void 0,
            $a: __c.pKb,
          }),
          lOc = Object.freeze({
            ...m6,
            type: "line",
            weight: 2,
            start: kOc,
            end: kOc,
            fill: v4,
            geometry: void 0,
            zb: l6,
            color: "#000000",
            Qc: l6,
            Ye: !1,
          });
        F4 = __c.F4 = class {
          static val(a, b) {
            return { key: a, PM: 0, Iq: 0, type: b };
          }
          static ref(a, b) {
            return { key: a, PM: 0, Iq: 0, type: b };
          }
          static listRef(a, b) {
            return F4.ref(a, F4.Sda(b));
          }
          static Sda(a) {
            return { kind: 8, itemType: a };
          }
        };
        F4.yNb = y4({});
        var vOc = Object.freeze({
          document: Object.freeze({}),
          C: Object.freeze({}),
        });
        var wTc = R4({ version: G4(1, 1), text: P4(2, "Richtext2") }),
          xTc = G4(1, "richtext2"),
          yTc;
        yTc = F4.ref(2, T4({ version: void 0 }, wTc));
        var zTc = R4({ type: xTc, value: yTc }),
          ATc = T4(
            { type: void 0 },
            R4({ type: G4(1, "boolean"), value: A4(2, { kind: 1 }) }),
            R4({
              type: G4(1, "non-negative-double"),
              value: M4(2, { min: 0 }),
            }),
            R4({ type: G4(1, "double"), value: M4(2) }),
            R4({ type: G4(1, "string"), value: L4(2) }),
            zTc,
            R4({ type: G4(1, "image_or_video"), value: P4(2, "Fill") })
          );
        var BTc = F4.val(1, D4()),
          CTc = G4(1, "resource"),
          DTc = P4(2, "BlueprintRef"),
          ETc = {
            fonts: F4.listRef(1, O4("FontRef")),
            media: F4.listRef(2, O4("MediaRef")),
            ud: F4.listRef(3, O4("VideoRef")),
            embeds: F4.listRef(5, O4("EmbedRef")),
          },
          FTc = U4({
            C: y4({
              GYa: BTc,
              ru: S4(2, {
                domain: CTc,
                resource: tOc({ ref: DTc, resources: B4(3, R4(ETc)) }),
                rd: C4(3, __c.Q4(ATc)),
              }),
            }),
          });
        var GTc = (a) => {
            const b = new Map();
            a.Oa.forEach((c) => {
              switch (c.type) {
                case "text":
                  c.$a.text &&
                    b.set(c.$a.text, {
                      type: "richtext2",
                      value: { version: 1, text: c.text },
                    });
                  c.$a.I &&
                    b.set(c.$a.I, { type: "non-negative-double", value: c.I });
                  c.$a.O &&
                    b.set(c.$a.O, { type: "non-negative-double", value: c.O });
                  break;
                case "shape":
                  c.zb.forEach((d) => {
                    d.$a.text &&
                      b.set(d.$a.text, {
                        type: "richtext2",
                        value: { version: 1, text: d.text },
                      });
                  });
                  break;
                case "rect":
                case "chart":
                case "line":
                case "grid":
                  break;
                default:
                  throw Error(
                    `Element type: ${c.type} should not be blueprintable`
                  );
              }
            });
            return b;
          },
          HTc = V4()(({ pr: a }) => ({
            h7b({ yA: b }) {
              const c = y(
                a?.R3a(b),
                `No blueprint found in the document for blueprintId: ${b}`
              );
              return {
                data: {
                  C: {
                    ru: {
                      domain: "document",
                      id: b,
                      version: 1,
                      Rb: {
                        type: "instance",
                        rd: GTc(__c.YH.snapshot(c.element.ref)),
                      },
                    },
                  },
                  document: {},
                },
                S: { width: c.element.ref.I, height: c.element.ref.O },
              };
            },
          }));
        var XOc = {
          vf: V4()(() => ({
            c7b({ GYa: a, yA: b, version: c, source: d }, e, f) {
              f = f && {
                fonts: W4("font", f.fonts),
                media: W4("media", f.media),
                ud: W4("video", f.ud),
                embeds: W4("embed", f.embeds),
              };
              d = GTc(d);
              return {
                data: {
                  C: {
                    GYa: a,
                    ru: {
                      domain: "resource",
                      resource: {
                        ref: { type: "blueprint", id: b, version: c },
                        resources: f,
                      },
                      rd: d.size > 0 ? d : void 0,
                    },
                    type: "instance",
                  },
                  document: {},
                },
                S: e,
              };
            },
          })),
          wf: FTc,
        };
        var ITc = R4({ type: G4(1, "instance"), rd: F4.ref(2, __c.Q4(ATc)) }),
          JTc = G4(1, "document"),
          KTc = F4.val(2, D4()),
          LTc = J4(3),
          MTc;
        MTc = F4.ref(4, T4({ type: void 0 }, ITc));
        var NTc = U4({
          C: y4({ ru: S4(1, { domain: JTc, id: KTc, version: LTc, Rb: MTc }) }),
        });
        var YOc = { vf: HTc, wf: NTc };
        var OTc = new RegExp(
            /^mailto:(?!$|\/\/$)\S+$|^(https?|ftp|tel|sms|shortcuts):(\/\/|[^/])[^ ]+(\/|$)|^[^: ]+(\/|$)|^[\w.]+:\d+(\/|$)/i
          ),
          PTc = U4({
            C: y4({
              label: P4(1, "Richtext2"),
              link: L4(2, OTc),
              background: P4(3, "Fill"),
              V: J4(4, { min: 0, max: 100 }),
              border: C4(5, O4("Stroke")),
            }),
          });
        var ZOc = {
          vf: V4()((a) => ({
            createDefault(b) {
              var c = a.Vma?.G7b ?? Sf.Dc["font-family"];
              c = {
                ...(b?.attrs ?? {}),
                "font-family": b?.attrs?.["font-family"] ?? c,
                "font-size": b?.attrs?.["font-size"] ?? 20,
                color: b?.attrs?.color ?? "#ffffff",
                "text-align": b?.attrs?.["text-align"] ?? "center",
              };
              return {
                data: {
                  C: {
                    label: {
                      ...aH,
                      stream: Wg.wb()
                        .attrs(c)
                        .xb(b?.label ?? K("4sGMlw"))
                        .xb("\n")
                        .build(),
                    },
                    link: b?.link,
                    background: b?.background ?? { ...BE, color: "#0ba84a" },
                    V: b?.V ?? 25,
                    border: b?.border,
                  },
                  document: {},
                },
                S: b?.S ?? { width: 300, height: 50 },
              };
            },
          })),
          wf: PTc,
        };
        y4(X4());
        var Y4 = D4(/^#[0-9a-f]{6}$/);
        y4({ color: z4(1, Y4) });
        y4(wOc(1, 2, 3));
        y4(f5(1));
        y4(g5(1));
        y4(h5(1));
        var QTc = U4({
            C: y4({
              ...X4(),
              ...wOc(4, 7, 8),
              ...f5(5),
              ...g5(9),
              ...h5(10),
              label: P4(6, "Richtext2"),
            }),
          }),
          RTc = V4()(() => ({
            createDefault() {
              const a = {
                ...aH,
                stream: Wg.wb()
                  .attrs({ color: "#ffffff", "font-size": 8 })
                  .xb("This text came from appData\n")
                  .build(),
              };
              return {
                data: {
                  C: {
                    borderColor: "#396baa",
                    Ga: "#00c4cc #17a0d8 #2d7be3 #4457ef #5a32fa #6330f6 #6c2ef1 #742ced #7d2ae8".split(
                      " "
                    ),
                    zd: "#ffffff",
                    Tp: i5({ size: 4 }),
                    label: a,
                    Bd: 0,
                    G9: [],
                    V: 0,
                    width: 100,
                    height: 100,
                  },
                  document: {},
                },
                S: { width: 100, height: 100 },
              };
            },
          })),
          KOc = { vf: RTc, wf: QTc };
        var STc = U4({
            document: y4({ ...g5(1), ...h5(2), T6a: z4(3, { kind: 1 }) }),
            C: { zd: A4(1, Y4) },
          }),
          TOc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: {
                    document: {
                      T6a: !1,
                      zd: "#000000",
                      Tp: i5({
                        lineHeight: 1250,
                        size: 12,
                        textAlign: "center",
                      }),
                    },
                    C: { zd: void 0 },
                  },
                  S: { width: 12, height: 15 },
                };
              },
            })),
            wf: STc,
          };
        var TTc = U4({
            C: y4({
              bjb: P4(1, "Richtext2"),
              r9a: P4(2, "Richtext2"),
              oZa: P4(3, "Richtext2"),
              qZa: P4(4, "Richtext2"),
            }),
            document: y4({}),
          }),
          UOc = {
            vf: V4()(() => ({
              createDefault() {
                const a = j5("hi shape\n", {
                    color: "#713af1",
                    "font-size": 8,
                    "text-align": "center",
                  }),
                  b = j5("ok ?\n", { color: "#281caf", "font-size": 3 }),
                  c = j5("cell A\n", { color: "#ff5555", "font-size": 12 }),
                  d = j5("cell B\n", { color: "#f32cf3", "font-size": 12 });
                return {
                  data: { C: { bjb: a, r9a: b, oZa: c, qZa: d }, document: {} },
                  S: { width: 100, height: 100 },
                };
              },
            })),
            wf: TTc,
          };
        var VOc = { vf: RTc, wf: QTc };
        var UTc = U4({ C: { o2a: P4(1, "Fill"), qkb: P4(2, "Fill") } }),
          WOc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: {
                    C: {
                      o2a: { ...BE, color: "#4660d9", Xg: !0 },
                      qkb: { ...BE, color: "#ff0000" },
                    },
                    document: {},
                  },
                  S: { width: 200, height: 100 },
                };
              },
            })),
            wf: UTc,
          };
        var VTc = U4({
            C: y4({
              color: z4(1, Y4),
              ...f5(2),
              width: J4(3, { min: 0 }),
              height: J4(4, { min: 0 }),
              iNb: H4(5),
            }),
          }),
          LOc = {
            vf: V4()(() => ({
              oyb(a, b) {
                return {
                  data: {
                    C: {
                      color: a,
                      borderColor: b,
                      width: 100,
                      height: 100,
                      iNb: "Diamond Heart",
                    },
                    document: {},
                  },
                  S: { width: 100, height: 100 },
                };
              },
            })),
            wf: VTc,
          };
        var WTc = U4({
            C: y4({
              color: z4(1, Y4),
              ...f5(2),
              X6a: S4(3, X4()),
              M_a: S4(4, X4()),
              qbb: S4(5, X4()),
              yYa: S4(6, X4()),
              nYa: S4(7, X4()),
            }),
          }),
          n6 = () => ({ G9: [], Bd: 1, V: 0 }),
          MOc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: {
                    C: {
                      color: "#ffa500",
                      borderColor: "#396baa",
                      X6a: n6(),
                      M_a: n6(),
                      qbb: n6(),
                      yYa: n6(),
                      nYa: n6(),
                    },
                    document: {},
                  },
                  S: { width: 400, height: 300 },
                };
              },
            })),
            wf: WTc,
          };
        var XTc = U4({ C: F4.yNb }),
          NOc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: { C: {}, document: {} },
                  S: { width: 100, height: 100 },
                };
              },
            })),
            wf: XTc,
          };
        var YTc = U4({
            C: y4({
              BR: z4(1, Y4),
              accentColor: z4(2, Y4),
              LJa: z4(3, { kind: 1 }),
            }),
          }),
          OOc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: {
                    C: { BR: "#2563eb", accentColor: "#7faa00", LJa: !0 },
                    document: {},
                  },
                  S: { width: 300, height: 600 },
                };
              },
              oyb(a, b) {
                return {
                  data: { C: { BR: a, accentColor: b, LJa: !0 }, document: {} },
                  S: { width: 300, height: 600 },
                };
              },
            })),
            wf: YTc,
          };
        var ZTc = U4({
            C: y4({
              title: H4(1),
              pZ: z4(2, Y4),
              AX: z4(3, Y4),
              OV: z4(4, Y4),
              lkb: H4(5),
              dbb: H4(6),
              c3a: H4(7),
            }),
          }),
          POc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: {
                    C: {
                      title: "Mood Check",
                      pZ: "#ff5252",
                      AX: "#ffda79",
                      OV: "#78e08f",
                      lkb: "\ud83d\ude14",
                      dbb: "\ud83d\ude10",
                      c3a: "\ud83d\ude04",
                    },
                    document: {},
                  },
                  S: { width: 400, height: 200 },
                };
              },
            })),
            wf: ZTc,
          };
        var $Tc = U4({
            C: y4({
              ...X4(),
              ...f5(4),
              title: H4(5),
              RYa: P4(6, "Fill"),
              TYa: P4(7, "Fill"),
              UYa: P4(8, "Fill"),
              VYa: z4(9, Y4),
            }),
          }),
          QOc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: {
                    C: {
                      title: "Subscribe",
                      VYa: "#ffffff",
                      RYa: { ...BE, color: "#5271ff" },
                      TYa: { ...BE, color: "#4e6bf2" },
                      UYa: { ...BE, color: "#4660d9" },
                      Bd: 0,
                      G9: [],
                      borderColor: "#396baa",
                      V: 30,
                    },
                    document: {},
                  },
                  S: { width: 400, height: 200 },
                };
              },
            })),
            wf: $Tc,
          };
        var aUc = U4({
            C: y4({
              text: H4(1),
              jka: H4(2),
              color: z4(3, Y4),
              ...g5(4),
              ...h5(5),
            }),
          }),
          ROc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: {
                    C: {
                      text: "[Add Text]",
                      jka: "[Your name]",
                      color: "#fdf9b4",
                      zd: "#000000",
                      Tp: i5({ size: 8 }),
                    },
                    document: {},
                  },
                  S: { width: 100, height: 100 },
                };
              },
            })),
            wf: aUc,
          };
        var bUc = U4({
            C: y4({
              I4a: H4(1),
              lYa: H4(2),
              H4a: P4(3, "Fill"),
              kYa: P4(4, "Fill"),
              V: J4(5),
              ...h5(6),
            }),
          }),
          SOc = {
            vf: V4()(() => ({
              createDefault() {
                return {
                  data: {
                    C: {
                      I4a: "When do kookaburras 'laugh' the most?",
                      lYa: "Dawn and dusk",
                      H4a: { ...BE, color: "#ffbd59" },
                      kYa: { ...BE, color: "#7ed957" },
                      V: 20,
                      Tp: i5({
                        fontWeight: "bold",
                        size: 16,
                        textAlign: "center",
                      }),
                    },
                    document: {},
                  },
                  S: { width: 400, height: 200 },
                };
              },
            })),
            wf: bUc,
          };
        var cUc = R4({ type: G4(46, "text2"), text: P4(2423, "Richtext2") }),
          dUc = T4({ type: void 0 }, cUc),
          eUc = {
            id: L4(35),
            bKa: M4(37),
            label: F4.ref(38, dUc),
            EL: N4(2430, "c", "u"),
            V: M4(29),
            required: A4(2331, { kind: 1 }),
          },
          fUc = R4({ id: L4(35), label: F4.ref(38, dUc) }),
          gUc = R4({ type: G4(46, "r") }),
          hUc = R4({ type: G4(46, "p") }),
          iUc = R4({ type: G4(46, "q") }),
          jUc = T4({ type: void 0 }, gUc, hUc, iUc),
          kUc = G4(46, "select"),
          lUc = B4(48, jUc),
          mUc = F4.listRef(41, fUc),
          nUc = R4({
            ...eUc,
            type: kUc,
            variant: lUc,
            options: mUc,
            L4: A4(39, { kind: 3, range: { min: 0 } }),
            TCa: z4(1549, K4(D4())),
          }),
          oUc = R4({ type: G4(46, "e") }),
          pUc = R4({ type: G4(46, "f"), VQ: J4(40, { min: 1 }) }),
          qUc = T4({ type: void 0 }, oUc, pUc),
          rUc = R4({
            ...eUc,
            type: G4(46, "text"),
            variant: F4.ref(48, qUc),
            placeholder: L4(42),
          }),
          sUc = R4({ type: G4(46, "a") }),
          tUc = R4({ type: G4(46, "b") }),
          uUc = R4({ type: G4(46, "c") }),
          vUc = R4({ type: G4(46, "d") }),
          wUc = T4({ type: void 0 }, sUc, tUc, uUc, vUc),
          xUc = R4({
            ...eUc,
            type: G4(46, "number"),
            variant: F4.ref(48, wUc),
            min: M4(1),
            max: M4(2),
          }),
          yUc = T4({ type: void 0 }, rUc, nUc, xUc),
          zUc = R4({ Zr: M4(1), $r: M4(2), tv: M4(3) }),
          AUc = R4({
            label: F4.ref(38, dUc),
            EL: N4(2, "c", "u"),
            tv: M4(3),
            Zr: M4(4),
            $r: M4(5),
            efa: M4(6),
          }),
          BUc = R4({
            dfa: M4(1),
            tv: M4(2),
            $r: M4(3),
            Zr: M4(4),
            background: C4(5, O4("Fill")),
          }),
          CUc = M4(4),
          DUc = M4(5),
          EUc = M4(2062),
          FUc = M4(2077),
          GUc = G4(46, "poll", "quiz"),
          HUc = H4(35),
          IUc = H4(45),
          JUc = L4(27),
          KUc = N4(44, "l", "r"),
          LUc = L4(30),
          MUc = P4(2216, "Fill"),
          NUc = P4(2372, "Fill"),
          OUc = P4(28, "Stroke"),
          PUc = M4(29),
          QUc = A4(1802, { kind: 1 }),
          RUc = A4(9, { kind: 1 }),
          SUc = A4(52, { kind: 1 }),
          TUc = B4(34, R4({})),
          UUc = { label: P4(1, "Richtext2"), EL: I4(2430, "c", "u") },
          VUc = R4({
            Cj: CUc,
            Gk: DUc,
            minHeight: EUc,
            minWidth: FUc,
            type: GUc,
            id: HUc,
            Yt: IUc,
            Pz: JUc,
            direction: KUc,
            jma: LUc,
            Ffa: MUc,
            oga: NUc,
            border: OUc,
            V: PUc,
            F3: QUc,
            mIa: RUc,
            lva: SUc,
            V0a: TUc,
            title: C4(36, R4(UUc)),
            header: C4(1, R4(BUc.fields)),
            fields: F4.listRef(32, yUc),
            RV: C4(6, R4(zUc.fields)),
            footer: C4(1705, R4(AUc.fields)),
          }),
          WUc = y4({ type: G4(37, "poll", "quiz"), value: F4.ref(48, VUc) }),
          XUc = U4({ C: WUc });
        var COc;
        __c.DOc = (14 * __c.hXb) / 16;
        COc = { ...BE, wa: 1 };
        K("GkIGaQ");
        K("5yQScA");
        K("EcbFFg");
        K("zM4EiQ");
        K("EBjOvw");
        K("aVyIDw");
        K("Gq117g");
        K("0ICFJA");
        K("UfSTAw");
        K("lbgHWw");
        K("GM4zjw");
        K("vATrmA");
        K("a2SYrQ");
        K("0ICFJA");
        K("X9QjTA");
        K("RkAUEw");
        K("C5627w");
        K("UKYBZg");
        K("0ICFJA");
        var m5 = ["#000000", "#ffffff"];
        var yOc = ["#cccccc", "#333333"];
        __c.n5 = (a, b) => ({
          ...aH,
          stream: __c
            .Eg(
              Wg.wb()
                .attrs({
                  ...b,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                })
                .xb(a)
            )
            .build(),
        });
        var IOc = { [1]: "p", [2]: "q", [3]: "r" },
          HOc = { [1]: "a", [2]: "b", [3]: "c", [4]: "d" };
        var bPc = { vf: V4()(() => ({ createForm: BOc })), wf: XUc };
        var YUc = V4()(() => ({
          createDefault() {
            return {
              data: {
                C: {},
                document: {
                  background: { ...__c.PJb, color: "#00ff00" },
                  zd: "#000000",
                  Tp: {
                    size: Sf.Dc["font-size"],
                    textTransform: Sf.Dc["text-transform"],
                    fontStyle: Sf.Dc["font-style"],
                    fontFamily: Sf.Dc["font-family"],
                    letterSpacing: Sf.Dc.tracking,
                    Gl: Sf.Dc.strikethrough,
                  },
                  Uoa: [],
                  links: [],
                },
              },
              S: { width: 1366, height: 50 },
            };
          },
        }));
        var ZUc;
        ZUc = z4(1, E4({ min: 0 }));
        var $Uc = I4(2, "none", "uppercase", "lowercase", "capitalize"),
          aVc = I4(3, "normal", "italic"),
          bVc = y4({
            size: ZUc,
            textTransform: $Uc,
            fontStyle: aVc,
            fontFamily: H4(4),
            letterSpacing: z4(5, E4({ min: -200, max: 800 })),
            Gl: I4(6, "none", "strikethrough"),
          }),
          cVc = y4({ url: H4(1), label: H4(2) }),
          dVc = P4(1, "Fill"),
          eVc = z4(2, D4(/^#[0-9a-f]{6}$/)),
          fVc = S4(3, bVc),
          gVc = A4(4, K4(D4())),
          hVc;
        hVc = B4(5, F4.Sda(R4(cVc)));
        var iVc = U4({
          document: y4({
            background: dVc,
            zd: eVc,
            Tp: fVc,
            Uoa: gVc,
            links: hVc,
          }),
        });
        var $Oc = { vf: YUc, wf: iVc };
        var fPc;
        __c.jVc = V4()(() => ({
          n7b(a, b, c) {
            return {
              data: {
                C: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: void 0,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                    jc: void 0,
                  },
                },
                document: {},
              },
              S: { width: b, height: c },
            };
          },
          o7b(a, b, c, d) {
            return {
              data: {
                C: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: b,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                    jc: void 0,
                  },
                },
                document: {},
              },
              S: { width: c, height: d },
            };
          },
        }));
        fPc = { vf: __c.jVc };
        var kVc = P4(1, "SceneRef"),
          lVc = B4(1, O4("MediaRef")),
          mVc,
          aPc;
        mVc = F4.val(2, E4({ min: 0, max: 6.284 }));
        var nVc;
        nVc = F4.val(3, E4({ min: -1.571, max: 1.571 }));
        __c.oVc = U4({
          C: y4({
            scene: kVc,
            config: tOc({
              snapshot: lVc,
              rotationPhi: mVc,
              rotationTheta: nVc,
              jc: B4(4, __c.Q4(O4("Fill"))),
            }),
          }),
        });
        aPc = { wf: __c.oVc };
        var ePc = class {
          static G(a) {
            L(a, { Vma: h6.ref });
          }
          constructor() {
            this.Vma = (ePc.G(this), void 0);
          }
        };
        var p5 = class {
            static of(a, b, c) {
              return new p5(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Usa = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          qVc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = pVc;
              this.ptb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          o6 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.GQb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          sVc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = rVc;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          lPc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.Ntb = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var qPc = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        __c.tVc = nPc(4);
        __c.uVc = nPc(6);
        __c.vVc = oPc(5);
        __c.p6 = oPc(0);
        var wVc = class {},
          HPc = class extends wVc {
            MAa(a) {
              return new HPc(a(this.value));
            }
            CGa(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          IPc = class extends wVc {
            MAa(a, b) {
              return new IPc(b(this.value));
            }
            CGa(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var sPc = class {
            map(a) {
              return a(this);
            }
          },
          q6 = class extends sPc {
            iJa(a) {
              return this === a || a.kRa((b) => this.Zca(b));
            }
            gX() {
              throw Error(`${this} is not iterable`);
            }
            wLa(a) {
              const b = this.propTypes ?? (this.propTypes = this.Vqa());
              if (!b) throw Error(`${this} is not navigable"`);
              if (!b.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return b[a];
            }
            Vqa() {
              throw Error(`${this} is not navigable`);
            }
            LGa(a) {
              a(this);
            }
            kRa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          r6 = class extends q6 {
            Zca(a) {
              return a instanceof r6 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          xVc = class extends q6 {
            Zca(a) {
              return a instanceof xVc && this.Fj === a.Fj;
            }
            toString() {
              return this.Fj.name;
            }
            constructor(a) {
              super();
              this.Fj = a;
            }
          },
          yVc = class extends q6 {
            Zca(a) {
              return (
                a instanceof yVc && this.Fj === a.Fj && s5(this.arg, a.arg)
              );
            }
            toString() {
              return `${this.Fj}<${this.arg}>`;
            }
            constructor(a, b) {
              super();
              this.Fj = a;
              this.arg = b;
            }
          },
          zVc = class extends yVc {
            gX() {
              return this.arg;
            }
            Vqa() {
              const a = this.arg;
              return {
                size: y5.number,
                empty: y5.boolean,
                get first() {
                  return y5.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          AVc = class extends yVc {
            gX() {
              return this.arg;
            }
            Vqa() {
              const a = this.arg;
              return {
                size: y5.number,
                empty: y5.boolean,
                get first() {
                  return y5.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          BVc = class extends q6 {
            Zca(a) {
              return (
                a instanceof BVc &&
                s5(this.key, a.key) &&
                s5(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          CVc = class extends q6 {
            Zca(a) {
              return a instanceof CVc
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && s5(this.fields[b], c)
                  )
                : !1;
            }
            Vqa() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          s6 = class extends sPc {
            iJa(a) {
              return this === a || this.Ki.every((b) => b.iJa(a));
            }
            gX() {
              return y5.union(...this.Ki.map((a) => a.gX()));
            }
            wLa(a) {
              return y5.union(...this.Ki.map((b) => b.wLa(a)));
            }
            LGa(a) {
              this.Ki.forEach((b) => b.LGa(a));
            }
            kRa(a) {
              return this.Ki.some((b) => b.kRa(a));
            }
            toString() {
              return this.Ki.length
                ? this.Ki.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.Ki = a;
              this.kind = "disjunction";
              v(a.length !== 1);
            }
          },
          DVc = new s6([]),
          EVc = new r6("string"),
          FVc = new r6("number"),
          GVc = new r6("boolean"),
          HVc = new r6("undefined"),
          IVc = new s6([EVc, FVc, GVc]),
          JVc = class {
            get never() {
              return DVc;
            }
            get string() {
              return EVc;
            }
            get number() {
              return FVc;
            }
            get boolean() {
              return GVc;
            }
            get undefined() {
              return HVc;
            }
            get primitive() {
              return IVc;
            }
            optional(a) {
              return y5.union(a, y5.undefined);
            }
            array(a) {
              return new zVc(a);
            }
            set(a) {
              return new AVc(a);
            }
            Z0(a) {
              return new s6([new zVc(a), new AVc(a)]);
            }
            map(a, b) {
              return new BVc(a, b);
            }
            M(a) {
              return new CVc({ ...a });
            }
            union(...a) {
              if (a.length === 0) return DVc;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) pPc(d).LGa((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return DVc;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return s5(d, e) ? e : s5(e, d) ? d : new s6(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => s5(d, e)) ||
                  (c.forEach((e) => s5(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new s6([...c]);
            }
            constructor() {
              this.optional = t5(this.optional);
              this.array = t5(this.array);
              this.set = t5(this.set);
              this.Z0 = t5(this.Z0);
            }
          },
          KVc = class extends JVc {
            instance(a) {
              return new xVc(a);
            }
          },
          y5 = new KVc(),
          LVc = class extends JVc {
            instance(a) {
              return new xVc(y(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var t6 = Symbol("value"),
          MVc = class {
            get props() {
              return this.psb ?? (this.psb = this.jAa());
            }
          },
          NVc = class {
            get size() {
              return this[t6].length;
            }
            get empty() {
              return this[t6].length === 0;
            }
            get first() {
              return this[t6][0];
            }
            constructor(a) {
              this[t6] = a;
            }
          },
          OVc = Symbol.iterator,
          PVc = class extends MVc {
            jAa() {
              return new NVc(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [OVc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, u5).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          QVc = class {
            get size() {
              return this[t6].size;
            }
            get empty() {
              return this[t6].size === 0;
            }
            get first() {
              return this[t6][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[t6] = a;
            }
          },
          RVc = Symbol.iterator,
          SVc = class extends MVc {
            jAa() {
              return new QVc(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [RVc]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, u5).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          TVc = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${u5(a)}]: ${u5(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          UVc = class extends MVc {
            jAa() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${u5(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          VVc = class {
            toString() {
              return `[instance ${this.Fj.name}]`;
            }
            constructor(a, b) {
              this.Fj = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          WVc = class {
            array(a) {
              return new PVc(a);
            }
            set(a) {
              return new SVc(a);
            }
            map(a) {
              return new TVc(new Map(a));
            }
            M(a) {
              return new UVc({ ...a });
            }
          },
          XVc = class extends WVc {
            instance(a, b) {
              return new VVc(a, b);
            }
            stringify(a) {
              return u5(a);
            }
            constructor() {
              super();
              this.Th = vPc;
            }
          },
          C5 = new XVc(),
          YVc = class extends WVc {
            instance(a, b) {
              a = y(this.classes[a]);
              return new VVc(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var FPc = {
            [0]: kPc(y5.number, y5.number, (a) => -a),
            [1]: kPc(y5.string, y5.number, (a) => a.length),
            [2]: kPc(y5.boolean, y5.boolean, (a) => !a),
            [3]: q5(y5.number, y5.number, y5.number, (a, b) => a + b),
            [4]: q5(y5.number, y5.number, y5.number, (a, b) => a - b),
            [5]: q5(y5.number, y5.number, y5.number, (a, b) => a * b),
            [6]: q5(y5.number, y5.number, y5.number, (a, b) => a / b),
            [7]: q5(y5.number, y5.number, y5.number, (a, b) => a % b),
            [8]: q5(y5.string, y5.string, y5.string, (a, b) => a + b),
            [9]: q5(y5.number, y5.number, y5.boolean, (a, b) => a === b),
            [10]: q5(y5.number, y5.number, y5.boolean, (a, b) => a !== b),
            [11]: q5(y5.number, y5.number, y5.boolean, (a, b) => a < b),
            [12]: q5(y5.number, y5.number, y5.boolean, (a, b) => a <= b),
            [13]: q5(y5.number, y5.number, y5.boolean, (a, b) => a > b),
            [14]: q5(y5.number, y5.number, y5.boolean, (a, b) => a >= b),
            [15]: q5(y5.boolean, y5.boolean, y5.boolean, (a, b) => a && b),
            [16]: q5(y5.boolean, y5.boolean, y5.boolean, (a, b) => a || b),
          },
          LPc = {
            [2]: new o6(y5.number, y5.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new o6(y5.number, y5.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new o6(y5.number, y5.number, (a) => Math.max(...a)),
            [5]: new o6(y5.number, y5.number, (a) => Math.min(...a)),
            [6]: new o6(y5.string, y5.string, (a) => a.join("")),
          },
          ZVc = (a) => C5.array(a),
          $Vc = (a) => C5.set(a),
          JPc = {
            [0]: (a) => new o6(a, y5.array(a), ZVc),
            [1]: (a) => new o6(a, y5.set(a), $Vc),
          },
          rVc = (a) => C5.map(a),
          wPc = { [0]: (a, b) => new sVc(a, b, y5.map(a, b)) },
          pVc = (a) => C5.M(a),
          OPc = { [0]: (a) => new qVc(a, y5.M(a)) },
          aWc = (a, b) => C5.array(b.map((c) => c())),
          bWc = (a, b) => C5.array(b.flatMap((c) => c().items)),
          cWc = (a, b) => C5.array(a.filter((c, d) => b[d]()).map((c) => c())),
          dWc = (a, b) => b.some((c) => c()),
          eWc = (a, b) => b.every((c) => c()),
          fWc = (a, b) => a.find((c, d) => b[d]())?.(),
          yPc = {
            [0]: (a, b) => b.map((c) => r5(a, c, y5.array(c), aWc)),
            [1]: (a, b) =>
              b.gX().map((c) => r5(a, y5.array(c), y5.array(c), bWc)),
            [2]: (a) => r5(a, y5.boolean, y5.array(a), cWc),
            [3]: (a) => r5(a, y5.boolean, y5.boolean, dWc),
            [4]: (a) => r5(a, y5.boolean, y5.boolean, eWc),
            [5]: (a) => r5(a, y5.boolean, y5.optional(a), fWc),
          };
        var w5 = class {
          define(a, b) {
            return new w5(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var hWc = (a, b, c) => {
            const d = v5.create(b.IU),
              e = new gWc(a);
            return {
              compile: (f) => {
                const g = CPc(e, d, f).as(c);
                return (h) => {
                  h = b.Zp(h).lPa;
                  return g(new w5(new Map(h)));
                };
              },
            };
          },
          v5 = class {
            static create(a) {
              return new v5(new w5(new Map(a)), new w5(new Map()));
            }
            constructor(a = new w5(new Map()), b = new w5(new Map())) {
              this.vars = a;
              this.Iba = b;
            }
          },
          gWc = class {
            constructor(a) {
              this.types = a;
            }
          },
          A5 = class {
            static of(a, b) {
              return new A5(a, b);
            }
            as(a) {
              if (!s5(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new A5(this.type, (b) => {
                const c = r4(a(b), { equals: C5.Th });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          ZPc = class {
            as(a, b) {
              const c = this.Usa,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!s5(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!s5(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Usa = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var xQc = class {
            add(a) {
              a = a(iWc, this.types);
              return new xQc({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.boolean;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new z(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.RXa));
                    case "set":
                      return b.set(this.evaluate(a.RXa));
                    default:
                      throw new z(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.RXa);
                      a = this.evaluate(a.d5b);
                      if (!s5(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new z(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.M(ld(a.args, (c) => this.evaluate(c)));
                default:
                  throw new z(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new LVc(this.classes);
              this.values = new YVc(this.classes);
            }
          },
          iWc = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.mNb = new p5([y5.M(b)], y5.instance(this), (d) =>
                C5.instance(this, c(d.fields))
              );
            }
          };
        var jWc = Symbol.iterator,
          $Pc = class {
            static G(a) {
              L(a, { Zda: r4 });
            }
            get Zda() {
              const a = new Map();
              this.base.forEach((b) => a.set(this.qh(b), b));
              return a;
            }
            Tw(a) {
              return y(this.Zda.get(a));
            }
            N4(a) {
              return a != null ? this.qh(a) : void 0;
            }
            get size() {
              return this.base.size;
            }
            get(a) {
              a = this.base.get(a);
              return this.N4(a);
            }
            has(a) {
              return this.base.has(a);
            }
            forEach(a) {
              this.base.forEach((b, c) => a(this.qh(b), c));
            }
            map(a) {
              return this.base.map((b, c) => a(this.qh(b), c));
            }
            set(a, b) {
              return this.qh(this.base.set(a, this.ML(b)));
            }
            every(a) {
              return this.base.every((b, c) => a(this.qh(b), c));
            }
            delete(a) {
              this.base.delete(a);
            }
            entries() {
              return bQc(this.base.entries(), ([a, b]) => [a, this.qh(b)]);
            }
            keys() {
              return this.base.keys();
            }
            values() {
              return bQc(this.base.values(), this.qh);
            }
            [jWc]() {
              return this.Ei()[Symbol.iterator]();
            }
            Ei() {
              return Ld(this.base.Ei(), this.qh);
            }
            constructor(a, b, c) {
              this.base = a;
              this.ML = b;
              this.qh = c;
              $Pc.G(this);
            }
          };
        var kWc = Symbol.iterator,
          cQc = class {
            static G(a) {
              L(a, { Zda: r4 });
            }
            get Zda() {
              const a = new Map();
              this.base.forEach((b) => a.set(this.qh(b), b));
              return a;
            }
            Tw(a) {
              return y(this.Zda.get(a));
            }
            N4(a) {
              return a != null ? this.qh(a) : void 0;
            }
            get empty() {
              return this.base.empty;
            }
            count() {
              return this.base.count();
            }
            toArray() {
              return this.base.toArray().map(this.qh);
            }
            Ei() {
              return Ld(this.base.Ei(), this.qh);
            }
            [kWc]() {
              return this.toArray()[Symbol.iterator]();
            }
            first(a) {
              return this.N4(this.base.first(a && ((b) => a(this.qh(b)))));
            }
            last(a) {
              return this.N4(this.base.last(a && ((b) => a(this.qh(b)))));
            }
            next(a, b) {
              return this.N4(
                this.base.next(this.Tw(a), b && ((c) => b(this.qh(c))))
              );
            }
            previous(a, b) {
              return this.N4(
                this.base.previous(this.Tw(a), b && ((c) => b(this.qh(c))))
              );
            }
            Ne(a, b) {
              return this.base.Ne(this.Tw(a), this.Tw(b));
            }
            wq(a) {
              return this.base.wq(this.Tw(a));
            }
            has(a) {
              return this.base.has(this.Tw(a));
            }
            set(a, b) {
              return this.qh(this.base.set(a, this.ML(b)));
            }
            replace(a, b) {
              return this.qh(this.base.replace(this.Tw(a), this.ML(b)));
            }
            append(a) {
              return this.qh(this.base.append(this.ML(a)));
            }
            prepend(a) {
              return this.qh(this.base.prepend(this.ML(a)));
            }
            pL(a, b) {
              return this.qh(this.base.pL(a && this.Tw(a), this.ML(b)));
            }
            insertBefore(a, b) {
              return this.qh(
                this.base.insertBefore(a && this.Tw(a), this.ML(b))
              );
            }
            EH(a, b) {
              return this.base.EH(a && this.Tw(a), b.map(this.ML)).map(this.qh);
            }
            delete(a) {
              this.base.delete(this.Tw(a));
            }
            TG(a) {
              this.base.TG(a && ((b) => a(this.qh(b))));
            }
            moveBefore(a, b) {
              this.base.moveBefore(a && this.Tw(a), this.Tw(b));
            }
            Jr(a) {
              return new __c.gM(this, a);
            }
            map(a) {
              return this.base.map((b, c) => a(this.qh(b), c));
            }
            flatMap(a) {
              return this.base.flatMap((b, c) => a(this.qh(b), c));
            }
            filter(a) {
              return this.base.filter((b, c) => a(this.qh(b), c)).map(this.qh);
            }
            forEach(a) {
              this.base.forEach((b, c) => a(this.qh(b), c));
            }
            reduce(a, b) {
              return this.base.reduce((c, d) => a(c, this.qh(d)), b);
            }
            some(a) {
              return this.base.some((b) => a(this.qh(b)));
            }
            every(a) {
              return this.base.every((b) => a(this.qh(b)));
            }
            constructor(a, b, c) {
              this.base = a;
              this.ML = b;
              this.qh = c;
              cQc.G(this);
            }
          };
        var u6 = class {
            jH(a) {
              return new lWc(this, a);
            }
            $V(a) {
              return new mWc(this, a);
            }
            VK(a) {
              return new nWc(this, a);
            }
            toString() {
              return this.s ?? (this.s = this.$da());
            }
          },
          sQc = class extends u6 {
            jH(a) {
              return new oWc(a);
            }
            $V() {
              throw Error();
            }
            VK() {
              throw Error();
            }
            $da() {
              return "(global)";
            }
          },
          oWc = class extends u6 {
            $da() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          lWc = class extends u6 {
            $da() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          mWc = class extends u6 {
            $da() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          nWc = class extends u6 {
            $da() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          rQc = class {
            error(a, b) {
              return Error(
                `widget '${this.n1b}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.n1b = a;
            }
          },
          vQc = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            ref: "object",
            fill: "object",
            stroke: "object",
            text2: "object",
          },
          lQc = new Set(["string", "boolean", "int32"]),
          wQc = {
            font: "font",
            media: "media",
            video: "video",
            audio: "audio",
            embed: "embed",
            scene: "scene",
            blueprint: "blueprint",
          };
        var pWc = class {
          constructor(a) {
            this.rPa = a;
            this.k0a = new Map();
          }
        };
        var qWc = class {
          static G(a) {
            L(a, { iua: h6.shallow });
          }
          constructor(a) {
            this.c0a = a;
            this.iua = (qWc.G(this), new Map());
          }
        };
        var EQc = { NTa: "null", qga: "*" };
        var rWc = () => [...document.getElementsByTagName("iframe")],
          uWc = class {
            dispose() {
              this.disposed ||
                ((this.disposed = !0),
                this.s6a.removeEventListener("message", this.i5),
                sWc.delete(this.Lq),
                this.o$.clear());
            }
            constructor(a, b, c = DQc) {
              var d = window;
              this.options = a;
              this.J = b;
              this.s6a = d;
              this.MTa = c;
              this.QEb = rWc;
              this.disposed = !1;
              this.i5 = async (e) => {
                const f = G5()();
                try {
                  const q = e.source,
                    r = e.data;
                  if (q) {
                    var g = r?.clientId,
                      h = r?.sandboxCommsSource ?? r?.source;
                    if (!h?.startsWith("react-")) {
                      var k = this.QEb().find((t) => t.contentWindow === q);
                      if (k) {
                        var l = k.getAttribute("data-process-id");
                        if (l && l.startsWith(this.Lq)) {
                          var m = y(k.contentWindow),
                            n = this.MTa(e, k);
                          if (n.valid) {
                            var p = FQc(r, g);
                            if (p.ok) {
                              e = { type: "connection_request_not_matched" };
                              for (const t of this.o$)
                                if (
                                  ((e = f.r(
                                    await f.s(
                                      t({
                                        Twb: { FRb: l, clientId: g },
                                        iframe: k,
                                      })
                                    )
                                  )),
                                  e.type !== "connection_request_not_matched")
                                )
                                  break;
                              switch (e.type) {
                                case "connection_request_matched":
                                  m.postMessage(
                                    {
                                      source: "parent",
                                      sandboxCommsSource: "parent",
                                      clientId: g,
                                    },
                                    n.qga,
                                    [e.port]
                                  );
                                  break;
                                case "connection_request_not_matched":
                                  this.J.JC(
                                    "received an init message which no listener accepted",
                                    {
                                      extra: new Map([
                                        ["processId", l],
                                        ["data.source", h],
                                        ["data.clientId", g],
                                      ]),
                                    }
                                  );
                                  this.options.G5b && k.remove();
                                  break;
                                case "already_connected":
                                  this.J.JC(
                                    "received an init message for a processId & clientId that is already connected",
                                    {
                                      extra: new Map([
                                        ["processId", l],
                                        ["data.source", h],
                                        ["data.clientId", g],
                                      ]),
                                    }
                                  );
                                  break;
                                default:
                                  throw new z(e);
                              }
                            } else
                              this.J.JC(p.error, {
                                extra: new Map([
                                  ["data.source", h],
                                  ["data.clientId", g],
                                ]),
                              });
                          } else
                            n.error &&
                              this.J.info(n.error.message, {
                                extra: n.error.extra,
                              });
                        }
                      }
                    }
                  }
                } finally {
                  f.s();
                }
              };
              this.Lq = this.options.Lq ?? `iframe_host_${tWc++}`;
              this.o$ = new Set();
              x(
                !sWc.has(this.Lq),
                `A IFrameHostConnector has already been created with the prefix ${this.options.Lq}`
              );
              sWc.add(this.Lq);
              this.s6a.addEventListener("message", this.i5);
            }
          },
          tWc = 0,
          sWc = new Set();
        var H5 = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.XRb = a.message;
            Object.setPrototypeOf(this, H5.prototype);
          }
        };
        var vWc = class {
          constructor(a, b, c) {
            this.wW = a;
            this.port = b;
            this.J = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.za)();
              } catch (e) {
                return this.J.Xb(e), Ba(e);
              }
            };
            this.SOb = (d) => {
              this.J.Xb(d);
            };
            this.i5 = ({ data: d }) => {
              if (d)
                try {
                  this.wW.bSb(d);
                } catch (e) {
                  this.J.Xb(e);
                }
              else
                this.J.error(
                  new H5({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.i5;
            this.port.onmessageerror = this.SOb;
          }
        };
        var GQc = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          wWc = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.cf);
              this.kTb(a);
            }
            reject(a) {
              clearTimeout(this.cf);
              this.Ffb(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.cf);
              this.cf = setTimeout(
                o5.wrap(() => {
                  HQc(this);
                }),
                Math.max(this.timeoutMs - 500, 500)
              );
            }
            constructor() {
              this.timeoutMs = 5e3;
              this.p = new Promise((a, b) => {
                this.kTb = a;
                this.Ffb = b;
              });
              this.setTimeout();
            }
          };
        var xWc = class {
          request(a, b) {
            const c = this.$db,
              d = new wWc(),
              e = this.YSb(),
              f = (async function () {
                const g = G5()();
                try {
                  c.set(e, { path: a, $Sb: d });
                  try {
                    const h = g.r(await g.s(d.promise()));
                    return (0, __c.za)(h);
                  } catch (h) {
                    return (
                      g.r(),
                      h instanceof GQc
                        ? Ba(
                            new H5({
                              code: "internal_error",
                              message: `Comms promise timed out (${a}).`,
                            })
                          )
                        : Ba(h)
                    );
                  } finally {
                    c.delete(e);
                  }
                } finally {
                  g.s();
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.J.Xb(b.error, {
                gf: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.J = b;
            this.YSb = __c.sp;
            this.$db = new Map();
          }
        };
        var yWc = class {
          handle(a, b) {
            if (this.b6.has(a))
              throw new H5({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.b6.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.rea = a;
            this.J = b;
            this.WSb = !0;
            this.yzb = c;
            this.b6 = new Map();
            this.eCb = new Set();
          }
        };
        var fRc = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.b6.handle(c, d);
              a = new zWc(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        { path: g, $Sb: h } = d.$db.get(e) || {};
                      if (h)
                        switch (f) {
                          case "response":
                            h.resolve(c.payload);
                            break;
                          case "ack":
                            h.reset(2e4);
                            break;
                          case "error":
                            d.J.V8({
                              level: "info",
                              category: "sandbox_comms",
                              message: "Error response received",
                              data: { path: g ?? "unknown" },
                            });
                            h.reject(
                              new H5({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new z(c);
                        }
                      else
                        f !== "ack" &&
                          d.J.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      JQc(this.b6, c);
                      break;
                    default:
                      throw new z(c);
                  }
                },
                a,
                b.Jd("bus")
              );
              this.client = new xWc(a.NI, b.Jd("client"));
              this.b6 = new yWc(a, b.Jd("requestHandler"));
            }
          },
          zWc = class {
            constructor(a, b, c) {
              this.Ooa = a;
              this.NI = (d, e, f) =>
                this.L9.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.$Ob = (d) => {
                switch (d.type) {
                  case "ack":
                    this.Ooa({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.Ooa({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.Ooa({
                      type: "response",
                      requestId: d.requestId,
                      payload: d.payload,
                    });
                    break;
                  case "request":
                    this.Ooa({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      payload: d.payload,
                    });
                    break;
                  default:
                    throw new z(d);
                }
              };
              this.L9 = new vWc({ bSb: this.$Ob }, b, c);
            }
          };
        var KQc = G(() => ({}));
        __c.AWc = G(() => ({ baa: W(1), Nd: W(2) }));
        __c.J5 = G(
          () => ({
            $i: X("documentId", 1),
            nh: X("elementId", 2),
            Fob: F("websiteContext", 3, __c.AWc),
            vV: X("documentExtension", 5),
            Vpa: __c.FK("isPreview", 4),
          }),
          { Hh: 0 }
        );
        var LQc = G(() => ({}));
        __c.K5 = G(() => ({}));
        var BWc = G(() => ({ width: wK(1), height: wK(2) }));
        var CWc = G(
          () => ({
            p0a: X("cssFontFamily", 1),
            id: X("id", 2),
            src: X("src", 3),
            weight: X("weight", 4),
            style: X("style", 5),
            size: __c.zK("size", 6),
          }),
          { Hh: 0 }
        );
        var BRc = G(
          () => ({
            textContent: X("textContent", 1),
            background: X("background", 2),
            Wtb: F("backgroundDimensions", 7, BWc),
            color: X("color", 3),
            font: F("font", 4, CWc),
            Or: X("imageSrc", 5),
            Ja: X("altText", 6),
          }),
          { Hh: 0 }
        );
        __c.DWc = G(() => ({ config: (0, __c.JK)("config", 1, BRc) }), {
          Hh: 0,
        });
        var FRc = G(() => ({}));
        var EWc = __c.eb(() => [1, 2]);
        var NQc = G(() => ({ status: __c.Ra("status", 1, EWc) }), { Hh: 0 });
        __c.OQc = G(() => ({}), { Hh: 0 });
        var FWc = G(
          () => ({
            top: wK("top", 1),
            left: wK("left", 2),
            width: wK("width", 3),
            height: wK("height", 4),
          }),
          { Hh: 0 }
        );
        var GWc = G(
          () => ({
            i3a: W("entityId", 1),
            X5b: __c.Oa("boundingRect", 2, FWc),
          }),
          { Hh: 0 }
        );
        var PQc = G(() => ({ selection: F("selection", 1, GWc) }), { Hh: 0 });
        __c.L5 = G(() => ({}));
        var QQc = G(() => ({ rect: F("rect", 1, FWc) }), { Hh: 0 });
        __c.M5 = G(() => ({}));
        var RQc = G(
          () => ({ i3a: W("entityId", 1), textContent: W("textContent", 2) }),
          { Hh: 0 }
        );
        __c.SQc = G(() => ({}));
        var hRc = class {
          async G6(a) {
            const b = G5()();
            try {
              const c = b.r(
                await b.s(
                  this.f$.request("SET_EDITING_CONFIG", __c.DWc.serialize(a))
                )
              );
              if (!c.ok)
                throw Error(
                  `Encountered an error while sending ${"SET_EDITING_CONFIG"} request: ${
                    c.error
                  }`
                );
              if (c.value == null)
                throw Error("SET_EDITING_CONFIG: Result cannot be empty");
              return FRc.fa(c.value);
            } finally {
              b.s();
            }
          }
          constructor(a) {
            this.f$ = a;
          }
        };
        __c.v6 = G(
          () => ({
            type: __c.E("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
            id: W("id", 1),
            url: W("url", 4),
          }),
          { Hh: 0 }
        );
        __c.w6 = G(
          () => ({
            type: __c.E("type", "RECOLORABLE", 1, "RECOLORABLE"),
            id: W("id", 1),
            value: W("value", 2),
          }),
          { Hh: 0 }
        );
        var HWc = G(
          () => ({
            borderRadius: wK("borderRadius", 1),
            borderWidth: wK("borderWidth", 2),
          }),
          { Hh: 0 }
        );
        __c.IWc = G(
          () => ({
            type: __c.E("type", "BORDERABLE", 2, "BORDERABLE"),
            id: W("id", 1),
            value: __c.Oa("value", 2, HWc),
          }),
          { Hh: 0 }
        );
        __c.JWc = G(() => ({ id: W("id", 1), value: W("value", 2) }), {
          Hh: 0,
        });
        __c.x6 = G(
          () => ({
            type: __c.E("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
            size: wK("size", 21),
          }),
          { Hh: 0 }
        );
        var UQc = G(() => ({ config: W("config", 1) }), { Hh: 0 });
        __c.VQc = G(
          () => ({ config: X("config", 1), WV: F("fontEditable", 2, __c.v6) }),
          { Hh: 0 }
        );
        var WQc = G(
          () => ({
            config: W("config", 1),
            N5: __c.Qa("recolorables", 4, __c.w6),
            Fub: __c.Qa("borderables", 5, __c.IWc),
            WV: F("fontEditable", 6, __c.v6),
            GAb: __c.Qa("editPanelValues", 7, __c.JWc),
            SK: F("fontSizeable", 8, __c.x6),
          }),
          { Hh: 0 }
        );
        __c.XQc = G(() => ({}));
        var KWc = G(
          () => ({
            scrollWidth: wK("scrollWidth", 1),
            scrollHeight: wK("scrollHeight", 2),
            offsetWidth: wK("offsetWidth", 3),
            offsetHeight: wK("offsetHeight", 4),
          }),
          { Hh: 0 }
        );
        var YQc = G(() => ({ body: __c.Oa("body", 1, KWc) }), { Hh: 0 });
        var gRc = class {
          constructor(a) {
            this.f$ = a;
          }
        };
        var LWc = G(
          () => ({
            scrollWidth: wK("scrollWidth", 1),
            scrollHeight: wK("scrollHeight", 2),
            offsetWidth: wK("offsetWidth", 3),
            offsetHeight: wK("offsetHeight", 4),
          }),
          { Hh: 0 }
        );
        var $Qc = G(() => ({ body: __c.Oa("body", 1, LWc) }), { Hh: 0 });
        var bRc = G(() => ({}));
        __c.N5 = G(() => ({ $i: X("documentId", 1), nh: X("elementId", 2) }), {
          Hh: 0,
        });
        var cRc = G(() => ({ mac: __c.xK(1), TD: W(2), message: W(3) }));
        __c.O5 = G(() => ({}));
        var MWc = class {
          constructor(a, b) {
            this.M3 = a;
            this.J = b;
            this.d1 = new Map();
          }
        };
        var NWc = $5(function ({
          Lq: a,
          className: b,
          url: c,
          embed: d,
          qQa: e,
          T5: f,
          x7: g,
          Zbb: h,
          jnc: k = jRc,
        }) {
          const l = a6(() => `${a}-${c}-${sp()}`, [c, a]),
            {
              id: m,
              src: n,
              sandbox: p,
              allow: q,
              allowFullscreen: r,
            } = k(y(d.html));
          MSc(() => {
            f(l);
            return () => {
              g(l);
            };
          }, [f, g, l]);
          return Q5("div", {
            className: b,
            children: Q5("div", {
              ref: (t) => {
                t && e?.(t);
              },
              className: "wI2uWQ",
              children: Q5("iframe", {
                id: m,
                className: "x3xE7g",
                "data-process-id": l,
                src: n,
                title: d.title || K("gs+cqw"),
                sandbox: p,
                allow: q,
                allowFullScreen: r,
                onLoad: h,
                onError: h,
              }),
            }),
          });
        });
        var kRc = c6(function ({
          url: a,
          Poa: b,
          bk: c,
          eI: d,
          Lq: e,
          CU: f,
          $A: g,
          Ec: h,
          so: k,
          jq: l,
          cb: m,
        }) {
          const { T5: n, x7: p } = a6(
            () => ({
              T5: (q) =>
                iRc(f, q, {
                  L6: b.data,
                  Qua: b.element,
                  Pua: b.wp,
                  Rua: b.zY,
                  M6: b.telemetry,
                }),
              x7: (q) => eRc(f, q),
            }),
            [b, f]
          );
          return Q5(__c.Fz, {
            url: a,
            store: k,
            Sk: l,
            $A: g,
            cb: m,
            Vfa: h > 10,
            bk: c || !1,
            eI: d,
            GSb: (q, r, t) =>
              Q5(NWc, {
                className: q,
                Lq: e,
                url: a,
                embed: r,
                qQa: t,
                T5: n,
                x7: p,
              }),
          });
        });
        var OWc;
        OWc = class {};
        __c.PWc = class extends OWc {
          map(a, b) {
            b = this.$S(a.textContent, b);
            b = this.zN(a.background, b);
            b = this.AN(a.color, b);
            b = this.xob(a.fontFamily, b);
            b = this.Aob(a.fontWeight, b);
            b = this.zob(a.fontStyle, b);
            b = this.yob(a.fontSize, b);
            b = this.CN(a.Or, b);
            return (b = this.XS(a.Ja, b));
          }
        };
        var QWc, RWc, oRc, SWc, sRc;
        QWc = class {};
        RWc = class extends QWc {
          yN(a) {
            this.zN(a.background);
            this.AN(a.color);
            this.X7(a);
            this.CN(a.Or);
          }
        };
        __c.xRc = class extends QWc {
          map(a, b) {
            b = this.$S(a.textContent, b);
            b = this.zN(a.background, b);
            b = this.AN(a.color, b);
            b = this.X7(a, b);
            b = this.CN(a.Or, b);
            return (b = this.XS(a.Ja, b));
          }
        };
        oRc = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008000",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        };
        SWc = {
          100: "thin",
          200: "extralight",
          300: "light",
          400: "normal",
          500: "medium",
          600: "semibold",
          700: "bold",
          800: "ultrabold",
          900: "heavy",
          normal: "normal",
          bold: "bold",
        };
        sRc = class extends __c.PWc {
          $S(a, b) {
            return { ...b, textContent: a };
          }
          zN(a, b) {
            a
              ? a.startsWith("canva://")
                ? ((a = rRc(a)),
                  x(a.type === 1),
                  (a = {
                    ...BE,
                    image: {
                      ...__c.MJb,
                      nb: void 0,
                      media: { type: "RESOLVED", ...a.media },
                    },
                  }))
                : (a = nRc(a))
              : (a = void 0);
            return { ...b, background: a };
          }
          AN(a, b) {
            return { ...b, color: a ? nRc(a) : void 0 };
          }
          xob(a, b) {
            a != null
              ? /^Y[A-Za-z0-9_-]{10},\d+$/i.test(a)
                ? ((a = __c.wp(a)),
                  (a = {
                    type: 1,
                    fontFamily: { id: a.id, version: a.version },
                  }))
                : (a = { type: 2, fontFamily: a })
              : (a = void 0);
            return { ...b, fontFamily: a };
          }
          Aob(a, b) {
            if (a) {
              {
                const c = SWc[a];
                if (c != null) a = c;
                else throw Error(`Unsupported fontWeight: ${a}`);
              }
            } else a = void 0;
            return { ...b, fontWeight: a };
          }
          zob(a, b) {
            if (a) {
              if (a !== "normal" && a !== "italic")
                throw Error(`Unsupported fontStyle: ${a}`);
            } else a = void 0;
            return { ...b, fontStyle: a };
          }
          yob(a, b) {
            return { ...b, fontSize: a };
          }
          CN(a, b) {
            return { ...b, Or: a != null ? rRc(a) : void 0 };
          }
          XS(a, b) {
            return { ...b, Ja: a };
          }
        };
        var uRc = class extends RWc {
            $S() {}
            zN(a) {
              a && this.ji(a);
            }
            AN(a) {
              a && this.ji(a);
            }
            X7({ fontFamily: a }) {
              switch (a?.type) {
                case 2:
                case void 0:
                  break;
                case 1:
                  this.mUa({ type: "font", ...a.fontFamily });
                  break;
                default:
                  throw new z(a);
              }
            }
            CN(a) {
              switch (a?.type) {
                case 2:
                case void 0:
                  break;
                case 1:
                  this.mUa({ type: "media", ...a.media });
                  break;
                default:
                  throw new z(a);
              }
            }
            XS() {}
            ji(a) {
              a.image && this.oxa(a.image);
            }
            oxa(a) {
              switch (a.media.type) {
                case "RESOLVED":
                  this.mUa({
                    type: "media",
                    id: a.media.id,
                    version: a.media.version,
                  });
                  break;
                case "UNRESOLVED":
                  break;
                default:
                  throw new z(a.media);
              }
            }
          },
          DRc = Object.freeze({
            [1]: 50,
            [2]: 75,
            [3]: 150,
            [4]: 200,
            [5]: 550,
            [6]: 800,
            [7]: 1600,
            [8]: 2400,
            [9]: Number.MAX_SAFE_INTEGER,
            [10]: Number.MAX_SAFE_INTEGER,
          });
        var IRc = $5(function ({
          className: a,
          url: b,
          embed: c,
          config: d,
          oc: e,
          Ba: f,
          Zbb: g,
          Lq: h,
          CU: k,
          Poa: l,
          J: m,
        }) {
          const [n, p] = f6(null),
            q = gTc((u) => {
              p(u);
              return {
                r2a: {
                  R5a: () => new __c.OQc(),
                  pca: () => new __c.L5(),
                  N5a: () => new __c.M5(),
                  U5a: () => new __c.SQc(),
                },
              };
            }, []);
          MSc(() => {
            (async () => {
              const u = G5()();
              try {
                try {
                  if (d && n) {
                    const w = [
                      ...new Map(
                        [...d.entries()].map(([A, B]) => [
                          A,
                          __c.CRc(
                            B,
                            { oc: e, Ba: f },
                            A === "background" ? 7 : 6
                          ),
                        ])
                      ).entries(),
                    ].map(async ([A, B]) => {
                      const C = G5()();
                      try {
                        return [A, C.r(await C.s(B))];
                      } finally {
                        C.s();
                      }
                    });
                    u.r(
                      await u.s(
                        n.G6(
                          new __c.DWc({
                            config: new Map(u.r(await u.s(Promise.all(w)))),
                          })
                        )
                      )
                    );
                  }
                } catch (w) {
                  u.r(), m.Xb(w);
                }
              } finally {
                u.s();
              }
            })();
          }, [d, n, e, f, m]);
          const { T5: r, x7: t } = a6(
            () => ({
              T5: (u) =>
                iRc(k, u, {
                  L6: l.data,
                  Qua: l.element,
                  Pua: q,
                  Rua: l.zY,
                  M6: l.telemetry,
                }),
              x7: (u) => eRc(k, u),
            }),
            [l, k, q]
          );
          return Q5(NWc, {
            className: a,
            Lq: h,
            url: b,
            embed: c,
            T5: r,
            x7: t,
            Zbb: g,
          });
        });
        var HRc = class {
          Up(a) {
            return `${a.id},${a.version}`;
          }
          async K2(a) {
            const b = G5()();
            try {
              const c = a
                  .map((e) => {
                    const f = this.Up(e);
                    return [
                      e,
                      this.PR.has(f)
                        ? Promise.resolve(this.PR.get(f))
                        : this.X2.Dn(e),
                    ];
                  })
                  .map(async ([e, f]) => {
                    const g = G5()();
                    try {
                      return [e, g.r(await g.s(f))];
                    } finally {
                      g.s();
                    }
                  }),
                d = b.r(await b.s(Promise.all(c)));
              d.forEach(([e, f]) => this.PR.set(this.Up(e), f));
              return d.map(([, e]) => e);
            } finally {
              b.s();
            }
          }
          gB(a) {
            return this.PR.get(this.Up(a));
          }
          AY(a) {
            return __c.yp(a);
          }
          constructor(a) {
            this.X2 = a;
            this.PR = new Map();
          }
        };
        var GRc = class {
          Up(a) {
            return `${a.id},${a.version}`;
          }
          j3(a) {
            return this.Yta.get(this.Up(a))?.files ?? [];
          }
          async HL(a) {
            const b = G5()();
            try {
              const c = this.Up(a);
              this.Yta.set(
                c,
                b.r(
                  await b.s(
                    this.Yta.has(c)
                      ? Promise.resolve(this.Yta.get(c))
                      : this.IQ.Dn(a)
                  )
                )
              );
            } finally {
              b.s();
            }
          }
          constructor(a) {
            this.IQ = a;
            this.Yta = new Map();
          }
        };
        var TWc = 0;
        var ORc = class {
          dm(a) {
            this.loading ||
              (this.loading = (a ?? Promise.resolve()).then(
                o5.wrap(() => this.load())
              ));
            return this.loading;
          }
          constructor(a, b) {
            this.id = a;
            this.gm = b;
          }
        };
        var BSc = class {
            P$(a, b, c) {
              const d = a.Ic;
              x(d.type !== "body", "Unexpected body context.");
              switch (d.type) {
                case "fixed-page":
                  return {
                    page: this.fk.c5a(d),
                    S: new y6(a),
                    nh: a.C.id,
                    Ec: b,
                    zp: c,
                  };
                case "concatenated-fixed-page":
                  return {
                    page: this.fk.R4a(d),
                    S: new y6(a),
                    nh: a.C.id,
                    Ec: b,
                    zp: c,
                  };
                case "controlled-page":
                  return {
                    page: this.fk.T4a(d),
                    S: new y6(a),
                    nh: a.C.id,
                    Ec: b,
                    zp: c,
                  };
                case "video-page":
                  throw new __c.Ei();
                case "responsive-page":
                  return {
                    page: this.fk.u5a(d),
                    S: new y6(a),
                    nh: a.C.id,
                    Ec: b,
                    zp: c,
                  };
                default:
                  throw new z(d);
              }
            }
            constructor(a, b) {
              this.aua = a;
              v(
                b.Eg === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.Da = __c.ci(b);
              this.fk = new UWc(this.aua, this.Da);
            }
          },
          y6 = class {
            get top() {
              switch (this.container.type) {
                case "controlled-item":
                  return 0;
                case "controlled-page":
                  return 0;
                case "controlled-element":
                  return this.container.C.top;
                default:
                  throw new z(this.container);
              }
            }
            get left() {
              switch (this.container.type) {
                case "controlled-item":
                  return 0;
                case "controlled-page":
                  return 0;
                case "controlled-element":
                  return this.container.C.left;
                default:
                  throw new z(this.container);
              }
            }
            get I() {
              switch (this.container.type) {
                case "controlled-item":
                  return this.container.C.ag?.width || 0;
                case "controlled-page":
                  return 0;
                case "controlled-element":
                  return this.container.C.I;
                default:
                  throw new z(this.container);
              }
            }
            get O() {
              switch (this.container.type) {
                case "controlled-item":
                  return this.container.C.ag?.height || 0;
                case "controlled-page":
                  return 0;
                case "controlled-element":
                  return this.container.C.O;
                default:
                  throw new z(this.container);
              }
            }
            get width() {
              switch (this.container.type) {
                case "controlled-item":
                  return 0;
                case "controlled-page":
                  return 0;
                case "controlled-element":
                  return this.container.C.width;
                default:
                  throw new z(this.container);
              }
            }
            get height() {
              switch (this.container.type) {
                case "controlled-item":
                  return 0;
                case "controlled-page":
                  return 0;
                case "controlled-element":
                  return this.container.C.height;
                default:
                  throw new z(this.container);
              }
            }
            get rotation() {
              switch (this.container.type) {
                case "controlled-item":
                  return 0;
                case "controlled-page":
                  return 0;
                case "controlled-element":
                  return this.container.C.rotation;
                default:
                  throw new z(this.container);
              }
            }
            constructor(a) {
              this.container = a;
            }
          },
          z6 = class {
            NP() {
              return this.Vy(this.page);
            }
            get id() {
              return this.page.C.id;
            }
            get title() {
              return this.page.C.title;
            }
            get anchor() {
              return this.page.C.anchor;
            }
            get W7a() {
              return this.page.C.Mg;
            }
            constructor(a, b) {
              this.page = a;
              this.Vy = b;
            }
          },
          VWc = class extends z6 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          WWc = class extends z6 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          XWc = class extends z6 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "controlled";
            }
          },
          YWc = class extends z6 {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          ZWc = class {
            get id() {
              return this.aua?.id;
            }
            get extension() {
              return this.aua?.extension;
            }
            get title() {
              return this.Da.C.title;
            }
            get language() {
              return this.Da.C.language;
            }
            constructor(a, b) {
              this.aua = a;
              this.Da = b;
            }
          },
          UWc = class extends ZWc {
            static G(a) {
              L(a, {
                Z: r4({ equals: eTc.shallow }),
                ibb: r4({ equals: eTc.shallow }),
              });
            }
            get Z() {
              return this.Da.C.Z.map((a) => this.cFb(this.Da.ve(a)));
            }
            get ibb() {
              return this.Da.C.Z.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.up = a;
              this.Da = b;
              this.type = (UWc.G(this), "fixed");
              this.c5a = b6((c) => new VWc(c, this.Vy, this));
              this.R4a = b6((c) => new WWc(c, this.Vy, this));
              this.T4a = b6((c) => new XWc(c, this.Vy, this));
              this.u5a = b6((c) => new YWc(c, this.Vy, this));
              this.cFb = b6((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.c5a(c);
                  case "concatenated-fixed-page":
                    return this.R4a(c);
                  case "controlled-page":
                    return this.T4a(c);
                  case "video-page":
                    throw new __c.Ei();
                  case "responsive-page":
                    return this.u5a(c);
                  default:
                    throw new z(c);
                }
              });
              this.Vy = b6((c) => {
                c = this.Da.C.Z.has(c.C) ? c.C : void 0;
                return c != null ? this.ibb.indexOf(c) : -1;
              });
            }
          };
        var DSc = class {},
          $Wc = class extends __c.wU {
            ja(...a) {
              return a.length === 0 ? this.empty : a.flat();
            }
            ZKb(a) {
              return [{ Ac: a.Ac, Zc: a.Zc }];
            }
            aLb(a) {
              return [{ Ac: a.Ac, Zc: a.Zc }];
            }
            cLb(a) {
              return [{ Ac: a.Ac, Zc: a.Zc }];
            }
            oLb(a) {
              return __c.Dh(a) ? [{ Ac: a.Ac, Zc: a.Zc }] : this.empty;
            }
            constructor() {
              super();
              this.ba = {};
              this.empty = [];
            }
          },
          aXc = class extends __c.wU {
            ja(...a) {
              return a.length === 0 ? this.empty : a.flat();
            }
            YKb(a) {
              return [{ type: "controlled-element", C: a }];
            }
            $Kb(a) {
              return [{ type: "controlled-item", C: a }];
            }
            bLb(a) {
              return [{ type: "controlled-page", C: a }];
            }
            nLb(a) {
              return __c.Ch(a)
                ? [{ type: "controlled-element", C: a }]
                : this.empty;
            }
            constructor() {
              super();
              this.ba = {};
              this.empty = [];
            }
          };
        new $Wc();
        new aXc();
        var bXc = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          Ei() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            U5();
          },
          previous() {
            U5();
          },
          Ne() {
            U5();
          },
          wq() {
            U5();
          },
          has() {
            return !1;
          },
          Jr() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var cXc = Symbol.iterator,
          uSc = class {
            static G(a) {
              L(a, { oo: r4, ot: r4 });
            }
            get oo() {
              return this.wtb().map((a) => {
                let b = this.z6a.get(a);
                b == null && ((b = `${this.GGb++}`), this.z6a.set(a, b));
                return { id: b, ref: a };
              });
            }
            get ot() {
              const a = new Map();
              this.oo.forEach((b, c) => b && a.set(b.ref, c));
              return a;
            }
            hm(a) {
              return y(this.ot.get(a), "ref not found");
            }
            get empty() {
              return !this.oo.length;
            }
            count() {
              return this.oo.length;
            }
            toArray() {
              return this.oo.map((a) => a.ref);
            }
            Ei() {
              return new Map(this.map((a, b) => [b, a]));
            }
            get TV() {
              return this.oo[0]?.ref;
            }
            get jX() {
              return this.oo[this.oo.length - 1]?.ref;
            }
            first(a) {
              return a ? this.oo.find((b) => a(b.ref))?.ref : this.TV;
            }
            last(a) {
              if (!a) return this.jX;
              const b = this.oo;
              for (let c = b.length - 1; c >= 0; c--) {
                const d = b[c];
                if (a(d.ref)) return d.ref;
              }
            }
            next(a, b) {
              const c = this.oo;
              for (a = this.hm(a) + 1; a < c.length; a++) {
                const d = c[a];
                if (!b || b(d.ref)) return d.ref;
              }
            }
            previous(a, b) {
              const c = this.oo;
              for (a = this.hm(a) - 1; a >= 0; a--) {
                const d = c[a];
                if (!b || b(d.ref)) return d.ref;
              }
            }
            Ne(a, b) {
              a = this.ot.get(a);
              b = this.ot.get(b);
              v(a != null);
              v(b != null);
              return a < b ? -1 : a > b ? 1 : 0;
            }
            wq(a) {
              return this.oo[this.hm(a)].id;
            }
            has(a) {
              return this.ot.has(a);
            }
            Jr(a) {
              return new __c.gM(this, a);
            }
            map(a) {
              return this.oo.map(({ ref: b, id: c }) => a(b, c));
            }
            flatMap(a) {
              return this.oo.flatMap(({ ref: b, id: c }) => a(b, c));
            }
            filter(a) {
              return this.oo.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
            }
            forEach(a) {
              this.oo.forEach((b, c) => a(b.ref, b.id, c));
            }
            reduce(a, b) {
              return this.oo.reduce((c, d) => a(c, d.ref, d.id), b);
            }
            some(a) {
              return this.oo.some((b) => a(b.ref, b.id));
            }
            every(a) {
              return this.oo.every((b) => a(b.ref, b.id));
            }
            [cXc]() {
              return this.toArray()[Symbol.iterator]();
            }
            constructor(a) {
              this.wtb = a;
              this.GGb = (uSc.G(this), 0);
              this.z6a = new WeakMap();
            }
          };
        var nSc = class {
          uc(a) {
            let b = this.store.get(a);
            if (b == null) {
              if (this.store.has(a)) return b;
              b = this.create();
              this.store.set(a, b);
            }
            return b;
          }
          constructor(a) {
            this.create = a;
            this.store = new WeakMap();
          }
        };
        var zSc = class {
          add(a, b) {
            let c = this.store.get(a);
            c || ((c = h6.set(void 0, { deep: !1 })), this.store.set(a, c));
            c.add(b);
          }
          get(a) {
            return this.store.get(a);
          }
          remove(a, b) {
            const c = this.store.get(a);
            c && (c.delete(b), c.size === 0 && this.store.delete(a));
          }
          constructor() {
            this.store = new __c.FC();
          }
        };
        var gSc = new Set(),
          hSc = { Iy: () => ({ Oa: bXc }) },
          CSc = class {
            static G(a) {
              L(a, { xY: h6.shallow });
            }
            O2(a) {
              return this.xY.get(a)?.C;
            }
            constructor(a, b, c, d, e, f, g, h) {
              this.Da = a;
              this.rPa = b;
              this.HS = c;
              this.aDa = d;
              this.J = e;
              this.sxa = f;
              this.Jf = g;
              this.SAb = h;
              this.xY = (CSc.G(this), new Map());
              this.h3a = new WeakMap();
            }
          },
          xSc = (a, b, c, d, e, f) => {
            const g = e ? { FV: e, model: b, Ec: c } : null;
            return {
              ...a,
              $xa: (h) => Q5(a.$xa, { ...h, Xub: f || !1 }),
              vT: (h) => Q5(a.vT, { ...h, eo: a.eo, model: b, Ec: c }),
              cja: (h) => Q5(a.cja, { ...h, Ur: d }),
              eo: (h) => Q5(a.eo, { ...h, Ec: c, model: b }),
              mT: (h) => Q5(a.mT, { ...h, model: b }),
              $v: (h) => g && Q5(a.$v, { ...h, ...g }),
              gy: (h) => g && Q5(a.gy, { ...h, ...g }),
              Hs: (h) => g && Q5(a.Hs, { ...h, ...g }),
              PN: (h) => g && Q5(a.PN, { ...h, ...g }),
              QN: (h) => g && Q5(a.QN, { ...h, ...g }),
              ey: (h) => g && Q5(a.ey, { ...h, ...g }),
            };
          },
          ySc = (a, b) => ({
            ...a,
            zj: (c) => Q5(a.zj, { ...c, scale: b || 1 }),
          });
        var cTc = class {
          static G(a) {
            L(a, { eo: h6.ref, sya: h6.ref, mT: h6.ref, vT: h6.ref });
          }
          constructor() {
            this.eo = (cTc.G(this), void 0);
            this.vT = this.mT = this.sya = void 0;
          }
        };
        var dXc = class extends fTc {
          render() {
            const {
              children: a,
              component: b = "div",
              YRb: c,
              csa: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.gsb;
                return f;
              }, {}));
            return Q5(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.csa && QSc(this);
          }
          componentDidUpdate() {
            this.props.csa && QSc(this);
          }
          componentWillUnmount() {
            this.yT && (this.yT(), (this.yT = null));
          }
          constructor(...a) {
            super(...a);
            this.iza = this.yT = null;
            this.gsb = (b) => {
              this.iza = b.nativeEvent;
            };
            this.AWa = (b) => {
              const c = this.props.csa,
                d = this.iza === b;
              c && !d && c(b);
              this.iza = null;
            };
          }
        };
        var TSc = (a) =>
          Q5(dXc, {
            YRb: ["onMouseDown", "onTouchStart"],
            cAb: ["mousedown", "touchstart"],
            csa: a.dR,
            children: a.children,
          });
        var RSc = class {
            static G(a) {
              L(a, { bk: h6.ref });
            }
            constructor() {
              this.bk = (RSc.G(this), !0);
            }
          },
          SSc = class {
            static G(a) {
              L(a, {
                onDoubleClick: d6.bound,
                onTouchEnd: d6.bound,
                reset: d6.bound,
              });
            }
            onDoubleClick() {
              this.unblock("double_click");
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.xZ
                  ? (window.clearTimeout(this.xZ),
                    (this.xZ = void 0),
                    this.unblock("double_tap"))
                  : (this.xZ = window.setTimeout(
                      o5.wrap(() => (this.xZ = void 0)),
                      300
                    )));
            }
            reset() {
              this.store.bk = !0;
            }
            S0() {
              this.xZ && window.clearTimeout(this.xZ);
            }
            unblock(a) {
              this.store.bk && ((this.store.bk = !1), this.rPb?.(a));
            }
            constructor(a, b) {
              this.store = a;
              this.rPb = b;
              this.xZ = (SSc.G(this), void 0);
            }
          };
        __c.H0a = {
          ZHb: function ({
            document: a,
            fk: b,
            $q: c,
            a8: d,
            Zm: e,
            xG: f,
            pr: g,
            hf: h,
            Xma: k,
            Ba: l,
            oc: m,
            Ud: n,
            sh: p,
            lf: q,
            tg: r,
            Ec: t,
            p1b: u,
            GPa: w,
            Bfb: A,
            eW: B,
            LTa: C,
            BUa: D,
          }) {
            const H = h.S3,
              J = h.gk;
            var M = h.J;
            const N = h.Rg,
              R = h.oa,
              S = h.H2a,
              Q = h.cb,
              U = k.so,
              { qFa: Y = !1, xFa: aa = !1 } = u ?? {};
            const { Sk: la, aDa: ka } = { Sk: zQc(), aDa: hWc };
            u = tQc({ Sk: la, BUa: D, J: M });
            u = new qWc(u);
            const {
              bT: ua,
              b8: ma,
              N$: Da,
              HS: ea,
            } = { bT: u, b8: u, N$: ka, HS: la };
            u = new pWc(ma);
            const { aT: ra, txa: ya } = { aT: u, txa: u };
            u = { bT: ua, b8: ma, aT: ra, txa: ya, N$: Da, HS: ea };
            D = cPc({ bT: u.bT, qFa: Y, xFa: aa });
            var Ca = gPc({ g_: D, aT: u.aT, pr: g });
            var ha = { ...u, g_: D, Hob: Ca };
            u = ha.b8;
            var Ja = ha.aT;
            D = ha.txa;
            Ca = ha.g_;
            var Fa = ha.Hob;
            const fb = ha.N$,
              Sa = ha.HS;
            ha = MRc({ bT: ha.bT });
            Ja = NRc({ g_: ha, aT: Ja });
            Ca = { ...Ca, ...ha };
            Fa = { ...Fa, ...Ja };
            M = M.Jd("widget");
            ({ expr: Ja } = { expr: new tTc() });
            const { tUa: hb, uxa: Pa } = dTc({
                so: U,
                Ba: l,
                Ud: n,
                lf: q,
                tg: r,
                cb: Q,
                expr: Ja,
                eW: B,
              }),
              {
                Kia: sb,
                LC: cc,
                sxa: bd,
                Iob: Ic,
              } = ESc({
                J: M,
                b8: u,
                tUa: hb,
                m1b: { zj: ISc() },
                N$: fb,
                HS: Sa,
                up: b,
                Da: a,
                GPa: w,
                Bfb: A,
              });
            a = {
              J: h.J,
              MTa: C,
              MNa: !0,
              Ec: t,
              so: k.so,
              jq: k.jq,
              cb: h.cb,
            };
            k = a.J;
            n = a.MTa;
            b = a.MNa;
            h = `codelet-${TWc++}`;
            k = k.Jd(h);
            n = new uWc({ Lq: h }, k, n);
            n = new MWc(n, k);
            a =
              a.jq != null
                ? {
                    OC: lRc({
                      Lq: h,
                      CU: n,
                      J: k,
                      Ec: a.Ec,
                      so: a.so,
                      jq: a.jq,
                      cb: a.cb,
                    }),
                  }
                : {
                    OC: JRc({
                      Lq: h,
                      MNa: b,
                      CU: n,
                      J: k,
                      RK: a.RK,
                      RL: a.RL,
                      IUb: a.IUb,
                    }),
                  };
            ({ OC: a } = a);
            const { xY: jd, r4a: Jd } = eSc({
              g_: Ca,
              Kia: sb,
              a8: d,
              Rg: N,
              LA: { J: M, oa: R, sh: t === 30 ? p : void 0, cb: Q, expr: Ja },
              hi: {
                Zm: e,
                pr: g,
                xG: f,
                H2a: S,
                Ba: l,
                oc: m,
                $q: c,
                OC: a,
                S3: H,
                gk: J,
              },
            });
            return {
              b8: u,
              LC: cc,
              ntc: jd,
              Hob: Fa,
              txa: D,
              sxa: bd,
              uxa: Pa,
              Iob: Ic,
              a8: d,
              r4a: Jd,
            };
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },

    /***/ 713476: (_, __, r) => r(734120),

    /***/ 699793: (_, __, r) => r(734120),

    /***/ 938574: (_, __, r) => r(734120),

    /***/ 314524: (_, __, r) => r(734120),

    /***/ 760347: (_, __, r) => r(734120),

    /***/ 367270: (_, __, r) => r(734120),

    /***/ 823869: (_, __, r) => r(734120),

    /***/ 576579: (_, __, r) => r(734120),

    /***/ 708292: (_, __, r) => r(734120),

    /***/ 307561: (_, __, r) => r(734120),

    /***/ 205346: (_, __, r) => r(734120),

    /***/ 737447: (_, __, r) => r(734120),

    /***/ 700760: (_, __, r) => r(734120),

    /***/ 104317: (_, __, r) => r(734120),

    /***/ 647718: (_, __, r) => r(734120),

    /***/ 232140: (_, __, r) => r(734120),

    /***/ 809957: (_, __, r) => r(734120),

    /***/ 584378: (_, __, r) => r(734120),

    /***/ 356363: (_, __, r) => r(734120),

    /***/ 9007: (_, __, r) => r(734120),
  },
]);
//# sourceMappingURL=sourcemaps/974b0bd14b0585f8.js.map
