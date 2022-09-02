<template>
    <div :class="[isChecked ? 'show' : 'hidden']">
        <h1 class="dark:bg-black dark:text-white font-bold underline">
            Hello world!
        </h1>
    </div><input type="checkbox" v-model="isChecked">
</template>


<script>
    import { teamInfo } from "../data/team";

    export default {
        name: "test",
        data() {
            return {
                isChecked: false
            }
        },
        methods: {
            onClick() {
                alert("Helo")
            }
        },
        created() {
            console.log(teamInfo)
        }
    }
</script>