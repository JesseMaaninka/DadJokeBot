const express = require("express");
const { twiml: { VoiceResponse } } = require("twilio");

const app = express();
app.use(express.urlencoded({ extended: false }));

app.post("/voice", (req, res) => {
  const vr = new VoiceResponse();

  vr.say("Hello! Welcome to the Dad Joke Hotline.");
  vr.pause({ length: 1 });

  const jokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why do Java developers wear glasses? Because they can't C sharp.",
    "Why did the computer get cold? Because it forgot to close its Windows.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself."
  ];

  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  vr.say(randomJoke);

  vr.pause({ length: 1 });
  vr.say("Thanks for calling! Goodbye.");

  res.type("text/xml");
  res.send(vr.toString());
});

app.get("/", (req, res) => {
  res.send("Dad Joke Twilio Bot is running.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));
