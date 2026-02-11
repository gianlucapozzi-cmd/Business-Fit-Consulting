#!/bin/bash

# Script per verificare l'installazione di Node.js e npm

echo "🔍 Verifica installazione Node.js e npm..."
echo ""

# Carica nvm se disponibile
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verifica Node.js
if command -v node &> /dev/null; then
    echo "✅ Node.js installato: $(node --version)"
    echo "   Percorso: $(which node)"
else
    echo "❌ Node.js NON installato"
    echo ""
    echo "Per installarlo, esegui:"
    echo "  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash"
    echo "  export NVM_DIR=\"\$HOME/.nvm\""
    echo "  [ -s \"\$NVM_DIR/nvm.sh\" ] && \. \"\$NVM_DIR/nvm.sh\""
    echo "  nvm install --lts"
fi

echo ""

# Verifica npm
if command -v npm &> /dev/null; then
    echo "✅ npm installato: $(npm --version)"
    echo "   Percorso: $(which npm)"
else
    echo "❌ npm NON installato"
fi

echo ""

# Verifica nvm
if [ -d "$HOME/.nvm" ]; then
    echo "✅ nvm installato in: $HOME/.nvm"
    if [ -s "$NVM_DIR/nvm.sh" ]; then
        echo "   Versione nvm: $(nvm --version 2>/dev/null || echo 'carica nvm con: source ~/.nvm/nvm.sh')"
    else
        echo "   ⚠️  nvm non caricato nella sessione corrente"
        echo "   Carica con: source ~/.nvm/nvm.sh"
    fi
else
    echo "❌ nvm NON installato"
fi

echo ""
echo "📋 Versione Node.js consigliata: v20.x LTS o superiore"
echo ""

