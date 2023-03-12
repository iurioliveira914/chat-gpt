const app = require("./app");
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});