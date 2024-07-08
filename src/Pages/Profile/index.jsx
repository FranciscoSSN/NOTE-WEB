import { Container, Form, Avatar } from './styles';

import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/FranciscoSSN.png" 
                        alt="Imagem do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                            type="file"
                            id="avatar"
                        />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}