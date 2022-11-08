import React from 'react';

// const logoSection = <div class="logo">Logo Here</div>;
let menus = ["Home","About","Contact Us", "Login"];
// const mainMenu = menus.map((item) => <li>{item}</li>);

class Header extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    
    menus = this.props.menus !== undefined ? this.props.menus : menus;

    render(){
        return(
        <div className={this.props.className !== undefined ? this.props.className : 'Header'}>
            <div className="row">
                <div className="col-sm-4">
                    <div className={this.props.logoClass !== undefined ? this.props.logoClass : 'logo'}>{this.props.logoText !== undefined ? this.props.logoText : 'Logo Here'}</div>
                </div>
                <div className="col-sm-8">
                        <ul className={this.props.menuClass !== undefined ? this.props.menuClass : 'menu-class'}>
                            {menus.map((item)=><li>{item}</li>)}
                        </ul>
                </div>
            </div>
            

        </div>
        );
    }

}

export default Header;