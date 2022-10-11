<template>
    <div>
        <SectionHeader/>
        <NuxtPage/>
        <SectionFooter/>
    </div>
</template>

<script setup>
    useHead({
        link: [
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
            },
            {
                rel: "stylesheet",
                href: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
            },
        ],
        script: [
            {
                src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
            },
            {
                src: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
            }
        ]
    })
</script>
