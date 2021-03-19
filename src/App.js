import logo from './logo.svg';
import './App.scss';
import google from './assets/google1.png'
import share from './assets/share.png'
import search from './assets/search.svg'
import micro from './assets/microphone.svg'
import dot from './assets/dots.jpg'
import profile from './assets/unnamed.jpg'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='header__first'>
          <div className='header__first--link'>About</div>
          <div className='header__first--link'>Store</div>
        </div>
        <div className='header__sec'>
          <div className='header__sec--gmail'>Gmail</div>
          <div className='header__sec--image'>Images</div>
          <div className='header__sec--square'><img  className='header__sec--square--image' src={dot}/></div>
          <div className='header__sec--prof'><img  className='header__sec--prof--image' src={profile}/></div>
        </div>
      </div>
      <div className='hero'>
        <div className='hero__image'><img className='hero__image--logo' width='500' src={google}/></div>
      </div>
      <div className="main">
        <div className='main__search'>
          <div className='main__search--icon'><img className='main__search--icon--image' src={search}/></div>
          <div className='main__search--input'><input className="main__search--input--text"/></div>
          <div className='main__search--micro'><img className='main__search--micro--image' src={micro}/></div>
        </div>
        <div className='main__text'>
          <div className='main__text--search'>Google Search</div>
          <div className='main__text--search'>I'm Feeling Lucky</div>
        </div>
      </div>
      <div className='french'>
          Google offered in: Francais
        </div>
      <div className='footer'>
        <div className='footer__country'>Canada</div>
        <div className='footer__text'>
          <div className='footer__text--fir'>
            <div className='footer__text--space'>Advertising</div>
            <div className='footer__text--space'>Business</div>
            <div className='footer__text--space'>How Search Works</div>
          </div>
          <div className='footer__text--sec'>
            <div className='footer__text--space'>Privacy</div>
            <div className='footer__text--space'>Terms</div>
            <div className='footer__text--space'>Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
