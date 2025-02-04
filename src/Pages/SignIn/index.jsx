import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../Components/Input";
import { Button } from '../../Components/Button';
import { ButtonText } from '../../Components/ButtonText';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="email" icon={FiMail} />

        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
