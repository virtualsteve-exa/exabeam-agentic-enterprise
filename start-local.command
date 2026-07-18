#!/bin/zsh

set -e
cd "${0:A:h}"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required. Install Node.js 22 or newer from https://nodejs.org/ and run this file again."
  read "reply?Press Return to close..."
  exit 1
fi

node_major="$(node -p 'process.versions.node.split(".")[0]')"
if (( node_major < 22 )); then
  echo "Node.js 22 or newer is required. Your installed version is $(node --version)."
  echo "Download the current LTS release from https://nodejs.org/ and run this file again."
  read "reply?Press Return to close..."
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "Installing site dependencies. This is only needed on the first launch..."
  npm install
fi

echo "Starting Exabeam Agentic Enterprise at http://localhost:3000/"
npm run dev -- --port 3000 --strictPort &
server_pid=$!

cleanup() {
  kill "$server_pid" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

for attempt in {1..60}; do
  if curl --silent --fail http://localhost:3000/ >/dev/null 2>&1; then
    open http://localhost:3000/
    echo "Site opened. Keep this window open; press Control-C to stop the server."
    wait "$server_pid"
    exit $?
  fi
  sleep 1
done

echo "The site did not become ready within 60 seconds. Review the messages above for details."
exit 1
