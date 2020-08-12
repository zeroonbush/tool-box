<template>
  <div class="home">
    <h2>快速导航</h2>
    <ul class="home-nav">
      <li v-for="(item,index) in items">
         <router-link :to="item.link" tag="a" class="home-link">{{item.label}}</router-link> 
      </li>
    </ul>
    
  </div>
</template>

<script>


const items = [
  { link:'/qrcode', label:'生成二维码' },
  { link:'/radix-convert', label:'进制转换' },
  { link:'/json-beautiful', label:'JSON格式化' },
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
