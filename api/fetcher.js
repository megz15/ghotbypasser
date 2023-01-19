export default function fetcher(req, res) {
    res.statusCode = 200;
    res.json({ message: 'Passed' });
}