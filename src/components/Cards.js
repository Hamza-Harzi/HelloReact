import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import zhaoCard from '../utulis/Changpeng_Zhao_in_2022.jpg'
import zengCard from '../utulis/Zeng Yuqun.jpg'
import philCard from '../utulis/phil-knight.jpg'


const Cards = () => {
  return <div style={styleCard}> 
  <div>
   <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={zengCard} />
      <Card.Body>
        <Card.Title>Zeng Yuqun</Card.Title>
        <Card.Text>
        Zeng Yuqun, également connu sous le nom de Robin Zeng, est un entrepreneur milliardaire chinois. Il est le fondateur et le président du fabricant de batteries Contemporary Amperex Technology (CATL). En 2005, l’entreprise a été rachetée par la société japonaise TDK, mais Zeng est resté à la tête d’ATL.
        </Card.Text>
        <Button variant="primary" href='https://en.wikipedia.org/wiki/Phil_Knight' target="_blank">See More</Button>
      </Card.Body>
    </Card>
    </div>
   <div>
   <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={philCard} />
      <Card.Body>
        <Card.Title>Phil Knight</Card.Title>
        <Card.Text>
        Originaire de Portland, dans l’Oregon, Phil Knight est né le 24 février 1938 aux États-Unis. Il est le fils de William Hampson, avocat et éditeur du journal Oregon. Il a effectué ses études secondaires à l’école Cleveland avant de s’inscrire à l’Université de l’Oregon où il obtient une licence en comptabilité et un diplôme en journalisme en 1959.
        </Card.Text>
        <Button variant="primary" href='https://en.wikipedia.org/wiki/Robin_Zeng' target="_blank">See More</Button>
      </Card.Body>
    </Card>
    </div>
   <div>
   <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={zhaoCard} />
      <Card.Body>
        <Card.Title>Changpeng Zhao</Card.Title>
        <Card.Text>
        Changpeng Zhao est un Canadien plus connu sous le pseudonyme CZ. Il fait son entrée pour la première fois dans le classement des hommes les plus riches du monde. Il tire sa richesse des cryptomonnaies. Il est à l’origine d’une application que beaucoup utilisent pour acheter et échanger des Bitcoins ou de l’Ethereum : Binance.
        </Card.Text>
        <Button variant="primary" href='https://en.wikipedia.org/wiki/Changpeng_Zhao' target="_blank">See More</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
}

const styleCard = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    
    backgroundColor: '#395b64',
    padding: '100px',
    
    
    
    
}

export default Cards
