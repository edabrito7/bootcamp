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

const heroesOrderedByDate = [...superheros];

function getSortedSuperheros(heros) {
    // your code goes here
    heros.sort((a, b) => { 
        const firstDate = new Date(a.date);
        const secondDate = new Date(b.date);

        return firstDate - secondDate;
    }); 
    
    return heros;
 }

console.log(getSortedSuperheros(heroesOrderedByDate));


function specialLogs(interval) {
    let count = 0;
    const intervalCounter = setInterval(() => { 
        count++;
        console.log(count);
        
        if(count === 10) { 
            clearInterval(intervalCounter);
        }
    }, interval);
}

specialLogs(1000);
