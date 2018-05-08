<template>
  <div>
    <input v-hello v-validate v-model="modelValue" type="text" name="fname" value="" ／>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        modelValue: 1
      }
    }
  }
</script>