<template>
    <div class="header" :class="{ hide, bg }">
        <div class="main-container flex items-center">
            <router-link to="/">
                <img
                    alt="logo"
                    class="h-14"
                    :src="logoRes.logoAddress"
                >
            </router-link>

            <div class="nav">
                <router-link
                    v-for="{ title, path } in nav"
                    :key="path"
                    :to="path"
                    exact
                    class="nav-link"
                >
                    {{ title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSiteConfigStore } from 'frontend_common/store'

const { t } = useI18n()

const { logoRes } = storeToRefs(useSiteConfigStore())

const nav = computed(() => [
    {
        title: 'Clients',
        path: '/'
    },
    {
        title: 'who we are',
        path: '/who-we-are'
    },
    {
        title: 'what we do',
        path: '/what-we-do'
    },
    {
        title: 'sustainability',
        path: '/sustainability'
    },
    {
        title: 'people',
        path: '/people'
    }
])

const lastScrollY = ref(0),
    hide = ref(false),
    bg = ref(false)

const handleScroll = () => {
    bg.value = window.scrollY > 90
    hide.value = window.scrollY > lastScrollY.value
    lastScrollY.value = window.scrollY
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

defineOptions({ name: 'Header' })
</script>

<style scoped>
.header {
    @apply h-[90px] w-full fixed top-0 left-0 z-10 pt-8;
    transition: transform 0.3s ease;
}

.header.hide {
    transform: translateY(-100%);
}

.header.bg {
    background-image: linear-gradient(113.82deg, var(--gradient-from) 36.13%, var(--gradient-to) 122.32%);
}

.nav {
    @apply ml-auto flex items-center gap-4 text-white;
}

.nav-link {
    @apply leading-7 rounded-full px-5 border border-primary;
}

.nav .router-link-exact-active,
.nav-link:hover {
    @apply bg-white text-primary border-white;
}
</style>
