// Service worker disabled for self-hosted instance (causes CSP errors with external 37signals assets)
// import { Turbo } from "@hotwired/turbo-rails"
//
// if (Current.user) {
//   Turbo.offline.start("/service-worker.js", {
//     scope: "/",
//     native: true,
//     preload: /\/assets\//
//   })
// }
