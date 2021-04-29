<template>
  <div class="q-pa-md login-card-area">
    <div class="">
      <q-card class="my-card login-card">
        <q-card-section>
          <div class="card-data q-gutter-y-lg">
            <div class="log-head">
            <img alt="jobot logo" src="../assets/logo.svg" class="logo">
            <span>Sign In to Jobot</span>
          </div>
            <q-input outlined v-model="text" label="Email" />
             <q-input outlined v-model="password" type="password" float-label="Password"/>
             <q-btn size="20px" color="primary jt-btn" label="Next" class="full-width" />
             <div class="jt-social-login-seprator">
                <span class="jt-social-login-seprator-line"></span>
              <strong class="jt-text-or">OR</strong>
          </div>
             <a href="" class="jt-social-link"><img alt="Quasar logo" src="../assets/linkedin.svg"> Signin with LinkedIn</a>
             <a href="" class="jt-social-link"><img alt="Quasar logo" src="../assets/microsoft.svg"> Signin with Microsoft</a>
             <a href="" class="jt-social-link"><img alt="Quasar logo" src="../assets/google.svg"> Signin with Google</a>
             <a href="" class="jt-social-link"><img alt="Quasar logo" src="../assets/facebook.svg"> Signin with Facebook</a>
             <a href="" class="jt-social-link"><img alt="Quasar logo" src="../assets/apple.svg"> Signin with Apple</a>
          </div>
        </q-card-section>
      </q-card>

      
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      };
      return {
      lorem: ''
    }
    }
  }

  </script>