<template>
  <q-page>
    <b><h4 class="flex flex-center" padding-top:30px>CARS</h4></b>

    <q-card class="my-card">
      <q-img src="./imgs/nano.jpg">
        <div class="absolute-bottom text-h6">Tata Nano</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/city.jpg">
        <div class="absolute-bottom text-h6">Honda City</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/creta.jpg">
        <div class="absolute-bottom text-h6">Hyundai Creta</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/wagonr.jpg">
        <div class="absolute-bottom text-h6">Maruti WagonR</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/xuv.jpg">
        <div class="absolute-bottom text-h6">Mahindra XUV</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/fortuner.jpg">
        <div class="absolute-bottom text-h6">Toyota Fortuner</div>
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
  max-width: 250px
  padding-top: right 30px
  margin-right: 40px
  margin-bottom: 40px
  border: 8px solid
  border-color:white
  border-radius: 5px
</style>
