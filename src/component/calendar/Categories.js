import React from 'react';

import { categories } from '../../helper';

const Categories = () => {
    return (
        <div id="external-events" className="mt-3 categories">
            {categories.map(({ name, text }, index) => {
                return (
                    <div key={index} className={`external-event ${name}`}>
                        <i className="mdi mdi-checkbox-blank-circle mr-1 vertical-middle"></i>
                        {text}
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;
