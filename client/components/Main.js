import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

/* Styles are built with compass, loaded with webpack loaders that read css properly) */
/* import '../styles/css/vendor.css'
 * import '../styles/css/style.css'*/

/* import '../../node_modules/react-github-contribution-calendar/default.css'*/


/* Actions */
import * as profilesActions from '../actions/profiles.actions'
import * as habitsActions from '../actions/habits.actions'
import * as notesActions from '../actions/notes.actions'

/* My components  */
import Header from './Header'
import Habits from './Habits'
import About from './About'

/* import vendor from '../styles/css/vendor.css'*/
/* import style from '../styles/css/style.css'*/

class Main extends Component {
    componentDidMount(){
	if (navigator.onLine) {
	    this.props.fetchUser()
	} else {
	    this.props.loadHabitsBrowser()
	    this.props.loadNotesBrowser()	    
	}
    }

    render() {
	return (
	    <div>
		<BrowserRouter>
		    <div className="mainWrapper">
			<Route exact path="/" component={Habits} />
			<Route exact path="/about" component={About} />
		    </div>
		</BrowserRouter>
	    </div>
	)
    }
}

/* Magic connecting component to redux */
function mapStateToProps(state) {
    return {
    	profile: state.profile
    }
}
/* First argument allows to access state */
/* Second allows to fire actions */
export default connect(mapStateToProps, {...profilesActions,
					 ...habitsActions,
					 ...notesActions} )(Main);
