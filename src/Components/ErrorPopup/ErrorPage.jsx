import { BrowserRouter } from "react-router-dom";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"

export default function ErrorPage() {
  useEffect(() => {
    var body = document.body;
    var interval = setInterval(createStar, 100)

    function createStar() {
      var right = Math.random() * 500;
      var top = Math.random() * screen.height;
      var star = document.createElement("div")
      star.classList.add("star")
      body.appendChild(star)
      var starInterval = setInterval(runStar, 10)
      star.style.top = top + "px"

      function runStar() {
        if (right >= screen.width) {
          star.remove();
          clearInterval(starInterval)
        }
        right += 3;
        star.style.right = right + "px"
      }

    }
    return () => {
      clearInterval(interval)
    }
  }, [])

  const navigate = useNavigate();
  function navigateToSafety() {
    navigate("/");
  }

  return (
    <div className="error-container">
      <div className="text"></div>
      <h1> 404 </h1>

      <h3>Oops! Something went wrong. 🤪 </h3>
      <p>We're sorry, but the page you're looking for doesn't exist.</p>
      <button onClick={navigateToSafety} className="btn btn-primary">
        Return to Home
      </button>

    </div>
  );
}

