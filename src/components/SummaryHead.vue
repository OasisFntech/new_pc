<template>
  <div class="w-[100%] h-[500px]">
    <div>
      <div class="image-container">
        <img :src="image" alt="Post Image" width="500" height="275" />
      </div>
      <div class="text-container">
        <h2 class="post-title">
          <a class="no-underline">{{ title }}</a>
        </h2>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

defineOptions({ name: 'SummaryHead' })
</script>

<style scoped>
/* 可根据需要添加样式 */
</style>
