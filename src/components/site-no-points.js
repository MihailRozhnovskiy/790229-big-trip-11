
import {AbstractComponent} from "./abstract-component.js";

const createSiteNoPointTemplate = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
};

export class NoPoint extends AbstractComponent {
  getTemplate() {
    return createSiteNoPointTemplate();
  }
}
