
import {render, RenderPosition} from "./utils/render";
import {Info} from "./components/site-info";
import {Menu} from "./components/site-menu";
import {Filt} from "./components/site-filter";
import {Sorting, SortType} from "./components/site-sort";
import {NoPoint} from "./components/site-no-points";
// import {TripController} from "./controllers/trip";
import {PointController} from "./controllers/point";

import {renderMock} from './components/mock-data';

const QUANTITY = 3;
const tripDays = renderMock(QUANTITY);
const isTripDaysEmpty = tripDays.length === 0;

const renderPoint = new PointController();

const renderBoard = () => {
  const siteInfoElement = document.querySelector(`.trip-main`);
  const siteMenuElement = siteInfoElement.querySelector(`.trip-controls`);
  const siteSortingElement = document.querySelector(`.trip-events`);

  const menu = new Menu();
  const filt = new Filt();
  const sorting = new Sorting();
  const noPoint = new NoPoint();
  let info = new Info();

  if (isTripDaysEmpty) {
    render(siteInfoElement, info, RenderPosition.AFTERBEGIN);
    render(siteMenuElement, menu, RenderPosition.AFTERBEGIN);
    render(siteMenuElement, filt, RenderPosition.BEFOREEND);
    render(siteSortingElement, noPoint, RenderPosition.BEFOREEND);
    return;
  }

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

  info = new Info(dateStart, dateEnd, routeCities);

  render(siteInfoElement, info, RenderPosition.AFTERBEGIN);
  render(siteMenuElement, menu, RenderPosition.AFTERBEGIN);
  render(siteMenuElement, filt, RenderPosition.BEFOREEND);
  render(siteSortingElement, sorting, RenderPosition.BEFOREEND);

  renderPoint.render(tripDays);


  const getSortPoints = (days, sortType) => {
    let sortedPoints = [];
    const showingPoints = days.slice();

    switch (sortType) {
      case SortType.PRICE:
        sortedPoints = showingPoints.sort((a, b) => b.point.price - a.point.price);
        break;
      case SortType.TIME:
        sortedPoints = showingPoints.sort((a, b) => b.point.period - a.point.period);
        break;
      case SortType.DEFAULT:
        sortedPoints = showingPoints;
        break;
    }
    return sortedPoints;
  };

  const onSortPointClick = (evt) => {

    const tripDaysElement = document.querySelector(`.trip-days`);

    tripDaysElement.remove();

    evt.preventDefault();
    if (evt.target.tagName !== `INPUT`) {
      return;
    }
    const sortType = evt.target.dataset.sortType;

    renderPoint.render(getSortPoints(tripDays, sortType), sortType);
  };
  sorting.setSortTypePointHandler(onSortPointClick);
};

renderBoard();
