import "./ProfileCard.css";
import image1 from "../assets/profile1.png";
import image2 from "../assets/profile2.png";
import image3 from "../assets/profile3.png";
import image4 from "../assets/profile4.png";

const ProfileCard = () => {
  return (
    <>
      <h1 className="title">Our Team Members</h1>

      <div className="profile-row">

        <div className="profile-card">
          <img src={image1} className="profile-img" alt="profile" />
          <h2 className="profile-name">Dustin</h2>
          <p className="profile-role">React Developer</p>
        </div>

        <div className="profile-card">
          <img src={image2} className="profile-img" alt="profile" />
          <h2 className="profile-name">Steve</h2>
          <p className="profile-role">UI Designer</p>
        </div>

        <div className="profile-card">
          <img src={image3} className="profile-img" alt="profile" />
          <h2 className="profile-name">Nancy</h2>
          <p className="profile-role">Tester</p>
        </div>

        <div className="profile-card">
          <img src={image4} className="profile-img" alt="profile" />
          <h2 className="profile-name">Max</h2>
          <p className="profile-role">Backend Developer</p>
        </div>
        
            
        </div>
     
    </>
  );
};

export default ProfileCard;
