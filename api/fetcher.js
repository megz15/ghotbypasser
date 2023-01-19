export default function hello(req, res) {
    res.statusCode = 200;
    const link = req.query;
    let out;
    fetch(`https://proxy.cors.sh/${link}`,{
        headers: {
            'x-cors-api-key': import.meta.env.VITE_API_KEY,
        }
    })
    .then(d => d.text())
    .then(d => {
        let b = d.search('poster="')+8
        out = (d.slice(b, d.indexOf('_l', b)) + '.webm').replace('previews', 'encoded')
    })
    res.json({ link: out, message: 'OK' });
}