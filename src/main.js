
import {render, RenderPosition} from "./utils";
import {Info} from "./components/site-info";
import {Menu} from "./components/site-menu";
import {Filt} from "./components/site-filter";
import {Sorting} from "./components/site-sort";
import {Form} from "./components/site-form";
import {Day} from "./components/day-trip";
import {Point} from "./components/point-trip";
import {NoPoint} from "./components/site-no-points";

import {renderMock} from './components/mock-data.js';

const QUANTITY = 3;

const tripDays = renderMock(QUANTITY);

const siteInfoElement = document.querySelector(`.trip-main`);
const siteMenuElement = siteInfoElement.querySelector(`.trip-controls`);
const siteElement = document.querySelector(`.trip-events`);

const renderPoint = () => {

  // SiteInfo
  const dates = [];
  const cities = [];

  tripDays.forEach((item) => {
    dates.push(item.dayDate);
    cities.push(item.point.city);
  });

  const dateStart = dates[0];
  let dateEnd = dates[dates.length - 1];

  if (dates[0].substr(1, 3) === dates[dates.length - 1].substr(1, 3)) {
    dateEnd = parseInt(dates[dates.length - 1].replace(/\D+/g, ``), 10);
  }
  const routeCities = cities.join(` &mdash; `);

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

  const info = new Info(dateStart, dateEnd, routeCities);
  const sorting = new Sorting();
  const day = new Day(days);

  render(siteInfoElement, info.getElement(), RenderPosition.AFTERBEGIN);
  render(siteElement, sorting.getElement(), RenderPosition.BEFOREEND);
  render(siteElement, day.getElement(), RenderPosition.BEFOREEND);

  const PointTripListElement = day.getElement().querySelectorAll(`.trip-days__item`);

  PointTripListElement.forEach((element, index) => {
    const point = new Point([points[index]]);
    const form = new Form(luggage, comfort, meal, seat, train, description, photos);

    render(element, point.getElement(), RenderPosition.BEFOREEND);

    const editButton = point.getElement().querySelector(`.event__rollup-btn`);
    const editForm = form.getElement();

    const replaceEditToPoint = () => {
      element.replaceChild(point.getElement(), form.getElement());
    };

    const onEscKeyDown = (evt) => {
      const isEskKey = evt.key === `Escape` || evt.key === `Esc`;

      if (isEskKey) {
        replaceEditToPoint();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const onEditButtonClick = () => {
      element.replaceChild(form.getElement(), point.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    };
    editButton.addEventListener(`click`, onEditButtonClick);

    const onEditFormSubmit = (evt) => {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    };
    editForm.addEventListener(`submit`, onEditFormSubmit);
  });
};

const renderBoard = () => {

  const isTripDaysEmpty = tripDays.length === 0;
  const menu = new Menu();
  const filt = new Filt();
  const noPoint = new NoPoint();

  if (isTripDaysEmpty) {
    const info = new Info();

    render(siteInfoElement, info.getElement(), RenderPosition.AFTERBEGIN);
    render(siteMenuElement, menu.getElement(), RenderPosition.AFTERBEGIN);
    render(siteMenuElement, filt.getElement(), RenderPosition.BEFOREEND);
    render(siteElement, noPoint.getElement(), RenderPosition.BEFOREEND);
    return;
  } else {
    render(siteMenuElement, menu.getElement(), RenderPosition.AFTERBEGIN);
    render(siteMenuElement, filt.getElement(), RenderPosition.BEFOREEND);
  }
  renderPoint();
};

renderBoard();


