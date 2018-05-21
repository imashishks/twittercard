import React from 'react'
import FontAwesome from 'react-fontawesome';
function Logo(){
    return(
         <img className="profile-img" src = "https://www.mumbrella.asia/content/uploads/2018/01/buzzfeed_arrow.e86a786d9e5e2250e1ed3e0ec95ba42d.png" />
     
    )
}
class Header extends React.Component{
    render(){

        return (
            <div className="header-con">
                <h4 className="pull-left header-main">The Practical Dev</h4>
                <p className="pull-left header-handle">@thePracticalDev</p>
                <p className="pull-left header-handle">. Sept 20</p>
                <p className="pull-left ">
                <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
                </p>
            </div>

        )
    }
}
export  {Logo,Header};