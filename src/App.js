import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import BlogPreview from "./components/BlogPreview";
import Header from "./components/Header";
import data from "./data";

function App() {
    const blogPrev = data.map((item) => {
        return <BlogPreview item={item} />;
    });

    return (
        <div className="App">
            <Header />
            <Navbar />
            <section className="blogs">
                {blogPrev}
            </section>
        </div>
    );
}

export default App;
