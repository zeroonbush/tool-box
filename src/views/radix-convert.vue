<template>
  <div class="radix">
    <h2>进制转换工具</h2>
    <div class="radix-cont">
      <div class="radix-cont-select">
        <label>
          <input type="radio" v-model="fromRadix" value="2">
          <span class="radix-num">2进制</span>
        </label>
        <label>
          <input type="radio" v-model="fromRadix" value="8">
          <span class="radix-num">8进制</span>
        </label>
        <label>
          <input type="radio" v-model="fromRadix" value="10">
          <span class="radix-num">10进制</span>
        </label>
        <label>
          <input type="radio" v-model="fromRadix" value="16">
          <span class="radix-num">16进制</span>
        </label>
        <select v-model="fromRadix">
          <option v-for="n in 35" :value="n+1">{{n+1}}进制</option>
        </select>
      </div>
      <div class="radix-cont-show">
        原始数字: <input v-model="originalNum" />
      </div>
    </div>

    <p style="color: #C0C0C0;">下面是转换的结果:</p>
    <div class="radix-cont">
      <div class="radix-cont-select">
        <label>
          <input type="radio" v-model="toRadix" value="2">
          <span class="radix-num">2进制</span>
        </label>
        <label>
          <input type="radio" v-model="toRadix" value="8">
          <span class="radix-num">8进制</span>
        </label>
        <label>
          <input type="radio" v-model="toRadix" value="10">
          <span class="radix-num">10进制</span>
        </label>
        <label>
          <input type="radio" v-model="toRadix" value="16">
          <span class="radix-num">16进制</span>
        </label>
        <select v-model="toRadix">
          <option v-for="n in 35" :value="n+1">{{n+1}}进制</option>
        </select>
      </div>
      <div class="radix-cont-show">
        转换数字: <input v-model="changeNum" />
      </div>
    </div>

  </div>
</template>

<script>



export default {
  name: 'radix',
  data(){
    return {
      fromRadix:'10',
      toRadix:'2',
      originalNum:10
    }
  },
  computed:{
    changeNum(){
      return parseInt(this.originalNum, this.fromRadix).toString(this.toRadix)
    }
  }
}
</script>

