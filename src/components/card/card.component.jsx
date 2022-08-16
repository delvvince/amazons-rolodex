import { Component } from "react";
import './card.styles.css';
class Card extends Component {
    
    render() {
        // console.log('render Card here');
        const { name, email, id } = this.props.amazon;

        return(

            <div key={id} className="card-container p-4">
                <img alt={`amazon ${name}`} src={`https://robohash.org/${id}?set=set9&size=180x180`} />
                <h3 className='card-title font-semibold text-green-300'>{name}</h3>
                <p className="text-white">{email}</p>
            </div>
        )
    }
}

export default Card;