type Listener = () => void

class PageLoadController {
  private _loaded = false
  private listeners: Listener[] = []

  //call functions who subscribe on sync
  markLoaded() {
    this._loaded = true
    this.listeners.forEach(fn => fn())
  }

  reset() {
    this._loaded = false
  }

  //fn functions is waiting page load for work
  subscribe(fn: Listener) {
    this.listeners.push(fn)
  }

  unsubscribe(fn: Listener) {
    this.listeners = this.listeners.filter(f => f !== fn)
  }

  get loaded() {
    return this._loaded
  }
}

export const pageLoadController = new PageLoadController()
