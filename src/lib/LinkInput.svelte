<script>
export let link

import Output from './Output.svelte'
import Loading from './Loading.svelte'
import Supported from './Supported.svelte'

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
    }
    // out = ['https://i.imgur.com/4eyDrTv.png', 'https://i.imgur.com/Yj9Jin8.png', 'https://i.imgur.com/Dz3CtsM.png']
}
if (link!=null){parse()}
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
</style>

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
    <Supported />
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