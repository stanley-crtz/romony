import { collection, getDocs, query, where } from '@firebase/firestore';
import { InitFirebase } from './InitFirebase';

export class Products extends InitFirebase {
    constructor(props) {
        super(props);

        this.instance = collection(this.database, 'products');
    }

    getAll = async () => {
        const docs = await (await getDocs(this.instance)).docs;
        const products = []
        docs.forEach((el) => products.push({...el.data(), id: el.id}))

        return products
    }

    getByCategory = async (categories = '', subCategories = '', subSubCategories = '') => {

        const querys = [where('categories', 'array-contains-any', [categories])];

        if (subCategories && subCategories !== 'Todos') {
            querys.push(where('subCategory', '==', subCategories));

            if (subSubCategories && subSubCategories !== 'Todos') {
                querys.push(where('subSubCategory', '==', subSubCategories));
            }
        }

        const filter = query(
            this.instance, 
            ...querys
        )
        
        const docs = await (await getDocs(filter)).docs;
        const products = []
        docs.forEach((el) => products.push({...el.data(), id: el.id}))

        return products
    }

}