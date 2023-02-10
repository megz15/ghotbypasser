<script>
  const urlParams = new URLSearchParams(window.location.search);
  import logo from './assets/logo.png'
  import LinkInput from './lib/LinkInput.svelte'
  
  // import * as sqlite3 from "sqlite3"
  // // const sqlite3 = require('sqlite3').verbose();
  // const bcrypt = require('bcrypt');
  // import * as bcrypt from 'bcrypt'

  // function auth(email, pass) {
  //   // const db = new sqlite3.Database(':memory:');
  //   alert(pass)
  //   // bcrypt.genSalt(10, function(err, salt) {
  //   //     bcrypt.hash(pass, salt, function(err, hash) {
  //   //         alert(hash)
  //   //     });
  //   // });


    // db.serialize(() => {
    //     db.run("CREATE TABLE users (user TEXT, pass TEXT)");

    //     const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    //     for (let i = 0; i < 10; i++) {
    //         stmt.run("Ipsum " + i);
    //     }
    //     stmt.finalize();

    //     db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    //         console.log(row.id + ": " + row.info);
    //     });
    // });

    // db.close();
  // }



  // import { Issuer } from 'openid-client';
  
  // import * as passport from 'passport'

  // var passport = require('passport');
  // var OAuthStrategy = require('passport-oauth').OAuthStrategy;
  
  // function oauth_init(clientID, clientSec) {
  //   passport.use('provider', new OAuthStrategy({
  //     authorizationURL: 'https://www.provider.com/oauth2/authorize',
  //     tokenURL: 'https://www.provider.com/oauth2/token',
  //     clientID: clientID,
  //     clientSecret: clientSec,
  //     callbackURL: 'https://www.example.com/auth/provider/callback'
  //   },
  //   function(accessToken, refreshToken, profile, done) {
  //     // User.findOrCreate(..., function(err, user) {
  //     //   done(err, user);
  //     // });
  //     console.log(accessToken)
  //     console.log(refreshToken)
  //     console.log(profile)
  //     console.log(done)

  //   }
  // ));
  // }

</script>

<main>
  <img src="{logo}" class="logo" alt="GhotBypasser Logo" />
  <svg class="waves" viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg"><path d="M0,160L21.8,160C43.6,160,87,160,131,181.3C174.5,203,218,245,262,234.7C305.5,224,349,160,393,133.3C436.4,107,480,117,524,106.7C567.3,96,611,64,655,80C698.2,96,742,160,785,176C829.1,192,873,160,916,138.7C960,117,1004,107,1047,112C1090.9,117,1135,139,1178,170.7C1221.8,203,1265,245,1309,234.7C1352.7,224,1396,160,1418,128L1440,96L1440" stroke-dasharray="1650" stroke-dashoffset="1650"><animate attributeName="stroke-dashoffset" from="1650" to="0" dur="1.8s" fill="freeze" keySplines=".42,0,.58,1" calcMode="spline" keyTimes="0; 1"></animate></path></svg>
  <h1 class="glow">GhotBypasser</h1>
  <h4>Bypass (some) paywalled homework help sites!</h4>

  <!-- <button on:click={_ => {
    var email = prompt('Enter email:')
    var pass = prompt('Enter pass:')
    let formData = new FormData();
    formData.append('email', email);
    formData.append('pwd', pass);
    
    fetch("http://127.0.0.1:5000/login", {
      method: 'post',
      body: formData,
    }).then(d => d.text())
    .then(d => {
        console.log(d)
    })
  }
  }>Login</button> -->

  <div>
    <LinkInput link="{urlParams.get("link")}"/>
  </div>

  <p class="footer">
    <span>Created with ☕ & 💗 by <a href="https://github.com/megz15" target="_blank" rel="noreferrer">Meghraj Goswami</a><br></span>
    <!-- <span style="font-size: small;">This site is protected by 0.5 brain cells. <a href="http://bit.ly/3HdlMfz">TOS apply.</a></span> -->
  </p>
</main>

<style>
  
</style>
