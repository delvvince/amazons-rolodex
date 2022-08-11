import React, { Component } from 'react';
import Button from '../Button';

// const { render, search } = useFilters();
class Rolodex extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);

        // this.changeName = this.changeName.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);

        this.state = {
            name: { firstName: 'Vincent', lastName: 'Delaleu' },
            company: 'Argil Data Agency',
            amazons:  [ ],
            searchInputValue: '',
            // amazons:  [
            //     {
            //         name: 'Golden Lion Tamarin',
            //     },
            //     {
            //         name: 'Jaguar ',
            //     },
            //     {
            //         name: 'Amazon River Dolphin',
            //     },
            //     {
            //         name: 'Giant Otters',
            //     },
            //     {
            //         name: 'Uakari Monkey',
            //     },
            // ]
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return {amazons: users}
        },
        () => {
            // console.log(this.state);
            // console.log(this.state.searchInputValue);
        }
        ));
    }

    // const [ name, setText ] = useState();

    handleSearchInput(event) {
        
        console.log(event.target.value);
        // console.log(this.state.searchInputValue);
        let searchField = event.target.value.toLocaleLowerCase();
        this.setState({
            searchInputValue: searchField
        })
        // return (searchInputValue);
    }

    handleTextChange() {
        // event.preventDefault();
        // const { name } = this.state;
        // console.log('Handle state: ' + name.lastName );
        // let newName = { name: { firstName: 'ADA', lastName: 'DATA' } };
        // this.setState({ newName });
        this.setState(() => {
            return {
                name: { firstName: 'Vincent', lastName: 'Delaleu' },
            };
        });
    };

    // changeName(e) {
    //     e.preventDefault();
    //     console.log('Change state');
    //     this.setState(() => {
    //         return {
    //             name: { firstName: 'David', lastName: 'Morard' },
    //         };
    //     });
    // }

    render() {
        console.log('render');
        const { name, company, amazons, searchInputValue } = this.state;
        const { handleSearchInput, handleTextChange } = this;
        // let amazons;
        // let searchInputValue;
        let searchedAmazons = amazons.filter(amazon => { 
            return amazon.name.toLocaleLowerCase().includes(searchInputValue);
        });
         
        return (
        <div className='flex flex-col items-center justify-center w-max-fit'>
            <p className='text-xl font-semibold' >
                Hi {name.firstName} {name.lastName}, I work with {company}.
            </p>

            <h1 className='p-8'>Amazons Rolodex</h1>

            <input 
                className='search-box text-green-900 my-8 w-1/2' 
                type='search' 
                placeholder='search amazons' 
                onChange={ handleSearchInput }
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {/* { this.state.amazons.map((amazon) => { */}

            { 
                searchedAmazons.map(amazon => (
                    <div key={amazon.id} className="p-4">
                        <h3 className='font-semibold text-green-300'>{amazon.name}</h3>
                    </div>
                ))
            }
            </div>

            <button 
            onClick={() => {
                this.setState(() => {
                    return {
                        name: { firstName: 'David', lastName: 'Morard' },
                    };
                });
            }}
            className="btn font-semibold hover:font-light hover:bg-green-800 active:bg-green-500" 
            type="button">
                Change Name
            </button>

            <Button 
                // handleChange={this.props.handleChange} 
                className="button" 
                // to='/' 
                onClick={ handleTextChange } />

        </div>
        );
    }
}

export default Rolodex; 