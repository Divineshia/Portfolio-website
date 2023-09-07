
export default function About() {


    return(<>
    
    <div className="about">
            <h2 >Interesting things about me</h2>
            <hr/>
            {/* Each section describe the interesting things */}
            
                <h3 > Active learner</h3>
                <section className="interest1">
                {/* Arranging paragraph and image on single row */}
                            <p>As an active learner, one fascinating aspect about me is my ability to quickly absorb and apply new knowledge across a wide range of subjects. 
                                I thrive on intellectual challenges and enjoy exploring diverse fields, from science and technology to history and the arts. My insatiable curiosity drives me to delve deep into complex topics, connecting dots and synthesizing information to gain a comprehensive understanding. 
                                I actively seek out opportunities for growth, whether it's through attending workshops, engaging in online courses, or participating in thought-provoking discussions. This thirst for learning not only expands my knowledge but also fuels my creativity, problem-solving skills, 
                                and adaptability in navigating an ever-changing world.
                            </p>
                            <img src="https://media.licdn.com/dms/image/C4E12AQFWK3TrEaZJ7Q/article-cover_image-shrink_600_2000/0/1520157614564?e=2147483647&v=beta&t=Re3I4oUe8PiWH5e2yaZO5-bBe60jbxscCRoFTQ4WA2c"
                            alt="Learning pic"/>
            </section>
            <hr/>
                
                <h3 > Volunteer Advocate</h3>
              
                    <section className="interest2">
                            <p>Making a positive impact on society is a core value that drives me as being a Volunteer advocate.
                                I actively engage in volunteering activities, focusing on causes that are close to my heart, 
                                such as education and healthcare services. From tutoring underprivileged students to participating in vaccination clinics, 
                                I believe in the power of collective action to bring about meaningful change. 
                                These experiences have taught me empathy, gratitude, and the importance of giving back to our communities
                           </p>
                        
                            <img src="https://jackson.armymwr.com/application/files/5415/8206/2847/volunteers-750x421.jpg" 
                            alt="Volunteer activity"/>
    
            </section>
            <hr/>

            
                <h3 > Global Traveller</h3>
                {/* arranging the section through flex display */}
                <section className="interest3">
                            <p>One of the most interesting aspects about me is my passion for traveling. 
                                I have been fortunate enough to explore numerous countries across different countries, immersing myself in diverse cultures, cuisines, and traditions. 
                                From hiking through the lush rainforests of Assam,India to exploring the vibrant markets of Bangkok, 
                                each journey has enriched my perspective and taught me the value of embracing new experiences and connecting with people from all walks of life.
                            </p>
                        
                            <img src="https://www.traveldailymedia.com/assets/2020/09/shutterstock_624409031.jpg"
                            alt="Traveller"/>
            </section>
            
            </div>
    </>
    )
}