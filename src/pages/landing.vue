<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600&display=swap');
body{font-family:'Nunito', sans-serif;display:flex;justify-content:center;margin-top:30px;box-shadow: none;border-radius: 4px;background: #fff;}
.jb-s-title{font-size:26px;line-height:36px;font-weight:500;color:#333;margin:0;padding:0;text-transform:none;text-align:center;width:100%;display:flex;justify-content:center}
.jb-s-subtitle{font-size:18px;line-height:26px;font-weight:300;color:#888;margin-top:0;display:flex;justify-content:center;width:100%}
.jb-second-page{padding:15px;font-weight:300;max-width:1400px;margin-left:auto;margin-right:auto}
.jb-s-icon{color:#222222;width:18px;margin-right:10px}
.current-location{font-weight:600}
.jb-card{box-shadow:0 4px 5px 0 rgb(0 0 0 / 5%),0 2px 10px 0 rgb(0 0 0 / 10%);border:none}
.jb-b-btn{background-color:rgba(35,179,231,0.04)!important;color:#23b3e7;text-transform:none;font-size:15px}
.text-h6{flex-wrap:nowrap;line-height:24px}
.q-field__bottom{padding-left:0;width:calc(100% + 216px);padding-right:0}
.q-field__bottom .q-field__messages{line-height:15px}
.jb-second .jb-btn{min-width:200px;padding:0 10px;background:#28B2E6;box-shadow:0 1px 6px rgba(0,0,0,0.102);border-radius:4px;cursor:pointer;color:#FFF;position:relative;border-radius:4px;font-weight:400;font-size:16px;line-height:20px;font-size:16px;-webkit-transition:all .35s ease;transition:all .35s ease;text-align:center;text-decoration:none;height:55px;text-transform:capitalize}
@media screen and (max-width: 1200px) and (min-width: 1024px) {
.no-wrap{flex-wrap:wrap}
.q-field__bottom{width:100%}
.jb-second .jb-btn{min-width:100%;margin-left:0;margin-top:15px}}
@media screen and (max-width: 650px) {
.jb-s-icon{min-width:21px}
.text-h6{align-items:self-start;margin-top:0}
.jb-second .jb-btn{min-width:100%;margin-left:0;margin-top:15px}
.jb-second-page,.jb-card{padding:15px 0}
.q-field__bottom{width:100%}
.no-wrap{flex-wrap:wrap}
.jb-s-l .jb-s-icon,.jb-s-r .jb-s-icon{margin-top: 3px;}}
.c-box{text-decoration:none;padding:20px;display:block;border-radius:5px;-webkit-transition:1s;transition:1s;min-height:180px}
.c-box-a{flex:0 0 25%;align-content:center;justify-content:center;display:flex;flex-direction:column;margin:0;text-align:center;padding:25px;border-radius:4px;-webkit-transition:1s;transition:1s}
.c-box-icon svg{width:30px;display:block;-webkit-transition:1s;transition:1s;margin:0 auto;margin-bottom:5px;color:#28b2e6;fill:#28b2e6}
.c-box-content h3{font-size:20px;font-weight:600;color:#28b2e6;margin:0 0 15px;padding:0;-webkit-transition:1s;transition:1s;line-height:25px}
.c-box-content p{color:#888;margin:0;padding:0;line-height:24px;margin-top:5px;-webkit-transition:1s;transition:1s;font-size:16px}
.w-24{width:24px!important}.w-22{width:22px!important}.w-18{width:18px!important}
.c-box:hover{background:#23b3e7;box-shadow:0 4px 12px rgb(35 179 231 / 20%);border-radius:5px;-webkit-transition:1s;transition:1s}
.c-box:hover .c-box-content p,.c-box:hover .c-box-content h3{color:#ffffff;-webkit-transition:1s;transition:1s}
.c-box:hover svg{color:#ffffff;fill:#ffffff;-webkit-transition:1s;transition:1s}
@media screen and (max-width: 650px) {.c-box{min-height: auto;}}
</style>
<template>
   <div class="q-pa-md jb-second">
      <q-layout>
         <q-page-container>
            <q-page class="jb-second-page">
               <div class="row q-col-gutter-xl">
                  <div class="col-12 col-md-6">
                     <div class="jb-s-l">
                        <h2 class="jb-s-title">Getting Started</h2>
                        <p class="jb-s-subtitle">Let the jobs come to you</p>
                        <q-card class="jb-card my-card q-pa-md">
                           <q-card-section>
                              <div class="text-h6 flex">
                                 <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="briefcase" class="jb-s-icon svg-inline--fa fa-briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
                                 <svg aria-hidden="true" focusable="false" data-prefix="fa-regular" data-icon="magnifying-glass" class="jb-s-icon svg-inline--fa fa-magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M504.969 471.031L370.959 337.023C399.084 301.547 416 256.785 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C256.785 416 301.549 399.086 337.021 370.961L471.031 504.969C475.719 509.656 481.859 512 488 512S500.281 509.656 504.969 504.969C514.344 495.594 514.344 480.406 504.969 471.031ZM48 208C48 119.777 119.775 48 208 48S368 119.777 368 208S296.225 368 208 368S48 296.223 48 208Z" fill="currentColor"/>
                                 </svg>
                                 Recent Searches
                              </div>
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
                                 <svg aria-hidden="true" focusable="false" data-prefix="fa-regular" data-icon="print-magnifying-glass" class="jb-s-icon svg-inline--fa fa-print-magnifying-glass w-22" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M632.969 471.031L553.854 391.914C567.811 371.414 576 346.672 576 320C576 249.309 518.693 192 448 192S320 249.309 320 320S377.307 448 448 448C474.672 448 499.412 439.809 519.914 425.852L599.031 504.969C603.719 509.656 609.844 512 616 512S628.281 509.656 632.969 504.969C642.344 495.594 642.344 480.406 632.969 471.031ZM448 400C403.889 400 368 364.113 368 320S403.889 240 448 240S528 275.887 528 320S492.111 400 448 400ZM111.998 48H366.061L400 81.943V160H448V81.943C448 69.213 442.943 57.006 433.943 48.004L400.004 14.061C391.002 5.057 378.793 0 366.061 0H111.998C85.494 0 64.012 21.479 64 47.982V75.422L64.004 130.264C64.002 130.264 64.002 130.264 64 130.264V160H112.006L111.998 48ZM128 464V368H296.141C291.318 352.756 288 336.84 288 320H112C94.326 320 80 334.326 80 352H48V264C48 250.766 58.766 240 72 240H310.193C321.123 221.223 335.531 204.92 352.879 192H72C32.297 192 0 224.297 0 264V376C0 389.25 10.75 400 24 400H80V480C80 497.672 94.326 512 112 512H400C417.674 512 432 497.672 432 480V478.387C413.32 476.506 395.633 471.746 379.41 464H128Z" fill="currentColor"/>
                                 </svg>
                                 Popular Searches
                              </div>
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
               <div class="row q-col-gutter-xl q-mt-lg q-pt-xl">
                  <div class="col-12 col-md-12">
                     <div class="jb-s-l">
                        <h2 class="jb-s-title">View Jobs by Category</h2>
                     </div>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                     <a href="#" class="c-box">
                        <div class="c-box-icon">
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="laptop-code" class="jb-s-icon svg-inline--fa fa-laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path d="M372.688 299.312C375.812 302.438 379.906 304 384 304S392.188 302.438 395.312 299.312L459.312 235.312C465.562 229.062 465.562 218.937 459.312 212.688L395.312 148.688C389.062 142.438 378.937 142.438 372.688 148.688S366.438 165.063 372.688 171.312L425.375 224L372.688 276.688C366.438 282.938 366.438 293.062 372.688 299.312ZM267.312 148.688C261.062 142.438 250.937 142.438 244.688 148.688L180.688 212.688C174.438 218.938 174.438 229.063 180.688 235.312L244.688 299.312C247.812 302.438 251.906 304 256 304S264.188 302.438 267.312 299.312C273.562 293.062 273.562 282.937 267.312 276.688L214.625 224L267.312 171.312C273.562 165.062 273.562 154.938 267.312 148.688ZM80 352C88.844 352 96 344.844 96 336V96C96 78.344 110.359 64 128 64H512C529.641 64 544 78.344 544 96V336C544 344.844 551.156 352 560 352S576 344.844 576 336V96C576 60.719 547.297 32 512 32H128C92.703 32 64 60.719 64 96V336C64 344.844 71.156 352 80 352ZM624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384ZM576 448H64C46.355 448 32 433.645 32 416H608C608 433.645 593.645 448 576 448Z" fill="currentColor"/>
                           </svg>
                        </div>
                        <div class="c-box-content">
                           <h3>Technology</h3>
                           <p>CTO, Software Engineer, Data Analyst, Affiliate Marketing Executive, and more</p>
                        </div>
                     </a>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                     <a href="#" class="c-box">
                        <div class="c-box-icon">
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="bullhorn" class="jb-s-icon svg-inline--fa fa-bullhorn w-24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M416 0C408.875 0 401.812 2.375 396.031 7.031L311 75.062C268.281 109.188 214.656 128 160 128H64C28.656 128 0 156.656 0 192V288C0 323.344 28.656 352 64 352H160C214.656 352 268.281 370.812 310.969 404.938L396 472.969C400.844 476.844 409.812 480 416 480C440.906 480 448 457.219 448 448V32C448 23.25 441.031 0 416 0ZM160 320H64C46.355 320 32 305.645 32 288V192C32 174.355 46.355 160 64 160H160V320ZM415.801 447.828L330.951 379.943C290.984 347.992 242.539 328.135 192 322.129V157.869C242.531 151.863 290.986 132.008 330.992 100.049L415.865 32.145C415.889 32.168 415.91 32.18 415.928 32.18C415.963 32.18 415.986 32.139 415.998 32.039L416 32.037L416.055 446.928C416.016 447.176 415.92 447.506 415.801 447.828ZM191.703 383.516C191.438 374.672 184.266 368.156 175.219 368C166.391 368.266 159.437 375.656 159.703 384.484C160.859 422.484 188.062 455.031 188.312 455.312C191.906 459.516 193 466.422 190.953 472.172C189.297 476.859 185.797 480 182.25 480H130.781C128.328 480 125.844 478.484 124 475.922C122.812 474.25 94.953 434.219 96.031 384.344C96.219 375.516 89.219 368.188 80.375 368C71.969 367.75 64.219 374.828 64.031 383.656C62.75 442.938 94.266 489.297 97.906 494.453C105.875 505.609 117.859 512 130.781 512H182.25C199.594 512 214.844 500.562 221.094 482.906C227 466.391 223.672 447.375 212.797 434.703C212.594 434.453 192.469 409.453 191.703 383.516ZM496 192C487.164 192 480 199.162 480 208V272C480 280.836 487.164 288 496 288S512 280.836 512 272V208C512 199.162 504.836 192 496 192Z" fill="currentColor"/>
                           </svg>
                        </div>
                        <div class="c-box-content">
                           <h3>Marketing</h3>
                           <p>Head of Marketing, Social Media Manager, Social Media Content Specialist, and more</p>
                        </div>
                     </a>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                     <a href="#" class="c-box">
                        <div class="c-box-icon">
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="gear" class="jb-s-icon svg-inline--fa fa-gear w-24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M256.275 512C200.224 512 180.27 500.674 180.27 476.06V436.495C165.097 430.12 150.925 421.963 137.908 412.088L103.609 431.87C98.989 434.573 93.633 435.884 88.251 435.884C51.537 435.884 12 343.012 12 327.243C12 316.393 17.806 305.902 27.714 300.175L61.888 280.455C60.794 272.11 60.263 264.016 60.263 255.984S60.794 239.858 61.888 231.514L27.698 211.763C17.803 206.06 12 195.575 12 184.712C12 172.127 49.984 76.05 88.203 76.05C93.62 76.05 99.027 77.388 103.719 80.161L137.908 99.881C150.925 90.005 165.097 81.849 180.27 75.473V35.908C180.27 4.335 215.918 0 256.267 0C295.981 0 332.28 4.083 332.28 35.908V75.473C347.452 81.849 361.625 90.005 374.642 99.881L408.94 80.099C413.561 77.395 418.921 76.085 424.307 76.085C460.778 76.085 500.55 168.638 500.55 184.725C500.55 195.575 494.743 206.067 484.836 211.794L450.662 231.514C451.756 239.858 452.287 247.953 452.287 255.984S451.756 272.11 450.662 280.455L484.851 300.206C494.746 305.908 500.55 316.394 500.55 327.256C500.55 339.845 462.568 435.918 424.337 435.918C418.917 435.918 413.511 434.581 408.831 431.808L374.642 412.088C361.625 421.963 347.452 430.12 332.28 436.495V476.06C332.28 500.618 312.433 512 256.275 512ZM141.221 373.21C177.137 404.033 193.558 407.572 212.272 414.213V476.06C226.382 478.404 241.09 479.787 256.037 479.787C270.983 479.787 286.167 478.404 301.231 475.216L300.278 414.213C316.348 408.51 335.459 403.993 371.329 373.21L424.941 404.181C443.724 382.117 458.709 356.209 468.335 327.614L415.394 297.049C418.139 282.055 420.253 271.615 420.253 257.978C420.253 247.026 418.89 234.011 415.394 214.919L468.85 184.074C459.022 156.322 443.927 130.102 423.754 107.35L371.329 138.758C335.413 107.936 318.992 104.397 300.278 97.756V35.908C286.167 33.565 271.459 32.182 256.513 32.182C241.567 32.182 226.382 33.565 211.319 36.752L212.272 97.756C196.202 103.458 177.091 107.975 141.221 138.758L87.608 107.788C68.623 130.102 53.528 156.322 43.918 185.261L97.156 214.919C94.41 229.914 92.296 240.354 92.296 253.991C92.296 264.943 93.66 277.958 97.156 297.049L43.699 327.895C53.528 355.647 68.623 381.867 88.796 404.618L141.221 373.21ZM256.275 351.99C203.334 351.99 160.269 308.925 160.269 255.984S203.334 159.979 256.275 159.979S352.281 203.044 352.281 255.984S309.216 351.99 256.275 351.99ZM256.275 191.98C220.976 191.98 192.271 220.701 192.271 255.984S220.976 319.988 256.275 319.988S320.279 291.268 320.279 255.984S291.574 191.98 256.275 191.98Z "></path>
                           </svg>
                        </div>
                        <div class="c-box-content">
                           <h3>Manufacturing</h3>
                           <p>Director of Manufacturing, CNC Programmer, Senior Controls Engineer, and more</p>
                        </div>
                     </a>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                     <a href="#" class="c-box">
                        <div class="c-box-icon">
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="stethoscope" class="jb-s-icon svg-inline--fa fa-stethoscope w-24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                              <path d="M544 192.005C544 156.657 515.346 128.005 480 128.005S416 156.657 416 192.005C416 221.791 436.443 246.603 464 253.74V352.002C464 422.595 406.578 480 336 480S208 422.595 208 352.002V350.385C288.625 342.223 352 274.744 352 192.005V48.007C352 41.944 348.578 36.413 343.156 33.694L279.156 1.695C271.266 -2.274 261.641 0.976 257.688 8.851C253.734 16.757 256.938 26.351 264.844 30.319L320 57.881V192.005C320 262.597 262.578 320.003 192 320.003S64 262.597 64 192.005V57.881L119.156 30.319C127.062 26.351 130.266 16.757 126.312 8.851C122.359 0.976 112.734 -2.274 104.844 1.695L40.844 33.694C35.422 36.413 32 41.944 32 48.007V192.005C32 274.744 95.375 342.223 176 350.385V352.002C176 440.22 247.781 512 336 512S496 440.22 496 352.002V253.74C523.557 246.603 544 221.791 544 192.005ZM480 224.004C462.326 224.004 448 209.676 448 192.005C448 174.331 462.326 160.005 480 160.005S512 174.331 512 192.005C512 209.676 497.674 224.004 480 224.004Z" fill="currentColor"/>
                           </svg>
                        </div>
                        <div class="c-box-content">
                           <h3>Health Care</h3>
                           <p>Dentist, RN Supervisor, Research Associate, and more</p>
                        </div>
                     </a>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                     <a href="#" class="c-box">
                        <div class="c-box-icon">
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="helmet-safety" class="jb-s-icon svg-inline--fa fa-helmet-safety fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                              <path d="M571.654 357.156C568.638 353.969 564.435 352.125 560.045 352.125C484.763 351.906 373.17 352 264.56 352.094C171.201 352.188 79.982 352.219 16.029 352.125C16.013 352.125 16.013 352.125 15.998 352.125C11.592 352.125 7.388 353.938 4.357 357.156C1.326 360.344 -0.237 364.688 0.029 369.094C4.357 441.438 169.998 480 287.935 480H291.263C406.138 480 571.654 441 575.967 369.094C576.232 364.688 574.67 360.375 571.654 357.156ZM291.482 448C290.326 448 289.279 448.25 287.998 448C183.513 448 72.06 417.562 40.623 384.156C102.279 384.281 182.607 384.156 264.576 384.094C361.888 384.062 461.592 384 535.388 384.062C504.045 417.344 393.107 448 291.482 448ZM47.998 320C56.842 320 63.998 312.844 63.998 304V274.875C63.998 185.602 123.683 109.037 207.998 84.938V272C207.998 280.844 215.154 288 223.998 288S239.998 280.844 239.998 272V64C239.998 55.188 247.17 48 255.998 48H319.998C328.826 48 335.998 55.188 335.998 64V272C335.998 280.844 343.154 288 351.998 288S367.998 280.844 367.998 272V84.938C452.312 109.037 511.998 185.602 511.998 274.875V304C511.998 312.844 519.154 320 527.998 320S543.998 312.844 543.998 304V274.875C543.998 167.313 469.709 74.943 365.912 50.773C360.127 30.764 341.847 16 319.998 16H255.998C234.148 16 215.869 30.764 210.084 50.773C106.287 74.943 31.998 167.312 31.998 274.875V304C31.998 312.844 39.154 320 47.998 320Z" fill="currentColor"/>
                           </svg>
                        </div>
                        <div class="c-box-content">
                           <h3>Construction</h3>
                           <p>Superintendent, Project Manager, Project Engineer, and more</p>
                        </div>
                     </a>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                     <a href="#" class="c-box">
                        <div class="c-box-icon">
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="flask" class="jb-s-icon svg-inline--fa fa-flask fa-w-10 w-22" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path d="M437.232 403.5L319.992 215V79.996C319.992 71.162 312.83 64 303.996 64S288 71.162 288 79.996V144H287.992V215.002C287.992 220.975 289.664 226.828 292.818 231.9L347.613 320H100.387L155.18 231.902C158.336 226.828 160.008 220.975 160.008 215V144H160V79.996C160 71.162 152.838 64 144.004 64S128.008 71.162 128.008 79.996V215L10.767 403.5C-18.479 450.625 15.267 512 70.889 512H377.111C432.732 512 466.478 450.5 437.232 403.5ZM410.932 460C407.592 466.014 397.609 480 377.111 480H70.889C50.383 480 40.406 466.047 37.068 460.047C30.043 447.42 30.377 432.59 37.941 420.4L80.484 352H367.515L410.062 420.406C417.627 432.562 417.953 447.363 410.932 460ZM112 32H336C344.844 32 352 24.844 352 16S344.844 0 336 0H112C103.156 0 96 7.156 96 16S103.156 32 112 32Z" fill="currentColor"/>
                           </svg>
                        </div>
                        <div class="c-box-content">
                           <h3>Biotechnology</h3>
                           <p>Director of Neuroscience, Scientist, Research Associate, and more</p>
                        </div>
                     </a>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                     <a href="#" class="c-box">
                        <div class="c-box-icon">
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="car-side" class="jb-s-icon svg-inline--fa fa-car-side fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path d="M520 224L411.301 88.062C399.141 72.854 380.725 64 361.25 64H155.375C129.125 64 105.625 79.875 95.875 104.25L48 226.25C20.5 233.375 0 258.25 0 288V400C0 417.674 14.328 432 32 432H65.613C73.266 477.363 112.461 512 160 512S246.734 477.363 254.387 432H385.613C393.266 477.363 432.461 512 480 512S566.734 477.363 574.387 432H608C625.674 432 640 417.674 640 400V344C640 277.727 586.275 224 520 224ZM361.25 96C371.055 96 380.188 100.391 386.309 108.047L479.027 224H256V96H361.25ZM125.586 116.135C130.479 103.904 142.172 96 155.375 96H224V224H83.26L125.586 116.135ZM160 480C124.711 480 96 451.289 96 416S124.711 352 160 352S224 380.711 224 416S195.289 480 160 480ZM480 480C444.711 480 416 451.289 416 416S444.711 352 480 352S544 380.711 544 416S515.289 480 480 480ZM608 400H574.387C566.734 354.637 527.539 320 480 320S393.266 354.637 385.613 400H254.387C246.734 354.637 207.539 320 160 320S73.266 354.637 65.613 400H32V288C32 270.326 46.326 256 64 256H520C568.602 256 608 295.398 608 344V400Z" fill="currentColor"/>
                           </svg>
                        </div>
                        <div class="c-box-content">
                           <h3>Automotive</h3>
                           <p>Machine Shop Foreman, Mechanic, Project Engineer, and more</p>
                        </div>
                     </a>
                  </div>
                  <div class="col-12 col-md-3 text-center">
                     <a href="#" class="c-box">
                        <div class="c-box-icon">
                           <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="calculator" class="jb-s-icon svg-inline--fa fa-calculator fa-w-12 w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                              <path d="M320 0H64C28.656 0 0 28.656 0 64V448C0 483.344 28.656 512 64 512H320C355.344 512 384 483.344 384 448V64C384 28.656 355.344 0 320 0ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V160H352V448ZM352 128H32V64C32 46.355 46.355 32 64 32H320C337.645 32 352 46.355 352 64V128ZM80 432H208C216.844 432 224 424.844 224 416S216.844 400 208 400H80C71.156 400 64 407.156 64 416S71.156 432 80 432ZM288 440C301.254 440 312 429.254 312 416S301.254 392 288 392S264 402.746 264 416S274.746 440 288 440ZM288 344C301.254 344 312 333.254 312 320S301.254 296 288 296S264 306.746 264 320S274.746 344 288 344ZM288 248C301.254 248 312 237.254 312 224S301.254 200 288 200S264 210.746 264 224S274.746 248 288 248ZM192 344C205.254 344 216 333.254 216 320S205.254 296 192 296S168 306.746 168 320S178.746 344 192 344ZM192 248C205.254 248 216 237.254 216 224S205.254 200 192 200S168 210.746 168 224S178.746 248 192 248ZM96 344C109.254 344 120 333.254 120 320S109.254 296 96 296S72 306.746 72 320S82.746 344 96 344ZM96 248C109.254 248 120 237.254 120 224S109.254 200 96 200S72 210.746 72 224S82.746 248 96 248Z" fill="currentColor"/>
                           </svg>
                        </div>
                        <div class="c-box-content">
                           <h3>Accounting</h3>
                           <p>CPA, Audit Senior, Senior Accountant, and more</p>
                        </div>
                     </a>
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

 
