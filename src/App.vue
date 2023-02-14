<template>
  <div>{{ foo }}</div>
  <div>{{ str }}</div>
  <div>{{ count }}</div>
  <Test :title="test" :count="count" @plus="plus" />
</template>

<script>

import { reactive, ref, toRefs } from 'vue';
import Test from './components/Test'

export default {
  name: 'App',
  components: {
    Test
  },
  setup (props) {
    console.log(props)

    const state = reactive({
      count: 2
    })

    const str = ref('lxy')

    const test = ref('我是vue')

    setTimeout(() => {
      test.value = '我是vue3'
    }, 2000)

    const plus = (num) => {
      state.count += num
    }

    return {
      foo: 1,
      str,
      test,
      ...toRefs(state),
      plus
    }
  }
}
</script>
