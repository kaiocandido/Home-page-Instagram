import { Container, Main } from "./styles"

export function Home() {
    return (
        <>
            <Main>
                <Container>
                    <div id="banner-container">
                        <img src="" alt="crie uma conta no instagram" />
                    </div>
                    <div id="form-container">
                        <div id="form-box">
                            <img src="" alt="Instagram" id="logo-insta" />
                            <form id="login-form">
                                <input type="text" name="username" placeholder="Telefone, nome de usuário ou email" />
                                <input type="password" name="password" placeholder="Senha" />
                                <input type="submit" value="Entrar" />
                            </form>
                            <div className="separator">
                                <div className="line">
                                    <span>Ou</span>
                                </div>
                            </div>
                            <div id="other-links">
                                <div id="facbook-login">
                                    <a href="#">
                                        <img src="" alt="" />
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
                                <img src="" alt="apple Store" />
                            </a>
                            <a href="#">
                                <img src="" alt="Google Play" />
                            </a>
                        </div>
                    </div>
                </Container>
            </Main>
        </>
    )
}

export default Home