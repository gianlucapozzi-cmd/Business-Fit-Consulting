# Setup e Avvio Anteprima Landing Page

## 🚀 Installazione Rapida

Esegui questo comando nel terminale:

```bash
./install-and-run.sh
```

Lo script:
1. Installerà nvm (Node Version Manager) se non presente
2. Installerà Node.js LTS (Long Term Support)
3. Installerà le dipendenze del progetto
4. Avvierà il server di sviluppo

## 📝 Configurazione Permanente

Dopo la prima installazione, aggiungi queste righe al tuo `~/.zshrc` per rendere nvm disponibile in tutte le sessioni:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Poi ricarica la configurazione:
```bash
source ~/.zshrc
```

## 🎯 Comandi Manuali

Se preferisci installare manualmente:

### 1. Installa nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### 2. Carica nvm nella sessione corrente
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

### 3. Installa Node.js LTS
```bash
nvm install --lts
nvm use --lts
```

### 4. Installa dipendenze e avvia
```bash
npm install
npm run dev
```

## 🌐 Anteprima

Dopo l'avvio, apri nel browser:
**http://localhost:3000**

## 📦 Alternative

Se preferisci installare Node.js senza nvm:
- Scarica da: https://nodejs.org/
- Oppure usa Homebrew: `brew install node`

