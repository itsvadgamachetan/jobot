<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
body{font-family:'Poppins',sans-serif;display:flex;justify-content:center;margin-top:30px;box-shadow: none;border-radius: 4px;background: #fff;}
/* Notification CSS */
.jb-notify .text-h6{font-weight:400;display: flex;justify-content: flex-start;align-items: center;}
.jb-notify .text-weight-medium{color:#222}
.jb-btn{background:#28B2E6;box-shadow:0 1px 6px rgba(0,0,0,0.102);border-radius:4px;cursor:pointer;color:#FFF;padding:0 30px;position:relative;border-radius:4px;font-weight:400;font-size:16px;line-height:20px;font-size:16px;-webkit-transition:all .35s ease;transition:all .35s ease;text-align:center;text-decoration:none;height:40px;max-width:135px;text-transform:capitalize}
.jb-btn-white{background:#fff;color:#222;box-shadow:0 1px 6px rgba(0,0,0,0.052);border:1px solid #222}
.jb-notify .jb-nlist{border-bottom:none!important;padding-bottom:50px}
.jb-notify .jb-nlist .q-item{padding-right:0!important;padding-left:10px!important}
.jb-notify .jb-pr-lg{padding-right:80px!important}
@media screen and (max-width: 580px) {
.jb-notify .jb-pr-lg{padding-right:20px!important} 
.jb-btn{padding:0 15px;}}
</style>

<template>
   <q-card flat bordered class="my-card jb-notify q-ma-lg">
      <q-card-section class="bg-grey-1 text-black">
         <div class="text-h6">
            <q-avatar square size="20px" class="q-mr-md"><img src="../assets/bell.svg" alt="Notification"></q-avatar>
            Notification preferences
         </div>
      </q-card-section>
      <q-list bordered separator>
         <q-item>
            <q-item-section>
               <q-item-label class="text-weight-medium">Allow Notification</q-item-label>
            </q-item-section>
            <q-item-section side>
               <q-toggle v-model="value" color="28B2E6" />
            </q-item-section>
         </q-item>
      </q-list>
      <q-list dense padding class="q-px-sm q-pt-lg">
         <q-item>
            <q-item-section>
               <q-item-label class="text-weight-medium">Notification</q-item-label>
            </q-item-section>
            <q-item-section side class="jb-pr-lg text-weight-medium">Email </q-item-section>
            <q-item-section class="text-weight-medium" side>Text/SMS </q-item-section>
         </q-item>
      </q-list>
      <q-list dense bordered padding class="jb-nlist q-mx-md q-mt-none">
         <!-- Repeat Data Start -->
         <q-item>
            <q-item-section>
               <q-item-label>Job Alerts</q-item-label>
            </q-item-section>
            <q-item-section side class="jb-pr-lg">
               <q-toggle v-model="first" color="28B2E6" />
            </q-item-section>
            <q-item-section side>
               <q-toggle v-model="second" color="28B2E6" />
            </q-item-section>
         </q-item>
         <q-item>
            <q-item-section>
               <q-item-label >Interviews </q-item-label>
            </q-item-section>
            <q-item-section side class="jb-pr-lg">
               <q-toggle v-model="third" color="28B2E6" />
            </q-item-section>
            <q-item-section side>
               <q-toggle v-model="fourth" color="28B2E6" />
            </q-item-section>
         </q-item>
         <q-item>
            <q-item-section>
               <q-item-label >Direct messages </q-item-label>
            </q-item-section>
            <q-item-section side class="jb-pr-lg">
               <q-toggle v-model="five" color="28B2E6" />
            </q-item-section>
            <q-item-section side>
               <q-toggle v-model="six" color="28B2E6" />
            </q-item-section>
         </q-item>
         <!-- Repeat Data End -->
      </q-list>
      <q-list bordered separator>
         <q-item class="justify-end q-pa-md">
            <q-card-actions side class="text-right">
               <q-btn class="jb-btn jb-btn-white" label="Cancel" />
               <q-btn class="jb-btn" label="Update" />
            </q-card-actions>
         </q-item>
      </q-list>
   </q-card>
</template>
<script>
   export default {
     data () {
       return {
         value: true,
         first: true,
         second: true,
         third: false,
         fourth: true,
         five: true,
         six: true,
       }
     }
   }
</script>