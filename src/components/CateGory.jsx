import React from 'react'
import { categories } from '../utils/content'

const CateGory = ({ selectCategory, setSelectCategory }) => {
    return (
        <div>
            {categories.map((category) => (
                <button
                    style={{ background: category.name === selectCategory ? '#1c1c1c' : 'transparent', opacity: category.name === selectCategory ? '1' : null }}
                    key={category.name}
                    onClick={() => setSelectCategory(category.name)}
                >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </div>
    )
}

export default CateGory
