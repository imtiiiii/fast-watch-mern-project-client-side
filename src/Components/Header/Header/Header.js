// header compo
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import bannerbg from '../../../img/bannerbg.jpg'
const Header = () => {
    return (
        <div
            style={
                {
                    height: "100vh",

                    // backgroundColor: red[100],
                    backgroundImage: `url(${bannerbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"



                }
            }
        >
            <Navigation></Navigation>
            <HeaderBanner></HeaderBanner>
        </div>
    );
};

export default Header;