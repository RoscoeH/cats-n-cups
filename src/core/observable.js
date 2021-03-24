export default class Observable {
  listeners = [];

  constructor(value) {
    this.value = value;
  }

  subscribe(func) {
    this.listeners.push(func);
    return () => this.unsubscribe(func);
  }

  unsubscribe(func) {
    this.listeners = this.listeners.filter((fn) => fn !== func);
  }

  get() {
    return this.value;
  }

  set(newValue) {
    if (newValue === this.value) return;

    this.value = newValue;
    this.listeners.forEach((func) => func(this.value));
  }
}
