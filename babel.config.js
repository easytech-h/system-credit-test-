module.exports = {
    presets: [
      ["@babel/preset-env", {
        targets: {
          node: "current", // Pour Node.js actuel
        },
      }],
      "@babel/preset-react",
    ],
  };
  