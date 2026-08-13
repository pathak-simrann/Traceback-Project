import { useState } from "react";
import "./Ai.css";

function Chatbot() {
  
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Traceback AI 🤖. Tell me about your lost item and I'll try to help."
    }
  ]);

  const foundItems = [
    { name: "Black Backpack", location: "Library" },
    { name: "Student ID Card", location: "Cafeteria" },
    { name: "Wallet", location: "Canteen" },
    { name: "Keys", location: "Parking Area" },
    { name: "Scientific Calculator", location: "Classroom A-203" },
    { name: "Bluetooth Earbuds", location: "Computer Lab" },
    { name: "Samsung Mobile", location: "Canteen" },
    { name: "Notebook", location: "Classroom A-105" },
    { name: "Water Bottle", location: "Sports Ground" },
    { name: "Laptop Charger", location: "Computer Lab" },
    { name: "Smart Watch", location: "Gym Area" }
  ];

  const itemKeywords = {
    bag: [
      "bag",
      "backpack",
      "school bag",
      "college bag",
      "laptop bag",
      "tote bag"
    ],

    wallet: [
      "wallet",
      "purse"
    ],

    keys: [
      "key",
      "keys"
    ],

    id: [
      "id",
      "id card",
      "student id",
      "college id"
    ],

    earphones: [
      "earphones",
      "earbuds",
      "airpods",
      "headphones",
      "headset",
      "wireless earphones",
      "bluetooth earbuds"
    ],

    phone: [
      "phone",
      "mobile",
      "iphone",
      "android",
      "smartphone"
    ],

    calculator: [
      "calculator",
      "scientific calculator"
    ],

    book: [
      "book",
      "notebook",
      "textbook"
    ],

    bottle: [
      "bottle",
      "water bottle",
      "flask"
    ],

    laptop: [
      "laptop",
      "macbook"
    ],

    charger: [
      "charger",
      "adapter",
      "cable"
    ],

    watch: [
      "watch",
      "smartwatch"
    ]
  };

  const getResponse = (msg) => {
    const text = msg.toLowerCase();

    const colors = [
      "black",
      "blue",
      "red",
      "green",
      "white",
      "pink",
      "yellow",
      "grey",
      "gray"
    ];

    const locations = [
      "library",
      "canteen",
      "parking",
      "computer lab",
      "classroom",
      "gym",
      "sports ground",
      "cafeteria"
    ];

    let detectedItem = "";
    let detectedColor = "";
    let detectedLocation = "";

    for (const item in itemKeywords) {
      if (
        itemKeywords[item].some((word) =>
          text.includes(word)
        )
      ) {
        detectedItem = item;
        break;
      }
    }

    colors.forEach((color) => {
      if (text.includes(color)) {
        detectedColor = color;
      }
    });

    locations.forEach((loc) => {
      if (text.includes(loc)) {
        detectedLocation = loc;
      }
    });

    if (detectedItem) {
      const match = foundItems.find((item) =>
        item.name.toLowerCase().includes(detectedItem)
      );

      if (match) {
        return `🔍 Possible Match Found!

Item: ${match.name}

Found At: ${match.location}

Color Mentioned: ${
          detectedColor || "Not specified"
        }

Location Mentioned: ${
          detectedLocation || "Not specified"
        }

Recommendation:
Please check the Browse Found Items page for more details.`;
      }

      return `📝 Lost Item Analysis

Item: ${detectedItem}

Color: ${
        detectedColor || "Not specified"
      }

Location: ${
        detectedLocation || "Not specified"
      }

I couldn't find an exact match yet.

Please submit a Lost Item Report and keep checking Browse Found Items regularly.`;
    }

    if (text.includes("report")) {
      return "📝 You can report your lost item from the Report Lost Item page.";
    }

    if (
      text.includes("how") ||
      text.includes("traceback")
    ) {
      return "🏫 Traceback helps students report lost items, browse found items, and reconnect owners with their belongings.";
    }

    if (
      text.includes("contact") ||
      text.includes("help")
    ) {
      return "📞 Please visit the Contact page for support and assistance.";
    }

    return `🤔 I couldn't identify the item.

Try something like:

• I lost my black backpack near the library
• I misplaced my wallet
• I lost my earphones in the computer lab`;
  };

  const sendMessage = () => {
    if (message.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: message
    };

    setChat((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: getResponse(message)
      };

      setChat((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 1200);

    setMessage("");
  };

  return (
    
    <div className="chat-page">
      
      <div className="chat-container">

        <h1>🤖 Traceback AI Assistant</h1>

        <div className="chat-box">

          {chat.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "user"
                  ? "user-message"
                  : "bot-message"
              }
            >
              {msg.text}
            </div>
          ))}

          {typing && (
            <div className="bot-message">
              Traceback AI is typing...
            </div>
          )}

        </div>

        <div className="quick-actions">

          <button onClick={() => setMessage("I lost my ID card")}>
            Lost ID Card
          </button>

          <button onClick={() => setMessage("I lost my wallet")}>
            Lost Wallet
          </button>

          <button onClick={() => setMessage("I lost my keys")}>
            Lost Keys
          </button>

          <button onClick={() => setMessage("I lost my backpack")}>
            Lost Bag
          </button>

          <button onClick={() => setMessage("I lost my earphones")}>
            Lost Earphones
          </button>

          <button onClick={() => setMessage("I lost my mobile")}>
            Lost Mobile
          </button>

          <button onClick={() => setMessage("I lost my notebook")}>
            Lost Notebook
          </button>

          <button onClick={() => setMessage("I lost my water bottle")}>
            Lost Bottle
          </button>

          <button onClick={() => setMessage("I lost my laptop")}>
            Lost Laptop
          </button>

          <button onClick={() => setMessage("I lost my charger")}>
            Lost Charger
          </button>

          <button onClick={() => setMessage("I lost my watch")}>
            Lost Watch
          </button>

        </div>

        <div className="input-area">

          <input
            type="text"
            placeholder="Describe your lost item..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>
            Send
          </button>

        </div>

      </div>
    </div>
  );
}

export default Chatbot;