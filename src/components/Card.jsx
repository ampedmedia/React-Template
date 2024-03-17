
function Card(props){

    return(
        <div class="rubik" id="card">
            <h2 id="cardtitle">{props.title}</h2>
            <a href={props.button1href}><button class="rubik" id="cardbutton">{props.button1}</button></a>
            <a href={props.button2href}><button class="rubik" id="cardbutton">{props.button2}</button></a>
            <a href={props.button3href}><button class="rubik" id="cardbutton">{props.button3}</button></a>
        </div>
    );
}

export default Card