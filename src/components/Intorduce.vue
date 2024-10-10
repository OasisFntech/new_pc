<template>
  <div class="bg-white">
      <div class="main-container mt-[200px] mb-[150px] flex items-center justify-between">
          <div class="w-[600px]">
              <div class="text-gradient_from text-[70px] mb-5">
                  {{ clientsConfig.title }}
              </div>

              <div class="text-2xl normal-case leading-9">
                  {{ clientsConfig.description }}
              </div>

              <ul class="text-2xl normal-case leading-9 mt-8 ml-3">
                  <li v-for="(link, index) in clientsConfig.links" :key="index" class="hover:text-primary">
                      <a :href="link.url" v-html="link.label"></a>
                  </li>
              </ul>
          </div>

          <div class="introduction-right">
              <p class="text-[75%] leading-[48px]">
                  {{ clientsConfig.quote }}
              </p>
              <br/>
              <p class="text-xl mt-16">
                  {{ clientsConfig.author }}
              </p>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  clientsConfig: {
    type: Object,
    required: true,
  }
})
</script>

<style scoped>

ul {
  list-style: none;
  margin-left: 0;
  padding: 0;

  li {
    background-image: url('@/assets/images/link-arrow-blue.svg');
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 33px;
  }
}

.introduction-right {
  font-size: 30px;
  line-height: 40px;
  font-weight: 400;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -75px;
    left: -50px;
    width: 50px;
    height: 45px;
    background-image: url('@/assets/images/quote-icon.svg');
    background-size: cover;
    background-position: center;

    @include media-breakpoint-up(lg) {
      width: 79px;
      height: 73px;
      top: -105px;
      left: -79px;
    }
  }
}

.introduction-right {
    @apply w-[350px] text-[40px] relative;
}
</style>
