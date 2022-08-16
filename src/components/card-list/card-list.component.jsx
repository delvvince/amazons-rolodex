import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {
    render() {
        console.log('render from CardList');
        // console.log(this.props);
        const { amazons } = this.props;

        return (
            <div className='card-list flex flex-wrap justify-center'>
                {/* CardList Component */}
                { 
                amazons.map((amazon) => {
                    return (
                        <Card amazon={amazon} />
                    )
                })
                }
            </div>
        )
    }
}

export default CardList;


// {/* <div key={id} className="card-container p-4">
// <img alt={`amazon ${name}`} src={`https://robohash.org/${id}?set=set9&size=180x180`} />
// <h3 className='card-title font-semibold text-green-300'>{name}</h3>
// <p className="text-white">{email}</p>
// </div> */}