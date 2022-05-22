import React from 'react';
import Def from '../default';


function App ({ children, title }) {

    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/neurostyle.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </head>
            <body>
                <header>

                </header>
                {/* different links go here*/}
                <Def title={title}>
                    {children}
                </Def>
                <footer>

                </footer>
            </body>
        </html>
    )
}

module.exports = App