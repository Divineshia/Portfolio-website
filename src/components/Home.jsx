
export default function Home() {


    return(<>
    <div className="mainPage">
    
    <div className="main-content">
                {/* Introduction about yourself on home page */}
               <h2 > Developer, Engineer and Mentor </h2>
              <article >
                <div className="intro">
              <p>
                Passionate web developer with a strong foundation in HTML, CSS, JavaScript and React, dedicated to creating visually appealing and user-friendly websites. Continuously expanding knowledge 
              and exploring new technologies to deliver innovative web solutions. </p>

            <img src="./profile-pic.jpg" alt ="Profile photo" />
            
        </div> <hr/>
              {/* Mission statement */}
              <h3>Mission:</h3>
                 <p>My mission is to deliver high-quality websites that seamlessly blend functionality, aesthetics, and optimal performance, ultimately enhancing the online presence and success of businesses and individuals alike.
                 </p>
        </article><br/>

        <hr/>
            <div id="quote">
                <p>“Measuring programming progress by lines of code is like measuring aircraft building progress
                     by weight.”– Bill Gates
                </p><hr/>
            </div>     

        </div>
        
      {/* navigational footer links  */}
        <footer className="footer">
        
            <a href="https://www.linkedin.com" target="_blank" >
                <img className="footer_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                 /></a>
            <a href="https://www.instagram.com/" target="_blank">
                <img className="footer_img" src="https://freelogopng.com/images/all_img/1658587303instagram-png.png" /></a>
            <a href="https://www.github.com" target="_blank">
                <img  className="footer_img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                </a>
                
        </footer>
        </div>
    
    </>
    )
}
