import styled from "styled-components";

export const StyledComponents: React.FC = () => {
    return(
        <Container>
            <Title>styled-components</Title>
            <Button>OK</Button>
        </Container>
    )
}

const Container = styled.div`
    border: solid 2px rgb(203, 25, 25);
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Title = styled.p`
    margin: 0;
    color: blue;
`

const Button = styled.button`
    background-color: yellow;
    border: none;
    padding: 8px;
    border-radius: 8px;
`

export default StyledComponents;