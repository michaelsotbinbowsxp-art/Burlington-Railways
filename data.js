// ============================================================
//  EDIT THIS FILE to update the whole website.
//  Lines and stations come from your network map.
//  Anything marked "placeholder" is made up: replace it.
// ============================================================

const SITE = {
  about:
    "Burlington Railways is a fictional railway built in Minecraft, linking the districts of Burlington, Cyanville, Malibou and Centralia. " +
    "Placeholder: replace this with the story of your railway, such as when it was founded and what makes it special.",

  facts: {
    "Founded": "2024 (placeholder)",
    "Server / World": "Your server or world name",
    "Minecraft version": "1.21 (placeholder)",
    "Lines": "3",
    "Stations": "10",
    "Districts": "4"
  },

  lines: [
    {
      name: "Centralia Line",
      color: "#45a039",
      route: "Burlington Union to Centralia",
      length: "",
      type: "Passenger",
      description: "Runs north to south through Burlington and Malibou to the terminus at Centralia.",
      stops: ["Burlington Union", "Grant Ave", "Centralia Street", "Metrodome Plaza", "Malibou", "Centralia"]
    },
    {
      name: "Cyanville Line",
      color: "#b32b26",
      route: "Station 10 to Cyanville",
      length: "",
      type: "Passenger",
      description: "Heads south through Burlington, then turns west at Metrodome Plaza to serve Cyanville.",
      stops: ["Station 10", "Grant Ave", "Centralia Street", "Metrodome Plaza", "Lincoln Street", "Llama Ave", "Cyanville Street"]
    },
    {
      name: "Malibou",
      color: "#1a9a9a",
      route: "Station 10 to Malibou",
      length: "",
      type: "Passenger",
      description: "Runs from the north end of Burlington down to Malibou.",
      stops: ["Station 10", "Grant Ave", "Centralia Street", "Metrodome Plaza", "Malibou"]
    }
  ],

  stations: [
    { name: "Station 10", lines: ["Cyanville Line", "Malibou"], district: "Burlington", notes: "Northern terminus for the red and teal lines" },
    { name: "Burlington Union", lines: ["Centralia Line"], district: "Burlington", notes: "Northern terminus of the Centralia Line" },
    { name: "Grant Ave", lines: ["Centralia Line", "Cyanville Line", "Malibou"], district: "Burlington", notes: "" },
    { name: "Centralia Street", lines: ["Centralia Line", "Cyanville Line", "Malibou"], district: "Burlington", notes: "" },
    { name: "Metrodome Plaza", lines: ["Centralia Line", "Cyanville Line", "Malibou"], district: "Burlington", notes: "Where the Cyanville Line branches west" },
    { name: "Malibou", lines: ["Centralia Line", "Malibou"], district: "Malibou", notes: "Terminus of the Malibou line" },
    { name: "Centralia", lines: ["Centralia Line"], district: "Centralia", notes: "Southern terminus" },
    { name: "Lincoln Street", lines: ["Cyanville Line"], district: "Cyanville", notes: "" },
    { name: "Llama Ave", lines: ["Cyanville Line"], district: "Cyanville", notes: "" },
    { name: "Cyanville Street", lines: ["Cyanville Line"], district: "Cyanville", notes: "" }
  ],

  // Placeholder fleet: replace with your real trains.
  fleet: [
    {
      name: "Example Train A",
      role: "Passenger",
      description: "Placeholder: describe your train here.",
      tags: ["Centralia Line"]
    },
    {
      name: "Example Train B",
      role: "Passenger",
      description: "Placeholder: describe your train here.",
      tags: ["Cyanville Line"]
    }
  ],

  ride: [
    "Join the server at <code>your.server.address</code> (placeholder) and head to any station.",
    "Check the line colors on the map: green for Centralia, red for Cyanville, teal for Malibou.",
    "Board at your platform. Metrodome Plaza is the main interchange, and Cyanville riders change there.",
    "Stay in the cart until you reach your station.",
    "Keep the tracks clear of items and mobs, and please don't grief the railway."
  ]
};
