// App.jsx
import "./App.scss";

const App = () => {
    let message = "We can do JS here";

    if (message.length > 10) {
    message += " , we add logic here as well.";
    }

    return (
    <div className="app">
        <header className="greeting">
        <h1 className="greeting__heading">Hello World</h1>
        <p>{message}</p>
        </header>
    </div>
    );
};

export default App;