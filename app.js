name: 🤖 Run ARIZAK-MD in GitHub Actions

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  run-bot:
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout Repository
        uses: actions/checkout@v4

      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18.x'
          cache: 'npm'

      - name: 📦 Install Dependencies
        run: npm install

      - name: ⚡ Run ARIZAK-MD Bot
        env:
          SESSION_ID: ${{ secrets.SESSION_ID }}
          BOT_NAME: ${{ secrets.BOT_NAME }}
          PREFIX: ${{ secrets.PREFIX }}
          MODE: ${{ secrets.MODE }}
          DESCRIPTION: ${{ secrets.DESCRIPTION }}
          OWNER_NUMBER: ${{ secrets.OWNER_NUMBER }}
          OWNER_NAME: ${{ secrets.OWNER_NAME }}
        run: |
          echo "🚀 Starting ARIZAK-MD..."
          # Keep the bot alive in a loop
          while true; do
            node index.js
            echo "Bot stopped unexpectedly. Restarting in 5s..."
            sleep 5
          done
