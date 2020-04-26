import {createElement} from "../utils";

const createSiteNoPointTemplate = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
};

export class NoPoint {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteNoPointTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
