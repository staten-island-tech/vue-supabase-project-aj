import logo from './logo.svg';
import { useState, useEffect} from 'react';
import './App.css';
import { Container, Form, Button, Row, Col, Card} from 'react-bootstrap'
import 'bootstrap/dist.css/bootstrap/min.css'
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"
import {v4 as uuidv4 } from 'uuid';

const CDNURL ="https://givenxncncbjahyqmfpn.supabase.co/storage/v1/object/public/avatar"
function App() {
  const [email, setEmail ] = useState("")
  const [ images, setImages] = useState([]);
  const user = useUser();
  const supabase = useSupabaseClient();

  async function getImages() {
    const { data, error} = await supabase
    .storagefrom('images')
    .list(user?.id + "/", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc"}
    });

    if(data !== null ) {
setImages(data);
    } else{
      alert("Error")
    }
  }
  async function magicLinkLogin() {
    const { data, error} = await supabase.auth.signInWithOtp({
      email: email
    })
    if(error) {
      alert("error");
      console.log(error)
    } else {
      alert("check email")
    }
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  
  async function uploadImage(e) {
    let file = e.target.files[0];

    const { data, error } = await supabase
    .storage
    .from('images')
    .uploadImage(user.id + "/" + uuidv4(), file)

    if(data) {
      getImages();

    }else {
      console.log(error);
    }
  }


  return (
    <Container align="center" className="container-sm mt-4">
      {/*
      if user exists: show them the images / upload images page
    if they dont exist: show them the login page
      */}

  { user === null ?
  <>
  <h1>Welcome to ImageWall</h1>
  <Form>
    <Form.Group className="mb-3" style= {{maxWidth: "500px"}}>
      <Form.Label>Enter an email to sign in with a supabase Magic Link</Form.Label>
      <Form.Control
      type="email"
      placeholder="Enter Email"
      onChange={(e) => setEmail(e.target.value)}
      />
        
    </Form.Group>
<Button variant ="primary" onClick={( ) => magicLinkLogin()}>
  Get Magic Link
</Button>
  </Form>
    </>
  : 
  
  <>
  <h1> Your ImageWall</h1>
  <Button onClick={() => signOut()}> Sign Out</Button>
  <p>Current user: {user.email}</p>
  <p>use choose file button to upload image</p>
  <Form.Group className="mb-3" style={{maxWidth: "500px"}}>
    <Form.Control type ="file" accpet ="image/png, image/jpeg" onChange={(e) => uploadImage(e)}/>

  </Form.Group>
  <hr />
  <h3> Your Images </h3>
  <Row xs =
  </>
  }
    </Container>
  );
  
}

export default App;
