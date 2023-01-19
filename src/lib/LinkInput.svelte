<script>
export let link
import Output from './Output.svelte'
import Loading from './Loading.svelte'
import Supported from './Supported.svelte'
let ansBtn = false
let out
let parse = () => {
    // alert(import.meta.env.VITE_API_KEY)
    if (link!=null&&link.includes('numerade')&&link.includes('question')){
        out = 'load'
        fetch(`/api/fetcher?link=${link}`)
        .then(d => d.text()).then(d => out = d)
        // .then(d => {
        //     let b = d.search('poster="')+8
        //     // out = (d.slice(b, d.indexOf('_l', b)) + '.webm').replace('previews', (link.includes('/ask/question/')) ? 'ask_video' : 'encoded')
        //     out = (d.slice(b, d.indexOf('_l', b)) + '.webm').replace('previews', 'encoded')
        //     // console.log(d)
        // })
    }
    // out = 'https://cdn.numerade.com/encoded/758b4d3a-b577-4ab7-ac11-320d7b4779d6.webm'
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
    <button on:click={_ => window.open("https://github.com/megz15/ghotbypasser", '_blank').focus()}>Star me on GitHub!</button>
    <button on:click={_ => window.open("https://github.com/megz15/ghotbypasser/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc", '_blank').focus()}>Found a bug?</button>
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
    <Output name="{out}"/>
</div>
{/if}