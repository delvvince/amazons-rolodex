import { Component } from "react";

class CardList extends Component {
    render() {
        console.log('render from CardList');
        // console.log(this.props);
        const { amazons } = this.props;

        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* CardList Component */}
                { 
                amazons.map(amazon => (
                    <div key={amazon.id} className="p-4">
                        <h3 className='font-semibold text-green-300'>{amazon.name}</h3>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default CardList;