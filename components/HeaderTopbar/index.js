import React from 'react'

const HeaderTopbar = () => {
    return (
        <div className="header-top">
            <div className="auto-container">
                <div className="inner-container clearfix">
                    <div className="top-left pull-left">
                        <div className="text">Welcome to CallSense.</div>
                    </div>
                    <div className="top-right pull-right">
                        <ul className="info-list">
                            <li><span className="icon flaticon-maps-and-flags"></span> Dehli Housing Muslim Society, Sukkur, Sindh Pakistan</li>
                            <li><span className="icon flaticon-big-envelope"></span><a href="mailto:info@fastechsystem.com"> info@fastechsystem.com
                            </a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;