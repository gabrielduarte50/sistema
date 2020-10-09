import React, { useRef } from 'react';
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
//testando
const Login: React.FC = () => {
    const formRef = useRef(null);
    async function handleSubmit(data: string) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Digite um e-mail valido')
                    .required('E-mail é obrigatorio'),
                senha: Yup.string().min(6).required('Senha é obrigatoria'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            console.log(data);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                console.log(err);
            }
        }
    }

    return (
        <>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login</h1>

                        <Input
                            icon={FiMail}
                            type="email"
                            placeholder="E-mail"
                            name="email"
                        />

                        <Input
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                            name="senha"
                        />
                        <Button type="submit">Entrar</Button>
                        <Link to="/forgot">Esqueci minha senha</Link>
                    </Form>
                    <Link to="/register">
                        <FiLogIn />
                        Criar Conta
                    </Link>
                </Content>
                <Background></Background>
            </Container>
        </>
    );
};
export default Login;
