import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Col} from "reactstrap";


// type T_Pokemon ={
//
//     data:Array<dataSource>
// }
//
// type dataSource = {
//     albumId?: number,
//     id:number | undefined,
//     title:string,
//     url:any,
//     thumbnailUrl?: any
//     showContent: false;
// }
//
//
//
// const PokeCard =  (props:T_Pokemon)=> {
//
//     constructor
//
//    const showMore = (e:React.ChangeEvent<HTMLInputElement>) => {
//        let Show = props.data, showContent;
//        e.setState(showContent = !Show)
//     }
//
//    return (
//        <>
//            {props.data.map(e =>{
//                return (
//                    <Col sm="2" onClick={showMore}>
//                        <Card  key={e.id} className="border-0 shadow m-2">
//                                <img className="card-img-top" width="100" src={e.url} alt={e.title}/>
//                            <CardBody>
//                                <h5 className="">{e.title}</h5>
//                            </CardBody>
//                        </Card>
//                    </Col>
//            )
//            })}
//            <hr/>
//        </>
//    );
// }
//
//
// export default PokeCard;



type T_Pokemon ={

    data:Array<dataSource>
}

type dataSource = {
    albumId?: number,
    id:number | undefined,
    title:string,
    url:any,
    thumbnailUrl?: any
}

interface  e_click  {
    items:Array<any>,
    first: boolean
}



class PokeCard extends React.Component<T_Pokemon,e_click>  {

    // let padToThree  = (number:number) => (number <= 999 ? `00${number}`.slice(-3):number)
    //  let imgSrc = `${data}${props.id}${props.url}.png`

    constructor(props:T_Pokemon) {
        super(props);
        this.state = {
            first: true,
            items:[]
        }

    }

    showMore = (id:any,show:boolean) => {
     /* this.setState({
          ...this.state,
          ...{items:[...this.state.items,...[{id:id,show:show}]]}
      })*/
    }

    render(){

        let c: any = [];

        return (
            <>
                { this.props.data.map((e,i,a) =>{
               //    console.log(i,a)
/*
                    this.setState({
                        ...this.state,
                        ...{items: [{id:e.id,show:true}] }
                    })*/
                    //console.log(this.props.data)
                    // c.push(e.id)
                    // console.log(c);

                    return (
                        <Col sm="2" key={i} >
                            <Card className="border-0 shadow m-2">
                                <img className="card-img-top" width="100" src={e.url} alt={e.title}/>
                                <CardBody>
                                    <h5 className="">{e.title}</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    )

                })}


                <hr/>
            </>
        );
    }

}


export default PokeCard;