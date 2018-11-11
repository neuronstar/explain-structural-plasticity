<template>
    <div v-anime="{ rotate: '1turn', backgroundColor: '#000', duration: 2000, loop: true }">
        asda
    </div>
</template>

<script>
import Vue from 'vue'
import VueAnime from 'vue-animejs'
Vue.use(VueAnime)

export default {
    name: 'Elements',
    data() {
        return {
            width: 500
        };
    },
   mounted() {
        const targets = this.$el;
        this
        .$anime
        .timeline()
        .add({
            targets,
            translateX: 250,
            easing: 'easeOutExpo',
        })
        .add({
            targets,
            translateX: 250,
            easing: 'easeOutExpo',
        });
        /* ... etc ... */
    },
}
</script>
