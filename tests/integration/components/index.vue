<template>
  <div>
    <input v-hello v-validate.initial rules="isRequired" v-model="modelValue" type="text" name="fname" value="" ／>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        modelValue: ''
      }
    }
  }
</script>