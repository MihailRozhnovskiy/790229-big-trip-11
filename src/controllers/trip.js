
import {Form} from "../components/site-form";
import {Day} from "../components/day-trip";
import {Point} from "../components/point-trip";
import {replaceElement} from "../utils/render";
import {render, RenderPosition} from "../utils/render";


export class TripController {
  constructor(container) {
    this._container = container;
  }

  render(tripDays) {
    const siteElement = document.querySelector(`.trip-events`);

    // DayTrip // PointTrip
    const days = [];
    const points = [];
    tripDays.forEach((item) => {
      days.push({dayCounter: item.dayCounter,
        dayDate: item.dayDate});
      points.push(item.point);
    });

    // SiteForm
    const luggage = tripDays[0].point.offer.luggage;
    const comfort = tripDays[0].point.offer.comfort;
    const meal = tripDays[0].point.offer.meal;
    const seat = tripDays[0].point.offer.seat;
    const train = tripDays[0].point.offer.train;
    const description = tripDays[0].point.description;
    const photos = tripDays[0].point.photo;
    const period = tripDays[0].point.period;

    const day = new Day(days);

    render(siteElement, day, RenderPosition.BEFOREEND);

    const PointTripListElement = day.getElement().querySelectorAll(`.trip-days__item`);

    PointTripListElement.forEach((element, index) => {
      const point = new Point([points[index]]);
      const form = new Form(luggage, comfort, meal, seat, train, description, photos, period);

      render(element, point, RenderPosition.BEFOREEND);

      const onEscKeyDown = (evt) => {
        const isEskKey = evt.key === `Escape` || evt.key === `Esc`;

        if (isEskKey) {
          replaceElement(element, point, form);
          document.removeEventListener(`keydown`, onEscKeyDown);
        }
      };

      const onEditButtonClick = () => {
        replaceElement(element, form, point);
        document.addEventListener(`keydown`, onEscKeyDown);
      };
      point.setClickHandler(onEditButtonClick);

      const onEditFormSubmit = (evt) => {
        evt.preventDefault();
        replaceElement(element, point, form);
        document.removeEventListener(`keydown`, onEscKeyDown);
      };
      form.setClickHandler(onEditFormSubmit);
    });
  }
}
