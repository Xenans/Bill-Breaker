import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { login, useAuth} from './firebase';
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const [ loading, setLoading] = useState(false);
    const currentUser = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin() {
        try {
            setError("")
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }
    }

    return (
        <>
        <h2 className="text-center mb-4">Log In</h2>
        {error && <Alert variant="danger">ERROR</Alert>}
        <Form>
            <Form.Group className="mb-4" id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="mb-4" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button onClick={handleLogin} className="w-100 mb-4" type="submit">
              Log In
            </Button>
        </Form>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/"> Sign Up </Link> 
        </div>
        </>
        
    )
}