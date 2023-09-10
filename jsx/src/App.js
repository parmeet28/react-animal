import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
  return (
   <div> 
    <section className="hero is-primary">
     <div className="hero-body">
      <p className="title"> Personal Digital Assistance</p>
     </div>
    </section>

  <div className="container">
   <section className="section">
    <div className="columns">
     <div className="column is-4">
      <ProfileCard title="Alexa" handle="Alexa99" image={AlexaImage} description="Alexa was created by Amazon and helps you buy things."/>
     </div>
 
     <div className="column is-4">
      <ProfileCard title="Cortana" handle="Cortana22" image={CortanaImage} description="Cortana was made by Microsoft."/>
     </div>

     <div className="column is-4">
      <ProfileCard title="Siri" handle="Siri30" image={SiriImage} description="Siri was made by Apple and is being phaseed out."/>
     </div>
  
    </div>
   </section>
  </div>
</div>


);
}

export default App;