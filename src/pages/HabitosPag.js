import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Wrapper, Header, Footer } from "../constants/comuns"

export default function HabitosPag() {

    return (
        <Wrapper>
            <Header>
                <Logo>
                    TrackIt
                </Logo>
                <Foto>

                </Foto>
            </Header>
            <Footer>
                <Habitos>
                    Hábitos
                </Habitos>
                <Hoje>
                    <h1>
                        Hoje
                    </h1>
                </Hoje>
                <Historico>
                    Histórico
                </Historico>
            </Footer>
        </Wrapper>
    )
}

const Logo = styled.div`
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: #ffffff;
`

const Foto = styled.div`
    width: 51px;
    height: 51px;
    border-radius: 99px;
    background-color: #ffffff;
`

const Habitos = styled.div`
    left: 36px;
    top: 22px;
    position: absolute;
`

const Historico = styled.div`
    right: 31px;
    top: 22px;
    position: absolute;
`

const Hoje = styled.div`
    position: absolute;
    bottom: 10px;
    left: 142px;
    background-color: #52B6FF;
    width:91px;
    height:91px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center; 
    color: #ffffff;
`