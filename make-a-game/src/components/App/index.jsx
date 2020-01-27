import React from 'react';


import './index.css';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: "about",
            // could add more things here
        };
    }

    setTab(newTab) {
        this.setState({
            tab: newTab,
        })
    }

    contents() {
        if (this.state.tab === "about") {
            return <About />;
        } else if (this.state.tab === "projects") {
            return <Projects />;
        }
    }

    render() {
        return (
            <div class="body">
                <div id="navbar" class="navbar-links">
                    <div class="navbar-tabs">
                        <ul class="site-menu">
                            <li><div id="about" onClick={() => {this.setTab("about")}}>About Me</div></li>
                            <li><div id="projects" onClick={() => {this.setTab("projects")}}>Project</div></li>
                            <li><div onClick={() => {this.setTab("about")}}>Service</div></li>
                            <li><div onClick={() => {this.setTab("about")}}>Work</div></li>
                            <li><div onClick={() => {this.setTab("about")}}>New</div></li>
                            <li><div onClick={() => {this.setTab("about")}}>Contact</div></li>
                            
                        </ul>
                    </div>
                </div>
                <div>
                    {this.contents()}
                </div>    
            </div>
        );
    }
}