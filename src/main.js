
import {render, RenderPosition} from "./utils/render";
import {Info} from "./components/site-info";
import {Menu} from "./components/site-menu";
import {Filt} from "./components/site-filter";
import {NoPoint} from "./components/site-no-points";
import {TripController} from "./controllers/trip.js";

import {renderMock} from './components/mock-data.js';

const QUANTITY = 3;

const tripDays = renderMock(QUANTITY);

const renderPoint = new TripController();

const renderBoard = () => {
  const siteInfoElement = document.querySelector(`.trip-main`);
  const siteMenuElement = siteInfoElement.querySelector(`.trip-controls`);
  const siteElement = document.querySelector(`.trip-events`);

  const isTripDaysEmpty = tripDays.length === 0;
  const menu = new Menu();
  const filt = new Filt();
  const noPoint = new NoPoint();

  if (isTripDaysEmpty) {
    const info = new Info();

    render(siteInfoElement, info, RenderPosition.AFTERBEGIN);
    render(siteMenuElement, menu, RenderPosition.AFTERBEGIN);
    render(siteMenuElement, filt, RenderPosition.BEFOREEND);
    render(siteElement, noPoint, RenderPosition.BEFOREEND);
    return;
  }
  render(siteMenuElement, menu, RenderPosition.AFTERBEGIN);
  render(siteMenuElement, filt, RenderPosition.BEFOREEND);

  renderPoint.render(tripDays);
};

renderBoard();


