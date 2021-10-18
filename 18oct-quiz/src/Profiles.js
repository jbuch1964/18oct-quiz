import React from 'react'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Home from './Home';
import About from './About.js';


export default function Profiles() {
    //const {profiles.contactProfiles} = useParams();
    //const {profiles.newsArticles}    = useParams();
    
    
    return (
      <>
      <div>
        <ul>
            <li>{profiles.newsArticles}</li>
        </ul>
        <Link to="/profiles">{profiles.contactProfiles}</Link>
      </div>
      </>
      
    );
      
  }



const profiles = {
    newsArticles: [
        { 
            title: "The Moon Will Soon Have Its Own Internet",
            article: "https://science.slashdot.org/story/21/10/16/2240225/the-moon-will-soon-have-its-own-internet"
        },
        { 
            title: "DoD space agency to launch laser communications experiments on SpaceX rideshare",
            article: "https://spacenews.com/dod-space-agency-to-launch-laser-communications-experiments-on-spacex-rideshare/"
        }
      
    ],
    contactProfiles: [
        {
            firstName: "Andrew",
            lastName: "Clapp",
            birthday: "After 01/01/1978",
            profileImage: "./AClapp.jpg"
        },
        {
            firstName: "Aaron",
            lastName: "Gettemy",
            birthday: "After 01/01/1978",
            profileImage: "./AGettemy.jpg"
        },
        {
            firstName: "Anthony",
            lastName: "LoGrande",
            birthday: "After 01/01/1978",
            profileImage: "./ALoGrande.jpg"
        },
        {
            firstName: "Brian",
            lastName: "Hardy",
            birthday: "After 01/01/1978",
            profileImage: "./BHardy.jpg"
        },
        {
            firstName: "Brendan",
            lastName: "Kennedy",
            birthday: "After 01/01/1978",
            profileImage: "./BKennedy.jpg"
        },
        {
            firstName: "Barry",
            lastName: "McCool",
            birthday: "After 01/01/1978",
            profileImage: "./BMcCool.jpg"
        },
        {
            firstName: "xxx",
            lastName: "xxx",
            birthday: "01/01/1978",
            profileImage: "./xxx.jpg"
        },
        {
            firstName: "Derek",
            lastName: "Rath",
            birthday: "After 01/01/1978",
            profileImage: "./Drath.jpg"
        },
        {
            firstName: "Dustin",
            lastName: "Stringer",
            birthday: "After 01/01/1978",
            profileImage: "./DStringer.jpg"
        },
        {
            firstName: "Floyd",
            lastName: "Thormodson",
            birthday: "After 01/01/1978",
            profileImage: "./FThormodson.jpg"
        },
        {
            firstName: "Jim",
            lastName: "Haggarty",
            birthday: "After 01/01/1978",
            profileImage: "./JHaggarty.jpg"
        },
        {
            firstName: "Lindsay",
            lastName: "Farias",
            birthday: "After 01/01/1978",
            profileImage: "./LFarias.jpg"
        },
        {
            firstName: "Mario",
            lastName: "Davies",
            birthday: "After 01/01/1978",
            profileImage: "./MDavies.jpg"
        },
        {
            firstName: "Yurik",
            lastName: "Garcia",
            birthday: "After 01/01/1978",
            profileImage: "./YGarcia.jpg"
        },
        {
            firstName: "Stephen",
            lastName: "Wallace",
            birthday: "After 01/01/1978",
            profileImage: "./SWallace.jpg"
        }

    ]
}
