import React from "react";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export const Footer = () => {
  const footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
  };

  return (
    <footer className="footer has-background-dark" style={footerStyle}>
      <div className="content has-text-centered has-text-white">
      <Button variant="outlined" href="https://github.com/vaibhav183" style={{cursor:"pointer"}}><GitHubIcon style={{width:"2em",height:"1.8em"}}/></Button>
      <Button variant="outlined" href="https://www.facebook.com/profile.php?id=100034310406981"  style={{cursor:"pointer",marginLeft:"0.8em"}}><FacebookIcon style={{width:"2em",height:"1.8em"}}/></Button>
      <Button variant="outlined" href="https://www.instagram.com/vaibhav_pandey3791/" style={{cursor:"pointer",marginLeft:"0.8em"}}><InstagramIcon  style={{width:"2em",height:"1.8em"}}/></Button>
      <Button variant="outlined" href="" style={{cursor:"pointer",marginLeft:"0.8em"}}><YouTubeIcon style={{width:"2em",height:"1.8em"}}/></Button>
      <Button variant="outlined" href="https://www.linkedin.com/in/vaibhav-pandey-2000/" style={{cursor:"pointer",marginLeft:"0.8em"}}><LinkedInIcon style={{width:"2em",height:"1.8em"}}/></Button>
        <p>
          <strong className="has-text-white">Banking System</strong> created by{" "}
          <p style={{fontSize:"1.5em",color:"whitesmoke"}}>Vaibhav Pandey</p>
        </p>
      </div>
    </footer>
  );
};
