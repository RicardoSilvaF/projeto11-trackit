import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { WrapperLogin } from "../constants/comuns"
import logo from "../constants/logo.svg"

export default function CadastroPag() {


    return (
        <WrapperLogin>
            <Logo>
                <img src={logo} alt="deu ruim" />
            </Logo>
            <ContainerInputs>
                <input type="text"
                    placeholder="email"
                    required
                />
                <input type="text"
                    placeholder="senha"
                    required
                />
                <input type="text"
                    placeholder="nome"
                    required
                />
                <input type="text"
                    placeholder="foto"
                    required
                />
            </ContainerInputs>
            <Cadastrar>
                Cadastrar
            </Cadastrar>
            <Link to={`/`}>
                <Retornar>
                    Já tem uma conta? Faça login!
                </Retornar>
            </Link>
        </WrapperLogin>
    )
}

const Logo = styled.div`
    margin-top: 68px;
`
const ContainerInputs = styled.div`
    margin-top: 41px;
    margin-left: 36px;
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        padding-left: 11px;
        margin-bottom: 6px;
        ::placeholder{
            color: #DBDBDB;
        }
    }
`

const Cadastrar = styled.button`
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    border: 0;
    color: #ffffff;
    font-size: 21px;
    
`

const Retornar = styled.div`
    font-size:14px;
    color:#52B6FF;
    margin-top:25px;
    text-decoration: underline;
`