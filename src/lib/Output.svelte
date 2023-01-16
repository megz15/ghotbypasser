<script>
    export let name
</script>

<p><a href="{name}">{name}</a></p>
<video controls width='100%' style='border-radius:8px;'>
    <track kind="captions">
    <source src={name} type='video/webm'>
    <!-- on:error={
        e => {
            name = name.replace('encoded', 'ask_video')
            e.currentTarget.parentNode.children[1].setAttribute('src', name)
        }
    } -->
</video>