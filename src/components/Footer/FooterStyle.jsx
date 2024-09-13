// FooterStyle.jsx
import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background-color: #3C5391;
    font-size: 1.2vw;
    padding: 2% 0;
    margin-top: 4%;
`

export const FooterInline = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;

`

export const Footerline = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-left: 5%;
    color: #3C5391;

`

export const FooterTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5%;

    img{
        max-height: 30%;
    }
    p{
        font-size: 1.44vw;
        color: #C1C7CD;
        font-weight: bold;
    }

`
export const FooterEnd = styled.div`
    display: flex;
    background-color: #F2F4F8;
    border-radius: 2px;
    padding-left: 1%;
    padding-right: 3%;
    align-items: center;
    img{
        max-width: 20%;
        align-items: center;
    }
    p{
        font-size: 1vw;
        color: #697077;
        align-items: center;
        margin-bottom: 3%;
    }

`

export const FooterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    white-space: nowrap;
    width: 40%;
    gap: 2%;
`

export const Contact = styled.button`
    background-color: #0F62FE;
    color: #C1C7CD;
    border: 1px solid #0F62FE;
    border-radius: 0.2rem;
    font-size: 1.5rem;
    padding: 2% 3%;
    border-radius: 2px;
    align-items: center;
    display: flex;
    font-weight: Semibold;
    flex-direction: row;
    justify-content: space-around;
    p{
        align-items: center;
        margin: 1%;
    }
`
export const TextWrapper = styled.div`
    flex-direction: column;
    text-align: left;
    margin-top: 3%;
    margin-bottom: 3%;
    color: #eee;
    margin-left: 5%;
    h1{
        font-size: 1.4rem;
        font-weight: semibold;
        margin-bottom: 1.3%;
    }

    p{
        font-size: 1.2rem;
        margin-bottom: 0.7%;
    }
`

export const Copyright = styled.div`
    flex-direction: column;
    text-align: left;
    margin-top: 2%;
    margin-bottom: 2%;
    color: #eee;
    margin-left: 5%;
    font-size: 1.3rem;
`