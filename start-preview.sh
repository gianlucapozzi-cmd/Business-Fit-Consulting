#!/bin/bash

# Script per avviare l'anteprima della landing page

cd "$(dirname "$0")"

# Carica nvm se disponibile
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verifica Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js non trovato!"
    echo ""
    echo "Installa Node.js da: https://nodejs.org/"
    echo "Oppure usa nvm:"
    echo "  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    exit 1
fi

echo "✅ Node.js trovato: $(node --version)"
echo "✅ npm trovato: $(npm --version)"
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

