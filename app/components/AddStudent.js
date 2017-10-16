import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
	constructor() {
		super();
		this.state = {
      students: []
    };
  }

  render() {
		return (
            <form>
                <label> Name:
                    <div>
                        <input type="text" name="name" />
                     </div>
                </label>
                <label> Email
                    <div>
                        <input type="text" name="name" />
                        </div>
                </label> Githb Account
                <label>
                    <div>
                        <input type="text" name="name" />
                     </div>
                        <input type="text" name="name" />
                 </label> Campus
                <input type="submit" value="Submit" />
          </form>
		);

	}
}