# UniStream 

**Real-time crypto pricing intelligence for serious DeFi traders.**  
Stream low-latency TWAP, VWAP, slippage alerts, and on-chain signals directly into your trading infrastructure — over secure WebSocket connections.


---

##  What Is UniStream?

UniStream delivers **institutional-grade market data** for decentralized finance:

- ✅ **Real-time TWAP & VWAP** over configurable windows (5m to 24h)  
- ✅ **Slippage deviation alerts** (`|Spot − TWAP| / TWAP`)  
- ✅ **MEV-risk indicators** and anomaly detection  
- ✅ **WebSocket-first architecture** with sub-500ms latency  
- ✅ Full support for **Ethereum, Arbitrum, Base**, and major Uniswap V3 pools  

Built for **trading bots, quant researchers, and DeFi power users** who demand precision, speed, and reliability.

---

## 🚀 Features

- 📊 **Time-Weighted & Volume-Weighted Averages**  
  Configurable lookback windows with exponential decay weighting.
- ⚠️ **Slippage Monitoring**  
  Real-time deviation alerts with customizable thresholds.
- 🔌 **WebSocket API**  
  Stable, reconnect-safe streams with dynamic window switching via JSON control frames.
- 🌐 **Multi-Chain Support**  
  Ethereum, Arbitrum, and Base — with new chains added monthly.
- 🌙 **Dark-Mode Optimized UI**  
  Clean, minimal dashboard built with **Next.js 15**, **Tailwind CSS**.

---

## ▶️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/unistream.git
cd unistream
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

> 💡 The frontend connects to a WebSocket backend (e.g., `wss://api.unistream.example/ws`).  
> Update the URL in `hooks/priceSocket.ts` to point to your server.

---

## 🧪 Customization

- **Update branding**: Replace logos, colors, and copy in `/components/layout`.
- **Add new pools**: Extend the WebSocket handler to support additional Uniswap pairs.
- **Enhance signals**: Plug in your own anomaly detection or sentiment models.
- **Self-host**: Deploy the backend as a Go microservice alongside this frontend.

---

## 💡 Why UniStream?

Most crypto dashboards show **lagging, aggregated prices**.  
UniStream gives you the **raw truth** — in real time — so you can:

- Avoid high-slippage executions  
- Detect MEV opportunities  
- Backtest strategies with accurate TWAP  
- Power autonomous trading agents  

This is not a “pretty chart” — it’s **trading infrastructure**.

---

## 🤝 Contributing

We welcome contributions from the DeFi and open-source communities!

1. Fork the repo  
2. Create your feature branch (`git checkout -b feat/new-pool`)  
3. Commit your changes (`git commit -m 'Add WBTC/ARB pool'`)  
4. Push to the branch (`git push origin feat/new-pool`)  
5. Open a Pull Request

Please ensure your code follows our minimal, resilient philosophy.

---

## 📄 License

MIT © [Your Name / Org]  
Use freely in personal and commercial projects.

---

> **Built with precision. Designed for restraint.**  
> — UniStream

---

Let me know if you'd like:
- A **backend architecture diagram**
- **API documentation snippet**
- **Deployment guide for WebSocket server**
- Integration with your **Disperz** branding

This README positions UniStream as a serious tool — not just another dashboard.
