<template>
  <v-navigation-drawer
    :mini-variant="minifiedSidebar"
    fixed
    app
    class="blue accent-4"
    dark
  >
    <v-list-item>
      <v-list-item-content>
        <white-logo />
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template #append>
      <v-list>
        <v-list-item @click.stop="toggleSidebar">
          <v-list-item-content>
            <v-icon>mdi-arrow-left-right-bold</v-icon>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapMutations } from 'vuex'
import WhiteLogo from '@/components/logo/WhiteLogo'

export default {
  name: 'Sidebar',
  components: {
    WhiteLogo,
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-file-document-multiple-outline',
          title: 'Reports',
          to: '/reports',
        },
      ],
      miniVariant: false,
    }
  },
  computed: {
    minifiedSidebar() {
      return this.$store.state.sessionStorage.minifiedSidebar
    },
  },
  methods: {
    ...mapMutations({
      toggleSidebar: 'sessionStorage/toggleSidebar',
    }),
  },
}
</script>
