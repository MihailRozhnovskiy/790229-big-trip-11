
import {render, RenderPosition} from "./utils";
import {Info} from "./components/site-info";
import {Menu} from "./components/site-menu";
import {Filt} from "./components/site-filter";
import {Sorting} from "./components/site-sort";
import {Form} from "./components/site-form";
import {Day} from "./components/day-trip";
import {Point} from "./components/point-trip";

import {renderMock} from './components/mock-data.js';

const tripDays = renderMock();

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

// SiteForm
const luggage = tripDays[0].point.offer.luggage;
const comfort = tripDays[0].point.offer.comfort;
const meal = tripDays[0].point.offer.meal;
const seat = tripDays[0].point.offer.seat;
const train = tripDays[0].point.offer.train;
const description = tripDays[0].point.description;
const photos = tripDays[0].point.photo;

// DayTrip // PointTrip
const days = [];
const points = [];
tripDays.forEach((item) => {
  days.push({dayCounter: item.dayCounter,
    dayDate: item.dayDate});
  points.push(item.point);
});

const siteInfoElement = document.querySelector(`.trip-main`);
const siteMenuElement = siteInfoElement.querySelector(`.trip-controls`);
const siteElement = document.querySelector(`.trip-events`);

const info = new Info(dateStart, dateEnd, routeCities);
const menu = new Menu();
const filt = new Filt();
const sorting = new Sorting();
// const form = new Form(luggage, comfort, meal, seat, train, description, photos);
const day = new Day(days);

render(siteInfoElement, info.getElement(), RenderPosition.AFTERBEGIN);
render(siteMenuElement, menu.getElement(), RenderPosition.AFTERBEGIN);
render(siteMenuElement, filt.getElement(), RenderPosition.BEFOREEND);
render(siteElement, sorting.getElement(), RenderPosition.BEFOREEND);
// render(siteElement, form.getElement(), RenderPosition.BEFOREEND);
render(siteElement, day.getElement(), RenderPosition.BEFOREEND);

const PointTripListElement = siteElement.querySelectorAll(`.trip-days__item`);

PointTripListElement.forEach((element, index) => {
  const point = new Point([points[index]]);
  const form = new Form(luggage, comfort, meal, seat, train, description, photos);

  render(element, point.getElement(), RenderPosition.BEFOREEND);
  render(siteElement, form.getElement(), RenderPosition.BEFOREEND);


  const editButton = point.getElement().querySelector(`.event__rollup-btn`);
  const editForm = form.getElement().querySelector(`form`);


  const onEditButtonClick = () => {
    siteElement.replaceChild(form.getElement(), point.getElement());
  };
  editButton.addEventListener(`click`, onEditButtonClick);

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    siteElement.replaceChild(point.getElement(), form.getElement());
  };
  editForm.addEventListener(`submit`, onEditFormSubmit);
});
