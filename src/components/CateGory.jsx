import React from 'react'
import { categories } from '../utils/content'

const CateGory = ({ selectCategory, setSelectCategory }) => {
    return (
        <div>
            {categories.map((category) => (
                <button key={category.name} onClick={() => setSelectCategory(category.name)}>
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </div>
    )
}

export default CateGory
