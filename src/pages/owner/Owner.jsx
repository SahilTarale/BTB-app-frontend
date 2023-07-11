import { useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const GetOwner = ()=>{

    const [name,setname] = useState('');
    const [type,setType] = useState('');
    const [city,setCity] = useState('');
    const [address,setaddress] = useState('');
    const [distance,setdistance] = useState('');
    const [cheapestPrice,setcheapestPrice] = useState('');
    const [deposite,setdeposite] = useState('');
    const [rating,setrating] = useState('');
    const [rooms,setRoom] = useState('');
    const [area,setarea] = useState('');
    const [available,setavailable] = useState('');
    const [owner,setOwner] = useState('');
    const [mobile,setmobile]=useState('');
    const [ownerType,setOwnerType]=useState('');
    const [capacity,setCapacity]=useState('');
    const [perRate,setPerRate]=useState('');  
    const [desc,setdesc]=useState(''); 
    const [photos,setPhotos]=useState('');
    const navigate=useNavigate();

    async function ownerDetails(ev) {
        ev.preventDefault();

        const formData=new FormData();
        formData.append('name',name);
        formData.append('type',type);
        formData.append('city',city);
        formData.append('capacity',capacity);
        formData.append('owner',owner);
        formData.append('mobile',mobile);
        formData.append('address',address);
        formData.append('distance',distance);
        formData.append('desc',desc);
        formData.append('rating',rating);
        formData.append('rooms',rooms);
        formData.append('cheapestPrice',cheapestPrice);
        formData.append('deposite',deposite);
        formData.append('area',area);
        formData.append('perRate',perRate);
        formData.append('ownerType',ownerType);

        for(let i=0;i<photos.length;i++){
                const file= photos[i];
                formData.append("photos",file);
        }


        
        try {
          await axios.post('http://localhost:8800/api/rooms',formData);
          alert('Owner Details posted successful. ');
          navigate("/");
        } catch (e) {
            console.log(e);
          alert('Owner Details post failed. Please try again later');
        }
      }



    return (
        <div className="owner" >
            <div className="container">        
                <h2>Room Details</h2>
                <form  onSubmit={ownerDetails}>
                <input type="text"
                        placeholder="name of thing"
                        value={name}
                        onChange={ev => setname(ev.target.value)} />
                <input type="text"
                        placeholder="House,Apartment,Hostel"
                        value={type}
                        onChange={ev => setType(ev.target.value)} />
                <input type="text"
                        placeholder="vadala/Dadar/Matunga"
                        value={city}
                        onChange={ev => setCity(ev.target.value)} />
                <input type="text"
                        placeholder="address"
                        value={address}
                        onChange={ev => setaddress(ev.target.value)} />
                <input type="text"
                        placeholder="distance from VJTI college"
                        value={distance}
                        onChange={ev => setdistance(ev.target.value)} />
                <input type="number"
                        placeholder="rent price"
                        value={cheapestPrice}
                        onChange={ev => setcheapestPrice(ev.target.value)} />
                <input type="text"
                        placeholder="rent per month or candidate"
                        value={perRate}
                        onChange={ev => setPerRate(ev.target.value)} />
                <input type="number"
                        placeholder="Deposite"
                        value={deposite}
                        onChange={ev => setdeposite(ev.target.value)} />
                <input type="number"
                        placeholder="Rating"
                        value={rating}
                        onChange={ev => setrating(ev.target.value)} />
                
                <input type="text"
                        placeholder="1BHK (furnishing status)"
                        value={rooms}
                        onChange={ev => setRoom(ev.target.value)} />
                <input type="text"
                        placeholder="area sq.ft"
                        value={area}
                        onChange={ev => setarea(ev.target.value)} />
                <input type="text"
                        placeholder="No. of Vacancy left"
                        value={capacity}
                        onChange={ev => setCapacity(ev.target.value)} />
               
                <input type="text"
                        placeholder="Owner Type"
                        value={ownerType}
                        onChange={ev => setOwnerType(ev.target.value)} />
                <input type="text"
                        placeholder="Your name"
                        value={owner}
                        onChange={ev => setOwner(ev.target.value)} />
                <input type="text"
                        placeholder="contact no."
                        value={mobile}
                        onChange={ev => setmobile(ev.target.value)} />
               
               <input multiple type="file"                        
                        
                        onChange={ev => setPhotos(ev.target.files)} />
                
                <input type="text"
                        placeholder="Description."
                        value={desc}
                        onChange={ev => setdesc(ev.target.value)} />

                <button type="submit" className="post" value="post" >Post</button>
                
                </form>
                
            
            </div>
        </div>
    )
    
}

export default GetOwner;