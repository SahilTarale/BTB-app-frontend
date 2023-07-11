import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>  
          
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>          
          <li className="fListItem">Hostels</li>          
        </ul>        
        
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>          
          <li className="fListItem">Careers</li>          
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 BTB</div>
    </div>
  );
};

export default Footer;
