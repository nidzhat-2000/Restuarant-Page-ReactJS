import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function UpperLinks() {
  const route = useLocation();
  const routeElements = route.pathname.split('/').slice(-2);

  const menuLinks = routeElements.map(link => {
    if (link.includes('_')) {
      let replaced = link.replace('_', ' ');
      let space = replaced.indexOf(' ');
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
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Home /
          </Link>
        </li>
        {menuLinks.map((route, i) => {
          let lowerCategory = route.toLowerCase();
          let spaceIncludes = lowerCategory.includes(' ');
          let joinedCategory = lowerCategory.split(' ').join('_');

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
                disabled={i == menuLinks.length}
                style={{ textDecoration: 'none' }}
              >
                {route.includes('_')
                  ? route.replace('_', ' ') + ' / '
                  : route + ' / '}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
