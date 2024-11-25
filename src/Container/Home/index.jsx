import { Container, Footer, Main } from "./styles"
import Logo from "../../assets/img/logo_instagram.png"
import Cel from "../../assets/img/imagem_cel_exterior.png"
import Facebook from "../../assets/img/logo_facebook.svg"
import Apple from "../../assets/img/botao_apple.png"
import GooglePlay from "../../assets/img/botao_google_play.png"

export function Home() {
    return (
        <>
            <Main>
                <Container>
                    <div id="banner-container">
                        <img src={Cel} alt="crie uma conta no instagram" id="banner-Container-Img" />
                    </div>
                    <div id="form-container">
                        <div id="form-box">
                            <img src={Logo} alt="Instagram" id="logo-insta" />
                            <form id="login-form">
                                <input className="form-Input" type="text" name="username" placeholder="Telefone, nome de usuário ou email" />
                                <input className="form-Input" type="password" name="password" placeholder="Senha" />
                                <input className="form-Login" type="submit" value="Login in" />
                            </form>

                            <div className="separator">
                                <div className="line">
                                    <span id="separetorSpan">Ou</span>
                                </div>
                            </div>
                            <div id="other-links">
                                <div id="facbook-login">
                                    <a href="#">
                                        <img src={Facebook} alt="Imagem Facebook" />
                                        <span>Entrar com Facebook</span>
                                    </a>
                                </div>
                                <div id="forgot-pass">
                                    <a href="#">Esqueceu a senha?</a>
                                </div>
                            </div>
                        </div>
                        <div id="register-container">
                            <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
                        </div>
                        <div id="get-app-container">
                            <p>Obtenha o Aplicativo</p>
                            <a href="#">
                                <img src={Apple} alt="apple Store" />
                            </a>
                            <a href="#">
                                <img src={GooglePlay} alt="Google Play" />
                            </a>
                        </div>
                    </div>
                </Container>
            </Main>

            <Footer>
                <nav>
                    <ul id="footer-links">
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Ajuda</a></li>
                        <li><a href="#">Imprensa</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Carreiras</a></li>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Termos</a></li>
                        <li><a href="#">Localizações</a></li>
                        <li><a href="#">Contas mais relevantes</a></li>
                        <li><a href="#">Hashtags</a></li>
                        <li><a href="#">Idioma</a></li>
                    </ul>
                    <p id="copyright">&copy; Instagram do Facebook</p>
                </nav>
            </Footer>
        </>
    )
}

export default Home