import { BrowserRouter } from 'react-router-dom';
import './errorPage.css';
import{useNavigate} from "react-router-dom"


export default function ErrorPage (){
const navigate= useNavigate()
function navigateToSafety(){
    navigate("/")
}



  return (
    <div className="container">
      <h1>Oops! Something went wrong.dizzy_face:🤪 dizzy_face:</h1>
      <p>We're sorry, but the page you're looking for doesn't exist.</p>
      <button onClick={navigateToSafety}className='btn btn-primary'>Return to safety</button>
    </div>
  );
  }
