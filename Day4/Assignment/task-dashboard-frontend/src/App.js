    import React, { useState } from "react";
    import TaskDashboard from "./TaskDashboard";
    import styled, { ThemeProvider } from "styled-components";

    const lightTheme = { background: "#fff", color: "#333" };
    const darkTheme = { background: "#333", color: "#fff" };

    const Container = styled.div`
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        min-height: 100vh;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const App = () => {
        const [theme, setTheme] = useState(lightTheme);

        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <button onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}>
                        Toggle Theme
                    </button>
                    <TaskDashboard />
                </Container>
            </ThemeProvider>
        );
    };

    export default App;
