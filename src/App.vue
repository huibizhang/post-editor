<template>
  <div
    v-if="editor"
    class="inset-0 mx-auto mt-2 w-[400px] rounded border-4 p-2"
  >
    <div class="flex items-center space-x-2 p-2">
      <span class="text-sm">標題:</span>
      <input class="flex-1 rounded border" v-model="title" />
    </div>
    <textarea class="h-40 w-full rounded border" v-model="content"> </textarea>
    <div class="p-2">
      <div class="text-xs">驗證</div>
      <div class="relative mt-1 flex w-28 items-center">
        <input class="peer w-full rounded border" v-model="verifyCode" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="verifyCodeGenerator"
          class="ml-1 h-5 w-5 rounded-full bg-gray-200 p-1 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <div
          class="absolute top-full mt-1 hidden rounded border bg-white p-2 shadow-md peer-focus:block"
        >
          <span class="text-xs">請擇一輸入下圖文字</span>
          <div
            class="mt-1 flex h-14 w-32 items-center justify-center rounded text-lg"
            :style="{ backgroundColor: colorRed }"
          >
            {{ colorRed }}
          </div>
          <div
            class="mt-1 flex h-14 w-32 items-center justify-center rounded text-lg"
            :style="{ backgroundColor: color }"
          >
            {{ color }}
          </div>
          <div
            class="mt-1 flex h-14 w-32 items-center justify-center rounded text-lg text-white"
            :style="{ backgroundColor: colorBlue }"
          >
            {{ colorBlue }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end p-2">
      <button
        class="rounded bg-green-500 py-1 px-4 font-bold text-white transition-all hover:bg-green-400 active:bg-green-600"
        @click="send"
      >
        發布
      </button>
    </div>
  </div>
  <div v-else class="inset-0 mx-auto w-[400px] p-5">
    <div v-if="verifyCode === color" class="text-center">
      文章已發布
      <a
        class="mt-10 block text-sm text-green-600 underline"
        href="javascript:void(0);"
        @click="post()"
        >繼續發布其他文章</a
      >
    </div>
    <div v-else class="text-center">
      您的文章內容已違反《數位中介法》之規定，<br />
      如有疑問請聯絡網站管理員。
      <a
        class="mt-10 block text-sm text-green-600 underline"
        href="javascript:void(0);"
        @click="editor = true"
        >修改並重新發布文章</a
      >
    </div>
  </div>
</template>

<script>
export default {
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
  mounted() {
    this.verifyCodeGenerator();
  },
  methods: {
    verifyCodeGenerator() {
      this.color = this.colorCodeGenerator();
      this.colorRed = this.colorCodeGenerator("red");
      this.colorBlue = this.colorCodeGenerator("blue");
    },
    colorCodeGenerator(mode = "") {
      const LsbKey = "56789ABCD";
      const MsbKey = "0123456879ABCDEF";

      let color = "";

      if (mode === "blue")
        color = `#0000${LsbKey.charAt(
          Math.random() * LsbKey.length
        )}${MsbKey.charAt(Math.random() * MsbKey.length)}`;
      else if (mode === "red")
        color = `#${LsbKey.charAt(
          Math.random() * LsbKey.length
        )}${MsbKey.charAt(Math.random() * MsbKey.length)}0000`;
      else
        color = `#00${LsbKey.charAt(
          Math.random() * LsbKey.length
        )}${MsbKey.charAt(Math.random() * MsbKey.length)}00`;

      return color;
    },
    send() {
      if (this.verifyCode !== "") {
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
    },
  },
};
</script>
