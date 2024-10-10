<template>
    <div>
        <div class="main-container pt-10 flex items-center">
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

defineOptions({ name: 'Header' })
</script>

<style scoped>
.header {
    @apply h-[90px] w-full fixed top-0 left-0 z-10;
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
