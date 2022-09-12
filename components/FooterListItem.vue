<template>
    <NuxtLink :to="linkDestination">
        <li class="font-kulim" :class="isLink ? 'hover:underline' : ''">
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
        },
        isLink: {
            type: Boolean,
            default: false
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

</style>