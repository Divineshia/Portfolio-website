

export default function Portfolio() {


    return(<>
    <div className="portfolio">
        <h2 >PROJECTS I HAVE BUILT</h2>
            <hr/>
            {/* Each section describe the projects */}
            
            <section className="project">
                
                <a href="https://github.com/DevDynasty2/stonecap.git">E-Commerce website</a>
                <hr/>
                <p>Created an e-commerce website named Sage Swan that sells a variety of musical instruments. This site has register/login features, a user profile page with conditional rendering based on the user's admin status, a functional cart page with quantity adjustment, delete item/clear cart functions, and a checkout button that renders a confirmation page. </p>
                    <p> A homepage features data rendered from database created for this project, with the option for single item views and 'add to cart' functionality. The user's profile page has admin capability when admin boolean is 'true', which allows user to see a list of users and a list of items in database, with options to add/delete/modify items in database.
                    
                </p>
                <img src="https://i.postimg.cc/wMpdnYYk/Screenshot-2023-09-05-at-4-34-22-PM.png" 
                alt="Project picture"/>
                </section>


                <section className="project">
                    {/* <h3 > Stranger's Things marketplace</h3> */}
                    {/* style="font-style: italic;" */}
                    <a href="https://strangers-things-shop.netlify.app">Stranger's Things marketplace</a>
                    <hr/>
                    <p>The project is to design and build the front end of the online marketplace website to sell used items, with a signup and login page using Json Web Token. Authenticated users can include their items for purchase and posts of information about the product with delivery options.
                         </p> 
                         
                        <p> Developed with React, Javascript, HTML and CSS styling and fetching data from generated API endpoints .
                            Designed functioning keys on adding and deleting products for authenticated users and detailed display of products 
                            Guest users without an account had given access to view the posts of products to purchase.
                        
                    </p>
                    <img src="https://i.postimg.cc/MTh7yxjq/Screenshot-2023-09-05-at-4-24-11-PM.png" 
                    alt="Project picture"/>
                    </section>

                    <section className="project">
                        
                        <a href="https://github.com/Divineshia/PuppyBowl-Project">Puppy Bowl Mini game</a>
                        <hr/>
                        <p>The project is to enhance the website for a mini-game named Puppy Bowl , which would lead potential pet adopters to build rosters of cute puppies for the game.

                             </p>
                            <p> Designed and implemented a player profile page allowing users to add and remove cute puppies to a game roster. 
                                Created a nicely formatted list of all players page with See details button to display the player details and assigned team.
                                Developed with Visual Studio code using Javascript, HTML and CSS styling and fetching data from generated API.
                            
                        </p>
                        <img src="https://i.postimg.cc/tT0JkgDS/Puppybowl-Display-page.png" alt="Project picture"/>
                        </section>
    </div>

                
    
    </>
    )
}