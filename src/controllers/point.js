
import {Form} from "../components/site-form";
import {Day} from "../components/day-trip";
import {Point} from "../components/point-trip";
import {replaceElement} from "../utils/render";
import {render, RenderPosition} from "../utils/render";
import {SortType} from "../components/site-sort";


export class PointController {
  constructor(container) {
    this._container = container;
  }

  render(tripDays, sortType) {
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

    const pointTripListElement = day.getElement().querySelectorAll(`.trip-days__item`);


    pointTripListElement.forEach((element, index) => {
      const dayInfo = element.querySelector(`.day__info`);
      const point = new Point([points[index]]);
      const form = new Form(luggage, comfort, meal, seat, train, description, photos, period);

      if (sortType === SortType.TIME || sortType === SortType.PRICE) {
        dayInfo.innerHTML = ``;
      }

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

      const onEditFormButton = (evt) => {
        evt.preventDefault();
        replaceElement(element, point, form);
        document.removeEventListener(`keydown`, onEscKeyDown);
      };
      form.setClickHandler(onEditFormButton);

      const onDataChange = () => {
        console.log(`STAR`);
      };
      form.setClickStarHandler(onDataChange);

    });
  }
}
