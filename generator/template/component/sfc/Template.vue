<template>
  <div class="HelloWorld_container">
    <h1>Hello{{ str }}</h1>
    <button @click="handleStrChange">Change Hello</button>
  </div>
</template>

<script>
/**
 * @file HelloWorld
 */
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const str = ref('World');

    /**
     * @function ChangeStr
     * @description handle str change
     */
    const handleStrChange = () => {
      str.value = 'Vue';
    };

    return {
      str,
      handleStrChange,
    };
  },
});
</script>

<style>
</style>
