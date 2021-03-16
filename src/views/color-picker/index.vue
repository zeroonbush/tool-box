<template>
  <div class="colorPicker" :style="{backgroundColor:'#' + this.currentColor}">
    <h2 class="colorPicker-title">颜色选择器</h2>
    <div class="colorPicker-cont">
      <div class="container">
        <div>
          <h4>如何使用本页面:</h4>
          <p>请点击色块(会出现鼠标小手)选择颜色即可,颜色色值即已复制</p>
        </div>

        <div>
          <h4>色值模式:</h4>
          <ul>
            <li>RGB表示法:  <span style="color:rgb(255,0,0)">rgb(255,0,0)</span></li>
            <li>十六进制表示法:  <span style="color: #ff0000">#ff0000</span></li>
          </ul>
        </div>
        
        <div>
          <h4>选择当前色值模式:</h4>
        </div>

        <p></p>
        <button class="btn" :class="{active:mode === 'decimal'}" @click="changeType('decimal')" style="margin-right: 10px;">RGB表示法</button>
        <button class="btn" :class="{active:mode === 'hex'}" @click="changeType('hex')">十六进制表示法</button>
        <p>当前色值模式: <span style="color:red;">{{modeMap.get(mode)}}</span></p>
      </div>
      
      <div class="container">
        <div>RGB表示法转换成十六进制表示法:</div>
        <div class="content">
          <div>
            <input class="ipt ipt1" v-model="colorR" maxlength="3" placeholder="0" />
            <input class="ipt ipt1" v-model="colorG" maxlength="3" placeholder="0" />
            <input class="ipt ipt1" v-model="colorB" maxlength="3" placeholder="0" />
          </div>
          <div>
            <span class="displayArea" @click="picker($event)" :data-color="this.showColor" :style="styleObj"></span>
          </div>
        </div>
        <button style="margin-right: 10px;" @click="changeToHex">转换</button>
        <button @click="reset(1)">重置</button>
        <div class="after-transfer">
          #{{showColor}}
        </div>
      </div>

      <div class="container">
        <div>十六进制表示法转换成RGB表示法:</div>
        <div class="content">
          <div>
            <input class="ipt ipt2" @keyup.enter="changeToRGB" v-model="colorHex" placeholder="#000000" maxlength="7" />
          </div>
          <div>
            <span class="displayArea"  @click="picker($event)" :data-color="this.showColor2" :style="styleObj2"></span>
          </div>
        </div>
        <button style="margin-right: 10px;" @click="changeToRGB">转换</button>
        <button @click="reset(2)">重置</button>
        <div class="after-transfer">
          {{getColor(showColor2)}}
        </div>
      </div>
        
      <div class="container">
        <div class="current">
          当前选中颜色:
          <span class="current-color"  @click="picker($event)" :data-color="this.currentColor" :style="{backgroundColor:'#'+currentColor}"></span>
        </div>
        <span class="block" v-for="item of colorList" :key="item.color" @click="picker($event)" :data-color="item.color" :style="{backgroundColor:'#'+item.color}"></span>
      </div>

      <div class="container">
        <div>常用颜色色值:</div>
        <div class="common">
          <div class="common-item" v-for="item in COMMON_COLOR" :key="item.color" @click="picker($event)" :data-color="item.color" :style="{backgroundColor:'#'+item.color}">{{item.label}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// 色值模式
const modeMap = new Map()
modeMap
  .set('decimal','rgb(255,0,0)')
  .set('hex', '#ff0000')

// 常用颜色色值
const COMMON_COLOR = [
  {color:'409EFF',label:'主色调'},
  {color:'67C23A',label:'成功'},
  {color:'E6A23C',label:'警告'},
  {color:'F56C6C',label:'危险'},
  {color:'909399',label:'置灰'},
]

import data from  './data'
export default {
  name: 'ColorPicker',
  data(){
    return {
      modeMap,
      COMMON_COLOR,
      mode:'hex',  // 色值表示模式 hex(16进制)  decimal(RGB表示法)
      colorR:'',
      colorG:'',
      colorB:'',
      colorHex:'',
      colorList:data.colorList,
      showColor:'000000',
      showColor2:'000000',
      currentColor:''  // 当前色值 16进制
    }
  },

  computed:{
    styleObj(){
      return ({
        backgroundColor:'#' + this.showColor
      })
    },
    styleObj2(){
      return ({
        backgroundColor:'#' + this.showColor2
      })
    }
  },

  methods:{

    picker(e){
      let color = e.target.dataset.color
      this.currentColor = color
      let oInput = document.createElement('input')
      if(this.mode === 'decimal'){
        color = this.getColor(color)
      }else if(this.mode === 'hex'){
        color = '#' + color
      }
      oInput.value = color
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      document.body.removeChild(oInput)
    },

    // 十进制转换为十六进制
    toHex(num){
      return Number(num).toString(16)
    },
    
    // 十六进制转换为十进制
    toDecimal(num){
      return parseInt(num,16)
    },

    // 将16进制的色值转为RGB模式
    getColor(str){
      let r = str.substr(0,2)
      let g = str.substr(2,2)
      let b = str.substr(4,2)
      let arr = [r,g,b]
      arr = arr.map(this.toDecimal)
      return `rgb(${arr.toString()})`
    },

    changeType(type){
      this.mode = type
    },

    toDouble(s){
      return s.length < 2 ? '0' + s : s
    },

    changeToHex(){
      let colorR = this.colorR || 0
      let colorG = this.colorG || 0
      let colorB = this.colorB || 0
      let msg = '请输入0-255之间的数字'
      if(isNaN(Number(colorR)) || (colorR < 0 || colorR > 255)){
        this.colorR = ''
        return alert(msg)
      }
      if(isNaN(Number(colorG)) || (colorG < 0 || colorG > 255)){
        this.colorG = ''
        return alert(msg)
      }
      if(isNaN(Number(colorB)) || (colorB < 0 || colorB > 255)){
        this.colorB = ''
        return alert(msg)
      }
      let tmp = [colorR,colorG,colorB].map(this.toHex)
      let color = this.toDouble(tmp[0]) + this.toDouble(tmp[1]) + this.toDouble(tmp[2])
      this.showColor = color
    },

    changeToRGB(){
      let color = this.colorHex
      if(!color){
        color = '000000'
      }
      color = color.replace('#','')
      if(!this.validateHex(color)){
        this.colorHex = ''
        return alert('请输入正确的十六进制')
      }
      this.showColor2 = color
    },

    validateHex(s){
      let arr = s.split('')
      let flag = true
      arr.forEach(item => {
        let t = item.toUpperCase().charCodeAt()
        if(!((t >= 48 && t <= 57) || (t >= 65 && t <= 70))){
          flag = false
        }
      })
      return flag
    },

    reset(type){
      if(type === 1){
        this.colorR = ''
        this.colorG = ''
        this.colorB = ''
        this.showColor = '000000'
      }else if(type === 2){
        this.colorHex = ''
        this.showColor2 = '000000'
      }
    },

  }
}
</script>

