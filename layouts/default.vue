<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      fixed
      app
      class="deep-purple accent-4"
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
          <v-list-item @click.stop="miniVariant = !miniVariant">
            <v-list-item-content>
              <v-icon>mdi-arrow-left-right-bold</v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
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
import WhiteLogo from '@/components/logo/WhiteLogo'

export default {
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
          to: '/inspire',
        },
      ],
      miniVariant: false,
      title: 'Dcision',
    }
  },
}
</script>
