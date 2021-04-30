<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
.q-login{font-family:'Poppins',sans-serif;display:flex;justify-content:center;margin-top:30px}
.q-login .q-logo{display:flex;font-size:23px;line-height:30px;color:rgba(33,33,33,0.87);justify-content:left}
.q-login .logo{width:26px;margin-right:15px}
.q-login .login-card{padding:30px;width:100%}
.q-login .login-card .mb-3{margin-bottom:15px}
.q-login .jt-btn{text-transform:capitalize;padding:6px 0;font-weight:300;font-size:16px!important;background-color:#28B2E6;color:#ffffff}
.q-login .q-line{display:flex;position:relative;justify-content:center;align-items:center;height:100%}
.q-login .q-line:before{border-left:1px solid rgba(0,0,0,0.12);content:"";height:100%;width:4px;position:absolute;top:0}
.q-login .q-line .jt-text-or{padding:10px 0;display:block;width:50px;color:#212121;font-weight:500;font-size:14px;text-transform:capitalize;margin:0 auto;margin-top:0;background:#fff;text-align:center;z-index:1}
.q-login .jt-social{font-size:15px;text-transform:capitalize;font-weight:500;box-sizing:border-box;width:100%;margin-top:0;border-radius:4px;display:flex;padding:5px;text-decoration:none;line-height:25px}
.q-login .jt-social .q-avatar{position:absolute;left:25px}
.q-login .jt-social .q-btn__wrapper:before{border:1px solid rgba(0,0,0,0.12)}
.q-login input:-webkit-autofill,.q-login input:-webkit-autofill:hover,.q-login input:-webkit-autofill:focus,.q-login textarea:-webkit-autofill,.q-login textarea:-webkit-autofill:hover,.q-login textarea:-webkit-autofill:focus,.q-login select:-webkit-autofill,.q-login select:-webkit-autofill:hover,.q-login select:-webkit-autofill:focus{border:none;-webkit-text-fill-color:#fff;-webkit-box-shadow:0 0 0 1000px #fff inset;transition:background-color 5000s ease-in-out 0}
.q-login .q-dot{color:#c6c6c6;font-size:12px;margin:0 5px}
.q-login .login-link{display:flex;align-items:center;justify-content:flex-start;margin-top:5px}
.q-login .login-link a{font-size:11px;line-height:30px;color:rgba(40,178,230,0.87);text-decoration:none}
.q-login .login-link a:hover{text-decoration:none;opacity:.7}
@media screen and (min-width: 890px) {
.q-login .login-card{min-width:878px}
.q-login .login-item{width:100%;justify-content:space-between}
.q-login .login-item .login-l,.q-login .login-item .login-r{width:42%}
.q-login .login-item .login-m{width:6%}}
@media screen and (max-width: 889px) {
.q-login .q-logo{justify-content: center;}
.q-login{display:block;width:50%;min-width:500px;margin:0 auto}
.q-login .q-line:before{border-bottom:1px solid rgba(0,0,0,0.12);content:"";height:1px;width:100%;position:absolute;top:20px}
.q-login .q-line{margin:10px 0}
.q-login .login-item{flex-direction:column;width:100%}}
@media screen and (max-width: 580px) {.q-login{width:100%;min-width:auto;}.q-login .login-card{padding:0}}
</style>
<template>
  <div class="q-pa-md q-login">
     <div>
        <q-card class="my-card login-card">
           <q-card-section>
              <div class="row login-item">
                 <div class="login-l">
                    <div class="card-data q-gutter-y-lg">
                       <div class="q-logo">
                          <img alt="jobot logo" src="../assets/logo.svg" class="logo">
                          <span>Sign In to Jobot</span>
                       </div>
                       <q-input outlined v-model="text" label="Email" />
                       <q-input outlined v-model="password" type="password" float-label="Password" label="Password"/>
                       <q-btn size="20px" label="Next" class="full-width jt-btn" />
                       <div class="login-link">
                          <a href="#" class="l-link">Contact US</a><span class="q-dot">●</span>
                          <a href="#" class="l-link">Privacy Policy</a><span class="q-dot">●</span>
                          <a href="#" class="l-link">Terms & Condictions</a>
                       </div>
                    </div>
                 </div>
                 <div class="login-m">
                    <div class="q-line">
                       <strong class="jt-text-or">OR</strong>
                    </div>
                 </div>
                 <div class="login-r">
                    <q-btn outline color="white" class="jt-social q-mb-md" text-color="black" label="Signin with LinkedIn">
                       <q-avatar size="24px">
                          <img src="../assets/linkedin.svg">
                       </q-avatar>
                    </q-btn>
                    <q-btn outline color="white" class="jt-social q-mb-md" text-color="black" label="Signin with Microsoft">
                       <q-avatar size="24px">
                          <img src="../assets/microsoft.svg">
                       </q-avatar>
                    </q-btn>
                    <q-btn outline color="white" class="jt-social q-mb-md" text-color="black" label="Signin with Google">
                       <q-avatar size="24px">
                          <img src="../assets/google.svg">
                       </q-avatar>
                    </q-btn>
                    <q-btn outline color="white" class="jt-social q-mb-md" text-color="black" label="Signin with Facebook">
                       <q-avatar size="24px">
                          <img src="../assets/facebook.svg">
                       </q-avatar>
                    </q-btn>
                    <q-btn outline color="white" class="jt-social q-mb-none" text-color="black" label="Signin with Apple">
                       <q-avatar size="24px">
                          <img src="../assets/apple.svg">
                       </q-avatar>
                    </q-btn>
                 </div>
              </div>
           </q-card-section>
        </q-card>
     </div>
  </div>
</template>