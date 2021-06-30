import React, { Component } from "react";
import "./Dashboard.css";
import loader from "./loader.gif";
import a from "./1.jpg";
import b from "./2.png";
import c from "./3.png";
import d from "./4.png";
import e from "./5.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="background">
        <div className="q ">
          <div className="container ">
            <div className="container text-left">
              <br></br>
              <br></br>
              <h1 className="d">About Us</h1>
              <br></br>
              <br></br>
              <p className="paragraph">
                <b>Travel dreams & destinations </b>is a tourist guide website
                for those traveling to India. Our primary goal is to provide a
                guide and relevant information that will assist tourists
                planning to visit India. We also provide information on the
                lesser-known areas that will make a great vacation spot for
                those traveling to India. Tourism has been identified as one of
                the major sectors that contribute as much as 9 percent to the
                national GDP of India. Encouraging tourism to India is not only
                doing the economy a favor but helping to foster unity in the
                world. Encouraging tourism is also a way of helping people to
                take a break from their busy schedule to relax which is
                generally good for maintaining optimal health.
              </p>
              <div className="container text-center">
                <img src={a}></img>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
              <p>
                
                <img src={b} className="inner"></img>
                <h2>Our Belief</h2>
                
                We believe that a great number of people aspire to travel to
                India but are not sure how to go about it. We have provided
                articles on the rules and requirements that travelers will need
                to abide by when they want to travel to India. This will make
                vacation planning much easier. 
                <br></br>
                The rise in technology has made
                the act of booking hotels simpler than ever. However, relying on
                agencies can save you some stress that may arise when you use
                online booking. We have had instances of network failures during
                online transactions which interfere with bookings and this has
                often resulted in serious issues. We compare the pros and cons
                of using tour agencies against doing it yourself.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <p>
              <img src={c} className="inner"></img>
              <h2>Our Mission</h2>
              India Tourist Office is committed to bringing all the latest news
              and information regarding tourism in India to our esteemed
              readers. We know that tourism is a multi-faceted sector with lots
              of key players and potential. We commit ourselves to providing you
              with information that has been simplified for ease of
              comprehension.
              <br></br>
              <br></br>
              Several regions of the world have a misconception about India.
              There are countries that see India as nothing other than a poor,
              third-world nation. Traveling to India and witnessing the various
              cultures will help them to dispel these negative ideas. As India
              pushes towards a more bilateral relationship with the rest of the
              world, we are certain that India will one day rise to become one
              of the top three tourism hubs in the world.
              <br>
              </br> We accept the
              responsibility to champion the growth of India’s inbound tourism
              through providing interesting information on the different tourist
              locations scattered all over the country. While doing this, we
              will maintain utmost respect for our neighbors
              </p>
              <br></br>
              <br></br>
              
              <br></br>
              <p>
              <img src={d} className="inner1"></img>
              <h2>Our Vission</h2>
              India Tourist Office is looking forward to a time when the tourism
              sector in India will grow to provide at least a quarter of the
              nation’s GDP, as well as promote the unity of the diverse cultures
              in the country.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br>
              </br>
              <br></br>
              <p>
              <img src={e} className="inner"></img>
              <h2> The Future</h2>
              There is a myriad of cultures in the world. These different
              cultures should not be a source of division but a factor that
              unites us. We should be enthusiastic to learn each other’s culture
              and traditions. To get to this point, the nations of the world
              should focus on developing their tourism sectors. The loss of
              different cultural elements in various parts of the world can be
              avoided if more emphasis is put on tourism. Some cultures are
              going extinct and this is bad news for our collective existence.
              <br></br>
              <br></br>
              In addition to being a foreign exchange earner, tourism has the
              potential to eliminate unemployment. The rise in crime is often
              linked to unemployment. When more of the nation’s population is
              employed, we will have a more peaceful society to live in.
              <br></br>
              <br></br>
              Through interacting with one another, we will be able to deal with
              stereotypes in all their forms, highlight our collective unity and
              foster peace. Together we can build a world where everyone is
              treated equally, irrespective of their race or culture.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
