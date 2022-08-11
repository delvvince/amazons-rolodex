import React, { Component } from 'react';
import Link from './Link';
import Button from './Button';
import CardList from './card-list/card-list.component';
import SearchBox from './search-box/search-box.component';

// const { render, search } = useFilters();
class Rolodex extends Component {
    constructor(props) {
        // console.log('constructor');
        super(props);

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

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);

    }

    componentDidMount() {
        // console.log('componentDidMount');
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

    handleSearchInput(event) {
        
        // console.log(event.target.value);
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

    render() {
        // console.log('render');
        // console.log('this.props');

        const { name, company, amazons, searchInputValue } = this.state;
        const { handleSearchInput, handleTextChange } = this;
        let searchedAmazons = amazons.filter(amazon => { 
            return amazon.name.toLocaleLowerCase().includes(searchInputValue);
        });
         
        return (
        <div className='flex flex-col items-center justify-center w-max-fit py-16'>
            <p className='text-xl font-semibold' >
                Hi {name.firstName} {name.lastName}, I work with {company}.
            </p>

            <h1 className='p-8 font-semibold'>Amazons Rolodex</h1>

            <SearchBox handleSearchInput={handleSearchInput} placeholder={'search amazons'} className='search-box text-green-900 my-8 w-1/2' />
            <CardList amazons={searchedAmazons} anything={[ 'a', 'z']} />
            
            <button 
            onClick={() => {
                this.setState(() => {
                    return {
                        name: { firstName: 'David', lastName: 'Morard' },
                    };
                });
            }}
            className="btn font-semibold hover:font-light hover:bg-green-800 active:bg-green-500 " 
            type="button">
                Change Name
            </button>

            <Button 
                // handleChange={this.props.handleChange} 
                className="button" 
                // to='/' 
                onClick={ handleTextChange } />

            <Link />
        </div>
        );
    }
}

export default Rolodex; 