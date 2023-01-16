<script>
export let link
import Output from './Output.svelte'
import Loading from './Loading.svelte'
let out
let parse = () => {
    out = 'load'
    link = encodeURIComponent(link)
    fetch(`http://www.whateverorigin.org/get?url=${link}`)
    .then(d => d.json()['contents'])
    .then(d => {
        let b = d.search('poster="')+8
        out = d.slice(b, d.indexOf('_l', b)).replace('previews', 'encoded') + '.webm'
    })
    // out = 'https://cdn.numerade.com/encoded/758b4d3a-b577-4ab7-ac11-320d7b4779d6.webm'
}
if (link!=null){parse()}
</script>

<input placeholder="Paste link here" bind:value="{link}" on:keyup={e=>e.key==='Enter'&&parse()}>

{#if out==null}
<div>
    null
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