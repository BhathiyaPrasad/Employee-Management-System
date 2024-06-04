import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import './App.css';
import Loginform from './loginform';

function App() {
    const navigate = useNavigate();

    return (

<Loginform /> 
        <div className="App">
            <header className="App-header">
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to Employee Management System
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Manage your employees efficiently with our easy-to-use system.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => navigate('/employer')}>
                        View Employers
                    </Button>
                </Container>
            </header>
            
        </div>
    );
}

export default App;
