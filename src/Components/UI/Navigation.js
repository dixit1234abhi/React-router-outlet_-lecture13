import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav class="nav">
        <Link class="nav-link active" aria-current="page" to="/home">
          Home
        </Link>
        <Link class="nav-link" to="/Login">
          Login
        </Link>
        <Link class="nav-link" to="/Register">
          Register
        </Link>
      </nav>
  )
}
