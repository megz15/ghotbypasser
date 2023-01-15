<script>
export let link
import Output from './Output.svelte'
let out
let parse = () => {
    // fetch(`https://proxy.cors.sh/${link}`)
    // .then(d => d.text())
    // .then(d => {
    //     let b = d.search('poster="')+8
    //     out = d.slice(b, d.indexOf('_l', b)).replace('previews', 'encoded') + '.webm'
    // })
    out = 'https://cdn.numerade.com/encoded/758b4d3a-b577-4ab7-ac11-320d7b4779d6.webm'
}
if (link!=null){parse()}
</script>

<input placeholder="Paste link here" value="{link}" on:keyup={e=>e.key==='Enter'&&parse()}>

{#if out!=null}
<div class="card">
    <Output name="{out}"/>
</div>
{/if}