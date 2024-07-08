import { Container, Form, Background } from "./styles";

import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Name" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="email" icon={FiMail} />

        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Cadastrar" />

        <Link to="/">Voltar para Login</Link>
      </Form>
    </Container>
  );
}
