import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import me from './assets/me.png';

class App extends Component{
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
     }


    render(){
        return(
            <div>
                <img src={me} alt='profile' class='profile' ></img>
                <h1>Hello!</h1>
                <p>My name is Enrique. I'm a IoT Engineer</p>
                <p>I'm always looking forward to work on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in El Paso, Texas</p>
                            <p>I made this website with React.js and deployed it using AWS CodePipeline and S3 services.</p>
                            <p>Besides coding, I love gaming and hiking.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>

                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                
            </div>
        )
    }
}

export default App;