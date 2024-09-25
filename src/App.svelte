<script>
  const urlParams = new URLSearchParams(window.location.search);
  import logo from './assets/logo.png'
  import LinkInput from './lib/LinkInput.svelte'

</script>

<main>
  <img src="{logo}" class="logo" alt="GhotBypasser Logo" />
  <svg class="waves" viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg"><path d="M0,160L21.8,160C43.6,160,87,160,131,181.3C174.5,203,218,245,262,234.7C305.5,224,349,160,393,133.3C436.4,107,480,117,524,106.7C567.3,96,611,64,655,80C698.2,96,742,160,785,176C829.1,192,873,160,916,138.7C960,117,1004,107,1047,112C1090.9,117,1135,139,1178,170.7C1221.8,203,1265,245,1309,234.7C1352.7,224,1396,160,1418,128L1440,96L1440" stroke-dasharray="1650" stroke-dashoffset="1650"><animate attributeName="stroke-dashoffset" from="1650" to="0" dur="1.8s" fill="freeze" keySplines=".42,0,.58,1" calcMode="spline" keyTimes="0; 1"></animate></path></svg>
  <h1 class="glow">GhotBypasser</h1>
  <h4>Bypass (some) paywalled homework help sites!</h4>

  <div>
    <LinkInput link="{urlParams.get("link")}"/>
  </div>

  <p class="footer">
    <span>Created with 🦶 & 🫶 by <a href="https://github.com/megz15">Meghraj Goswami</a><br></span>
    <!-- <span style="font-size: small;">This site is protected by 0.5 brain cells. <a href="http://bit.ly/3HdlMfz">TOS apply.</a></span> -->
  </p>
</main>