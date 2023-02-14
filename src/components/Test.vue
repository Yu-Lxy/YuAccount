<template>
  <h1>{{ title }}</h1>
  <h2>{{ count }}</h2>
  <button @click="plus">增加</button>
</template>

<script>
import { watchEffect, watch } from 'vue'

export default {
    name: 'Test',
    props: {
        title: String,
        count: Number
    },
    emits: ['plus'],
    setup (props, ctx) {

        // watchEffect(() => {
        //     console.log(props.title)
        // })

        // watch(() => props.title, (newVal) => {
        //     console.log(newVal)
        // })

        const plus = () => {
            ctx.emit('plus', 100)
        }

        return {
            plus
        }
    }
}
</script>

<style>

</style>