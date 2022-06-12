import { CircularProgress } from '@mui/material'
import Banner from 'components/Banner'
import FloatButton from 'components/FloatButton'
import Product from 'components/Product'
import Sidebar from 'components/Sidebar'
import { Products } from 'db/Products'
import Head from 'next/head'
import React, { useCallback, useEffect, useState } from 'react'

const Home = () => {

  const [selected, setSelected] = useState(['Todos']);
  const [products, setProducts] = useState({loading: true, data: []})

  const handleSelected = useCallback((ref) => setSelected(ref), [])

  useEffect(() => {
    const instanceProducts = new Products();

    const getProducts = async () => {

      setProducts({loading: true, data: []})

      const querys = [];

      for (let index = 0; index < 3; index++) {
        const element = selected[index];
        
        querys[index] = element ? element : '';
        
      }
      
      const isOnlyCategory = selected[0] === 'Todos';

      if (!isOnlyCategory) {
        const productsByCategory = await instanceProducts.getByCategory(...querys);
        console.log(querys, productsByCategory)
        setProducts({loading: false, data: productsByCategory});
      }
      else {
        const allProducts = await instanceProducts.getAll();
        setProducts({loading: false, data: allProducts});
      }

    }

    getProducts()

  }, [selected])

  return (
    <>
      <Head>
        <title>Romony | Shops</title>
      </Head>
      <FloatButton />
      <div>
        <Banner />
        <h2 className="text-center font-bold text-xl mt-10">Productos</h2>
        <div className="mb-10 flex gap-x-3 relative px-5">
          <Sidebar onSelected={handleSelected} />
          {
            products.loading ? (
              <div className="w-full flex justify-center mt-10">
                <CircularProgress color="inherit" />
              </div>
            ) : (
              <div className="flex-1 containerCards mt-10">
                {
                  products.data.map((products) =>  (
                    <Product {...products} key={products.id} />
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home