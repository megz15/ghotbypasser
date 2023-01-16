<script>
    export let name
</script>

<p><a href="{name}">{name}</a></p>
<video controls width='100%' style='border-radius:8px;'>
    <track kind="captions">
    <source src={name} type='video/webm'>
</video>