import React, { useCallback } from 'react'
import Tree from './Tree'

const Sidebar = ({onSelected}) => {

  const handleClickTree = useCallback((ref) => onSelected(ref), [onSelected])

  return (
    <aside className="sticky top-36 md:top-20 h-max shadow p-2 rounded-lg w-48">
      <h3 className="font-bold">Categorias</h3>

      <Tree onClick={handleClickTree} />

    </aside>
  )
}

export default Sidebar