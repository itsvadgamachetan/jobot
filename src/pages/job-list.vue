<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
body{font-family:'Poppins',sans-serif;display:flex;justify-content:center;margin-top:30px;box-shadow: none;border-radius: 4px;background: #fff;}
/* Job list CSS */
.jb-joblist .text-h6{font-weight:400;display: flex;justify-content: flex-start;align-items: center;}
.jb-joblist .text-weight-medium{color:#222}
.jb-joblist .text-h6 .jb-btn{min-width: 170px;padding: 0 10px;}
.jb-joblist .jb-btn{background:#28B2E6;box-shadow:0 1px 6px rgba(0,0,0,0.102);border-radius:4px;cursor:pointer;color:#FFF;padding:0 30px;position:relative;border-radius:4px;font-weight:400;font-size:16px;line-height:20px;font-size:16px;-webkit-transition:all .35s ease;transition:all .35s ease;text-align:center;text-decoration:none;height:40px;max-width:135px;text-transform:capitalize}
.jb-joblist .load-more-link img{padding-left:5px;}
.jb-joblist .load-more-link:hover{opacity: 0.7;}
.jb-joblist .load-more-link{letter-spacing: 0.933333px;text-transform: uppercase;color: #28B2E6;font-weight: 600;font-size: 14px;line-height: 21px;text-decoration: none;}
.jb-joblist .q-item__label{line-height: 1.4em !important;}
.jb-joblist .q-pr-sm-i{padding-right: 15px !important}
@media screen and (max-width: 580px) {
.jb-joblist .jb-pr-lg{padding-right:20px!important} 
.jb-joblist .jb-btn{padding:0 15px;}}
</style>

<template>
   <q-card flat bordered class="my-card jb-joblist q-ma-lg">
      <q-card-section class="bg-grey-1 text-black">
         <div class="text-h6">
            <q-avatar square size="20px" class="q-mr-md"><img src="../assets/list.svg" alt="Job Alerts"></q-avatar>
            Job Alerts
            <q-btn side class="jb-btn q-ml-auto" label="Add New Alert" />
         </div>
      </q-card-section>
      <q-list bordered separator>
         <q-item class="q-py-lg q-pr-none">
            <q-item-section avatar>
               <q-avatar square size="30px"><img src="../assets/user.svg" alt="User generated"></q-avatar>
            </q-item-section>
            <q-item-section class="col-4">
              <q-item-label><span class="text-weight-medium q-mr-sm">Alert Name</span><span class="text-grey-8">Front end developer</span></q-item-label>
              <q-item-label lines="2"><span class="text-weight-medium q-mr-sm">Date</span><span class="text-grey-8">06-05-2021</span></q-item-label>
            </q-item-section>
            <q-item-section class="col-4">
               <q-item-label><span class="text-weight-medium q-mr-sm">Alert Name</span><span class="text-grey-8">Front end developer</span></q-item-label>
               <q-item-label lines="2"><span class="text-weight-medium q-mr-sm">Status</span><span class="text-green-5 text-weight-regular">Enabled</span></q-item-label>
             </q-item-section>
            <q-item-section side class="q-ml-auto q-pr-sm-i">
               <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="more_vert" />
               </div>
            </q-item-section>
          </q-item>
          <q-item class="q-py-lg q-pr-none">
            <q-item-section avatar>
               <q-avatar square size="30px"><img src="../assets/user.svg" alt="User generated"></q-avatar>
            </q-item-section>
            <q-item-section class="col-4">
              <q-item-label><span class="text-weight-medium q-mr-sm">Alert Name</span><span class="text-grey-8">Front end developer</span></q-item-label>
              <q-item-label lines="2"><span class="text-weight-medium q-mr-sm">Date</span><span class="text-grey-8">06-05-2021</span></q-item-label>
            </q-item-section>
            <q-item-section class="col-4">
               <q-item-label><span class="text-weight-medium q-mr-sm">Alert Name</span><span class="text-grey-8">Front end developer</span></q-item-label>
               <q-item-label lines="2"><span class="text-weight-medium q-mr-sm">Status</span><span class="text-red-5 text-weight-regular">Disabled</span></q-item-label>
             </q-item-section>
            <q-item-section side class="q-ml-auto q-pr-sm-i">
               <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="more_vert" />
               </div>
            </q-item-section>
          </q-item>
       </q-list>
      <q-list separator>
         <q-item class="justify-center q-pa-md">
            <q-card-actions side class="text-center">
              <a href="#" class="load-more-link">Load more <img src="../assets/down-arrow.svg" alt="load more"> </a>
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