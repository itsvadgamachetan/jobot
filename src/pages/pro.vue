<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600&display=swap');
body{font-family:'Nunito',sans-serif;display:flex;justify-content:center;margin-top:30px;box-shadow:none;border-radius:4px;background:#fff;margin-top:0}
.jb-s-title{font-size:22px;line-height:36px;font-weight:500;color:#333;margin:0;padding:0;text-transform:none;text-align:center;width:100%;display:flex;justify-content:flex-start}
.jb-s-r .jb-s-title{justify-content:flex-start}
.jb-btn{width:100%;padding:0 10px;background:#28B2E6;box-shadow:0 1px 6px rgba(0,0,0,0.102);border-radius:4px;cursor:pointer;color:#FFF;position:relative;border-radius:4px;font-weight:400;font-size:16px;line-height:20px;font-size:16px;-webkit-transition:all .35s ease;transition:all .35s ease;text-align:center;text-decoration:none;height:55px;text-transform:capitalize}
.jb-page{padding:35px 0 45px;position:relative}
.jb-s-icon{color:#222222;width:18px;margin-right:10px}
.jb-page:before{content:"";position:absolute;height:100%;width:100%;display:block;top:0;left:0;z-index:1;background:linear-gradient(to right,#f7f7f7 50%,rgba(247,247,247,0.8) 70%,rgba(247,247,247,0.8) 90%)}
.jb-page:after{content:"";position:absolute;height:100%;width:100%;display:block;top:0;left:0;width:100%;background-image:url(https://media.jobot.com/logos/banner.jpg);background-repeat:no-repeat;background-size:cover}
.pro-h-r,.pro-h-l{z-index:11}
.pro-header{display:flex;width:100%;justify-content:flex-start;align-items:center}
.pro-h-l .q-img{height:150px;flex:0 0 150px;width:150px;max-width:150px;margin-right:30px;background:#fff;border-radius:50%;box-shadow:none;padding:0;-webkit-transition:all .35s ease;transition:all .35s ease}
.pro-h-r h1{color:#333;font-size:26px;margin:0;padding:0;margin-bottom:12px;margin-top:0;font-weight:400;line-height:30px;position:relative;padding-right:0;display:inline-block;-webkit-transition:all .35s ease;transition:all .35s ease}
.pro-h-r p{color:#808080;display:block;font-size:18px;margin:0;font-weight:300;-webkit-transition:all .35s ease;transition:all .35s ease}
.jb-container{padding:15px;font-weight:300;max-width:1400px;margin-left:auto;margin-right:auto}
.user-location .flag{height:16px;border-radius:2px;position:relative;display:inline-block;box-shadow:none;margin:0 10px 0 0;cursor:default;width:21px}
.user-location{display:flex;justify-content:flex-start;align-items:center;width:100%;margin-top:15px}
.user-location span{color:#666;font-size:15px;margin-right:15px;font-weight:500}
.jb-s-l p{font-size:16px;color:#666;line-height:27px}
.link-text{color:#28B2E6;text-decoration:none}
.q-icon{-webkit-transition:all .35s ease;transition:all .35s ease}
.pro-h-l .q-img__image.absolute-full{background-size:100%}
.jb-btn:hover .q-icon{padding-left:7px;-webkit-transition:all .35s ease;transition:all .35s ease}
.u-name{margin-left:8px;font-weight:700}
.q-tooltip span{font-size:16px}
.social-img{position:absolute;opacity:.4;width:18px}
.jb-joblist .link-text{font-size:18px;line-height:28px;font-weight:500;-webkit-transition:all .35s ease;transition:all .35s ease;margin-bottom:5px}
.jb-joblist .q-item{padding-bottom:35px;padding-top:35px;-webkit-transition:all .35s ease;transition:all .35s ease}
.jb-joblist .q-item:hover .link-text{margin-left:5px;-webkit-transition:all .35s ease;transition:all .35s ease}
.jb-list-i{display:flex;width:100%;align-items:center;color:#777;justify-content:flex-start;font-size:15px;font-weight:400}
.jb-list-i div{margin-right:20px;display:flex;justify-content:flex-start;align-items:center}
.jb-list-i div svg{margin-right:5px}
.jl-icon{width:12px}
.jl-icon-c{width:18px}
.list-logo{width:40px;margin-right:10px}
.jblist-action{display:flex;justify-content:flex-end;align-items:center;width:100%}
.jb-joblist .q-separator{background:rgb(244 246 247)}
@media screen and (max-width: 750px) {
.jb-s-icon{min-width:21px}
.jb-page{padding:30px 0}
.jb-page .q-col-gutter-y-xl > *,.jb-page .q-col-gutter-xl > *{padding-top:10px}
.user-location{justify-content:flex-start;align-items:self-end;flex-direction:column;-webkit-transition:all .35s ease;transition:all .35s ease}
.user-location > span:first-child{margin-bottom:10px}
.pro-h-l .q-img{height:80px;flex:0 0 80px;width:80px;-webkit-transition:all .35s ease;transition:all .35s ease;max-width:80px}
.pro-header{align-items:flex-start}
.pro-h-r h1{font-size:20px;margin-bottom:5px;margin-top:0;line-height:20px;-webkit-transition:all .35s ease;transition:all .35s ease}
.pro-h-r p{font-size:16px;line-height:22px;-webkit-transition:all .35s ease;transition:all .35s ease}
.user-location span{font-size:13px}
.user-location .flag{width:17px;height:13px}
.jb-s-l{margin-top:30px}}
@media screen and (max-width: 1023px) {
.jb-column{margin-top: 0;flex-direction:column-reverse;}
.jb-btn{max-width:300px}
.jb-container{padding-top: 0;}}
@media screen and (max-width: 680px) {
.q-pa-md{padding:0}
.jb-btn {max-width: initial}
.jb-list-i{font-size:13px}
.jb-joblist .col-4{width:100%;margin-top:20px}
.jb-joblist .col-8{width:100%}
.jb-joblist .q-item{flex-wrap:wrap}}
</style>
<template>
   <div>
      <q-layout>
         <q-page-container>
            <q-page>
               <div class="jb-page">
                  <div class="jb-container">
                     <div class="row">
                        <div class="col-12 col-md-12">
                           <div class="pro-header">
                              <div class="pro-h-l">
                                 <q-img rounded src="https://jobot.imgix.net/pro/jaclyn-d-601244e63aaf20be24b4d8fc655d701f.jpg" />
                              </div>
                              <div class="pro-h-r">
                                 <h1>Jaclyn D'Amore</h1>
                                 <p>Senior Recruiting Manager</p>
                                 <p>Without self -discipline, success is impossible, period.</p>
                                 <div class="user-location">
                                    <span>
                                       <q-img class="flag" src="https://jobot.com/assets/images/flags/us.svg" alt=""/>
                                       <span>Orange County, CA</span>
                                    </span>
                                    <span>
                                       <q-img class="flag" src="https://jobot.imgix.net/pro/jaclyn-d-53db9772752d44371453c1256186fabf.png" alt="" />
                                       <span>Montclair State University</span>
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="jb-container">
                  <div class="row q-col-gutter-xl q-mt-lg jb-column">
                     <div class="col-12 col-md-8">
                        <div class="jb-s-l">
                           <h2 class="jb-s-title">About<span class="u-name">Jaclyn</span></h2>
                           <q-card class="q-pl-none no-shadow">
                              <q-card-section class="q-py-md q-px-none">
                                 <div class="text-h6 flex">
                                    <p>Highly invested in helping my clients build the best team possible. I specialize in Manufacturing, Construction, Technology and Finance.</p>
                                    <p>When you work with me, not only do you get a seasoned Recruiter who is driven, persistent, and hard working- but I am extremely passionate about my work. 
                                       If you need a reliable Recruiter to help with your most difficult roles, please shoot me an email <a href="mailto:jaclyn.damore@jobot.com" class="link-text">jaclyn.damore@jobot.com</a>
                                    </p>
                                 </div>
                              </q-card-section>
                           </q-card>
                           <q-card class="jb-card my-card q-pa-md">
                              <q-card-section>
                                 <div class="text-h6 flex">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="briefcase" class="jb-s-icon svg-inline--fa fa-briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                       <path d="M448 96H384V48C384 21.531 362.469 0 336 0H176C149.531 0 128 21.531 128 48V96H64C28.654 96 0 124.654 0 160V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V160C512 124.654 483.348 96 448 96ZM160 48C160 39.172 167.172 32 176 32H336C344.828 32 352 39.172 352 48V96H160V48ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V288H176V352C176 360.844 183.156 368 192 368H320C328.844 368 336 360.844 336 352V288H480V416ZM208 336V288H304V336H208ZM480 256H32V160C32 142.355 46.355 128 64 128H448C465.645 128 480 142.355 480 160V256Z" fill="currentColor"/>
                                    </svg>
                                    <div class="jb-jobloc">Featured & Recent Jobs</div>
                                 </div>
                              </q-card-section>
                              <q-separator inset />
                              <q-card-section class="jb-joblist">
                                 <q-list>
                                    <q-item class="q-px-none">
                                       <q-item-section class="col-8">
                                          <q-item-label><a href="" class="link-text">Operations Manager- Bilingual- Relo Offered</a> </q-item-label>
                                          <q-item-label class="jb-list-i">
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="location-dot" class="jl-icon svg-inline--fa fa-location-dot fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                   <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 112C147.818 112 112 147.816 112 192S147.818 272 192 272C236.184 272 272 236.184 272 192S236.184 112 192 112ZM192 240C165.533 240 144 218.467 144 192S165.533 144 192 144S240 165.533 240 192S218.467 240 192 240Z" fill="currentColor"/>
                                                </svg>
                                                Bethlehem, PA
                                             </div>
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="circle-dollar" class="jl-icon-c svg-inline--fa fa-circle-dollar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                   <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM260.359 240.578L252.016 238.172C214.688 227.203 205.344 219.078 208.578 200.391C212.641 177.016 244.156 173.391 269.844 177.437C277.391 178.609 286.844 181.203 298.766 185.328C307.109 188.187 316.219 183.766 319.125 175.437C322.016 167.094 317.578 157.969 309.234 155.078C295.313 150.266 284.375 147.328 274.797 145.812C273.834 145.66 272.955 145.682 272 145.549V112C272 103.156 264.844 96 256 96S240 103.156 240 112V144.705C205.953 148.223 181.98 166.41 177.047 194.938C168.078 246.844 216.812 261.172 243 268.875L251.562 271.344C294.297 283.562 307.031 290.719 303.422 311.609C299.359 335.016 267.781 338.578 242.062 334.547C230.297 332.781 216.281 327.734 203.906 323.266L197.344 320.922C189 317.938 179.875 322.344 176.922 330.656C173.969 338.984 178.328 348.125 186.656 351.078L193.062 353.375C206.812 358.328 222.406 363.953 237.203 366.187C238.174 366.34 239.039 366.281 240 366.414V400C240 408.844 247.156 416 256 416S272 408.844 272 400V367.258C306.027 363.727 330.02 345.592 334.953 317.062C344.031 264.5 295.672 250.672 260.359 240.578Z" fill="currentColor"/>
                                                </svg>
                                                $120,000 - $135,000
                                             </div>
                                          </q-item-label>
                                       </q-item-section>
                                       <q-item-section class="col-4">
                                          <div class="q-gutter-xs jblist-action">
                                             <span>
                                                <q-img class="list-logo" src="https://media.jobot.com/logos/square.svg" alt=""/>
                                             </span>
                                             <q-btn side class="jb-btn" label="Easy apply" />
                                          </div>
                                       </q-item-section>
                                    </q-item>
                                    <q-separator />
                                    <q-item class="q-px-none">
                                       <q-item-section class="col-8">
                                          <q-item-label><a href="" class="link-text">Senior Electrical Design Engineer</a> </q-item-label>
                                          <q-item-label class="jb-list-i">
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="location-dot" class="jl-icon svg-inline--fa fa-location-dot fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                   <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 112C147.818 112 112 147.816 112 192S147.818 272 192 272C236.184 272 272 236.184 272 192S236.184 112 192 112ZM192 240C165.533 240 144 218.467 144 192S165.533 144 192 144S240 165.533 240 192S218.467 240 192 240Z" fill="currentColor"/>
                                                </svg>
                                                Bethlehem, PA
                                             </div>
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="circle-dollar" class="jl-icon-c svg-inline--fa fa-circle-dollar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                   <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM260.359 240.578L252.016 238.172C214.688 227.203 205.344 219.078 208.578 200.391C212.641 177.016 244.156 173.391 269.844 177.437C277.391 178.609 286.844 181.203 298.766 185.328C307.109 188.187 316.219 183.766 319.125 175.437C322.016 167.094 317.578 157.969 309.234 155.078C295.313 150.266 284.375 147.328 274.797 145.812C273.834 145.66 272.955 145.682 272 145.549V112C272 103.156 264.844 96 256 96S240 103.156 240 112V144.705C205.953 148.223 181.98 166.41 177.047 194.938C168.078 246.844 216.812 261.172 243 268.875L251.562 271.344C294.297 283.562 307.031 290.719 303.422 311.609C299.359 335.016 267.781 338.578 242.062 334.547C230.297 332.781 216.281 327.734 203.906 323.266L197.344 320.922C189 317.938 179.875 322.344 176.922 330.656C173.969 338.984 178.328 348.125 186.656 351.078L193.062 353.375C206.812 358.328 222.406 363.953 237.203 366.187C238.174 366.34 239.039 366.281 240 366.414V400C240 408.844 247.156 416 256 416S272 408.844 272 400V367.258C306.027 363.727 330.02 345.592 334.953 317.062C344.031 264.5 295.672 250.672 260.359 240.578Z" fill="currentColor"/>
                                                </svg>
                                                $120,000 - $135,000
                                             </div>
                                          </q-item-label>
                                       </q-item-section>
                                       <q-item-section class="col-4">
                                          <div class="q-gutter-xs jblist-action">
                                             <span>
                                                <q-img class="list-logo" src="https://media.jobot.com/logos/square.svg" alt=""/>
                                             </span>
                                             <q-btn side class="jb-btn" label="Easy apply" />
                                          </div>
                                       </q-item-section>
                                    </q-item>
                                    <q-separator />
                                    <q-item class="q-px-none">
                                       <q-item-section class="col-8">
                                          <q-item-label><a href="" class="link-text">Senior Electrical Design Engineer</a> </q-item-label>
                                          <q-item-label class="jb-list-i">
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="location-dot" class="jl-icon svg-inline--fa fa-location-dot fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                   <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 112C147.818 112 112 147.816 112 192S147.818 272 192 272C236.184 272 272 236.184 272 192S236.184 112 192 112ZM192 240C165.533 240 144 218.467 144 192S165.533 144 192 144S240 165.533 240 192S218.467 240 192 240Z" fill="currentColor"/>
                                                </svg>
                                                Bethlehem, PA
                                             </div>
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="circle-dollar" class="jl-icon-c svg-inline--fa fa-circle-dollar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                   <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM260.359 240.578L252.016 238.172C214.688 227.203 205.344 219.078 208.578 200.391C212.641 177.016 244.156 173.391 269.844 177.437C277.391 178.609 286.844 181.203 298.766 185.328C307.109 188.187 316.219 183.766 319.125 175.437C322.016 167.094 317.578 157.969 309.234 155.078C295.313 150.266 284.375 147.328 274.797 145.812C273.834 145.66 272.955 145.682 272 145.549V112C272 103.156 264.844 96 256 96S240 103.156 240 112V144.705C205.953 148.223 181.98 166.41 177.047 194.938C168.078 246.844 216.812 261.172 243 268.875L251.562 271.344C294.297 283.562 307.031 290.719 303.422 311.609C299.359 335.016 267.781 338.578 242.062 334.547C230.297 332.781 216.281 327.734 203.906 323.266L197.344 320.922C189 317.938 179.875 322.344 176.922 330.656C173.969 338.984 178.328 348.125 186.656 351.078L193.062 353.375C206.812 358.328 222.406 363.953 237.203 366.187C238.174 366.34 239.039 366.281 240 366.414V400C240 408.844 247.156 416 256 416S272 408.844 272 400V367.258C306.027 363.727 330.02 345.592 334.953 317.062C344.031 264.5 295.672 250.672 260.359 240.578Z" fill="currentColor"/>
                                                </svg>
                                                $120,000 - $135,000
                                             </div>
                                          </q-item-label>
                                       </q-item-section>
                                       <q-item-section class="col-4">
                                          <div class="q-gutter-xs jblist-action">
                                             <span>
                                                <q-img class="list-logo" src="https://media.jobot.com/logos/square.svg" alt=""/>
                                             </span>
                                             <q-btn side class="jb-btn" label="Easy apply" />
                                          </div>
                                       </q-item-section>
                                    </q-item>
                                    <q-separator />
                                    <q-item class="q-px-none">
                                       <q-item-section class="col-8">
                                          <q-item-label><a href="" class="link-text">Senior Electrical Design Engineer</a> </q-item-label>
                                          <q-item-label class="jb-list-i">
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="location-dot" class="jl-icon svg-inline--fa fa-location-dot fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                   <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 112C147.818 112 112 147.816 112 192S147.818 272 192 272C236.184 272 272 236.184 272 192S236.184 112 192 112ZM192 240C165.533 240 144 218.467 144 192S165.533 144 192 144S240 165.533 240 192S218.467 240 192 240Z" fill="currentColor"/>
                                                </svg>
                                                Bethlehem, PA
                                             </div>
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="circle-dollar" class="jl-icon-c svg-inline--fa fa-circle-dollar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                   <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM260.359 240.578L252.016 238.172C214.688 227.203 205.344 219.078 208.578 200.391C212.641 177.016 244.156 173.391 269.844 177.437C277.391 178.609 286.844 181.203 298.766 185.328C307.109 188.187 316.219 183.766 319.125 175.437C322.016 167.094 317.578 157.969 309.234 155.078C295.313 150.266 284.375 147.328 274.797 145.812C273.834 145.66 272.955 145.682 272 145.549V112C272 103.156 264.844 96 256 96S240 103.156 240 112V144.705C205.953 148.223 181.98 166.41 177.047 194.938C168.078 246.844 216.812 261.172 243 268.875L251.562 271.344C294.297 283.562 307.031 290.719 303.422 311.609C299.359 335.016 267.781 338.578 242.062 334.547C230.297 332.781 216.281 327.734 203.906 323.266L197.344 320.922C189 317.938 179.875 322.344 176.922 330.656C173.969 338.984 178.328 348.125 186.656 351.078L193.062 353.375C206.812 358.328 222.406 363.953 237.203 366.187C238.174 366.34 239.039 366.281 240 366.414V400C240 408.844 247.156 416 256 416S272 408.844 272 400V367.258C306.027 363.727 330.02 345.592 334.953 317.062C344.031 264.5 295.672 250.672 260.359 240.578Z" fill="currentColor"/>
                                                </svg>
                                                $120,000 - $135,000
                                             </div>
                                          </q-item-label>
                                       </q-item-section>
                                       <q-item-section class="col-4">
                                          <div class="q-gutter-xs jblist-action">
                                             <span>
                                                <q-img class="list-logo" src="https://media.jobot.com/logos/square.svg" alt=""/>
                                             </span>
                                             <q-btn side class="jb-btn" label="Easy apply" />
                                          </div>
                                       </q-item-section>
                                    </q-item>
                                    <q-separator />
                                    <q-item class="q-px-none">
                                       <q-item-section class="col-8">
                                          <q-item-label><a href="" class="link-text">Senior Electrical Design Engineer</a> </q-item-label>
                                          <q-item-label class="jb-list-i">
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="location-dot" class="jl-icon svg-inline--fa fa-location-dot fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                   <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918ZM192 112C147.818 112 112 147.816 112 192S147.818 272 192 272C236.184 272 272 236.184 272 192S236.184 112 192 112ZM192 240C165.533 240 144 218.467 144 192S165.533 144 192 144S240 165.533 240 192S218.467 240 192 240Z" fill="currentColor"/>
                                                </svg>
                                                Bethlehem, PA
                                             </div>
                                             <div>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light" data-icon="circle-dollar" class="jl-icon-c svg-inline--fa fa-circle-dollar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                   <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM260.359 240.578L252.016 238.172C214.688 227.203 205.344 219.078 208.578 200.391C212.641 177.016 244.156 173.391 269.844 177.437C277.391 178.609 286.844 181.203 298.766 185.328C307.109 188.187 316.219 183.766 319.125 175.437C322.016 167.094 317.578 157.969 309.234 155.078C295.313 150.266 284.375 147.328 274.797 145.812C273.834 145.66 272.955 145.682 272 145.549V112C272 103.156 264.844 96 256 96S240 103.156 240 112V144.705C205.953 148.223 181.98 166.41 177.047 194.938C168.078 246.844 216.812 261.172 243 268.875L251.562 271.344C294.297 283.562 307.031 290.719 303.422 311.609C299.359 335.016 267.781 338.578 242.062 334.547C230.297 332.781 216.281 327.734 203.906 323.266L197.344 320.922C189 317.938 179.875 322.344 176.922 330.656C173.969 338.984 178.328 348.125 186.656 351.078L193.062 353.375C206.812 358.328 222.406 363.953 237.203 366.187C238.174 366.34 239.039 366.281 240 366.414V400C240 408.844 247.156 416 256 416S272 408.844 272 400V367.258C306.027 363.727 330.02 345.592 334.953 317.062C344.031 264.5 295.672 250.672 260.359 240.578Z" fill="currentColor"/>
                                                </svg>
                                                $120,000 - $135,000
                                             </div>
                                          </q-item-label>
                                       </q-item-section>
                                       <q-item-section class="col-4">
                                          <div class="q-gutter-xs jblist-action">
                                             <span>
                                                <q-img class="list-logo" src="https://media.jobot.com/logos/square.svg" alt=""/>
                                             </span>
                                             <q-btn side class="jb-btn" label="Easy apply" />
                                          </div>
                                       </q-item-section>
                                    </q-item>
                                 </q-list>
                              </q-card-section>
                           </q-card>
                        </div>
                     </div>
                     <div class="col-12 col-md-3">
                        <div class="jb-s-r">
                           <h2 class="jb-s-title">Hiring?</h2>
                           <q-card class="jb-card my-card no-shadow">
                              <q-card-section class="q-py-md q-px-none q-mb-lg">
                                 <div class="text-h6 flex">
                                    <q-btn side class="jb-btn" icon-right="arrow_right_alt" label="Hire with Jaclyn" />
                                 </div>
                              </q-card-section>
                           </q-card>
                           <h2 class="jb-s-title">Connect with <span class="u-name">Jaclyn</span></h2>
                           <q-card class="jb-card my-card no-shadow">
                              <q-card-section class="q-py-md q-px-none">
                                 <div class="text-h6 flex">
                                    <q-btn class="no-shadow no-border">
                                       <q-img class="social-img" src="../assets/linkedin-md.svg" alt=""/>
                                       <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
                                          <span>LinkedIn</span>
                                       </q-tooltip>
                                    </q-btn>
                                 </div>
                              </q-card-section>
                           </q-card>
                        </div>
                     </div>
                  </div>
               </div>
            </q-page>
         </q-page-container>
      </q-layout>
   </div>
</template>