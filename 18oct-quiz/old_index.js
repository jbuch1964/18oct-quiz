// Which file holds this?
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Profiles from './src/Profiles'

ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
  
  ReactDOM.render(routing, document.getElementById('root'));


  
/*
{
    newsArticles: [
        { 
            title: "Winning at Life!",
            article: "There are many ways to do so...but the best is just try, try, try again!"
        }
        //add more stories here in this array!
    ],
    contactProfiles: [
        {
            firstName: "Willie",
            lastName: "Dustice",
            birthday: "01/01/1978 00:00:00",
            profileImage: "/url-to-an-image.jpeg"
        }
    ]
}
*/