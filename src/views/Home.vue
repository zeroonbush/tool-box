<template>
  <div class="home">
    <h2>快速导航</h2>
    <ul class="home-nav">
      <li v-for="item of items" :key="item.id">
         <router-link :to="item.link" tag="a" class="home-link">{{item.label}}</router-link> 
      </li>
    </ul>
    
  </div>
</template>

<script>


const items = [
  { id:1, link:'/qrcode', label:'生成二维码' },
  { id:2, link:'/radix-convert', label:'进制转换' },
  { id:3, link:'/json-beautiful', label:'JSON格式化' },
  { id:4, link:'/color-picker', label:'颜色选择器' },
  { id:5, link:'/code-img', label:'生成代码截图' },
  
]

export default {
  name: 'Home',
  data(){
    return {
      items
    }
  }

}
</script>
