<template>
  <div class="cover relative">
    <div class="main-container h-full relative">
      <div class="w-[640px] absolute right-0 top-1/2 transform -translate-y-1/2">
        <img
            :src="source"
            :alt="`cover-${id}`"
            class="w-full"
        >
      </div>
      <div
          class="text-white absolute left-0 top-1/2 transform -translate-y-1/2 w-[60%] "
          :style="{ fontSize: fontSize + 'px' }"
      >
        {{ title }}
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
  source: {
    type: [String, Object],
    required: true
  },
  fontSize: {
    type: Number,
    default: 60
  },
})

const id = useId()

defineOptions({name: 'Cover'})
</script>

<style scoped>
.cover {
  @apply h-screen bg-gradient_from;
  position: relative;
}

.main-container {
  position: relative;
  height: 100%;
}
</style>
