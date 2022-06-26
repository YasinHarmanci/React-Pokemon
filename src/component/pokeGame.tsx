import React, {Component, useEffect, useState} from 'react';
import {Card, CardBody, Col} from "reactstrap";
import PokeCard from "./pokeCard";

type T_Pokemon ={
    albumId?: number,
    id:number | undefined,
    title:string,
    url:any,
    thumbnailUrl?: any
}

const PokeGame =  (props:T_Pokemon)=> {

    const [data,setData] = useState<T_Pokemon[]>([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(response => setData(response.slice(0,10)));
    },[])

    let hand1= [];
    let hand2 = [...data];
    while (hand1.length < hand2.length){
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randPokemon= hand2.splice(randIdx, 1) [0];
        hand1.push(randPokemon);
    }
    console.log('HAND',hand1)
    return (
        <>
          <PokeCard  data={hand1}  />
            <PokeCard  data={hand2} />
        </>
    );
}

export default PokeGame;