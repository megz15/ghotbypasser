<script>
    export let link
    export let site
    let steps = link.length
    let vid
</script>

{#if site=='numerade'}
    <p style="padding: 0 1em 0 1em;"><a href="{link}">{link}</a></p>
    <video controls width='90%' style='border-radius:8px;' bind:this={vid}>
        <track kind="captions">
        <source src={link} type='video/webm' on:error={
            e => {
                link = link.replace('encoded', 'ask_video')
                e.target['src'] = link
                vid.load()
            }
        }>
    </video>
{:else if site=='quizlet'}
    <h4 style="padding: 0 1em 0 1em;">Here's the solution in {steps} step{#if steps!=1}s{/if}!</h4>
    {#each link as l}
        <!-- svelte-ignore a11y-missing-attribute -->
        <img style='border-radius:8px;margin-bottom:10px;' src='data:image/png;base64,{l}' width='98%'>
    {/each}
{:else if site=='none'}
    <div style="padding: 2em 1em 2em 1em;">
        Your site isn't supported yet. Open an issue, or try using this:<br>
        <a href={link}>{link}</a>
    </div>
{/if}