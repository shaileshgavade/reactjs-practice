import "./App.css";
import Navbar from "./components/travelJournal/Navbar";
import BlogPreview from "./components/travelJournal/BlogPreview";
import Header from "./components/travelJournal/Header";
import data from "./data";

function App() {
    const blogPrev = data.map((item) => {
        return (
            <BlogPreview 
                key={item.title}
                item={item}
            />
            );
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
