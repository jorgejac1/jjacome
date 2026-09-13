export function shouldSuppressClick(detail: number, expiresAt: number, now = Date.now()) { return detail > 0 && now < expiresAt; }
