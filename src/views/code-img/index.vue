<template>
  <div class="codeImg">
    <h2 class="codeImg-title">生成代码截图</h2>
    <div class="tips">
      <p>input your code to generate the picture</p>
      <button @click="save">生成图片</button>
      <p>
        <input class="ipt" v-model="hexColorOut" placeholder="请输入十六进制颜色码">
        <button @click="changeStyleOut">改变外框背景</button>
        <button @click="resetOut">重置</button>
      </p>

      <p>
        <input class="ipt" v-model="hexColor" placeholder="请输入十六进制颜色码">
        <button @click="changeStyle">改变内框背景</button>
        <button @click="reset">重置</button>
      </p>

      <p>
        <input placeholder="请输入图片名,默认为 code " v-model="picName" style="width: 250px;">
        <button @click="picName = ''">重置</button>
      </p>
      
    </div>


    <div class="container" id="div1" :style="styleObjOut">
      <div class="container-inner" :style="styleObj">
        <div class="top">
          <span class="circle circle1"></span>
          <span class="circle circle2"></span>
          <span class="circle circle3"></span>
        </div>
        <div class="content web-font" contenteditable="true"></div>
      </div>
    </div>


  </div>
</template>

<script>

import html2canvas from 'html2canvas'

export default {
  name: 'CodeImg',
  data(){
    return {
      msg:'hello',
      hexColorOut:'',
      hexColor:'',
      styleObjOut:{},
      styleObj:{},
      picName:''
    }
  },
  methods:{
    resetOut(){
      this.hexColorOut = ''
      this.styleObjOut = {}
    }, 

    reset(){
      this.hexColor = ''
      this.styleObj = {}
    },   

    changeStyleOut(){
      this.styleObjOut = {
        backgroundColor:'#' + this.hexColorOut
      }
    },

    changeStyle(){
      this.styleObj = {
        backgroundColor:'#' + this.hexColor
      }
    },

    save(){
      let options = {
        onrendered:function(canvas){
          var url = canvas.toDataURL();//图片地址
          document.body.appendChild(canvas);
        }
      }

      html2canvas(document.querySelector("#div1"),options).then(canvas => {
          document.body.appendChild(canvas)
          let dataURL = canvas.toDataURL("image/png")        
          let a = document.createElement('a')
          document.body.appendChild(a)
          a.id="do"
          a.setAttribute("href",dataURL)
          let name = this.picName || 'code'
          a.setAttribute("download",name)
          a.click()
          document.body.removeChild(a)
          document.body.removeChild(canvas)
      })
    },
  
}
}
</script>

