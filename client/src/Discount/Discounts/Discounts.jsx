import React, {
  useState,
  useEffect,
} from 'react';

import {
  request,
} from '../../common';

import { DiscountSection } from './DiscountSection';

export const Discounts = () => {
  const [discountSections, setDiscountSections] = useState([]);

  useEffect(() => {
    const discountsPromsie = request('discount', {
      method: 'GET',
    });
    const categoriesPromsie = request('category', {
      method: 'GET',
    });

    Promise.all([categoriesPromsie, discountsPromsie])
      .then(([categories, discounts]) => {
        const discountSectionsData = categories.reduce((acc, category) => {
          return {
            ...acc,
            [category.id]: {
              title: category.displayName,
              discounts: [],
            },
          };
        }, {});

        discounts.forEach((discount) => {
          const discountSection = discountSectionsData[discount.categoryId];

          if (discountSection) {
            discountSection.discounts.push(discount);
          }
        });

        setDiscountSections(Object.values(discountSectionsData));
      })
      .catch(() => {
        alert('Что-то пошло не так. Попробуйте позже.');
      });
  }, []);

  return (
    <>
      {
        discountSections.map(discountSection => (
          <DiscountSection
            key={discountSection.id}
            title={discountSection.title}
            discounts={discountSection.discounts}
          />
        ))
      }
    </>
  );
};
