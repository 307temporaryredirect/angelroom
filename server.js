const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // folder 'public' berisi index.html, dll

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
