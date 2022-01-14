import styled from "styled-components"

export default styled.h1`
    font-size: 3em;
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => props.primary ? "red" : "teal"};

`