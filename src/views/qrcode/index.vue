<template>
  <div class="qrcode">
    <h2>二维码生成器</h2>
    <div class="qrcode-cont">
      <textarea class="qrcode-cont-textarea" v-model="content" placeholder="请输入内容,点击按钮生成二维码"></textarea>
      <div class="qrcode-cont-option">
        <div class="qrcode-cont-option-cont">
          <label>
            尺寸:
            <input v-model="size" placeholder="200">
          </label>

          <label>
            二维码颜色:
            <input v-model="color" placeholder="#000000">
          </label>

          <label>
            背景颜色:
            <input v-model="bgColor" placeholder="#ffffff">
          </label>
        </div>
        <span class="qrcode-cont-btn" @click="generateQRCode">生成二维码</span>
      </div>
      <div style="text-align: center;">
        <canvas id="qrcode"></canvas>
      </div>
    </div>
   
  </div>
</template>

<script>

import QRCode from 'qrcode'

export default {
  name: 'Qrcode',
  data(){
    return {
      content:'',
      size:'',
      color:'',  // 二维码颜色
      bgColor:''  // 背景颜色
    }
  },
  mounted(){
    
  },
  methods:{

    generateQRCode(){
      if(!this.content){
        return alert('请输入内容')
      }
      let qrcode = document.querySelector('#qrcode')
      QRCode.toCanvas(qrcode, this.content, {
        margin:2,
        scale:5,
        maskPattern:8,
        width:this.size || 200,
        height:this.size || 200,
        color:{
          dark: this.color || '#000000',
          light: this.bgColor || '#ffffff'
        },
        toSJISFunc: QRCode.toSJIS ,
      }, error => {
        if(error){
          console.error(error)
        }
      })
    }


  }

}
</script>
