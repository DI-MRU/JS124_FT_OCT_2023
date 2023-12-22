import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Button, CardContent, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import quotes from "./quote";

function App() {
  const [accentColor, setAccentColor] = useState("rgb(0, 0, 0)");
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    randomizeQuoteAndColor();
  }, []);

  const randomizeQuoteAndColor = () => {
    // Randomize Quote
    const quoteIndex = Math.round(Math.random() * (quotes.length - 1));
    setAuthor(`-${quotes[quoteIndex].author}-`);
    setQuote(`"${quotes[quoteIndex].quote}"`);

    // Randomize Color
    const colorRed = Math.random() * 255;
    const colorGreen = Math.random() * 255;
    const colorBlue = Math.random() * 255;

    const newColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
    console.log(newColor);
    setAccentColor(newColor);
  };

  return (
    <div className="App">
      <Paper
        className="paper-quote"
        sx={{
          backgroundColor: accentColor,
          height: "100%",
          width: "100%",
        }}
      >
        <Card className="card-quote" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              className="text-quote"
              color="text.secondary"
              gutterBottom
              variant="h4"
              sx={{
                color: accentColor,
              }}
            >
              {quote}
            </Typography>{" "}
            <Typography
              className="author-quote"
              sx={{ fontSize: 14, color: accentColor }}
              color="text.secondary"
              gutterBottom
            >
              {author}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="button-quote"
              size="small"
              variant="contained"
              sx={{
                backgroundColor: accentColor,
              }}
              onClick={randomizeQuoteAndColor}
            >
              New quote
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
}

export default App;
