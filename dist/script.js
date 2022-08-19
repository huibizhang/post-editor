const { openBlock, createElementBlock, createElementVNode, withDirectives, vModelText, normalizeStyle, toDisplayString, createTextVNode } = Vue;

var script = {
  data() {
    return {
      title: "",
      content: "",
      color: "",
      colorBlue: "",
      colorRed: "",
      verifyCode: "",
      editor: true,
    };
  },
  mounted(){
    this.verifyCodeGenerator();
  },
  methods: {
    verifyCodeGenerator(){
      this.color = this.colorCodeGenerator();
      this.colorRed = this.colorCodeGenerator("red");
      this.colorBlue = this.colorCodeGenerator("blue");
    },
    colorCodeGenerator(mode="") {
      const LsbKey = "56789ABCD";
      const MsbKey = "0123456879ABCDEF";
      
      let color = "";
      
      if(mode==="blue")
        color = `#0000${LsbKey.charAt(Math.random()*LsbKey.length)}${MsbKey.charAt(Math.random()*MsbKey.length)}`;
      else if(mode==="red")
        color = `#${LsbKey.charAt(Math.random()*LsbKey.length)}${MsbKey.charAt(Math.random()*MsbKey.length)}0000`;
      else
        color = `#00${LsbKey.charAt(Math.random()*LsbKey.length)}${MsbKey.charAt(Math.random()*MsbKey.length)}00`;
        
      return color
    },
    send() {
      if(this.verifyCode!==""){
        this.editor = false;
      } else {
        alert("請輸入驗證碼");
      }
    },
    post() {
      this.title = "";
      this.content = "";
      this.verifyCode = "";
      this.editor = true;
    }
  }
};

const _hoisted_1 = {
  key: 0,
  class: "w-[400px] inset-0 mx-auto p-2 border-4 mt-2 rounded"
};
const _hoisted_2 = { class: "flex p-2 space-x-2 items-center" };
const _hoisted_3 = /*#__PURE__*/createElementVNode("span", { class: "text-sm" }, "標題:", -1 /* HOISTED */);
const _hoisted_4 = { class: "p-2" };
const _hoisted_5 = /*#__PURE__*/createElementVNode("div", { class: "text-xs" }, "驗證", -1 /* HOISTED */);
const _hoisted_6 = { class: "w-28 mt-1 relative flex items-center" };
const _hoisted_7 = /*#__PURE__*/createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
}, null, -1 /* HOISTED */);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = { class: "absolute top-full bg-white border p-2 mt-1 rounded shadow-md hidden peer-focus:block" };
const _hoisted_10 = /*#__PURE__*/createElementVNode("span", { class: "text-xs" }, "請擇一輸入下圖文字", -1 /* HOISTED */);
const _hoisted_11 = { class: "p-2 flex justify-end" };
const _hoisted_12 = {
  key: 1,
  class: "w-[400px] inset-0 mx-auto p-5"
};
const _hoisted_13 = {
  key: 0,
  class: "text-center"
};
const _hoisted_14 = /*#__PURE__*/createTextVNode(" 文章已發布 ");
const _hoisted_15 = {
  key: 1,
  class: "text-center"
};
const _hoisted_16 = /*#__PURE__*/createTextVNode(" 您的文章內容已違反《數位中介法》之規定，");
const _hoisted_17 = /*#__PURE__*/createElementVNode("br", null, null, -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/createTextVNode(" 如有疑問請聯絡網站管理員。 ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ($data.editor)
    ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _hoisted_3,
          withDirectives(createElementVNode("input", {
            class: "border rounded flex-1",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.title) = $event))
          }, null, 512 /* NEED_PATCH */), [
            [vModelText, $data.title]
          ])
        ]),
        withDirectives(createElementVNode("textarea", {
          class: "w-full h-40 border rounded",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.content) = $event))
        }, "\n    ", 512 /* NEED_PATCH */), [
          [vModelText, $data.content]
        ]),
        createElementVNode("div", _hoisted_4, [
          _hoisted_5,
          createElementVNode("div", _hoisted_6, [
            withDirectives(createElementVNode("input", {
              class: "border rounded w-full peer",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.verifyCode) = $event))
            }, null, 512 /* NEED_PATCH */), [
              [vModelText, $data.verifyCode]
            ]),
            (openBlock(), createElementBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              onClick: _cache[3] || (_cache[3] = (...args) => ($options.verifyCodeGenerator && $options.verifyCodeGenerator(...args))),
              class: "h-5 w-5 rounded-full bg-gray-200 p-1 text-green-700 ml-1",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2"
            }, _hoisted_8)),
            createElementVNode("div", _hoisted_9, [
              _hoisted_10,
              createElementVNode("div", {
                class: "rounded w-32 h-14 mt-1 text-lg flex justify-center items-center",
                style: normalizeStyle({backgroundColor: $data.colorRed})
              }, toDisplayString($data.colorRed), 5 /* TEXT, STYLE */),
              createElementVNode("div", {
                class: "rounded w-32 h-14 mt-1 text-lg flex justify-center items-center",
                style: normalizeStyle({backgroundColor: $data.color})
              }, toDisplayString($data.color), 5 /* TEXT, STYLE */),
              createElementVNode("div", {
                class: "rounded w-32 h-14 mt-1 text-lg text-white flex justify-center items-center",
                style: normalizeStyle({backgroundColor: $data.colorBlue})
              }, toDisplayString($data.colorBlue), 5 /* TEXT, STYLE */)
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_11, [
          createElementVNode("button", {
            class: "py-1 px-4 rounded bg-green-500 text-white font-bold hover:bg-green-400 active:bg-green-600 transition-all",
            onClick: _cache[4] || (_cache[4] = (...args) => ($options.send && $options.send(...args)))
          }, "發布")
        ])
      ]))
    : (openBlock(), createElementBlock("div", _hoisted_12, [
        ($data.verifyCode===$data.color)
          ? (openBlock(), createElementBlock("div", _hoisted_13, [
              _hoisted_14,
              createElementVNode("a", {
                class: "block mt-10 text-green-600 text-sm underline",
                href: "javascript:void(0);",
                onClick: _cache[5] || (_cache[5] = $event => ($options.post()))
              }, "繼續發布其他文章")
            ]))
          : (openBlock(), createElementBlock("div", _hoisted_15, [
              _hoisted_16,
              _hoisted_17,
              _hoisted_18,
              createElementVNode("a", {
                class: "block mt-10 text-green-600 text-sm underline",
                href: "javascript:void(0);",
                onClick: _cache[6] || (_cache[6] = $event => ($data.editor=true))
              }, "修改並重新發布文章")
            ]))
      ]))
}

script.render = render;
script.__file = "tmp/codepen/vuejs/src/pen.vue";

export { script as default };