<script>
export let link
let parse = () => {
    fetch(`https://proxy.cors.sh/${link}`, {
        headers: {
            "origin": link
        }
    })
    .then(d => d.text())
    .then(d => {
        let b = d.search('poster="')+8
        console.log(d.slice(b, d.indexOf('_l', b)).replace('previews', 'encoded') + '.webm')
    })
}
if (link!=null){parse()}
</script>

<input placeholder="Paste link here" value="{link}" size="60" on:keyup={e=>e.key==='Enter'&&parse()}>