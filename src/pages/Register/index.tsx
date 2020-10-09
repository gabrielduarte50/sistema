import React, { useRef } from 'react';
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { BiArrowBack, BiUser } from 'react-icons/bi';
import { FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';

const Register: React.FC = () => {
    const formRef = useRef(null);
    async function handleSubmit(data: string) {
        try {
            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome é obrigatorio'),
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
                <Background></Background>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu cadastro</h1>

                        <Input icon={BiUser} placeholder="Nome" name="nome" />
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
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                    <a href="login">
                        <BiArrowBack />
                        Voltar para Logon
                    </a>
                </Content>
            </Container>
        </>
    );
};
export default Register;
