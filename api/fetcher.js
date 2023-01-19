export default function hello(req, res) {
    res.statusCode = 200;
    const link = req.query.link;
    fetch(link).then(d => d.text())
    .then(d => {
        let b = d.search('poster="')+8
        res.send( (d.slice(b, d.indexOf('_l', b)) + '.webm').replace('previews', 'encoded') )
    })
}