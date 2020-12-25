<template>
  <v-app dark>
    <Sidebar />
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Sidebar,
  },
  computed: {
    title() {
      return this.$store.state.title
    },
  },
  mounted() {
    this.title = ''
  },
  methods: {
    ...mapMutations({
      title: 'setTitle',
    }),
  },
}
</script>
