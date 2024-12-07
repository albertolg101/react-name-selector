import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    padding: 8px 15px;
    box-sizing: border-box;
`

const H1 = styled.h1`
    font-family: "Roboto", serif;
    font-size: 2.3rem;
    font-weight: 300;
    margin: 0;
`

const H2 = styled.h2`
    font-family: "Roboto", serif;
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
`

export function Logo() {
    return (
        <Container>
            <H1><b>N</b>Selector</H1>
            <H2>One name at a time</H2>
        </Container>
    )
}
