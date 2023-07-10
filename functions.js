const superheros = [
    {
        name: 'IronMan',
        date: '03/01/1963'
    },
    {
        name: 'SpiderMan',
        date: '03/07/1961'
    },
    {
        name: 'Captain America',
        date: '03/08/1941'
    },
    {
        name: 'Doctor Strange',
        date: '07/20/1963'
    },
    {
        name: 'Shang-Chi',
        date: '12/05/1973'
    }
]

function getSortedSuperheros(heros) {
    return heros.sort((a,b) => new Date(a.date) - new Date(b.date));
}
console.log(getSortedSuperheros(superheros));

function specialLogs(interval) {
    // your code goes here
}
