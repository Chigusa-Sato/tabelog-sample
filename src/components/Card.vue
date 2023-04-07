<template>
<div>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/Card.vue</code> to test hot module replacement.</p>
</div>
</template>

<script>
export default {
  name: 'Cardß',
  props: {
    msg: String
  },
  data() {
    return {
      // count: 0Ï
    }
  }
}
</script>Ï
