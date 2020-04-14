
import {createSiteInfoTemplate} from './components/site-info.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSiteFilterTemplate} from './components/site-filter.js';
import {createSiteSortTemplate} from './components/site-sort.js';
import {createSiteFormTemplate} from './components/site-form.js';
import {createSiteDayTripTemplate} from './components/day-trip.js';
import {createSitePointTripTemplate} from './components/point-trip.js';


import {renderMock} from './components/mock-data.js';

const tripDays = renderMock();

// SiteInfo
const dates = [];
const cities = [];

tripDays.forEach((it) => {
  dates.push(it.dayDate);
  cities.push(it.point.city);
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
tripDays.forEach((it) => {
  days.push({dayCounter: it.dayCounter,
    dayDate: it.dayDate});
  points.push(it.point);
});

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteInfoElement = document.querySelector(`.trip-main`);
const siteMenuElement = siteInfoElement.querySelector(`.trip-controls`);
const siteElement = document.querySelector(`.trip-events`);

render(siteInfoElement, createSiteInfoTemplate(dateStart, dateEnd, routeCities), `afterbegin`);
render(siteMenuElement, createSiteMenuTemplate(), `afterbegin`);
render(siteMenuElement, createSiteFilterTemplate(), `beforeend`);
render(siteElement, createSiteSortTemplate(), `beforeend`);
render(siteElement, createSiteFormTemplate(luggage, comfort, meal, seat, train, description, photos), `beforeend`);
render(siteElement, createSiteDayTripTemplate(days), `beforeend`);

const sitePointTripElements = siteElement.querySelectorAll(`.trip-days__item`);

sitePointTripElements.forEach((it) => {
  render(it, createSitePointTripTemplate(points), `beforeend`);
});

