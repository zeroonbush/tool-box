<template>
  <div class="beautifulJson">
    <div class="beautifulJson-origin" contenteditable="true" v-model="content" @input="content = $event.target.innerHTML"></div>

    <div class="beautifulJson-opera">
      <span class="beautifulJson-opera-btn" @click="change">转换</span>
      <span class="beautifulJson-opera-btn" @click="copy">复制</span>
    </div>

    <div class="beautifulJson-show" contenteditable="true">
        <pre v-html="changeContent" :key="key"></pre>
    </div>

    <textarea class="hidden-area"></textarea>

  </div>
</template>



<script>

export default {
  name:'',
  data(){
    return {
      content:'',
      changeContent:'',
      key:0,
    }
  },
  methods:{

    change(){
      let ele = document.createElement('div')
      ele.innerHTML = this.content
      let text = ele.innerText
      let str = JSON.stringify(JSON.parse(text), null, 4)
      this.changeContent = this.trim(str)
      this.key++
    },

    copy(){
      let textArea = document.querySelector('.hidden-area')
      textArea.value = this.changeContent
      textArea.select()
      document.execCommand('copy')  // 执行浏览器复制命令
    },

    trim(str){
      return str.replace(/^\s*/, '').replace(/\s*$/, '')
    },

  },

}


</script>
