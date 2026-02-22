(globalThis["webpackChunk_canva_web"] =
  globalThis["webpackChunk_canva_web"] || []).push([
  [94260],
  {
    /***/ 286663: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(214065);
      globalThis._5f74ec40302898c5a55451c9fbd04240 =
        globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var u3 = function (a, b) {
            var c = a.Blb.get(b);
            if (c != null) return c;
            c = { value: a.schema.Rv(b) };
            a.Blb.set(b, c);
            a.ulb.set(c, b);
            return c;
          },
          v3 = function (a, b) {
            a = a.ulb.get(b);
            if (a == null) throw new wIc("ref does not exists");
            return a;
          },
          xIc = function () {
            const a = (b) => {
              if (b?.type !== "text2") throw new w3("text2", b);
              return b.value;
            };
            return {
              dn: (b) => ({ type: "text2", value: b }),
              Sv: (b) => {
                if (b?.type !== "text2") throw new x3("text2", b);
                return b.value;
              },
              Rv: a,
              cA: a,
            };
          },
          yIc = __webpack_require__(186901).EW;
        var zIc = class {
            static G(a) {
              __c.L(a, { I1a: yIc });
            }
            get I1a() {
              const a = [];
              for (const b of this.list.value) {
                const c = u3(this, b);
                if (c === void 0)
                  throw new wIc(
                    "undefined value found when deserializing list."
                  );
                a.push(c);
              }
              return a;
            }
            count() {
              return this.list.value.count();
            }
            toArray() {
              return this.I1a.map(({ value: a }) => a);
            }
            first(a) {
              const b = this.list.value.first(
                a ? (c) => a(u3(this, c)) : void 0
              );
              if (b != null) return u3(this, b);
            }
            last(a) {
              const b = this.list.value.last(
                a ? (c) => a(u3(this, c)) : void 0
              );
              if (b != null) return u3(this, b);
            }
            next(a, b) {
              var c = b ? (d) => b(u3(this, d)) : void 0;
              a = v3(this, a);
              c = this.list.value.next(a, c);
              if (c != null) return u3(this, c);
            }
            previous(a, b) {
              var c = b ? (d) => b(u3(this, d)) : void 0;
              a = v3(this, a);
              c = this.list.value.previous(a, c);
              if (c != null) return u3(this, c);
            }
            map(a) {
              return this.list.value.map((b, c) => a(u3(this, b), c));
            }
            filter(a) {
              return this.list.value
                .filter((b, c) => a(u3(this, b), c))
                .map((b) => u3(this, b));
            }
            forEach(a) {
              return this.list.value.forEach((b, c) => a(u3(this, b), c));
            }
            some(a) {
              return this.list.value.some((b) => a(u3(this, b)));
            }
            constructor(a, b) {
              this.schema = b;
              this.Blb = (zIc.G(this), new WeakMap());
              this.ulb = new WeakMap();
              __c.x(a.type === "list");
              this.list = a;
            }
          },
          AIc = class extends zIc {
            replace(a, b) {
              a = v3(this, a);
              b = this.list.value.replace(a, this.schema.dn(b));
              return u3(this, b);
            }
            pL(a, b) {
              a = a != null ? v3(this, a) : void 0;
              b = this.list.value.pL(a, this.schema.dn(b));
              return u3(this, b);
            }
            EH(a, b) {
              a = a != null ? v3(this, a) : void 0;
              return this.list.value
                .EH(
                  a,
                  b.map((c) => this.schema.dn(c))
                )
                .map((c) => u3(this, c));
            }
            insertBefore(a, b) {
              a = a != null ? v3(this, a) : void 0;
              b = this.list.value.insertBefore(a, this.schema.dn(b));
              return u3(this, b);
            }
            append(a) {
              a = this.list.value.append(this.schema.dn(a));
              return u3(this, a);
            }
            prepend(a) {
              a = this.list.value.prepend(this.schema.dn(a));
              return u3(this, a);
            }
            delete(a) {
              a = v3(this, a);
              this.list.value.delete(a);
            }
            TG(a) {
              this.list.value.TG(a ? (b) => a(u3(this, b)) : void 0);
            }
            moveBefore(a, b) {
              a = a == null ? void 0 : v3(this, a);
              b = v3(this, b);
              this.list.value.moveBefore(a, b);
            }
          };
        var z3 = class {
            static string(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "string")
                  throw d === "toWidgetData"
                    ? new w3("string", c)
                    : new x3("string", c);
                return c.value;
              };
              return {
                dn: (c) => ({ type: "string", value: c }),
                Sv: (c) => b(c, "toWidgetState"),
                Rv: (c) => b(c, "toWidgetData"),
                cA: (c) => b(c, "toWidgetData"),
              };
            }
            static literal(a, b) {
              if (a.length === 0)
                throw new y3(
                  "At least one value must be provided for literal types."
                );
              const c = new Set(a),
                d = (e, f) => {
                  if (e == null && b != null) return b;
                  if (e?.type !== "string" || !c.has(e.value))
                    throw f === "toWidgetData"
                      ? new w3("literal", e)
                      : new x3("literal", e);
                  return e.value;
                };
              return {
                dn: (e) => ({ type: "string", value: e }),
                Sv: (e) => d(e, "toWidgetState"),
                Rv: (e) => d(e, "toWidgetData"),
                cA: (e) => d(e, "toWidgetData"),
              };
            }
            static integer(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (
                  c?.type !== "int32" ||
                  !Number.isFinite(c.value) ||
                  !Number.isInteger(c.value)
                )
                  throw d === "toWidgetData"
                    ? new w3("integer", c)
                    : new x3("integer", c);
                return c.value;
              };
              return {
                dn: (c) => {
                  if (!Number.isFinite(c) || !Number.isInteger(c))
                    throw new BIc("integer", c);
                  return { type: "int32", value: c };
                },
                Sv: (c) => b(c, "toWidgetState"),
                Rv: (c) => b(c, "toWidgetData"),
                cA: (c) => b(c, "toWidgetData"),
              };
            }
            static double(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "double" || !Number.isFinite(c.value))
                  throw d === "toWidgetData"
                    ? new w3("double", c)
                    : new x3("double", c);
                return c.value;
              };
              return {
                dn: (c) => {
                  if (!Number.isFinite(c)) throw new BIc("double", c);
                  return { type: "double", value: c };
                },
                Sv: (c) => b(c, "toWidgetState"),
                Rv: (c) => b(c, "toWidgetData"),
                cA: (c) => b(c, "toWidgetData"),
              };
            }
            static boolean(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "boolean")
                  throw d === "toWidgetData"
                    ? new w3("boolean", c)
                    : new x3("boolean", c);
                return c.value;
              };
              return {
                dn: (c) => ({ type: "boolean", value: c }),
                Sv: (c) => b(c, "toWidgetState"),
                Rv: (c) => b(c, "toWidgetData"),
                cA: (c) => b(c, "toWidgetData"),
              };
            }
            static fill() {
              const a = (b) => {
                if (b?.type !== "fill") throw new w3("fill", b);
                return b.value;
              };
              return {
                dn: (b) => ({ type: "fill", value: b }),
                Sv: (b) => {
                  if (b?.type !== "fill") throw new x3("fill", b);
                  return b.value;
                },
                Rv: a,
                cA: a,
              };
            }
            static stroke() {
              const a = (b) => {
                if (b?.type !== "stroke") throw new w3("stroke", b);
                return b.value;
              };
              return {
                dn: (b) => ({ type: "stroke", value: b }),
                Sv: (b) => {
                  if (b?.type !== "stroke") throw new x3("stroke", b);
                  return b.value;
                },
                Rv: a,
                cA: a,
              };
            }
            static M(a) {
              const b = new Set();
              for (const d of Object.keys(a)) {
                const [e] = a[d];
                if (b.has(e))
                  throw new y3(
                    `Duplicate serialized keys "${e}" found in record schema.`
                  );
                b.add(e);
              }
              const c = (d, e) => {
                if (e?.type !== "dict") throw new w3("record", e);
                const f = {};
                for (const g of Object.keys(a)) {
                  const [h, k] = a[g],
                    l = yIc(
                      () => {
                        const m = e.value.get(h);
                        return k.Rv(m);
                      },
                      { keepAlive: !0 }
                    );
                  Object.defineProperty(f, g, {
                    get() {
                      return l.get();
                    },
                    set(m) {
                      d !== "readonly" &&
                        ((m = k.dn(m)),
                        m == null ? e.value.delete(h) : e.value.set(h, m));
                    },
                    enumerable: !0,
                  });
                }
                return f;
              };
              return {
                dn: (d) => {
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.dn(d[f]);
                    k != null && (e[g] = k);
                  }
                  return { type: "dict", value: new Map(Object.entries(e)) };
                },
                Sv: (d) => {
                  if (d?.type !== "dict") throw new x3("record", d);
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.Sv(d.value.get(g));
                    k != null && (e[f] = k);
                  }
                  return e;
                },
                Rv: (d) => c("editable", d),
                cA: (d) => c("readonly", d),
                Ob: (d) => z3.M({ ...a, ...d }),
              };
            }
            static list(a) {
              return {
                dn: (b) => ({ type: "list", value: b.map((c) => a.dn(c)) }),
                Sv: (b) => {
                  if (b?.type !== "list") throw new x3("list", b);
                  return b.value.filter(__c.wb).map((c) => a.Sv(c));
                },
                Rv: (b) => {
                  if (b?.type !== "list") throw new w3("list", b);
                  return new AIc(b, a);
                },
                cA: (b) => {
                  if (b?.type !== "list") throw new w3("list", b);
                  return new zIc(b, a);
                },
              };
            }
            static optional(a) {
              return {
                dn: (b) => {
                  if (b != null) return a.dn(b);
                },
                Sv: (b) => {
                  if (b != null) return a.Sv(b);
                },
                Rv: (b) => {
                  if (b != null) return a.Rv(b);
                },
                cA: (b) => {
                  if (b != null) return a.cA(b);
                },
              };
            }
            static union(a, b) {
              const c = new Set(Object.keys(a)),
                d = (e) => {
                  if (e?.type !== "dict") throw new w3("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new w3("union", e);
                  return { Wka: a[f], Xka: g };
                };
              return {
                dn: (e) => {
                  const f = b(e);
                  return {
                    type: "dict",
                    value: new Map([
                      ["k", { type: "string", value: f }],
                      ["v", a[f].dn(e)],
                    ]),
                  };
                },
                Sv: (e) => {
                  if (e?.type !== "dict") throw new x3("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new x3("union", e);
                  const { Wka: h, Xka: k } = { Wka: a[f], Xka: g };
                  return h.Sv(k);
                },
                Rv: (e) => {
                  const { Wka: f, Xka: g } = d(e);
                  return f.Rv(g);
                },
                cA: (e) => {
                  const { Wka: f, Xka: g } = d(e);
                  return f.cA(g);
                },
              };
            }
          },
          y3 = class extends Error {
            constructor(a) {
              super(a);
              this.name = "SchemaError";
            }
          },
          wIc = class extends y3 {
            constructor(a) {
              super(`ListError: ${a}`);
            }
          },
          w3 = class extends y3 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget data`);
            }
          },
          x3 = class extends y3 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget state`);
            }
          },
          BIc = class extends y3 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of document state`);
            }
          };
        var CIc = {
          settings: { status: 2 },
          Qqc: new Map(),
          Rqc: 0,
          Qcc: void 0,
          D4b: void 0,
          aIa: !1,
          qdc: "unchecked",
          $W: !1,
          Co: !1,
        };
        var DIc = z3.M({
            type: ["t", z3.literal(["text2"], "text2"), "readonly"],
            text: ["te", xIc()],
          }),
          EIc = z3.union({ text2: DIc }, (a) => a.type),
          FIc = z3.M({ id: ["i", z3.string("")], label: ["l", EIc] }),
          GIc = z3.list(FIc),
          HIc = z3.list(z3.string("")),
          IIc = z3.M({
            id: ["i", z3.string("")],
            label: ["l", EIc],
            EL: ["tl", z3.literal(["c", "u"], "c")],
            bKa: ["k", z3.optional(z3.double(1))],
            required: ["rq", z3.boolean(!1)],
            V: ["c", z3.double(0)],
          }),
          JIc = z3.M({ type: ["t", z3.literal(["r"], "r"), "readonly"] }),
          KIc = z3.M({ type: ["t", z3.literal(["p"], "p"), "readonly"] }),
          LIc = z3.M({ type: ["t", z3.literal(["q"], "q"), "readonly"] }),
          MIc = z3.union({ r: JIc, p: KIc, q: LIc }, (a) => a.type),
          NIc = IIc.Ob({
            type: ["t", z3.literal(["select"], "select"), "readonly"],
            variant: ["v", z3.optional(MIc)],
            options: ["o", GIc],
            L4: ["m", z3.optional(z3.integer(1))],
            TCa: ["co", HIc],
          }),
          OIc = z3.M({ type: ["t", z3.literal(["e"], "e"), "readonly"] }),
          PIc = z3.M({
            type: ["t", z3.literal(["f"], "f"), "readonly"],
            VQ: ["n", z3.integer(1)],
          }),
          QIc = z3.union({ e: OIc, f: PIc }, (a) => a.type),
          RIc = IIc.Ob({
            type: ["t", z3.literal(["text"], "text"), "readonly"],
            placeholder: ["p", z3.string("")],
            variant: ["v", QIc],
          }),
          SIc = z3.M({ type: ["t", z3.literal(["a"], "a"), "readonly"] }),
          TIc = z3.M({ type: ["t", z3.literal(["b"], "b"), "readonly"] }),
          UIc = z3.M({ type: ["t", z3.literal(["c"], "c"), "readonly"] }),
          VIc = z3.M({ type: ["t", z3.literal(["d"], "d"), "readonly"] }),
          WIc = z3.union({ a: SIc, b: TIc, c: UIc, d: VIc }, (a) => a.type),
          XIc = IIc.Ob({
            type: ["t", z3.literal(["number"], "number"), "readonly"],
            variant: ["v", WIc],
            min: ["a", z3.optional(z3.double())],
            max: ["b", z3.optional(z3.double())],
          }),
          YIc = z3.union(
            { select: NIc, text: RIc, number: XIc },
            (a) => a.type
          ),
          ZIc = z3.list(YIc),
          $Ic = z3.M({
            Zr: ["A", z3.optional(z3.double(1))],
            $r: ["B", z3.optional(z3.double(1))],
            tv: ["C", z3.optional(z3.double(1))],
          }),
          aJc = z3.M({
            label: ["l", EIc],
            EL: ["B", z3.optional(z3.literal(["c", "u"]))],
            tv: ["C", z3.optional(z3.double(1))],
            $r: ["E", z3.optional(z3.double(1))],
            Zr: ["D", z3.optional(z3.double(1))],
            efa: ["F", z3.optional(z3.double(1))],
          }),
          bJc = z3.M({}),
          cJc = z3.M({
            dfa: ["A", z3.double(1.25)],
            tv: ["B", z3.double(1)],
            $r: ["C", z3.double(1.25)],
            Zr: ["D", z3.double(1.25)],
            background: ["E", z3.optional(z3.fill())],
          }),
          dJc = z3.M({
            label: ["A", xIc()],
            EL: ["tl", z3.literal(["c", "u"])],
          }),
          eJc = z3.literal(["l", "r"], "l"),
          fJc = z3.M({
            minHeight: ["mh", z3.double(1)],
            minWidth: ["mw", z3.double(1)],
            type: ["t", z3.literal(["poll", "quiz"], "poll"), "readonly"],
            id: ["i", z3.string()],
            Yt: ["s", z3.string()],
            Pz: ["a", z3.optional(z3.string())],
            direction: ["r", eJc],
            jma: ["d", z3.string("")],
            Ffa: ["pf", z3.fill()],
            oga: ["sf", z3.fill()],
            border: ["b", z3.stroke()],
            V: ["c", z3.double(0)],
            Cj: ["D", z3.optional(z3.double(16))],
            Gk: ["E", z3.optional(z3.double(16))],
            RV: ["F", z3.optional($Ic)],
            F3: ["hh", z3.boolean(!1)],
            mIa: ["I", z3.optional(z3.boolean(!1))],
            lva: ["z", z3.boolean(!0)],
            V0a: ["h", z3.optional(bJc)],
            title: ["j", z3.optional(dJc)],
            header: ["A", z3.optional(cJc)],
            fields: ["f", ZIc],
            footer: ["fo", z3.optional(aJc)],
          }),
          gJc = z3.union({ poll: fJc, quiz: fJc }, (a) => a.type);
        __c.PKa = {
          Wxb: function () {
            return { pdc: CIc, schema: gJc };
          },
        };
      }.call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/638b2d2d2a398dd7.js.map
