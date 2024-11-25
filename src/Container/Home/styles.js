import styled from "styled-components";

export const Main = styled.main`

    /*Contaneirs*/

    #banner-container #form-container{
        flex: 1 1 0;
        width: 50%;
    }

    #banner-container{
        text-align: right;
    }

    #banner-Container-Img{
        margin-right: -15px;
    }

    #form-container{
        text-align: center;
    }

    /*Login*/
    #form-box{
        background-color: white;
        border: 1px solid #DBDBDB;
        width: 350px;
        margin-top: 30px;
    }

    #form-box #logo-insta{
        width: 175px;
        height: 51px;
        margin: 30px auto 12px;
        background-color: white;
    }

    #login-form{
        margin-top: 20px;
    }

    .form-Input{
        display: block;
        font-size: 12px;
        padding: 12px 9px;
        background-color: #FAFAFA;
        border: 1px solid #DBDBDB;
        border-radius: 3px;
        width: 268px;
        margin: 5px auto;
    }

    .form-Login{
        background-color: #B2DFFC;
        color: white;
        margin-top: 15px;
        border-radius: 5px;
        border-color: #B2DFFC;
        height: 40px;
        font-size: 13px;
        padding: 0;
        font-weight: bold;
        width: 268px;
        cursor: pointer;
    }

    /* SEPARADOR */

    .separator{
        position: relative;
    }


    .separator .line{
        border-top: 1px solid #DBDBDB;
        width: 258px;
        margin: 25px auto 35px auto;
    }

    #separetorSpan{
        position: absolute;
        text-transform: uppercase;
        color: #BBB;
        top: -6px;
        width: 50px;
        left: 50%;
        margin-left: -25px;
        font-size: 14px;
    }

    /*Facebook*/

    #facbook-login{
        margin-bottom: 25px;
    }

    #facbook-login a{
        text-decoration: none;
        color: #385185;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    #facbook-login img{
        width: 16px;
        height: 16px;
        margin-right: 0px;
    }

    #facbook-login span{
        font-weight: bold;
        font-size: 13px;
        margin-top: 1px;
    }

    /*Esqueceu a Senha*/

    #forgot-pass{
        margin-bottom: 20px;
        font-size: 12px;
    }

    #forgot-pass a{
        text-decoration: none;
        color: #373799;
    }

    /* Cadastro */

    #register-container{
        background-color: white;
        border: 1px solid #DBDBDB;
        width: 350px;
        margin-top: 10px;
        padding: 25px;
    }

    #register-container p{
        font-size: 14px;
        color: #262626;
    }

    #register-container a{
        color: #4A95F6;
        font-weight: bold;
        text-decoration: none;
    }

    /*Dowload APP*/

    #get-app-container{
        text-align: center;
        width: 350px;
    }

    #get-app-container p{
        margin: 20px 0;
        font-size: 13px;
    }

    #get-app-container a{
        text-decoration: none;
    }

    #get-app-container img{
        width: 136px;
        height: 40px;
    }
`



export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    margin-left: 600px;
`


export const Footer = styled.footer`
    text-align: left;
    width: 1000px;
    margin: 300px auto;

    nav{
        display: inline-block;
    }

    #footer-links{
        list-style: none;
    }

    #footer-links li{
        display: inline-block;
        text-transform: uppercase;
        margin-right: 10px;
    }

    #footer-links a{
        text-decoration: none;
        font-size: 12px;
        font-weight: bold;
        color: #00376b;
    }

    #copyright{
        font-size: 12px;
        text-transform: uppercase;
        margin-top: 10px;
        color: #8e8e8e;
    }
`