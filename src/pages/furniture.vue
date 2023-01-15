<script>
// import { defineComponent } from "vue";
// import axios from "axios";
// $(".button").on("click",
//     function () {
//         var exec = require('child_process').exec;

// app.post('/exec', function(req, res) {
//   var cmd = req.body.command;

//   exec(cmd, function(error, stdout, stderr) {
//     if (stderr || error) {
//       res.json({
//         success: false,
//         error: stderr || error,
//         command: cmd,
//         result: null
//       })
//     } else {
//       res.json({
//         success: true,
//         error: null,
//         command: cmd,
//         result: stdout
//       })
//     }
//   })

// })

//    //run ajax to node with command for example "node socket.io"
//  });
// function trial() {
//   const { exec } = require("child_process");

//   exec("start chrome", (error, stdout, stderr) => {
//     if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//   });
// }

export default {
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
  methods: {
    minimize() {
      this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize();
      // handler() {
      //   const exec = require("child_process").exec;

      //   exec("start chrome", (error, stdout, stderr) => {
      //     if (error) {
      //       console.log(`error: ${error.message}`);
      //       return;
      //     }
      //     if (stderr) {
      //       console.log(`stderr: ${stderr}`);
      //       return;
      //     }
      //     console.log(`stdout: ${stdout}`);
      //   });
      // },
    },
  },
};
</script>
<template>
  <q-page>
    <b><h4 class="flex flex-center" padding-top:30px>FURNITURE</h4></b>
    <q-card class="my-card">
      <q-img src="./imgs/bench.jpg">
        <div class="absolute-bottom text-h6">bench</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/brchair.jpg">
        <div class="absolute-bottom text-h6">boardroom chair</div>
      </q-img>

      <!-- <button onClick="trail()">click me</button> -->
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/pchair.jpg">
        <div class="absolute-bottom text-h6">plastic chair</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/fp.jpg">
        <div class="absolute-bottom text-h6">flower pot</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/smallcab.jpg">
        <div class="absolute-bottom text-h6">small cabinet</div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="./imgs/bcabinet.jpg">
        <div class="absolute-bottom text-h6">cabinet</div>
      </q-img>
    </q-card>
  </q-page>
</template>

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
