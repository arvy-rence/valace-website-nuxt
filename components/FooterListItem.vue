<template>
    <NuxtLink :to="linkDestination" @click="test()">
        <li class="font-kulim hover:underline">
            <slot/>
        </li>
    </NuxtLink>
</template>

<script>
export default {
    name: 'FooterListItem',
    props: {
        href: {
            type: String,
            required: true
        }
    },
    methods: {
        test() {
            console.log(this.linkDestination)
        }
    },
    computed: {
        linkDestination() {
            return `${this.href}`;
        },
    },
}
</script>

<style>
    .hoverable {
        transition:
    }
</style>