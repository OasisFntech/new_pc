<template>
  <Introduce :clients-config="clientsConfig" />

  <!-- 添加网格组件 -->
  <Grid :grid="grid" />
  <Grid :grid="grid1" />

  <div class="icg-platform flex flex-col items-center justify-center text-center text-gradient_from">
    <div class="w-[30%] mb-8">
      <h2 class="text-[42px] mb-6">The ICG platform</h2>
      <div class="text-[20px] mb-5 leading-relaxed">The breadth of our firm underpins our ability to invest across the capital structure and create value through cycles. Explore our flexible investment strategies and financing solutions.</div>
    </div>

    <div class="circles flex justify-center space-x-8">
      <div class="circle flex flex-col items-center justify-center text-center p-6 bg-[#2a7a85] rounded-full text-white" style="width: 20vw; height: 20vw;">
        <h3 class="text-[30px]">Corporate</h3>
        <div class="h-[10%]"></div>
        <p class="w-[50%]">Total assets under management (AUM)</p>
        <h4 class="text-[20px]">$70.9bn</h4>
      </div>

      <div class="circle flex flex-col items-center justify-center text-center p-6 bg-[#2a7a85] rounded-full text-white" style="width: 20vw; height: 20vw;">
        <h3 class="text-[30px]">Credit</h3>
        <div class="h-[10%]"></div>
        <p class="w-[50%]">Total AUM</p>
        <h4 class="text-[20px]">$18.2bn</h4>
      </div>

      <div class="circle flex flex-col items-center justify-center text-center p-6 bg-[#2a7a85] rounded-full text-white" style="width: 20vw; height: 20vw;">
        <h3 class="text-[30px]">Real Assets</h3>
        <div class="h-[10%]"></div>
        <p class="w-[50%]">Total AUM</p>
        <h4 class="text-[20px]">$11.3bn</h4>
      </div>
    </div>
  </div>

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import { useWhatGird } from "@/config/index.js"
import Grid from "@/components/Grid.vue";

const clientsConfig = useWhatGird(1)
const grid = useWhatGird()
const grid1 = useWhatGird(2)

defineOptions({ name: 'who-we-do' })
</script>

<style scoped>
.icg-platform {
  text-align: center;
  margin: 20px 0;
}

.circles {
  display: flex;
  justify-content: space-around;
}

.circle {
  border-radius: 50%;
  background-color: #2a7a85; /* 与图片相符的颜色 */
  color: white;
  padding: 20px;
  width: 200px; /* 根据需要调整大小 */
  text-align: center;
}

.circle h3 {
  margin: 0;
}

.circle p {
  margin: 5px 0;
}

.circle h4 {
  font-size: 1.5em;
  margin: 10px 0;
}

.circle a {
  color: white;
  text-decoration: underline;
}
</style>
