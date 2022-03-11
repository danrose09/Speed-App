import React, { useEffect, useState, useRef } from 'react'
import Deck from './components/Deck';
import Header from './components/Header';
import deck from './deck';
import PlayerCard from './components/PlayerCard';
import Confetti from 'react-confetti'
import Title from './components/Title';
import GameButtons from './components/buttons/GameButtons';



// function useKey(key, cb) {
    
//     const callbackRef = useRef(cb)

//     useEffect(() => {
//         callbackRef.current = cb
//     })

//     useEffect(() => {

//         function handle(event) {
//             if(event.code === key) {
//                 callbackRef.current(event)
//             }
//         }

//         document.addEventListener('keypress', handle)
//         return () => document.removeEventListener('keypress', handle)
//     }, [key])
// }

function App() {
   
    const [key, setKey] = useState('')
    const [fullDeck, setFullDeck] = useState(deck)
    const [card, setCard] = useState('')
    const [playerHand, setPlayerHand] = useState([])
    const [hasStarted, setHasStarted] = useState(false)
    const [isStuck, setIsStuck] = useState(false)
    const [hasWon, setHasWon] = useState(false)
    const [needMoreCards, setNeedMoreCards] = useState(false)
    const [isFiveCardDeck, setIsFiveCardDeck] = useState(false)


    function handleKey(event) {
        setKey(event.key)
        if (key === 'q' && fullDeck.length === 52) {
            dealCard()
        }
          
    }

    console.log(fullDeck)
    
   
    function checkIfStuck(card, playerhand, fulldeck) {
        function checkValue(cardItem) {
            return cardItem.Value < card.Value
        }
        if (playerhand.length > 0 && fulldeck.length === 0) {
            setNeedMoreCards(true)
            console.log('Player Needs More Cards')
         } else if (playerhand.every(checkValue) === true) {
             if (playerhand.length > 0 && playerhand.length === 5) {
                setIsStuck(true)
             } 
       
            } 
             else {
            setIsStuck(false)
            setNeedMoreCards(false)
        }
        
         
    }

    useEffect(() => {
        checkIfStuck(card, playerHand, fullDeck)
    }, [playerHand, card])


    function checkHasWon(fulldeck, playerhand) {
        if (fulldeck.length === 0 && playerhand.length === 0) {
            setHasWon(true)
            console.log('Congrats you won!')
        } else if (playerhand.length === 0 && !needMoreCards && isFiveCardDeck){
            setHasWon(true)
            console.log('Congrats you won!')
        }
        else {
            console.log("Hasn't won")
        }
    }


    useEffect(() => {
        checkHasWon(fullDeck, playerHand)
    }, [playerHand, card])
    

    function dealCard() {

        if(fullDeck.length > 0) {

        setHasStarted(true)
        
        
        let randomCard = Math.floor(Math.random()* fullDeck.length)
        let newCard =  fullDeck[randomCard]
        setCard({...newCard,
            isPlayed: true})
        
       setFullDeck(prevDeck => {
          return prevDeck.filter(card => ( card.id !== newCard.id))
       })
    }
        
    }
        
    
    function generateNewCard() {

            
        
            let randomCard = Math.floor(Math.random()* fullDeck.length)
            let newCard =  fullDeck[randomCard]

            setFullDeck(prevDeck => {
               return prevDeck.filter(card =>
                card.id !== newCard.id)
                 
            })

            return {...newCard,
                isPlayed: true }
            
        }

    function generateNewPlayerHand() {
        if (playerHand.length < 5 && fullDeck.length > 0) {
            setPlayerHand(prevHand => 
            [...prevHand, generateNewCard()])
        }
    }

    function playCard(playerCard, stackCard) {
        if (playerCard.Value >= stackCard.Value) {
            setCard(playerCard)
            setPlayerHand(playerHand.filter(cardItem => {
                return cardItem.id !== playerCard.id
            }))

            
        }
    }

    
    function giveDeckCards() {


        setNeedMoreCards(false)
        setIsFiveCardDeck(true)
   

    }
    
    function resetGame() {
        setFullDeck(deck)
        setCard('')
        setPlayerHand([])
        setHasStarted(false)
        setIsStuck(false)
        setHasWon(false)
        setNeedMoreCards(false)
        setIsFiveCardDeck(false)
    }

   
    const playerHandElements = playerHand.map(cards => (
        <PlayerCard 
            image={cards.image}
            id={cards.id}
            playCard={() => {return playCard(cards, card)}}
        />
    ))


  return (
    <div className="App">
        {hasWon ? <Confetti /> : null}
      <Header />
      <Title />
      {/* <p>Key pressed is: {key}</p>
      <input type="text" onKeyPress={(e) => handleKey(e)}></input> */}
      {/* <StartGame 
          dealCard={dealCard}
          fullDeck={fullDeck}
      /> */}
       <GameButtons 
         fullDeck={fullDeck}
         generateNewPlayerHand={generateNewPlayerHand}
         dealCard={dealCard}
         hasStarted={hasStarted}
         giveDeckCards={giveDeckCards}
         resetGame={resetGame}
         isStuck={isStuck}
         needMoreCards={needMoreCards}
         hasWon={hasWon}
     />
      <Deck
      image={card.image}
      hasStarted={hasStarted}
       />
        <div className='row'>
       <div className='playerhand-container'>
      {playerHandElements}
      </div>
      </div>
    
    </div>
  );
}

export default App;
