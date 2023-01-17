<script>
export let link
import Output from './Output.svelte'
import Loading from './Loading.svelte'
import Supported from './Supported.svelte'
let out
let parse = () => {
    // alert(import.meta.env.VITE_API_KEY)
    out = 'load'
    fetch(`https://proxy.cors.sh/${link}`,{
        headers: {
            'x-cors-api-key': import.meta.env.VITE_API_KEY,
        }
    })
    .then(d => d.text())
    .then(d => {
        let b = d.search('poster="')+8
        out = (d.slice(b, d.indexOf('_l', b)) + '.webm').replace('previews', (link.includes('/ask/question/')) ? 'ask_video' : 'encoded')
        // console.log(d)
    })
    // out = 'https://cdn.numerade.com/encoded/758b4d3a-b577-4ab7-ac11-320d7b4779d6.webm'
}
if (link!=null){parse()}
</script>

<input placeholder="Paste link here" bind:value="{link}" on:keyup={e=>e.key==='Enter'&&parse()}>

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