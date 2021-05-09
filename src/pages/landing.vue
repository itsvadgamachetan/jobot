<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600&display=swap');
body{font-family:'Nunito', sans-serif;display:flex;justify-content:center;margin-top:30px;box-shadow: none;border-radius: 4px;background: #fff;}
/* Landing CSS */
.jb-s-title{font-size: 26px;
    line-height: 36px;
    font-weight: 500;
    color: #333;
    margin: 0;
    padding: 0;
    text-transform: none;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;}
    .jb-s-subtitle{
      font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    color: #888;
    margin-top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    }
    .jb-second-page{
      padding: 15px 15px;
      font-weight: 300;
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }
    .jb-s-icon{
      color: #23b3e7;
         width: 20px;
         margin-right: 10px;
    }
    .current-location{
       font-weight: 600;
    }
    .jb-card{
       box-shadow: 0 4px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 10%);
       border: none;
    }
    .jb-b-btn{
      background-color: rgba(35,179,231,0.04) !important;
      color: #23b3e7;
      text-transform: none;
      font-size: 15px;
    }
    .text-h6{
      flex-wrap: nowrap;
      line-height: 24px;
    }
    .q-field__bottom{padding-left: 0;width: calc(100% + 216px);padding-right: 0;}
    .q-field__bottom .q-field__messages{line-height: 15px;}
