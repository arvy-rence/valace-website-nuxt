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
            }
        ]
    })
</script>
