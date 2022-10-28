import React from 'react';

const logoSection = <div class="logo">Logo Here</div>;
let menus = ["Home","About","Contact Us", "Login"];
const mainMenu = menus.map((item) => <li>{item}</li>);

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className={this.props.className !== undefined ? this.props.className : 'Header'}>
            <div class={this.props.logoClass !== undefined ? this.props.logoClass : 'logo'}>{this.props.logoText !== undefined ? this.props.logoText : 'Logo Here'}</div>
            <ul className={this.props.menuClass !== undefined ? this.props.menuClass : ''}>
                {menus = this.props.menus !== undefined ? this.props.menus : menus }
                {menus.map((item) => <li>{item}</li>)}
            </ul>
        </div>
        );
    }

}

export default Header;