import React from 'react'
import {Logo,Header} from './top'
import { Button } from 'react-bootstrap';

class Card extends React.Component{
    render(){

        return (
            <div id ="card" className="row " >
                <div className="col-xs-1 padding-0">
                    <Logo />
                    
                </div>
                <div className="col-xs-11">
                    <Header />
                </div>
                
            </div>
           
            

        )
    }
}


export default Card;
 