.jb-second .jb-btn{min-width: 200px;padding: 0 10px;background:#28B2E6;box-shadow:0 1px 6px rgba(0,0,0,0.102);border-radius:4px;cursor:pointer;color:#FFF;position:relative;border-radius:4px;font-weight:400;font-size:16px;line-height:20px;font-size:16px;-webkit-transition:all .35s ease;transition:all .35s ease;text-align:center;text-decoration:none;height:55px;text-transform:capitalize}
@media screen and (max-width: 650px) {
.jb-s-icon{
   width: 21px;
   min-width: 21px;
}
   .text-h6 {
      align-items: self-start;
      margin-top: 10px;
   }
}
</style>
<template>
   <div class="q-pa-md jb-second">
      <q-layout>
         <q-page-container>
           <q-page class="jb-second-page">
            <div class="row q-col-gutter-xl">
               <div class="col-12 col-md-6 q-gutter-sm">
                  <div class="jb-s-l">
                        <h2 class="jb-s-title">Getting Started</h2>
                        <p class="jb-s-subtitle">Let the jobs come to you</p>
                        <q-card class="jb-card my-card q-pa-md">
                           <q-card-section>
                             <div class="text-h6 flex"> 
                              <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="briefcase" class="jb-s-icon svg-inline--fa fa-briefcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                 <path d="M448 96H384V48C384 21.531 362.469 0 336 0H176C149.531 0 128 21.531 128 48V96H64C28.654 96 0 124.654 0 160V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V160C512 124.654 483.348 96 448 96ZM160 48C160 39.172 167.172 32 176 32H336C344.828 32 352 39.172 352 48V96H160V48ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V288H176V352C176 360.844 183.156 368 192 368H320C328.844 368 336 360.844 336 352V288H480V416ZM208 336V288H304V336H208ZM480 256H32V160C32 142.355 46.355 128 64 128H448C465.645 128 480 142.355 480 160V256Z" fill="currentColor"/>
                              </svg>
                              <div class="jb-jobloc">Be the first to see the newest jobs near <span class="current-location">Florida</span></div>
                              
                           </div>
                           </q-card-section>
                     
                           <q-separator inset />
                     
                           <q-card-section>
                              <div class="card flex no-wrap">
                                 <q-input outlined v-model="text" label="My email" class="full-width" hint="Alerts are free and you can cancel them at any time."/>
                                 <q-btn side class="jb-btn q-ml-md" label="Create New Alert" />
                              </div>
                           </q-card-section>
                         </q-card>

                  </div>
               </div>
               <div class="col-12 col-md-6">
                  <div class="jb-s-r">
                     <h2 class="jb-s-title">Your Favorite Searches</h2>
                     <p class="jb-s-subtitle">One click away from the newest jobs</p>
                     <q-card class="jb-card my-card q-pa-md">
                        <q-card-section>
                          <div class="text-h6 flex"> 
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-regular" data-icon="magnifying-glass" class="jb-s-icon svg-inline--fa fa-magnifying-glass fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M504.969 471.031L370.959 337.023C399.084 301.547 416 256.785 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C256.785 416 301.549 399.086 337.021 370.961L471.031 504.969C475.719 509.656 481.859 512 488 512S500.281 509.656 504.969 504.969C514.344 495.594 514.344 480.406 504.969 471.031ZM48 208C48 119.777 119.775 48 208 48S368 119.777 368 208S296.225 368 208 368S48 296.223 48 208Z" fill="currentColor"/>
                           </svg>
                           Recent Searches</div>
                        </q-card-section>
                        <q-separator inset />
                        <q-card-section>
                           <div class="q-gutter-sm">
                              <q-btn class="jb-b-btn" outline label="Front End Web Developer - Javascript" v-for="n in 2" :key="`xs-${n}`" />
                              <q-btn class="jb-b-btn" outline label="Web / Data Analyst" v-for="n in 2" :key="`xs-${n}`" />
                              <q-btn class="jb-b-btn" outline label="Affiliate Marketing Executive" v-for="n in 1" :key="`xs-${n}`" />
                            </div>
                        </q-card-section>
                           
                        <q-card-section class="q-mt-lg">
                           <div class="text-h6 flex"> 
                              <svg aria-hidden="true" focusable="false" data-prefix="fa-regular" data-icon="print-magnifying-glass" class="jb-s-icon svg-inline--fa fa-print-magnifying-glass fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                 <path d="M632.969 471.031L553.854 391.914C567.811 371.414 576 346.672 576 320C576 249.309 518.693 192 448 192S320 249.309 320 320S377.307 448 448 448C474.672 448 499.412 439.809 519.914 425.852L599.031 504.969C603.719 509.656 609.844 512 616 512S628.281 509.656 632.969 504.969C642.344 495.594 642.344 480.406 632.969 471.031ZM448 400C403.889 400 368 364.113 368 320S403.889 240 448 240S528 275.887 528 320S492.111 400 448 400ZM111.998 48H366.061L400 81.943V160H448V81.943C448 69.213 442.943 57.006 433.943 48.004L400.004 14.061C391.002 5.057 378.793 0 366.061 0H111.998C85.494 0 64.012 21.479 64 47.982V75.422L64.004 130.264C64.002 130.264 64.002 130.264 64 130.264V160H112.006L111.998 48ZM128 464V368H296.141C291.318 352.756 288 336.84 288 320H112C94.326 320 80 334.326 80 352H48V264C48 250.766 58.766 240 72 240H310.193C321.123 221.223 335.531 204.92 352.879 192H72C32.297 192 0 224.297 0 264V376C0 389.25 10.75 400 24 400H80V480C80 497.672 94.326 512 112 512H400C417.674 512 432 497.672 432 480V478.387C413.32 476.506 395.633 471.746 379.41 464H128Z" fill="currentColor"/>
                              </svg>
                            Popular Searches</div>
                         </q-card-section>
                         <q-separator inset />
                         <q-card-section>
                            <div class="q-gutter-sm">
                               <q-btn class="jb-b-btn" outline label="Software Engineer" v-for="n in 2" :key="`xs-${n}`" />
                               <q-btn class="jb-b-btn" outline label="Construction" v-for="n in 1" :key="`xs-${n}`" />
                               <q-btn class="jb-b-btn" outline label="Affiliate Marketing Executive" v-for="n in 1" :key="`xs-${n}`" />
                             </div>
                         </q-card-section>
                      </q-card>
                  </div>
               </div>
             </div>
           </q-page>
         </q-page-container>
       </q-layout>
   </div>
 </template>

 <script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
 
 </script>

 
