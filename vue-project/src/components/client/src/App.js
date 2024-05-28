import logo from './logo.svg';
import { useState, useEffect} from 'react';
import './App.css';
import { Container, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist.css/bootstrap/min.css'
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react"

function App() {
  const [email, setEmail ] = useState("")
  const user = useUser();
  const supabase = useSupabaseClient();

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
  <hr />
  <h3> </h3>
  </>
  }
    </Container>
  );
  


export default App;
