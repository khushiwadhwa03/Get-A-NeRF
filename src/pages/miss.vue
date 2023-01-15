<template>
  <q-page>
    <b><h4 class="flex flex-center" padding-top:30px>MISCELLANEOUS</h4></b>
    >
    <q-card class="my-card">
      <q-img src="./imgs/anushka.jpg">
        <div class="absolute-bottom text-h6">Anushka</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/tree.jpg">
        <div class="absolute-bottom text-h6">Engraved Tree Stump</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/bbinst.jpg">
        <div class="absolute-bottom text-h6">Vending Machine</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/bottle.jpg">
        <div class="absolute-bottom text-h6">Bottle</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/fire.jpg">
        <div class="absolute-bottom text-h6">Fire extinguisher</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/dog.jpg">
        <div class="absolute-bottom text-h6">Dog</div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default {
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>
<style lang="sass" scoped>
.my-card
  display: inline-block
  width: 100%
  max-width: 250px
  padding-top: right 30px
  margin-right: 40px
  margin-bottom: 40px
  border: 8px solid
  border-color:white
  border-radius: 5px
</style>
