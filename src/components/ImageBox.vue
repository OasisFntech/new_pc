<template>
    <div class="image-box" :class="containerClass">
        <img
            :src="source"
            :alt="alt ?? `image-box-${id}`"
            :class="imageClass"
            class="size-full"
        >

        <div class="image-box-container" :class="$attrs.class">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    source: {
        type: [ String, Object ],
        required: true
    },
    alt: String,
    containerClass: [ String, Array, Object ],
    imageClass: [ String, Array, Object ]
})

const id = useId()

defineOptions({ name: 'ImageBox', inheritAttrs: false })
</script>

<style scoped>
.image-box {
    @apply relative h-max;
}

.image-box-container {
    @apply absolute w-full h-full left-0 top-0;
}
</style>
