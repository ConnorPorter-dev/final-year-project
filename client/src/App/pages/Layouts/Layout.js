import React, { useState, useEffect } from 'react';

const Layout = (props) => {

    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo">Code Port</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/form">Admin Panel</a></li>
                    </ul>
                </div>
            </nav>
            {props.children}
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Details</h5>
                            <p class="grey-text text-lighten-4">Thank you for trying Code Port. Any issues please contact your lecturer.</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links and Attributions</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="/">Home Page</a></li>
                                <li><a class="grey-text text-lighten-3" href="/form">Admin Panel</a></li>
                                <li><a class="grey-text text-lighten-3" href="https://github.com/ConnorPorter-dev/final-year-project">GitHub Link</a></li>
                                <li>Icons made by <a class="grey-text text-lighten-3" href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a class="grey-text text-lighten-3" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                                <li><a class="grey-text text-lighten-3" href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © Connor Porter 2021
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout