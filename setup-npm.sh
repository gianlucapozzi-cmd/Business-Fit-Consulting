#!/bin/bash

# Script per installare Node.js e configurare npm

echo "🔍 Verifica installazione Node.js..."

# Carica nvm se già installato
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verifica se Node.js è già disponibile
if command -v node &> /dev/null && command -v npm &> /dev/null; then
    echo "✅ Node.js già installato: $(node --version)"
    echo "✅ npm già disponibile: $(npm --version)"
    echo ""
    echo "Puoi ora usare: npm run dev"
    exit 0
fi

echo "❌ Node.js/npm non trovati"
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

# Configurazione permanente per zsh
if ! grep -q "NVM_DIR" ~/.zshrc 2>/dev/null; then
    echo "📝 Configurazione permanente per zsh..."
    echo '' >> ~/.zshrc
    echo '# Node Version Manager' >> ~/.zshrc
    echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
    echo "✅ Configurazione aggiunta a ~/.zshrc"
else
    echo "✅ Configurazione già presente in ~/.zshrc"
fi

echo ""
echo "🎉 Installazione completata!"
echo ""
echo "Ora puoi usare:"
echo "  npm run dev"
echo ""
echo "⚠️  Se apri un nuovo terminale, nvm sarà già configurato."
echo "   Per questa sessione, nvm è già caricato."

