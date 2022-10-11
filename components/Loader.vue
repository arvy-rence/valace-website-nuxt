<template>
    <div v-if="isLoading" class="flex justify-center items-center">
        <span class="text-primary text-xl font-kulim font-bold uppercase pr-6">Loading</span>
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    name: "Loader",
    props: {
        isLoading: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
.loader {
    border: 14px solid #f3f3f3;
    border-top: 16px solid #00104A;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>