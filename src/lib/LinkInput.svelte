<script>
export let link

import Output from './Output.svelte'
import Loading from './Loading.svelte'
import acd from '../assets/acd.png'

let ansBtn = false
let out, site
let ltUser = localStorage.getItem('lt_user') ?? "Username"
let ltKey = localStorage.getItem('lt_key') ?? "Access Token"

let parse = () => {
    if (link!=null&&link.includes('numerade')&&link.includes('question')){
        site = 'numerade'
        out = 'load'

        fetch(`/api/numerade?link=${link}`)
        .then(d => d.text()).then(d => out = d)
    } else {
        site = 'none'
        out = `https://12ft.io/${link}`
    }
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
    backdrop-filter: blur(4px) brightness(0.3);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.ltfields {
    margin-bottom: 2em;
    width: 100%;
    /* min-width: 250px; */
}
</style>

{#if show.quizlet}
  <div class="modal">
      <h2>Quizlet Bypasser</h2>
      <p>To use the Quizlet bypasser, you need to go to <a href='https://www.lambdatest.com/'>https://www.lambdatest.com/</a>
         <br>and register an account. Go to <a href='https://accounts.lambdatest.com/security'>your profile</a>, and enter
         <br>the <kbd>Access Token</kbd> and <kbd>Username</kbd> fields below.</p>
         <input bind:value={ltUser} class="ltfields"><input bind:value={ltKey} class="ltfields">
      <button on:click={_ => {
        localStorage.setItem('lt_user', ltUser)
        localStorage.setItem('lt_key', ltKey)
        toggle('quizlet')
      }}>Done!</button>
  </div>
{/if}

{#if show.numerade}
  <div class="modal">
      <h2>Numerade Bypasser</h2>
      <p>Enter a link from <a href='https://www.numerade.com'>https://www.numerade.com</a>
         <br>and get the answer video immediately!</p>
      <button on:click={_ => toggle('numerade')}>Understood!</button>
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
        <div>
            <button on:click={_ => toggle('numerade')}>Numerade</button>
            <!-- <button style="margin-right:10px;" on:click={_ => toggle('quizlet')}>Quizlet</button> -->
        </div>
    </div>

    <div class="card">
        <img src="{acd}" class="acd" alt="acd" width="98%" />
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