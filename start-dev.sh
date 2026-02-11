#!/bin/bash

# Script per avviare il server di sviluppo caricando nvm

cd "$(dirname "$0")"

# Carica nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Usa la versione default di Node.js
nvm use default 2>/dev/null || nvm use node 2>/dev/null

# Verifica Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js non trovato!"
    echo "Esegui: nvm install --lts"
    exit 1
fi

echo "✅ Node.js: $(node --version)"
echo "✅ npm: $(npm --version)"
echo ""

# Installa dipendenze se necessario
if [ ! -d "node_modules" ]; then
    echo "📦 Installazione dipendenze..."
    npm install
    echo ""
fi

# Avvia il server di sviluppo
echo "🚀 Avvio server di sviluppo..."
echo "📱 Apri http://localhost:3000 nel browser"
echo ""
npm run dev
