require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// DAuth Configuration
const DAUTH_CLIENT_ID = "mMvBtWPi5_wm8r_p";
const DAUTH_CLIENT_SECRET = "2hqTUFPDWOwd4xx~umR8t.Tu1U.6kf23";
const DAUTH_REDIRECT_URI = "http://localhost:3000/auth/callback";

// 1. Redirect User to DAuth Login
app.get('/api/auth/login', (req, res) => {
  const state = 'secure_random_state'; // In production, generate a real random string
  const dauthUrl = `https://auth.delta.nitt.edu/authorize?client_id=${DAUTH_CLIENT_ID}&redirect_uri=${DAUTH_REDIRECT_URI}&response_type=code&grant_type=authorization_code&state=${state}&scope=email+profile+user`;
  res.redirect(dauthUrl);
});

// 2. Handle DAuth Callback
app.get('/api/auth/callback', async (req, res) => {
  const { code } = req.query;
      console.log(accessToken)


  if (!code) {
    return res.status(400).send('Authorization code missing');
  }

  try {
    // A. Exchange Code for Access Token
    const tokenResponse = await axios.post(
      'https://auth.delta.nitt.edu/api/oauth/token',
      new URLSearchParams({
        client_id: "mMvBtWPi5_wm8r_p",
        client_secret: "2hqTUFPDWOwd4xx~umR8t.Tu1U.6kf23",
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: "http://localhost:3000/auth/callback",
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const accessToken = tokenResponse.data.access_token;
    // B. Fetch User Details using Token
    const userResponse = await axios.post(
      'https://auth.delta.nitt.edu/api/resources/user',
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    const userData = userResponse.data;

    // C. Redirect back to Frontend with Data
    // Note: Passing data in URL is simple for demos. For production, use cookies/JWT.
const frontendUrl = 'http://localhost:3000/auth/callback';    const queryParams = new URLSearchParams({
      name: userData.name || 'User',
      email: userData.email || '',
      roll: userData.email ? userData.email.split('@')[0] : 'N/A', // Infer roll from webmail
    }).toString();

res.redirect(`${frontendUrl}?${queryParams}`);
  } catch (error) {
    console.error('DAuth Error:', error.response?.data || error.message);
    res.redirect('http://localhost:3000/login?error=auth_failed');
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});