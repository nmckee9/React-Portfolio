import React from 'react';
import "./icons.css"

function Icons() {
    return (
        <div>

            <div className="columns">
                <div className="column is-2 has-text-centered">
                    <span class="iconify skillsicon" data-icon="dashicons:html" data-inline="false"></span>
                </div>
                <div className="column is-2 has-text-centered">
                    <span class="iconify skillsicon" data-icon="vaadin:css" data-inline="false"></span>
                </div>
                <div className="column is-2 has-text-centered">
                    <span class="iconify skillsicon" data-icon="logos:javascript" data-inline="false"></span>
                </div>
                <div className="column is-2 has-text-centered">
                    <span className="iconify skillsicon" data-icon="vscode-icons:file-type-reacttemplate" data-inline="false"></span>
                </div>
                <div className="column is-2 has-text-centered">
                    <span class="iconify skillsicon" data-icon="logos:nodejs" data-inline="false"></span>

                </div>
                <div className="column is-2 has-text-centered">
                    <span class="iconify skillsicon" data-icon="logos:mongodb" data-inline="false"></span>
                </div>
            </div>
        </div>
    )
};

export default Icons;
