import React from 'react'
import Header from './Components/Header'
import MainSection from './Components/MainSection'
import data from './data'


export default function App (){

    const cards = data.map(function(infoCard){
        return (<MainSection
            title ={infoCard.title}
            location = {infoCard.location}
            googleMapsUrl = {infoCard.googleMapsUrl}
            startDate ={infoCard.startDate}
            endDate ={infoCard.endDate}
            description={infoCard.description}
            imageUrl={infoCard.imageUrl}
        />)
    })


    return(
        <>
            <Header/>
        {cards}
        </>
    )
}