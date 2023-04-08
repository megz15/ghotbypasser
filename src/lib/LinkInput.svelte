<script>
export let link

import Output from './Output.svelte'
import Loading from './Loading.svelte'

let ansBtn = false
let out, site

let parse = () => {
    if (link!=null&&link.includes('numerade')&&link.includes('question')){
        site = 'numerade'
        out = 'load'

        fetch(`/api/numerade?link=${link}`)
        .then(d => d.text()).then(d => out = d)
    } else if (link!=null&&link.includes('quizlet')) {
        site = 'quizlet'
        out = 'load'
        
        fetch(`/api/quizlet?link=${link}`)
        .then(d => d.json()).then(d => out = d)
    } else {
        site = 'none'
        out = `https://12ft.io/${link}`
    }
    // out = ['https://i.imgur.com/4eyDrTv.png', 'https://i.imgur.com/Yj9Jin8.png', 'https://i.imgur.com/Dz3CtsM.png']
}
if (link!=null){parse()}

let show = {quizlet: false, numerade: false}

function toggle(site) {
    show[site] = !show[site]
}

</script>

<style>
.answer {
  background-color: green;
}

.answer:hover {
  border-color: green;
  transition: background-color 0.5s;
  background-color: rgb(8, 209, 8);
}

.answer:not(:hover) {
  border-color: green;
  transition: background-color 0.5s;
  background-color: green;
}

.modal {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    backdrop-filter: blur(5px) brightness(0.4);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>

{#if show.quizlet}
  <div class="modal">
      <h2>Modal Title</h2>
      <p>Modal content goes here.</p>
      <button on:click={_ => toggle('quizlet')}>Close Modal</button>
  </div>
{/if}

{#if show.numerade}
  <div class="modal">
      <h2>Modal Title</h2>
      <p>Modal content goes here.</p>
      <button on:click={_ => toggle('numerade')}>Close Modal</button>
  </div>
{/if}

<input placeholder="Paste link here" bind:value="{link}"
    on:keyup={e=>e.key==='Enter'&&parse()}
    on:input={
        e => {
            if (e.target.value==""){
                ansBtn = false
            } else ansBtn = true
        }
    }
>
<div class="btn-grp">
    <button on:click={_ => parse()} class:answer="{ansBtn}">Get Answer</button>
    <button on:click={_ => window.open("https://github.com/megz15/ghotbypasser").focus()}>Star me on GitHub!</button>
    <button on:click={_ => window.open("https://github.com/megz15/ghotbypasser/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc").focus()}>Found a bug?</button>
</div>

{#if out==null}
<div>

    <div class="card">
        <h2>Supported Sites</h2>
        <div class="btn-grp">
            <button style="margin-left:10px;" on:click={_ => toggle('numerade')}>Numerade</button>
            <button style="margin-right:10px;" on:click={_ => toggle('quizlet')}>Quizlet</button>
        </div>
    </div>

    <div class="card">
        <h2>Disclaimer</h2>
        <h5 style="padding-left: 3em; padding-right: 3em;">This website is intended for educational purposes only. We do not condone or encourage academic dishonesty or cheating. The tool provided on this website is designed to help students access study materials for research and learning purposes only. We are not responsible for any misuse of the tool or any consequences that may result from such misuse. It is the responsibility of the user to use this tool in a legal and ethical manner. By using this website, you agree to the terms and conditions of our disclaimer.</h5>
    </div>

</div>
{:else if out=='load'}
<div>
    <Loading />
</div>
{:else}
<div class="card">
    <Output site="{site}" link="{out}"/>
</div>
{/if}