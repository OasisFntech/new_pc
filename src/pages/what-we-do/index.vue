<template>
    <Cover :title="$t('what.dynamicTitle')" source="/assets/cover_2.jpg" font-size="42"/>

    <Introduce :clients-config="clientsConfig" />

    <!-- 数据统计 -->
    <div class="main-container">
      <div class="text-[42px] text-gradient_from mb-5">
        {{ $t('what.summary.title') }}
      </div>

      <div class="grid grid-cols-3 gap-12 pb-[150px]">
        <div
            v-for="n in 3"
            :key="n"
            class="items"
        >
          <div class="text-[50px] text-gradient_from font-bold">
            {{ $t(`what.summary.stats[${n - 1}].value`) }}
          </div>
          <div class="my-5 text-lg w-[200px]">
            {{ $t(`what.summary.stats[${n - 1}].description`) }}
          </div>
          <div class="text-xs">
            {{ $t(`what.summary.stats[${n - 1}].date`) }}
          </div>
        </div>
      </div>
    </div>

    <!--  数据统计2  -->
    <div class="icg-platform flex flex-col items-center justify-center text-center text-gradient_from pb-[150px]">
      <div class="w-[30%] mb-8">
        <h2 class="text-[42px] mb-6">{{ $t('what.summary1.title') }}</h2>
        <div class="text-[20px] mb-5 leading-relaxed">{{ $t('what.summary1.description') }}</div>
      </div>

      <div class="circles flex justify-center space-x-8">
        <div
            v-for="n in 3"
            :key="n"
            class="items1"
        >
          <h3 class="text-[30px]">{{ $t(`what.summary1.list[${n - 1}].title`) }}</h3>
          <div class="h-[10%]"></div>
          <p class="w-[50%]">{{ $t(`what.summary1.list[${n - 1}].description`) }}</p>
          <h4 class="text-[20px]">{{ $t(`what.summary1.list[${n - 1}].value`) }}</h4>
        </div>
      </div>

    </div>

    <Article cover="/assets/article_1.jpg" class="bg-grey py-[150px] mb-[150px]">
      <div>{{ $t('what.articles.first.desc') }}</div>
    </Article>

    <Article cover="/assets/article_2.jpg" class="bg-grey py-[150px] mb-[150px]">
      <div class="text-gradient_from text-[40px] mb-10">{{ $t('what.articles.second.title') }}</div>
      {{ $t('what.articles.second.desc') }}
    </Article>

    <Tutor/>
    <News/>

    <Grid :grid="grid" />

    <Article cover="/assets/article_3.jpg" class="bg-grey py-[150px] mb-[150px]">
      <div class="text-gradient_from text-[40px] mb-10">{{ $t('what.articles.third.title') }}</div>
      {{ $t('what.articles.third.desc') }}
    </Article>

    <Grid :grid="grid1" />

</template>

<script setup>
import Introduce from "@/components/Intorduce.vue"
import { useWhatGird } from "@/config/index.js"
import Grid from "@/components/Grid.vue"
import Cover from '@/components/Cover.vue'
import Article from "@/components/Article.vue"
import News from "@/components/News.vue"
import Tutor from "@/components/Tutor.vue"

const clientsConfig = useWhatGird(1)
const grid = useWhatGird()
const grid1 = useWhatGird(3)

defineOptions({ name: 'who-we-do' })
</script>

<style scoped>

.items {
  @apply border border-primary flex flex-col items-center py-14 text-center;
}

.items1 {
  @apply circle flex flex-col items-center justify-center text-center p-6 bg-[#2a7a85] rounded-full text-white;
  width: 20vw;
  height: 20vw;
}

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
