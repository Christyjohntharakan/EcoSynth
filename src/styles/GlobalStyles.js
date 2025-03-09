import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
    background: url("https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: #ffffff;
    position: relative;
  }

  /* Adds a dark overlay for better text visibility */
  body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust opacity for better contrast */
    z-index: -1;
  }

  h1 {
    font-size: 8rem; /* Increased size */
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  h2 {
    font-size: 3rem; /* Increased size */
    font-weight: 600;
    text-align: center;
    letter-spacing: 2px;
  }

  h3 {
    font-size: 2.5rem; /* Increased size */
    font-weight: 500;
    text-align: center;
  }

  p {
    font-size: 1.5rem; /* Increased size */
    text-align: center;
    line-height: 1.8;
    max-width: 80%;
    margin: 0 auto;
  }

  button {
    font-size: 1.4rem;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    background: #3b8d3b;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #2e6e2e;
  }
`;

export default GlobalStyles;
