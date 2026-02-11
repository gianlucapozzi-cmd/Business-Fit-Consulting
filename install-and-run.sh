#!/bin/bash

# Script per installare Node.js (tramite nvm) e avviare l'anteprima

cd "$(dirname "$0")"

echo "🔍 Verifica installazione Node.js..."

# Carica nvm se già installato
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verifica se Node.js è già disponibile
if command -v node &> /dev/null; then
    echo "✅ Node.js già installato: $(node --version)"
    echo "✅ npm trovato: $(npm --version)"
else
    echo "❌ Node.js non trovato"
    echo ""
    echo "📦 Installazione nvm (Node Version Manager)..."
    
    # Installa nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    
    # Carica nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    
    # Installa l'ultima versione LTS di Node.js
    echo ""
    echo "📦 Installazione Node.js LTS..."
    nvm install --lts
    nvm use --lts
    nvm alias default lts/*
    
    echo ""
    echo "✅ Node.js installato: $(node --version)"
    echo "✅ npm installato: $(npm --version)"
    echo ""
    echo "⚠️  IMPORTANTE: Aggiungi queste righe al tuo ~/.zshrc per rendere nvm permanente:"
    echo ""
    echo 'export NVM_DIR="$HOME/.nvm"'
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"'
    echo ""
fi

# Installa dipendenze se necessario
if [ ! -d "node_modules" ]; then
    echo "📦 Installazione dipendenze del progetto..."
    npm install
    echo ""
fi

# Avvia il server di sviluppo
echo "🚀 Avvio server di sviluppo..."
echo "📱 Apri http://localhost:3000 nel browser"
echo ""
npm run dev

