import { Component } from "react";

import './card-list.styles.css';

class CardList extends Component {
    render() {
        console.log('render from CardList');
        // console.log(this.props);
        const { amazons } = this.props;

        return (
            <div className='flex flex-wrap justify-center'>
                {/* CardList Component */}
                { 
                amazons.map(amazon => (
                    <div key={amazon.id} className="card-container p-4">
                        <img alt={`amazon ${amazon.name}`} src={`https://robohash.org/${amazon.id}?set=set9&size=180x180`} />
                        <h3 className='card-title font-semibold text-green-300'>{amazon.name}</h3>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default CardList;