import React,{useState} from "react";
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css'

const Signup = () => {
              const history=useHistory()
              const [firstName,setFirstname] = useState("")
              const [lastname, setLastname] = useState("")
              const [email, setEmail] = useState("")
              const [password, setPassword] = useState("")
              const [phone, setPhone] = useState("")
              const [birth, setBirth] = useState("")
              const [stream, setStream] = useState("select")
              const [gender, setGender] = useState("")
              const [hometown, setHometown] = useState("")
              const [school, setSchool] = useState("")
              const [college, setCollege] = useState(" select")
              const[profession,setProfession]=useState("select");
              const[photo,setPhoto]=useState("")

              const Postdata=()=>{
                if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                      return  M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
                }
                fetch("/signup",{
                  method:"post",
                  headers:{
                    "Content-Type":"application/json"
                  },
                  body:JSON.stringify({
                    firstName,
                    lastname,
                    email,
                    password,
                    phone,
                    birth,
                    stream,
                    gender,
                    hometown,
                    school,
                    college,
                    profession,
                    photo
                  })
                }).then(res=>res.json()).then(data=>{
                  if(data.error){
                    M.toast({html:data.error,classes:"#c62828 red darken-3"})
                  }
                  else{
                    M.toast({html:data.message,classes:"#43a047 green darken-1"})
                    history.push('./signin')
                  }
                })
              }

  return (
    <div>
      <div className="mycard">
        <div className="card signupcard input-field">
          <h2 style={{ textAlign: "center", marginTop: 20 }}>Register</h2>
          <div className="row">
          <div className="file-field input-field">
      <div className="btn">
        <span>upload your pic</span>
        <input type="file"  value ={photo} onChange={(e)=>setPhoto(e.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>

            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <h6>Pick your profession</h6>
                  <select className="browser-default" 
                  defaultValue={profession}
                   onChange={(e)=>setProfession(e.target.value)}>
                    <option  value="select">
                      select  
                    </option>
                    <option value="Student">Student</option>
                    <option value="Employee">Employee</option>
                    <option value="Boss">Boss</option>
                  </select>
                </div>

                <div className="input-field col s6">
                  <h6>Choose your stream</h6>
                  <select className="browser-default"
                  defaultValue={stream}
                  onChange={(e)=>setStream(e.target.value)}
                  >
                    <option value="select">
                      select
                    </option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <div className="input-field col s6">
                    <input type="text" placeholder="Enter school"  value={school} onChange={(e)=>setSchool(e.target.value)} />
                  </div>
                  <div className="input-field col s6">
                    <input type="text" placeholder="Enter Address" value={hometown} onChange={(e)=>setHometown(e.target.value)}/>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <div className="input-field col s6">
                    <h6>Pick you college name</h6>
                    <select className="browser-default"  defaultValue={college}
                      onChange={(e)=>setCollege(e.target.value)}>
                      <option value="select" >
                        select
                      </option>
                      <option value="Nit jamshedpur">Nit jamshedpur</option>
                      <option value="Nit bhopal">Nit bhopal</option>
                      <option value="Nit Dhanbad">Nit Dhanbad</option>
                    </select>
                  </div>
                  <div className="input-field col s6">
                    <input type="text" placeholder="Enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <div className="input-field col s6">
                    <input type="text" placeholder="Enter first name"  value={firstName} onChange={(e)=>setFirstname(e.target.value)}/>
                  </div>
                  <div className="input-field col s6">
                    <input type="text" placeholder="Enter last name" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="input-field col s12">
                  <div className="input-field col s6">
                    <input type="text" placeholder="Enter Email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>

                  <div className="input-field col s6">
                    <h6>Choose your gender</h6>
                    <select className="browser-default" 
                     defaultValue={gender}
                     onChange={(e)=>setGender(e.target.value)}>
                      <option value="select" >
                        select
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Third Gender">Third Gender</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* birthday and batch year */}
              <div className="row">
                <div className="input-field col s12">
                  <div className="input-field col s6">
                    <h6>Enter birth year</h6>

                    <input type="date" id="birthday" name="birthday"value={birth} onChange={(e)=>setBirth(e.target.value)} />
                  </div>

                  <div className="input-field col s6">
                    <input type="text" placeholder="Create new password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                </div>
              </div>
              {/* end */}
              <button className="btn  waves-effect waves-light #64b5f6 blue darken-1" style={{textAlign:"center"}}
              onClick={()=>Postdata()}
              >Signup</button>
              <h5>
                <Link to="/signin">Already have an account ?</Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
