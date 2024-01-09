<template>
  <div>
    <textarea class="textarea" v-model="str"></textarea>
    <div>
      <p>Tips: 不需要输入data:image/png;base64,的前缀</p>
      <button @click="handleShow">展示图片</button>
      <button @click="handleClear">清除图片</button>
    </div>
    <img class="img" :src="'data:image/png;base64,'+imgStr" alt="" />
  </div>
</template>

<script>
export default {
  name:'base64ToImg',
  data(){
    return {
      str:'',
      imgStr:''
    }
  },
  methods:{
    handleShow(){
      this.imgStr = this.str
    },
    handleClear(){
      this.imgStr = ''
    }
  }
}


</script>
<style lang="scss" scoped>
.textarea {
  width: 80%;
  height: 300px;
  margin: 0 auto;
  resize: none;
}
.img {
  width: 500px;
  border: 1px solid #ccc;
}
</style>