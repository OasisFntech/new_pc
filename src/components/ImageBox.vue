<template>
    <div class="image-box" :class="containerClass">
        <slot name="image">
            <img
                v-if="source"
                :src="source"
                :alt="alt ?? `image-box-${id}`"
                :class="imageClass"
                class="size-full"
            >
        </slot>

        <div class="image-box-container" :class="$attrs.class">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    source: {
        type: [ String, Object ]
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
