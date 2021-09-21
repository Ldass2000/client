import React,{useState,useEffect} from 'react';

const Profile = () => {
   const [data, setData] = useState([])
   useEffect(()=>{
          fetch('/profilepost',{
             headers:{
                "Authorization":"Bearer"+localStorage.getItem("jwt")
             }
          }).then(res=>res.json())
          .then(result=>{
             setData(result.user)
          })
   },[])
    return (
        <div className="mycard">
        {
           data.map(item=>{
        <div className="card signupcard">
        
            <div>
                <img style={{width:"160px",height:"150px",borderRadius:"80px",display:"block",marginLeft:"auto",marginRight:"auto",paddingBottom:"3px"}}
                src={item.photo}/>
            </div>

            <div className="row">
      <div className="col s6"><label>{}</label></div>
      <div className="col s6"><p>{item.id}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>Profession</label></div>
      <div className="col s6"><p>{item.profession}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>Stream</label></div>
      <div className="col s6"><p>{item.stream}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>School</label></div>
      <div className="col s6"><p>{item.school}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>Address</label></div>
      <div className="col s6"><p>{item.hometown}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>College</label></div>
      <div className="col s6"><p>{item.college}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>Phone</label></div>
      <div className="col s6"><p>{item.phone}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>First Name</label></div>
      <div className="col s6"><p>{item.firstname}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>Last Name</label></div>
      <div className="col s6"><p>{item.lastname}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>Email</label></div>
      <div className="col s6"><p>{item.email}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>Gender</label></div>
      <div className="col s6"><p>{item.gender}</p></div>
         </div>
            <div className="row">
      <div className="col s6"><label>Birtdate</label></div>
      <div className="col s6"><p>{item.birth}</p></div>
         </div>
            
            </div>
         })

        }
        </div>
    )
}

export default Profile
