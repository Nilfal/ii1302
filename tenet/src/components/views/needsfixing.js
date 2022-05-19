
import '../css/component.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Homepage() {

  return (
    <div className='component-body'>
    <h1>Our components</h1>
    <section id="component">
      <div className="component-card">
        <img src={Blossom} alt="" />
        <div className="component-data">
            <h2>Alva Ols</h2>
            <i>Project Manager</i>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam sedesmi. Consectetur elit placerat mollis donec dolor.</p>
            <a href="hthttps://www.facebook.com/alva.ols"><FaFacebook/></a>
            <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
            <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
      <div className="component-card">
        <img src={Bubbles} alt="" />
        <div className="component-data">
          <h2>Niloofar Rahmani</h2>
          <i>Customer and Requirements Manager</i>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam sedesmi. Consectetur elit placerat mollis donec dolor.</p>
          <a href="https://www.facebook.com/niloo.rahmani"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
      <div className="component-card">
        <img src={Buttercup} alt="" />
        <div className="component-data">
          <h2>Nariman Haidar</h2>
          <i>Architect</i>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam sedesmi. Consectetur elit placerat mollis donec dolor.</p>
          <a href="https://www.facebook.com/narimann.haidar"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
    
    </section>
    
      <div className="component-card">
        <img src={Butch} alt="" />
        <div className="component-data">
          <h2>Ali Suleimani</h2>
          <i>Sustainability Manager</i>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam sedesmi. Consectetur elit placerat mollis donec dolor.</p>
          <a href="https://www.facebook.com/profile.php?id=100012727842001"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
      <div className="component-card">
        <img src={Boomer} alt="" />
        <div className="component-data">
          <h2>Nils Falck</h2>
          <i>Test Manager</i>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam sedesmi. Consectetur elit placerat mollis donec dolor.</p>
          <a href="https://www.facebook.com/nfalck1"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
          </div>
      </div>
      <div className="component-card">
        <img src={Brick} alt="" />
        <div className="component-data">
          <h2>Jabez Otieno</h2>
          <i>Development Manager</i>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam sedesmi. Consectetur elit placerat mollis donec dolor.</p>
          <a href="https://www.facebook.com/jabez.kunfu/"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
  </div>

  );
}

export default Homepage;