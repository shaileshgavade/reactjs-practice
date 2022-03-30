import "./App.css";
import Navbar from "./components/travelJournal/Navbar";
import BlogPreview from "./components/travelJournal/BlogPreview";
import Header from "./components/travelJournal/Header";
import data from "./data";
import QuizzicleApp from "./components/quizzicleApp/quizzicleApp";
import Start from "./components/quizzicleApp/start";

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
            {/* <Navbar />
            <section className="blogs">
                {blogPrev}
            </section> */}

            <QuizzicleApp />
            
        </div>
    );
}

export default App;
