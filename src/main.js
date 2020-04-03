
import {createSiteInfoTemplate} from './components/site-info.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSiteFilterTemplate} from './components/site-filter.js';
import {createSiteSortTemplate} from './components/site-sort.js';
import {createSiteFormTemplate} from './components/site-form.js';
import {createSiteDayTripTemplate} from './components/day-trip.js';
import {createSitePointTripTemplate} from './components/point-trip.js';

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteInfoElement = document.querySelector(`.trip-main`);
const siteMenuElement = siteInfoElement.querySelector(`.trip-controls`);
const siteElement = document.querySelector(`.trip-events`);

render(siteInfoElement, createSiteInfoTemplate(), `afterbegin`);
render(siteMenuElement, createSiteMenuTemplate(), `afterbegin`);
render(siteMenuElement, createSiteFilterTemplate(), `beforeend`);
render(siteElement, createSiteSortTemplate(), `beforeend`);
render(siteElement, createSiteFormTemplate(), `beforeend`);
render(siteElement, createSiteDayTripTemplate(), `beforeend`);

const sitePointTripElement = siteElement.querySelector(`.trip-events__list`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(sitePointTripElement, createSitePointTripTemplate(), `beforeend`);
}

