import React from 'react';
import me from '/Users/mirrorzzzz/Desktop/bootcamp-UTA/Challenges/Portfolio---REACT/portfolio/src/components/About/iconME.ico'


function About() {

  return (  

    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img  style={{ width: 'auto', height: 'auto' }} src={me} alt="Picture of ME"/> 
        </div>
        <p>
        As a former Cook and Customer Service worker and current Project Manager, I am excited to pursue an entry-level position in Web Design and Development. My experience developing website designs from scratch has instilled in me a passion for Responsive and Interactive design.
        </p>

        <p>With my background in project management, I understand the importance of meeting deadlines, paying attention to details, and communicating effectively. These skills have been instrumental in my work as a web developer, and I am confident that I can bring a high level of professionalism and efficiency to any project.</p>

        <p>My goal as a web designer and developer is to create beautiful and functional websites that meet the needs of clients and users alike. I believe that the best designs are those that are not only aesthetically pleasing, but also intuitive and easy to use.</p>
        <p>If you're seeking a dedicated, detail-oriented web designer and developer who is passionate about creating great websites, I would love to connect with you. Together, we can build something that will make a positive impact on the web.</p>
        
      </div>
    </section>
  );
}

export default About;
