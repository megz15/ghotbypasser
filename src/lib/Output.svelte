<script>
    export let name
    let vid
</script>

<p style="padding: 0 1em 0 1em;"><a href="{name}">{name}</a></p>
<video controls width='90%' style='border-radius:8px;' bind:this={vid}>
    <track kind="captions">
    <source src={name} type='video/webm' on:error={
        e => {
            name = name.replace('encoded', 'ask_video')
            e.target['src'] = name
            vid.load()
        }
    }>
</video>