import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Registration from "./Registration";
import Typewriter from 'typewriter-effect/dist/core';
import Login from "./Login";

function ParticlesComponent() {
  const [showLogin, setShowLogin] = useState(false);
  const [linkName, setLinkName] = useState("Login");

  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);


  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['We Make Shopping Better for Everyone',
      'Shop till you drop, at our one-stop-shop!',
      "Your Fashion Destination - Unveil the Latest Trends!",
      "Fashion Finds and Deals - Your Gateway to Retail Therapy!"],
      autoStart: true,
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      
    });
  }, []);

  const handleLoginLinkClick = (event) => {
    
    event.preventDefault();
    setShowLogin(!showLogin); 
    setLinkName(showLogin ? "Login" : "Registration");
  };
  const handleRegisterClick = ()=>{
    
    setShowLogin(true)
  }

  return (
    <div className="app">
      <div className="ParticalCover" style={{ width: "800px", height: "600px", position: "relative" }}>
        <h2 style={{position:'absolute', zIndex:'2', color:'white', fontFamily:'Courgette', left:'34px', top:'13px'}}>&gt;&gt;Shoplane</h2>
        
        <h1 id="typewriter" style={{
          zIndex:'2',
          position:'absolute', 
          top:'19rem', 
          left:'8rem',
          fontSize:'2rem', 
          fontFamily:'Dancing Script',
          color: "rgb(123 148 195)",
          }}>
          
      
      </h1>

      
    
          <h1 style={{position:'absolute',zIndex:'2', color:'white', top:'13rem',left:'10rem',fontSize:'73px'}}>Welcome Back</h1>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1, 
          }}
        >
          {showLogin ? (
            
            <div>
              <Login/>
              
            </div>
          ) : (
            
            <Registration showLogin={showLogin} handleRegisterClick={handleRegisterClick} handleLoginLinkClick={handleLoginLinkClick}/>
          )}
        </div>
        <a href='/' onClick={handleLoginLinkClick} style={{ position: 'relative', top: '36.6rem', left: '35.4rem', zIndex: 2 }}>{linkName}</a>
      </div>
    </div>
  );
}

export default ParticlesComponent;
