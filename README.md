# LifeGuard AI Backend (prototype)

This is a small Node.js HTTP backend foundation. It intentionally does not collect,
store, or transmit personal information and does not place emergency calls.

## Requirements
- Node.js 20 or newer

## Run locally
```bash
npm start
```

The server listens on port 3000 by default.

## Check health
Open `http://localhost:3000/health` or `http://localhost:3000/api/status`.
Expected response includes `"status":"ok"`.

## API
- `GET /health` — service health
- `GET /api/status` — prototype status
- Other paths return JSON 404
- Other HTTP methods return JSON 405

## Safety and production notes
- The frontend's emergency button should continue to open the phone dialer for the user
  to confirm; this backend does not call emergency services.
- Do not add medical diagnosis, automatic dispatch, or location tracking without a
  professionally reviewed design, explicit consent, and appropriate legal safeguards.
- Before public deployment, add HTTPS through the hosting platform, monitoring,
  rate limiting, dependency/security review, and a documented privacy policy.
- This prototype has no database, authentication, or user accounts by design.
