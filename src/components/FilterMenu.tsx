import React from 'react'

interface FilterMenuProps {
  categories: string[]
  selectedCategory: string | null
  onCategorySelect: (category: string) => void
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="mx-2 lowercase">
      <ul className="flex flex-row flex-wrap">
        <p className="m-2 font-bold">type</p>
        {categories.map((category) => (
          <li
            className={`m-2 cursor-pointer hover:underline ${
              selectedCategory === 'all'
                ? category === 'all'
                  ? 'font-bold'
                  : ''
                : selectedCategory === category
                ? 'font-bold'
                : ''
            }`}
            key={category}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterMenu
