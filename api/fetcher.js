export default function hello(req, res) {
    res.statusCode = 200;
    const link = req.query.link;
    fetch(link).then(d => d.text()).then(d => res.json({ link: d, message: 'OK' }))
}