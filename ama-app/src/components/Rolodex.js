import React, { Component } from 'react';
import Button from '../Button';

// const { render, search } = useFilters();
class Rolodex extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);

        // this.changeName = this.changeName.bind(this);
        // this.handleChange = this.handleChange.bind(this);
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
        let inputValue = event.target.value.toLocaleLowerCase();
        this.setState({
            searchInputValue: inputValue
        })
        // return (searchInputValue);
        
    }

    handleChange(event) {
        event.preventDefault();
        console.log('Handle state: ' + event );
        this.setState(() => {
            return {
                name: { firstName: 'ADA', lastName: 'DATA' },
            };
        });
        // console.log(e);
    }

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
        // let amazons;
        // let searchInputValue;

        console.log('render');
         
        return (
        <div className='flex flex-col items-center justify-center w-max'>
        <p className='text-xl font-semibold' >
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work with {this.state.company}.
        </p>

        <h1>Amazons Rolodex</h1>

        <input 
            className='search-box text-green-900 my-8' 
            type='search' 
            placeholder='search amazons' 
            onChange={ this.handleSearchInput }
        />

        <div className='grid grid-cols-3'>
        {/* { this.state.amazons.map((amazon) => { */}

        { 
            this.state.amazons.filter(amazon => amazon.name.toLocaleLowerCase().includes(this.state.searchInputValue)).map(amazon => (
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
            handleChange={this.props.handleChange} 
            className="button" 
            to='/' 
            onClick={this.props.onClick} />

        </div>
        );
    }
}

export default Rolodex; 