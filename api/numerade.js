import fetch from "node-fetch";

export default function numerade_fetcher(req, res) {
    res.statusCode = 200;
    const link = req.query.link;
    fetch(link).then(d => d.text())
    .then(d => {
        let b = d.search('poster="')+8
        res.send( (d.slice(b, d.indexOf('_l', b)) + '.webm').replace('ask_previews', 'encoded').replace('previews', 'encoded') )
    })
}