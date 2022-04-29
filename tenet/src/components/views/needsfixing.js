
function Homepage() {
  return (
    <section id="sec-1">
      <div className="homepage" style={{
        background: "content-box radial-gradient(greenYello, green)"
      }}>
        <style type="text/css"></style>
        <div className='sub-main' >

        </div>
        <h2 style={
          {
            color: "black",
            fontSize: "100px",
            margin: 0,
            padding: 0,
            textAlign: "center",
            marginTop: "20%",

          }
        }>Decibel</h2>

        <h3 style={
          {
            color: "black",
            fontSize: "50px",
            fontFamily: "cursive",
            margin: 0,
            padding: 0,
            textAlign: "center",
            marginTop: "0.05%",
          }
        }>"When is loud, too loud"</h3>

        <h4 style={
          {

            position: "absolute",
            bottom: "10px",
            left: "50%",
            border: "2px solid #333",
            color: "black",
            cursor: "pointer",
          }
        }
        >
        </h4>
        <section id ="#sec-2" >
        
        <a href="#sec-2">
          <div class="scroll-down"></div>
        </a>
        </section>  
      </div>
    </section>
   
  );
}

export default Homepage;