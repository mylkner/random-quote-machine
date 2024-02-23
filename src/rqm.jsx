import { useEffect, useState } from "react";
import "./rqmStyle.css";
import axios from "axios";
const RandomQuoteMachine = () => {
    const [quotes, setQuote] = useState();
    const [author, setAuthor] = useState();

    const fetchData = () => {
        axios
            .get(
                "https://api.api-ninjas.com/v1/quotes?category=inspirational",
                {
                    headers: {
                        "X-Api-Key": "bjxRNYErTWfdfOFMNVowqg==aoe3MwCWmlZcnGxO",
                    },
                }
            )
            .then((res) => {
                if (res.data[0].quote.length <= 200) {
                    setQuote(res.data[0].quote);
                    setAuthor(res.data[0].author);
                } else {
                    fetchData();
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div id="quote-box">
                <h1 id="text">{quotes}</h1>
                <p id="author">{author}</p>
                <div className="btn-link">
                    <button onClick={() => fetchData()} id="new-quote">
                        New quote
                    </button>
                    <a
                        href="https://twitter.com/intent/tweet"
                        target="_blank"
                        rel="noreferrer"
                        id="tweet-quote"
                    >
                        <button className="tweet">
                            <i
                                className="fa-brands fa-twitter fa-lg"
                                style={{ color: "white" }}
                            ></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default RandomQuoteMachine;
