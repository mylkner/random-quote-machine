import { useEffect, useState } from "react";
import "./rqmStyle.css";
import axios from "axios";
const RandomQuoteMachine = () => {
    const [data, setData] = useState({
        dataArr: [],
        quote: "",
        author: "",
    });

    useEffect(() => {
        axios
            .get("https://type.fit/api/quotes")
            .then((res) => {
                const randomNum = Math.floor(Math.random() * 16);
                setData({
                    dataArr: res.data,
                    quote: res.data[randomNum].text,
                    author: res.data[randomNum].author.replace(
                        ", type.fit",
                        ""
                    ),
                });
            })
            .catch((err) => console.log(err));
    }, []);

    const generate = (d) => {
        const randomNum = Math.floor(Math.random() * 16);
        setData({
            ...data,
            quote: d.dataArr[randomNum].text,
            author: d.dataArr[randomNum].author.replace(", type.fit", ""),
        });
    };

    return (
        <div className="container">
            <div id="quote-box">
                <h1 id="text">{data.quote}</h1>
                <p id="author">{data.author}</p>
                <div className="btn-link">
                    <button onClick={() => generate(data)} id="new-quote">
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
