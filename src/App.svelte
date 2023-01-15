<script>
  const urlParams = new URLSearchParams(window.location.search);
  import logo from './assets/logo.png'
  import LinkInput from './lib/LinkInput.svelte'
</script>

<main>
  <img src="{logo}" class="logo" alt="Vite Logo" />
  <h1>GhotBypasser</h1>

  <div class="card">
    <LinkInput link="{urlParams.get("link")}"/>
  </div>

  <p>
    Bypass (some) paywalled homework help sites!
  </p>

  <p class="footer">
    Created with ☕ & 💗 by <a href="https://github.com/megz15" target="_blank" rel="noreferrer">Meghraj Goswami</a>
  </p>
</main>

<style>
  
</style>
