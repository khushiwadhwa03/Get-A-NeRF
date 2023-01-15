<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Get A NeRF</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img src="../statics/bgim.jpg" class="header-image absolute-top" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="
          height: calc(100% - 192px);
          margin-top: 192px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> home </q-item-section>
          </q-item>
          <q-item to="/furniture" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="chair" />
            </q-item-section>

            <q-item-section> furniture </q-item-section>
          </q-item>
          <q-item to="/car" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="directions_car" />
            </q-item-section>

            <q-item-section> cars </q-item-section>
          </q-item>
          <q-item to="/miss" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="beach_access" />
            </q-item-section>

            <q-item-section> miscellaneous </q-item-section>
          </q-item>

          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section> Help </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 192px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">USERNAME</div>
          <div>@userid</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from "quasar";
import { defineComponent, ref } from "vue";

export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd D MMMM");
    },
  },
};
</script>
<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.8;
}
</style>
