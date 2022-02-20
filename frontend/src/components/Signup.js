import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { signup, useAuth} from './firebase';
import { Link } from 'react-router-dom'

export default function Signup() {
    const [ loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        try {
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert("Error")
        }
        setLoading(false);
    }

    return (
        <>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form>
            <Form.Group className="mb-4" id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="mb-4" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button onClick={handleSignup} className="w-100 mb-4" type="submit">
              Sign Up
            </Button>
        </Form>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
        </div>
        </>
        
    )
}