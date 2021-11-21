import React, { Component } from 'react'
import './Contact.css'
export default class Contact extends Component {
    render() {
        return (
            <div>
                <div class="container">
		<div class="contact-box">
			<div class="left"><img src="./images/reslogo.png" align="center"></img></div>
			<div class="right">
				<h2>Contact Us</h2>
				<input type="text" class="field" placeholder="Your Name"></input>
				<input type="text" class="field" placeholder="Your Email"></input>
				<input type="text" class="field" placeholder="Phone"></input>
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn">Send</button>
			</div>
		</div>
	</div>
            </div>
        )
    }
}