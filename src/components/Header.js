import React from 'react';

export default function Header (props) {
    return(
        <div className="page-header">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col">
                        <h1 className="page-title">
                            MühimHaber
                        </h1>
                    </div>
                    <div className="col-sm-4">
                        <nav className="page-navigation">
                            {props.children}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}