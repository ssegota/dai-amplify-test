# --- Makefile for DAI Vite App ---
# Usage:
#   make setup       → install all dependencies
#   make backend     → run backend only
#   make frontend    → run frontend only
#   make start       → run both backend + frontend concurrently
#   make clean       → remove node_modules and build files

FRONTEND_DIR := frontend
BACKEND_DIR := backend

# Use npm as default package manager
NPM := npm

# --- Install dependencies ---
setup:
	@echo "📦 Installing backend and frontend dependencies..."
	cd $(BACKEND_DIR) && $(NPM) install
	cd $(FRONTEND_DIR) && $(NPM) install
	@echo "✅ Setup complete!"

# --- Run backend only ---
backend:
	@echo "🚀 Starting backend on port 5001..."
	cd $(BACKEND_DIR) && PORT=5001 $(NPM) run dev

# --- Run frontend only ---
frontend:
	@echo "🌐 Starting frontend on port 3000..."
	cd $(FRONTEND_DIR) && $(NPM) run dev

# --- Run both concurrently ---
start:
	@echo "🔥 Starting backend + frontend together..."
	cd $(BACKEND_DIR) && PORT=5001 $(NPM) run dev & \
	cd $(FRONTEND_DIR) && $(NPM) run dev
# --- Start Database---
db:
	brew services start postgresql@16
# --- Clean project ---
clean:
	@echo "🧹 Cleaning project..."
	rm -rf $(BACKEND_DIR)/node_modules $(FRONTEND_DIR)/node_modules
	rm -rf $(FRONTEND_DIR)/dist
	@echo "✅ Clean complete!"
