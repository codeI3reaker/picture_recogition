import React, {Component} from 'react';
import Particles from "react-particles-js";
import Navigation from "./components/navigation/Nav";
import SignIn from "./components/signIn/SignIn";
import Register from "./components/register/Register";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import Clarifai from "clarifai";
import './App.css';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800,
      }
    },
    "size": {
      "value": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
};

const app = new Clarifai.App({
  apiKey: "6ae3b866350041ff95bb7951cdf33f15"
})
        

class App extends Component{
  constructor() {
    super();
    this.state = {
      input: "",
      url: "",
      box: {
        top_row: null,
        right_col: null,
        bottom_row: null,
        left_col:null,
      },
      signedIn: false,
      register: false,
      user: false
    }
  }
  
  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmitUrl = () => {
    this.setState({
      url: this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.displayBox(this.calculateFaceCoordinates(response));
      })
      .catch(err => {
        console.log(err);
      });

    this.updateUserEntries();
  };

  updateUserEntries = async () => { 
    const url = "http://localhost:3000/picture";
    const payload = {...this.state.user}
    const post = await fetch(url, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const user = await post.json();

    this.setState({
      user
    })

  }
  
  calculateFaceCoordinates = (data) => { 
    let coordinates = data.rawData.outputs[0].data.regions[0].region_info.bounding_box;
    let image = document.querySelector("#picture");
    return {
      top_row: coordinates.top_row * image.height,
      left_col: coordinates.left_col *image.width ,
      bottom_row: image.height - (coordinates.bottom_row * image.height),
      right_col:image.width - (coordinates.right_col * image.width)
    }
  }

  displayBox = (box) => {
    this.setState({ box }, ()=>console.log(this.state.box))
  }

  signIn = (user) => {
    if (user) {
      this.setState({
        signedIn: true,
        user,
        register: false
      })
    } else {
      this.setState({
        signedIn: false
      })
    }
  }


  register = (boolean) => {
    this.setState({
      register: boolean,
    })
  }
  

  render() {

    console.log(this.state.user)
    
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        
        <Navigation
          signIn={this.signIn}
          signedIn={this.state.signedIn}
          register={this.state.register}
        />
        {this.state.signedIn ?  
          <div>
            <Rank user={this.state.user}/>
            <ImageLinkForm
              userInput={this.onInputChange}
              userSubmitPic={this.onSubmitUrl}
            />
            <FaceRecognition image={this.state.url} box={this.state.box}/>
          </div>
          
          : this.state.register ?
            <Register register={this.register} signIn={this.signIn}/>

            :<SignIn signIn={this.signIn} register = {this.register} />
        }
      </div>
    );
  }
}

export default App;
