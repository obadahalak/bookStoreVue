<template>
    <v-row>
        <v-col  sm="5" style="margin-top: 8s0px;">
            <v-img class="bg-white" width="499" fluid src="../images/10808.png" justify-center></v-img>
        </v-col>
        <v-col sm="5" style="margin-top: 120px;">
            <v-row><v-col><p style="text-align: center;">Enter Your Code To Reset Your Password</p></v-col></v-row>
            <br><br><br>
            <v-row>
                <v-col><p>Enter Your Code </p></v-col>
                <v-col md="8">
                    <v-form ref="form">
                    <v-text-field v-model="model" :counter="max" :rules="rules" label="Your Code"></v-text-field>
                    </v-form>
                </v-col>
            </v-row>
       </v-col>
    </v-row>
</template>
  
  <script>
    export default {
      data: () => ({
        width: 300,
        aspectRatio: 16 / 9,
        aspectRatios: [
          {
            title: '16/9',
            value: 16 / 9,
          },
          {
            title: '4/3',
            value: 4 / 3,
          },
          {
            title: '1/1',
            value: 1,
          },
        ],
      }),
    }
  </script>
  <style scoped>
  p{
    font-family: segoe ui;
    font-size: 20px;
     margin-top:15px;
  }
  </style>
  