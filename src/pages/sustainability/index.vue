<template>
    <Cover :title="$t('sustain.dynamicTitle')" source="/assets/cover_15.jpg" />

    <Introduce :clients-config="clientsConfig"/>

    <Grid :grid/>

    <Tutor/>

    <Article cover="/assets/cover_12.jpg" class="bg-grey py-[150px] mb-[150px]">
      <div class="text-gradient_from text-[40px] mb-10">Get in touch</div>
      To find out more about our flexible and sustainable solutions for both providers and users of capital, please contact us.
    </Article>

    <News/>

</template>

<script setup>
import Introduce from '@/components/Intorduce.vue'
import Cover from '@/components/Cover.vue'
import Grid from '@/components/Grid.vue'
import { useSustainGird } from '@/config/index.js'
import Tutor from "@/components/Tutor.vue";
import Article from "@/components/Article.vue";
import News from "@/components/News.vue";

const clientsConfig = useSustainGird(1)

const grid = useSustainGird()

defineOptions({ name: 'sustainability' })
</script>

<style scoped>

</style>
