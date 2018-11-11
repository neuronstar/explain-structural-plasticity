<template>
  <div id="app">
    <Navbar></Navbar>
    <Elements></Elements>
  </div>
</template>

<script>
import WelcomeMessage from 'components/Home/WelcomeMessage'
import Navbar from 'components/Navbar'
import Elements from 'components/Animie/Elements'

export default {
  components: {
    'WelcomeMessage': WelcomeMessage,
    'Navbar': Navbar,
    'Elements': Elements
  }
}
</script>
