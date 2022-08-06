import React, { Component } from 'react';
import Button from '../Button';

class Rolodex extends Component {
    constructor(props) {
        super(props);

        this.changeName = this.changeName.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            name: { firstName: 'Vincent',
            lastName: 'Delaleu' },
            company: 'Argil Data Agency',
            amazons:  [
                {
                    name: 'Golden Lion Tamarin',
                },
                {
                    name: 'Jaguar ',
                },
                {
                    name: 'Amazon River Dolphin',
                },
                {
                    name: 'Giant Otters',
                },
                {
                    name: 'Uakari Monkey',
                },
            ]
        };
    }

    handleChange(e) {
        e.preventDefault();
        console.log('Handle state');
        this.setState(() => {
            return {
                name: { firstName: 'ADA', lastName: 'DATA' },
            };
        });
        console.log(e);

    }

    changeName(e) {
        e.preventDefault();
        console.log('Change state');
        this.setState(() => {
            return {
                name: { firstName: 'David', lastName: 'Morard' },
            };
        });
    }

    render() {
        return (
        <div className='flex flex-col'>
        <p className='text-xl font-semibold' >
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work with {this.state.company}.
        </p>
        Amazons Rolodex
        
        <ul>

        {
            this.state.amazons.map((amazon) => {
                return <li className='font-semibold text-green-900'>{amazon.name}</li>;       
            })
        }
        </ul>

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

        <Button name={this.handleChange} />

        </div>
        );
    }
}

export default Rolodex; 