<template>
    <Cover :title="$t('people.dynamicTitle')" source="/assets/cover_14.jpg"/>

    <Introduce :clients-config="clientsConfig"/>

    <Article cover="/assets/cover_12.jpg" class="bg-grey py-[150px] mb-[150px]">
      <div class="text-gradient_from text-[40px] mb-10">Opportunities at ICG</div>
      We offer a broad range of exciting and challenging careers at the forefront of the global alternative asset management industry.
      <div class="mt-10">
        As a successful and growing firm, we are always seeking talented professionals from a wide range of backgrounds and experiences to join our investment, corporate and client relations teams.
      </div>
    </Article>

    <Article cover="/assets/cover_12.jpg" class="bg-grey py-[150px] mb-[150px] text-[24px]" reverse>
      <div class="text-gradient_from text-[30px] mb-10">We know our markets</div>
      <div class="text-[24px]">Based in 19 worldwide locations, our teams form part of the local business landscape, and create value through unique market access based on meaningful insights and long-standing relationships.</div>
      <div class="mt-10 text-[24px]">
        The combination of our flexible investment solutions across the capital structure and our deep experience sets us apart as leaders in the industry.
      </div>
    </Article>

    <Article cover="/assets/cover_12.jpg" class="bg-grey py-[150px] mb-[150px] text-[24px]">
      <div class="text-gradient_from text-[30px] mb-10">An inclusive environment</div>
      <div class="text-[24px]">At ICG we cultivate a diversity of perspectives, and our Diversity, Equity and Inclusion (DEI) strategy plays a clear role in enhancing our performance and our impact.</div>
      <div class="mt-10 text-[24px]">
        We are particularly dedicated to broadening access to our industry and creating a future workforce that puts this diversity at its centre: 63% of our 2020 graduate programme were female, 37% identified as an ethnic minority and we run various internship programmes focused on supporting young people from underserved and underrepresented communities.
      </div>
      <div class="mt-10 text-[24px]">
        And we have committed to a wider corporate engagement agenda which focuses extensively on broadening access opportunities to create a more inclusive industry.
      </div>
    </Article>

    <Article cover="/assets/cover_12.jpg" class="bg-grey py-[150px] mb-[150px] text-[24px]" reverse>
      <div class="text-gradient_from text-[30px] mb-10">Attracting the most promising talent</div>
      <div class="text-[24px]">We ensure that people can thrive with the help of mentoring and development programmes aimed at all stages of their careers as well as a comprehensive wellbeing offering which supports our colleagues day‐to‐day and during key periods in their lives.</div>
    </Article>

    <Article cover="/assets/cover_12.jpg" class="bg-grey py-[150px] mb-[150px] text-[24px]">
      <div class="text-gradient_from text-[30px] mb-10">Our values and purpose</div>
      <div class="text-[24px]">We are creating sustainable value by partnering with ambitious businesses. Our culture centres around long‐term relationships with a wide range of stakeholders; sustainable investment excellence; and a world class team demonstrating integrity, diversity and collaboration.</div>
    </Article>

    <Grid :grid="grid" />

    <image-box
        source="/assets/home_cover.jpg"
        container-class="h-screen"
    >
      <div class="cover-title">
        {{ $t('home.imgTitle') }}
      </div>
    </image-box>

    <Grid :grid="grid1" />

    <Tutor/>

    <News/>

</template>

<script setup>
import {usePeopleGird, useWhatGird} from '@/config/index.js'
import Introduce from '@/components/Intorduce.vue'
import Grid from '@/components/Grid.vue'
import Cover from '@/components/Cover.vue'
import Article from "@/components/Article.vue"
import ImageBox from "@/components/ImageBox.vue";
import News from "@/components/News.vue";
import Tutor from "@/components/Tutor.vue";

const clientsConfig = usePeopleGird(1)
const grid = usePeopleGird()
const grid1 = useWhatGird(2)

defineOptions({ name: 'people' })
</script>

<style scoped>

</style>
