import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function UpperLinks() {
  let lowerCategory;
  let spaceIncludes;
  let joinedCategory;
  let route = useLocation();

  const routeElements = route.pathname.split('/').slice(-2);
  let replaced;
  let space;

  const menuLinks = routeElements.map(link => {
    if (link.includes('_')) {
      replaced = link.replace('_', ' ');
      space = replaced.indexOf(' ');
      return (
        replaced[0].toUpperCase() +
        replaced.slice(1, space) +
        ' ' +
        replaced.slice(space + 1)[0].toUpperCase() +
        replaced.slice(space + 2).toLowerCase()
      );
    }
    return link[0].toUpperCase() + link.slice(1).toLowerCase();
  });

  return (
    <section>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        {menuLinks.map((route, i) => {
          lowerCategory = route.toLowerCase();
          spaceIncludes = lowerCategory.includes(' ');
          joinedCategory = lowerCategory.split(' ').join('_');

          return (
            <li key={i}>
              <Link
                to={
                  i !== menuLinks.length
                    ? spaceIncludes
                      ? `/menu/${joinedCategory}`
                      : `/menu/${lowerCategory}`
                    : lowerCategory
                }
                style={{ textDecoration: 'none' }}
              >
                {route.includes('_') ? route.replace('_', ' ') : route}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
