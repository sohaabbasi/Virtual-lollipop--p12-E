import React from 'react'
import Lolly from '../component/Lolly'
import { navigate } from "gatsby";
import "../assets/style.css";
import Button from '@material-ui/core/Button';


const Home = () => {
    // font-family: Yellowtail,cursive;
    // font-size: 4em;
    // margin-top: 1em;
    return (
        <div >
            <div >
                <h1 >
                   <a href="/"> Virtual Lollipop
                   </a> </h1>
                <h3>because we all know someone who deserves some sugar.</h3>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{margin: "0px 20px"}}>
                <Lolly fillLollyTop="grey" fillLollyMiddle="yellow" fillLollyBottom="aqua" />
                </div>
                <div style={{margin: "0px 20px"}}>
                <Lolly fillLollyTop="whitesmoke" fillLollyMiddle="#BCC64d" fillLollyBottom="yellow" />
                </div>
                <div style={{margin: "0px 20px"}}>
                <Lolly fillLollyTop="#BFBCCD" fillLollyMiddle="blue" fillLollyBottom="#e95946" />
                </div>
                <div style={{margin: "0px 20px"}}>
                <Lolly fillLollyTop="grey" fillLollyMiddle="yellow" fillLollyBottom="aqua" />
                </div>
                <div style={{margin: "0px 20px"}}>
                <Lolly fillLollyTop="#f5c64d" fillLollyMiddle="#e95946" fillLollyBottom="grey" />
                </div>

               
            </div>
            <div>
            <Button  onClick={()=> navigate('/createLolly')}>
                CREATE YOUR OWN LOLLY
            </Button>
            
            </div>
        </div>
    )
}

export default Home;