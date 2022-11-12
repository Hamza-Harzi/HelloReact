const continents = [
    {
        Rang: 1,
        Nom: 'Elon Musk',
        Fortune: '254 milliards'
},
    {
        Rang: 2,
        Nom: 'Jeff Bezos',
        Fortune: '165 milliards'
},
    {
        Rang: 3,
        Nom: 'Bernard Arnault',
        Fortune: '145 milliards'
},
    {
        Rang: 4,
        Nom: 'Bill Gates',
        Fortune: '129 milliards'
}
]


function Data ()  {
    
  return (
    <div style={styleData}>
        {continents.map((contin) =>(
            <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '30px', textAlign: 'center'}}>
            <h2 style={{color:'#0D4C92'}}>{contin.Rang}</h2>
            <h2>{contin.Nom}</h2>
            <h2>{contin.Fortune}</h2>
            </div>))}
    </div>
  )
}

const styleData = {
    
    backgroundColor: '#2196F3',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridGap: '10px',
    padding: '100px',
    
    
}

export default Data