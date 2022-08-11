import {Component} from 'react';
// import 

// const newState = { 
//     name: { firstName: 'Ada', lastName: 'Lovelace' 
// }};  

// CLASS COMPONENT 
export default class Button extends Component {

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state = { 
            name: { firstName: 'Ada', lastName: 'Lovelace' },
        };
        // console.log(this.props);
    }
    render() {
        return (
        <button
            onClick={ event => { this.props.onClick(event.target.value)} }
            className="btn font-semibold hover:font-light hover:bg-green-800 active:bg-green-500"
            type='button'
        >
        Reset Name
        </button>);
    }
}

// FUNCTIONAL COMPONENT (HOOK?)
// child

// function Button(props) {
    
//     // let name = props.name;


//     return (
//         <button 
//         onClick={this.handleChange}
//         className="btn font-semibold hover:font-light hover:bg-green-800 active:bg-green-500" 
//         type="button">
//             Change Name
//         </button>
//     );
// }
// export default Button;