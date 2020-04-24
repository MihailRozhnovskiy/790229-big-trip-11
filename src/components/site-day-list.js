import {createElement} from "../utils";

const createSiteDayListTemplate = () => {
  return (
    `<ul class="trip-days">
      
    </ul>`
  );
};

export class DayList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteDayListTemplate();
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
