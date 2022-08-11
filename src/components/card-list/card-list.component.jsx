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
                amazons.map((amazon) => {
                    const { name, email, id } = amazon;
                    return (
                        <div key={id} className="card-container p-4">
                        <img alt={`amazon ${name}`} src={`https://robohash.org/${id}?set=set9&size=180x180`} />
                        <h3 className='card-title font-semibold text-green-300'>{name}</h3>
                        <p className="text-white">{email}</p>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default CardList;