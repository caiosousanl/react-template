import React, { useEffect } from 'react';

import Templates from '../containers/routes'

export default function Sidebar(props) {
    useEffect(() => {
        document.getElementById('main-wrapper').classList.toggle('toggled');

    }, []);
    return(
        <aside id="sidebar">
            <div className="sidebar-title">
                <h2>SygftttsEats GPV</h2>
            </div>
            <div className="list-group">
                { Templates.map((template, index) => (
                    <a href={template.path} className="list-group-item">{template.name}</a>
                    
                ))}
            </div>
        </aside>
    )
}
