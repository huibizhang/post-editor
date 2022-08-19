<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div v-if="editor" class="w-[400px] inset-0 mx-auto p-2 border-4 mt-2 rounded">
    <div class="flex p-2 space-x-2 items-center">
      <span class="text-sm">標題:</span>
      <input class="border rounded flex-1" v-model="title">
    </div>
    <textarea class="w-full h-40 border rounded" v-model="content">
    </textarea>
    <div class="p-2">
      <div class="text-xs">驗證</div>
      <div class="w-28 mt-1 relative flex items-center">
        <input class="border rounded w-full peer" v-model="verifyCode">
        <svg xmlns="http://www.w3.org/2000/svg"
            @click="verifyCodeGenerator" class="h-5 w-5 rounded-full bg-gray-200 p-1 text-green-700 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <div class="absolute top-full bg-white border p-2 mt-1 rounded shadow-md hidden peer-focus:block">
          <span class="text-xs">請擇一輸入下圖文字</span>
          <div class="rounded w-32 h-14 mt-1 text-lg flex justify-center items-center" :style="{backgroundColor: colorRed}">
            {{colorRed}}
          </div>
          <div class="rounded w-32 h-14 mt-1 text-lg flex justify-center items-center" :style="{backgroundColor: color}">
            {{color}}
          </div>
          <div class="rounded w-32 h-14 mt-1 text-lg text-white flex justify-center items-center" :style="{backgroundColor: colorBlue}">
            {{colorBlue}}
          </div>
        </div>
      </div>
    </div>
    <div class="p-2 flex justify-end">
      <button class="py-1 px-4 rounded bg-green-500 text-white font-bold hover:bg-green-400 active:bg-green-600 transition-all" @click="send">發布</button>
    </div>
  </div>
  <div v-else class="w-[400px] inset-0 mx-auto p-5">
    <div v-if="verifyCode===color" class="text-center">
      文章已發布
      <a class="block mt-10 text-green-600 text-sm underline" href="javascript:void(0);" @click="post()">繼續發布其他文章</a>
    </div>
    <div v-else class="text-center">
      您的文章內容已違反《數位中介法》之規定，<br/>
      如有疑問請聯絡網站管理員。
      <a class="block mt-10 text-green-600 text-sm underline" href="javascript:void(0);" @click="editor=true">修改並重新發布文章</a>
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
  mounted(){
    this.verifyCodeGenerator()
  },
  methods: {
    verifyCodeGenerator(){
      this.color = this.colorCodeGenerator()
      this.colorRed = this.colorCodeGenerator("red")
      this.colorBlue = this.colorCodeGenerator("blue")
    },
    colorCodeGenerator(mode="") {
      const LsbKey = "56789ABCD"
      const MsbKey = "0123456879ABCDEF"
      
      let color = ""
      
      if(mode==="blue")
        color = `#0000${LsbKey.charAt(Math.random()*LsbKey.length)}${MsbKey.charAt(Math.random()*MsbKey.length)}`
      else if(mode==="red")
        color = `#${LsbKey.charAt(Math.random()*LsbKey.length)}${MsbKey.charAt(Math.random()*MsbKey.length)}0000`
      else
        color = `#00${LsbKey.charAt(Math.random()*LsbKey.length)}${MsbKey.charAt(Math.random()*MsbKey.length)}00`
        
      return color
    },
    send() {
      if(this.verifyCode!==""){
        this.editor = false
      } else {
        alert("請輸入驗證碼")
      }
    },
    post() {
      this.title = ""
      this.content = ""
      this.verifyCode = ""
      this.editor = true
    }
  }
};
</script>