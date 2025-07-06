#!/bin/bash

echo "Starting BottleUp User App..."

nvm use 18 || echo "⚠️ Make sure Node 18 is installed"

echo "Installing dependencies..."
npm install

echo "Starting dev server..."
npx expo start
