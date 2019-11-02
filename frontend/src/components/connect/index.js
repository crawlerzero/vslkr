import React, {Component} from 'react';

export default class Connect extends Component {
    render() {
        return (
            <div className="container body-container vslkr-join-body">
                <h1>Connect with Us</h1>
                <p>The Voidstalker Heresy uses an automated system to make the onboarding process easier for everyone involved.  Once you connect to our Discord server, our digital assistant, Shadewalker, will provide you with a registration link.</p>
                <p>Follow the registration link and authenticate your main EVE Online account.  This will do the following:</p>
                <ul>
                    <li>Fetch your character name and set your Discord nickname on this server to your character name.</li>
                    <li>Automatically assign Discord roles that will allow you to view and participate in the recruitment and public channels.</li>
                    <li>Fetch data that will be important to the recruitment conversation, such as skill lists and other details.</li>
                </ul>
                <p>If you are new to authenticating apps using the EVE Online Single-Sign-On, note that only CCP will receive your login information and all data that you authorize for us to see is explicitly read-only.</p>
                <p>Once you authenticate, Shadewalker will provide you an authorication code.  It will look something like this:</p>
                <p className="text-center"><code>!auth 123abc4d5e6f789zyz</code></p>
                <p>Post your authorication code in the registration channel and everything will be set automatically within a few seconds.  We look forward to talking to you soon.</p>
                <br />
                <iframe title="Connect on Discord" src="https://discordapp.com/widget?id=436060818170314753&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
            </div>
        )
    }
};